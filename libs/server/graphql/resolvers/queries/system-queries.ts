import { TaskMasterFileOperations, BackupManager } from '../../../core';
import { getGlobalFileWatcher } from '../../../core';

const fileWatcher = getGlobalFileWatcher();

export const systemQueries = {
   health: () => 'Server is running',
   hello: () => 'Hello from GraphQL!',

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
};
