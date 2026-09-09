# Tri-Mode + ODDEC Runtime

## Tri-Mode answers: what authority class is active?
- Observer: read/inspect
- Architect: model/simulate/plan
- Creator: request/perform authorized mutation

## ODDEC answers: where are we in the action transaction?
1. Observe — gather sufficient evidence.
2. Design — produce a candidate plan.
3. (Dis)Engage — commit to action, defer, or deliberately choose no action.
4. Create — execute only the authorized transformation.

`(Dis)Engage` is a first-class abort/no-change success path.

Every completed loop should emit a THOTH-compatible receipt recording observations, design, decision, authorization, world diff/result and limitations.