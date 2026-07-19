import { test, describe, before } from 'node:test';
import assert from 'node:assert';
import { EventEmitter } from 'events';
import { initDatabase, getLogs } from '../src/utils/database.js';
import { handleSseConnection } from '../src/webui-server/sse/handlers.js';

before(async function setupAll() {
  await initDatabase();
});

function fakeReqRes() {
  const req = new EventEmitter();
  const res = new EventEmitter();
  res.writeHead = function anonymousFn() {};
  res.flushHeaders = function anonymousFn() {};
  res.write = function anonymousFn() {};
  res.writableEnded = false;
  res.destroyed = false;
  return { req, res };
}

// insertLog is fired without awaiting in the req.on('error', ...) handler, so give it a moment
// to land before querying.
function waitForLogWrite() {
  return new Promise(function promiseExecutor(resolve) {
    return setTimeout(resolve, 200);
  });
}

describe('SSE connection error logging', function describeSSEConnectionErrorLogging() {
  test('benign disconnect codes (ECONNRESET) do not create an ERROR log row', async function testBenignDisconnectCodesECONNRESETDoNot() {
    const { req, res } = fakeReqRes();
    const clients = new Set();
    const startTime = Date.now();

    await handleSseConnection(req, res, clients);

    const error = new Error('socket hang up');
    error.code = 'ECONNRESET';
    req.emit('error', error);

    await waitForLogWrite();

    const rows = await getLogs({
      component: 'webui',
      level: 'ERROR',
      search: 'SSE connection',
      startTime,
    });
    assert.strictEqual(rows.length, 0, 'ECONNRESET should not be logged at ERROR level');
    assert.ok(!clients.has(res), 'client should be removed from the set on error');
  });

  test('EPIPE and ECONNABORTED are also treated as benign disconnects', async function testEPIPEAndECONNABORTEDAreAlsoTreated() {
    for (const code of ['EPIPE', 'ECONNABORTED']) {
      const { req, res } = fakeReqRes();
      const clients = new Set();
      const startTime = Date.now();

      await handleSseConnection(req, res, clients);

      const error = new Error(`fake ${code}`);
      error.code = code;
      req.emit('error', error);

      await waitForLogWrite();

      const rows = await getLogs({
        component: 'webui',
        level: 'ERROR',
        search: 'SSE connection',
        startTime,
      });
      assert.strictEqual(rows.length, 0, `${code} should not be logged at ERROR level`);
    }
  });

  test('an unexpected error code is still logged at ERROR level', async function testAnUnexpectedErrorCodeIsStill() {
    const { req, res } = fakeReqRes();
    const clients = new Set();
    const startTime = Date.now();

    await handleSseConnection(req, res, clients);

    const error = new Error('something genuinely unexpected');
    error.code = 'EWEIRD';
    req.emit('error', error);

    await waitForLogWrite();

    const rows = await getLogs({
      component: 'webui',
      level: 'ERROR',
      search: 'SSE connection',
      startTime,
    });
    assert.strictEqual(rows.length, 1, 'unrecognized error codes should still be logged at ERROR');
    assert.ok(!clients.has(res));
  });
});
