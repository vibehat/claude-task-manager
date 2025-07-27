import type {
   Task,
   Subtask,
   TaskStatus,
   TaskPriority,
   TasksData,
   TaskMasterConfig,
} from './taskmaster';

// Validation schemas using Zod-like pattern (manual implementation)
export class ValidationError extends Error {
   constructor(
      message: string,
      public field?: string
   ) {
      super(message);
      this.name = 'ValidationError';
   }
}

// Type guard functions
export function isTaskStatus(value: any): value is TaskStatus {
   const validStatuses: TaskStatus[] = [
      'pending',
      'in-progress',
      'done',
      'cancelled',
      'deferred',
      'blocked',
   ];
   return typeof value === 'string' && validStatuses.includes(value as TaskStatus);
}

export function isTaskPriority(value: any): value is TaskPriority {
   const validPriorities: TaskPriority[] = ['high', 'medium', 'low'];
   return typeof value === 'string' && validPriorities.includes(value as TaskPriority);
}

export function isValidTaskId(value: any): value is number {
   return typeof value === 'number' && Number.isInteger(value) && value > 0;
}

export function isValidDependencyArray(value: any): value is number[] {
   return Array.isArray(value) && value.every((dep) => isValidTaskId(dep));
}

// Task validation
export function validateTask(data: any): data is Task {
   if (!data || typeof data !== 'object') {
      throw new ValidationError('Task must be an object');
   }

   if (!isValidTaskId(data.id)) {
      throw new ValidationError('Task ID must be a positive integer', 'id');
   }

   if (!data.title || typeof data.title !== 'string') {
      throw new ValidationError('Task title is required and must be a string', 'title');
   }

   if (!data.description || typeof data.description !== 'string') {
      throw new ValidationError('Task description is required and must be a string', 'description');
   }

   if (!isTaskStatus(data.status)) {
      throw new ValidationError('Task status must be a valid status', 'status');
   }

   if (!isTaskPriority(data.priority)) {
      throw new ValidationError('Task priority must be a valid priority', 'priority');
   }

   if (!isValidDependencyArray(data.dependencies)) {
      throw new ValidationError(
         'Task dependencies must be an array of valid task IDs',
         'dependencies'
      );
   }

   // Optional fields validation
   if (data.details !== undefined && typeof data.details !== 'string') {
      throw new ValidationError('Task details must be a string', 'details');
   }

   if (data.testStrategy !== undefined && typeof data.testStrategy !== 'string') {
      throw new ValidationError('Task test strategy must be a string', 'testStrategy');
   }

   if (
      data.complexity !== undefined &&
      (typeof data.complexity !== 'number' || data.complexity < 1 || data.complexity > 10)
   ) {
      throw new ValidationError('Task complexity must be a number between 1 and 10', 'complexity');
   }

   if (data.subtasks !== undefined) {
      if (!Array.isArray(data.subtasks)) {
         throw new ValidationError('Task subtasks must be an array', 'subtasks');
      }
      data.subtasks.forEach((subtask: any, index: number) => {
         try {
            validateSubtask(subtask);
         } catch (error) {
            throw new ValidationError(`Invalid subtask at index ${index}: ${error.message}`);
         }
      });
   }

   return true;
}

// Subtask validation
export function validateSubtask(data: any): data is Subtask {
   if (!data || typeof data !== 'object') {
      throw new ValidationError('Subtask must be an object');
   }

   if (!isValidTaskId(data.id)) {
      throw new ValidationError('Subtask ID must be a positive integer', 'id');
   }

   if (!data.title || typeof data.title !== 'string') {
      throw new ValidationError('Subtask title is required and must be a string', 'title');
   }

   if (!data.description || typeof data.description !== 'string') {
      throw new ValidationError(
         'Subtask description is required and must be a string',
         'description'
      );
   }

   if (!isTaskStatus(data.status)) {
      throw new ValidationError('Subtask status must be a valid status', 'status');
   }

   if (!Array.isArray(data.dependencies)) {
      throw new ValidationError('Subtask dependencies must be an array', 'dependencies');
   }

   // Dependencies for subtasks are string IDs (like "2.1", "2.2")
   if (!data.dependencies.every((dep: any) => typeof dep === 'string')) {
      throw new ValidationError('Subtask dependencies must be an array of strings', 'dependencies');
   }

   return true;
}

// TasksData validation
export function validateTasksData(data: any): data is TasksData {
   if (!data || typeof data !== 'object') {
      throw new ValidationError('TasksData must be an object');
   }

   if (!data.master || typeof data.master !== 'object') {
      throw new ValidationError('TasksData must have a master object', 'master');
   }

   if (!Array.isArray(data.master.tasks)) {
      throw new ValidationError('TasksData.master.tasks must be an array', 'master.tasks');
   }

   data.master.tasks.forEach((task: any, index: number) => {
      try {
         validateTask(task);
      } catch (error) {
         throw new ValidationError(`Invalid task at index ${index}: ${error.message}`);
      }
   });

   if (!data.master.metadata || typeof data.master.metadata !== 'object') {
      throw new ValidationError('TasksData must have metadata object', 'master.metadata');
   }

   const { metadata } = data.master;
   if (!metadata.created || typeof metadata.created !== 'string') {
      throw new ValidationError('Metadata must have created timestamp', 'metadata.created');
   }

   if (!metadata.updated || typeof metadata.updated !== 'string') {
      throw new ValidationError('Metadata must have updated timestamp', 'metadata.updated');
   }

   if (metadata.description !== undefined && typeof metadata.description !== 'string') {
      throw new ValidationError('Metadata description must be a string', 'metadata.description');
   }

   return true;
}

// Configuration validation
export function validateTaskMasterConfig(data: any): data is TaskMasterConfig {
   if (!data || typeof data !== 'object') {
      throw new ValidationError('Config must be an object');
   }

   // Required fields
   if (!data.models || typeof data.models !== 'object') {
      throw new ValidationError('Config must have models object', 'models');
   }

   if (!data.apiKeys || typeof data.apiKeys !== 'object') {
      throw new ValidationError('Config must have apiKeys object', 'apiKeys');
   }

   if (!data.settings || typeof data.settings !== 'object') {
      throw new ValidationError('Config must have settings object', 'settings');
   }

   if (data.models && typeof data.models === 'object') {
      const { models } = data;
      if (models.main !== undefined && typeof models.main !== 'string') {
         throw new ValidationError('Config models.main must be a string', 'models.main');
      }
      if (models.research !== undefined && typeof models.research !== 'string') {
         throw new ValidationError('Config models.research must be a string', 'models.research');
      }
      if (models.fallback !== undefined && typeof models.fallback !== 'string') {
         throw new ValidationError('Config models.fallback must be a string', 'models.fallback');
      }
   }

   if (data.apiKeys && typeof data.apiKeys === 'object') {
      Object.entries(data.apiKeys).forEach(([key, value]) => {
         if (typeof value !== 'string') {
            throw new ValidationError(`API key for ${key} must be a string`, `apiKeys.${key}`);
         }
      });
   }

   if (data.settings && typeof data.settings === 'object') {
      const { settings } = data;

      // Required settings fields
      if (settings.defaultPriority === undefined || !isTaskPriority(settings.defaultPriority)) {
         throw new ValidationError(
            'Config settings.defaultPriority is required and must be a valid priority',
            'settings.defaultPriority'
         );
      }
      if (settings.autoExpand === undefined || typeof settings.autoExpand !== 'boolean') {
         throw new ValidationError(
            'Config settings.autoExpand is required and must be a boolean',
            'settings.autoExpand'
         );
      }
      if (settings.research === undefined || typeof settings.research !== 'boolean') {
         throw new ValidationError(
            'Config settings.research is required and must be a boolean',
            'settings.research'
         );
      }
   }

   return true;
}

// Utility functions for safe parsing
export function safeParseTask(data: any): Task | null {
   try {
      validateTask(data);
      return data as Task;
   } catch {
      return null;
   }
}

export function safeParseTasksData(data: any): TasksData | null {
   try {
      validateTasksData(data);
      return data as TasksData;
   } catch {
      return null;
   }
}

export function safeParseConfig(data: any): TaskMasterConfig | null {
   try {
      validateTaskMasterConfig(data);
      return data as TaskMasterConfig;
   } catch {
      return null;
   }
}

// Runtime type checking utilities
export const TypeGuards = {
   isTask: (value: any): value is Task => {
      try {
         return validateTask(value);
      } catch {
         return false;
      }
   },

   isSubtask: (value: any): value is Subtask => {
      try {
         return validateSubtask(value);
      } catch {
         return false;
      }
   },

   isTasksData: (value: any): value is TasksData => {
      try {
         return validateTasksData(value);
      } catch {
         return false;
      }
   },

   isTaskMasterConfig: (value: any): value is TaskMasterConfig => {
      try {
         return validateTaskMasterConfig(value);
      } catch {
         return false;
      }
   },
} as const;

// Functions are already exported as individual exports above
