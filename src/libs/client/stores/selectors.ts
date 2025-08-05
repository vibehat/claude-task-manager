// Store selectors for derived state
import { useDataStore } from './dataStore';
import type { TaskMasterTask } from './types';

// Task filtering selector
export const useFilteredTasks = (filters?: {
  tagIds?: string[];
  search?: string;
  status?: string[];
  priority?: string[];
}) => {
  const tasksById = useDataStore((state) => state.tasksById);
  const tasksByTag = useDataStore((state) => state.tasksByTag);

  if (!filters) {
    return Object.values(tasksById || {});
  }

  let filteredTasks = Object.values(tasksById || {});

  // Filter by tag IDs
  if (filters.tagIds && filters.tagIds.length > 0) {
    const tasksInSelectedTags: TaskMasterTask[] = [];
    filters.tagIds.forEach((tagId) => {
      const tagTasks = tasksByTag[tagId] || [];
      tasksInSelectedTags.push(...tagTasks);
    });
    // Deduplicate tasks by ID
    const taskIdSet = new Set<string>();
    filteredTasks = tasksInSelectedTags.filter((task) => {
      const taskId = task.id.toString();
      if (taskIdSet.has(taskId)) {
        return false;
      }
      taskIdSet.add(taskId);
      return true;
    });
  }

  // Filter by search query
  if (filters.search && filters.search.trim() !== '') {
    const searchQuery = filters.search.toLowerCase();
    filteredTasks = filteredTasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchQuery) ||
        task.description.toLowerCase().includes(searchQuery)
    );
  }

  // Filter by status
  if (filters.status && filters.status.length > 0) {
    filteredTasks = filteredTasks.filter((task) => filters.status!.includes(task.status));
  }

  // Filter by priority
  if (filters.priority && filters.priority.length > 0) {
    filteredTasks = filteredTasks.filter((task) => filters.priority!.includes(task.priority));
  }

  return filteredTasks;
};

// Current tag selector
export const useCurrentTag = () => {
  const taskMasterState = useDataStore((state) => state.taskMasterState);
  return taskMasterState?.currentTag || null;
};
