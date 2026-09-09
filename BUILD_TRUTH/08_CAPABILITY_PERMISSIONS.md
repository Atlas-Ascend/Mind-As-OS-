# 08 — Capability and Permission Model

## Capability principle
Tools are not globally available. They are capabilities with explicit scope.

## Capability descriptor
- capability_id
- provider
- actions[]
- resource_scope
- data_classification
- write_level
- destructive
- network_required
- human_confirmation_policy
- rate_limits
- audit_requirements
- expiration

## Write levels
0. observe
1. propose
2. create_non_destructive
3. modify_reversible
4. destructive_or_irreversible

## Default policy
Least privilege. Deny by default for unknown capability/action combinations.

## High-risk rule
Destructive, irreversible, credential, security, financial, medical, legal, or physical-world actuator actions require stricter policy and may require explicit human authorization.

## CrownGrid handoff
CrownGrid resolves capability descriptors into runtime adapters while preserving the logical permission envelope.

## Proof criterion
The runtime refuses a packet whose requested capability exceeds the packet authority or descriptor scope.