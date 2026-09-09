import test from 'node:test';
import assert from 'node:assert/strict';
import { assertCapabilityAllowed, CapabilityDeniedError } from './capability-guard.js';
import type { CapabilityDescriptor, WorkPacket } from './domain.js';

const readCapability: CapabilityDescriptor = {
  capabilityId: 'repo.read',
  provider: 'github',
  actions: ['read'],
  writeLevel: 0,
  destructive: false,
  resourceScope: ['Atlas-Ascend/*']
};

const packet: WorkPacket = {
  packetId: 'p1',
  traceId: 't1',
  objective: 'inspect repo',
  requiredCapabilities: ['repo.read'],
  requestedWriteLevel: 0,
  proofClass: 'P2',
  failureRoute: 'janus'
};

test('allows declared capability within scope level', () => {
  assert.doesNotThrow(() => assertCapabilityAllowed(packet, [readCapability]));
});

test('denies unknown capability', () => {
  assert.throws(() => assertCapabilityAllowed({ ...packet, requiredCapabilities: ['repo.admin'] }, [readCapability]), CapabilityDeniedError);
});
