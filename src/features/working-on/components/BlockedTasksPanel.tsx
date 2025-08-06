'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { BlockedTasksPanelProps } from '../types/workingOnTypes';
import { cn } from '@/libs/client/utils';

const formatEstimatedTime = (time: string) => {
  // Convert time estimates to more readable format
  return time.replace(/(\d+)-(\d+)\s*(minutes?|hours?|mins?|hrs?)/, (match, start, end, unit) => {
    if (unit.startsWith('h')) return `~${end}h`;
    return `~${end}m`;
  });
};

const getDependencyStatus = (dependencyId: string) => {
  // Mock dependency status - in real app, this would come from store
  const mockStatuses: Record<string, { status: string; progress: number }> = {
    '28.1': { status: 'done', progress: 100 },
    '28.2': { status: 'in-progress', progress: 60 },
    '28.3': { status: 'pending', progress: 0 },
    '29.1': { status: 'pending', progress: 0 },
  };

  return mockStatuses[dependencyId] || { status: 'unknown', progress: 0 };
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'done':
      return '✅';
    case 'in-progress':
      return '🔄';
    case 'pending':
      return '⏳';
    case 'blocked':
      return '🚫';
    default:
      return '❓';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'done':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
    case 'blocked':
      return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
  }
};

export function BlockedTasksPanel({ blockedTasks, onTaskSelect }: BlockedTasksPanelProps) {
  if (blockedTasks.length === 0) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Blocked Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="text-4xl mb-2">🎉</div>
            <p className="text-muted-foreground text-sm">No blocked tasks</p>
            <p className="text-muted-foreground text-xs mt-1">All tasks are ready to work on</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          Blocked Tasks
          <Badge variant="destructive" className="text-xs">
            {blockedTasks.length}
          </Badge>
        </CardTitle>
        <p className="text-sm text-muted-foreground">Tasks waiting on dependencies</p>
      </CardHeader>

      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-full px-6 pb-6">
          <div className="space-y-3">
            {blockedTasks.map((task) => {
              const primaryDependency = task.dependencies[0];
              const depStatus = primaryDependency ? getDependencyStatus(primaryDependency) : null;

              return (
                <div
                  key={task.id}
                  onClick={() => onTaskSelect(task.id)}
                  className={cn(
                    'p-3 rounded-lg border cursor-pointer transition-all duration-200',
                    'bg-red-50/50 dark:bg-red-900/5 border-red-200 dark:border-red-800',
                    'hover:shadow-md hover:bg-red-50 dark:hover:bg-red-900/10'
                  )}
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" role="img" aria-label="blocked">
                      🚫
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{task.id}</span>
                      <span className="text-sm">→</span>
                      <span className="font-medium text-sm text-muted-foreground">
                        {task.dependencies.join(', ')}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-medium text-sm mb-2 leading-tight">{task.title}</h4>

                  {/* Status Row */}
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className={getStatusColor(task.status)}>
                        🔒 {task.status}
                      </Badge>
                      <Badge
                        className={cn(
                          'text-xs',
                          task.priority === 'high' &&
                            'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300',
                          task.priority === 'medium' &&
                            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300',
                          task.priority === 'low' &&
                            'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                        )}
                      >
                        {task.priority}
                      </Badge>
                    </div>
                    <div className="text-muted-foreground">
                      ETA: {formatEstimatedTime(task.estimatedTime)}
                    </div>
                  </div>

                  {/* Dependency Status */}
                  {primaryDependency && depStatus && (
                    <div className="p-2 bg-background/80 rounded border mb-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span>Waiting for: Task {primaryDependency}</span>
                          <Badge
                            variant="secondary"
                            className={cn('text-xs px-1 py-0', getStatusColor(depStatus.status))}
                          >
                            {getStatusIcon(depStatus.status)} {depStatus.status}
                          </Badge>
                        </div>
                        {depStatus.progress > 0 && (
                          <span className="text-muted-foreground">{depStatus.progress}%</span>
                        )}
                      </div>

                      {depStatus.progress > 0 && (
                        <div className="mt-1">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                            <div
                              className={cn(
                                'h-1 rounded-full transition-all duration-300',
                                depStatus.status === 'in-progress' ? 'bg-blue-500' : 'bg-green-500'
                              )}
                              style={{ width: `${depStatus.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Blocker Description */}
                  <div className="text-xs text-red-700 dark:text-red-300 mb-3">
                    <span className="font-medium">Blocker:</span>{' '}
                    {task.id === '28.3'
                      ? 'JWT validation must be complete before endpoints'
                      : task.id === '28.4'
                        ? 'JWT validation must be complete before refresh tokens'
                        : `Depends on task ${primaryDependency} completion`}
                  </div>

                  {/* Context Quality */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <div className="flex items-center gap-1">
                      <span>Context:</span>
                      <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span
                            key={i}
                            className={
                              i < task.contextQuality ? 'text-yellow-400' : 'text-gray-300'
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-muted-foreground">
                      Updated{' '}
                      {new Date(task.updatedAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle prep context action
                      }}
                      className="text-xs"
                    >
                      Prep Context
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle research action
                      }}
                      className="text-xs"
                    >
                      Research
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle view blocker action
                        onTaskSelect(primaryDependency || '');
                      }}
                      className="text-xs"
                    >
                      View Blocker
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle skip/defer action
                      }}
                      className="text-xs"
                    >
                      Skip/Defer
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="px-6 py-3 border-t bg-muted/30">
          <div className="text-xs text-muted-foreground text-center">
            <div className="flex items-center justify-center gap-2">
              <span>Auto-unblock when dependencies done</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
