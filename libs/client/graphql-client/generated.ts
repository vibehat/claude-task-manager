import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
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
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
   ID: { input: string; output: string };
   String: { input: string; output: string };
   Boolean: { input: boolean; output: boolean };
   Int: { input: number; output: number };
   Float: { input: number; output: number };
   DateTime: { input: string; output: string };
   JSON: { input: any; output: any };
};

/** Input for batch sync operations */
export type BatchOperationInput = {
   /** Operation data */
   data: Scalars['JSON']['input'];
   /** Target task ID if applicable */
   taskId?: InputMaybe<Scalars['ID']['input']>;
   /** Type of operation */
   type: SyncOperationType;
};

/** Options for batch operations */
export type BatchOptionsInput = {
   /** Whether to continue on error */
   continueOnError?: InputMaybe<Scalars['Boolean']['input']>;
   /** Maximum retry attempts */
   maxRetries?: InputMaybe<Scalars['Int']['input']>;
   /** Whether to execute operations in parallel */
   parallel?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Batch operation result */
export type BatchResult = {
   __typename?: 'BatchResult';
   /** Batch operation ID */
   batchId: Scalars['ID']['output'];
   /** Number of operations in batch */
   operationsCount: Scalars['Int']['output'];
   /** Batch options used */
   options?: Maybe<Scalars['JSON']['output']>;
   /** Timestamp when batch was created */
   timestamp: Scalars['DateTime']['output'];
};

/** CLI command connection for paginated CLI queries */
export type CliCommandConnection = {
   __typename?: 'CLICommandConnection';
   /** List of CLI command edges */
   edges: Array<CliCommandEdge>;
   /** List of CLI commands (convenience field) */
   nodes: Array<CliCommandResult>;
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
};

/** CLI command edge with cursor */
export type CliCommandEdge = {
   __typename?: 'CLICommandEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The CLI command node */
   node: CliCommandResult;
};

/** CLI command filtering options */
export type CliCommandFilterInput = {
   /** Search in command text */
   commandSearch?: InputMaybe<Scalars['String']['input']>;
   /** Filter by execution duration range (milliseconds) */
   durationRange?: InputMaybe<IntRangeInput>;
   /** Filter by execution date range */
   executedAt?: InputMaybe<DateRangeInput>;
   /** Filter by exit code */
   exitCode?: InputMaybe<Array<Scalars['Int']['input']>>;
   /** Filter by command execution status */
   status?: InputMaybe<Array<CliCommandStatus>>;
   /** Filter by success/failure */
   successful?: InputMaybe<Scalars['Boolean']['input']>;
   /** Filter commands related to specific task */
   taskId?: InputMaybe<Scalars['ID']['input']>;
};

/** Input for executing CLI commands */
export type CliCommandInput = {
   /** Command arguments */
   args?: InputMaybe<Array<Scalars['String']['input']>>;
   /** Whether to capture real-time progress */
   captureProgress?: InputMaybe<Scalars['Boolean']['input']>;
   /** Command to execute */
   command: Scalars['String']['input'];
   /** Whether to parse command output */
   parseOutput?: InputMaybe<Scalars['Boolean']['input']>;
   /** Execution timeout in milliseconds */
   timeout?: InputMaybe<Scalars['Int']['input']>;
};

/** CLI command ordering options */
export type CliCommandOrderByInput = {
   /** Sort direction */
   direction: OrderDirection;
   /** Field to order by */
   field: CliCommandOrderField;
};

/** CLI command order fields */
export enum CliCommandOrderField {
   Command = 'COMMAND',
   Duration = 'DURATION',
   ExitCode = 'EXIT_CODE',
   Status = 'STATUS',
   Timestamp = 'TIMESTAMP',
}

/** Represents the result of a CLI command execution */
export type CliCommandResult = {
   __typename?: 'CLICommandResult';
   /** Command line arguments */
   args: Array<Scalars['String']['output']>;
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
};

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
export type CliError = {
   __typename?: 'CLIError';
   /** Error code */
   code: Scalars['String']['output'];
   /** Additional error details */
   details?: Maybe<Scalars['JSON']['output']>;
   /** Human-readable error message */
   message: Scalars['String']['output'];
   /** Stack trace if available */
   stack?: Maybe<Scalars['String']['output']>;
};

/** CLI execution status information */
export type CliStatus = {
   __typename?: 'CLIStatus';
   /** Number of active CLI processes */
   activeProcesses: Scalars['Int']['output'];
   /** Recent command history */
   recentCommands: Array<CliCommandResult>;
   /** System information */
   systemInfo: SystemInfo;
};

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

/** Input for creating issues */
export type CreateIssueInput = {
   /** Assignee ID */
   assigneeId?: InputMaybe<Scalars['ID']['input']>;
   /** Sprint/cycle identifier */
   cycleId?: InputMaybe<Scalars['String']['input']>;
   /** Description of the issue */
   description: Scalars['String']['input'];
   /** Due date for the issue */
   dueDate?: InputMaybe<Scalars['DateTime']['input']>;
   /** Human-readable identifier (e.g., LNUI-101) */
   identifier: Scalars['String']['input'];
   /** Type of issue */
   issueType?: InputMaybe<IssueType>;
   /** Label IDs to assign */
   labelIds?: InputMaybe<Array<Scalars['ID']['input']>>;
   /** Priority of the issue */
   priority?: InputMaybe<Scalars['String']['input']>;
   /** Project ID */
   projectId?: InputMaybe<Scalars['ID']['input']>;
   /** Rank for ordering */
   rank: Scalars['String']['input'];
   /** Status of the issue */
   status?: InputMaybe<Scalars['String']['input']>;
   /** Sub-issue IDs */
   subissues?: InputMaybe<Array<Scalars['String']['input']>>;
   /** Associated subtask ID */
   subtaskId?: InputMaybe<Scalars['String']['input']>;
   /** Associated task ID */
   taskId?: InputMaybe<Scalars['Int']['input']>;
   /** Title of the issue */
   title: Scalars['String']['input'];
};

/** Input for creating labels */
export type CreateLabelInput = {
   /** Color associated with the label */
   color: Scalars['String']['input'];
   /** Description of the label */
   description?: InputMaybe<Scalars['String']['input']>;
   /** Display name of the label */
   name: Scalars['String']['input'];
};

/** Input for creating projects */
export type CreateProjectInput = {
   /** Color associated with the project */
   color?: InputMaybe<Scalars['String']['input']>;
   /** Description of the project */
   description?: InputMaybe<Scalars['String']['input']>;
   /** Short identifier for the project */
   identifier?: InputMaybe<Scalars['String']['input']>;
   /** Display name of the project */
   name: Scalars['String']['input'];
};

export type CreateTaskInput = {
   dependencies?: InputMaybe<Array<Scalars['ID']['input']>>;
   description: Scalars['String']['input'];
   details?: InputMaybe<Scalars['String']['input']>;
   priority?: InputMaybe<TaskPriority>;
   testStrategy?: InputMaybe<Scalars['String']['input']>;
   title: Scalars['String']['input'];
};

/** Input for creating users */
export type CreateUserInput = {
   /** Avatar URL for the user */
   avatarUrl?: InputMaybe<Scalars['String']['input']>;
   /** Email address of the user */
   email: Scalars['String']['input'];
   /** Date when the user joined */
   joinedDate: Scalars['DateTime']['input'];
   /** Display name of the user */
   name: Scalars['String']['input'];
   /** Role of the user */
   role?: InputMaybe<UserRole>;
   /** Status of the user */
   status?: InputMaybe<UserStatus>;
   /** Team IDs the user belongs to */
   teamIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Date range input for filtering by date ranges */
export type DateRangeInput = {
   /** End date (inclusive) */
   endDate?: InputMaybe<Scalars['DateTime']['input']>;
   /** Start date (inclusive) */
   startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Integer range input for numeric filtering */
export type IntRangeInput = {
   /** Maximum value (inclusive) */
   max?: InputMaybe<Scalars['Int']['input']>;
   /** Minimum value (inclusive) */
   min?: InputMaybe<Scalars['Int']['input']>;
};

/** Issue information - wraps tasks with additional board metadata */
export type Issue = {
   __typename?: 'Issue';
   /** User assigned to this issue */
   assignee?: Maybe<User>;
   /** Timestamp when the issue was created */
   createdAt: Scalars['DateTime']['output'];
   /** Sprint/cycle identifier */
   cycleId?: Maybe<Scalars['String']['output']>;
   /** Description of the issue */
   description: Scalars['String']['output'];
   /** Due date for the issue */
   dueDate?: Maybe<Scalars['DateTime']['output']>;
   /** Unique identifier for the issue */
   id: Scalars['ID']['output'];
   /** Human-readable identifier (e.g., LNUI-101) */
   identifier: Scalars['String']['output'];
   /** Type of issue (task or subtask) */
   issueType: IssueType;
   /** Labels assigned to this issue */
   labels: Array<Label>;
   /** Priority level of the issue */
   priority: Scalars['String']['output'];
   /** Project this issue belongs to */
   project?: Maybe<Project>;
   /** Rank for ordering (LexoRank) */
   rank: Scalars['String']['output'];
   /** Current status of the issue */
   status: Scalars['String']['output'];
   /** Sub-issue IDs (for parent-child relationships) */
   subissues: Array<Scalars['String']['output']>;
   /** Associated subtask ID from Task Master */
   subtaskId?: Maybe<Scalars['String']['output']>;
   /** Task this issue is linked to */
   task?: Maybe<Task>;
   /** Associated task ID from Task Master */
   taskId?: Maybe<Scalars['Int']['output']>;
   /** Title of the issue */
   title: Scalars['String']['output'];
   /** Timestamp when the issue was last updated */
   updatedAt: Scalars['DateTime']['output'];
};

/** Issue connection for paginated issue queries */
export type IssueConnection = {
   __typename?: 'IssueConnection';
   /** List of issue edges */
   edges: Array<IssueEdge>;
   /** List of issues (convenience field) */
   nodes: Array<Issue>;
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
};

/** Issue edge with cursor */
export type IssueEdge = {
   __typename?: 'IssueEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The issue node */
   node: Issue;
};

/** Issue filtering options */
export type IssueFilterInput = {
   /** Filter by assignee */
   assigneeId?: InputMaybe<Scalars['ID']['input']>;
   /** Filter by creation date range */
   createdAt?: InputMaybe<DateRangeInput>;
   /** Filter by cycle ID */
   cycleId?: InputMaybe<Scalars['String']['input']>;
   /** Filter by due date range */
   dueDate?: InputMaybe<DateRangeInput>;
   /** Filter by issue type */
   issueType?: InputMaybe<IssueType>;
   /** Filter by labels */
   labelIds?: InputMaybe<Array<Scalars['ID']['input']>>;
   /** Filter by issue priority */
   priority?: InputMaybe<Array<Scalars['String']['input']>>;
   /** Filter by project */
   projectId?: InputMaybe<Scalars['ID']['input']>;
   /** Search in title and description */
   search?: InputMaybe<Scalars['String']['input']>;
   /** Filter by issue status */
   status?: InputMaybe<Array<Scalars['String']['input']>>;
   /** Filter by associated subtask ID */
   subtaskId?: InputMaybe<Scalars['String']['input']>;
   /** Filter by associated task ID */
   taskId?: InputMaybe<Scalars['Int']['input']>;
   /** Filter by last update date range */
   updatedAt?: InputMaybe<DateRangeInput>;
};

/** Issue ordering options */
export type IssueOrderByInput = {
   /** Sort direction */
   direction: OrderDirection;
   /** Field to order by */
   field: IssueOrderField;
};

/** Issue order fields */
export enum IssueOrderField {
   CreatedAt = 'CREATED_AT',
   DueDate = 'DUE_DATE',
   Id = 'ID',
   Identifier = 'IDENTIFIER',
   Priority = 'PRIORITY',
   Rank = 'RANK',
   Status = 'STATUS',
   Title = 'TITLE',
   UpdatedAt = 'UPDATED_AT',
}

/** Issue type enumeration */
export enum IssueType {
   /** Issue represents a subtask */
   Subtask = 'SUBTASK',
   /** Issue represents a main task */
   Task = 'TASK',
}

/** Label information for categorizing issues */
export type Label = {
   __typename?: 'Label';
   /** Color associated with the label */
   color: Scalars['String']['output'];
   /** Timestamp when the label was created */
   createdAt: Scalars['DateTime']['output'];
   /** Description of the label */
   description?: Maybe<Scalars['String']['output']>;
   /** Unique identifier for the label */
   id: Scalars['ID']['output'];
   /** Issues that have this label */
   issues: Array<Issue>;
   /** Display name of the label */
   name: Scalars['String']['output'];
   /** Timestamp when the label was last updated */
   updatedAt: Scalars['DateTime']['output'];
};

/** Label connection for paginated label queries */
export type LabelConnection = {
   __typename?: 'LabelConnection';
   /** List of label edges */
   edges: Array<LabelEdge>;
   /** List of labels (convenience field) */
   nodes: Array<Label>;
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
};

/** Label edge with cursor */
export type LabelEdge = {
   __typename?: 'LabelEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The label node */
   node: Label;
};

/** Label filtering options */
export type LabelFilterInput = {
   /** Filter by color */
   color?: InputMaybe<Scalars['String']['input']>;
   /** Search in name and description */
   search?: InputMaybe<Scalars['String']['input']>;
};

/** Memory usage statistics */
export type MemoryUsage = {
   __typename?: 'MemoryUsage';
   /** External memory in bytes */
   external: Scalars['Float']['output'];
   /** Heap total in bytes */
   heapTotal: Scalars['Float']['output'];
   /** Heap used in bytes */
   heapUsed: Scalars['Float']['output'];
   /** Resident set size in bytes */
   rss: Scalars['Float']['output'];
};

export type Mutation = {
   __typename?: 'Mutation';
   /** Assign an issue to a user */
   assignIssue: Issue;
   /** Clear CLI command history */
   clearCLIHistory: Scalars['Boolean']['output'];
   /** Create a batch sync operation */
   createBatchOperation: BatchResult;
   /** Create a new issue */
   createIssue: Issue;
   /** Create a new label */
   createLabel: Label;
   /** Create a new project */
   createProject: Project;
   /** Create a new task */
   createTask?: Maybe<Task>;
   /** Create a new user */
   createUser: User;
   /** Delete an issue */
   deleteIssue: Scalars['Boolean']['output'];
   /** Delete a label */
   deleteLabel: Scalars['Boolean']['output'];
   /** Delete a project */
   deleteProject: Scalars['Boolean']['output'];
   /** Delete a task */
   deleteTask: Scalars['Boolean']['output'];
   /** Delete a user */
   deleteUser: Scalars['Boolean']['output'];
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
   /** Update an existing issue */
   updateIssue: Issue;
   /** Update issue status */
   updateIssueStatus: Issue;
   /** Update an existing label */
   updateLabel: Label;
   /** Update an existing project */
   updateProject: Project;
   /** Update an existing task */
   updateTask?: Maybe<Task>;
   /** Update task status via sync operation */
   updateTaskStatus: SyncOperation;
   /** Update an existing user */
   updateUser: User;
};

export type MutationAssignIssueArgs = {
   assigneeId: Scalars['ID']['input'];
   issueId: Scalars['ID']['input'];
};

export type MutationCreateBatchOperationArgs = {
   operations: Array<BatchOperationInput>;
   options?: InputMaybe<BatchOptionsInput>;
};

export type MutationCreateIssueArgs = {
   input: CreateIssueInput;
};

export type MutationCreateLabelArgs = {
   input: CreateLabelInput;
};

export type MutationCreateProjectArgs = {
   input: CreateProjectInput;
};

export type MutationCreateTaskArgs = {
   input: CreateTaskInput;
};

export type MutationCreateUserArgs = {
   input: CreateUserInput;
};

export type MutationDeleteIssueArgs = {
   id: Scalars['ID']['input'];
};

export type MutationDeleteLabelArgs = {
   id: Scalars['ID']['input'];
};

export type MutationDeleteProjectArgs = {
   id: Scalars['ID']['input'];
};

export type MutationDeleteTaskArgs = {
   id: Scalars['ID']['input'];
};

export type MutationDeleteUserArgs = {
   id: Scalars['ID']['input'];
};

export type MutationExecuteCliCommandArgs = {
   input: CliCommandInput;
};

export type MutationKillCliProcessArgs = {
   processId: Scalars['String']['input'];
};

export type MutationResolveSyncConflictArgs = {
   conflictId: Scalars['ID']['input'];
   resolution: ConflictResolution;
};

export type MutationUpdateIssueArgs = {
   id: Scalars['ID']['input'];
   input: UpdateIssueInput;
};

export type MutationUpdateIssueStatusArgs = {
   issueId: Scalars['ID']['input'];
   status: Scalars['String']['input'];
};

export type MutationUpdateLabelArgs = {
   id: Scalars['ID']['input'];
   input: UpdateLabelInput;
};

export type MutationUpdateProjectArgs = {
   id: Scalars['ID']['input'];
   input: UpdateProjectInput;
};

export type MutationUpdateTaskArgs = {
   id: Scalars['ID']['input'];
   input: UpdateTaskInput;
};

export type MutationUpdateTaskStatusArgs = {
   source?: InputMaybe<Scalars['String']['input']>;
   status: TaskStatus;
   taskId: Scalars['ID']['input'];
};

export type MutationUpdateUserArgs = {
   id: Scalars['ID']['input'];
   input: UpdateUserInput;
};

/** Sort direction */
export enum OrderDirection {
   Asc = 'ASC',
   Desc = 'DESC',
}

/** Page information for cursor-based pagination */
export type PageInfo = {
   __typename?: 'PageInfo';
   /** Cursor pointing to the last edge */
   endCursor?: Maybe<Scalars['String']['output']>;
   /** Whether there are more items when paginating forward */
   hasNextPage: Scalars['Boolean']['output'];
   /** Whether there are more items when paginating backward */
   hasPreviousPage: Scalars['Boolean']['output'];
   /** Cursor pointing to the first edge */
   startCursor?: Maybe<Scalars['String']['output']>;
};

/** Pagination input with cursor-based pagination support */
export type PaginationInput = {
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
};

/** Project information for organizing issues */
export type Project = {
   __typename?: 'Project';
   /** Color associated with the project */
   color?: Maybe<Scalars['String']['output']>;
   /** Timestamp when the project was created */
   createdAt: Scalars['DateTime']['output'];
   /** Description of the project */
   description?: Maybe<Scalars['String']['output']>;
   /** Unique identifier for the project */
   id: Scalars['ID']['output'];
   /** Short identifier for the project (e.g., LNUI) */
   identifier?: Maybe<Scalars['String']['output']>;
   /** Issues belonging to this project */
   issues: Array<Issue>;
   /** Display name of the project */
   name: Scalars['String']['output'];
   /** Timestamp when the project was last updated */
   updatedAt: Scalars['DateTime']['output'];
};

/** Project connection for paginated project queries */
export type ProjectConnection = {
   __typename?: 'ProjectConnection';
   /** List of project edges */
   edges: Array<ProjectEdge>;
   /** List of projects (convenience field) */
   nodes: Array<Project>;
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
};

/** Project edge with cursor */
export type ProjectEdge = {
   __typename?: 'ProjectEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The project node */
   node: Project;
};

/** Project filtering options */
export type ProjectFilterInput = {
   /** Filter by identifier */
   identifier?: InputMaybe<Scalars['String']['input']>;
   /** Search in name and description */
   search?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
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
   /** Get a specific issue by ID */
   issue?: Maybe<Issue>;
   /** Get all issues with comprehensive filtering, ordering, and pagination */
   issues: IssueConnection;
   /** Get issues assigned to a specific user */
   issuesByAssignee: IssueConnection;
   /** Get issues by project */
   issuesByProject: IssueConnection;
   /** Get a specific label by ID */
   label?: Maybe<Label>;
   /** Get all labels */
   labels: LabelConnection;
   /** Get a specific project by ID */
   project?: Maybe<Project>;
   /** Get all projects */
   projects: ProjectConnection;
   /** Get tasks ready to work on (no blocking dependencies) */
   readyTasks: TaskConnection;
   /** Search issues with text search and filters */
   searchIssues: IssueConnection;
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
   /** Get a specific user by ID */
   user?: Maybe<User>;
   /** Get all users */
   users: UserConnection;
};

export type QueryCliCommandArgs = {
   id: Scalars['ID']['input'];
};

export type QueryCliHistoryArgs = {
   filter?: InputMaybe<CliCommandFilterInput>;
   orderBy?: InputMaybe<Array<CliCommandOrderByInput>>;
   pagination?: InputMaybe<PaginationInput>;
};

export type QueryIssueArgs = {
   id: Scalars['ID']['input'];
};

export type QueryIssuesArgs = {
   filter?: InputMaybe<IssueFilterInput>;
   orderBy?: InputMaybe<Array<IssueOrderByInput>>;
   pagination?: InputMaybe<PaginationInput>;
};

export type QueryIssuesByAssigneeArgs = {
   assigneeId: Scalars['ID']['input'];
   filter?: InputMaybe<IssueFilterInput>;
   orderBy?: InputMaybe<Array<IssueOrderByInput>>;
   pagination?: InputMaybe<PaginationInput>;
};

export type QueryIssuesByProjectArgs = {
   filter?: InputMaybe<IssueFilterInput>;
   orderBy?: InputMaybe<Array<IssueOrderByInput>>;
   pagination?: InputMaybe<PaginationInput>;
   projectId: Scalars['ID']['input'];
};

export type QueryLabelArgs = {
   id: Scalars['ID']['input'];
};

export type QueryLabelsArgs = {
   filter?: InputMaybe<LabelFilterInput>;
   pagination?: InputMaybe<PaginationInput>;
};

export type QueryProjectArgs = {
   id: Scalars['ID']['input'];
};

export type QueryProjectsArgs = {
   filter?: InputMaybe<ProjectFilterInput>;
   pagination?: InputMaybe<PaginationInput>;
};

export type QueryReadyTasksArgs = {
   filter?: InputMaybe<TaskFilterInput>;
   orderBy?: InputMaybe<Array<TaskOrderByInput>>;
   pagination?: InputMaybe<PaginationInput>;
};

export type QuerySearchIssuesArgs = {
   filter?: InputMaybe<IssueFilterInput>;
   orderBy?: InputMaybe<Array<IssueOrderByInput>>;
   pagination?: InputMaybe<PaginationInput>;
   query: Scalars['String']['input'];
};

export type QuerySearchTasksArgs = {
   filter?: InputMaybe<TaskFilterInput>;
   orderBy?: InputMaybe<Array<TaskOrderByInput>>;
   pagination?: InputMaybe<PaginationInput>;
   query: Scalars['String']['input'];
};

export type QuerySyncConflictsArgs = {
   filter?: InputMaybe<SyncConflictFilterInput>;
   pagination?: InputMaybe<PaginationInput>;
};

export type QuerySyncOperationArgs = {
   id: Scalars['ID']['input'];
};

export type QuerySyncOperationsArgs = {
   filter?: InputMaybe<SyncOperationFilterInput>;
   orderBy?: InputMaybe<Array<SyncOperationOrderByInput>>;
   pagination?: InputMaybe<PaginationInput>;
};

export type QueryTaskArgs = {
   id: Scalars['ID']['input'];
};

export type QueryTasksArgs = {
   filter?: InputMaybe<TaskFilterInput>;
   orderBy?: InputMaybe<Array<TaskOrderByInput>>;
   pagination?: InputMaybe<PaginationInput>;
};

export type QueryUserArgs = {
   id: Scalars['ID']['input'];
};

export type QueryUsersArgs = {
   filter?: InputMaybe<UserFilterInput>;
   pagination?: InputMaybe<PaginationInput>;
};

/** Interface for entities that have status */
export type Stateful = {
   /** Current status of the entity */
   status: Scalars['String']['output'];
};

/** Represents a subtask within a parent task */
export type Subtask = {
   __typename?: 'Subtask';
   /** Timestamp when the subtask was created */
   createdAt: Scalars['DateTime']['output'];
   /** List of subtask IDs that this subtask depends on */
   dependencies: Array<Scalars['String']['output']>;
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
};

/** Represents a sync conflict that needs resolution */
export type SyncConflict = {
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
};

/** Sync conflict connection for paginated conflict queries */
export type SyncConflictConnection = {
   __typename?: 'SyncConflictConnection';
   /** List of sync conflict edges */
   edges: Array<SyncConflictEdge>;
   /** List of sync conflicts (convenience field) */
   nodes: Array<SyncConflict>;
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
};

/** Sync conflict edge with cursor */
export type SyncConflictEdge = {
   __typename?: 'SyncConflictEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The sync conflict node */
   node: SyncConflict;
};

/** Sync conflict filtering options */
export type SyncConflictFilterInput = {
   /** Filter by conflict detection date range */
   detectedAt?: InputMaybe<DateRangeInput>;
   /** Filter by operation type that caused conflict */
   operationType?: InputMaybe<Array<SyncOperationType>>;
   /** Filter by resolution strategy used */
   resolution?: InputMaybe<Array<ConflictResolution>>;
   /** Filter by conflict resolution status */
   resolved?: InputMaybe<Scalars['Boolean']['input']>;
   /** Filter by resolution date range */
   resolvedAt?: InputMaybe<DateRangeInput>;
   /** Filter by task involved in conflict */
   taskId?: InputMaybe<Scalars['ID']['input']>;
};

/** Sync operation error information */
export type SyncError = {
   __typename?: 'SyncError';
   /** Error code */
   code: Scalars['String']['output'];
   /** Additional error details */
   details?: Maybe<Scalars['JSON']['output']>;
   /** Human-readable error message */
   message: Scalars['String']['output'];
   /** Related operation that caused the error */
   operationId?: Maybe<Scalars['ID']['output']>;
};

/** Sync health metrics */
export type SyncHealth = {
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
};

/** Represents a synchronization operation */
export type SyncOperation = {
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
   taskIds: Array<Scalars['ID']['output']>;
   /** Timestamp when the operation was created */
   timestamp: Scalars['DateTime']['output'];
   /** Type of synchronization operation */
   type: SyncOperationType;
};

/** Sync operation connection for paginated sync queries */
export type SyncOperationConnection = {
   __typename?: 'SyncOperationConnection';
   /** List of sync operation edges */
   edges: Array<SyncOperationEdge>;
   /** List of sync operations (convenience field) */
   nodes: Array<SyncOperation>;
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
};

/** Sync operation edge with cursor */
export type SyncOperationEdge = {
   __typename?: 'SyncOperationEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The sync operation node */
   node: SyncOperation;
};

/** Sync operation filtering options */
export type SyncOperationFilterInput = {
   /** Filter by completion date range */
   completedAt?: InputMaybe<DateRangeInput>;
   /** Filter by creation date range */
   createdAt?: InputMaybe<DateRangeInput>;
   /** Filter operations with/without errors */
   hasError?: InputMaybe<Scalars['Boolean']['input']>;
   /** Filter by retry count range */
   retryCountRange?: InputMaybe<IntRangeInput>;
   /** Filter by operation source */
   source?: InputMaybe<Array<Scalars['String']['input']>>;
   /** Filter by operation status */
   status?: InputMaybe<Array<SyncOperationStatus>>;
   /** Filter operations affecting specific tasks */
   taskIds?: InputMaybe<Array<Scalars['ID']['input']>>;
   /** Filter by operation type */
   type?: InputMaybe<Array<SyncOperationType>>;
};

/** Sync operation ordering options */
export type SyncOperationOrderByInput = {
   /** Sort direction */
   direction: OrderDirection;
   /** Field to order by */
   field: SyncOperationOrderField;
};

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
export type SyncStatus = {
   __typename?: 'SyncStatus';
   /** Active conflicts */
   conflicts: Array<SyncConflict>;
   /** Recent sync operations */
   operations: Array<SyncOperation>;
   /** Optimistic updates count */
   optimisticUpdatesCount: Scalars['Int']['output'];
   /** Number of operations in queue */
   queueSize: Scalars['Int']['output'];
   /** Current sync state */
   state: SyncState;
};

/** System information */
export type SystemInfo = {
   __typename?: 'SystemInfo';
   /** Memory usage statistics */
   memoryUsage: MemoryUsage;
   /** Node.js version */
   nodeVersion: Scalars['String']['output'];
   /** Platform information */
   platform: Scalars['String']['output'];
   /** Process uptime in seconds */
   uptime: Scalars['Float']['output'];
};

/** Represents a task in the Task Master system */
export type Task = {
   __typename?: 'Task';
   /** Complexity score for the task (1-10) */
   complexity?: Maybe<Scalars['Int']['output']>;
   /** Timestamp when the task was created */
   createdAt: Scalars['DateTime']['output'];
   /** List of task IDs that this task depends on */
   dependencies: Array<Scalars['ID']['output']>;
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
   subtasks: Array<Subtask>;
   /** Testing strategy for this task */
   testStrategy?: Maybe<Scalars['String']['output']>;
   /** Human-readable title of the task */
   title: Scalars['String']['output'];
   /** Timestamp when the task was last updated */
   updatedAt: Scalars['DateTime']['output'];
};

/** A collection of tasks with metadata */
export type TaskCollection = {
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
   tasks: Array<Task>;
   /** Total number of tasks in the collection */
   total: Scalars['Int']['output'];
};

/** Task connection for paginated task queries */
export type TaskConnection = {
   __typename?: 'TaskConnection';
   /** List of task edges */
   edges: Array<TaskEdge>;
   /** List of tasks (convenience field) */
   nodes: Array<Task>;
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
};

/** Task edge with cursor */
export type TaskEdge = {
   __typename?: 'TaskEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The task node */
   node: Task;
};

/** Comprehensive task filtering options */
export type TaskFilterInput = {
   /** Filter by complexity score range */
   complexityRange?: InputMaybe<IntRangeInput>;
   /** Filter by creation date range */
   createdAt?: InputMaybe<DateRangeInput>;
   /** Filter tasks that depend on specific task IDs */
   dependsOn?: InputMaybe<Array<Scalars['ID']['input']>>;
   /** Filter tasks that have no dependencies */
   hasNoDependencies?: InputMaybe<Scalars['Boolean']['input']>;
   /** Filter tasks that have subtasks */
   hasSubtasks?: InputMaybe<Scalars['Boolean']['input']>;
   /** Filter tasks ready to work on (no blocking dependencies) */
   isReady?: InputMaybe<Scalars['Boolean']['input']>;
   /** Filter by task priority */
   priority?: InputMaybe<Array<TaskPriority>>;
   /** Filter by progress percentage range */
   progressRange?: InputMaybe<IntRangeInput>;
   /** Search in title and description (case-insensitive) */
   search?: InputMaybe<Scalars['String']['input']>;
   /** Filter by task status */
   status?: InputMaybe<Array<TaskStatus>>;
   /** Filter by last update date range */
   updatedAt?: InputMaybe<DateRangeInput>;
};

/** Metadata about a collection of tasks */
export type TaskMetadata = {
   __typename?: 'TaskMetadata';
   /** Timestamp when the task collection was created */
   created: Scalars['DateTime']['output'];
   /** Description of the task collection */
   description: Scalars['String']['output'];
   /** Timestamp when the task collection was last updated */
   updated: Scalars['DateTime']['output'];
};

/** Task ordering options */
export type TaskOrderByInput = {
   /** Sort direction */
   direction: OrderDirection;
   /** Field to order by */
   field: TaskOrderField;
};

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
export type TasksData = {
   __typename?: 'TasksData';
   /** The main task collection */
   master: TaskCollection;
};

/** Interface for entities that have timestamps */
export type Timestamped = {
   /** Timestamp when the entity was created */
   createdAt: Scalars['DateTime']['output'];
   /** Timestamp when the entity was last updated */
   updatedAt: Scalars['DateTime']['output'];
};

/** Input for updating issues */
export type UpdateIssueInput = {
   /** Assignee ID */
   assigneeId?: InputMaybe<Scalars['ID']['input']>;
   /** Sprint/cycle identifier */
   cycleId?: InputMaybe<Scalars['String']['input']>;
   /** Description of the issue */
   description?: InputMaybe<Scalars['String']['input']>;
   /** Due date for the issue */
   dueDate?: InputMaybe<Scalars['DateTime']['input']>;
   /** Label IDs to assign */
   labelIds?: InputMaybe<Array<Scalars['ID']['input']>>;
   /** Priority of the issue */
   priority?: InputMaybe<Scalars['String']['input']>;
   /** Project ID */
   projectId?: InputMaybe<Scalars['ID']['input']>;
   /** Rank for ordering */
   rank?: InputMaybe<Scalars['String']['input']>;
   /** Status of the issue */
   status?: InputMaybe<Scalars['String']['input']>;
   /** Sub-issue IDs */
   subissues?: InputMaybe<Array<Scalars['String']['input']>>;
   /** Title of the issue */
   title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for updating labels */
export type UpdateLabelInput = {
   /** Color associated with the label */
   color?: InputMaybe<Scalars['String']['input']>;
   /** Description of the label */
   description?: InputMaybe<Scalars['String']['input']>;
   /** Display name of the label */
   name?: InputMaybe<Scalars['String']['input']>;
};

/** Input for updating projects */
export type UpdateProjectInput = {
   /** Color associated with the project */
   color?: InputMaybe<Scalars['String']['input']>;
   /** Description of the project */
   description?: InputMaybe<Scalars['String']['input']>;
   /** Short identifier for the project */
   identifier?: InputMaybe<Scalars['String']['input']>;
   /** Display name of the project */
   name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTaskInput = {
   dependencies?: InputMaybe<Array<Scalars['ID']['input']>>;
   description?: InputMaybe<Scalars['String']['input']>;
   details?: InputMaybe<Scalars['String']['input']>;
   priority?: InputMaybe<TaskPriority>;
   status?: InputMaybe<TaskStatus>;
   testStrategy?: InputMaybe<Scalars['String']['input']>;
   title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for updating users */
export type UpdateUserInput = {
   /** Avatar URL for the user */
   avatarUrl?: InputMaybe<Scalars['String']['input']>;
   /** Display name of the user */
   name?: InputMaybe<Scalars['String']['input']>;
   /** Role of the user */
   role?: InputMaybe<UserRole>;
   /** Status of the user */
   status?: InputMaybe<UserStatus>;
   /** Team IDs the user belongs to */
   teamIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** User information for issue assignment and management */
export type User = {
   __typename?: 'User';
   /** Issues assigned to this user */
   assignedIssues: Array<Issue>;
   /** Avatar URL for the user */
   avatarUrl?: Maybe<Scalars['String']['output']>;
   /** Timestamp when the user was created */
   createdAt: Scalars['DateTime']['output'];
   /** Email address of the user */
   email: Scalars['String']['output'];
   /** Unique identifier for the user */
   id: Scalars['ID']['output'];
   /** Date when the user joined */
   joinedDate: Scalars['DateTime']['output'];
   /** Display name of the user */
   name: Scalars['String']['output'];
   /** Role of the user in the system */
   role: UserRole;
   /** Current status of the user */
   status: UserStatus;
   /** Team IDs the user belongs to */
   teamIds: Array<Scalars['String']['output']>;
   /** Timestamp when the user was last updated */
   updatedAt: Scalars['DateTime']['output'];
};

/** User connection for paginated user queries */
export type UserConnection = {
   __typename?: 'UserConnection';
   /** List of user edges */
   edges: Array<UserEdge>;
   /** List of users (convenience field) */
   nodes: Array<User>;
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
};

/** User edge with cursor */
export type UserEdge = {
   __typename?: 'UserEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The user node */
   node: User;
};

/** User filtering options */
export type UserFilterInput = {
   /** Filter by user role */
   role?: InputMaybe<Array<UserRole>>;
   /** Search in name and email */
   search?: InputMaybe<Scalars['String']['input']>;
   /** Filter by user status */
   status?: InputMaybe<Array<UserStatus>>;
   /** Filter by team IDs */
   teamIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** User role enumeration */
export enum UserRole {
   /** Administrator with full access */
   Admin = 'ADMIN',
   /** Guest with limited access */
   Guest = 'GUEST',
   /** Regular member */
   Member = 'MEMBER',
}

/** User status enumeration */
export enum UserStatus {
   /** User is away */
   Away = 'AWAY',
   /** User is offline */
   Offline = 'OFFLINE',
   /** User is online */
   Online = 'ONLINE',
}

export type HealthQueryVariables = Exact<{ [key: string]: never }>;

export type HealthQueryResult = { __typename?: 'Query'; health: string };

export type HelloQueryVariables = Exact<{ [key: string]: never }>;

export type HelloQueryResult = { __typename?: 'Query'; hello: string };

export type GetTasksQueryVariables = Exact<{
   filter?: InputMaybe<TaskFilterInput>;
   orderBy?: InputMaybe<Array<TaskOrderByInput> | TaskOrderByInput>;
   pagination?: InputMaybe<PaginationInput>;
}>;

export type GetTasksQueryResult = {
   __typename?: 'Query';
   tasks: {
      __typename?: 'TaskConnection';
      totalCount?: number | null;
      edges: Array<{
         __typename?: 'TaskEdge';
         cursor: string;
         node: {
            __typename?: 'Task';
            id: string;
            title: string;
            description: string;
            status: TaskStatus;
            priority: TaskPriority;
            dependencies: Array<string>;
            details?: string | null;
            testStrategy?: string | null;
            complexity?: number | null;
            createdAt: string;
            updatedAt: string;
            progress: number;
            isReady: boolean;
            subtasks: Array<{
               __typename?: 'Subtask';
               id: string;
               title: string;
               description: string;
               status: TaskStatus;
               dependencies: Array<string>;
               details?: string | null;
               testStrategy?: string | null;
               createdAt: string;
               updatedAt: string;
            }>;
         };
      }>;
      nodes: Array<{
         __typename?: 'Task';
         id: string;
         title: string;
         description: string;
         status: TaskStatus;
         priority: TaskPriority;
         dependencies: Array<string>;
         details?: string | null;
         testStrategy?: string | null;
         complexity?: number | null;
         createdAt: string;
         updatedAt: string;
         progress: number;
         isReady: boolean;
      }>;
      pageInfo: {
         __typename?: 'PageInfo';
         hasNextPage: boolean;
         hasPreviousPage: boolean;
         startCursor?: string | null;
         endCursor?: string | null;
      };
   };
};

export type GetTaskQueryVariables = Exact<{
   id: Scalars['ID']['input'];
}>;

export type GetTaskQueryResult = {
   __typename?: 'Query';
   task?: {
      __typename?: 'Task';
      id: string;
      title: string;
      description: string;
      status: TaskStatus;
      priority: TaskPriority;
      dependencies: Array<string>;
      details?: string | null;
      testStrategy?: string | null;
      complexity?: number | null;
      createdAt: string;
      updatedAt: string;
      progress: number;
      isReady: boolean;
      subtasks: Array<{
         __typename?: 'Subtask';
         id: string;
         title: string;
         description: string;
         status: TaskStatus;
         dependencies: Array<string>;
         details?: string | null;
         testStrategy?: string | null;
         createdAt: string;
         updatedAt: string;
      }>;
   } | null;
};

export type GetReadyTasksQueryVariables = Exact<{
   filter?: InputMaybe<TaskFilterInput>;
   orderBy?: InputMaybe<Array<TaskOrderByInput> | TaskOrderByInput>;
   pagination?: InputMaybe<PaginationInput>;
}>;

export type GetReadyTasksQueryResult = {
   __typename?: 'Query';
   readyTasks: {
      __typename?: 'TaskConnection';
      totalCount?: number | null;
      edges: Array<{
         __typename?: 'TaskEdge';
         cursor: string;
         node: {
            __typename?: 'Task';
            id: string;
            title: string;
            description: string;
            status: TaskStatus;
            priority: TaskPriority;
            dependencies: Array<string>;
            details?: string | null;
            testStrategy?: string | null;
            complexity?: number | null;
            createdAt: string;
            updatedAt: string;
            progress: number;
            isReady: boolean;
         };
      }>;
      nodes: Array<{
         __typename?: 'Task';
         id: string;
         title: string;
         description: string;
         status: TaskStatus;
         priority: TaskPriority;
         dependencies: Array<string>;
         details?: string | null;
         testStrategy?: string | null;
         complexity?: number | null;
         createdAt: string;
         updatedAt: string;
         progress: number;
         isReady: boolean;
      }>;
      pageInfo: {
         __typename?: 'PageInfo';
         hasNextPage: boolean;
         hasPreviousPage: boolean;
         startCursor?: string | null;
         endCursor?: string | null;
      };
   };
};

export type CreateTaskMutationVariables = Exact<{
   input: CreateTaskInput;
}>;

export type CreateTaskMutationResult = {
   __typename?: 'Mutation';
   createTask?: {
      __typename?: 'Task';
      id: string;
      title: string;
      description: string;
      status: TaskStatus;
      priority: TaskPriority;
      dependencies: Array<string>;
      details?: string | null;
      testStrategy?: string | null;
      complexity?: number | null;
      createdAt: string;
      updatedAt: string;
      progress: number;
      isReady: boolean;
   } | null;
};

export type UpdateTaskMutationVariables = Exact<{
   id: Scalars['ID']['input'];
   input: UpdateTaskInput;
}>;

export type UpdateTaskMutationResult = {
   __typename?: 'Mutation';
   updateTask?: {
      __typename?: 'Task';
      id: string;
      title: string;
      description: string;
      status: TaskStatus;
      priority: TaskPriority;
      dependencies: Array<string>;
      details?: string | null;
      testStrategy?: string | null;
      complexity?: number | null;
      createdAt: string;
      updatedAt: string;
      progress: number;
      isReady: boolean;
   } | null;
};

export type DeleteTaskMutationVariables = Exact<{
   id: Scalars['ID']['input'];
}>;

export type DeleteTaskMutationResult = { __typename?: 'Mutation'; deleteTask: boolean };

export type UpdateTaskStatusMutationVariables = Exact<{
   taskId: Scalars['ID']['input'];
   status: TaskStatus;
   source?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateTaskStatusMutationResult = {
   __typename?: 'Mutation';
   updateTaskStatus: {
      __typename?: 'SyncOperation';
      id: string;
      type: SyncOperationType;
      status: SyncOperationStatus;
      timestamp: string;
      source: string;
      taskIds: Array<string>;
      metadata?: any | null;
      retryCount: number;
      completedAt?: string | null;
      error?: {
         __typename?: 'SyncError';
         code: string;
         message: string;
         details?: any | null;
         operationId?: string | null;
      } | null;
   };
};

export const HealthDocument = gql`
   query Health {
      health
   }
`;

/**
 * __useHealthQuery__
 *
 * To run a query within a React component, call `useHealthQuery` and pass it any options that fit your needs.
 * When your component renders, `useHealthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHealthQuery({
 *   variables: {
 *   },
 * });
 */
export function useHealthQuery(
   baseOptions?: ApolloReactHooks.QueryHookOptions<HealthQueryResult, HealthQueryVariables>
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useQuery<HealthQueryResult, HealthQueryVariables>(
      HealthDocument,
      options
   );
}
export function useHealthLazyQuery(
   baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HealthQueryResult, HealthQueryVariables>
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useLazyQuery<HealthQueryResult, HealthQueryVariables>(
      HealthDocument,
      options
   );
}
export function useHealthSuspenseQuery(
   baseOptions?:
      | ApolloReactHooks.SkipToken
      | ApolloReactHooks.SuspenseQueryHookOptions<HealthQueryResult, HealthQueryVariables>
) {
   const options =
      baseOptions === ApolloReactHooks.skipToken
         ? baseOptions
         : { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useSuspenseQuery<HealthQueryResult, HealthQueryVariables>(
      HealthDocument,
      options
   );
}
export type HealthQueryHookResult = ReturnType<typeof useHealthQuery>;
export type HealthLazyQueryHookResult = ReturnType<typeof useHealthLazyQuery>;
export type HealthSuspenseQueryHookResult = ReturnType<typeof useHealthSuspenseQuery>;
export type HealthQueryResult = ApolloReactCommon.QueryResult<
   HealthQueryResult,
   HealthQueryVariables
>;
export function refetchHealthQuery(variables?: HealthQueryVariables) {
   return { query: HealthDocument, variables: variables };
}
export const HelloDocument = gql`
   query Hello {
      hello
   }
`;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(
   baseOptions?: ApolloReactHooks.QueryHookOptions<HelloQueryResult, HelloQueryVariables>
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useQuery<HelloQueryResult, HelloQueryVariables>(HelloDocument, options);
}
export function useHelloLazyQuery(
   baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HelloQueryResult, HelloQueryVariables>
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useLazyQuery<HelloQueryResult, HelloQueryVariables>(
      HelloDocument,
      options
   );
}
export function useHelloSuspenseQuery(
   baseOptions?:
      | ApolloReactHooks.SkipToken
      | ApolloReactHooks.SuspenseQueryHookOptions<HelloQueryResult, HelloQueryVariables>
) {
   const options =
      baseOptions === ApolloReactHooks.skipToken
         ? baseOptions
         : { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useSuspenseQuery<HelloQueryResult, HelloQueryVariables>(
      HelloDocument,
      options
   );
}
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloSuspenseQueryHookResult = ReturnType<typeof useHelloSuspenseQuery>;
export type HelloQueryResult = ApolloReactCommon.QueryResult<HelloQueryResult, HelloQueryVariables>;
export function refetchHelloQuery(variables?: HelloQueryVariables) {
   return { query: HelloDocument, variables: variables };
}
export const GetTasksDocument = gql`
   query GetTasks(
      $filter: TaskFilterInput
      $orderBy: [TaskOrderByInput!]
      $pagination: PaginationInput
   ) {
      tasks(filter: $filter, orderBy: $orderBy, pagination: $pagination) {
         edges {
            node {
               id
               title
               description
               status
               priority
               dependencies
               details
               testStrategy
               complexity
               createdAt
               updatedAt
               progress
               isReady
               subtasks {
                  id
                  title
                  description
                  status
                  dependencies
                  details
                  testStrategy
                  createdAt
                  updatedAt
               }
            }
            cursor
         }
         nodes {
            id
            title
            description
            status
            priority
            dependencies
            details
            testStrategy
            complexity
            createdAt
            updatedAt
            progress
            isReady
         }
         pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
         }
         totalCount
      }
   }
`;

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      orderBy: // value for 'orderBy'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetTasksQuery(
   baseOptions?: ApolloReactHooks.QueryHookOptions<GetTasksQueryResult, GetTasksQueryVariables>
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useQuery<GetTasksQueryResult, GetTasksQueryVariables>(
      GetTasksDocument,
      options
   );
}
export function useGetTasksLazyQuery(
   baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTasksQueryResult, GetTasksQueryVariables>
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useLazyQuery<GetTasksQueryResult, GetTasksQueryVariables>(
      GetTasksDocument,
      options
   );
}
export function useGetTasksSuspenseQuery(
   baseOptions?:
      | ApolloReactHooks.SkipToken
      | ApolloReactHooks.SuspenseQueryHookOptions<GetTasksQueryResult, GetTasksQueryVariables>
) {
   const options =
      baseOptions === ApolloReactHooks.skipToken
         ? baseOptions
         : { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useSuspenseQuery<GetTasksQueryResult, GetTasksQueryVariables>(
      GetTasksDocument,
      options
   );
}
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksSuspenseQueryHookResult = ReturnType<typeof useGetTasksSuspenseQuery>;
export type GetTasksQueryResult = ApolloReactCommon.QueryResult<
   GetTasksQueryResult,
   GetTasksQueryVariables
>;
export function refetchGetTasksQuery(variables?: GetTasksQueryVariables) {
   return { query: GetTasksDocument, variables: variables };
}
export const GetTaskDocument = gql`
   query GetTask($id: ID!) {
      task(id: $id) {
         id
         title
         description
         status
         priority
         dependencies
         details
         testStrategy
         complexity
         createdAt
         updatedAt
         progress
         isReady
         subtasks {
            id
            title
            description
            status
            dependencies
            details
            testStrategy
            createdAt
            updatedAt
         }
      }
   }
`;

/**
 * __useGetTaskQuery__
 *
 * To run a query within a React component, call `useGetTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTaskQuery(
   baseOptions: ApolloReactHooks.QueryHookOptions<GetTaskQueryResult, GetTaskQueryVariables> &
      ({ variables: GetTaskQueryVariables; skip?: boolean } | { skip: boolean })
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useQuery<GetTaskQueryResult, GetTaskQueryVariables>(
      GetTaskDocument,
      options
   );
}
export function useGetTaskLazyQuery(
   baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTaskQueryResult, GetTaskQueryVariables>
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useLazyQuery<GetTaskQueryResult, GetTaskQueryVariables>(
      GetTaskDocument,
      options
   );
}
export function useGetTaskSuspenseQuery(
   baseOptions?:
      | ApolloReactHooks.SkipToken
      | ApolloReactHooks.SuspenseQueryHookOptions<GetTaskQueryResult, GetTaskQueryVariables>
) {
   const options =
      baseOptions === ApolloReactHooks.skipToken
         ? baseOptions
         : { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useSuspenseQuery<GetTaskQueryResult, GetTaskQueryVariables>(
      GetTaskDocument,
      options
   );
}
export type GetTaskQueryHookResult = ReturnType<typeof useGetTaskQuery>;
export type GetTaskLazyQueryHookResult = ReturnType<typeof useGetTaskLazyQuery>;
export type GetTaskSuspenseQueryHookResult = ReturnType<typeof useGetTaskSuspenseQuery>;
export type GetTaskQueryResult = ApolloReactCommon.QueryResult<
   GetTaskQueryResult,
   GetTaskQueryVariables
>;
export function refetchGetTaskQuery(variables: GetTaskQueryVariables) {
   return { query: GetTaskDocument, variables: variables };
}
export const GetReadyTasksDocument = gql`
   query GetReadyTasks(
      $filter: TaskFilterInput
      $orderBy: [TaskOrderByInput!]
      $pagination: PaginationInput
   ) {
      readyTasks(filter: $filter, orderBy: $orderBy, pagination: $pagination) {
         edges {
            node {
               id
               title
               description
               status
               priority
               dependencies
               details
               testStrategy
               complexity
               createdAt
               updatedAt
               progress
               isReady
            }
            cursor
         }
         nodes {
            id
            title
            description
            status
            priority
            dependencies
            details
            testStrategy
            complexity
            createdAt
            updatedAt
            progress
            isReady
         }
         pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
         }
         totalCount
      }
   }
`;

/**
 * __useGetReadyTasksQuery__
 *
 * To run a query within a React component, call `useGetReadyTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReadyTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReadyTasksQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      orderBy: // value for 'orderBy'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetReadyTasksQuery(
   baseOptions?: ApolloReactHooks.QueryHookOptions<
      GetReadyTasksQueryResult,
      GetReadyTasksQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useQuery<GetReadyTasksQueryResult, GetReadyTasksQueryVariables>(
      GetReadyTasksDocument,
      options
   );
}
export function useGetReadyTasksLazyQuery(
   baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
      GetReadyTasksQueryResult,
      GetReadyTasksQueryVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useLazyQuery<GetReadyTasksQueryResult, GetReadyTasksQueryVariables>(
      GetReadyTasksDocument,
      options
   );
}
export function useGetReadyTasksSuspenseQuery(
   baseOptions?:
      | ApolloReactHooks.SkipToken
      | ApolloReactHooks.SuspenseQueryHookOptions<
           GetReadyTasksQueryResult,
           GetReadyTasksQueryVariables
        >
) {
   const options =
      baseOptions === ApolloReactHooks.skipToken
         ? baseOptions
         : { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useSuspenseQuery<GetReadyTasksQueryResult, GetReadyTasksQueryVariables>(
      GetReadyTasksDocument,
      options
   );
}
export type GetReadyTasksQueryHookResult = ReturnType<typeof useGetReadyTasksQuery>;
export type GetReadyTasksLazyQueryHookResult = ReturnType<typeof useGetReadyTasksLazyQuery>;
export type GetReadyTasksSuspenseQueryHookResult = ReturnType<typeof useGetReadyTasksSuspenseQuery>;
export type GetReadyTasksQueryResult = ApolloReactCommon.QueryResult<
   GetReadyTasksQueryResult,
   GetReadyTasksQueryVariables
>;
export function refetchGetReadyTasksQuery(variables?: GetReadyTasksQueryVariables) {
   return { query: GetReadyTasksDocument, variables: variables };
}
export const CreateTaskDocument = gql`
   mutation CreateTask($input: CreateTaskInput!) {
      createTask(input: $input) {
         id
         title
         description
         status
         priority
         dependencies
         details
         testStrategy
         complexity
         createdAt
         updatedAt
         progress
         isReady
      }
   }
`;
export type CreateTaskMutationFn = ApolloReactCommon.MutationFunction<
   CreateTaskMutationResult,
   CreateTaskMutationVariables
>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaskMutation(
   baseOptions?: ApolloReactHooks.MutationHookOptions<
      CreateTaskMutationResult,
      CreateTaskMutationVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useMutation<CreateTaskMutationResult, CreateTaskMutationVariables>(
      CreateTaskDocument,
      options
   );
}
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = ApolloReactCommon.MutationResult<CreateTaskMutationResult>;
export type CreateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<
   CreateTaskMutationResult,
   CreateTaskMutationVariables
>;
export const UpdateTaskDocument = gql`
   mutation UpdateTask($id: ID!, $input: UpdateTaskInput!) {
      updateTask(id: $id, input: $input) {
         id
         title
         description
         status
         priority
         dependencies
         details
         testStrategy
         complexity
         createdAt
         updatedAt
         progress
         isReady
      }
   }
`;
export type UpdateTaskMutationFn = ApolloReactCommon.MutationFunction<
   UpdateTaskMutationResult,
   UpdateTaskMutationVariables
>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTaskMutation(
   baseOptions?: ApolloReactHooks.MutationHookOptions<
      UpdateTaskMutationResult,
      UpdateTaskMutationVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useMutation<UpdateTaskMutationResult, UpdateTaskMutationVariables>(
      UpdateTaskDocument,
      options
   );
}
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = ApolloReactCommon.MutationResult<UpdateTaskMutationResult>;
export type UpdateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<
   UpdateTaskMutationResult,
   UpdateTaskMutationVariables
>;
export const DeleteTaskDocument = gql`
   mutation DeleteTask($id: ID!) {
      deleteTask(id: $id)
   }
`;
export type DeleteTaskMutationFn = ApolloReactCommon.MutationFunction<
   DeleteTaskMutationResult,
   DeleteTaskMutationVariables
>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(
   baseOptions?: ApolloReactHooks.MutationHookOptions<
      DeleteTaskMutationResult,
      DeleteTaskMutationVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useMutation<DeleteTaskMutationResult, DeleteTaskMutationVariables>(
      DeleteTaskDocument,
      options
   );
}
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = ApolloReactCommon.MutationResult<DeleteTaskMutationResult>;
export type DeleteTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<
   DeleteTaskMutationResult,
   DeleteTaskMutationVariables
>;
export const UpdateTaskStatusDocument = gql`
   mutation UpdateTaskStatus($taskId: ID!, $status: TaskStatus!, $source: String) {
      updateTaskStatus(taskId: $taskId, status: $status, source: $source) {
         id
         type
         status
         timestamp
         source
         taskIds
         metadata
         retryCount
         error {
            code
            message
            details
            operationId
         }
         completedAt
      }
   }
`;
export type UpdateTaskStatusMutationFn = ApolloReactCommon.MutationFunction<
   UpdateTaskStatusMutationResult,
   UpdateTaskStatusMutationVariables
>;

/**
 * __useUpdateTaskStatusMutation__
 *
 * To run a mutation, you first call `useUpdateTaskStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskStatusMutation, { data, loading, error }] = useUpdateTaskStatusMutation({
 *   variables: {
 *      taskId: // value for 'taskId'
 *      status: // value for 'status'
 *      source: // value for 'source'
 *   },
 * });
 */
export function useUpdateTaskStatusMutation(
   baseOptions?: ApolloReactHooks.MutationHookOptions<
      UpdateTaskStatusMutationResult,
      UpdateTaskStatusMutationVariables
   >
) {
   const options = { ...defaultOptions, ...baseOptions };
   return ApolloReactHooks.useMutation<
      UpdateTaskStatusMutationResult,
      UpdateTaskStatusMutationVariables
   >(UpdateTaskStatusDocument, options);
}
export type UpdateTaskStatusMutationHookResult = ReturnType<typeof useUpdateTaskStatusMutation>;
export type UpdateTaskStatusMutationResult =
   ApolloReactCommon.MutationResult<UpdateTaskStatusMutationResult>;
export type UpdateTaskStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<
   UpdateTaskStatusMutationResult,
   UpdateTaskStatusMutationVariables
>;
