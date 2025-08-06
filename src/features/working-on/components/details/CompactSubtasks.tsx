'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { GitBranch, ChevronDown, ChevronUp, CheckCircle2, Circle, Clock } from 'lucide-react';
import type { TaskMasterTask } from '@/libs/client/types';

interface CompactSubtasksProps {
  task: TaskMasterTask;
  variant: 'mobile' | 'desktop';
}

interface CompactSubtaskItemProps {
  subtask: TaskMasterTask;
  variant: 'mobile' | 'desktop';
  onStatusToggle?: (subtaskId: number, newStatus: string) => void;
}

/**
 * Compact Subtask Item component
 * Shows subtask with quick status toggle and essential information
 */
const CompactSubtaskItem: React.FC<CompactSubtaskItemProps> = ({
  subtask,
  variant,
  onStatusToggle,
}) => {
  const isMobile = variant === 'mobile';
  const isCompleted = subtask.status === 'done';
  const isInProgress = subtask.status === 'in-progress';

  const getStatusIcon = () => {
    if (isCompleted) {
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    }
    if (isInProgress) {
      return <Clock className="h-4 w-4 text-blue-500" />;
    }
    return <Circle className="h-4 w-4 text-muted-foreground" />;
  };

  const getStatusColor = () => {
    switch (subtask.status?.toLowerCase()) {
      case 'done':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'blocked':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      case 'deferred':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  const handleStatusToggle = () => {
    if (!onStatusToggle) return;

    // Toggle between pending and done for quick completion
    const newStatus = isCompleted ? 'pending' : 'done';
    onStatusToggle(subtask.id, newStatus);
  };

  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/30 transition-colors ${
        isCompleted ? 'opacity-75' : ''
      }`}
    >
      {/* Status Toggle */}
      <button
        onClick={handleStatusToggle}
        className="mt-0.5 hover:scale-110 transition-transform"
        title={isCompleted ? 'Mark as pending' : 'Mark as complete'}
      >
        {getStatusIcon()}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <h4
            className={`font-medium ${isMobile ? 'text-sm' : 'text-sm'} ${
              isCompleted ? 'line-through text-muted-foreground' : ''
            }`}
          >
            {subtask.title}
          </h4>
          <Badge variant="secondary" className={`text-xs flex-shrink-0 ${getStatusColor()}`}>
            {subtask.status || 'pending'}
          </Badge>
        </div>

        {subtask.description && (
          <p className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'} line-clamp-2`}>
            {subtask.description}
          </p>
        )}

        {/* Dependencies */}
        {subtask.dependencies && subtask.dependencies.length > 0 && (
          <div className="flex items-center gap-1 mt-1">
            <span className="text-xs text-muted-foreground">Depends on:</span>
            {subtask.dependencies.map((depId) => (
              <Badge key={depId} variant="outline" className="text-xs h-4 px-1">
                #{depId}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Compact Subtasks component adapted from SubtasksSection
 * Provides overview of subtasks with quick status toggles
 * Optimized for the Working On page's focused workflow
 */
export const CompactSubtasks: React.FC<CompactSubtasksProps> = ({ task, variant }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showCompleted, setShowCompleted] = useState(false);

  const subtasks = task.subtasks || [];
  const completedSubtasks = subtasks.filter((st) => st.status === 'done');
  const pendingSubtasks = subtasks.filter((st) => st.status !== 'done');

  const isMobile = variant === 'mobile';

  // Show different subtasks based on toggle
  const visibleSubtasks = showCompleted ? completedSubtasks : pendingSubtasks;

  const handleStatusToggle = (subtaskId: number, newStatus: string) => {
    // TODO: Implement subtask status update
    console.log(`Update subtask ${subtaskId} to ${newStatus}`);
  };

  if (subtasks.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <GitBranch className="h-4 w-4" />
          <Label className="text-sm font-medium">Subtasks (0)</Label>
        </div>
        <div className="text-center py-6 text-muted-foreground">
          <GitBranch className="h-8 w-8 mx-auto mb-2 opacity-50" />
          <p className="text-sm">No subtasks defined</p>
          <p className="text-xs mt-1">This task can be completed as a single unit</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GitBranch className="h-4 w-4" />
          <Label className="text-sm font-medium">
            Subtasks ({completedSubtasks.length}/{subtasks.length})
          </Label>
        </div>

        <div className="flex items-center gap-2">
          {completedSubtasks.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowCompleted(!showCompleted)}
              className="text-xs h-7"
            >
              {showCompleted ? 'Show Pending' : 'Show Completed'}
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-7 w-7 p-0"
          >
            {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </Button>
        </div>
      </div>

      {/* Progress Summary */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3 text-green-500" />
          <span>{completedSubtasks.length} completed</span>
        </div>
        <div className="flex items-center gap-1">
          <Circle className="h-3 w-3" />
          <span>{pendingSubtasks.length} remaining</span>
        </div>
      </div>

      {/* Subtasks List */}
      {isExpanded && (
        <div className="space-y-2">
          {visibleSubtasks.length === 0 ? (
            <div className="text-center py-4 text-muted-foreground text-sm">
              {showCompleted ? 'No completed subtasks' : 'All subtasks completed! 🎉'}
            </div>
          ) : (
            visibleSubtasks.map((subtask) => (
              <CompactSubtaskItem
                key={subtask.id}
                subtask={subtask}
                variant={variant}
                onStatusToggle={handleStatusToggle}
              />
            ))
          )}
        </div>
      )}

      {/* Quick Action Summary */}
      {!isExpanded && (
        <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
          <span className="text-sm text-muted-foreground">
            {pendingSubtasks.length > 0
              ? `${pendingSubtasks.length} subtasks remaining`
              : 'All subtasks completed!'}
          </span>
          {pendingSubtasks.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(true)}
              className="text-xs h-6"
            >
              View Tasks
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default CompactSubtasks;
