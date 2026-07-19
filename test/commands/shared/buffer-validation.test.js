import { test, describe, before, after } from 'node:test';
import assert from 'node:assert';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import {
  validateVideoBuffer,
  validateGifBuffer,
  writeValidatedFileBuffer,
} from '../../../src/commands/shared/buffer-validation.js';
import { ValidationError } from '../../../src/utils/errors.js';

// Helpers to build minimal valid headers
const gif89a = () => Buffer.concat([Buffer.from('GIF89a'), Buffer.alloc(4)]);
const gif87a = () => Buffer.concat([Buffer.from('GIF87a'), Buffer.alloc(4)]);
const mp4 = () =>
  Buffer.concat([Buffer.from([0, 0, 0, 0x18]), Buffer.from('ftyp'), Buffer.from('mp42')]);
const webm = () => Buffer.concat([Buffer.from([0x1a, 0x45, 0xdf, 0xa3]), Buffer.alloc(8)]);

// mkdtemp creates a private, unpredictable directory, avoiding insecure use of the shared tmp dir
let tmpDir;
before(async function setupAll() {
  tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'bv-test-'));
});
after(async function teardownAll() {
  await fs.rm(tmpDir, { recursive: true, force: true });
});

describe('shared/buffer-validation', function describeSharedBufferValidation() {
  describe('validateGifBuffer', function describeValidateGifBuffer() {
    test('accepts GIF89a and GIF87a', function testAcceptsGIF89aAndGIF87a() {
      assert.strictEqual(validateGifBuffer(gif89a()), true);
      assert.strictEqual(validateGifBuffer(gif87a()), true);
    });
    test('rejects non-GIF signature', function testRejectsNonGIFSignature() {
      assert.throws(function throwsCallback() {
        return validateGifBuffer(Buffer.from('NOTGIF'));
      }, ValidationError);
    });
    test('rejects empty/too-small buffer', function testRejectsEmptyTooSmallBuffer() {
      assert.throws(function throwsCallback() {
        return validateGifBuffer(Buffer.alloc(0));
      }, ValidationError);
      assert.throws(function throwsCallback() {
        return validateGifBuffer(Buffer.from('GIF'));
      }, ValidationError);
    });
  });

  describe('validateVideoBuffer', function describeValidateVideoBuffer() {
    test('accepts MP4 (ftyp at offset 4) and WebM', function testAcceptsMP4FtypAtOffset4() {
      assert.strictEqual(validateVideoBuffer(mp4()), true);
      assert.strictEqual(validateVideoBuffer(webm()), true);
    });
    test('rejects unknown signature', function testRejectsUnknownSignature() {
      assert.throws(function throwsCallback() {
        return validateVideoBuffer(Buffer.alloc(12, 0x42));
      }, ValidationError);
    });
    test('rejects empty/too-small buffer', function testRejectsEmptyTooSmallBuffer() {
      assert.throws(function throwsCallback() {
        return validateVideoBuffer(Buffer.alloc(0));
      }, ValidationError);
      assert.throws(function throwsCallback() {
        return validateVideoBuffer(Buffer.alloc(8));
      }, ValidationError);
    });
  });

  describe('writeValidatedFileBuffer', function describeWriteValidatedFileBuffer() {
    test('writes a valid gif', async function testWritesAValidGif() {
      const p = path.join(tmpDir, 'valid.gif');
      await writeValidatedFileBuffer(p, gif89a(), 'gif');
      const written = await fs.readFile(p);
      assert.ok(written.equals(gif89a()));
    });
    test('writes a valid video', async function testWritesAValidVideo() {
      const p = path.join(tmpDir, 'valid.mp4');
      await writeValidatedFileBuffer(p, mp4(), 'video');
      assert.ok((await fs.readFile(p)).equals(mp4()));
    });
    test('writes images without signature validation', async function testWritesImagesWithoutSignatureValidation() {
      const p = path.join(tmpDir, 'anything.jpg');
      await writeValidatedFileBuffer(p, Buffer.from('anything'), 'image');
      assert.ok((await fs.readFile(p)).equals(Buffer.from('anything')));
    });
    test('rejects an invalid gif before writing', async function testRejectsAnInvalidGifBeforeWriting() {
      const p = path.join(tmpDir, 'invalid.gif');
      await assert.rejects(function rejectsCallback() {
        return writeValidatedFileBuffer(p, Buffer.from('NOTGIF'), 'gif');
      }, ValidationError);
      await assert.rejects(function rejectsCallback() {
        return fs.access(p);
      }); // file must not exist
    });
  });
});
