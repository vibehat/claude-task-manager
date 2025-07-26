import { spawn, ChildProcess } from 'child_process';
import { EventEmitter } from 'events';
import {
   getGlobalErrorHandler,
   ErrorType,
   ErrorUtils,
   TaskMasterError,
} from '../core/error-handler';

// Import types from separate file
export * from './cli-executor-types';
import {
   CLIExecutionResult,
   CLICommandConfig,
   CLIExecutionError,
   CLITimeoutError,
   CLIValidationError,
} from './cli-executor-types';

// Task Master CLI command definitions with validation rules
const TASK_MASTER_COMMANDS = {
   // Task operations
   'list': {
      description: 'List all tasks with optional filtering',
      args: ['--status', '--priority', '--tag', '--format'],
      timeout: 10000,
      parseOutput: true,
   },
   'next': {
      description: 'Get the next available task to work on',
      args: [],
      timeout: 5000,
      parseOutput: true,
   },
   'show': {
      description: 'Show detailed information about a specific task',
      args: ['--id'],
      required: ['--id'],
      timeout: 5000,
      parseOutput: true,
   },
   'set-status': {
      description: 'Update task status',
      args: ['--id', '--status'],
      required: ['--id', '--status'],
      timeout: 10000,
      parseOutput: true,
   },
   'add-task': {
      description: 'Add a new task',
      args: ['--prompt', '--research', '--priority', '--dependencies'],
      required: ['--prompt'],
      timeout: 30000,
      parseOutput: true,
   },
   'expand': {
      description: 'Expand a task into subtasks',
      args: ['--id', '--research', '--force', '--all'],
      timeout: 60000,
      parseOutput: true,
   },
   'update-task': {
      description: 'Update task information',
      args: ['--id', '--prompt'],
      required: ['--id', '--prompt'],
      timeout: 30000,
      parseOutput: true,
   },
   'update-subtask': {
      description: 'Update subtask information',
      args: ['--id', '--prompt'],
      required: ['--id', '--prompt'],
      timeout: 30000,
      parseOutput: true,
   },
   'update': {
      description: 'Update multiple tasks from a starting ID',
      args: ['--from', '--prompt'],
      required: ['--from', '--prompt'],
      timeout: 60000,
      parseOutput: true,
   },

   // Analysis operations
   'analyze-complexity': {
      description: 'Analyze project complexity',
      args: ['--research', '--from', '--to'],
      timeout: 60000,
      parseOutput: true,
   },
   'complexity-report': {
      description: 'Generate complexity analysis report',
      args: [],
      timeout: 10000,
      parseOutput: true,
   },

   // Project operations
   'init': {
      description: 'Initialize Task Master in current project',
      args: [],
      timeout: 15000,
      parseOutput: false,
   },
   'parse-prd': {
      description: 'Parse PRD document and generate tasks',
      args: ['--append', '--research'],
      timeout: 120000,
      parseOutput: true,
   },
   'generate': {
      description: 'Generate task markdown files',
      args: [],
      timeout: 15000,
      parseOutput: false,
   },

   // Configuration operations
   'models': {
      description: 'Configure AI models',
      args: ['--setup', '--set-main', '--set-research', '--set-fallback'],
      timeout: 15000,
      parseOutput: true,
   },

   // Dependency operations
   'add-dependency': {
      description: 'Add task dependency',
      args: ['--id', '--depends-on'],
      required: ['--id', '--depends-on'],
      timeout: 10000,
      parseOutput: true,
   },
   'validate-dependencies': {
      description: 'Validate task dependencies',
      args: [],
      timeout: 10000,
      parseOutput: true,
   },
   'move': {
      description: 'Move task in hierarchy',
      args: ['--from', '--to'],
      required: ['--from', '--to'],
      timeout: 10000,
      parseOutput: true,
   },
} as const;

// Security validation patterns
const SECURITY_PATTERNS = {
   dangerous: [
      /[;&|`$()]/, // Shell injection characters
      /\.\./, // Path traversal
      />/, // Redirection
      /</,
      /\*/,
      /\?/,
      /\[/,
      /\]/,
      /\{/,
      /\}/,
      /~/,
      /#/,
   ],
   suspicious: [
      /rm\s/, // Delete commands
      /del\s/,
      /format\s/,
      /shutdown/,
      /restart/,
      /kill/,
      /chmod/,
      /sudo/,
      /su\s/,
   ],
};

// Output parsers for different command types
class OutputParser {
   static parseTaskList(output: string): any {
      try {
         // Look for JSON in output
         const jsonMatch = output.match(/\{[\s\S]*\}/);
         if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
         }

         // Parse table format if no JSON
         const lines = output.split('\n').filter((line) => line.trim());
         const tasks = [];
         let currentTask = null;

         for (const line of lines) {
            if (line.includes('Task #')) {
               if (currentTask) tasks.push(currentTask);
               currentTask = { id: line.match(/Task #(\d+)/)?.[1] };
            } else if (currentTask && line.includes('Title:')) {
               currentTask.title = line.split('Title:')[1]?.trim();
            } else if (currentTask && line.includes('Status:')) {
               currentTask.status = line.split('Status:')[1]?.trim();
            }
         }

         if (currentTask) tasks.push(currentTask);
         return { tasks };
      } catch {
         return null;
      }
   }

   static parseTaskShow(output: string): any {
      try {
         const jsonMatch = output.match(/\{[\s\S]*\}/);
         if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
         }

         // Parse structured output
         const lines = output.split('\n');
         const task: any = {};

         for (const line of lines) {
            if (line.includes('ID:')) task.id = line.split('ID:')[1]?.trim();
            if (line.includes('Title:')) task.title = line.split('Title:')[1]?.trim();
            if (line.includes('Status:')) task.status = line.split('Status:')[1]?.trim();
            if (line.includes('Priority:')) task.priority = line.split('Priority:')[1]?.trim();
         }

         return task;
      } catch {
         return null;
      }
   }

   static parseGeneric(output: string): any {
      try {
         // Try to find and parse any JSON in the output
         const jsonMatch = output.match(/\{[\s\S]*\}/);
         if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
         }
         return null;
      } catch {
         return null;
      }
   }

   static generateSummary(command: string, output: string): string {
      const lines = output.split('\n').filter((line) => line.trim());

      if (command === 'list') {
         const taskCount = (output.match(/Task #/g) || []).length;
         return `Found ${taskCount} tasks`;
      }

      if (command === 'show') {
         const titleMatch = output.match(/Title:\s*(.+)/);
         const statusMatch = output.match(/Status:\s*(.+)/);
         if (titleMatch && statusMatch) {
            return `Task: ${titleMatch[1]} (${statusMatch[1]})`;
         }
      }

      if (command === 'set-status') {
         const successMatch = output.match(/Successfully updated task/);
         if (successMatch) {
            return 'Task status updated successfully';
         }
      }

      // Generic summary for other commands
      const successIndicators = ['successfully', 'completed', 'updated', 'created'];
      const hasSuccess = successIndicators.some((indicator) =>
         output.toLowerCase().includes(indicator)
      );

      return hasSuccess ? 'Command completed successfully' : 'Command executed';
   }
}

// Main CLI executor class
export class TaskMasterCLIExecutor extends EventEmitter {
   private activeProcesses = new Map<string, ChildProcess>();
   private executionHistory: CLIExecutionResult[] = [];
   private readonly maxHistorySize = 100;
   private errorHandler = getGlobalErrorHandler();

   constructor() {
      super();

      // Clean up on process exit
      process.on('exit', () => {
         this.killAllProcesses();
      });

      // Setup error handler integration
      this.setupErrorHandling();
   }

   // Setup error handling integration
   private setupErrorHandling(): void {
      // Check if errorHandler is available before setting up listeners
      if (!this.errorHandler || typeof this.errorHandler.on !== 'function') {
         console.warn('Error handler not available, skipping error handling setup');
         return;
      }

      this.errorHandler.on('errorRecovered', (error: TaskMasterError) => {
         this.emit('errorRecovered', { error, timestamp: new Date().toISOString() });
      });

      this.errorHandler.on('errorEscalated', (error: TaskMasterError) => {
         this.emit('errorEscalated', { error, timestamp: new Date().toISOString() });
      });
   }

   // Validate command and arguments
   private validateCommand(command: string, args: string[]): void {
      // Check if command exists
      if (!(command in TASK_MASTER_COMMANDS)) {
         throw new CLIValidationError(
            `Command '${command}' is not allowed. Available commands: ${Object.keys(TASK_MASTER_COMMANDS).join(', ')}`,
            command,
            args
         );
      }

      const commandConfig = TASK_MASTER_COMMANDS[command as keyof typeof TASK_MASTER_COMMANDS];

      // Check required arguments
      if (commandConfig.required) {
         for (const requiredArg of commandConfig.required) {
            const hasRequiredArg = args.some((arg) => arg.startsWith(requiredArg));
            if (!hasRequiredArg) {
               throw new CLIValidationError(
                  `Required argument '${requiredArg}' is missing for command '${command}'`,
                  command,
                  args
               );
            }
         }
      }

      // Security validation
      const allInput = [command, ...args].join(' ');

      // Check for dangerous patterns
      for (const pattern of SECURITY_PATTERNS.dangerous) {
         if (pattern.test(allInput)) {
            throw new CLIValidationError(
               `Command contains dangerous characters or patterns`,
               command,
               args
            );
         }
      }

      // Check for suspicious patterns
      for (const pattern of SECURITY_PATTERNS.suspicious) {
         if (pattern.test(allInput)) {
            throw new CLIValidationError(
               `Command contains suspicious patterns that are not allowed`,
               command,
               args
            );
         }
      }

      // Validate argument format
      for (const arg of args) {
         if (arg.length > 1000) {
            throw new CLIValidationError(`Argument too long (max 1000 characters)`, command, args);
         }
      }
   }

   // Direct command execution without retry mechanism (for testing)
   public async executeCommandDirect(config: CLICommandConfig): Promise<CLIExecutionResult> {
      const startTime = Date.now();
      const executionId = `${config.command}-${startTime}`;

      try {
         // Validate command
         this.validateCommand(config.command, config.args);

         const commandConfig =
            TASK_MASTER_COMMANDS[config.command as keyof typeof TASK_MASTER_COMMANDS];
         const timeout = config.timeout || commandConfig.timeout || 30000;

         this.emit('commandStart', { command: config.command, args: config.args });

         const result = await this.spawnProcess(
            {
               ...config,
               timeout,
            },
            executionId
         );

         // Parse output if configured
         let parsedOutput = null;
         let summary = '';

         try {
            if (config.parseOutput ?? commandConfig.parseOutput) {
               if (config.command === 'list') {
                  parsedOutput = OutputParser.parseTaskList(result.stdout);
               } else if (config.command === 'show') {
                  parsedOutput = OutputParser.parseTaskShow(result.stdout);
               } else {
                  parsedOutput = OutputParser.parseGeneric(result.stdout);
               }

               summary = OutputParser.generateSummary(config.command, result.stdout);
            }
         } catch (parseError) {
            // Handle parsing error gracefully without error handler
            console.warn('Failed to parse command output:', parseError);
            // Continue with unparsed output
         }

         const executionResult: CLIExecutionResult = {
            success: result.exitCode === 0,
            command: `task-master ${config.command} ${config.args.join(' ')}`,
            output: {
               stdout: result.stdout,
               stderr: result.stderr,
               parsed: parsedOutput,
               summary,
            },
            exitCode: result.exitCode,
            executionTime: Date.now() - startTime,
            timestamp: new Date().toISOString(),
            metadata: result.metadata,
         };

         // Add to history
         this.addToHistory(executionResult);

         this.emit('commandComplete', executionResult);

         return executionResult;
      } catch (error) {
         // Handle error without error handler
         const executionResult: CLIExecutionResult = {
            success: false,
            command: `task-master ${config.command} ${config.args.join(' ')}`,
            output: {
               stdout: '',
               stderr: error.message || 'Unknown error',
               parsed: null,
               summary: '',
            },
            exitCode: -1,
            executionTime: Date.now() - startTime,
            timestamp: new Date().toISOString(),
            metadata: {
               killed: false,
               timedOut: false,
            },
         };

         this.addToHistory(executionResult);
         this.emit('commandError', { error, command: config.command, args: config.args });

         return executionResult;
      }
   }

   // Execute Task Master CLI command with enhanced error handling
   async executeCommand(config: CLICommandConfig): Promise<CLIExecutionResult> {
      const startTime = Date.now();
      const executionId = `${config.command}-${startTime}`;

      // Use retry mechanism for resilient execution
      if (!this.errorHandler || typeof this.errorHandler.retryOperation !== 'function') {
         // Fallback execution without retry if error handler is not available
         return await this.executeCommandDirect(config);
      }

      return await this.errorHandler.retryOperation(
         async () => {
            try {
               // Validate command
               this.validateCommand(config.command, config.args);

               const commandConfig =
                  TASK_MASTER_COMMANDS[config.command as keyof typeof TASK_MASTER_COMMANDS];
               const timeout = config.timeout || commandConfig.timeout || 30000;

               this.emit('commandStart', { command: config.command, args: config.args });

               const result = await this.spawnProcess(
                  {
                     ...config,
                     timeout,
                  },
                  executionId
               );

               // Parse output if configured
               let parsedOutput = null;
               let summary = '';

               try {
                  if (config.parseOutput ?? commandConfig.parseOutput) {
                     if (config.command === 'list') {
                        parsedOutput = OutputParser.parseTaskList(result.stdout);
                     } else if (config.command === 'show') {
                        parsedOutput = OutputParser.parseTaskShow(result.stdout);
                     } else {
                        parsedOutput = OutputParser.parseGeneric(result.stdout);
                     }

                     summary = OutputParser.generateSummary(config.command, result.stdout);
                  }
               } catch (parseError) {
                  // Create parsing error but don't fail the command
                  if (this.errorHandler && typeof this.errorHandler.createError === 'function') {
                     const parsingError = this.errorHandler.createError(
                        ErrorType.JSON_PARSE_ERROR,
                        `Failed to parse command output: ${parseError.message}`,
                        { command: config.command, output: result.stdout },
                        parseError as Error
                     );

                     if (typeof this.errorHandler.handleError === 'function') {
                        await this.errorHandler.handleError(parsingError, true);
                     }
                  } else {
                     console.warn('Failed to parse command output:', parseError);
                  }
                  // Continue with unparsed output
               }

               const executionResult: CLIExecutionResult = {
                  success: result.exitCode === 0,
                  command: `task-master ${config.command} ${config.args.join(' ')}`,
                  output: {
                     stdout: result.stdout,
                     stderr: result.stderr,
                     parsed: parsedOutput,
                     summary,
                  },
                  exitCode: result.exitCode,
                  executionTime: Date.now() - startTime,
                  timestamp: new Date().toISOString(),
                  metadata: result.metadata,
               };

               // Add to history
               this.addToHistory(executionResult);

               this.emit('commandComplete', executionResult);

               if (result.exitCode !== 0) {
                  // Create structured CLI execution error
                  if (this.errorHandler && typeof this.errorHandler.createError === 'function') {
                     const cliError = this.errorHandler.createError(
                        this.getErrorTypeFromExitCode(result.exitCode),
                        `Command failed with exit code ${result.exitCode}`,
                        {
                           command: config.command,
                           args: config.args,
                           exitCode: result.exitCode,
                           stderr: result.stderr,
                           executionId,
                        }
                     );
                     throw cliError;
                  } else {
                     // Throw simple error if no error handler
                     throw new Error(
                        `Command failed with exit code ${result.exitCode}: ${result.stderr}`
                     );
                  }
               }

               return executionResult;
            } catch (error) {
               // Handle validation errors and other exceptions
               if (error instanceof CLIValidationError) {
                  if (this.errorHandler && typeof this.errorHandler.createError === 'function') {
                     const validationError = this.errorHandler.createError(
                        ErrorType.CLI_INVALID_ARGUMENTS,
                        error.message,
                        { command: error.command, args: error.args },
                        error
                     );
                     throw validationError;
                  } else {
                     throw error; // Re-throw original error if no error handler
                  }
               }

               // Handle TaskMaster errors (pass through)
               if ('type' in error && 'category' in error) {
                  throw error;
               }

               // Convert generic errors
               if (this.errorHandler && typeof this.errorHandler.createError === 'function') {
                  const genericError = this.errorHandler.createError(
                     ErrorType.CLI_EXECUTION_FAILED,
                     error.message || 'Unknown CLI execution error',
                     { command: config.command, args: config.args, executionId },
                     error as Error
                  );
                  throw genericError;
               } else {
                  throw error; // Re-throw original error if no error handler
               }
            } finally {
               this.activeProcesses.delete(executionId);
            }
         },
         {
            command: config.command,
            args: config.args,
            executionId,
            timeout: config.timeout,
         },
         {
            maxAttempts: 3,
            baseDelay: 1000,
            maxDelay: 10000,
            retryableErrors: [
               ErrorType.CLI_TIMEOUT,
               ErrorType.NETWORK_TIMEOUT,
               ErrorType.CLI_EXECUTION_FAILED,
            ],
         }
      );
   }

   // Map exit codes to error types
   private getErrorTypeFromExitCode(exitCode: number): ErrorType {
      switch (exitCode) {
         case 1:
            return ErrorType.CLI_EXECUTION_FAILED;
         case 2:
            return ErrorType.CLI_INVALID_ARGUMENTS;
         case 126:
            return ErrorType.CLI_PERMISSION_DENIED;
         case 127:
            return ErrorType.CLI_COMMAND_NOT_FOUND;
         case 130:
            return ErrorType.CLI_TIMEOUT;
         default:
            return ErrorType.CLI_EXECUTION_FAILED;
      }
   }

   // Spawn child process with timeout and monitoring
   private spawnProcess(
      config: CLICommandConfig,
      executionId: string
   ): Promise<{
      stdout: string;
      stderr: string;
      exitCode: number;
      metadata: any;
   }> {
      return new Promise((resolve, reject) => {
         const workingDir = config.workingDirectory || process.cwd();
         const env = { ...process.env, ...config.env };

         const child = spawn('task-master', [config.command, ...config.args], {
            cwd: workingDir,
            env,
            stdio: ['pipe', 'pipe', 'pipe'],
         });

         this.activeProcesses.set(executionId, child);

         let stdout = '';
         let stderr = '';
         let timedOut = false;

         // Set up timeout
         const timeout = setTimeout(() => {
            timedOut = true;
            child.kill('SIGTERM');

            // Force kill after 5 seconds
            setTimeout(() => {
               if (!child.killed) {
                  child.kill('SIGKILL');
               }
            }, 5000);
         }, config.timeout || 30000);

         // Collect output
         if (child.stdout) {
            child.stdout.on('data', (data) => {
               const chunk = data.toString();
               stdout += chunk;

               if (config.captureProgress) {
                  this.emit('commandProgress', {
                     executionId,
                     command: config.command,
                     chunk,
                     totalOutput: stdout,
                  });
               }
            });
         }

         if (child.stderr) {
            child.stderr.on('data', (data) => {
               stderr += data.toString();
            });
         }

         // Handle process completion
         child.on('close', (code, signal) => {
            clearTimeout(timeout);

            const metadata = {
               pid: child.pid,
               signal,
               killed: child.killed,
               timedOut,
            };

            if (timedOut) {
               reject(
                  new CLITimeoutError(
                     `Command timed out after ${config.timeout || 30000}ms`,
                     config.command,
                     config.timeout || 30000
                  )
               );
            } else {
               resolve({
                  stdout,
                  stderr,
                  exitCode: code || 0,
                  metadata,
               });
            }
         });

         // Handle process errors with enhanced error handling
         child.on('error', (error) => {
            clearTimeout(timeout);

            // Create appropriate TaskMaster error
            let errorType = ErrorType.CLI_EXECUTION_FAILED;
            if (error.message.includes('ENOENT')) {
               errorType = ErrorType.CLI_COMMAND_NOT_FOUND;
            } else if (error.message.includes('EACCES')) {
               errorType = ErrorType.CLI_PERMISSION_DENIED;
            } else if (error.message.includes('ETIMEOUT')) {
               errorType = ErrorType.CLI_TIMEOUT;
            }

            if (this.errorHandler && typeof this.errorHandler.createError === 'function') {
               const taskMasterError = this.errorHandler.createError(
                  errorType,
                  `Process error: ${error.message}`,
                  {
                     command: config.command,
                     args: config.args,
                     executionId,
                     processError: error.message,
                  },
                  error
               );
               reject(taskMasterError);
            } else {
               reject(error); // Re-throw original error if no error handler
            }
         });
      });
   }

   // Kill all active processes
   private killAllProcesses(): void {
      for (const [id, process] of this.activeProcesses) {
         try {
            process.kill('SIGTERM');
            setTimeout(() => {
               if (!process.killed) {
                  process.kill('SIGKILL');
               }
            }, 1000);
         } catch (error) {
            console.warn(`Failed to kill process ${id}:`, error);
         }
      }
      this.activeProcesses.clear();
   }

   // Add result to execution history
   private addToHistory(result: CLIExecutionResult): void {
      this.executionHistory.unshift(result);

      // Keep only last N executions
      if (this.executionHistory.length > this.maxHistorySize) {
         this.executionHistory = this.executionHistory.slice(0, this.maxHistorySize);
      }
   }

   // Get execution history
   getHistory(limit?: number): CLIExecutionResult[] {
      return limit ? this.executionHistory.slice(0, limit) : [...this.executionHistory];
   }

   // Get active processes
   getActiveProcesses(): string[] {
      return Array.from(this.activeProcesses.keys());
   }

   // Get available commands
   getAvailableCommands(): typeof TASK_MASTER_COMMANDS {
      return TASK_MASTER_COMMANDS;
   }

   // Kill specific process
   killProcess(executionId: string): boolean {
      const process = this.activeProcesses.get(executionId);
      if (process) {
         try {
            process.kill('SIGTERM');
            this.activeProcesses.delete(executionId);
            return true;
         } catch {
            return false;
         }
      }
      return false;
   }

   // Clear execution history
   clearHistory(): void {
      this.executionHistory = [];
      this.emit('historyClear', { timestamp: new Date().toISOString() });
   }

   // Get statistics about command executions
   getExecutionStats() {
      const stats = {
         totalExecutions: this.executionHistory.length,
         successfulExecutions: this.executionHistory.filter((r) => r.success).length,
         failedExecutions: this.executionHistory.filter((r) => !r.success).length,
         averageExecutionTime: 0,
         commandFrequency: {} as Record<string, number>,
         recentActivity: this.executionHistory.slice(0, 5),
      };

      if (stats.totalExecutions > 0) {
         stats.averageExecutionTime = Math.round(
            this.executionHistory.reduce((sum, r) => sum + r.executionTime, 0) /
               stats.totalExecutions
         );

         // Count command frequency
         for (const result of this.executionHistory) {
            const command = result.command.split(' ')[1]; // Extract command name
            stats.commandFrequency[command] = (stats.commandFrequency[command] || 0) + 1;
         }
      }

      return stats;
   }
}

// Export singleton instance
export const cliExecutor = new TaskMasterCLIExecutor();
