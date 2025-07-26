import { cliExecutor } from '../../../cli';
import { TaskMasterSync } from '../../../taskmaster';
import { eventEmitter } from '../../../websocket-server';
import { categorizeCommand } from '../shared/helpers';

// Initialize TaskMaster instances
const taskMasterSync = new TaskMasterSync();

export const cliMutations = {
   // CLI mutations - Enhanced with comprehensive validation and monitoring
   executeCLICommand: async (_: any, { input }: { input: any }) => {
      try {
         // Input validation
         if (!input.command?.trim()) {
            throw new Error('Command is required');
         }

         // Validate command exists in available commands
         const availableCommands = cliExecutor.getAvailableCommands();
         if (!(input.command in availableCommands)) {
            throw new Error(
               `Command '${input.command}' is not available. Use availableCommands query to see valid commands.`
            );
         }

         // Validate timeout
         if (input.timeout && (input.timeout < 1000 || input.timeout > 300000)) {
            throw new Error('Timeout must be between 1000ms and 300000ms (5 minutes)');
         }

         // Validate and sanitize arguments
         const args = input.args || [];
         if (!Array.isArray(args)) {
            throw new Error('Arguments must be an array');
         }

         for (const arg of args) {
            if (typeof arg !== 'string') {
               throw new Error('All arguments must be strings');
            }
            if (arg.length > 1000) {
               throw new Error('Individual arguments cannot exceed 1000 characters');
            }
         }

         // Execute command with enhanced configuration
         const config = {
            command: input.command.trim(),
            args: args.map((arg: string) => arg.trim()),
            timeout: input.timeout || 30000,
            parseOutput: input.parseOutput !== false,
            captureProgress: input.captureProgress || false,
            workingDirectory: input.workingDirectory,
            env: input.env,
         };

         // Generate command ID for tracking
         const commandId = `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

         // Emit command started event
         eventEmitter.emitCLICommandProgress({
            commandId,
            command: input.command,
            status: 'RUNNING',
            output: null,
            progress: 0,
            timestamp: new Date(),
            metadata: { args: config.args },
         });

         const result = await cliExecutor.executeCommand(config);

         // Emit command completed/failed event
         eventEmitter.emitCLICommandProgress({
            commandId,
            command: input.command,
            status: result.success ? 'COMPLETED' : 'FAILED',
            output: result.stdout || result.stderr,
            progress: 100,
            timestamp: new Date(),
            metadata: {
               exitCode: result.exitCode,
               duration: result.duration,
               error: result.error,
            },
         });

         // If it's a task operation that might need sync, trigger sync
         const taskCommands = ['add-task', 'set-status', 'update-task', 'update-subtask', 'update'];
         if (taskCommands.includes(input.command) && result.success) {
            try {
               await taskMasterSync.syncTasksToDatabase({ incremental: true });
            } catch (syncError) {
               console.warn('Warning: Command succeeded but database sync failed:', syncError);
               // Don't fail the mutation - command was successful
            }
         }

         return {
            ...result,
            id: commandId,
            metadata: {
               ...result.metadata,
               syncTriggered: taskCommands.includes(input.command),
            },
         };
      } catch (error) {
         console.error('Error executing CLI command:', error);
         throw new Error(`Failed to execute CLI command: ${error.message}`);
      }
   },

   killCLIProcess: (_: any, { processId }: { processId: string }) => {
      try {
         if (!processId?.trim()) {
            throw new Error('Process ID is required');
         }

         const activeProcesses = cliExecutor.getActiveProcesses();
         if (!activeProcesses.includes(processId)) {
            throw new Error(`Process '${processId}' not found or not active`);
         }

         const killed = cliExecutor.killProcess(processId);

         if (killed) {
            console.log(`Successfully killed process: ${processId}`);
         } else {
            console.warn(`Failed to kill process: ${processId}`);
         }

         return killed;
      } catch (error) {
         console.error('Error killing process:', error);
         throw new Error(`Failed to kill process: ${error.message}`);
      }
   },

   clearCLIHistory: () => {
      try {
         const historyLength = cliExecutor.getHistory().length;
         cliExecutor.clearHistory();

         console.log(`Cleared CLI history (${historyLength} entries)`);
         return true;
      } catch (error) {
         console.error('Error clearing CLI history:', error);
         throw new Error(`Failed to clear CLI history: ${error.message}`);
      }
   },

   // Enhanced CLI command with validation
   validateCLICommand: (_: any, { command, args }: { command: string; args?: string[] }) => {
      try {
         if (!command?.trim()) {
            return {
               valid: false,
               errors: ['Command is required'],
               suggestions: [],
            };
         }

         const availableCommands = cliExecutor.getAvailableCommands();
         const commandConfig = availableCommands[command as keyof typeof availableCommands];

         if (!commandConfig) {
            const suggestions = Object.keys(availableCommands).filter(
               (cmd) =>
                  cmd.toLowerCase().includes(command.toLowerCase()) ||
                  command.toLowerCase().includes(cmd.toLowerCase())
            );

            return {
               valid: false,
               errors: [`Command '${command}' is not available`],
               suggestions: suggestions.slice(0, 5),
            };
         }

         const errors: string[] = [];
         const warnings: string[] = [];
         const providedArgs = args || [];

         // Check required arguments
         if (commandConfig.required) {
            for (const requiredArg of commandConfig.required) {
               const hasRequiredArg = providedArgs.some((arg) => arg.startsWith(requiredArg));
               if (!hasRequiredArg) {
                  errors.push(`Required argument '${requiredArg}' is missing`);
               }
            }
         }

         // Check for unknown arguments
         const validArgs = commandConfig.args || [];
         for (const arg of providedArgs) {
            const argName = arg.split('=')[0];
            if (!validArgs.some((validArg) => argName.startsWith(validArg))) {
               warnings.push(`Argument '${argName}' may not be valid for this command`);
            }
         }

         return {
            valid: errors.length === 0,
            errors,
            warnings,
            suggestions: [],
            commandInfo: {
               name: command,
               description: commandConfig.description,
               timeout: commandConfig.timeout || 30000,
               category: categorizeCommand(command),
            },
         };
      } catch (error) {
         console.error('Error validating CLI command:', error);
         return {
            valid: false,
            errors: [`Validation error: ${error.message}`],
            suggestions: [],
         };
      }
   },
};
