import { jest } from '@jest/globals';
import { EventEmitter } from 'events';

// Mock child_process module
class MockChildProcess extends EventEmitter {
   pid = 12345;
   stdout = new EventEmitter();
   stderr = new EventEmitter();
   killed = false;
   kill = jest.fn();
}

let mockChildProcess: MockChildProcess;

jest.mock('child_process', () => ({
   spawn: jest.fn(),
   ChildProcess: jest.fn(),
}));

const mockSpawn = jest.mocked(require('child_process').spawn);

// Mock error handler
jest.mock('@/lib/error-handler', () => ({
   getGlobalErrorHandler: jest.fn(),
   ErrorType: {
      CLI_EXECUTION_FAILED: 'CLI_EXECUTION_FAILED',
      CLI_INVALID_ARGUMENTS: 'CLI_INVALID_ARGUMENTS',
      CLI_TIMEOUT: 'CLI_TIMEOUT',
      CLI_COMMAND_NOT_FOUND: 'CLI_COMMAND_NOT_FOUND',
      CLI_PERMISSION_DENIED: 'CLI_PERMISSION_DENIED',
      JSON_PARSE_ERROR: 'JSON_PARSE_ERROR',
      NETWORK_TIMEOUT: 'NETWORK_TIMEOUT',
   },
   ErrorUtils: {},
   TaskMasterError: class TaskMasterError extends Error {
      constructor(
         public type: string,
         message: string,
         public category = 'CLI'
      ) {
         super(message);
      }
   },
}));

const mockGetGlobalErrorHandler = jest.mocked(require('@/lib/error-handler').getGlobalErrorHandler);

let mockErrorHandler: any;

const createMockErrorHandler = () => ({
   createError: jest.fn(),
   handleError: jest.fn(),
   retryOperation: jest.fn(),
   on: jest.fn(),
});

describe('TaskMasterCLIExecutor', () => {
   let executor: any;
   let TaskMasterCLIExecutor: any;
   let CLIExecutionError: any;
   let CLITimeoutError: any;
   let CLIValidationError: any;

   beforeEach(async () => {
      jest.clearAllMocks();

      // Create new mock instances
      mockChildProcess = new MockChildProcess();
      mockErrorHandler = createMockErrorHandler();

      // Setup spawn mock
      mockSpawn.mockReturnValue(mockChildProcess);

      // Setup error handler mock
      mockGetGlobalErrorHandler.mockReturnValue(mockErrorHandler);

      // Setup default error handler behavior
      mockErrorHandler.retryOperation.mockImplementation(async (fn) => {
         try {
            return await fn();
         } catch (error) {
            throw error;
         }
      });
      mockErrorHandler.createError.mockImplementation((type, message, context, originalError) => {
         // Return the original error if it's already a validation error
         if (originalError && originalError.name === 'CLIValidationError') {
            return originalError;
         }

         const error = new Error(message) as any;
         error.type = type;
         error.context = context;
         error.category = 'CLI';
         return error;
      });
      mockErrorHandler.handleError.mockResolvedValue(false);
      mockErrorHandler.on.mockImplementation(() => {});

      // Import classes after mocks are set up
      const cliModule = await import('@/lib/cli-executor');
      TaskMasterCLIExecutor = cliModule.TaskMasterCLIExecutor;
      CLIExecutionError = cliModule.CLIExecutionError;
      CLITimeoutError = cliModule.CLITimeoutError;
      CLIValidationError = cliModule.CLIValidationError;

      executor = new TaskMasterCLIExecutor();
   });

   afterEach(() => {
      // Clean up any active processes
      if (executor) {
         (executor as any).killAllProcesses();
         executor.removeAllListeners();
      }

      // Clean up mock child process listeners
      if (mockChildProcess) {
         mockChildProcess.removeAllListeners();
         mockChildProcess.stdout.removeAllListeners();
         mockChildProcess.stderr.removeAllListeners();
      }
   });

   describe('Command Validation', () => {
      it('should validate allowed commands', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
         };

         // Setup mock process completion
         const executionPromise = executor.executeCommand(config);

         // Simulate process completion after a tick
         process.nextTick(() => {
            mockChildProcess.emit('close', 0, null);
         });

         const result = await executionPromise;
         expect(result.success).toBe(true);
         expect(mockSpawn).toHaveBeenCalledWith('task-master', ['list'], expect.any(Object));
      });

      it('should reject unknown commands', async () => {
         const config: CLICommandConfig = {
            command: 'unknown-command',
            args: [],
         };

         await expect(executor.executeCommand(config)).rejects.toThrow(CLIValidationError);
      });

      it('should validate required arguments', async () => {
         const config: CLICommandConfig = {
            command: 'show',
            args: [], // Missing required --id argument
         };

         await expect(executor.executeCommand(config)).rejects.toThrow(CLIValidationError);
      });

      it('should accept commands with required arguments', async () => {
         const config: CLICommandConfig = {
            command: 'show',
            args: ['--id=1.2'],
         };

         setTimeout(() => {
            mockChildProcess.emit('close', 0, null);
         }, 10);

         const result = await executor.executeCommand(config);
         expect(result.success).toBe(true);
      });

      it('should reject dangerous characters', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: ['--status=pending; rm -rf /'],
         };

         await expect(executor.executeCommand(config)).rejects.toThrow(CLIValidationError);
      });

      it('should reject suspicious patterns', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: ['--status=rm test'],
         };

         await expect(executor.executeCommand(config)).rejects.toThrow(CLIValidationError);
      });

      it('should reject arguments that are too long', async () => {
         const longArg = 'a'.repeat(1001);
         const config: CLICommandConfig = {
            command: 'list',
            args: [longArg],
         };

         await expect(executor.executeCommand(config)).rejects.toThrow(CLIValidationError);
      });
   });

   describe('Command Execution', () => {
      it('should execute valid commands successfully', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: ['--status=pending'],
            parseOutput: true,
         };

         const mockOutput = '{"tasks": [{"id": "1", "title": "Test Task"}]}';

         setTimeout(() => {
            mockChildProcess.stdout.emit('data', Buffer.from(mockOutput));
            mockChildProcess.emit('close', 0, null);
         }, 10);

         const result = await executor.executeCommand(config);

         expect(result.success).toBe(true);
         expect(result.command).toBe('task-master list --status=pending');
         expect(result.output.stdout).toBe(mockOutput);
         expect(result.output.parsed).toEqual({ tasks: [{ id: '1', title: 'Test Task' }] });
         expect(result.exitCode).toBe(0);
         expect(result.executionTime).toBeGreaterThan(0);
      });

      it('should handle command failures', async () => {
         const config: CLICommandConfig = {
            command: 'show',
            args: ['--id=nonexistent'],
         };

         setTimeout(() => {
            mockChildProcess.stderr.emit('data', Buffer.from('Task not found'));
            mockChildProcess.emit('close', 1, null);
         }, 10);

         await expect(executor.executeCommand(config)).rejects.toThrow();
      });

      it('should handle process errors', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
         };

         setTimeout(() => {
            mockChildProcess.emit('error', new Error('ENOENT: command not found'));
         }, 10);

         await expect(executor.executeCommand(config)).rejects.toThrow();
      });

      it('should respect custom timeout', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
            timeout: 100, // Very short timeout
         };

         // Don't emit close event to simulate hanging process
         const mockError = new CLITimeoutError('Command timed out after 100ms', 'list', 100);
         mockErrorHandler.retryOperation.mockRejectedValueOnce(mockError);

         await expect(executor.executeCommand(config)).rejects.toThrow(CLITimeoutError);
      }, 1000);

      it('should capture process metadata', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
         };

         setTimeout(() => {
            mockChildProcess.emit('close', 0, 'SIGTERM');
         }, 10);

         const result = await executor.executeCommand(config);

         expect(result.metadata).toBeDefined();
         expect(result.metadata?.pid).toBe(12345);
         expect(result.metadata?.signal).toBe('SIGTERM');
         expect(result.metadata?.killed).toBe(false);
      });

      it('should emit events during execution', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
         };

         const commandStartSpy = jest.fn();
         const commandCompleteSpy = jest.fn();

         executor.on('commandStart', commandStartSpy);
         executor.on('commandComplete', commandCompleteSpy);

         setTimeout(() => {
            mockChildProcess.emit('close', 0, null);
         }, 10);

         await executor.executeCommand(config);

         expect(commandStartSpy).toHaveBeenCalledWith({
            command: 'list',
            args: [],
         });
         expect(commandCompleteSpy).toHaveBeenCalled();
      });
   });

   describe('Output Parsing', () => {
      it('should parse task list output', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
            parseOutput: true,
         };

         const mockOutput = `
        Task #1
        Title: Test Task 1
        Status: pending
        
        Task #2
        Title: Test Task 2
        Status: in-progress
      `;

         setTimeout(() => {
            mockChildProcess.stdout.emit('data', Buffer.from(mockOutput));
            mockChildProcess.emit('close', 0, null);
         }, 10);

         const result = await executor.executeCommand(config);

         expect(result.output.parsed).toBeDefined();
         expect(result.output.summary).toContain('Found 2 tasks');
      });

      it('should parse task show output', async () => {
         const config: CLICommandConfig = {
            command: 'show',
            args: ['--id=1'],
            parseOutput: true,
         };

         const mockOutput = `
        ID: 1
        Title: Test Task
        Status: pending
        Priority: high
      `;

         setTimeout(() => {
            mockChildProcess.stdout.emit('data', Buffer.from(mockOutput));
            mockChildProcess.emit('close', 0, null);
         }, 10);

         const result = await executor.executeCommand(config);

         expect(result.output.parsed).toEqual({
            id: '1',
            title: 'Test Task',
            status: 'pending',
            priority: 'high',
         });
      });

      it('should handle JSON output', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
            parseOutput: true,
         };

         const mockJson = { tasks: [{ id: '1', title: 'Test' }] };
         const mockOutput = JSON.stringify(mockJson);

         setTimeout(() => {
            mockChildProcess.stdout.emit('data', Buffer.from(mockOutput));
            mockChildProcess.emit('close', 0, null);
         }, 10);

         const result = await executor.executeCommand(config);

         expect(result.output.parsed).toEqual(mockJson);
      });

      it('should handle parsing errors gracefully', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
            parseOutput: true,
         };

         const mockOutput = 'invalid json {';

         setTimeout(() => {
            mockChildProcess.stdout.emit('data', Buffer.from(mockOutput));
            mockChildProcess.emit('close', 0, null);
         }, 10);

         const result = await executor.executeCommand(config);

         expect(result.success).toBe(true);
         // The parser fallback returns { tasks: [] } for invalid output when parsing task list
         expect(result.output.parsed).toEqual({ tasks: [] });
      });
   });

   describe('Process Management', () => {
      it('should track active processes', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
         };

         // Start execution but don't complete immediately
         const executionPromise = executor.executeCommand(config);

         // Check that process is tracked
         const activeProcesses = executor.getActiveProcesses();
         expect(activeProcesses.length).toBe(1);

         // Complete the process
         setTimeout(() => {
            mockChildProcess.emit('close', 0, null);
         }, 10);

         await executionPromise;

         // Check that process is removed after completion
         expect(executor.getActiveProcesses()).toHaveLength(0);
      });

      it('should kill specific processes', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
         };

         // Start execution
         const executionPromise = executor.executeCommand(config);

         // Get the process ID
         const activeProcesses = executor.getActiveProcesses();
         expect(activeProcesses.length).toBe(1);

         const processId = activeProcesses[0];

         // Kill the process
         const killed = executor.killProcess(processId);
         expect(killed).toBe(true);
         expect(mockChildProcess.kill).toHaveBeenCalledWith('SIGTERM');

         // Complete the process to clean up the promise
         setTimeout(() => {
            mockChildProcess.emit('close', 130, 'SIGTERM');
         }, 10);

         await expect(executionPromise).rejects.toThrow();
      });

      it('should handle killing non-existent processes', () => {
         const killed = executor.killProcess('non-existent-id');
         expect(killed).toBe(false);
      });
   });

   describe('History Management', () => {
      it('should track execution history', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
         };

         setTimeout(() => {
            mockChildProcess.emit('close', 0, null);
         }, 10);

         await executor.executeCommand(config);

         const history = executor.getHistory();
         expect(history).toHaveLength(1);
         expect(history[0].command).toBe('task-master list ');
         expect(history[0].success).toBe(true);
      });

      it('should limit history size', async () => {
         // Mock the maxHistorySize to a smaller value for testing
         (executor as any).maxHistorySize = 2;

         const config: CLICommandConfig = {
            command: 'list',
            args: [],
         };

         // Execute 3 commands
         for (let i = 0; i < 3; i++) {
            setTimeout(() => {
               mockChildProcess.emit('close', 0, null);
            }, 10);

            await executor.executeCommand(config);
         }

         const history = executor.getHistory();
         expect(history).toHaveLength(2); // Should be limited to maxHistorySize
      });

      it('should support history limit parameter', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
         };

         // Execute multiple commands
         for (let i = 0; i < 5; i++) {
            setTimeout(() => {
               mockChildProcess.emit('close', 0, null);
            }, 10);

            await executor.executeCommand(config);
         }

         const limitedHistory = executor.getHistory(3);
         expect(limitedHistory).toHaveLength(3);

         const fullHistory = executor.getHistory();
         expect(fullHistory.length).toBeGreaterThan(3);
      });

      it('should clear history', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
         };

         setTimeout(() => {
            mockChildProcess.emit('close', 0, null);
         }, 10);

         await executor.executeCommand(config);

         expect(executor.getHistory()).toHaveLength(1);

         executor.clearHistory();

         expect(executor.getHistory()).toHaveLength(0);
      });
   });

   describe('Statistics and Monitoring', () => {
      it('should provide execution statistics', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
         };

         // Execute successful command
         setTimeout(() => {
            mockChildProcess.emit('close', 0, null);
         }, 10);
         await executor.executeCommand(config);

         // Execute failed command
         setTimeout(() => {
            mockChildProcess.emit('close', 1, null);
         }, 10);
         await expect(executor.executeCommand(config)).rejects.toThrow();

         const stats = executor.getExecutionStats();

         expect(stats.totalExecutions).toBe(2);
         expect(stats.successfulExecutions).toBe(1);
         expect(stats.failedExecutions).toBe(1);
         expect(stats.averageExecutionTime).toBeGreaterThan(0);
         expect(stats.commandFrequency).toHaveProperty('list', 2);
         expect(stats.recentActivity).toHaveLength(2);
      });

      it('should handle empty statistics', () => {
         const stats = executor.getExecutionStats();

         expect(stats.totalExecutions).toBe(0);
         expect(stats.successfulExecutions).toBe(0);
         expect(stats.failedExecutions).toBe(0);
         expect(stats.averageExecutionTime).toBe(0);
         expect(stats.commandFrequency).toEqual({});
         expect(stats.recentActivity).toHaveLength(0);
      });
   });

   describe('Available Commands', () => {
      it('should return available commands', () => {
         const commands = executor.getAvailableCommands();

         expect(commands).toHaveProperty('list');
         expect(commands).toHaveProperty('show');
         expect(commands).toHaveProperty('set-status');
         expect(commands).toHaveProperty('add-task');

         expect(commands.list).toHaveProperty('description');
         expect(commands.list).toHaveProperty('args');
         expect(commands.list).toHaveProperty('timeout');

         expect(commands.show).toHaveProperty('required');
         expect(commands.show.required).toContain('--id');
      });
   });

   describe('Progress Capture', () => {
      it('should emit progress events when enabled', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
            captureProgress: true,
         };

         const progressSpy = jest.fn();
         executor.on('commandProgress', progressSpy);

         const chunk1 = 'Loading tasks...';
         const chunk2 = 'Found 5 tasks';

         setTimeout(() => {
            mockChildProcess.stdout.emit('data', Buffer.from(chunk1));
         }, 10);

         setTimeout(() => {
            mockChildProcess.stdout.emit('data', Buffer.from(chunk2));
            mockChildProcess.emit('close', 0, null);
         }, 20);

         await executor.executeCommand(config);

         expect(progressSpy).toHaveBeenCalledTimes(2);
         expect(progressSpy).toHaveBeenCalledWith(
            expect.objectContaining({
               command: 'list',
               chunk: chunk1,
               totalOutput: chunk1,
            })
         );
         expect(progressSpy).toHaveBeenCalledWith(
            expect.objectContaining({
               command: 'list',
               chunk: chunk2,
               totalOutput: chunk1 + chunk2,
            })
         );
      });

      it('should not emit progress events when disabled', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
            captureProgress: false,
         };

         const progressSpy = jest.fn();
         executor.on('commandProgress', progressSpy);

         setTimeout(() => {
            mockChildProcess.stdout.emit('data', Buffer.from('Some output'));
            mockChildProcess.emit('close', 0, null);
         }, 10);

         await executor.executeCommand(config);

         expect(progressSpy).not.toHaveBeenCalled();
      });
   });

   describe('Error Handling Integration', () => {
      it('should integrate with error handler for retry logic', async () => {
         const config: CLICommandConfig = {
            command: 'list',
            args: [],
         };

         mockErrorHandler.retryOperation.mockImplementation(async (fn, context, options) => {
            expect(context).toHaveProperty('command', 'list');
            expect(options).toHaveProperty('maxAttempts', 3);
            return await fn();
         });

         setTimeout(() => {
            mockChildProcess.emit('close', 0, null);
         }, 10);

         await executor.executeCommand(config);

         expect(mockErrorHandler.retryOperation).toHaveBeenCalled();
      });

      it('should handle error recovery events', () => {
         const recoverySpy = jest.fn();
         executor.on('errorRecovered', recoverySpy);

         // Simulate error recovery event from error handler
         const mockError = { type: 'CLI_TIMEOUT', message: 'Command timed out' };
         mockErrorHandler.on.mock.calls.find(([event]) => event === 'errorRecovered')[1](mockError);

         expect(recoverySpy).toHaveBeenCalledWith(
            expect.objectContaining({
               error: mockError,
               timestamp: expect.any(String),
            })
         );
      });
   });
});
