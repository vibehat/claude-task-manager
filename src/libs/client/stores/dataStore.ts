import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
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
         isLoading: false,
         isInitialized: false,

         // Simplified initialization - just load UI data
         initialize: async () => {
            if (get().isInitialized) return;

            set({ isLoading: true });

            try {
               console.log('DataStore initialization - loading UI data...');

               // Load UI data from taskmanager.json
               let uiData = {
                  users: [] as User[],
                  projects: [] as Project[],
                  labels: [] as Label[],
                  statuses: [] as TaskStatus[],
                  priorities: [] as TaskPriority[],
                  tasks: [] as Task[],
               };

               try {
                  const taskManagerData = await taskManagerDataService.readTaskManagerData();
                  if (taskManagerData) {
                     uiData = {
                        users: taskManagerData.users,
                        projects: taskManagerData.projects,
                        labels: taskManagerData.labels,
                        statuses: taskManagerData.statuses,
                        priorities: taskManagerData.priorities,
                        tasks: taskManagerData.additionalTasks || [],
                     };
                     console.log('Loaded UI data from taskmanager.json');
                  }
               } catch (error) {
                  console.warn('Failed to load UI data from taskmanager.json:', error);
               }

               // Set final data state
               set({
                  ...uiData,
                  isLoading: false,
                  isInitialized: true,
               });

               console.log(`DataStore initialized with ${uiData.tasks.length} UI tasks`);
               console.log('💡 Use TaskMaster CLI integration for task management');
            } catch (error) {
               console.error('DataStore initialization failed:', error);
               set({
                  isLoading: false,
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
      }),
      {
         name: 'data-store',
      }
   )
);
