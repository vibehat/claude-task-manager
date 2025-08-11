'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, ChevronRight, Layers } from 'lucide-react';
import { cn } from '@/libs/client/utils';
import type { MyTasksSectionProps, TaskQueueItem } from '../../types';

// Task Row Component
function TaskRow({
  task,
  isSelected,
  onClick,
}: {
  task: TaskQueueItem;
  isSelected: boolean;
  onClick: () => void;
}): React.JSX.Element {
  const getStatusConfig = (
    status: TaskQueueItem['status'],
    indicator: TaskQueueItem['indicator']
  ) => {
    switch (status) {
      case 'working':
        return {
          color: 'text-blue-600 dark:text-blue-400',
          bgColor: 'bg-blue-500',
          indicator: '●',
          animate: 'animate-pulse',
        };
      case 'ready':
        return {
          color: 'text-green-600 dark:text-green-400',
          bgColor: 'bg-green-500',
          indicator: '→',
          animate: '',
        };
      case 'queued':
        return {
          color: 'text-gray-600 dark:text-gray-400',
          bgColor: 'bg-gray-400',
          indicator: '...',
          animate: '',
        };
      case 'blocked':
        return {
          color: 'text-amber-600 dark:text-amber-400',
          bgColor: 'bg-amber-500',
          indicator: '⏸',
          animate: '',
        };
    }
  };

  const statusConfig = getStatusConfig(task.status, task.indicator);

  const getPriorityIndicator = (priority: string) => {
    switch (priority) {
      case 'high':
        return '🔴';
      case 'medium':
        return '🟡';
      case 'low':
        return '🟢';
      default:
        return '⚪';
    }
  };

  return (
    <div
      className={cn(
        'group relative flex items-center gap-3 p-3 cursor-pointer transition-colors border-b border-border/30 last:border-b-0',
        'hover:bg-muted/50',
        isSelected && 'bg-accent ring-1 ring-primary/20',
        task.status === 'working' && 'bg-blue-50/30 dark:bg-blue-950/20'
      )}
      onClick={onClick}
    >
      {/* Status Indicator */}
      <div className="flex items-center gap-2 min-w-[50px]">
        <span className={cn('text-base font-bold', statusConfig.color, statusConfig.animate)}>
          {statusConfig.indicator}
        </span>
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
        <span className="text-sm">{getPriorityIndicator(task.priority)}</span>
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

export function TaskQueue({
  taskQueue,
  selectedTaskId,
  onTaskSelect,
  onAddTask,
}: MyTasksSectionProps): React.JSX.Element {
  const hasTasks = taskQueue.length > 0;

  // Sort tasks by logical priority: working → ready → queued → blocked
  const statusOrder = { working: 0, ready: 1, queued: 2, blocked: 3 };
  const sortedTasks = [...taskQueue].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

  // Get status counts for summary
  const statusCounts = taskQueue.reduce(
    (acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <Card className="bg-card border border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">Task Queue</CardTitle>
          <Button onClick={onAddTask} size="sm" variant="ghost" className="h-8 w-8 p-0">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Status Summary */}
        {hasTasks && (
          <div className="text-sm text-muted-foreground">
            {statusCounts.working && `${statusCounts.working} working`}
            {statusCounts.working &&
              (statusCounts.ready || statusCounts.queued || statusCounts.blocked) &&
              ' • '}
            {statusCounts.ready && `${statusCounts.ready} ready`}
            {statusCounts.ready && (statusCounts.queued || statusCounts.blocked) && ' • '}
            {statusCounts.queued && `${statusCounts.queued} queued`}
            {statusCounts.queued && statusCounts.blocked && ' • '}
            {statusCounts.blocked && `${statusCounts.blocked} blocked`}
          </div>
        )}
      </CardHeader>

      <CardContent className="p-0">
        {!hasTasks ? (
          <div className="text-center py-8 text-muted-foreground">
            <div className="w-8 h-8 mx-auto mb-2 bg-muted rounded-full flex items-center justify-center">
              <Layers className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-sm mb-2">No tasks in queue</p>
            <Button onClick={onAddTask} size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-1" />
              Add Task
            </Button>
          </div>
        ) : (
          <div className="max-h-[400px] overflow-y-auto">
            {sortedTasks.map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                isSelected={selectedTaskId === task.id}
                onClick={() => onTaskSelect(task.id)}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Keep the old export for compatibility
export const MyTasksSection = TaskQueue;
export default TaskQueue;
