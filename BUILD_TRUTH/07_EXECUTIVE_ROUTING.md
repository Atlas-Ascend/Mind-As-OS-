# 07 — Executive Routing

## Executive role
JANUS/ODIN are the decision and routing layer between cognition and action.

## Decision inputs
- interpreted objective
- operator authority
- current state
- risk class
- sensitivity
- available capabilities
- dependencies
- active policies
- cost/latency constraints
- verification requirements

## Decision outputs
- approve
- approve_with_constraints
- request_human_authorization
- defer
- reroute
- reject
- quarantine

## Routing priorities
1. safety and policy
2. explicit operator constraints
3. correctness
4. preservation of existing systems
5. evidence quality
6. latency
7. cost

## No self-promotion
A cognitive component may recommend a route but cannot grant itself a capability or expand its own authority.

## Proof criterion
Every executable packet includes the executive decision reference that authorized its creation or promotion.