'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TaskInformation } from '../components/TaskInformation';
import { useWorkingOnStore } from '../store/workingOnStore';
import { cn } from '@/libs/client/utils';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface TaskDetailPageProps {
  taskId: string;
}

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

export function TaskDetailPage({ taskId }: TaskDetailPageProps) {
  const { getTaskById, tasks } = useWorkingOnStore();

  const task = getTaskById(taskId);

  if (!task) {
    return (
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" asChild>
            <Link href="/workspace/working-on">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Working On
            </Link>
          </Button>
        </div>
        <Card className="max-w-lg mx-auto">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">❓</div>
            <h2 className="text-xl font-semibold mb-2">Task Not Found</h2>
            <p className="text-muted-foreground">Task {taskId} could not be found.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const hasAISession = !!task.aiSession;
  const aiSession = task.aiSession;
  const lastActivity = aiSession?.activities[aiSession.activities.length - 1];

  // Find previous and next tasks
  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  const previousTask = taskIndex > 0 ? tasks[taskIndex - 1] : null;
  const nextTask = taskIndex < tasks.length - 1 ? tasks[taskIndex + 1] : null;

  const handleActionClick = (action: string) => {
    console.log(`Task ${taskId} action:`, action);
    // TODO: Implement actual actions
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/workspace/working-on">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Working On
            </Link>
          </Button>
          <div className="h-6 w-px bg-border" />
          <h1 className="text-2xl font-bold">Task {taskId}</h1>
        </div>

        {/* Task Navigation */}
        <div className="flex items-center gap-2">
          {previousTask && (
            <Button variant="outline" size="sm" asChild>
              <Link href={`/workspace/task/${previousTask.id}`}>
                <ChevronLeft className="w-4 h-4 mr-1" />
                {previousTask.id}
              </Link>
            </Button>
          )}
          {nextTask && (
            <Button variant="outline" size="sm" asChild>
              <Link href={`/workspace/task/${nextTask.id}`}>
                {nextTask.id}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Task Information - Takes most space */}
        <div className="lg:col-span-2">
          <TaskInformation task={task} />

          {/* Wireframe sections: Description (already in TaskInformation), Acceptance Criteria, Notes, Links/Files */}
          <div className="mt-6 space-y-6">
            {/* Acceptance Criteria */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Acceptance Criteria</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-primary" />
                  <span>JWT generation with RS256 works for valid payloads</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-primary" />
                  <span>Invalid tokens are rejected with proper errors</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-primary" />
                  <span>Unit tests cover gen/validate and edge cases</span>
                </label>
              </CardContent>
            </Card>

            {/* Notes (timeline) */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>15:35 — Decided on RS256 w/ key rotation plan</div>
                <div>15:20 — Added performance constraints for token size</div>
                <div>14:50 — Reviewed OWASP JWT guidance</div>
              </CardContent>
            </Card>

            {/* Links / Files */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Links / Files</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div>
                  <span className="mr-2">•</span>
                  <a className="text-blue-600 dark:text-blue-400 underline" href="#">
                    RFC 7519: JSON Web Token (JWT)
                  </a>
                </div>
                <div>
                  <span className="mr-2">•</span>
                  <a className="text-blue-600 dark:text-blue-400 underline" href="#">
                    OWASP JWT Security Cheat Sheet
                  </a>
                </div>
                <div>
                  <span className="mr-2">•</span>
                  <a className="text-blue-600 dark:text-blue-400 underline" href="#">
                    jsonwebtoken docs
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sidebar with AI Session and Actions */}
        <div className="space-y-6">
          {/* AI Session Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">AI Session</CardTitle>
            </CardHeader>
            <CardContent>
              {hasAISession ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={cn(
                          'w-3 h-3 rounded-full animate-pulse',
                          getAIStatusColor(aiSession!.status)
                        )}
                      />
                      <span className="font-semibold text-sm">
                        {getAIStatusText(aiSession!.status)}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">{aiSession!.duration}</div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">Agent:</span>
                      <Badge
                        className={cn(
                          'ml-2 text-xs',
                          aiSession!.agent === 'claude' &&
                            'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
                          aiSession!.agent === 'gpt' &&
                            'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
                          aiSession!.agent === 'gemini' &&
                            'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300'
                        )}
                      >
                        {aiSession!.agent.toUpperCase()} v4.0
                      </Badge>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">
                        Last Activity:
                      </span>
                      <div className="text-xs text-muted-foreground mt-1">
                        {lastActivity ? formatTimeAgo(lastActivity.timestamp) : 'No activity'}
                      </div>
                    </div>
                  </div>

                  {lastActivity && (
                    <div className="p-3 bg-muted/50 rounded border">
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

                  {/* Recent Activities */}
                  {aiSession!.activities.length > 1 && (
                    <div>
                      <span className="text-xs font-medium text-muted-foreground mb-2 block">
                        Recent Activity:
                      </span>
                      <div className="space-y-1 max-h-32 overflow-y-auto">
                        {aiSession!.activities
                          .slice(-3)
                          .reverse()
                          .map((activity) => (
                            <div key={activity.id} className="text-xs text-muted-foreground">
                              <span className="font-medium">
                                {formatTimeAgo(activity.timestamp)}:
                              </span>{' '}
                              {activity.message}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="text-2xl mb-2">🤖</div>
                  <p className="font-medium text-sm">No AI Session Active</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Ready to start implementation
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Actions Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                className="w-full justify-start"
                onClick={() => handleActionClick('continue')}
                disabled={!hasAISession}
              >
                {hasAISession ? 'Continue with AI' : 'Start AI Session'}
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => handleActionClick('view-context')}
              >
                📖 View Full Context
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => handleActionClick('research')}
              >
                🔍 Research Task
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => handleActionClick('add-notes')}
              >
                📝 Add Notes
              </Button>

              <div className="pt-2 border-t">
                <Button
                  variant="outline"
                  className="w-full justify-start text-emerald-600 border-emerald-200 hover:bg-emerald-50"
                  onClick={() => handleActionClick('mark-complete')}
                  disabled={task.progress < 100}
                >
                  ✅ Mark Complete
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Quick Navigation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/workspace/working-on">↑ Back to Working On</Link>
              </Button>

              {previousTask && (
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href={`/workspace/task/${previousTask.id}`}>
                    ← Previous: Task {previousTask.id}
                  </Link>
                </Button>
              )}

              {nextTask && (
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href={`/workspace/task/${nextTask.id}`}>Next: Task {nextTask.id} →</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
