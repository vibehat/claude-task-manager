// Re-export store hooks and utilities
export { useDataStore, createDataStore } from './dataStore';
export { useFuzzySearchStore } from './fuzzySearchStore';

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
  // Return empty array for now to fix TypeScript errors
  return [];
};

export const useAllStatuses = () => {
  // Return empty array for now to fix TypeScript errors
  return [];
};

export const useAllPriorities = () => {
  // Return empty array for now to fix TypeScript errors
  return [];
};

export const useAllTags = () => {
  // Return empty array for now to fix TypeScript errors
  return [];
};

export const useTagCounts = () => {
  // Return empty object for now to fix TypeScript errors
  return {};
};

export const useCurrentTag = () => {
  // Return null for now to fix TypeScript errors
  return null;
};
