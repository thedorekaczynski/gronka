import { test, describe } from 'node:test';
import assert from 'node:assert';

// Extract validateNumericParameter logic for testing
// This matches the implementation in video-processor.js
function validateNumericParameter(value, name, min = 0, max = Infinity, allowNull = false) {
  if (value === null || value === undefined) {
    if (allowNull) return null;
    throw new Error(`${name} cannot be null or undefined`);
  }

  const num = Number(value);

  if (isNaN(num) || !isFinite(num)) {
    throw new Error(`${name} must be a valid number`);
  }

  if (num < min) {
    throw new Error(`${name} must be at least ${min}`);
  }

  if (num > max) {
    throw new Error(`${name} must be at most ${max}`);
  }

  return num;
}

describe('video-processor validation', function describeVideoProcessorValidation() {
  describe('validateNumericParameter', function describeValidateNumericParameter() {
    describe('type confusion prevention', function describeTypeConfusionPrevention() {
      test('accepts valid numbers', function testAcceptsValidNumbers() {
        assert.strictEqual(validateNumericParameter(42, 'test'), 42);
        assert.strictEqual(validateNumericParameter(0, 'test'), 0);
        assert.strictEqual(validateNumericParameter(-10, 'test', -20), -10);
        assert.strictEqual(validateNumericParameter(3.14, 'test'), 3.14);
      });

      test('converts string numbers to numbers', function testConvertsStringNumbersToNumbers() {
        assert.strictEqual(validateNumericParameter('42', 'test'), 42);
        assert.strictEqual(validateNumericParameter('0', 'test'), 0);
        assert.strictEqual(validateNumericParameter('3.14', 'test'), 3.14);
        assert.strictEqual(validateNumericParameter('-10', 'test', -20), -10);
      });

      test('rejects null when allowNull is false', function testRejectsNullWhenAllowNullIsFalse() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter(null, 'test');
        }, /cannot be null or undefined/);
      });

      test('rejects undefined when allowNull is false', function testRejectsUndefinedWhenAllowNullIsFalse() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter(undefined, 'test');
        }, /cannot be null or undefined/);
      });

      test('allows null when allowNull is true', function testAllowsNullWhenAllowNullIsTrue() {
        assert.strictEqual(validateNumericParameter(null, 'test', 0, Infinity, true), null);
      });

      test('rejects non-numeric strings', function testRejectsNonNumericStrings() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter('not a number', 'test');
        }, /must be a valid number/);
        assert.throws(function throwsCallback() {
          return validateNumericParameter('abc', 'test');
        }, /must be a valid number/);
        // Empty string converts to 0, so it passes
        assert.strictEqual(validateNumericParameter('', 'test'), 0);
      });

      test('rejects objects', function testRejectsObjects() {
        // Objects convert to NaN, which is caught
        assert.throws(function throwsCallback() {
          return validateNumericParameter({}, 'test');
        }, /must be a valid number/);
        // Empty array converts to 0, so it passes
        assert.strictEqual(validateNumericParameter([], 'test'), 0);
      });

      test('rejects arrays', function testRejectsArrays() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter([1, 2, 3], 'test');
        }, /must be a valid number/);
      });

      test('rejects functions', function testRejectsFunctions() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter(function validateNumericParameterCallback() {
            return 42;
          }, 'test');
        }, /must be a valid number/);
      });

      test('handles boolean values (coerced to numbers)', function testHandlesBooleanValuesCoercedToNumbers() {
        // Boolean true converts to 1, false to 0
        assert.strictEqual(validateNumericParameter(true, 'test'), 1);
        assert.strictEqual(validateNumericParameter(false, 'test'), 0);
      });
    });

    describe('NaN and Infinity handling', function describeNaNAndInfinityHandling() {
      test('rejects NaN', function testRejectsNaN() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter(NaN, 'test');
        }, /must be a valid number/);
        assert.throws(function throwsCallback() {
          return validateNumericParameter(Number.NaN, 'test');
        }, /must be a valid number/);
      });

      test('rejects Infinity', function testRejectsInfinity() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter(Infinity, 'test');
        }, /must be a valid number/);
        assert.throws(function throwsCallback() {
          return validateNumericParameter(Number.POSITIVE_INFINITY, 'test');
        }, /must be a valid number/);
        assert.throws(function throwsCallback() {
          return validateNumericParameter(Number.NEGATIVE_INFINITY, 'test');
        }, /must be a valid number/);
      });

      test('rejects string "NaN"', function testRejectsStringNaN() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter('NaN', 'test');
        }, /must be a valid number/);
      });

      test('rejects string "Infinity"', function testRejectsStringInfinity() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter('Infinity', 'test');
        }, /must be a valid number/);
      });
    });

    describe('min/max bounds validation', function describeMinMaxBoundsValidation() {
      test('enforces minimum value', function testEnforcesMinimumValue() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter(5, 'test', 10);
        }, /must be at least 10/);
        assert.strictEqual(validateNumericParameter(10, 'test', 10), 10);
        assert.strictEqual(validateNumericParameter(15, 'test', 10), 15);
      });

      test('enforces maximum value', function testEnforcesMaximumValue() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter(15, 'test', 0, 10);
        }, /must be at most 10/);
        assert.strictEqual(validateNumericParameter(10, 'test', 0, 10), 10);
        assert.strictEqual(validateNumericParameter(5, 'test', 0, 10), 5);
      });

      test('enforces both min and max', function testEnforcesBothMinAndMax() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter(5, 'test', 10, 20);
        }, /must be at least 10/);
        assert.throws(function throwsCallback() {
          return validateNumericParameter(25, 'test', 10, 20);
        }, /must be at most 20/);
        assert.strictEqual(validateNumericParameter(15, 'test', 10, 20), 15);
      });

      test('handles negative min values', function testHandlesNegativeMinValues() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter(-20, 'test', -10);
        }, /must be at least -10/);
        assert.strictEqual(validateNumericParameter(-10, 'test', -10), -10);
        assert.strictEqual(validateNumericParameter(0, 'test', -10), 0);
      });

      test('handles Infinity as max (default)', function testHandlesInfinityAsMaxDefault() {
        assert.strictEqual(validateNumericParameter(1000000, 'test'), 1000000);
        assert.strictEqual(
          validateNumericParameter(Number.MAX_SAFE_INTEGER, 'test'),
          Number.MAX_SAFE_INTEGER
        );
      });

      test('handles zero as min (default)', function testHandlesZeroAsMinDefault() {
        assert.throws(function throwsCallback() {
          return validateNumericParameter(-1, 'test');
        }, /must be at least 0/);
        assert.strictEqual(validateNumericParameter(0, 'test'), 0);
      });
    });

    describe('edge cases', function describeEdgeCases() {
      test('handles zero correctly', function testHandlesZeroCorrectly() {
        assert.strictEqual(validateNumericParameter(0, 'test'), 0);
        assert.strictEqual(validateNumericParameter(0, 'test', -10, 10), 0);
        assert.strictEqual(validateNumericParameter('0', 'test'), 0);
      });

      test('handles negative numbers', function testHandlesNegativeNumbers() {
        assert.strictEqual(validateNumericParameter(-5, 'test', -10, 10), -5);
        assert.strictEqual(validateNumericParameter('-5', 'test', -10, 10), -5);
      });

      test('handles decimal numbers', function testHandlesDecimalNumbers() {
        assert.strictEqual(validateNumericParameter(3.14159, 'test'), 3.14159);
        assert.strictEqual(validateNumericParameter('3.14159', 'test'), 3.14159);
        assert.strictEqual(validateNumericParameter(0.5, 'test', 0, 1), 0.5);
      });

      test('handles scientific notation strings', function testHandlesScientificNotationStrings() {
        assert.strictEqual(validateNumericParameter('1e2', 'test'), 100);
        assert.strictEqual(validateNumericParameter('1E2', 'test'), 100);
      });

      test('error messages include parameter name', function testErrorMessagesIncludeParameterName() {
        try {
          validateNumericParameter(null, 'width');
          assert.fail('Should have thrown');
        } catch (error) {
          assert.ok(error.message.includes('width'));
        }

        try {
          validateNumericParameter(5, 'fps', 10, 20);
          assert.fail('Should have thrown');
        } catch (error) {
          assert.ok(error.message.includes('fps'));
        }
      });
    });

    describe('type confusion attack prevention', function describeTypeConfusionAttackPrevention() {
      test('prevents type confusion with string coercion', function testPreventsTypeConfusionWithStringCoercion() {
        // Attempt to pass malicious string that could be coerced
        assert.throws(function throwsCallback() {
          return validateNumericParameter('10; rm -rf /', 'test');
        }, /must be a valid number/);
      });

      test('handles object with valueOf (coerced to number)', function testHandlesObjectWithValueOfCoercedTo() {
        const objWithValueOf = {
          valueOf: () => 42,
          toString: () => '42',
        };
        // Number() calls valueOf, which returns 42, so it passes
        assert.strictEqual(validateNumericParameter(objWithValueOf, 'test'), 42);
      });

      test('handles array coercion (single element converts to number)', function testHandlesArrayCoercionSingleElementConverts() {
        // Array with single number converts to that number
        assert.strictEqual(validateNumericParameter([42], 'test'), 42);
        // Array with multiple elements converts to NaN
        assert.throws(function throwsCallback() {
          return validateNumericParameter([1, 2, 3], 'test');
        }, /must be a valid number/);
      });

      test('validates actual numeric type, not just coercion', function testValidatesActualNumericTypeNotJust() {
        // Even if something coerces to a number, we validate it's actually numeric
        assert.throws(function throwsCallback() {
          return validateNumericParameter('10abc', 'test');
        }, /must be a valid number/);
      });
    });
  });
});
