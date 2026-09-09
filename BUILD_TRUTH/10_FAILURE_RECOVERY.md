# 10 — Failure and Recovery

## Failure classes
- invalid_input
- missing_context
- policy_denied
- capability_unavailable
- dependency_failed
- timeout
- transient_external
- deterministic_defect
- verification_failed
- security_quarantine
- evidence_incomplete
- state_conflict
- unknown

## Recovery ladder
1. retry only if class is retryable
2. bounded alternate route
3. repair packet to MetaForge/DevOS when software defect exists
4. context repair to Thoth/Atlas Mind when information is missing
5. security review to Medusa when quarantined
6. human escalation when authority or ambiguity cannot be resolved
7. fail closed when safety or proof requirements remain unsatisfied

## Retry policy
Retries are bounded, backoff-aware, idempotency-aware, and recorded as new attempts under the same causal trace.

## Self-heal boundary
Self-healing means detecting a known failure, routing a bounded repair, verifying it, and promoting only after evidence. It does not mean unrestricted self-modification.

## Proof criterion
Every failure event has a machine-readable class, retryability flag, and next route.