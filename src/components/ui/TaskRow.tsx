'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import {
  InProgressIcon,
  CompletedIcon,
  ToDoIcon,
  PausedIcon,
  HighPriorityIcon,
  MediumPriorityIcon,
  LowPriorityIcon,
  NoPriorityIcon,
} from '@/components/icons';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/libs/client/utils';

export interface TaskRowItem {
  id: string;
  title: string;
  status: 'working' | 'ready' | 'queued' | 'blocked';
  priority: 'high' | 'medium' | 'low' | 'none';
  progress?: number;
  indicator?: string;
}

interface TaskRowProps {
  task: TaskRowItem;
  isSelected?: boolean;
  onClick: () => void;
  className?: string;
}

function getStatusConfig(status: TaskRowItem['status']) {
  switch (status) {
    case 'working':
      return {
        color: 'text-blue-600 dark:text-blue-400',
        bgColor: 'bg-blue-500',
        icon: InProgressIcon,
        animate: 'animate-pulse',
      };
    case 'ready':
      return {
        color: 'text-green-600 dark:text-green-400',
        bgColor: 'bg-green-500',
        icon: CompletedIcon,
        animate: '',
      };
    case 'queued':
      return {
        color: 'text-gray-600 dark:text-gray-400',
        bgColor: 'bg-gray-400',
        icon: ToDoIcon,
        animate: '',
      };
    case 'blocked':
      return {
        color: 'text-amber-600 dark:text-amber-400',
        bgColor: 'bg-amber-500',
        icon: PausedIcon,
        animate: '',
      };
  }
}

function getPriorityIcon(priority: string) {
  switch (priority) {
    case 'high':
      return HighPriorityIcon;
    case 'medium':
      return MediumPriorityIcon;
    case 'low':
      return LowPriorityIcon;
    default:
      return NoPriorityIcon;
  }
}

export function TaskRow({
  task,
  isSelected = false,
  onClick,
  className = '',
}: TaskRowProps): React.JSX.Element {
  const statusConfig = getStatusConfig(task.status);
  const StatusIcon = statusConfig.icon;
  const PriorityIcon = getPriorityIcon(task.priority);

  return (
    <div
      className={cn(
        'group relative flex items-center gap-3 p-3 cursor-pointer transition-colors border-b border-border/30 last:border-b-0',
        'hover:bg-muted/50',
        isSelected && 'bg-accent ring-1 ring-primary/20',
        task.status === 'working' && 'bg-blue-50/30 dark:bg-blue-950/20',
        className
      )}
      onClick={onClick}
    >
      {/* Status Indicator */}
      <div className="flex items-center gap-2 min-w-[50px]">
        <StatusIcon className={cn('w-4 h-4', statusConfig.color, statusConfig.animate)} />
        <span className="text-xs font-mono text-muted-foreground">{task.id}</span>
      </div>

      {/* Task Info */}
      <div className="flex-1 min-w-0">
        <h4
          className={cn(
            'text-sm font-medium text-foreground truncate',
            task.status === 'working' && 'font-semibold'
          )}
        >
          {task.title}
        </h4>
        {task.progress !== undefined && (
          <div className="flex items-center gap-2 mt-1">
            <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className={cn('h-full transition-all rounded-full', statusConfig.bgColor)}
                style={{ width: `${task.progress}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground">{task.progress}%</span>
          </div>
        )}
      </div>

      {/* Priority & Action */}
      <div className="flex items-center gap-2">
        <PriorityIcon className="w-4 h-4" />
        <ChevronRight
          className={cn(
            'w-4 h-4 text-muted-foreground transition-transform',
            'group-hover:translate-x-0.5',
            isSelected && 'text-primary'
          )}
        />
      </div>
    </div>
  );
}

export default TaskRow;
