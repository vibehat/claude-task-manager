export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
   [_ in K]?: never;
};
export type Incremental<T> =
   | T
   | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
   ID: { input: string; output: string };
   String: { input: string; output: string };
   Boolean: { input: boolean; output: boolean };
   Int: { input: number; output: number };
   Float: { input: number; output: number };
   DateTime: { input: string; output: string };
   JSON: { input: any; output: any };
}

/** Input for batch sync operations */
export interface BatchOperationInput {
   /** Operation data */
   data: Scalars['JSON']['input'];
   /** Target task ID if applicable */
   taskId?: InputMaybe<Scalars['ID']['input']>;
   /** Type of operation */
   type: SyncOperationType;
}

/** Options for batch operations */
export interface BatchOptionsInput {
   /** Whether to continue on error */
   continueOnError?: InputMaybe<Scalars['Boolean']['input']>;
   /** Maximum retry attempts */
   maxRetries?: InputMaybe<Scalars['Int']['input']>;
   /** Whether to execute operations in parallel */
   parallel?: InputMaybe<Scalars['Boolean']['input']>;
}

/** Batch operation result */
export interface BatchResult {
   __typename?: 'BatchResult';
   /** Batch operation ID */
   batchId: Scalars['ID']['output'];
   /** Number of operations in batch */
   operationsCount: Scalars['Int']['output'];
   /** Batch options used */
   options?: Maybe<Scalars['JSON']['output']>;
   /** Timestamp when batch was created */
   timestamp: Scalars['DateTime']['output'];
}

/** CLI command connection for paginated CLI queries */
export interface CliCommandConnection {
   __typename?: 'CLICommandConnection';
   /** List of CLI command edges */
   edges: CliCommandEdge[];
   /** List of CLI commands (convenience field) */
   nodes: CliCommandResult[];
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
}

/** CLI command edge with cursor */
export interface CliCommandEdge {
   __typename?: 'CLICommandEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The CLI command node */
   node: CliCommandResult;
}

/** CLI command filtering options */
export interface CliCommandFilterInput {
   /** Search in command text */
   commandSearch?: InputMaybe<Scalars['String']['input']>;
   /** Filter by execution duration range (milliseconds) */
   durationRange?: InputMaybe<IntRangeInput>;
   /** Filter by execution date range */
   executedAt?: InputMaybe<DateRangeInput>;
   /** Filter by exit code */
   exitCode?: InputMaybe<Scalars['Int']['input'][]>;
   /** Filter by command execution status */
   status?: InputMaybe<CliCommandStatus[]>;
   /** Filter by success/failure */
   successful?: InputMaybe<Scalars['Boolean']['input']>;
   /** Filter commands related to specific task */
   taskId?: InputMaybe<Scalars['ID']['input']>;
}

/** Input for executing CLI commands */
export interface CliCommandInput {
   /** Command arguments */
   args?: InputMaybe<Scalars['String']['input'][]>;
   /** Whether to capture real-time progress */
   captureProgress?: InputMaybe<Scalars['Boolean']['input']>;
   /** Command to execute */
   command: Scalars['String']['input'];
   /** Whether to parse command output */
   parseOutput?: InputMaybe<Scalars['Boolean']['input']>;
   /** Execution timeout in milliseconds */
   timeout?: InputMaybe<Scalars['Int']['input']>;
}

/** CLI command ordering options */
export interface CliCommandOrderByInput {
   /** Sort direction */
   direction: OrderDirection;
   /** Field to order by */
   field: CliCommandOrderField;
}

/** CLI command order fields */
export enum CliCommandOrderField {
   Command = 'COMMAND',
   Duration = 'DURATION',
   ExitCode = 'EXIT_CODE',
   Status = 'STATUS',
   Timestamp = 'TIMESTAMP',
}

/** Represents the result of a CLI command execution */
export interface CliCommandResult {
   __typename?: 'CLICommandResult';
   /** Command line arguments */
   args: Scalars['String']['output'][];
   /** The command that was executed */
   command: Scalars['String']['output'];
   /** Execution duration in milliseconds */
   duration: Scalars['Int']['output'];
   /** Error information if command failed */
   error?: Maybe<CliError>;
   /** Exit code returned by the command */
   exitCode: Scalars['Int']['output'];
   /** Unique identifier for the command execution */
   id: Scalars['ID']['output'];
   /** Parsed output data if available */
   parsedOutput?: Maybe<Scalars['JSON']['output']>;
   /** Current status of the command execution */
   status: CliCommandStatus;
   /** Standard error output from the command */
   stderr?: Maybe<Scalars['String']['output']>;
   /** Standard output from the command */
   stdout?: Maybe<Scalars['String']['output']>;
   /** Related task ID if command was task-related */
   taskId?: Maybe<Scalars['ID']['output']>;
   /** Timestamp when the command was executed */
   timestamp: Scalars['DateTime']['output'];
}

/** CLI command execution status */
export enum CliCommandStatus {
   /** Command was cancelled */
   Cancelled = 'CANCELLED',
   /** Command completed successfully */
   Completed = 'COMPLETED',
   /** Command failed with error */
   Failed = 'FAILED',
   /** Command is queued for execution */
   Queued = 'QUEUED',
   /** Command is currently running */
   Running = 'RUNNING',
   /** Command execution timed out */
   Timeout = 'TIMEOUT',
}

/** CLI command error information */
export interface CliError {
   __typename?: 'CLIError';
   /** Error code */
   code: Scalars['String']['output'];
   /** Additional error details */
   details?: Maybe<Scalars['JSON']['output']>;
   /** Human-readable error message */
   message: Scalars['String']['output'];
   /** Stack trace if available */
   stack?: Maybe<Scalars['String']['output']>;
}

/** CLI execution status information */
export interface CliStatus {
   __typename?: 'CLIStatus';
   /** Number of active CLI processes */
   activeProcesses: Scalars['Int']['output'];
   /** Recent command history */
   recentCommands: CliCommandResult[];
   /** System information */
   systemInfo: SystemInfo;
}

/** Conflict resolution strategies */
export enum ConflictResolution {
   /** Use the CLI version */
   CliWins = 'CLI_WINS',
   /** Use the most recent version */
   LastWriteWins = 'LAST_WRITE_WINS',
   /** Attempt to merge both versions */
   Merge = 'MERGE',
   /** Use the UI version */
   UiWins = 'UI_WINS',
   /** Require manual user resolution */
   UserResolve = 'USER_RESOLVE',
}

export interface CreateTaskInput {
   dependencies?: InputMaybe<Scalars['ID']['input'][]>;
   description: Scalars['String']['input'];
   details?: InputMaybe<Scalars['String']['input']>;
   priority?: InputMaybe<TaskPriority>;
   testStrategy?: InputMaybe<Scalars['String']['input']>;
   title: Scalars['String']['input'];
}

/** Date range input for filtering by date ranges */
export interface DateRangeInput {
   /** End date (inclusive) */
   endDate?: InputMaybe<Scalars['DateTime']['input']>;
   /** Start date (inclusive) */
   startDate?: InputMaybe<Scalars['DateTime']['input']>;
}

/** Integer range input for numeric filtering */
export interface IntRangeInput {
   /** Maximum value (inclusive) */
   max?: InputMaybe<Scalars['Int']['input']>;
   /** Minimum value (inclusive) */
   min?: InputMaybe<Scalars['Int']['input']>;
}

/** Memory usage statistics */
export interface MemoryUsage {
   __typename?: 'MemoryUsage';
   /** External memory in bytes */
   external: Scalars['Float']['output'];
   /** Heap total in bytes */
   heapTotal: Scalars['Float']['output'];
   /** Heap used in bytes */
   heapUsed: Scalars['Float']['output'];
   /** Resident set size in bytes */
   rss: Scalars['Float']['output'];
}

export interface Mutation {
   __typename?: 'Mutation';
   /** Clear CLI command history */
   clearCLIHistory: Scalars['Boolean']['output'];
   /** Create a batch sync operation */
   createBatchOperation: BatchResult;
   /** Create a new task */
   createTask?: Maybe<Task>;
   /** Delete a task */
   deleteTask: Scalars['Boolean']['output'];
   /** Execute a CLI command */
   executeCLICommand: CliCommandResult;
   /** Force a manual sync */
   forceSync: Scalars['Boolean']['output'];
   /** Kill a running CLI process */
   killCLIProcess: Scalars['Boolean']['output'];
   /** Simple ping for testing */
   ping: Scalars['String']['output'];
   /** Resolve a sync conflict */
   resolveSyncConflict: Scalars['Boolean']['output'];
   /** Update an existing task */
   updateTask?: Maybe<Task>;
   /** Update task status via sync operation */
   updateTaskStatus: SyncOperation;
}

export interface MutationCreateBatchOperationArgs {
   operations: BatchOperationInput[];
   options?: InputMaybe<BatchOptionsInput>;
}

export interface MutationCreateTaskArgs {
   input: CreateTaskInput;
}

export interface MutationDeleteTaskArgs {
   id: Scalars['ID']['input'];
}

export interface MutationExecuteCliCommandArgs {
   input: CliCommandInput;
}

export interface MutationKillCliProcessArgs {
   processId: Scalars['String']['input'];
}

export interface MutationResolveSyncConflictArgs {
   conflictId: Scalars['ID']['input'];
   resolution: ConflictResolution;
}

export interface MutationUpdateTaskArgs {
   id: Scalars['ID']['input'];
   input: UpdateTaskInput;
}

export interface MutationUpdateTaskStatusArgs {
   source?: InputMaybe<Scalars['String']['input']>;
   status: TaskStatus;
   taskId: Scalars['ID']['input'];
}

/** Sort direction */
export enum OrderDirection {
   Asc = 'ASC',
   Desc = 'DESC',
}

/** Page information for cursor-based pagination */
export interface PageInfo {
   __typename?: 'PageInfo';
   /** Cursor pointing to the last edge */
   endCursor?: Maybe<Scalars['String']['output']>;
   /** Whether there are more items when paginating forward */
   hasNextPage: Scalars['Boolean']['output'];
   /** Whether there are more items when paginating backward */
   hasPreviousPage: Scalars['Boolean']['output'];
   /** Cursor pointing to the first edge */
   startCursor?: Maybe<Scalars['String']['output']>;
}

/** Pagination input with cursor-based pagination support */
export interface PaginationInput {
   /** Cursor for forward pagination */
   after?: InputMaybe<Scalars['String']['input']>;
   /** Cursor for backward pagination */
   before?: InputMaybe<Scalars['String']['input']>;
   /** Return first N records after cursor */
   first?: InputMaybe<Scalars['Int']['input']>;
   /** Return last N records before cursor */
   last?: InputMaybe<Scalars['Int']['input']>;
   /** Maximum number of records (safety limit) */
   limit?: InputMaybe<Scalars['Int']['input']>;
}

export interface Query {
   __typename?: 'Query';
   /** Get a specific CLI command result */
   cliCommand?: Maybe<CliCommandResult>;
   /** Get CLI command history with filtering and ordering */
   cliHistory: CliCommandConnection;
   /** Get CLI execution status */
   cliStatus: CliStatus;
   /** Basic health check endpoint */
   health: Scalars['String']['output'];
   /** Simple hello message */
   hello: Scalars['String']['output'];
   /** Get tasks ready to work on (no blocking dependencies) */
   readyTasks: TaskConnection;
   /** Search tasks with text search and filters */
   searchTasks: TaskConnection;
   /** Get sync conflicts with filtering */
   syncConflicts: SyncConflictConnection;
   /** Get sync health metrics */
   syncHealth: SyncHealth;
   /** Get a specific sync operation */
   syncOperation?: Maybe<SyncOperation>;
   /** Get sync operations history with filtering and ordering */
   syncOperations: SyncOperationConnection;
   /** Get current sync status */
   syncStatus: SyncStatus;
   /** Get a specific task by ID */
   task?: Maybe<Task>;
   /** Get all tasks with comprehensive filtering, ordering, and pagination */
   tasks: TaskConnection;
}

export interface QueryCliCommandArgs {
   id: Scalars['ID']['input'];
}

export interface QueryCliHistoryArgs {
   filter?: InputMaybe<CliCommandFilterInput>;
   orderBy?: InputMaybe<CliCommandOrderByInput[]>;
   pagination?: InputMaybe<PaginationInput>;
}

export interface QueryReadyTasksArgs {
   filter?: InputMaybe<TaskFilterInput>;
   orderBy?: InputMaybe<TaskOrderByInput[]>;
   pagination?: InputMaybe<PaginationInput>;
}

export interface QuerySearchTasksArgs {
   filter?: InputMaybe<TaskFilterInput>;
   orderBy?: InputMaybe<TaskOrderByInput[]>;
   pagination?: InputMaybe<PaginationInput>;
   query: Scalars['String']['input'];
}

export interface QuerySyncConflictsArgs {
   filter?: InputMaybe<SyncConflictFilterInput>;
   pagination?: InputMaybe<PaginationInput>;
}

export interface QuerySyncOperationArgs {
   id: Scalars['ID']['input'];
}

export interface QuerySyncOperationsArgs {
   filter?: InputMaybe<SyncOperationFilterInput>;
   orderBy?: InputMaybe<SyncOperationOrderByInput[]>;
   pagination?: InputMaybe<PaginationInput>;
}

export interface QueryTaskArgs {
   id: Scalars['ID']['input'];
}

export interface QueryTasksArgs {
   filter?: InputMaybe<TaskFilterInput>;
   orderBy?: InputMaybe<TaskOrderByInput[]>;
   pagination?: InputMaybe<PaginationInput>;
}

/** Interface for entities that have status */
export interface Stateful {
   /** Current status of the entity */
   status: Scalars['String']['output'];
}

/** Represents a subtask within a parent task */
export interface Subtask {
   __typename?: 'Subtask';
   /** Timestamp when the subtask was created */
   createdAt: Scalars['DateTime']['output'];
   /** List of subtask IDs that this subtask depends on */
   dependencies: Scalars['String']['output'][];
   /** Detailed description of the subtask */
   description: Scalars['String']['output'];
   /** Additional implementation details */
   details?: Maybe<Scalars['String']['output']>;
   /** Unique identifier for the subtask (format: parentId.subtaskId) */
   id: Scalars['ID']['output'];
   /** Parent task that contains this subtask */
   parentTask: Task;
   /** Current status of the subtask */
   status: TaskStatus;
   /** Testing strategy for this subtask */
   testStrategy?: Maybe<Scalars['String']['output']>;
   /** Human-readable title of the subtask */
   title: Scalars['String']['output'];
   /** Timestamp when the subtask was last updated */
   updatedAt: Scalars['DateTime']['output'];
}

/** Represents a sync conflict that needs resolution */
export interface SyncConflict {
   __typename?: 'SyncConflict';
   /** CLI/file version of the data */
   cliVersion: Scalars['JSON']['output'];
   /** Unique identifier for the conflict */
   id: Scalars['ID']['output'];
   /** Type of sync operation that caused the conflict */
   operationType: SyncOperationType;
   /** Resolution strategy used if resolved */
   resolution?: Maybe<ConflictResolution>;
   /** Whether the conflict has been resolved */
   resolved: Scalars['Boolean']['output'];
   /** Timestamp when conflict was resolved */
   resolvedAt?: Maybe<Scalars['DateTime']['output']>;
   /** Task ID involved in the conflict */
   taskId: Scalars['ID']['output'];
   /** Timestamp when conflict was detected */
   timestamp: Scalars['DateTime']['output'];
   /** UI version of the data */
   uiVersion: Scalars['JSON']['output'];
}

/** Sync conflict connection for paginated conflict queries */
export interface SyncConflictConnection {
   __typename?: 'SyncConflictConnection';
   /** List of sync conflict edges */
   edges: SyncConflictEdge[];
   /** List of sync conflicts (convenience field) */
   nodes: SyncConflict[];
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
}

/** Sync conflict edge with cursor */
export interface SyncConflictEdge {
   __typename?: 'SyncConflictEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The sync conflict node */
   node: SyncConflict;
}

/** Sync conflict filtering options */
export interface SyncConflictFilterInput {
   /** Filter by conflict detection date range */
   detectedAt?: InputMaybe<DateRangeInput>;
   /** Filter by operation type that caused conflict */
   operationType?: InputMaybe<SyncOperationType[]>;
   /** Filter by resolution strategy used */
   resolution?: InputMaybe<ConflictResolution[]>;
   /** Filter by conflict resolution status */
   resolved?: InputMaybe<Scalars['Boolean']['input']>;
   /** Filter by resolution date range */
   resolvedAt?: InputMaybe<DateRangeInput>;
   /** Filter by task involved in conflict */
   taskId?: InputMaybe<Scalars['ID']['input']>;
}

/** Sync operation error information */
export interface SyncError {
   __typename?: 'SyncError';
   /** Error code */
   code: Scalars['String']['output'];
   /** Additional error details */
   details?: Maybe<Scalars['JSON']['output']>;
   /** Human-readable error message */
   message: Scalars['String']['output'];
   /** Related operation that caused the error */
   operationId?: Maybe<Scalars['ID']['output']>;
}

/** Sync health metrics */
export interface SyncHealth {
   __typename?: 'SyncHealth';
   /** Number of active operations */
   activeOperations: Scalars['Int']['output'];
   /** Whether sync system is healthy */
   healthy: Scalars['Boolean']['output'];
   /** Operation success rate (0-1) */
   operationSuccessRate: Scalars['Float']['output'];
   /** Number of queued operations */
   queuedOperations: Scalars['Int']['output'];
   /** Current sync state */
   syncState: SyncState;
   /** Number of unresolved conflicts */
   unresolvedConflicts: Scalars['Int']['output'];
}

/** Represents a synchronization operation */
export interface SyncOperation {
   __typename?: 'SyncOperation';
   /** Operation completion timestamp */
   completedAt?: Maybe<Scalars['DateTime']['output']>;
   /** Error information if operation failed */
   error?: Maybe<SyncError>;
   /** Unique identifier for the sync operation */
   id: Scalars['ID']['output'];
   /** Operation metadata and context */
   metadata?: Maybe<Scalars['JSON']['output']>;
   /** Number of retry attempts */
   retryCount: Scalars['Int']['output'];
   /** Source of the sync operation (ui, cli, etc.) */
   source: Scalars['String']['output'];
   /** Current status of the sync operation */
   status: SyncOperationStatus;
   /** List of task IDs affected by this operation */
   taskIds: Scalars['ID']['output'][];
   /** Timestamp when the operation was created */
   timestamp: Scalars['DateTime']['output'];
   /** Type of synchronization operation */
   type: SyncOperationType;
}

/** Sync operation connection for paginated sync queries */
export interface SyncOperationConnection {
   __typename?: 'SyncOperationConnection';
   /** List of sync operation edges */
   edges: SyncOperationEdge[];
   /** List of sync operations (convenience field) */
   nodes: SyncOperation[];
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
}

/** Sync operation edge with cursor */
export interface SyncOperationEdge {
   __typename?: 'SyncOperationEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The sync operation node */
   node: SyncOperation;
}

/** Sync operation filtering options */
export interface SyncOperationFilterInput {
   /** Filter by completion date range */
   completedAt?: InputMaybe<DateRangeInput>;
   /** Filter by creation date range */
   createdAt?: InputMaybe<DateRangeInput>;
   /** Filter operations with/without errors */
   hasError?: InputMaybe<Scalars['Boolean']['input']>;
   /** Filter by retry count range */
   retryCountRange?: InputMaybe<IntRangeInput>;
   /** Filter by operation source */
   source?: InputMaybe<Scalars['String']['input'][]>;
   /** Filter by operation status */
   status?: InputMaybe<SyncOperationStatus[]>;
   /** Filter operations affecting specific tasks */
   taskIds?: InputMaybe<Scalars['ID']['input'][]>;
   /** Filter by operation type */
   type?: InputMaybe<SyncOperationType[]>;
}

/** Sync operation ordering options */
export interface SyncOperationOrderByInput {
   /** Sort direction */
   direction: OrderDirection;
   /** Field to order by */
   field: SyncOperationOrderField;
}

/** Sync operation order fields */
export enum SyncOperationOrderField {
   CompletedAt = 'COMPLETED_AT',
   RetryCount = 'RETRY_COUNT',
   Source = 'SOURCE',
   Status = 'STATUS',
   Timestamp = 'TIMESTAMP',
   Type = 'TYPE',
}

/** Sync operation status */
export enum SyncOperationStatus {
   /** Operation was cancelled */
   Cancelled = 'CANCELLED',
   /** Operation completed successfully */
   Completed = 'COMPLETED',
   /** Operation is currently executing */
   Executing = 'EXECUTING',
   /** Operation failed with error */
   Failed = 'FAILED',
   /** Operation is pending execution */
   Pending = 'PENDING',
}

/** Types of synchronization operations */
export enum SyncOperationType {
   /** Batch update multiple items */
   BatchUpdate = 'BATCH_UPDATE',
   /** File system synchronization */
   FileSync = 'FILE_SYNC',
   /** Full system synchronization */
   FullSync = 'FULL_SYNC',
   /** Update task status specifically */
   StatusChange = 'STATUS_CHANGE',
   /** Create new tasks */
   TaskCreate = 'TASK_CREATE',
   /** Delete tasks */
   TaskDelete = 'TASK_DELETE',
   /** Sync task status changes */
   TaskUpdate = 'TASK_UPDATE',
}

/** Sync system state */
export enum SyncState {
   /** Error state */
   Error = 'ERROR',
   /** No active operations */
   Idle = 'IDLE',
   /** Operations in progress */
   Syncing = 'SYNCING',
}

/** Sync status information */
export interface SyncStatus {
   __typename?: 'SyncStatus';
   /** Active conflicts */
   conflicts: SyncConflict[];
   /** Recent sync operations */
   operations: SyncOperation[];
   /** Optimistic updates count */
   optimisticUpdatesCount: Scalars['Int']['output'];
   /** Number of operations in queue */
   queueSize: Scalars['Int']['output'];
   /** Current sync state */
   state: SyncState;
}

/** System information */
export interface SystemInfo {
   __typename?: 'SystemInfo';
   /** Memory usage statistics */
   memoryUsage: MemoryUsage;
   /** Node.js version */
   nodeVersion: Scalars['String']['output'];
   /** Platform information */
   platform: Scalars['String']['output'];
   /** Process uptime in seconds */
   uptime: Scalars['Float']['output'];
}

/** Represents a task in the Task Master system */
export interface Task {
   __typename?: 'Task';
   /** Complexity score for the task (1-10) */
   complexity?: Maybe<Scalars['Int']['output']>;
   /** Timestamp when the task was created */
   createdAt: Scalars['DateTime']['output'];
   /** List of task IDs that this task depends on */
   dependencies: Scalars['ID']['output'][];
   /** Detailed description of what needs to be accomplished */
   description: Scalars['String']['output'];
   /** Additional implementation details */
   details?: Maybe<Scalars['String']['output']>;
   /** Unique identifier for the task */
   id: Scalars['ID']['output'];
   /** Flag indicating if task is ready to work on (no blocking dependencies) */
   isReady: Scalars['Boolean']['output'];
   /** Priority level of the task */
   priority: TaskPriority;
   /** Calculated progress percentage (0-100) */
   progress: Scalars['Int']['output'];
   /** Current status of the task */
   status: TaskStatus;
   /** List of subtasks belonging to this task */
   subtasks: Subtask[];
   /** Testing strategy for this task */
   testStrategy?: Maybe<Scalars['String']['output']>;
   /** Human-readable title of the task */
   title: Scalars['String']['output'];
   /** Timestamp when the task was last updated */
   updatedAt: Scalars['DateTime']['output'];
}

/** A collection of tasks with metadata */
export interface TaskCollection {
   __typename?: 'TaskCollection';
   /** Number of completed tasks */
   completed: Scalars['Int']['output'];
   /** Number of tasks in progress */
   inProgress: Scalars['Int']['output'];
   /** Metadata about this task collection */
   metadata: TaskMetadata;
   /** Number of pending tasks */
   pending: Scalars['Int']['output'];
   /** Overall progress percentage */
   progressPercentage: Scalars['Float']['output'];
   /** List of all tasks in the collection */
   tasks: Task[];
   /** Total number of tasks in the collection */
   total: Scalars['Int']['output'];
}

/** Task connection for paginated task queries */
export interface TaskConnection {
   __typename?: 'TaskConnection';
   /** List of task edges */
   edges: TaskEdge[];
   /** List of tasks (convenience field) */
   nodes: Task[];
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
}

/** Task edge with cursor */
export interface TaskEdge {
   __typename?: 'TaskEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The task node */
   node: Task;
}

/** Comprehensive task filtering options */
export interface TaskFilterInput {
   /** Filter by complexity score range */
   complexityRange?: InputMaybe<IntRangeInput>;
   /** Filter by creation date range */
   createdAt?: InputMaybe<DateRangeInput>;
   /** Filter tasks that depend on specific task IDs */
   dependsOn?: InputMaybe<Scalars['ID']['input'][]>;
   /** Filter tasks that have no dependencies */
   hasNoDependencies?: InputMaybe<Scalars['Boolean']['input']>;
   /** Filter tasks that have subtasks */
   hasSubtasks?: InputMaybe<Scalars['Boolean']['input']>;
   /** Filter tasks ready to work on (no blocking dependencies) */
   isReady?: InputMaybe<Scalars['Boolean']['input']>;
   /** Filter by task priority */
   priority?: InputMaybe<TaskPriority[]>;
   /** Filter by progress percentage range */
   progressRange?: InputMaybe<IntRangeInput>;
   /** Search in title and description (case-insensitive) */
   search?: InputMaybe<Scalars['String']['input']>;
   /** Filter by task status */
   status?: InputMaybe<TaskStatus[]>;
   /** Filter by last update date range */
   updatedAt?: InputMaybe<DateRangeInput>;
}

/** Metadata about a collection of tasks */
export interface TaskMetadata {
   __typename?: 'TaskMetadata';
   /** Timestamp when the task collection was created */
   created: Scalars['DateTime']['output'];
   /** Description of the task collection */
   description: Scalars['String']['output'];
   /** Timestamp when the task collection was last updated */
   updated: Scalars['DateTime']['output'];
}

/** Task ordering options */
export interface TaskOrderByInput {
   /** Sort direction */
   direction: OrderDirection;
   /** Field to order by */
   field: TaskOrderField;
}

/** Task order fields */
export enum TaskOrderField {
   Complexity = 'COMPLEXITY',
   CreatedAt = 'CREATED_AT',
   Id = 'ID',
   Priority = 'PRIORITY',
   Progress = 'PROGRESS',
   Status = 'STATUS',
   Title = 'TITLE',
   UpdatedAt = 'UPDATED_AT',
}

/** Task priority enumeration */
export enum TaskPriority {
   /** High priority - should be worked on first */
   High = 'HIGH',
   /** Low priority - can be worked on when time permits */
   Low = 'LOW',
   /** Medium priority - standard priority level */
   Medium = 'MEDIUM',
}

/** Task status enumeration */
export enum TaskStatus {
   /** Task is blocked by dependencies or external factors */
   Blocked = 'BLOCKED',
   /** Task has been cancelled and will not be completed */
   Cancelled = 'CANCELLED',
   /** Task has been postponed to a later time */
   Deferred = 'DEFERRED',
   /** Task has been completed */
   Done = 'DONE',
   /** Task is currently being worked on */
   InProgress = 'IN_PROGRESS',
   /** Task is ready to be worked on */
   Pending = 'PENDING',
}

/** Represents the complete task data structure */
export interface TasksData {
   __typename?: 'TasksData';
   /** The main task collection */
   master: TaskCollection;
}

/** Interface for entities that have timestamps */
export interface Timestamped {
   /** Timestamp when the entity was created */
   createdAt: Scalars['DateTime']['output'];
   /** Timestamp when the entity was last updated */
   updatedAt: Scalars['DateTime']['output'];
}

export interface UpdateTaskInput {
   dependencies?: InputMaybe<Scalars['ID']['input'][]>;
   description?: InputMaybe<Scalars['String']['input']>;
   details?: InputMaybe<Scalars['String']['input']>;
   priority?: InputMaybe<TaskPriority>;
   status?: InputMaybe<TaskStatus>;
   testStrategy?: InputMaybe<Scalars['String']['input']>;
   title?: InputMaybe<Scalars['String']['input']>;
}

/** Basic user information (placeholder for future expansion) */
export interface User {
   __typename?: 'User';
   /** Timestamp when the user was created */
   createdAt: Scalars['DateTime']['output'];
   /** Email address of the user */
   email: Scalars['String']['output'];
   /** Unique identifier for the user */
   id: Scalars['ID']['output'];
   /** Display name of the user */
   name: Scalars['String']['output'];
   /** Timestamp when the user was last updated */
   updatedAt: Scalars['DateTime']['output'];
}

export type CreateTaskMutationVariables = Types.Exact<{
   input: Types.CreateTaskInput;
}>;

export interface CreateTaskMutationResult {
   __typename?: 'Mutation';
   createTask?: {
      __typename?: 'Task';
      id: string;
      title: string;
      description: string;
      status: Types.TaskStatus;
      priority: Types.TaskPriority;
      dependencies: string[];
      details?: string | null;
      testStrategy?: string | null;
      createdAt: string;
      updatedAt: string;
   } | null;
}

export type UpdateTaskMutationVariables = Types.Exact<{
   id: Types.Scalars['ID']['input'];
   input: Types.UpdateTaskInput;
}>;

export interface UpdateTaskMutationResult {
   __typename?: 'Mutation';
   updateTask?: {
      __typename?: 'Task';
      id: string;
      title: string;
      description: string;
      status: Types.TaskStatus;
      priority: Types.TaskPriority;
      dependencies: string[];
      details?: string | null;
      testStrategy?: string | null;
      updatedAt: string;
   } | null;
}

export type DeleteTaskMutationVariables = Types.Exact<{
   id: Types.Scalars['ID']['input'];
}>;

export interface DeleteTaskMutationResult {
   __typename?: 'Mutation';
   deleteTask: boolean;
}

export type UpdateTaskStatusMutationVariables = Types.Exact<{
   taskId: Types.Scalars['ID']['input'];
   status: Types.TaskStatus;
   source?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;

export interface UpdateTaskStatusMutationResult {
   __typename?: 'Mutation';
   updateTaskStatus: {
      __typename?: 'SyncOperation';
      id: string;
      type: Types.SyncOperationType;
      status: Types.SyncOperationStatus;
      timestamp: string;
      source: string;
      taskIds: string[];
      metadata?: any | null;
   };
}

export type GetAllTasksQueryVariables = Types.Exact<{
   filter?: Types.InputMaybe<Types.TaskFilterInput>;
   orderBy?: Types.InputMaybe<Types.TaskOrderByInput[] | Types.TaskOrderByInput>;
   pagination?: Types.InputMaybe<Types.PaginationInput>;
}>;

export interface GetAllTasksQueryResult {
   __typename?: 'Query';
   tasks: {
      __typename?: 'TaskConnection';
      totalCount?: number | null;
      edges: {
         __typename?: 'TaskEdge';
         cursor: string;
         node: {
            __typename?: 'Task';
            id: string;
            title: string;
            description: string;
            status: Types.TaskStatus;
            priority: Types.TaskPriority;
            dependencies: string[];
            details?: string | null;
            testStrategy?: string | null;
            complexity?: number | null;
            progress: number;
            isReady: boolean;
            createdAt: string;
            updatedAt: string;
            subtasks: {
               __typename?: 'Subtask';
               id: string;
               title: string;
               description: string;
               status: Types.TaskStatus;
               dependencies: string[];
               details?: string | null;
               testStrategy?: string | null;
               createdAt: string;
               updatedAt: string;
            }[];
         };
      }[];
      nodes: {
         __typename?: 'Task';
         id: string;
         title: string;
         status: Types.TaskStatus;
         progress: number;
      }[];
      pageInfo: {
         __typename?: 'PageInfo';
         hasNextPage: boolean;
         hasPreviousPage: boolean;
         startCursor?: string | null;
         endCursor?: string | null;
      };
   };
}

export type GetTaskByIdQueryVariables = Types.Exact<{
   id: Types.Scalars['ID']['input'];
}>;

export interface GetTaskByIdQueryResult {
   __typename?: 'Query';
   task?: {
      __typename?: 'Task';
      id: string;
      title: string;
      description: string;
      status: Types.TaskStatus;
      priority: Types.TaskPriority;
      dependencies: string[];
      details?: string | null;
      testStrategy?: string | null;
      complexity?: number | null;
      progress: number;
      isReady: boolean;
      createdAt: string;
      updatedAt: string;
      subtasks: {
         __typename?: 'Subtask';
         id: string;
         title: string;
         description: string;
         status: Types.TaskStatus;
         dependencies: string[];
         details?: string | null;
         testStrategy?: string | null;
         createdAt: string;
         updatedAt: string;
      }[];
   } | null;
}

export type SearchTasksQueryVariables = Types.Exact<{
   query: Types.Scalars['String']['input'];
   filter?: Types.InputMaybe<Types.TaskFilterInput>;
   pagination?: Types.InputMaybe<Types.PaginationInput>;
}>;

export interface SearchTasksQueryResult {
   __typename?: 'Query';
   searchTasks: {
      __typename?: 'TaskConnection';
      totalCount?: number | null;
      edges: {
         __typename?: 'TaskEdge';
         cursor: string;
         node: {
            __typename?: 'Task';
            id: string;
            title: string;
            description: string;
            status: Types.TaskStatus;
            priority: Types.TaskPriority;
            progress: number;
         };
      }[];
      pageInfo: {
         __typename?: 'PageInfo';
         hasNextPage: boolean;
         hasPreviousPage: boolean;
         startCursor?: string | null;
         endCursor?: string | null;
      };
   };
}

export type GetReadyTasksQueryVariables = Types.Exact<{
   filter?: Types.InputMaybe<Types.TaskFilterInput>;
   pagination?: Types.InputMaybe<Types.PaginationInput>;
}>;

export interface GetReadyTasksQueryResult {
   __typename?: 'Query';
   readyTasks: {
      __typename?: 'TaskConnection';
      edges: {
         __typename?: 'TaskEdge';
         cursor: string;
         node: {
            __typename?: 'Task';
            id: string;
            title: string;
            description: string;
            status: Types.TaskStatus;
            priority: Types.TaskPriority;
            isReady: boolean;
            dependencies: string[];
         };
      }[];
      pageInfo: { __typename?: 'PageInfo'; hasNextPage: boolean; hasPreviousPage: boolean };
   };
}
