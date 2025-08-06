import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, PlayCircle, Clock, Sparkles } from 'lucide-react';
import type { ProgressIndicatorProps, ProgressData } from '../types/workingOnTypes';
import type { TaskMasterTask } from '@/libs/client/stores/types';

/**
 * Calculate task progress based on subtask completion ratios
 */
const calculateTaskProgress = (task: TaskMasterTask): ProgressData => {
  if (!task.subtasks?.length) {
    // If no subtasks, progress is based on task status
    const percentage = task.status === 'done' ? 100 : task.status === 'in-progress' ? 50 : 0;
    return {
      completedSubtasks: 0,
      totalSubtasks: 0,
      percentage,
      status:
        task.status === 'done'
          ? 'complete'
          : task.status === 'in-progress'
            ? 'in-progress'
            : 'not-started',
    };
  }

  const completedSubtasks = task.subtasks.filter((subtask) => subtask.status === 'done').length;
  const totalSubtasks = task.subtasks.length;
  const percentage = Math.round((completedSubtasks / totalSubtasks) * 100);

  let status: ProgressData['status'];
  if (percentage === 0) {
    status = 'not-started';
  } else if (percentage >= 80 && percentage < 100) {
    status = 'nearly-complete';
  } else if (percentage === 100) {
    status = 'complete';
  } else {
    status = 'in-progress';
  }

  return {
    completedSubtasks,
    totalSubtasks,
    percentage,
    status,
  };
};

/**
 * Get progress display properties based on status
 */
const getProgressProps = (progressData: ProgressData) => {
  switch (progressData.status) {
    case 'not-started':
      return {
        color: 'bg-muted',
        icon: PlayCircle,
        text: 'Ready to start',
        textColor: 'text-muted-foreground',
        badgeVariant: 'secondary' as const,
      };

    case 'in-progress':
      return {
        color: 'bg-blue-500',
        icon: Clock,
        text: `${progressData.completedSubtasks} of ${progressData.totalSubtasks} completed`,
        textColor: 'text-blue-600 dark:text-blue-400',
        badgeVariant: 'default' as const,
      };

    case 'nearly-complete':
      return {
        color: 'bg-gradient-to-r from-blue-500 to-green-500',
        icon: Sparkles,
        text: 'Almost done!',
        textColor: 'text-green-600 dark:text-green-400',
        badgeVariant: 'default' as const,
      };

    case 'complete':
      return {
        color: 'bg-green-500',
        icon: CheckCircle,
        text: 'Ready to complete',
        textColor: 'text-green-600 dark:text-green-400',
        badgeVariant: 'default' as const,
      };

    default:
      return {
        color: 'bg-muted',
        icon: PlayCircle,
        text: 'Unknown status',
        textColor: 'text-muted-foreground',
        badgeVariant: 'secondary' as const,
      };
  }
};

/**
 * Linear Progress Bar Component
 */
const LinearProgress: React.FC<{ progressData: ProgressData }> = ({ progressData }) => {
  const props = getProgressProps(progressData);
  const Icon = props.icon;

  return (
    <div className="space-y-3">
      {/* Progress header */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium text-foreground">Progress</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`font-medium ${props.textColor}`}>{progressData.percentage}%</span>
          <Badge variant={props.badgeVariant} className="text-xs">
            {progressData.status.replace('-', ' ')}
          </Badge>
        </div>
      </div>

      {/* Progress bar */}
      <div className="space-y-2">
        <Progress value={progressData.percentage} className="h-2 bg-muted" />

        {/* Progress description */}
        <p className={`text-sm ${props.textColor}`}>{props.text}</p>
      </div>

      {/* Subtask breakdown (if applicable) */}
      {progressData.totalSubtasks > 0 && (
        <div className="text-xs text-muted-foreground">
          <span>
            {progressData.completedSubtasks}/{progressData.totalSubtasks} subtasks completed
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * Circular Progress Component (for compact displays)
 */
const CircularProgress: React.FC<{ progressData: ProgressData }> = ({ progressData }) => {
  const props = getProgressProps(progressData);
  const circumference = 2 * Math.PI * 16; // radius = 16
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progressData.percentage / 100) * circumference;

  return (
    <div className="flex items-center gap-3">
      {/* Circular progress */}
      <div className="relative w-12 h-12">
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
          {/* Background circle */}
          <circle cx="18" cy="18" r="16" fill="none" className="stroke-muted" strokeWidth="2" />
          {/* Progress circle */}
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-blue-500"
            strokeWidth="2"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.3s ease-in-out',
            }}
          />
        </svg>

        {/* Percentage in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium text-foreground">{progressData.percentage}%</span>
        </div>
      </div>

      {/* Progress info */}
      <div className="flex-1">
        <p className={`text-sm font-medium ${props.textColor}`}>{props.text}</p>
        {progressData.totalSubtasks > 0 && (
          <p className="text-xs text-muted-foreground">
            {progressData.completedSubtasks}/{progressData.totalSubtasks} subtasks
          </p>
        )}
      </div>
    </div>
  );
};

/**
 * Minimal Progress Component (for focus mode)
 */
const MinimalProgress: React.FC<{ progressData: ProgressData }> = ({ progressData }) => {
  const props = getProgressProps(progressData);

  return (
    <div className="flex items-center gap-2 text-sm">
      <Progress value={progressData.percentage} className="h-1 flex-1" />
      <span className={`font-medium tabular-nums ${props.textColor}`}>
        {progressData.percentage}%
      </span>
    </div>
  );
};

/**
 * Main Progress Indicator Component
 * Visual progress bars with smooth animations and encouraging color schemes
 */
export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  task,
  variant = 'linear',
}) => {
  // Calculate progress data
  const progressData = calculateTaskProgress(task);

  // Add pulse animation for nearly complete tasks
  const shouldPulse =
    progressData.status === 'nearly-complete' || progressData.status === 'complete';

  return (
    <div className={`${shouldPulse ? 'animate-pulse' : ''}`}>
      {variant === 'linear' && <LinearProgress progressData={progressData} />}
      {variant === 'circular' && <CircularProgress progressData={progressData} />}
      {variant === 'minimal' && <MinimalProgress progressData={progressData} />}
    </div>
  );
};
