import type { TaskMasterTask } from './taskMasterService';
import { taskMasterService } from './taskMasterService';
import type { Issue, Label, Project } from '../types/dataModels';

export interface SyncOptions {
   tagName?: string;
   enableRealTimeSync?: boolean;
   syncInterval?: number;
   onSyncStart?: () => void;
   onSyncComplete?: (issues: Issue[]) => void;
   onSyncError?: (error: Error) => void;
}

export interface SyncResult {
   success: boolean;
   issues: Issue[];
   labels: Label[];
   projects: Project[];
   error?: Error;
}

class SyncService {
   private static instance: SyncService;
   private isWatching = false;
   private unsubscribeWatcher?: () => void;

   private constructor() {}

   static getInstance(): SyncService {
      if (!SyncService.instance) {
         SyncService.instance = new SyncService();
      }
      return SyncService.instance;
   }

   async syncTaskMasterData(options: SyncOptions = {}): Promise<SyncResult> {
      const { tagName = 'master', onSyncStart, onSyncComplete, onSyncError } = options;

      try {
         onSyncStart?.();

         // Check if TaskMaster is available
         const isAvailable = await taskMasterService.isAvailable();
         if (!isAvailable) {
            throw new Error('TaskMaster tasks.json file not found');
         }

         // Convert TaskMaster tasks to issues
         const issues = await taskMasterService.convertAllTasksToIssues(tagName);

         // Create TaskMaster-specific labels and projects
         const labels = await this.createTaskMasterLabels();
         const projects = await this.createTaskMasterProjects();

         const result: SyncResult = {
            success: true,
            issues,
            labels,
            projects,
         };

         onSyncComplete?.(issues);
         return result;
      } catch (error) {
         const err = error as Error;
         onSyncError?.(err);
         return {
            success: false,
            issues: [],
            labels: [],
            projects: [],
            error: err,
         };
      }
   }

   async startRealTimeSync(
      updateCallback: (issues: Issue[]) => void,
      options: SyncOptions = {}
   ): Promise<void> {
      if (this.isWatching) {
         await this.stopRealTimeSync();
      }

      const { tagName = 'master', enableRealTimeSync = true } = options;

      if (!enableRealTimeSync) {
         return;
      }

      try {
         // Set up file watcher
         this.unsubscribeWatcher = taskMasterService.addWatcher(async (tasks: TaskMasterTask[]) => {
            try {
               const issues = await taskMasterService.convertAllTasksToIssues(tagName);
               updateCallback(issues);
            } catch (error) {
               console.error('Error in real-time sync callback:', error);
               options.onSyncError?.(error as Error);
            }
         });

         // Start watching for file changes
         await taskMasterService.startWatching(tagName);
         this.isWatching = true;

         console.log(`Started real-time sync for TaskMaster (tag: ${tagName})`);
      } catch (error) {
         console.error('Failed to start real-time sync:', error);
         options.onSyncError?.(error as Error);
      }
   }

   async stopRealTimeSync(): Promise<void> {
      if (this.unsubscribeWatcher) {
         this.unsubscribeWatcher();
         this.unsubscribeWatcher = undefined;
      }
      this.isWatching = false;
      console.log('Stopped real-time sync for TaskMaster');
   }

   private async createTaskMasterLabels(): Promise<Label[]> {
      return [
         {
            id: 'label-taskmaster',
            name: 'taskmaster',
            color: '#6366f1',
            description: 'Task from TaskMaster CLI',
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 'label-subtask',
            name: 'subtask',
            color: '#8b5cf6',
            description: 'TaskMaster subtask',
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 'label-parent',
            name: 'parent-task',
            color: '#059669',
            description: 'Task with subtasks',
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 'label-dependent',
            name: 'has-dependencies',
            color: '#dc2626',
            description: 'Task with dependencies',
            createdAt: new Date(),
            updatedAt: new Date(),
         },
      ];
   }

   private async createTaskMasterProjects(): Promise<Project[]> {
      return [
         {
            id: 'project-taskmaster',
            name: 'TaskMaster Tasks',
            description: 'Tasks imported from TaskMaster CLI',
            teamId: 'team-taskmaster',
            createdAt: new Date(),
            updatedAt: new Date(),
         },
      ];
   }

   // Utility methods
   isRealTimeSyncActive(): boolean {
      return this.isWatching;
   }

   async getTaskMasterStats(tagName = 'master'): Promise<{
      totalTasks: number;
      totalSubtasks: number;
      tasksByStatus: Record<string, number>;
      tasksByPriority: Record<string, number>;
   }> {
      const tasks = await taskMasterService.getAllTasks(tagName);

      const stats = {
         totalTasks: tasks.length,
         totalSubtasks: tasks.reduce((sum, task) => sum + task.subtasks.length, 0),
         tasksByStatus: {} as Record<string, number>,
         tasksByPriority: {} as Record<string, number>,
      };

      // Count by status
      tasks.forEach((task) => {
         stats.tasksByStatus[task.status] = (stats.tasksByStatus[task.status] || 0) + 1;
         stats.tasksByPriority[task.priority] = (stats.tasksByPriority[task.priority] || 0) + 1;

         task.subtasks.forEach((subtask) => {
            stats.tasksByStatus[subtask.status] = (stats.tasksByStatus[subtask.status] || 0) + 1;
         });
      });

      return stats;
   }

   // Manual sync trigger
   async forceSyncNow(
      updateCallback: (issues: Issue[]) => void,
      tagName = 'master'
   ): Promise<void> {
      try {
         const result = await this.syncTaskMasterData({ tagName });
         if (result.success) {
            updateCallback(result.issues);
         } else {
            throw result.error || new Error('Sync failed');
         }
      } catch (error) {
         console.error('Force sync failed:', error);
         throw error;
      }
   }
}

export const syncService = SyncService.getInstance();
