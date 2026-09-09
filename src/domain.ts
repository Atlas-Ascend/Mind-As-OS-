export type ProofClass = 'P0' | 'P1' | 'P2' | 'P3' | 'P4' | 'P5';
export type WriteLevel = 0 | 1 | 2 | 3 | 4;

export interface Signal {
  signalId: string;
  source: string;
  observedAt: string;
  kind: string;
  payload: Record<string, unknown>;
  sensitivity: 'public' | 'internal' | 'confidential' | 'restricted';
}

export interface MindEvent {
  eventId: string;
  traceId: string;
  eventType: string;
  sourceOrgan: string;
  targetOrgan?: string;
  occurredAt: string;
  payload: Record<string, unknown>;
  evidenceRefs: string[];
}

export interface CapabilityDescriptor {
  capabilityId: string;
  provider: string;
  actions: string[];
  writeLevel: WriteLevel;
  destructive: boolean;
  resourceScope: string[];
}

export interface WorkPacket {
  packetId: string;
  traceId: string;
  objective: string;
  requiredCapabilities: string[];
  requestedWriteLevel: WriteLevel;
  proofClass: ProofClass;
  failureRoute: string;
}

export interface ExecutiveDecision {
  decisionId: string;
  outcome: 'approve' | 'approve_with_constraints' | 'request_human_authorization' | 'defer' | 'reroute' | 'reject' | 'quarantine';
  authorityRef: string;
  constraints: string[];
}

export interface VerificationResult {
  verifier: string;
  passed: boolean;
  checks: string[];
  evidenceRefs: string[];
}

export interface ProofReceipt {
  receiptId: string;
  traceId: string;
  packetId: string;
  proofClass: ProofClass;
  verificationResults: VerificationResult[];
  evidenceRefs: string[];
  issuedAt: string;
  limitations: string[];
}
