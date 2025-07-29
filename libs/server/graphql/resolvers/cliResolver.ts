/**
 * CLI Resolver - TypeGraphQL Implementation
 *
 * Code-first GraphQL resolver for CLI queries
 */

import { Resolver, Query, Args } from 'type-graphql';
import {
   CLICommand,
   CLIStatus,
   CLIHistoryItem,
   CLIHistoryArgs,
   CLICommandArgs,
} from '../types/cli.types';
import { BaseResolver } from './baseResolver';
import { cliExecutor } from '../../cli';
import { categorizeCommand, getCommandExamples } from './shared/helpers';

@Resolver()
export class CLIResolver extends BaseResolver {
   /**
    * Get available CLI commands
    */
   @Query(() => [CLICommand])
   async availableCommands(): Promise<CLICommand[]> {
      return this.logPerformance('availableCommands', async () => {
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
               examples: getCommandExamples(name),
            }));
         } catch (error) {
            this.handleError(error, 'availableCommands query');
            return [];
         }
      });
   }

   /**
    * Get CLI status information
    */
   @Query(() => CLIStatus)
   async cliStatus(): Promise<CLIStatus> {
      return this.logPerformance('cliStatus', async () => {
         try {
            const stats = cliExecutor.getExecutionStats();
            const activeProcesses = cliExecutor.getActiveProcesses();

            return {
               isHealthy: true,
               activeProcessCount: activeProcesses.length,
               activeProcesses: activeProcesses.map((id) => ({
                  id,
                  status: 'running',
                  startTime: new Date().toISOString(),
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
                  commandFrequency: JSON.stringify(stats.commandFrequency),
               },
               recentCommands: stats.recentActivity.slice(0, 5).map((item) => ({
                  id: item.id || `${Date.now()}-${Math.random()}`,
                  command: item.command,
                  args: Array.isArray(item.args) ? item.args.join(' ') : item.args || '',
                  success: item.success,
                  output: item.output || '',
                  error: item.error,
                  executionTime: item.executionTime || 0,
                  timestamp: new Date(item.timestamp),
               })),
               systemInfo: {
                  nodeVersion: process.version,
                  platform: process.platform,
                  architecture: process.arch,
                  memoryUsage: JSON.stringify(process.memoryUsage()),
                  uptime: process.uptime(),
                  cwd: process.cwd(),
                  pid: process.pid,
               },
               timestamp: new Date(),
            };
         } catch (error) {
            this.handleError(error, 'cliStatus query');
            throw error;
         }
      });
   }

   /**
    * Get CLI command history
    */
   @Query(() => [CLIHistoryItem])
   async cliHistory(@Args() { limit = 50, filter }: CLIHistoryArgs): Promise<CLIHistoryItem[]> {
      return this.logPerformance('cliHistory', async () => {
         try {
            let history = cliExecutor.getHistory(); // Get all history

            // Apply filters if provided
            if (filter) {
               if (filter.command) {
                  history = history.filter((item) =>
                     item.command.toLowerCase().includes(filter.command!.toLowerCase())
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

            return history.slice(0, limit).map((item) => ({
               id: item.id || `${Date.now()}-${Math.random()}`,
               command: item.command,
               args: Array.isArray(item.args) ? item.args.join(' ') : item.args || '',
               success: item.success,
               output: item.output || '',
               error: item.error,
               executionTime: item.executionTime || 0,
               timestamp: new Date(item.timestamp),
            }));
         } catch (error) {
            this.handleError(error, 'cliHistory query');
            return [];
         }
      });
   }

   /**
    * Get specific CLI command information
    */
   @Query(() => CLICommand, { nullable: true })
   async cliCommand(@Args() { name }: CLICommandArgs): Promise<CLICommand | null> {
      return this.logPerformance(`cliCommand(${name})`, async () => {
         try {
            const commands = cliExecutor.getAvailableCommands();
            const command = commands[name as keyof typeof commands];

            if (!command) {
               return null;
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
            this.handleError(error, `cliCommand(${name}) query`);
            return null;
         }
      });
   }
}
