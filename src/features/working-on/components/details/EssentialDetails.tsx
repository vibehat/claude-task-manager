'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Clock, Flag, Link2, Hash } from 'lucide-react';
import type { TaskMasterTask } from '@/libs/client/types';

interface EssentialDetailsProps {
  task: TaskMasterTask;
  variant: 'mobile' | 'desktop';
}

/**
 * Essential Details component adapted from TaskDetailsSection
 * Shows key task metadata in a compact format
 * Optimized for the Working On page's focused workflow
 */
export const EssentialDetails: React.FC<EssentialDetailsProps> = ({ task, variant }) => {
  const isMobile = variant === 'mobile';

  const getPriorityColor = (priority: string) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'done':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 border-blue-200';
      case 'blocked':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300 border-red-200';
      case 'deferred':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 border-yellow-200';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300 border-gray-200';
    }
  };

  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium">Essential Details</Label>

      <div className="grid gap-3">
        {/* Task ID */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Hash className="h-4 w-4" />
            <span>Task ID</span>
          </div>
          <Badge variant="outline" className="font-mono">
            #{task.id}
          </Badge>
        </div>

        {/* Priority */}
        {task.priority && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Flag className="h-4 w-4" />
              <span>Priority</span>
            </div>
            <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>{task.priority}</Badge>
          </div>
        )}

        {/* Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Status</span>
          </div>
          <Badge className={`text-xs ${getStatusColor(task.status || 'pending')}`}>
            {task.status || 'pending'}
          </Badge>
        </div>

        {/* Dependencies */}
        {task.dependencies && task.dependencies.length > 0 && (
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link2 className="h-4 w-4" />
              <span>Dependencies</span>
            </div>
            <div className="flex flex-wrap gap-1 max-w-[60%] justify-end">
              {task.dependencies.map((depId) => (
                <Badge
                  key={depId}
                  variant="outline"
                  className="text-xs font-mono"
                  title={`Depends on task #${depId}`}
                >
                  #{depId}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Progress Summary */}
        {task.subtasks && task.subtasks.length > 0 && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Progress</span>
            </div>
            <div className="text-sm">
              {task.subtasks.filter((st) => st.status === 'done').length} / {task.subtasks.length}{' '}
              subtasks
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats Summary */}
      <div className={`p-3 bg-muted/20 rounded-lg ${isMobile ? 'text-sm' : ''}`}>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="font-semibold text-lg">
              {task.subtasks
                ? Math.round(
                    (task.subtasks.filter((st) => st.status === 'done').length /
                      task.subtasks.length) *
                      100
                  ) || 0
                : 0}
              %
            </div>
            <div className="text-xs text-muted-foreground">Complete</div>
          </div>
          <div>
            <div className="font-semibold text-lg">{task.subtasks?.length || 0}</div>
            <div className="text-xs text-muted-foreground">Subtasks</div>
          </div>
        </div>
      </div>

      {/* Task Notes */}
      {task.details && (
        <div className="space-y-2">
          <Label className="text-sm font-medium text-muted-foreground">Quick Notes</Label>
          <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded border-l-2 border-blue-200">
            Implementation details and test strategy available in Task Information section above.
          </div>
        </div>
      )}
    </div>
  );
};

export default EssentialDetails;
