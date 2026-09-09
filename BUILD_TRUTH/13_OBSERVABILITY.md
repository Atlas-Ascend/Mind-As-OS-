# 13 — Observability

## Required telemetry
- structured events
- traces
- packet state transitions
- organ handoffs
- capability calls
- latency
- token/model usage when applicable
- retries
- failures
- verification outcomes
- proof receipts
- state mutations

## Trace identity
One operator request creates a trace_id. Derived packets/events keep the trace_id and add causation/correlation relationships.

## Command-center views
1. current objective
2. active packets
3. organ ownership
4. blockers/failures
5. capability usage
6. verification status
7. proof status
8. committed state changes

## Logging rule
Observability must not leak secrets. Sensitive payloads should be redacted or represented by references.

## Proof criterion
Given a trace_id, an operator can reconstruct the ordered lifecycle without inspecting raw application internals.