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

interface DataState {
   // Data
   users: User[];
   projects: Project[];
   labels: Label[];
   statuses: IssueStatus[];
   priorities: IssuePriority[];
   issues: Issue[];

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
      (set, get) => ({
         // Initial state
         users: [],
         projects: [],
         labels: [],
         statuses: [],
         priorities: [],
         issues: [],
         isLoading: false,
         isInitialized: false,

         // Initialize with mock data
         initialize: async () => {
            if (get().isInitialized) return;

            set({ isLoading: true });
            await mockDataService.simulateDelay(500);

            const data = mockDataService.generateAllData();
            set({
               ...data,
               isLoading: false,
               isInitialized: true,
            });
         },

         // Reset all data
         reset: () => {
            set({
               users: [],
               projects: [],
               labels: [],
               statuses: [],
               priorities: [],
               issues: [],
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
