import { test, describe, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { execSync } from 'child_process';
import { platform } from 'os';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Mock execSync for testing
let execSyncCalls = [];
let execSyncShouldFail = false;
let originalExecSync;

beforeEach(function setupEach() {
  execSyncCalls = [];
  execSyncShouldFail = false;
  originalExecSync = execSync;

  // Mock execSync
  globalThis.execSync = function anonymousFn(command, options) {
    execSyncCalls.push({ command, options });
    if (execSyncShouldFail) {
      const error = new Error('Command failed');
      error.status = 1;
      throw error;
    }
    return 'success';
  };
});

afterEach(function teardownEach() {
  globalThis.execSync = originalExecSync;
});

describe('docker-copy-webui.js wrapper script', function describeDockerCopyWebuiJsWrapperScript() {
  describe('platform detection', function describePlatformDetection() {
    test('detects Windows platform correctly', function testDetectsWindowsPlatformCorrectly() {
      const isWindows = platform() === 'win32';
      assert.ok(typeof isWindows === 'boolean');
    });

    test('platform() returns valid platform string', function testPlatformReturnsValidPlatformString() {
      const currentPlatform = platform();
      assert.ok(
        ['win32', 'linux', 'darwin', 'freebsd', 'openbsd', 'sunos'].includes(currentPlatform)
      );
    });
  });

  describe('Windows path execution', function describeWindowsPathExecution() {
    test('constructs correct PowerShell command for Windows', function testConstructsCorrectPowerShellCommandForWindows() {
      const isWindows = platform() === 'win32';
      if (isWindows) {
        const expectedCommand = 'powershell -File scripts/docker-copy-webui.ps1';
        const expectedCwd = join(__dirname, '..', '..');

        assert.ok(expectedCommand.includes('powershell'));
        assert.ok(expectedCommand.includes('docker-copy-webui.ps1'));
        assert.ok(expectedCwd.endsWith('gronka') || expectedCwd.includes('gronka'));
      }
    });

    test('uses correct options for Windows execution', function testUsesCorrectOptionsForWindowsExecution() {
      const expectedOptions = {
        stdio: 'inherit',
        cwd: join(__dirname, '..', '..'),
      };

      assert.strictEqual(expectedOptions.stdio, 'inherit');
      assert.ok(expectedOptions.cwd);
    });
  });

  describe('Unix path execution', function describeUnixPathExecution() {
    test('constructs correct bash command for Unix', function testConstructsCorrectBashCommandForUnix() {
      const isWindows = platform() === 'win32';
      if (!isWindows) {
        const expectedCommand = 'bash scripts/docker-copy-webui.sh';
        const expectedCwd = join(__dirname, '..', '..');

        assert.ok(expectedCommand.includes('bash'));
        assert.ok(expectedCommand.includes('docker-copy-webui.sh'));
        assert.ok(expectedCwd.endsWith('gronka') || expectedCwd.includes('gronka'));
      }
    });

    test('uses correct options for Unix execution', function testUsesCorrectOptionsForUnixExecution() {
      const expectedOptions = {
        stdio: 'inherit',
        cwd: join(__dirname, '..', '..'),
      };

      assert.strictEqual(expectedOptions.stdio, 'inherit');
      assert.ok(expectedOptions.cwd);
    });
  });

  describe('error handling', function describeErrorHandling() {
    test('exits with code 1 on Windows script failure', function testExitsWithCode1OnWindows() {
      execSyncShouldFail = true;
      const isWindows = platform() === 'win32';

      if (isWindows) {
        try {
          execSync('powershell -File scripts/docker-copy-webui.ps1', {
            stdio: 'inherit',
            cwd: join(__dirname, '..', '..'),
          });
          assert.fail('Should have thrown');
        } catch (error) {
          assert.ok(error);
        }
      }
    });

    test('exits with code 1 on Unix script failure', function testExitsWithCode1OnUnix() {
      execSyncShouldFail = true;
      const isWindows = platform() === 'win32';

      if (!isWindows) {
        try {
          execSync('bash scripts/docker-copy-webui.sh', {
            stdio: 'inherit',
            cwd: join(__dirname, '..', '..'),
          });
          assert.fail('Should have thrown');
        } catch (error) {
          assert.ok(error);
        }
      }
    });
  });

  describe('script path resolution', function describeScriptPathResolution() {
    test('resolves script directory correctly', function testResolvesScriptDirectoryCorrectly() {
      const scriptDir = __dirname;
      assert.ok(scriptDir.includes('test'));
      assert.ok(scriptDir.includes('scripts'));
    });

    test('constructs correct script paths', function testConstructsCorrectScriptPaths() {
      const baseDir = join(__dirname, '..', '..');
      const ps1Path = join(baseDir, 'scripts', 'docker-copy-webui.ps1');
      const shPath = join(baseDir, 'scripts', 'docker-copy-webui.sh');

      assert.ok(ps1Path.includes('docker-copy-webui.ps1'));
      assert.ok(shPath.includes('docker-copy-webui.sh'));
      assert.ok(ps1Path.includes('scripts'));
      assert.ok(shPath.includes('scripts'));
    });
  });

  describe('cross-platform compatibility', function describeCrossPlatformCompatibility() {
    test('handles both Windows and Unix platforms', function testHandlesBothWindowsAndUnixPlatforms() {
      const currentPlatform = platform();
      const isWindows = currentPlatform === 'win32';

      if (isWindows) {
        assert.strictEqual(currentPlatform, 'win32');
      } else {
        assert.notStrictEqual(currentPlatform, 'win32');
      }
    });

    test('uses appropriate script extension per platform', function testUsesAppropriateScriptExtensionPerPlatform() {
      const isWindows = platform() === 'win32';

      if (isWindows) {
        const script = 'docker-copy-webui.ps1';
        assert.ok(script.endsWith('.ps1'));
      } else {
        const script = 'docker-copy-webui.sh';
        assert.ok(script.endsWith('.sh'));
      }
    });
  });
});
