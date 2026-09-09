import { randomUUID } from 'node:crypto';
import { assertCapabilityAllowed } from './capability-guard.js';
import type { CapabilityDescriptor, MindEvent, ProofReceipt, Signal } from './domain.js';
import type { EventBus, ExecutiveRouter, Executor, Packetizer, ProofEmitter, Verifier } from './ports.js';

export interface MindRuntimeDeps {
  events: EventBus;
  executive: ExecutiveRouter;
  packetizer: Packetizer;
  executor: Executor;
  verifier: Verifier;
  proof: ProofEmitter;
  capabilities: CapabilityDescriptor[];
}

export class MindRuntime {
  constructor(private readonly deps: MindRuntimeDeps) {}

  async run(signal: Signal): Promise<{ traceId: string; receipts: ProofReceipt[] }> {
    const traceId = randomUUID();
    await this.emit(traceId, 'signal.observed', 'intake', { signalId: signal.signalId });

    const decision = await this.deps.executive.decide(signal);
    await this.emit(traceId, 'executive.decided', 'janus', { decisionId: decision.decisionId, outcome: decision.outcome });

    if (decision.outcome !== 'approve' && decision.outcome !== 'approve_with_constraints') {
      await this.emit(traceId, 'trace.closed', 'runtime', { outcome: decision.outcome });
      return { traceId, receipts: [] };
    }

    const packets = await this.deps.packetizer.create(signal, decision);
    const receipts: ProofReceipt[] = [];

    for (const originalPacket of packets) {
      const packet = { ...originalPacket, traceId };
      await this.emit(traceId, 'packet.created', 'packet-os', { packetId: packet.packetId });
      assertCapabilityAllowed(packet, this.deps.capabilities);
      const result = await this.deps.executor.execute(packet);
      await this.emit(traceId, 'packet.executed', 'executor', { packetId: packet.packetId });
      const verification = await this.deps.verifier.verify(packet, result);
      await this.emit(traceId, 'verification.completed', 'seca-devos', { packetId: packet.packetId, passed: verification.passed });
      if (!verification.passed) throw new Error(`Verification failed for packet ${packet.packetId}`);
      const receipt = await this.deps.proof.emit(packet, [verification]);
      receipts.push(receipt);
      await this.emit(traceId, 'proof.emitted', 'proofgrid', { packetId: packet.packetId, receiptId: receipt.receiptId, proofClass: receipt.proofClass });
    }

    await this.emit(traceId, 'trace.closed', 'runtime', { outcome: 'complete', receipts: receipts.length });
    return { traceId, receipts };
  }

  private async emit(traceId: string, eventType: string, sourceOrgan: string, payload: Record<string, unknown>): Promise<void> {
    const event: MindEvent = {
      eventId: randomUUID(),
      traceId,
      eventType,
      sourceOrgan,
      occurredAt: new Date().toISOString(),
      payload,
      evidenceRefs: []
    };
    await this.deps.events.append(event);
  }
}
