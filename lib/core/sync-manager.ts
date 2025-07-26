import { EventEmitter } from 'events';
import { TaskMasterFileOperations } from './fs-operations';
import { getGlobalFileWatcher } from './file-watcher';
import { cliExecutor, CLIExecutionResult } from '../cli';
// GraphQL subscriptions will be used for real-time updates
import { TasksData, Task, TaskStatus } from '../types/taskmaster';
import {
   getGlobalErrorHandler,
   ErrorType,
   ErrorUtils,
   TaskMasterError,
} from '../core/error-handler';

// Sync operation types
export interface SyncOperation {
   id: string;
   type: 'task_update' | 'task_create' | 'task_delete' | 'status_change' | 'batch_update';
   timestamp: number;
   source: 'ui' | 'cli' | 'file';
   data: any;
   rollbackData?: any;
   status: 'pending' | 'executing' | 'completed' | 'failed' | 'rolled_back';
   retryCount: number;
   maxRetries: number;
}

// Conflict resolution strategies
export enum ConflictResolution {
   UI_WINS = 'ui_wins', // UI changes take precedence
   CLI_WINS = 'cli_wins', // CLI/file changes take precedence
   LAST_WRITE_WINS = 'last_write_wins', // Most recent change wins
   MERGE = 'merge', // Attempt to merge changes
   USER_RESOLVE = 'user_resolve', // Require user intervention
}

// Sync conflict information
export interface SyncConflict {
   id: string;
   operationA: SyncOperation;
   operationB: SyncOperation;
   conflictType: 'concurrent_update' | 'data_mismatch' | 'version_conflict';
   resolution: ConflictResolution;
   resolved: boolean;
   resolvedAt?: number;
   resolvedBy?: string;
}

// Batch operation configuration
export interface BatchOperation {
   id: string;
   operations: SyncOperation[];
   atomicity: boolean; // All succeed or all fail
   maxConcurrency: number;
   timeout: number;
   status: 'pending' | 'executing' | 'completed' | 'failed' | 'partial';
   results: Map<string, { success: boolean; result?: any; error?: string }>;
}

// Sync manager events
export interface SyncManagerEvents {
   operationStarted: SyncOperation;
   operationCompleted: SyncOperation;
   operationFailed: { operation: SyncOperation; error: Error };
   conflictDetected: SyncConflict;
   conflictResolved: SyncConflict;
   batchStarted: BatchOperation;
   batchCompleted: BatchOperation;
   syncStateChanged: { state: 'syncing' | 'idle' | 'error'; activeOperations: number };
}

// Main bidirectional sync manager
export class TaskMasterSyncManager extends EventEmitter {
   private operations = new Map<string, SyncOperation>();
   private conflicts = new Map<string, SyncConflict>();
   private batches = new Map<string, BatchOperation>();
   private syncState: 'syncing' | 'idle' | 'error' = 'idle';
   private operationQueue: SyncOperation[] = [];
   private isProcessingQueue = false;
   private maxConcurrentOperations = 5;
   private syncInterval: NodeJS.Timeout | null = null;
   private fileWatcher = getGlobalFileWatcher();
   // GraphQL subscriptions will replace WebSocket server
   private lastKnownState: TasksData | null = null;
   private optimisticUpdates = new Map<string, any>();
   private errorHandler = getGlobalErrorHandler();

   constructor() {
      super();
      this.setupEventHandlers();
      this.startSyncMonitoring();
      this.setupErrorHandling();
   }

   // Setup error handling for sync operations
   private setupErrorHandling(): void {
      this.errorHandler.on('errorRecovered', (error: TaskMasterError) => {
         if (error.context.syncOperationId) {
            this.emit('syncErrorRecovered', { error, operationId: error.context.syncOperationId });
         }
      });

      this.errorHandler.on('errorEscalated', (error: TaskMasterError) => {
         if (error.context.syncOperationId) {
            this.syncState = 'error';
            this.emit('syncErrorEscalated', { error, operationId: error.context.syncOperationId });
         }
      });
   }

   // Setup event handlers for file watcher, WebSocket, and CLI
   private setupEventHandlers(): void {
      // File system changes
      this.fileWatcher.on('tasksChanged', (event) => {
         this.handleFileSystemChange(event);
      });

      // GraphQL subscriptions will handle client connections
      // await this.broadcastSyncState(); will be triggered by GraphQL

      // CLI executor events
      cliExecutor.on('commandComplete', (result) => {
         this.handleCLICommandResult(result);
      });

      cliExecutor.on('commandError', (data) => {
         this.handleCLICommandError(data);
      });
   }

   // Start sync monitoring
   private startSyncMonitoring(): void {
      this.syncInterval = setInterval(async () => {
         try {
            await this.processSyncQueue();
            await this.detectStalledOperations();
            await this.broadcastSyncState();
         } catch (error) {
            const monitoringError = this.errorHandler.createError(
               ErrorType.SYNC_OPERATION_FAILED,
               `Sync monitoring cycle failed: ${error.message}`,
               { operation: 'syncMonitoring', component: 'SyncManager' },
               error as Error
            );

            await this.errorHandler.handleError(monitoringError, true);
         }
      }, 1000); // Check every second
   }

   // Handle file system changes with enhanced error handling
   private async handleFileSystemChange(event: any): Promise<void> {
      if (event.error) {
         const fileSystemError = this.errorHandler.createError(
            ErrorType.FILE_CORRUPTED,
            `File system change error: ${event.error}`,
            { event, filename: event.filename }
         );
         await this.errorHandler.handleError(fileSystemError, true);
         return;
      }

      try {
         const currentState = await this.errorHandler.retryOperation(
            () => TaskMasterFileOperations.readTasks(),
            { operation: 'readTasks', source: 'fileSystemChange' },
            { maxAttempts: 3, baseDelay: 500 }
         );

         if (this.lastKnownState) {
            const changes = this.detectTaskChanges(this.lastKnownState, currentState);

            for (const change of changes) {
               const operation: SyncOperation = {
                  id: this.generateOperationId(),
                  type: change.type,
                  timestamp: Date.now(),
                  source: 'file',
                  data: change.data,
                  status: 'completed', // File changes are already applied
                  retryCount: 0,
                  maxRetries: 0,
               };

               this.operations.set(operation.id, operation);
               this.emit('operationCompleted', operation);

               // Broadcast to WebSocket clients with error handling
               try {
                  // TODO: Use GraphQL subscription
                  // this.wsServer.broadcast('tasks', 'task-sync-update', {
                  //    operation,
                  //    change,
                  //    timestamp: new Date().toISOString(),
                  // });
               } catch (broadcastError) {
                  const wsError = this.errorHandler.createError(
                     ErrorType.WEBSOCKET_MESSAGE_FAILED,
                     `Failed to broadcast sync update: ${broadcastError.message}`,
                     { operation: operation.id, change },
                     broadcastError as Error
                  );
                  await this.errorHandler.handleError(wsError, true);
               }
            }
         }

         this.lastKnownState = currentState;
      } catch (error) {
         const syncError = this.errorHandler.createError(
            ErrorType.SYNC_OPERATION_FAILED,
            `Error processing file system change: ${error.message}`,
            { event, operation: 'handleFileSystemChange' },
            error as Error
         );

         await this.errorHandler.handleError(syncError, true);
         this.syncState = 'error';
      }
   }

   // Detect changes between two task states
   private detectTaskChanges(oldState: TasksData, newState: TasksData): any[] {
      const changes: any[] = [];
      const oldTasks = new Map(oldState.master.tasks.map((t) => [t.id, t]));
      const newTasks = new Map(newState.master.tasks.map((t) => [t.id, t]));

      // Detect updates and new tasks
      for (const [id, newTask] of newTasks) {
         const oldTask = oldTasks.get(id);

         if (!oldTask) {
            // New task
            changes.push({
               type: 'task_create',
               data: { task: newTask, taskId: id },
            });
         } else if (JSON.stringify(oldTask) !== JSON.stringify(newTask)) {
            // Updated task
            changes.push({
               type: 'task_update',
               data: {
                  task: newTask,
                  taskId: id,
                  oldTask,
                  changes: this.getTaskDifferences(oldTask, newTask),
               },
            });
         }
      }

      // Detect deleted tasks
      for (const [id, oldTask] of oldTasks) {
         if (!newTasks.has(id)) {
            changes.push({
               type: 'task_delete',
               data: { task: oldTask, taskId: id },
            });
         }
      }

      return changes;
   }

   // Get specific differences between tasks
   private getTaskDifferences(oldTask: any, newTask: any): any {
      const differences: any = {};

      for (const key in newTask) {
         if (JSON.stringify(oldTask[key]) !== JSON.stringify(newTask[key])) {
            differences[key] = {
               old: oldTask[key],
               new: newTask[key],
            };
         }
      }

      return differences;
   }

   // Handle CLI command results
   private handleCLICommandResult(result: CLIExecutionResult): void {
      // Find operations that were waiting for this CLI result
      const pendingOps = Array.from(this.operations.values()).filter(
         (op) => op.status === 'executing' && op.source === 'ui'
      );

      for (const op of pendingOps) {
         if (this.isCLIResultForOperation(result, op)) {
            op.status = 'completed';
            this.emit('operationCompleted', op);

            // Remove optimistic update
            this.optimisticUpdates.delete(op.id);

            // Broadcast success
            // TODO: Use GraphQL subscription
            // this.wsServer.broadcast('tasks', 'sync-operation-completed', {
            //    operationId: op.id,
            //    result,
            //    timestamp: new Date().toISOString(),
            // });
         }
      }
   }

   // Handle CLI command errors
   private handleCLICommandError(data: any): void {
      const pendingOps = Array.from(this.operations.values()).filter(
         (op) => op.status === 'executing' && op.source === 'ui'
      );

      for (const op of pendingOps) {
         if (this.isCLIResultForOperation(data.result, op)) {
            // Attempt rollback
            if (op.retryCount < op.maxRetries) {
               op.retryCount++;
               op.status = 'pending';
               this.operationQueue.push(op);
            } else {
               op.status = 'failed';
               this.rollbackOperation(op);
               this.emit('operationFailed', { operation: op, error: data.error });
            }
         }
      }
   }

   // Check if CLI result matches operation
   private isCLIResultForOperation(result: CLIExecutionResult, operation: SyncOperation): boolean {
      // Simple heuristic based on timing and command content
      const timeDiff = Math.abs(Date.now() - operation.timestamp);
      return timeDiff < 30000; // Within 30 seconds
   }

   // Execute optimistic update with rollback capability and enhanced error handling
   async executeOptimisticUpdate(operation: SyncOperation): Promise<void> {
      const operationContext = {
         operationId: operation.id,
         operationType: operation.type,
         source: operation.source,
         taskId: operation.data.taskId,
         syncOperationId: operation.id,
      };

      try {
         // Store current state for rollback with error handling
         const currentState = await this.errorHandler.retryOperation(
            () => TaskMasterFileOperations.readTasks(),
            { ...operationContext, operation: 'readTasksForRollback' },
            { maxAttempts: 2, baseDelay: 500 }
         );

         operation.rollbackData = JSON.parse(JSON.stringify(currentState));

         // Apply optimistic update to UI state
         this.optimisticUpdates.set(operation.id, operation.data);
         operation.status = 'executing';

         this.operations.set(operation.id, operation);
         this.emit('operationStarted', operation);

         // Broadcast optimistic update to clients with error handling
         try {
            // TODO: Use GraphQL subscription
            // this.wsServer.broadcast('tasks', 'optimistic-update', {
            //    operationId: operation.id,
            //    data: operation.data,
            //    timestamp: new Date().toISOString(),
            // });
         } catch (broadcastError) {
            const wsError = this.errorHandler.createError(
               ErrorType.WEBSOCKET_MESSAGE_FAILED,
               `Failed to broadcast optimistic update: ${broadcastError.message}`,
               operationContext,
               broadcastError as Error
            );

            // Don't fail the operation for broadcast errors, just log
            await this.errorHandler.handleError(wsError, true);
         }

         // Execute CLI command with error handling
         await this.executeCLIOperation(operation);
      } catch (error) {
         operation.status = 'failed';

         // Create structured error for optimistic update failure
         const optimisticError = this.errorHandler.createError(
            ErrorType.SYNC_OPERATION_FAILED,
            `Optimistic update failed: ${error.message}`,
            operationContext,
            error as Error
         );

         // Attempt rollback with error handling
         try {
            await this.rollbackOperation(operation);
         } catch (rollbackError) {
            const rollbackFailedError = this.errorHandler.createError(
               ErrorType.SYNC_ROLLBACK_FAILED,
               `Rollback failed after optimistic update failure: ${rollbackError.message}`,
               { ...operationContext, originalError: error },
               rollbackError as Error
            );

            await this.errorHandler.handleError(rollbackFailedError, true);
         }

         this.emit('operationFailed', { operation, error: optimisticError });

         // Handle error with retry logic
         const recovered = await this.errorHandler.handleError(optimisticError, true);
         if (!recovered) {
            throw optimisticError;
         }
      }
   }

   // Execute CLI operation based on sync operation with enhanced error handling
   private async executeCLIOperation(operation: SyncOperation): Promise<void> {
      const operationContext = {
         operationId: operation.id,
         operationType: operation.type,
         source: operation.source,
         taskId: operation.data.taskId,
         syncOperationId: operation.id,
      };

      const executeWithRetry = async (commandConfig: any) => {
         return await this.errorHandler.retryOperation(
            () => cliExecutor.executeCommand(commandConfig),
            { ...operationContext, commandConfig },
            {
               maxAttempts: 3,
               baseDelay: 1000,
               maxDelay: 10000,
               retryableErrors: [
                  ErrorType.CLI_TIMEOUT,
                  ErrorType.NETWORK_TIMEOUT,
                  ErrorType.CLI_EXECUTION_FAILED,
               ],
            }
         );
      };

      try {
         switch (operation.type) {
            case 'status_change':
               await executeWithRetry({
                  command: 'set-status',
                  args: [`--id=${operation.data.taskId}`, `--status=${operation.data.status}`],
                  parseOutput: true,
                  timeout: 15000,
               });
               break;

            case 'task_update':
               await executeWithRetry({
                  command: 'update-task',
                  args: [`--id=${operation.data.taskId}`, `--prompt=${operation.data.changes}`],
                  parseOutput: true,
                  timeout: 30000,
               });
               break;

            case 'task_create':
               await executeWithRetry({
                  command: 'add-task',
                  args: [`--prompt=${operation.data.description}`],
                  parseOutput: true,
                  timeout: 45000,
               });
               break;

            case 'batch_update':
               // Handle batch operations by executing individual commands
               const batchErrors: Error[] = [];
               for (const item of operation.data.items || []) {
                  try {
                     await executeWithRetry({
                        command: 'set-status',
                        args: [`--id=${item.taskId}`, `--status=${item.status}`],
                        parseOutput: true,
                        timeout: 15000,
                     });
                  } catch (itemError) {
                     batchErrors.push(itemError as Error);

                     // For atomic batch operations, fail immediately
                     if (operation.data.atomicity) {
                        throw itemError;
                     }
                  }
               }

               // If non-atomic batch had some failures, report them
               if (batchErrors.length > 0 && !operation.data.atomicity) {
                  const batchError = this.errorHandler.createError(
                     ErrorType.SYNC_OPERATION_FAILED,
                     `Batch operation completed with ${batchErrors.length} failures`,
                     { ...operationContext, batchErrors: batchErrors.map((e) => e.message) }
                  );
                  await this.errorHandler.handleError(batchError, true);
               }
               break;

            default:
               const unsupportedError = this.errorHandler.createError(
                  ErrorType.VALIDATION_TYPE_MISMATCH,
                  `Unsupported operation type: ${operation.type}`,
                  operationContext
               );
               throw unsupportedError;
         }
      } catch (error) {
         // Create comprehensive CLI operation error
         const cliError = this.errorHandler.createError(
            ErrorType.CLI_EXECUTION_FAILED,
            `CLI operation failed for ${operation.type}: ${error.message}`,
            {
               ...operationContext,
               originalError: error.message,
               commandType: operation.type,
            },
            error as Error
         );

         // Handle the error and potentially retry
         const recovered = await this.errorHandler.handleError(cliError, true);
         if (!recovered) {
            throw cliError;
         }
      }
   }

   // Rollback operation with enhanced error handling
   private async rollbackOperation(operation: SyncOperation): Promise<void> {
      const rollbackContext = {
         operationId: operation.id,
         operationType: operation.type,
         source: operation.source,
         taskId: operation.data.taskId,
         rollbackOperation: true,
         syncOperationId: operation.id,
      };

      try {
         if (operation.rollbackData) {
            // Restore previous state with retry logic
            await this.errorHandler.retryOperation(
               () => TaskMasterFileOperations.writeTasks(operation.rollbackData),
               { ...rollbackContext, operation: 'restorePreviousState' },
               { maxAttempts: 3, baseDelay: 500, maxDelay: 5000 }
            );

            // Remove optimistic update
            this.optimisticUpdates.delete(operation.id);

            // Broadcast rollback with error handling
            try {
               // TODO: Use GraphQL subscription
               // this.wsServer.broadcast('tasks', 'operation-rolled-back', {
               //    operationId: operation.id,
               //    timestamp: new Date().toISOString(),
               //    rollbackData: {
               //       operationType: operation.type,
               //       taskId: operation.data.taskId,
               //    },
               // });
            } catch (broadcastError) {
               const wsError = this.errorHandler.createError(
                  ErrorType.WEBSOCKET_MESSAGE_FAILED,
                  `Failed to broadcast rollback notification: ${broadcastError.message}`,
                  rollbackContext,
                  broadcastError as Error
               );

               // Don't fail rollback for broadcast errors, just log
               await this.errorHandler.handleError(wsError, true);
            }

            operation.status = 'rolled_back';
            operation.metadata = {
               ...operation.metadata,
               rolledBackAt: new Date().toISOString(),
               rollbackReason: 'Operation failed and was automatically rolled back',
            };

            console.log(`Successfully rolled back operation ${operation.id}`);
         } else {
            const noRollbackDataError = this.errorHandler.createError(
               ErrorType.SYNC_ROLLBACK_FAILED,
               `Cannot rollback operation ${operation.id}: No rollback data available`,
               rollbackContext
            );

            await this.errorHandler.handleError(noRollbackDataError, true);
         }
      } catch (error) {
         const rollbackError = this.errorHandler.createError(
            ErrorType.SYNC_ROLLBACK_FAILED,
            `Failed to rollback operation ${operation.id}: ${error.message}`,
            rollbackContext,
            error as Error
         );

         // Mark operation as failed rollback
         operation.status = 'failed';
         operation.metadata = {
            ...operation.metadata,
            rollbackFailed: true,
            rollbackError: error.message,
            rollbackAttemptedAt: new Date().toISOString(),
         };

         await this.errorHandler.handleError(rollbackError, true);
         throw rollbackError;
      }
   }

   // Execute batch operations with enhanced error handling
   async executeBatchOperation(batch: BatchOperation): Promise<void> {
      const batchContext = {
         batchId: batch.id,
         operationCount: batch.operations.length,
         atomicity: batch.atomicity,
         maxConcurrency: batch.maxConcurrency,
         batchOperation: true,
      };

      try {
         batch.status = 'executing';
         this.batches.set(batch.id, batch);
         this.emit('batchStarted', batch);

         const results = new Map<string, { success: boolean; result?: any; error?: string }>();
         const executing: Promise<void>[] = [];
         let concurrentCount = 0;
         let failedOperations = 0;

         for (const operation of batch.operations) {
            if (concurrentCount >= batch.maxConcurrency) {
               // Wait for one to complete
               await Promise.race(executing);
               concurrentCount--;
            }

            const executionPromise = this.errorHandler
               .retryOperation(
                  () => this.executeOptimisticUpdate(operation),
                  {
                     ...batchContext,
                     operationId: operation.id,
                     operationType: operation.type,
                     syncOperationId: operation.id,
                  },
                  {
                     maxAttempts: batch.atomicity ? 1 : 2, // Fewer retries for atomic batches
                     baseDelay: 500,
                     maxDelay: 5000,
                     retryableErrors: [
                        ErrorType.CLI_TIMEOUT,
                        ErrorType.NETWORK_TIMEOUT,
                        ErrorType.SYNC_OPERATION_FAILED,
                     ],
                  }
               )
               .then((result) => {
                  results.set(operation.id, { success: true, result });
                  concurrentCount--;
               })
               .catch((error) => {
                  failedOperations++;
                  results.set(operation.id, { success: false, error: error.message });
                  concurrentCount--;

                  if (batch.atomicity) {
                     // If atomic and one fails, mark batch as failed immediately
                     batch.status = 'failed';

                     const atomicFailureError = this.errorHandler.createError(
                        ErrorType.SYNC_OPERATION_FAILED,
                        `Atomic batch operation failed on operation ${operation.id}: ${error.message}`,
                        { ...batchContext, failedOperationId: operation.id },
                        error as Error
                     );

                     throw atomicFailureError;
                  }
               });

            executing.push(executionPromise);
            concurrentCount++;
         }

         try {
            await Promise.all(executing);

            // Determine final batch status
            if (failedOperations === 0) {
               batch.status = 'completed';
            } else if (failedOperations < batch.operations.length) {
               batch.status = 'partial';

               // Log partial failure
               const partialFailureError = this.errorHandler.createError(
                  ErrorType.SYNC_OPERATION_FAILED,
                  `Batch operation completed with ${failedOperations}/${batch.operations.length} failures`,
                  {
                     ...batchContext,
                     failedOperations,
                     successfulOperations: batch.operations.length - failedOperations,
                  }
               );

               await this.errorHandler.handleError(partialFailureError, true);
            } else {
               batch.status = 'failed';
            }
         } catch (error) {
            if (batch.atomicity) {
               // Rollback all successful operations
               const successfulOperations = batch.operations.filter(
                  (op) => results.get(op.id)?.success
               );

               if (successfulOperations.length > 0) {
                  console.log(
                     `Rolling back ${successfulOperations.length} successful operations due to atomic batch failure`
                  );

                  for (const op of successfulOperations) {
                     try {
                        await this.rollbackOperation(op);
                     } catch (rollbackError) {
                        const rollbackFailedError = this.errorHandler.createError(
                           ErrorType.SYNC_ROLLBACK_FAILED,
                           `Failed to rollback operation ${op.id} during atomic batch rollback: ${rollbackError.message}`,
                           { ...batchContext, operationId: op.id },
                           rollbackError as Error
                        );

                        await this.errorHandler.handleError(rollbackFailedError, true);
                     }
                  }
               }

               batch.status = 'failed';
            } else {
               batch.status = 'partial';
            }
         }

         batch.results = results;

         // Add completion metadata
         batch.metadata = {
            ...batch.metadata,
            completedAt: new Date().toISOString(),
            duration: Date.now() - (batch.metadata?.startedAt || 0),
            successfulOperations: Array.from(results.values()).filter((r) => r.success).length,
            failedOperations,
            finalStatus: batch.status,
         };

         this.emit('batchCompleted', batch);
      } catch (error) {
         batch.status = 'failed';

         const batchError = this.errorHandler.createError(
            ErrorType.SYNC_OPERATION_FAILED,
            `Batch operation failed: ${error.message}`,
            batchContext,
            error as Error
         );

         batch.metadata = {
            ...batch.metadata,
            failedAt: new Date().toISOString(),
            error: error.message,
         };

         await this.errorHandler.handleError(batchError, true);
         this.emit('batchCompleted', batch);

         throw batchError;
      }
   }

   // Detect and resolve conflicts
   private detectConflicts(): SyncConflict[] {
      const conflicts: SyncConflict[] = [];
      const operations = Array.from(this.operations.values());

      for (let i = 0; i < operations.length; i++) {
         for (let j = i + 1; j < operations.length; j++) {
            const opA = operations[i];
            const opB = operations[j];

            if (this.areOperationsConflicting(opA, opB)) {
               const conflict: SyncConflict = {
                  id: this.generateConflictId(),
                  operationA: opA,
                  operationB: opB,
                  conflictType: this.getConflictType(opA, opB),
                  resolution: ConflictResolution.LAST_WRITE_WINS, // Default strategy
                  resolved: false,
               };

               conflicts.push(conflict);
               this.conflicts.set(conflict.id, conflict);
               this.emit('conflictDetected', conflict);
            }
         }
      }

      return conflicts;
   }

   // Check if operations are conflicting
   private areOperationsConflicting(opA: SyncOperation, opB: SyncOperation): boolean {
      // Same task being modified
      if (opA.data.taskId === opB.data.taskId && opA.id !== opB.id) {
         const timeDiff = Math.abs(opA.timestamp - opB.timestamp);
         return timeDiff < 5000; // Within 5 seconds considered concurrent
      }
      return false;
   }

   // Get conflict type
   private getConflictType(
      opA: SyncOperation,
      opB: SyncOperation
   ): 'concurrent_update' | 'data_mismatch' | 'version_conflict' {
      if (Math.abs(opA.timestamp - opB.timestamp) < 1000) {
         return 'concurrent_update';
      }
      return 'data_mismatch';
   }

   // Resolve conflict
   async resolveConflict(conflictId: string, resolution: ConflictResolution): Promise<void> {
      const conflict = this.conflicts.get(conflictId);
      if (!conflict) return;

      try {
         switch (resolution) {
            case ConflictResolution.UI_WINS:
               await this.rollbackOperation(conflict.operationB);
               break;

            case ConflictResolution.CLI_WINS:
               await this.rollbackOperation(conflict.operationA);
               break;

            case ConflictResolution.LAST_WRITE_WINS:
               const laterOp =
                  conflict.operationA.timestamp > conflict.operationB.timestamp
                     ? conflict.operationA
                     : conflict.operationB;
               const earlierOp =
                  laterOp === conflict.operationA ? conflict.operationB : conflict.operationA;
               await this.rollbackOperation(earlierOp);
               break;
         }

         conflict.resolved = true;
         conflict.resolvedAt = Date.now();
         conflict.resolution = resolution;

         this.emit('conflictResolved', conflict);
      } catch (error) {
         console.error(`Failed to resolve conflict ${conflictId}:`, error);
      }
   }

   // Process sync operation queue with enhanced error handling
   private async processSyncQueue(): Promise<void> {
      if (this.isProcessingQueue || this.operationQueue.length === 0) {
         return;
      }

      this.isProcessingQueue = true;
      this.syncState = 'syncing';

      const queueContext = {
         operation: 'processSyncQueue',
         queueSize: this.operationQueue.length,
         maxConcurrentOperations: this.maxConcurrentOperations,
         component: 'SyncManager',
      };

      try {
         const activeOperations = Array.from(this.operations.values()).filter(
            (op) => op.status === 'executing'
         ).length;

         const processedOperations: string[] = [];
         const failedOperations: string[] = [];

         while (this.operationQueue.length > 0 && activeOperations < this.maxConcurrentOperations) {
            const operation = this.operationQueue.shift();
            if (operation) {
               processedOperations.push(operation.id);

               // Execute operation with enhanced error handling
               this.executeOptimisticUpdate(operation)
                  .then(() => {
                     // Operation succeeded - no additional action needed
                  })
                  .catch(async (error) => {
                     failedOperations.push(operation.id);

                     // Create error for failed queued operation
                     const queuedOperationError = this.errorHandler.createError(
                        ErrorType.SYNC_OPERATION_FAILED,
                        `Queued operation ${operation.id} failed: ${error.message}`,
                        {
                           ...queueContext,
                           operationId: operation.id,
                           operationType: operation.type,
                           source: operation.source,
                           syncOperationId: operation.id,
                        },
                        error as Error
                     );

                     // Handle the error - this may trigger retries
                     await this.errorHandler.handleError(queuedOperationError, true);

                     // If operation is still retryable, add it back to queue
                     if (operation.retryCount < operation.maxRetries) {
                        operation.retryCount++;
                        operation.status = 'pending';
                        operation.timestamp = Date.now(); // Update timestamp for retry
                        this.operationQueue.push(operation);
                     } else {
                        // Mark as permanently failed
                        operation.status = 'failed';
                        this.emit('operationFailed', { operation, error: queuedOperationError });
                     }
                  });
            }
         }

         // Log queue processing results if there were operations
         if (processedOperations.length > 0) {
            console.log(`Processed ${processedOperations.length} operations from sync queue`);

            if (failedOperations.length > 0) {
               const queueProcessingError = this.errorHandler.createError(
                  ErrorType.SYNC_OPERATION_FAILED,
                  `Queue processing completed with ${failedOperations.length}/${processedOperations.length} failed operations`,
                  {
                     ...queueContext,
                     processedOperations,
                     failedOperations,
                     successfulOperations: processedOperations.length - failedOperations.length,
                  }
               );

               await this.errorHandler.handleError(queueProcessingError, true);
            }
         }
      } catch (error) {
         // Handle unexpected errors in queue processing
         const queueError = this.errorHandler.createError(
            ErrorType.SYNC_OPERATION_FAILED,
            `Sync queue processing failed: ${error.message}`,
            queueContext,
            error as Error
         );

         await this.errorHandler.handleError(queueError, true);
         this.syncState = 'error';
      } finally {
         this.isProcessingQueue = false;

         // Update sync state based on operations
         const activeOps = Array.from(this.operations.values()).filter(
            (op) => op.status === 'executing'
         ).length;

         if (this.syncState !== 'error') {
            this.syncState = activeOps > 0 || this.operationQueue.length > 0 ? 'syncing' : 'idle';
         }
      }
   }

   // Detect stalled operations with enhanced error handling
   private async detectStalledOperations(): Promise<void> {
      const now = Date.now();
      const stalledOperations = Array.from(this.operations.values()).filter(
         (op) => op.status === 'executing' && now - op.timestamp > 30000
      );

      if (stalledOperations.length === 0) {
         return;
      }

      const stalledContext = {
         operation: 'detectStalledOperations',
         stalledCount: stalledOperations.length,
         component: 'SyncManager',
      };

      try {
         for (const op of stalledOperations) {
            const operationContext = {
               ...stalledContext,
               operationId: op.id,
               operationType: op.type,
               source: op.source,
               stalledDuration: now - op.timestamp,
               retryCount: op.retryCount,
               maxRetries: op.maxRetries,
               syncOperationId: op.id,
            };

            // Create stalled operation error
            const stalledError = this.errorHandler.createError(
               ErrorType.CLI_TIMEOUT,
               `Operation ${op.id} has been stalled for ${Math.round((now - op.timestamp) / 1000)}s`,
               operationContext
            );

            console.warn(
               `Stalled operation detected: ${op.id} (${op.type}) - stalled for ${Math.round((now - op.timestamp) / 1000)}s`
            );

            if (op.retryCount < op.maxRetries) {
               // Retry the stalled operation
               op.retryCount++;
               op.status = 'pending';
               op.timestamp = now;
               op.metadata = {
                  ...op.metadata,
                  stalledAt: new Date(op.timestamp).toISOString(),
                  stalledDuration: now - op.timestamp,
                  retryAttempt: op.retryCount,
               };

               this.operationQueue.push(op);

               // Handle error with recovery
               await this.errorHandler.handleError(stalledError, true);

               console.log(
                  `Retrying stalled operation ${op.id} (attempt ${op.retryCount}/${op.maxRetries})`
               );
            } else {
               // Mark operation as failed and attempt rollback
               op.status = 'failed';
               op.metadata = {
                  ...op.metadata,
                  failedDueToStall: true,
                  finalStalledDuration: now - op.timestamp,
                  failedAt: new Date().toISOString(),
               };

               // Handle error and escalate
               await this.errorHandler.handleError(stalledError, false);

               try {
                  await this.rollbackOperation(op);
                  console.log(`Rolled back permanently stalled operation ${op.id}`);
               } catch (rollbackError) {
                  const rollbackFailedError = this.errorHandler.createError(
                     ErrorType.SYNC_ROLLBACK_FAILED,
                     `Failed to rollback stalled operation ${op.id}: ${rollbackError.message}`,
                     operationContext,
                     rollbackError as Error
                  );

                  await this.errorHandler.handleError(rollbackFailedError, true);
               }

               this.emit('operationFailed', {
                  operation: op,
                  error: stalledError,
                  reason: 'stalled_timeout',
               });
            }
         }

         // If there were stalled operations, broadcast sync state update
         if (stalledOperations.length > 0) {
            await this.broadcastSyncState();
         }
      } catch (error) {
         // Handle unexpected errors in stalled operation detection
         const detectionError = this.errorHandler.createError(
            ErrorType.SYNC_OPERATION_FAILED,
            `Stalled operation detection failed: ${error.message}`,
            stalledContext,
            error as Error
         );

         await this.errorHandler.handleError(detectionError, true);
      }
   }

   // Broadcast sync state to WebSocket clients with enhanced error handling
   private async broadcastSyncState(): Promise<void> {
      try {
         const state = {
            syncState: this.syncState,
            activeOperations: Array.from(this.operations.values()).filter(
               (op) => op.status === 'executing'
            ).length,
            queuedOperations: this.operationQueue.length,
            conflicts: this.conflicts.size,
            optimisticUpdates: this.optimisticUpdates.size,
            timestamp: new Date().toISOString(),
            healthStatus: this.syncState === 'error' ? 'unhealthy' : 'healthy',
         };

         try {
            // TODO: Use GraphQL subscription
            // this.wsServer.broadcast('system', 'sync-state-update', state);
         } catch (broadcastError) {
            const wsError = this.errorHandler.createError(
               ErrorType.WEBSOCKET_MESSAGE_FAILED,
               `Failed to broadcast sync state: ${broadcastError.message}`,
               {
                  operation: 'broadcastSyncState',
                  component: 'SyncManager',
                  state,
               },
               broadcastError as Error
            );

            // Don't fail the broadcast for WebSocket errors, just log
            await this.errorHandler.handleError(wsError, true);
         }

         this.emit('syncStateChanged', state);
      } catch (error) {
         const broadcastError = this.errorHandler.createError(
            ErrorType.SYNC_OPERATION_FAILED,
            `Sync state broadcast failed: ${error.message}`,
            { operation: 'broadcastSyncState', component: 'SyncManager' },
            error as Error
         );

         await this.errorHandler.handleError(broadcastError, true);
      }
   }

   // Public API methods

   // Queue task status change
   async updateTaskStatus(
      taskId: string,
      status: TaskStatus,
      source: 'ui' | 'websocket' = 'ui'
   ): Promise<string> {
      const operation: SyncOperation = {
         id: this.generateOperationId(),
         type: 'status_change',
         timestamp: Date.now(),
         source,
         data: { taskId, status },
         status: 'pending',
         retryCount: 0,
         maxRetries: 3,
      };

      this.operationQueue.push(operation);
      return operation.id;
   }

   // Queue task update
   async updateTask(
      taskId: string,
      changes: any,
      source: 'ui' | 'websocket' = 'ui'
   ): Promise<string> {
      const operation: SyncOperation = {
         id: this.generateOperationId(),
         type: 'task_update',
         timestamp: Date.now(),
         source,
         data: { taskId, changes },
         status: 'pending',
         retryCount: 0,
         maxRetries: 3,
      };

      this.operationQueue.push(operation);
      return operation.id;
   }

   // Create batch operation
   async createBatch(
      operations: Omit<SyncOperation, 'id' | 'timestamp' | 'status' | 'retryCount'>[],
      options: {
         atomicity?: boolean;
         maxConcurrency?: number;
         timeout?: number;
      } = {}
   ): Promise<string> {
      const batchId = this.generateBatchId();
      const batchOps: SyncOperation[] = operations.map((op) => ({
         ...op,
         id: this.generateOperationId(),
         timestamp: Date.now(),
         status: 'pending' as const,
         retryCount: 0,
      }));

      const batch: BatchOperation = {
         id: batchId,
         operations: batchOps,
         atomicity: options.atomicity ?? false,
         maxConcurrency: options.maxConcurrency ?? 3,
         timeout: options.timeout ?? 30000,
         status: 'pending',
         results: new Map(),
      };

      // Execute batch asynchronously
      this.executeBatchOperation(batch).catch((error) => {
         console.error('Batch operation failed:', error);
      });

      return batchId;
   }

   // Get sync status
   getSyncStatus() {
      return {
         state: this.syncState,
         operations: Array.from(this.operations.values()),
         conflicts: Array.from(this.conflicts.values()),
         queueSize: this.operationQueue.length,
         optimisticUpdates: Object.fromEntries(this.optimisticUpdates),
      };
   }

   // Utility methods
   private generateOperationId(): string {
      return `op_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
   }

   private generateConflictId(): string {
      return `conflict_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
   }

   private generateBatchId(): string {
      return `batch_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
   }

   // Clean up resources
   async shutdown(): Promise<void> {
      if (this.syncInterval) {
         clearInterval(this.syncInterval);
         this.syncInterval = null;
      }

      // Wait for pending operations to complete or timeout
      const pendingOps = Array.from(this.operations.values()).filter(
         (op) => op.status === 'executing'
      );

      if (pendingOps.length > 0) {
         console.log(`Waiting for ${pendingOps.length} operations to complete...`);

         // Wait up to 10 seconds for operations to complete
         const timeout = setTimeout(() => {
            pendingOps.forEach((op) => {
               op.status = 'failed';
               this.rollbackOperation(op);
            });
         }, 10000);

         // Check every 100ms if operations are done
         while (pendingOps.some((op) => op.status === 'executing')) {
            await new Promise((resolve) => setTimeout(resolve, 100));
         }

         clearTimeout(timeout);
      }

      this.operations.clear();
      this.conflicts.clear();
      this.batches.clear();
      this.optimisticUpdates.clear();
      this.operationQueue = [];
   }
}

// Singleton instance
let globalSyncManager: TaskMasterSyncManager | null = null;

export function getGlobalSyncManager(): TaskMasterSyncManager {
   if (!globalSyncManager) {
      globalSyncManager = new TaskMasterSyncManager();
   }
   return globalSyncManager;
}

export { ConflictResolution };
