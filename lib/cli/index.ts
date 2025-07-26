export * from './cli-executor-types';
export * from './cli-command-validator';

// Server-only CLI executor exports
// Use dynamic imports to avoid bundling Node.js modules on client
let _cliExecutor: unknown = null;
let _TaskMasterCLIExecutor: unknown = null;

// Client-side stub implementations
const clientStub = {
   async executeCommand() {
      throw new Error('CLI operations are only available on the server');
   },
   getHistory: () => [],
   getActiveProcesses: () => [],
   getAvailableCommands: () => ({}),
   killProcess: () => false,
   clearHistory: () => {},
   getExecutionStats: () => ({
      totalExecutions: 0,
      successfulExecutions: 0,
      failedExecutions: 0,
      averageExecutionTime: 0,
      commandFrequency: {},
      recentActivity: [],
   }),
};

class ClientTaskMasterCLIExecutor {
   constructor() {
      console.warn('CLI Executor is not available on client side');
   }
}

// Initialize server-side modules if available
const initializeServerModules = () => {
   if (typeof window === 'undefined' && !_cliExecutor) {
      try {
         const serverModule = require('./cli-executor');
         _cliExecutor = serverModule.cliExecutor;
         _TaskMasterCLIExecutor = serverModule.TaskMasterCLIExecutor;
      } catch (error) {
         console.warn('Server CLI executor not available:', error.message);
      }
   }
};

// Initialize on first load
initializeServerModules();

export const cliExecutor = _cliExecutor || clientStub;
export const TaskMasterCLIExecutor = _TaskMasterCLIExecutor || ClientTaskMasterCLIExecutor;
