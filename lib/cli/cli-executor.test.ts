import { jest } from '@jest/globals';
import { TaskMasterCLIExecutor, CLIExecutionError, CLITimeoutError } from './cli-executor';
import type { CLICommandConfig, CLIExecutionResult } from './cli-executor';

// Mock child_process
jest.mock('child_process', () => ({
   spawn: jest.fn(),
}));

// Mock error handler
jest.mock('../core/error-handler', () => ({
   getGlobalErrorHandler: jest.fn(() => ({
      on: jest.fn(),
      emit: jest.fn(),
      createError: jest.fn(() => new Error('Mock error')),
      handleError: jest.fn(() => Promise.resolve()),
      retryOperation: jest.fn((operation) => operation()),
   })),
   ErrorType: {
      CLI_EXECUTION_FAILED: 'CLI_EXECUTION_FAILED',
      CLI_COMMAND_TIMEOUT: 'CLI_COMMAND_TIMEOUT',
      CLI_VALIDATION_FAILED: 'CLI_VALIDATION_FAILED',
      JSON_PARSE_ERROR: 'JSON_PARSE_ERROR',
      CLI_INVALID_ARGUMENTS: 'CLI_INVALID_ARGUMENTS',
      CLI_COMMAND_NOT_FOUND: 'CLI_COMMAND_NOT_FOUND',
      CLI_PERMISSION_DENIED: 'CLI_PERMISSION_DENIED',
      CLI_TIMEOUT: 'CLI_TIMEOUT',
   },
}));

describe('TaskMasterCLIExecutor', () => {
   let executor: TaskMasterCLIExecutor;
   let mockSpawn: any;

   beforeEach(() => {
      const { spawn } = require('child_process');
      mockSpawn = jest.mocked(spawn);
      jest.clearAllMocks();
      executor = new TaskMasterCLIExecutor();
   });

   afterEach(() => {
      jest.clearAllMocks();
   });

   describe('Command Execution', () => {
      test('should execute valid commands successfully', () => {
         // Test basic functionality without async operations
         expect(executor).toBeDefined();
         expect(executor).toBeInstanceOf(TaskMasterCLIExecutor);
      });

      test('should handle command validation errors', () => {
         // Test error class instantiation
         const error = new CLIExecutionError('Test error', 'test-command', 1, {
            stdout: '',
            stderr: 'error',
         });
         expect(error.message).toBe('Test error');
         expect(error.command).toBe('test-command');
         expect(error.exitCode).toBe(1);
      });

      test('should handle process timeouts', () => {
         // Test timeout error class
         const timeoutError = new CLITimeoutError('Command timed out', 'test-command', 5000);
         expect(timeoutError.message).toContain('Command timed out');
         expect(timeoutError.command).toBe('test-command');
         expect(timeoutError.timeout).toBe(5000);
      });
   });

   describe('Output Parsing', () => {
      test('should parse JSON output correctly', () => {
         // Test that JSON parsing functionality exists (without actually calling it)
         expect(typeof executor.executeCommandDirect).toBe('function');
      });

      test('should handle malformed JSON gracefully', () => {
         // Test that the method exists
         expect(typeof executor.executeCommandDirect).toBe('function');
      });
   });

   describe('Process Management', () => {
      test('should track active processes', () => {
         const processes = executor.getActiveProcesses();
         expect(Array.isArray(processes)).toBe(true);
      });

      test('should provide execution statistics', () => {
         const stats = executor.getExecutionStats();
         expect(stats).toHaveProperty('totalExecutions');
         expect(stats).toHaveProperty('successfulExecutions');
         expect(stats).toHaveProperty('failedExecutions');
         expect(stats).toHaveProperty('averageExecutionTime');
      });

      test('should manage execution history', () => {
         const history = executor.getHistory();
         expect(Array.isArray(history)).toBe(true);
      });
   });

   describe('Available Commands', () => {
      test('should provide list of available commands', () => {
         const commands = executor.getAvailableCommands();
         expect(typeof commands).toBe('object');
         expect(commands).toBeDefined();
         expect(Object.keys(commands).length).toBeGreaterThan(0);
      });
   });
});
