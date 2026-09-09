# 09 — Agent and Organ Contracts

## Contract rule
Every organ/agent declares what it accepts, what it returns, what it may mutate, what authority it requires, and where failures go.

## Canonical organs

### Atlas Mind
Accepts: bounded context + cognitive request.
Returns: hypotheses, candidate plans, structured reasoning products.
May not: execute privileged actions by inference alone.

### JANUS / ODIN
Accepts: objectives, candidates, policy context.
Returns: executive decisions and routes.
May mutate: routing state only within authority.

### Packet OS
Accepts: approved objectives.
Returns: atomic work packets and lifecycle state.

### Workforce Spine
Accepts: packets.
Returns: assignments, progress, results, worker evidence.

### MetaForge
Accepts: bounded build packets.
Returns: source artifacts, diffs, tests, build evidence.

### Thoth
Accepts: retrieval/mutation requests.
Returns: provenance-bearing memory/state records.

### CrownGrid
Accepts: capability requests.
Returns: adapter resolution and execution handles.

### SECA / DevOS
Accepts: artifacts/results + acceptance criteria.
Returns: verification decisions, defects, finish truth.

### Medusa
Accepts: data/action/publication surfaces.
Returns: security/privacy classifications and gate decisions.

### ProofGrid
Accepts: evidence bundle.
Returns: proof receipt/reference.

### GARI
Accepts: resident continuity work.
Returns: monitored progress, escalations, bounded recurring execution.

## Proof criterion
Each production adapter implements an explicit contract version and rejects incompatible major versions.