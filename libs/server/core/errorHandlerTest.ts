import { jest } from '@jest/globals';
import {
   TaskMasterErrorHandler,
   ErrorType,
   ErrorCategory,
   ErrorSeverity,
   getGlobalErrorHandler,
} from './error-handler';
import type { TaskMasterError } from './errorHandler';

describe('TaskMasterErrorHandler', () => {
   let errorHandler: TaskMasterErrorHandler;

   beforeEach(() => {
      errorHandler = new TaskMasterErrorHandler();
   });

   describe('Error Creation', () => {
      test('should create error with all required fields', () => {
         const error = errorHandler.createError(ErrorType.CLI_EXECUTION_FAILED, 'Command failed', {
            command: 'test',
         });

         expect(error.id).toBeDefined();
         expect(error.type).toBe(ErrorType.CLI_EXECUTION_FAILED);
         expect(error.category).toBe(ErrorCategory.CLI_EXECUTION);
         expect(error.severity).toBeDefined();
         expect(error.message).toBe('Command failed');
         expect(error.context).toEqual({ command: 'test' });
         expect(error.timestamp).toBeDefined();
      });

      test('should auto-assign appropriate category for error type', () => {
         const fileError = errorHandler.createError(ErrorType.FILE_NOT_FOUND, 'File missing');
         expect(fileError.category).toBe(ErrorCategory.FILE_SYSTEM);

         const networkError = errorHandler.createError(
            ErrorType.NETWORK_TIMEOUT,
            'Connection timeout'
         );
         expect(networkError.category).toBe(ErrorCategory.NETWORK);
      });

      test('should auto-assign severity based on error type', () => {
         const criticalError = errorHandler.createError(
            ErrorType.MEMORY_EXHAUSTED,
            'Out of memory'
         );
         expect(criticalError.severity).toBe(ErrorSeverity.CRITICAL);

         const lowError = errorHandler.createError(
            ErrorType.VALIDATION_RANGE_ERROR,
            'Value out of range'
         );
         expect(lowError.severity).toBe(ErrorSeverity.LOW);
      });
   });

   describe('Error Handling', () => {
      test('should handle errors with automatic recovery attempts', async () => {
         const error = errorHandler.createError(ErrorType.CLI_EXECUTION_FAILED, 'Command failed', {
            retryable: true,
         });

         const result = await errorHandler.handleError(error, true);
         expect(result.handled).toBe(true);
      });

      test('should emit error events', async () => {
         const errorSpy = jest.fn();
         const recoverySpy = jest.fn();

         errorHandler.on('error', errorSpy);
         errorHandler.on('errorRecovered', recoverySpy);

         const error = errorHandler.createError(ErrorType.CLI_EXECUTION_FAILED, 'Test error');

         await errorHandler.handleError(error, true);

         expect(errorSpy).toHaveBeenCalled();
      });

      test('should track error history', async () => {
         const error = errorHandler.createError(ErrorType.CLI_EXECUTION_FAILED, 'Test error');

         await errorHandler.handleError(error);

         const history = errorHandler.getErrorHistory();
         expect(history).toHaveLength(1);
         expect(history[0].error.id).toBe(error.id);
      });
   });

   describe('Retry Operations', () => {
      test('should retry failed operations', async () => {
         let attempts = 0;
         const operation = jest.fn(async () => {
            attempts++;
            if (attempts < 3) {
               throw new Error('Temporary failure');
            }
            return 'success';
         });

         const result = await errorHandler.retryOperation(
            operation,
            { test: true },
            { maxAttempts: 3, baseDelay: 10 }
         );

         expect(result).toBe('success');
         expect(attempts).toBe(3);
      });

      test('should respect max attempts limit', async () => {
         const operation = jest.fn(async () => {
            throw new Error('Always fails');
         });

         await expect(
            errorHandler.retryOperation(operation, {}, { maxAttempts: 2, baseDelay: 10 })
         ).rejects.toThrow();

         expect(operation).toHaveBeenCalledTimes(2);
      });
   });

   describe('Error Statistics', () => {
      test('should provide error statistics', async () => {
         const error1 = errorHandler.createError(ErrorType.CLI_EXECUTION_FAILED, 'Error 1');
         const error2 = errorHandler.createError(ErrorType.FILE_NOT_FOUND, 'Error 2');

         await errorHandler.handleError(error1);
         await errorHandler.handleError(error2);

         const stats = errorHandler.getErrorStats();
         expect(stats.totalErrors).toBe(2);
         expect(stats.errorsByCategory).toHaveProperty(ErrorCategory.CLI_EXECUTION);
         expect(stats.errorsByCategory).toHaveProperty(ErrorCategory.FILE_SYSTEM);
      });

      test('should calculate error rates correctly', async () => {
         const stats = errorHandler.getErrorStats();
         expect(stats.errorRate).toBeGreaterThanOrEqual(0);
         expect(typeof stats.errorRate).toBe('number');
      });
   });

   describe('Global Error Handler', () => {
      test('should provide singleton instance', () => {
         const handler1 = getGlobalErrorHandler();
         const handler2 = getGlobalErrorHandler();
         expect(handler1).toBe(handler2);
      });

      test('should be instance of TaskMasterErrorHandler', () => {
         const handler = getGlobalErrorHandler();
         expect(handler).toBeInstanceOf(TaskMasterErrorHandler);
      });
   });

   describe('Error Recovery', () => {
      test('should attempt automatic recovery for recoverable errors', async () => {
         const recoverableError = errorHandler.createError(
            ErrorType.NETWORK_TIMEOUT,
            'Temporary network issue',
            { retryable: true }
         );

         const result = await errorHandler.handleError(recoverableError, true);
         expect(result.handled).toBe(true);
      });

      test('should escalate non-recoverable errors', async () => {
         const escalationSpy = jest.fn();
         errorHandler.on('errorEscalated', escalationSpy);

         const nonRecoverableError = errorHandler.createError(
            ErrorType.MEMORY_EXHAUSTED,
            'Critical system error'
         );

         await errorHandler.handleError(nonRecoverableError);
         expect(escalationSpy).toHaveBeenCalled();
      });
   });
});
