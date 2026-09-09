# 04 — Cognitive Runtime

## Runtime cycle
1. ingest signal
2. normalize signal
3. assemble context
4. load relevant state
5. produce cognitive candidates
6. evaluate candidates against executive policy
7. create packets for approved work
8. route packets
9. collect results
10. verify results
11. emit proof receipt
12. commit approved state changes
13. schedule/refuse/fail/retry/complete

## Cognitive states
- idle
- observing
- contextualizing
- reasoning
- deciding
- packetizing
- executing
- verifying
- proving
- committing
- blocked
- failed
- complete

## Required runtime properties
- deterministic identifiers for traces and packets
- idempotency key support
- bounded retries
- cancellation
- explicit timeouts
- structured errors
- human escalation
- append-only event history

## Model neutrality
The runtime may use local or remote models. Model selection is a CrownGrid/Atlas Mind concern, not a hard-coded property of Mind As OS.

## Proof criterion
The reference runtime can accept one signal and emit a deterministic sequence of typed lifecycle events without invoking any external model.