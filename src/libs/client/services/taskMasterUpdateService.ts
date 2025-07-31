/**
 * Service for updating TaskMaster tasks via API
 */
export interface TaskMasterUpdateRequest {
   taskId: number;
   subtaskId?: string;
   status: string;
}

export interface TaskMasterUpdateResponse {
   success: boolean;
   taskId: number;
   subtaskId?: string;
   status: string;
   message: string;
   timestamp: string;
   error?: string;
   details?: string;
}

class TaskMasterUpdateService {
   private static instance: TaskMasterUpdateService;

   private constructor() {}

   static getInstance(): TaskMasterUpdateService {
      if (!TaskMasterUpdateService.instance) {
         TaskMasterUpdateService.instance = new TaskMasterUpdateService();
      }
      return TaskMasterUpdateService.instance;
   }

   /**
    * Update TaskMaster task status
    */
   async updateTaskStatus(request: TaskMasterUpdateRequest): Promise<TaskMasterUpdateResponse> {
      try {
         const response = await fetch('/api/taskmaster/update-status', {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
         });

         const data = await response.json();

         if (!response.ok) {
            throw new Error(data.error || `HTTP ${response.status}: ${response.statusText}`);
         }

         return data;
      } catch (error) {
         console.error('TaskMaster update failed:', error);
         throw error;
      }
   }

   /**
    * Check if TaskMaster is available for updates
    */
   async isTaskMasterAvailable(): Promise<boolean> {
      try {
         const response = await fetch('/api/taskmaster/status');
         return response.ok;
      } catch (error) {
         console.warn('TaskMaster availability check failed:', error);
         return false;
      }
   }

   /**
    * Get supported status mappings
    */
   async getStatusMappings(): Promise<Record<string, string>> {
      try {
         const response = await fetch('/api/taskmaster/update-status');
         if (!response.ok) {
            return {};
         }

         const data = await response.json();
         return data.statusMappings || {};
      } catch (error) {
         console.warn('Failed to get status mappings:', error);
         return {};
      }
   }

   /**
    * Update TaskMaster task status with error handling and retries
    */
   async updateTaskStatusSafe(
      request: TaskMasterUpdateRequest,
      maxRetries = 2
   ): Promise<{ success: boolean; error?: string }> {
      let lastError: Error | null = null;

      for (let attempt = 0; attempt <= maxRetries; attempt++) {
         try {
            await this.updateTaskStatus(request);
            return { success: true };
         } catch (error) {
            lastError = error as Error;

            if (attempt < maxRetries) {
               // Wait before retry (exponential backoff)
               await new Promise((resolve) => setTimeout(resolve, Math.pow(2, attempt) * 1000));
               continue;
            }
         }
      }

      return {
         success: false,
         error: lastError?.message || 'Unknown error occurred',
      };
   }
}

export const taskMasterUpdateService = TaskMasterUpdateService.getInstance();
