'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, RefreshCw } from 'lucide-react';
import type { MobileTaskQueueBarProps } from '../../types';
import { ARIA_LABELS } from '../../utils/accessibility';

export function MobileTaskQueueBar({
  taskQueue,
  onTaskSelect,
  onAddTask,
  onRefresh,
}: MobileTaskQueueBarProps): React.JSX.Element {
  return (
    <section
      id="task-queue"
      className="xl:hidden"
      role="region"
      aria-label={ARIA_LABELS.taskQueue}
      aria-describedby="workflow-description"
    >
      <div id="workflow-description" className="sr-only">
        Current workflow with tasks in progress. Use arrow keys to navigate between tasks.
      </div>
      <Card className="bg-card border border-border">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-foreground">Current Workflow</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={onRefresh}
              aria-label={ARIA_LABELS.refreshWorkflow}
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>

          <nav
            role="navigation"
            aria-label={ARIA_LABELS.taskNavigation}
            className="flex items-center gap-2 overflow-x-auto pb-2"
          >
            {taskQueue.slice(0, 3).map((task, index) => (
              <Button
                key={task.id}
                variant={index === 0 ? 'default' : 'outline'}
                size="sm"
                className="flex-shrink-0 text-xs"
                onClick={() => onTaskSelect(task.id)}
                aria-label={ARIA_LABELS.taskCard(task.id, task.title)}
                aria-current={index === 0 ? 'page' : undefined}
              >
                <span className="mr-2" aria-hidden="true">
                  {task.indicator}
                </span>
                {index === 0 ? 'Now:' : index === 1 ? 'Next:' : 'Later:'}{' '}
                {task.title.substring(0, 15)}...
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={onAddTask}
              className="flex-shrink-0"
              aria-label={ARIA_LABELS.addTask}
            >
              <Plus className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">Add Task</span>
            </Button>
          </nav>
        </CardContent>
      </Card>
    </section>
  );
}

export default MobileTaskQueueBar;
