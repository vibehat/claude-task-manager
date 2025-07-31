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
