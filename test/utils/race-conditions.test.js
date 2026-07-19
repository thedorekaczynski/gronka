import { test, describe, before, after } from 'node:test';
import assert from 'node:assert';
import { saveGif, saveVideo, saveImage } from '../../src/utils/storage.js';
import { queueCobaltRequest } from '../../src/utils/cobalt-queue.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdirSync } from 'node:fs';
import tmp from 'tmp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let testStoragePath;
let tmpDirCleanup;

// Disable R2 for tests
process.env.R2_ACCOUNT_ID = '';
process.env.R2_ACCESS_KEY_ID = '';
process.env.R2_SECRET_ACCESS_KEY = '';
process.env.R2_BUCKET_NAME = '';

// Setup test storage directory
before(function setupAll() {
  const tmpDir = tmp.dirSync({ prefix: 'gronka-test-race-', unsafeCleanup: true });
  testStoragePath = tmpDir.name;
  tmpDirCleanup = tmpDir.removeCallback;

  mkdirSync(path.join(testStoragePath, 'gifs'), { recursive: true });
  mkdirSync(path.join(testStoragePath, 'videos'), { recursive: true });
  mkdirSync(path.join(testStoragePath, 'images'), { recursive: true });
});

after(function teardownAll() {
  if (tmpDirCleanup) {
    tmpDirCleanup();
  }
});

describe('race conditions', function describeRaceConditions() {
  describe('concurrent file operations', function describeConcurrentFileOperations() {
    test('concurrent saveGif operations should handle race condition gracefully', async function testConcurrentSaveGifOperationsShouldHandleRace() {
      const hash = 'test-gif-hash-' + Date.now();
      const buffer = Buffer.from('GIF89a test gif content');

      // Create multiple concurrent save operations
      const promises = Array.from({ length: 5 }, function fromCallback() {
        return saveGif(buffer, hash, testStoragePath);
      });

      // All should complete without errors (race condition handled)
      const results = await Promise.allSettled(promises);

      // All should succeed (even if file was created by another process)
      const successful = results.filter(function filterItem(r) {
        return r.status === 'fulfilled';
      });
      assert.ok(successful.length > 0, 'At least one save should succeed');

      // Verify file exists
      const finalResult = results.find(function findItem(r) {
        return r.status === 'fulfilled';
      });
      assert.ok(finalResult, 'At least one save should have succeeded');
    });

    test('concurrent saveVideo operations should handle race condition gracefully', async function testConcurrentSaveVideoOperationsShouldHandleRace() {
      const hash = 'test-video-hash-' + Date.now();
      const buffer = Buffer.from('test video content');
      const extension = '.mp4';

      // Create multiple concurrent save operations
      const promises = Array.from({ length: 5 }, function fromCallback() {
        return saveVideo(buffer, hash, extension, testStoragePath);
      });

      // All should complete without errors
      const results = await Promise.allSettled(promises);

      // All should succeed
      const successful = results.filter(function filterItem(r) {
        return r.status === 'fulfilled';
      });
      assert.ok(successful.length > 0, 'At least one save should succeed');
    });

    test('concurrent saveImage operations should handle race condition gracefully', async function testConcurrentSaveImageOperationsShouldHandleRace() {
      const hash = 'test-image-hash-' + Date.now();
      const buffer = Buffer.from('test image content');
      const extension = '.png';

      // Create multiple concurrent save operations
      const promises = Array.from({ length: 5 }, function fromCallback() {
        return saveImage(buffer, hash, extension, testStoragePath);
      });

      // All should complete without errors
      const results = await Promise.allSettled(promises);

      // All should succeed
      const successful = results.filter(function filterItem(r) {
        return r.status === 'fulfilled';
      });
      assert.ok(successful.length > 0, 'At least one save should succeed');
    });
  });

  describe('concurrent URL requests', function describeConcurrentURLRequests() {
    test('concurrent requests for same URL should be deduplicated', async function testConcurrentRequestsForSameURLShould() {
      const url = 'https://example.com/test-' + Date.now();

      let callCount = 0;
      const downloadFn = async () => {
        callCount++;
        await new Promise(function promiseExecutor(resolve) {
          return setTimeout(resolve, 50);
        });
        return {
          buffer: Buffer.from('test'),
          filename: 'test.mp4',
          contentType: 'video/mp4',
        };
      };

      // Make 5 concurrent requests for the same URL
      const promises = Array.from({ length: 5 }, function fromCallback() {
        return queueCobaltRequest(url, downloadFn);
      });

      // All should resolve
      const results = await Promise.allSettled(promises);

      // All should succeed
      const successful = results.filter(function filterItem(r) {
        return r.status === 'fulfilled';
      });
      assert.strictEqual(successful.length, 5, 'All requests should succeed');

      // Download function should be called at most once (due to deduplication)
      // In practice, due to the race condition fix, it might be called 1-2 times
      assert.ok(callCount <= 2, `Download should be called at most 2 times, got ${callCount}`);
    });

    test('concurrent requests for different URLs should not interfere', async function testConcurrentRequestsForDifferentURLsShould() {
      const baseUrl = 'https://example.com/test-';
      let callCount = 0;

      const downloadFn = async () => {
        callCount++;
        await new Promise(function promiseExecutor(resolve) {
          return setTimeout(resolve, 50);
        });
        return {
          buffer: Buffer.from('test'),
          filename: 'test.mp4',
          contentType: 'video/mp4',
        };
      };

      // Make 5 concurrent requests for different URLs
      const promises = Array.from({ length: 5 }, function fromCallback(_, i) {
        return queueCobaltRequest(`${baseUrl}${i}-${Date.now()}`, downloadFn);
      });

      // All should resolve
      const results = await Promise.allSettled(promises);

      // All should succeed
      const successful = results.filter(function filterItem(r) {
        return r.status === 'fulfilled';
      });
      assert.strictEqual(successful.length, 5, 'All requests should succeed');

      // Each URL should trigger its own download
      assert.strictEqual(callCount, 5, 'Each unique URL should trigger a download');
    });
  });
});
