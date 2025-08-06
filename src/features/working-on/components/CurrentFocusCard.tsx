'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import type { CurrentFocusCardProps } from '../types/workingOnTypes';
import { cn } from '@/libs/client/utils';

const getAIStatusColor = (status?: string) => {
  switch (status) {
    case 'implementing':
      return 'bg-emerald-500';
    case 'reviewing':
      return 'bg-amber-500';
    case 'blocked':
      return 'bg-destructive';
    case 'idle':
      return 'bg-muted-foreground';
    default:
      return 'bg-muted-foreground/60';
  }
};

const getAIStatusText = (status?: string) => {
  switch (status) {
    case 'implementing':
      return '🟢 Implementing';
    case 'reviewing':
      return '🟡 Reviewing';
    case 'blocked':
      return '🔴 Blocked';
    case 'idle':
      return '⚪ Idle';
    default:
      return '⚪ No Session';
  }
};

const renderStars = (rating: number, max = 5, interactive = false) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={cn(
            'text-lg transition-colors',
            i < rating ? 'text-amber-400' : 'text-muted-foreground/40',
            interactive && 'cursor-pointer hover:text-amber-300'
          )}
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

export function CurrentFocusCard({ task, aiSession, onAction }: CurrentFocusCardProps) {
  const hasAISession = !!aiSession;
  const lastActivity = aiSession?.activities[aiSession.activities.length - 1];

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              🎯 Current Focus: Task {task.id}
            </CardTitle>
            <h2 className="text-lg text-muted-foreground mt-1 leading-tight">{task.title}</h2>
          </div>
          <Badge
            variant="secondary"
            className={cn(
              'text-xs px-2 py-1',
              task.priority === 'high' &&
                'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300',
              task.priority === 'medium' &&
                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300',
              task.priority === 'low' &&
                'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
            )}
          >
            {task.priority.toUpperCase()} PRIORITY
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        {/* Description */}
        <div className="mb-4">
          <p className="text-muted-foreground leading-relaxed">{task.description}</p>
        </div>

        {/* AI Status Section */}
        {hasAISession ? (
          <div className="mb-4 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/10 dark:to-blue-900/10 rounded-lg border border-border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    'w-3 h-3 rounded-full animate-pulse',
                    getAIStatusColor(aiSession.status)
                  )}
                />
                <span className="font-semibold">
                  AI Status: {getAIStatusText(aiSession.status)}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">({aiSession.duration})</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <span className="text-sm font-medium">Agent:</span>
                <div className="mt-1">
                  <Badge
                    className={cn(
                      'text-xs',
                      aiSession.agent === 'claude' &&
                        'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
                      aiSession.agent === 'gpt' &&
                        'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
                      aiSession.agent === 'gemini' &&
                        'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300'
                    )}
                  >
                    {aiSession.agent.toUpperCase()} Code v4.0
                  </Badge>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium">Last Activity:</span>
                <div className="text-sm text-muted-foreground mt-1">
                  {lastActivity ? formatTimeAgo(lastActivity.timestamp) : 'No activity'}
                </div>
              </div>
            </div>

            {lastActivity && (
              <div className="p-3 bg-card/60 rounded border border-border">
                <p className="text-sm">
                  <span className="font-medium">Latest:</span> {lastActivity.message}
                </p>
                {lastActivity.metadata && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    {lastActivity.metadata.filesChanged && (
                      <span>Files: {lastActivity.metadata.filesChanged.join(', ')} </span>
                    )}
                    {lastActivity.metadata.linesAdded && (
                      <span>(+{lastActivity.metadata.linesAdded} lines)</span>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="mb-4 p-4 bg-muted rounded-lg border">
            <div className="text-center">
              <div className="text-2xl mb-2">🤖</div>
              <p className="font-medium">No AI Session Active</p>
              <p className="text-sm text-muted-foreground mt-1">Ready to start AI implementation</p>
            </div>
          </div>
        )}

        {/* Progress Section */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Progress</span>
            <span className="text-lg font-bold">{task.progress}%</span>
          </div>
          <Progress value={task.progress} className="h-3 mb-2" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Estimated: {task.estimatedTime}</span>
            <span>Updated: {formatTimeAgo(task.updatedAt)}</span>
          </div>
        </div>

        {/* Context Quality */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Context Quality</span>
          </div>
          {renderStars(task.contextQuality)}
          <div className="mt-2 text-sm text-muted-foreground">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>Task requirements clear</span>
                <span className="ml-auto">✅</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>Related files identified</span>
                <span className="ml-auto">✅</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>Dependencies mapped</span>
                <span className="ml-auto">✅</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>Testing strategy defined</span>
                <span className="ml-auto">✅</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <span>Architecture patterns could be clearer</span>
                <span className="ml-auto">⚠️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dependencies */}
        {task.dependencies.length > 0 && (
          <div className="mb-4">
            <span className="font-medium">Dependencies:</span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400">✅</span>
              <span className="text-sm">Task {task.dependencies.join(', ')} Complete</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => onAction('continue')}
              className="w-full"
              disabled={!hasAISession}
            >
              {hasAISession ? 'Continue AI' : 'Start AI'}
              <br />
              <span className="text-xs opacity-80">
                {hasAISession ? 'Resume Claude' : 'Begin Implementation'}
              </span>
            </Button>
            <Button variant="outline" onClick={() => onAction('switch-context')} className="w-full">
              Switch Context
              <br />
              <span className="text-xs opacity-80">Prepare Different Task</span>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onAction('view-context')}
              className="text-xs"
            >
              📖 View Context
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onAction('research')}
              className="text-xs"
            >
              🔍 Research
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onAction('handoff')}
              className="text-xs"
            >
              🚀 Handoff
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
