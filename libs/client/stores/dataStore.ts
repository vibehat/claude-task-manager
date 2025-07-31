import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import {
   mockDataService,
   User,
   Project,
   Label,
   IssueStatus,
   IssuePriority,
   Issue,
} from '../services/mockDataService';
import { syncService, SyncOptions } from '../services/syncService';
import { taskMasterService } from '../services/taskMasterService';

interface DataState {
   // Data
   users: User[];
   projects: Project[];
   labels: Label[];
   statuses: IssueStatus[];
   priorities: IssuePriority[];
   issues: Issue[];

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

   // Issue actions
   addIssue: (issue: Omit<Issue, 'id' | 'createdAt' | 'updatedAt' | 'orderIndex'>) => Issue;
   updateIssue: (id: string, updates: Partial<Issue>) => void;
   deleteIssue: (id: string) => void;
   bulkUpdateIssues: (ids: string[], updates: Partial<Issue>) => void;

   // Query methods
   getIssueById: (id: string) => Issue | undefined;
   getIssuesByStatus: (statusId: string) => Issue[];
   getIssuesByProject: (projectId: string) => Issue[];
   getIssuesByAssignee: (assigneeId: string) => Issue[];
   getSubIssues: (parentIssueId: string) => Issue[];
   searchIssues: (query: string) => Issue[];

   // Utility methods
   getUserById: (id: string) => User | undefined;
   getProjectById: (id: string) => Project | undefined;
   getLabelById: (id: string) => Label | undefined;
   getStatusById: (id: string) => IssueStatus | undefined;
   getPriorityById: (id: string) => IssuePriority | undefined;
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
         issues: [],
         isTaskMasterEnabled: false,
         taskMasterSyncStatus: 'idle',
         taskMasterError: null,
         isRealTimeSyncActive: false,
         isLoading: false,
         isInitialized: false,

         // Initialize with mock data and optionally TaskMaster
         initialize: async (enableTaskMaster = false) => {
            if (get().isInitialized) return;

            set({ isLoading: true });

            try {
               await mockDataService.simulateDelay(500);
               const data = mockDataService.generateAllData();

               // Check if TaskMaster should be enabled
               const shouldEnableTaskMaster =
                  enableTaskMaster || (await taskMasterService.isAvailable());

               if (shouldEnableTaskMaster) {
                  // Try to sync TaskMaster data
                  try {
                     const syncResult = await syncService.syncTaskMasterData({
                        onSyncStart: () => set({ taskMasterSyncStatus: 'syncing' }),
                        onSyncComplete: (issues) => {
                           set((state) => ({
                              issues: [...state.issues, ...issues],
                              taskMasterSyncStatus: 'synced',
                              taskMasterError: null,
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
                        data.issues = [...data.issues, ...syncResult.issues];
                        data.labels = [...data.labels, ...syncResult.labels];
                        data.projects = [...data.projects, ...syncResult.projects];

                        set({
                           isTaskMasterEnabled: true,
                           taskMasterSyncStatus: 'synced',
                        });
                     }
                  } catch (error) {
                     console.warn('TaskMaster sync failed during initialization:', error);
                     set({
                        taskMasterSyncStatus: 'error',
                        taskMasterError: (error as Error).message,
                     });
                  }
               }

               set({
                  ...data,
                  isLoading: false,
                  isInitialized: true,
               });
            } catch (error) {
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
            return newUser;
         },

         updateUser: (id, updates) => {
            set((state) => ({
               users: state.users.map((user) =>
                  user.id === id ? { ...user, ...updates, updatedAt: new Date() } : user
               ),
            }));
         },

         deleteUser: (id) => {
            set((state) => ({
               users: state.users.filter((user) => user.id !== id),
               // Also unassign issues
               issues: state.issues.map((issue) =>
                  issue.assigneeId === id ? { ...issue, assigneeId: undefined } : issue
               ),
            }));
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
            return newProject;
         },

         updateProject: (id, updates) => {
            set((state) => ({
               projects: state.projects.map((project) =>
                  project.id === id ? { ...project, ...updates, updatedAt: new Date() } : project
               ),
            }));
         },

         deleteProject: (id) => {
            set((state) => ({
               projects: state.projects.filter((project) => project.id !== id),
               // Also remove project from issues
               issues: state.issues.map((issue) =>
                  issue.projectId === id ? { ...issue, projectId: undefined } : issue
               ),
            }));
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
            return newLabel;
         },

         updateLabel: (id, updates) => {
            set((state) => ({
               labels: state.labels.map((label) =>
                  label.id === id ? { ...label, ...updates, updatedAt: new Date() } : label
               ),
            }));
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
            return newIssue;
         },

         updateIssue: (id, updates) => {
            set((state) => ({
               issues: state.issues.map((issue) =>
                  issue.id === id ? { ...issue, ...updates, updatedAt: new Date() } : issue
               ),
            }));
         },

         deleteIssue: (id) => {
            set((state) => ({
               issues: state.issues.filter(
                  (issue) => issue.id !== id && issue.parentIssueId !== id
               ),
            }));
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
