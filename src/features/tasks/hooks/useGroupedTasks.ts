import { useMemo } from 'react';
import type { Task } from '@/libs/client/types/dataModels';

export type GroupByKey = 'status' | 'priority' | 'tag' | 'label';

/**
 * Hook to group tasks by a specified key
 * @param tasks - Array of tasks to group
 * @param groupBy - Key to group by (status, priority, tag, label)
 * @returns Record of grouped tasks
 */
export function useGroupedTasks(tasks: Task[], groupBy: GroupByKey): Record<string, Task[]> {
   return useMemo(() => {
      const grouped: Record<string, Task[]> = {};

      tasks.forEach((task) => {
         let groupKey: string | undefined;

         switch (groupBy) {
            case 'status':
               groupKey = task.statusId;
               break;
            case 'priority':
               groupKey = task.priorityId;
               break;
            case 'tag':
               groupKey = task.tagId || 'no-tag';
               break;
            case 'label':
               // For labels, we need to handle multiple labels per task
               if (task.labelIds && task.labelIds.length > 0) {
                  task.labelIds.forEach((labelId) => {
                     if (!grouped[labelId]) {
                        grouped[labelId] = [];
                     }
                     grouped[labelId].push(task);
                  });
                  return; // Skip the default grouping below
               } else {
                  groupKey = 'no-label';
               }
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
export function useGroupedTasksByStatus(tasks: Task[]): Record<string, Task[]> {
   return useGroupedTasks(tasks, 'status');
}

/**
 * Hook to group tasks by priority
 * @param tasks - Array of tasks to group
 * @returns Record of tasks grouped by priority ID
 */
export function useGroupedTasksByPriority(tasks: Task[]): Record<string, Task[]> {
   return useGroupedTasks(tasks, 'priority');
}

/**
 * Hook to group tasks by tag
 * @param tasks - Array of tasks to group
 * @returns Record of tasks grouped by tag ID (includes 'no-tag' group)
 */
export function useGroupedTasksByTag(tasks: Task[]): Record<string, Task[]> {
   return useGroupedTasks(tasks, 'tag');
}

/**
 * Hook to group tasks by labels
 * Note: A task can appear in multiple groups if it has multiple labels
 * @param tasks - Array of tasks to group
 * @returns Record of tasks grouped by label ID (includes 'no-label' group)
 */
export function useGroupedTasksByLabel(tasks: Task[]): Record<string, Task[]> {
   return useGroupedTasks(tasks, 'label');
}
