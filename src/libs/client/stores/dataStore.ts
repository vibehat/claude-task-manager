import { create } from 'zustand';
import type { User, Tag, Label, TaskStatus, TaskPriority, Task } from '../types/dataModels';
import { taskManagerDataService } from '../services/taskManagerDataService';

interface DataState {
   // Normalized entities
   userEntities: Record<string, User>;
   tagEntities: Record<string, Tag>;
   labelEntities: Record<string, Label>;
   statusEntities: Record<string, TaskStatus>;
   priorityEntities: Record<string, TaskPriority>;
   taskEntities: Record<string, Task>;

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

   // User actions
   addUser: (user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) => User;
   updateUser: (id: string, updates: Partial<User>) => void;
   deleteUser: (id: string) => void;

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
   getAllUsers: () => User[];
   getAllTags: () => Tag[];
   getAllLabels: () => Label[];
   getAllStatuses: () => TaskStatus[];
   getAllPriorities: () => TaskPriority[];

   // Legacy compatibility methods (computed getters)
   getTaskById: (id: string) => Task | undefined;
   getUserById: (id: string) => User | undefined;
   getTagById: (id: string) => Tag | undefined;
   getLabelById: (id: string) => Label | undefined;
   getStatusById: (id: string) => TaskStatus | undefined;
   getPriorityById: (id: string) => TaskPriority | undefined;
   getTasksByStatus: (statusId: string) => Task[];
   getParentTasksByStatus: (statusId: string) => Task[];
   getTasksByTag: (tagId: string) => Task[];
   getTasksByAssignee: (assigneeId: string) => Task[];
   getSubtasks: (parentTaskId: string) => Task[];
   searchTasks: (query: string) => Task[];

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
      userEntities: {},
      tagEntities: {},
      labelEntities: {},
      statusEntities: {},
      priorityEntities: {},
      taskEntities: {},
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
               const userEntities: Record<string, User> = {};
               taskManagerData.users.forEach((user) => {
                  userEntities[user.id] = {
                     ...user,
                     createdAt: new Date(user.createdAt),
                     updatedAt: new Date(user.updatedAt),
                  };
               });

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

               // Set final data state
               set({
                  userEntities,
                  tagEntities,
                  labelEntities,
                  statusEntities,
                  priorityEntities,
                  taskEntities,
                  isLoading: false,
                  isInitialized: true,
               });

               const allTasks = Object.values(taskEntities);
               const taskMasterTasks = allTasks.filter((task) => task.id.startsWith('tm-'));
               const uiTasks = allTasks.filter((task) => !task.id.startsWith('tm-'));
               const parentTasks = allTasks.filter((task) => !task.parentTaskId);

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
            userEntities: {},
            tagEntities: {},
            labelEntities: {},
            statusEntities: {},
            priorityEntities: {},
            taskEntities: {},
            isInitialized: false,
         });
      },

      // User actions
      addUser: (userData) => {
         const newUser: User = {
            ...userData,
            id: `user-${Date.now()}`,
            createdAt: new Date(),
            updatedAt: new Date(),
         };
         set((state) => ({
            userEntities: { ...state.userEntities, [newUser.id]: newUser },
         }));
         taskManagerDataService.addUser(userData).catch(console.warn);
         return newUser;
      },

      updateUser: (id, updates) => {
         set((state) => ({
            userEntities: {
               ...state.userEntities,
               [id]: state.userEntities[id]
                  ? {
                       ...state.userEntities[id],
                       ...updates,
                       updatedAt: new Date(),
                    }
                  : state.userEntities[id],
            },
         }));
         taskManagerDataService.updateUser(id, updates).catch(console.warn);
      },

      deleteUser: (id) => {
         set((state) => {
            const { [id]: deleted, ...restUsers } = state.userEntities;
            const updatedTaskEntities = { ...state.taskEntities };

            // Remove user assignment from tasks
            Object.keys(updatedTaskEntities).forEach((taskId) => {
               if (updatedTaskEntities[taskId].assigneeId === id) {
                  updatedTaskEntities[taskId] = {
                     ...updatedTaskEntities[taskId],
                     assigneeId: undefined,
                  };
               }
            });

            return {
               userEntities: restUsers,
               taskEntities: updatedTaskEntities,
            };
         });
         taskManagerDataService.deleteUser(id).catch(console.warn);
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
         taskManagerDataService.addTag(tagData).catch(console.warn);
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
         taskManagerDataService.updateTag(id, updates).catch(console.warn);
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
         taskManagerDataService.deleteTag(id).catch(console.warn);
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
         taskManagerDataService.addLabel(labelData).catch(console.warn);
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
         taskManagerDataService.updateLabel(id, updates).catch(console.warn);
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
         taskManagerDataService.deleteLabel(id).catch(console.warn);
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
         set((state) => ({
            taskEntities: { ...state.taskEntities, [newTask.id]: newTask },
         }));
         taskManagerDataService.addAdditionalTask(taskData).catch(console.warn);
         return newTask;
      },

      updateTask: async (id, updates) => {
         set((state) => ({
            taskEntities: {
               ...state.taskEntities,
               [id]: state.taskEntities[id]
                  ? {
                       ...state.taskEntities[id],
                       ...updates,
                       updatedAt: new Date(),
                    }
                  : state.taskEntities[id],
            },
         }));
         taskManagerDataService.updateAdditionalTask(id, updates).catch(console.warn);
      },

      deleteTask: (id) => {
         set((state) => {
            const updatedTaskEntities = { ...state.taskEntities };

            // Delete the task and all its subtasks
            Object.keys(updatedTaskEntities).forEach((taskId) => {
               if (taskId === id || updatedTaskEntities[taskId].parentTaskId === id) {
                  delete updatedTaskEntities[taskId];
               }
            });

            return { taskEntities: updatedTaskEntities };
         });
         taskManagerDataService.deleteAdditionalTask(id).catch(console.warn);
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
      },

      // Derived selectors
      getAllTasks: () => {
         return Object.values(get().taskEntities);
      },

      getAllUsers: () => {
         return Object.values(get().userEntities);
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

      getUserById: (id: string) => {
         return get().userEntities[id];
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

      getTasksByStatus: (statusId: string) => {
         const tasks = Object.values(get().taskEntities) || [];
         return tasks.filter((task) => task.statusId === statusId);
      },

      getParentTasksByStatus: (statusId: string) => {
         const tasks = Object.values(get().taskEntities) || [];
         return tasks.filter((task) => task.statusId === statusId && !task.parentTaskId);
      },

      getTasksByTag: (tagId: string) => {
         const tasks = Object.values(get().taskEntities) || [];
         return tasks.filter((task) => task.tagId === tagId);
      },

      getTasksByAssignee: (assigneeId: string) => {
         const tasks = Object.values(get().taskEntities) || [];
         return tasks.filter((task) => task.assigneeId === assigneeId);
      },

      getSubtasks: (parentTaskId: string) => {
         const tasks = Object.values(get().taskEntities) || [];
         return tasks.filter((task) => task.parentTaskId === parentTaskId);
      },

      searchTasks: (query: string) => {
         if (!query.trim()) return [];

         const tasks = Object.values(get().taskEntities) || [];
         const lowerQuery = query.toLowerCase();
         return tasks.filter(
            (task) =>
               task.title.toLowerCase().includes(lowerQuery) ||
               task.description?.toLowerCase().includes(lowerQuery)
         );
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

      forceSyncTaskMaster: async () => {
         set({ taskMasterSyncStatus: 'syncing', taskMasterError: null });

         try {
            console.log('[DataStore] Force syncing TaskMaster data...');

            // Reload data from TaskMaster
            const taskManagerData = await taskManagerDataService.readTaskManagerData();

            if (taskManagerData) {
               // Convert date strings to Date objects and normalize to entities
               const userEntities: Record<string, User> = {};
               taskManagerData.users.forEach((user) => {
                  userEntities[user.id] = {
                     ...user,
                     createdAt: new Date(user.createdAt),
                     updatedAt: new Date(user.updatedAt),
                  };
               });

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

               // Update all data in one go
               set({
                  userEntities,
                  tagEntities,
                  labelEntities,
                  statusEntities,
                  priorityEntities,
                  taskEntities,
                  taskMasterSyncStatus: 'synced',
                  taskMasterError: null,
               });

               const allTasks = Object.values(taskEntities);
               console.log(
                  `[DataStore] Successfully synced ${allTasks.length} tasks from TaskMaster`
               );
               console.log(`[DataStore] Task IDs: ${allTasks.map((t) => t.id).join(', ')}`);
            } else {
               set({
                  taskMasterSyncStatus: 'error',
                  taskMasterError: 'No TaskMaster data available',
               });
            }
         } catch (error) {
            console.error('[DataStore] Failed to force sync TaskMaster:', error);
            set({
               taskMasterSyncStatus: 'error',
               taskMasterError: error instanceof Error ? error.message : 'Unknown sync error',
            });
            throw error;
         }
      },

      toggleRealTimeSync: async (enabled: boolean) => {
         set({ isRealTimeSyncActive: enabled });
      },

      getTaskMasterStats: () => {
         const tasks = Object.values(get().taskEntities);
         return {
            totalTasks: tasks.length,
            totalSubtasks: tasks.filter((t) => t.parentTaskId).length,
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
