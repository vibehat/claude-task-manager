import { jest } from '@jest/globals';
import { EventEmitter } from 'events';
import type { CLIExecutionResult, CLICommandConfig } from '@/lib/cli-executor';

// Mock CLI execution results
export const mockSuccessResult: CLIExecutionResult = {
   success: true,
   command: 'task-master list',
   output: {
      stdout: '{"tasks": [{"id": "1", "title": "Test Task", "status": "pending"}]}',
      stderr: '',
      parsed: { tasks: [{ id: '1', title: 'Test Task', status: 'pending' }] },
      summary: 'Found 1 tasks',
   },
   exitCode: 0,
   executionTime: 1500,
   timestamp: '2025-07-26T03:00:00.000Z',
   metadata: {
      pid: 12345,
      signal: null,
      killed: false,
      timedOut: false,
   },
};

export const mockFailureResult: CLIExecutionResult = {
   success: false,
   command: 'task-master show --id=invalid',
   output: {
      stdout: '',
      stderr: 'Task not found: invalid',
      parsed: null,
      summary: 'Command failed',
   },
   exitCode: 1,
   executionTime: 800,
   timestamp: '2025-07-26T03:00:00.000Z',
   metadata: {
      pid: 12346,
      signal: null,
      killed: false,
      timedOut: false,
   },
};

export const mockTimeoutResult: CLIExecutionResult = {
   success: false,
   command: 'task-master expand --all',
   output: {
      stdout: 'Processing tasks...',
      stderr: '',
      parsed: null,
      summary: 'Command timed out',
   },
   exitCode: 130,
   executionTime: 30000,
   timestamp: '2025-07-26T03:00:00.000Z',
   metadata: {
      pid: 12347,
      signal: 'SIGTERM',
      killed: true,
      timedOut: true,
   },
};

// Mock CLI executor class
export class MockTaskMasterCLIExecutor extends EventEmitter {
   private mockHistory: CLIExecutionResult[] = [mockSuccessResult, mockFailureResult];
   private mockActiveProcesses = new Map<string, any>();

   executeCommand = jest.fn<Promise<CLIExecutionResult>, [CLICommandConfig]>();
   getHistory = jest.fn<CLIExecutionResult[], [number?]>();
   getActiveProcesses = jest.fn<string[], []>();
   getAvailableCommands = jest.fn();
   killProcess = jest.fn<boolean, [string]>();
   clearHistory = jest.fn<void, []>();
   getExecutionStats = jest.fn();

   constructor() {
      super();
      this.setupDefaultMocks();
   }

   private setupDefaultMocks() {
      // Default successful execution
      this.executeCommand.mockImplementation(async (config: CLICommandConfig) => {
         // Simulate command execution based on command type
         if (config.command === 'list') {
            return {
               ...mockSuccessResult,
               command: `task-master ${config.command} ${config.args.join(' ')}`,
            };
         }

         if (config.command === 'show' && config.args.includes('--id=invalid')) {
            return mockFailureResult;
         }

         if (config.timeout && config.timeout < 1000) {
            return mockTimeoutResult;
         }

         return {
            ...mockSuccessResult,
            command: `task-master ${config.command} ${config.args.join(' ')}`,
            executionTime: Math.random() * 2000,
         };
      });

      this.getHistory.mockImplementation((limit?: number) => {
         return limit ? this.mockHistory.slice(0, limit) : [...this.mockHistory];
      });

      this.getActiveProcesses.mockReturnValue([]);

      this.getAvailableCommands.mockReturnValue({
         'list': { description: 'List all tasks', args: ['--status', '--priority'] },
         'show': { description: 'Show task details', args: ['--id'], required: ['--id'] },
         'set-status': {
            description: 'Update task status',
            args: ['--id', '--status'],
            required: ['--id', '--status'],
         },
      });

      this.killProcess.mockImplementation((id: string) => {
         if (this.mockActiveProcesses.has(id)) {
            this.mockActiveProcesses.delete(id);
            return true;
         }
         return false;
      });

      this.clearHistory.mockImplementation(() => {
         this.mockHistory = [];
      });

      this.getExecutionStats.mockReturnValue({
         totalExecutions: 2,
         successfulExecutions: 1,
         failedExecutions: 1,
         averageExecutionTime: 1150,
         commandFrequency: { list: 1, show: 1 },
         recentActivity: this.mockHistory.slice(0, 5),
      });
   }

   // Utility methods for testing
   mockCommandExecution(command: string, result: CLIExecutionResult) {
      this.executeCommand.mockImplementation(async (config: CLICommandConfig) => {
         if (config.command === command) {
            return result;
         }
         return mockSuccessResult;
      });
   }

   mockCommandFailure(command: string, error: Error) {
      this.executeCommand.mockImplementation(async (config: CLICommandConfig) => {
         if (config.command === command) {
            throw error;
         }
         return mockSuccessResult;
      });
   }

   addMockActiveProcess(id: string) {
      this.mockActiveProcesses.set(id, { pid: Math.floor(Math.random() * 10000) });
      this.getActiveProcesses.mockReturnValue(Array.from(this.mockActiveProcesses.keys()));
   }

   reset() {
      this.executeCommand.mockClear();
      this.getHistory.mockClear();
      this.getActiveProcesses.mockClear();
      this.getAvailableCommands.mockClear();
      this.killProcess.mockClear();
      this.clearHistory.mockClear();
      this.getExecutionStats.mockClear();
      this.mockActiveProcesses.clear();
      this.mockHistory = [mockSuccessResult, mockFailureResult];
      this.setupDefaultMocks();
   }
}

// Create mock instance
export const mockCliExecutor = new MockTaskMasterCLIExecutor();

// Dummy test to prevent "no tests" error
describe('CLI Executor Mock', () => {
   it('should create mock instance', () => {
      expect(mockCliExecutor).toBeDefined();
      expect(mockCliExecutor.executeCommand).toBeDefined();
   });
});
