import { gql } from 'graphql-tag';
import extendedTypeDefs from './schema-extended';

const typeDefs = gql`
   scalar DateTime
   scalar JSON

   # Core Task Management Types
   type Task {
      id: ID!
      title: String!
      description: String!
      status: TaskStatus!
      priority: TaskPriority!
      dependencies: [ID!]!
      details: String
      testStrategy: String
      complexity: Int
      subtasks: [Subtask!]!
      createdAt: DateTime!
      updatedAt: DateTime!
      progress: Int!
      isReady: Boolean!
   }

   type Subtask {
      id: ID!
      title: String!
      description: String!
      status: TaskStatus!
      dependencies: [String!]!
      details: String
      testStrategy: String
      parentTask: Task!
      createdAt: DateTime!
      updatedAt: DateTime!
   }

   enum TaskStatus {
      PENDING
      IN_PROGRESS
      DONE
      CANCELLED
      DEFERRED
      BLOCKED
   }

   enum TaskPriority {
      HIGH
      MEDIUM
      LOW
   }

   type TaskMetadata {
      created: DateTime!
      updated: DateTime!
      description: String!
   }

   type TasksData {
      master: TaskCollection!
   }

   type TaskCollection {
      tasks: [Task!]!
      metadata: TaskMetadata!
      total: Int!
      completed: Int!
      inProgress: Int!
      pending: Int!
      progressPercentage: Float!
   }

   # CLI Command Types
   type CLICommandResult {
      id: ID!
      command: String!
      args: [String!]!
      stdout: String
      stderr: String
      exitCode: Int!
      duration: Int!
      timestamp: DateTime!
      status: CLICommandStatus!
      taskId: ID
      parsedOutput: JSON
      error: CLIError
   }

   enum CLICommandStatus {
      QUEUED
      RUNNING
      COMPLETED
      FAILED
      CANCELLED
      TIMEOUT
   }

   type CLIError {
      code: String!
      message: String!
      details: JSON
      stack: String
   }

   type CLIStatus {
      activeProcesses: Int!
      recentCommands: [CLICommandResult!]!
      systemInfo: SystemInfo!
   }

   type SystemInfo {
      nodeVersion: String!
      platform: String!
      memoryUsage: MemoryUsage!
      uptime: Float!
   }

   type MemoryUsage {
      rss: Float!
      heapTotal: Float!
      heapUsed: Float!
      external: Float!
   }

   # Sync Operation Types
   type SyncOperation {
      id: ID!
      type: SyncOperationType!
      status: SyncOperationStatus!
      timestamp: DateTime!
      source: String!
      taskIds: [ID!]!
      metadata: JSON
      retryCount: Int!
      error: SyncError
      completedAt: DateTime
   }

   enum SyncOperationType {
      TASK_UPDATE
      TASK_CREATE
      TASK_DELETE
      STATUS_CHANGE
      BATCH_UPDATE
      FILE_SYNC
      FULL_SYNC
   }

   enum SyncOperationStatus {
      PENDING
      EXECUTING
      COMPLETED
      FAILED
      CANCELLED
   }

   type SyncError {
      code: String!
      message: String!
      details: JSON
      operationId: ID
   }

   type SyncStatus {
      state: SyncState!
      queueSize: Int!
      operations: [SyncOperation!]!
      conflicts: [SyncConflict!]!
      optimisticUpdatesCount: Int!
   }

   enum SyncState {
      IDLE
      SYNCING
      ERROR
   }

   type SyncConflict {
      id: ID!
      operationType: SyncOperationType!
      taskId: ID!
      uiVersion: JSON!
      cliVersion: JSON!
      timestamp: DateTime!
      resolved: Boolean!
      resolution: ConflictResolution
      resolvedAt: DateTime
   }

   enum ConflictResolution {
      UI_WINS
      CLI_WINS
      LAST_WRITE_WINS
      MERGE
      USER_RESOLVE
   }

   # Input Types
   input CreateTaskInput {
      title: String!
      description: String!
      priority: TaskPriority = MEDIUM
      dependencies: [ID!] = []
      details: String
      testStrategy: String
   }

   input UpdateTaskInput {
      title: String
      description: String
      status: TaskStatus
      priority: TaskPriority
      dependencies: [ID!]
      details: String
      testStrategy: String
   }

   input CLICommandInput {
      command: String!
      args: [String!] = []
      timeout: Int
      parseOutput: Boolean = true
      captureProgress: Boolean = false
   }

   # File System Types
   type FileSystemStatus {
      tasks: FileInfo!
      config: FileInfo!
      timestamp: DateTime!
   }

   type FileInfo {
      exists: Boolean!
      size: Int
      lastModified: DateTime
      path: String!
   }

   type BackupInfo {
      path: String!
      timestamp: String!
   }

   type BackupList {
      tasks: [BackupInfo!]!
      config: [BackupInfo!]!
   }

   type FileValidationResult {
      valid: Boolean!
      message: String!
      tasks: TaskFileValidation
      config: ConfigFileValidation
      timestamp: DateTime!
   }

   type TaskFileValidation {
      valid: Boolean!
      taskCount: Int
      lastUpdated: DateTime
   }

   type ConfigFileValidation {
      valid: Boolean!
      models: JSON
      settings: JSON
   }

   # File Watch Types
   type FileWatchStatus {
      connectionCount: Int!
      watcherStatus: JSON!
      timestamp: DateTime!
   }

   # Root Query Type
   type Query {
      health: String!
      hello: String!

      # Task queries
      tasks: [Task!]!
      task(id: ID!): Task

      # CLI queries
      cliStatus: CLIStatus!
      cliHistory(limit: Int = 50): [CLICommandResult!]!

      # Sync queries
      syncStatus: SyncStatus!
      syncOperations(limit: Int = 50): [SyncOperation!]!

      # File system queries
      fileSystemStatus: FileSystemStatus!
      backupList: BackupList!
      fileWatchStatus: FileWatchStatus!
   }

   # Root Mutation Type
   type Mutation {
      ping: String!

      # Task mutations
      createTask(input: CreateTaskInput!): Task
      updateTask(id: ID!, input: UpdateTaskInput!): Task
      deleteTask(id: ID!): Boolean!

      # CLI mutations
      executeCLICommand(input: CLICommandInput!): CLICommandResult!
      killCLIProcess(processId: String!): Boolean!
      clearCLIHistory: Boolean!

      # Sync mutations
      updateTaskStatus(taskId: ID!, status: TaskStatus!, source: String = "ui"): SyncOperation!
      resolveSyncConflict(conflictId: ID!, resolution: ConflictResolution!): Boolean!
      forceSync: Boolean!

      # File system mutations
      createBackup(target: String!): BackupResult!
      restoreBackup(target: String!, backupPath: String!): RestoreResult!
      validateFiles: FileValidationResult!
      initializeDirectories: InitializationResult!
      cleanupBackups(target: String!, olderThanDays: Int = 7): CleanupResult!

      # File watch mutations
      triggerFileWatch(
         type: String = "manual-trigger"
         message: String = "Manual trigger"
      ): FileWatchTriggerResult!
      restartFileWatcher: FileWatchRestartResult!
   }

   # File operation result types
   type BackupResult {
      success: Boolean!
      message: String!
      backupPath: String
      timestamp: DateTime!
   }

   type RestoreResult {
      success: Boolean!
      message: String!
      restoredFrom: String!
      timestamp: DateTime!
   }

   type InitializationResult {
      success: Boolean!
      message: String!
      timestamp: DateTime!
   }

   type CleanupResult {
      success: Boolean!
      message: String!
      deletedCount: Int!
      cutoffDate: DateTime!
      timestamp: DateTime!
   }

   type FileWatchTriggerResult {
      success: Boolean!
      message: String!
      data: JSON!
      activeConnections: Int!
   }

   type FileWatchRestartResult {
      success: Boolean!
      message: String!
      status: JSON!
      timestamp: DateTime!
   }

   # Subscription Types
   type TaskUpdatePayload {
      task: Task!
      changeType: TaskChangeType!
      timestamp: DateTime!
      source: String!
      previousState: JSON
   }

   enum TaskChangeType {
      CREATED
      UPDATED
      DELETED
      STATUS_CHANGED
   }

   type CLICommandProgressPayload {
      commandId: ID!
      command: String!
      status: CLICommandStatus!
      output: String
      progress: Int
      timestamp: DateTime!
      metadata: JSON
   }

   type SyncOperationPayload {
      operation: SyncOperation!
      changeType: SyncChangeType!
      timestamp: DateTime!
   }

   enum SyncChangeType {
      STARTED
      PROGRESS
      COMPLETED
      FAILED
      CONFLICT_DETECTED
      CONFLICT_RESOLVED
   }

   input TaskSubscriptionFilter {
      taskIds: [ID!]
      statuses: [TaskStatus!]
      priorities: [TaskPriority!]
      source: String
   }

   input CLICommandSubscriptionFilter {
      commandIds: [ID!]
      commands: [String!]
      statuses: [CLICommandStatus!]
   }

   input SyncOperationSubscriptionFilter {
      operationIds: [ID!]
      types: [SyncOperationType!]
      statuses: [SyncOperationStatus!]
   }

   # Root Subscription Type
   type Subscription {
      # Task subscriptions
      taskUpdated(filter: TaskSubscriptionFilter): TaskUpdatePayload!

      # CLI command subscriptions
      cliCommandProgress(filter: CLICommandSubscriptionFilter): CLICommandProgressPayload!

      # Sync operation subscriptions
      syncOperationUpdated(filter: SyncOperationSubscriptionFilter): SyncOperationPayload!

      # File watch subscriptions
      fileWatchEvent: FileWatchTriggerResult!
   }
`;

// Combine original and extended schemas
export default [typeDefs, extendedTypeDefs];
