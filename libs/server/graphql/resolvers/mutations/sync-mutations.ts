import { getGlobalSyncManager } from '../../../core';
import { TaskMasterSync, TaskMasterDB } from '../../../taskmaster';
import { TaskMasterFileOperations } from '../../../core';
import { eventEmitter } from '../../../websocket-server';

const syncManager = getGlobalSyncManager();
const taskMasterSync = new TaskMasterSync();
const taskMasterDB = new TaskMasterDB();

export const syncMutations = {
   // Sync mutations - Enhanced with comprehensive operations and validation
   triggerSync: async (_: any, { input }: { input?: any }) => {
      try {
         // Validate input if provided
         if (input) {
            if (
               input.type &&
               !['full', 'incremental', 'conflict_resolution'].includes(input.type)
            ) {
               throw new Error(
                  'Invalid sync type. Must be one of: full, incremental, conflict_resolution'
               );
            }
            if (input.priority && !['low', 'normal', 'high', 'urgent'].includes(input.priority)) {
               throw new Error('Invalid priority. Must be one of: low, normal, high, urgent');
            }
         }

         const syncType = input?.type || 'incremental';
         const priority = input?.priority || 'normal';
         const force = input?.force || false;
         const description = input?.description || `Manual ${syncType} sync triggered`;

         // Check if sync is already in progress and force is not specified
         const status = syncManager.getSyncStatus();
         if (status.state === 'syncing' && !force) {
            throw new Error('Sync already in progress. Use force: true to override');
         }

         // Trigger sync operation
         const operationId = await syncManager.queueOperation({
            type: 'batch_sync',
            data: {
               syncType,
               priority,
               force,
               triggeredBy: 'graphql_mutation',
               description,
            },
            source: 'api',
            priority:
               priority === 'urgent' ? 1 : priority === 'high' ? 2 : priority === 'normal' ? 3 : 4,
         });

         // Emit sync started event
         const syncOperationPayload = {
            operation: {
               id: operationId,
               type: 'batch_sync',
               status: 'executing',
               timestamp: new Date(),
               source: 'api',
               taskIds: [],
               metadata: { syncType, priority, force },
               retryCount: 0,
            },
            changeType: 'STARTED',
            timestamp: new Date(),
         };
         eventEmitter.emitSyncOperationUpdated(syncOperationPayload);

         // Execute sync based on type
         let syncResult;
         try {
            if (syncType === 'full') {
               syncResult = await taskMasterSync.syncTasksToDatabase({ full: true, force });
            } else if (syncType === 'incremental') {
               syncResult = await taskMasterSync.syncTasksToDatabase({
                  incremental: true,
                  force,
               });
            } else if (syncType === 'conflict_resolution') {
               // Resolve all pending conflicts first
               const conflicts = status.conflicts.filter((c) => !c.resolved);
               for (const conflict of conflicts) {
                  await syncManager.resolveConflict(conflict.id, 'auto');
               }
               syncResult = await taskMasterSync.syncTasksToDatabase({
                  incremental: true,
                  force,
               });
            }

            // Emit sync completed event
            syncOperationPayload.operation.status = 'completed';
            syncOperationPayload.changeType = 'COMPLETED';
            syncOperationPayload.timestamp = new Date();
            eventEmitter.emitSyncOperationUpdated(syncOperationPayload);
         } catch (syncError) {
            // Emit sync failed event
            syncOperationPayload.operation.status = 'failed';
            syncOperationPayload.changeType = 'FAILED';
            syncOperationPayload.timestamp = new Date();
            eventEmitter.emitSyncOperationUpdated(syncOperationPayload);
            throw syncError;
         }

         return {
            id: operationId,
            type: 'batch_sync',
            status: 'completed',
            timestamp: new Date(),
            source: 'api',
            data: {
               syncType,
               priority,
               force,
               description,
               result: syncResult,
            },
            metadata: {
               operationsProcessed: syncResult?.operationsCount || 0,
               conflictsResolved: syncResult?.conflictsResolved || 0,
               duration: syncResult?.duration || 0,
               triggeredBy: 'graphql_mutation',
            },
            retryCount: 0,
         };
      } catch (error) {
         console.error('Error triggering sync:', error);
         throw new Error(`Failed to trigger sync: ${error.message}`);
      }
   },

   resolveConflict: async (_: any, { input }: { input: any }) => {
      try {
         // Validate input
         if (!input.conflictId?.trim()) {
            throw new Error('Conflict ID is required');
         }
         if (!input.resolution?.trim()) {
            throw new Error('Resolution strategy is required');
         }

         const validResolutions = ['accept_a', 'accept_b', 'merge', 'manual', 'auto'];
         if (!validResolutions.includes(input.resolution)) {
            throw new Error(
               `Invalid resolution strategy. Must be one of: ${validResolutions.join(', ')}`
            );
         }

         // Check if conflict exists
         const status = syncManager.getSyncStatus();
         const conflict = status.conflicts.find((c) => c.id === input.conflictId);

         if (!conflict) {
            throw new Error(`Conflict '${input.conflictId}' not found`);
         }

         if (conflict.resolved) {
            throw new Error(`Conflict '${input.conflictId}' is already resolved`);
         }

         // Apply resolution data if provided
         let resolutionData = input.resolutionData || {};

         // For manual resolution, require resolution data
         if (input.resolution === 'manual' && Object.keys(resolutionData).length === 0) {
            throw new Error('Manual resolution requires resolutionData to be provided');
         }

         // Resolve the conflict
         const resolvedConflict = await syncManager.resolveConflict(
            input.conflictId,
            input.resolution,
            resolutionData
         );

         // If auto-sync is enabled, trigger sync after resolution
         if (input.autoSync !== false) {
            try {
               await taskMasterSync.syncTasksToDatabase({ incremental: true });
            } catch (syncError) {
               console.warn('Warning: Conflict resolved but auto-sync failed:', syncError);
               // Don't fail the operation - conflict was resolved
            }
         }

         return {
            id: resolvedConflict.id,
            conflictType: resolvedConflict.conflictType,
            resolved: true,
            resolution: input.resolution,
            resolutionData,
            resolvedAt: new Date(),
            resolvedBy: 'graphql_mutation',
            operationA: {
               ...resolvedConflict.operationA,
               timestamp: new Date(resolvedConflict.operationA.timestamp),
            },
            operationB: {
               ...resolvedConflict.operationB,
               timestamp: new Date(resolvedConflict.operationB.timestamp),
            },
            metadata: {
               autoSyncTriggered: input.autoSync !== false,
               resolutionMethod: input.resolution,
               resolvedBy: 'graphql_mutation',
            },
         };
      } catch (error) {
         console.error('Error resolving conflict:', error);
         throw new Error(`Failed to resolve conflict: ${error.message}`);
      }
   },

   retryOperation: async (_: any, { input }: { input: any }) => {
      try {
         // Validate input
         if (!input.operationId?.trim()) {
            throw new Error('Operation ID is required');
         }

         // Check if operation exists and can be retried
         const status = syncManager.getSyncStatus();
         const operation = status.operations.find((op) => op.id === input.operationId);

         if (!operation) {
            throw new Error(`Operation '${input.operationId}' not found`);
         }

         if (operation.status !== 'failed') {
            throw new Error(
               `Operation '${input.operationId}' is not in failed state. Current status: ${operation.status}`
            );
         }

         // Check retry limit
         const maxRetries = input.maxRetries || 3;
         if (operation.retryCount >= maxRetries) {
            throw new Error(
               `Operation '${input.operationId}' has exceeded maximum retry attempts (${maxRetries})`
            );
         }

         // Override operation parameters if provided
         const retryData = { ...operation.data };
         if (input.overrideData) {
            Object.assign(retryData, input.overrideData);
         }

         // Queue retry operation
         const retryOperationId = await syncManager.queueOperation({
            type: operation.type,
            data: retryData,
            source: 'retry',
            priority: input.priority || operation.priority || 3,
            retryOf: operation.id,
            metadata: {
               originalOperationId: operation.id,
               retryAttempt: operation.retryCount + 1,
               maxRetries,
               retriedBy: 'graphql_mutation',
               retryReason: input.reason || 'Manual retry requested',
            },
         });

         // Execute the retry operation
         let retryResult;
         try {
            retryResult = await syncManager.executeOperation(retryOperationId);
         } catch (retryError) {
            console.error(`Retry operation ${retryOperationId} failed:`, retryError);
            throw new Error(`Retry failed: ${retryError.message}`);
         }

         return {
            id: retryOperationId,
            type: operation.type,
            status: retryResult.success ? 'completed' : 'failed',
            timestamp: new Date(),
            source: 'retry',
            data: retryData,
            metadata: {
               originalOperationId: operation.id,
               retryAttempt: operation.retryCount + 1,
               retriedBy: 'graphql_mutation',
               retrySuccess: retryResult.success,
               retryDuration: retryResult.duration || 0,
            },
            retryCount: operation.retryCount + 1,
            result: retryResult,
         };
      } catch (error) {
         console.error('Error retrying operation:', error);
         throw new Error(`Failed to retry operation: ${error.message}`);
      }
   },

   batchUpdate: async (_: any, { input }: { input: any }) => {
      try {
         // Validate input
         if (!input.operations || !Array.isArray(input.operations)) {
            throw new Error('Operations array is required');
         }
         if (input.operations.length === 0) {
            throw new Error('At least one operation is required');
         }
         if (input.operations.length > 50) {
            throw new Error('Maximum 50 operations allowed per batch');
         }

         // Validate each operation
         const validOperationTypes = ['task_update', 'task_create', 'task_delete', 'status_change'];
         for (let i = 0; i < input.operations.length; i++) {
            const op = input.operations[i];
            if (!op.type || !validOperationTypes.includes(op.type)) {
               throw new Error(
                  `Invalid operation type at index ${i}. Must be one of: ${validOperationTypes.join(', ')}`
               );
            }
            if (!op.data) {
               throw new Error(`Operation data is required at index ${i}`);
            }
         }

         const batchId = `batch_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
         const batchOperations = [];
         const results = [];
         let successCount = 0;
         let failureCount = 0;

         // Process operations in transaction-like manner
         const rollbackOperations = [];

         try {
            for (let i = 0; i < input.operations.length; i++) {
               const op = input.operations[i];

               try {
                  // Queue individual operation
                  const operationId = await syncManager.queueOperation({
                     type: op.type,
                     data: op.data,
                     source: 'batch',
                     priority: op.priority || 3,
                     metadata: {
                        batchId,
                        batchIndex: i,
                        batchSize: input.operations.length,
                     },
                  });

                  batchOperations.push(operationId);

                  // Execute operation
                  const result = await syncManager.executeOperation(operationId);

                  if (result.success) {
                     successCount++;
                     results.push({
                        index: i,
                        operationId,
                        success: true,
                        result: result.data,
                     });

                     // Store rollback information for successful operations
                     if (input.transactional && op.type !== 'task_create') {
                        rollbackOperations.push({
                           type: 'rollback_' + op.type,
                           data: result.previousState,
                           operationId,
                        });
                     }
                  } else {
                     failureCount++;
                     results.push({
                        index: i,
                        operationId,
                        success: false,
                        error: result.error || 'Operation failed',
                     });

                     // If transactional, rollback previous operations
                     if (input.transactional) {
                        console.log(
                           `Batch operation ${i} failed, rolling back previous operations...`
                        );
                        for (const rollbackOp of rollbackOperations.reverse()) {
                           try {
                              await syncManager.executeOperation(rollbackOp);
                           } catch (rollbackError) {
                              console.error('Rollback failed:', rollbackError);
                           }
                        }
                        throw new Error(
                           `Batch operation failed at index ${i}: ${result.error}. Previous operations have been rolled back.`
                        );
                     }
                  }
               } catch (opError) {
                  failureCount++;
                  results.push({
                     index: i,
                     operationId: null,
                     success: false,
                     error: opError.message,
                  });

                  // If transactional and this is not the first operation, rollback
                  if (input.transactional && rollbackOperations.length > 0) {
                     console.log(
                        `Batch operation ${i} failed, rolling back previous operations...`
                     );
                     for (const rollbackOp of rollbackOperations.reverse()) {
                        try {
                           await syncManager.executeOperation(rollbackOp);
                        } catch (rollbackError) {
                           console.error('Rollback failed:', rollbackError);
                        }
                     }
                     throw new Error(
                        `Batch operation failed at index ${i}: ${opError.message}. Previous operations have been rolled back.`
                     );
                  }
               }
            }

            // If auto-sync is enabled and we had successful operations, trigger sync
            if (input.autoSync !== false && successCount > 0) {
               try {
                  await taskMasterSync.syncTasksToDatabase({ incremental: true });
               } catch (syncError) {
                  console.warn(
                     'Warning: Batch operations completed but auto-sync failed:',
                     syncError
                  );
                  // Don't fail the operation - batch was processed
               }
            }

            return {
               batchId,
               totalOperations: input.operations.length,
               successCount,
               failureCount,
               successRate: Math.round((successCount / input.operations.length) * 100),
               results,
               batchOperations,
               transactional: input.transactional || false,
               completedAt: new Date(),
               metadata: {
                  autoSyncTriggered: input.autoSync !== false && successCount > 0,
                  processingMode: input.transactional ? 'transactional' : 'best-effort',
                  batchSource: 'graphql_mutation',
               },
            };
         } catch (batchError) {
            // If we're here, it means a transactional rollback occurred
            throw batchError;
         }
      } catch (error) {
         console.error('Error processing batch update:', error);
         throw new Error(`Failed to process batch update: ${error.message}`);
      }
   },

   updateTaskStatus: async (
      _: any,
      { taskId, status, source = 'ui' }: { taskId: string; status: string; source?: string }
   ) => {
      try {
         // Enhanced validation
         if (!taskId?.trim()) {
            throw new Error('Task ID is required');
         }
         if (!status?.trim()) {
            throw new Error('Status is required');
         }

         const validStatuses = [
            'pending',
            'in-progress',
            'done',
            'deferred',
            'cancelled',
            'blocked',
         ];
         if (!validStatuses.includes(status)) {
            throw new Error(`Invalid status. Must be one of: ${validStatuses.join(', ')}`);
         }

         // Check if task exists
         try {
            const existingTask = await taskMasterDB.getTask(parseInt(taskId));
            if (!existingTask) {
               throw new Error(`Task ${taskId} not found`);
            }
         } catch (dbError) {
            // Fallback to file operations
            const tasksData = await TaskMasterFileOperations.readTasks();
            const task = tasksData.master.tasks.find((t) => t.id === parseInt(taskId));
            if (!task) {
               throw new Error(`Task ${taskId} not found`);
            }
         }

         const operationId = await syncManager.updateTaskStatus(taskId, status, source);

         // Return enhanced sync operation object
         return {
            id: operationId,
            type: 'status_change',
            status: 'completed',
            timestamp: new Date(),
            source,
            data: {
               taskId: parseInt(taskId),
               newStatus: status,
               previousStatus: null, // Would be populated by actual sync manager
            },
            metadata: {
               status,
               triggeredBy: 'graphql_mutation',
               operationType: 'status_change',
            },
            retryCount: 0,
         };
      } catch (error) {
         console.error('Error updating task status:', error);
         throw new Error(`Failed to update task status: ${error.message}`);
      }
   },

   forceSync: async (_: any, { reason }: { reason?: string }) => {
      try {
         const description = reason || 'Force sync triggered via GraphQL';

         // Get current sync status
         const status = syncManager.getSyncStatus();

         // Force stop any current sync operations
         if (status.state === 'syncing') {
            console.log('Force stopping current sync operations...');
            await syncManager.cancelAllOperations();
         }

         // Trigger full sync with force flag
         const syncResult = await taskMasterSync.syncTasksToDatabase({
            full: true,
            force: true,
            reason: description,
         });

         return {
            success: true,
            message: 'Force sync completed successfully',
            result: syncResult,
            previousState: status.state,
            operationsProcessed: syncResult?.operationsCount || 0,
            conflictsResolved: syncResult?.conflictsResolved || 0,
            duration: syncResult?.duration || 0,
            triggeredAt: new Date(),
            reason: description,
         };
      } catch (error) {
         console.error('Error forcing sync:', error);
         return {
            success: false,
            message: `Force sync failed: ${error.message}`,
            result: null,
            previousState: 'unknown',
            operationsProcessed: 0,
            conflictsResolved: 0,
            duration: 0,
            triggeredAt: new Date(),
            reason: reason || 'Force sync triggered via GraphQL',
            error: error.message,
         };
      }
   },
};
