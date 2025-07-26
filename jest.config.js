/** @type {import('jest').Config} */
const config = {
   // Test environment
   testEnvironment: 'node',

   // Use TypeScript with ts-jest
   preset: 'ts-jest',

   // Test file patterns
   testMatch: ['**/__tests__/**/*.(js|jsx|ts|tsx)', '**/*.(test|spec).(js|jsx|ts|tsx)'],

   // Module name mapping to resolve path aliases
   moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
      '^@/lib/(.*)$': '<rootDir>/lib/$1',
      '^@/app/(.*)$': '<rootDir>/app/$1',
      '^@/components/(.*)$': '<rootDir>/components/$1',
      '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
      '^@/store/(.*)$': '<rootDir>/store/$1',
      '^@/types/(.*)$': '<rootDir>/lib/types/$1',
   },

   // Files to ignore
   testPathIgnorePatterns: [
      '<rootDir>/.next/',
      '<rootDir>/node_modules/',
      '<rootDir>/.taskmaster/',
   ],

   // Module file extensions
   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

   // Setup files
   setupFilesAfterEnv: ['<rootDir>/__tests__/setup/setupTests.ts'],

   // Coverage configuration
   collectCoverageFrom: [
      'lib/**/*.{ts,tsx}',
      'app/api/**/*.{ts,tsx}',
      '!lib/types/**',
      '!**/*.d.ts',
      '!**/*.config.{ts,js}',
      '!**/node_modules/**',
      '!**/__tests__/**',
      '!**/*.test.{ts,tsx}',
      '!**/*.spec.{ts,tsx}',
   ],

   // Coverage thresholds
   coverageThreshold: {
      'global': {
         branches: 80,
         functions: 80,
         lines: 80,
         statements: 80,
      },
      './lib/cli-executor.ts': {
         branches: 90,
         functions: 90,
         lines: 90,
         statements: 90,
      },
   },

   // Coverage output
   coverageReporters: ['text', 'lcov', 'html'],
   coverageDirectory: '<rootDir>/coverage',

   // Clear mocks between tests
   clearMocks: true,
   resetMocks: true,
   restoreMocks: true,

   // Verbose output for debugging
   verbose: true,

   // Timeout for tests
   testTimeout: 30000,

   // Max concurrent workers
   maxWorkers: '50%',

   // Transform configuration with ts-jest options
   transform: {
      '^.+\\.(ts|tsx)$': [
         'ts-jest',
         {
            tsconfig: {
               jsx: 'react-jsx',
            },
         },
      ],
   },
};

module.exports = config;
