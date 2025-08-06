import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import {
  Target,
  Clock,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  PlayCircle,
  Info,
} from 'lucide-react';
import type { ActiveTaskDisplayProps, ActiveTaskState } from '../types/workingOnTypes';
import { ProgressIndicator } from './ProgressIndicator';

/**
 * Task Skeleton for loading state
 */
const TaskSkeleton: React.FC = () => (
  <Card className="p-6">
    <div className="space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-2 w-full" />
      <div className="flex gap-2">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  </Card>
);

/**
 * No Active Task State - encouraging empty state
 */
const NoActiveTaskState: React.FC<{ onBrowseTasks?: () => void }> = ({ onBrowseTasks }) => (
  <Card className="p-8 text-center">
    <div className="space-y-6">
      <div className="flex justify-center">
        <div className="rounded-full bg-blue-50 dark:bg-blue-950 p-4">
          <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">Ready to Focus</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          No active task selected. Let's get you started on something meaningful today.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button onClick={onBrowseTasks} variant="default" className="flex items-center gap-2">
          <PlayCircle className="w-4 h-4" />
          Browse Tasks
        </Button>
        <Button variant="outline" onClick={() => window.open('/workspace/create-new', '_blank')}>
          Create Task
        </Button>
      </div>

      <div className="text-sm text-muted-foreground pt-4">
        <p className="font-medium mb-2">Recent tasks:</p>
        <div className="space-y-1 text-left max-w-sm mx-auto">
          <div className="flex justify-between items-center">
            <span>• Setup working on page</span>
            <Badge variant="secondary" className="text-xs">
              pending
            </Badge>
          </div>
          <div className="flex justify-between items-center">
            <span>• Implement data integration</span>
            <Badge variant="secondary" className="text-xs">
              pending
            </Badge>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

/**
 * Multiple Active Tasks Warning
 */
const MultipleActiveTasksWarning: React.FC<{
  taskCount: number;
  onResolve?: () => void;
}> = ({ taskCount, onResolve }) => (
  <Card className="p-6 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20">
    <div className="flex items-start gap-3">
      <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
      <div className="space-y-3 flex-1">
        <div>
          <h3 className="font-semibold text-amber-900 dark:text-amber-100">
            Multiple Active Tasks
          </h3>
          <p className="text-sm text-amber-700 dark:text-amber-300">
            You have {taskCount} tasks marked as in-progress. For focused work, please complete or
            pause some tasks to work on one at a time.
          </p>
        </div>
        <Button
          onClick={onResolve}
          variant="outline"
          size="sm"
          className="border-amber-300 text-amber-700 hover:bg-amber-100 dark:border-amber-700 dark:text-amber-300 dark:hover:bg-amber-900/20"
        >
          Resolve Tasks
        </Button>
      </div>
    </div>
  </Card>
);

/**
 * Main Active Task Display Component
 * Shows the current in-progress task with progress and actions
 */
export const ActiveTaskDisplay: React.FC<ActiveTaskDisplayProps> = ({
  task,
  isLoading,
  onComplete,
  onEdit,
  onShowDetails,
}) => {
  const [state, setState] = useState<ActiveTaskState>({
    showFullDescription: false,
    isCompleting: false,
    lastUpdated: new Date(),
  });

  // Loading state
  if (isLoading) {
    return <TaskSkeleton />;
  }

  // No active task state
  if (!task) {
    return <NoActiveTaskState onBrowseTasks={() => window.open('/workspace/tasks', '_blank')} />;
  }

  // Handle task completion
  const handleComplete = async () => {
    if (!onComplete) return;

    setState((prev) => ({ ...prev, isCompleting: true }));
    try {
      await onComplete();
    } catch (error) {
      console.error('Failed to complete task:', error);
    } finally {
      setState((prev) => ({ ...prev, isCompleting: false }));
    }
  };

  // Toggle description visibility
  const toggleDescription = () => {
    setState((prev) => ({
      ...prev,
      showFullDescription: !prev.showFullDescription,
    }));
  };

  // Format task priority
  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
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

  return (
    <Card className="p-6 hover:shadow-md transition-shadow duration-200">
      <div className="space-y-4">
        {/* Task Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <Badge variant="outline" className="text-xs">
                Task #{task.id}
              </Badge>
              {task.priority && (
                <Badge className={`text-xs ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </Badge>
              )}
            </div>

            <h1 className="text-2xl lg:text-3xl font-semibold text-foreground leading-tight">
              {task.title}
            </h1>

            {/* Last updated indicator */}
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
              <Clock className="h-3 w-3" />
              <span>Updated {state.lastUpdated.toLocaleTimeString()}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 flex-shrink-0">
            {onShowDetails && (
              <Button
                variant="outline"
                size="sm"
                onClick={onShowDetails}
                className="flex items-center gap-2"
              >
                <Info className="h-4 w-4" />
                Details
              </Button>
            )}
            {onEdit && (
              <Button variant="outline" size="sm" onClick={onEdit}>
                Edit
              </Button>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <ProgressIndicator task={task} variant="linear" />

        {/* Task Description */}
        <div className="space-y-2">
          <div
            className={`text-muted-foreground leading-relaxed ${
              !state.showFullDescription ? 'line-clamp-3' : ''
            }`}
          >
            {task.description}
          </div>

          {task.description.length > 200 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDescription}
              className="text-xs flex items-center gap-1 p-0 h-auto"
            >
              {state.showFullDescription ? (
                <>
                  <ChevronUp className="h-3 w-3" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="h-3 w-3" />
                  Show more
                </>
              )}
            </Button>
          )}
        </div>

        {/* Task Details (if expanded) */}
        {state.showFullDescription && task.details && (
          <div className="bg-muted/30 rounded-lg p-4 space-y-2">
            <h4 className="font-medium text-sm text-foreground">Implementation Details</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{task.details}</p>
          </div>
        )}

        {/* Dependencies (if any) */}
        {task.dependencies && task.dependencies.length > 0 && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Depends on:</span>
            <div className="flex gap-1">
              {task.dependencies.map((depId) => (
                <Badge key={depId} variant="secondary" className="text-xs">
                  #{depId}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
