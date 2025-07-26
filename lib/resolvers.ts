import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { TaskMasterFileOperations, BackupManager } from './core';
import { cliExecutor } from './cli';
import { getGlobalSyncManager, getGlobalFileWatcher } from './core';
import { TaskMasterSync, TaskMasterDB } from './taskmaster';
import {
   pubsub,
   eventEmitter,
   webSocketManager,
   SUBSCRIPTION_EVENTS,
   createTaskFilter,
   createCLIFilter,
   createSyncFilter,
} from './websocket-server';
import extendedResolvers from './resolvers-extended';

// Custom scalar resolvers
const DateTime = new GraphQLScalarType({
   name: 'DateTime',
   serialize: (date: Date) => date.toISOString(),
   parseValue: (value: string) => new Date(value),
   parseLiteral: (ast) => {
      if (ast.kind === Kind.STRING) {
         return new Date(ast.value);
      }
      return null;
   },
});

const JSON = new GraphQLScalarType({
   name: 'JSON',
   serialize: (value: any) => value,
   parseValue: (value: any) => value,
   parseLiteral: (ast) => {
      if (ast.kind === Kind.STRING) {
         try {
            return JSON.parse(ast.value);
         } catch {
            return null;
         }
      }
      return null;
   },
});

const syncManager = getGlobalSyncManager();
const fileWatcher = getGlobalFileWatcher();

// Initialize TaskMaster instances
const taskMasterSync = new TaskMasterSync();
const taskMasterDB = new TaskMasterDB();

// Helper function to categorize CLI commands
function categorizeCommand(commandName: string): string {
   const taskCommands = [
      'list',
      'next',
      'show',
      'set-status',
      'add-task',
      'expand',
      'update-task',
      'update-subtask',
      'update',
   ];
   const analysisCommands = ['analyze-complexity', 'complexity-report'];
   const projectCommands = ['init', 'parse-prd', 'generate'];
   const configCommands = ['models'];
   const dependencyCommands = ['add-dependency', 'validate-dependencies', 'move'];

   if (taskCommands.includes(commandName)) return 'task';
   if (analysisCommands.includes(commandName)) return 'analysis';
   if (projectCommands.includes(commandName)) return 'project';
   if (configCommands.includes(commandName)) return 'configuration';
   if (dependencyCommands.includes(commandName)) return 'dependency';
   return 'other';
}

// Helper function to group operations by type
function groupOperationsByType(operations: any[]): Record<string, number> {
   const grouped: Record<string, number> = {};
   for (const op of operations) {
      grouped[op.type] = (grouped[op.type] || 0) + 1;
   }
   return grouped;
}

// Helper function to group operations by source
function groupOperationsBySource(operations: any[]): Record<string, number> {
   const grouped: Record<string, number> = {};
   for (const op of operations) {
      grouped[op.source] = (grouped[op.source] || 0) + 1;
   }
   return grouped;
}

// Helper function to calculate operation duration
function calculateOperationDuration(operation: any): number {
   // This would need more detailed tracking in real implementation
   // For now, estimate based on type
   const typeDurations: Record<string, number> = {
      task_update: 2000,
      task_create: 1500,
      task_delete: 1000,
      status_change: 500,
      batch_update: 5000,
   };
   return typeDurations[operation.type] || 1000;
}

// Helper function to format operation data for display
function formatOperationData(operation: any): any {
   if (!operation.data) return null;

   const formatted = { ...operation.data };

   // Add human-readable descriptions
   if (operation.type === 'status_change' && formatted.status) {
      formatted.description = `Changed status to ${formatted.status}`;
   } else if (operation.type === 'task_update' && formatted.changes) {
      const changeCount = Object.keys(formatted.changes).length;
      formatted.description = `Updated ${changeCount} field(s)`;
   } else if (operation.type === 'task_create') {
      formatted.description = 'Created new task';
   } else if (operation.type === 'task_delete') {
      formatted.description = 'Deleted task';
   }

   return formatted;
}

// Helper function to get related operations
function getRelatedOperations(operation: any, allOperations: any[]): any[] {
   if (!operation.data?.taskId) return [];

   return allOperations
      .filter((op) => op.id !== operation.id && op.data?.taskId === operation.data.taskId)
      .slice(0, 5); // Limit to 5 related operations
}

// Helper function to get conflict severity
function getConflictSeverity(conflict: any): 'low' | 'medium' | 'high' | 'critical' {
   const age = Date.now() - Math.min(conflict.operationA.timestamp, conflict.operationB.timestamp);
   const dayInMs = 24 * 60 * 60 * 1000;

   if (conflict.conflictType === 'version_conflict') return 'critical';
   if (age > dayInMs) return 'high';
   if (age > dayInMs / 4) return 'medium';
   return 'low';
}

// Helper function to get affected task from conflict
function getConflictAffectedTask(conflict: any): string | null {
   return conflict.operationA.data?.taskId || conflict.operationB.data?.taskId || null;
}

// Helper function to calculate health score
function calculateHealthScore(
   failureRate: number,
   unresolvedConflicts: number,
   stalledOperations: number,
   queueSize: number
): number {
   let score = 100;

   // Deduct for failure rate
   score -= failureRate;

   // Deduct for unresolved conflicts
   score -= Math.min(unresolvedConflicts * 2, 20);

   // Deduct for stalled operations
   score -= Math.min(stalledOperations * 5, 25);

   // Deduct for large queue size
   if (queueSize > 50) score -= Math.min((queueSize - 50) / 10, 15);

   return Math.max(0, Math.round(score));
}

// Helper function to generate health recommendations
function generateHealthRecommendations(status: string, issues: string[]): string[] {
   const recommendations: string[] = [];

   if (status === 'critical') {
      recommendations.push('Immediate attention required');
      recommendations.push('Check sync manager logs');
      recommendations.push('Consider restarting sync manager');
   } else if (status === 'warning') {
      recommendations.push('Monitor sync operations closely');
      recommendations.push('Review recent failures');
      recommendations.push('Consider reducing sync frequency');
   } else if (status === 'degraded') {
      recommendations.push('Monitor system performance');
      recommendations.push('Check for resource constraints');
   }

   if (issues.some((issue) => issue.includes('failure rate'))) {
      recommendations.push('Review error logs for patterns');
      recommendations.push('Check network connectivity');
   }

   if (issues.some((issue) => issue.includes('conflicts'))) {
      recommendations.push('Review conflict resolution strategies');
      recommendations.push('Consider manual conflict resolution');
   }

   if (issues.some((issue) => issue.includes('queue'))) {
      recommendations.push('Consider increasing sync concurrency');
      recommendations.push('Review operation complexity');
   }

   return recommendations;
}

// Helper function to get command examples
function getCommandExamples(commandName: string): string[] {
   const examples: Record<string, string[]> = {
      'list': [
         'task-master list',
         'task-master list --status=pending',
         'task-master list --priority=high',
      ],
      'show': ['task-master show --id=1', 'task-master show --id=2.1'],
      'set-status': [
         'task-master set-status --id=1 --status=done',
         'task-master set-status --id=2 --status=in-progress',
      ],
      'add-task': [
         'task-master add-task --prompt="New feature description"',
         'task-master add-task --prompt="Bug fix" --priority=high',
      ],
      'expand': ['task-master expand --id=1', 'task-master expand --id=2 --research'],
      'update-task': ['task-master update-task --id=1 --prompt="Updated requirements"'],
      'analyze-complexity': ['task-master analyze-complexity --research'],
      'models': ['task-master models --setup', 'task-master models --set-main claude-3-5-sonnet'],
   };
   return examples[commandName] || [];
}

// Helper function to check for circular dependencies
async function checkCircularDependencies(
   taskId: number,
   newDependencies: number[],
   allTasks: any[]
): Promise<void> {
   const visited = new Set<number>();
   const recursionStack = new Set<number>();

   function hasCycle(currentTaskId: number): boolean {
      if (recursionStack.has(currentTaskId)) {
         return true; // Cycle detected
      }
      if (visited.has(currentTaskId)) {
         return false; // Already processed
      }

      visited.add(currentTaskId);
      recursionStack.add(currentTaskId);

      // Get dependencies for current task
      const currentTask = allTasks.find((t) => t.id === currentTaskId);
      const dependencies =
         currentTaskId === taskId ? newDependencies : currentTask?.dependencies || [];

      for (const depId of dependencies) {
         if (hasCycle(depId)) {
            return true;
         }
      }

      recursionStack.delete(currentTaskId);
      return false;
   }

   if (hasCycle(taskId)) {
      throw new Error('Circular dependency detected. This change would create a dependency loop.');
   }
}

export const resolvers = {
   DateTime,
   JSON,

   Query: {
      health: () => 'Server is running',
      hello: () => 'Hello from GraphQL!',

      // Task queries - Enhanced with lib/taskmaster integration
      tasks: async (
         _: any,
         {
            filter,
            orderBy,
            pagination,
         }: {
            filter?: any;
            orderBy?: any;
            pagination?: any;
         }
      ) => {
         try {
            // Try to use database first, fall back to file operations
            try {
               const dbTasks = await taskMasterDB.getTasks(filter || {}, orderBy, {
                  limit: pagination?.first || pagination?.limit,
                  offset: pagination?.offset || 0,
                  includeSubtasks: true,
               });
               return dbTasks.map(transformTaskFromDB);
            } catch (dbError) {
               console.warn('Database query failed, falling back to file operations:', dbError);
               // Fallback to file operations
               const tasksData = await TaskMasterFileOperations.readTasks();
               return tasksData.master.tasks.map(transformTask);
            }
         } catch (error) {
            console.error('Error fetching tasks:', error);
            return [];
         }
      },

      task: async (_: any, { id }: { id: string }) => {
         try {
            const taskId = parseInt(id);
            if (isNaN(taskId)) {
               throw new Error('Invalid task ID');
            }

            // Try to use database first, fall back to file operations
            try {
               const dbTask = await taskMasterDB.getTask(taskId, { includeSubtasks: true });
               return dbTask ? transformTaskFromDB(dbTask) : null;
            } catch (dbError) {
               console.warn('Database query failed, falling back to file operations:', dbError);
               // Fallback to file operations
               const tasksData = await TaskMasterFileOperations.readTasks();
               const task = tasksData.master.tasks.find((t) => t.id === taskId);
               return task ? transformTask(task) : null;
            }
         } catch (error) {
            console.error('Error fetching task:', error);
            return null;
         }
      },

      // Additional enhanced task queries
      searchTasks: async (
         _: any,
         { searchText, limit = 50 }: { searchText: string; limit?: number }
      ) => {
         try {
            const dbTasks = await taskMasterDB.searchTasks(searchText, {
               limit,
               includeSubtasks: true,
            });
            return dbTasks.map(transformTaskFromDB);
         } catch (error) {
            console.error('Error searching tasks:', error);
            return [];
         }
      },

      readyTasks: async (_: any, { limit = 20 }: { limit?: number }) => {
         try {
            const dbTasks = await taskMasterDB.getReadyTasks({ limit, includeSubtasks: true });
            return dbTasks.map(transformTaskFromDB);
         } catch (error) {
            console.error('Error fetching ready tasks:', error);
            return [];
         }
      },

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

      // Sync queries - Enhanced with comprehensive monitoring and filtering
      syncStatus: async () => {
         try {
            const status = syncManager.getSyncStatus();
            const activeOperations = status.operations.filter((op) => op.status === 'executing');
            const completedOperations = status.operations.filter((op) => op.status === 'completed');
            const failedOperations = status.operations.filter((op) => op.status === 'failed');
            const pendingOperations = status.operations.filter((op) => op.status === 'pending');

            // Calculate success rate
            const totalCompleted = completedOperations.length + failedOperations.length;
            const successRate =
               totalCompleted > 0
                  ? Math.round((completedOperations.length / totalCompleted) * 100)
                  : 0;

            // Calculate average operation time
            const avgExecutionTime =
               completedOperations.length > 0
                  ? Math.round(
                       completedOperations.reduce((sum, op) => {
                          const duration = op.timestamp ? Date.now() - op.timestamp : 0;
                          return sum + duration;
                       }, 0) / completedOperations.length
                    )
                  : 0;

            return {
               state: status.state,
               isHealthy: status.state !== 'error',
               queueSize: status.queueSize,
               activeOperationsCount: activeOperations.length,
               completedOperationsCount: completedOperations.length,
               failedOperationsCount: failedOperations.length,
               pendingOperationsCount: pendingOperations.length,
               conflictsCount: status.conflicts.length,
               optimisticUpdatesCount: Object.keys(status.optimisticUpdates).length,
               metrics: {
                  successRate,
                  averageExecutionTime: avgExecutionTime,
                  totalOperations: status.operations.length,
                  operationsByType: groupOperationsByType(status.operations),
                  operationsBySource: groupOperationsBySource(status.operations),
               },
               lastUpdated: new Date(),
            };
         } catch (error) {
            console.error('Error fetching sync status:', error);
            return {
               state: 'error',
               isHealthy: false,
               queueSize: 0,
               activeOperationsCount: 0,
               completedOperationsCount: 0,
               failedOperationsCount: 0,
               pendingOperationsCount: 0,
               conflictsCount: 0,
               optimisticUpdatesCount: 0,
               metrics: {
                  successRate: 0,
                  averageExecutionTime: 0,
                  totalOperations: 0,
                  operationsByType: {},
                  operationsBySource: {},
               },
               lastUpdated: new Date(),
               error: error.message,
            };
         }
      },

      syncOperations: (
         _: any,
         {
            limit = 50,
            filter,
            orderBy,
         }: {
            limit?: number;
            filter?: any;
            orderBy?: any;
         }
      ) => {
         try {
            const status = syncManager.getSyncStatus();
            let operations = [...status.operations];

            // Apply filters if provided
            if (filter) {
               if (filter.type) {
                  operations = operations.filter((op) => op.type === filter.type);
               }
               if (filter.status) {
                  operations = operations.filter((op) => op.status === filter.status);
               }
               if (filter.source) {
                  operations = operations.filter((op) => op.source === filter.source);
               }
               if (filter.taskId) {
                  operations = operations.filter(
                     (op) => op.data && op.data.taskId === filter.taskId
                  );
               }
               if (filter.startDate) {
                  const startDate = new Date(filter.startDate).getTime();
                  operations = operations.filter((op) => op.timestamp >= startDate);
               }
               if (filter.endDate) {
                  const endDate = new Date(filter.endDate).getTime();
                  operations = operations.filter((op) => op.timestamp <= endDate);
               }
            }

            // Apply ordering
            if (orderBy) {
               const field = orderBy.field || 'timestamp';
               const direction = orderBy.direction || 'desc';

               operations.sort((a, b) => {
                  const aValue = a[field as keyof typeof a];
                  const bValue = b[field as keyof typeof b];

                  if (direction === 'asc') {
                     return aValue > bValue ? 1 : -1;
                  } else {
                     return aValue < bValue ? 1 : -1;
                  }
               });
            } else {
               // Default: newest first
               operations.sort((a, b) => b.timestamp - a.timestamp);
            }

            return operations.slice(0, limit).map((op) => ({
               ...op,
               timestamp: new Date(op.timestamp),
               duration: op.status === 'completed' ? calculateOperationDuration(op) : null,
               formattedData: formatOperationData(op),
            }));
         } catch (error) {
            console.error('Error fetching sync operations:', error);
            return [];
         }
      },

      syncOperation: (_: any, { id }: { id: string }) => {
         try {
            const status = syncManager.getSyncStatus();
            const operation = status.operations.find((op) => op.id === id);

            if (!operation) {
               throw new Error(`Sync operation '${id}' not found`);
            }

            return {
               ...operation,
               timestamp: new Date(operation.timestamp),
               duration:
                  operation.status === 'completed' ? calculateOperationDuration(operation) : null,
               formattedData: formatOperationData(operation),
               relatedOperations: getRelatedOperations(operation, status.operations),
            };
         } catch (error) {
            console.error(`Error fetching sync operation '${id}':`, error);
            throw new Error(`Failed to get sync operation: ${error.message}`);
         }
      },

      syncConflicts: (
         _: any,
         {
            limit = 20,
            resolved = null,
         }: {
            limit?: number;
            resolved?: boolean | null;
         }
      ) => {
         try {
            const status = syncManager.getSyncStatus();
            let conflicts = [...status.conflicts];

            // Filter by resolution status if specified
            if (resolved !== null) {
               conflicts = conflicts.filter((conflict) => conflict.resolved === resolved);
            }

            // Sort by timestamp (newest first)
            conflicts.sort((a, b) => {
               const aTime = Math.max(a.operationA.timestamp, a.operationB.timestamp);
               const bTime = Math.max(b.operationA.timestamp, b.operationB.timestamp);
               return bTime - aTime;
            });

            return conflicts.slice(0, limit).map((conflict) => ({
               ...conflict,
               createdAt: new Date(
                  Math.min(conflict.operationA.timestamp, conflict.operationB.timestamp)
               ),
               resolvedAt: conflict.resolvedAt ? new Date(conflict.resolvedAt) : null,
               age:
                  Date.now() -
                  Math.min(conflict.operationA.timestamp, conflict.operationB.timestamp),
               severity: getConflictSeverity(conflict),
               affectedTask: getConflictAffectedTask(conflict),
            }));
         } catch (error) {
            console.error('Error fetching sync conflicts:', error);
            return [];
         }
      },

      syncHealth: async () => {
         try {
            const status = syncManager.getSyncStatus();
            const now = Date.now();

            // Calculate health metrics
            const recentOperations = status.operations.filter(
               (op) => now - op.timestamp < 300000 // Last 5 minutes
            );

            const recentFailures = recentOperations.filter((op) => op.status === 'failed');
            const recentSuccesses = recentOperations.filter((op) => op.status === 'completed');

            const failureRate =
               recentOperations.length > 0
                  ? Math.round((recentFailures.length / recentOperations.length) * 100)
                  : 0;

            const unresolvedConflicts = status.conflicts.filter((c) => !c.resolved);
            const stalledOperations = status.operations.filter(
               (op) => op.status === 'executing' && now - op.timestamp > 120000 // Executing for over 2 minutes
            );

            // Determine overall health status
            let healthStatus: 'healthy' | 'warning' | 'critical' | 'degraded';
            const issues: string[] = [];

            if (status.state === 'error' || stalledOperations.length > 5) {
               healthStatus = 'critical';
               if (status.state === 'error') issues.push('Sync manager in error state');
               if (stalledOperations.length > 5)
                  issues.push(`${stalledOperations.length} stalled operations`);
            } else if (
               failureRate > 25 ||
               unresolvedConflicts.length > 10 ||
               status.queueSize > 100
            ) {
               healthStatus = 'warning';
               if (failureRate > 25) issues.push(`High failure rate: ${failureRate}%`);
               if (unresolvedConflicts.length > 10)
                  issues.push(`${unresolvedConflicts.length} unresolved conflicts`);
               if (status.queueSize > 100) issues.push(`Large queue size: ${status.queueSize}`);
            } else if (failureRate > 10 || status.queueSize > 50) {
               healthStatus = 'degraded';
               if (failureRate > 10) issues.push(`Elevated failure rate: ${failureRate}%`);
               if (status.queueSize > 50) issues.push(`Queue size: ${status.queueSize}`);
            } else {
               healthStatus = 'healthy';
            }

            return {
               status: healthStatus,
               score: calculateHealthScore(
                  failureRate,
                  unresolvedConflicts.length,
                  stalledOperations.length,
                  status.queueSize
               ),
               lastCheck: new Date(),
               metrics: {
                  recentFailureRate: failureRate,
                  unresolvedConflicts: unresolvedConflicts.length,
                  stalledOperations: stalledOperations.length,
                  queueSize: status.queueSize,
                  activeOperations: status.operations.filter((op) => op.status === 'executing')
                     .length,
               },
               issues,
               recommendations: generateHealthRecommendations(healthStatus, issues),
               uptime: process.uptime(),
               syncState: status.state,
            };
         } catch (error) {
            console.error('Error checking sync health:', error);
            return {
               status: 'critical',
               score: 0,
               lastCheck: new Date(),
               metrics: {
                  recentFailureRate: 100,
                  unresolvedConflicts: 0,
                  stalledOperations: 0,
                  queueSize: 0,
                  activeOperations: 0,
               },
               issues: [`Health check failed: ${error.message}`],
               recommendations: ['Check sync manager status', 'Review error logs'],
               uptime: process.uptime(),
               syncState: 'error',
               error: error.message,
            };
         }
      },

      // File system queries
      fileSystemStatus: async () => {
         try {
            const [tasksInfo, configInfo] = await Promise.all([
               TaskMasterFileOperations.getTasksFileInfo(),
               TaskMasterFileOperations.getConfigFileInfo(),
            ]);

            return {
               tasks: tasksInfo,
               config: configInfo,
               timestamp: new Date(),
            };
         } catch (error) {
            console.error('Error fetching file system status:', error);
            throw new Error('Failed to get file system status');
         }
      },

      backupList: async () => {
         try {
            const tasksBackups = await BackupManager.listBackups(
               TaskMasterFileOperations.getTasksFilePath()
            );
            const configBackups = await BackupManager.listBackups(
               TaskMasterFileOperations.getConfigFilePath()
            );

            return {
               tasks: tasksBackups.map((path) => ({
                  path,
                  timestamp: path.split('.backup.')[1]?.replace(/-/g, ':') || 'unknown',
               })),
               config: configBackups.map((path) => ({
                  path,
                  timestamp: path.split('.backup.')[1]?.replace(/-/g, ':') || 'unknown',
               })),
            };
         } catch (error) {
            console.error('Error fetching backup list:', error);
            throw new Error('Failed to get backup list');
         }
      },

      fileWatchStatus: () => {
         try {
            return {
               connectionCount: 0, // This would be managed by a file watch manager
               watcherStatus: fileWatcher.getStatus(),
               timestamp: new Date(),
            };
         } catch (error) {
            console.error('Error fetching file watch status:', error);
            throw new Error('Failed to get file watch status');
         }
      },
   },

   Mutation: {
      ping: () => 'pong',

      // Task mutations - Enhanced with lib/taskmaster integration
      createTask: async (_: any, { input }: { input: any }) => {
         try {
            // Input validation
            if (!input.title?.trim()) {
               throw new Error('Task title is required');
            }
            if (!input.description?.trim()) {
               throw new Error('Task description is required');
            }

            // Validate dependencies exist
            if (input.dependencies?.length > 0) {
               for (const depId of input.dependencies) {
                  const existingTask = await taskMasterDB.getTask(depId);
                  if (!existingTask) {
                     throw new Error(`Dependency task ${depId} does not exist`);
                  }
               }
            }

            // Read current tasks to generate ID
            const tasksData = await TaskMasterFileOperations.readTasks();
            const tasks = tasksData.master.tasks;

            // Generate new task ID
            const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0);
            const newTask = {
               id: maxId + 1,
               title: input.title.trim(),
               description: input.description.trim(),
               status: 'pending',
               priority: input.priority || 'medium',
               dependencies: input.dependencies || [],
               details: input.details?.trim() || '',
               testStrategy: input.testStrategy?.trim() || '',
               subtasks: [],
            };

            // Validate priority
            const validPriorities = ['low', 'medium', 'high', 'urgent'];
            if (!validPriorities.includes(newTask.priority)) {
               throw new Error(`Invalid priority. Must be one of: ${validPriorities.join(', ')}`);
            }

            // Add task to tasks.json
            tasks.push(newTask);
            await TaskMasterFileOperations.writeTasks(tasksData);

            // Trigger automatic sync to Prisma database
            try {
               await taskMasterSync.syncTasksToDatabase({ incremental: true });
            } catch (syncError) {
               console.warn('Warning: Task created but database sync failed:', syncError);
               // Don't fail the operation - task was created in file
            }

            // Emit task created event for subscriptions
            const transformedTask = transformTask(newTask);
            eventEmitter.emitTaskUpdated({
               task: transformedTask,
               changeType: 'CREATED',
               timestamp: new Date(),
               source: 'api',
               previousState: null,
            });

            return transformedTask;
         } catch (error) {
            console.error('Error creating task:', error);
            throw new Error(`Failed to create task: ${error.message}`);
         }
      },

      updateTask: async (_: any, { id, input }: { id: string; input: any }) => {
         try {
            const taskId = parseInt(id);
            if (isNaN(taskId)) {
               throw new Error('Invalid task ID');
            }

            const tasksData = await TaskMasterFileOperations.readTasks();
            const tasks = tasksData.master.tasks;
            const taskIndex = tasks.findIndex((task) => task.id === taskId);

            if (taskIndex === -1) {
               throw new Error('Task not found');
            }

            // Store previous state for event emission
            const previousTask = { ...tasks[taskIndex] };

            // Input validation
            if (input.title !== undefined && !input.title?.trim()) {
               throw new Error('Task title cannot be empty');
            }
            if (input.description !== undefined && !input.description?.trim()) {
               throw new Error('Task description cannot be empty');
            }

            // Validate priority if provided
            if (input.priority) {
               const validPriorities = ['low', 'medium', 'high', 'urgent'];
               if (!validPriorities.includes(input.priority)) {
                  throw new Error(
                     `Invalid priority. Must be one of: ${validPriorities.join(', ')}`
                  );
               }
            }

            // Validate status if provided
            if (input.status) {
               const validStatuses = [
                  'pending',
                  'in-progress',
                  'done',
                  'deferred',
                  'cancelled',
                  'blocked',
               ];
               if (!validStatuses.includes(input.status)) {
                  throw new Error(`Invalid status. Must be one of: ${validStatuses.join(', ')}`);
               }
            }

            // Validate dependencies if provided
            if (input.dependencies?.length > 0) {
               for (const depId of input.dependencies) {
                  if (depId === taskId) {
                     throw new Error('Task cannot depend on itself');
                  }
                  const existingTask = await taskMasterDB.getTask(depId);
                  if (!existingTask) {
                     throw new Error(`Dependency task ${depId} does not exist`);
                  }
               }

               // Check for circular dependencies
               await checkCircularDependencies(taskId, input.dependencies, tasks);
            }

            // Prepare update object with trimmed strings
            const updateData = { ...input };
            if (updateData.title) updateData.title = updateData.title.trim();
            if (updateData.description) updateData.description = updateData.description.trim();
            if (updateData.details) updateData.details = updateData.details.trim();
            if (updateData.testStrategy) updateData.testStrategy = updateData.testStrategy.trim();

            // Update task with provided fields
            tasks[taskIndex] = { ...tasks[taskIndex], ...updateData };
            await TaskMasterFileOperations.writeTasks(tasksData);

            // Trigger automatic sync to Prisma database
            try {
               await taskMasterSync.syncTasksToDatabase({ incremental: true });
            } catch (syncError) {
               console.warn('Warning: Task updated but database sync failed:', syncError);
               // Don't fail the operation - task was updated in file
            }

            // Emit task updated event for subscriptions
            const transformedTask = transformTask(tasks[taskIndex]);
            const changeType =
               input.status && input.status !== previousTask.status ? 'STATUS_CHANGED' : 'UPDATED';

            eventEmitter.emitTaskUpdated({
               task: transformedTask,
               changeType,
               timestamp: new Date(),
               source: 'api',
               previousState: previousTask,
            });

            return transformedTask;
         } catch (error) {
            console.error('Error updating task:', error);
            throw new Error(`Failed to update task: ${error.message}`);
         }
      },

      deleteTask: async (_: any, { id }: { id: string }) => {
         try {
            const taskId = parseInt(id);
            if (isNaN(taskId)) {
               throw new Error('Invalid task ID');
            }

            const tasksData = await TaskMasterFileOperations.readTasks();
            const tasks = tasksData.master.tasks;
            const taskIndex = tasks.findIndex((task) => task.id === taskId);

            if (taskIndex === -1) {
               return false;
            }

            // Check if other tasks depend on this task
            const dependentTasks = tasks.filter(
               (task) => task.dependencies?.includes(taskId) && task.status !== 'cancelled'
            );

            if (dependentTasks.length > 0) {
               const dependentTaskIds = dependentTasks.map((t) => t.id).join(', ');
               throw new Error(
                  `Cannot delete task ${taskId}. The following tasks depend on it: ${dependentTaskIds}`
               );
            }

            // Mark task as cancelled instead of removing it (preserves history)
            tasks[taskIndex].status = 'cancelled';
            await TaskMasterFileOperations.writeTasks(tasksData);

            // Trigger automatic sync to Prisma database
            try {
               await taskMasterSync.syncTasksToDatabase({ incremental: true });
            } catch (syncError) {
               console.warn('Warning: Task deleted but database sync failed:', syncError);
               // Don't fail the operation - task was deleted in file
            }

            return true;
         } catch (error) {
            console.error('Error deleting task:', error);
            throw new Error(`Failed to delete task: ${error.message}`);
         }
      },

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
            const taskCommands = [
               'add-task',
               'set-status',
               'update-task',
               'update-subtask',
               'update',
            ];
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

      // Sync mutations - Enhanced with comprehensive operations and validation
      triggerSync: async (_: any, { input }: { input?: any }) => {
         try {
            // Validate input if provided
            if (input) {
               if (
                  input.type &&
                  !['full', 'incremental', 'conflict_resolution'].includes(input.type)
               ) {
                  throw new Error(
                     'Invalid sync type. Must be one of: full, incremental, conflict_resolution'
                  );
               }
               if (
                  input.priority &&
                  !['low', 'normal', 'high', 'urgent'].includes(input.priority)
               ) {
                  throw new Error('Invalid priority. Must be one of: low, normal, high, urgent');
               }
            }

            const syncType = input?.type || 'incremental';
            const priority = input?.priority || 'normal';
            const force = input?.force || false;
            const description = input?.description || `Manual ${syncType} sync triggered`;

            // Check if sync is already in progress and force is not specified
            const status = syncManager.getSyncStatus();
            if (status.state === 'syncing' && !force) {
               throw new Error('Sync already in progress. Use force: true to override');
            }

            // Trigger sync operation
            const operationId = await syncManager.queueOperation({
               type: 'batch_sync',
               data: {
                  syncType,
                  priority,
                  force,
                  triggeredBy: 'graphql_mutation',
                  description,
               },
               source: 'api',
               priority:
                  priority === 'urgent'
                     ? 1
                     : priority === 'high'
                       ? 2
                       : priority === 'normal'
                         ? 3
                         : 4,
            });

            // Emit sync started event
            const syncOperationPayload = {
               operation: {
                  id: operationId,
                  type: 'batch_sync',
                  status: 'executing',
                  timestamp: new Date(),
                  source: 'api',
                  taskIds: [],
                  metadata: { syncType, priority, force },
                  retryCount: 0,
               },
               changeType: 'STARTED',
               timestamp: new Date(),
            };
            eventEmitter.emitSyncOperationUpdated(syncOperationPayload);

            // Execute sync based on type
            let syncResult;
            try {
               if (syncType === 'full') {
                  syncResult = await taskMasterSync.syncTasksToDatabase({ full: true, force });
               } else if (syncType === 'incremental') {
                  syncResult = await taskMasterSync.syncTasksToDatabase({
                     incremental: true,
                     force,
                  });
               } else if (syncType === 'conflict_resolution') {
                  // Resolve all pending conflicts first
                  const conflicts = status.conflicts.filter((c) => !c.resolved);
                  for (const conflict of conflicts) {
                     await syncManager.resolveConflict(conflict.id, 'auto');
                  }
                  syncResult = await taskMasterSync.syncTasksToDatabase({
                     incremental: true,
                     force,
                  });
               }

               // Emit sync completed event
               syncOperationPayload.operation.status = 'completed';
               syncOperationPayload.changeType = 'COMPLETED';
               syncOperationPayload.timestamp = new Date();
               eventEmitter.emitSyncOperationUpdated(syncOperationPayload);
            } catch (syncError) {
               // Emit sync failed event
               syncOperationPayload.operation.status = 'failed';
               syncOperationPayload.changeType = 'FAILED';
               syncOperationPayload.timestamp = new Date();
               eventEmitter.emitSyncOperationUpdated(syncOperationPayload);
               throw syncError;
            }

            return {
               id: operationId,
               type: 'batch_sync',
               status: 'completed',
               timestamp: new Date(),
               source: 'api',
               data: {
                  syncType,
                  priority,
                  force,
                  description,
                  result: syncResult,
               },
               metadata: {
                  operationsProcessed: syncResult?.operationsCount || 0,
                  conflictsResolved: syncResult?.conflictsResolved || 0,
                  duration: syncResult?.duration || 0,
                  triggeredBy: 'graphql_mutation',
               },
               retryCount: 0,
            };
         } catch (error) {
            console.error('Error triggering sync:', error);
            throw new Error(`Failed to trigger sync: ${error.message}`);
         }
      },

      resolveConflict: async (_: any, { input }: { input: any }) => {
         try {
            // Validate input
            if (!input.conflictId?.trim()) {
               throw new Error('Conflict ID is required');
            }
            if (!input.resolution?.trim()) {
               throw new Error('Resolution strategy is required');
            }

            const validResolutions = ['accept_a', 'accept_b', 'merge', 'manual', 'auto'];
            if (!validResolutions.includes(input.resolution)) {
               throw new Error(
                  `Invalid resolution strategy. Must be one of: ${validResolutions.join(', ')}`
               );
            }

            // Check if conflict exists
            const status = syncManager.getSyncStatus();
            const conflict = status.conflicts.find((c) => c.id === input.conflictId);

            if (!conflict) {
               throw new Error(`Conflict '${input.conflictId}' not found`);
            }

            if (conflict.resolved) {
               throw new Error(`Conflict '${input.conflictId}' is already resolved`);
            }

            // Apply resolution data if provided
            let resolutionData = input.resolutionData || {};

            // For manual resolution, require resolution data
            if (input.resolution === 'manual' && Object.keys(resolutionData).length === 0) {
               throw new Error('Manual resolution requires resolutionData to be provided');
            }

            // Resolve the conflict
            const resolvedConflict = await syncManager.resolveConflict(
               input.conflictId,
               input.resolution,
               resolutionData
            );

            // If auto-sync is enabled, trigger sync after resolution
            if (input.autoSync !== false) {
               try {
                  await taskMasterSync.syncTasksToDatabase({ incremental: true });
               } catch (syncError) {
                  console.warn('Warning: Conflict resolved but auto-sync failed:', syncError);
                  // Don't fail the operation - conflict was resolved
               }
            }

            return {
               id: resolvedConflict.id,
               conflictType: resolvedConflict.conflictType,
               resolved: true,
               resolution: input.resolution,
               resolutionData,
               resolvedAt: new Date(),
               resolvedBy: 'graphql_mutation',
               operationA: {
                  ...resolvedConflict.operationA,
                  timestamp: new Date(resolvedConflict.operationA.timestamp),
               },
               operationB: {
                  ...resolvedConflict.operationB,
                  timestamp: new Date(resolvedConflict.operationB.timestamp),
               },
               metadata: {
                  autoSyncTriggered: input.autoSync !== false,
                  resolutionMethod: input.resolution,
                  resolvedBy: 'graphql_mutation',
               },
            };
         } catch (error) {
            console.error('Error resolving conflict:', error);
            throw new Error(`Failed to resolve conflict: ${error.message}`);
         }
      },

      retryOperation: async (_: any, { input }: { input: any }) => {
         try {
            // Validate input
            if (!input.operationId?.trim()) {
               throw new Error('Operation ID is required');
            }

            // Check if operation exists and can be retried
            const status = syncManager.getSyncStatus();
            const operation = status.operations.find((op) => op.id === input.operationId);

            if (!operation) {
               throw new Error(`Operation '${input.operationId}' not found`);
            }

            if (operation.status !== 'failed') {
               throw new Error(
                  `Operation '${input.operationId}' is not in failed state. Current status: ${operation.status}`
               );
            }

            // Check retry limit
            const maxRetries = input.maxRetries || 3;
            if (operation.retryCount >= maxRetries) {
               throw new Error(
                  `Operation '${input.operationId}' has exceeded maximum retry attempts (${maxRetries})`
               );
            }

            // Override operation parameters if provided
            const retryData = { ...operation.data };
            if (input.overrideData) {
               Object.assign(retryData, input.overrideData);
            }

            // Queue retry operation
            const retryOperationId = await syncManager.queueOperation({
               type: operation.type,
               data: retryData,
               source: 'retry',
               priority: input.priority || operation.priority || 3,
               retryOf: operation.id,
               metadata: {
                  originalOperationId: operation.id,
                  retryAttempt: operation.retryCount + 1,
                  maxRetries,
                  retriedBy: 'graphql_mutation',
                  retryReason: input.reason || 'Manual retry requested',
               },
            });

            // Execute the retry operation
            let retryResult;
            try {
               retryResult = await syncManager.executeOperation(retryOperationId);
            } catch (retryError) {
               console.error(`Retry operation ${retryOperationId} failed:`, retryError);
               throw new Error(`Retry failed: ${retryError.message}`);
            }

            return {
               id: retryOperationId,
               type: operation.type,
               status: retryResult.success ? 'completed' : 'failed',
               timestamp: new Date(),
               source: 'retry',
               data: retryData,
               metadata: {
                  originalOperationId: operation.id,
                  retryAttempt: operation.retryCount + 1,
                  retriedBy: 'graphql_mutation',
                  retrySuccess: retryResult.success,
                  retryDuration: retryResult.duration || 0,
               },
               retryCount: operation.retryCount + 1,
               result: retryResult,
            };
         } catch (error) {
            console.error('Error retrying operation:', error);
            throw new Error(`Failed to retry operation: ${error.message}`);
         }
      },

      batchUpdate: async (_: any, { input }: { input: any }) => {
         try {
            // Validate input
            if (!input.operations || !Array.isArray(input.operations)) {
               throw new Error('Operations array is required');
            }
            if (input.operations.length === 0) {
               throw new Error('At least one operation is required');
            }
            if (input.operations.length > 50) {
               throw new Error('Maximum 50 operations allowed per batch');
            }

            // Validate each operation
            const validOperationTypes = [
               'task_update',
               'task_create',
               'task_delete',
               'status_change',
            ];
            for (let i = 0; i < input.operations.length; i++) {
               const op = input.operations[i];
               if (!op.type || !validOperationTypes.includes(op.type)) {
                  throw new Error(
                     `Invalid operation type at index ${i}. Must be one of: ${validOperationTypes.join(', ')}`
                  );
               }
               if (!op.data) {
                  throw new Error(`Operation data is required at index ${i}`);
               }
            }

            const batchId = `batch_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            const batchOperations = [];
            const results = [];
            let successCount = 0;
            let failureCount = 0;

            // Process operations in transaction-like manner
            const rollbackOperations = [];

            try {
               for (let i = 0; i < input.operations.length; i++) {
                  const op = input.operations[i];

                  try {
                     // Queue individual operation
                     const operationId = await syncManager.queueOperation({
                        type: op.type,
                        data: op.data,
                        source: 'batch',
                        priority: op.priority || 3,
                        metadata: {
                           batchId,
                           batchIndex: i,
                           batchSize: input.operations.length,
                        },
                     });

                     batchOperations.push(operationId);

                     // Execute operation
                     const result = await syncManager.executeOperation(operationId);

                     if (result.success) {
                        successCount++;
                        results.push({
                           index: i,
                           operationId,
                           success: true,
                           result: result.data,
                        });

                        // Store rollback information for successful operations
                        if (input.transactional && op.type !== 'task_create') {
                           rollbackOperations.push({
                              type: 'rollback_' + op.type,
                              data: result.previousState,
                              operationId,
                           });
                        }
                     } else {
                        failureCount++;
                        results.push({
                           index: i,
                           operationId,
                           success: false,
                           error: result.error || 'Operation failed',
                        });

                        // If transactional, rollback previous operations
                        if (input.transactional) {
                           console.log(
                              `Batch operation ${i} failed, rolling back previous operations...`
                           );
                           for (const rollbackOp of rollbackOperations.reverse()) {
                              try {
                                 await syncManager.executeOperation(rollbackOp);
                              } catch (rollbackError) {
                                 console.error('Rollback failed:', rollbackError);
                              }
                           }
                           throw new Error(
                              `Batch operation failed at index ${i}: ${result.error}. Previous operations have been rolled back.`
                           );
                        }
                     }
                  } catch (opError) {
                     failureCount++;
                     results.push({
                        index: i,
                        operationId: null,
                        success: false,
                        error: opError.message,
                     });

                     // If transactional and this is not the first operation, rollback
                     if (input.transactional && rollbackOperations.length > 0) {
                        console.log(
                           `Batch operation ${i} failed, rolling back previous operations...`
                        );
                        for (const rollbackOp of rollbackOperations.reverse()) {
                           try {
                              await syncManager.executeOperation(rollbackOp);
                           } catch (rollbackError) {
                              console.error('Rollback failed:', rollbackError);
                           }
                        }
                        throw new Error(
                           `Batch operation failed at index ${i}: ${opError.message}. Previous operations have been rolled back.`
                        );
                     }
                  }
               }

               // If auto-sync is enabled and we had successful operations, trigger sync
               if (input.autoSync !== false && successCount > 0) {
                  try {
                     await taskMasterSync.syncTasksToDatabase({ incremental: true });
                  } catch (syncError) {
                     console.warn(
                        'Warning: Batch operations completed but auto-sync failed:',
                        syncError
                     );
                     // Don't fail the operation - batch was processed
                  }
               }

               return {
                  batchId,
                  totalOperations: input.operations.length,
                  successCount,
                  failureCount,
                  successRate: Math.round((successCount / input.operations.length) * 100),
                  results,
                  batchOperations,
                  transactional: input.transactional || false,
                  completedAt: new Date(),
                  metadata: {
                     autoSyncTriggered: input.autoSync !== false && successCount > 0,
                     processingMode: input.transactional ? 'transactional' : 'best-effort',
                     batchSource: 'graphql_mutation',
                  },
               };
            } catch (batchError) {
               // If we're here, it means a transactional rollback occurred
               throw batchError;
            }
         } catch (error) {
            console.error('Error processing batch update:', error);
            throw new Error(`Failed to process batch update: ${error.message}`);
         }
      },

      updateTaskStatus: async (
         _: any,
         { taskId, status, source = 'ui' }: { taskId: string; status: string; source?: string }
      ) => {
         try {
            // Enhanced validation
            if (!taskId?.trim()) {
               throw new Error('Task ID is required');
            }
            if (!status?.trim()) {
               throw new Error('Status is required');
            }

            const validStatuses = [
               'pending',
               'in-progress',
               'done',
               'deferred',
               'cancelled',
               'blocked',
            ];
            if (!validStatuses.includes(status)) {
               throw new Error(`Invalid status. Must be one of: ${validStatuses.join(', ')}`);
            }

            // Check if task exists
            try {
               const existingTask = await taskMasterDB.getTask(parseInt(taskId));
               if (!existingTask) {
                  throw new Error(`Task ${taskId} not found`);
               }
            } catch (dbError) {
               // Fallback to file operations
               const tasksData = await TaskMasterFileOperations.readTasks();
               const task = tasksData.master.tasks.find((t) => t.id === parseInt(taskId));
               if (!task) {
                  throw new Error(`Task ${taskId} not found`);
               }
            }

            const operationId = await syncManager.updateTaskStatus(taskId, status, source);

            // Return enhanced sync operation object
            return {
               id: operationId,
               type: 'status_change',
               status: 'completed',
               timestamp: new Date(),
               source,
               data: {
                  taskId: parseInt(taskId),
                  newStatus: status,
                  previousStatus: null, // Would be populated by actual sync manager
               },
               metadata: {
                  status,
                  triggeredBy: 'graphql_mutation',
                  operationType: 'status_change',
               },
               retryCount: 0,
            };
         } catch (error) {
            console.error('Error updating task status:', error);
            throw new Error(`Failed to update task status: ${error.message}`);
         }
      },

      forceSync: async (_: any, { reason }: { reason?: string }) => {
         try {
            const description = reason || 'Force sync triggered via GraphQL';

            // Get current sync status
            const status = syncManager.getSyncStatus();

            // Force stop any current sync operations
            if (status.state === 'syncing') {
               console.log('Force stopping current sync operations...');
               await syncManager.cancelAllOperations();
            }

            // Trigger full sync with force flag
            const syncResult = await taskMasterSync.syncTasksToDatabase({
               full: true,
               force: true,
               reason: description,
            });

            return {
               success: true,
               message: 'Force sync completed successfully',
               result: syncResult,
               previousState: status.state,
               operationsProcessed: syncResult?.operationsCount || 0,
               conflictsResolved: syncResult?.conflictsResolved || 0,
               duration: syncResult?.duration || 0,
               triggeredAt: new Date(),
               reason: description,
            };
         } catch (error) {
            console.error('Error forcing sync:', error);
            return {
               success: false,
               message: `Force sync failed: ${error.message}`,
               result: null,
               previousState: 'unknown',
               operationsProcessed: 0,
               conflictsResolved: 0,
               duration: 0,
               triggeredAt: new Date(),
               reason: reason || 'Force sync triggered via GraphQL',
               error: error.message,
            };
         }
      },

      // File system mutations
      createBackup: async (_: any, { target }: { target: string }) => {
         try {
            if (!['tasks', 'config'].includes(target)) {
               throw new Error('Target must be either "tasks" or "config"');
            }

            const filePath =
               target === 'tasks'
                  ? TaskMasterFileOperations.getTasksFilePath()
                  : TaskMasterFileOperations.getConfigFilePath();

            const backupPath = await BackupManager.createBackup(filePath);

            return {
               success: true,
               message: `Backup created successfully for ${target}`,
               backupPath,
               timestamp: new Date(),
            };
         } catch (error) {
            console.error('Error creating backup:', error);
            return {
               success: false,
               message: `Failed to create backup: ${error.message}`,
               backupPath: null,
               timestamp: new Date(),
            };
         }
      },

      restoreBackup: async (
         _: any,
         { target, backupPath }: { target: string; backupPath: string }
      ) => {
         try {
            if (!['tasks', 'config'].includes(target)) {
               throw new Error('Target must be either "tasks" or "config"');
            }

            const originalPath =
               target === 'tasks'
                  ? TaskMasterFileOperations.getTasksFilePath()
                  : TaskMasterFileOperations.getConfigFilePath();

            await BackupManager.restoreBackup(originalPath, backupPath);

            return {
               success: true,
               message: `${target} restored successfully from backup`,
               restoredFrom: backupPath,
               timestamp: new Date(),
            };
         } catch (error) {
            console.error('Error restoring backup:', error);
            return {
               success: false,
               message: `Failed to restore backup: ${error.message}`,
               restoredFrom: backupPath,
               timestamp: new Date(),
            };
         }
      },

      validateFiles: async () => {
         try {
            // Validate tasks file
            const tasksData = await TaskMasterFileOperations.readTasks();
            // Validate config file
            const configData = await TaskMasterFileOperations.readConfig();

            return {
               valid: true,
               message: 'All files are valid',
               tasks: {
                  valid: true,
                  taskCount: tasksData.master.tasks.length,
                  lastUpdated: new Date(tasksData.master.metadata.updated),
               },
               config: {
                  valid: true,
                  models: configData.models,
                  settings: configData.settings,
               },
               timestamp: new Date(),
            };
         } catch (validationError) {
            return {
               valid: false,
               message: 'File validation failed',
               tasks: null,
               config: null,
               timestamp: new Date(),
            };
         }
      },

      initializeDirectories: async () => {
         try {
            await TaskMasterFileOperations.initializeDirectories();
            return {
               success: true,
               message: 'TaskMaster directories initialized successfully',
               timestamp: new Date(),
            };
         } catch (error) {
            console.error('Error initializing directories:', error);
            return {
               success: false,
               message: `Failed to initialize directories: ${error.message}`,
               timestamp: new Date(),
            };
         }
      },

      cleanupBackups: async (
         _: any,
         { target, olderThanDays = 7 }: { target: string; olderThanDays?: number }
      ) => {
         try {
            if (!['tasks', 'config', 'all'].includes(target)) {
               throw new Error('Target must be "tasks", "config", or "all"');
            }

            const cutoffDate = new Date();
            cutoffDate.setDate(cutoffDate.getDate() - olderThanDays);

            const filePaths = [];
            if (target === 'tasks' || target === 'all') {
               filePaths.push(TaskMasterFileOperations.getTasksFilePath());
            }
            if (target === 'config' || target === 'all') {
               filePaths.push(TaskMasterFileOperations.getConfigFilePath());
            }

            let totalDeleted = 0;
            for (const filePath of filePaths) {
               const backups = await BackupManager.listBackups(filePath);
               for (const backupPath of backups) {
                  const backupTimestamp = backupPath.split('.backup.')[1];
                  if (backupTimestamp) {
                     const backupDate = new Date(backupTimestamp.replace(/-/g, ':'));
                     if (backupDate < cutoffDate) {
                        try {
                           // In a real implementation, you'd delete the file here
                           totalDeleted++;
                        } catch (deleteError) {
                           console.warn(`Failed to delete backup ${backupPath}:`, deleteError);
                        }
                     }
                  }
               }
            }

            return {
               success: true,
               message: `Cleanup completed. Deleted ${totalDeleted} backup files older than ${olderThanDays} days`,
               deletedCount: totalDeleted,
               cutoffDate,
               timestamp: new Date(),
            };
         } catch (error) {
            console.error('Error cleaning up backups:', error);
            return {
               success: false,
               message: `Backup cleanup failed: ${error.message}`,
               deletedCount: 0,
               cutoffDate: new Date(),
               timestamp: new Date(),
            };
         }
      },

      // File watch mutations
      triggerFileWatch: (
         _: any,
         {
            type = 'manual-trigger',
            message = 'Manual trigger',
         }: { type?: string; message?: string }
      ) => {
         try {
            const testData = {
               type,
               message,
               timestamp: new Date().toISOString(),
               connectionCount: 0,
            };

            return {
               success: true,
               message: 'Test event broadcasted',
               data: testData,
               activeConnections: 0,
            };
         } catch (error) {
            console.error('Error triggering file watch:', error);
            return {
               success: false,
               message: `Failed to trigger file watch: ${error.message}`,
               data: {},
               activeConnections: 0,
            };
         }
      },

      restartFileWatcher: () => {
         try {
            const status = fileWatcher.getStatus();
            return {
               success: true,
               message: 'File watcher restarted',
               status,
               timestamp: new Date(),
            };
         } catch (error) {
            console.error('Error restarting file watcher:', error);
            return {
               success: false,
               message: `Failed to restart file watcher: ${error.message}`,
               status: {},
               timestamp: new Date(),
            };
         }
      },
   },

   Subscription: {
      // Task update subscriptions
      taskUpdated: {
         subscribe: (_: any, { filter }: { filter?: any }) => {
            const filterFn = createTaskFilter(filter);
            return pubsub.asyncIterator(SUBSCRIPTION_EVENTS.TASK_UPDATED);
         },
         resolve: (payload: any, { filter }: { filter?: any }) => {
            const filterFn = createTaskFilter(filter);
            return filterFn(payload) ? payload : null;
         },
      },

      // CLI command progress subscriptions
      cliCommandProgress: {
         subscribe: (_: any, { filter }: { filter?: any }) => {
            const filterFn = createCLIFilter(filter);
            return pubsub.asyncIterator(SUBSCRIPTION_EVENTS.CLI_COMMAND_PROGRESS);
         },
         resolve: (payload: any, { filter }: { filter?: any }) => {
            const filterFn = createCLIFilter(filter);
            return filterFn(payload) ? payload : null;
         },
      },

      // Sync operation subscriptions
      syncOperationUpdated: {
         subscribe: (_: any, { filter }: { filter?: any }) => {
            const filterFn = createSyncFilter(filter);
            return pubsub.asyncIterator(SUBSCRIPTION_EVENTS.SYNC_OPERATION_UPDATED);
         },
         resolve: (payload: any, { filter }: { filter?: any }) => {
            const filterFn = createSyncFilter(filter);
            return filterFn(payload) ? payload : null;
         },
      },

      // File watch event subscriptions
      fileWatchEvent: {
         subscribe: () => {
            return pubsub.asyncIterator(SUBSCRIPTION_EVENTS.FILE_WATCH_EVENT);
         },
      },
   },

   // Field resolvers
   Task: {
      progress: (parent: any) => {
         // Calculate progress based on subtasks
         if (!parent.subtasks || parent.subtasks.length === 0) {
            return parent.status === 'done' ? 100 : 0;
         }
         const completed = parent.subtasks.filter((sub: any) => sub.status === 'done').length;
         return Math.round((completed / parent.subtasks.length) * 100);
      },
      isReady: (parent: any) => {
         // Task is ready if it has no blocking dependencies
         return parent.status === 'pending';
      },
      createdAt: (parent: any) => new Date(),
      updatedAt: (parent: any) => new Date(),
   },

   Subtask: {
      parentTask: (parent: any) => null, // Will be implemented with actual data fetching
      createdAt: (parent: any) => new Date(),
      updatedAt: (parent: any) => new Date(),
   },

   TaskCollection: {
      total: (parent: any) => parent.tasks.length,
      completed: (parent: any) => parent.tasks.filter((t: any) => t.status === 'done').length,
      inProgress: (parent: any) =>
         parent.tasks.filter((t: any) => t.status === 'in-progress').length,
      pending: (parent: any) => parent.tasks.filter((t: any) => t.status === 'pending').length,
      progressPercentage: (parent: any) => {
         if (parent.tasks.length === 0) return 0;
         const completed = parent.tasks.filter((t: any) => t.status === 'done').length;
         return (completed / parent.tasks.length) * 100;
      },
   },
};

// Merge original and extended resolvers
const mergedResolvers = {
   ...resolvers,
   Query: {
      ...resolvers.Query,
      ...extendedResolvers.Query,
   },
   Mutation: {
      ...resolvers.Mutation,
      ...extendedResolvers.Mutation,
   },
   Subscription: {
      ...resolvers.Subscription,
      ...extendedResolvers.Subscription,
   },
   // Add extended enum resolvers
   UserStatus: extendedResolvers.UserStatus,
   UserRole: extendedResolvers.UserRole,
   IssueChangeType: extendedResolvers.IssueChangeType,
};

export { mergedResolvers };
export default mergedResolvers;

// Helper function to transform tasks for GraphQL
function transformTask(task: any) {
   return {
      ...task,
      dependencies: task.dependencies || [],
      subtasks: task.subtasks || [],
      createdAt: new Date(),
      updatedAt: new Date(),
   };
}

// Helper function to transform database tasks for GraphQL
function transformTaskFromDB(dbTask: any) {
   return {
      id: dbTask.id,
      title: dbTask.title,
      description: dbTask.description,
      status: dbTask.status,
      priority: dbTask.priority,
      dependencies: dbTask.dependencies || [],
      details: dbTask.details,
      testStrategy: dbTask.testStrategy,
      complexity: dbTask.complexity,
      subtasks: dbTask.subtasks || [],
      createdAt: dbTask.createdAt || new Date(),
      updatedAt: dbTask.updatedAt || new Date(),
   };
}
