import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLineageRecord, canGrantMachineAuthority, HEP_TRUTH_LAW, needsFurtherLineage, type CanonLineageRecord } from './genealogy.js';

test('HEP truth law preserves mention/implementation boundary', () => {
  assert.ok(HEP_TRUTH_LAW.includes('MENTION != IMPLEMENTATION'));
});

test('unresolved historical organ cannot grant machine authority', () => {
  const record: CanonLineageRecord = { id:'orpheus', name:'Orpheus', status:'UNRESOLVED_LINEAGE', disciplines:['01','02'], role:'historical_hep_claim', authority:'none' };
  assert.equal(canGrantMachineAuthority(record), false);
  assert.equal(needsFurtherLineage(record), true);
  assert.doesNotThrow(() => assertLineageRecord(record));
});

test('fail closed if unresolved lineage is assigned executable authority', () => {
  const record: CanonLineageRecord = { id:'bad', name:'Bad Recovery', status:'UNRESOLVED_LINEAGE', disciplines:['02'], role:'unknown', authority:'machine_write' };
  assert.throws(() => assertLineageRecord(record));
});

test('Rainbow Body telemetry does not imply machine authority', () => {
  const record: CanonLineageRecord = { id:'rainbow-body', name:'Rainbow Body', status:'CANONICAL_CURRENT', disciplines:['02','05'], role:'integrated_coherence', authority:'telemetry_only' };
  assert.equal(canGrantMachineAuthority(record), false);
});
