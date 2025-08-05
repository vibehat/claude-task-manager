import { useMemo } from 'react';
import { useFilteredTasks } from '@/libs/client/stores/selectors';
import { useSearchStore } from '../store/searchStore';
import { useDataStore } from '@/libs/client/stores';
import type { TaskFilterInput } from '../types/filtersTypes';
import type { TaskMasterTask } from '@/libs/client/types';

// Keep the GroupByKey type export for backward compatibility
export type GroupByKey = 'status' | 'priority' | 'tag' | 'label';

/**
 * Helper function to filter grouped tasks based on search and additional filters
 */
function filterGroupedTasks(
  groupedTasks: Record<string, TaskMasterTask[]>,
  filteredTasks: TaskMasterTask[]
): Record<string, TaskMasterTask[]> {
  if (filteredTasks.length === 0) return {};

  const filteredIds = new Set(filteredTasks.map((task) => task.id.toString()));
  const filtered: Record<string, TaskMasterTask[]> = {};

  Object.entries(groupedTasks).forEach(([groupKey, tasks]) => {
    const filteredGroupTasks = tasks.filter((task) => filteredIds.has(task.id.toString()));
    if (filteredGroupTasks.length > 0) {
      filtered[groupKey] = filteredGroupTasks;
    }
  });

  return filtered;
}

/**
 * Hook specifically for status-grouped tasks with filtering
 * Optimized to call directly to store for better performance
 * @param additionalFilters - Additional filters to apply
 * @returns Filtered and status-grouped tasks
 */
export function useFilteredTasksByStatus(additionalFilters?: Partial<TaskFilterInput>) {
  const { isSearchOpen, searchQuery } = useSearchStore();
  const isSearching = isSearchOpen && searchQuery.trim() !== '';

  // Get all tasks grouped by status from store
  const tasksByStatus = useDataStore((state) => state.tasksByStatus);

  // Get filtered tasks if we have filters or search
  const filteredTasks = useFilteredTasks({
    ...additionalFilters,
    ...(isSearching ? { search: searchQuery } : {}),
  });

  const groupedTasks = useMemo(() => {
    // If no filters or search, return all tasks grouped by status
    if (!additionalFilters && !isSearching) {
      return tasksByStatus;
    }

    // Filter the grouped tasks based on the filtered task list
    return filterGroupedTasks(tasksByStatus, filteredTasks);
  }, [tasksByStatus, filteredTasks, additionalFilters, isSearching]);

  return useMemo(
    () => ({
      tasks: additionalFilters || isSearching ? filteredTasks : Object.values(tasksByStatus).flat(),
      groupedTasks,
      isEmpty: Object.keys(groupedTasks).length === 0,
      groupCount: Object.keys(groupedTasks).length,
      totalCount:
        additionalFilters || isSearching
          ? filteredTasks.length
          : Object.values(tasksByStatus).flat().length,
    }),
    [tasksByStatus, filteredTasks, groupedTasks, additionalFilters, isSearching]
  );
}

/**
 * Hook specifically for priority-grouped tasks with filtering
 * Optimized to call directly to store for better performance
 * @param additionalFilters - Additional filters to apply
 * @returns Filtered and priority-grouped tasks
 */
export function useFilteredTasksByPriority(additionalFilters?: Partial<TaskFilterInput>) {
  const { isSearchOpen, searchQuery } = useSearchStore();
  const isSearching = isSearchOpen && searchQuery.trim() !== '';

  // Get all tasks grouped by priority from store
  const tasksByPriority = useDataStore((state) => state.tasksByPriority);

  // Get filtered tasks if we have filters or search
  const filteredTasks = useFilteredTasks({
    ...additionalFilters,
    ...(isSearching ? { search: searchQuery } : {}),
  });

  const groupedTasks = useMemo(() => {
    // If no filters or search, return all tasks grouped by priority
    if (!additionalFilters && !isSearching) {
      return tasksByPriority;
    }

    // Filter the grouped tasks based on the filtered task list
    return filterGroupedTasks(tasksByPriority, filteredTasks);
  }, [tasksByPriority, filteredTasks, additionalFilters, isSearching]);

  return useMemo(
    () => ({
      tasks:
        additionalFilters || isSearching ? filteredTasks : Object.values(tasksByPriority).flat(),
      groupedTasks,
      isEmpty: Object.keys(groupedTasks).length === 0,
      groupCount: Object.keys(groupedTasks).length,
      totalCount:
        additionalFilters || isSearching
          ? filteredTasks.length
          : Object.values(tasksByPriority).flat().length,
    }),
    [tasksByPriority, filteredTasks, groupedTasks, additionalFilters, isSearching]
  );
}

/**
 * Hook specifically for tag-grouped tasks with filtering
 * Optimized to call directly to store for better performance
 * @param additionalFilters - Additional filters to apply
 * @returns Filtered and tag-grouped tasks
 */
export function useFilteredTasksByTag(additionalFilters?: Partial<TaskFilterInput>) {
  const { isSearchOpen, searchQuery } = useSearchStore();
  const isSearching = isSearchOpen && searchQuery.trim() !== '';

  // Get all tasks grouped by tag from store
  const tasksByTag = useDataStore((state) => state.tasksByTag);

  // Get filtered tasks if we have filters or search
  const filteredTasks = useFilteredTasks({
    ...additionalFilters,
    ...(isSearching ? { search: searchQuery } : {}),
  });

  const groupedTasks = useMemo(() => {
    // If no filters or search, return all tasks grouped by tag
    if (!additionalFilters && !isSearching) {
      return tasksByTag;
    }

    // Filter the grouped tasks based on the filtered task list
    return filterGroupedTasks(tasksByTag, filteredTasks);
  }, [tasksByTag, filteredTasks, additionalFilters, isSearching]);

  return useMemo(
    () => ({
      tasks: additionalFilters || isSearching ? filteredTasks : Object.values(tasksByTag).flat(),
      groupedTasks,
      isEmpty: Object.keys(groupedTasks).length === 0,
      groupCount: Object.keys(groupedTasks).length,
      totalCount:
        additionalFilters || isSearching
          ? filteredTasks.length
          : Object.values(tasksByTag).flat().length,
    }),
    [tasksByTag, filteredTasks, groupedTasks, additionalFilters, isSearching]
  );
}

/**
 * Hook specifically for label-grouped tasks with filtering
 * Optimized to call directly to store for better performance
 * @param additionalFilters - Additional filters to apply
 * @returns Filtered and label-grouped tasks
 */
export function useFilteredTasksByLabel(additionalFilters?: Partial<TaskFilterInput>) {
  const { isSearchOpen, searchQuery } = useSearchStore();
  const isSearching = isSearchOpen && searchQuery.trim() !== '';

  // Get all tasks from store (labels not supported for TaskMasterTask)
  const allTasks = useDataStore((state) => state.allTasks);

  // Get filtered tasks if we have filters or search
  const filteredTasks = useFilteredTasks({
    ...additionalFilters,
    ...(isSearching ? { search: searchQuery } : {}),
  });

  const groupedTasks = useMemo(() => {
    const tasks = additionalFilters || isSearching ? filteredTasks : allTasks;
    // TaskMasterTask doesn't have labelIds, so all tasks go to 'no-label'
    return tasks.length > 0 ? { 'no-label': [...tasks] } : {};
  }, [allTasks, filteredTasks, additionalFilters, isSearching]);

  return useMemo(
    () => ({
      tasks: additionalFilters || isSearching ? filteredTasks : allTasks,
      groupedTasks,
      isEmpty: Object.keys(groupedTasks).length === 0,
      groupCount: Object.keys(groupedTasks).length,
      totalCount: additionalFilters || isSearching ? filteredTasks.length : allTasks.length,
    }),
    [allTasks, filteredTasks, groupedTasks, additionalFilters, isSearching]
  );
}
