import { create } from 'zustand';
import type { User, Project, Label, TaskStatus, TaskPriority, Task } from '../types/dataModels';
import { taskManagerDataService } from '../services/taskManagerDataService';

interface DataState {
   // Data
   users: User[];
   projects: Project[];
   labels: Label[];
   statuses: TaskStatus[];
   priorities: TaskPriority[];
   tasks: Task[];

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

   // TaskMaster sync actions
   enableTaskMasterSync: () => Promise<void>;
   disableTaskMasterSync: () => Promise<void>;
   forceSyncTaskMaster: () => Promise<void>;
   toggleRealTimeSync: (enabled: boolean) => Promise<void>;
   getTaskMasterStats: () => any;
}

export const useDataStore = create<DataState>()(
   (set, get): DataState => ({
      // Initial state
      users: [],
      projects: [],
      labels: [],
      statuses: [],
      priorities: [],
      tasks: [],
      isLoading: false,
      isInitialized: false,

      // TaskMaster sync initial state
      isTaskMasterEnabled: false,
      taskMasterSyncStatus: 'idle',
      taskMasterError: null,
      isRealTimeSyncActive: false,

      // Load data from TaskMaster API (with auto-merge functionality)
      initialize: async () => {
         if (get().isInitialized) return;

         set({ isLoading: true });

         try {
            console.log('DataStore initialization - loading merged TaskMaster data...');

            const taskManagerData = await taskManagerDataService.readTaskManagerData();

            if (taskManagerData) {
               // Convert date strings to Date objects
               const users = taskManagerData.users.map((user) => ({
                  ...user,
                  createdAt: new Date(user.createdAt),
                  updatedAt: new Date(user.updatedAt),
               }));

               const projects = taskManagerData.projects.map((project) => ({
                  ...project,
                  createdAt: new Date(project.createdAt),
                  updatedAt: new Date(project.updatedAt),
               }));

               const labels = taskManagerData.labels.map((label) => ({
                  ...label,
                  createdAt: new Date(label.createdAt),
                  updatedAt: new Date(label.updatedAt),
               }));

               const statuses = taskManagerData.statuses.map((status) => ({
                  ...status,
                  createdAt: new Date(status.createdAt),
                  updatedAt: new Date(status.updatedAt),
               }));

               const priorities = taskManagerData.priorities.map((priority) => ({
                  ...priority,
                  createdAt: new Date(priority.createdAt),
                  updatedAt: new Date(priority.updatedAt),
               }));

               const tasks = (taskManagerData.tasks || []).map((task) => ({
                  ...task,
                  createdAt: new Date(task.createdAt),
                  updatedAt: new Date(task.updatedAt),
               }));

               // Set final data state
               set({
                  users,
                  projects,
                  labels,
                  statuses,
                  priorities,
                  tasks,
                  isLoading: false,
                  isInitialized: true,
               });

               const taskMasterTasks = tasks.filter((task) => task.id.startsWith('tm-'));
               const uiTasks = tasks.filter((task) => !task.id.startsWith('tm-'));
               const parentTasks = tasks.filter((task) => !task.parentTaskId);

               console.log(`DataStore initialized with ${tasks.length} total tasks:`);
               console.log(`  - ${taskMasterTasks.length} TaskMaster CLI tasks`);
               console.log(`  - ${uiTasks.length} UI tasks`);
               console.log(`  - ${parentTasks.length} parent tasks (will be displayed)`);
               console.log(`  - ${tasks.length - parentTasks.length} subtasks`);
               console.log('💡 TaskMaster CLI and UI data merged successfully');
            } else {
               throw new Error('TaskManager data not available');
            }
         } catch (error) {
            console.error('DataStore initialization failed:', error);
            set({
               isLoading: false,
               isInitialized: false, // Make sure to set this to false on error
            });
         }
      },

      // Reset all data
      reset: () => {
         set({
            users: [],
            projects: [],
            labels: [],
            statuses: [],
            priorities: [],
            tasks: [],
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
         set((state) => ({ users: [...state.users, newUser] }));
         taskManagerDataService.addUser(userData).catch(console.warn);
         return newUser;
      },

      updateUser: (id, updates) => {
         set((state) => ({
            users: state.users.map((user) =>
               user.id === id ? { ...user, ...updates, updatedAt: new Date() } : user
            ),
         }));
         taskManagerDataService.updateUser(id, updates).catch(console.warn);
      },

      deleteUser: (id) => {
         set((state) => ({
            users: state.users.filter((user) => user.id !== id),
            tasks: state.tasks.map((task) =>
               task.assigneeId === id ? { ...task, assigneeId: undefined } : task
            ),
         }));
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
         taskManagerDataService.addProject(projectData).catch(console.warn);
         return newProject;
      },

      updateProject: (id, updates) => {
         set((state) => ({
            projects: state.projects.map((project) =>
               project.id === id ? { ...project, ...updates, updatedAt: new Date() } : project
            ),
         }));
         taskManagerDataService.updateProject(id, updates).catch(console.warn);
      },

      deleteProject: (id) => {
         set((state) => ({
            projects: state.projects.filter((project) => project.id !== id),
            tasks: state.tasks.map((task) =>
               task.projectId === id ? { ...task, projectId: undefined } : task
            ),
         }));
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
         taskManagerDataService.addLabel(labelData).catch(console.warn);
         return newLabel;
      },

      updateLabel: (id, updates) => {
         set((state) => ({
            labels: state.labels.map((label) =>
               label.id === id ? { ...label, ...updates, updatedAt: new Date() } : label
            ),
         }));
         taskManagerDataService.updateLabel(id, updates).catch(console.warn);
      },

      deleteLabel: (id) => {
         set((state) => ({
            labels: state.labels.filter((label) => label.id !== id),
            tasks: state.tasks.map((task) => ({
               ...task,
               labelIds: task.labelIds.filter((labelId) => labelId !== id),
            })),
         }));
         taskManagerDataService.deleteLabel(id).catch(console.warn);
      },

      // Task actions - simplified for UI tasks only
      addTask: (taskData) => {
         const state = get();
         const newTask: Task = {
            ...taskData,
            id: `task-${Date.now()}`,
            orderIndex: state.tasks.length,
            createdAt: new Date(),
            updatedAt: new Date(),
         };
         set((state) => ({ tasks: [...state.tasks, newTask] }));
         taskManagerDataService.addAdditionalTask(taskData).catch(console.warn);
         return newTask;
      },

      updateTask: async (id, updates) => {
         set((state) => ({
            tasks: state.tasks.map((task) =>
               task.id === id ? { ...task, ...updates, updatedAt: new Date() } : task
            ),
         }));
         taskManagerDataService.updateAdditionalTask(id, updates).catch(console.warn);
      },

      deleteTask: (id) => {
         set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id && task.parentTaskId !== id),
         }));
         taskManagerDataService.deleteAdditionalTask(id).catch(console.warn);
      },

      bulkUpdateTasks: (ids, updates) => {
         set((state) => ({
            tasks: state.tasks.map((task) =>
               ids.includes(task.id) ? { ...task, ...updates, updatedAt: new Date() } : task
            ),
         }));
      },

      // Query methods
      getTaskById: (id) => {
         return get().tasks.find((task) => task.id === id);
      },

      getTasksByStatus: (statusId) => {
         return get().tasks.filter((task) => task.statusId === statusId);
      },

      getParentTasksByStatus: (statusId) => {
         return get().tasks.filter((task) => task.statusId === statusId && !task.parentTaskId);
      },

      getTasksByProject: (projectId) => {
         return get().tasks.filter((task) => task.projectId === projectId);
      },

      getTasksByAssignee: (assigneeId) => {
         return get().tasks.filter((task) => task.assigneeId === assigneeId);
      },

      getSubtasks: (parentTaskId) => {
         return get().tasks.filter((task) => task.parentTaskId === parentTaskId);
      },

      searchTasks: (query) => {
         const lowerQuery = query.toLowerCase();
         return get().tasks.filter(
            (task) =>
               task.title.toLowerCase().includes(lowerQuery) ||
               task.description?.toLowerCase().includes(lowerQuery)
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
         // TODO: Implement actual force sync
         setTimeout(() => {
            set({ taskMasterSyncStatus: 'synced' });
         }, 1000);
      },

      toggleRealTimeSync: async (enabled: boolean) => {
         set({ isRealTimeSyncActive: enabled });
      },

      getTaskMasterStats: () => {
         const tasks = get().tasks;
         return {
            totalTasks: tasks.length,
            totalSubtasks: tasks.filter((t) => t.parentTaskId).length,
            tasksByStatus: {},
            tasksByPriority: {},
         };
      },
   })
);
