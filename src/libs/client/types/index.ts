// Re-export all types from individual modules
export type {
  TaskMasterTask,
  TaskMasterTasks,
  TaskMasterState,
  User,
  Label,
  Status,
  Priority,
  Tag,
  Task,
  ManagerData,
  TaskStatus,
} from './dataModels';

// Import Task for type aliases
import type { Task } from './dataModels';

// Define TaskDetails as the new name for TaskDetailsFragment
export type TaskDetails = Task;
// Keep TaskDetailsFragment for backward compatibility (will be removed)
export type TaskDetailsFragment = Task;

// Query and filter types
export interface GetTasksQuery {
  where?: TaskWhereInput;
  orderBy?: any;
  limit?: number;
  offset?: number;
}

export interface GetTaskStatusesQuery {
  where?: any;
  orderBy?: any;
}

export interface TaskWhereInput {
  id?: string | string[] | { in: string[] };
  title?: string;
  statusId?: { in: string[] };
  priorityId?: { in: string[] };
  tagId?: { in: string[] };
  assigneeId?: { in: string[] };
  labelIds?: string | string[];
  labels?: {
    some?: {
      labelId?: {
        in?: string[];
      };
    };
  };
  createdAt?: {
    gte?: string;
    lte?: string;
  };
  updatedAt?: {
    gte?: string;
    lte?: string;
  };
}

export type {
  Task as TaskMasterTaskType,
  Subtask,
  TaskStatus as TaskMasterStatus,
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
  TaskMasterAPIError,
} from './taskmaster';

export type {
  ExtendedTask,
  TaskAnalytics,
  TeamMember,
  ProjectStats,
  FilterCriteria,
  SortCriteria,
  BulkAction,
  TaskActivity,
  TaskComment,
  TaskAttachment,
  NotificationPreferences,
  UserPreferences,
  ProjectSettings,
  DashboardConfig,
  Theme,
  SearchResult,
  ExportFormat,
  ImportResult,
  BackupData,
  SystemHealth,
  AuditLog,
  IntegrationConfig,
  WebhookConfig,
  RolePermissions,
  AccessControl,
} from './extended';
