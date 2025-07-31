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

export interface TaskStatus {
   id: string;
   name: string;
   color: string;
   order: number;
   createdAt: Date;
   updatedAt: Date;
}

export interface TaskPriority {
   id: string;
   name: string;
   value: number;
   color: string;
   createdAt: Date;
   updatedAt: Date;
}

export interface Task {
   id: string;
   title: string;
   description?: string;
   statusId: string;
   priorityId?: string;
   assigneeId?: string;
   projectId?: string;
   parentTaskId?: string;
   labelIds: string[];
   taskId?: number;
   subtaskId?: string;
   orderIndex: number;
   createdAt: Date;
   updatedAt: Date;
}

export interface Subtask {
   id: string;
   title: string;
   description?: string;
   parentTaskId: string;
   completed: boolean;
   orderIndex: number;
   createdAt: Date;
   updatedAt: Date;
}
