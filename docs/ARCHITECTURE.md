# Mind As OS — Software Design

## Design principle
Treat cognition as an event-sourced control system with explicit separation between interpretation, executive authority, execution, verification, evidence, and durable state.

## Core domain objects
- `Signal`
- `ContextSnapshot`
- `CognitiveCandidate`
- `ExecutiveDecision`
- `WorkPacket`
- `CapabilityDescriptor`
- `ExecutionResult`
- `VerificationResult`
- `ProofReceipt`
- `StateMutation`
- `MindEvent`

## Core services
- SignalNormalizer
- ContextAssembler
- CognitionAdapter
- ExecutiveRouter
- Packetizer
- CapabilityGuard
- ExecutorAdapter
- Verifier
- ProofEmitter
- StateStore
- EventBus

## State machine
```text
IDLE
  ↓
OBSERVING
  ↓
CONTEXTUALIZING
  ↓
REASONING
  ↓
DECIDING
  ├── DENIED → COMPLETE
  ├── BLOCKED → BLOCKED
  ↓
PACKETIZING
  ↓
EXECUTING
  ├── FAILED → RECOVERY | COMPLETE
  ↓
VERIFYING
  ├── FAILED → REPAIR | COMPLETE
  ↓
PROVING
  ↓
COMMITTING
  ↓
COMPLETE
```

## Event sourcing
Events are the audit history. State snapshots are derived conveniences and may be rebuilt from events where adapters support that model.

## Dependency direction
Core domain types depend on nothing external. Runtime ports depend on domain types. Adapters depend on ports. Platform integrations depend on adapters, never the reverse.

## Safety architecture
The CapabilityGuard sits between executive approval and executor invocation. Verification and proof are post-execution promotion gates, not optional logging utilities.