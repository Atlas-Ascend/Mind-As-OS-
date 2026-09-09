export type TriMode = 'observer' | 'cartographer' | 'architect' | 'creator';
export type ODDECPhase = 'observe' | 'design' | 'disengage' | 'create' | 'complete';
export type SevenState =
  | 'stillpoint'
  | 'clarity'
  | 'coherence'
  | 'intention'
  | 'flow'
  | 'transcendence'
  | 'mastery';

export interface CoherenceChannels {
  presence: number;
  pattern: number;
  expression: number;
}

export interface CognitiveState {
  traceId: string;
  mode: TriMode;
  oddecPhase: ODDECPhase;
  sevenState: SevenState;
  coherence: CoherenceChannels;
  identityState?: string;
  symbolRefs: string[];
  memoryRefs: string[];
  provenanceRefs: string[];
  observedAt: string;
}

export interface RainbowBodyResult {
  coherent: boolean;
  spread: number;
  mean: number;
  reason: string;
}

export function evaluateRainbowBody(
  channels: CoherenceChannels,
  coherenceBand = 15,
  minimumMean = 35,
): RainbowBodyResult {
  const values = [channels.presence, channels.pattern, channels.expression];
  for (const value of values) {
    if (!Number.isFinite(value) || value < 0 || value > 100) {
      throw new RangeError('Rainbow Body channels must be finite values from 0 to 100');
    }
  }

  const min = Math.min(...values);
  const max = Math.max(...values);
  const spread = max - min;
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  const coherent = spread <= coherenceBand && mean >= minimumMean;

  return {
    coherent,
    spread,
    mean,
    reason: coherent
      ? 'presence, pattern and expression are inside the coherence band'
      : spread > coherenceBand
        ? 'channels are imbalanced'
        : 'channels are balanced but not sufficiently established',
  };
}

const allowedTransitions: Record<ODDECPhase, ODDECPhase[]> = {
  observe: ['design', 'disengage'],
  design: ['observe', 'disengage', 'create'],
  disengage: ['complete', 'observe'],
  create: ['complete'],
  complete: [],
};

export function transitionODDEC(current: ODDECPhase, next: ODDECPhase): ODDECPhase {
  if (!allowedTransitions[current].includes(next)) {
    throw new Error(`Invalid ODDEC transition: ${current} -> ${next}`);
  }
  return next;
}

export function modeAllowsMutation(mode: TriMode): boolean {
  return mode === 'creator';
}

export function modeDescription(mode: TriMode): string {
  switch (mode) {
    case 'observer':
      return 'inspect and gather evidence without mutation';
    case 'cartographer':
      return 'map relationships and topology without mutation';
    case 'architect':
      return 'model, simulate and author plans without mutation';
    case 'creator':
      return 'request or perform an explicitly authorized transformation';
  }
}
