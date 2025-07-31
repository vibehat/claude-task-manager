import { useMemo } from 'react';
import { useDataStore } from '@/libs/client/stores/dataStore';
import type { Issue } from '@/libs/client/types';

export function useSortIssuesByPriority(issues: Issue[]): Issue[] {
   const { getPriorityById } = useDataStore();

   return useMemo(() => {
      return issues.slice().sort((a, b) => {
         const aPriority = a.priorityId ? getPriorityById(a.priorityId) : null;
         const bPriority = b.priorityId ? getPriorityById(b.priorityId) : null;

         const aValue = aPriority?.value ?? 0; // No priority = lowest
         const bValue = bPriority?.value ?? 0;

         // Sort by priority value (higher value = higher priority)
         return bValue - aValue;
      });
   }, [issues, getPriorityById]);
}
