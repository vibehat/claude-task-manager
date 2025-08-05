import { useMemo } from 'react';
import type { TaskMasterTask } from '@/libs/client/types';

export type GroupByKey = 'status' | 'priority' | 'tag' | 'label';

/**
 * Hook to group tasks by a specified key
 * @param tasks - Array of tasks to group
 * @param groupBy - Key to group by (status, priority, tag, label)
 * @returns Record of grouped tasks
 */
export function useGroupedTasks(
  tasks: TaskMasterTask[],
  groupBy: GroupByKey
): Record<string, TaskMasterTask[]> {
  return useMemo(() => {
    const grouped: Record<string, TaskMasterTask[]> = {};

    tasks.forEach((task) => {
      let groupKey: string | undefined;

      switch (groupBy) {
        case 'status':
          groupKey = task.status;
          break;
        case 'priority':
          groupKey = task.priority;
          break;
        case 'tag':
          // TaskMasterTask doesn't have tagId, assuming no tag grouping for now
          groupKey = 'no-tag';
          break;
        case 'label':
          // TaskMasterTask doesn't have labelIds, assuming no label grouping for now
          groupKey = 'no-label';
          break;
      }

      if (groupKey) {
        if (!grouped[groupKey]) {
          grouped[groupKey] = [];
        }
        grouped[groupKey].push(task);
      }
    });

    return grouped;
  }, [tasks, groupBy]);
}

/**
 * Hook to group tasks by status with proper ordering
 * @param tasks - Array of tasks to group
 * @returns Record of tasks grouped by status ID
 */
export function useGroupedTasksByStatus(tasks: TaskMasterTask[]): Record<string, TaskMasterTask[]> {
  return useGroupedTasks(tasks, 'status');
}

/**
 * Hook to group tasks by priority
 * @param tasks - Array of tasks to group
 * @returns Record of tasks grouped by priority ID
 */
export function useGroupedTasksByPriority(
  tasks: TaskMasterTask[]
): Record<string, TaskMasterTask[]> {
  return useGroupedTasks(tasks, 'priority');
}

/**
 * Hook to group tasks by tag
 * @param tasks - Array of tasks to group
 * @returns Record of tasks grouped by tag ID (includes 'no-tag' group)
 */
export function useGroupedTasksByTag(tasks: TaskMasterTask[]): Record<string, TaskMasterTask[]> {
  return useGroupedTasks(tasks, 'tag');
}

/**
 * Hook to group tasks by labels
 * Note: A task can appear in multiple groups if it has multiple labels
 * @param tasks - Array of tasks to group
 * @returns Record of tasks grouped by label ID (includes 'no-label' group)
 */
export function useGroupedTasksByLabel(tasks: TaskMasterTask[]): Record<string, TaskMasterTask[]> {
  return useGroupedTasks(tasks, 'label');
}
