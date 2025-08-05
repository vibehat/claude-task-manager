import { useMemo } from 'react';
import { useDataStore } from '@/libs/client/stores/dataStore';
import type { TaskMasterTask } from '@/libs/client/types';

/**
 * Hook to get task details with subtasks
 */
export function useTaskDetail(taskId: string | null): TaskMasterTask | null {
  const task = useDataStore((state) => (taskId ? state.tasksById[taskId] : null));

  return useMemo(() => {
    if (!taskId || !task) return null;

    // Subtasks are now a property of the task itself
    return task;
  }, [taskId, task]);
}
