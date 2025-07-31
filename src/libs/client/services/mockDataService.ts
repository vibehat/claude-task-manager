import { v4 as uuidv4 } from 'uuid';

export interface User {
   id: string;
   name: string;
   email: string;
   avatarUrl?: string;
   createdAt: Date;
   updatedAt: Date;
}

export interface Project {
   id: string;
   name: string;
   description: string;
   teamId?: string;
   createdAt: Date;
   updatedAt: Date;
}

export interface Label {
   id: string;
   name: string;
   color: string;
   description?: string;
   createdAt: Date;
   updatedAt: Date;
}

export interface IssueStatus {
   id: string;
   name: string;
   color: string;
   order: number;
   createdAt: Date;
   updatedAt: Date;
}

export interface IssuePriority {
   id: string;
   name: string;
   value: number;
   color: string;
   createdAt: Date;
   updatedAt: Date;
}

export interface Issue {
   id: string;
   title: string;
   description?: string;
   statusId: string;
   priorityId?: string;
   assigneeId?: string;
   projectId?: string;
   parentIssueId?: string;
   labelIds: string[];
   taskId?: number;
   subtaskId?: string;
   orderIndex: number;
   createdAt: Date;
   updatedAt: Date;
}

export interface SubIssue {
   id: string;
   title: string;
   description?: string;
   parentIssueId: string;
   completed: boolean;
   orderIndex: number;
   createdAt: Date;
   updatedAt: Date;
}

class MockDataService {
   private static instance: MockDataService;

   private constructor() {}

   static getInstance(): MockDataService {
      if (!MockDataService.instance) {
         MockDataService.instance = new MockDataService();
      }
      return MockDataService.instance;
   }

   // Generate mock users
   generateUsers(count: number = 5): User[] {
      const names = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Williams', 'Charlie Brown'];
      return names.slice(0, count).map((name, index) => ({
         id: `user-${index + 1}`,
         name,
         email: `${name.toLowerCase().replace(' ', '.')}@example.com`,
         avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
         createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
         updatedAt: new Date(),
      }));
   }

   // Generate mock projects
   generateProjects(count: number = 3): Project[] {
      const projects = [
         { name: 'Task Master UI', description: 'Modern task management interface' },
         { name: 'Mobile App', description: 'Cross-platform mobile application' },
         { name: 'API Backend', description: 'RESTful API service' },
         { name: 'Documentation', description: 'Project documentation and guides' },
         { name: 'Marketing Site', description: 'Public facing marketing website' },
      ];

      return projects.slice(0, count).map((project, index) => ({
         id: `project-${index + 1}`,
         ...project,
         teamId: `team-1`,
         createdAt: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000),
         updatedAt: new Date(),
      }));
   }

   // Generate mock labels
   generateLabels(): Label[] {
      return [
         { id: 'label-1', name: 'bug', color: '#e74c3c', description: "Something isn't working" },
         {
            id: 'label-2',
            name: 'feature',
            color: '#3498db',
            description: 'New feature or request',
         },
         {
            id: 'label-3',
            name: 'enhancement',
            color: '#2ecc71',
            description: 'Improvement to existing feature',
         },
         {
            id: 'label-4',
            name: 'documentation',
            color: '#f39c12',
            description: 'Improvements or additions to documentation',
         },
         { id: 'label-5', name: 'urgent', color: '#e67e22', description: 'High priority issue' },
         {
            id: 'label-6',
            name: 'help wanted',
            color: '#9b59b6',
            description: 'Extra attention is needed',
         },
      ].map((label) => ({
         ...label,
         createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000),
         updatedAt: new Date(),
      }));
   }

   // Generate issue statuses
   generateStatuses(): IssueStatus[] {
      return [
         { id: 'status-1', name: 'backlog', color: '#95a5a6', order: 0 },
         { id: 'status-2', name: 'todo', color: '#3498db', order: 1 },
         { id: 'status-3', name: 'in_progress', color: '#f39c12', order: 2 },
         { id: 'status-4', name: 'done', color: '#2ecc71', order: 3 },
         { id: 'status-5', name: 'cancelled', color: '#e74c3c', order: 4 },
      ].map((status) => ({
         ...status,
         createdAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
         updatedAt: new Date(),
      }));
   }

   // Generate issue priorities
   generatePriorities(): IssuePriority[] {
      return [
         { id: 'priority-0', name: 'no_priority', value: 0, color: '#95a5a6' },
         { id: 'priority-1', name: 'urgent', value: 4, color: '#e74c3c' },
         { id: 'priority-2', name: 'high', value: 3, color: '#e67e22' },
         { id: 'priority-3', name: 'medium', value: 2, color: '#f39c12' },
         { id: 'priority-4', name: 'low', value: 1, color: '#3498db' },
      ].map((priority) => ({
         ...priority,
         createdAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
         updatedAt: new Date(),
      }));
   }

   // Generate mock issues
   generateIssues(count: number = 20): Issue[] {
      const titles = [
         'Implement user authentication',
         'Add dark mode support',
         'Fix navigation menu on mobile',
         'Create API documentation',
         'Optimize database queries',
         'Add unit tests for core components',
         'Implement search functionality',
         'Update dependencies to latest versions',
         'Add error handling for API calls',
         'Create user onboarding flow',
         'Implement file upload feature',
         'Add multi-language support',
         'Fix memory leak in dashboard',
         'Create admin panel',
         'Add export functionality',
         'Implement real-time notifications',
         'Add keyboard shortcuts',
         'Create mobile responsive design',
         'Add data visualization charts',
         'Implement user permissions system',
      ];

      const descriptions = [
         'This task involves implementing a complete solution for the specified feature.',
         'We need to address this issue to improve user experience.',
         'Critical bug that affects multiple users and needs immediate attention.',
         'Enhancement request from the product team to improve functionality.',
         'Technical debt that needs to be addressed for better maintainability.',
      ];

      const issues: Issue[] = [];
      const statusIds = ['status-1', 'status-2', 'status-3', 'status-4'];
      const priorityIds = ['priority-0', 'priority-1', 'priority-2', 'priority-3', 'priority-4'];
      const userIds = ['user-1', 'user-2', 'user-3', 'user-4', 'user-5'];
      const projectIds = ['project-1', 'project-2', 'project-3'];
      const labelIds = ['label-1', 'label-2', 'label-3', 'label-4', 'label-5', 'label-6'];

      for (let i = 0; i < count; i++) {
         const issue: Issue = {
            id: `issue-${i + 1}`,
            title: titles[i % titles.length],
            description:
               Math.random() > 0.3
                  ? descriptions[Math.floor(Math.random() * descriptions.length)]
                  : undefined,
            statusId: statusIds[Math.floor(Math.random() * statusIds.length)],
            priorityId:
               Math.random() > 0.2
                  ? priorityIds[Math.floor(Math.random() * priorityIds.length)]
                  : undefined,
            assigneeId:
               Math.random() > 0.3
                  ? userIds[Math.floor(Math.random() * userIds.length)]
                  : undefined,
            projectId:
               Math.random() > 0.2
                  ? projectIds[Math.floor(Math.random() * projectIds.length)]
                  : undefined,
            parentIssueId: undefined,
            labelIds:
               Math.random() > 0.5
                  ? Array.from(
                       { length: Math.floor(Math.random() * 3) + 1 },
                       () => labelIds[Math.floor(Math.random() * labelIds.length)]
                    ).filter((v, i, a) => a.indexOf(v) === i)
                  : [],
            taskId: Math.random() > 0.7 ? Math.floor(Math.random() * 10) + 1 : undefined,
            orderIndex: i,
            createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
            updatedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
         };
         issues.push(issue);
      }

      // Add some sub-issues
      for (let i = 0; i < 5; i++) {
         const parentIndex = Math.floor(Math.random() * 10);
         issues.push({
            id: `issue-sub-${i + 1}`,
            title: `Subtask: ${titles[(count + i) % titles.length]}`,
            description: undefined,
            statusId: statusIds[Math.floor(Math.random() * statusIds.length)],
            priorityId: priorityIds[Math.floor(Math.random() * priorityIds.length)],
            assigneeId:
               Math.random() > 0.5
                  ? userIds[Math.floor(Math.random() * userIds.length)]
                  : undefined,
            projectId: issues[parentIndex].projectId,
            parentIssueId: issues[parentIndex].id,
            labelIds: [],
            orderIndex: count + i,
            createdAt: new Date(Date.now() - Math.random() * 20 * 24 * 60 * 60 * 1000),
            updatedAt: new Date(Date.now() - Math.random() * 5 * 24 * 60 * 60 * 1000),
         });
      }

      return issues;
   }

   // Generate all mock data
   generateAllData() {
      return {
         users: this.generateUsers(),
         projects: this.generateProjects(),
         labels: this.generateLabels(),
         statuses: this.generateStatuses(),
         priorities: this.generatePriorities(),
         issues: this.generateIssues(25),
      };
   }

   // Simulate async delay
   async simulateDelay(ms: number = 300): Promise<void> {
      return new Promise((resolve) => setTimeout(resolve, ms));
   }
}

export const mockDataService = MockDataService.getInstance();
