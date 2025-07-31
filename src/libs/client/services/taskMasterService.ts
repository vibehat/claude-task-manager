import { Issue, IssueStatus, IssuePriority } from './mockDataService';

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
      // Client-side: Would need to fetch from API endpoint
      // For now, return null to indicate TaskMaster is not available
      return null;
   }

   async getAllTasks(tagName: string = 'master'): Promise<TaskMasterTask[]> {
      const data = await this.readTasksJson();
      return data?.[tagName]?.tasks || [];
   }

   async getTaskById(id: number, tagName: string = 'master'): Promise<TaskMasterTask | null> {
      const tasks = await this.getAllTasks(tagName);
      return tasks.find((task) => task.id === id) || null;
   }

   async getSubtaskById(
      taskId: number,
      subtaskId: number,
      tagName: string = 'master'
   ): Promise<TaskMasterSubtask | null> {
      const task = await this.getTaskById(taskId, tagName);
      return task?.subtasks.find((subtask) => subtask.id === subtaskId) || null;
   }

   convertTaskToIssue(task: TaskMasterTask, orderIndex: number): Issue {
      return {
         id: `task-${task.id}`,
         title: task.title,
         description: task.description,
         statusId: this.mapTaskStatusToIssueStatus(task.status),
         priorityId: this.mapTaskPriorityToIssuePriority(task.priority),
         assigneeId: undefined,
         projectId: 'project-taskmaster',
         parentIssueId: undefined,
         labelIds: this.getLabelsForTask(task),
         taskId: task.id,
         subtaskId: undefined,
         orderIndex,
         createdAt: new Date(),
         updatedAt: new Date(),
      };
   }

   convertSubtaskToIssue(
      subtask: TaskMasterSubtask,
      parentTaskId: number,
      orderIndex: number
   ): Issue {
      return {
         id: `task-${parentTaskId}-${subtask.id}`,
         title: subtask.title,
         description: subtask.description,
         statusId: this.mapTaskStatusToIssueStatus(subtask.status),
         priorityId: 'priority-3', // Default to medium for subtasks
         assigneeId: undefined,
         projectId: 'project-taskmaster',
         parentIssueId: `task-${parentTaskId}`,
         labelIds: ['label-subtask'],
         taskId: parentTaskId,
         subtaskId: `${parentTaskId}.${subtask.id}`,
         orderIndex,
         createdAt: new Date(),
         updatedAt: new Date(),
      };
   }

   private mapTaskStatusToIssueStatus(status: TaskMasterTask['status']): string {
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

   private mapTaskPriorityToIssuePriority(priority: TaskMasterTask['priority']): string {
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

   async convertAllTasksToIssues(tagName: string = 'master'): Promise<Issue[]> {
      const tasks = await this.getAllTasks(tagName);
      const issues: Issue[] = [];
      let orderIndex = 0;

      for (const task of tasks) {
         // Add main task as issue
         issues.push(this.convertTaskToIssue(task, orderIndex++));

         // Add subtasks as child issues
         for (const subtask of task.subtasks) {
            issues.push(this.convertSubtaskToIssue(subtask, task.id, orderIndex++));
         }
      }

      return issues;
   }

   // File watching functionality
   addWatcher(callback: (tasks: TaskMasterTask[]) => void): () => void {
      this.watchers.add(callback);

      // Return unsubscribe function
      return () => {
         this.watchers.delete(callback);
      };
   }

   private async notifyWatchers(tagName: string = 'master'): Promise<void> {
      const tasks = await this.getAllTasks(tagName);
      this.watchers.forEach((callback) => callback(tasks));
   }

   // Initialize file watcher (client-side implementation would use different approach)
   async startWatching(tagName: string = 'master'): Promise<void> {
      if (typeof window !== 'undefined') {
         // Client-side: use polling or server-sent events
         this.startPolling(tagName);
      } else {
         // Server-side: use fs.watch
         this.startFileSystemWatcher(tagName);
      }
   }

   private startPolling(tagName: string = 'master', interval: number = 2000): void {
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

   private async startFileSystemWatcher(tagName: string = 'master'): Promise<void> {
      // Client-side: No file system access, fallback to polling
      console.warn('File system watcher not available in browser, using polling');
      this.startPolling(tagName);
   }

   // Utility methods
   async getTaskMasterStatuses(): Promise<IssueStatus[]> {
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

   async getTaskMasterPriorities(): Promise<IssuePriority[]> {
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
      // Client-side: TaskMaster integration would require API endpoint
      // For now, return false to indicate it's not available
      return false;
   }
}

export const taskMasterService = TaskMasterService.getInstance();
