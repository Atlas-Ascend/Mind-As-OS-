# 03 — Architecture

## Layers

### L0 — Signal Plane
User commands, sensors, files, messages, runtime events, timers, webhooks.

### L1 — Perception / Intake
Normalizes raw inputs into typed signals with source, timestamp, confidence, and sensitivity labels.

### L2 — Context Plane
Builds the bounded context window from current state, Thoth memory, policies, active packets, capabilities, and environment.

### L3 — Cognitive Plane
Atlas Mind and approved models produce hypotheses, plans, explanations, and candidate actions. Cognitive output is advisory until promoted by executive policy.

### L4 — Executive Plane
JANUS/ODIN evaluate intent, authority, risk, priorities, dependencies, and routing.

### L5 — Work Plane
Packet OS expresses executable work as atomic packets. Workforce Spine coordinates workers. MetaForge handles build work.

### L6 — Capability Plane
CrownGrid binds logical actions to concrete tools, APIs, local hardware, cloud services, repositories, databases, and future embodied actuators.

### L7 — Verification Plane
SECA/DevOS inspect result correctness, completion, quality, and finish truth. Medusa inspects security/public-private constraints.

### L8 — Evidence Plane
ProofGrid emits immutable or append-only receipts that identify inputs, actions, outputs, verification results, and state transitions.

### L9 — Memory / Learning Plane
Thoth stores promoted state and durable knowledge with provenance. Reflection may propose changes but cannot bypass governance.

## Architecture rule
No layer may assume the privileges of a later layer. Reasoning is not execution; execution is not verification; verification is not evidence retention.

## Proof criterion
A trace viewer can show the lifecycle of one command across all touched layers.