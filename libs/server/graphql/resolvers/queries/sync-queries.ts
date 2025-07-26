import { getGlobalSyncManager } from '../../../core';
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
} from '../shared/helpers';

const syncManager = getGlobalSyncManager();

export const syncQueries = {
   // Sync queries - Enhanced with comprehensive monitoring and filtering
   syncStatus: async () => {
      try {
         const status = syncManager.getSyncStatus();
         const activeOperations = status.operations.filter((op) => op.status === 'executing');
         const completedOperations = status.operations.filter((op) => op.status === 'completed');
         const failedOperations = status.operations.filter((op) => op.status === 'failed');
         const pendingOperations = status.operations.filter((op) => op.status === 'pending');

         // Calculate success rate
         const totalCompleted = completedOperations.length + failedOperations.length;
         const successRate =
            totalCompleted > 0
               ? Math.round((completedOperations.length / totalCompleted) * 100)
               : 0;

         // Calculate average operation time
         const avgExecutionTime =
            completedOperations.length > 0
               ? Math.round(
                    completedOperations.reduce((sum, op) => {
                       const duration = op.timestamp ? Date.now() - op.timestamp : 0;
                       return sum + duration;
                    }, 0) / completedOperations.length
                 )
               : 0;

         return {
            state: status.state,
            isHealthy: status.state !== 'error',
            queueSize: status.queueSize,
            activeOperationsCount: activeOperations.length,
            completedOperationsCount: completedOperations.length,
            failedOperationsCount: failedOperations.length,
            pendingOperationsCount: pendingOperations.length,
            conflictsCount: status.conflicts.length,
            optimisticUpdatesCount: Object.keys(status.optimisticUpdates).length,
            metrics: {
               successRate,
               averageExecutionTime: avgExecutionTime,
               totalOperations: status.operations.length,
               operationsByType: groupOperationsByType(status.operations),
               operationsBySource: groupOperationsBySource(status.operations),
            },
            lastUpdated: new Date(),
         };
      } catch (error) {
         console.error('Error fetching sync status:', error);
         return {
            state: 'error',
            isHealthy: false,
            queueSize: 0,
            activeOperationsCount: 0,
            completedOperationsCount: 0,
            failedOperationsCount: 0,
            pendingOperationsCount: 0,
            conflictsCount: 0,
            optimisticUpdatesCount: 0,
            metrics: {
               successRate: 0,
               averageExecutionTime: 0,
               totalOperations: 0,
               operationsByType: {},
               operationsBySource: {},
            },
            lastUpdated: new Date(),
            error: error.message,
         };
      }
   },

   syncOperations: (
      _: any,
      {
         limit = 50,
         filter,
         orderBy,
      }: {
         limit?: number;
         filter?: any;
         orderBy?: any;
      }
   ) => {
      try {
         const status = syncManager.getSyncStatus();
         let operations = [...status.operations];

         // Apply filters if provided
         if (filter) {
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
               operations = operations.filter((op) => op.data && op.data.taskId === filter.taskId);
            }
            if (filter.startDate) {
               const startDate = new Date(filter.startDate).getTime();
               operations = operations.filter((op) => op.timestamp >= startDate);
            }
            if (filter.endDate) {
               const endDate = new Date(filter.endDate).getTime();
               operations = operations.filter((op) => op.timestamp <= endDate);
            }
         }

         // Apply ordering
         if (orderBy) {
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
         } else {
            // Default: newest first
            operations.sort((a, b) => b.timestamp - a.timestamp);
         }

         return operations.slice(0, limit).map((op) => ({
            ...op,
            timestamp: new Date(op.timestamp),
            duration: op.status === 'completed' ? calculateOperationDuration(op) : null,
            formattedData: formatOperationData(op),
         }));
      } catch (error) {
         console.error('Error fetching sync operations:', error);
         return [];
      }
   },

   syncOperation: (_: any, { id }: { id: string }) => {
      try {
         const status = syncManager.getSyncStatus();
         const operation = status.operations.find((op) => op.id === id);

         if (!operation) {
            throw new Error(`Sync operation '${id}' not found`);
         }

         return {
            ...operation,
            timestamp: new Date(operation.timestamp),
            duration:
               operation.status === 'completed' ? calculateOperationDuration(operation) : null,
            formattedData: formatOperationData(operation),
            relatedOperations: getRelatedOperations(operation, status.operations),
         };
      } catch (error) {
         console.error(`Error fetching sync operation '${id}':`, error);
         throw new Error(`Failed to get sync operation: ${error.message}`);
      }
   },

   syncConflicts: (
      _: any,
      {
         limit = 20,
         resolved = null,
      }: {
         limit?: number;
         resolved?: boolean | null;
      }
   ) => {
      try {
         const status = syncManager.getSyncStatus();
         let conflicts = [...status.conflicts];

         // Filter by resolution status if specified
         if (resolved !== null) {
            conflicts = conflicts.filter((conflict) => conflict.resolved === resolved);
         }

         // Sort by timestamp (newest first)
         conflicts.sort((a, b) => {
            const aTime = Math.max(a.operationA.timestamp, a.operationB.timestamp);
            const bTime = Math.max(b.operationA.timestamp, b.operationB.timestamp);
            return bTime - aTime;
         });

         return conflicts.slice(0, limit).map((conflict) => ({
            ...conflict,
            createdAt: new Date(
               Math.min(conflict.operationA.timestamp, conflict.operationB.timestamp)
            ),
            resolvedAt: conflict.resolvedAt ? new Date(conflict.resolvedAt) : null,
            age:
               Date.now() - Math.min(conflict.operationA.timestamp, conflict.operationB.timestamp),
            severity: getConflictSeverity(conflict),
            affectedTask: getConflictAffectedTask(conflict),
         }));
      } catch (error) {
         console.error('Error fetching sync conflicts:', error);
         return [];
      }
   },

   syncHealth: async () => {
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
         } else if (failureRate > 25 || unresolvedConflicts.length > 10 || status.queueSize > 100) {
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
               activeOperations: status.operations.filter((op) => op.status === 'executing').length,
            },
            issues,
            recommendations: generateHealthRecommendations(healthStatus, issues),
            uptime: process.uptime(),
            syncState: status.state,
         };
      } catch (error) {
         console.error('Error checking sync health:', error);
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
            syncState: 'error',
            error: error.message,
         };
      }
   },
};
