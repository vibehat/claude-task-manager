// Task Master CLI Data Structures
export interface Task {
   id: number;
   title: string;
   description: string;
   status: TaskStatus;
   priority: TaskPriority;
   dependencies: number[];
   details?: string;
   testStrategy?: string;
   subtasks?: Subtask[];
   complexity?: number;
}

export interface Subtask {
   id: number;
   title: string;
   description: string;
   status: TaskStatus;
   dependencies: string[];
   details?: string;
   testStrategy?: string;
}

export type TaskStatus = 'pending' | 'in-progress' | 'done' | 'cancelled' | 'deferred' | 'blocked';

export type TaskPriority = 'high' | 'medium' | 'low';

export interface TasksData {
   master: {
      tasks: Task[];
      metadata: {
         created: string;
         updated: string;
         description: string;
      };
   };
}

// API Response Types
export interface ApiResponse<T = any> {
   success?: boolean;
   data?: T;
   error?: string;
   message?: string;
   timestamp?: string;
}

export interface TasksResponse extends ApiResponse {
   tasks: Task[];
   metadata: TasksData['master']['metadata'];
   total: number;
}

export interface TaskResponse extends ApiResponse {
   task: Task;
}

export interface CLIExecuteRequest {
   command: string;
   args?: string[];
}

export interface CLIExecuteResponse extends ApiResponse {
   command: string;
   output: {
      stdout: string;
      stderr: string;
      parsed?: any;
   };
   exitCode: number;
}

// File Watch Types
export interface FileWatchEvent {
   type: 'file-change' | 'connection-established' | 'heartbeat' | 'manual-trigger';
   path?: string;
   label?: string;
   eventType?: string;
   filename?: string;
   timestamp: string;
   message?: string;
   connectionCount?: number;
   watching?: string[];
}

// Configuration Types
export interface TaskMasterConfig {
   models: {
      main?: string;
      research?: string;
      fallback?: string;
   };
   apiKeys: {
      [provider: string]: string;
   };
   settings: {
      defaultPriority: TaskPriority;
      autoExpand: boolean;
      research: boolean;
   };
}

// Utility Types
export interface TaskFilter {
   status?: TaskStatus;
   priority?: TaskPriority;
   id?: number;
   hasSubtasks?: boolean;
}

export interface TaskUpdate {
   id: number;
   title?: string;
   description?: string;
   status?: TaskStatus;
   priority?: TaskPriority;
   dependencies?: number[];
   details?: string;
   testStrategy?: string;
}

export interface CreateTaskRequest {
   title: string;
   description: string;
   priority?: TaskPriority;
   dependencies?: number[];
   details?: string;
   testStrategy?: string;
}

// Error Types
export interface APIError {
   code: string;
   message: string;
   details?: any;
}

export class TaskMasterAPIError extends Error {
   constructor(
      message: string,
      public statusCode = 500
   ) {
      super(message);
      this.name = 'TaskMasterAPIError';
   }
}
