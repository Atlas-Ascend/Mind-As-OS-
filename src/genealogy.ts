export type CanonStatus =
  | 'CANONICAL_CURRENT'
  | 'CANONICAL_HISTORICAL'
  | 'SUPERSEDED_COMPATIBLE'
  | 'MULTI_ROLE_SPLIT'
  | 'CANON_CANDIDATE'
  | 'UNRESOLVED_LINEAGE'
  | 'ARCHIVED_REFERENCE';

export type Discipline = '01' | '02' | '03' | '04' | '05';

export interface CanonLineageRecord {
  id: string;
  name: string;
  status: CanonStatus;
  disciplines: Discipline[];
  role: string;
  authority: string;
  aliases?: string[];
  sources?: string[];
  conflicts?: string[];
}

export const HEP_TRUTH_LAW = [
  'MENTION != IMPLEMENTATION',
  'DESIGN != RUNTIME',
  'HISTORICAL_PROOF != CURRENT_PROOF',
  'LEGACY_DONOR != CANONICAL_AUTHORITY',
  'ALIAS != DISTINCT_SYSTEM'
] as const;

export function canGrantMachineAuthority(record: CanonLineageRecord): boolean {
  return !['none','telemetry_only','advisory_only','advisory_read','advisory_state','advisory_posture','research_model','classification'].includes(record.authority);
}

export function needsFurtherLineage(record: CanonLineageRecord): boolean {
  return record.status === 'UNRESOLVED_LINEAGE' || record.status === 'CANON_CANDIDATE' || record.status === 'MULTI_ROLE_SPLIT';
}

export function assertLineageRecord(record: CanonLineageRecord): void {
  if (!record.id || !record.name || !record.role || !record.authority) throw new Error('lineage record missing identity/role/authority');
  if (record.disciplines.length === 0) throw new Error('lineage record must have a discipline');
  if (record.status === 'UNRESOLVED_LINEAGE' && canGrantMachineAuthority(record)) throw new Error('unresolved lineage cannot grant machine authority');
}
