# 11 — Security and Medusa Gate

## Security objectives
- protect secrets and credentials
- preserve public/private boundaries
- prevent capability escalation
- constrain untrusted inputs
- retain auditability
- minimize exposed data

## Data labels
public | internal | confidential | restricted | secret_reference_only

Secrets are referenced, not embedded in packets, logs, prompts, or proof receipts.

## Medusa gates
- input trust classification
- tool/capability risk review
- data egress review
- publication review
- secret scanning
- dependency/supply-chain findings handoff

## Injection boundary
External content is data, not authority. Prompt-like instructions from retrieved content cannot grant permissions or override system governance.

## Proof criterion
A publication packet containing restricted data is denied or redacted before public-output routing.