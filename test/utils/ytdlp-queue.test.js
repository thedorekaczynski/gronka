import { test, describe } from 'node:test';
import assert from 'node:assert';
import { runInYtdlpSlot, getYtdlpQueueStats } from '../../src/utils/ytdlp-queue.js';

// A deferred promise plus its resolver, so a test can hold a "download" open until it chooses.
function deferred() {
  let resolve;
  const promise = new Promise(function promiseExecutor(r) {
    resolve = r;
  });
  return { promise, resolve };
}

describe('ytdlp-queue concurrency slot', function describeYtdlpQueueConcurrencySlot() {
  test('never runs more than the max (2) concurrently, and queues the rest', async function testNeverRunsMoreThanTheMax() {
    const max = getYtdlpQueueStats().max;
    assert.strictEqual(max, 2, 'test assumes a cap of 2');

    let running = 0;
    let peak = 0;
    const gates = [deferred(), deferred(), deferred(), deferred()];
    const started = [false, false, false, false];

    const tasks = gates.map(function mapGate(gate, i) {
      return runInYtdlpSlot(async function runInYtdlpSlotCallback() {
        started[i] = true;
        running++;
        peak = Math.max(peak, running);
        await gate.promise;
        running--;
      });
    });

    // Let the microtask queue settle: exactly `max` tasks should have started, rest queued.
    await new Promise(function promiseExecutor(r) {
      return setTimeout(r, 10);
    });
    assert.deepStrictEqual(started, [true, true, false, false], 'only 2 start, 2 queued');
    assert.strictEqual(getYtdlpQueueStats().active, 2);

    // Release the first; the third should take its freed slot.
    gates[0].resolve();
    await new Promise(function promiseExecutor(r) {
      return setTimeout(r, 10);
    });
    assert.strictEqual(started[2], true, 'third starts once a slot frees');
    assert.strictEqual(started[3], false, 'fourth still waits');

    // Drain everything.
    gates[1].resolve();
    gates[2].resolve();
    gates[3].resolve();
    await Promise.all(tasks);

    assert.strictEqual(peak, 2, 'concurrency never exceeded the cap');
    assert.strictEqual(getYtdlpQueueStats().active, 0, 'all slots released');
    assert.strictEqual(getYtdlpQueueStats().queued, 0);
  });

  test('releases the slot even when the task throws', async function testReleasesTheSlotEvenWhenThe() {
    await assert.rejects(
      runInYtdlpSlot(async function runInYtdlpSlotCallback() {
        throw new Error('boom');
      }),
      /boom/
    );
    assert.strictEqual(getYtdlpQueueStats().active, 0, 'a throwing task must not leak its slot');
  });

  test('returns the task result', async function testReturnsTheTaskResult() {
    const result = await runInYtdlpSlot(async function runInYtdlpSlotCallback() {
      return 42;
    });
    assert.strictEqual(result, 42);
  });
});
