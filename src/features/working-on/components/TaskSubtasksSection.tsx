'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  GitBranch,
  ChevronRight,
  ChevronDown,
  Circle,
  CheckCircle2,
  CircleDot,
  PauseCircle,
  XCircle,
  FileText,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/libs/client/utils';
import { motion, AnimatePresence } from 'motion/react';
import type { Task } from '../types/workingOnTypes';
import Link from 'next/link';

interface TaskSubtasksSectionProps {
  task: Task;
}

interface SubtaskItemProps {
  subtask: Task;
  parentTask: Task;
}

function SubtaskItem({ subtask, parentTask: _parentTask }: SubtaskItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'in-progress':
        return <CircleDot className="h-4 w-4 text-blue-500" />;
      case 'blocked':
        return <PauseCircle className="h-4 w-4 text-red-500" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'pending':
        return <Circle className="h-4 w-4 text-blue-400" />;
      default:
        return <Circle className="h-4 w-4 text-muted-foreground" />;
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
        return 'bg-muted text-muted-foreground';
    }
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card
      className="cursor-pointer hover:bg-accent/50 transition-colors group"
      onClick={handleClick}
    >
      <CardContent className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {getStatusIcon(subtask.status)}
            <span className="text-xs text-muted-foreground font-mono">{subtask.id}</span>
            <span className="text-sm font-medium line-clamp-1 flex-1">{subtask.title}</span>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Badge variant="outline" className={cn('text-xs', getPriorityColor(subtask.priority))}>
              {subtask.priority}
            </Badge>

            {subtask.progress > 0 && (
              <div className="flex items-center gap-1">
                <Progress value={subtask.progress} className="h-1 w-8" />
                <span className="text-xs text-muted-foreground">{subtask.progress}%</span>
              </div>
            )}

            {isExpanded ? (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-border/50 space-y-4">
                {/* Description */}
                {subtask.description && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FileText className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">Description</span>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed pl-5">
                      {subtask.description}
                    </p>
                  </div>
                )}

                {/* Task Details */}
                <div className="grid grid-cols-2 gap-4 pl-5">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">Status</span>
                    <div className="text-sm mt-1">{subtask.status.replace('-', ' ')}</div>
                  </div>

                  {subtask.estimatedTime && (
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">Time</span>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm">{subtask.estimatedTime}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Dependencies */}
                {subtask.dependencies.length > 0 && (
                  <div className="space-y-2 pl-5">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">
                        Dependencies
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {subtask.dependencies.map((depId) => (
                        <Badge key={depId} variant="outline" className="text-xs">
                          {depId}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                {subtask.tags.length > 0 && (
                  <div className="space-y-2 pl-5">
                    <span className="text-xs font-medium text-muted-foreground">Tags</span>
                    <div className="flex flex-wrap gap-1">
                      {subtask.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Link to full task view */}
                <div className="pl-5 pt-2 border-t border-border/50">
                  <Button variant="ghost" size="sm" asChild className="h-7 text-xs">
                    <Link href={`/workspace/task/${subtask.id}`}>
                      View Details <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}

export function TaskSubtasksSection({ task }: TaskSubtasksSectionProps) {
  const subtasks = task.subtasks || [];
  const completedSubtasks = subtasks.filter((s) => s.status === 'done').length;
  const inProgressSubtasks = subtasks.filter((s) => s.status === 'in-progress').length;

  if (subtasks.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg font-semibold">
              Subtasks ({completedSubtasks}/{subtasks.length})
            </CardTitle>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {inProgressSubtasks > 0 && (
              <Badge variant="outline" className="text-xs">
                {inProgressSubtasks} in progress
              </Badge>
            )}

            <div className="flex items-center gap-1">
              <Progress value={(completedSubtasks / subtasks.length) * 100} className="h-2 w-16" />
              <span className="text-xs">
                {Math.round((completedSubtasks / subtasks.length) * 100)}%
              </span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        {subtasks.map((subtask) => (
          <SubtaskItem key={subtask.id} subtask={subtask} parentTask={task} />
        ))}
      </CardContent>
    </Card>
  );
}
