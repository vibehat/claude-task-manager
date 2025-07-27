import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { Task, Subtask, TasksData } from '../taskmaster';
import type { CLIExecuteResponse } from '../types';
import type { GraphQLContext } from '../graphql/context';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
   [_ in K]?: never;
};
export type Incremental<T> =
   | T
   | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
export type CliCommandOrderField = 'COMMAND' | 'DURATION' | 'EXIT_CODE' | 'STATUS' | 'TIMESTAMP';

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
export type CliCommandStatus =
   /** Command was cancelled */
   | 'CANCELLED'
   /** Command completed successfully */
   | 'COMPLETED'
   /** Command failed with error */
   | 'FAILED'
   /** Command is queued for execution */
   | 'QUEUED'
   /** Command is currently running */
   | 'RUNNING'
   /** Command execution timed out */
   | 'TIMEOUT';

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
export type ConflictResolution =
   /** Use the CLI version */
   | 'CLI_WINS'
   /** Use the most recent version */
   | 'LAST_WRITE_WINS'
   /** Attempt to merge both versions */
   | 'MERGE'
   /** Use the UI version */
   | 'UI_WINS'
   /** Require manual user resolution */
   | 'USER_RESOLVE';

/** Input for creating issues */
export interface CreateIssueInput {
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
   labelIds?: InputMaybe<Scalars['ID']['input'][]>;
   /** Priority of the issue */
   priority?: InputMaybe<Scalars['String']['input']>;
   /** Project ID */
   projectId?: InputMaybe<Scalars['ID']['input']>;
   /** Rank for ordering */
   rank: Scalars['String']['input'];
   /** Status of the issue */
   status?: InputMaybe<Scalars['String']['input']>;
   /** Sub-issue IDs */
   subissues?: InputMaybe<Scalars['String']['input'][]>;
   /** Associated subtask ID */
   subtaskId?: InputMaybe<Scalars['String']['input']>;
   /** Associated task ID */
   taskId?: InputMaybe<Scalars['Int']['input']>;
   /** Title of the issue */
   title: Scalars['String']['input'];
}

/** Input for creating labels */
export interface CreateLabelInput {
   /** Color associated with the label */
   color: Scalars['String']['input'];
   /** Description of the label */
   description?: InputMaybe<Scalars['String']['input']>;
   /** Display name of the label */
   name: Scalars['String']['input'];
}

/** Input for creating projects */
export interface CreateProjectInput {
   /** Color associated with the project */
   color?: InputMaybe<Scalars['String']['input']>;
   /** Description of the project */
   description?: InputMaybe<Scalars['String']['input']>;
   /** Short identifier for the project */
   identifier?: InputMaybe<Scalars['String']['input']>;
   /** Display name of the project */
   name: Scalars['String']['input'];
}

export interface CreateTaskInput {
   dependencies?: InputMaybe<Scalars['ID']['input'][]>;
   description: Scalars['String']['input'];
   details?: InputMaybe<Scalars['String']['input']>;
   priority?: InputMaybe<TaskPriority>;
   testStrategy?: InputMaybe<Scalars['String']['input']>;
   title: Scalars['String']['input'];
}

/** Input for creating users */
export interface CreateUserInput {
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
   teamIds?: InputMaybe<Scalars['String']['input'][]>;
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

/** Issue information - wraps tasks with additional board metadata */
export interface Issue {
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
   labels: Label[];
   /** Priority level of the issue */
   priority: Scalars['String']['output'];
   /** Project this issue belongs to */
   project?: Maybe<Project>;
   /** Rank for ordering (LexoRank) */
   rank: Scalars['String']['output'];
   /** Current status of the issue */
   status: Scalars['String']['output'];
   /** Sub-issue IDs (for parent-child relationships) */
   subissues: Scalars['String']['output'][];
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
}

/** Issue connection for paginated issue queries */
export interface IssueConnection {
   __typename?: 'IssueConnection';
   /** List of issue edges */
   edges: IssueEdge[];
   /** List of issues (convenience field) */
   nodes: Issue[];
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
}

/** Issue edge with cursor */
export interface IssueEdge {
   __typename?: 'IssueEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The issue node */
   node: Issue;
}

/** Issue filtering options */
export interface IssueFilterInput {
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
   labelIds?: InputMaybe<Scalars['ID']['input'][]>;
   /** Filter by issue priority */
   priority?: InputMaybe<Scalars['String']['input'][]>;
   /** Filter by project */
   projectId?: InputMaybe<Scalars['ID']['input']>;
   /** Search in title and description */
   search?: InputMaybe<Scalars['String']['input']>;
   /** Filter by issue status */
   status?: InputMaybe<Scalars['String']['input'][]>;
   /** Filter by associated subtask ID */
   subtaskId?: InputMaybe<Scalars['String']['input']>;
   /** Filter by associated task ID */
   taskId?: InputMaybe<Scalars['Int']['input']>;
   /** Filter by last update date range */
   updatedAt?: InputMaybe<DateRangeInput>;
}

/** Issue ordering options */
export interface IssueOrderByInput {
   /** Sort direction */
   direction: OrderDirection;
   /** Field to order by */
   field: IssueOrderField;
}

/** Issue order fields */
export type IssueOrderField =
   | 'CREATED_AT'
   | 'DUE_DATE'
   | 'ID'
   | 'IDENTIFIER'
   | 'PRIORITY'
   | 'RANK'
   | 'STATUS'
   | 'TITLE'
   | 'UPDATED_AT';

/** Issue type enumeration */
export type IssueType =
   /** Issue represents a subtask */
   | 'SUBTASK'
   /** Issue represents a main task */
   | 'TASK';

/** Label information for categorizing issues */
export interface Label {
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
   issues: Issue[];
   /** Display name of the label */
   name: Scalars['String']['output'];
   /** Timestamp when the label was last updated */
   updatedAt: Scalars['DateTime']['output'];
}

/** Label connection for paginated label queries */
export interface LabelConnection {
   __typename?: 'LabelConnection';
   /** List of label edges */
   edges: LabelEdge[];
   /** List of labels (convenience field) */
   nodes: Label[];
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
}

/** Label edge with cursor */
export interface LabelEdge {
   __typename?: 'LabelEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The label node */
   node: Label;
}

/** Label filtering options */
export interface LabelFilterInput {
   /** Filter by color */
   color?: InputMaybe<Scalars['String']['input']>;
   /** Search in name and description */
   search?: InputMaybe<Scalars['String']['input']>;
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
}

export interface MutationAssignIssueArgs {
   assigneeId: Scalars['ID']['input'];
   issueId: Scalars['ID']['input'];
}

export interface MutationCreateBatchOperationArgs {
   operations: BatchOperationInput[];
   options?: InputMaybe<BatchOptionsInput>;
}

export interface MutationCreateIssueArgs {
   input: CreateIssueInput;
}

export interface MutationCreateLabelArgs {
   input: CreateLabelInput;
}

export interface MutationCreateProjectArgs {
   input: CreateProjectInput;
}

export interface MutationCreateTaskArgs {
   input: CreateTaskInput;
}

export interface MutationCreateUserArgs {
   input: CreateUserInput;
}

export interface MutationDeleteIssueArgs {
   id: Scalars['ID']['input'];
}

export interface MutationDeleteLabelArgs {
   id: Scalars['ID']['input'];
}

export interface MutationDeleteProjectArgs {
   id: Scalars['ID']['input'];
}

export interface MutationDeleteTaskArgs {
   id: Scalars['ID']['input'];
}

export interface MutationDeleteUserArgs {
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

export interface MutationUpdateIssueArgs {
   id: Scalars['ID']['input'];
   input: UpdateIssueInput;
}

export interface MutationUpdateIssueStatusArgs {
   issueId: Scalars['ID']['input'];
   status: Scalars['String']['input'];
}

export interface MutationUpdateLabelArgs {
   id: Scalars['ID']['input'];
   input: UpdateLabelInput;
}

export interface MutationUpdateProjectArgs {
   id: Scalars['ID']['input'];
   input: UpdateProjectInput;
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

export interface MutationUpdateUserArgs {
   id: Scalars['ID']['input'];
   input: UpdateUserInput;
}

/** Sort direction */
export type OrderDirection = 'ASC' | 'DESC';

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

/** Project information for organizing issues */
export interface Project {
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
   issues: Issue[];
   /** Display name of the project */
   name: Scalars['String']['output'];
   /** Timestamp when the project was last updated */
   updatedAt: Scalars['DateTime']['output'];
}

/** Project connection for paginated project queries */
export interface ProjectConnection {
   __typename?: 'ProjectConnection';
   /** List of project edges */
   edges: ProjectEdge[];
   /** List of projects (convenience field) */
   nodes: Project[];
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
}

/** Project edge with cursor */
export interface ProjectEdge {
   __typename?: 'ProjectEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The project node */
   node: Project;
}

/** Project filtering options */
export interface ProjectFilterInput {
   /** Filter by identifier */
   identifier?: InputMaybe<Scalars['String']['input']>;
   /** Search in name and description */
   search?: InputMaybe<Scalars['String']['input']>;
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
}

export interface QueryCliCommandArgs {
   id: Scalars['ID']['input'];
}

export interface QueryCliHistoryArgs {
   filter?: InputMaybe<CliCommandFilterInput>;
   orderBy?: InputMaybe<CliCommandOrderByInput[]>;
   pagination?: InputMaybe<PaginationInput>;
}

export interface QueryIssueArgs {
   id: Scalars['ID']['input'];
}

export interface QueryIssuesArgs {
   filter?: InputMaybe<IssueFilterInput>;
   orderBy?: InputMaybe<IssueOrderByInput[]>;
   pagination?: InputMaybe<PaginationInput>;
}

export interface QueryIssuesByAssigneeArgs {
   assigneeId: Scalars['ID']['input'];
   filter?: InputMaybe<IssueFilterInput>;
   orderBy?: InputMaybe<IssueOrderByInput[]>;
   pagination?: InputMaybe<PaginationInput>;
}

export interface QueryIssuesByProjectArgs {
   filter?: InputMaybe<IssueFilterInput>;
   orderBy?: InputMaybe<IssueOrderByInput[]>;
   pagination?: InputMaybe<PaginationInput>;
   projectId: Scalars['ID']['input'];
}

export interface QueryLabelArgs {
   id: Scalars['ID']['input'];
}

export interface QueryLabelsArgs {
   filter?: InputMaybe<LabelFilterInput>;
   pagination?: InputMaybe<PaginationInput>;
}

export interface QueryProjectArgs {
   id: Scalars['ID']['input'];
}

export interface QueryProjectsArgs {
   filter?: InputMaybe<ProjectFilterInput>;
   pagination?: InputMaybe<PaginationInput>;
}

export interface QueryReadyTasksArgs {
   filter?: InputMaybe<TaskFilterInput>;
   orderBy?: InputMaybe<TaskOrderByInput[]>;
   pagination?: InputMaybe<PaginationInput>;
}

export interface QuerySearchIssuesArgs {
   filter?: InputMaybe<IssueFilterInput>;
   orderBy?: InputMaybe<IssueOrderByInput[]>;
   pagination?: InputMaybe<PaginationInput>;
   query: Scalars['String']['input'];
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

export interface QueryUserArgs {
   id: Scalars['ID']['input'];
}

export interface QueryUsersArgs {
   filter?: InputMaybe<UserFilterInput>;
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
export type SyncOperationOrderField =
   | 'COMPLETED_AT'
   | 'RETRY_COUNT'
   | 'SOURCE'
   | 'STATUS'
   | 'TIMESTAMP'
   | 'TYPE';

/** Sync operation status */
export type SyncOperationStatus =
   /** Operation was cancelled */
   | 'CANCELLED'
   /** Operation completed successfully */
   | 'COMPLETED'
   /** Operation is currently executing */
   | 'EXECUTING'
   /** Operation failed with error */
   | 'FAILED'
   /** Operation is pending execution */
   | 'PENDING';

/** Types of synchronization operations */
export type SyncOperationType =
   /** Batch update multiple items */
   | 'BATCH_UPDATE'
   /** File system synchronization */
   | 'FILE_SYNC'
   /** Full system synchronization */
   | 'FULL_SYNC'
   /** Update task status specifically */
   | 'STATUS_CHANGE'
   /** Create new tasks */
   | 'TASK_CREATE'
   /** Delete tasks */
   | 'TASK_DELETE'
   /** Sync task status changes */
   | 'TASK_UPDATE';

/** Sync system state */
export type SyncState =
   /** Error state */
   | 'ERROR'
   /** No active operations */
   | 'IDLE'
   /** Operations in progress */
   | 'SYNCING';

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
export type TaskOrderField =
   | 'COMPLEXITY'
   | 'CREATED_AT'
   | 'ID'
   | 'PRIORITY'
   | 'PROGRESS'
   | 'STATUS'
   | 'TITLE'
   | 'UPDATED_AT';

/** Task priority enumeration */
export type TaskPriority =
   /** High priority - should be worked on first */
   | 'HIGH'
   /** Low priority - can be worked on when time permits */
   | 'LOW'
   /** Medium priority - standard priority level */
   | 'MEDIUM';

/** Task status enumeration */
export type TaskStatus =
   /** Task is blocked by dependencies or external factors */
   | 'BLOCKED'
   /** Task has been cancelled and will not be completed */
   | 'CANCELLED'
   /** Task has been postponed to a later time */
   | 'DEFERRED'
   /** Task has been completed */
   | 'DONE'
   /** Task is currently being worked on */
   | 'IN_PROGRESS'
   /** Task is ready to be worked on */
   | 'PENDING';

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

/** Input for updating issues */
export interface UpdateIssueInput {
   /** Assignee ID */
   assigneeId?: InputMaybe<Scalars['ID']['input']>;
   /** Sprint/cycle identifier */
   cycleId?: InputMaybe<Scalars['String']['input']>;
   /** Description of the issue */
   description?: InputMaybe<Scalars['String']['input']>;
   /** Due date for the issue */
   dueDate?: InputMaybe<Scalars['DateTime']['input']>;
   /** Label IDs to assign */
   labelIds?: InputMaybe<Scalars['ID']['input'][]>;
   /** Priority of the issue */
   priority?: InputMaybe<Scalars['String']['input']>;
   /** Project ID */
   projectId?: InputMaybe<Scalars['ID']['input']>;
   /** Rank for ordering */
   rank?: InputMaybe<Scalars['String']['input']>;
   /** Status of the issue */
   status?: InputMaybe<Scalars['String']['input']>;
   /** Sub-issue IDs */
   subissues?: InputMaybe<Scalars['String']['input'][]>;
   /** Title of the issue */
   title?: InputMaybe<Scalars['String']['input']>;
}

/** Input for updating labels */
export interface UpdateLabelInput {
   /** Color associated with the label */
   color?: InputMaybe<Scalars['String']['input']>;
   /** Description of the label */
   description?: InputMaybe<Scalars['String']['input']>;
   /** Display name of the label */
   name?: InputMaybe<Scalars['String']['input']>;
}

/** Input for updating projects */
export interface UpdateProjectInput {
   /** Color associated with the project */
   color?: InputMaybe<Scalars['String']['input']>;
   /** Description of the project */
   description?: InputMaybe<Scalars['String']['input']>;
   /** Short identifier for the project */
   identifier?: InputMaybe<Scalars['String']['input']>;
   /** Display name of the project */
   name?: InputMaybe<Scalars['String']['input']>;
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

/** Input for updating users */
export interface UpdateUserInput {
   /** Avatar URL for the user */
   avatarUrl?: InputMaybe<Scalars['String']['input']>;
   /** Display name of the user */
   name?: InputMaybe<Scalars['String']['input']>;
   /** Role of the user */
   role?: InputMaybe<UserRole>;
   /** Status of the user */
   status?: InputMaybe<UserStatus>;
   /** Team IDs the user belongs to */
   teamIds?: InputMaybe<Scalars['String']['input'][]>;
}

/** User information for issue assignment and management */
export interface User {
   __typename?: 'User';
   /** Issues assigned to this user */
   assignedIssues: Issue[];
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
   teamIds: Scalars['String']['output'][];
   /** Timestamp when the user was last updated */
   updatedAt: Scalars['DateTime']['output'];
}

/** User connection for paginated user queries */
export interface UserConnection {
   __typename?: 'UserConnection';
   /** List of user edges */
   edges: UserEdge[];
   /** List of users (convenience field) */
   nodes: User[];
   /** Pagination information */
   pageInfo: PageInfo;
   /** Total count of items (if available) */
   totalCount?: Maybe<Scalars['Int']['output']>;
}

/** User edge with cursor */
export interface UserEdge {
   __typename?: 'UserEdge';
   /** Cursor for this edge */
   cursor: Scalars['String']['output'];
   /** The user node */
   node: User;
}

/** User filtering options */
export interface UserFilterInput {
   /** Filter by user role */
   role?: InputMaybe<UserRole[]>;
   /** Search in name and email */
   search?: InputMaybe<Scalars['String']['input']>;
   /** Filter by user status */
   status?: InputMaybe<UserStatus[]>;
   /** Filter by team IDs */
   teamIds?: InputMaybe<Scalars['String']['input'][]>;
}

/** User role enumeration */
export type UserRole =
   /** Administrator with full access */
   | 'ADMIN'
   /** Guest with limited access */
   | 'GUEST'
   /** Regular member */
   | 'MEMBER';

/** User status enumeration */
export type UserStatus =
   /** User is away */
   | 'AWAY'
   /** User is offline */
   | 'OFFLINE'
   /** User is online */
   | 'ONLINE';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export interface ResolverWithResolve<TResult, TParent, TContext, TArgs> {
   resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
   | ResolverFn<TResult, TParent, TContext, TArgs>
   | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
   parent: TParent,
   args: TArgs,
   context: TContext,
   info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
   parent: TParent,
   args: TArgs,
   context: TContext,
   info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
   parent: TParent,
   args: TArgs,
   context: TContext,
   info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
   TResult,
   TKey extends string,
   TParent,
   TContext,
   TArgs,
> {
   subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
   resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
   subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
   resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
   | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
   | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
   TResult,
   TKey extends string,
   TParent = {},
   TContext = {},
   TArgs = {},
> =
   | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
   | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
   parent: TParent,
   context: TContext,
   info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
   obj: T,
   context: TContext,
   info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
   next: NextResolverFn<TResult>,
   parent: TParent,
   args: TArgs,
   context: TContext,
   info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
   Stateful: never;
   Timestamped: never;
}>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
   BatchOperationInput: ResolverTypeWrapper<Partial<BatchOperationInput>>;
   BatchOptionsInput: ResolverTypeWrapper<Partial<BatchOptionsInput>>;
   BatchResult: ResolverTypeWrapper<Partial<BatchResult>>;
   Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']['output']>>;
   CLICommandConnection: ResolverTypeWrapper<
      Partial<
         Omit<CliCommandConnection, 'edges' | 'nodes'> & {
            edges: ResolversTypes['CLICommandEdge'][];
            nodes: ResolversTypes['CLICommandResult'][];
         }
      >
   >;
   CLICommandEdge: ResolverTypeWrapper<
      Partial<Omit<CliCommandEdge, 'node'> & { node: ResolversTypes['CLICommandResult'] }>
   >;
   CLICommandFilterInput: ResolverTypeWrapper<Partial<CliCommandFilterInput>>;
   CLICommandInput: ResolverTypeWrapper<Partial<CliCommandInput>>;
   CLICommandOrderByInput: ResolverTypeWrapper<Partial<CliCommandOrderByInput>>;
   CLICommandOrderField: ResolverTypeWrapper<Partial<CliCommandOrderField>>;
   CLICommandResult: ResolverTypeWrapper<CLIExecuteResponse>;
   CLICommandStatus: ResolverTypeWrapper<Partial<CliCommandStatus>>;
   CLIError: ResolverTypeWrapper<Partial<CliError>>;
   CLIStatus: ResolverTypeWrapper<
      Partial<
         Omit<CliStatus, 'recentCommands'> & {
            recentCommands: ResolversTypes['CLICommandResult'][];
         }
      >
   >;
   ConflictResolution: ResolverTypeWrapper<Partial<ConflictResolution>>;
   CreateIssueInput: ResolverTypeWrapper<Partial<CreateIssueInput>>;
   CreateLabelInput: ResolverTypeWrapper<Partial<CreateLabelInput>>;
   CreateProjectInput: ResolverTypeWrapper<Partial<CreateProjectInput>>;
   CreateTaskInput: ResolverTypeWrapper<Partial<CreateTaskInput>>;
   CreateUserInput: ResolverTypeWrapper<Partial<CreateUserInput>>;
   DateRangeInput: ResolverTypeWrapper<Partial<DateRangeInput>>;
   DateTime: ResolverTypeWrapper<Partial<Scalars['DateTime']['output']>>;
   Float: ResolverTypeWrapper<Partial<Scalars['Float']['output']>>;
   ID: ResolverTypeWrapper<Partial<Scalars['ID']['output']>>;
   Int: ResolverTypeWrapper<Partial<Scalars['Int']['output']>>;
   IntRangeInput: ResolverTypeWrapper<Partial<IntRangeInput>>;
   Issue: ResolverTypeWrapper<
      Partial<
         Omit<Issue, 'assignee' | 'labels' | 'project' | 'task'> & {
            assignee?: Maybe<ResolversTypes['User']>;
            labels: ResolversTypes['Label'][];
            project?: Maybe<ResolversTypes['Project']>;
            task?: Maybe<ResolversTypes['Task']>;
         }
      >
   >;
   IssueConnection: ResolverTypeWrapper<
      Partial<
         Omit<IssueConnection, 'edges' | 'nodes'> & {
            edges: ResolversTypes['IssueEdge'][];
            nodes: ResolversTypes['Issue'][];
         }
      >
   >;
   IssueEdge: ResolverTypeWrapper<
      Partial<Omit<IssueEdge, 'node'> & { node: ResolversTypes['Issue'] }>
   >;
   IssueFilterInput: ResolverTypeWrapper<Partial<IssueFilterInput>>;
   IssueOrderByInput: ResolverTypeWrapper<Partial<IssueOrderByInput>>;
   IssueOrderField: ResolverTypeWrapper<Partial<IssueOrderField>>;
   IssueType: ResolverTypeWrapper<Partial<IssueType>>;
   JSON: ResolverTypeWrapper<Partial<Scalars['JSON']['output']>>;
   Label: ResolverTypeWrapper<
      Partial<Omit<Label, 'issues'> & { issues: ResolversTypes['Issue'][] }>
   >;
   LabelConnection: ResolverTypeWrapper<
      Partial<
         Omit<LabelConnection, 'edges' | 'nodes'> & {
            edges: ResolversTypes['LabelEdge'][];
            nodes: ResolversTypes['Label'][];
         }
      >
   >;
   LabelEdge: ResolverTypeWrapper<
      Partial<Omit<LabelEdge, 'node'> & { node: ResolversTypes['Label'] }>
   >;
   LabelFilterInput: ResolverTypeWrapper<Partial<LabelFilterInput>>;
   MemoryUsage: ResolverTypeWrapper<Partial<MemoryUsage>>;
   Mutation: ResolverTypeWrapper<{}>;
   OrderDirection: ResolverTypeWrapper<Partial<OrderDirection>>;
   PageInfo: ResolverTypeWrapper<Partial<PageInfo>>;
   PaginationInput: ResolverTypeWrapper<Partial<PaginationInput>>;
   Project: ResolverTypeWrapper<
      Partial<Omit<Project, 'issues'> & { issues: ResolversTypes['Issue'][] }>
   >;
   ProjectConnection: ResolverTypeWrapper<
      Partial<
         Omit<ProjectConnection, 'edges' | 'nodes'> & {
            edges: ResolversTypes['ProjectEdge'][];
            nodes: ResolversTypes['Project'][];
         }
      >
   >;
   ProjectEdge: ResolverTypeWrapper<
      Partial<Omit<ProjectEdge, 'node'> & { node: ResolversTypes['Project'] }>
   >;
   ProjectFilterInput: ResolverTypeWrapper<Partial<ProjectFilterInput>>;
   Query: ResolverTypeWrapper<{}>;
   Stateful: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Stateful']>;
   String: ResolverTypeWrapper<Partial<Scalars['String']['output']>>;
   Subtask: ResolverTypeWrapper<Subtask>;
   SyncConflict: ResolverTypeWrapper<Partial<SyncConflict>>;
   SyncConflictConnection: ResolverTypeWrapper<Partial<SyncConflictConnection>>;
   SyncConflictEdge: ResolverTypeWrapper<Partial<SyncConflictEdge>>;
   SyncConflictFilterInput: ResolverTypeWrapper<Partial<SyncConflictFilterInput>>;
   SyncError: ResolverTypeWrapper<Partial<SyncError>>;
   SyncHealth: ResolverTypeWrapper<Partial<SyncHealth>>;
   SyncOperation: ResolverTypeWrapper<Partial<SyncOperation>>;
   SyncOperationConnection: ResolverTypeWrapper<Partial<SyncOperationConnection>>;
   SyncOperationEdge: ResolverTypeWrapper<Partial<SyncOperationEdge>>;
   SyncOperationFilterInput: ResolverTypeWrapper<Partial<SyncOperationFilterInput>>;
   SyncOperationOrderByInput: ResolverTypeWrapper<Partial<SyncOperationOrderByInput>>;
   SyncOperationOrderField: ResolverTypeWrapper<Partial<SyncOperationOrderField>>;
   SyncOperationStatus: ResolverTypeWrapper<Partial<SyncOperationStatus>>;
   SyncOperationType: ResolverTypeWrapper<Partial<SyncOperationType>>;
   SyncState: ResolverTypeWrapper<Partial<SyncState>>;
   SyncStatus: ResolverTypeWrapper<Partial<SyncStatus>>;
   SystemInfo: ResolverTypeWrapper<Partial<SystemInfo>>;
   Task: ResolverTypeWrapper<Task>;
   TaskCollection: ResolverTypeWrapper<
      Partial<Omit<TaskCollection, 'tasks'> & { tasks: ResolversTypes['Task'][] }>
   >;
   TaskConnection: ResolverTypeWrapper<
      Partial<
         Omit<TaskConnection, 'edges' | 'nodes'> & {
            edges: ResolversTypes['TaskEdge'][];
            nodes: ResolversTypes['Task'][];
         }
      >
   >;
   TaskEdge: ResolverTypeWrapper<
      Partial<Omit<TaskEdge, 'node'> & { node: ResolversTypes['Task'] }>
   >;
   TaskFilterInput: ResolverTypeWrapper<Partial<TaskFilterInput>>;
   TaskMetadata: ResolverTypeWrapper<Partial<TaskMetadata>>;
   TaskOrderByInput: ResolverTypeWrapper<Partial<TaskOrderByInput>>;
   TaskOrderField: ResolverTypeWrapper<Partial<TaskOrderField>>;
   TaskPriority: ResolverTypeWrapper<Partial<TaskPriority>>;
   TaskStatus: ResolverTypeWrapper<Partial<TaskStatus>>;
   TasksData: ResolverTypeWrapper<TasksData>;
   Timestamped: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Timestamped']>;
   UpdateIssueInput: ResolverTypeWrapper<Partial<UpdateIssueInput>>;
   UpdateLabelInput: ResolverTypeWrapper<Partial<UpdateLabelInput>>;
   UpdateProjectInput: ResolverTypeWrapper<Partial<UpdateProjectInput>>;
   UpdateTaskInput: ResolverTypeWrapper<Partial<UpdateTaskInput>>;
   UpdateUserInput: ResolverTypeWrapper<Partial<UpdateUserInput>>;
   User: ResolverTypeWrapper<
      Partial<Omit<User, 'assignedIssues'> & { assignedIssues: ResolversTypes['Issue'][] }>
   >;
   UserConnection: ResolverTypeWrapper<
      Partial<
         Omit<UserConnection, 'edges' | 'nodes'> & {
            edges: ResolversTypes['UserEdge'][];
            nodes: ResolversTypes['User'][];
         }
      >
   >;
   UserEdge: ResolverTypeWrapper<
      Partial<Omit<UserEdge, 'node'> & { node: ResolversTypes['User'] }>
   >;
   UserFilterInput: ResolverTypeWrapper<Partial<UserFilterInput>>;
   UserRole: ResolverTypeWrapper<Partial<UserRole>>;
   UserStatus: ResolverTypeWrapper<Partial<UserStatus>>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
   BatchOperationInput: Partial<BatchOperationInput>;
   BatchOptionsInput: Partial<BatchOptionsInput>;
   BatchResult: Partial<BatchResult>;
   Boolean: Partial<Scalars['Boolean']['output']>;
   CLICommandConnection: Partial<
      Omit<CliCommandConnection, 'edges' | 'nodes'> & {
         edges: ResolversParentTypes['CLICommandEdge'][];
         nodes: ResolversParentTypes['CLICommandResult'][];
      }
   >;
   CLICommandEdge: Partial<
      Omit<CliCommandEdge, 'node'> & { node: ResolversParentTypes['CLICommandResult'] }
   >;
   CLICommandFilterInput: Partial<CliCommandFilterInput>;
   CLICommandInput: Partial<CliCommandInput>;
   CLICommandOrderByInput: Partial<CliCommandOrderByInput>;
   CLICommandResult: CLIExecuteResponse;
   CLIError: Partial<CliError>;
   CLIStatus: Partial<
      Omit<CliStatus, 'recentCommands'> & {
         recentCommands: ResolversParentTypes['CLICommandResult'][];
      }
   >;
   CreateIssueInput: Partial<CreateIssueInput>;
   CreateLabelInput: Partial<CreateLabelInput>;
   CreateProjectInput: Partial<CreateProjectInput>;
   CreateTaskInput: Partial<CreateTaskInput>;
   CreateUserInput: Partial<CreateUserInput>;
   DateRangeInput: Partial<DateRangeInput>;
   DateTime: Partial<Scalars['DateTime']['output']>;
   Float: Partial<Scalars['Float']['output']>;
   ID: Partial<Scalars['ID']['output']>;
   Int: Partial<Scalars['Int']['output']>;
   IntRangeInput: Partial<IntRangeInput>;
   Issue: Partial<
      Omit<Issue, 'assignee' | 'labels' | 'project' | 'task'> & {
         assignee?: Maybe<ResolversParentTypes['User']>;
         labels: ResolversParentTypes['Label'][];
         project?: Maybe<ResolversParentTypes['Project']>;
         task?: Maybe<ResolversParentTypes['Task']>;
      }
   >;
   IssueConnection: Partial<
      Omit<IssueConnection, 'edges' | 'nodes'> & {
         edges: ResolversParentTypes['IssueEdge'][];
         nodes: ResolversParentTypes['Issue'][];
      }
   >;
   IssueEdge: Partial<Omit<IssueEdge, 'node'> & { node: ResolversParentTypes['Issue'] }>;
   IssueFilterInput: Partial<IssueFilterInput>;
   IssueOrderByInput: Partial<IssueOrderByInput>;
   JSON: Partial<Scalars['JSON']['output']>;
   Label: Partial<Omit<Label, 'issues'> & { issues: ResolversParentTypes['Issue'][] }>;
   LabelConnection: Partial<
      Omit<LabelConnection, 'edges' | 'nodes'> & {
         edges: ResolversParentTypes['LabelEdge'][];
         nodes: ResolversParentTypes['Label'][];
      }
   >;
   LabelEdge: Partial<Omit<LabelEdge, 'node'> & { node: ResolversParentTypes['Label'] }>;
   LabelFilterInput: Partial<LabelFilterInput>;
   MemoryUsage: Partial<MemoryUsage>;
   Mutation: {};
   PageInfo: Partial<PageInfo>;
   PaginationInput: Partial<PaginationInput>;
   Project: Partial<Omit<Project, 'issues'> & { issues: ResolversParentTypes['Issue'][] }>;
   ProjectConnection: Partial<
      Omit<ProjectConnection, 'edges' | 'nodes'> & {
         edges: ResolversParentTypes['ProjectEdge'][];
         nodes: ResolversParentTypes['Project'][];
      }
   >;
   ProjectEdge: Partial<Omit<ProjectEdge, 'node'> & { node: ResolversParentTypes['Project'] }>;
   ProjectFilterInput: Partial<ProjectFilterInput>;
   Query: {};
   Stateful: ResolversInterfaceTypes<ResolversParentTypes>['Stateful'];
   String: Partial<Scalars['String']['output']>;
   Subtask: Subtask;
   SyncConflict: Partial<SyncConflict>;
   SyncConflictConnection: Partial<SyncConflictConnection>;
   SyncConflictEdge: Partial<SyncConflictEdge>;
   SyncConflictFilterInput: Partial<SyncConflictFilterInput>;
   SyncError: Partial<SyncError>;
   SyncHealth: Partial<SyncHealth>;
   SyncOperation: Partial<SyncOperation>;
   SyncOperationConnection: Partial<SyncOperationConnection>;
   SyncOperationEdge: Partial<SyncOperationEdge>;
   SyncOperationFilterInput: Partial<SyncOperationFilterInput>;
   SyncOperationOrderByInput: Partial<SyncOperationOrderByInput>;
   SyncStatus: Partial<SyncStatus>;
   SystemInfo: Partial<SystemInfo>;
   Task: Task;
   TaskCollection: Partial<
      Omit<TaskCollection, 'tasks'> & { tasks: ResolversParentTypes['Task'][] }
   >;
   TaskConnection: Partial<
      Omit<TaskConnection, 'edges' | 'nodes'> & {
         edges: ResolversParentTypes['TaskEdge'][];
         nodes: ResolversParentTypes['Task'][];
      }
   >;
   TaskEdge: Partial<Omit<TaskEdge, 'node'> & { node: ResolversParentTypes['Task'] }>;
   TaskFilterInput: Partial<TaskFilterInput>;
   TaskMetadata: Partial<TaskMetadata>;
   TaskOrderByInput: Partial<TaskOrderByInput>;
   TasksData: TasksData;
   Timestamped: ResolversInterfaceTypes<ResolversParentTypes>['Timestamped'];
   UpdateIssueInput: Partial<UpdateIssueInput>;
   UpdateLabelInput: Partial<UpdateLabelInput>;
   UpdateProjectInput: Partial<UpdateProjectInput>;
   UpdateTaskInput: Partial<UpdateTaskInput>;
   UpdateUserInput: Partial<UpdateUserInput>;
   User: Partial<
      Omit<User, 'assignedIssues'> & { assignedIssues: ResolversParentTypes['Issue'][] }
   >;
   UserConnection: Partial<
      Omit<UserConnection, 'edges' | 'nodes'> & {
         edges: ResolversParentTypes['UserEdge'][];
         nodes: ResolversParentTypes['User'][];
      }
   >;
   UserEdge: Partial<Omit<UserEdge, 'node'> & { node: ResolversParentTypes['User'] }>;
   UserFilterInput: Partial<UserFilterInput>;
}>;

export type BatchResultResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['BatchResult'] = ResolversParentTypes['BatchResult'],
> = ResolversObject<{
   batchId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
   operationsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   options?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
   timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CliCommandConnectionResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CLICommandConnection'] = ResolversParentTypes['CLICommandConnection'],
> = ResolversObject<{
   edges?: Resolver<ResolversTypes['CLICommandEdge'][], ParentType, ContextType>;
   nodes?: Resolver<ResolversTypes['CLICommandResult'][], ParentType, ContextType>;
   pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
   totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CliCommandEdgeResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CLICommandEdge'] = ResolversParentTypes['CLICommandEdge'],
> = ResolversObject<{
   cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   node?: Resolver<ResolversTypes['CLICommandResult'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CliCommandResultResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CLICommandResult'] = ResolversParentTypes['CLICommandResult'],
> = ResolversObject<{
   args?: Resolver<ResolversTypes['String'][], ParentType, ContextType>;
   command?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   error?: Resolver<Maybe<ResolversTypes['CLIError']>, ParentType, ContextType>;
   exitCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
   parsedOutput?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
   status?: Resolver<ResolversTypes['CLICommandStatus'], ParentType, ContextType>;
   stderr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   stdout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   taskId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
   timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CliErrorResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['CLIError'] = ResolversParentTypes['CLIError'],
> = ResolversObject<{
   code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
   message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   stack?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CliStatusResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['CLIStatus'] = ResolversParentTypes['CLIStatus'],
> = ResolversObject<{
   activeProcesses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   recentCommands?: Resolver<ResolversTypes['CLICommandResult'][], ParentType, ContextType>;
   systemInfo?: Resolver<ResolversTypes['SystemInfo'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig
   extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
   name: 'DateTime';
}

export type IssueResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Issue'] = ResolversParentTypes['Issue'],
> = ResolversObject<{
   assignee?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   cycleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   dueDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
   identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issueType?: Resolver<ResolversTypes['IssueType'], ParentType, ContextType>;
   labels?: Resolver<ResolversTypes['Label'][], ParentType, ContextType>;
   priority?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
   rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   subissues?: Resolver<ResolversTypes['String'][], ParentType, ContextType>;
   subtaskId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType>;
   taskId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueConnectionResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueConnection'] = ResolversParentTypes['IssueConnection'],
> = ResolversObject<{
   edges?: Resolver<ResolversTypes['IssueEdge'][], ParentType, ContextType>;
   nodes?: Resolver<ResolversTypes['Issue'][], ParentType, ContextType>;
   pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
   totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueEdgeResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['IssueEdge'] = ResolversParentTypes['IssueEdge'],
> = ResolversObject<{
   cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   node?: Resolver<ResolversTypes['Issue'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
   name: 'JSON';
}

export type LabelResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Label'] = ResolversParentTypes['Label'],
> = ResolversObject<{
   color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
   issues?: Resolver<ResolversTypes['Issue'][], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LabelConnectionResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['LabelConnection'] = ResolversParentTypes['LabelConnection'],
> = ResolversObject<{
   edges?: Resolver<ResolversTypes['LabelEdge'][], ParentType, ContextType>;
   nodes?: Resolver<ResolversTypes['Label'][], ParentType, ContextType>;
   pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
   totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LabelEdgeResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['LabelEdge'] = ResolversParentTypes['LabelEdge'],
> = ResolversObject<{
   cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   node?: Resolver<ResolversTypes['Label'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemoryUsageResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['MemoryUsage'] = ResolversParentTypes['MemoryUsage'],
> = ResolversObject<{
   external?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
   heapTotal?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
   heapUsed?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
   rss?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
   assignIssue?: Resolver<
      ResolversTypes['Issue'],
      ParentType,
      ContextType,
      RequireFields<MutationAssignIssueArgs, 'assigneeId' | 'issueId'>
   >;
   clearCLIHistory?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
   createBatchOperation?: Resolver<
      ResolversTypes['BatchResult'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateBatchOperationArgs, 'operations'>
   >;
   createIssue?: Resolver<
      ResolversTypes['Issue'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateIssueArgs, 'input'>
   >;
   createLabel?: Resolver<
      ResolversTypes['Label'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateLabelArgs, 'input'>
   >;
   createProject?: Resolver<
      ResolversTypes['Project'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateProjectArgs, 'input'>
   >;
   createTask?: Resolver<
      Maybe<ResolversTypes['Task']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateTaskArgs, 'input'>
   >;
   createUser?: Resolver<
      ResolversTypes['User'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateUserArgs, 'input'>
   >;
   deleteIssue?: Resolver<
      ResolversTypes['Boolean'],
      ParentType,
      ContextType,
      RequireFields<MutationDeleteIssueArgs, 'id'>
   >;
   deleteLabel?: Resolver<
      ResolversTypes['Boolean'],
      ParentType,
      ContextType,
      RequireFields<MutationDeleteLabelArgs, 'id'>
   >;
   deleteProject?: Resolver<
      ResolversTypes['Boolean'],
      ParentType,
      ContextType,
      RequireFields<MutationDeleteProjectArgs, 'id'>
   >;
   deleteTask?: Resolver<
      ResolversTypes['Boolean'],
      ParentType,
      ContextType,
      RequireFields<MutationDeleteTaskArgs, 'id'>
   >;
   deleteUser?: Resolver<
      ResolversTypes['Boolean'],
      ParentType,
      ContextType,
      RequireFields<MutationDeleteUserArgs, 'id'>
   >;
   executeCLICommand?: Resolver<
      ResolversTypes['CLICommandResult'],
      ParentType,
      ContextType,
      RequireFields<MutationExecuteCliCommandArgs, 'input'>
   >;
   forceSync?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
   killCLIProcess?: Resolver<
      ResolversTypes['Boolean'],
      ParentType,
      ContextType,
      RequireFields<MutationKillCliProcessArgs, 'processId'>
   >;
   ping?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   resolveSyncConflict?: Resolver<
      ResolversTypes['Boolean'],
      ParentType,
      ContextType,
      RequireFields<MutationResolveSyncConflictArgs, 'conflictId' | 'resolution'>
   >;
   updateIssue?: Resolver<
      ResolversTypes['Issue'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateIssueArgs, 'id' | 'input'>
   >;
   updateIssueStatus?: Resolver<
      ResolversTypes['Issue'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateIssueStatusArgs, 'issueId' | 'status'>
   >;
   updateLabel?: Resolver<
      ResolversTypes['Label'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateLabelArgs, 'id' | 'input'>
   >;
   updateProject?: Resolver<
      ResolversTypes['Project'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateProjectArgs, 'id' | 'input'>
   >;
   updateTask?: Resolver<
      Maybe<ResolversTypes['Task']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateTaskArgs, 'id' | 'input'>
   >;
   updateTaskStatus?: Resolver<
      ResolversTypes['SyncOperation'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateTaskStatusArgs, 'source' | 'status' | 'taskId'>
   >;
   updateUser?: Resolver<
      ResolversTypes['User'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateUserArgs, 'id' | 'input'>
   >;
}>;

export type PageInfoResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo'],
> = ResolversObject<{
   endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
   hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
   startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project'],
> = ResolversObject<{
   color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
   identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   issues?: Resolver<ResolversTypes['Issue'][], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectConnectionResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['ProjectConnection'] = ResolversParentTypes['ProjectConnection'],
> = ResolversObject<{
   edges?: Resolver<ResolversTypes['ProjectEdge'][], ParentType, ContextType>;
   nodes?: Resolver<ResolversTypes['Project'][], ParentType, ContextType>;
   pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
   totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectEdgeResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['ProjectEdge'] = ResolversParentTypes['ProjectEdge'],
> = ResolversObject<{
   cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   node?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
   cliCommand?: Resolver<
      Maybe<ResolversTypes['CLICommandResult']>,
      ParentType,
      ContextType,
      RequireFields<QueryCliCommandArgs, 'id'>
   >;
   cliHistory?: Resolver<
      ResolversTypes['CLICommandConnection'],
      ParentType,
      ContextType,
      Partial<QueryCliHistoryArgs>
   >;
   cliStatus?: Resolver<ResolversTypes['CLIStatus'], ParentType, ContextType>;
   health?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issue?: Resolver<
      Maybe<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      RequireFields<QueryIssueArgs, 'id'>
   >;
   issues?: Resolver<
      ResolversTypes['IssueConnection'],
      ParentType,
      ContextType,
      Partial<QueryIssuesArgs>
   >;
   issuesByAssignee?: Resolver<
      ResolversTypes['IssueConnection'],
      ParentType,
      ContextType,
      RequireFields<QueryIssuesByAssigneeArgs, 'assigneeId'>
   >;
   issuesByProject?: Resolver<
      ResolversTypes['IssueConnection'],
      ParentType,
      ContextType,
      RequireFields<QueryIssuesByProjectArgs, 'projectId'>
   >;
   label?: Resolver<
      Maybe<ResolversTypes['Label']>,
      ParentType,
      ContextType,
      RequireFields<QueryLabelArgs, 'id'>
   >;
   labels?: Resolver<
      ResolversTypes['LabelConnection'],
      ParentType,
      ContextType,
      Partial<QueryLabelsArgs>
   >;
   project?: Resolver<
      Maybe<ResolversTypes['Project']>,
      ParentType,
      ContextType,
      RequireFields<QueryProjectArgs, 'id'>
   >;
   projects?: Resolver<
      ResolversTypes['ProjectConnection'],
      ParentType,
      ContextType,
      Partial<QueryProjectsArgs>
   >;
   readyTasks?: Resolver<
      ResolversTypes['TaskConnection'],
      ParentType,
      ContextType,
      Partial<QueryReadyTasksArgs>
   >;
   searchIssues?: Resolver<
      ResolversTypes['IssueConnection'],
      ParentType,
      ContextType,
      RequireFields<QuerySearchIssuesArgs, 'query'>
   >;
   searchTasks?: Resolver<
      ResolversTypes['TaskConnection'],
      ParentType,
      ContextType,
      RequireFields<QuerySearchTasksArgs, 'query'>
   >;
   syncConflicts?: Resolver<
      ResolversTypes['SyncConflictConnection'],
      ParentType,
      ContextType,
      Partial<QuerySyncConflictsArgs>
   >;
   syncHealth?: Resolver<ResolversTypes['SyncHealth'], ParentType, ContextType>;
   syncOperation?: Resolver<
      Maybe<ResolversTypes['SyncOperation']>,
      ParentType,
      ContextType,
      RequireFields<QuerySyncOperationArgs, 'id'>
   >;
   syncOperations?: Resolver<
      ResolversTypes['SyncOperationConnection'],
      ParentType,
      ContextType,
      Partial<QuerySyncOperationsArgs>
   >;
   syncStatus?: Resolver<ResolversTypes['SyncStatus'], ParentType, ContextType>;
   task?: Resolver<
      Maybe<ResolversTypes['Task']>,
      ParentType,
      ContextType,
      RequireFields<QueryTaskArgs, 'id'>
   >;
   tasks?: Resolver<
      ResolversTypes['TaskConnection'],
      ParentType,
      ContextType,
      Partial<QueryTasksArgs>
   >;
   user?: Resolver<
      Maybe<ResolversTypes['User']>,
      ParentType,
      ContextType,
      RequireFields<QueryUserArgs, 'id'>
   >;
   users?: Resolver<
      ResolversTypes['UserConnection'],
      ParentType,
      ContextType,
      Partial<QueryUsersArgs>
   >;
}>;

export type StatefulResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Stateful'] = ResolversParentTypes['Stateful'],
> = ResolversObject<{
   __resolveType: TypeResolveFn<null, ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type SubtaskResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Subtask'] = ResolversParentTypes['Subtask'],
> = ResolversObject<{
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   dependencies?: Resolver<ResolversTypes['String'][], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
   parentTask?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['TaskStatus'], ParentType, ContextType>;
   testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncConflictResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['SyncConflict'] = ResolversParentTypes['SyncConflict'],
> = ResolversObject<{
   cliVersion?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
   operationType?: Resolver<ResolversTypes['SyncOperationType'], ParentType, ContextType>;
   resolution?: Resolver<Maybe<ResolversTypes['ConflictResolution']>, ParentType, ContextType>;
   resolved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
   resolvedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   taskId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
   timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   uiVersion?: Resolver<ResolversTypes['JSON'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncConflictConnectionResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncConflictConnection'] = ResolversParentTypes['SyncConflictConnection'],
> = ResolversObject<{
   edges?: Resolver<ResolversTypes['SyncConflictEdge'][], ParentType, ContextType>;
   nodes?: Resolver<ResolversTypes['SyncConflict'][], ParentType, ContextType>;
   pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
   totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncConflictEdgeResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncConflictEdge'] = ResolversParentTypes['SyncConflictEdge'],
> = ResolversObject<{
   cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   node?: Resolver<ResolversTypes['SyncConflict'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncErrorResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['SyncError'] = ResolversParentTypes['SyncError'],
> = ResolversObject<{
   code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
   message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   operationId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncHealthResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['SyncHealth'] = ResolversParentTypes['SyncHealth'],
> = ResolversObject<{
   activeOperations?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   healthy?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
   operationSuccessRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
   queuedOperations?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   syncState?: Resolver<ResolversTypes['SyncState'], ParentType, ContextType>;
   unresolvedConflicts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncOperationResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['SyncOperation'] = ResolversParentTypes['SyncOperation'],
> = ResolversObject<{
   completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   error?: Resolver<Maybe<ResolversTypes['SyncError']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
   metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
   retryCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['SyncOperationStatus'], ParentType, ContextType>;
   taskIds?: Resolver<ResolversTypes['ID'][], ParentType, ContextType>;
   timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   type?: Resolver<ResolversTypes['SyncOperationType'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncOperationConnectionResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncOperationConnection'] = ResolversParentTypes['SyncOperationConnection'],
> = ResolversObject<{
   edges?: Resolver<ResolversTypes['SyncOperationEdge'][], ParentType, ContextType>;
   nodes?: Resolver<ResolversTypes['SyncOperation'][], ParentType, ContextType>;
   pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
   totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncOperationEdgeResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncOperationEdge'] = ResolversParentTypes['SyncOperationEdge'],
> = ResolversObject<{
   cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   node?: Resolver<ResolversTypes['SyncOperation'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncStatusResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['SyncStatus'] = ResolversParentTypes['SyncStatus'],
> = ResolversObject<{
   conflicts?: Resolver<ResolversTypes['SyncConflict'][], ParentType, ContextType>;
   operations?: Resolver<ResolversTypes['SyncOperation'][], ParentType, ContextType>;
   optimisticUpdatesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   queueSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   state?: Resolver<ResolversTypes['SyncState'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SystemInfoResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['SystemInfo'] = ResolversParentTypes['SystemInfo'],
> = ResolversObject<{
   memoryUsage?: Resolver<ResolversTypes['MemoryUsage'], ParentType, ContextType>;
   nodeVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   platform?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   uptime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task'],
> = ResolversObject<{
   complexity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   dependencies?: Resolver<ResolversTypes['ID'][], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
   isReady?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
   priority?: Resolver<ResolversTypes['TaskPriority'], ParentType, ContextType>;
   progress?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['TaskStatus'], ParentType, ContextType>;
   subtasks?: Resolver<ResolversTypes['Subtask'][], ParentType, ContextType>;
   testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskCollectionResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskCollection'] = ResolversParentTypes['TaskCollection'],
> = ResolversObject<{
   completed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   inProgress?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   metadata?: Resolver<ResolversTypes['TaskMetadata'], ParentType, ContextType>;
   pending?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   progressPercentage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
   tasks?: Resolver<ResolversTypes['Task'][], ParentType, ContextType>;
   total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskConnectionResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskConnection'] = ResolversParentTypes['TaskConnection'],
> = ResolversObject<{
   edges?: Resolver<ResolversTypes['TaskEdge'][], ParentType, ContextType>;
   nodes?: Resolver<ResolversTypes['Task'][], ParentType, ContextType>;
   pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
   totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskEdgeResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['TaskEdge'] = ResolversParentTypes['TaskEdge'],
> = ResolversObject<{
   cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   node?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskMetadataResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['TaskMetadata'] = ResolversParentTypes['TaskMetadata'],
> = ResolversObject<{
   created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TasksDataResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['TasksData'] = ResolversParentTypes['TasksData'],
> = ResolversObject<{
   master?: Resolver<ResolversTypes['TaskCollection'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimestampedResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Timestamped'] = ResolversParentTypes['Timestamped'],
> = ResolversObject<{
   __resolveType: TypeResolveFn<null, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
}>;

export type UserResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = ResolversObject<{
   assignedIssues?: Resolver<ResolversTypes['Issue'][], ParentType, ContextType>;
   avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
   joinedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['UserStatus'], ParentType, ContextType>;
   teamIds?: Resolver<ResolversTypes['String'][], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserConnectionResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection'],
> = ResolversObject<{
   edges?: Resolver<ResolversTypes['UserEdge'][], ParentType, ContextType>;
   nodes?: Resolver<ResolversTypes['User'][], ParentType, ContextType>;
   pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
   totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserEdgeResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge'],
> = ResolversObject<{
   cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GraphQLContext> = ResolversObject<{
   BatchResult?: BatchResultResolvers<ContextType>;
   CLICommandConnection?: CliCommandConnectionResolvers<ContextType>;
   CLICommandEdge?: CliCommandEdgeResolvers<ContextType>;
   CLICommandResult?: CliCommandResultResolvers<ContextType>;
   CLIError?: CliErrorResolvers<ContextType>;
   CLIStatus?: CliStatusResolvers<ContextType>;
   DateTime?: GraphQLScalarType;
   Issue?: IssueResolvers<ContextType>;
   IssueConnection?: IssueConnectionResolvers<ContextType>;
   IssueEdge?: IssueEdgeResolvers<ContextType>;
   JSON?: GraphQLScalarType;
   Label?: LabelResolvers<ContextType>;
   LabelConnection?: LabelConnectionResolvers<ContextType>;
   LabelEdge?: LabelEdgeResolvers<ContextType>;
   MemoryUsage?: MemoryUsageResolvers<ContextType>;
   Mutation?: MutationResolvers<ContextType>;
   PageInfo?: PageInfoResolvers<ContextType>;
   Project?: ProjectResolvers<ContextType>;
   ProjectConnection?: ProjectConnectionResolvers<ContextType>;
   ProjectEdge?: ProjectEdgeResolvers<ContextType>;
   Query?: QueryResolvers<ContextType>;
   Stateful?: StatefulResolvers<ContextType>;
   Subtask?: SubtaskResolvers<ContextType>;
   SyncConflict?: SyncConflictResolvers<ContextType>;
   SyncConflictConnection?: SyncConflictConnectionResolvers<ContextType>;
   SyncConflictEdge?: SyncConflictEdgeResolvers<ContextType>;
   SyncError?: SyncErrorResolvers<ContextType>;
   SyncHealth?: SyncHealthResolvers<ContextType>;
   SyncOperation?: SyncOperationResolvers<ContextType>;
   SyncOperationConnection?: SyncOperationConnectionResolvers<ContextType>;
   SyncOperationEdge?: SyncOperationEdgeResolvers<ContextType>;
   SyncStatus?: SyncStatusResolvers<ContextType>;
   SystemInfo?: SystemInfoResolvers<ContextType>;
   Task?: TaskResolvers<ContextType>;
   TaskCollection?: TaskCollectionResolvers<ContextType>;
   TaskConnection?: TaskConnectionResolvers<ContextType>;
   TaskEdge?: TaskEdgeResolvers<ContextType>;
   TaskMetadata?: TaskMetadataResolvers<ContextType>;
   TasksData?: TasksDataResolvers<ContextType>;
   Timestamped?: TimestampedResolvers<ContextType>;
   User?: UserResolvers<ContextType>;
   UserConnection?: UserConnectionResolvers<ContextType>;
   UserEdge?: UserEdgeResolvers<ContextType>;
}>;
