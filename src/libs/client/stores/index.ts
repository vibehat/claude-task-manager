// Re-export store hooks and utilities
export { useDataStore, createDataStore } from './dataStore';
export { useFuzzySearchStore } from './fuzzySearchStore';

// Import useDataStore for internal use in selector hooks
import { useDataStore } from './dataStore';

// Re-export types
export type {
  TaskMasterTask,
  TaskMasterTasks,
  TaskMasterState,
  User,
  Label,
  Status,
  Priority,
  Tag,
  Task,
  ManagerData,
  SimpleDataState,
} from './types';

// Hook-based selectors for commonly used data
// Note: These are temporary implementations until proper selectors are implemented
export const useAllLabels = () => {
  return useDataStore((state) => state.allLabels);
};

export const useAllStatuses = () => {
  return useDataStore((state) => state.allStatuses);
};

export const useAllPriorities = () => {
  return useDataStore((state) => state.allPriorities);
};

export const useAllTags = () => {
  return useDataStore((state) => state.allTagsObjects);
};

export const useTagCounts = () => {
  const tasksByTag = useDataStore((state) => state.tasksByTag);
  const counts: Record<string, number> = {};
  Object.entries(tasksByTag).forEach(([tagName, tasks]) => {
    counts[tagName] = tasks.length;
  });
  return counts;
};

export const useCurrentTag = () => {
  return useDataStore((state) => state.taskMasterState?.currentTag || null);
};
