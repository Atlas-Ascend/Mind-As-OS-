# 14 — Deployment and Estate Integration

## Runtime targets
Mind As OS is deployment-neutral. Expected adapters include:
- local EDEN / workstation runtime
- JANUS/ODIN phone command surfaces
- Render web/private/background services
- Vercel public UI surfaces
- Neon state/event storage
- GitHub build/source surfaces
- future hardware/robotic nodes through governed capability adapters

## Reference topology
Phone/Browser → API ingress → Mind As OS coordinator → JANUS executive → Packet OS → Workforce/MetaForge/Capabilities → SECA/DevOS/Medusa → ProofGrid → Thoth/state store → event stream/UI.

## Integration rule
Adapters translate protocols; they do not redefine governance.

## Configuration
- environment-specific config outside code
- secrets via platform secret stores
- capability registry injected at runtime
- model registry injected at runtime
- event/store adapters swappable

## Proof criterion
The reference implementation starts with an in-memory adapter and can be replaced by external adapters without changing core domain types.