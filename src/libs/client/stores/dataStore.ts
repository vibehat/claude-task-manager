import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { User, Project, Label, TaskStatus, TaskPriority, Task } from '../types/dataModels';
import type { SyncOptions } from '../services/syncService';
import { syncService } from '../services/syncService';
import { taskMasterService } from '../services/taskMasterService';
import { taskManagerDataService } from '../services/taskManagerDataService';
import { taskMasterUpdateService } from '../services/taskMasterUpdateService';

interface DataState {
   // Data
   users: User[];
   projects: Project[];
   labels: Label[];
   statuses: TaskStatus[];
   priorities: TaskPriority[];
   tasks: Task[];

   // TaskMaster sync state
   isTaskMasterEnabled: boolean;
   taskMasterSyncStatus: 'idle' | 'syncing' | 'synced' | 'error';
   taskMasterError: string | null;
   isRealTimeSyncActive: boolean;

   // Loading states
   isLoading: boolean;
   isInitialized: boolean;

   // Actions
   initialize: (enableTaskMaster?: boolean) => Promise<void>;
   reset: () => void;

   // TaskMaster actions
   enableTaskMasterSync: (options?: SyncOptions) => Promise<void>;
   disableTaskMasterSync: () => Promise<void>;
   forceSyncTaskMaster: (tagName?: string) => Promise<void>;
   toggleRealTimeSync: (enabled: boolean, options?: SyncOptions) => Promise<void>;
   getTaskMasterStats: (tagName?: string) => Promise<any>;

   // User actions
   addUser: (user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) => User;
   updateUser: (id: string, updates: Partial<User>) => void;
   deleteUser: (id: string) => void;

   // Project actions
   addProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => Project;
   updateProject: (id: string, updates: Partial<Project>) => void;
   deleteProject: (id: string) => void;

   // Label actions
   addLabel: (label: Omit<Label, 'id' | 'createdAt' | 'updatedAt'>) => Label;
   updateLabel: (id: string, updates: Partial<Label>) => void;
   deleteLabel: (id: string) => void;

   // Task actions
   addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'orderIndex'>) => Task;
   updateTask: (id: string, updates: Partial<Task>) => Promise<void>;
   deleteTask: (id: string) => void;
   bulkUpdateTasks: (ids: string[], updates: Partial<Task>) => void;

   // Query methods
   getTaskById: (id: string) => Task | undefined;
   getTasksByStatus: (statusId: string) => Task[];
   getParentTasksByStatus: (statusId: string) => Task[];
   getTasksByProject: (projectId: string) => Task[];
   getTasksByAssignee: (assigneeId: string) => Task[];
   getSubtasks: (parentTaskId: string) => Task[];
   searchTasks: (query: string) => Task[];

   // Utility methods
   getUserById: (id: string) => User | undefined;
   getProjectById: (id: string) => Project | undefined;
   getLabelById: (id: string) => Label | undefined;
   getStatusById: (id: string) => TaskStatus | undefined;
   getPriorityById: (id: string) => TaskPriority | undefined;
}

export const useDataStore = create<DataState>()(
   devtools(
      (set, get): DataState => ({
         // Initial state
         users: [],
         projects: [],
         labels: [],
         statuses: [],
         priorities: [],
         tasks: [],
         isTaskMasterEnabled: false,
         taskMasterSyncStatus: 'idle',
         taskMasterError: null,
         isRealTimeSyncActive: false,
         isLoading: false,
         isInitialized: false,

         // Initialize with TaskMaster data as primary source
         initialize: async (enableTaskMaster = true) => {
            if (get().isInitialized) return;

            set({ isLoading: true });

            try {
               console.log('DataStore initialization - loading TaskMaster data...');

               // Load additional UI data from taskmanager.json
               let uiData = {
                  users: [] as User[],
                  projects: [] as Project[],
                  labels: [] as Label[],
                  statuses: [] as IssueStatus[],
                  priorities: [] as IssuePriority[],
                  issues: [] as Issue[],
               };

               // Try to load UI data from taskmanager.json
               try {
                  const taskManagerData = await taskManagerDataService.readTaskManagerData();
                  if (taskManagerData) {
                     uiData = {
                        users: taskManagerData.users,
                        projects: taskManagerData.projects,
                        labels: taskManagerData.labels,
                        statuses: taskManagerData.statuses,
                        priorities: taskManagerData.priorities,
                        issues: taskManagerData.additionalIssues,
                     };
                     console.log('Loaded UI data from taskmanager.json');
                  }
               } catch (error) {
                  console.warn('Failed to load UI data from taskmanager.json:', error);
               }

               // Always check if TaskMaster should be enabled (unless explicitly disabled)
               const shouldEnableTaskMaster =
                  enableTaskMaster && (await taskMasterService.isAvailable());

               if (shouldEnableTaskMaster) {
                  console.log('TaskMaster available - syncing data...');
                  // Try to sync TaskMaster data
                  try {
                     const syncResult = await syncService.syncTaskMasterData({
                        onSyncStart: () => set({ taskMasterSyncStatus: 'syncing' }),
                        onSyncComplete: (issues) => {
                           console.log(`TaskMaster sync complete - ${issues.length} issues loaded`);
                           set((state) => ({
                              issues: [...state.issues, ...issues],
                              taskMasterSyncStatus: 'synced',
                              taskMasterError: null,
                           }));
                        },
                        onSyncError: (error) => {
                           console.error('TaskMaster sync error:', error);
                           set({
                              taskMasterSyncStatus: 'error',
                              taskMasterError: error.message,
                           });
                        },
                        enableRealTimeSync: true, // Enable real-time sync by default
                     });

                     if (syncResult.success) {
                        // Merge TaskMaster data with UI data (TaskMaster issues take precedence)
                        uiData.issues = [...uiData.issues, ...syncResult.issues];
                        uiData.labels = [...uiData.labels, ...syncResult.labels];
                        uiData.projects = [...uiData.projects, ...syncResult.projects];

                        set({
                           isTaskMasterEnabled: true,
                           taskMasterSyncStatus: 'synced',
                           isRealTimeSyncActive: true,
                        });

                        console.log('TaskMaster integration enabled successfully');
                     }
                  } catch (error) {
                     console.warn('TaskMaster sync failed during initialization:', error);
                     set({
                        taskMasterSyncStatus: 'error',
                        taskMasterError: (error as Error).message,
                     });
                  }
               } else {
                  console.log('TaskMaster not available - using UI data only');
               }

               // Set final data state
               set({
                  ...uiData,
                  isLoading: false,
                  isInitialized: true,
               });

               console.log(`DataStore initialized with ${uiData.issues.length} issues total`);
            } catch (error) {
               console.error('DataStore initialization failed:', error);
               set({
                  isLoading: false,
                  taskMasterSyncStatus: 'error',
                  taskMasterError: (error as Error).message,
               });
            }
         },

         // Reset all data
         reset: () => {
            // Stop any active sync before reset
            syncService.stopRealTimeSync();
            taskMasterService.stopWatching();

            set({
               users: [],
               projects: [],
               labels: [],
               statuses: [],
               priorities: [],
               issues: [],
               isTaskMasterEnabled: false,
               taskMasterSyncStatus: 'idle',
               taskMasterError: null,
               isRealTimeSyncActive: false,
               isInitialized: false,
            });
         },

         // TaskMaster sync actions
         enableTaskMasterSync: async (options = {}) => {
            set({ taskMasterSyncStatus: 'syncing', taskMasterError: null });

            try {
               const syncResult = await syncService.syncTaskMasterData({
                  ...options,
                  onSyncStart: () => set({ taskMasterSyncStatus: 'syncing' }),
                  onSyncComplete: (issues) => {
                     set((state) => ({
                        issues: [...state.issues.filter((i) => !i.taskId), ...issues],
                        taskMasterSyncStatus: 'synced',
                        taskMasterError: null,
                        isTaskMasterEnabled: true,
                     }));
                  },
                  onSyncError: (error) => {
                     set({
                        taskMasterSyncStatus: 'error',
                        taskMasterError: error.message,
                     });
                  },
               });

               if (syncResult.success) {
                  // Merge TaskMaster data with existing data
                  set((state) => ({
                     issues: [...state.issues.filter((i) => !i.taskId), ...syncResult.issues],
                     labels: [
                        ...state.labels.filter((l) => !l.id.includes('taskmaster')),
                        ...syncResult.labels,
                     ],
                     projects: [
                        ...state.projects.filter((p) => p.id !== 'project-taskmaster'),
                        ...syncResult.projects,
                     ],
                     isTaskMasterEnabled: true,
                     taskMasterSyncStatus: 'synced',
                  }));

                  // Start real-time sync if enabled
                  if (options.enableRealTimeSync !== false) {
                     await get().toggleRealTimeSync(true, options);
                  }
               }
            } catch (error) {
               set({
                  taskMasterSyncStatus: 'error',
                  taskMasterError: (error as Error).message,
               });
            }
         },

         disableTaskMasterSync: async () => {
            await syncService.stopRealTimeSync();

            set((state) => ({
               // Remove TaskMaster issues, labels, and projects
               issues: state.issues.filter((i) => !i.taskId),
               labels: state.labels.filter(
                  (l) =>
                     !l.id.includes('taskmaster') &&
                     !l.id.includes('subtask') &&
                     !l.id.includes('parent') &&
                     !l.id.includes('dependent')
               ),
               projects: state.projects.filter((p) => p.id !== 'project-taskmaster'),
               isTaskMasterEnabled: false,
               taskMasterSyncStatus: 'idle',
               taskMasterError: null,
               isRealTimeSyncActive: false,
            }));
         },

         forceSyncTaskMaster: async (tagName = 'master') => {
            if (!get().isTaskMasterEnabled) {
               throw new Error('TaskMaster sync is not enabled');
            }

            set({ taskMasterSyncStatus: 'syncing', taskMasterError: null });

            try {
               await syncService.forceSyncNow((issues) => {
                  set((state) => ({
                     issues: [...state.issues.filter((i) => !i.taskId), ...issues],
                     taskMasterSyncStatus: 'synced',
                     taskMasterError: null,
                  }));
               }, tagName);
            } catch (error) {
               set({
                  taskMasterSyncStatus: 'error',
                  taskMasterError: (error as Error).message,
               });
               throw error;
            }
         },

         toggleRealTimeSync: async (enabled, options = {}) => {
            if (enabled && !get().isRealTimeSyncActive) {
               await syncService.startRealTimeSync((issues) => {
                  set((state) => ({
                     issues: [...state.issues.filter((i) => !i.taskId), ...issues],
                  }));
               }, options);

               set({ isRealTimeSyncActive: true });
            } else if (!enabled && get().isRealTimeSyncActive) {
               await syncService.stopRealTimeSync();
               set({ isRealTimeSyncActive: false });
            }
         },

         getTaskMasterStats: async (tagName = 'master') => {
            return await syncService.getTaskMasterStats(tagName);
         },

         // User actions
         addUser: (userData) => {
            const newUser: User = {
               ...userData,
               id: `user-${Date.now()}`,
               createdAt: new Date(),
               updatedAt: new Date(),
            };
            set((state) => ({ users: [...state.users, newUser] }));

            // Persist to taskmanager.json
            taskManagerDataService.addUser(userData).catch(console.warn);

            return newUser;
         },

         updateUser: (id, updates) => {
            set((state) => ({
               users: state.users.map((user) =>
                  user.id === id ? { ...user, ...updates, updatedAt: new Date() } : user
               ),
            }));

            // Persist to taskmanager.json
            taskManagerDataService.updateUser(id, updates).catch(console.warn);
         },

         deleteUser: (id) => {
            set((state) => ({
               users: state.users.filter((user) => user.id !== id),
               // Also unassign issues
               issues: state.issues.map((issue) =>
                  issue.assigneeId === id ? { ...issue, assigneeId: undefined } : issue
               ),
            }));

            // Persist to taskmanager.json
            taskManagerDataService.deleteUser(id).catch(console.warn);
         },

         // Project actions
         addProject: (projectData) => {
            const newProject: Project = {
               ...projectData,
               id: `project-${Date.now()}`,
               createdAt: new Date(),
               updatedAt: new Date(),
            };
            set((state) => ({ projects: [...state.projects, newProject] }));

            // Persist to taskmanager.json
            taskManagerDataService.addProject(projectData).catch(console.warn);

            return newProject;
         },

         updateProject: (id, updates) => {
            set((state) => ({
               projects: state.projects.map((project) =>
                  project.id === id ? { ...project, ...updates, updatedAt: new Date() } : project
               ),
            }));

            // Persist to taskmanager.json
            taskManagerDataService.updateProject(id, updates).catch(console.warn);
         },

         deleteProject: (id) => {
            set((state) => ({
               projects: state.projects.filter((project) => project.id !== id),
               // Also remove project from issues
               issues: state.issues.map((issue) =>
                  issue.projectId === id ? { ...issue, projectId: undefined } : issue
               ),
            }));

            // Persist to taskmanager.json
            taskManagerDataService.deleteProject(id).catch(console.warn);
         },

         // Label actions
         addLabel: (labelData) => {
            const newLabel: Label = {
               ...labelData,
               id: `label-${Date.now()}`,
               createdAt: new Date(),
               updatedAt: new Date(),
            };
            set((state) => ({ labels: [...state.labels, newLabel] }));

            // Persist to taskmanager.json
            taskManagerDataService.addLabel(labelData).catch(console.warn);

            return newLabel;
         },

         updateLabel: (id, updates) => {
            set((state) => ({
               labels: state.labels.map((label) =>
                  label.id === id ? { ...label, ...updates, updatedAt: new Date() } : label
               ),
            }));

            // Persist to taskmanager.json
            taskManagerDataService.updateLabel(id, updates).catch(console.warn);
         },

         deleteLabel: (id) => {
            set((state) => ({
               labels: state.labels.filter((label) => label.id !== id),
               // Also remove label from issues
               issues: state.issues.map((issue) => ({
                  ...issue,
                  labelIds: issue.labelIds.filter((labelId) => labelId !== id),
               })),
            }));

            // Persist to taskmanager.json
            taskManagerDataService.deleteLabel(id).catch(console.warn);
         },

         // Issue actions
         addIssue: (issueData) => {
            const state = get();
            const newIssue: Issue = {
               ...issueData,
               id: `issue-${Date.now()}`,
               orderIndex: state.issues.length,
               createdAt: new Date(),
               updatedAt: new Date(),
            };
            set((state) => ({ issues: [...state.issues, newIssue] }));

            // Only persist additional issues (not TaskMaster issues) to taskmanager.json
            if (!newIssue.taskId) {
               taskManagerDataService.addAdditionalIssue(issueData).catch(console.warn);
            }

            return newIssue;
         },

         updateIssue: async (id, updates) => {
            const currentIssue = get().issues.find((i) => i.id === id);

            // Update the local state immediately for responsive UI
            set((state) => ({
               issues: state.issues.map((issue) =>
                  issue.id === id ? { ...issue, ...updates, updatedAt: new Date() } : issue
               ),
            }));

            if (currentIssue) {
               // Handle TaskMaster issue updates
               if (currentIssue.taskId && updates.statusId) {
                  try {
                     const result = await taskMasterUpdateService.updateTaskStatusSafe({
                        taskId: currentIssue.taskId,
                        subtaskId: currentIssue.subtaskId,
                        status: updates.statusId,
                     });

                     if (!result.success) {
                        console.warn('TaskMaster update failed:', result.error);
                        // Could implement optimistic update rollback here if needed
                     }
                  } catch (error) {
                     console.error('TaskMaster update error:', error);
                  }
               }
               // Handle regular issues (persist to taskmanager.json)
               else if (!currentIssue.taskId) {
                  taskManagerDataService.updateAdditionalIssue(id, updates).catch(console.warn);
               }
            }
         },

         deleteIssue: (id) => {
            const issue = get().issues.find((i) => i.id === id);

            set((state) => ({
               issues: state.issues.filter(
                  (issue) => issue.id !== id && issue.parentIssueId !== id
               ),
            }));

            // Only persist additional issues (not TaskMaster issues) to taskmanager.json
            if (issue && !issue.taskId) {
               taskManagerDataService.deleteAdditionalIssue(id).catch(console.warn);
            }
         },

         bulkUpdateIssues: (ids, updates) => {
            set((state) => ({
               issues: state.issues.map((issue) =>
                  ids.includes(issue.id) ? { ...issue, ...updates, updatedAt: new Date() } : issue
               ),
            }));
         },

         // Query methods
         getIssueById: (id) => {
            return get().issues.find((issue) => issue.id === id);
         },

         getIssuesByStatus: (statusId) => {
            return get().issues.filter((issue) => issue.statusId === statusId);
         },

         getParentIssuesByStatus: (statusId) => {
            return get().issues.filter(
               (issue) => issue.statusId === statusId && !issue.parentIssueId
            );
         },

         getIssuesByProject: (projectId) => {
            return get().issues.filter((issue) => issue.projectId === projectId);
         },

         getIssuesByAssignee: (assigneeId) => {
            return get().issues.filter((issue) => issue.assigneeId === assigneeId);
         },

         getSubIssues: (parentIssueId) => {
            return get().issues.filter((issue) => issue.parentIssueId === parentIssueId);
         },

         searchIssues: (query) => {
            const lowerQuery = query.toLowerCase();
            return get().issues.filter(
               (issue) =>
                  issue.title.toLowerCase().includes(lowerQuery) ||
                  issue.description?.toLowerCase().includes(lowerQuery)
            );
         },

         // Utility methods
         getUserById: (id) => {
            return get().users.find((user) => user.id === id);
         },

         getProjectById: (id) => {
            return get().projects.find((project) => project.id === id);
         },

         getLabelById: (id) => {
            return get().labels.find((label) => label.id === id);
         },

         getStatusById: (id) => {
            return get().statuses.find((status) => status.id === id);
         },

         getPriorityById: (id) => {
            return get().priorities.find((priority) => priority.id === id);
         },
      }),
      {
         name: 'data-store',
      }
   )
);
