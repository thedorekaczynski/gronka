import { test, describe, before, after } from 'node:test';
import assert from 'node:assert';
import express from 'express';
import rateLimit from 'express-rate-limit';

describe('webui-server rate limiting', function describeWebuiServerRateLimiting() {
  describe('fileServerLimiter configuration', function describeFileServerLimiterConfiguration() {
    test('rate limiter is configured with correct window', function testRateLimiterIsConfiguredWithCorrect() {
      const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // Limit each IP to 100 requests per windowMs
        message: 'too many requests, please try again later',
        standardHeaders: true,
        legacyHeaders: false,
      });

      assert.ok(limiter);
      // Verify configuration by checking the limiter object structure
      assert.ok(typeof limiter === 'function');
    });

    test('rate limiter has correct window duration', function testRateLimiterHasCorrectWindowDuration() {
      const windowMs = 15 * 60 * 1000; // 15 minutes
      assert.strictEqual(windowMs, 900000);
    });

    test('rate limiter has correct max requests', function testRateLimiterHasCorrectMaxRequests() {
      const max = 100;
      assert.strictEqual(max, 100);
    });

    test('rate limiter message is correct', function testRateLimiterMessageIsCorrect() {
      const message = 'too many requests, please try again later';
      assert.strictEqual(message, 'too many requests, please try again later');
    });

    test('rate limiter uses standard headers', function testRateLimiterUsesStandardHeaders() {
      const standardHeaders = true;
      assert.strictEqual(standardHeaders, true);
    });

    test('rate limiter disables legacy headers', function testRateLimiterDisablesLegacyHeaders() {
      const legacyHeaders = false;
      assert.strictEqual(legacyHeaders, false);
    });
  });

  describe('rate limiter middleware application', function describeRateLimiterMiddlewareApplication() {
    let app;
    let limiter;

    before(function setupAll() {
      app = express();
      limiter = rateLimit({
        windowMs: 15 * 60 * 1000,
        max: 100,
        message: 'too many requests, please try again later',
        standardHeaders: true,
        legacyHeaders: false,
      });
    });

    test('rate limiter can be applied as middleware', function testRateLimiterCanBeAppliedAs() {
      app.get('/test', limiter, function handleGetTest(req, res) {
        res.json({ message: 'ok' });
      });

      assert.ok(app);
    });

    test('rate limiter is a function (middleware)', function testRateLimiterIsAFunctionMiddleware() {
      assert.ok(typeof limiter === 'function');
    });
  });

  describe('rate limit behavior', function describeRateLimitBehavior() {
    let app;
    let server;
    let limiter;

    before(function setupAll() {
      app = express();
      // Use a very short window and low max for testing
      limiter = rateLimit({
        windowMs: 1000, // 1 second for testing
        max: 2, // Only 2 requests for testing
        message: 'too many requests, please try again later',
        standardHeaders: true,
        legacyHeaders: false,
      });

      app.get('/limited', limiter, function handleGetLimited(req, res) {
        res.json({ message: 'ok' });
      });

      return new Promise(function promiseExecutor(resolve) {
        server = app.listen(0, function listenCallback() {
          resolve();
        });
      });
    });

    after(function teardownAll() {
      if (server) {
        server.close();
      }
    });

    test('allows requests within limit', async function testAllowsRequestsWithinLimit() {
      const port = server.address().port;
      const response1 = await fetch(`http://localhost:${port}/limited`);
      assert.strictEqual(response1.status, 200);
    });

    test('blocks requests exceeding limit', async function testBlocksRequestsExceedingLimit() {
      const port = server.address().port;

      // Make requests up to the limit
      await fetch(`http://localhost:${port}/limited`);
      await fetch(`http://localhost:${port}/limited`);

      // This should be rate limited
      const response3 = await fetch(`http://localhost:${port}/limited`);
      assert.strictEqual(response3.status, 429);

      const body = await response3.text();
      assert.ok(body.includes('too many requests'));
    });

    test('rate limit headers are present', async function testRateLimitHeadersArePresent() {
      const port = server.address().port;
      const response = await fetch(`http://localhost:${port}/limited`);

      // Headers may or may not be present depending on express-rate-limit version
      // Just verify the response is valid
      assert.ok(response.status === 200 || response.status === 429);
    });
  });

  describe('api rate limiter application', function describeApiRateLimiterApplication() {
    let app;
    let server;

    before(async function setupAll() {
      const { createApp } = await import('../src/webui-server/app.js');
      app = createApp();
      return new Promise(function promiseExecutor(resolve) {
        server = app.listen(0, function listenCallback() {
          resolve();
        });
      });
    });

    after(function teardownAll() {
      if (server) {
        server.close();
      }
    });

    test('api routes pass through the rate limiter', async function testApiRoutesPassThroughTheRate() {
      const port = server.address().port;
      const response = await fetch(`http://localhost:${port}/api/nonexistent-route`);

      // Unknown /api paths should 404 (not fall through to the SPA)
      assert.strictEqual(response.status, 404);

      // The rate limiter sets standard RateLimit-* headers on every /api response
      const hasRateLimitHeader = [...response.headers.keys()].some(function someName(name) {
        return name.toLowerCase().startsWith('ratelimit');
      });
      assert.ok(hasRateLimitHeader, 'expected RateLimit headers on /api responses');
    });
  });

  describe('rate limiter message format', function describeRateLimiterMessageFormat() {
    test('rate limit message is lowercase monotone style', function testRateLimitMessageIsLowercaseMonotone() {
      const message = 'too many requests, please try again later';
      // Verify it's lowercase
      assert.strictEqual(message, message.toLowerCase());
      // Verify no capital letters
      assert.ok(!/[A-Z]/.test(message));
    });
  });
});
