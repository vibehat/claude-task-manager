'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import type { ActiveTasksPanelProps } from '../types/workingOnTypes';
import { cn } from '@/libs/client/utils';

const getStatusIcon = (status: string, hasAISession?: boolean) => {
  if (hasAISession) return '🤖';
  switch (status) {
    case 'in-progress':
      return '🔄';
    case 'pending':
      return '⏸️';
    default:
      return '📋';
  }
};

const getAgentColor = (agent?: string) => {
  switch (agent) {
    case 'claude':
      return 'bg-blue-500';
    case 'gpt':
      return 'bg-green-500';
    case 'gemini':
      return 'bg-purple-500';
    default:
      return 'bg-gray-500';
  }
};

const formatDuration = (duration: string) => {
  // Already formatted in dummy data (e.g., "8m 23s")
  return duration;
};

const getProgressColor = (progress: number, hasAISession?: boolean) => {
  if (hasAISession && progress > 0) return 'bg-gradient-to-r from-green-400 to-blue-500';
  if (progress > 80) return 'bg-green-500';
  if (progress > 50) return 'bg-yellow-500';
  if (progress > 20) return 'bg-orange-500';
  return 'bg-gray-400';
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
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-full px-6 pb-6">
          <div className="space-y-3">
            {tasks.map((task) => {
              const isSelected = selectedTaskId === task.id;
              const hasAISession = !!task.aiSession;
              const aiSession = task.aiSession;

              return (
                <div
                  key={task.id}
                  onClick={() => onTaskSelect(task.id)}
                  className={cn(
                    'p-3 rounded-lg border cursor-pointer transition-all duration-200',
                    'hover:shadow-md hover:border-primary/20',
                    isSelected && 'ring-2 ring-primary ring-offset-2 bg-primary/5',
                    hasAISession &&
                      'bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20'
                  )}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-lg" role="img" aria-label="task-status">
                        {getStatusIcon(task.status, hasAISession)}
                      </span>
                      <span className="font-medium text-sm truncate">
                        {task.id} {hasAISession && `[${aiSession!.agent.toUpperCase()}]`}
                      </span>
                    </div>
                    {hasAISession && (
                      <div
                        className={cn(
                          'w-2 h-2 rounded-full animate-pulse',
                          aiSession!.status === 'implementing' && 'bg-green-500',
                          aiSession!.status === 'reviewing' && 'bg-yellow-500',
                          aiSession!.status === 'blocked' && 'bg-red-500',
                          aiSession!.status === 'idle' && 'bg-gray-500'
                        )}
                      />
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{task.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={cn(
                          'h-2 rounded-full transition-all duration-300',
                          getProgressColor(task.progress, hasAISession)
                        )}
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Status Line */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      {hasAISession ? (
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300 text-xs px-1 py-0"
                        >
                          ⚡{' '}
                          {aiSession!.status === 'implementing'
                            ? 'Implementing'
                            : aiSession!.status === 'reviewing'
                              ? 'Reviewing'
                              : aiSession!.status === 'blocked'
                                ? 'Blocked'
                                : 'Ready to review'}
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs px-1 py-0">
                          🔄 {task.status === 'in-progress' ? 'Manual Progress' : 'Ready'}
                        </Badge>
                      )}
                    </div>
                    <span className="text-muted-foreground">
                      {hasAISession ? formatDuration(aiSession!.duration) : task.estimatedTime}
                    </span>
                  </div>

                  {/* AI Activity (if present) */}
                  {hasAISession && aiSession!.activities.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Last activity:</span>
                        <p className="truncate mt-1">
                          {aiSession!.activities[aiSession!.activities.length - 1].message}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Dependencies/Blockers Info */}
                  {task.blockedTasks.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                      <div className="text-xs text-orange-600 dark:text-orange-400">
                        <span className="font-medium">Blocking:</span> {task.blockedTasks.length}{' '}
                        task{task.blockedTasks.length > 1 ? 's' : ''}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
