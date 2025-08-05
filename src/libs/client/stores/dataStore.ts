import { create } from 'zustand';
import type { TaskMasterTask, SimpleDataState, User, Label, Status, Priority, Tag } from './types';
import type { TaskMasterDataService } from '../services/taskMasterDataService';
import { ApiTaskMasterDataService } from '../services/taskMasterDataService';

// Factory function for creating store with dependency injection
export const createDataStore = (dataService?: TaskMasterDataService) => {
  const service = dataService || new ApiTaskMasterDataService();

  return create<SimpleDataState>()(
    (set, get): SimpleDataState => ({
      // -----------------------------
      // Raw data - exactly as stored in files
      // -----------------------------
      taskMasterTasks: {},
      taskMasterState: null,
      managerData: null,

      // -----------------------------
      // Normalized & flattened structures
      // -----------------------------
      taskIds: [],
      tasksById: {},

      userIds: [],
      usersById: {},

      labelIds: [],
      labelsById: {},

      statusIds: [],
      statusesById: {},

      priorityIds: [],
      prioritiesById: {},

      tagIds: [],
      tagsById: {},

      // Precomputed simple lists (for UI rendering or dropdowns)
      allTasks: [],
      allLabels: [],
      allStatuses: [],
      allPriorities: [],
      allTags: [], // First-level keys from tasks.json (tag names)
      allTagsObjects: [], // Tag objects for UI components

      // Computed grouped data
      tasksByTag: {},
      tasksByStatus: {},
      tasksByPriority: {},

      // -----------------------------
      // Simple loading states
      // -----------------------------
      isLoading: false,
      isInitialized: false,

      // Only initialize method - no setters
      initialize: async () => {
        if (get().isInitialized) {
          console.log('[SimpleDataStore] Already initialized, skipping...');
          return;
        }

        set({ isLoading: true });
        console.log('[SimpleDataStore] Starting initialization...');

        try {
          // Fetch data using the injected service
          const result = await service.fetchTaskMasterFiles();

          // Log any errors but continue with available data
          if (result.errors.length > 0) {
            console.warn('[SimpleDataStore] Errors during data loading:', result.errors);
          }

          // Build new state object with validated data
          const newState: Partial<SimpleDataState> = {
            isLoading: false,
            isInitialized: true,
            taskMasterTasks: result.taskMasterTasks || {},
            taskMasterState: result.taskMasterState || null,
            managerData: result.managerData || null,
          };

          console.log('[SimpleDataStore] Loaded data:', {
            taskMasterTasks: result.taskMasterTasks
              ? Object.keys(result.taskMasterTasks).length
              : 0,
            taskMasterState: !!result.taskMasterState,
            managerData: !!result.managerData,
            errors: result.errors.length,
          });

          // Normalize TaskMasterTasks (deduplicate by ID)
          const taskIds: string[] = [];
          const tasksById: Record<string, TaskMasterTask> = {};
          const seenTaskIds = new Set<string>();

          if (newState.taskMasterTasks) {
            Object.values(newState.taskMasterTasks).forEach((tagData) => {
              if (tagData.tasks) {
                tagData.tasks.forEach((task) => {
                  const taskId = task.id.toString();
                  if (!seenTaskIds.has(taskId)) {
                    seenTaskIds.add(taskId);
                    taskIds.push(taskId);
                    tasksById[taskId] = task;
                  }
                });
              }
            });
          }
          newState.taskIds = taskIds;
          newState.tasksById = tasksById;

          // Normalize managerData entities
          const userIds: string[] = [];
          const usersById: Record<string, User> = {};
          const labelIds: string[] = [];
          const labelsById: Record<string, Label> = {};
          const statusIds: string[] = [];
          const statusesById: Record<string, Status> = {};
          const priorityIds: string[] = [];
          const prioritiesById: Record<string, Priority> = {};
          const tagIds: string[] = [];
          const tagsById: Record<string, Tag> = {};

          if (newState.managerData) {
            // Normalize users
            if (newState.managerData.users) {
              newState.managerData.users.forEach((user) => {
                userIds.push(user.id);
                usersById[user.id] = user;
              });
            }

            // Normalize labels
            if (newState.managerData.labels) {
              newState.managerData.labels.forEach((label) => {
                labelIds.push(label.id);
                labelsById[label.id] = label;
              });
            }

            // Normalize statuses
            if (newState.managerData.statuses) {
              newState.managerData.statuses.forEach((status) => {
                statusIds.push(status.id);
                statusesById[status.id] = status;
              });
            }

            // Normalize priorities
            if (newState.managerData.priorities) {
              newState.managerData.priorities.forEach((priority) => {
                priorityIds.push(priority.id);
                prioritiesById[priority.id] = priority;
              });
            }

            // Normalize tags
            if (newState.managerData.tags) {
              newState.managerData.tags.forEach((tag) => {
                tagIds.push(tag.id);
                tagsById[tag.id] = tag;
              });
            }
          }

          newState.userIds = userIds;
          newState.usersById = usersById;
          newState.labelIds = labelIds;
          newState.labelsById = labelsById;
          newState.statusIds = statusIds;
          newState.statusesById = statusesById;
          newState.priorityIds = priorityIds;
          newState.prioritiesById = prioritiesById;
          newState.tagIds = tagIds;
          newState.tagsById = tagsById;

          // Extract all tags (first-level keys from tasks.json)
          const allTags = newState.taskMasterTasks ? Object.keys(newState.taskMasterTasks) : [];
          newState.allTags = allTags;

          // Precomputed simple lists
          newState.allTasks = taskIds.map((id) => tasksById[id]);
          const allLabels = newState.managerData?.labels || [];
          const allStatuses = newState.managerData?.statuses || [];
          const allPriorities = newState.managerData?.priorities || [];
          const allTagsObjects = newState.managerData?.tags || [];

          console.log('[SimpleDataStore] Manager data statuses:', {
            hasManagerData: !!newState.managerData,
            statusesLength: newState.managerData?.statuses?.length || 0,
            statuses: newState.managerData?.statuses,
          });

          newState.allLabels = allLabels;
          newState.allStatuses = allStatuses;
          newState.allPriorities = allPriorities;
          newState.allTagsObjects = allTagsObjects;

          // Compute grouped data
          const tasksByTag: Record<string, TaskMasterTask[]> = {};
          const tasksByStatus: Record<string, TaskMasterTask[]> = {};
          const tasksByPriority: Record<string, TaskMasterTask[]> = {};

          // Tasks grouped by tag (using taskMasterTasks structure, deduplicated)
          if (newState.taskMasterTasks) {
            Object.entries(newState.taskMasterTasks).forEach(([tagName, tagData]) => {
              if (tagData.tasks && tagData.tasks.length > 0) {
                // Deduplicate tasks by ID within each tag
                const uniqueTasks = tagData.tasks.filter(
                  (task, index, arr) =>
                    arr.findIndex((t) => t.id.toString() === task.id.toString()) === index
                );
                tasksByTag[tagName] = uniqueTasks;
              }
            });
          }

          // Tasks grouped by status and priority
          newState.allTasks.forEach((task) => {
            // Group by status
            if (!tasksByStatus[task.status]) {
              tasksByStatus[task.status] = [];
            }
            tasksByStatus[task.status].push(task);

            // Group by priority
            if (!tasksByPriority[task.priority]) {
              tasksByPriority[task.priority] = [];
            }
            tasksByPriority[task.priority].push(task);
          });

          newState.tasksByTag = tasksByTag;
          newState.tasksByStatus = tasksByStatus;
          newState.tasksByPriority = tasksByPriority;

          console.log(
            `[SimpleDataStore] Normalized ${taskIds.length} tasks from ${allTags.length} tags`
          );
          console.log(
            `[SimpleDataStore] Normalized ${userIds.length} users, ${labelIds.length} labels, ${statusIds.length} statuses, ${priorityIds.length} priorities, ${tagIds.length} tags`
          );

          // Set all data at once
          set(newState);
          console.log('[SimpleDataStore] Initialization complete');
        } catch (error) {
          console.error('[SimpleDataStore] Initialization failed:', error);
          set({
            isLoading: false,
            isInitialized: true, // Still mark as initialized to prevent infinite loading
            taskMasterTasks: {},
            taskMasterState: null,
            managerData: null,
            taskIds: [],
            tasksById: {},
            userIds: [],
            usersById: {},
            labelIds: [],
            labelsById: {},
            statusIds: [],
            statusesById: {},
            priorityIds: [],
            prioritiesById: {},
            tagIds: [],
            tagsById: {},
            allTasks: [],
            allLabels: [],
            allStatuses: [],
            allPriorities: [],
            allTags: [],
            allTagsObjects: [],
            tasksByTag: {},
            tasksByStatus: {},
            tasksByPriority: {},
          });
        }
      },

      reset: () => {
        set({
          taskMasterTasks: {},
          taskMasterState: null,
          managerData: null,
          taskIds: [],
          tasksById: {},
          userIds: [],
          usersById: {},
          labelIds: [],
          labelsById: {},
          statusIds: [],
          statusesById: {},
          priorityIds: [],
          prioritiesById: {},
          tagIds: [],
          tagsById: {},
          allTasks: [],
          allLabels: [],
          allStatuses: [],
          allPriorities: [],
          allTags: [],
          allTagsObjects: [],
          tasksByTag: {},
          tasksByStatus: {},
          tasksByPriority: {},
          isInitialized: false,
          isLoading: false,
        });
        console.log('[SimpleDataStore] Data reset');
      },

      // Search and filter methods
      fuzzySearchTasks: (query: string) => {
        const state = get();
        const tasks = state.allTasks;
        if (!query.trim()) return tasks;

        return tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(query.toLowerCase()) ||
            task.description.toLowerCase().includes(query.toLowerCase())
        );
      },
      // Update methods
      updateTask: (id: string, updates: Partial<TaskMasterTask>) => {
        const state = get();
        const existingTask = state.tasksById[id];
        if (!existingTask) return;

        const updatedTask = { ...existingTask, ...updates };
        set({
          tasksById: {
            ...state.tasksById,
            [id]: updatedTask,
          },
          allTasks: state.allTasks.map((task) => (task.id.toString() === id ? updatedTask : task)),
        });
      },

      deleteTask: (id: string) => {
        const state = get();
        const { [id]: deletedTask, ...remainingTasks } = state.tasksById;

        set({
          tasksById: remainingTasks,
          taskIds: state.taskIds.filter((taskId) => taskId !== id),
          allTasks: state.allTasks.filter((task) => task.id.toString() !== id),
        });
      },

      // Sync methods
      forceSyncTaskMaster: async () => {
        const state = get();
        console.log('[SimpleDataStore] Force syncing TaskMaster data...');
        await state.initialize();
      },
    })
  );
};

// Default store instance for production use
export const useDataStore = createDataStore();

// Auto-initialize the store when it's first used (client-side only)
if (typeof window !== 'undefined') {
  let isAutoInitialized = false;

  if (!isAutoInitialized) {
    isAutoInitialized = true;
    console.log('[SimpleDataStore] Setting up auto-initialization...');

    // Initialize in the next tick to avoid SSR issues
    setTimeout(() => {
      const store = useDataStore.getState();
      if (!store.isInitialized) {
        console.log('[SimpleDataStore] Starting auto-initialization...');
        store.initialize().catch((error) => {
          console.error('[SimpleDataStore] Auto-initialization failed:', error);
        });
      }
    }, 0);
  }
}
