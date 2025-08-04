import { create } from 'zustand';
import type { Tag, Label, TaskStatus, TaskPriority, Task } from '../types/dataModels';
import type { TaskMasterState, TagExtra } from '../services/types';
import { taskManagerDataService } from '../services/taskManagerDataService';
import type { FuzzySearchIndex } from '../utils/fuzzy-search';
import { createFuzzySearchIndex, type FuzzySearchResult } from '../utils/fuzzy-search';
import type { TaskFilterInput } from '../../../features/tasks/types/filtersTypes';

interface DataState {
   // Normalized entities
   tagEntities: Record<string, Tag>;
   labelEntities: Record<string, Label>;
   statusEntities: Record<string, TaskStatus>;
   priorityEntities: Record<string, TaskPriority>;
   taskEntities: Record<string, Task>;

   // TaskMaster state
   taskMasterState: TaskMasterState | null;

   // Tag extra data for efficient tag counts
   tagExtra: Record<string, TagExtra>;

   // Tasks grouped by tag (includes 'no-tag' for untagged tasks)
   tasksByTag: Record<string, Task[]>;

   // Tasks grouped by status
   tasksByStatus: Record<string, Task[]>;

   // Search infrastructure
   fuzzySearchIndex: FuzzySearchIndex;

   // Cache for expensive operations
   _cache: {
      tasksByStatus: Map<string, Task[]>;
      tasksByTag: Map<string, Task[]>;
      tasksByPriority: Map<string, Task[]>;
      parentTasks: Task[];
      tagCounts: Record<string, number>;
      taskStats: {
         totalTasks: number;
         totalParentTasks: number;
         totalSubtasks: number;
         tasksByStatus: Record<string, number>;
      };
      lastCacheUpdate: number;
   };

   // Loading states
   isLoading: boolean;
   isInitialized: boolean;

   // TaskMaster sync properties
   isTaskMasterEnabled: boolean;
   taskMasterSyncStatus: 'idle' | 'syncing' | 'synced' | 'error';
   taskMasterError: string | null;
   isRealTimeSyncActive: boolean;

   // Actions
   initialize: () => Promise<void>;
   reset: () => void;
   sync: () => Promise<void>;

   // Tag actions
   addTag: (tag: Omit<Tag, 'id' | 'createdAt' | 'updatedAt'>) => Tag;
   updateTag: (id: string, updates: Partial<Tag>) => void;
   deleteTag: (id: string) => void;

   // Label actions
   addLabel: (label: Omit<Label, 'id' | 'createdAt' | 'updatedAt'>) => Label;
   updateLabel: (id: string, updates: Partial<Label>) => void;
   deleteLabel: (id: string) => void;

   // Task actions
   addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'orderIndex'>) => Task;
   updateTask: (id: string, updates: Partial<Task>) => Promise<void>;
   deleteTask: (id: string) => void;
   bulkUpdateTasks: (ids: string[], updates: Partial<Task>) => void;

   // Derived selectors - these will be available as hooks
   getAllTasks: () => Task[];
   getAllTags: () => Tag[];
   getAllLabels: () => Label[];
   getAllStatuses: () => TaskStatus[];
   getAllPriorities: () => TaskPriority[];

   // Legacy compatibility methods (computed getters)
   getTaskById: (id: string) => Task | undefined;
   getTagById: (id: string) => Tag | undefined;
   getLabelById: (id: string) => Label | undefined;
   getStatusById: (id: string) => TaskStatus | undefined;
   getPriorityById: (id: string) => TaskPriority | undefined;

   // Optimized task selectors with caching
   getTasksByStatus: (statusId: string, includeSubtasks?: boolean) => Task[];
   getTasksByTag: (tagId: string, includeSubtasks?: boolean) => Task[];
   getTasksByPriority: (priorityId: string, includeSubtasks?: boolean) => Task[];
   getTasksByLabel: (labelId: string, includeSubtasks?: boolean) => Task[];
   getParentTasks: () => Task[];

   // Search methods
   searchTasks: (query: string) => Task[];
   fuzzySearchTasks: (query: string, maxResults?: number) => FuzzySearchResult[];
   filterTasks: (tasks: Task[], filters: TaskFilterInput) => Task[];
   getTasksByFilters: (filters: TaskFilterInput) => Task[];

   // Cache management
   _invalidateCache: () => void;
   _rebuildCache: () => void;
   getTagCounts: () => Record<string, number>;
   getTaskStats: () => {
      totalTasks: number;
      totalParentTasks: number;
      totalSubtasks: number;
      tasksByStatus: Record<string, number>;
   };

   // TaskMaster state selectors
   getTaskMasterState: () => TaskMasterState | null;
   getCurrentTag: () => string | null;
   getLastSwitched: () => string | null;
   getBranchTagMapping: () => Record<string, string>;

   // TaskMaster sync actions
   enableTaskMasterSync: () => Promise<void>;
   disableTaskMasterSync: () => Promise<void>;
   forceSyncTaskMaster: () => Promise<void>;
   toggleRealTimeSync: (enabled: boolean) => Promise<void>;
   getTaskMasterStats: () => any;
}

// Auto-initialize the data store when first created
let isAutoInitialized = false;

export const useDataStore = create<DataState>()(
   (set, get): DataState => ({
      // Initial state - normalized entities
      tagEntities: {},
      labelEntities: {},
      statusEntities: {},
      priorityEntities: {},
      taskEntities: {},
      taskMasterState: null,
      tagExtra: {},
      tasksByTag: {},
      tasksByStatus: {},
      fuzzySearchIndex: createFuzzySearchIndex(),
      _cache: {
         tasksByStatus: new Map(),
         tasksByTag: new Map(),
         tasksByPriority: new Map(),
         parentTasks: [],
         tagCounts: {},
         taskStats: {
            totalTasks: 0,
            totalParentTasks: 0,
            totalSubtasks: 0,
            tasksByStatus: {},
         },
         lastCacheUpdate: 0,
      },
      isLoading: false,
      isInitialized: false,

      // TaskMaster sync initial state
      isTaskMasterEnabled: false,
      taskMasterSyncStatus: 'idle',
      taskMasterError: null,
      isRealTimeSyncActive: false,

      // Load data from TaskMaster API (with auto-merge functionality)
      initialize: async () => {
         if (get().isInitialized) {
            console.log('[DataStore] Already initialized, skipping...');
            return;
         }

         set({ isLoading: true });
         console.log('[DataStore] Starting initialization...');

         try {
            console.log('[DataStore] Loading merged TaskMaster data...');

            const taskManagerData = await taskManagerDataService.readTaskManagerData();
            console.log('[DataStore] Received data from service:', !!taskManagerData);

            if (taskManagerData) {
               // Convert date strings to Date objects and normalize to entities
               const tagEntities: Record<string, Tag> = {};
               taskManagerData.tags.forEach((tag) => {
                  tagEntities[tag.id] = {
                     ...tag,
                     createdAt: new Date(tag.createdAt),
                     updatedAt: new Date(tag.updatedAt),
                  };
               });

               const labelEntities: Record<string, Label> = {};
               taskManagerData.labels.forEach((label) => {
                  labelEntities[label.id] = {
                     ...label,
                     createdAt: new Date(label.createdAt),
                     updatedAt: new Date(label.updatedAt),
                  };
               });

               const statusEntities: Record<string, TaskStatus> = {};
               taskManagerData.statuses.forEach((status) => {
                  statusEntities[status.id] = {
                     ...status,
                     createdAt: new Date(status.createdAt),
                     updatedAt: new Date(status.updatedAt),
                  };
               });

               const priorityEntities: Record<string, TaskPriority> = {};
               taskManagerData.priorities.forEach((priority) => {
                  priorityEntities[priority.id] = {
                     ...priority,
                     createdAt: new Date(priority.createdAt),
                     updatedAt: new Date(priority.updatedAt),
                  };
               });

               const taskEntities: Record<string, Task> = {};
               (taskManagerData.tasks || []).forEach((task) => {
                  taskEntities[task.id] = {
                     ...task,
                     createdAt: new Date(task.createdAt),
                     updatedAt: new Date(task.updatedAt),
                  };
               });

               // Build fuzzy search index with the new tasks
               const fuzzySearchIndex = get().fuzzySearchIndex;
               const allTasksArray = Object.values(taskEntities);
               fuzzySearchIndex.buildIndex(allTasksArray);

               // Set final data state
               set({
                  tagEntities,
                  labelEntities,
                  statusEntities,
                  priorityEntities,
                  taskEntities,
                  taskMasterState: taskManagerData.taskMasterState || null,
                  tagExtra: taskManagerData.tagExtra || {},
                  isLoading: false,
                  isInitialized: true,
               });

               // Invalidate cache to force rebuild with new data
               get()._invalidateCache();

               const allTasks = Object.values(taskEntities);
               const taskMasterTasks = allTasks.filter((task) => task.taskId !== undefined);
               const uiTasks = allTasks.filter((task) => task.taskId === undefined);
               const parentTasks = allTasks; // All tasks are parent tasks now

               console.log(`[DataStore] Initialized with ${allTasks.length} total tasks:`);
               console.log(`[DataStore]   - ${taskMasterTasks.length} TaskMaster CLI tasks`);
               console.log(`[DataStore]   - ${uiTasks.length} UI tasks`);
               console.log(
                  `[DataStore]   - ${parentTasks.length} parent tasks (will be displayed)`
               );
               console.log(`[DataStore]   - ${allTasks.length - parentTasks.length} subtasks`);
               console.log('[DataStore] 💡 TaskMaster CLI and UI data merged successfully');
               console.log(
                  '[DataStore] Sample task IDs:',
                  allTasks.slice(0, 3).map((t) => t.id)
               );
            } else {
               throw new Error('TaskManager data not available');
            }
         } catch (error) {
            console.error('DataStore initialization failed:', error);

            // On initialization failure, provide default statuses to prevent UI breaking
            const defaultStatusEntities: Record<string, TaskStatus> = {
               'status-1': {
                  id: 'status-1',
                  name: 'backlog',
                  color: '#95a5a6',
                  order: 0,
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
               'status-2': {
                  id: 'status-2',
                  name: 'todo',
                  color: '#3498db',
                  order: 1,
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
               'status-3': {
                  id: 'status-3',
                  name: 'in_progress',
                  color: '#f39c12',
                  order: 2,
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
               'status-4': {
                  id: 'status-4',
                  name: 'done',
                  color: '#2ecc71',
                  order: 3,
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
               'status-5': {
                  id: 'status-5',
                  name: 'cancelled',
                  color: '#e74c3c',
                  order: 4,
                  createdAt: new Date(),
                  updatedAt: new Date(),
               },
            };

            set({
               statusEntities: defaultStatusEntities,
               isLoading: false,
               isInitialized: true, // Set to true to prevent infinite loading
            });
         }
      },

      // Reset all data
      reset: () => {
         set({
            tagEntities: {},
            labelEntities: {},
            statusEntities: {},
            priorityEntities: {},
            taskEntities: {},
            taskMasterState: null,
            tasksByTag: {},
            tasksByStatus: {},
            isInitialized: false,
         });
      },

      // Tag actions
      addTag: (tagData) => {
         const newTag: Tag = {
            ...tagData,
            id: `tag-${Date.now()}`,
            createdAt: new Date(),
            updatedAt: new Date(),
         };
         set((state) => ({
            tagEntities: { ...state.tagEntities, [newTag.id]: newTag },
         }));
         // Local data managed in store - sync happens separately
         return newTag;
      },

      updateTag: (id, updates) => {
         set((state) => ({
            tagEntities: {
               ...state.tagEntities,
               [id]: state.tagEntities[id]
                  ? {
                       ...state.tagEntities[id],
                       ...updates,
                       updatedAt: new Date(),
                    }
                  : state.tagEntities[id],
            },
         }));
         // Local data managed in store - sync happens separately
      },

      deleteTag: (id) => {
         set((state) => {
            const { [id]: deleted, ...restTags } = state.tagEntities;
            const updatedTaskEntities = { ...state.taskEntities };

            // Remove tag from tasks
            Object.keys(updatedTaskEntities).forEach((taskId) => {
               if (updatedTaskEntities[taskId].tagId === id) {
                  updatedTaskEntities[taskId] = {
                     ...updatedTaskEntities[taskId],
                     tagId: undefined,
                  };
               }
            });

            return {
               tagEntities: restTags,
               taskEntities: updatedTaskEntities,
            };
         });
         // Local data managed in store - sync happens separately
      },

      // Label actions
      addLabel: (labelData) => {
         const newLabel: Label = {
            ...labelData,
            id: `label-${Date.now()}`,
            createdAt: new Date(),
            updatedAt: new Date(),
         };
         set((state) => ({
            labelEntities: { ...state.labelEntities, [newLabel.id]: newLabel },
         }));
         // Local data managed in store - sync happens separately
         return newLabel;
      },

      updateLabel: (id, updates) => {
         set((state) => ({
            labelEntities: {
               ...state.labelEntities,
               [id]: state.labelEntities[id]
                  ? {
                       ...state.labelEntities[id],
                       ...updates,
                       updatedAt: new Date(),
                    }
                  : state.labelEntities[id],
            },
         }));
         // Local data managed in store - sync happens separately
      },

      deleteLabel: (id) => {
         set((state) => {
            const { [id]: deleted, ...restLabels } = state.labelEntities;
            const updatedTaskEntities = { ...state.taskEntities };

            // Remove label from tasks
            Object.keys(updatedTaskEntities).forEach((taskId) => {
               if (updatedTaskEntities[taskId].labelIds.includes(id)) {
                  updatedTaskEntities[taskId] = {
                     ...updatedTaskEntities[taskId],
                     labelIds: updatedTaskEntities[taskId].labelIds.filter(
                        (labelId) => labelId !== id
                     ),
                  };
               }
            });

            return {
               labelEntities: restLabels,
               taskEntities: updatedTaskEntities,
            };
         });
         // Local data managed in store - sync happens separately
      },

      // Task actions - simplified for UI tasks only
      addTask: (taskData) => {
         const state = get();
         const allTasks = Object.values(state.taskEntities);
         const newTask: Task = {
            ...taskData,
            id: `task-${Date.now()}`,
            orderIndex: allTasks.length,
            createdAt: new Date(),
            updatedAt: new Date(),
         };

         // Update search index
         state.fuzzySearchIndex.updateTask(newTask);

         set((state) => ({
            taskEntities: { ...state.taskEntities, [newTask.id]: newTask },
         }));

         // Invalidate cache since tasks changed
         get()._invalidateCache();

         // Local data managed in store - sync happens separately
         return newTask;
      },

      updateTask: async (id, updates) => {
         const state = get();
         const updatedTask = state.taskEntities[id]
            ? {
                 ...state.taskEntities[id],
                 ...updates,
                 updatedAt: new Date(),
              }
            : state.taskEntities[id];

         // Update search index if task exists
         if (updatedTask) {
            state.fuzzySearchIndex.updateTask(updatedTask);
         }

         set((state) => ({
            taskEntities: {
               ...state.taskEntities,
               [id]: updatedTask,
            },
         }));

         // Invalidate cache since tasks changed
         get()._invalidateCache();

         // Local data managed in store - sync happens separately
      },

      deleteTask: (id) => {
         set((state) => {
            const updatedTaskEntities = { ...state.taskEntities };

            // Delete the task and all its subtasks
            Object.keys(updatedTaskEntities).forEach((taskId) => {
               if (taskId === id) {
                  // Remove from search index
                  state.fuzzySearchIndex.removeTask(taskId);
                  delete updatedTaskEntities[taskId];
               }
            });

            return { taskEntities: updatedTaskEntities };
         });

         // Invalidate cache since tasks changed
         get()._invalidateCache();

         // Local data managed in store - sync happens separately
      },

      bulkUpdateTasks: (ids, updates) => {
         set((state) => {
            const updatedTaskEntities = { ...state.taskEntities };

            ids.forEach((id) => {
               if (updatedTaskEntities[id]) {
                  updatedTaskEntities[id] = {
                     ...updatedTaskEntities[id],
                     ...updates,
                     updatedAt: new Date(),
                  };
               }
            });

            return { taskEntities: updatedTaskEntities };
         });

         // Invalidate cache since tasks changed
         get()._invalidateCache();
      },

      // Derived selectors
      getAllTasks: () => {
         return Object.values(get().taskEntities);
      },

      getAllTags: () => {
         return Object.values(get().tagEntities);
      },

      getAllLabels: () => {
         return Object.values(get().labelEntities);
      },

      getAllStatuses: () => {
         return Object.values(get().statusEntities);
      },

      getAllPriorities: () => {
         return Object.values(get().priorityEntities);
      },

      // Legacy compatibility methods (computed getters)
      getTaskById: (id: string) => {
         return get().taskEntities[id];
      },

      getTagById: (id: string) => {
         return get().tagEntities[id];
      },

      getLabelById: (id: string) => {
         return get().labelEntities[id];
      },

      getStatusById: (id: string) => {
         return get().statusEntities[id];
      },

      getPriorityById: (id: string) => {
         return get().priorityEntities[id];
      },

      // Cache management
      _invalidateCache: () => {
         const state = get();
         state._cache.tasksByStatus.clear();
         state._cache.tasksByTag.clear();
         state._cache.tasksByPriority.clear();
         state._cache.parentTasks = [];
         state._cache.tagCounts = {};
         state._cache.taskStats = {
            totalTasks: 0,
            totalParentTasks: 0,
            totalSubtasks: 0,
            tasksByStatus: {},
         };
         state._cache.lastCacheUpdate = 0;

         // Clear main tasksByTag and tasksByStatus properties
         set({ tasksByTag: {}, tasksByStatus: {} });
      },

      _rebuildCache: () => {
         const state = get();

         // Prevent concurrent rebuilds and infinite loops
         if (state._cache.lastCacheUpdate > 0 && Date.now() - state._cache.lastCacheUpdate < 1000) {
            return;
         }

         const tasks = Object.values(state.taskEntities);

         // Clear existing cache
         state._cache.tasksByStatus.clear();
         state._cache.tasksByTag.clear();
         state._cache.tasksByPriority.clear();

         // Clear and rebuild tasksByTag and tasksByStatus
         const tasksByTag: Record<string, Task[]> = {};
         const tasksByStatus: Record<string, Task[]> = {};

         // Rebuild caches
         const parentTasks: Task[] = [];

         tasks.forEach((task) => {
            // Cache by status
            if (!state._cache.tasksByStatus.has(task.statusId)) {
               state._cache.tasksByStatus.set(task.statusId, []);
            }
            state._cache.tasksByStatus.get(task.statusId)?.push(task);

            // Also populate main tasksByStatus property
            if (!tasksByStatus[task.statusId]) {
               tasksByStatus[task.statusId] = [];
            }
            tasksByStatus[task.statusId].push(task);

            // Cache by tag
            if (task.tagId) {
               if (!state._cache.tasksByTag.has(task.tagId)) {
                  state._cache.tasksByTag.set(task.tagId, []);
               }
               state._cache.tasksByTag.get(task.tagId)?.push(task);

               // Also populate main tasksByTag property
               if (!tasksByTag[task.tagId]) {
                  tasksByTag[task.tagId] = [];
               }
               tasksByTag[task.tagId].push(task);
            }

            // Cache by priority
            if (task.priorityId) {
               if (!state._cache.tasksByPriority.has(task.priorityId)) {
                  state._cache.tasksByPriority.set(task.priorityId, []);
               }
               state._cache.tasksByPriority.get(task.priorityId)?.push(task);
            }

            // Cache parent tasks
            // All tasks are parent tasks now (parentTaskId removed)
            parentTasks.push(task);
         });

         // Add tasks without tags to tasksByTag
         const tasksWithoutTag = tasks.filter((task) => !task.tagId);
         if (tasksWithoutTag.length > 0) {
            tasksByTag['no-tag'] = tasksWithoutTag;
         }

         state._cache.parentTasks = parentTasks;

         // Build tag counts cache
         const tagCounts: Record<string, number> = {};

         // First, use the efficient tagExtra data for TaskMaster tags
         Object.entries(state.tagExtra).forEach(([tagId, extra]) => {
            if (extra.metadata?.taskCount !== undefined) {
               tagCounts[tagId] = extra.metadata.taskCount;
            }
         });

         // For any remaining tags (UI-only tags), count parent tasks manually
         parentTasks.forEach((task: Task) => {
            if (task.tagId && !tagCounts[task.tagId]) {
               tagCounts[task.tagId] = (tagCounts[task.tagId] || 0) + 1;
            }
         });

         state._cache.tagCounts = tagCounts;

         // Build task stats cache
         const tasksByStatusCounts: Record<string, number> = {};
         state._cache.tasksByStatus.forEach((tasksArray, statusId) => {
            tasksByStatusCounts[statusId] = tasksArray.length;
         });

         const taskStats = {
            totalTasks: tasks.length,
            totalParentTasks: parentTasks.length,
            totalSubtasks: tasks.length - parentTasks.length,
            tasksByStatus: tasksByStatusCounts,
         };

         state._cache.taskStats = taskStats;
         state._cache.lastCacheUpdate = Date.now();

         // Update state properties directly without triggering a re-render
         // These are already being built from the source data, so we don't need to trigger updates
         state.tasksByTag = tasksByTag;
         state.tasksByStatus = tasksByStatus;
      },

      // Optimized task selectors with caching
      getTasksByStatus: (statusId: string, includeSubtasks = true) => {
         const state = get();

         // Return empty array if cache not built yet instead of rebuilding during render
         if (state._cache.lastCacheUpdate === 0) {
            return [];
         }

         const tasks = state._cache.tasksByStatus.get(statusId) || [];

         if (!includeSubtasks) {
            return tasks; // All tasks are parent tasks
         }

         return tasks;
      },

      getTasksByTag: (tagId: string, includeSubtasks = true) => {
         const state = get();

         // Return empty array if cache not built yet instead of rebuilding during render
         if (state._cache.lastCacheUpdate === 0) {
            return [];
         }

         const tasks = state._cache.tasksByTag.get(tagId) || [];

         if (!includeSubtasks) {
            return tasks; // All tasks are parent tasks
         }

         return tasks;
      },

      getTasksByPriority: (priorityId: string, includeSubtasks = true) => {
         const state = get();

         // Return empty array if cache not built yet instead of rebuilding during render
         if (state._cache.lastCacheUpdate === 0) {
            return [];
         }

         const tasks = state._cache.tasksByPriority.get(priorityId) || [];

         if (!includeSubtasks) {
            return tasks; // All tasks are parent tasks
         }

         return tasks;
      },

      getTasksByLabel: (labelId: string, includeSubtasks = true) => {
         const tasks = Object.values(get().taskEntities);
         const filtered = tasks.filter((task) => task.labelIds.includes(labelId));

         if (!includeSubtasks) {
            return filtered; // All tasks are parent tasks
         }

         return filtered;
      },

      getParentTasks: () => {
         const state = get();

         // Return empty array if cache not built yet instead of rebuilding during render
         if (state._cache.lastCacheUpdate === 0) {
            return [];
         }

         return state._cache.parentTasks;
      },

      getTasksByFilters: (filters: TaskFilterInput) => {
         const state = get();

         // Check if there are any active filters
         const hasActiveFilters =
            filters.search ||
            (filters.statusIds && filters.statusIds.length > 0) ||
            (filters.priorityIds && filters.priorityIds.length > 0) ||
            (filters.labelIds && filters.labelIds.length > 0) ||
            (filters.tagIds && filters.tagIds.length > 0) ||
            filters.createdAt;

         // If no filters are active, return all tasks
         if (!hasActiveFilters) {
            return Object.values(state.taskEntities);
         }

         // Ensure cache is built for filtered access
         if (state._cache.lastCacheUpdate === 0) {
            // Build cache synchronously but avoid triggering state updates
            state._rebuildCache();
         }

         // Use optimized selectors for single-filter cases
         if (
            filters.statusIds &&
            filters.statusIds.length === 1 &&
            !filters.search &&
            !filters.priorityIds &&
            !filters.labelIds &&
            !filters.tagIds &&
            !filters.createdAt
         ) {
            return state._cache.tasksByStatus.get(filters.statusIds[0]) || [];
         }

         if (
            filters.tagIds &&
            filters.tagIds.length === 1 &&
            !filters.search &&
            !filters.statusIds &&
            !filters.priorityIds &&
            !filters.labelIds &&
            !filters.createdAt
         ) {
            return state._cache.tasksByTag.get(filters.tagIds[0]) || [];
         }

         if (
            filters.priorityIds &&
            filters.priorityIds.length === 1 &&
            !filters.search &&
            !filters.statusIds &&
            !filters.tagIds &&
            !filters.labelIds &&
            !filters.createdAt
         ) {
            return state._cache.tasksByPriority.get(filters.priorityIds[0]) || [];
         }

         // For complex filters, use the full filtering logic
         const tasks = Object.values(state.taskEntities);
         return state.filterTasks(tasks, filters);
      },

      getTagCounts: () => {
         const state = get();

         // Return empty object if cache not built yet instead of rebuilding during render
         if (state._cache.lastCacheUpdate === 0) {
            return {};
         }

         return state._cache.tagCounts;
      },

      getTaskStats: () => {
         const state = get();

         // Return default stats if cache not built yet instead of rebuilding during render
         if (state._cache.lastCacheUpdate === 0) {
            return {
               totalTasks: 0,
               totalParentTasks: 0,
               totalSubtasks: 0,
               tasksByStatus: {},
            };
         }

         return state._cache.taskStats;
      },

      searchTasks: (query: string) => {
         if (!query.trim()) return [];

         const tasks = Object.values(get().taskEntities) || [];
         const lowerQuery = query.toLowerCase();
         return tasks.filter(
            (task) =>
               String(task.title || '')
                  .toLowerCase()
                  .includes(lowerQuery) ||
               String(task.description || '')
                  .toLowerCase()
                  .includes(lowerQuery)
         );
      },

      fuzzySearchTasks: (query: string, maxResults = 10) => {
         if (!query.trim()) return [];

         const state = get();
         const allTasks = Object.values(state.taskEntities);

         // Rebuild index if needed
         if (state.fuzzySearchIndex.needsRebuild(allTasks.length)) {
            state.fuzzySearchIndex.buildIndex(allTasks);
         }

         return state.fuzzySearchIndex.search(query, maxResults);
      },

      filterTasks: (tasks: Task[], filters: TaskFilterInput) => {
         // Early return if no filters are active to avoid unnecessary processing
         const hasActiveFilters =
            filters.search ||
            (filters.statusIds && filters.statusIds.length > 0) ||
            (filters.priorityIds && filters.priorityIds.length > 0) ||
            (filters.labelIds && filters.labelIds.length > 0) ||
            (filters.tagIds && filters.tagIds.length > 0) ||
            filters.createdAt;

         if (!hasActiveFilters) {
            return tasks;
         }

         // Pre-compute search term for performance
         const searchTerm = filters.search?.toLowerCase();

         // Create sets for O(1) lookup performance
         const statusSet = filters.statusIds ? new Set(filters.statusIds) : null;
         const prioritySet = filters.priorityIds ? new Set(filters.priorityIds) : null;
         const labelSet = filters.labelIds ? new Set(filters.labelIds) : null;
         const tagSet = filters.tagIds ? new Set(filters.tagIds) : null;

         return tasks.filter((task) => {
            // Text search - optimized with early exit
            if (searchTerm) {
               const titleMatch = task.title.toLowerCase().includes(searchTerm);
               if (titleMatch) {
                  // Continue with other filters if title matches
               } else {
                  const descMatch = task.description?.toLowerCase().includes(searchTerm);
                  const idMatch = task.id.toLowerCase().includes(searchTerm);
                  if (!descMatch && !idMatch) return false;
               }
            }

            // Status filter - O(1) lookup
            if (statusSet && !statusSet.has(task.statusId)) {
               return false;
            }

            // Priority filter - O(1) lookup with null check
            if (prioritySet && (!task.priorityId || !prioritySet.has(task.priorityId))) {
               return false;
            }

            // Label filter - optimized with Set lookup
            if (labelSet && !task.labelIds.some((labelId) => labelSet.has(labelId))) {
               return false;
            }

            // Tag filter - O(1) lookup with null check
            if (tagSet && (!task.tagId || !tagSet.has(task.tagId))) {
               return false;
            }

            // Parent task filter removed - hierarchy now handled by taskId/subtaskId

            // Created date filter - optimized date comparison
            if (filters.createdAt) {
               const taskTime = task.createdAt.getTime();

               if (filters.createdAt.from && taskTime < filters.createdAt.from.getTime()) {
                  return false;
               }

               if (filters.createdAt.to && taskTime > filters.createdAt.to.getTime()) {
                  return false;
               }
            }

            return true;
         });
      },

      // TaskMaster state selectors
      getTaskMasterState: () => {
         return get().taskMasterState;
      },

      getCurrentTag: () => {
         const state = get().taskMasterState;
         return state?.currentTag || null;
      },

      getLastSwitched: () => {
         const state = get().taskMasterState;
         return state?.lastSwitched || null;
      },

      getBranchTagMapping: () => {
         const state = get().taskMasterState;
         return state?.branchTagMapping || {};
      },

      // TaskMaster sync implementations (placeholder implementations)
      enableTaskMasterSync: async () => {
         set({
            isTaskMasterEnabled: true,
            taskMasterSyncStatus: 'syncing',
            taskMasterError: null,
         });
         // TODO: Implement actual TaskMaster sync enabling
         setTimeout(() => {
            set({ taskMasterSyncStatus: 'synced' });
         }, 1000);
      },

      disableTaskMasterSync: async () => {
         set({
            isTaskMasterEnabled: false,
            taskMasterSyncStatus: 'idle',
            isRealTimeSyncActive: false,
         });
      },

      // Simple sync method - same logic as initialize but for manual sync
      sync: async () => {
         return get().initialize();
      },

      forceSyncTaskMaster: async () => {
         return get().sync();
      },

      toggleRealTimeSync: async (enabled: boolean) => {
         set({ isRealTimeSyncActive: enabled });
      },

      getTaskMasterStats: () => {
         const tasks = Object.values(get().taskEntities);
         return {
            totalTasks: tasks.length,
            totalSubtasks: 0, // No subtasks anymore
            tasksByStatus: {},
            tasksByPriority: {},
         };
      },
   })
);

// Auto-initialize the store when it's first used
if (typeof window !== 'undefined' && !isAutoInitialized) {
   isAutoInitialized = true;
   console.log('[DataStore] Setting up auto-initialization...');
   // Initialize in the next tick to avoid SSR issues
   setTimeout(() => {
      const store = useDataStore.getState();
      console.log('[DataStore] Checking if initialization needed...', {
         isInitialized: store.isInitialized,
      });
      if (!store.isInitialized) {
         console.log('[DataStore] Starting auto-initialization...');
         store.initialize().catch((error) => {
            console.error('[DataStore] Auto-initialization failed:', error);
         });
      } else {
         console.log('[DataStore] Already initialized, skipping auto-initialization');
      }
   }, 0);
} else {
   console.log('[DataStore] Auto-initialization conditions not met:', {
      isWindow: typeof window !== 'undefined',
      isAutoInitialized,
   });
}
