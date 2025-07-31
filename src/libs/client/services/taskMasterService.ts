import type { Task, TaskStatus, TaskPriority } from '../types/dataModels';

export interface TaskMasterTask {
   id: number;
   title: string;
   description: string;
   details: string;
   testStrategy: string;
   priority: 'high' | 'medium' | 'low';
   dependencies: number[];
   status: 'pending' | 'in-progress' | 'done' | 'deferred' | 'cancelled' | 'blocked';
   subtasks: TaskMasterSubtask[];
}

export interface TaskMasterSubtask {
   id: number;
   title: string;
   description: string;
   dependencies: string[];
   details: string;
   status: 'pending' | 'in-progress' | 'done' | 'deferred' | 'cancelled' | 'blocked';
   testStrategy: string;
}

export interface TaskMasterData {
   [tagName: string]: {
      tasks: TaskMasterTask[];
      metadata: {
         created: string;
         updated: string;
         description: string;
      };
   };
}

class TaskMasterService {
   private static instance: TaskMasterService;
   private watchers = new Set<(tasks: TaskMasterTask[]) => void>();

   private constructor() {
      // Client-side service - no file system access
   }

   static getInstance(): TaskMasterService {
      if (!TaskMasterService.instance) {
         TaskMasterService.instance = new TaskMasterService();
      }
      return TaskMasterService.instance;
   }

   async readTasksJson(): Promise<TaskMasterData | null> {
      try {
         const response = await fetch('/api/taskmaster/tasks');
         if (!response.ok) {
            if (response.status === 404) {
               console.log('TaskMaster tasks.json not found');
               return null;
            }
            throw new Error(`Failed to fetch tasks: ${response.statusText}`);
         }
         const data = await response.json();
         return data as TaskMasterData;
      } catch (error) {
         console.warn('Failed to read TaskMaster tasks:', error);
         return null;
      }
   }

   async getAllTasks(tagName = 'master'): Promise<TaskMasterTask[]> {
      const data = await this.readTasksJson();
      return data?.[tagName]?.tasks || [];
   }

   async getTaskById(id: number, tagName = 'master'): Promise<TaskMasterTask | null> {
      const tasks = await this.getAllTasks(tagName);
      return tasks.find((task) => task.id === id) || null;
   }

   async getSubtaskById(
      taskId: number,
      subtaskId: number,
      tagName = 'master'
   ): Promise<TaskMasterSubtask | null> {
      const task = await this.getTaskById(taskId, tagName);
      return task?.subtasks.find((subtask) => subtask.id === subtaskId) || null;
   }

   convertTaskToTask(task: TaskMasterTask, orderIndex: number): Task {
      return {
         id: `task-${task.id}`,
         title: task.title,
         description: task.description,
         statusId: this.mapTaskStatusToTaskStatus(task.status),
         priorityId: this.mapTaskPriorityToTaskPriority(task.priority),
         assigneeId: undefined,
         projectId: 'project-taskmaster',
         parentTaskId: undefined,
         labelIds: this.getLabelsForTask(task),
         taskId: task.id,
         subtaskId: undefined,
         orderIndex,
         createdAt: new Date(),
         updatedAt: new Date(),
      };
   }

   convertSubtaskToTask(
      subtask: TaskMasterSubtask,
      parentTaskId: number,
      orderIndex: number
   ): Task {
      return {
         id: `task-${parentTaskId}-${subtask.id}`,
         title: subtask.title,
         description: subtask.description,
         statusId: this.mapTaskStatusToTaskStatus(subtask.status),
         priorityId: 'priority-3', // Default to medium for subtasks
         assigneeId: undefined,
         projectId: 'project-taskmaster',
         parentTaskId: `task-${parentTaskId}`,
         labelIds: ['label-subtask'],
         taskId: parentTaskId,
         subtaskId: `${parentTaskId}.${subtask.id}`,
         orderIndex,
         createdAt: new Date(),
         updatedAt: new Date(),
      };
   }

   private mapTaskStatusToTaskStatus(status: TaskMasterTask['status']): string {
      const statusMap: Record<TaskMasterTask['status'], string> = {
         'pending': 'status-2', // todo
         'in-progress': 'status-3', // in_progress
         'done': 'status-4', // done
         'deferred': 'status-1', // backlog
         'cancelled': 'status-5', // cancelled
         'blocked': 'status-1', // backlog
      };
      return statusMap[status] || 'status-1';
   }

   private mapTaskPriorityToTaskPriority(priority: TaskMasterTask['priority']): string {
      const priorityMap: Record<TaskMasterTask['priority'], string> = {
         high: 'priority-2', // high
         medium: 'priority-3', // medium
         low: 'priority-4', // low
      };
      return priorityMap[priority] || 'priority-0';
   }

   private getLabelsForTask(task: TaskMasterTask): string[] {
      const labels: string[] = ['label-taskmaster'];

      if (task.priority === 'high') {
         labels.push('label-5'); // urgent
      }

      if (task.subtasks.length > 0) {
         labels.push('label-parent');
      }

      if (task.dependencies.length > 0) {
         labels.push('label-dependent');
      }

      return labels;
   }

   async convertAllTasksToTasks(tagName = 'master'): Promise<Task[]> {
      const tasks = await this.getAllTasks(tagName);
      const tasksConverted: Task[] = [];
      let orderIndex = 0;

      for (const task of tasks) {
         // Add main task
         tasksConverted.push(this.convertTaskToTask(task, orderIndex++));

         // Add subtasks as child tasks
         for (const subtask of task.subtasks) {
            tasksConverted.push(this.convertSubtaskToTask(subtask, task.id, orderIndex++));
         }
      }

      return tasksConverted;
   }

   // File watching functionality
   addWatcher(callback: (tasks: TaskMasterTask[]) => void): () => void {
      this.watchers.add(callback);

      // Return unsubscribe function
      return () => {
         this.watchers.delete(callback);
      };
   }

   private async notifyWatchers(tagName = 'master'): Promise<void> {
      const tasks = await this.getAllTasks(tagName);
      this.watchers.forEach((callback) => callback(tasks));
   }

   // Initialize file watcher (client-side implementation would use different approach)
   async startWatching(tagName = 'master'): Promise<void> {
      if (typeof window !== 'undefined') {
         // Client-side: prefer SSE over polling for better performance
         this.startServerSentEvents(tagName);
      } else {
         // Server-side: use fs.watch
         this.startFileSystemWatcher(tagName);
      }
   }

   // Stop watching and cleanup resources
   stopWatching(): void {
      if ((this as any).eventSource) {
         (this as any).eventSource.close();
         delete (this as any).eventSource;
      }
      // Clear any active polling timeouts would need additional tracking
   }

   private startPolling(tagName = 'master', interval = 2000): void {
      let lastModified: string | null = null;

      const poll = async () => {
         try {
            const data = await this.readTasksJson();
            if (data && data[tagName]) {
               const currentModified = data[tagName].metadata.updated;
               if (lastModified !== currentModified) {
                  lastModified = currentModified;
                  await this.notifyWatchers(tagName);
               }
            }
         } catch (error) {
            console.warn('Polling error:', error);
         }
         setTimeout(poll, interval);
      };

      poll();
   }

   // Start server-sent events for real-time updates
   private startServerSentEvents(tagName = 'master'): void {
      if (typeof EventSource === 'undefined') {
         console.warn('EventSource not supported, falling back to polling');
         this.startPolling(tagName);
         return;
      }

      const eventSource = new EventSource(`/api/taskmaster/watch?tag=${tagName}`);

      eventSource.onmessage = async (event) => {
         try {
            const data = JSON.parse(event.data);
            if (data.type === 'task-update') {
               await this.notifyWatchers(tagName);
            }
         } catch (error) {
            console.warn('EventSource message error:', error);
         }
      };

      eventSource.onerror = (error) => {
         console.warn('EventSource error, falling back to polling:', error);
         eventSource.close();
         this.startPolling(tagName);
      };

      // Store reference for cleanup
      (this as any).eventSource = eventSource;
   }

   private async startFileSystemWatcher(tagName = 'master'): Promise<void> {
      // Client-side: No file system access, fallback to polling
      console.warn('File system watcher not available in browser, using polling');
      this.startPolling(tagName);
   }

   // Utility methods
   async getTaskMasterStatuses(): Promise<TaskStatus[]> {
      return [
         {
            id: 'status-1',
            name: 'backlog',
            color: '#95a5a6',
            order: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 'status-2',
            name: 'todo',
            color: '#3498db',
            order: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 'status-3',
            name: 'in_progress',
            color: '#f39c12',
            order: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 'status-4',
            name: 'done',
            color: '#2ecc71',
            order: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 'status-5',
            name: 'cancelled',
            color: '#e74c3c',
            order: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
         },
      ];
   }

   async getTaskMasterPriorities(): Promise<TaskPriority[]> {
      return [
         {
            id: 'priority-0',
            name: 'no_priority',
            value: 0,
            color: '#95a5a6',
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
      ];
   }

   // Check if TaskMaster is available
   async isAvailable(): Promise<boolean> {
      try {
         const response = await fetch('/api/taskmaster/status');
         return response.ok;
      } catch (error) {
         console.warn('Failed to check TaskMaster availability:', error);
         return false;
      }
   }
}

export const taskMasterService = TaskMasterService.getInstance();
