import type { Task } from '../types/dataModels';
import type { TaskMasterTask, TaskExtra } from './types';
import { PRIORITY_MAPPING } from './defaultData';
import { TagExtractor } from './tagExtractor';

export class TaskConverter {
   static convertTaskMasterTasks(taskMasterTasks: TaskMasterTask[], tagContext: string): Task[] {
      const now = new Date();
      const convertedTasks: Task[] = [];

      for (const tmTask of taskMasterTasks) {
         // Convert parent task
         const parentTask: Task = {
            id: tmTask.id,
            title: tmTask.title,
            description: tmTask.description || '',
            details: tmTask.details,
            testStrategy: tmTask.testStrategy,
            statusId: tmTask.status, // Use TaskMaster status directly
            priorityId: PRIORITY_MAPPING[tmTask.priority] || 'priority-3', // default to medium
            tagId: TagExtractor.getTaskTagId(tagContext),
            parentTaskId: undefined,
            labelIds: [],
            taskId: Number(tmTask.id),
            subtaskId: undefined,
            orderIndex: Number(tmTask.id),
            createdAt: now,
            updatedAt: now,
         };
         convertedTasks.push(parentTask);

         // Convert subtasks
         if (tmTask.subtasks) {
            for (const subtask of tmTask.subtasks) {
               const convertedSubtask: Task = {
                  id: `${tmTask.id}.${subtask.id}`,
                  title: subtask.title,
                  description: subtask.description || '',
                  details: subtask.details,
                  testStrategy: subtask.testStrategy,
                  statusId: subtask.status, // Use TaskMaster status directly
                  priorityId: PRIORITY_MAPPING[tmTask.priority] || 'priority-3', // inherit from parent
                  tagId: TagExtractor.getTaskTagId(tagContext),
                  parentTaskId: tmTask.id,
                  labelIds: [],
                  taskId: Number(tmTask.id),
                  subtaskId: `${subtask.id}`,
                  orderIndex: Number(subtask.id),
                  createdAt: now,
                  updatedAt: now,
               };
               convertedTasks.push(convertedSubtask);
            }
         }
      }

      return convertedTasks;
   }

   static reconstructUITasksFromExtra(taskExtra?: Record<string, TaskExtra>): Task[] {
      if (!taskExtra) return [];

      const now = new Date();
      const uiTasks: Task[] = [];

      // Only reconstruct tasks that are not TaskMaster CLI tasks (don't have taskId field)
      for (const [taskId, extra] of Object.entries(taskExtra)) {
         if (extra.metadata && extra.metadata.taskId !== undefined) continue;

         // Reconstruct basic UI task structure from metadata
         // Only reconstruct if metadata contains actual task data (has title, statusId, etc.)
         if (extra.metadata && extra.metadata.title && extra.metadata.statusId) {
            const task: Task = {
               id: taskId,
               title: extra.metadata.title,
               description: extra.metadata.description || '',
               statusId: extra.metadata.statusId,
               priorityId: extra.metadata.priorityId || 'priority-3',
               tagId: extra.metadata.tagId || 'tag-personal',
               parentTaskId: extra.metadata.parentTaskId,
               labelIds: extra.metadata.labelIds || [],
               taskId: extra.metadata.taskId,
               subtaskId: extra.metadata.subtaskId,
               orderIndex: extra.metadata.orderIndex || 0,
               createdAt: extra.createdAt ? new Date(extra.createdAt) : now,
               updatedAt: extra.updatedAt ? new Date(extra.updatedAt) : now,
            };
            uiTasks.push(task);
         }
         // Skip entries that don't have proper task metadata (like orphaned data)
      }

      return uiTasks;
   }
}
