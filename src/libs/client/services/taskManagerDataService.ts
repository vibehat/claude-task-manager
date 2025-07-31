import type { User, Project, Label, IssueStatus, IssuePriority, Issue } from '../types/dataModels';

export interface TaskManagerData {
   users: User[];
   projects: Project[];
   labels: Label[];
   statuses: IssueStatus[];
   priorities: IssuePriority[];
   additionalIssues: Issue[];
   metadata: {
      created: string;
      updated: string;
      description: string;
   };
}

class TaskManagerDataService {
   private static instance: TaskManagerDataService;

   private constructor() {}

   static getInstance(): TaskManagerDataService {
      if (!TaskManagerDataService.instance) {
         TaskManagerDataService.instance = new TaskManagerDataService();
      }
      return TaskManagerDataService.instance;
   }

   async readTaskManagerData(): Promise<TaskManagerData | null> {
      try {
         const response = await fetch('/api/taskmaster/data');
         if (!response.ok) {
            if (response.status === 404) {
               console.log('TaskManager data file not found');
               return null;
            }
            throw new Error(`Failed to fetch TaskManager data: ${response.statusText}`);
         }
         const data = await response.json();
         return data as TaskManagerData;
      } catch (error) {
         console.warn('Failed to read TaskManager data:', error);
         return null;
      }
   }

   async writeTaskManagerData(data: TaskManagerData): Promise<boolean> {
      try {
         const response = await fetch('/api/taskmaster/data', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         });

         if (!response.ok) {
            throw new Error(`Failed to update TaskManager data: ${response.statusText}`);
         }

         return true;
      } catch (error) {
         console.warn('Failed to write TaskManager data:', error);
         return false;
      }
   }

   async isAvailable(): Promise<boolean> {
      try {
         const response = await fetch('/api/taskmaster/data');
         return response.ok;
      } catch (error) {
         console.warn('Failed to check TaskManager data availability:', error);
         return false;
      }
   }

   // Utility methods for adding/updating specific data types
   async addUser(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User | null> {
      const data = await this.readTaskManagerData();
      if (!data) return null;

      const newUser: User = {
         ...user,
         id: `user-${Date.now()}`,
         createdAt: new Date(),
         updatedAt: new Date(),
      };

      data.users.push(newUser);
      const success = await this.writeTaskManagerData(data);
      return success ? newUser : null;
   }

   async updateUser(id: string, updates: Partial<User>): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      const userIndex = data.users.findIndex((user) => user.id === id);
      if (userIndex === -1) return false;

      data.users[userIndex] = {
         ...data.users[userIndex],
         ...updates,
         updatedAt: new Date(),
      };

      return await this.writeTaskManagerData(data);
   }

   async deleteUser(id: string): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      data.users = data.users.filter((user) => user.id !== id);
      // Also unassign from additional issues
      data.additionalIssues = data.additionalIssues.map((issue) =>
         issue.assigneeId === id ? { ...issue, assigneeId: undefined } : issue
      );

      return await this.writeTaskManagerData(data);
   }

   async addProject(
      project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>
   ): Promise<Project | null> {
      const data = await this.readTaskManagerData();
      if (!data) return null;

      const newProject: Project = {
         ...project,
         id: `project-${Date.now()}`,
         createdAt: new Date(),
         updatedAt: new Date(),
      };

      data.projects.push(newProject);
      const success = await this.writeTaskManagerData(data);
      return success ? newProject : null;
   }

   async updateProject(id: string, updates: Partial<Project>): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      const projectIndex = data.projects.findIndex((project) => project.id === id);
      if (projectIndex === -1) return false;

      data.projects[projectIndex] = {
         ...data.projects[projectIndex],
         ...updates,
         updatedAt: new Date(),
      };

      return await this.writeTaskManagerData(data);
   }

   async deleteProject(id: string): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      data.projects = data.projects.filter((project) => project.id !== id);
      // Also remove project from additional issues
      data.additionalIssues = data.additionalIssues.map((issue) =>
         issue.projectId === id ? { ...issue, projectId: undefined } : issue
      );

      return await this.writeTaskManagerData(data);
   }

   async addLabel(label: Omit<Label, 'id' | 'createdAt' | 'updatedAt'>): Promise<Label | null> {
      const data = await this.readTaskManagerData();
      if (!data) return null;

      const newLabel: Label = {
         ...label,
         id: `label-${Date.now()}`,
         createdAt: new Date(),
         updatedAt: new Date(),
      };

      data.labels.push(newLabel);
      const success = await this.writeTaskManagerData(data);
      return success ? newLabel : null;
   }

   async updateLabel(id: string, updates: Partial<Label>): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      const labelIndex = data.labels.findIndex((label) => label.id === id);
      if (labelIndex === -1) return false;

      data.labels[labelIndex] = {
         ...data.labels[labelIndex],
         ...updates,
         updatedAt: new Date(),
      };

      return await this.writeTaskManagerData(data);
   }

   async deleteLabel(id: string): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      data.labels = data.labels.filter((label) => label.id !== id);
      // Also remove label from additional issues
      data.additionalIssues = data.additionalIssues.map((issue) => ({
         ...issue,
         labelIds: issue.labelIds.filter((labelId) => labelId !== id),
      }));

      return await this.writeTaskManagerData(data);
   }

   async addAdditionalIssue(
      issue: Omit<Issue, 'id' | 'createdAt' | 'updatedAt' | 'orderIndex'>
   ): Promise<Issue | null> {
      const data = await this.readTaskManagerData();
      if (!data) return null;

      const newIssue: Issue = {
         ...issue,
         id: `issue-additional-${Date.now()}`,
         orderIndex: data.additionalIssues.length,
         createdAt: new Date(),
         updatedAt: new Date(),
      };

      data.additionalIssues.push(newIssue);
      const success = await this.writeTaskManagerData(data);
      return success ? newIssue : null;
   }

   async updateAdditionalIssue(id: string, updates: Partial<Issue>): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      const issueIndex = data.additionalIssues.findIndex((issue) => issue.id === id);
      if (issueIndex === -1) return false;

      data.additionalIssues[issueIndex] = {
         ...data.additionalIssues[issueIndex],
         ...updates,
         updatedAt: new Date(),
      };

      return await this.writeTaskManagerData(data);
   }

   async deleteAdditionalIssue(id: string): Promise<boolean> {
      const data = await this.readTaskManagerData();
      if (!data) return false;

      data.additionalIssues = data.additionalIssues.filter(
         (issue) => issue.id !== id && issue.parentIssueId !== id
      );

      return await this.writeTaskManagerData(data);
   }
}

export const taskManagerDataService = TaskManagerDataService.getInstance();
