import { useEffect, useState, useMemo } from 'react';
import { useDataStore } from '../stores/dataStore';
import { useTasksFilterStore } from '@/features/tasks/store/taskFilterStore';
import type { Task } from '../types/dataModels';

export interface UseTasksOptions {
   skip?: boolean;
   pollInterval?: number;
}

export interface UseTasksResult {
   data: Task[] | undefined;
   loading: boolean;
   error: Error | undefined;
   refetch: () => Promise<void>;
}

export function useTasks(options: UseTasksOptions = {}): UseTasksResult {
   const { skip = false, pollInterval } = options;
   const [loading, setLoading] = useState(!skip);
   const [error, setError] = useState<Error | undefined>(undefined);

   const { tasks, isInitialized, initialize } = useDataStore();
   const where = useTasksFilterStore((state) => state.where);

   // Initialize data if needed
   useEffect(() => {
      if (!skip && !isInitialized) {
         initialize()
            .then(() => setLoading(false))
            .catch((err) => {
               setError(err);
               setLoading(false);
            });
      } else if (isInitialized) {
         setLoading(false);
      }
   }, [skip, isInitialized]);

   // Filter tasks based on where clause
   const filteredTasks = useMemo(() => {
      if (!isInitialized || skip) return undefined;

      let result = [...tasks];

      // Apply filters
      if (where.parentTaskId?.equals !== undefined) {
         result = result.filter((task) => task.parentTaskId === where.parentTaskId.equals);
      }

      if (where.statusId?.in) {
         result = result.filter(
            (task) => task.statusId && where.statusId.in.includes(task.statusId)
         );
      }

      if (where.assigneeId?.in) {
         result = result.filter(
            (task) => task.assigneeId && where.assigneeId.in.includes(task.assigneeId)
         );
      }

      if (where.priorityId?.in) {
         result = result.filter(
            (task) => task.priorityId && where.priorityId.in.includes(task.priorityId)
         );
      }

      if (where.projectId?.in) {
         result = result.filter(
            (task) => task.projectId && where.projectId.in.includes(task.projectId)
         );
      }

      if (where.labels?.some?.labelId?.in) {
         const labelIds = where.labels.some.labelId.in;
         result = result.filter((task) =>
            task.labelIds.some((labelId) => labelIds.includes(labelId))
         );
      }

      // Sort by orderIndex
      result.sort((a, b) => a.orderIndex - b.orderIndex);

      return result;
   }, [tasks, where, isInitialized, skip]);

   // Refetch function
   const refetch = async () => {
      setLoading(true);
      setError(undefined);
      try {
         await initialize();
      } catch (err) {
         setError(err as Error);
      } finally {
         setLoading(false);
      }
   };

   // Polling
   useEffect(() => {
      if (pollInterval && !skip) {
         const interval = setInterval(refetch, pollInterval);
         return () => clearInterval(interval);
      }
   }, [pollInterval, skip]);

   return {
      data: filteredTasks,
      loading,
      error,
      refetch,
   };
}

// Hook for searching tasks
export function useSearchTasks(query: string, options: UseTasksOptions = {}) {
   const { skip = false } = options;
   const [loading, setLoading] = useState(!skip);
   const [error, setError] = useState<Error | undefined>(undefined);

   const { searchTasks, isInitialized, initialize } = useDataStore();

   // Initialize data if needed
   useEffect(() => {
      if (!skip && !isInitialized) {
         initialize()
            .then(() => setLoading(false))
            .catch((err) => {
               setError(err);
               setLoading(false);
            });
      } else if (isInitialized) {
         setLoading(false);
      }
   }, [skip, isInitialized]);

   // Search tasks
   const results = useMemo(() => {
      if (!isInitialized || skip || !query) return undefined;

      // Filter for parent tasks only
      const searchResults = searchTasks(query);
      return searchResults.filter((task) => !task.parentTaskId);
   }, [searchTasks, query, isInitialized, skip]);

   const refetch = async () => {
      setLoading(true);
      setError(undefined);
      try {
         await initialize();
      } catch (err) {
         setError(err as Error);
      } finally {
         setLoading(false);
      }
   };

   return {
      data: results,
      loading,
      error,
      refetch,
   };
}

// Hook for getting a single task
export function useTask(id: string | undefined) {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error | undefined>(undefined);

   const { getTaskById, getSubtasks, isInitialized, initialize } = useDataStore();

   // Initialize data if needed
   useEffect(() => {
      if (id && !isInitialized) {
         initialize()
            .then(() => setLoading(false))
            .catch((err) => {
               setError(err);
               setLoading(false);
            });
      } else if (isInitialized || !id) {
         setLoading(false);
      }
   }, [id, isInitialized]);

   const task = id ? getTaskById(id) : undefined;
   const subtasks = id ? getSubtasks(id) : [];

   return {
      data: task,
      subtasks,
      loading,
      error,
   };
}

// Hook for task mutations
export function useTaskMutations() {
   const { addTask, updateTask, deleteTask, bulkUpdateTasks } = useDataStore();

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<Error | undefined>(undefined);

   const createTask = async (data: Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'orderIndex'>) => {
      setLoading(true);
      setError(undefined);
      try {
         const newTask = addTask(data);
         setLoading(false);
         return { data: newTask };
      } catch (err) {
         setError(err as Error);
         setLoading(false);
         return { error: err as Error };
      }
   };

   const updateTaskMutation = async (id: string, updates: Partial<Task>) => {
      setLoading(true);
      setError(undefined);
      try {
         updateTask(id, updates);
         setLoading(false);
         return { success: true };
      } catch (err) {
         setError(err as Error);
         setLoading(false);
         return { error: err as Error };
      }
   };

   const deleteTaskMutation = async (id: string) => {
      setLoading(true);
      setError(undefined);
      try {
         deleteTask(id);
         setLoading(false);
         return { success: true };
      } catch (err) {
         setError(err as Error);
         setLoading(false);
         return { error: err as Error };
      }
   };

   const bulkUpdateTasksMutation = async (ids: string[], updates: Partial<Task>) => {
      setLoading(true);
      setError(undefined);
      try {
         bulkUpdateTasks(ids, updates);
         setLoading(false);
         return { success: true };
      } catch (err) {
         setError(err as Error);
         setLoading(false);
         return { error: err as Error };
      }
   };

   return {
      createTask,
      updateTask: updateTaskMutation,
      deleteTask: deleteTaskMutation,
      bulkUpdateTasks: bulkUpdateTasksMutation,
      loading,
      error,
   };
}
