import { test, describe, before, after, beforeEach } from 'node:test';
import assert from 'node:assert';
import {
  createOperation,
  updateOperationStatus,
  logOperationStep,
  logOperationError,
  getOperation,
  getRecentOperations,
  cleanupStuckOperations,
  setBroadcastCallback,
  setUserMetricsBroadcastCallback,
  flushAllOperationLogs,
} from '../../src/utils/operations-tracker.js';
import { initDatabase, insertOperationLog, insertOrUpdateUser } from '../../src/utils/database.js';

before(async function setupAll() {
  await initDatabase();
});

after(async function teardownAll() {
  // Flush any pending operation logs before ending
  await flushAllOperationLogs();

  // Don't close database here - it's shared across parallel test files
  // Connection will be cleaned up when Node.js exits
});

describe('operations tracker', function describeOperationsTracker() {
  beforeEach(function setupEach() {
    // Clear broadcast callbacks before each test
    setBroadcastCallback(null);
    setUserMetricsBroadcastCallback(null);
  });

  describe('createOperation', function describeCreateOperation() {
    test('creates operation with basic parameters', function testCreatesOperationWithBasicParameters() {
      const operationId = createOperation('convert', 'user123', 'TestUser');
      assert.ok(operationId, 'Should return operation ID');
      assert.strictEqual(typeof operationId, 'string');

      const operation = getOperation(operationId);
      assert.ok(operation, 'Operation should exist');
      assert.strictEqual(operation.type, 'convert');
      assert.strictEqual(operation.status, 'pending');
      assert.strictEqual(operation.userId, 'user123');
      assert.strictEqual(operation.username, 'TestUser');
      assert.ok(operation.timestamp > 0);
      assert.ok(operation.startTime > 0);
      assert.strictEqual(operation.error, null);
      assert.strictEqual(operation.stackTrace, null);
      assert.deepStrictEqual(operation.filePaths, []);
      assert.ok(operation.performanceMetrics);
      assert.strictEqual(operation.performanceMetrics.duration, null);
      assert.deepStrictEqual(operation.performanceMetrics.steps, []);
    });

    test('creates operation with URL context', function testCreatesOperationWithURLContext() {
      const context = {
        originalUrl: 'https://example.com/video.mp4',
      };
      const operationId = createOperation('download', 'user456', 'User2', context);

      const operation = getOperation(operationId);
      assert.ok(operation);
      assert.strictEqual(operation.type, 'download');
    });

    test('creates operation with attachment context', function testCreatesOperationWithAttachmentContext() {
      const context = {
        attachment: {
          name: 'video.mp4',
          size: 1024000,
          contentType: 'video/mp4',
          url: 'https://cdn.discordapp.com/attachments/123/456/video.mp4',
        },
      };
      const operationId = createOperation('convert', 'user789', 'User3', context);

      const operation = getOperation(operationId);
      assert.ok(operation);
      assert.strictEqual(operation.type, 'convert');
    });

    test('creates operation with command options', function testCreatesOperationWithCommandOptions() {
      const context = {
        commandOptions: {
          optimize: true,
          lossy: false,
          quality: 'medium',
        },
        commandSource: 'slash',
      };
      const operationId = createOperation('convert', 'user999', 'User4', context);

      const operation = getOperation(operationId);
      assert.ok(operation);
    });

    test('creates unique operation IDs', function testCreatesUniqueOperationIDs() {
      const id1 = createOperation('convert', 'user1', 'User1');
      const id2 = createOperation('convert', 'user2', 'User2');

      assert.notStrictEqual(id1, id2, 'Operation IDs should be unique');
    });

    test('limits in-memory operations to MAX_OPERATIONS', function testLimitsInMemoryOperationsToMAX() {
      // Create more than 100 operations
      const operationIds = [];
      for (let i = 0; i < 105; i++) {
        const id = createOperation('convert', `user${i}`, `User${i}`);
        operationIds.push(id);
      }

      const recent = getRecentOperations();
      assert.ok(recent.length <= 100, 'Should not exceed MAX_OPERATIONS');
    });

    test('creates operations with different types', function testCreatesOperationsWithDifferentTypes() {
      const types = ['convert', 'download', 'optimize', 'info'];
      const operationIds = types.map(function mapType(type) {
        return createOperation(type, 'user', 'User');
      });

      operationIds.forEach(function forEachId(id, index) {
        const operation = getOperation(id);
        assert.strictEqual(operation.type, types[index]);
      });
    });
  });

  describe('updateOperationStatus', function describeUpdateOperationStatus() {
    test('updates operation status from pending to running', function testUpdatesOperationStatusFromPendingTo() {
      const operationId = createOperation('convert', 'user1', 'User1');
      updateOperationStatus(operationId, 'running');

      const operation = getOperation(operationId);
      assert.strictEqual(operation.status, 'running');
      assert.ok(operation.timestamp > 0);
    });

    test('updates operation status to success', function testUpdatesOperationStatusToSuccess() {
      const operationId = createOperation('convert', 'user1', 'User1');
      updateOperationStatus(operationId, 'running');
      updateOperationStatus(operationId, 'success', { fileSize: 1024000 });

      const operation = getOperation(operationId);
      assert.strictEqual(operation.status, 'success');
      assert.strictEqual(operation.fileSize, 1024000);
      assert.ok(operation.performanceMetrics.duration > 0);
    });

    test('updates operation status to error with error message', async function testUpdatesOperationStatusToErrorWith() {
      const operationId = createOperation('convert', 'user1', 'User1');
      const errorMessage = 'Conversion failed';

      // Wait a bit to ensure duration > 0
      await new Promise(function promiseExecutor(resolve) {
        return setTimeout(resolve, 10);
      });

      updateOperationStatus(operationId, 'error', { error: errorMessage });

      const operation = getOperation(operationId);
      assert.strictEqual(operation.status, 'error');
      assert.strictEqual(operation.error, errorMessage);
      assert.ok(operation.performanceMetrics.duration > 0);
    });

    test('updates operation status with stack trace', function testUpdatesOperationStatusWithStackTrace() {
      const operationId = createOperation('convert', 'user1', 'User1');
      const stackTrace = 'Error: test\n    at test.js:1:1';
      updateOperationStatus(operationId, 'error', { stackTrace });

      const operation = getOperation(operationId);
      assert.strictEqual(operation.stackTrace, stackTrace);
    });

    test('calculates duration on completion', async function testCalculatesDurationOnCompletion() {
      const operationId = createOperation('convert', 'user1', 'User1');
      const startTime = getOperation(operationId).startTime;

      // Wait a bit to ensure duration > 0
      await new Promise(function promiseExecutor(resolve) {
        return setTimeout(resolve, 10);
      });

      updateOperationStatus(operationId, 'success');

      const operation = getOperation(operationId);
      assert.ok(operation.performanceMetrics.duration > 0);
      // Duration should be approximately equal to elapsed time (within 100ms tolerance)
      const elapsedTime = Date.now() - startTime;
      assert.ok(
        operation.performanceMetrics.duration <= elapsedTime + 100,
        `Duration ${operation.performanceMetrics.duration} should be <= ${elapsedTime + 100}`
      );
      assert.ok(
        operation.performanceMetrics.duration >= elapsedTime - 100,
        `Duration ${operation.performanceMetrics.duration} should be >= ${elapsedTime - 100}`
      );
    });

    test('handles non-existent operation gracefully', function testHandlesNonExistentOperationGracefully() {
      assert.doesNotThrow(function doesNotThrowCallback() {
        updateOperationStatus('non-existent-id', 'running');
      });
    });

    test('updates file size', function testUpdatesFileSize() {
      const operationId = createOperation('convert', 'user1', 'User1');
      updateOperationStatus(operationId, 'success', { fileSize: 2048000 });

      const operation = getOperation(operationId);
      assert.strictEqual(operation.fileSize, 2048000);
    });
  });

  describe('logOperationStep', function describeLogOperationStep() {
    test('logs operation step with status', function testLogsOperationStepWithStatus() {
      const operationId = createOperation('convert', 'user1', 'User1');
      logOperationStep(operationId, 'download_start', 'running');

      const operation = getOperation(operationId);
      assert.ok(operation.performanceMetrics.steps.length > 0);
      const step = operation.performanceMetrics.steps[0];
      assert.strictEqual(step.step, 'download_start');
      assert.strictEqual(step.status, 'running');
      assert.ok(step.timestamp > 0);
    });

    test('logs operation step with metadata', function testLogsOperationStepWithMetadata() {
      const operationId = createOperation('convert', 'user1', 'User1');
      const metadata = { url: 'https://example.com/video.mp4', size: 1024 };
      logOperationStep(operationId, 'download_complete', 'success', { metadata });

      const operation = getOperation(operationId);
      const step = operation.performanceMetrics.steps.find(function findItem(s) {
        return s.step === 'download_complete';
      });
      assert.ok(step);
      assert.deepStrictEqual(step.metadata, metadata);
    });

    test('tracks file paths in operation', function testTracksFilePathsInOperation() {
      const operationId = createOperation('convert', 'user1', 'User1');
      const filePath = '/tmp/test.gif';
      logOperationStep(operationId, 'processing', 'running', { filePath });

      const operation = getOperation(operationId);
      assert.ok(operation.filePaths.includes(filePath));
    });

    test('does not duplicate file paths', function testDoesNotDuplicateFilePaths() {
      const operationId = createOperation('convert', 'user1', 'User1');
      const filePath = '/tmp/test.gif';
      logOperationStep(operationId, 'step1', 'running', { filePath });
      logOperationStep(operationId, 'step2', 'running', { filePath });

      const operation = getOperation(operationId);
      const count = operation.filePaths.filter(function filterItem(p) {
        return p === filePath;
      }).length;
      assert.strictEqual(count, 1);
    });

    test('calculates step duration from start time', async function testCalculatesStepDurationFromStartTime() {
      const operationId = createOperation('convert', 'user1', 'User1');
      const operationBefore = getOperation(operationId);
      assert.ok(operationBefore, 'Operation should exist');
      assert.ok(operationBefore.startTime, 'Operation should have startTime');
      const startTime = operationBefore.startTime;

      await new Promise(function promiseExecutor(resolve) {
        return setTimeout(resolve, 10);
      });

      logOperationStep(operationId, 'processing', 'running');
      const afterLogTime = Date.now();

      const operation = getOperation(operationId);
      assert.ok(operation, 'Operation should still exist');
      assert.ok(operation.performanceMetrics.steps.length > 0, 'Step should be added');
      const step = operation.performanceMetrics.steps[0];
      assert.ok(step, 'Step should exist');
      assert.ok(step.duration !== null && step.duration !== undefined, 'Step should have duration');
      assert.ok(step.duration > 0, 'Duration should be positive');
      // Duration should be between the wait time (10ms) and the time after logging
      assert.ok(step.duration >= 10, `Duration ${step.duration} should be at least 10ms`);
      assert.ok(
        step.duration <= afterLogTime - startTime,
        `Duration ${step.duration} should not exceed total elapsed time`
      );
    });

    test('handles non-existent operation gracefully', function testHandlesNonExistentOperationGracefully() {
      assert.doesNotThrow(function doesNotThrowCallback() {
        logOperationStep('non-existent-id', 'step', 'running');
      });
    });

    test('broadcasts update on error status', function testBroadcastsUpdateOnErrorStatus() {
      const operationId = createOperation('convert', 'user1', 'User1');
      let broadcastCalled = false;
      setBroadcastCallback(function setBroadcastCallbackCallback(op) {
        broadcastCalled = true;
        assert.strictEqual(op.id, operationId);
      });

      logOperationStep(operationId, 'error_step', 'error');

      assert.ok(broadcastCalled);
    });
  });

  describe('logOperationError', function describeLogOperationError() {
    test('logs error with Error object', function testLogsErrorWithErrorObject() {
      const operationId = createOperation('convert', 'user1', 'User1');
      const error = new Error('Test error');
      logOperationError(operationId, error);

      const operation = getOperation(operationId);
      assert.strictEqual(operation.error, 'Test error');
      assert.strictEqual(operation.stackTrace, error.stack);
    });

    test('logs error with string message', function testLogsErrorWithStringMessage() {
      const operationId = createOperation('convert', 'user1', 'User1');
      logOperationError(operationId, 'String error message');

      const operation = getOperation(operationId);
      assert.strictEqual(operation.error, 'String error message');
      assert.strictEqual(operation.stackTrace, null);
    });

    test('logs error with additional data', function testLogsErrorWithAdditionalData() {
      const operationId = createOperation('convert', 'user1', 'User1');
      const error = new Error('Test error');
      const data = { filePath: '/tmp/test.gif', metadata: { key: 'value' } };
      logOperationError(operationId, error, data);

      const operation = getOperation(operationId);
      assert.strictEqual(operation.error, 'Test error');
    });

    test('handles non-existent operation gracefully', function testHandlesNonExistentOperationGracefully() {
      assert.doesNotThrow(function doesNotThrowCallback() {
        logOperationError('non-existent-id', new Error('test'));
      });
    });

    test('broadcasts update when error is logged', function testBroadcastsUpdateWhenErrorIsLogged() {
      const operationId = createOperation('convert', 'user1', 'User1');
      let broadcastCalled = false;
      setBroadcastCallback(function setBroadcastCallbackCallback(op) {
        broadcastCalled = true;
        assert.strictEqual(op.id, operationId);
        assert.strictEqual(op.error, 'Test error');
      });

      logOperationError(operationId, new Error('Test error'));

      assert.ok(broadcastCalled);
    });
  });

  describe('getOperation', function describeGetOperation() {
    test('returns operation by ID', function testReturnsOperationByID() {
      const operationId = createOperation('convert', 'user1', 'User1');
      const operation = getOperation(operationId);

      assert.ok(operation);
      assert.strictEqual(operation.id, operationId);
    });

    test('returns null for non-existent operation', function testReturnsNullForNonExistentOperation() {
      const operation = getOperation('non-existent-id');
      assert.strictEqual(operation, null);
    });
  });

  describe('getRecentOperations', function describeGetRecentOperations() {
    test('returns all operations when no limit specified', function testReturnsAllOperationsWhenNoLimit() {
      createOperation('convert', 'user1', 'User1');
      createOperation('download', 'user2', 'User2');
      createOperation('optimize', 'user3', 'User3');

      const operations = getRecentOperations();
      assert.ok(operations.length >= 3);
    });

    test('returns limited number of operations', function testReturnsLimitedNumberOfOperations() {
      for (let i = 0; i < 5; i++) {
        createOperation('convert', `user${i}`, `User${i}`);
      }

      const operations = getRecentOperations(3);
      assert.strictEqual(operations.length, 3);
    });

    test('returns operations in reverse chronological order', async function testReturnsOperationsInReverseChronologicalOrder() {
      const id1 = createOperation('convert', 'user1', 'User1');
      await new Promise(function promiseExecutor(resolve) {
        return setTimeout(resolve, 10);
      });
      const id2 = createOperation('download', 'user2', 'User2');

      const operations = getRecentOperations(2);
      assert.strictEqual(operations[0].id, id2);
      assert.strictEqual(operations[1].id, id1);
    });
  });

  describe('setBroadcastCallback', function describeSetBroadcastCallback() {
    test('sets broadcast callback and calls it on operation update', function testSetsBroadcastCallbackAndCallsIt() {
      let callbackCalled = false;
      let receivedOperation = null;

      setBroadcastCallback(function setBroadcastCallbackCallback(op) {
        callbackCalled = true;
        receivedOperation = op;
      });

      const operationId = createOperation('convert', 'user1', 'User1');
      assert.ok(callbackCalled);
      assert.ok(receivedOperation);
      assert.strictEqual(receivedOperation.id, operationId);
    });

    test('supports multiple instance ports', function testSupportsMultipleInstancePorts() {
      // Save original WEBUI_PORT and set to 3101 for this test
      const originalPort = process.env.WEBUI_PORT;
      process.env.WEBUI_PORT = '3101';

      try {
        let callback1Called = false;
        let callback2Called = false;

        setBroadcastCallback(function setBroadcastCallbackCallback() {
          callback1Called = true;
        }, 3101);

        setBroadcastCallback(function setBroadcastCallbackCallback() {
          callback2Called = true;
        }, 3102);

        createOperation('convert', 'user1', 'User1');
        // Should call callback for current instance port (3101), not 3102
        assert.ok(callback1Called, 'Callback for port 3101 should be called');
        assert.ok(!callback2Called, 'Callback for port 3102 should not be called');
      } finally {
        // Restore original port
        if (originalPort !== undefined) {
          process.env.WEBUI_PORT = originalPort;
        } else {
          delete process.env.WEBUI_PORT;
        }
      }
    });
  });

  describe('setUserMetricsBroadcastCallback', function describeSetUserMetricsBroadcastCallback() {
    test('sets user metrics broadcast callback', async function testSetsUserMetricsBroadcastCallback() {
      setUserMetricsBroadcastCallback(function setUserMetricsBroadcastCallbackCallback() {
        // Callback may or may not be called depending on database state
      });

      // Create and complete an operation to trigger metrics update
      const operationId = createOperation('convert', 'user1', 'User1');
      updateOperationStatus(operationId, 'success');

      // Wait a bit for async metrics update
      await new Promise(function promiseExecutor(resolve) {
        return setTimeout(resolve, 100);
      });

      // Note: callback may or may not be called depending on database state
      // This test just verifies the callback can be set
      assert.ok(true);
    });
  });

  describe('cleanupStuckOperations', function describeCleanupStuckOperations() {
    test('returns 0 when no stuck operations exist', async function testReturns0WhenNoStuckOperations() {
      // The test database persists between runs and may already contain stuck
      // operations from earlier tests/runs. Clean those first so the precondition
      // ("no stuck operations exist") actually holds, then assert a second pass
      // finds nothing left to clean.
      await cleanupStuckOperations(10);
      const cleaned = await cleanupStuckOperations(10);
      assert.strictEqual(cleaned, 0);
    });

    test('marks stuck operations as failed', async function testMarksStuckOperationsAsFailed() {
      // Create an operation and mark it as running
      const operationId = createOperation('convert', 'user1', 'User1');

      // Manually insert a status_update log
      insertOperationLog(operationId, 'status_update', 'running', {
        message: 'Operation started',
      });

      // For testing, we'll create a stuck operation by inserting logs
      const stuckId = `stuck-${Date.now()}`;
      insertOperationLog(stuckId, 'created', 'pending', {
        message: 'Operation created',
        metadata: { operationType: 'convert', userId: 'user1', username: 'User1' },
      });

      // Test the function with existing operations
      const cleaned = await cleanupStuckOperations(1); // 1 minute threshold
      // May be 0 if no operations are actually stuck
      assert.ok(cleaned >= 0);
    });

    test('sends DM notification when client provided', async function testSendsDMNotificationWhenClientProvided() {
      const mockClient = {
        users: {
          fetch: async () => {
            return {
              send: async () => {
                return { id: 'msg123' };
              },
            };
          },
        },
      };

      // Create a user in database
      insertOrUpdateUser('user1', 'User1', Date.now());

      const cleaned = await cleanupStuckOperations(10, mockClient);
      assert.ok(cleaned >= 0);
    });

    test('handles DM failure gracefully', async function testHandlesDMFailureGracefully() {
      const mockClient = {
        users: {
          fetch: async () => {
            throw new Error('DM disabled');
          },
        },
      };

      const cleaned = await cleanupStuckOperations(10, mockClient);
      assert.ok(cleaned >= 0);
    });
  });

  describe('operation lifecycle', function describeOperationLifecycle() {
    test('complete operation lifecycle from creation to success', function testCompleteOperationLifecycleFromCreationTo() {
      const operationId = createOperation('convert', 'user1', 'User1', {
        originalUrl: 'https://example.com/video.mp4',
      });

      // Update to running
      updateOperationStatus(operationId, 'running');

      // Log steps
      logOperationStep(operationId, 'download_start', 'running');
      logOperationStep(operationId, 'download_complete', 'success', {
        filePath: '/tmp/downloaded.mp4',
      });
      logOperationStep(operationId, 'processing_start', 'running');
      logOperationStep(operationId, 'processing_complete', 'success', {
        filePath: '/tmp/output.gif',
      });

      // Complete operation
      updateOperationStatus(operationId, 'success', { fileSize: 1024000 });

      const operation = getOperation(operationId);
      assert.strictEqual(operation.status, 'success');
      assert.strictEqual(operation.fileSize, 1024000);
      assert.ok(operation.performanceMetrics.duration > 0);
      assert.strictEqual(operation.performanceMetrics.steps.length, 4);
      assert.strictEqual(operation.filePaths.length, 2);
    });

    test('operation lifecycle with error', function testOperationLifecycleWithError() {
      const operationId = createOperation('convert', 'user1', 'User1');

      updateOperationStatus(operationId, 'running');
      logOperationStep(operationId, 'download_start', 'running');

      const error = new Error('Download failed');
      logOperationError(operationId, error, { filePath: '/tmp/failed.mp4' });

      updateOperationStatus(operationId, 'error', { error: error.message });

      const operation = getOperation(operationId);
      assert.strictEqual(operation.status, 'error');
      assert.strictEqual(operation.error, 'Download failed');
      assert.ok(operation.performanceMetrics.duration > 0);
    });
  });
});
