import { useMemo } from 'react';
import { useDataStore } from '@/libs/client/stores';
import type { Task } from '@/libs/client/types';

export function useSortTasksByPriority(tasks: Task[]): Task[] {
   const { getPriorityById } = useDataStore();

   return useMemo(() => {
      return tasks.slice().sort((a, b) => {
         const aPriority = a.priorityId ? getPriorityById(a.priorityId) : null;
         const bPriority = b.priorityId ? getPriorityById(b.priorityId) : null;

         const aValue = aPriority?.value ?? 0; // No priority = lowest
         const bValue = bPriority?.value ?? 0;

         // Sort by priority value (higher value = higher priority)
         return bValue - aValue;
      });
   }, [tasks, getPriorityById]);
}
