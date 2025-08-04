import { useDataStore } from './dataStore';
import { useFilterStore } from '../../../store/filterStore';
import type { Task, Tag, Label, TaskStatus, TaskPriority } from '../types/dataModels';
import type { TaskFilterInput } from '../../../features/tasks/types/filtersTypes';
import { useMemo } from 'react';

// Task selectors
export const useTaskDetail = (id: string): Task | undefined => {
   return useDataStore((state) => state.taskEntities[id]);
};

export const useTasksByStatus = (statusId: string, includeSubtasks = true): Task[] => {
   const getTasksByStatus = useDataStore((state) => state.getTasksByStatus);
   return useMemo(() => {
      return getTasksByStatus(statusId, includeSubtasks);
   }, [getTasksByStatus, statusId, includeSubtasks]);
};

export const useTasksByTag = (tagId: string, includeSubtasks = true): Task[] => {
   const getTasksByTag = useDataStore((state) => state.getTasksByTag);
   return useMemo(() => {
      return getTasksByTag(tagId, includeSubtasks);
   }, [getTasksByTag, tagId, includeSubtasks]);
};

export const useSearchTasks = (query: string): Task[] => {
   const taskEntities = useDataStore((state) => state.taskEntities);
   return useMemo(() => {
      if (!query.trim()) return [];

      const tasks = Object.values(taskEntities);
      const lowerQuery = query.toLowerCase();
      return tasks.filter(
         (task) =>
            task.title.toLowerCase().includes(lowerQuery) ||
            task.description?.toLowerCase().includes(lowerQuery)
      );
   }, [taskEntities, query]);
};

export const useAllTasks = (): Task[] => {
   const getAllTasks = useDataStore((state) => state.getAllTasks);
   return useMemo(() => {
      return getAllTasks();
   }, [getAllTasks]);
};

// Tag selectors
export const useTagDetail = (id: string): Tag | undefined => {
   return useDataStore((state) => state.tagEntities[id]);
};

export const useAllTags = (): Tag[] => {
   const tagEntities = useDataStore((state) => state.tagEntities);
   return useMemo(() => Object.values(tagEntities), [tagEntities]);
};

export const useTagCounts = (): Record<string, number> => {
   const getTagCounts = useDataStore((state) => state.getTagCounts);

   return useMemo(() => {
      return getTagCounts();
   }, [getTagCounts]);
};

// Label selectors
export const useLabelDetail = (id: string): Label | undefined => {
   return useDataStore((state) => state.labelEntities[id]);
};

export const useAllLabels = (): Label[] => {
   const labelEntities = useDataStore((state) => state.labelEntities);
   return useMemo(() => Object.values(labelEntities), [labelEntities]);
};

// Status selectors
export const useStatusDetail = (id: string): TaskStatus | undefined => {
   return useDataStore((state) => state.statusEntities[id]);
};

export const useAllStatuses = (): TaskStatus[] => {
   const statusEntities = useDataStore((state) => state.statusEntities);
   return useMemo(() => Object.values(statusEntities), [statusEntities]);
};

// Priority selectors
export const usePriorityDetail = (id: string): TaskPriority | undefined => {
   return useDataStore((state) => state.priorityEntities[id]);
};

export const useAllPriorities = (): TaskPriority[] => {
   const priorityEntities = useDataStore((state) => state.priorityEntities);
   return useMemo(() => Object.values(priorityEntities), [priorityEntities]);
};

// Computed selectors
export const useTaskStats = () => {
   const getTaskStats = useDataStore((state) => state.getTaskStats);

   return useMemo(() => {
      return getTaskStats();
   }, [getTaskStats]);
};

export const useTaskMasterTasks = (): Task[] => {
   const taskEntities = useDataStore((state) => state.taskEntities);
   return useMemo(() => {
      const tasks = Object.values(taskEntities);
      return tasks.filter((task) => task.taskId !== undefined);
   }, [taskEntities]);
};

export const useUITasks = (): Task[] => {
   const taskEntities = useDataStore((state) => state.taskEntities);
   return useMemo(() => {
      const tasks = Object.values(taskEntities);
      return tasks.filter((task) => task.taskId === undefined);
   }, [taskEntities]);
};

// TaskMaster state selectors
export const useCurrentTag = (): string | null => {
   return useDataStore((state) => state.getCurrentTag());
};

// Filtered task hooks
/**
 * Hook to get filtered tasks based on current filter state
 * @param baseFilters - Additional filters to apply (will be merged with filter store filters)
 * @returns Filtered tasks array
 */
export function useFilteredTasks(baseFilters?: Partial<TaskFilterInput>): Task[] {
   const getTasksByFilters = useDataStore((state) => state.getTasksByFilters);
   const filters = useFilterStore((state) => state.filters);

   return useMemo(() => {
      // Convert filterStore filters to TaskFilterInput format
      const taskFilters: TaskFilterInput = {
         statusIds: filters.status.length > 0 ? filters.status : undefined,
         priorityIds: filters.priority.length > 0 ? filters.priority : undefined,
         labelIds: filters.labels.length > 0 ? filters.labels : undefined,
         tagIds: filters.tag.length > 0 ? filters.tag : undefined,
         ...baseFilters, // Allow overriding with base filters
      };

      return getTasksByFilters(taskFilters);
   }, [getTasksByFilters, filters, baseFilters]);
}

/**
 * Hook to get task count statistics after filtering
 * @param baseFilters - Additional filters to apply
 * @returns Object with task counts by status, priority, etc.
 */
export function useFilteredTaskStats(baseFilters?: Partial<TaskFilterInput>) {
   const filteredTasks = useFilteredTasks(baseFilters);

   return useMemo(() => {
      const stats = {
         total: filteredTasks.length,
         byStatus: {} as Record<string, number>,
         byPriority: {} as Record<string, number>,
         byTag: {} as Record<string, number>,
         parentTasks: 0,
         subtasks: 0,
      };

      filteredTasks.forEach((task) => {
         // Count by status
         stats.byStatus[task.statusId] = (stats.byStatus[task.statusId] || 0) + 1;

         // Count by priority
         if (task.priorityId) {
            stats.byPriority[task.priorityId] = (stats.byPriority[task.priorityId] || 0) + 1;
         }

         // Count by tag
         if (task.tagId) {
            stats.byTag[task.tagId] = (stats.byTag[task.tagId] || 0) + 1;
         }

         // Count parent tasks (all tasks are now parent tasks since parentTaskId is removed)
         stats.parentTasks++;
      });

      return stats;
   }, [filteredTasks]);
}

/**
 * Hook to get tasks by priority using optimized caching
 * @param priorityId - Priority ID to filter by
 * @param includeSubtasks - Whether to include subtasks (default: true)
 * @returns Tasks with the specified priority
 */
export function useTasksByPriority(priorityId: string, includeSubtasks = true): Task[] {
   const getTasksByPriority = useDataStore((state) => state.getTasksByPriority);

   return useMemo(() => {
      return getTasksByPriority(priorityId, includeSubtasks);
   }, [getTasksByPriority, priorityId, includeSubtasks]);
}

/**
 * Hook to get tasks by label
 * @param labelId - Label ID to filter by
 * @param includeSubtasks - Whether to include subtasks (default: true)
 * @returns Tasks with the specified label
 */
export function useTasksByLabel(labelId: string, includeSubtasks = true): Task[] {
   const getTasksByLabel = useDataStore((state) => state.getTasksByLabel);

   return useMemo(() => {
      return getTasksByLabel(labelId, includeSubtasks);
   }, [getTasksByLabel, labelId, includeSubtasks]);
}

/**
 * Hook to get parent tasks using optimized caching
 * @returns All parent tasks (tasks without parentTaskId)
 */
export function useParentTasks(): Task[] {
   const getParentTasks = useDataStore((state) => state.getParentTasks);

   return useMemo(() => {
      return getParentTasks();
   }, [getParentTasks]);
}

/**
 * Hook to get subtasks for a given parent task
 * @param parentTaskId - ID of the parent task
 * @returns Array of subtasks for the given parent task
 */
export function useSubtasks(parentTaskId: string): Task['subtasks'] {
   const task = useTaskDetail(parentTaskId);
   return useMemo(() => {
      return task?.subtasks || [];
   }, [task?.subtasks]);
}
