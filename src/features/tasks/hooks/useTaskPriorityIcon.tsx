import type { FC } from 'react';
import type { TaskPriority } from '@/libs/client/types';
import {
  NoPriorityIcon,
  UrgentPriorityIcon,
  HighPriorityIcon,
  MediumPriorityIcon,
  LowPriorityIcon,
} from '@/components/icons/priority-icons';

const iconMapByName: Record<string, FC<React.SVGProps<SVGSVGElement>>> = {
  'no priority': NoPriorityIcon,
  'urgent': UrgentPriorityIcon,
  'high': HighPriorityIcon,
  'medium': MediumPriorityIcon,
  'low': LowPriorityIcon,
  'none': NoPriorityIcon,
};

const iconMapById: Record<string, FC<React.SVGProps<SVGSVGElement>>> = {
  'no-priority': NoPriorityIcon,
  'urgent': UrgentPriorityIcon,
  'high': HighPriorityIcon,
  'medium': MediumPriorityIcon,
  'low': LowPriorityIcon,
  'none': NoPriorityIcon,
};

export function getTaskPriorityIcon(
  priority: Pick<TaskPriority, 'id' | 'name'>
): FC<React.SVGProps<SVGSVGElement>> {
  // Try mapping by ID first (more reliable)
  const iconById = iconMapById[priority.id];
  if (iconById) {
    return iconById;
  }

  // Fallback to mapping by name (for legacy compatibility)
  const iconByName = iconMapByName[priority.name?.toLowerCase()];
  if (iconByName) {
    return iconByName;
  }

  // Default fallback
  return NoPriorityIcon;
}

export function useTaskPriorityIcon(
  priority: Pick<TaskPriority, 'id' | 'name'>
): FC<React.SVGProps<SVGSVGElement>> {
  return getTaskPriorityIcon(priority);
}
