import { useMemo } from 'react';
import { useDataStore } from '@/libs/client/stores/dataStore';
import type { TaskDetailsFragment } from '@/libs/client/types';

/**
 * Hook to get task details with subtasks
 */
export function useTaskDetail(taskId: string | null): TaskDetailsFragment | null {
   const { getTaskById, getSubtasks } = useDataStore();

   return useMemo(() => {
      if (!taskId) return null;

      const task = getTaskById(taskId);
      if (!task) return null;

      const subtasks = getSubtasks(taskId);

      return {
         ...task,
         subtasks,
      };
   }, [taskId, getTaskById, getSubtasks]);
}
