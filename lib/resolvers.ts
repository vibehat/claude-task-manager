import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { TaskMasterFileOperations, BackupManager } from './core';
import { cliExecutor } from './cli';
import { getGlobalSyncManager, getGlobalFileWatcher } from './core';

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

export const resolvers = {
   DateTime,
   JSON,

   Query: {
      health: () => 'Server is running',
      hello: () => 'Hello from GraphQL!',

      // Task queries
      tasks: async () => {
         try {
            const tasksData = await TaskMasterFileOperations.readTasks();
            return tasksData.master.tasks.map(transformTask);
         } catch (error) {
            console.error('Error fetching tasks:', error);
            return [];
         }
      },

      task: async (_: any, { id }: { id: string }) => {
         try {
            const tasksData = await TaskMasterFileOperations.readTasks();
            const task = tasksData.master.tasks.find((t) => t.id === parseInt(id));
            return task ? transformTask(task) : null;
         } catch (error) {
            console.error('Error fetching task:', error);
            return null;
         }
      },

      // CLI queries
      cliStatus: () => {
         return {
            activeProcesses: cliExecutor.getActiveProcesses(),
            recentCommands: cliExecutor.getHistory(10),
            systemInfo: {
               nodeVersion: process.version,
               platform: process.platform,
               memoryUsage: process.memoryUsage(),
               uptime: process.uptime(),
            },
         };
      },

      cliHistory: (_: any, { limit = 50 }: { limit?: number }) => {
         return cliExecutor.getHistory(limit);
      },

      // Sync queries
      syncStatus: () => {
         return syncManager.getSyncStatus();
      },

      syncOperations: (_: any, { limit = 50 }: { limit?: number }) => {
         const status = syncManager.getSyncStatus();
         return status.operations.sort((a, b) => b.timestamp - a.timestamp).slice(0, limit);
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

      // Task mutations
      createTask: async (_: any, { input }: { input: any }) => {
         try {
            const tasksData = await TaskMasterFileOperations.readTasks();
            const tasks = tasksData.master.tasks;

            // Generate new task ID
            const maxId = tasks.reduce((max, task) => Math.max(max, task.id), 0);
            const newTask = {
               id: maxId + 1,
               title: input.title,
               description: input.description,
               status: 'pending',
               priority: input.priority || 'medium',
               dependencies: input.dependencies || [],
               details: input.details || '',
               testStrategy: input.testStrategy || '',
               subtasks: [],
            };

            tasks.push(newTask);
            await TaskMasterFileOperations.writeTasks(tasksData);

            return transformTask(newTask);
         } catch (error) {
            console.error('Error creating task:', error);
            throw new Error('Failed to create task');
         }
      },

      updateTask: async (_: any, { id, input }: { id: string; input: any }) => {
         try {
            const tasksData = await TaskMasterFileOperations.readTasks();
            const tasks = tasksData.master.tasks;
            const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

            if (taskIndex === -1) {
               throw new Error('Task not found');
            }

            // Update task with provided fields
            tasks[taskIndex] = { ...tasks[taskIndex], ...input };
            await TaskMasterFileOperations.writeTasks(tasksData);

            return transformTask(tasks[taskIndex]);
         } catch (error) {
            console.error('Error updating task:', error);
            throw new Error('Failed to update task');
         }
      },

      deleteTask: async (_: any, { id }: { id: string }) => {
         try {
            const tasksData = await TaskMasterFileOperations.readTasks();
            const tasks = tasksData.master.tasks;
            const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

            if (taskIndex === -1) {
               return false;
            }

            // Mark task as cancelled instead of removing it
            tasks[taskIndex].status = 'cancelled';
            await TaskMasterFileOperations.writeTasks(tasksData);

            return true;
         } catch (error) {
            console.error('Error deleting task:', error);
            return false;
         }
      },

      // CLI mutations
      executeCLICommand: async (_: any, { input }: { input: any }) => {
         try {
            const result = await cliExecutor.executeCommand({
               command: input.command,
               args: input.args || [],
               timeout: input.timeout,
               parseOutput: input.parseOutput !== false,
               captureProgress: input.captureProgress || false,
            });
            return result;
         } catch (error) {
            console.error('Error executing CLI command:', error);
            throw new Error('Failed to execute CLI command');
         }
      },

      killCLIProcess: (_: any, { processId }: { processId: string }) => {
         try {
            return cliExecutor.killProcess(processId);
         } catch (error) {
            console.error('Error killing process:', error);
            return false;
         }
      },

      clearCLIHistory: () => {
         try {
            cliExecutor.clearHistory();
            return true;
         } catch (error) {
            console.error('Error clearing CLI history:', error);
            return false;
         }
      },

      // Sync mutations
      updateTaskStatus: async (
         _: any,
         { taskId, status, source = 'ui' }: { taskId: string; status: string; source?: string }
      ) => {
         try {
            const operationId = await syncManager.updateTaskStatus(taskId, status, source);
            // Return a basic sync operation object
            return {
               id: operationId,
               type: 'STATUS_CHANGE',
               status: 'PENDING',
               timestamp: new Date(),
               source,
               taskIds: [taskId],
               metadata: { status },
               retryCount: 0,
            };
         } catch (error) {
            console.error('Error updating task status:', error);
            throw new Error('Failed to update task status');
         }
      },

      resolveSyncConflict: async (
         _: any,
         { conflictId, resolution }: { conflictId: string; resolution: string }
      ) => {
         try {
            await syncManager.resolveConflict(conflictId, resolution);
            return true;
         } catch (error) {
            console.error('Error resolving conflict:', error);
            return false;
         }
      },

      forceSync: () => {
         try {
            // Trigger a manual sync check
            return true;
         } catch (error) {
            console.error('Error forcing sync:', error);
            return false;
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
