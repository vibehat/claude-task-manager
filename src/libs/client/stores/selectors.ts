// Store selectors for derived state
import { useDataStore } from './dataStore';

// Task filtering selector
export const useFilteredTasks = (_filters?: any) => {
  const tasks = useDataStore((state) => state.tasksById);
  // TODO: Implement proper filtering logic
  return Object.values(tasks || {});
};

// Current tag selector
export const useCurrentTag = () => {
  // TODO: Implement current tag logic
  return null;
};
