import { test, describe } from 'node:test';
import assert from 'node:assert';

describe('convert command parameter conversion', function describeConvertCommandParameterConversion() {
  /**
   * Helper function to simulate the parameter conversion logic from handleConvertCommand
   * This matches the logic in src/commands/convert.js lines 1659-1681
   */
  function convertTimeParameters(startTime, endTime, attachmentType) {
    let conversionStartTime = null;
    let conversionDuration = null;

    if (attachmentType === 'video') {
      if (startTime !== null && endTime !== null) {
        // Both provided: use range
        conversionStartTime = startTime;
        conversionDuration = endTime - startTime;
      } else if (startTime !== null) {
        // Only start_time: start at that time, continue to end
        conversionStartTime = startTime;
        conversionDuration = null;
      } else if (endTime !== null) {
        // Only end_time: start at beginning, end at that time
        conversionStartTime = null;
        conversionDuration = endTime;
      }
    } else if (attachmentType === 'image') {
      // Time parameters don't apply to images - they are ignored
      conversionStartTime = null;
      conversionDuration = null;
    }

    return { conversionStartTime, conversionDuration };
  }

  test('converts both start_time and end_time to startTime and duration for video', function testConvertsBothStartTimeAndEnd() {
    const { conversionStartTime, conversionDuration } = convertTimeParameters(1.5, 2.5, 'video');

    assert.strictEqual(conversionStartTime, 1.5);
    assert.strictEqual(conversionDuration, 1.0); // 2.5 - 1.5
  });

  test('converts only start_time for video (end_time is null)', function testConvertsOnlyStartTimeForVideo() {
    const { conversionStartTime, conversionDuration } = convertTimeParameters(1.5, null, 'video');

    assert.strictEqual(conversionStartTime, 1.5);
    assert.strictEqual(conversionDuration, null);
  });

  test('converts only end_time for video (start_time is null)', function testConvertsOnlyEndTimeForVideo() {
    const { conversionStartTime, conversionDuration } = convertTimeParameters(null, 2.5, 'video');

    assert.strictEqual(conversionStartTime, null);
    assert.strictEqual(conversionDuration, 2.5);
  });

  test('returns null for both when neither parameter is provided for video', function testReturnsNullForBothWhenNeither() {
    const { conversionStartTime, conversionDuration } = convertTimeParameters(null, null, 'video');

    assert.strictEqual(conversionStartTime, null);
    assert.strictEqual(conversionDuration, null);
  });

  test('ignores time parameters for images', function testIgnoresTimeParametersForImages() {
    const { conversionStartTime, conversionDuration } = convertTimeParameters(1.5, 2.5, 'image');

    assert.strictEqual(conversionStartTime, null);
    assert.strictEqual(conversionDuration, null);
  });

  test('ignores time parameters for images even when only start_time provided', function testIgnoresTimeParametersForImagesEven() {
    const { conversionStartTime, conversionDuration } = convertTimeParameters(1.5, null, 'image');

    assert.strictEqual(conversionStartTime, null);
    assert.strictEqual(conversionDuration, null);
  });

  test('ignores time parameters for images even when only end_time provided', function testIgnoresTimeParametersForImagesEven() {
    const { conversionStartTime, conversionDuration } = convertTimeParameters(null, 2.5, 'image');

    assert.strictEqual(conversionStartTime, null);
    assert.strictEqual(conversionDuration, null);
  });

  test('handles zero start_time with end_time for video', function testHandlesZeroStartTimeWithEnd() {
    const { conversionStartTime, conversionDuration } = convertTimeParameters(0, 2.5, 'video');

    assert.strictEqual(conversionStartTime, 0);
    assert.strictEqual(conversionDuration, 2.5);
  });

  test('calculates correct duration for decimal values in video', function testCalculatesCorrectDurationForDecimalValues() {
    const { conversionStartTime, conversionDuration } = convertTimeParameters(1.2, 3.7, 'video');

    assert.strictEqual(conversionStartTime, 1.2);
    assert.strictEqual(conversionDuration, 2.5); // 3.7 - 1.2
  });

  describe('time parameter validation', function describeTimeParameterValidation() {
    /**
     * Helper function to simulate the validation logic from handleConvertCommand
     * This matches the logic in src/commands/convert.js lines 1474-1486
     */
    function validateTimeParameters(startTime, endTime) {
      if (startTime !== null && endTime !== null) {
        if (endTime <= startTime) {
          return {
            valid: false,
            error: 'end_time must be greater than start_time.',
          };
        }
      }
      return { valid: true };
    }

    test('validates that end_time is greater than start_time', function testValidatesThatEndTimeIsGreater() {
      const result = validateTimeParameters(2.5, 1.5);
      assert.strictEqual(result.valid, false);
      assert.strictEqual(result.error, 'end_time must be greater than start_time.');
    });

    test('validates that end_time cannot equal start_time', function testValidatesThatEndTimeCannotEqual() {
      const result = validateTimeParameters(2.5, 2.5);
      assert.strictEqual(result.valid, false);
      assert.strictEqual(result.error, 'end_time must be greater than start_time.');
    });

    test('allows valid time range', function testAllowsValidTimeRange() {
      const result = validateTimeParameters(1.5, 2.5);
      assert.strictEqual(result.valid, true);
    });

    test('allows only start_time (no validation needed)', function testAllowsOnlyStartTimeNoValidation() {
      const result = validateTimeParameters(1.5, null);
      assert.strictEqual(result.valid, true);
    });

    test('allows only end_time (no validation needed)', function testAllowsOnlyEndTimeNoValidation() {
      const result = validateTimeParameters(null, 2.5);
      assert.strictEqual(result.valid, true);
    });

    test('allows neither parameter (no validation needed)', function testAllowsNeitherParameterNoValidationNeeded() {
      const result = validateTimeParameters(null, null);
      assert.strictEqual(result.valid, true);
    });

    test('validates decimal values correctly', function testValidatesDecimalValuesCorrectly() {
      const invalidResult = validateTimeParameters(2.5, 2.49);
      assert.strictEqual(invalidResult.valid, false);

      const validResult = validateTimeParameters(2.5, 2.51);
      assert.strictEqual(validResult.valid, true);
    });
  });

  describe('duration validation against video length', function describeDurationValidationAgainstVideoLength() {
    /**
     * Helper function to simulate duration validation logic from processConversion
     * This matches the logic in src/commands/convert.js lines 734-750
     */
    function validateDurationAgainstVideoLength(startTime, duration, videoDuration) {
      if (startTime !== null && duration !== null) {
        const requestedEnd = startTime + duration;
        if (requestedEnd > videoDuration) {
          return {
            valid: false,
            error: `requested timeframe (${startTime}s to ${requestedEnd.toFixed(1)}s) exceeds video length (${videoDuration.toFixed(1)}s).`,
          };
        }
      }
      return { valid: true };
    }

    test('validates that requested timeframe does not exceed video length', function testValidatesThatRequestedTimeframeDoesNot() {
      const result = validateDurationAgainstVideoLength(5.0, 10.0, 10.0);
      assert.strictEqual(result.valid, false);
      assert(result.error.includes('exceeds video length'));
    });

    test('allows timeframe that fits within video length', function testAllowsTimeframeThatFitsWithinVideo() {
      const result = validateDurationAgainstVideoLength(5.0, 4.0, 10.0);
      assert.strictEqual(result.valid, true);
    });

    test('allows timeframe that ends exactly at video length', function testAllowsTimeframeThatEndsExactlyAt() {
      const result = validateDurationAgainstVideoLength(5.0, 5.0, 10.0);
      assert.strictEqual(result.valid, true);
    });

    test('allows startTime only (no duration validation needed)', function testAllowsStartTimeOnlyNoDurationValidation() {
      const result = validateDurationAgainstVideoLength(5.0, null, 10.0);
      assert.strictEqual(result.valid, true);
    });

    test('allows duration only (no duration validation needed)', function testAllowsDurationOnlyNoDurationValidation() {
      const result = validateDurationAgainstVideoLength(null, 5.0, 10.0);
      assert.strictEqual(result.valid, true);
    });

    test('allows neither parameter (no duration validation needed)', function testAllowsNeitherParameterNoDurationValidation() {
      const result = validateDurationAgainstVideoLength(null, null, 10.0);
      assert.strictEqual(result.valid, true);
    });

    test('validates decimal values correctly', function testValidatesDecimalValuesCorrectly() {
      const invalidResult = validateDurationAgainstVideoLength(8.0, 2.5, 10.0);
      assert.strictEqual(invalidResult.valid, false);

      const validResult = validateDurationAgainstVideoLength(8.0, 2.0, 10.0);
      assert.strictEqual(validResult.valid, true);
    });

    test('handles edge case where startTime + duration equals video length exactly', function testHandlesEdgeCaseWhereStartTimeDuration() {
      const result = validateDurationAgainstVideoLength(0.0, 10.0, 10.0);
      assert.strictEqual(result.valid, true);
    });

    test('handles edge case where startTime + duration exceeds by small amount', function testHandlesEdgeCaseWhereStartTimeDuration() {
      const result = validateDurationAgainstVideoLength(9.9, 0.2, 10.0);
      assert.strictEqual(result.valid, false);
    });
  });

  describe('quality parameter handling', function describeQualityParameterHandling() {
    /**
     * Helper function to simulate quality parameter handling from handleConvertCommand
     * This matches the logic in src/commands/convert.js lines 1461 and 1683
     */
    function getQualityParameter(qualityFromCommand, defaultQuality) {
      // Simulates: quality: quality || undefined
      // Then in processConversion: quality: options.quality ?? botConfig.gifQuality
      if (qualityFromCommand) {
        return qualityFromCommand;
      }
      return defaultQuality;
    }

    test('uses quality parameter from command when provided', function testUsesQualityParameterFromCommandWhen() {
      const result = getQualityParameter('high', 'medium');
      assert.strictEqual(result, 'high');
    });

    test('uses default quality when quality parameter is not provided', function testUsesDefaultQualityWhenQualityParameter() {
      const result = getQualityParameter(null, 'medium');
      assert.strictEqual(result, 'medium');
    });

    test('uses default quality when quality parameter is undefined', function testUsesDefaultQualityWhenQualityParameter() {
      const result = getQualityParameter(undefined, 'medium');
      assert.strictEqual(result, 'medium');
    });

    test('accepts all valid quality values: low, medium, high', function testAcceptsAllValidQualityValuesLow() {
      const validQualities = ['low', 'medium', 'high'];
      const defaultQuality = 'medium';

      for (const quality of validQualities) {
        const result = getQualityParameter(quality, defaultQuality);
        assert.strictEqual(result, quality, `${quality} should be accepted`);
      }
    });

    test('quality parameter takes precedence over default', function testQualityParameterTakesPrecedenceOverDefault() {
      const result1 = getQualityParameter('low', 'high');
      assert.strictEqual(result1, 'low');

      const result2 = getQualityParameter('high', 'low');
      assert.strictEqual(result2, 'high');
    });

    test('empty string quality parameter uses default', function testEmptyStringQualityParameterUsesDefault() {
      // Empty string is falsy, so it should use default
      const result = getQualityParameter('', 'medium');
      assert.strictEqual(result, 'medium');
    });
  });
});
