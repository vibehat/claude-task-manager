/**
 * Sync Resolver - TypeGraphQL Implementation
 *
 * Code-first GraphQL resolver for Sync operations
 */

import { Resolver, Query, Mutation, Args, Arg, Subscription, Int } from 'type-graphql';
import {
   SyncOperation,
   SyncStatus,
   SyncHealth,
   SyncConflict,
   TriggerSyncInput,
   ResolveConflictInput,
   RetryOperationInput,
   BatchUpdateInput,
   BatchUpdateResult,
   SyncOperationPayload,
   SyncOperationSubscriptionFilter,
   SyncOperationType,
   SyncOperationStatus,
   SyncState,
} from '../types/syncTypes';
import { TaskStatus } from '../types/taskTypes';
import { BaseResolver } from './baseResolver';
import { getGlobalSyncManager } from '../../core';
import { TaskMasterSync } from '../../taskmaster';
import { eventEmitter } from '../../websocketServer';
import { pubSub, Topic } from '../pubsub';
import {
   groupOperationsByType,
   groupOperationsBySource,
   calculateOperationDuration,
   formatOperationData,
   getRelatedOperations,
   getConflictSeverity,
   getConflictAffectedTask,
   calculateHealthScore,
   generateHealthRecommendations,
} from './shared/helpers';

const syncManager = getGlobalSyncManager();
const taskMasterSync = new TaskMasterSync();

@Resolver()
export class SyncResolver extends BaseResolver {
   // Helper methods to map internal types to GraphQL types
   private mapInternalTypeToGraphQL(internalType: string): SyncOperationType {
      const typeMap: Record<string, SyncOperationType> = {
         task_update: SyncOperationType.TASK_UPDATE,
         task_create: SyncOperationType.TASK_CREATE,
         task_delete: SyncOperationType.TASK_DELETE,
         status_change: SyncOperationType.STATUS_CHANGE,
         batch_update: SyncOperationType.BATCH_UPDATE,
      };
      return typeMap[internalType] || SyncOperationType.TASK_UPDATE;
   }

   private mapInternalStatusToGraphQL(internalStatus: string): SyncOperationStatus {
      const statusMap: Record<string, SyncOperationStatus> = {
         pending: SyncOperationStatus.PENDING,
         executing: SyncOperationStatus.EXECUTING,
         completed: SyncOperationStatus.COMPLETED,
         failed: SyncOperationStatus.FAILED,
         rolled_back: SyncOperationStatus.CANCELLED,
      };
      return statusMap[internalStatus] || SyncOperationStatus.PENDING;
   }
   @Query(() => SyncStatus)
   async syncStatus(): Promise<SyncStatus> {
      return this.logPerformance('syncStatus', async () => {
         try {
            const status = syncManager.getSyncStatus();
            const activeOperations = status.operations.filter((op) => op.status === 'executing');
            const completedOperations = status.operations.filter((op) => op.status === 'completed');
            const failedOperations = status.operations.filter((op) => op.status === 'failed');
            const pendingOperations = status.operations.filter((op) => op.status === 'pending');

            return {
               state:
                  status.state === 'syncing'
                     ? SyncState.SYNCING
                     : status.state === 'idle'
                       ? SyncState.IDLE
                       : SyncState.ERROR,
               queueSize: status.queueSize,
               operations: status.operations.map((op) => ({
                  id: op.id,
                  type: this.mapInternalTypeToGraphQL(op.type),
                  status: this.mapInternalStatusToGraphQL(op.status),
                  timestamp: new Date(op.timestamp),
                  completedAt: undefined, // Internal type doesn't have this field
                  source: op.source,
                  taskIds: op.data?.taskId ? [op.data.taskId] : [],
                  metadata: op.data,
                  retryCount: op.retryCount,
               })),
               conflicts: status.conflicts.map((conflict) => ({
                  id: conflict.id,
                  operationType: this.mapInternalTypeToGraphQL(conflict.operationA.type),
                  taskId: conflict.operationA.data?.taskId || 'unknown',
                  uiVersion: conflict.operationA.data,
                  cliVersion: conflict.operationB.data,
                  timestamp: new Date(
                     Math.min(conflict.operationA.timestamp, conflict.operationB.timestamp)
                  ),
                  resolved: conflict.resolved,
                  resolution: undefined, // Will be mapped separately if needed
                  resolvedAt: conflict.resolvedAt ? new Date(conflict.resolvedAt) : undefined,
               })),
               optimisticUpdatesCount: Object.keys(status.optimisticUpdates || {}).length,
            };
         } catch (error) {
            this.handleError(error, 'syncStatus query');
            throw error;
         }
      });
   }

   @Query(() => [SyncOperation])
   async syncOperations(
      @Arg('limit', () => Int, { defaultValue: 50 }) limit: number,
      @Arg('filter', () => String, { nullable: true }) filterStr?: string,
      @Arg('orderBy', () => String, { nullable: true }) orderByStr?: string
   ): Promise<SyncOperation[]> {
      return this.logPerformance('syncOperations', async () => {
         try {
            const status = syncManager.getSyncStatus();
            let operations = [...status.operations];

            // Apply filters if provided
            if (filterStr) {
               try {
                  const filter = JSON.parse(filterStr);
                  if (filter.type) {
                     operations = operations.filter((op) => op.type === filter.type);
                  }
                  if (filter.status) {
                     operations = operations.filter((op) => op.status === filter.status);
                  }
                  if (filter.source) {
                     operations = operations.filter((op) => op.source === filter.source);
                  }
                  if (filter.taskId) {
                     operations = operations.filter(
                        (op) => op.data && op.data.taskId === filter.taskId
                     );
                  }
                  if (filter.startDate) {
                     const startDate = new Date(filter.startDate).getTime();
                     operations = operations.filter((op) => op.timestamp >= startDate);
                  }
                  if (filter.endDate) {
                     const endDate = new Date(filter.endDate).getTime();
                     operations = operations.filter((op) => op.timestamp <= endDate);
                  }
               } catch (error) {
                  // Invalid JSON filter, ignore
               }
            }

            // Apply ordering
            if (orderByStr) {
               try {
                  const orderBy = JSON.parse(orderByStr);
                  const field = orderBy.field || 'timestamp';
                  const direction = orderBy.direction || 'desc';

                  operations.sort((a, b) => {
                     const aValue = a[field as keyof typeof a];
                     const bValue = b[field as keyof typeof b];

                     if (direction === 'asc') {
                        return aValue > bValue ? 1 : -1;
                     } else {
                        return aValue < bValue ? 1 : -1;
                     }
                  });
               } catch (error) {
                  // Invalid JSON orderBy, use default
                  operations.sort((a, b) => b.timestamp - a.timestamp);
               }
            } else {
               // Default: newest first
               operations.sort((a, b) => b.timestamp - a.timestamp);
            }

            return operations.slice(0, limit).map((op) => ({
               id: op.id,
               type: this.mapInternalTypeToGraphQL(op.type),
               status: this.mapInternalStatusToGraphQL(op.status),
               timestamp: new Date(op.timestamp),
               completedAt: undefined, // Internal type doesn't have this field
               source: op.source,
               taskIds: op.data?.taskId ? [op.data.taskId] : [],
               metadata: op.data,
               retryCount: op.retryCount,
            }));
         } catch (error) {
            this.handleError(error, 'syncOperations query');
            return [];
         }
      });
   }

   @Query(() => SyncOperation, { nullable: true })
   async syncOperation(@Arg('id') id: string): Promise<SyncOperation | null> {
      return this.logPerformance(`syncOperation(${id})`, async () => {
         try {
            const status = syncManager.getSyncStatus();
            const operation = status.operations.find((op) => op.id === id);

            if (!operation) {
               return null;
            }

            return {
               id: operation.id,
               type: this.mapInternalTypeToGraphQL(operation.type),
               status: this.mapInternalStatusToGraphQL(operation.status),
               timestamp: new Date(operation.timestamp),
               completedAt: undefined, // Internal type doesn't have this field
               source: operation.source,
               taskIds: operation.data?.taskId ? [operation.data.taskId] : [],
               metadata: operation.data,
               retryCount: operation.retryCount,
            };
         } catch (error) {
            this.handleError(error, `syncOperation(${id}) query`);
            return null;
         }
      });
   }

   @Query(() => [SyncConflict])
   async syncConflicts(
      @Arg('limit', { defaultValue: 20 }) limit: number,
      @Arg('resolved', { nullable: true }) resolved?: boolean
   ): Promise<SyncConflict[]> {
      return this.logPerformance('syncConflicts', async () => {
         try {
            const status = syncManager.getSyncStatus();
            let conflicts = [...status.conflicts];

            // Filter by resolution status if specified
            if (resolved !== null && resolved !== undefined) {
               conflicts = conflicts.filter((conflict) => conflict.resolved === resolved);
            }

            // Sort by timestamp (newest first)
            conflicts.sort((a, b) => {
               const aTime = Math.max(a.operationA?.timestamp || 0, a.operationB?.timestamp || 0);
               const bTime = Math.max(b.operationA?.timestamp || 0, b.operationB?.timestamp || 0);
               return bTime - aTime;
            });

            return conflicts.slice(0, limit).map((conflict) => ({
               id: conflict.id,
               operationType: this.mapInternalTypeToGraphQL(conflict.operationA.type),
               taskId: conflict.operationA.data?.taskId || 'unknown',
               uiVersion: conflict.operationA.data,
               cliVersion: conflict.operationB.data,
               timestamp: new Date(
                  Math.min(conflict.operationA.timestamp, conflict.operationB.timestamp)
               ),
               resolved: conflict.resolved,
               resolution: undefined, // Will be mapped separately if needed
               resolvedAt: conflict.resolvedAt ? new Date(conflict.resolvedAt) : undefined,
            }));
         } catch (error) {
            this.handleError(error, 'syncConflicts query');
            return [];
         }
      });
   }

   @Query(() => SyncHealth)
   async syncHealth(): Promise<SyncHealth> {
      return this.logPerformance('syncHealth', async () => {
         try {
            const status = syncManager.getSyncStatus();
            const now = Date.now();

            // Calculate health metrics
            const recentOperations = status.operations.filter(
               (op) => now - op.timestamp < 300000 // Last 5 minutes
            );

            const recentFailures = recentOperations.filter((op) => op.status === 'failed');
            const recentSuccesses = recentOperations.filter((op) => op.status === 'completed');

            const failureRate =
               recentOperations.length > 0
                  ? Math.round((recentFailures.length / recentOperations.length) * 100)
                  : 0;

            const unresolvedConflicts = status.conflicts.filter((c) => !c.resolved);
            const stalledOperations = status.operations.filter(
               (op) => op.status === 'executing' && now - op.timestamp > 120000 // Executing for over 2 minutes
            );

            // Determine overall health status
            let healthStatus: 'healthy' | 'warning' | 'critical' | 'degraded';
            const issues: string[] = [];

            if (status.state === 'error' || stalledOperations.length > 5) {
               healthStatus = 'critical';
               if (status.state === 'error') issues.push('Sync manager in error state');
               if (stalledOperations.length > 5)
                  issues.push(`${stalledOperations.length} stalled operations`);
            } else if (
               failureRate > 25 ||
               unresolvedConflicts.length > 10 ||
               status.queueSize > 100
            ) {
               healthStatus = 'warning';
               if (failureRate > 25) issues.push(`High failure rate: ${failureRate}%`);
               if (unresolvedConflicts.length > 10)
                  issues.push(`${unresolvedConflicts.length} unresolved conflicts`);
               if (status.queueSize > 100) issues.push(`Large queue size: ${status.queueSize}`);
            } else if (failureRate > 10 || status.queueSize > 50) {
               healthStatus = 'degraded';
               if (failureRate > 10) issues.push(`Elevated failure rate: ${failureRate}%`);
               if (status.queueSize > 50) issues.push(`Queue size: ${status.queueSize}`);
            } else {
               healthStatus = 'healthy';
            }

            return {
               status: healthStatus,
               score: calculateHealthScore(
                  failureRate,
                  unresolvedConflicts.length,
                  stalledOperations.length,
                  status.queueSize
               ),
               lastCheck: new Date(),
               metrics: {
                  recentFailureRate: failureRate,
                  unresolvedConflicts: unresolvedConflicts.length,
                  stalledOperations: stalledOperations.length,
                  queueSize: status.queueSize,
                  activeOperations: status.operations.filter((op) => op.status === 'executing')
                     .length,
               },
               issues,
               recommendations: generateHealthRecommendations(healthStatus, issues),
               uptime: process.uptime(),
               syncState:
                  status.state === 'syncing'
                     ? SyncState.SYNCING
                     : status.state === 'idle'
                       ? SyncState.IDLE
                       : SyncState.ERROR,
            };
         } catch (error) {
            this.handleError(error, 'syncHealth query');
            return {
               status: 'critical',
               score: 0,
               lastCheck: new Date(),
               metrics: {
                  recentFailureRate: 100,
                  unresolvedConflicts: 0,
                  stalledOperations: 0,
                  queueSize: 0,
                  activeOperations: 0,
               },
               issues: [`Health check failed: ${error.message}`],
               recommendations: ['Check sync manager status', 'Review error logs'],
               uptime: process.uptime(),
               syncState: SyncState.ERROR,
               error: error.message,
            };
         }
      });
   }

   // Mutations
   @Mutation(() => SyncOperation)
   async triggerSync(
      @Arg('input', () => TriggerSyncInput, { nullable: true }) input?: TriggerSyncInput
   ): Promise<SyncOperation> {
      try {
         // Implementation would call the sync mutations logic
         const syncType = input?.type || 'incremental';
         const priority = input?.priority || 'normal';
         const force = input?.force || false;
         const description = input?.description || `Manual ${syncType} sync triggered`;

         // Mock implementation for now
         const operationId = `sync_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

         return {
            id: operationId,
            type: SyncOperationType.BATCH_UPDATE,
            status: SyncOperationStatus.COMPLETED,
            timestamp: new Date(),
            source: 'api',
            taskIds: [],
            metadata: { syncType, priority, force, description },
            retryCount: 0,
         };
      } catch (error) {
         this.handleError(error, 'triggerSync mutation');
         throw error;
      }
   }

   @Mutation(() => SyncOperation)
   async updateTaskStatus(
      @Arg('taskId') taskId: string,
      @Arg('status', () => TaskStatus) status: TaskStatus,
      @Arg('source', { defaultValue: 'ui' }) source: string
   ): Promise<SyncOperation> {
      try {
         const validSource = source === 'websocket' ? 'websocket' : 'ui';
         const operationId = await syncManager.updateTaskStatus(taskId, status, validSource);

         return {
            id: operationId,
            type: SyncOperationType.STATUS_CHANGE,
            status: SyncOperationStatus.COMPLETED,
            timestamp: new Date(),
            source,
            taskIds: [taskId],
            metadata: { status, triggeredBy: 'graphql_mutation' },
            retryCount: 0,
         };
      } catch (error) {
         this.handleError(error, 'updateTaskStatus mutation');
         throw error;
      }
   }

   @Mutation(() => Boolean)
   async forceSync(@Arg('reason', { nullable: true }) reason?: string): Promise<boolean> {
      try {
         const description = reason || 'Force sync triggered via GraphQL';

         // Get current sync status
         const status = syncManager.getSyncStatus();

         // Log current sync state
         if (status.state === 'syncing') {
            console.log('Current sync operations will be allowed to complete...');
         }

         // Trigger full sync
         const syncResult = await taskMasterSync.syncTasksToDatabase({
            incremental: false,
            validateIntegrity: true,
         });

         return syncResult?.success || true;
      } catch (error) {
         this.handleError(error, 'forceSync mutation');
         return false;
      }
   }

   // Subscriptions
   @Subscription(() => SyncOperationPayload, {
      topics: Topic.SYNC_OPERATION,
   })
   async syncOperationUpdated(
      @Arg('filter', () => SyncOperationSubscriptionFilter, { nullable: true })
      filter?: SyncOperationSubscriptionFilter
   ): Promise<SyncOperationPayload> {
      // This would be implemented with your subscription system
      throw new Error('Subscriptions not implemented yet');
   }
}
