'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Play,
  FileText,
  Clock,
  Target,
  CheckCircle,
  Circle,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  Calendar,
  Link as LinkIcon,
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
  // Expand all sections by default
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['subtasks', 'files', 'dependencies', 'notes', 'description', 'details'])
  );

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

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

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
          <div className="border border-border rounded-lg overflow-hidden">
            <Collapsible
              open={expandedSections.has('subtasks')}
              onOpenChange={() => toggleSection('subtasks')}
            >
              <CollapsibleTrigger className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors w-full">
                <div className="flex items-center gap-2">
                  {expandedSections.has('subtasks') ? (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  )}
                  <CheckCircle className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">Subtasks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {completedSubtasks}/{totalSubtasks} completed
                  </Badge>
                  <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 transition-all"
                      style={{ width: `${(completedSubtasks / totalSubtasks) * 100}%` }}
                    />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="p-4 pt-2 space-y-1 bg-card">
                  {task.subtasks?.map((subtask) => (
                    <SubtaskItem key={subtask.id} subtask={subtask} />
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        )}

        {/* Related Files Section */}
        {task.relatedFiles.length > 0 && (
          <div className="border border-border rounded-lg overflow-hidden">
            <Collapsible
              open={expandedSections.has('files')}
              onOpenChange={() => toggleSection('files')}
            >
              <CollapsibleTrigger className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors w-full">
                <div className="flex items-center gap-2">
                  {expandedSections.has('files') ? (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  )}
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">Related Files</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {task.relatedFiles.length} files
                </Badge>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="p-4 pt-2 space-y-1 bg-card">
                  {task.relatedFiles.map((file) => (
                    <RelatedFileItem key={file.path} file={file} />
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        )}

        {/* Dependencies Section */}
        <div className="border border-border rounded-lg overflow-hidden">
          <Collapsible
            open={expandedSections.has('dependencies')}
            onOpenChange={() => toggleSection('dependencies')}
          >
            <CollapsibleTrigger className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors w-full">
              <div className="flex items-center gap-2">
                {expandedSections.has('dependencies') ? (
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
                <LinkIcon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Dependencies</span>
              </div>
              <Badge variant="outline" className="text-xs">
                2 connections
              </Badge>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 bg-card space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5"></div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-muted-foreground mb-1">Blocked by</div>
                    <div className="text-sm text-foreground">None</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-muted-foreground mb-1">Blocks</div>
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
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Notes Section */}
        {task.notes.length > 0 && (
          <div className="border border-border rounded-lg overflow-hidden">
            <Collapsible
              open={expandedSections.has('notes')}
              onOpenChange={() => toggleSection('notes')}
            >
              <CollapsibleTrigger className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors w-full">
                <div className="flex items-center gap-2">
                  {expandedSections.has('notes') ? (
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  )}
                  <MessageCircle className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">Notes</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {task.notes.length} notes
                </Badge>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="p-4 bg-card space-y-3">
                  {task.notes.map((note) => (
                    <div
                      key={note.id}
                      className="bg-muted/30 rounded-lg p-3 border border-border/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-foreground">
                          {note.author || 'Anonymous'}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(note.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {note.content}
                      </p>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default TaskDetailsSection;
