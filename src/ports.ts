import type { CapabilityDescriptor, ExecutiveDecision, MindEvent, ProofReceipt, Signal, VerificationResult, WorkPacket } from './domain.js';

export interface EventBus {
  append(event: MindEvent): Promise<void>;
  list(traceId: string): Promise<MindEvent[]>;
}

export interface ExecutiveRouter {
  decide(signal: Signal): Promise<ExecutiveDecision>;
}

export interface Packetizer {
  create(signal: Signal, decision: ExecutiveDecision): Promise<WorkPacket[]>;
}

export interface CapabilityRegistry {
  get(capabilityId: string): Promise<CapabilityDescriptor | undefined>;
}

export interface Executor {
  execute(packet: WorkPacket): Promise<Record<string, unknown>>;
}

export interface Verifier {
  verify(packet: WorkPacket, result: Record<string, unknown>): Promise<VerificationResult>;
}

export interface ProofEmitter {
  emit(packet: WorkPacket, results: VerificationResult[]): Promise<ProofReceipt>;
}
