import type { TaskManagerData, TaskMasterResponse, TaskMasterState } from './types';

export class DataRepository {
   async fetchTaskManagerData(): Promise<TaskManagerData | null> {
      try {
         const response = await fetch('/api/taskmaster/task-manager');
         if (!response.ok) {
            console.log('TaskManager data not found, using defaults');
            return null;
         }
         const data = await response.json();
         console.log('[DataRepository] Loaded task manager data');
         return data;
      } catch (error) {
         console.error('[DataRepository] Failed to fetch task manager data:', error);
         return null;
      }
   }

   async fetchTaskMasterData(): Promise<TaskMasterResponse | null> {
      try {
         const response = await fetch('/api/taskmaster/tasks');
         if (!response.ok) {
            console.log('TaskMaster CLI data not found, status:', response.status);
            return null;
         }
         const tasksData: TaskMasterResponse = await response.json();
         console.log(`[DataRepository] Found TaskMaster data with tags:`, Object.keys(tasksData));
         return tasksData;
      } catch (error) {
         console.error('[DataRepository] Failed to fetch TaskMaster data:', error);
         return null;
      }
   }

   async fetchTaskMasterState(): Promise<TaskMasterState | null> {
      try {
         const response = await fetch('/api/taskmaster/state');
         if (!response.ok) {
            console.log('TaskMaster state data not found, status:', response.status);
            return null;
         }
         const stateData: TaskMasterState = await response.json();
         console.log('[DataRepository] Found TaskMaster state data');
         return stateData;
      } catch (error) {
         console.error('[DataRepository] Failed to fetch TaskMaster state:', error);
         return null;
      }
   }

   async writeTaskManagerData(data: TaskManagerData): Promise<boolean> {
      try {
         console.warn(
            '[DataRepository] Write operations are no longer supported. Client should manage data locally and use TaskMaster CLI APIs for task operations.'
         );
         return false;
      } catch (error) {
         console.warn('Failed to write TaskManager data:', error);
         return false;
      }
   }

   async checkAvailability(): Promise<boolean> {
      try {
         const response = await fetch('/api/taskmaster/task-manager');
         return response.ok;
      } catch (error) {
         console.warn('Failed to check TaskManager data availability:', error);
         return false;
      }
   }
}
