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
   const {
      isEnabled,
      syncStatus,
      error,
      isRealTimeSyncActive,
      isLoading,
      taskMasterTasks,
      taskMasterStats,
      enableSync,
      disableSync,
      forceSync,
      toggleRealTimeSync,
      refreshStats,
   } = useTaskMasterSync({
      autoEnable: false,
      enableRealTimeSync: true,
      onSyncComplete: (issues) => {
         toast.success(`Synced ${issues.length} TaskMaster issues`);
      },
      onSyncError: (error) => {
         toast.error(`Sync failed: ${error.message}`);
      },
   });

   const handleEnableSync = async () => {
      try {
         await enableSync({
            enableRealTimeSync: true,
            tagName: 'master',
         });
      } catch (error) {
         console.error('Failed to enable sync:', error);
      }
   };

   const handleDisableSync = async () => {
      try {
         await disableSync();
         toast.info('TaskMaster sync disabled');
      } catch (error) {
         console.error('Failed to disable sync:', error);
      }
   };

   const handleForceSync = async () => {
      try {
         await forceSync();
         toast.success('Force sync completed');
      } catch (error) {
         console.error('Force sync failed:', error);
      }
   };

   const handleToggleRealTimeSync = async (enabled: boolean) => {
      try {
         await toggleRealTimeSync(enabled);
         toast.info(`Real-time sync ${enabled ? 'enabled' : 'disabled'}`);
      } catch (error) {
         console.error('Failed to toggle real-time sync:', error);
      }
   };

   const handleRefreshStats = async () => {
      try {
         await refreshStats();
         toast.success('Stats refreshed');
      } catch (error) {
         console.error('Failed to refresh stats:', error);
      }
   };

   return (
      <div className="space-y-6 p-6">
         <div className="max-w-4xl">
            <h1 className="text-3xl font-bold">TaskMaster Sync Example</h1>
            <p className="text-muted-foreground mt-2">
               Demonstrates real-time synchronization between TaskMaster CLI and the UI
            </p>
         </div>

         {/* Sync Status Card */}
         <Card>
            <CardHeader>
               <CardTitle className="flex items-center gap-2">
                  <SyncStatusIcon status={syncStatus} />
                  Sync Status
               </CardTitle>
               <CardDescription>Current synchronization status with TaskMaster</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center justify-between">
                  <div className="space-y-2">
                     <div className="flex items-center gap-2">
                        <span>Status:</span>
                        <SyncStatusBadge status={syncStatus} isEnabled={isEnabled} />
                     </div>
                     {error && (
                        <div className="flex items-center gap-2 text-destructive">
                           <AlertTriangle className="w-4 h-4" />
                           <span className="text-sm">{error}</span>
                        </div>
                     )}
                  </div>

                  <div className="flex items-center gap-2">
                     {isEnabled ? (
                        <Button variant="outline" onClick={handleDisableSync} disabled={isLoading}>
                           Disable Sync
                        </Button>
                     ) : (
                        <Button onClick={handleEnableSync} disabled={isLoading}>
                           Enable Sync
                        </Button>
                     )}
                  </div>
               </div>

               {isEnabled && (
                  <>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <Zap className="w-4 h-4" />
                           <span>Real-time Sync</span>
                        </div>
                        <Switch
                           checked={isRealTimeSyncActive}
                           onCheckedChange={handleToggleRealTimeSync}
                           disabled={isLoading}
                        />
                     </div>

                     <div className="flex gap-2">
                        <Button
                           variant="outline"
                           size="sm"
                           onClick={handleForceSync}
                           disabled={isLoading || syncStatus === 'syncing'}
                        >
                           <RefreshCw className="w-4 h-4 mr-2" />
                           Force Sync
                        </Button>
                        <Button
                           variant="outline"
                           size="sm"
                           onClick={handleRefreshStats}
                           disabled={isLoading}
                        >
                           <RefreshCw className="w-4 h-4 mr-2" />
                           Refresh Stats
                        </Button>
                     </div>
                  </>
               )}
            </CardContent>
         </Card>

         {/* Statistics Card */}
         {isEnabled && taskMasterStats && (
            <Card>
               <CardHeader>
                  <CardTitle>TaskMaster Statistics</CardTitle>
                  <CardDescription>Overview of tasks and subtasks from TaskMaster</CardDescription>
               </CardHeader>
               <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="text-center">
                        <div className="text-2xl font-bold">{taskMasterStats.totalTasks}</div>
                        <div className="text-sm text-muted-foreground">Total Tasks</div>
                     </div>
                     <div className="text-center">
                        <div className="text-2xl font-bold">{taskMasterStats.totalSubtasks}</div>
                        <div className="text-sm text-muted-foreground">Subtasks</div>
                     </div>
                     <div className="text-center">
                        <div className="text-2xl font-bold">
                           {taskMasterStats.tasksByStatus.done || 0}
                        </div>
                        <div className="text-sm text-muted-foreground">Completed</div>
                     </div>
                     <div className="text-center">
                        <div className="text-2xl font-bold">
                           {taskMasterStats.tasksByStatus.pending || 0}
                        </div>
                        <div className="text-sm text-muted-foreground">Pending</div>
                     </div>
                  </div>

                  <div className="mt-4 space-y-2">
                     <h4 className="font-medium">Status Breakdown</h4>
                     <div className="flex flex-wrap gap-2">
                        {Object.entries(taskMasterStats.tasksByStatus).map(([status, count]) => (
                           <Badge key={status} variant="secondary">
                              {status}: {count}
                           </Badge>
                        ))}
                     </div>
                  </div>

                  <div className="mt-4 space-y-2">
                     <h4 className="font-medium">Priority Breakdown</h4>
                     <div className="flex flex-wrap gap-2">
                        {Object.entries(taskMasterStats.tasksByPriority).map(
                           ([priority, count]) => (
                              <Badge key={priority} variant="outline">
                                 {priority}: {count}
                              </Badge>
                           )
                        )}
                     </div>
                  </div>
               </CardContent>
            </Card>
         )}

         {/* Issues List Card */}
         {isEnabled && taskMasterTasks.length > 0 && (
            <Card>
               <CardHeader>
                  <CardTitle>TaskMaster Issues ({taskMasterTasks.length})</CardTitle>
                  <CardDescription>Issues synchronized from TaskMaster CLI</CardDescription>
               </CardHeader>
               <CardContent>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                     {taskMasterTasks.map((issue) => (
                        <div
                           key={issue.id}
                           className="flex items-center justify-between p-3 border rounded-lg"
                        >
                           <div className="flex-1">
                              <div className="font-medium">{issue.title}</div>
                              {issue.description && (
                                 <div className="text-sm text-muted-foreground mt-1">
                                    {issue.description}
                                 </div>
                              )}
                              <div className="flex items-center gap-2 mt-2">
                                 {issue.taskId && (
                                    <Badge variant="secondary" className="text-xs">
                                       Task {issue.taskId}
                                       {issue.subtaskId && `.${issue.subtaskId.split('.')[1]}`}
                                    </Badge>
                                 )}
                                 {issue.parentTaskId && (
                                    <Badge variant="outline" className="text-xs">
                                       Subtask
                                    </Badge>
                                 )}
                              </div>
                           </div>
                           <div className="flex items-center gap-2">
                              <StatusIndicator statusId={issue.statusId} />
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
               <CardDescription>Instructions for setting up TaskMaster sync</CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
               <ol className="space-y-2">
                  <li>
                     Make sure you have TaskMaster CLI installed and initialized in this project
                  </li>
                  <li>
                     Create some tasks using:{' '}
                     <code>task-master add-task --prompt=&quot;Your task description&quot;</code>
                  </li>
                  <li>Enable sync above to see your TaskMaster tasks appear as issues</li>
                  <li>Toggle real-time sync to automatically sync changes from the CLI</li>
                  <li>Make changes to tasks in TaskMaster CLI and watch them sync automatically</li>
               </ol>
            </CardContent>
         </Card>
      </div>
   );
}

// Helper components
function SyncStatusIcon({ status }: { status: string }) {
   switch (status) {
      case 'syncing':
         return <RefreshCw className="w-5 h-5 animate-spin text-yellow-500" />;
      case 'synced':
         return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
         return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
         return <Clock className="w-5 h-5 text-gray-500" />;
   }
}

function SyncStatusBadge({ status, isEnabled }: { status: string; isEnabled: boolean }) {
   if (!isEnabled) {
      return <Badge variant="secondary">Disabled</Badge>;
   }

   switch (status) {
      case 'syncing':
         return (
            <Badge variant="default" className="bg-yellow-500">
               Syncing...
            </Badge>
         );
      case 'synced':
         return (
            <Badge variant="default" className="bg-green-500">
               Synced
            </Badge>
         );
      case 'error':
         return <Badge variant="destructive">Error</Badge>;
      default:
         return <Badge variant="outline">Ready</Badge>;
   }
}

function StatusIndicator({ statusId }: { statusId: string }) {
   const statusMap: Record<string, { name: string; color: string }> = {
      'status-1': { name: 'Backlog', color: 'bg-gray-500' },
      'status-2': { name: 'Todo', color: 'bg-blue-500' },
      'status-3': { name: 'In Progress', color: 'bg-yellow-500' },
      'status-4': { name: 'Done', color: 'bg-green-500' },
      'status-5': { name: 'Cancelled', color: 'bg-red-500' },
   };

   const status = statusMap[statusId] || { name: 'Unknown', color: 'bg-gray-500' };

   return (
      <div className="flex items-center gap-2">
         <div className={`w-3 h-3 rounded-full ${status.color}`} />
         <span className="text-sm">{status.name}</span>
      </div>
   );
}
