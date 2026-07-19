import { test, describe, before, after } from 'node:test';
import assert from 'node:assert';
import express from 'express';
import { initDatabase, getOperationTrace, searchOperations } from '../src/utils/database.js';
import {
  createOperation,
  updateOperationStatus,
  flushAllOperationLogs,
} from '../src/utils/operations-tracker.js';

let testServer;
let testApp;
let serverPort;

// Import webui-server endpoints (we'll create a minimal test server)
// Since webui-server.js exports the app, we need to test the endpoints directly
// We'll create a test server that mimics the operations endpoints

before(async function setupAll() {
  await initDatabase();
  // Do NOT truncate tables here: test files run as parallel processes against the
  // same database, so truncating wipes other files' data mid-run and causes flaky
  // failures. All assertions in this file are scoped to unique operation IDs, and
  // the pretest hook (scripts/test-db-reset.js) resets the schema before each run.

  // Create test Express app with operations endpoints
  testApp = express();
  testApp.use(express.json());

  // Helper to reconstruct operation from trace
  function reconstructOperationFromTrace(trace) {
    if (!trace || !trace.logs || trace.logs.length === 0) {
      return null;
    }

    const createdLog = trace.logs.find(function findLog(log) {
      return log.step === 'created';
    });
    if (!createdLog) return null;

    const context = trace.context || {};
    const latestStatusLog =
      trace.logs
        .filter(function filterLog(log) {
          return log.step === 'status_update';
        })
        .sort(function compareItems(a, b) {
          return b.timestamp - a.timestamp;
        })[0] || createdLog;

    const errorLog = trace.logs.find(function findLog(log) {
      return log.step === 'error';
    });
    const latestTimestamp = Math.max(
      ...trace.logs.map(function mapLog(log) {
        return log.timestamp;
      })
    );

    return {
      id: trace.operationId,
      type: context.operationType || 'operation',
      status: latestStatusLog.status || 'pending',
      userId: context.userId || null,
      username: context.username || null,
      fileSize: null,
      timestamp: latestTimestamp,
      startTime: createdLog.timestamp,
      error: errorLog ? errorLog.message : null,
      stackTrace: errorLog ? errorLog.stackTrace : null,
      filePaths: [],
      performanceMetrics: {
        duration: null,
        steps: [],
      },
    };
  }

  // Operation details endpoint
  testApp.get(
    '/api/operations/:operationId',
    async function handleGetApiOperationsByOperationId(req, res) {
      try {
        const { operationId } = req.params;

        const { getOperation } = await import('../src/utils/operations-tracker.js');
        let operation = getOperation(operationId);

        if (!operation) {
          const trace = await getOperationTrace(operationId);
          if (trace) {
            operation = reconstructOperationFromTrace(trace);
          }
        }

        const trace = await getOperationTrace(operationId);

        if (!operation && !trace) {
          return res.status(404).json({ error: 'operation not found' });
        }

        res.json({
          operation: operation || null,
          trace: trace || null,
        });
      } catch (error) {
        res.status(500).json({
          error: 'failed to fetch operation details',
          message: error.message,
        });
      }
    }
  );

  // Operation trace endpoint
  testApp.get(
    '/api/operations/:operationId/trace',
    async function handleGetApiOperationsByOperationId(req, res) {
      try {
        const { operationId } = req.params;
        const trace = await getOperationTrace(operationId);

        if (!trace) {
          return res.status(404).json({ error: 'operation trace not found' });
        }

        res.json({ trace });
      } catch (error) {
        res.status(500).json({
          error: 'failed to fetch operation trace',
          message: error.message,
        });
      }
    }
  );

  // Start test server
  await new Promise(function promiseExecutor(resolve) {
    testServer = testApp.listen(0, function listenCallback() {
      serverPort = testServer.address().port;
      resolve();
    });
  });
});

after(async function teardownAll() {
  // Flush any pending operation logs before ending
  await flushAllOperationLogs();

  if (testServer) {
    testServer.close();
  }
  // Don't close database here - it's shared across parallel test files
  // Connection will be cleaned up when Node.js exits
});

describe('operations API', function describeOperationsAPI() {
  describe('GET /api/operations/:operationId', function describeGETApiOperationsOperationId() {
    test('returns operation details', async function testReturnsOperationDetails() {
      const opId = createOperation('convert', 'user1', 'User1');
      updateOperationStatus(opId, 'success', { fileSize: 1024 });

      // Flush operation logs to ensure they're written to database
      await flushAllOperationLogs();

      const response = await fetch(`http://localhost:${serverPort}/api/operations/${opId}`);
      const data = await response.json();

      assert.strictEqual(response.status, 200);
      assert.ok(data.operation || data.trace);
      if (data.operation) {
        assert.strictEqual(data.operation.id, opId);
      }
    });

    test('returns 404 for non-existent operation', async function testReturns404ForNonExistentOperation() {
      const response = await fetch(`http://localhost:${serverPort}/api/operations/non-existent-id`);
      const data = await response.json();

      assert.strictEqual(response.status, 404);
      assert.strictEqual(data.error, 'operation not found');
    });

    test('returns operation with trace', async function testReturnsOperationWithTrace() {
      const opId = createOperation('convert', 'user1', 'User1');
      updateOperationStatus(opId, 'success');

      // Flush operation logs to ensure they're written to database
      await flushAllOperationLogs();

      const response = await fetch(`http://localhost:${serverPort}/api/operations/${opId}`);
      const data = await response.json();

      assert.strictEqual(response.status, 200);
      // May have operation, trace, or both
      assert.ok(data.operation || data.trace);
    });
  });

  describe('GET /api/operations/:operationId/trace', function describeGETApiOperationsOperationIdTrace() {
    test('returns operation trace', async function testReturnsOperationTrace() {
      const opId = createOperation('convert', 'user1', 'User1');
      updateOperationStatus(opId, 'success');

      // Flush operation logs to ensure they're written to database
      await flushAllOperationLogs();

      const response = await fetch(`http://localhost:${serverPort}/api/operations/${opId}/trace`);
      const data = await response.json();

      assert.strictEqual(response.status, 200);
      assert.ok(data.trace);
      assert.strictEqual(data.trace.operationId, opId);
    });

    test('returns 404 for non-existent trace', async function testReturns404ForNonExistentTrace() {
      const response = await fetch(
        `http://localhost:${serverPort}/api/operations/non-existent-id/trace`
      );
      const data = await response.json();

      assert.strictEqual(response.status, 404);
      assert.strictEqual(data.error, 'operation trace not found');
    });
  });

  // Exercises the SQL search that backs GET /api/requests
  describe('searchOperations (SQL search behind /api/requests)', function describeSearchOperationsSQLSearchBehindApiRequests() {
    test('finds an operation by exact operationId', async function testFindsAnOperationByExactOperationId() {
      const opId = createOperation('convert', 'user1', 'User1');
      updateOperationStatus(opId, 'success');
      await flushAllOperationLogs();

      const { operations, total } = await searchOperations({ operationId: opId });

      assert.strictEqual(total, 1);
      assert.strictEqual(operations.length, 1);
      assert.strictEqual(operations[0].id, opId);
    });

    test('filters by urlPattern (case-insensitive substring on originalUrl)', async function testFiltersByUrlPatternCaseInsensitiveSubstring() {
      const marker = `urlsearch-${Date.now()}`;
      const url = `https://example.com/${marker}/video.mp4`;
      const opMatch = createOperation('download', 'user1', 'User1', { originalUrl: url });
      const _opOther = createOperation('download', 'user2', 'User2', {
        originalUrl: 'https://example.com/other.mp4',
      });
      updateOperationStatus(opMatch, 'success');
      await flushAllOperationLogs();

      const { operations, total } = await searchOperations({
        urlPattern: marker.toUpperCase(),
      });

      assert.strictEqual(total, 1);
      assert.strictEqual(operations[0].id, opMatch);
    });

    test('sorts oldest-first when requested', async function testSortsOldestFirstWhenRequested() {
      const userId = `sortuser-${Date.now()}`;
      const first = createOperation('convert', userId, 'SortUser');
      await new Promise(function promiseExecutor(resolve) {
        return setTimeout(resolve, 5);
      });
      const second = createOperation('convert', userId, 'SortUser');
      await flushAllOperationLogs();

      const newest = await searchOperations({ userId }, { sort: 'newest' });
      const oldest = await searchOperations({ userId }, { sort: 'oldest' });

      assert.strictEqual(newest.operations[0].id, second);
      assert.strictEqual(oldest.operations[0].id, first);
    });

    test('sorts by duration with unfinished operations last', async function testSortsByDurationWithUnfinishedOperations() {
      const userId = `durationuser-${Date.now()}`;
      const fast = createOperation('convert', userId, 'DurationUser');
      updateOperationStatus(fast, 'success');
      await new Promise(function promiseExecutor(resolve) {
        return setTimeout(resolve, 25);
      });
      const slow = createOperation('convert', userId, 'DurationUser');
      await new Promise(function promiseExecutor(resolve) {
        return setTimeout(resolve, 50);
      });
      updateOperationStatus(slow, 'success');
      const unfinished = createOperation('convert', userId, 'DurationUser');
      await flushAllOperationLogs();

      const { operations } = await searchOperations({ userId }, { sort: 'slowest' });

      assert.strictEqual(operations.length, 3);
      assert.strictEqual(operations[0].id, slow);
      assert.strictEqual(operations[1].id, fast);
      assert.strictEqual(operations[2].id, unfinished);
    });

    test('falls back to newest-first for unknown sort values', async function testFallsBackToNewestFirstFor() {
      const userId = `fallbackuser-${Date.now()}`;
      const first = createOperation('convert', userId, 'FallbackUser');
      await new Promise(function promiseExecutor(resolve) {
        return setTimeout(resolve, 5);
      });
      const second = createOperation('convert', userId, 'FallbackUser');
      await flushAllOperationLogs();

      const { operations } = await searchOperations(
        { userId },
        { sort: 'DROP TABLE operation_logs' }
      );

      assert.strictEqual(operations[0].id, second);
      assert.strictEqual(operations[1].id, first);
    });

    test('applies pagination with accurate total', async function testAppliesPaginationWithAccurateTotal() {
      const userId = `pageuser-${Date.now()}`;
      for (let i = 0; i < 5; i++) {
        createOperation('convert', userId, 'PageUser');
      }
      await flushAllOperationLogs();

      const page1 = await searchOperations({ userId }, { limit: 2, offset: 0 });
      const page2 = await searchOperations({ userId }, { limit: 2, offset: 2 });

      assert.strictEqual(page1.total, 5);
      assert.strictEqual(page1.operations.length, 2);
      assert.strictEqual(page2.operations.length, 2);
      const ids1 = new Set(
        page1.operations.map(function mapOp(op) {
          return op.id;
        })
      );
      page2.operations.forEach(function forEachOp(op) {
        return assert.ok(!ids1.has(op.id));
      });
    });
  });
});
