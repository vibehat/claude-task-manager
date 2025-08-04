import type { FC } from 'react';
import type { TaskStatus } from '@/libs/client/types';
import {
  BacklogIcon,
  PausedIcon,
  ToDoIcon,
  InProgressIcon,
  TechnicalReviewIcon,
  CompletedIcon,
  BlockedIcon,
  DeferredIcon,
  ReviewIcon,
} from '@/components/icons/BacklogIcon';

const iconMapByName: Record<string, FC<React.SVGProps<SVGSVGElement>>> = {
  // Legacy mappings (underscore format)
  'backlog': BacklogIcon,
  'todo': ToDoIcon,
  'in_progress': InProgressIcon,
  'technical_review': TechnicalReviewIcon,
  'done': CompletedIcon,
  'cancelled': PausedIcon,

  // TaskMaster status mappings (hyphen format)
  'pending': ToDoIcon,
  'in-progress': InProgressIcon,
  'review': ReviewIcon,
  'blocked': BlockedIcon,
  'deferred': DeferredIcon,

  // Additional aliases
  'to-do': ToDoIcon,
  'completed': CompletedIcon,
  'canceled': PausedIcon,
};

const iconMapById: Record<string, FC<React.SVGProps<SVGSVGElement>>> = {
  // Direct ID mappings for better performance
  'pending': ToDoIcon,
  'in-progress': InProgressIcon,
  'done': CompletedIcon,
  'cancelled': PausedIcon,
  'blocked': BlockedIcon,
  'deferred': DeferredIcon,
  'review': ReviewIcon,
  'backlog': BacklogIcon,
  'to-do': ToDoIcon,
  'todo': ToDoIcon,
  'completed': CompletedIcon,
  'canceled': PausedIcon,
};

export function getTaskStatusIcon(
  status: Pick<TaskStatus, 'id' | 'name'>
): FC<React.SVGProps<SVGSVGElement>> {
  // Try mapping by ID first (more reliable)
  const iconById = iconMapById[status.id];
  if (iconById) {
    return iconById;
  }

  // Fallback to mapping by name (for legacy compatibility)
  const iconByName = iconMapByName[status.name?.toLowerCase()];
  if (iconByName) {
    return iconByName;
  }

  // Default fallback
  return ToDoIcon;
}

export function useTaskStatusIcon(
  status: Pick<TaskStatus, 'id' | 'name'>
): FC<React.SVGProps<SVGSVGElement>> {
  return getTaskStatusIcon(status);
}
