import { useMemo } from 'react';
import { useDataStore } from '@/libs/client/stores';
import type { TaskMasterTask } from '@/libs/client/types';

export function useSortTasksByPriority(tasks: TaskMasterTask[]): TaskMasterTask[] {
  return useMemo(() => {
    return tasks.slice().sort((a, b) => {
      // TaskMasterTask has priority as string directly
      const getPriorityValue = (priority: string) => {
        switch (priority?.toLowerCase()) {
          case 'high':
            return 3;
          case 'medium':
            return 2;
          case 'low':
            return 1;
          default:
            return 0; // No priority = lowest
        }
      };

      const aValue = getPriorityValue(a.priority);
      const bValue = getPriorityValue(b.priority);

      // Sort by priority value (higher value = higher priority)
      return bValue - aValue;
    });
  }, [tasks]);
}
