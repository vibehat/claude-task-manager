'use client';

import { useState } from 'react';
import useSWR, { mutate } from 'swr';
import { useDataStore } from '@/libs/client/stores/dataStore';

interface CLIResult {
   success: boolean;
   command: string;
   args: string[];
   result: {
      stdout: string;
      stderr: string;
      exitCode: number;
      parsed?: any;
   };
   timestamp: string;
}

interface CLIRequest {
   command: string;
   args?: string[];
   options?: Record<string, any>;
}

// Execute TaskMaster CLI command
async function executeCLI(request: CLIRequest): Promise<CLIResult> {
   const response = await fetch('/api/taskmaster/cli', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
   });

   if (!response.ok) {
      throw new Error(`CLI request failed: ${response.statusText}`);
   }

   return response.json();
}

// Main hook for executing CLI commands
export function useTaskMasterCLI() {
   const [isExecuting, setIsExecuting] = useState(false);
   const [lastResult, setLastResult] = useState<CLIResult | null>(null);
   const { forceSyncTaskMaster } = useDataStore();

   const execute = async (request: CLIRequest) => {
      setIsExecuting(true);
      try {
         const result = await executeCLI(request);
         setLastResult(result);

         // For data-changing commands, trigger native sync
         if (
            [
               'set-status',
               'add-task',
               'update-task',
               'update-subtask',
               'expand',
               'remove-task',
            ].includes(request.command)
         ) {
            // Invalidate SWR cache for immediate UI feedback
            await mutate((key) => {
               if (typeof key === 'string') {
                  return (
                     key.includes('/api/taskmaster/cli') ||
                     key.includes('/api/taskmaster/raw-data') ||
                     key.includes('/api/taskmaster/data')
                  );
               }
               return false;
            });

            // Auto-sync after successful TaskMaster operations
            if (result.success) {
               // Use a more reliable approach: multiple sync attempts with exponential backoff
               const performSync = async (attempt = 1, maxAttempts = 3) => {
                  try {
                     const delay = Math.min(100 * Math.pow(2, attempt - 1), 1000); // 100ms, 200ms, 400ms max
                     setTimeout(async () => {
                        await forceSyncTaskMaster();
                        console.log(`[TaskMasterCLI] Auto-sync completed (attempt ${attempt})`);
                     }, delay);
                  } catch (error) {
                     if (attempt < maxAttempts) {
                        console.warn(`[TaskMasterCLI] Sync attempt ${attempt} failed, retrying...`);
                        performSync(attempt + 1, maxAttempts);
                     } else {
                        console.warn(`[TaskMasterCLI] All sync attempts failed:`, error);
                     }
                  }
               };

               performSync();
            }
         }

         return result;
      } finally {
         setIsExecuting(false);
      }
   };

   return {
      execute,
      isExecuting,
      lastResult,
   };
}

// Hook for getting tasks list - reads raw JSON data since CLI doesn't output JSON
export function useTasksList(autoRefresh = true) {
   const {
      data,
      error,
      isLoading,
      mutate: refresh,
   } = useSWR<any>(
      '/api/taskmaster/raw-data',
      (url: string) => fetch(url).then((res) => res.json()),
      {
         refreshInterval: autoRefresh ? 3000 : 0,
         revalidateOnFocus: false,
      }
   );

   const tasks = data?.tasks || [];
   const metadata = data?.metadata;

   return {
      tasks,
      metadata,
      rawOutput: '', // We'll get this from CLI commands when needed
      isLoading,
      error,
      refresh,
   };
}

// Hook for getting next task - extract from raw tasks data
export function useNextTask() {
   const {
      data,
      error,
      isLoading,
      mutate: refresh,
   } = useSWR<any>(
      '/api/taskmaster/raw-data',
      (url: string) => fetch(url).then((res) => res.json()),
      { revalidateOnFocus: false }
   );

   // Find the first pending task with no blocking dependencies
   const tasks = data?.tasks || [];
   const nextTask = tasks.find(
      (task: any) =>
         task.status === 'pending' &&
         (!task.dependencies ||
            task.dependencies.length === 0 ||
            task.dependencies.every(
               (depId: number) => tasks.find((t: any) => t.id === depId)?.status === 'done'
            ))
   );

   return {
      nextTask,
      rawOutput: '', // CLI command output if needed
      isLoading,
      error,
      refresh,
   };
}

// Hook for getting specific task details
export function useTaskDetails(taskId: string | null) {
   const {
      data,
      error,
      isLoading,
      mutate: refresh,
   } = useSWR<any>(
      taskId ? `/api/taskmaster/raw-data` : null,
      (url: string) => fetch(url).then((res) => res.json()),
      { revalidateOnFocus: false }
   );

   const tasks = data?.tasks || [];
   const task = taskId ? tasks.find((t: any) => t.id.toString() === taskId) : null;

   return {
      task,
      rawOutput: '', // CLI command output if needed
      isLoading,
      error,
      refresh,
   };
}

// Common CLI operations as simple functions
export const taskMasterCLI = {
   // List tasks
   async list(filter?: any) {
      return executeCLI({
         command: 'list',
         options: filter ? { filter } : undefined,
      });
   },

   // Get next task
   async next() {
      return executeCLI({ command: 'next' });
   },

   // Show task details
   async show(taskId: string) {
      return executeCLI({ command: 'show', args: [taskId] });
   },

   // Set task status
   async setStatus(taskId: string, status: string) {
      return executeCLI({
         command: 'set-status',
         options: { id: taskId, status },
      });
   },

   // Add new task
   async addTask(task: any, research = false) {
      return executeCLI({
         command: 'add-task',
         options: { task, research },
      });
   },

   // Expand task into subtasks
   async expand(taskId: string, research = false, force = false) {
      return executeCLI({
         command: 'expand',
         options: { id: taskId, research, force },
      });
   },

   // Expand all tasks
   async expandAll(research = false) {
      return executeCLI({
         command: 'expand-all',
         options: { research },
      });
   },

   // Update task
   async updateTask(taskId: string, prompt: string) {
      return executeCLI({
         command: 'update-task',
         options: { id: taskId, prompt },
      });
   },

   // Update subtask
   async updateSubtask(subtaskId: string, notes: string) {
      return executeCLI({
         command: 'update-subtask',
         options: { id: subtaskId, notes },
      });
   },

   // Analyze complexity
   async analyzeComplexity(research = false) {
      return executeCLI({
         command: 'analyze-complexity',
         options: { research },
      });
   },

   // Get complexity report
   async complexityReport() {
      return executeCLI({ command: 'complexity-report' });
   },

   // Add dependency
   async addDependency(taskId: string, dependsOnId: string) {
      return executeCLI({
         command: 'add-dependency',
         options: { taskId, dependsOnId },
      });
   },

   // Validate dependencies
   async validateDependencies() {
      return executeCLI({ command: 'validate-dependencies' });
   },

   // Generate task files
   async generate() {
      return executeCLI({ command: 'generate' });
   },

   // Get model configuration
   async getModels() {
      return executeCLI({ command: 'models' });
   },

   // Remove task
   async removeTask(taskId: string, skipConfirmation = false) {
      return executeCLI({
         command: 'remove-task',
         options: { id: taskId, skipConfirmation },
      });
   },

   // Get version
   async getVersion() {
      return executeCLI({ command: 'version' });
   },

   // Execute any command
   async execute(command: string, args: string[] = []) {
      return executeCLI({ command, args });
   },
};
