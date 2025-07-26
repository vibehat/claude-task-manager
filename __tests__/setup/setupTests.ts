import { jest } from '@jest/globals';

// Global test setup
beforeAll(() => {
   // Set test environment variables
   process.env.NODE_ENV = 'test';
   process.env.JEST_WORKER_ID = '1';

   // Suppress console warnings during tests
   const originalWarn = console.warn;
   console.warn = (...args: any[]) => {
      // Suppress specific warnings that are expected in test environment
      const message = args[0];
      if (
         typeof message === 'string' &&
         (message.includes('punycode') ||
            message.includes('EBADENGINE') ||
            message.includes('DeprecationWarning'))
      ) {
         return;
      }
      originalWarn.apply(console, args);
   };
});

// Global test cleanup
afterAll(() => {
   // Clean up any global state
});

// Mock Next.js modules that aren't available in test environment
jest.mock('next/server', () => ({
   NextRequest: jest.fn(),
   NextResponse: {
      json: jest.fn((data, init) => ({
         json: async () => data,
         status: init?.status || 200,
         headers: new Map(),
         ...init,
      })),
   },
}));

// Mock Node.js modules that need special handling in tests
jest.mock('child_process', () => ({
   spawn: jest.fn(),
   ChildProcess: jest.fn(),
}));

// Mock file system operations for security
jest.mock('fs', () => ({
   ...jest.requireActual('fs'),
   writeFileSync: jest.fn(),
   readFileSync: jest.fn(),
   existsSync: jest.fn(),
   mkdirSync: jest.fn(),
}));

// Mock path operations
jest.mock('path', () => ({
   ...jest.requireActual('path'),
   resolve: jest.fn(),
   join: jest.fn(),
}));

// Global test utilities
declare global {
   namespace jest {
      interface Matchers<R> {
         toBeWithinRange(a: number, b: number): R;
      }
   }
}

// Custom matchers
expect.extend({
   toBeWithinRange(received: number, floor: number, ceiling: number) {
      const pass = received >= floor && received <= ceiling;
      if (pass) {
         return {
            message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
            pass: true,
         };
      } else {
         return {
            message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
            pass: false,
         };
      }
   },
});

// Export utilities for tests
export const createMockRequest = (body: any = {}, method = 'POST') => ({
   json: jest.fn().mockResolvedValue(body),
   method,
   url: 'http://localhost:3000/api/test',
   headers: new Map([['content-type', 'application/json']]),
});

export const createMockResponse = () => {
   const response = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      headers: new Map(),
   };
   return response;
};

// Test timeout utilities
export const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const withTimeout = async <T>(
   promise: Promise<T>,
   timeoutMs: number,
   timeoutMessage = 'Operation timed out'
): Promise<T> => {
   const timeout = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error(timeoutMessage)), timeoutMs);
   });

   return Promise.race([promise, timeout]);
};

// Dummy test to prevent "no tests" error
describe('Setup Tests', () => {
   it('should have global console mocked', () => {
      expect(typeof console.warn).toBe('function');
   });
});
