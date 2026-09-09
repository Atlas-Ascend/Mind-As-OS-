# Source Precedence and Conflict Resolution

## Evidence classes

1. **Explicit canonical Build Truth / authority contract** — strongest architectural declaration.
2. **Canonical correction / lineage / supersession record** — strongest identity and migration evidence.
3. **Executable implementation + tests** — strongest behavior evidence, but implementation may be scoped to one product surface.
4. **Stable design specification repeated across canonical surfaces** — strong design evidence.
5. **Archive/export/chat/screenshot/historical note** — lineage evidence; not automatically current implementation truth.
6. **Inference** — must be labeled hypothesis and cannot settle canon.

## Conflict algorithm

1. Preserve every materially different definition as a source claim.
2. Determine whether claims describe different eras, roles, scopes or implementations.
3. Prefer explicit canon status over chronology alone.
4. Apply GARI supersession law: a newer implementation may supersede an older one only with old identity, new identity, reason, compatibility, migration note and proof reference.
5. If two roles can coexist, classify `MULTI_ROLE_SPLIT` rather than forcing a false winner.
6. If evidence is insufficient, classify `UNRESOLVED_LINEAGE`.
7. Never promote user-supplied mnemonic/metaphorical semantics into executable authority without a contract.

## Promotion gate

Every canonical-current registry entry requires at least one source, a bounded role, a discipline/layer, authority semantics, and an explicit conflict disposition.