'use client';

import { useState, useEffect } from 'react';
import { useSync, useTaskStatusSync, useBatchSync, useSyncMonitor } from '@/hooks/use-sync';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';

export function SyncDemo() {
   const [selectedTaskId, setSelectedTaskId] = useState('2.7');
   const [newStatus, setNewStatus] = useState('done');
   const [batchTasks, setBatchTasks] = useState<string[]>(['2.7', '2.8']);

   // Main sync hook
   const sync = useSync({
      autoSync: true,
      enableOptimisticUpdates: true,
      conflictResolution: 'last_write_wins',
   });

   // Specialized hooks
   const taskStatusSync = useTaskStatusSync();
   const batchSync = useBatchSync();
   const monitor = useSyncMonitor();

   // Test operations
   const handleStatusUpdate = async () => {
      try {
         await sync.updateTaskStatus(selectedTaskId, newStatus);
      } catch (error) {
         console.error('Status update failed:', error);
      }
   };

   const handleTaskUpdate = async () => {
      try {
         await sync.updateTask(selectedTaskId, {
            description: 'Updated via sync demo',
            timestamp: new Date().toISOString(),
         });
      } catch (error) {
         console.error('Task update failed:', error);
      }
   };

   const handleBatchUpdate = async () => {
      try {
         const updates = batchTasks.map((taskId) => ({
            taskId,
            status: 'in-progress',
         }));

         await batchSync.executeBatch(updates, {
            atomicity: true,
            maxConcurrency: 2,
         });
      } catch (error) {
         console.error('Batch update failed:', error);
      }
   };

   // Get sync state badge variant
   const getSyncStateBadge = () => {
      if (!sync.syncStatus) return 'outline';
      switch (sync.syncStatus.state) {
         case 'idle':
            return 'default';
         case 'syncing':
            return 'secondary';
         case 'error':
            return 'destructive';
         default:
            return 'outline';
      }
   };

   // Get operation status badge variant
   const getOperationBadge = (status: string) => {
      switch (status) {
         case 'completed':
            return 'default';
         case 'executing':
            return 'secondary';
         case 'failed':
            return 'destructive';
         case 'rolled_back':
            return 'outline';
         default:
            return 'outline';
      }
   };

   return (
      <div className="space-y-6 p-6">
         <div>
            <h2 className="text-2xl font-semibold">Bidirectional Sync Demo</h2>
            <p className="text-muted-foreground">
               Test the synchronization layer between UI state and CLI file system
            </p>
         </div>

         <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
               <TabsTrigger value="overview">Overview</TabsTrigger>
               <TabsTrigger value="operations">Operations</TabsTrigger>
               <TabsTrigger value="conflicts">Conflicts</TabsTrigger>
               <TabsTrigger value="health">Health</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
               {/* Sync Status */}
               <Card>
                  <CardHeader>
                     <CardTitle className="flex items-center justify-between">
                        Sync Status
                        <Badge variant={getSyncStateBadge()}>
                           {sync.syncStatus?.state || 'Unknown'}
                        </Badge>
                     </CardTitle>
                     <CardDescription>Current synchronization state and metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     {sync.error && (
                        <Alert variant="destructive">
                           <AlertDescription>{sync.error}</AlertDescription>
                        </Alert>
                     )}

                     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                           <label className="text-sm font-medium">Active Operations</label>
                           <p className="text-2xl font-bold">
                              {sync.syncStatus?.operations.filter((op) => op.status === 'executing')
                                 .length || 0}
                           </p>
                        </div>
                        <div>
                           <label className="text-sm font-medium">Queue Size</label>
                           <p className="text-2xl font-bold">{sync.syncStatus?.queueSize || 0}</p>
                        </div>
                        <div>
                           <label className="text-sm font-medium">Conflicts</label>
                           <p className="text-2xl font-bold">
                              {sync.syncStatus?.conflicts.filter((c) => !c.resolved).length || 0}
                           </p>
                        </div>
                        <div>
                           <label className="text-sm font-medium">Optimistic Updates</label>
                           <p className="text-2xl font-bold">
                              {Object.keys(sync.optimisticUpdates).length}
                           </p>
                        </div>
                     </div>

                     <div className="flex gap-2">
                        <Button onClick={sync.refreshStatus} disabled={sync.isLoading}>
                           Refresh Status
                        </Button>
                        <Button onClick={sync.clearCompleted} variant="outline">
                           Clear Completed
                        </Button>
                        <Button onClick={sync.resetSync} variant="destructive">
                           Reset Sync
                        </Button>
                     </div>
                  </CardContent>
               </Card>

               {/* Test Operations */}
               <Card>
                  <CardHeader>
                     <CardTitle>Test Sync Operations</CardTitle>
                     <CardDescription>Execute different types of sync operations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     {/* Single Task Status Update */}
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                           <label className="text-sm font-medium">Task ID</label>
                           <select
                              value={selectedTaskId}
                              onChange={(e) => setSelectedTaskId(e.target.value)}
                              className="w-full mt-1 px-3 py-2 border rounded-md"
                           >
                              <option value="2.7">2.7</option>
                              <option value="2.8">2.8</option>
                              <option value="2.9">2.9</option>
                              <option value="2.10">2.10</option>
                           </select>
                        </div>
                        <div>
                           <label className="text-sm font-medium">New Status</label>
                           <select
                              value={newStatus}
                              onChange={(e) => setNewStatus(e.target.value)}
                              className="w-full mt-1 px-3 py-2 border rounded-md"
                           >
                              <option value="pending">pending</option>
                              <option value="in-progress">in-progress</option>
                              <option value="done">done</option>
                              <option value="deferred">deferred</option>
                           </select>
                        </div>
                        <div className="flex items-end">
                           <Button onClick={handleStatusUpdate} className="w-full">
                              Update Status
                           </Button>
                        </div>
                     </div>

                     {/* Task Content Update */}
                     <div className="flex gap-2">
                        <Button onClick={handleTaskUpdate} variant="outline">
                           Update Task Content
                        </Button>
                        <Button onClick={handleBatchUpdate} variant="secondary">
                           Batch Update ({batchTasks.length} tasks)
                        </Button>
                     </div>

                     {/* Optimistic Updates Display */}
                     {Object.keys(sync.optimisticUpdates).length > 0 && (
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                           <h4 className="font-medium text-blue-900 mb-2">Optimistic Updates</h4>
                           <pre className="text-xs text-blue-800 overflow-x-auto">
                              {JSON.stringify(sync.optimisticUpdates, null, 2)}
                           </pre>
                        </div>
                     )}
                  </CardContent>
               </Card>
            </TabsContent>

            {/* Operations Tab */}
            <TabsContent value="operations" className="space-y-4">
               <Card>
                  <CardHeader>
                     <CardTitle>Recent Operations</CardTitle>
                     <CardDescription>
                        History of sync operations with status and details
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <ScrollArea className="h-96">
                        <div className="space-y-2">
                           {sync.syncStatus?.operations.length === 0 ? (
                              <p className="text-sm text-muted-foreground text-center py-4">
                                 No operations yet. Execute some sync operations to see them here.
                              </p>
                           ) : (
                              sync.syncStatus?.operations
                                 .sort((a, b) => b.timestamp - a.timestamp)
                                 .slice(0, 20)
                                 .map((operation) => (
                                    <div
                                       key={operation.id}
                                       className="border rounded p-3 space-y-2"
                                    >
                                       <div className="flex items-center justify-between">
                                          <div className="flex items-center gap-2">
                                             <Badge variant="outline">{operation.type}</Badge>
                                             <Badge variant={getOperationBadge(operation.status)}>
                                                {operation.status}
                                             </Badge>
                                             <span className="text-xs text-muted-foreground">
                                                {operation.source}
                                             </span>
                                          </div>
                                          <div className="flex items-center gap-2">
                                             <span className="text-xs text-muted-foreground">
                                                {new Date(operation.timestamp).toLocaleTimeString()}
                                             </span>
                                             {operation.status === 'failed' && (
                                                <Button
                                                   size="sm"
                                                   variant="outline"
                                                   onClick={() => sync.retryOperation(operation.id)}
                                                >
                                                   Retry
                                                </Button>
                                             )}
                                             {operation.status === 'executing' && (
                                                <Button
                                                   size="sm"
                                                   variant="destructive"
                                                   onClick={() =>
                                                      sync.cancelOperation(operation.id)
                                                   }
                                                >
                                                   Cancel
                                                </Button>
                                             )}
                                          </div>
                                       </div>
                                       <div className="text-xs bg-muted p-2 rounded">
                                          <strong>Data:</strong>{' '}
                                          {JSON.stringify(operation.data, null, 2)}
                                       </div>
                                       {operation.retryCount > 0 && (
                                          <div className="text-xs text-orange-600">
                                             Retry count: {operation.retryCount}/
                                             {operation.maxRetries}
                                          </div>
                                       )}
                                    </div>
                                 ))
                           )}
                        </div>
                     </ScrollArea>
                  </CardContent>
               </Card>
            </TabsContent>

            {/* Conflicts Tab */}
            <TabsContent value="conflicts" className="space-y-4">
               <Card>
                  <CardHeader>
                     <CardTitle>Sync Conflicts</CardTitle>
                     <CardDescription>View and resolve synchronization conflicts</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <ScrollArea className="h-96">
                        <div className="space-y-2">
                           {sync.syncStatus?.conflicts.length === 0 ? (
                              <p className="text-sm text-muted-foreground text-center py-4">
                                 No conflicts detected. Sync operations are running smoothly.
                              </p>
                           ) : (
                              sync.syncStatus?.conflicts.map((conflict) => (
                                 <div key={conflict.id} className="border rounded p-3 space-y-3">
                                    <div className="flex items-center justify-between">
                                       <div className="flex items-center gap-2">
                                          <Badge variant="destructive">
                                             {conflict.conflictType}
                                          </Badge>
                                          <Badge
                                             variant={conflict.resolved ? 'default' : 'secondary'}
                                          >
                                             {conflict.resolved ? 'Resolved' : 'Unresolved'}
                                          </Badge>
                                       </div>
                                       {!conflict.resolved && (
                                          <div className="flex gap-2">
                                             <Button
                                                size="sm"
                                                onClick={() =>
                                                   sync.resolveConflict(conflict.id, 'ui_wins')
                                                }
                                             >
                                                UI Wins
                                             </Button>
                                             <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() =>
                                                   sync.resolveConflict(conflict.id, 'cli_wins')
                                                }
                                             >
                                                CLI Wins
                                             </Button>
                                             <Button
                                                size="sm"
                                                variant="secondary"
                                                onClick={() =>
                                                   sync.resolveConflict(
                                                      conflict.id,
                                                      'last_write_wins'
                                                   )
                                                }
                                             >
                                                Last Write Wins
                                             </Button>
                                          </div>
                                       )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                       <div>
                                          <h5 className="text-sm font-medium mb-1">Operation A</h5>
                                          <div className="text-xs bg-muted p-2 rounded">
                                             <div>Type: {conflict.operationA.type}</div>
                                             <div>Source: {conflict.operationA.source}</div>
                                             <div>
                                                Time:{' '}
                                                {new Date(
                                                   conflict.operationA.timestamp
                                                ).toLocaleString()}
                                             </div>
                                          </div>
                                       </div>
                                       <div>
                                          <h5 className="text-sm font-medium mb-1">Operation B</h5>
                                          <div className="text-xs bg-muted p-2 rounded">
                                             <div>Type: {conflict.operationB.type}</div>
                                             <div>Source: {conflict.operationB.source}</div>
                                             <div>
                                                Time:{' '}
                                                {new Date(
                                                   conflict.operationB.timestamp
                                                ).toLocaleString()}
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                    {conflict.resolved && (
                                       <div className="text-xs text-green-600">
                                          Resolved with: {conflict.resolution} at{' '}
                                          {conflict.resolvedAt
                                             ? new Date(conflict.resolvedAt).toLocaleString()
                                             : 'Unknown'}
                                       </div>
                                    )}
                                 </div>
                              ))
                           )}
                        </div>
                     </ScrollArea>
                  </CardContent>
               </Card>
            </TabsContent>

            {/* Health Tab */}
            <TabsContent value="health" className="space-y-4">
               <Card>
                  <CardHeader>
                     <CardTitle className="flex items-center justify-between">
                        Sync Health Monitor
                        <Badge variant={monitor.isHealthy ? 'default' : 'destructive'}>
                           {monitor.healthStatus?.status || 'Unknown'}
                        </Badge>
                     </CardTitle>
                     <CardDescription>Monitor sync performance and health metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     {monitor.metrics && (
                        <>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                 <label className="text-sm font-medium">Success Rate</label>
                                 <div className="mt-2">
                                    <Progress value={monitor.metrics.successRate * 100} />
                                    <p className="text-sm text-muted-foreground mt-1">
                                       {(monitor.metrics.successRate * 100).toFixed(1)}%
                                    </p>
                                 </div>
                              </div>
                              <div>
                                 <label className="text-sm font-medium">System Health</label>
                                 <div className="mt-2">
                                    <Progress
                                       value={monitor.isHealthy ? 100 : 0}
                                       className={monitor.isHealthy ? '' : 'bg-red-100'}
                                    />
                                    <p className="text-sm text-muted-foreground mt-1">
                                       {monitor.isHealthy
                                          ? 'All systems operational'
                                          : 'Issues detected'}
                                    </p>
                                 </div>
                              </div>
                           </div>

                           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="text-center">
                                 <p className="text-2xl font-bold">
                                    {monitor.metrics.activeOperations}
                                 </p>
                                 <p className="text-sm text-muted-foreground">Active Operations</p>
                              </div>
                              <div className="text-center">
                                 <p className="text-2xl font-bold">
                                    {monitor.metrics.queuedOperations}
                                 </p>
                                 <p className="text-sm text-muted-foreground">Queued Operations</p>
                              </div>
                              <div className="text-center">
                                 <p className="text-2xl font-bold">
                                    {monitor.metrics.unresolvedConflicts}
                                 </p>
                                 <p className="text-sm text-muted-foreground">
                                    Unresolved Conflicts
                                 </p>
                              </div>
                           </div>

                           {monitor.healthStatus?.issues &&
                              monitor.healthStatus.issues.length > 0 && (
                                 <Alert variant="destructive">
                                    <AlertDescription>
                                       <strong>Health Issues:</strong>
                                       <ul className="list-disc list-inside mt-1">
                                          {monitor.healthStatus.issues.map((issue, index) => (
                                             <li key={index}>{issue}</li>
                                          ))}
                                       </ul>
                                    </AlertDescription>
                                 </Alert>
                              )}
                        </>
                     )}
                  </CardContent>
               </Card>
            </TabsContent>
         </Tabs>
      </div>
   );
}
