# 06 — Event and Packet Model

## Event envelope
Every meaningful transition emits an event with:
- event_id
- trace_id
- causation_id
- correlation_id
- event_type
- source_organ
- target_organ (optional)
- occurred_at
- payload
- policy_labels
- evidence_refs

## Packet OS work packet
A packet is the smallest governed unit of requested execution.

Required fields:
- packet_id
- trace_id
- objective
- inputs
- expected_outputs
- constraints
- required_capabilities
- authority
- risk_class
- dependencies
- verification_plan
- proof_class
- timeout
- retry_policy
- failure_route

## Packet statuses
queued → accepted → running → blocked | failed | verification_pending → verified → proved → closed

## Idempotency
Packet execution must support an idempotency key when the downstream operation can safely honor one.

## Proof criterion
A packet can be serialized, validated, replayed in dry-run mode, and associated with a complete event sequence.