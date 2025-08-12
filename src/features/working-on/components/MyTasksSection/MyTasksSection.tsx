'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EmptyTasksState } from '@/components/empty-states';
import { TaskRow, type TaskRowItem } from '@/components/ui/TaskRow';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus } from 'lucide-react';
import { cn } from '@/libs/client/utils';
import type { MyTasksSectionProps, TaskQueueItem } from '../../types';

// Helper function to convert TaskQueueItem to TaskRowItem
function convertToTaskRowItem(task: TaskQueueItem): TaskRowItem {
  return {
    id: task.id.toString(),
    title: task.title,
    status: task.status,
    priority: (task.priority?.toLowerCase() || 'none') as TaskRowItem['priority'],
    progress: task.progress,
    indicator: task.indicator,
  };
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
          <EmptyTasksState
            variant="no-tasks"
            title="No tasks in queue"
            description="Add your first task to get started"
            showCreateButton={true}
          />
        ) : (
          <ScrollArea className="max-h-[400px]">
            {sortedTasks.map((task) => (
              <TaskRow
                key={task.id}
                task={convertToTaskRowItem(task)}
                isSelected={selectedTaskId === task.id}
                onClick={() => onTaskSelect(task.id)}
              />
            ))}
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}

// Keep the old export for compatibility
export const MyTasksSection = TaskQueue;
export default TaskQueue;
