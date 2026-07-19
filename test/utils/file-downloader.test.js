import { test, describe } from 'node:test';
import assert from 'node:assert';
import { generateHash, parseTenorUrl } from '../../src/utils/file-downloader.js';
import axios from 'axios';

describe('file downloader utilities', function describeFileDownloaderUtilities() {
  describe('generateHash', function describeGenerateHash() {
    test('generates a stable 64-hex content hash', function testGeneratesAStable64HexContent() {
      const buffer = Buffer.from('test content');
      const hash = generateHash(buffer);

      assert.strictEqual(typeof hash, 'string');
      assert.strictEqual(hash.length, 64); // 32-byte hash as 64 hex chars
    });

    test('produces consistent hashes', function testProducesConsistentHashes() {
      const buffer = Buffer.from('test content');
      const hash1 = generateHash(buffer);
      const hash2 = generateHash(buffer);

      assert.strictEqual(hash1, hash2);
    });

    test('produces different hashes for different content', function testProducesDifferentHashesForDifferentContent() {
      const buffer1 = Buffer.from('test content 1');
      const buffer2 = Buffer.from('test content 2');

      const hash1 = generateHash(buffer1);
      const hash2 = generateHash(buffer2);

      assert.notStrictEqual(hash1, hash2);
    });

    test('handles empty buffer', function testHandlesEmptyBuffer() {
      const buffer = Buffer.from('');
      const hash = generateHash(buffer);

      assert.strictEqual(typeof hash, 'string');
      assert.strictEqual(hash.length, 64);
    });

    test('handles binary data', function testHandlesBinaryData() {
      const buffer = Buffer.from([0x00, 0x01, 0x02, 0xff, 0xfe]);
      const hash = generateHash(buffer);

      assert.strictEqual(typeof hash, 'string');
      assert.strictEqual(hash.length, 64);
    });
  });

  describe('parseTenorUrl', function describeParseTenorUrl() {
    test('extracts GIF URL from store-cache JSON', async function testExtractsGIFURLFromStoreCache() {
      const tenorUrl = 'https://tenor.com/view/test-gif-1234567890';
      const mockGifUrl = 'https://media.tenor.com/images/test.gif';

      // Mock axios.get to return HTML with store-cache JSON
      const originalGet = axios.get;
      axios.get = async function anonymousFn() {
        return {
          data: `<html><head><script id="store-cache">${JSON.stringify({
            gifs: {
              byId: {
                1234567890: {
                  results: [
                    {
                      media_formats: {
                        gif: {
                          url: mockGifUrl,
                        },
                      },
                    },
                  ],
                },
              },
            },
          })}</script></head></html>`,
        };
      };

      try {
        const result = await parseTenorUrl(tenorUrl);
        assert.strictEqual(result, mockGifUrl);
      } finally {
        axios.get = originalGet;
      }
    });

    test('extracts GIF URL from og:image meta tag', async function testExtractsGIFURLFromOgImage() {
      const tenorUrl = 'https://tenor.com/view/test-gif-1234567890';
      const mockGifUrl = 'https://media.tenor.com/images/test.gif';

      const originalGet = axios.get;
      axios.get = async function anonymousFn() {
        return {
          data: `<html><head><meta property="og:image" content="${mockGifUrl}"></head></html>`,
        };
      };

      try {
        const result = await parseTenorUrl(tenorUrl);
        assert.strictEqual(result, mockGifUrl);
      } finally {
        axios.get = originalGet;
      }
    });

    test('falls back to direct URL pattern when parsing fails', async function testFallsBackToDirectURLPattern() {
      const tenorUrl = 'https://tenor.com/view/test-gif-1234567890';
      const expectedUrl = 'https://c.tenor.com/1234567890/tenor.gif';

      const originalGet = axios.get;
      axios.get = async function anonymousFn() {
        return {
          data: '<html><head></head></html>', // No GIF data in HTML
        };
      };

      try {
        const result = await parseTenorUrl(tenorUrl);
        assert.strictEqual(result, expectedUrl);
      } finally {
        axios.get = originalGet;
      }
    });

    test('falls back to direct URL pattern on network error', async function testFallsBackToDirectURLPattern() {
      const tenorUrl = 'https://tenor.com/view/test-gif-1234567890';
      const expectedUrl = 'https://c.tenor.com/1234567890/tenor.gif';

      const originalGet = axios.get;
      axios.get = async function anonymousFn() {
        throw new Error('Network error');
      };

      try {
        const result = await parseTenorUrl(tenorUrl);
        assert.strictEqual(result, expectedUrl);
      } finally {
        axios.get = originalGet;
      }
    });

    test('extracts GIF URL from JSON-LD', async function testExtractsGIFURLFromJSONLD() {
      const tenorUrl = 'https://tenor.com/view/test-gif-1234567890';
      const mockGifUrl = 'https://media.tenor.com/images/test.gif';

      const originalGet = axios.get;
      axios.get = async function anonymousFn() {
        return {
          data: `<html><head><script type="application/ld+json">${JSON.stringify({
            image: mockGifUrl,
          })}</script></head></html>`,
        };
      };

      try {
        const result = await parseTenorUrl(tenorUrl);
        assert.strictEqual(result, mockGifUrl);
      } finally {
        axios.get = originalGet;
      }
    });

    test('throws error for invalid Tenor URL format', async function testThrowsErrorForInvalidTenorURL() {
      const invalidUrl = 'https://example.com/not-a-tenor-url';

      await assert.rejects(
        async function rejectsCallback() {
          return await parseTenorUrl(invalidUrl);
        },
        {
          name: 'ValidationError',
          message: 'invalid Tenor URL format',
        }
      );
    });

    test('handles Tenor URL with www prefix', async function testHandlesTenorURLWithWwwPrefix() {
      const tenorUrl = 'https://www.tenor.com/view/test-gif-1234567890';
      const expectedUrl = 'https://c.tenor.com/1234567890/tenor.gif';

      const originalGet = axios.get;
      axios.get = async function anonymousFn() {
        return {
          data: '<html><head></head></html>',
        };
      };

      try {
        const result = await parseTenorUrl(tenorUrl);
        assert.strictEqual(result, expectedUrl);
      } finally {
        axios.get = originalGet;
      }
    });

    test('handles case-insensitive URL matching', async function testHandlesCaseInsensitiveURLMatching() {
      const tenorUrl = 'https://TENOR.com/view/TEST-gif-1234567890';
      const expectedUrl = 'https://c.tenor.com/1234567890/tenor.gif';

      const originalGet = axios.get;
      axios.get = async function anonymousFn() {
        return {
          data: '<html><head></head></html>',
        };
      };

      try {
        const result = await parseTenorUrl(tenorUrl);
        assert.strictEqual(result, expectedUrl);
      } finally {
        axios.get = originalGet;
      }
    });
  });
});
