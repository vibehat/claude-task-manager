import { cliExecutor } from '../../../cli';
import { categorizeCommand, getCommandExamples } from '../shared/helpers';

export const cliQueries = {
   // CLI queries - Enhanced with comprehensive functionality
   cliStatus: async () => {
      try {
         const stats = cliExecutor.getExecutionStats();
         const activeProcesses = cliExecutor.getActiveProcesses();

         return {
            isHealthy: true,
            activeProcessCount: activeProcesses.length,
            activeProcesses: activeProcesses.map((id) => ({
               id,
               status: 'running',
               startTime: new Date().toISOString(), // Would need to track this in real implementation
            })),
            executionStats: {
               totalExecutions: stats.totalExecutions,
               successfulExecutions: stats.successfulExecutions,
               failedExecutions: stats.failedExecutions,
               successRate:
                  stats.totalExecutions > 0
                     ? Math.round((stats.successfulExecutions / stats.totalExecutions) * 100)
                     : 0,
               averageExecutionTime: stats.averageExecutionTime,
               commandFrequency: stats.commandFrequency,
            },
            recentCommands: stats.recentActivity.slice(0, 5),
            systemInfo: {
               nodeVersion: process.version,
               platform: process.platform,
               architecture: process.arch,
               memoryUsage: process.memoryUsage(),
               uptime: process.uptime(),
               cwd: process.cwd(),
               pid: process.pid,
            },
            timestamp: new Date(),
         };
      } catch (error) {
         console.error('Error fetching CLI status:', error);
         return {
            isHealthy: false,
            activeProcessCount: 0,
            activeProcesses: [],
            executionStats: {
               totalExecutions: 0,
               successfulExecutions: 0,
               failedExecutions: 0,
               successRate: 0,
               averageExecutionTime: 0,
               commandFrequency: {},
            },
            recentCommands: [],
            systemInfo: {
               nodeVersion: process.version,
               platform: process.platform,
               architecture: process.arch,
               memoryUsage: process.memoryUsage(),
               uptime: process.uptime(),
               cwd: process.cwd(),
               pid: process.pid,
            },
            timestamp: new Date(),
            error: error.message,
         };
      }
   },

   cliHistory: (_: any, { limit = 50, filter }: { limit?: number; filter?: any }) => {
      try {
         let history = cliExecutor.getHistory(limit * 2); // Get more for filtering

         // Apply filters if provided
         if (filter) {
            if (filter.command) {
               history = history.filter((item) =>
                  item.command.toLowerCase().includes(filter.command.toLowerCase())
               );
            }
            if (filter.success !== undefined) {
               history = history.filter((item) => item.success === filter.success);
            }
            if (filter.startDate) {
               const startDate = new Date(filter.startDate);
               history = history.filter((item) => new Date(item.timestamp) >= startDate);
            }
            if (filter.endDate) {
               const endDate = new Date(filter.endDate);
               history = history.filter((item) => new Date(item.timestamp) <= endDate);
            }
         }

         return history.slice(0, limit);
      } catch (error) {
         console.error('Error fetching CLI history:', error);
         return [];
      }
   },

   availableCommands: () => {
      try {
         const commands = cliExecutor.getAvailableCommands();
         return Object.entries(commands).map(([name, config]) => ({
            name,
            description: config.description,
            args: config.args || [],
            requiredArgs: config.required || [],
            timeout: config.timeout || 30000,
            parseOutput: config.parseOutput || false,
            category: categorizeCommand(name),
         }));
      } catch (error) {
         console.error('Error fetching available commands:', error);
         return [];
      }
   },

   cliCommand: async (_: any, { name }: { name: string }) => {
      try {
         const commands = cliExecutor.getAvailableCommands();
         const command = commands[name as keyof typeof commands];

         if (!command) {
            throw new Error(`Command '${name}' not found`);
         }

         return {
            name,
            description: command.description,
            args: command.args || [],
            requiredArgs: command.required || [],
            timeout: command.timeout || 30000,
            parseOutput: command.parseOutput || false,
            category: categorizeCommand(name),
            examples: getCommandExamples(name),
         };
      } catch (error) {
         console.error(`Error fetching command '${name}':`, error);
         throw new Error(`Failed to get command information: ${error.message}`);
      }
   },
};
