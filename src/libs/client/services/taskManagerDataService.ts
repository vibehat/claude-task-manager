import type { User, Tag, Label, TaskStatus, TaskPriority, Task } from '../types/dataModels';

export interface TaskExtra {
   createdAt?: string;
   updatedAt?: string;
   metadata?: {
      [key: string]: any;
   };
}

export interface TaskManagerData {
   users: User[];
   tags: Tag[];
   labels: Label[];
   statuses: TaskStatus[];
   priorities: TaskPriority[];
   tasks?: Task[];
   taskExtra?: Record<string, TaskExtra>;
   metadata: {
      created: string;
      updated: string;
      description: string;
   };
}

class TaskManagerDataService {
   private static instance: TaskManagerDataService;

   private constructor() {}

   static getInstance(): TaskManagerDataService {
      if (!TaskManagerDataService.instance) {
         TaskManagerDataService.instance = new TaskManagerDataService();
      }
      return TaskManagerDataService.instance;
   }

   async readTaskManagerData(): Promise<TaskManagerData | null> {
      try {
         console.log('[TaskManagerDataService] Starting fetch from multiple endpoints...');

         // Fetch from both endpoints in parallel
         const [taskManagerResponse, tasksResponse] = await Promise.all([
            fetch('/api/taskmaster/task-manager'),
            fetch('/api/taskmaster/tasks'),
         ]);

         let baseData: TaskManagerData | null = null;
         let taskMasterTasks: any[] = [];

         // Try to get task manager data (metadata, users, projects, etc.)
         if (taskManagerResponse.ok) {
            baseData = await taskManagerResponse.json();
            console.log('[TaskManagerDataService] Loaded task manager data');
         } else {
            console.log('TaskManager data not found, using defaults');
         }

         // Try to get TaskMaster CLI tasks
         if (tasksResponse.ok) {
            const tasksData = await tasksResponse.json();
            taskMasterTasks = tasksData.master?.tasks || [];
            console.log(
               `[TaskManagerDataService] Found ${taskMasterTasks.length} TaskMaster CLI tasks`
            );
            console.log('[TaskManagerDataService] Sample task:', taskMasterTasks[0]);
         } else {
            console.log('TaskMaster CLI data not found, status:', tasksResponse.status);
         }

         // If neither source has data, return null
         if (!baseData && taskMasterTasks.length === 0) {
            console.log('No data available from either source');
            return null;
         }

         // Use base data or create minimal structure
         const finalData: TaskManagerData = baseData || {
            users: [
               {
                  id: 'user-1',
                  name: 'You',
                  email: 'user@example.com',
                  avatarUrl: '',
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
            ],
            tags: [
               {
                  id: 'tag-personal',
                  name: 'Personal Tasks',
                  description: 'Individual task management',
                  teamId: 'team-individual',
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
            ],
            labels: [
               {
                  id: 'label-taskmaster',
                  name: 'TaskMaster',
                  color: '#3498db',
                  description: 'Tasks from TaskMaster CLI',
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
            ],
            statuses: [
               {
                  id: 'pending',
                  name: 'Pending',
                  color: '#3498db',
                  order: 0,
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
               {
                  id: 'in-progress',
                  name: 'In Progress',
                  color: '#f39c12',
                  order: 1,
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
               {
                  id: 'review',
                  name: 'Review',
                  color: '#9b59b6',
                  order: 2,
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
               {
                  id: 'done',
                  name: 'Done',
                  color: '#2ecc71',
                  order: 3,
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
               {
                  id: 'deferred',
                  name: 'Deferred',
                  color: '#95a5a6',
                  order: 4,
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
               {
                  id: 'cancelled',
                  name: 'Cancelled',
                  color: '#e74c3c',
                  order: 5,
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
            ],
            priorities: [
               {
                  id: 'priority-0',
                  name: 'no_priority',
                  value: 0,
                  color: '#95a5a6',
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
               {
                  id: 'priority-1',
                  name: 'urgent',
                  value: 4,
                  color: '#e74c3c',
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
               {
                  id: 'priority-2',
                  name: 'high',
                  value: 3,
                  color: '#e67e22',
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
               {
                  id: 'priority-3',
                  name: 'medium',
                  value: 2,
                  color: '#f39c12',
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
               {
                  id: 'priority-4',
                  name: 'low',
                  value: 1,
                  color: '#3498db',
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
            ],
            tasks: [],
            metadata: {
               created: new Date().toISOString(),
               updated: new Date().toISOString(),
               description: 'Merged TaskMaster UI and CLI data',
            },
         };

         // Convert TaskMaster CLI tasks to UI format
         const convertedTasks = this.convertTaskMasterTasks(taskMasterTasks);
         console.log(
            `[TaskManagerDataService] Converted ${convertedTasks.length} TaskMaster tasks`
         );

         // Reconstruct UI tasks from taskExtra data (if any)
         const uiTasks = this.reconstructUITasksFromExtra(finalData.taskExtra);
         console.log(`[TaskManagerDataService] Reconstructed ${uiTasks.length} UI tasks`);

         // Combine all tasks
         finalData.tasks = [...uiTasks, ...convertedTasks];
         console.log(`[TaskManagerDataService] Final combined tasks: ${finalData.tasks.length}`);

         console.log('[TaskManagerDataService] Successfully merged data:', {
            hasStatuses: !!finalData.statuses,
            statusCount: finalData.statuses?.length,
            hasUsers: !!finalData.users,
            totalTasks: finalData.tasks.length,
            uiTasks: uiTasks.length,
            taskMasterTasks: convertedTasks.length,
         });

         return finalData;
      } catch (error) {
         console.error('[TaskManagerDataService] Failed to read TaskManager data:', error);
         return null;
      }
   }

   async writeTaskManagerData(data: TaskManagerData): Promise<boolean> {
      try {
         console.warn(
            '[TaskManagerDataService] Write operations are no longer supported. Client should manage data locally and use TaskMaster CLI APIs for task operations.'
         );
         return false;
      } catch (error) {
         console.warn('Failed to write TaskManager data:', error);
         return false;
      }
   }

   async isAvailable(): Promise<boolean> {
      try {
         const response = await fetch('/api/taskmaster/task-manager');
         return response.ok;
      } catch (error) {
         console.warn('Failed to check TaskManager data availability:', error);
         return false;
      }
   }

   // Utility methods for adding/updating specific data types
   async addUser(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User | null> {
      const data = await this.readTaskManagerData();
      if (!data) return null;

      const newUser: User = {
         ...user,
         id: `user-${Date.now()}`,
         createdAt: new Date(),
         updatedAt: new Date(),
      };

      data.users.push(newUser);
      const success = await this.writeTaskManagerData(data);
      return success ? newUser : null;
   }

   async updateUser(id: string, updates: Partial<User>): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      const userIndex = data.users.findIndex((user) => user.id === id);
      if (userIndex === -1) return false;

      data.users[userIndex] = {
         ...data.users[userIndex],
         ...updates,
         updatedAt: new Date(),
      };

      return await this.writeTaskManagerData(data);
   }

   async deleteUser(id: string): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      data.users = data.users.filter((user) => user.id !== id);
      // Also unassign from additional tasks
      data.tasks = data.tasks.map((task) =>
         task.assigneeId === id ? { ...task, assigneeId: undefined } : task
      );

      return await this.writeTaskManagerData(data);
   }

   async addTag(tag: Omit<Tag, 'id' | 'createdAt' | 'updatedAt'>): Promise<Tag | null> {
      const data = await this.readTaskManagerData();
      if (!data) return null;

      const newTag: Tag = {
         ...tag,
         id: `tag-${Date.now()}`,
         createdAt: new Date(),
         updatedAt: new Date(),
      };

      data.tags.push(newTag);
      const success = await this.writeTaskManagerData(data);
      return success ? newTag : null;
   }

   async updateTag(id: string, updates: Partial<Tag>): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      const tagIndex = data.tags.findIndex((tag) => tag.id === id);
      if (tagIndex === -1) return false;

      data.tags[tagIndex] = {
         ...data.tags[tagIndex],
         ...updates,
         updatedAt: new Date(),
      };

      return await this.writeTaskManagerData(data);
   }

   async deleteTag(id: string): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      data.tags = data.tags.filter((tag) => tag.id !== id);
      // Also remove tag from additional tasks
      data.tasks = data.tasks.map((task) =>
         task.tagId === id ? { ...task, tagId: undefined } : task
      );

      return await this.writeTaskManagerData(data);
   }

   async addLabel(label: Omit<Label, 'id' | 'createdAt' | 'updatedAt'>): Promise<Label | null> {
      const data = await this.readTaskManagerData();
      if (!data) return null;

      const newLabel: Label = {
         ...label,
         id: `label-${Date.now()}`,
         createdAt: new Date(),
         updatedAt: new Date(),
      };

      data.labels.push(newLabel);
      const success = await this.writeTaskManagerData(data);
      return success ? newLabel : null;
   }

   async updateLabel(id: string, updates: Partial<Label>): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      const labelIndex = data.labels.findIndex((label) => label.id === id);
      if (labelIndex === -1) return false;

      data.labels[labelIndex] = {
         ...data.labels[labelIndex],
         ...updates,
         updatedAt: new Date(),
      };

      return await this.writeTaskManagerData(data);
   }

   async deleteLabel(id: string): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      data.labels = data.labels.filter((label) => label.id !== id);
      // Also remove label from additional tasks
      data.tasks = data.tasks.map((task) => ({
         ...task,
         labelIds: task.labelIds.filter((labelId) => labelId !== id),
      }));

      return await this.writeTaskManagerData(data);
   }

   async addAdditionalTask(
      task: Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'orderIndex'>
   ): Promise<Task | null> {
      const data = await this.readTaskManagerData();
      if (!data) return null;

      const newTask: Task = {
         ...task,
         id: `task-additional-${Date.now()}`,
         orderIndex: data.tasks.length,
         createdAt: new Date(),
         updatedAt: new Date(),
      };

      data.tasks.push(newTask);
      const success = await this.writeTaskManagerData(data);
      return success ? newTask : null;
   }

   async updateAdditionalTask(id: string, updates: Partial<Task>): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      const taskIndex = data.tasks.findIndex((task) => task.id === id);
      if (taskIndex === -1) return false;

      data.tasks[taskIndex] = {
         ...data.tasks[taskIndex],
         ...updates,
         updatedAt: new Date(),
      };

      return await this.writeTaskManagerData(data);
   }

   async deleteAdditionalTask(id: string): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      // Remove from tasks array (if it exists there)
      if (data.tasks) {
         data.tasks = data.tasks.filter((task) => task.id !== id && task.parentTaskId !== id);
      }

      // Remove from taskExtra (where UI tasks are actually stored)
      if (data.taskExtra && data.taskExtra[id]) {
         delete data.taskExtra[id];
      }

      // Also remove any child tasks from taskExtra
      if (data.taskExtra) {
         const childTaskIds = Object.keys(data.taskExtra).filter(
            (taskId) => data.taskExtra?.[taskId]?.metadata?.parentTaskId === id
         );
         for (const childId of childTaskIds) {
            delete data.taskExtra[childId];
         }
      }

      return await this.writeTaskManagerData(data);
   }

   // Helper methods for converting TaskMaster data (moved from removed API route)
   private convertTaskMasterTasks(taskMasterTasks: any[]): Task[] {
      const now = new Date();
      const convertedTasks: Task[] = [];

      // Create priority mapping for TaskMaster data
      const priorityMapping: Record<string, string> = {
         urgent: 'priority-1',
         high: 'priority-2',
         medium: 'priority-3',
         low: 'priority-4',
      };

      for (const tmTask of taskMasterTasks) {
         // Convert parent task
         const parentTask: Task = {
            id: tmTask.id,
            title: tmTask.title,
            description: tmTask.description || '',
            details: tmTask.details,
            testStrategy: tmTask.testStrategy,
            statusId: tmTask.status, // Use TaskMaster status directly
            priorityId: priorityMapping[tmTask.priority] || 'priority-3', // default to medium
            assigneeId: undefined,
            tagId: 'tag-personal', // default tag for TaskMaster tasks
            parentTaskId: undefined,
            labelIds: [],
            taskId: tmTask.id,
            subtaskId: undefined,
            orderIndex: tmTask.id,
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
                  priorityId: priorityMapping[tmTask.priority] || 'priority-3', // inherit from parent
                  assigneeId: undefined,
                  tagId: 'tag-personal',
                  parentTaskId: tmTask.id,
                  labelIds: [],
                  taskId: tmTask.id,
                  subtaskId: `${subtask.id}`,
                  orderIndex: subtask.id,
                  createdAt: now,
                  updatedAt: now,
               };
               convertedTasks.push(convertedSubtask);
            }
         }
      }

      return convertedTasks;
   }

   private reconstructUITasksFromExtra(taskExtra?: Record<string, TaskExtra>): Task[] {
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
               assigneeId: extra.metadata.assigneeId,
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

export const taskManagerDataService = TaskManagerDataService.getInstance();
