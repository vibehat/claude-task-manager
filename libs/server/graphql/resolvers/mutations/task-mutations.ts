import { TaskMasterFileOperations } from '../../../core';
import { TaskMasterSync, TaskMasterDB } from '../../../taskmaster';
import { eventEmitter } from '../../../websocket-server';
import { checkCircularDependencies, transformTask } from '../shared/helpers';

// Initialize TaskMaster instances
const taskMasterSync = new TaskMasterSync();
const taskMasterDB = new TaskMasterDB();

export const taskMutations = {
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
               throw new Error(`Invalid priority. Must be one of: ${validPriorities.join(', ')}`);
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
};
