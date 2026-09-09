# 05 — State and Memory

## State classes
- ephemeral: request-scoped scratch state
- session: conversation/run state
- operational: active packets, jobs, capabilities, environment
- durable: promoted memory, canonical facts, decisions
- archival: sealed evidence and historical state

## Memory rules
1. Retrieval is not mutation.
2. Proposed memory is not durable memory.
3. Durable memory requires provenance and promotion policy.
4. Conflicting memories remain distinguishable until reconciled.
5. Sensitive state carries handling labels.
6. Deletion, redaction, and retention follow policy rather than model preference.

## Thoth handoff
Mind As OS requests memory through a typed query and receives provenance-bearing records. State updates are proposed as mutations, independently reviewed when required, then committed.

## Minimal record
- id
- namespace
- kind
- value or reference
- source
- created_at
- observed_at
- confidence
- sensitivity
- supersedes[]
- evidence_refs[]

## Proof criterion
No durable state object can be created by the reference interfaces without source/provenance metadata.