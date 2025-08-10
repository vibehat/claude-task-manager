'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Play,
  FileText,
  Clock,
  Target,
  CheckCircle,
  Circle,
  ExternalLink,
  MessageCircle,
  Calendar,
  Link as LinkIcon,
  CheckSquare,
} from 'lucide-react';
import { cn } from '@/libs/client/utils';
import type { TaskDetailsSectionProps, WorkingOnTask } from '../../types';

function SubtaskItem({ subtask }: { subtask: WorkingOnTask['subtasks'][0] }): React.JSX.Element {
  const isCompleted = subtask.status === 'done';

  return (
    <div className="flex items-start gap-3 py-2">
      <div
        className={cn(
          'mt-1 flex-shrink-0',
          isCompleted ? 'text-green-600' : 'text-muted-foreground'
        )}
      >
        {isCompleted ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={cn(
              'text-sm font-medium',
              isCompleted ? 'line-through text-muted-foreground' : 'text-foreground'
            )}
          >
            {subtask.id} {subtask.title}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mb-1">{subtask.description}</p>
        {subtask.details && <p className="text-xs text-muted-foreground">{subtask.details}</p>}
      </div>
    </div>
  );
}

function RelatedFileItem({ file }: { file: WorkingOnTask['relatedFiles'][0] }): React.JSX.Element {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30';
      case 'modified':
        return 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30';
      case 'unchanged':
        return 'text-muted-foreground bg-gray-100 dark:bg-gray-800/30';
      default:
        return 'text-muted-foreground bg-gray-100 dark:bg-gray-800/30';
    }
  };

  return (
    <div className="flex items-start gap-3 py-2 hover:bg-muted/50 dark:hover:bg-muted/30 rounded px-2 -mx-2 cursor-pointer transition-colors">
      <FileText className="w-4 h-4 mt-1 text-muted-foreground flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <code className="text-sm font-mono text-foreground truncate">{file.path}</code>
          <Badge
            variant="secondary"
            className={cn('text-xs capitalize', getStatusColor(file.status))}
          >
            {file.status}
          </Badge>
        </div>
        {file.description && <p className="text-xs text-muted-foreground">{file.description}</p>}
      </div>
      <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0 mt-1" />
    </div>
  );
}

export function TaskDetailsSection({
  task,
  loading = false,
  onStartWork,
  onAddNote,
}: TaskDetailsSectionProps): React.JSX.Element {
  const [activeTab, setActiveTab] = useState('dependencies');

  // Always call hooks at the top level - determine available tabs based on task
  const availableTabs = useMemo(() => {
    const tabs: string[] = [];
    if (task) {
      if (task.relatedFiles.length > 0) tabs.push('files');
      tabs.push('dependencies'); // Always show dependencies
      if (task.notes.length > 0) tabs.push('notes');
    }
    return tabs;
  }, [task]);

  // Set default active tab to first available - always call this hook
  useEffect(() => {
    if (task && availableTabs.length > 0 && !availableTabs.includes(activeTab)) {
      setActiveTab(availableTabs[0]);
    }
  }, [task, availableTabs, activeTab]);

  if (loading) {
    return (
      <Card className="bg-card border border-border">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!task) {
    return (
      <Card className="bg-card border border-border">
        <CardContent className="p-6 text-center text-muted-foreground">
          <Target className="w-8 h-8 mx-auto mb-2 text-gray-300" />
          <p>Select a task to view details</p>
        </CardContent>
      </Card>
    );
  }

  const completedSubtasks = task.subtasks?.filter((s) => s.status === 'done').length || 0;
  const totalSubtasks = task.subtasks?.length || 0;

  return (
    <Card className="bg-card border border-border">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-foreground mb-2">
              {task.id} — {task.title}
            </CardTitle>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 capitalize">
                  {task.status.replace('-', ' ')}
                </Badge>
                {task.timeLeft && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{task.timeLeft}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className={cn(
                    'capitalize',
                    task.priority === 'high' && 'bg-red-100 text-red-700',
                    task.priority === 'medium' && 'bg-amber-100 text-amber-700',
                    task.priority === 'low' && 'bg-gray-100 text-gray-700'
                  )}
                >
                  Priority: {task.priority}
                </Badge>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">Due: Today</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Button onClick={onStartWork} className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              Start Work
            </Button>
            <Button variant="outline" onClick={onAddNote} className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Add Note
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description Section - Always Expanded */}
        {task.description && (
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Description
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{task.description}</p>
          </div>
        )}

        {/* Details Section - Always Expanded */}
        {task.details && (
          <div className="bg-muted/20 dark:bg-muted/10 rounded-lg p-4 border border-border/50">
            <h3 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-muted-foreground" />
              Implementation Details
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {task.details}
            </p>
          </div>
        )}

        {/* Progress Overview */}
        {totalSubtasks > 0 && (
          <div className="bg-gradient-to-r from-muted/20 to-muted/40 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Overall Progress</span>
              <span className="text-sm text-muted-foreground font-mono">
                {task.progress}% • {completedSubtasks}/{totalSubtasks} tasks
              </span>
            </div>
            <Progress value={task.progress} className="h-2.5" />
          </div>
        )}

        {/* Subtasks Section */}
        {totalSubtasks > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-medium text-foreground">
                Subtasks ({completedSubtasks}/{totalSubtasks})
              </h3>
            </div>
            <div className="space-y-2">
              {task.subtasks?.map((subtask) => <SubtaskItem key={subtask.id} subtask={subtask} />)}
            </div>
          </div>
        )}

        {/* Tabbed Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-fit">
            {task.relatedFiles.length > 0 && (
              <TabsTrigger value="files">
                <FileText className="w-4 h-4" />
                Files ({task.relatedFiles.length})
              </TabsTrigger>
            )}
            <TabsTrigger value="dependencies">
              <LinkIcon className="w-4 h-4" />
              Dependencies
            </TabsTrigger>
            {task.notes.length > 0 && (
              <TabsTrigger value="notes">
                <MessageCircle className="w-4 h-4" />
                Notes ({task.notes.length})
              </TabsTrigger>
            )}
          </TabsList>

          {/* Related Files Tab */}
          {task.relatedFiles.length > 0 && (
            <TabsContent value="files" className="space-y-1">
              {task.relatedFiles.map((file) => (
                <RelatedFileItem key={file.path} file={file} />
              ))}
            </TabsContent>
          )}

          {/* Dependencies Tab */}
          <TabsContent value="dependencies" className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground mb-1">Blocked by</div>
                <div className="text-sm text-muted-foreground">None</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground mb-1">Blocks</div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    #28.3 - API Security Review
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    #29.1 - Rate Limiting Setup
                  </Badge>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Notes Tab */}
          {task.notes.length > 0 && (
            <TabsContent value="notes" className="space-y-3">
              {task.notes.map((note) => (
                <div key={note.id} className="rounded-lg p-3 border border-border/50 bg-muted/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">
                      {note.author || 'Anonymous'}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(note.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{note.content}</p>
                </div>
              ))}
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default TaskDetailsSection;
