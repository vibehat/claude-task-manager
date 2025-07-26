#!/usr/bin/env node

const {
  mergeFeatures,
} = require('./sync-features');

function test(description, testFn) {
  try {
    console.log(`\n🧪 Testing: ${description}`);
    testFn();
    console.log(`✅ PASSED: ${description}`);
    return true;
  } catch (error) {
    console.log(`❌ FAILED: ${description}`);
    console.log(`   Error: ${error.message}`);
    return false;
  }
}

function expect(actual) {
  return {
    toEqual: (expected) => {
      const actualStr = JSON.stringify(actual, null, 2);
      const expectedStr = JSON.stringify(expected, null, 2);
      if (actualStr !== expectedStr) {
        throw new Error(`Expected:\n${expectedStr}\n\nActual:\n${actualStr}`);
      }
    },
    toHaveProperty: (property) => {
      if (!(property in actual)) {
        throw new Error(`Expected object to have property "${property}"`);
      }
    }
  };
}

// Mock console to suppress output during tests
const originalLog = console.log;
console.log = () => {};

console.log = originalLog;

let passedTests = 0;
let totalTests = 0;

// Test from our updated test suite - should now PASS
totalTests++;
if (test('mergeFeatures should use raw folder names (should now PASS)', () => {
  const existingFeatures = {
    'auth': { 'changed-files': ['apps/api/src/domains/auth/**'] }
  };
  const discoveredDomains = ['auth', 'payment'];
  const featuresRoots = ['apps/api/src/domains'];
  const existingLabels = { features: existingFeatures };

  const result = mergeFeatures(existingFeatures, discoveredDomains, featuresRoots, existingLabels);

  expect(result.labels.features).toEqual({
    'auth': { 'changed-files': ['apps/api/src/domains/auth/**'] },
    'payment': { 'changed-files': ['apps/api/src/domains/payment/**'] }
  });
})) passedTests++;

// Test with complex names from our test suite - should now PASS
totalTests++;
if (test('mergeFeatures with complex domain names (should now use raw names)', () => {
  const existingFeatures = {};
  const discoveredDomains = ['user-account-management', 'api-gateway-service'];
  const featuresRoots = ['apps/api/src/domains'];
  const existingLabels = {};

  const result = mergeFeatures(existingFeatures, discoveredDomains, featuresRoots, existingLabels);

  expect(result.labels.features).toHaveProperty('user-account-management');
  expect(result.labels.features).toHaveProperty('api-gateway-service');
})) passedTests++;

// Test multiple feature roots
totalTests++;
if (test('mergeFeatures should handle multiple feature roots with raw names', () => {
  const existingFeatures = {};
  const discoveredDomains = ['auth'];
  const featuresRoots = ['apps/api/src/domains', 'apps/web/src/features'];
  const existingLabels = {};

  const result = mergeFeatures(existingFeatures, discoveredDomains, featuresRoots, existingLabels);

  expect(result.labels.features.auth['changed-files']).toEqual([
    'apps/api/src/domains/auth/**',
    'apps/web/src/features/auth/**'
  ]);
})) passedTests++;

console.log(`\n📊 Test Results: ${passedTests}/${totalTests} tests passed`);

if (passedTests === totalTests) {
  console.log('🎉 All tests PASSED! The implementation now uses raw folder names.');
  console.log('✅ Our test case updates are validated and working correctly.');
} else {
  console.log('❌ Some tests failed. The implementation may need further updates.');
}
