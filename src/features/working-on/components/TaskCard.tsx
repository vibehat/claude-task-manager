'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import type { TaskCardProps } from '../types/workingOnTypes';
import { cn } from '@/libs/client/utils';

// Icons (using emoji for now, can be replaced with proper icons)
const getStatusIcon = (status: string) => {
  switch (status) {
    case 'in-progress':
      return '🤖';
    case 'pending':
      return '📋';
    case 'blocked':
      return '🚫';
    case 'done':
      return '✅';
    default:
      return '📋';
  }
};

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case 'high':
      return '🔴';
    case 'medium':
      return '🟡';
    case 'low':
      return '🟢';
    default:
      return '🟡';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
    case 'low':
      return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
  }
};

const getAgentBadge = (agent?: string) => {
  if (!agent) return null;

  const agentColors = {
    claude: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
    gpt: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
    gemini: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300',
  };

  return (
    <Badge className={agentColors[agent as keyof typeof agentColors] || agentColors.claude}>
      {agent.toUpperCase()}
    </Badge>
  );
};

const renderStars = (rating: number, max = 5) => {
  return Array.from({ length: max }, (_, i) => (
    <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
      ★
    </span>
  ));
};

export function TaskCard({ task, variant, onAction }: TaskCardProps) {
  const isActive = variant === 'active';
  const isBlocked = variant === 'blocked';
  const isIdle = variant === 'idle';

  return (
    <Card
      className={cn(
        'transition-all duration-200 hover:shadow-md',
        isActive && 'ring-2 ring-blue-200 dark:ring-blue-800',
        isBlocked && 'ring-2 ring-red-200 dark:ring-red-800 opacity-75',
        'cursor-pointer'
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xl" role="img" aria-label="status">
              {getStatusIcon(task.status)}
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold text-sm leading-tight truncate">
                Task {task.id}: {task.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{task.description}</p>
            </div>
          </div>
          {task.aiSession && getAgentBadge(task.aiSession.agent)}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Status Row */}
        <div className="flex items-center justify-between text-xs mb-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span>Status:</span>
              <Badge
                variant="secondary"
                className={cn(
                  isActive &&
                    'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
                  isBlocked && 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300',
                  isIdle && 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300'
                )}
              >
                {isActive && '🟢'} {isBlocked && '🔒'} {isIdle && '⏸️'} {task.status}
              </Badge>
            </div>

            <div className="flex items-center gap-1">
              <span>{getPriorityIcon(task.priority)}</span>
              <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
            </div>
          </div>

          <div className="text-right">
            <div className="font-medium">{task.progress}%</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <Progress
            value={task.progress}
            className="h-2"
            // Add different colors based on variant
          />
        </div>

        {/* Variant-specific content */}
        {isActive && task.aiSession && (
          <div className="mb-3 p-2 bg-muted rounded-md">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="font-medium">AI Session: {task.aiSession.status}</span>
              <span className="text-muted-foreground">{task.aiSession.duration}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Last:{' '}
              {task.aiSession.activities[task.aiSession.activities.length - 1]?.message ||
                'No activity'}
            </p>
          </div>
        )}

        {isBlocked && task.dependencies.length > 0 && (
          <div className="mb-3 p-2 bg-red-50 dark:bg-red-900/10 rounded-md">
            <p className="text-xs text-red-700 dark:text-red-300">
              <span className="font-medium">Waiting for:</span> Task {task.dependencies.join(', ')}
            </p>
            <p className="text-xs text-muted-foreground mt-1">ETA: {task.estimatedTime}</p>
          </div>
        )}

        {isIdle && (
          <div className="mb-3 p-2 bg-blue-50 dark:bg-blue-900/10 rounded-md">
            <div className="flex items-center justify-between text-xs">
              <span className="text-blue-700 dark:text-blue-300">
                Ready to start • {task.estimatedTime}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-xs">Context:</span>
                <span className="text-xs">{renderStars(task.contextQuality)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Context Quality (for all variants) */}
        <div className="flex items-center justify-between text-xs mb-3">
          <div className="flex items-center gap-2">
            <span>Context Quality:</span>
            <div className="flex items-center">
              {renderStars(task.contextQuality)}
              <span className="ml-1">({task.contextQuality}/5)</span>
            </div>
          </div>
          <div className="text-muted-foreground">
            Updated{' '}
            {new Date(task.updatedAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          {isActive && (
            <>
              <Button size="sm" onClick={() => onAction('continue', task.id)} className="text-xs">
                Continue AI
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onAction('view-chat', task.id)}
                className="text-xs"
              >
                View Chat
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onAction('add-context', task.id)}
                className="text-xs"
              >
                Add Context
              </Button>
            </>
          )}

          {isIdle && (
            <>
              <Button size="sm" onClick={() => onAction('start-ai', task.id)} className="text-xs">
                Start AI
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onAction('research', task.id)}
                className="text-xs"
              >
                Research
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onAction('expand', task.id)}
                className="text-xs"
              >
                Expand Task
              </Button>
            </>
          )}

          {isBlocked && (
            <>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onAction('prep-context', task.id)}
                className="text-xs"
              >
                Prep Context
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onAction('research', task.id)}
                className="text-xs"
              >
                Research
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onAction('view-blocker', task.id)}
                className="text-xs"
              >
                View Blocker
              </Button>
            </>
          )}

          <Button
            size="sm"
            variant="ghost"
            onClick={() => onAction('view-details', task.id)}
            className="text-xs"
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
