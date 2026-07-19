import { test, describe } from 'node:test';
import assert from 'node:assert';
import { curatedErrorMessage } from '../../../src/commands/shared/command-errors.js';
import { AppError, ValidationError, NetworkError } from '../../../src/utils/errors.js';

const FALLBACK = 'something went wrong.';

describe('shared/command-errors curatedErrorMessage', function describeSharedCommandErrorsCuratedErrorMessage() {
  test('returns the message for AppError subclasses', function testReturnsTheMessageForAppErrorSubclasses() {
    assert.strictEqual(
      curatedErrorMessage(new ValidationError('file too large'), FALLBACK),
      'file too large'
    );
    assert.strictEqual(
      curatedErrorMessage(
        new NetworkError('this post is unavailable or has been deleted'),
        FALLBACK
      ),
      'this post is unavailable or has been deleted'
    );
    assert.strictEqual(curatedErrorMessage(new AppError('curated'), FALLBACK), 'curated');
  });

  test('returns the fallback for plain/unexpected errors', function testReturnsTheFallbackForPlainUnexpected() {
    assert.strictEqual(
      curatedErrorMessage(new Error('Cannot read properties of undefined'), FALLBACK),
      FALLBACK
    );
    assert.strictEqual(curatedErrorMessage(new TypeError('boom'), FALLBACK), FALLBACK);
    assert.strictEqual(curatedErrorMessage('raw string error', FALLBACK), FALLBACK);
    assert.strictEqual(curatedErrorMessage(null, FALLBACK), FALLBACK);
    assert.strictEqual(curatedErrorMessage(undefined, FALLBACK), FALLBACK);
  });

  test('returns the fallback for an AppError with an empty message', function testReturnsTheFallbackForAnAppError() {
    assert.strictEqual(curatedErrorMessage(new AppError(''), FALLBACK), FALLBACK);
  });
});
