import type { TaskMasterTask } from '@/libs/client/types';
import { useDataStore } from '@/libs/client/stores';

export type GroupByKey = 'status' | 'priority' | 'tag' | 'label';

/**
 * Hook to group tasks by status directly from the data store
 * @returns Record of tasks grouped by status
 */
export function useGroupedTasksByStatus(): Record<string, TaskMasterTask[]> {
  return useDataStore((state) => state.tasksByStatus);
}

/**
 * Hook to group tasks by priority directly from the data store
 * @returns Record of tasks grouped by priority
 */
export function useGroupedTasksByPriority(): Record<string, TaskMasterTask[]> {
  return useDataStore((state) => state.tasksByPriority);
}

/**
 * Hook to group tasks by tag directly from the data store
 * @returns Record of tasks grouped by tag name (includes 'no-tag' group)
 */
export function useGroupedTasksByTag(): Record<string, TaskMasterTask[]> {
  return useDataStore((state) => state.tasksByTag);
}

/**
 * Hook to group tasks by labels directly from the data store
 * Note: TaskMasterTask doesn't have label information, so this returns 'no-label' group
 * @returns Record of tasks grouped by label (includes 'no-label' group)
 */
export function useGroupedTasksByLabel(): Record<string, TaskMasterTask[]> {
  const allTasks = useDataStore((state) => state.allTasks);

  // TaskMasterTask doesn't have labelIds, so all tasks go to 'no-label'
  return allTasks.length > 0 ? { 'no-label': [...allTasks] } : {};
}
