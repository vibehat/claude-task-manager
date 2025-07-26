import { TaskMasterFileOperations } from '../../../core';
import { TaskMasterDB } from '../../../taskmaster';
import { transformTask, transformTaskFromDB } from '../shared/helpers';

// Initialize TaskMaster instances
const taskMasterDB = new TaskMasterDB();

export const taskQueries = {
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

   readyTasks: async (_: any, { limit = 20 }: { limit?: number }) => {
      try {
         const dbTasks = await taskMasterDB.getReadyTasks({ limit, includeSubtasks: true });
         return dbTasks.map(transformTaskFromDB);
      } catch (error) {
         console.error('Error fetching ready tasks:', error);
         return [];
      }
   },
};
