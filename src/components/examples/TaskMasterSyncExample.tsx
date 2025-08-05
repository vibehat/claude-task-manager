'use client';

import React from 'react';
import { useTaskMasterSync } from '@/libs/client/hooks/useTaskMasterSync';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { AlertTriangle, CheckCircle, Clock, RefreshCw, Zap } from 'lucide-react';
import { toast } from 'sonner';

export function TaskMasterSyncExample(): React.JSX.Element {
  const { isLoading, isInitialized, tasks, taskStats, initialize, forceSync, reset } =
    useTaskMasterSync();

  const handleInitialize = async () => {
    try {
      await initialize();
      toast.success('TaskMaster initialized');
    } catch (error) {
      console.error('Failed to initialize:', error);
      toast.error('Failed to initialize TaskMaster');
    }
  };

  const handleForceSync = async () => {
    try {
      await forceSync();
      toast.success('Force sync completed');
    } catch (error) {
      console.error('Force sync failed:', error);
      toast.error('Force sync failed');
    }
  };

  const handleReset = () => {
    try {
      reset();
      toast.info('TaskMaster data reset');
    } catch (error) {
      console.error('Failed to refresh stats:', error);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold">TaskMaster Sync Example</h1>
        <p className="text-muted-foreground mt-2">
          Simple TaskMaster data loading and synchronization example
        </p>
      </div>

      {/* Sync Status Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SyncStatusIcon isLoading={isLoading} isInitialized={isInitialized} />
            Sync Status
          </CardTitle>
          <CardDescription>TaskMaster data initialization status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span>Status:</span>
                <SyncStatusBadge isLoading={isLoading} isInitialized={isInitialized} />
              </div>
            </div>

            <div className="flex gap-2">
              {!isInitialized ? (
                <Button onClick={handleInitialize} disabled={isLoading}>
                  Initialize
                </Button>
              ) : (
                <>
                  <Button variant="outline" onClick={handleForceSync} disabled={isLoading}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Force Sync
                  </Button>
                  <Button variant="destructive" onClick={handleReset}>
                    Reset
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Card */}
      {isInitialized && (
        <Card>
          <CardHeader>
            <CardTitle>TaskMaster Statistics</CardTitle>
            <CardDescription>Overview of tasks and subtasks from TaskMaster</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{taskStats.totalTasks}</div>
                <div className="text-sm text-muted-foreground">Total Tasks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{taskStats.totalSubtasks}</div>
                <div className="text-sm text-muted-foreground">Subtasks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{taskStats.tasksByStatus.done || 0}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{taskStats.tasksByStatus.pending || 0}</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <h4 className="font-medium">Status Breakdown</h4>
              <div className="flex flex-wrap gap-2">
                {Object.entries(taskStats.tasksByStatus).map(([status, count]) => (
                  <Badge key={status} variant="secondary">
                    {status}: {count}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <h4 className="font-medium">Priority Breakdown</h4>
              <div className="flex flex-wrap gap-2">
                {Object.entries(taskStats.tasksByPriority).map(([priority, count]) => (
                  <Badge key={priority} variant="outline">
                    {priority}: {count}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tasks List Card */}
      {isInitialized && tasks.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>TaskMaster Tasks ({tasks.length})</CardTitle>
            <CardDescription>Tasks loaded from TaskMaster</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex-1">
                    <div className="font-medium">{task.title}</div>
                    {task.description && (
                      <div className="text-sm text-muted-foreground mt-1">{task.description}</div>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        Task {task.id}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {task.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {task.priority}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Usage Instructions */}
      <Card>
        <CardHeader>
          <CardTitle>How to Use</CardTitle>
          <CardDescription>Instructions for TaskMaster integration</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none">
          <ol className="space-y-2">
            <li>Make sure you have TaskMaster CLI installed and initialized in this project</li>
            <li>
              Create some tasks using:{' '}
              <code>task-master add-task --prompt=&quot;Your task description&quot;</code>
            </li>
            <li>Click Initialize above to load your TaskMaster tasks</li>
            <li>Use Force Sync to reload data from TaskMaster files</li>
            <li>Use Reset to clear all loaded data</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}

// Helper components
function SyncStatusIcon({
  isLoading,
  isInitialized,
}: {
  isLoading: boolean;
  isInitialized: boolean;
}) {
  if (!isInitialized && isLoading) {
    return <RefreshCw className="w-5 h-5 animate-spin text-yellow-500" />;
  }
  if (!isInitialized) {
    return <Clock className="w-5 h-5 text-gray-500" />;
  }
  if (isLoading) {
    return <RefreshCw className="w-5 h-5 animate-spin text-yellow-500" />;
  }
  return <CheckCircle className="w-5 h-5 text-green-500" />;
}

function SyncStatusBadge({
  isLoading,
  isInitialized,
}: {
  isLoading: boolean;
  isInitialized: boolean;
}) {
  if (!isInitialized && isLoading) {
    return (
      <Badge variant="default" className="bg-yellow-500">
        Initializing...
      </Badge>
    );
  }
  if (!isInitialized) {
    return <Badge variant="secondary">Not Initialized</Badge>;
  }
  if (isLoading) {
    return (
      <Badge variant="default" className="bg-yellow-500">
        Syncing...
      </Badge>
    );
  }
  return (
    <Badge variant="default" className="bg-green-500">
      Ready
    </Badge>
  );
}
