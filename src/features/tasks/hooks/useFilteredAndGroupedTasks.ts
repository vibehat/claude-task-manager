import { useMemo } from 'react';
import { useFilteredTasks } from '@/libs/client/stores/selectors';
import { useSearchStore } from '../store/searchStore';
import { useGroupedTasks, type GroupByKey } from './useGroupedTasks';
import type { TaskFilterInput } from '../types/filtersTypes';
import type { Task } from '@/libs/client/types/dataModels';

/**
 * Hook that combines filtering and grouping of tasks
 * @param groupBy - Key to group by (status, priority, tag, label)
 * @param additionalFilters - Additional filters to apply beyond the filter store
 * @returns Object containing filtered tasks and grouped tasks
 */
export function useFilteredAndGroupedTasks(
   groupBy: GroupByKey = 'status',
   additionalFilters?: Partial<TaskFilterInput>
) {
   const { isSearchOpen, searchQuery } = useSearchStore();
   const isSearching = isSearchOpen && searchQuery.trim() !== '';

   // Get filtered tasks with search if active
   const filteredTasks = useFilteredTasks({
      ...additionalFilters,
      ...(isSearching ? { search: searchQuery } : {}),
   });

   // Group the filtered tasks
   const groupedTasks = useGroupedTasks(filteredTasks, groupBy);

   return useMemo(
      () => ({
         tasks: filteredTasks,
         groupedTasks,
         isEmpty: filteredTasks.length === 0,
         groupCount: Object.keys(groupedTasks).length,
         totalCount: filteredTasks.length,
      }),
      [filteredTasks, groupedTasks]
   );
}

/**
 * Hook specifically for status-grouped tasks with filtering
 * @param additionalFilters - Additional filters to apply
 * @returns Filtered and status-grouped tasks
 */
export function useFilteredTasksByStatus(additionalFilters?: Partial<TaskFilterInput>) {
   return useFilteredAndGroupedTasks('status', additionalFilters);
}

/**
 * Hook specifically for priority-grouped tasks with filtering
 * @param additionalFilters - Additional filters to apply
 * @returns Filtered and priority-grouped tasks
 */
export function useFilteredTasksByPriority(additionalFilters?: Partial<TaskFilterInput>) {
   return useFilteredAndGroupedTasks('priority', additionalFilters);
}

/**
 * Hook specifically for tag-grouped tasks with filtering
 * @param additionalFilters - Additional filters to apply
 * @returns Filtered and tag-grouped tasks
 */
export function useFilteredTasksByTag(additionalFilters?: Partial<TaskFilterInput>) {
   return useFilteredAndGroupedTasks('tag', additionalFilters);
}

/**
 * Hook specifically for label-grouped tasks with filtering
 * @param additionalFilters - Additional filters to apply
 * @returns Filtered and label-grouped tasks
 */
export function useFilteredTasksByLabel(additionalFilters?: Partial<TaskFilterInput>) {
   return useFilteredAndGroupedTasks('label', additionalFilters);
}
