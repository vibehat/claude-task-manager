'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { QuickActionsPanelProps } from '../types/workingOnTypes';
import { cn } from '@/libs/client/utils';

interface QuickAction {
  id: string;
  icon: string;
  label: string;
  description: string;
  action: string;
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
}

const quickActions: QuickAction[] = [
  {
    id: 'research',
    icon: '💭',
    label: 'Research',
    description: 'Get context',
    action: 'research',
    className:
      'bg-violet-50 hover:bg-violet-100 dark:bg-violet-900/10 dark:hover:bg-violet-900/20 border-violet-200 dark:border-violet-800',
  },
  {
    id: 'add-task',
    icon: '🎯',
    label: 'Add Task',
    description: 'From description',
    action: 'add-task',
    className:
      'bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/10 dark:hover:bg-blue-900/20 border-blue-200 dark:border-blue-800',
  },
  {
    id: 'sync-tasks',
    icon: '🔄',
    label: 'Sync Tasks',
    description: 'Task Master CLI',
    action: 'sync-tasks',
    className:
      'bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-900/10 dark:hover:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800',
  },
  {
    id: 'copy-context',
    icon: '📋',
    label: 'Copy Context',
    description: 'For manual use',
    action: 'copy-context',
    className:
      'bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/10 dark:hover:bg-orange-900/20 border-orange-200 dark:border-orange-800',
  },
  {
    id: 'command-palette',
    icon: '⌘',
    label: 'Commands',
    description: 'Natural language',
    action: 'command-palette',
    className: 'bg-muted hover:bg-muted/80 border-border',
  },
  {
    id: 'view-all',
    icon: '📊',
    label: 'View All',
    description: 'Task overview',
    action: 'view-all',
    className:
      'bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/10 dark:hover:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800',
  },
];

export function QuickActionsPanel({ onAction }: QuickActionsPanelProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Button
              key={action.id}
              variant="outline"
              onClick={() => onAction(action.action)}
              className={cn(
                'h-auto p-4 flex flex-col items-center gap-2 text-left transition-all duration-200',
                'hover:shadow-md hover:scale-105',
                action.className
              )}
            >
              <div className="text-2xl" role="img" aria-label={action.label}>
                {action.icon}
              </div>
              <div className="text-center">
                <div className="font-medium text-sm">{action.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>

        {/* Additional quick shortcuts */}
        <div className="mt-6 space-y-2">
          <div className="text-sm font-medium text-muted-foreground mb-2">Quick Shortcuts:</div>
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onAction('next-task')}
              className="text-xs p-2"
              title="Get next task"
            >
              🔍
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onAction('add-note')}
              className="text-xs p-2"
              title="Add note"
            >
              ➕
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onAction('refresh')}
              className="text-xs p-2"
              title="Refresh data"
            >
              🔄
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onAction('chat')}
              className="text-xs p-2"
              title="Open chat"
            >
              💬
            </Button>
          </div>
        </div>

        {/* Status indicators */}
        <div className="mt-6 p-3 bg-muted/50 rounded-lg">
          <div className="text-xs text-muted-foreground space-y-1">
            <div className="flex items-center justify-between">
              <span>Task Master CLI:</span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-emerald-600 dark:text-emerald-400">Connected</span>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Last Sync:</span>
              <span>2 minutes ago</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Active Sessions:</span>
              <span>1 AI session</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
