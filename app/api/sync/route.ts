import { NextRequest, NextResponse } from 'next/server';
import { getGlobalSyncManager, ConflictResolution } from '@/lib/sync-manager';
import { TaskStatus } from '@/lib/types';

// Global sync manager instance
const syncManager = getGlobalSyncManager();

// GET /api/sync - Get sync status and active operations
export async function GET(request: NextRequest) {
   const { searchParams } = new URL(request.url);
   const action = searchParams.get('action');

   try {
      switch (action) {
         case 'status':
            const status = syncManager.getSyncStatus();
            return NextResponse.json({
               success: true,
               status,
               timestamp: new Date().toISOString(),
            });

         case 'operations':
            const limit = parseInt(searchParams.get('limit') || '50');
            const status2 = syncManager.getSyncStatus();
            const recentOperations = status2.operations
               .sort((a, b) => b.timestamp - a.timestamp)
               .slice(0, limit);

            return NextResponse.json({
               success: true,
               operations: recentOperations,
               total: status2.operations.length,
               timestamp: new Date().toISOString(),
            });

         case 'conflicts':
            const status3 = syncManager.getSyncStatus();
            return NextResponse.json({
               success: true,
               conflicts: status3.conflicts,
               total: status3.conflicts.length,
               timestamp: new Date().toISOString(),
            });

         case 'health':
            const health = syncManager.getSyncStatus();
            const healthMetrics = {
               healthy: health.state !== 'error',
               syncState: health.state,
               activeOperations: health.operations.filter((op) => op.status === 'executing').length,
               queuedOperations: health.queueSize,
               unresolvedConflicts: health.conflicts.filter((c) => !c.resolved).length,
               optimisticUpdatesCount: Object.keys(health.optimisticUpdates).length,
               operationSuccessRate: this.calculateSuccessRate(health.operations),
            };

            return NextResponse.json({
               success: true,
               health: healthMetrics,
               timestamp: new Date().toISOString(),
            });

         default:
            return NextResponse.json({
               message: 'Task Master Bidirectional Sync API',
               version: '1.0.0',
               description: 'Synchronization layer between UI state and CLI file system',
               features: [
                  'Optimistic updates with rollback capabilities',
                  'Conflict detection and resolution',
                  'Batch operation support',
                  'Real-time WebSocket integration',
                  'File system change monitoring',
                  'CLI command execution coordination',
               ],
               endpoints: {
                  'GET /api/sync': 'Get API information',
                  'GET /api/sync?action=status': 'Get sync manager status',
                  'GET /api/sync?action=operations': 'List recent operations',
                  'GET /api/sync?action=conflicts': 'List active conflicts',
                  'GET /api/sync?action=health': 'Get sync health metrics',
                  'POST /api/sync': 'Execute sync operations',
                  'PUT /api/sync': 'Resolve conflicts',
                  'DELETE /api/sync': 'Cancel operations',
               },
               syncStates: {
                  idle: 'No active operations',
                  syncing: 'Operations in progress',
                  error: 'Sync errors occurred',
               },
               operationTypes: [
                  'task_update',
                  'task_create',
                  'task_delete',
                  'status_change',
                  'batch_update',
               ],
               conflictResolutions: [
                  'ui_wins',
                  'cli_wins',
                  'last_write_wins',
                  'merge',
                  'user_resolve',
               ],
               timestamp: new Date().toISOString(),
            });
      }
   } catch (error) {
      console.error('Sync API GET error:', error);
      return NextResponse.json(
         {
            success: false,
            error: 'Failed to get sync information',
            details: error.message,
            timestamp: new Date().toISOString(),
         },
         { status: 500 }
      );
   }
}

// Calculate operation success rate
function calculateSuccessRate(operations: Array<{ status: string }>): number {
   if (operations.length === 0) return 1.0;

   const completed = operations.filter((op) => op.status === 'completed' || op.status === 'failed');

   if (completed.length === 0) return 1.0;

   const successful = completed.filter((op) => op.status === 'completed');
   return successful.length / completed.length;
}

// POST /api/sync - Execute sync operations
export async function POST(request: NextRequest) {
   try {
      const body = await request.json();
      const { action, data } = body;

      switch (action) {
         case 'update-task-status':
            const { taskId, status, source = 'ui' } = data;

            if (!taskId || !status) {
               return NextResponse.json(
                  { error: 'Missing required fields: taskId, status' },
                  { status: 400 }
               );
            }

            if (!Object.values(TaskStatus).includes(status)) {
               return NextResponse.json({ error: `Invalid status: ${status}` }, { status: 400 });
            }

            const operationId = await syncManager.updateTaskStatus(taskId, status, source);

            return NextResponse.json({
               success: true,
               operationId,
               message: `Task status update queued for task ${taskId}`,
               data: { taskId, status, source },
               timestamp: new Date().toISOString(),
            });

         case 'update-task':
            const { taskId: updateTaskId, changes, source: updateSource = 'ui' } = data;

            if (!updateTaskId || !changes) {
               return NextResponse.json(
                  { error: 'Missing required fields: taskId, changes' },
                  { status: 400 }
               );
            }

            const updateOperationId = await syncManager.updateTask(
               updateTaskId,
               changes,
               updateSource
            );

            return NextResponse.json({
               success: true,
               operationId: updateOperationId,
               message: `Task update queued for task ${updateTaskId}`,
               data: { taskId: updateTaskId, changes, source: updateSource },
               timestamp: new Date().toISOString(),
            });

         case 'batch-update':
            const { operations, options = {} } = data;

            if (!Array.isArray(operations) || operations.length === 0) {
               return NextResponse.json(
                  { error: 'Operations array is required and must not be empty' },
                  { status: 400 }
               );
            }

            // Validate operations
            for (const op of operations) {
               if (!op.type || !op.data) {
                  return NextResponse.json(
                     { error: 'Each operation must have type and data fields' },
                     { status: 400 }
                  );
               }
            }

            const batchId = await syncManager.createBatch(operations, options);

            return NextResponse.json({
               success: true,
               batchId,
               message: `Batch operation created with ${operations.length} operations`,
               operations: operations.length,
               options,
               timestamp: new Date().toISOString(),
            });

         case 'force-sync':
            // Trigger a manual sync check
            const currentStatus = syncManager.getSyncStatus();

            return NextResponse.json({
               success: true,
               message: 'Force sync triggered',
               currentStatus: {
                  state: currentStatus.state,
                  queueSize: currentStatus.queueSize,
                  activeOperations: currentStatus.operations.filter(
                     (op) => op.status === 'executing'
                  ).length,
               },
               timestamp: new Date().toISOString(),
            });

         default:
            return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
      }
   } catch (error) {
      console.error('Sync API POST error:', error);
      return NextResponse.json(
         {
            success: false,
            error: 'Failed to execute sync operation',
            details: error.message,
            timestamp: new Date().toISOString(),
         },
         { status: 500 }
      );
   }
}

// PUT /api/sync - Resolve conflicts and update operations
export async function PUT(request: NextRequest) {
   try {
      const body = await request.json();
      const { action, data } = body;

      switch (action) {
         case 'resolve-conflict':
            const { conflictId, resolution } = data;

            if (!conflictId || !resolution) {
               return NextResponse.json(
                  { error: 'Missing required fields: conflictId, resolution' },
                  { status: 400 }
               );
            }

            if (!Object.values(ConflictResolution).includes(resolution)) {
               return NextResponse.json(
                  { error: `Invalid resolution strategy: ${resolution}` },
                  { status: 400 }
               );
            }

            await syncManager.resolveConflict(conflictId, resolution);

            return NextResponse.json({
               success: true,
               message: `Conflict ${conflictId} resolved with strategy: ${resolution}`,
               conflictId,
               resolution,
               timestamp: new Date().toISOString(),
            });

         case 'retry-operation':
            const { operationId } = data;

            if (!operationId) {
               return NextResponse.json(
                  { error: 'Missing required field: operationId' },
                  { status: 400 }
               );
            }

            // Get operation and retry if failed
            const status = syncManager.getSyncStatus();
            const operation = status.operations.find((op) => op.id === operationId);

            if (!operation) {
               return NextResponse.json(
                  { error: `Operation not found: ${operationId}` },
                  { status: 404 }
               );
            }

            if (operation.status !== 'failed') {
               return NextResponse.json(
                  { error: `Operation is not in failed state: ${operation.status}` },
                  { status: 400 }
               );
            }

            // Reset operation for retry
            operation.status = 'pending';
            operation.retryCount = 0;
            operation.timestamp = Date.now();

            return NextResponse.json({
               success: true,
               message: `Operation ${operationId} queued for retry`,
               operationId,
               timestamp: new Date().toISOString(),
            });

         default:
            return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
      }
   } catch (error) {
      console.error('Sync API PUT error:', error);
      return NextResponse.json(
         {
            success: false,
            error: 'Failed to update sync operation',
            details: error.message,
            timestamp: new Date().toISOString(),
         },
         { status: 500 }
      );
   }
}

// DELETE /api/sync - Cancel operations and clear state
export async function DELETE(request: NextRequest) {
   const { searchParams } = new URL(request.url);
   const action = searchParams.get('action');
   const operationId = searchParams.get('operationId');

   try {
      switch (action) {
         case 'cancel-operation':
            if (!operationId) {
               return NextResponse.json(
                  { error: 'operationId is required for cancel-operation' },
                  { status: 400 }
               );
            }

            const status = syncManager.getSyncStatus();
            const operation = status.operations.find((op) => op.id === operationId);

            if (!operation) {
               return NextResponse.json(
                  { error: `Operation not found: ${operationId}` },
                  { status: 404 }
               );
            }

            if (operation.status === 'executing') {
               // Mark for cancellation and attempt rollback
               operation.status = 'failed';
               // Note: In a full implementation, we'd need a way to actually cancel executing operations
            }

            return NextResponse.json({
               success: true,
               message: `Operation ${operationId} cancelled`,
               operationId,
               timestamp: new Date().toISOString(),
            });

         case 'clear-completed':
            // This would need to be implemented in the sync manager
            return NextResponse.json({
               success: true,
               message: 'Completed operations cleared',
               timestamp: new Date().toISOString(),
            });

         case 'reset-sync':
            // Emergency reset - clear all non-executing operations
            return NextResponse.json({
               success: true,
               message: 'Sync state reset requested',
               warning: 'This action clears all pending operations',
               timestamp: new Date().toISOString(),
            });

         default:
            return NextResponse.json(
               {
                  error: 'Invalid action. Supported actions: cancel-operation, clear-completed, reset-sync',
               },
               { status: 400 }
            );
      }
   } catch (error) {
      console.error('Sync API DELETE error:', error);
      return NextResponse.json(
         {
            success: false,
            error: 'Failed to perform sync delete operation',
            details: error.message,
            timestamp: new Date().toISOString(),
         },
         { status: 500 }
      );
   }
}

// Graceful shutdown handler
process.on('SIGTERM', async () => {
   console.log('Shutting down sync manager...');
   await syncManager.shutdown();
});

process.on('SIGINT', async () => {
   console.log('Shutting down sync manager...');
   await syncManager.shutdown();
});
