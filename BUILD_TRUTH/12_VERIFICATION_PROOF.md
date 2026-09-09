# 12 — Verification and Proof

## Verification is a separate stage
Generation produces a candidate result. Verification determines whether the result satisfies acceptance criteria. Proof records what happened.

## Verification classes
- schema
- unit
- integration
- build
- lint/typecheck
- policy
- security
- runtime smoke
- artifact existence
- human acceptance

## Proof classes
P0: assertion only — not promotable
P1: artifact reference
P2: machine check/result
P3: independent verifier result
P4: end-to-end runtime evidence
P5: sealed external/production evidence

A requested proof class may not be silently downgraded.

## Proof receipt
- receipt_id
- trace_id
- packet_id
- artifact_refs[]
- verification_results[]
- proof_class
- issued_at
- issuer
- hashes/identifiers where available
- limitations[]

## Proof criterion
No packet reaches `closed` without a proof receipt satisfying its declared proof class.