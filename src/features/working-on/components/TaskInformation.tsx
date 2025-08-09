'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import type { Task } from '../types/workingOnTypes';
import { cn } from '@/libs/client/utils';
import Link from 'next/link';

interface TaskInformationProps {
  task: Task;
}

const getPriorityIcon = (priority: string) => {
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

const formatTimeAgo = (timestamp: string) => {
  const now = new Date();
  const time = new Date(timestamp);
  const diffMs = now.getTime() - time.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffMinutes < 1) return 'just now';
  if (diffMinutes < 60) return `${diffMinutes}m ago`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  return time.toLocaleDateString();
};

const renderStars = (rating: number, max = 5) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={cn('text-lg', i < rating ? 'text-amber-400' : 'text-muted-foreground/40')}
        >
          ★
        </span>
      ))}
      <span className="text-sm text-muted-foreground ml-1">
        ({rating}/{max})
      </span>
    </div>
  );
};

export function TaskInformation({ task }: TaskInformationProps) {
  const hasAISession = !!task.aiSession;

  return (
    <div className="space-y-6">
      {/* Main Task Information Card */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-3">
            <span className="text-3xl" role="img" aria-label="task-status">
              {getStatusIcon(task.status, hasAISession)}
            </span>
            Task {task.id}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Title and Description */}
          <div>
            <h1 className="text-xl font-semibold mb-3 leading-relaxed">{task.title}</h1>
            <p className="text-muted-foreground text-base leading-relaxed">{task.description}</p>
          </div>

          {/* Key Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Status & Priority */}
            <div className="space-y-4">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Status</span>
                <div className="flex items-center gap-2 mt-1">
                  <Badge
                    variant="secondary"
                    className={cn(
                      'text-sm px-3 py-1',
                      task.status === 'in-progress' &&
                        'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
                      task.status === 'done' &&
                        'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
                      task.status === 'blocked' &&
                        'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                    )}
                  >
                    {task.status.toUpperCase()}
                  </Badge>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-muted-foreground">Priority</span>
                <div className="flex items-center gap-2 mt-1">
                  <Badge
                    variant="secondary"
                    className={cn(
                      'text-sm px-3 py-1',
                      task.priority === 'high' &&
                        'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300',
                      task.priority === 'medium' &&
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300',
                      task.priority === 'low' &&
                        'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
                    )}
                  >
                    {getPriorityIcon(task.priority)} {task.priority.toUpperCase()}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Progress & Time */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Progress</span>
                  <span className="text-lg font-bold">{task.progress}%</span>
                </div>
                <Progress value={task.progress} className="h-3" />
              </div>

              <div>
                <span className="text-sm font-medium text-muted-foreground">Estimated Time</span>
                <div className="text-base font-medium mt-1">{task.estimatedTime}</div>
              </div>

              <div>
                <span className="text-sm font-medium text-muted-foreground">Last Updated</span>
                <div className="text-base font-medium mt-1">{formatTimeAgo(task.updatedAt)}</div>
              </div>
            </div>
          </div>

          {/* Dependencies */}
          {task.dependencies.length > 0 && (
            <div>
              <span className="text-sm font-medium text-muted-foreground mb-2 block">
                Dependencies
              </span>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 text-lg">✅</span>
                <div className="space-x-2">
                  {task.dependencies.map((depId) => (
                    <Link
                      key={depId}
                      href={`/workspace/task/${depId}`}
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                    >
                      Task {depId}
                    </Link>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(Complete)</span>
              </div>
            </div>
          )}

          {/* Blocked Tasks */}
          {task.blockedTasks.length > 0 && (
            <div>
              <span className="text-sm font-medium text-muted-foreground mb-2 block">
                Blocking Tasks
              </span>
              <div className="flex items-center gap-2">
                <span className="text-orange-600 dark:text-orange-400 text-lg">⏸️</span>
                <div className="space-x-2">
                  {task.blockedTasks.map((blockedId) => (
                    <Link
                      key={blockedId}
                      href={`/workspace/task/${blockedId}`}
                      className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                    >
                      Task {blockedId}
                    </Link>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({task.blockedTasks.length} task{task.blockedTasks.length > 1 ? 's' : ''} waiting)
                </span>
              </div>
            </div>
          )}

          {/* Tags */}
          {task.tags.length > 0 && (
            <div>
              <span className="text-sm font-medium text-muted-foreground mb-2 block">Tags</span>
              <div className="flex items-center gap-2 flex-wrap">
                {task.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Context Quality Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Context Quality</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {renderStars(task.contextQuality)}

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></span>
                <span className="text-sm">Task requirements documented</span>
                <span className="ml-auto text-emerald-600 dark:text-emerald-400">✅</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></span>
                <span className="text-sm">Related files identified</span>
                <span className="ml-auto text-emerald-600 dark:text-emerald-400">✅</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></span>
                <span className="text-sm">Dependencies mapped</span>
                <span className="ml-auto text-emerald-600 dark:text-emerald-400">✅</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"></span>
                <span className="text-sm">Testing strategy defined</span>
                <span className="ml-auto text-emerald-600 dark:text-emerald-400">✅</span>
              </div>
              {task.contextQuality < 5 && (
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-amber-500 rounded-full flex-shrink-0"></span>
                  <span className="text-sm">Some edge cases need review</span>
                  <span className="ml-auto text-amber-600 dark:text-amber-400">⚠️</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
