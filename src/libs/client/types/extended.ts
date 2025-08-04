import type { Task, Subtask, TaskStatus, TaskPriority } from './taskmaster';

// Extended interfaces for UI-specific functionality
export interface TaskWithProgress extends Task {
   progressPercentage: number;
   completedSubtasks: number;
   totalSubtasks: number;
   estimatedHours?: number;
   actualHours?: number;
   lastUpdated: Date;
}

export interface SubtaskWithProgress extends Subtask {
   progressPercentage: number;
   estimatedMinutes?: number;
   actualMinutes?: number;
}

// Task filtering and sorting interfaces
export interface TaskFilter {
   status?: TaskStatus[];
   priority?: TaskPriority[];
   hasSubtasks?: boolean;
   complexity?: {
      min?: number;
      max?: number;
   };
   dependencies?: {
      hasNone?: boolean;
      specific?: number[];
   };
   search?: string;
   dateRange?: {
      createdAfter?: Date;
      createdBefore?: Date;
      updatedAfter?: Date;
      updatedBefore?: Date;
   };
}

export interface TaskSort {
   field: 'id' | 'title' | 'priority' | 'status' | 'created' | 'updated' | 'complexity';
   direction: 'asc' | 'desc';
}

// Pagination interface
export interface TaskPagination {
   page: number;
   limit: number;
   total: number;
   totalPages: number;
}

// Task analytics interfaces
export interface TaskAnalytics {
   totalTasks: number;
   completionRate: number;
   averageComplexity: number;
   statusDistribution: Record<TaskStatus, number>;
   priorityDistribution: Record<TaskPriority, number>;
   dependencyAnalysis: {
      tasksWithNoDependencies: number;
      tasksReadyToWork: number;
      blockedTasks: number;
      averageDependencies: number;
      mostDependedOnTask?: Task;
   };
   timeAnalysis?: {
      averageTaskDuration: number;
      totalEstimatedHours: number;
      totalActualHours: number;
      efficiencyRate: number;
   };
}

// Task history and audit trail
export interface TaskHistoryEntry {
   id: string;
   taskId: number;
   action:
      | 'created'
      | 'updated'
      | 'status_changed'
      | 'deleted'
      | 'dependency_added'
      | 'dependency_removed';
   timestamp: Date;
   changes: {
      field: string;
      oldValue: any;
      newValue: any;
   }[];
   actor?: string; // User or system that made the change
   metadata?: Record<string, any>;
}

export interface TaskHistory {
   taskId: number;
   entries: TaskHistoryEntry[];
}

// Batch operations interfaces
export interface BatchOperation {
   type: 'update_status' | 'update_priority' | 'add_dependency' | 'remove_dependency' | 'delete';
   taskIds: number[];
   data: any;
}

export interface BatchOperationResult {
   success: boolean;
   successfulTasks: number[];
   failedTasks: {
      taskId: number;
      error: string;
   }[];
   summary: {
      total: number;
      successful: number;
      failed: number;
   };
}

// Template interfaces
export interface TaskTemplate {
   id: string;
   name: string;
   description: string;
   template: Omit<Task, 'id'>;
   category: string;
   tags: string[];
   usageCount: number;
   createdAt: Date;
   updatedAt: Date;
}

// Project and workspace interfaces
export interface Project {
   id: string;
   name: string;
   description: string;
   tasks: Task[];
   settings: ProjectSettings;
   createdAt: Date;
   updatedAt: Date;
   collaborators?: ProjectCollaborator[];
}

export interface ProjectSettings {
   defaultPriority: TaskPriority;
   autoAssignIds: boolean;
   allowDependencyCycles: boolean;
   enableTimeTracking: boolean;
   complexityRange: {
      min: number;
      max: number;
   };
   statusWorkflow: TaskStatus[];
}

export interface ProjectCollaborator {
   id: string;
   name: string;
   email: string;
   role: 'owner' | 'admin' | 'editor' | 'viewer';
   permissions: Permission[];
   joinedAt: Date;
}

export interface Permission {
   resource: 'tasks' | 'subtasks' | 'dependencies' | 'settings' | 'collaborators';
   actions: ('read' | 'create' | 'update' | 'delete')[];
}

// AI and automation interfaces
export interface AIAssistant {
   id: string;
   name: string;
   provider: 'openai' | 'claude' | 'gemini' | 'local';
   model: string;
   capabilities: AICapability[];
   settings: AISettings;
   status: 'active' | 'inactive' | 'error';
}

export interface AICapability {
   type:
      | 'task_creation'
      | 'task_breakdown'
      | 'complexity_analysis'
      | 'dependency_suggestion'
      | 'status_prediction';
   enabled: boolean;
   confidence: number;
}

export interface AISettings {
   temperature: number;
   maxTokens: number;
   systemPrompt?: string;
   contextWindow: number;
}

// Notification and webhook interfaces
export interface Notification {
   id: string;
   type:
      | 'task_created'
      | 'task_updated'
      | 'task_completed'
      | 'dependency_blocked'
      | 'deadline_approaching';
   title: string;
   message: string;
   taskId?: number;
   priority: 'low' | 'medium' | 'high' | 'urgent';
   read: boolean;
   createdAt: Date;
   expiresAt?: Date;
}

export interface WebhookConfig {
   id: string;
   url: string;
   events: string[];
   headers?: Record<string, string>;
   secret?: string;
   enabled: boolean;
   createdAt: Date;
   lastTriggered?: Date;
}

// Export all extended types
export type TaskFilterOptions = TaskFilter;
export type TaskSortOptions = TaskSort;
export type TaskPaginationInfo = TaskPagination;

// Utility types for common operations
export type TaskUpdate = Partial<Omit<Task, 'id'>> & { id: number };
export type SubtaskUpdate = Partial<Omit<Subtask, 'id'>> & { id: number };
export type TaskCreation = Omit<Task, 'id'>;
export type SubtaskCreation = Omit<Subtask, 'id'>;

// Event types for real-time updates
export interface TaskEvent {
   type: 'task_created' | 'task_updated' | 'task_deleted' | 'subtask_updated';
   taskId: number;
   subtaskId?: number;
   data: Task | Subtask;
   timestamp: Date;
   source: 'ui' | 'cli' | 'api' | 'webhook';
}

export interface SystemEvent {
   type: 'file_changed' | 'config_updated' | 'ai_response' | 'error';
   data: any;
   timestamp: Date;
   source: string;
}
