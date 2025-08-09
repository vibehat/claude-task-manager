'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import type { ActiveTasksPanelProps } from '../types/workingOnTypes';
import { cn } from '@/libs/client/utils';
import Link from 'next/link';

const getStatusIcon = (status: string, hasAISession?: boolean) => {
  if (hasAISession) return '🤖';
  switch (status) {
    case 'in-progress':
      return '🔄';
    case 'pending':
      return '⏸️';
    case 'done':
      return '✅';
    case 'blocked':
      return '🚫';
    default:
      return '📋';
  }
};

export function ActiveTasksPanel({ tasks, onTaskSelect, selectedTaskId }: ActiveTasksPanelProps) {
  if (tasks.length === 0) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Active Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <p className="text-muted-foreground text-sm">No active tasks</p>
            <p className="text-muted-foreground text-xs mt-1">
              Start working on a task to see it here
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          Active Tasks
          <Badge variant="secondary" className="text-xs">
            {tasks.length}
          </Badge>
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">Click task to view full details</p>
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-full px-6 pb-6">
          <div className="space-y-2">
            {tasks.map((task) => {
              const isSelected = selectedTaskId === task.id;
              const hasAISession = !!task.aiSession;
              const aiSession = task.aiSession;

              return (
                <Link
                  key={task.id}
                  href={`/workspace/task/${task.id}`}
                  className={cn(
                    'block p-3 rounded-lg border cursor-pointer transition-all duration-200',
                    'hover:shadow-md hover:border-primary/20 hover:bg-accent/50',
                    isSelected && 'ring-2 ring-primary ring-offset-2 bg-primary/5'
                  )}
                  onClick={() => onTaskSelect(task.id)}
                >
                  {/* Simple Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <span className="text-xl flex-shrink-0" role="img" aria-label="task-status">
                        {getStatusIcon(task.status, hasAISession)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{task.id}</span>
                          {hasAISession && (
                            <Badge
                              variant="secondary"
                              className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
                            >
                              {aiSession!.agent.toUpperCase()}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate mt-0.5">
                          {task.title}
                        </p>
                      </div>
                    </div>

                    {/* Progress Badge */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Badge
                        variant="outline"
                        className={cn(
                          'text-xs px-2 py-1',
                          task.progress >= 80 &&
                            'bg-emerald-50 text-emerald-700 border-emerald-200',
                          task.progress >= 50 &&
                            task.progress < 80 &&
                            'bg-amber-50 text-amber-700 border-amber-200',
                          task.progress < 50 && 'bg-gray-50 text-gray-700 border-gray-200'
                        )}
                      >
                        {task.progress}%
                      </Badge>
                      {hasAISession && (
                        <div
                          className={cn(
                            'w-2 h-2 rounded-full animate-pulse flex-shrink-0',
                            aiSession!.status === 'implementing' && 'bg-emerald-500',
                            aiSession!.status === 'reviewing' && 'bg-amber-500',
                            aiSession!.status === 'blocked' && 'bg-red-500',
                            aiSession!.status === 'idle' && 'bg-gray-400'
                          )}
                        />
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </ScrollArea>

        {/* Footer with navigation hint */}
        <div className="px-6 py-3 border-t bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            💡 Click any task to view detailed information and actions
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
