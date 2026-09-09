# 15 — Definition of Done

Mind As OS v1 is not done because documents exist. It is done when the architecture is demonstrably executable.

## Required gates
- [ ] 16 Build Truth files present and internally consistent
- [ ] typed signal/event/state/packet/capability/proof contracts
- [ ] reference coordinator implements lifecycle state machine
- [ ] least-privilege capability guard
- [ ] bounded failure/retry model
- [ ] organ adapter interfaces
- [ ] verification gate prevents unproved closure
- [ ] event trace can reconstruct one run
- [ ] unit tests cover happy path and denied capability path
- [ ] CI runs lint/typecheck/test/build
- [ ] estate integration docs map all canonical organs
- [ ] no credentials or secrets committed
- [ ] SECA/DevOS review completed
- [ ] Medusa public/private review completed for deployment
- [ ] ProofGrid receipt generated from a live end-to-end demo

## Golden demonstration
Operator issues a bounded objective. The system:
1. creates a trace;
2. normalizes the signal;
3. constructs context;
4. emits a candidate plan;
5. receives executive approval;
6. creates one or more packets;
7. enforces capability scope;
8. executes a deterministic demo adapter;
9. verifies the result;
10. emits a proof receipt;
11. commits allowed state;
12. renders the complete trace.

## Promotion rule
Until the golden demonstration passes, status remains `seed` or `experimental`, never `production`.