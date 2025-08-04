import type { Task, Subtask } from '../types/dataModels';
import type { TaskMasterTask, TaskMasterSubtask, TaskExtra } from './types';
import { PRIORITY_MAPPING } from './defaultData';
import { TagExtractor } from './tagExtractor';

export class TaskConverter {
   static convertTaskMasterTasks(taskMasterTasks: TaskMasterTask[], tagContext: string): Task[] {
      const now = new Date();
      const convertedTasks: Task[] = [];

      for (const tmTask of taskMasterTasks) {
         // Convert subtasks first
         const subtasks: Subtask[] = [];
         if (tmTask.subtasks && tmTask.subtasks.length > 0) {
            for (let i = 0; i < tmTask.subtasks.length; i++) {
               const tmSubtask = tmTask.subtasks[i];
               const subtask: Subtask = {
                  id: `${String(tmTask.id)}.${i + 1}`, // e.g., "1.1", "1.2"
                  title: tmSubtask.title,
                  description: tmSubtask.description,
                  details: tmSubtask.details,
                  testStrategy: tmSubtask.testStrategy,
                  statusId: tmSubtask.status,
                  completed: tmSubtask.status === 'done',
                  orderIndex: i,
                  createdAt: now,
                  updatedAt: now,
               };
               subtasks.push(subtask);
            }
         }

         // Convert parent task
         const tagId = TagExtractor.getTaskTagId(tagContext);

         const parentTask: Task = {
            id: String(tmTask.id),
            title: tmTask.title,
            description: tmTask.description || '',
            details: tmTask.details,
            testStrategy: tmTask.testStrategy,
            statusId: tmTask.status, // Use TaskMaster status directly
            priorityId: PRIORITY_MAPPING[tmTask.priority] || 'priority-3', // default to medium
            tagId: tagId,
            labelIds: [],
            taskId: Number(tmTask.id),
            subtaskId: undefined,
            subtasks: subtasks, // Include converted subtasks
            orderIndex: typeof tmTask.id === 'number' ? tmTask.id : Number(tmTask.id),
            createdAt: now,
            updatedAt: now,
         };
         convertedTasks.push(parentTask);
      }

      return convertedTasks;
   }

   static reconstructUITasksFromExtra(taskExtra?: Record<string, TaskExtra>): Task[] {
      if (!taskExtra) return [];
      const uiTasks: Task[] = [];
      return uiTasks;
   }
}
