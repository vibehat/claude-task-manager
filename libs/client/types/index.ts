// Main exports from taskmaster types
export type {
   Task,
   Subtask,
   TaskStatus,
   TaskPriority,
   TasksData,
   ApiResponse,
   TasksResponse,
   TaskResponse,
   CLIExecuteRequest,
   CLIExecuteResponse,
   FileWatchEvent,
   TaskMasterConfig,
   TaskFilter,
   TaskUpdate,
   CreateTaskRequest,
   APIError,
} from './taskmaster';

export { TaskMasterAPIError } from './taskmaster';

// Validation exports
export type { ValidationError } from './validation';
export {
   validateTask,
   validateSubtask,
   validateTasksData,
   validateTaskMasterConfig,
   safeParseTask,
   safeParseTasksData,
   safeParseConfig,
   isTaskStatus,
   isTaskPriority,
   isValidTaskId,
   isValidDependencyArray,
   TypeGuards,
} from './validation';

// Extended types exports
export type {
   TaskWithProgress,
   SubtaskWithProgress,
   TaskFilterOptions,
   TaskSortOptions,
   TaskPaginationInfo,
   TaskAnalytics,
   TaskHistoryEntry,
   TaskHistory,
   BatchOperation,
   BatchOperationResult,
   TaskTemplate,
   Project,
   ProjectSettings,
   ProjectCollaborator,
   Permission,
   AIAssistant,
   AICapability,
   AISettings,
   Notification,
   WebhookConfig,
   TaskEvent,
   SystemEvent,
   TaskCreation,
   SubtaskCreation,
} from './extended';

// Re-export commonly used types with aliases
export type { Task as TaskMasterTask, TasksData as TaskMasterData, TaskMasterConfig as Config };

// Constants and enums
export const TASK_STATUSES: TaskStatus[] = [
   'pending',
   'in-progress',
   'done',
   'cancelled',
   'deferred',
   'blocked',
] as const;

export const TASK_PRIORITIES: TaskPriority[] = ['high', 'medium', 'low'] as const;

// Default values
export const DEFAULT_TASK_PRIORITY: TaskPriority = 'medium';
export const DEFAULT_TASK_STATUS: TaskStatus = 'pending';

export const DEFAULT_PAGINATION = {
   page: 1,
   limit: 20,
} as const;

// Type utility functions (available at runtime)
export const TaskUtils = {
   isValidStatus: (status: string): status is TaskStatus =>
      TASK_STATUSES.includes(status as TaskStatus),

   isValidPriority: (priority: string): priority is TaskPriority =>
      TASK_PRIORITIES.includes(priority as TaskPriority),

   getStatusOrder: (status: TaskStatus): number => {
      const order: Record<TaskStatus, number> = {
         'in-progress': 0,
         'pending': 1,
         'blocked': 2,
         'deferred': 3,
         'done': 4,
         'cancelled': 5,
      };
      return order[status] ?? 999;
   },

   getPriorityOrder: (priority: TaskPriority): number => {
      const order: Record<TaskPriority, number> = {
         high: 0,
         medium: 1,
         low: 2,
      };
      return order[priority] ?? 999;
   },

   calculateProgress: (task: Task): number => {
      if (!task.subtasks || task.subtasks.length === 0) {
         return task.status === 'done' ? 100 : 0;
      }

      const completed = task.subtasks.filter((sub) => sub.status === 'done').length;
      return Math.round((completed / task.subtasks.length) * 100);
   },

   hasBlockingDependencies: (task: Task, allTasks: Task[]): boolean => {
      if (!task.dependencies || task.dependencies.length === 0) {
         return false;
      }

      return task.dependencies.some((depId) => {
         const depTask = allTasks.find((t) => t.id === depId);
         return !depTask || depTask.status !== 'done';
      });
   },

   getReadyTasks: (tasks: Task[]): Task[] => {
      return tasks.filter(
         (task) => task.status === 'pending' && !TaskUtils.hasBlockingDependencies(task, tasks)
      );
   },
} as const;
