import assert from 'node:assert/strict';
import test from 'node:test';

import {
  evaluateRainbowBody,
  modeAllowsMutation,
  transitionODDEC,
} from './cognitive.js';

test('Rainbow Body requires balanced channels rather than one maximized channel', () => {
  assert.equal(
    evaluateRainbowBody({ presence: 62, pattern: 68, expression: 65 }).coherent,
    true,
  );

  const imbalanced = evaluateRainbowBody({ presence: 100, pattern: 20, expression: 20 });
  assert.equal(imbalanced.coherent, false);
  assert.equal(imbalanced.reason, 'channels are imbalanced');
});

test('ODDEC allows deliberate disengagement as a successful path', () => {
  assert.equal(transitionODDEC('observe', 'disengage'), 'disengage');
  assert.equal(transitionODDEC('disengage', 'complete'), 'complete');
});

test('ODDEC prevents skipping directly from observation to creation', () => {
  assert.throws(() => transitionODDEC('observe', 'create'));
});

test('only Creator mode may cross the cognitive mutation boundary', () => {
  assert.equal(modeAllowsMutation('observer'), false);
  assert.equal(modeAllowsMutation('cartographer'), false);
  assert.equal(modeAllowsMutation('architect'), false);
  assert.equal(modeAllowsMutation('creator'), true);
});
