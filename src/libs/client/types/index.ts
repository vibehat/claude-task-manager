// Re-export all types from dataModels for easy imports
export type { User, Tag, Label, TaskStatus, TaskPriority, Task, Subtask } from './dataModels';

// Import types for legacy compatibility
import type { User, Tag, Label, TaskStatus, TaskPriority, Task } from './dataModels';

// Legacy type aliases for compatibility
export type GetTasksQuery = {
   tasks: Task[];
};

export type GetTaskStatusesQuery = {
   taskStatuses: TaskStatus[];
};

export type TaskDetailsFragment = Task & {
   subtasks?: Task[];
   tag?: Tag;
   labels?: Label[];
   priority?: TaskPriority;
   status?: TaskStatus;
};

// Where clause types for filtering
export interface TaskWhereInput {
   parentTaskId?: { equals: string | null };
   statusId?: { in: string[]; equals?: string };
   priorityId?: { in: string[]; equals?: string };
   tagId?: { in: string[]; equals?: string };
   labels?: { some: { labelId: { in: string[] } } };
}
