export * from './cli-executor-types';
export * from './cli-command-validator';

import type { EventEmitter } from 'events';

// Type for CLI command config
interface CLICommandConfig {
   description: string;
   args?: string[];
   required?: string[];
   timeout?: number;
   parseOutput?: boolean;
}

// Type for CLI executor
interface CLIExecutorInterface extends EventEmitter {
   executeCommand(...args: any[]): Promise<any>;
   getHistory(): any[];
   getActiveProcesses(): any[];
   getAvailableCommands(): Record<string, CLICommandConfig>;
   killProcess(id: string): boolean;
   clearHistory(): void;
   getExecutionStats(): any;
}

// Server-only CLI executor exports
// Use dynamic imports to avoid bundling Node.js modules on client
let _cliExecutor: CLIExecutorInterface | null = null;
let _TaskMasterCLIExecutor: any = null;

// Client-side stub implementations
const clientStub = {
   async executeCommand() {
      throw new Error('CLI operations are only available on the server');
   },
   getHistory: () => [],
   getActiveProcesses: () => [],
   getAvailableCommands: (): Record<string, CLICommandConfig> => ({}),
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
   // EventEmitter methods
   on: () => {},
   off: () => {},
   emit: () => false,
   addListener: () => {},
   removeListener: () => {},
   removeAllListeners: () => {},
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
         const errorMessage = error instanceof Error ? error.message : String(error);
         console.warn('Server CLI executor not available:', errorMessage);
      }
   }
};

// Initialize on first load
initializeServerModules();

export const cliExecutor: CLIExecutorInterface = (_cliExecutor ||
   clientStub) as CLIExecutorInterface;
export const TaskMasterCLIExecutor = _TaskMasterCLIExecutor || ClientTaskMasterCLIExecutor;
