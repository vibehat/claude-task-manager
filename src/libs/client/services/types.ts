import type { User, Tag, Label, TaskStatus, TaskPriority, Task } from '../types/dataModels';

export interface TaskExtra {
   createdAt?: string;
   updatedAt?: string;
   metadata?: {
      [key: string]: any;
   };
}

export interface TagExtra {
   icon?: string;
   color?: string;
   createdAt?: string;
   updatedAt?: string;
   metadata?: {
      isDefault?: boolean;
      visibility?: 'public' | 'private' | 'team';
      taskCount?: number;
      completedTaskCount?: number;
      [key: string]: any;
   };
}

export interface TaskManagerData {
   users: User[];
   tags: Tag[];
   labels: Label[];
   statuses: TaskStatus[];
   priorities: TaskPriority[];
   tasks?: Task[];
   taskExtra?: Record<string, TaskExtra>;
   tagExtra?: Record<string, TagExtra>;
   taskMasterState?: TaskMasterState;
   metadata: {
      created: string;
      updated: string;
      description: string;
   };
}

export interface TaskMasterTask {
   id: string;
   title: string;
   description?: string;
   details?: string;
   testStrategy?: string;
   status: string;
   priority: string;
   subtasks?: TaskMasterSubtask[];
}

export interface TaskMasterSubtask {
   id: string;
   title: string;
   description?: string;
   details?: string;
   testStrategy?: string;
   status: string;
}

export interface TaskMasterResponse {
   [tagName: string]: {
      tasks: TaskMasterTask[];
   };
}

export interface TaskMasterState {
   currentTag: string;
   lastSwitched: string;
   branchTagMapping: Record<string, string>;
   migrationNoticeShown: boolean;
}
