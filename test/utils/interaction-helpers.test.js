import { test, describe } from 'node:test';
import assert from 'node:assert';
import {
  safeInteractionReply,
  safeInteractionEditReply,
  safeInteractionDeferReply,
  safeInteractionFollowUp,
} from '../../src/utils/interaction-helpers.js';

describe('interaction helpers', function describeInteractionHelpers() {
  describe('safeInteractionReply', function describeSafeInteractionReply() {
    test('returns false when interaction already replied', async function testReturnsFalseWhenInteractionAlreadyReplied() {
      const interaction = {
        replied: true,
        deferred: false,
        reply: async () => {},
      };

      const result = await safeInteractionReply(interaction, { content: 'test' });
      assert.strictEqual(result, false, 'Should return false when already replied');
    });

    test('returns false when interaction already deferred', async function testReturnsFalseWhenInteractionAlreadyDeferred() {
      const interaction = {
        replied: false,
        deferred: true,
        reply: async () => {},
      };

      const result = await safeInteractionReply(interaction, { content: 'test' });
      assert.strictEqual(result, false, 'Should return false when already deferred');
    });

    test('handles expired interaction error (code 10062)', async function testHandlesExpiredInteractionErrorCode10062() {
      const interaction = {
        replied: false,
        deferred: false,
        reply: async () => {
          const error = new Error('Interaction expired');
          error.code = 10062;
          throw error;
        },
      };

      const result = await safeInteractionReply(interaction, { content: 'test' });
      assert.strictEqual(result, false, 'Should return false on expired interaction');
    });

    test('handles already acknowledged error (code 40060)', async function testHandlesAlreadyAcknowledgedErrorCode40060() {
      const interaction = {
        replied: false,
        deferred: false,
        reply: async () => {
          const error = new Error('Interaction already acknowledged');
          error.code = 40060;
          throw error;
        },
      };

      const result = await safeInteractionReply(interaction, { content: 'test' });
      assert.strictEqual(result, false, 'Should return false on already acknowledged');
    });

    test('returns true on successful reply', async function testReturnsTrueOnSuccessfulReply() {
      const interaction = {
        replied: false,
        deferred: false,
        reply: async () => {},
      };

      const result = await safeInteractionReply(interaction, { content: 'test' });
      assert.strictEqual(result, true, 'Should return true on successful reply');
    });
  });

  describe('safeInteractionEditReply', function describeSafeInteractionEditReply() {
    test('returns false when interaction not yet responded to', async function testReturnsFalseWhenInteractionNotYet() {
      const interaction = {
        replied: false,
        deferred: false,
        editReply: async () => {},
      };

      const result = await safeInteractionEditReply(interaction, { content: 'test' });
      assert.strictEqual(result, false, 'Should return false when not yet responded');
    });

    test('returns message on successful edit when interaction is replied', async function testReturnsMessageOnSuccessfulEditWhen() {
      const mockMessage = { id: '123', content: 'test' };
      const interaction = {
        replied: true,
        deferred: false,
        editReply: async () => mockMessage,
      };

      const result = await safeInteractionEditReply(interaction, { content: 'test' });
      assert.strictEqual(result, mockMessage, 'Should return message on successful edit');
    });

    test('returns message on successful edit when interaction is deferred', async function testReturnsMessageOnSuccessfulEditWhen() {
      const mockMessage = { id: '123', content: 'test' };
      const interaction = {
        replied: false,
        deferred: true,
        editReply: async () => mockMessage,
      };

      const result = await safeInteractionEditReply(interaction, { content: 'test' });
      assert.strictEqual(result, mockMessage, 'Should return message on successful edit');
    });

    test('handles expired interaction error (code 10062)', async function testHandlesExpiredInteractionErrorCode10062() {
      const interaction = {
        replied: true,
        deferred: false,
        editReply: async () => {
          const error = new Error('Interaction expired');
          error.code = 10062;
          throw error;
        },
      };

      const result = await safeInteractionEditReply(interaction, { content: 'test' });
      assert.strictEqual(result, false, 'Should return false on expired interaction');
    });

    test('handles already acknowledged error (code 40060)', async function testHandlesAlreadyAcknowledgedErrorCode40060() {
      const interaction = {
        replied: true,
        deferred: false,
        editReply: async () => {
          const error = new Error('Interaction already acknowledged');
          error.code = 40060;
          throw error;
        },
      };

      const result = await safeInteractionEditReply(interaction, { content: 'test' });
      assert.strictEqual(result, false, 'Should return false on already acknowledged');
    });
  });

  describe('safeInteractionDeferReply', function describeSafeInteractionDeferReply() {
    test('returns false when interaction already replied', async function testReturnsFalseWhenInteractionAlreadyReplied() {
      const interaction = {
        replied: true,
        deferred: false,
        deferReply: async () => {},
      };

      const result = await safeInteractionDeferReply(interaction);
      assert.strictEqual(result, false, 'Should return false when already replied');
    });

    test('returns false when interaction already deferred', async function testReturnsFalseWhenInteractionAlreadyDeferred() {
      const interaction = {
        replied: false,
        deferred: true,
        deferReply: async () => {},
      };

      const result = await safeInteractionDeferReply(interaction);
      assert.strictEqual(result, false, 'Should return false when already deferred');
    });

    test('handles expired interaction error (code 10062)', async function testHandlesExpiredInteractionErrorCode10062() {
      const interaction = {
        replied: false,
        deferred: false,
        deferReply: async () => {
          const error = new Error('Interaction expired');
          error.code = 10062;
          throw error;
        },
      };

      const result = await safeInteractionDeferReply(interaction);
      assert.strictEqual(result, false, 'Should return false on expired interaction');
    });

    test('returns true on successful defer', async function testReturnsTrueOnSuccessfulDefer() {
      const interaction = {
        replied: false,
        deferred: false,
        deferReply: async () => {},
      };

      const result = await safeInteractionDeferReply(interaction);
      assert.strictEqual(result, true, 'Should return true on successful defer');
    });
  });

  describe('safeInteractionFollowUp', function describeSafeInteractionFollowUp() {
    test('returns false when interaction not yet responded to', async function testReturnsFalseWhenInteractionNotYet() {
      const interaction = {
        replied: false,
        deferred: false,
        followUp: async () => {},
      };

      const result = await safeInteractionFollowUp(interaction, { content: 'test' });
      assert.strictEqual(result, false, 'Should return false when not yet responded');
    });

    test('returns message on successful follow-up when interaction is replied', async function testReturnsMessageOnSuccessfulFollowUp() {
      const mockMessage = { id: '123', content: 'test' };
      const interaction = {
        replied: true,
        deferred: false,
        followUp: async () => mockMessage,
      };

      const result = await safeInteractionFollowUp(interaction, { content: 'test' });
      assert.strictEqual(result, mockMessage, 'Should return message on successful follow-up');
    });

    test('handles expired interaction error (code 10062)', async function testHandlesExpiredInteractionErrorCode10062() {
      const interaction = {
        replied: true,
        deferred: false,
        followUp: async () => {
          const error = new Error('Interaction expired');
          error.code = 10062;
          throw error;
        },
      };

      const result = await safeInteractionFollowUp(interaction, { content: 'test' });
      assert.strictEqual(result, false, 'Should return false on expired interaction');
    });
  });
});
