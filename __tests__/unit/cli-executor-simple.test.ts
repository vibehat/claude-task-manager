import { jest } from '@jest/globals';
import { TaskMasterCLIExecutor } from '@/lib/cli-executor';

// Simple tests to verify basic functionality
describe('TaskMasterCLIExecutor - Basic Tests', () => {
   let executor: TaskMasterCLIExecutor;

   beforeAll(() => {
      // Mock the error handler to avoid initialization issues
      jest.doMock('@/lib/error-handler', () => ({
         getGlobalErrorHandler: () => ({
            retryOperation: jest.fn((fn) => fn()),
            createError: jest.fn(() => new Error('mocked error')),
            on: jest.fn(),
         }),
         ErrorType: {},
         ErrorUtils: {},
      }));
   });

   beforeEach(() => {
      executor = new TaskMasterCLIExecutor();
   });

   afterEach(() => {
      if (executor) {
         // Clean up any active processes
         (executor as any).killAllProcesses();
      }
   });

   describe('Initialization', () => {
      it('should create executor instance', () => {
         expect(executor).toBeDefined();
         expect(executor).toBeInstanceOf(TaskMasterCLIExecutor);
      });

      it('should have empty history initially', () => {
         const history = executor.getHistory();
         expect(history).toEqual([]);
      });

      it('should have no active processes initially', () => {
         const activeProcesses = executor.getActiveProcesses();
         expect(activeProcesses).toEqual([]);
      });
   });

   describe('Available Commands', () => {
      it('should return available commands', () => {
         const commands = executor.getAvailableCommands();

         expect(commands).toBeDefined();
         expect(typeof commands).toBe('object');

         // Check for some expected commands
         expect(commands).toHaveProperty('list');
         expect(commands).toHaveProperty('show');
         expect(commands).toHaveProperty('set-status');

         // Verify command structure
         expect(commands.list).toHaveProperty('description');
         expect(commands.list).toHaveProperty('args');
         expect(commands.list).toHaveProperty('timeout');

         expect(commands.show).toHaveProperty('required');
         expect(Array.isArray(commands.show.required)).toBe(true);
      });
   });

   describe('Statistics', () => {
      it('should provide execution statistics', () => {
         const stats = executor.getExecutionStats();

         expect(stats).toBeDefined();
         expect(stats).toHaveProperty('totalExecutions');
         expect(stats).toHaveProperty('successfulExecutions');
         expect(stats).toHaveProperty('failedExecutions');
         expect(stats).toHaveProperty('averageExecutionTime');
         expect(stats).toHaveProperty('commandFrequency');
         expect(stats).toHaveProperty('recentActivity');

         // For a new executor, these should be zero/empty
         expect(stats.totalExecutions).toBe(0);
         expect(stats.successfulExecutions).toBe(0);
         expect(stats.failedExecutions).toBe(0);
         expect(stats.averageExecutionTime).toBe(0);
         expect(stats.recentActivity).toEqual([]);
      });
   });

   describe('History Management', () => {
      it('should support clearing history', () => {
         executor.clearHistory();
         const history = executor.getHistory();
         expect(history).toEqual([]);
      });

      it('should support history limit parameter', () => {
         const limitedHistory = executor.getHistory(5);
         expect(Array.isArray(limitedHistory)).toBe(true);
         expect(limitedHistory.length).toBeLessThanOrEqual(5);
      });
   });

   describe('Process Management', () => {
      it('should handle killing non-existent processes', () => {
         const result = executor.killProcess('non-existent-id');
         expect(result).toBe(false);
      });
   });
});
