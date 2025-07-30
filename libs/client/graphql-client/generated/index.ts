import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: string; output: string; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateCycle = {
  __typename?: 'AggregateCycle';
  _avg?: Maybe<CycleAvgAggregate>;
  _count?: Maybe<CycleCountAggregate>;
  _max?: Maybe<CycleMaxAggregate>;
  _min?: Maybe<CycleMinAggregate>;
  _sum?: Maybe<CycleSumAggregate>;
};

export type AggregateIssue = {
  __typename?: 'AggregateIssue';
  _avg?: Maybe<IssueAvgAggregate>;
  _count?: Maybe<IssueCountAggregate>;
  _max?: Maybe<IssueMaxAggregate>;
  _min?: Maybe<IssueMinAggregate>;
  _sum?: Maybe<IssueSumAggregate>;
};

export type AggregateIssueLabel = {
  __typename?: 'AggregateIssueLabel';
  _count?: Maybe<IssueLabelCountAggregate>;
  _max?: Maybe<IssueLabelMaxAggregate>;
  _min?: Maybe<IssueLabelMinAggregate>;
};

export type AggregateIssuePriority = {
  __typename?: 'AggregateIssuePriority';
  _avg?: Maybe<IssuePriorityAvgAggregate>;
  _count?: Maybe<IssuePriorityCountAggregate>;
  _max?: Maybe<IssuePriorityMaxAggregate>;
  _min?: Maybe<IssuePriorityMinAggregate>;
  _sum?: Maybe<IssuePrioritySumAggregate>;
};

export type AggregateIssueStatus = {
  __typename?: 'AggregateIssueStatus';
  _count?: Maybe<IssueStatusCountAggregate>;
  _max?: Maybe<IssueStatusMaxAggregate>;
  _min?: Maybe<IssueStatusMinAggregate>;
};

export type AggregateLabel = {
  __typename?: 'AggregateLabel';
  _count?: Maybe<LabelCountAggregate>;
  _max?: Maybe<LabelMaxAggregate>;
  _min?: Maybe<LabelMinAggregate>;
};

export type AggregateProject = {
  __typename?: 'AggregateProject';
  _avg?: Maybe<ProjectAvgAggregate>;
  _count?: Maybe<ProjectCountAggregate>;
  _max?: Maybe<ProjectMaxAggregate>;
  _min?: Maybe<ProjectMinAggregate>;
  _sum?: Maybe<ProjectSumAggregate>;
};

export type AggregateSubtask = {
  __typename?: 'AggregateSubtask';
  _avg?: Maybe<SubtaskAvgAggregate>;
  _count?: Maybe<SubtaskCountAggregate>;
  _max?: Maybe<SubtaskMaxAggregate>;
  _min?: Maybe<SubtaskMinAggregate>;
  _sum?: Maybe<SubtaskSumAggregate>;
};

export type AggregateSyncConflict = {
  __typename?: 'AggregateSyncConflict';
  _count?: Maybe<SyncConflictCountAggregate>;
  _max?: Maybe<SyncConflictMaxAggregate>;
  _min?: Maybe<SyncConflictMinAggregate>;
};

export type AggregateSyncOperation = {
  __typename?: 'AggregateSyncOperation';
  _avg?: Maybe<SyncOperationAvgAggregate>;
  _count?: Maybe<SyncOperationCountAggregate>;
  _max?: Maybe<SyncOperationMaxAggregate>;
  _min?: Maybe<SyncOperationMinAggregate>;
  _sum?: Maybe<SyncOperationSumAggregate>;
};

export type AggregateTask = {
  __typename?: 'AggregateTask';
  _avg?: Maybe<TaskAvgAggregate>;
  _count?: Maybe<TaskCountAggregate>;
  _max?: Maybe<TaskMaxAggregate>;
  _min?: Maybe<TaskMinAggregate>;
  _sum?: Maybe<TaskSumAggregate>;
};

export type AggregateTaskDependency = {
  __typename?: 'AggregateTaskDependency';
  _avg?: Maybe<TaskDependencyAvgAggregate>;
  _count?: Maybe<TaskDependencyCountAggregate>;
  _max?: Maybe<TaskDependencyMaxAggregate>;
  _min?: Maybe<TaskDependencyMinAggregate>;
  _sum?: Maybe<TaskDependencySumAggregate>;
};

export type AggregateTaskMasterMetadata = {
  __typename?: 'AggregateTaskMasterMetadata';
  _avg?: Maybe<TaskMasterMetadataAvgAggregate>;
  _count?: Maybe<TaskMasterMetadataCountAggregate>;
  _max?: Maybe<TaskMasterMetadataMaxAggregate>;
  _min?: Maybe<TaskMasterMetadataMinAggregate>;
  _sum?: Maybe<TaskMasterMetadataSumAggregate>;
};

export type AggregateTeam = {
  __typename?: 'AggregateTeam';
  _count?: Maybe<TeamCountAggregate>;
  _max?: Maybe<TeamMaxAggregate>;
  _min?: Maybe<TeamMinAggregate>;
};

export type AggregateTeamMember = {
  __typename?: 'AggregateTeamMember';
  _count?: Maybe<TeamMemberCountAggregate>;
  _max?: Maybe<TeamMemberMaxAggregate>;
  _min?: Maybe<TeamMemberMinAggregate>;
};

export type AggregateTeamProject = {
  __typename?: 'AggregateTeamProject';
  _count?: Maybe<TeamProjectCountAggregate>;
  _max?: Maybe<TeamProjectMaxAggregate>;
  _min?: Maybe<TeamProjectMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type CreateManyAndReturnCycle = {
  __typename?: 'CreateManyAndReturnCycle';
  createdAt: Scalars['DateTime']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  number: Scalars['Int']['output'];
  progress: Scalars['Int']['output'];
  startDate: Scalars['DateTime']['output'];
  team: Team;
  teamId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateManyAndReturnIssue = {
  __typename?: 'CreateManyAndReturnIssue';
  assignee?: Maybe<User>;
  assigneeId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  cycle?: Maybe<Cycle>;
  cycleId?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  identifier: Scalars['String']['output'];
  issuePriority?: Maybe<IssuePriority>;
  issueStatus?: Maybe<IssueStatus>;
  issueType: Scalars['String']['output'];
  parentIssue?: Maybe<Issue>;
  parentIssueId?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['String']['output']>;
  priorityId?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['String']['output']>;
  rank: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  statusId?: Maybe<Scalars['String']['output']>;
  subtask?: Maybe<Subtask>;
  subtaskId?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Task>;
  taskId?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CreateManyAndReturnIssueAssigneeArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type CreateManyAndReturnIssueCycleArgs = {
  where?: InputMaybe<CycleWhereInput>;
};


export type CreateManyAndReturnIssueIssuePriorityArgs = {
  where?: InputMaybe<IssuePriorityWhereInput>;
};


export type CreateManyAndReturnIssueIssueStatusArgs = {
  where?: InputMaybe<IssueStatusWhereInput>;
};


export type CreateManyAndReturnIssueParentIssueArgs = {
  where?: InputMaybe<IssueWhereInput>;
};


export type CreateManyAndReturnIssueProjectArgs = {
  where?: InputMaybe<ProjectWhereInput>;
};


export type CreateManyAndReturnIssueSubtaskArgs = {
  where?: InputMaybe<SubtaskWhereInput>;
};


export type CreateManyAndReturnIssueTaskArgs = {
  where?: InputMaybe<TaskWhereInput>;
};

export type CreateManyAndReturnIssueLabel = {
  __typename?: 'CreateManyAndReturnIssueLabel';
  id: Scalars['String']['output'];
  issue: Issue;
  issueId: Scalars['String']['output'];
  label: Label;
  labelId: Scalars['String']['output'];
};

export type CreateManyAndReturnIssuePriority = {
  __typename?: 'CreateManyAndReturnIssuePriority';
  createdAt: Scalars['DateTime']['output'];
  iconName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateManyAndReturnIssueStatus = {
  __typename?: 'CreateManyAndReturnIssueStatus';
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  iconName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateManyAndReturnLabel = {
  __typename?: 'CreateManyAndReturnLabel';
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateManyAndReturnProject = {
  __typename?: 'CreateManyAndReturnProject';
  color?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  health: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  lead?: Maybe<User>;
  leadId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  percentComplete: Scalars['Int']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type CreateManyAndReturnProjectLeadArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type CreateManyAndReturnSubtask = {
  __typename?: 'CreateManyAndReturnSubtask';
  createdAt: Scalars['DateTime']['output'];
  dependencies: Scalars['String']['output'];
  description: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  parentId: Scalars['Int']['output'];
  parentTask: Task;
  status: Scalars['String']['output'];
  testStrategy?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateManyAndReturnSyncConflict = {
  __typename?: 'CreateManyAndReturnSyncConflict';
  cliVersion: Scalars['String']['output'];
  id: Scalars['String']['output'];
  operationType: Scalars['String']['output'];
  resolution?: Maybe<Scalars['String']['output']>;
  resolved: Scalars['Boolean']['output'];
  resolvedAt?: Maybe<Scalars['DateTime']['output']>;
  resolvedBy?: Maybe<Scalars['String']['output']>;
  taskId: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  uiVersion: Scalars['String']['output'];
};

export type CreateManyAndReturnSyncOperation = {
  __typename?: 'CreateManyAndReturnSyncOperation';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  data: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  maxRetries: Scalars['Int']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  retryCount: Scalars['Int']['output'];
  rollbackData?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  taskIds: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type CreateManyAndReturnTask = {
  __typename?: 'CreateManyAndReturnTask';
  complexity?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  priority: Scalars['String']['output'];
  status: Scalars['String']['output'];
  testStrategy?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateManyAndReturnTaskDependency = {
  __typename?: 'CreateManyAndReturnTaskDependency';
  createdAt: Scalars['DateTime']['output'];
  dependsOn: Task;
  dependsOnId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  task: Task;
  taskId: Scalars['Int']['output'];
};

export type CreateManyAndReturnTaskMasterMetadata = {
  __typename?: 'CreateManyAndReturnTaskMasterMetadata';
  created: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updated: Scalars['DateTime']['output'];
};

export type CreateManyAndReturnTeam = {
  __typename?: 'CreateManyAndReturnTeam';
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['String']['output'];
  joined: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateManyAndReturnTeamMember = {
  __typename?: 'CreateManyAndReturnTeamMember';
  id: Scalars['String']['output'];
  team: Team;
  teamId: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CreateManyAndReturnTeamProject = {
  __typename?: 'CreateManyAndReturnTeamProject';
  id: Scalars['String']['output'];
  project: Project;
  projectId: Scalars['String']['output'];
  team: Team;
  teamId: Scalars['String']['output'];
};

export type CreateManyAndReturnUser = {
  __typename?: 'CreateManyAndReturnUser';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  joinedDate: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
  teamIds: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Cycle = {
  __typename?: 'Cycle';
  _count?: Maybe<CycleCount>;
  createdAt: Scalars['DateTime']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  issues: Array<Issue>;
  name: Scalars['String']['output'];
  number: Scalars['Int']['output'];
  progress: Scalars['Int']['output'];
  startDate: Scalars['DateTime']['output'];
  team: Team;
  teamId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CycleIssuesArgs = {
  cursor?: InputMaybe<IssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};

export type CycleAvgAggregate = {
  __typename?: 'CycleAvgAggregate';
  number?: Maybe<Scalars['Float']['output']>;
  progress?: Maybe<Scalars['Float']['output']>;
};

export type CycleAvgOrderByAggregateInput = {
  number?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
};

export type CycleCount = {
  __typename?: 'CycleCount';
  issues: Scalars['Int']['output'];
};


export type CycleCountIssuesArgs = {
  where?: InputMaybe<IssueWhereInput>;
};

export type CycleCountAggregate = {
  __typename?: 'CycleCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  endDate: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  number: Scalars['Int']['output'];
  progress: Scalars['Int']['output'];
  startDate: Scalars['Int']['output'];
  teamId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CycleCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  teamId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CycleCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  issues?: InputMaybe<IssueCreateNestedManyWithoutCycleInput>;
  name: Scalars['String']['input'];
  number: Scalars['Int']['input'];
  progress?: InputMaybe<Scalars['Int']['input']>;
  startDate: Scalars['DateTime']['input'];
  team: TeamCreateNestedOneWithoutCyclesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CycleCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  number: Scalars['Int']['input'];
  progress?: InputMaybe<Scalars['Int']['input']>;
  startDate: Scalars['DateTime']['input'];
  teamId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CycleCreateManyTeamInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  number: Scalars['Int']['input'];
  progress?: InputMaybe<Scalars['Int']['input']>;
  startDate: Scalars['DateTime']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CycleCreateManyTeamInputEnvelope = {
  data: Array<CycleCreateManyTeamInput>;
};

export type CycleCreateNestedManyWithoutTeamInput = {
  connect?: InputMaybe<Array<CycleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CycleCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<CycleCreateWithoutTeamInput>>;
  createMany?: InputMaybe<CycleCreateManyTeamInputEnvelope>;
};

export type CycleCreateNestedOneWithoutIssuesInput = {
  connect?: InputMaybe<CycleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CycleCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<CycleCreateWithoutIssuesInput>;
};

export type CycleCreateOrConnectWithoutIssuesInput = {
  create: CycleCreateWithoutIssuesInput;
  where: CycleWhereUniqueInput;
};

export type CycleCreateOrConnectWithoutTeamInput = {
  create: CycleCreateWithoutTeamInput;
  where: CycleWhereUniqueInput;
};

export type CycleCreateWithoutIssuesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  number: Scalars['Int']['input'];
  progress?: InputMaybe<Scalars['Int']['input']>;
  startDate: Scalars['DateTime']['input'];
  team: TeamCreateNestedOneWithoutCyclesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CycleCreateWithoutTeamInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  issues?: InputMaybe<IssueCreateNestedManyWithoutCycleInput>;
  name: Scalars['String']['input'];
  number: Scalars['Int']['input'];
  progress?: InputMaybe<Scalars['Int']['input']>;
  startDate: Scalars['DateTime']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CycleGroupBy = {
  __typename?: 'CycleGroupBy';
  _avg?: Maybe<CycleAvgAggregate>;
  _count?: Maybe<CycleCountAggregate>;
  _max?: Maybe<CycleMaxAggregate>;
  _min?: Maybe<CycleMinAggregate>;
  _sum?: Maybe<CycleSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  endDate: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  number: Scalars['Int']['output'];
  progress: Scalars['Int']['output'];
  startDate: Scalars['DateTime']['output'];
  teamId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CycleListRelationFilter = {
  every?: InputMaybe<CycleWhereInput>;
  none?: InputMaybe<CycleWhereInput>;
  some?: InputMaybe<CycleWhereInput>;
};

export type CycleMaxAggregate = {
  __typename?: 'CycleMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  progress?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  teamId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CycleMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  teamId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CycleMinAggregate = {
  __typename?: 'CycleMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['Int']['output']>;
  progress?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  teamId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CycleMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  teamId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CycleNullableRelationFilter = {
  is?: InputMaybe<CycleWhereInput>;
  isNot?: InputMaybe<CycleWhereInput>;
};

export type CycleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CycleOrderByWithAggregationInput = {
  _avg?: InputMaybe<CycleAvgOrderByAggregateInput>;
  _count?: InputMaybe<CycleCountOrderByAggregateInput>;
  _max?: InputMaybe<CycleMaxOrderByAggregateInput>;
  _min?: InputMaybe<CycleMinOrderByAggregateInput>;
  _sum?: InputMaybe<CycleSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  teamId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CycleOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issues?: InputMaybe<IssueOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  number?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  team?: InputMaybe<TeamOrderByWithRelationInput>;
  teamId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum CycleScalarFieldEnum {
  CreatedAt = 'createdAt',
  EndDate = 'endDate',
  Id = 'id',
  Name = 'name',
  Number = 'number',
  Progress = 'progress',
  StartDate = 'startDate',
  TeamId = 'teamId',
  UpdatedAt = 'updatedAt'
}

export type CycleScalarWhereInput = {
  AND?: InputMaybe<Array<CycleScalarWhereInput>>;
  NOT?: InputMaybe<Array<CycleScalarWhereInput>>;
  OR?: InputMaybe<Array<CycleScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  number?: InputMaybe<IntFilter>;
  progress?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  teamId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CycleScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CycleScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CycleScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CycleScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  endDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  number?: InputMaybe<IntWithAggregatesFilter>;
  progress?: InputMaybe<IntWithAggregatesFilter>;
  startDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  teamId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CycleSumAggregate = {
  __typename?: 'CycleSumAggregate';
  number?: Maybe<Scalars['Int']['output']>;
  progress?: Maybe<Scalars['Int']['output']>;
};

export type CycleSumOrderByAggregateInput = {
  number?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
};

export type CycleUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueUpdateManyWithoutCycleNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  progress?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  team?: InputMaybe<TeamUpdateOneRequiredWithoutCyclesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CycleUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  progress?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CycleUpdateManyWithWhereWithoutTeamInput = {
  data: CycleUpdateManyMutationInput;
  where: CycleScalarWhereInput;
};

export type CycleUpdateManyWithoutTeamNestedInput = {
  connect?: InputMaybe<Array<CycleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CycleCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<CycleCreateWithoutTeamInput>>;
  createMany?: InputMaybe<CycleCreateManyTeamInputEnvelope>;
  delete?: InputMaybe<Array<CycleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CycleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CycleWhereUniqueInput>>;
  set?: InputMaybe<Array<CycleWhereUniqueInput>>;
  update?: InputMaybe<Array<CycleUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: InputMaybe<Array<CycleUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: InputMaybe<Array<CycleUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type CycleUpdateOneWithoutIssuesNestedInput = {
  connect?: InputMaybe<CycleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CycleCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<CycleCreateWithoutIssuesInput>;
  delete?: InputMaybe<CycleWhereInput>;
  disconnect?: InputMaybe<CycleWhereInput>;
  update?: InputMaybe<CycleUpdateToOneWithWhereWithoutIssuesInput>;
  upsert?: InputMaybe<CycleUpsertWithoutIssuesInput>;
};

export type CycleUpdateToOneWithWhereWithoutIssuesInput = {
  data: CycleUpdateWithoutIssuesInput;
  where?: InputMaybe<CycleWhereInput>;
};

export type CycleUpdateWithWhereUniqueWithoutTeamInput = {
  data: CycleUpdateWithoutTeamInput;
  where: CycleWhereUniqueInput;
};

export type CycleUpdateWithoutIssuesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  progress?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  team?: InputMaybe<TeamUpdateOneRequiredWithoutCyclesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CycleUpdateWithoutTeamInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  endDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueUpdateManyWithoutCycleNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  number?: InputMaybe<IntFieldUpdateOperationsInput>;
  progress?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CycleUpsertWithWhereUniqueWithoutTeamInput = {
  create: CycleCreateWithoutTeamInput;
  update: CycleUpdateWithoutTeamInput;
  where: CycleWhereUniqueInput;
};

export type CycleUpsertWithoutIssuesInput = {
  create: CycleCreateWithoutIssuesInput;
  update: CycleUpdateWithoutIssuesInput;
  where?: InputMaybe<CycleWhereInput>;
};

export type CycleWhereInput = {
  AND?: InputMaybe<Array<CycleWhereInput>>;
  NOT?: InputMaybe<Array<CycleWhereInput>>;
  OR?: InputMaybe<Array<CycleWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  issues?: InputMaybe<IssueListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  number?: InputMaybe<IntFilter>;
  progress?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  team?: InputMaybe<TeamRelationFilter>;
  teamId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CycleWhereUniqueInput = {
  AND?: InputMaybe<Array<CycleWhereInput>>;
  NOT?: InputMaybe<Array<CycleWhereInput>>;
  OR?: InputMaybe<Array<CycleWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  issues?: InputMaybe<IssueListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  number?: InputMaybe<IntFilter>;
  progress?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  team?: InputMaybe<TeamRelationFilter>;
  teamId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Issue = {
  __typename?: 'Issue';
  _count?: Maybe<IssueCount>;
  assignee?: Maybe<User>;
  assigneeId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  cycle?: Maybe<Cycle>;
  cycleId?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  identifier: Scalars['String']['output'];
  issuePriority?: Maybe<IssuePriority>;
  issueStatus?: Maybe<IssueStatus>;
  issueType: Scalars['String']['output'];
  labels: Array<IssueLabel>;
  parentIssue?: Maybe<Issue>;
  parentIssueId?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['String']['output']>;
  priorityId?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['String']['output']>;
  rank: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  statusId?: Maybe<Scalars['String']['output']>;
  subIssues: Array<Issue>;
  subtask?: Maybe<Subtask>;
  subtaskId?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Task>;
  taskId?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type IssueAssigneeArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type IssueCycleArgs = {
  where?: InputMaybe<CycleWhereInput>;
};


export type IssueIssuePriorityArgs = {
  where?: InputMaybe<IssuePriorityWhereInput>;
};


export type IssueIssueStatusArgs = {
  where?: InputMaybe<IssueStatusWhereInput>;
};


export type IssueLabelsArgs = {
  cursor?: InputMaybe<IssueLabelWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueLabelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueLabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueLabelWhereInput>;
};


export type IssueParentIssueArgs = {
  where?: InputMaybe<IssueWhereInput>;
};


export type IssueProjectArgs = {
  where?: InputMaybe<ProjectWhereInput>;
};


export type IssueSubIssuesArgs = {
  cursor?: InputMaybe<IssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};


export type IssueSubtaskArgs = {
  where?: InputMaybe<SubtaskWhereInput>;
};


export type IssueTaskArgs = {
  where?: InputMaybe<TaskWhereInput>;
};

export type IssueAvgAggregate = {
  __typename?: 'IssueAvgAggregate';
  taskId?: Maybe<Scalars['Float']['output']>;
};

export type IssueAvgOrderByAggregateInput = {
  taskId?: InputMaybe<SortOrder>;
};

export type IssueCount = {
  __typename?: 'IssueCount';
  labels: Scalars['Int']['output'];
  subIssues: Scalars['Int']['output'];
};


export type IssueCountLabelsArgs = {
  where?: InputMaybe<IssueLabelWhereInput>;
};


export type IssueCountSubIssuesArgs = {
  where?: InputMaybe<IssueWhereInput>;
};

export type IssueCountAggregate = {
  __typename?: 'IssueCountAggregate';
  _all: Scalars['Int']['output'];
  assigneeId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  cycleId: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  dueDate: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  identifier: Scalars['Int']['output'];
  issueType: Scalars['Int']['output'];
  parentIssueId: Scalars['Int']['output'];
  priority: Scalars['Int']['output'];
  priorityId: Scalars['Int']['output'];
  projectId: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  statusId: Scalars['Int']['output'];
  subtaskId: Scalars['Int']['output'];
  taskId: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type IssueCountOrderByAggregateInput = {
  assigneeId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  cycleId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  issueType?: InputMaybe<SortOrder>;
  parentIssueId?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  priorityId?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  statusId?: InputMaybe<SortOrder>;
  subtaskId?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IssueCreateInput = {
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedIssuesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycle?: InputMaybe<CycleCreateNestedOneWithoutIssuesInput>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issuePriority?: InputMaybe<IssuePriorityCreateNestedOneWithoutIssuesInput>;
  issueStatus?: InputMaybe<IssueStatusCreateNestedOneWithoutIssuesInput>;
  issueType: Scalars['String']['input'];
  labels?: InputMaybe<IssueLabelCreateNestedManyWithoutIssueInput>;
  parentIssue?: InputMaybe<IssueCreateNestedOneWithoutSubIssuesInput>;
  priority?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectCreateNestedOneWithoutIssuesInput>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  subIssues?: InputMaybe<IssueCreateNestedManyWithoutParentIssueInput>;
  subtask?: InputMaybe<SubtaskCreateNestedOneWithoutIssuesInput>;
  task?: InputMaybe<TaskCreateNestedOneWithoutIssuesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateManyAssigneeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycleId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issueType: Scalars['String']['input'];
  parentIssueId?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  priorityId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  statusId?: InputMaybe<Scalars['String']['input']>;
  subtaskId?: InputMaybe<Scalars['String']['input']>;
  taskId?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateManyAssigneeInputEnvelope = {
  data: Array<IssueCreateManyAssigneeInput>;
};

export type IssueCreateManyCycleInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issueType: Scalars['String']['input'];
  parentIssueId?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  priorityId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  statusId?: InputMaybe<Scalars['String']['input']>;
  subtaskId?: InputMaybe<Scalars['String']['input']>;
  taskId?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateManyCycleInputEnvelope = {
  data: Array<IssueCreateManyCycleInput>;
};

export type IssueCreateManyInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycleId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issueType: Scalars['String']['input'];
  parentIssueId?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  priorityId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  statusId?: InputMaybe<Scalars['String']['input']>;
  subtaskId?: InputMaybe<Scalars['String']['input']>;
  taskId?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateManyIssuePriorityInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycleId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issueType: Scalars['String']['input'];
  parentIssueId?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  statusId?: InputMaybe<Scalars['String']['input']>;
  subtaskId?: InputMaybe<Scalars['String']['input']>;
  taskId?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateManyIssuePriorityInputEnvelope = {
  data: Array<IssueCreateManyIssuePriorityInput>;
};

export type IssueCreateManyIssueStatusInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycleId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issueType: Scalars['String']['input'];
  parentIssueId?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  priorityId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  subtaskId?: InputMaybe<Scalars['String']['input']>;
  taskId?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateManyIssueStatusInputEnvelope = {
  data: Array<IssueCreateManyIssueStatusInput>;
};

export type IssueCreateManyParentIssueInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycleId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issueType: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['String']['input']>;
  priorityId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  statusId?: InputMaybe<Scalars['String']['input']>;
  subtaskId?: InputMaybe<Scalars['String']['input']>;
  taskId?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateManyParentIssueInputEnvelope = {
  data: Array<IssueCreateManyParentIssueInput>;
};

export type IssueCreateManyProjectInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycleId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issueType: Scalars['String']['input'];
  parentIssueId?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  priorityId?: InputMaybe<Scalars['String']['input']>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  statusId?: InputMaybe<Scalars['String']['input']>;
  subtaskId?: InputMaybe<Scalars['String']['input']>;
  taskId?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateManyProjectInputEnvelope = {
  data: Array<IssueCreateManyProjectInput>;
};

export type IssueCreateManySubtaskInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycleId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issueType: Scalars['String']['input'];
  parentIssueId?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  priorityId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  statusId?: InputMaybe<Scalars['String']['input']>;
  taskId?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateManySubtaskInputEnvelope = {
  data: Array<IssueCreateManySubtaskInput>;
};

export type IssueCreateManyTaskInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycleId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issueType: Scalars['String']['input'];
  parentIssueId?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  priorityId?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  statusId?: InputMaybe<Scalars['String']['input']>;
  subtaskId?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateManyTaskInputEnvelope = {
  data: Array<IssueCreateManyTaskInput>;
};

export type IssueCreateNestedManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<IssueCreateManyAssigneeInputEnvelope>;
};

export type IssueCreateNestedManyWithoutCycleInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutCycleInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutCycleInput>>;
  createMany?: InputMaybe<IssueCreateManyCycleInputEnvelope>;
};

export type IssueCreateNestedManyWithoutIssuePriorityInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutIssuePriorityInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutIssuePriorityInput>>;
  createMany?: InputMaybe<IssueCreateManyIssuePriorityInputEnvelope>;
};

export type IssueCreateNestedManyWithoutIssueStatusInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutIssueStatusInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutIssueStatusInput>>;
  createMany?: InputMaybe<IssueCreateManyIssueStatusInputEnvelope>;
};

export type IssueCreateNestedManyWithoutParentIssueInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutParentIssueInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutParentIssueInput>>;
  createMany?: InputMaybe<IssueCreateManyParentIssueInputEnvelope>;
};

export type IssueCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutProjectInput>>;
  createMany?: InputMaybe<IssueCreateManyProjectInputEnvelope>;
};

export type IssueCreateNestedManyWithoutSubtaskInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutSubtaskInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutSubtaskInput>>;
  createMany?: InputMaybe<IssueCreateManySubtaskInputEnvelope>;
};

export type IssueCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutTaskInput>>;
  createMany?: InputMaybe<IssueCreateManyTaskInputEnvelope>;
};

export type IssueCreateNestedOneWithoutLabelsInput = {
  connect?: InputMaybe<IssueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IssueCreateOrConnectWithoutLabelsInput>;
  create?: InputMaybe<IssueCreateWithoutLabelsInput>;
};

export type IssueCreateNestedOneWithoutSubIssuesInput = {
  connect?: InputMaybe<IssueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IssueCreateOrConnectWithoutSubIssuesInput>;
  create?: InputMaybe<IssueCreateWithoutSubIssuesInput>;
};

export type IssueCreateOrConnectWithoutAssigneeInput = {
  create: IssueCreateWithoutAssigneeInput;
  where: IssueWhereUniqueInput;
};

export type IssueCreateOrConnectWithoutCycleInput = {
  create: IssueCreateWithoutCycleInput;
  where: IssueWhereUniqueInput;
};

export type IssueCreateOrConnectWithoutIssuePriorityInput = {
  create: IssueCreateWithoutIssuePriorityInput;
  where: IssueWhereUniqueInput;
};

export type IssueCreateOrConnectWithoutIssueStatusInput = {
  create: IssueCreateWithoutIssueStatusInput;
  where: IssueWhereUniqueInput;
};

export type IssueCreateOrConnectWithoutLabelsInput = {
  create: IssueCreateWithoutLabelsInput;
  where: IssueWhereUniqueInput;
};

export type IssueCreateOrConnectWithoutParentIssueInput = {
  create: IssueCreateWithoutParentIssueInput;
  where: IssueWhereUniqueInput;
};

export type IssueCreateOrConnectWithoutProjectInput = {
  create: IssueCreateWithoutProjectInput;
  where: IssueWhereUniqueInput;
};

export type IssueCreateOrConnectWithoutSubIssuesInput = {
  create: IssueCreateWithoutSubIssuesInput;
  where: IssueWhereUniqueInput;
};

export type IssueCreateOrConnectWithoutSubtaskInput = {
  create: IssueCreateWithoutSubtaskInput;
  where: IssueWhereUniqueInput;
};

export type IssueCreateOrConnectWithoutTaskInput = {
  create: IssueCreateWithoutTaskInput;
  where: IssueWhereUniqueInput;
};

export type IssueCreateWithoutAssigneeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycle?: InputMaybe<CycleCreateNestedOneWithoutIssuesInput>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issuePriority?: InputMaybe<IssuePriorityCreateNestedOneWithoutIssuesInput>;
  issueStatus?: InputMaybe<IssueStatusCreateNestedOneWithoutIssuesInput>;
  issueType: Scalars['String']['input'];
  labels?: InputMaybe<IssueLabelCreateNestedManyWithoutIssueInput>;
  parentIssue?: InputMaybe<IssueCreateNestedOneWithoutSubIssuesInput>;
  priority?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectCreateNestedOneWithoutIssuesInput>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  subIssues?: InputMaybe<IssueCreateNestedManyWithoutParentIssueInput>;
  subtask?: InputMaybe<SubtaskCreateNestedOneWithoutIssuesInput>;
  task?: InputMaybe<TaskCreateNestedOneWithoutIssuesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateWithoutCycleInput = {
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedIssuesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issuePriority?: InputMaybe<IssuePriorityCreateNestedOneWithoutIssuesInput>;
  issueStatus?: InputMaybe<IssueStatusCreateNestedOneWithoutIssuesInput>;
  issueType: Scalars['String']['input'];
  labels?: InputMaybe<IssueLabelCreateNestedManyWithoutIssueInput>;
  parentIssue?: InputMaybe<IssueCreateNestedOneWithoutSubIssuesInput>;
  priority?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectCreateNestedOneWithoutIssuesInput>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  subIssues?: InputMaybe<IssueCreateNestedManyWithoutParentIssueInput>;
  subtask?: InputMaybe<SubtaskCreateNestedOneWithoutIssuesInput>;
  task?: InputMaybe<TaskCreateNestedOneWithoutIssuesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateWithoutIssuePriorityInput = {
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedIssuesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycle?: InputMaybe<CycleCreateNestedOneWithoutIssuesInput>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issueStatus?: InputMaybe<IssueStatusCreateNestedOneWithoutIssuesInput>;
  issueType: Scalars['String']['input'];
  labels?: InputMaybe<IssueLabelCreateNestedManyWithoutIssueInput>;
  parentIssue?: InputMaybe<IssueCreateNestedOneWithoutSubIssuesInput>;
  priority?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectCreateNestedOneWithoutIssuesInput>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  subIssues?: InputMaybe<IssueCreateNestedManyWithoutParentIssueInput>;
  subtask?: InputMaybe<SubtaskCreateNestedOneWithoutIssuesInput>;
  task?: InputMaybe<TaskCreateNestedOneWithoutIssuesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateWithoutIssueStatusInput = {
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedIssuesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycle?: InputMaybe<CycleCreateNestedOneWithoutIssuesInput>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issuePriority?: InputMaybe<IssuePriorityCreateNestedOneWithoutIssuesInput>;
  issueType: Scalars['String']['input'];
  labels?: InputMaybe<IssueLabelCreateNestedManyWithoutIssueInput>;
  parentIssue?: InputMaybe<IssueCreateNestedOneWithoutSubIssuesInput>;
  priority?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectCreateNestedOneWithoutIssuesInput>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  subIssues?: InputMaybe<IssueCreateNestedManyWithoutParentIssueInput>;
  subtask?: InputMaybe<SubtaskCreateNestedOneWithoutIssuesInput>;
  task?: InputMaybe<TaskCreateNestedOneWithoutIssuesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateWithoutLabelsInput = {
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedIssuesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycle?: InputMaybe<CycleCreateNestedOneWithoutIssuesInput>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issuePriority?: InputMaybe<IssuePriorityCreateNestedOneWithoutIssuesInput>;
  issueStatus?: InputMaybe<IssueStatusCreateNestedOneWithoutIssuesInput>;
  issueType: Scalars['String']['input'];
  parentIssue?: InputMaybe<IssueCreateNestedOneWithoutSubIssuesInput>;
  priority?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectCreateNestedOneWithoutIssuesInput>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  subIssues?: InputMaybe<IssueCreateNestedManyWithoutParentIssueInput>;
  subtask?: InputMaybe<SubtaskCreateNestedOneWithoutIssuesInput>;
  task?: InputMaybe<TaskCreateNestedOneWithoutIssuesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateWithoutParentIssueInput = {
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedIssuesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycle?: InputMaybe<CycleCreateNestedOneWithoutIssuesInput>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issuePriority?: InputMaybe<IssuePriorityCreateNestedOneWithoutIssuesInput>;
  issueStatus?: InputMaybe<IssueStatusCreateNestedOneWithoutIssuesInput>;
  issueType: Scalars['String']['input'];
  labels?: InputMaybe<IssueLabelCreateNestedManyWithoutIssueInput>;
  priority?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectCreateNestedOneWithoutIssuesInput>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  subIssues?: InputMaybe<IssueCreateNestedManyWithoutParentIssueInput>;
  subtask?: InputMaybe<SubtaskCreateNestedOneWithoutIssuesInput>;
  task?: InputMaybe<TaskCreateNestedOneWithoutIssuesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateWithoutProjectInput = {
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedIssuesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycle?: InputMaybe<CycleCreateNestedOneWithoutIssuesInput>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issuePriority?: InputMaybe<IssuePriorityCreateNestedOneWithoutIssuesInput>;
  issueStatus?: InputMaybe<IssueStatusCreateNestedOneWithoutIssuesInput>;
  issueType: Scalars['String']['input'];
  labels?: InputMaybe<IssueLabelCreateNestedManyWithoutIssueInput>;
  parentIssue?: InputMaybe<IssueCreateNestedOneWithoutSubIssuesInput>;
  priority?: InputMaybe<Scalars['String']['input']>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  subIssues?: InputMaybe<IssueCreateNestedManyWithoutParentIssueInput>;
  subtask?: InputMaybe<SubtaskCreateNestedOneWithoutIssuesInput>;
  task?: InputMaybe<TaskCreateNestedOneWithoutIssuesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateWithoutSubIssuesInput = {
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedIssuesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycle?: InputMaybe<CycleCreateNestedOneWithoutIssuesInput>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issuePriority?: InputMaybe<IssuePriorityCreateNestedOneWithoutIssuesInput>;
  issueStatus?: InputMaybe<IssueStatusCreateNestedOneWithoutIssuesInput>;
  issueType: Scalars['String']['input'];
  labels?: InputMaybe<IssueLabelCreateNestedManyWithoutIssueInput>;
  parentIssue?: InputMaybe<IssueCreateNestedOneWithoutSubIssuesInput>;
  priority?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectCreateNestedOneWithoutIssuesInput>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  subtask?: InputMaybe<SubtaskCreateNestedOneWithoutIssuesInput>;
  task?: InputMaybe<TaskCreateNestedOneWithoutIssuesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateWithoutSubtaskInput = {
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedIssuesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycle?: InputMaybe<CycleCreateNestedOneWithoutIssuesInput>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issuePriority?: InputMaybe<IssuePriorityCreateNestedOneWithoutIssuesInput>;
  issueStatus?: InputMaybe<IssueStatusCreateNestedOneWithoutIssuesInput>;
  issueType: Scalars['String']['input'];
  labels?: InputMaybe<IssueLabelCreateNestedManyWithoutIssueInput>;
  parentIssue?: InputMaybe<IssueCreateNestedOneWithoutSubIssuesInput>;
  priority?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectCreateNestedOneWithoutIssuesInput>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  subIssues?: InputMaybe<IssueCreateNestedManyWithoutParentIssueInput>;
  task?: InputMaybe<TaskCreateNestedOneWithoutIssuesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueCreateWithoutTaskInput = {
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedIssuesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycle?: InputMaybe<CycleCreateNestedOneWithoutIssuesInput>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  issuePriority?: InputMaybe<IssuePriorityCreateNestedOneWithoutIssuesInput>;
  issueStatus?: InputMaybe<IssueStatusCreateNestedOneWithoutIssuesInput>;
  issueType: Scalars['String']['input'];
  labels?: InputMaybe<IssueLabelCreateNestedManyWithoutIssueInput>;
  parentIssue?: InputMaybe<IssueCreateNestedOneWithoutSubIssuesInput>;
  priority?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectCreateNestedOneWithoutIssuesInput>;
  rank: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  subIssues?: InputMaybe<IssueCreateNestedManyWithoutParentIssueInput>;
  subtask?: InputMaybe<SubtaskCreateNestedOneWithoutIssuesInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueGroupBy = {
  __typename?: 'IssueGroupBy';
  _avg?: Maybe<IssueAvgAggregate>;
  _count?: Maybe<IssueCountAggregate>;
  _max?: Maybe<IssueMaxAggregate>;
  _min?: Maybe<IssueMinAggregate>;
  _sum?: Maybe<IssueSumAggregate>;
  assigneeId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  cycleId?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  identifier: Scalars['String']['output'];
  issueType: Scalars['String']['output'];
  parentIssueId?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['String']['output']>;
  priorityId?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  rank: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  statusId?: Maybe<Scalars['String']['output']>;
  subtaskId?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type IssueLabel = {
  __typename?: 'IssueLabel';
  id: Scalars['String']['output'];
  issue: Issue;
  issueId: Scalars['String']['output'];
  label: Label;
  labelId: Scalars['String']['output'];
};

export type IssueLabelCountAggregate = {
  __typename?: 'IssueLabelCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  issueId: Scalars['Int']['output'];
  labelId: Scalars['Int']['output'];
};

export type IssueLabelCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  issueId?: InputMaybe<SortOrder>;
  labelId?: InputMaybe<SortOrder>;
};

export type IssueLabelCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  issue: IssueCreateNestedOneWithoutLabelsInput;
  label: LabelCreateNestedOneWithoutIssuesInput;
};

export type IssueLabelCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
};

export type IssueLabelCreateManyIssueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  labelId: Scalars['String']['input'];
};

export type IssueLabelCreateManyIssueInputEnvelope = {
  data: Array<IssueLabelCreateManyIssueInput>;
};

export type IssueLabelCreateManyLabelInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  issueId: Scalars['String']['input'];
};

export type IssueLabelCreateManyLabelInputEnvelope = {
  data: Array<IssueLabelCreateManyLabelInput>;
};

export type IssueLabelCreateNestedManyWithoutIssueInput = {
  connect?: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueLabelCreateOrConnectWithoutIssueInput>>;
  create?: InputMaybe<Array<IssueLabelCreateWithoutIssueInput>>;
  createMany?: InputMaybe<IssueLabelCreateManyIssueInputEnvelope>;
};

export type IssueLabelCreateNestedManyWithoutLabelInput = {
  connect?: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueLabelCreateOrConnectWithoutLabelInput>>;
  create?: InputMaybe<Array<IssueLabelCreateWithoutLabelInput>>;
  createMany?: InputMaybe<IssueLabelCreateManyLabelInputEnvelope>;
};

export type IssueLabelCreateOrConnectWithoutIssueInput = {
  create: IssueLabelCreateWithoutIssueInput;
  where: IssueLabelWhereUniqueInput;
};

export type IssueLabelCreateOrConnectWithoutLabelInput = {
  create: IssueLabelCreateWithoutLabelInput;
  where: IssueLabelWhereUniqueInput;
};

export type IssueLabelCreateWithoutIssueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  label: LabelCreateNestedOneWithoutIssuesInput;
};

export type IssueLabelCreateWithoutLabelInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  issue: IssueCreateNestedOneWithoutLabelsInput;
};

export type IssueLabelGroupBy = {
  __typename?: 'IssueLabelGroupBy';
  _count?: Maybe<IssueLabelCountAggregate>;
  _max?: Maybe<IssueLabelMaxAggregate>;
  _min?: Maybe<IssueLabelMinAggregate>;
  id: Scalars['String']['output'];
  issueId: Scalars['String']['output'];
  labelId: Scalars['String']['output'];
};

export type IssueLabelIssueIdLabelIdCompoundUniqueInput = {
  issueId: Scalars['String']['input'];
  labelId: Scalars['String']['input'];
};

export type IssueLabelListRelationFilter = {
  every?: InputMaybe<IssueLabelWhereInput>;
  none?: InputMaybe<IssueLabelWhereInput>;
  some?: InputMaybe<IssueLabelWhereInput>;
};

export type IssueLabelMaxAggregate = {
  __typename?: 'IssueLabelMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  issueId?: Maybe<Scalars['String']['output']>;
  labelId?: Maybe<Scalars['String']['output']>;
};

export type IssueLabelMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  issueId?: InputMaybe<SortOrder>;
  labelId?: InputMaybe<SortOrder>;
};

export type IssueLabelMinAggregate = {
  __typename?: 'IssueLabelMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  issueId?: Maybe<Scalars['String']['output']>;
  labelId?: Maybe<Scalars['String']['output']>;
};

export type IssueLabelMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  issueId?: InputMaybe<SortOrder>;
  labelId?: InputMaybe<SortOrder>;
};

export type IssueLabelOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type IssueLabelOrderByWithAggregationInput = {
  _count?: InputMaybe<IssueLabelCountOrderByAggregateInput>;
  _max?: InputMaybe<IssueLabelMaxOrderByAggregateInput>;
  _min?: InputMaybe<IssueLabelMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  issueId?: InputMaybe<SortOrder>;
  labelId?: InputMaybe<SortOrder>;
};

export type IssueLabelOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  issue?: InputMaybe<IssueOrderByWithRelationInput>;
  issueId?: InputMaybe<SortOrder>;
  label?: InputMaybe<LabelOrderByWithRelationInput>;
  labelId?: InputMaybe<SortOrder>;
};

export enum IssueLabelScalarFieldEnum {
  Id = 'id',
  IssueId = 'issueId',
  LabelId = 'labelId'
}

export type IssueLabelScalarWhereInput = {
  AND?: InputMaybe<Array<IssueLabelScalarWhereInput>>;
  NOT?: InputMaybe<Array<IssueLabelScalarWhereInput>>;
  OR?: InputMaybe<Array<IssueLabelScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  issueId?: InputMaybe<StringFilter>;
  labelId?: InputMaybe<StringFilter>;
};

export type IssueLabelScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<IssueLabelScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<IssueLabelScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<IssueLabelScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  issueId?: InputMaybe<StringWithAggregatesFilter>;
  labelId?: InputMaybe<StringWithAggregatesFilter>;
};

export type IssueLabelUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  issue?: InputMaybe<IssueUpdateOneRequiredWithoutLabelsNestedInput>;
  label?: InputMaybe<LabelUpdateOneRequiredWithoutIssuesNestedInput>;
};

export type IssueLabelUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type IssueLabelUpdateManyWithWhereWithoutIssueInput = {
  data: IssueLabelUpdateManyMutationInput;
  where: IssueLabelScalarWhereInput;
};

export type IssueLabelUpdateManyWithWhereWithoutLabelInput = {
  data: IssueLabelUpdateManyMutationInput;
  where: IssueLabelScalarWhereInput;
};

export type IssueLabelUpdateManyWithoutIssueNestedInput = {
  connect?: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueLabelCreateOrConnectWithoutIssueInput>>;
  create?: InputMaybe<Array<IssueLabelCreateWithoutIssueInput>>;
  createMany?: InputMaybe<IssueLabelCreateManyIssueInputEnvelope>;
  delete?: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IssueLabelScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  set?: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  update?: InputMaybe<Array<IssueLabelUpdateWithWhereUniqueWithoutIssueInput>>;
  updateMany?: InputMaybe<Array<IssueLabelUpdateManyWithWhereWithoutIssueInput>>;
  upsert?: InputMaybe<Array<IssueLabelUpsertWithWhereUniqueWithoutIssueInput>>;
};

export type IssueLabelUpdateManyWithoutLabelNestedInput = {
  connect?: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueLabelCreateOrConnectWithoutLabelInput>>;
  create?: InputMaybe<Array<IssueLabelCreateWithoutLabelInput>>;
  createMany?: InputMaybe<IssueLabelCreateManyLabelInputEnvelope>;
  delete?: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IssueLabelScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  set?: InputMaybe<Array<IssueLabelWhereUniqueInput>>;
  update?: InputMaybe<Array<IssueLabelUpdateWithWhereUniqueWithoutLabelInput>>;
  updateMany?: InputMaybe<Array<IssueLabelUpdateManyWithWhereWithoutLabelInput>>;
  upsert?: InputMaybe<Array<IssueLabelUpsertWithWhereUniqueWithoutLabelInput>>;
};

export type IssueLabelUpdateWithWhereUniqueWithoutIssueInput = {
  data: IssueLabelUpdateWithoutIssueInput;
  where: IssueLabelWhereUniqueInput;
};

export type IssueLabelUpdateWithWhereUniqueWithoutLabelInput = {
  data: IssueLabelUpdateWithoutLabelInput;
  where: IssueLabelWhereUniqueInput;
};

export type IssueLabelUpdateWithoutIssueInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  label?: InputMaybe<LabelUpdateOneRequiredWithoutIssuesNestedInput>;
};

export type IssueLabelUpdateWithoutLabelInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  issue?: InputMaybe<IssueUpdateOneRequiredWithoutLabelsNestedInput>;
};

export type IssueLabelUpsertWithWhereUniqueWithoutIssueInput = {
  create: IssueLabelCreateWithoutIssueInput;
  update: IssueLabelUpdateWithoutIssueInput;
  where: IssueLabelWhereUniqueInput;
};

export type IssueLabelUpsertWithWhereUniqueWithoutLabelInput = {
  create: IssueLabelCreateWithoutLabelInput;
  update: IssueLabelUpdateWithoutLabelInput;
  where: IssueLabelWhereUniqueInput;
};

export type IssueLabelWhereInput = {
  AND?: InputMaybe<Array<IssueLabelWhereInput>>;
  NOT?: InputMaybe<Array<IssueLabelWhereInput>>;
  OR?: InputMaybe<Array<IssueLabelWhereInput>>;
  id?: InputMaybe<StringFilter>;
  issue?: InputMaybe<IssueRelationFilter>;
  issueId?: InputMaybe<StringFilter>;
  label?: InputMaybe<LabelRelationFilter>;
  labelId?: InputMaybe<StringFilter>;
};

export type IssueLabelWhereUniqueInput = {
  AND?: InputMaybe<Array<IssueLabelWhereInput>>;
  NOT?: InputMaybe<Array<IssueLabelWhereInput>>;
  OR?: InputMaybe<Array<IssueLabelWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  issue?: InputMaybe<IssueRelationFilter>;
  issueId?: InputMaybe<StringFilter>;
  issueId_labelId?: InputMaybe<IssueLabelIssueIdLabelIdCompoundUniqueInput>;
  label?: InputMaybe<LabelRelationFilter>;
  labelId?: InputMaybe<StringFilter>;
};

export type IssueListRelationFilter = {
  every?: InputMaybe<IssueWhereInput>;
  none?: InputMaybe<IssueWhereInput>;
  some?: InputMaybe<IssueWhereInput>;
};

export type IssueMaxAggregate = {
  __typename?: 'IssueMaxAggregate';
  assigneeId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cycleId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  issueType?: Maybe<Scalars['String']['output']>;
  parentIssueId?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['String']['output']>;
  priorityId?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  statusId?: Maybe<Scalars['String']['output']>;
  subtaskId?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IssueMaxOrderByAggregateInput = {
  assigneeId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  cycleId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  issueType?: InputMaybe<SortOrder>;
  parentIssueId?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  priorityId?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  statusId?: InputMaybe<SortOrder>;
  subtaskId?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IssueMinAggregate = {
  __typename?: 'IssueMinAggregate';
  assigneeId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cycleId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  issueType?: Maybe<Scalars['String']['output']>;
  parentIssueId?: Maybe<Scalars['String']['output']>;
  priority?: Maybe<Scalars['String']['output']>;
  priorityId?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  rank?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  statusId?: Maybe<Scalars['String']['output']>;
  subtaskId?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IssueMinOrderByAggregateInput = {
  assigneeId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  cycleId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  issueType?: InputMaybe<SortOrder>;
  parentIssueId?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  priorityId?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  statusId?: InputMaybe<SortOrder>;
  subtaskId?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IssueNullableRelationFilter = {
  is?: InputMaybe<IssueWhereInput>;
  isNot?: InputMaybe<IssueWhereInput>;
};

export type IssueOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type IssueOrderByWithAggregationInput = {
  _avg?: InputMaybe<IssueAvgOrderByAggregateInput>;
  _count?: InputMaybe<IssueCountOrderByAggregateInput>;
  _max?: InputMaybe<IssueMaxOrderByAggregateInput>;
  _min?: InputMaybe<IssueMinOrderByAggregateInput>;
  _sum?: InputMaybe<IssueSumOrderByAggregateInput>;
  assigneeId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  cycleId?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  issueType?: InputMaybe<SortOrder>;
  parentIssueId?: InputMaybe<SortOrderInput>;
  priority?: InputMaybe<SortOrderInput>;
  priorityId?: InputMaybe<SortOrderInput>;
  projectId?: InputMaybe<SortOrderInput>;
  rank?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrderInput>;
  statusId?: InputMaybe<SortOrderInput>;
  subtaskId?: InputMaybe<SortOrderInput>;
  taskId?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IssueOrderByWithRelationInput = {
  assignee?: InputMaybe<UserOrderByWithRelationInput>;
  assigneeId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  cycle?: InputMaybe<CycleOrderByWithRelationInput>;
  cycleId?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  issuePriority?: InputMaybe<IssuePriorityOrderByWithRelationInput>;
  issueStatus?: InputMaybe<IssueStatusOrderByWithRelationInput>;
  issueType?: InputMaybe<SortOrder>;
  labels?: InputMaybe<IssueLabelOrderByRelationAggregateInput>;
  parentIssue?: InputMaybe<IssueOrderByWithRelationInput>;
  parentIssueId?: InputMaybe<SortOrderInput>;
  priority?: InputMaybe<SortOrderInput>;
  priorityId?: InputMaybe<SortOrderInput>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrderInput>;
  rank?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrderInput>;
  statusId?: InputMaybe<SortOrderInput>;
  subIssues?: InputMaybe<IssueOrderByRelationAggregateInput>;
  subtask?: InputMaybe<SubtaskOrderByWithRelationInput>;
  subtaskId?: InputMaybe<SortOrderInput>;
  task?: InputMaybe<TaskOrderByWithRelationInput>;
  taskId?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IssuePriority = {
  __typename?: 'IssuePriority';
  _count?: Maybe<IssuePriorityCount>;
  createdAt: Scalars['DateTime']['output'];
  iconName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  issues: Array<Issue>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type IssuePriorityIssuesArgs = {
  cursor?: InputMaybe<IssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};

export type IssuePriorityAvgAggregate = {
  __typename?: 'IssuePriorityAvgAggregate';
  order?: Maybe<Scalars['Float']['output']>;
};

export type IssuePriorityAvgOrderByAggregateInput = {
  order?: InputMaybe<SortOrder>;
};

export type IssuePriorityCount = {
  __typename?: 'IssuePriorityCount';
  issues: Scalars['Int']['output'];
};


export type IssuePriorityCountIssuesArgs = {
  where?: InputMaybe<IssueWhereInput>;
};

export type IssuePriorityCountAggregate = {
  __typename?: 'IssuePriorityCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  iconName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type IssuePriorityCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  iconName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IssuePriorityCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  iconName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  issues?: InputMaybe<IssueCreateNestedManyWithoutIssuePriorityInput>;
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssuePriorityCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  iconName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssuePriorityCreateNestedOneWithoutIssuesInput = {
  connect?: InputMaybe<IssuePriorityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IssuePriorityCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<IssuePriorityCreateWithoutIssuesInput>;
};

export type IssuePriorityCreateOrConnectWithoutIssuesInput = {
  create: IssuePriorityCreateWithoutIssuesInput;
  where: IssuePriorityWhereUniqueInput;
};

export type IssuePriorityCreateWithoutIssuesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  iconName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssuePriorityGroupBy = {
  __typename?: 'IssuePriorityGroupBy';
  _avg?: Maybe<IssuePriorityAvgAggregate>;
  _count?: Maybe<IssuePriorityCountAggregate>;
  _max?: Maybe<IssuePriorityMaxAggregate>;
  _min?: Maybe<IssuePriorityMinAggregate>;
  _sum?: Maybe<IssuePrioritySumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  iconName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type IssuePriorityMaxAggregate = {
  __typename?: 'IssuePriorityMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IssuePriorityMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  iconName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IssuePriorityMinAggregate = {
  __typename?: 'IssuePriorityMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IssuePriorityMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  iconName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IssuePriorityNullableRelationFilter = {
  is?: InputMaybe<IssuePriorityWhereInput>;
  isNot?: InputMaybe<IssuePriorityWhereInput>;
};

export type IssuePriorityOrderByWithAggregationInput = {
  _avg?: InputMaybe<IssuePriorityAvgOrderByAggregateInput>;
  _count?: InputMaybe<IssuePriorityCountOrderByAggregateInput>;
  _max?: InputMaybe<IssuePriorityMaxOrderByAggregateInput>;
  _min?: InputMaybe<IssuePriorityMinOrderByAggregateInput>;
  _sum?: InputMaybe<IssuePrioritySumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  iconName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IssuePriorityOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  iconName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issues?: InputMaybe<IssueOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  order?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum IssuePriorityScalarFieldEnum {
  CreatedAt = 'createdAt',
  IconName = 'iconName',
  Id = 'id',
  Name = 'name',
  Order = 'order',
  UpdatedAt = 'updatedAt'
}

export type IssuePriorityScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<IssuePriorityScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<IssuePriorityScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<IssuePriorityScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  iconName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  order?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type IssuePrioritySumAggregate = {
  __typename?: 'IssuePrioritySumAggregate';
  order?: Maybe<Scalars['Int']['output']>;
};

export type IssuePrioritySumOrderByAggregateInput = {
  order?: InputMaybe<SortOrder>;
};

export type IssuePriorityUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  iconName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueUpdateManyWithoutIssuePriorityNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssuePriorityUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  iconName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssuePriorityUpdateOneWithoutIssuesNestedInput = {
  connect?: InputMaybe<IssuePriorityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IssuePriorityCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<IssuePriorityCreateWithoutIssuesInput>;
  delete?: InputMaybe<IssuePriorityWhereInput>;
  disconnect?: InputMaybe<IssuePriorityWhereInput>;
  update?: InputMaybe<IssuePriorityUpdateToOneWithWhereWithoutIssuesInput>;
  upsert?: InputMaybe<IssuePriorityUpsertWithoutIssuesInput>;
};

export type IssuePriorityUpdateToOneWithWhereWithoutIssuesInput = {
  data: IssuePriorityUpdateWithoutIssuesInput;
  where?: InputMaybe<IssuePriorityWhereInput>;
};

export type IssuePriorityUpdateWithoutIssuesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  iconName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  order?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssuePriorityUpsertWithoutIssuesInput = {
  create: IssuePriorityCreateWithoutIssuesInput;
  update: IssuePriorityUpdateWithoutIssuesInput;
  where?: InputMaybe<IssuePriorityWhereInput>;
};

export type IssuePriorityWhereInput = {
  AND?: InputMaybe<Array<IssuePriorityWhereInput>>;
  NOT?: InputMaybe<Array<IssuePriorityWhereInput>>;
  OR?: InputMaybe<Array<IssuePriorityWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  iconName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  issues?: InputMaybe<IssueListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IssuePriorityWhereUniqueInput = {
  AND?: InputMaybe<Array<IssuePriorityWhereInput>>;
  NOT?: InputMaybe<Array<IssuePriorityWhereInput>>;
  OR?: InputMaybe<Array<IssuePriorityWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  iconName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  issues?: InputMaybe<IssueListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IssueRelationFilter = {
  is?: InputMaybe<IssueWhereInput>;
  isNot?: InputMaybe<IssueWhereInput>;
};

export enum IssueScalarFieldEnum {
  AssigneeId = 'assigneeId',
  CreatedAt = 'createdAt',
  CycleId = 'cycleId',
  Description = 'description',
  DueDate = 'dueDate',
  Id = 'id',
  Identifier = 'identifier',
  IssueType = 'issueType',
  ParentIssueId = 'parentIssueId',
  Priority = 'priority',
  PriorityId = 'priorityId',
  ProjectId = 'projectId',
  Rank = 'rank',
  Status = 'status',
  StatusId = 'statusId',
  SubtaskId = 'subtaskId',
  TaskId = 'taskId',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type IssueScalarWhereInput = {
  AND?: InputMaybe<Array<IssueScalarWhereInput>>;
  NOT?: InputMaybe<Array<IssueScalarWhereInput>>;
  OR?: InputMaybe<Array<IssueScalarWhereInput>>;
  assigneeId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  cycleId?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringFilter>;
  dueDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  identifier?: InputMaybe<StringFilter>;
  issueType?: InputMaybe<StringFilter>;
  parentIssueId?: InputMaybe<StringNullableFilter>;
  priority?: InputMaybe<StringNullableFilter>;
  priorityId?: InputMaybe<StringNullableFilter>;
  projectId?: InputMaybe<StringNullableFilter>;
  rank?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
  statusId?: InputMaybe<StringNullableFilter>;
  subtaskId?: InputMaybe<StringNullableFilter>;
  taskId?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IssueScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<IssueScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<IssueScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<IssueScalarWhereWithAggregatesInput>>;
  assigneeId?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  cycleId?: InputMaybe<StringNullableWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  dueDate?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  identifier?: InputMaybe<StringWithAggregatesFilter>;
  issueType?: InputMaybe<StringWithAggregatesFilter>;
  parentIssueId?: InputMaybe<StringNullableWithAggregatesFilter>;
  priority?: InputMaybe<StringNullableWithAggregatesFilter>;
  priorityId?: InputMaybe<StringNullableWithAggregatesFilter>;
  projectId?: InputMaybe<StringNullableWithAggregatesFilter>;
  rank?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<StringNullableWithAggregatesFilter>;
  statusId?: InputMaybe<StringNullableWithAggregatesFilter>;
  subtaskId?: InputMaybe<StringNullableWithAggregatesFilter>;
  taskId?: InputMaybe<IntNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type IssueStats = {
  __typename?: 'IssueStats';
  completed: Scalars['Int']['output'];
  completionRate: Scalars['Int']['output'];
  inProgress: Scalars['Int']['output'];
  pending: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type IssueStatus = {
  __typename?: 'IssueStatus';
  _count?: Maybe<IssueStatusCount>;
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  iconName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  issues: Array<Issue>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type IssueStatusIssuesArgs = {
  cursor?: InputMaybe<IssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};

export type IssueStatusCount = {
  __typename?: 'IssueStatusCount';
  issues: Scalars['Int']['output'];
};


export type IssueStatusCountIssuesArgs = {
  where?: InputMaybe<IssueWhereInput>;
};

export type IssueStatusCountAggregate = {
  __typename?: 'IssueStatusCountAggregate';
  _all: Scalars['Int']['output'];
  color: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  iconName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type IssueStatusCountOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  iconName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IssueStatusCreateInput = {
  color: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  iconName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  issues?: InputMaybe<IssueCreateNestedManyWithoutIssueStatusInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueStatusCreateManyInput = {
  color: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  iconName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueStatusCreateNestedOneWithoutIssuesInput = {
  connect?: InputMaybe<IssueStatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IssueStatusCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<IssueStatusCreateWithoutIssuesInput>;
};

export type IssueStatusCreateOrConnectWithoutIssuesInput = {
  create: IssueStatusCreateWithoutIssuesInput;
  where: IssueStatusWhereUniqueInput;
};

export type IssueStatusCreateWithoutIssuesInput = {
  color: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  iconName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IssueStatusGroupBy = {
  __typename?: 'IssueStatusGroupBy';
  _count?: Maybe<IssueStatusCountAggregate>;
  _max?: Maybe<IssueStatusMaxAggregate>;
  _min?: Maybe<IssueStatusMinAggregate>;
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  iconName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type IssueStatusMaxAggregate = {
  __typename?: 'IssueStatusMaxAggregate';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IssueStatusMaxOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  iconName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IssueStatusMinAggregate = {
  __typename?: 'IssueStatusMinAggregate';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IssueStatusMinOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  iconName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IssueStatusNullableRelationFilter = {
  is?: InputMaybe<IssueStatusWhereInput>;
  isNot?: InputMaybe<IssueStatusWhereInput>;
};

export type IssueStatusOrderByWithAggregationInput = {
  _count?: InputMaybe<IssueStatusCountOrderByAggregateInput>;
  _max?: InputMaybe<IssueStatusMaxOrderByAggregateInput>;
  _min?: InputMaybe<IssueStatusMinOrderByAggregateInput>;
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  iconName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type IssueStatusOrderByWithRelationInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  iconName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  issues?: InputMaybe<IssueOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum IssueStatusScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  IconName = 'iconName',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type IssueStatusScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<IssueStatusScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<IssueStatusScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<IssueStatusScalarWhereWithAggregatesInput>>;
  color?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  iconName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type IssueStatusUpdateInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  iconName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueUpdateManyWithoutIssueStatusNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueStatusUpdateManyMutationInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  iconName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueStatusUpdateOneWithoutIssuesNestedInput = {
  connect?: InputMaybe<IssueStatusWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IssueStatusCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<IssueStatusCreateWithoutIssuesInput>;
  delete?: InputMaybe<IssueStatusWhereInput>;
  disconnect?: InputMaybe<IssueStatusWhereInput>;
  update?: InputMaybe<IssueStatusUpdateToOneWithWhereWithoutIssuesInput>;
  upsert?: InputMaybe<IssueStatusUpsertWithoutIssuesInput>;
};

export type IssueStatusUpdateToOneWithWhereWithoutIssuesInput = {
  data: IssueStatusUpdateWithoutIssuesInput;
  where?: InputMaybe<IssueStatusWhereInput>;
};

export type IssueStatusUpdateWithoutIssuesInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  iconName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueStatusUpsertWithoutIssuesInput = {
  create: IssueStatusCreateWithoutIssuesInput;
  update: IssueStatusUpdateWithoutIssuesInput;
  where?: InputMaybe<IssueStatusWhereInput>;
};

export type IssueStatusWhereInput = {
  AND?: InputMaybe<Array<IssueStatusWhereInput>>;
  NOT?: InputMaybe<Array<IssueStatusWhereInput>>;
  OR?: InputMaybe<Array<IssueStatusWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  iconName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  issues?: InputMaybe<IssueListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IssueStatusWhereUniqueInput = {
  AND?: InputMaybe<Array<IssueStatusWhereInput>>;
  NOT?: InputMaybe<Array<IssueStatusWhereInput>>;
  OR?: InputMaybe<Array<IssueStatusWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  iconName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  issues?: InputMaybe<IssueListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IssueSumAggregate = {
  __typename?: 'IssueSumAggregate';
  taskId?: Maybe<Scalars['Int']['output']>;
};

export type IssueSumOrderByAggregateInput = {
  taskId?: InputMaybe<SortOrder>;
};

export type IssueUpdateInput = {
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedIssuesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cycle?: InputMaybe<CycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  issuePriority?: InputMaybe<IssuePriorityUpdateOneWithoutIssuesNestedInput>;
  issueStatus?: InputMaybe<IssueStatusUpdateOneWithoutIssuesNestedInput>;
  issueType?: InputMaybe<StringFieldUpdateOperationsInput>;
  labels?: InputMaybe<IssueLabelUpdateManyWithoutIssueNestedInput>;
  parentIssue?: InputMaybe<IssueUpdateOneWithoutSubIssuesNestedInput>;
  priority?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutIssuesNestedInput>;
  rank?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subIssues?: InputMaybe<IssueUpdateManyWithoutParentIssueNestedInput>;
  subtask?: InputMaybe<SubtaskUpdateOneWithoutIssuesNestedInput>;
  task?: InputMaybe<TaskUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  issueType?: InputMaybe<StringFieldUpdateOperationsInput>;
  priority?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rank?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpdateManyWithWhereWithoutAssigneeInput = {
  data: IssueUpdateManyMutationInput;
  where: IssueScalarWhereInput;
};

export type IssueUpdateManyWithWhereWithoutCycleInput = {
  data: IssueUpdateManyMutationInput;
  where: IssueScalarWhereInput;
};

export type IssueUpdateManyWithWhereWithoutIssuePriorityInput = {
  data: IssueUpdateManyMutationInput;
  where: IssueScalarWhereInput;
};

export type IssueUpdateManyWithWhereWithoutIssueStatusInput = {
  data: IssueUpdateManyMutationInput;
  where: IssueScalarWhereInput;
};

export type IssueUpdateManyWithWhereWithoutParentIssueInput = {
  data: IssueUpdateManyMutationInput;
  where: IssueScalarWhereInput;
};

export type IssueUpdateManyWithWhereWithoutProjectInput = {
  data: IssueUpdateManyMutationInput;
  where: IssueScalarWhereInput;
};

export type IssueUpdateManyWithWhereWithoutSubtaskInput = {
  data: IssueUpdateManyMutationInput;
  where: IssueScalarWhereInput;
};

export type IssueUpdateManyWithWhereWithoutTaskInput = {
  data: IssueUpdateManyMutationInput;
  where: IssueScalarWhereInput;
};

export type IssueUpdateManyWithoutAssigneeNestedInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<IssueCreateManyAssigneeInputEnvelope>;
  delete?: InputMaybe<Array<IssueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IssueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  set?: InputMaybe<Array<IssueWhereUniqueInput>>;
  update?: InputMaybe<Array<IssueUpdateWithWhereUniqueWithoutAssigneeInput>>;
  updateMany?: InputMaybe<Array<IssueUpdateManyWithWhereWithoutAssigneeInput>>;
  upsert?: InputMaybe<Array<IssueUpsertWithWhereUniqueWithoutAssigneeInput>>;
};

export type IssueUpdateManyWithoutCycleNestedInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutCycleInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutCycleInput>>;
  createMany?: InputMaybe<IssueCreateManyCycleInputEnvelope>;
  delete?: InputMaybe<Array<IssueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IssueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  set?: InputMaybe<Array<IssueWhereUniqueInput>>;
  update?: InputMaybe<Array<IssueUpdateWithWhereUniqueWithoutCycleInput>>;
  updateMany?: InputMaybe<Array<IssueUpdateManyWithWhereWithoutCycleInput>>;
  upsert?: InputMaybe<Array<IssueUpsertWithWhereUniqueWithoutCycleInput>>;
};

export type IssueUpdateManyWithoutIssuePriorityNestedInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutIssuePriorityInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutIssuePriorityInput>>;
  createMany?: InputMaybe<IssueCreateManyIssuePriorityInputEnvelope>;
  delete?: InputMaybe<Array<IssueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IssueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  set?: InputMaybe<Array<IssueWhereUniqueInput>>;
  update?: InputMaybe<Array<IssueUpdateWithWhereUniqueWithoutIssuePriorityInput>>;
  updateMany?: InputMaybe<Array<IssueUpdateManyWithWhereWithoutIssuePriorityInput>>;
  upsert?: InputMaybe<Array<IssueUpsertWithWhereUniqueWithoutIssuePriorityInput>>;
};

export type IssueUpdateManyWithoutIssueStatusNestedInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutIssueStatusInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutIssueStatusInput>>;
  createMany?: InputMaybe<IssueCreateManyIssueStatusInputEnvelope>;
  delete?: InputMaybe<Array<IssueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IssueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  set?: InputMaybe<Array<IssueWhereUniqueInput>>;
  update?: InputMaybe<Array<IssueUpdateWithWhereUniqueWithoutIssueStatusInput>>;
  updateMany?: InputMaybe<Array<IssueUpdateManyWithWhereWithoutIssueStatusInput>>;
  upsert?: InputMaybe<Array<IssueUpsertWithWhereUniqueWithoutIssueStatusInput>>;
};

export type IssueUpdateManyWithoutParentIssueNestedInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutParentIssueInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutParentIssueInput>>;
  createMany?: InputMaybe<IssueCreateManyParentIssueInputEnvelope>;
  delete?: InputMaybe<Array<IssueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IssueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  set?: InputMaybe<Array<IssueWhereUniqueInput>>;
  update?: InputMaybe<Array<IssueUpdateWithWhereUniqueWithoutParentIssueInput>>;
  updateMany?: InputMaybe<Array<IssueUpdateManyWithWhereWithoutParentIssueInput>>;
  upsert?: InputMaybe<Array<IssueUpsertWithWhereUniqueWithoutParentIssueInput>>;
};

export type IssueUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutProjectInput>>;
  createMany?: InputMaybe<IssueCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<IssueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IssueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  set?: InputMaybe<Array<IssueWhereUniqueInput>>;
  update?: InputMaybe<Array<IssueUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<IssueUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<IssueUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type IssueUpdateManyWithoutSubtaskNestedInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutSubtaskInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutSubtaskInput>>;
  createMany?: InputMaybe<IssueCreateManySubtaskInputEnvelope>;
  delete?: InputMaybe<Array<IssueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IssueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  set?: InputMaybe<Array<IssueWhereUniqueInput>>;
  update?: InputMaybe<Array<IssueUpdateWithWhereUniqueWithoutSubtaskInput>>;
  updateMany?: InputMaybe<Array<IssueUpdateManyWithWhereWithoutSubtaskInput>>;
  upsert?: InputMaybe<Array<IssueUpsertWithWhereUniqueWithoutSubtaskInput>>;
};

export type IssueUpdateManyWithoutTaskNestedInput = {
  connect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<IssueCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<IssueCreateWithoutTaskInput>>;
  createMany?: InputMaybe<IssueCreateManyTaskInputEnvelope>;
  delete?: InputMaybe<Array<IssueWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<IssueScalarWhereInput>>;
  disconnect?: InputMaybe<Array<IssueWhereUniqueInput>>;
  set?: InputMaybe<Array<IssueWhereUniqueInput>>;
  update?: InputMaybe<Array<IssueUpdateWithWhereUniqueWithoutTaskInput>>;
  updateMany?: InputMaybe<Array<IssueUpdateManyWithWhereWithoutTaskInput>>;
  upsert?: InputMaybe<Array<IssueUpsertWithWhereUniqueWithoutTaskInput>>;
};

export type IssueUpdateOneRequiredWithoutLabelsNestedInput = {
  connect?: InputMaybe<IssueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IssueCreateOrConnectWithoutLabelsInput>;
  create?: InputMaybe<IssueCreateWithoutLabelsInput>;
  update?: InputMaybe<IssueUpdateToOneWithWhereWithoutLabelsInput>;
  upsert?: InputMaybe<IssueUpsertWithoutLabelsInput>;
};

export type IssueUpdateOneWithoutSubIssuesNestedInput = {
  connect?: InputMaybe<IssueWhereUniqueInput>;
  connectOrCreate?: InputMaybe<IssueCreateOrConnectWithoutSubIssuesInput>;
  create?: InputMaybe<IssueCreateWithoutSubIssuesInput>;
  delete?: InputMaybe<IssueWhereInput>;
  disconnect?: InputMaybe<IssueWhereInput>;
  update?: InputMaybe<IssueUpdateToOneWithWhereWithoutSubIssuesInput>;
  upsert?: InputMaybe<IssueUpsertWithoutSubIssuesInput>;
};

export type IssueUpdateToOneWithWhereWithoutLabelsInput = {
  data: IssueUpdateWithoutLabelsInput;
  where?: InputMaybe<IssueWhereInput>;
};

export type IssueUpdateToOneWithWhereWithoutSubIssuesInput = {
  data: IssueUpdateWithoutSubIssuesInput;
  where?: InputMaybe<IssueWhereInput>;
};

export type IssueUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: IssueUpdateWithoutAssigneeInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpdateWithWhereUniqueWithoutCycleInput = {
  data: IssueUpdateWithoutCycleInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpdateWithWhereUniqueWithoutIssuePriorityInput = {
  data: IssueUpdateWithoutIssuePriorityInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpdateWithWhereUniqueWithoutIssueStatusInput = {
  data: IssueUpdateWithoutIssueStatusInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpdateWithWhereUniqueWithoutParentIssueInput = {
  data: IssueUpdateWithoutParentIssueInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpdateWithWhereUniqueWithoutProjectInput = {
  data: IssueUpdateWithoutProjectInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpdateWithWhereUniqueWithoutSubtaskInput = {
  data: IssueUpdateWithoutSubtaskInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpdateWithWhereUniqueWithoutTaskInput = {
  data: IssueUpdateWithoutTaskInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpdateWithoutAssigneeInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cycle?: InputMaybe<CycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  issuePriority?: InputMaybe<IssuePriorityUpdateOneWithoutIssuesNestedInput>;
  issueStatus?: InputMaybe<IssueStatusUpdateOneWithoutIssuesNestedInput>;
  issueType?: InputMaybe<StringFieldUpdateOperationsInput>;
  labels?: InputMaybe<IssueLabelUpdateManyWithoutIssueNestedInput>;
  parentIssue?: InputMaybe<IssueUpdateOneWithoutSubIssuesNestedInput>;
  priority?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutIssuesNestedInput>;
  rank?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subIssues?: InputMaybe<IssueUpdateManyWithoutParentIssueNestedInput>;
  subtask?: InputMaybe<SubtaskUpdateOneWithoutIssuesNestedInput>;
  task?: InputMaybe<TaskUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpdateWithoutCycleInput = {
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedIssuesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  issuePriority?: InputMaybe<IssuePriorityUpdateOneWithoutIssuesNestedInput>;
  issueStatus?: InputMaybe<IssueStatusUpdateOneWithoutIssuesNestedInput>;
  issueType?: InputMaybe<StringFieldUpdateOperationsInput>;
  labels?: InputMaybe<IssueLabelUpdateManyWithoutIssueNestedInput>;
  parentIssue?: InputMaybe<IssueUpdateOneWithoutSubIssuesNestedInput>;
  priority?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutIssuesNestedInput>;
  rank?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subIssues?: InputMaybe<IssueUpdateManyWithoutParentIssueNestedInput>;
  subtask?: InputMaybe<SubtaskUpdateOneWithoutIssuesNestedInput>;
  task?: InputMaybe<TaskUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpdateWithoutIssuePriorityInput = {
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedIssuesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cycle?: InputMaybe<CycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  issueStatus?: InputMaybe<IssueStatusUpdateOneWithoutIssuesNestedInput>;
  issueType?: InputMaybe<StringFieldUpdateOperationsInput>;
  labels?: InputMaybe<IssueLabelUpdateManyWithoutIssueNestedInput>;
  parentIssue?: InputMaybe<IssueUpdateOneWithoutSubIssuesNestedInput>;
  priority?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutIssuesNestedInput>;
  rank?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subIssues?: InputMaybe<IssueUpdateManyWithoutParentIssueNestedInput>;
  subtask?: InputMaybe<SubtaskUpdateOneWithoutIssuesNestedInput>;
  task?: InputMaybe<TaskUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpdateWithoutIssueStatusInput = {
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedIssuesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cycle?: InputMaybe<CycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  issuePriority?: InputMaybe<IssuePriorityUpdateOneWithoutIssuesNestedInput>;
  issueType?: InputMaybe<StringFieldUpdateOperationsInput>;
  labels?: InputMaybe<IssueLabelUpdateManyWithoutIssueNestedInput>;
  parentIssue?: InputMaybe<IssueUpdateOneWithoutSubIssuesNestedInput>;
  priority?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutIssuesNestedInput>;
  rank?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subIssues?: InputMaybe<IssueUpdateManyWithoutParentIssueNestedInput>;
  subtask?: InputMaybe<SubtaskUpdateOneWithoutIssuesNestedInput>;
  task?: InputMaybe<TaskUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpdateWithoutLabelsInput = {
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedIssuesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cycle?: InputMaybe<CycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  issuePriority?: InputMaybe<IssuePriorityUpdateOneWithoutIssuesNestedInput>;
  issueStatus?: InputMaybe<IssueStatusUpdateOneWithoutIssuesNestedInput>;
  issueType?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentIssue?: InputMaybe<IssueUpdateOneWithoutSubIssuesNestedInput>;
  priority?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutIssuesNestedInput>;
  rank?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subIssues?: InputMaybe<IssueUpdateManyWithoutParentIssueNestedInput>;
  subtask?: InputMaybe<SubtaskUpdateOneWithoutIssuesNestedInput>;
  task?: InputMaybe<TaskUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpdateWithoutParentIssueInput = {
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedIssuesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cycle?: InputMaybe<CycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  issuePriority?: InputMaybe<IssuePriorityUpdateOneWithoutIssuesNestedInput>;
  issueStatus?: InputMaybe<IssueStatusUpdateOneWithoutIssuesNestedInput>;
  issueType?: InputMaybe<StringFieldUpdateOperationsInput>;
  labels?: InputMaybe<IssueLabelUpdateManyWithoutIssueNestedInput>;
  priority?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutIssuesNestedInput>;
  rank?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subIssues?: InputMaybe<IssueUpdateManyWithoutParentIssueNestedInput>;
  subtask?: InputMaybe<SubtaskUpdateOneWithoutIssuesNestedInput>;
  task?: InputMaybe<TaskUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpdateWithoutProjectInput = {
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedIssuesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cycle?: InputMaybe<CycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  issuePriority?: InputMaybe<IssuePriorityUpdateOneWithoutIssuesNestedInput>;
  issueStatus?: InputMaybe<IssueStatusUpdateOneWithoutIssuesNestedInput>;
  issueType?: InputMaybe<StringFieldUpdateOperationsInput>;
  labels?: InputMaybe<IssueLabelUpdateManyWithoutIssueNestedInput>;
  parentIssue?: InputMaybe<IssueUpdateOneWithoutSubIssuesNestedInput>;
  priority?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rank?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subIssues?: InputMaybe<IssueUpdateManyWithoutParentIssueNestedInput>;
  subtask?: InputMaybe<SubtaskUpdateOneWithoutIssuesNestedInput>;
  task?: InputMaybe<TaskUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpdateWithoutSubIssuesInput = {
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedIssuesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cycle?: InputMaybe<CycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  issuePriority?: InputMaybe<IssuePriorityUpdateOneWithoutIssuesNestedInput>;
  issueStatus?: InputMaybe<IssueStatusUpdateOneWithoutIssuesNestedInput>;
  issueType?: InputMaybe<StringFieldUpdateOperationsInput>;
  labels?: InputMaybe<IssueLabelUpdateManyWithoutIssueNestedInput>;
  parentIssue?: InputMaybe<IssueUpdateOneWithoutSubIssuesNestedInput>;
  priority?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutIssuesNestedInput>;
  rank?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subtask?: InputMaybe<SubtaskUpdateOneWithoutIssuesNestedInput>;
  task?: InputMaybe<TaskUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpdateWithoutSubtaskInput = {
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedIssuesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cycle?: InputMaybe<CycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  issuePriority?: InputMaybe<IssuePriorityUpdateOneWithoutIssuesNestedInput>;
  issueStatus?: InputMaybe<IssueStatusUpdateOneWithoutIssuesNestedInput>;
  issueType?: InputMaybe<StringFieldUpdateOperationsInput>;
  labels?: InputMaybe<IssueLabelUpdateManyWithoutIssueNestedInput>;
  parentIssue?: InputMaybe<IssueUpdateOneWithoutSubIssuesNestedInput>;
  priority?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutIssuesNestedInput>;
  rank?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subIssues?: InputMaybe<IssueUpdateManyWithoutParentIssueNestedInput>;
  task?: InputMaybe<TaskUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpdateWithoutTaskInput = {
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedIssuesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cycle?: InputMaybe<CycleUpdateOneWithoutIssuesNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  issuePriority?: InputMaybe<IssuePriorityUpdateOneWithoutIssuesNestedInput>;
  issueStatus?: InputMaybe<IssueStatusUpdateOneWithoutIssuesNestedInput>;
  issueType?: InputMaybe<StringFieldUpdateOperationsInput>;
  labels?: InputMaybe<IssueLabelUpdateManyWithoutIssueNestedInput>;
  parentIssue?: InputMaybe<IssueUpdateOneWithoutSubIssuesNestedInput>;
  priority?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneWithoutIssuesNestedInput>;
  rank?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  subIssues?: InputMaybe<IssueUpdateManyWithoutParentIssueNestedInput>;
  subtask?: InputMaybe<SubtaskUpdateOneWithoutIssuesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type IssueUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: IssueCreateWithoutAssigneeInput;
  update: IssueUpdateWithoutAssigneeInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpsertWithWhereUniqueWithoutCycleInput = {
  create: IssueCreateWithoutCycleInput;
  update: IssueUpdateWithoutCycleInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpsertWithWhereUniqueWithoutIssuePriorityInput = {
  create: IssueCreateWithoutIssuePriorityInput;
  update: IssueUpdateWithoutIssuePriorityInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpsertWithWhereUniqueWithoutIssueStatusInput = {
  create: IssueCreateWithoutIssueStatusInput;
  update: IssueUpdateWithoutIssueStatusInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpsertWithWhereUniqueWithoutParentIssueInput = {
  create: IssueCreateWithoutParentIssueInput;
  update: IssueUpdateWithoutParentIssueInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpsertWithWhereUniqueWithoutProjectInput = {
  create: IssueCreateWithoutProjectInput;
  update: IssueUpdateWithoutProjectInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpsertWithWhereUniqueWithoutSubtaskInput = {
  create: IssueCreateWithoutSubtaskInput;
  update: IssueUpdateWithoutSubtaskInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpsertWithWhereUniqueWithoutTaskInput = {
  create: IssueCreateWithoutTaskInput;
  update: IssueUpdateWithoutTaskInput;
  where: IssueWhereUniqueInput;
};

export type IssueUpsertWithoutLabelsInput = {
  create: IssueCreateWithoutLabelsInput;
  update: IssueUpdateWithoutLabelsInput;
  where?: InputMaybe<IssueWhereInput>;
};

export type IssueUpsertWithoutSubIssuesInput = {
  create: IssueCreateWithoutSubIssuesInput;
  update: IssueUpdateWithoutSubIssuesInput;
  where?: InputMaybe<IssueWhereInput>;
};

export type IssueWhereInput = {
  AND?: InputMaybe<Array<IssueWhereInput>>;
  NOT?: InputMaybe<Array<IssueWhereInput>>;
  OR?: InputMaybe<Array<IssueWhereInput>>;
  assignee?: InputMaybe<UserNullableRelationFilter>;
  assigneeId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  cycle?: InputMaybe<CycleNullableRelationFilter>;
  cycleId?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringFilter>;
  dueDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  identifier?: InputMaybe<StringFilter>;
  issuePriority?: InputMaybe<IssuePriorityNullableRelationFilter>;
  issueStatus?: InputMaybe<IssueStatusNullableRelationFilter>;
  issueType?: InputMaybe<StringFilter>;
  labels?: InputMaybe<IssueLabelListRelationFilter>;
  parentIssue?: InputMaybe<IssueNullableRelationFilter>;
  parentIssueId?: InputMaybe<StringNullableFilter>;
  priority?: InputMaybe<StringNullableFilter>;
  priorityId?: InputMaybe<StringNullableFilter>;
  project?: InputMaybe<ProjectNullableRelationFilter>;
  projectId?: InputMaybe<StringNullableFilter>;
  rank?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
  statusId?: InputMaybe<StringNullableFilter>;
  subIssues?: InputMaybe<IssueListRelationFilter>;
  subtask?: InputMaybe<SubtaskNullableRelationFilter>;
  subtaskId?: InputMaybe<StringNullableFilter>;
  task?: InputMaybe<TaskNullableRelationFilter>;
  taskId?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IssueWhereUniqueInput = {
  AND?: InputMaybe<Array<IssueWhereInput>>;
  NOT?: InputMaybe<Array<IssueWhereInput>>;
  OR?: InputMaybe<Array<IssueWhereInput>>;
  assignee?: InputMaybe<UserNullableRelationFilter>;
  assigneeId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  cycle?: InputMaybe<CycleNullableRelationFilter>;
  cycleId?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringFilter>;
  dueDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  issuePriority?: InputMaybe<IssuePriorityNullableRelationFilter>;
  issueStatus?: InputMaybe<IssueStatusNullableRelationFilter>;
  issueType?: InputMaybe<StringFilter>;
  labels?: InputMaybe<IssueLabelListRelationFilter>;
  parentIssue?: InputMaybe<IssueNullableRelationFilter>;
  parentIssueId?: InputMaybe<StringNullableFilter>;
  priority?: InputMaybe<StringNullableFilter>;
  priorityId?: InputMaybe<StringNullableFilter>;
  project?: InputMaybe<ProjectNullableRelationFilter>;
  projectId?: InputMaybe<StringNullableFilter>;
  rank?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringNullableFilter>;
  statusId?: InputMaybe<StringNullableFilter>;
  subIssues?: InputMaybe<IssueListRelationFilter>;
  subtask?: InputMaybe<SubtaskNullableRelationFilter>;
  subtaskId?: InputMaybe<StringNullableFilter>;
  task?: InputMaybe<TaskNullableRelationFilter>;
  taskId?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Label = {
  __typename?: 'Label';
  _count?: Maybe<LabelCount>;
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  issues: Array<IssueLabel>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type LabelIssuesArgs = {
  cursor?: InputMaybe<IssueLabelWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueLabelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueLabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueLabelWhereInput>;
};

export type LabelCount = {
  __typename?: 'LabelCount';
  issues: Scalars['Int']['output'];
};


export type LabelCountIssuesArgs = {
  where?: InputMaybe<IssueLabelWhereInput>;
};

export type LabelCountAggregate = {
  __typename?: 'LabelCountAggregate';
  _all: Scalars['Int']['output'];
  color: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type LabelCountOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LabelCreateInput = {
  color: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  issues?: InputMaybe<IssueLabelCreateNestedManyWithoutLabelInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LabelCreateManyInput = {
  color: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LabelCreateNestedOneWithoutIssuesInput = {
  connect?: InputMaybe<LabelWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LabelCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<LabelCreateWithoutIssuesInput>;
};

export type LabelCreateOrConnectWithoutIssuesInput = {
  create: LabelCreateWithoutIssuesInput;
  where: LabelWhereUniqueInput;
};

export type LabelCreateWithoutIssuesInput = {
  color: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LabelGroupBy = {
  __typename?: 'LabelGroupBy';
  _count?: Maybe<LabelCountAggregate>;
  _max?: Maybe<LabelMaxAggregate>;
  _min?: Maybe<LabelMinAggregate>;
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LabelMaxAggregate = {
  __typename?: 'LabelMaxAggregate';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LabelMaxOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LabelMinAggregate = {
  __typename?: 'LabelMinAggregate';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LabelMinOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LabelOrderByWithAggregationInput = {
  _count?: InputMaybe<LabelCountOrderByAggregateInput>;
  _max?: InputMaybe<LabelMaxOrderByAggregateInput>;
  _min?: InputMaybe<LabelMinOrderByAggregateInput>;
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LabelOrderByWithRelationInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  issues?: InputMaybe<IssueLabelOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LabelRelationFilter = {
  is?: InputMaybe<LabelWhereInput>;
  isNot?: InputMaybe<LabelWhereInput>;
};

export enum LabelScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type LabelScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LabelScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LabelScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LabelScalarWhereWithAggregatesInput>>;
  color?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type LabelUpdateInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueLabelUpdateManyWithoutLabelNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LabelUpdateManyMutationInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LabelUpdateOneRequiredWithoutIssuesNestedInput = {
  connect?: InputMaybe<LabelWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LabelCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<LabelCreateWithoutIssuesInput>;
  update?: InputMaybe<LabelUpdateToOneWithWhereWithoutIssuesInput>;
  upsert?: InputMaybe<LabelUpsertWithoutIssuesInput>;
};

export type LabelUpdateToOneWithWhereWithoutIssuesInput = {
  data: LabelUpdateWithoutIssuesInput;
  where?: InputMaybe<LabelWhereInput>;
};

export type LabelUpdateWithoutIssuesInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LabelUpsertWithoutIssuesInput = {
  create: LabelCreateWithoutIssuesInput;
  update: LabelUpdateWithoutIssuesInput;
  where?: InputMaybe<LabelWhereInput>;
};

export type LabelWhereInput = {
  AND?: InputMaybe<Array<LabelWhereInput>>;
  NOT?: InputMaybe<Array<LabelWhereInput>>;
  OR?: InputMaybe<Array<LabelWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  issues?: InputMaybe<IssueLabelListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LabelWhereUniqueInput = {
  AND?: InputMaybe<Array<LabelWhereInput>>;
  NOT?: InputMaybe<Array<LabelWhereInput>>;
  OR?: InputMaybe<Array<LabelWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  issues?: InputMaybe<IssueLabelListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAndReturnCycle: Array<CreateManyAndReturnCycle>;
  createManyAndReturnIssue: Array<CreateManyAndReturnIssue>;
  createManyAndReturnIssueLabel: Array<CreateManyAndReturnIssueLabel>;
  createManyAndReturnIssuePriority: Array<CreateManyAndReturnIssuePriority>;
  createManyAndReturnIssueStatus: Array<CreateManyAndReturnIssueStatus>;
  createManyAndReturnLabel: Array<CreateManyAndReturnLabel>;
  createManyAndReturnProject: Array<CreateManyAndReturnProject>;
  createManyAndReturnSubtask: Array<CreateManyAndReturnSubtask>;
  createManyAndReturnSyncConflict: Array<CreateManyAndReturnSyncConflict>;
  createManyAndReturnSyncOperation: Array<CreateManyAndReturnSyncOperation>;
  createManyAndReturnTask: Array<CreateManyAndReturnTask>;
  createManyAndReturnTaskDependency: Array<CreateManyAndReturnTaskDependency>;
  createManyAndReturnTaskMasterMetadata: Array<CreateManyAndReturnTaskMasterMetadata>;
  createManyAndReturnTeam: Array<CreateManyAndReturnTeam>;
  createManyAndReturnTeamMember: Array<CreateManyAndReturnTeamMember>;
  createManyAndReturnTeamProject: Array<CreateManyAndReturnTeamProject>;
  createManyAndReturnUser: Array<CreateManyAndReturnUser>;
  createManyCycle: AffectedRowsOutput;
  createManyIssue: AffectedRowsOutput;
  createManyIssueLabel: AffectedRowsOutput;
  createManyIssuePriority: AffectedRowsOutput;
  createManyIssueStatus: AffectedRowsOutput;
  createManyLabel: AffectedRowsOutput;
  createManyProject: AffectedRowsOutput;
  createManySubtask: AffectedRowsOutput;
  createManySyncConflict: AffectedRowsOutput;
  createManySyncOperation: AffectedRowsOutput;
  createManyTask: AffectedRowsOutput;
  createManyTaskDependency: AffectedRowsOutput;
  createManyTaskMasterMetadata: AffectedRowsOutput;
  createManyTeam: AffectedRowsOutput;
  createManyTeamMember: AffectedRowsOutput;
  createManyTeamProject: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneCycle: Cycle;
  createOneIssue: Issue;
  createOneIssueLabel: IssueLabel;
  createOneIssuePriority: IssuePriority;
  createOneIssueStatus: IssueStatus;
  createOneLabel: Label;
  createOneProject: Project;
  createOneSubtask: Subtask;
  createOneSyncConflict: SyncConflict;
  createOneSyncOperation: SyncOperation;
  createOneTask: Task;
  createOneTaskDependency: TaskDependency;
  createOneTaskMasterMetadata: TaskMasterMetadata;
  createOneTeam: Team;
  createOneTeamMember: TeamMember;
  createOneTeamProject: TeamProject;
  createOneUser: User;
  deleteManyCycle: AffectedRowsOutput;
  deleteManyIssue: AffectedRowsOutput;
  deleteManyIssueLabel: AffectedRowsOutput;
  deleteManyIssuePriority: AffectedRowsOutput;
  deleteManyIssueStatus: AffectedRowsOutput;
  deleteManyLabel: AffectedRowsOutput;
  deleteManyProject: AffectedRowsOutput;
  deleteManySubtask: AffectedRowsOutput;
  deleteManySyncConflict: AffectedRowsOutput;
  deleteManySyncOperation: AffectedRowsOutput;
  deleteManyTask: AffectedRowsOutput;
  deleteManyTaskDependency: AffectedRowsOutput;
  deleteManyTaskMasterMetadata: AffectedRowsOutput;
  deleteManyTeam: AffectedRowsOutput;
  deleteManyTeamMember: AffectedRowsOutput;
  deleteManyTeamProject: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneCycle?: Maybe<Cycle>;
  deleteOneIssue?: Maybe<Issue>;
  deleteOneIssueLabel?: Maybe<IssueLabel>;
  deleteOneIssuePriority?: Maybe<IssuePriority>;
  deleteOneIssueStatus?: Maybe<IssueStatus>;
  deleteOneLabel?: Maybe<Label>;
  deleteOneProject?: Maybe<Project>;
  deleteOneSubtask?: Maybe<Subtask>;
  deleteOneSyncConflict?: Maybe<SyncConflict>;
  deleteOneSyncOperation?: Maybe<SyncOperation>;
  deleteOneTask?: Maybe<Task>;
  deleteOneTaskDependency?: Maybe<TaskDependency>;
  deleteOneTaskMasterMetadata?: Maybe<TaskMasterMetadata>;
  deleteOneTeam?: Maybe<Team>;
  deleteOneTeamMember?: Maybe<TeamMember>;
  deleteOneTeamProject?: Maybe<TeamProject>;
  deleteOneUser?: Maybe<User>;
  updateManyCycle: AffectedRowsOutput;
  updateManyIssue: AffectedRowsOutput;
  updateManyIssueLabel: AffectedRowsOutput;
  updateManyIssuePriority: AffectedRowsOutput;
  updateManyIssueStatus: AffectedRowsOutput;
  updateManyLabel: AffectedRowsOutput;
  updateManyProject: AffectedRowsOutput;
  updateManySubtask: AffectedRowsOutput;
  updateManySyncConflict: AffectedRowsOutput;
  updateManySyncOperation: AffectedRowsOutput;
  updateManyTask: AffectedRowsOutput;
  updateManyTaskDependency: AffectedRowsOutput;
  updateManyTaskMasterMetadata: AffectedRowsOutput;
  updateManyTeam: AffectedRowsOutput;
  updateManyTeamMember: AffectedRowsOutput;
  updateManyTeamProject: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneCycle?: Maybe<Cycle>;
  updateOneIssue?: Maybe<Issue>;
  updateOneIssueLabel?: Maybe<IssueLabel>;
  updateOneIssuePriority?: Maybe<IssuePriority>;
  updateOneIssueStatus?: Maybe<IssueStatus>;
  updateOneLabel?: Maybe<Label>;
  updateOneProject?: Maybe<Project>;
  updateOneSubtask?: Maybe<Subtask>;
  updateOneSyncConflict?: Maybe<SyncConflict>;
  updateOneSyncOperation?: Maybe<SyncOperation>;
  updateOneTask?: Maybe<Task>;
  updateOneTaskDependency?: Maybe<TaskDependency>;
  updateOneTaskMasterMetadata?: Maybe<TaskMasterMetadata>;
  updateOneTeam?: Maybe<Team>;
  updateOneTeamMember?: Maybe<TeamMember>;
  updateOneTeamProject?: Maybe<TeamProject>;
  updateOneUser?: Maybe<User>;
  upsertOneCycle: Cycle;
  upsertOneIssue: Issue;
  upsertOneIssueLabel: IssueLabel;
  upsertOneIssuePriority: IssuePriority;
  upsertOneIssueStatus: IssueStatus;
  upsertOneLabel: Label;
  upsertOneProject: Project;
  upsertOneSubtask: Subtask;
  upsertOneSyncConflict: SyncConflict;
  upsertOneSyncOperation: SyncOperation;
  upsertOneTask: Task;
  upsertOneTaskDependency: TaskDependency;
  upsertOneTaskMasterMetadata: TaskMasterMetadata;
  upsertOneTeam: Team;
  upsertOneTeamMember: TeamMember;
  upsertOneTeamProject: TeamProject;
  upsertOneUser: User;
};


export type MutationCreateManyAndReturnCycleArgs = {
  data: Array<CycleCreateManyInput>;
};


export type MutationCreateManyAndReturnIssueArgs = {
  data: Array<IssueCreateManyInput>;
};


export type MutationCreateManyAndReturnIssueLabelArgs = {
  data: Array<IssueLabelCreateManyInput>;
};


export type MutationCreateManyAndReturnIssuePriorityArgs = {
  data: Array<IssuePriorityCreateManyInput>;
};


export type MutationCreateManyAndReturnIssueStatusArgs = {
  data: Array<IssueStatusCreateManyInput>;
};


export type MutationCreateManyAndReturnLabelArgs = {
  data: Array<LabelCreateManyInput>;
};


export type MutationCreateManyAndReturnProjectArgs = {
  data: Array<ProjectCreateManyInput>;
};


export type MutationCreateManyAndReturnSubtaskArgs = {
  data: Array<SubtaskCreateManyInput>;
};


export type MutationCreateManyAndReturnSyncConflictArgs = {
  data: Array<SyncConflictCreateManyInput>;
};


export type MutationCreateManyAndReturnSyncOperationArgs = {
  data: Array<SyncOperationCreateManyInput>;
};


export type MutationCreateManyAndReturnTaskArgs = {
  data: Array<TaskCreateManyInput>;
};


export type MutationCreateManyAndReturnTaskDependencyArgs = {
  data: Array<TaskDependencyCreateManyInput>;
};


export type MutationCreateManyAndReturnTaskMasterMetadataArgs = {
  data: Array<TaskMasterMetadataCreateManyInput>;
};


export type MutationCreateManyAndReturnTeamArgs = {
  data: Array<TeamCreateManyInput>;
};


export type MutationCreateManyAndReturnTeamMemberArgs = {
  data: Array<TeamMemberCreateManyInput>;
};


export type MutationCreateManyAndReturnTeamProjectArgs = {
  data: Array<TeamProjectCreateManyInput>;
};


export type MutationCreateManyAndReturnUserArgs = {
  data: Array<UserCreateManyInput>;
};


export type MutationCreateManyCycleArgs = {
  data: Array<CycleCreateManyInput>;
};


export type MutationCreateManyIssueArgs = {
  data: Array<IssueCreateManyInput>;
};


export type MutationCreateManyIssueLabelArgs = {
  data: Array<IssueLabelCreateManyInput>;
};


export type MutationCreateManyIssuePriorityArgs = {
  data: Array<IssuePriorityCreateManyInput>;
};


export type MutationCreateManyIssueStatusArgs = {
  data: Array<IssueStatusCreateManyInput>;
};


export type MutationCreateManyLabelArgs = {
  data: Array<LabelCreateManyInput>;
};


export type MutationCreateManyProjectArgs = {
  data: Array<ProjectCreateManyInput>;
};


export type MutationCreateManySubtaskArgs = {
  data: Array<SubtaskCreateManyInput>;
};


export type MutationCreateManySyncConflictArgs = {
  data: Array<SyncConflictCreateManyInput>;
};


export type MutationCreateManySyncOperationArgs = {
  data: Array<SyncOperationCreateManyInput>;
};


export type MutationCreateManyTaskArgs = {
  data: Array<TaskCreateManyInput>;
};


export type MutationCreateManyTaskDependencyArgs = {
  data: Array<TaskDependencyCreateManyInput>;
};


export type MutationCreateManyTaskMasterMetadataArgs = {
  data: Array<TaskMasterMetadataCreateManyInput>;
};


export type MutationCreateManyTeamArgs = {
  data: Array<TeamCreateManyInput>;
};


export type MutationCreateManyTeamMemberArgs = {
  data: Array<TeamMemberCreateManyInput>;
};


export type MutationCreateManyTeamProjectArgs = {
  data: Array<TeamProjectCreateManyInput>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
};


export type MutationCreateOneCycleArgs = {
  data: CycleCreateInput;
};


export type MutationCreateOneIssueArgs = {
  data: IssueCreateInput;
};


export type MutationCreateOneIssueLabelArgs = {
  data: IssueLabelCreateInput;
};


export type MutationCreateOneIssuePriorityArgs = {
  data: IssuePriorityCreateInput;
};


export type MutationCreateOneIssueStatusArgs = {
  data: IssueStatusCreateInput;
};


export type MutationCreateOneLabelArgs = {
  data: LabelCreateInput;
};


export type MutationCreateOneProjectArgs = {
  data: ProjectCreateInput;
};


export type MutationCreateOneSubtaskArgs = {
  data: SubtaskCreateInput;
};


export type MutationCreateOneSyncConflictArgs = {
  data: SyncConflictCreateInput;
};


export type MutationCreateOneSyncOperationArgs = {
  data: SyncOperationCreateInput;
};


export type MutationCreateOneTaskArgs = {
  data: TaskCreateInput;
};


export type MutationCreateOneTaskDependencyArgs = {
  data: TaskDependencyCreateInput;
};


export type MutationCreateOneTaskMasterMetadataArgs = {
  data: TaskMasterMetadataCreateInput;
};


export type MutationCreateOneTeamArgs = {
  data: TeamCreateInput;
};


export type MutationCreateOneTeamMemberArgs = {
  data: TeamMemberCreateInput;
};


export type MutationCreateOneTeamProjectArgs = {
  data: TeamProjectCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCycleArgs = {
  where?: InputMaybe<CycleWhereInput>;
};


export type MutationDeleteManyIssueArgs = {
  where?: InputMaybe<IssueWhereInput>;
};


export type MutationDeleteManyIssueLabelArgs = {
  where?: InputMaybe<IssueLabelWhereInput>;
};


export type MutationDeleteManyIssuePriorityArgs = {
  where?: InputMaybe<IssuePriorityWhereInput>;
};


export type MutationDeleteManyIssueStatusArgs = {
  where?: InputMaybe<IssueStatusWhereInput>;
};


export type MutationDeleteManyLabelArgs = {
  where?: InputMaybe<LabelWhereInput>;
};


export type MutationDeleteManyProjectArgs = {
  where?: InputMaybe<ProjectWhereInput>;
};


export type MutationDeleteManySubtaskArgs = {
  where?: InputMaybe<SubtaskWhereInput>;
};


export type MutationDeleteManySyncConflictArgs = {
  where?: InputMaybe<SyncConflictWhereInput>;
};


export type MutationDeleteManySyncOperationArgs = {
  where?: InputMaybe<SyncOperationWhereInput>;
};


export type MutationDeleteManyTaskArgs = {
  where?: InputMaybe<TaskWhereInput>;
};


export type MutationDeleteManyTaskDependencyArgs = {
  where?: InputMaybe<TaskDependencyWhereInput>;
};


export type MutationDeleteManyTaskMasterMetadataArgs = {
  where?: InputMaybe<TaskMasterMetadataWhereInput>;
};


export type MutationDeleteManyTeamArgs = {
  where?: InputMaybe<TeamWhereInput>;
};


export type MutationDeleteManyTeamMemberArgs = {
  where?: InputMaybe<TeamMemberWhereInput>;
};


export type MutationDeleteManyTeamProjectArgs = {
  where?: InputMaybe<TeamProjectWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneCycleArgs = {
  where: CycleWhereUniqueInput;
};


export type MutationDeleteOneIssueArgs = {
  where: IssueWhereUniqueInput;
};


export type MutationDeleteOneIssueLabelArgs = {
  where: IssueLabelWhereUniqueInput;
};


export type MutationDeleteOneIssuePriorityArgs = {
  where: IssuePriorityWhereUniqueInput;
};


export type MutationDeleteOneIssueStatusArgs = {
  where: IssueStatusWhereUniqueInput;
};


export type MutationDeleteOneLabelArgs = {
  where: LabelWhereUniqueInput;
};


export type MutationDeleteOneProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type MutationDeleteOneSubtaskArgs = {
  where: SubtaskWhereUniqueInput;
};


export type MutationDeleteOneSyncConflictArgs = {
  where: SyncConflictWhereUniqueInput;
};


export type MutationDeleteOneSyncOperationArgs = {
  where: SyncOperationWhereUniqueInput;
};


export type MutationDeleteOneTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type MutationDeleteOneTaskDependencyArgs = {
  where: TaskDependencyWhereUniqueInput;
};


export type MutationDeleteOneTaskMasterMetadataArgs = {
  where: TaskMasterMetadataWhereUniqueInput;
};


export type MutationDeleteOneTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type MutationDeleteOneTeamMemberArgs = {
  where: TeamMemberWhereUniqueInput;
};


export type MutationDeleteOneTeamProjectArgs = {
  where: TeamProjectWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyCycleArgs = {
  data: CycleUpdateManyMutationInput;
  where?: InputMaybe<CycleWhereInput>;
};


export type MutationUpdateManyIssueArgs = {
  data: IssueUpdateManyMutationInput;
  where?: InputMaybe<IssueWhereInput>;
};


export type MutationUpdateManyIssueLabelArgs = {
  data: IssueLabelUpdateManyMutationInput;
  where?: InputMaybe<IssueLabelWhereInput>;
};


export type MutationUpdateManyIssuePriorityArgs = {
  data: IssuePriorityUpdateManyMutationInput;
  where?: InputMaybe<IssuePriorityWhereInput>;
};


export type MutationUpdateManyIssueStatusArgs = {
  data: IssueStatusUpdateManyMutationInput;
  where?: InputMaybe<IssueStatusWhereInput>;
};


export type MutationUpdateManyLabelArgs = {
  data: LabelUpdateManyMutationInput;
  where?: InputMaybe<LabelWhereInput>;
};


export type MutationUpdateManyProjectArgs = {
  data: ProjectUpdateManyMutationInput;
  where?: InputMaybe<ProjectWhereInput>;
};


export type MutationUpdateManySubtaskArgs = {
  data: SubtaskUpdateManyMutationInput;
  where?: InputMaybe<SubtaskWhereInput>;
};


export type MutationUpdateManySyncConflictArgs = {
  data: SyncConflictUpdateManyMutationInput;
  where?: InputMaybe<SyncConflictWhereInput>;
};


export type MutationUpdateManySyncOperationArgs = {
  data: SyncOperationUpdateManyMutationInput;
  where?: InputMaybe<SyncOperationWhereInput>;
};


export type MutationUpdateManyTaskArgs = {
  data: TaskUpdateManyMutationInput;
  where?: InputMaybe<TaskWhereInput>;
};


export type MutationUpdateManyTaskDependencyArgs = {
  data: TaskDependencyUpdateManyMutationInput;
  where?: InputMaybe<TaskDependencyWhereInput>;
};


export type MutationUpdateManyTaskMasterMetadataArgs = {
  data: TaskMasterMetadataUpdateManyMutationInput;
  where?: InputMaybe<TaskMasterMetadataWhereInput>;
};


export type MutationUpdateManyTeamArgs = {
  data: TeamUpdateManyMutationInput;
  where?: InputMaybe<TeamWhereInput>;
};


export type MutationUpdateManyTeamMemberArgs = {
  data: TeamMemberUpdateManyMutationInput;
  where?: InputMaybe<TeamMemberWhereInput>;
};


export type MutationUpdateManyTeamProjectArgs = {
  data: TeamProjectUpdateManyMutationInput;
  where?: InputMaybe<TeamProjectWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneCycleArgs = {
  data: CycleUpdateInput;
  where: CycleWhereUniqueInput;
};


export type MutationUpdateOneIssueArgs = {
  data: IssueUpdateInput;
  where: IssueWhereUniqueInput;
};


export type MutationUpdateOneIssueLabelArgs = {
  data: IssueLabelUpdateInput;
  where: IssueLabelWhereUniqueInput;
};


export type MutationUpdateOneIssuePriorityArgs = {
  data: IssuePriorityUpdateInput;
  where: IssuePriorityWhereUniqueInput;
};


export type MutationUpdateOneIssueStatusArgs = {
  data: IssueStatusUpdateInput;
  where: IssueStatusWhereUniqueInput;
};


export type MutationUpdateOneLabelArgs = {
  data: LabelUpdateInput;
  where: LabelWhereUniqueInput;
};


export type MutationUpdateOneProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpdateOneSubtaskArgs = {
  data: SubtaskUpdateInput;
  where: SubtaskWhereUniqueInput;
};


export type MutationUpdateOneSyncConflictArgs = {
  data: SyncConflictUpdateInput;
  where: SyncConflictWhereUniqueInput;
};


export type MutationUpdateOneSyncOperationArgs = {
  data: SyncOperationUpdateInput;
  where: SyncOperationWhereUniqueInput;
};


export type MutationUpdateOneTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpdateOneTaskDependencyArgs = {
  data: TaskDependencyUpdateInput;
  where: TaskDependencyWhereUniqueInput;
};


export type MutationUpdateOneTaskMasterMetadataArgs = {
  data: TaskMasterMetadataUpdateInput;
  where: TaskMasterMetadataWhereUniqueInput;
};


export type MutationUpdateOneTeamArgs = {
  data: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpdateOneTeamMemberArgs = {
  data: TeamMemberUpdateInput;
  where: TeamMemberWhereUniqueInput;
};


export type MutationUpdateOneTeamProjectArgs = {
  data: TeamProjectUpdateInput;
  where: TeamProjectWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneCycleArgs = {
  create: CycleCreateInput;
  update: CycleUpdateInput;
  where: CycleWhereUniqueInput;
};


export type MutationUpsertOneIssueArgs = {
  create: IssueCreateInput;
  update: IssueUpdateInput;
  where: IssueWhereUniqueInput;
};


export type MutationUpsertOneIssueLabelArgs = {
  create: IssueLabelCreateInput;
  update: IssueLabelUpdateInput;
  where: IssueLabelWhereUniqueInput;
};


export type MutationUpsertOneIssuePriorityArgs = {
  create: IssuePriorityCreateInput;
  update: IssuePriorityUpdateInput;
  where: IssuePriorityWhereUniqueInput;
};


export type MutationUpsertOneIssueStatusArgs = {
  create: IssueStatusCreateInput;
  update: IssueStatusUpdateInput;
  where: IssueStatusWhereUniqueInput;
};


export type MutationUpsertOneLabelArgs = {
  create: LabelCreateInput;
  update: LabelUpdateInput;
  where: LabelWhereUniqueInput;
};


export type MutationUpsertOneProjectArgs = {
  create: ProjectCreateInput;
  update: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};


export type MutationUpsertOneSubtaskArgs = {
  create: SubtaskCreateInput;
  update: SubtaskUpdateInput;
  where: SubtaskWhereUniqueInput;
};


export type MutationUpsertOneSyncConflictArgs = {
  create: SyncConflictCreateInput;
  update: SyncConflictUpdateInput;
  where: SyncConflictWhereUniqueInput;
};


export type MutationUpsertOneSyncOperationArgs = {
  create: SyncOperationCreateInput;
  update: SyncOperationUpdateInput;
  where: SyncOperationWhereUniqueInput;
};


export type MutationUpsertOneTaskArgs = {
  create: TaskCreateInput;
  update: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpsertOneTaskDependencyArgs = {
  create: TaskDependencyCreateInput;
  update: TaskDependencyUpdateInput;
  where: TaskDependencyWhereUniqueInput;
};


export type MutationUpsertOneTaskMasterMetadataArgs = {
  create: TaskMasterMetadataCreateInput;
  update: TaskMasterMetadataUpdateInput;
  where: TaskMasterMetadataWhereUniqueInput;
};


export type MutationUpsertOneTeamArgs = {
  create: TeamCreateInput;
  update: TeamUpdateInput;
  where: TeamWhereUniqueInput;
};


export type MutationUpsertOneTeamMemberArgs = {
  create: TeamMemberCreateInput;
  update: TeamMemberUpdateInput;
  where: TeamMemberWhereUniqueInput;
};


export type MutationUpsertOneTeamProjectArgs = {
  create: TeamProjectCreateInput;
  update: TeamProjectUpdateInput;
  where: TeamProjectWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Project = {
  __typename?: 'Project';
  _count?: Maybe<ProjectCount>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  health: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  issues: Array<Issue>;
  lead?: Maybe<User>;
  leadId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  percentComplete: Scalars['Int']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  teams: Array<TeamProject>;
  updatedAt: Scalars['DateTime']['output'];
};


export type ProjectIssuesArgs = {
  cursor?: InputMaybe<IssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};


export type ProjectLeadArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type ProjectTeamsArgs = {
  cursor?: InputMaybe<TeamProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamProjectWhereInput>;
};

export type ProjectAvgAggregate = {
  __typename?: 'ProjectAvgAggregate';
  percentComplete?: Maybe<Scalars['Float']['output']>;
};

export type ProjectAvgOrderByAggregateInput = {
  percentComplete?: InputMaybe<SortOrder>;
};

export type ProjectCount = {
  __typename?: 'ProjectCount';
  issues: Scalars['Int']['output'];
  teams: Scalars['Int']['output'];
};


export type ProjectCountIssuesArgs = {
  where?: InputMaybe<IssueWhereInput>;
};


export type ProjectCountTeamsArgs = {
  where?: InputMaybe<TeamProjectWhereInput>;
};

export type ProjectCountAggregate = {
  __typename?: 'ProjectCountAggregate';
  _all: Scalars['Int']['output'];
  color: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  health: Scalars['Int']['output'];
  icon: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  identifier: Scalars['Int']['output'];
  leadId: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  percentComplete: Scalars['Int']['output'];
  startDate: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ProjectCountOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  health?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  leadId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  percentComplete?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectCreateInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  issues?: InputMaybe<IssueCreateNestedManyWithoutProjectInput>;
  lead?: InputMaybe<UserCreateNestedOneWithoutLedProjectsInput>;
  name: Scalars['String']['input'];
  percentComplete?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  teams?: InputMaybe<TeamProjectCreateNestedManyWithoutProjectInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectCreateManyInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  leadId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  percentComplete?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectCreateManyLeadInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  percentComplete?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectCreateManyLeadInputEnvelope = {
  data: Array<ProjectCreateManyLeadInput>;
};

export type ProjectCreateNestedManyWithoutLeadInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutLeadInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutLeadInput>>;
  createMany?: InputMaybe<ProjectCreateManyLeadInputEnvelope>;
};

export type ProjectCreateNestedOneWithoutIssuesInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<ProjectCreateWithoutIssuesInput>;
};

export type ProjectCreateNestedOneWithoutTeamsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutTeamsInput>;
  create?: InputMaybe<ProjectCreateWithoutTeamsInput>;
};

export type ProjectCreateOrConnectWithoutIssuesInput = {
  create: ProjectCreateWithoutIssuesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutLeadInput = {
  create: ProjectCreateWithoutLeadInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutTeamsInput = {
  create: ProjectCreateWithoutTeamsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutIssuesInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  lead?: InputMaybe<UserCreateNestedOneWithoutLedProjectsInput>;
  name: Scalars['String']['input'];
  percentComplete?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  teams?: InputMaybe<TeamProjectCreateNestedManyWithoutProjectInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectCreateWithoutLeadInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  issues?: InputMaybe<IssueCreateNestedManyWithoutProjectInput>;
  name: Scalars['String']['input'];
  percentComplete?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  teams?: InputMaybe<TeamProjectCreateNestedManyWithoutProjectInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectCreateWithoutTeamsInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  health?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  issues?: InputMaybe<IssueCreateNestedManyWithoutProjectInput>;
  lead?: InputMaybe<UserCreateNestedOneWithoutLedProjectsInput>;
  name: Scalars['String']['input'];
  percentComplete?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProjectGroupBy = {
  __typename?: 'ProjectGroupBy';
  _avg?: Maybe<ProjectAvgAggregate>;
  _count?: Maybe<ProjectCountAggregate>;
  _max?: Maybe<ProjectMaxAggregate>;
  _min?: Maybe<ProjectMinAggregate>;
  _sum?: Maybe<ProjectSumAggregate>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  health: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  leadId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  percentComplete: Scalars['Int']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProjectListRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  health?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  leadId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  percentComplete?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProjectMaxOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  health?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  leadId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  percentComplete?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  health?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  leadId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  percentComplete?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProjectMinOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  health?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  leadId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  percentComplete?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectNullableRelationFilter = {
  is?: InputMaybe<ProjectWhereInput>;
  isNot?: InputMaybe<ProjectWhereInput>;
};

export type ProjectOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProjectOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProjectAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProjectCountOrderByAggregateInput>;
  _max?: InputMaybe<ProjectMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProjectMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProjectSumOrderByAggregateInput>;
  color?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  health?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrderInput>;
  leadId?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  percentComplete?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectOrderByWithRelationInput = {
  color?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  health?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrderInput>;
  issues?: InputMaybe<IssueOrderByRelationAggregateInput>;
  lead?: InputMaybe<UserOrderByWithRelationInput>;
  leadId?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  percentComplete?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrderInput>;
  teams?: InputMaybe<TeamProjectOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectRelationFilter = {
  is?: InputMaybe<ProjectWhereInput>;
  isNot?: InputMaybe<ProjectWhereInput>;
};

export enum ProjectScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  Description = 'description',
  Health = 'health',
  Icon = 'icon',
  Id = 'id',
  Identifier = 'identifier',
  LeadId = 'leadId',
  Name = 'name',
  PercentComplete = 'percentComplete',
  StartDate = 'startDate',
  UpdatedAt = 'updatedAt'
}

export type ProjectScalarWhereInput = {
  AND?: InputMaybe<Array<ProjectScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProjectScalarWhereInput>>;
  OR?: InputMaybe<Array<ProjectScalarWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  health?: InputMaybe<StringFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  identifier?: InputMaybe<StringNullableFilter>;
  leadId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  percentComplete?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProjectScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProjectScalarWhereWithAggregatesInput>>;
  color?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  health?: InputMaybe<StringWithAggregatesFilter>;
  icon?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  identifier?: InputMaybe<StringNullableWithAggregatesFilter>;
  leadId?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  percentComplete?: InputMaybe<IntWithAggregatesFilter>;
  startDate?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ProjectSumAggregate = {
  __typename?: 'ProjectSumAggregate';
  percentComplete?: Maybe<Scalars['Int']['output']>;
};

export type ProjectSumOrderByAggregateInput = {
  percentComplete?: InputMaybe<SortOrder>;
};

export type ProjectUpdateInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  health?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueUpdateManyWithoutProjectNestedInput>;
  lead?: InputMaybe<UserUpdateOneWithoutLedProjectsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  teams?: InputMaybe<TeamProjectUpdateManyWithoutProjectNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyMutationInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  health?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyWithWhereWithoutLeadInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithoutLeadNestedInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutLeadInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutLeadInput>>;
  createMany?: InputMaybe<ProjectCreateManyLeadInputEnvelope>;
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProjectScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  update?: InputMaybe<Array<ProjectUpdateWithWhereUniqueWithoutLeadInput>>;
  updateMany?: InputMaybe<Array<ProjectUpdateManyWithWhereWithoutLeadInput>>;
  upsert?: InputMaybe<Array<ProjectUpsertWithWhereUniqueWithoutLeadInput>>;
};

export type ProjectUpdateOneRequiredWithoutTeamsNestedInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutTeamsInput>;
  create?: InputMaybe<ProjectCreateWithoutTeamsInput>;
  update?: InputMaybe<ProjectUpdateToOneWithWhereWithoutTeamsInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutTeamsInput>;
};

export type ProjectUpdateOneWithoutIssuesNestedInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<ProjectCreateWithoutIssuesInput>;
  delete?: InputMaybe<ProjectWhereInput>;
  disconnect?: InputMaybe<ProjectWhereInput>;
  update?: InputMaybe<ProjectUpdateToOneWithWhereWithoutIssuesInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutIssuesInput>;
};

export type ProjectUpdateToOneWithWhereWithoutIssuesInput = {
  data: ProjectUpdateWithoutIssuesInput;
  where?: InputMaybe<ProjectWhereInput>;
};

export type ProjectUpdateToOneWithWhereWithoutTeamsInput = {
  data: ProjectUpdateWithoutTeamsInput;
  where?: InputMaybe<ProjectWhereInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutLeadInput = {
  data: ProjectUpdateWithoutLeadInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutIssuesInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  health?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lead?: InputMaybe<UserUpdateOneWithoutLedProjectsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  teams?: InputMaybe<TeamProjectUpdateManyWithoutProjectNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutLeadInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  health?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueUpdateManyWithoutProjectNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  teams?: InputMaybe<TeamProjectUpdateManyWithoutProjectNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutTeamsInput = {
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  health?: InputMaybe<StringFieldUpdateOperationsInput>;
  icon?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  identifier?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueUpdateManyWithoutProjectNestedInput>;
  lead?: InputMaybe<UserUpdateOneWithoutLedProjectsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  percentComplete?: InputMaybe<IntFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpsertWithWhereUniqueWithoutLeadInput = {
  create: ProjectCreateWithoutLeadInput;
  update: ProjectUpdateWithoutLeadInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutIssuesInput = {
  create: ProjectCreateWithoutIssuesInput;
  update: ProjectUpdateWithoutIssuesInput;
  where?: InputMaybe<ProjectWhereInput>;
};

export type ProjectUpsertWithoutTeamsInput = {
  create: ProjectCreateWithoutTeamsInput;
  update: ProjectUpdateWithoutTeamsInput;
  where?: InputMaybe<ProjectWhereInput>;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  health?: InputMaybe<StringFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  identifier?: InputMaybe<StringNullableFilter>;
  issues?: InputMaybe<IssueListRelationFilter>;
  lead?: InputMaybe<UserNullableRelationFilter>;
  leadId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  percentComplete?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  teams?: InputMaybe<TeamProjectListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProjectWhereUniqueInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  color?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  health?: InputMaybe<StringFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<StringNullableFilter>;
  issues?: InputMaybe<IssueListRelationFilter>;
  lead?: InputMaybe<UserNullableRelationFilter>;
  leadId?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  percentComplete?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  teams?: InputMaybe<TeamProjectListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCycle: AggregateCycle;
  aggregateIssue: AggregateIssue;
  aggregateIssueLabel: AggregateIssueLabel;
  aggregateIssuePriority: AggregateIssuePriority;
  aggregateIssueStatus: AggregateIssueStatus;
  aggregateLabel: AggregateLabel;
  aggregateProject: AggregateProject;
  aggregateSubtask: AggregateSubtask;
  aggregateSyncConflict: AggregateSyncConflict;
  aggregateSyncOperation: AggregateSyncOperation;
  aggregateTask: AggregateTask;
  aggregateTaskDependency: AggregateTaskDependency;
  aggregateTaskMasterMetadata: AggregateTaskMasterMetadata;
  aggregateTeam: AggregateTeam;
  aggregateTeamMember: AggregateTeamMember;
  aggregateTeamProject: AggregateTeamProject;
  aggregateUser: AggregateUser;
  cycle?: Maybe<Cycle>;
  cycles: Array<Cycle>;
  findFirstCycle?: Maybe<Cycle>;
  findFirstCycleOrThrow?: Maybe<Cycle>;
  findFirstIssue?: Maybe<Issue>;
  findFirstIssueLabel?: Maybe<IssueLabel>;
  findFirstIssueLabelOrThrow?: Maybe<IssueLabel>;
  findFirstIssueOrThrow?: Maybe<Issue>;
  findFirstIssuePriority?: Maybe<IssuePriority>;
  findFirstIssuePriorityOrThrow?: Maybe<IssuePriority>;
  findFirstIssueStatus?: Maybe<IssueStatus>;
  findFirstIssueStatusOrThrow?: Maybe<IssueStatus>;
  findFirstLabel?: Maybe<Label>;
  findFirstLabelOrThrow?: Maybe<Label>;
  findFirstProject?: Maybe<Project>;
  findFirstProjectOrThrow?: Maybe<Project>;
  findFirstSubtask?: Maybe<Subtask>;
  findFirstSubtaskOrThrow?: Maybe<Subtask>;
  findFirstSyncConflict?: Maybe<SyncConflict>;
  findFirstSyncConflictOrThrow?: Maybe<SyncConflict>;
  findFirstSyncOperation?: Maybe<SyncOperation>;
  findFirstSyncOperationOrThrow?: Maybe<SyncOperation>;
  findFirstTask?: Maybe<Task>;
  findFirstTaskDependency?: Maybe<TaskDependency>;
  findFirstTaskDependencyOrThrow?: Maybe<TaskDependency>;
  findFirstTaskMasterMetadata?: Maybe<TaskMasterMetadata>;
  findFirstTaskMasterMetadataOrThrow?: Maybe<TaskMasterMetadata>;
  findFirstTaskOrThrow?: Maybe<Task>;
  findFirstTeam?: Maybe<Team>;
  findFirstTeamMember?: Maybe<TeamMember>;
  findFirstTeamMemberOrThrow?: Maybe<TeamMember>;
  findFirstTeamOrThrow?: Maybe<Team>;
  findFirstTeamProject?: Maybe<TeamProject>;
  findFirstTeamProjectOrThrow?: Maybe<TeamProject>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findManyTaskMasterMetadata: Array<TaskMasterMetadata>;
  findUniqueTaskMasterMetadata?: Maybe<TaskMasterMetadata>;
  findUniqueTaskMasterMetadataOrThrow?: Maybe<TaskMasterMetadata>;
  getCycle?: Maybe<Cycle>;
  getIssue?: Maybe<Issue>;
  getIssueLabel?: Maybe<IssueLabel>;
  getIssuePriority?: Maybe<IssuePriority>;
  getIssueStatus?: Maybe<IssueStatus>;
  getLabel?: Maybe<Label>;
  getProject?: Maybe<Project>;
  getSubtask?: Maybe<Subtask>;
  getSyncConflict?: Maybe<SyncConflict>;
  getSyncOperation?: Maybe<SyncOperation>;
  getTask?: Maybe<Task>;
  getTaskDependency?: Maybe<TaskDependency>;
  getTeam?: Maybe<Team>;
  getTeamMember?: Maybe<TeamMember>;
  getTeamProject?: Maybe<TeamProject>;
  getUser?: Maybe<User>;
  groupByCycle: Array<CycleGroupBy>;
  groupByIssue: Array<IssueGroupBy>;
  groupByIssueLabel: Array<IssueLabelGroupBy>;
  groupByIssuePriority: Array<IssuePriorityGroupBy>;
  groupByIssueStatus: Array<IssueStatusGroupBy>;
  groupByLabel: Array<LabelGroupBy>;
  groupByProject: Array<ProjectGroupBy>;
  groupBySubtask: Array<SubtaskGroupBy>;
  groupBySyncConflict: Array<SyncConflictGroupBy>;
  groupBySyncOperation: Array<SyncOperationGroupBy>;
  groupByTask: Array<TaskGroupBy>;
  groupByTaskDependency: Array<TaskDependencyGroupBy>;
  groupByTaskMasterMetadata: Array<TaskMasterMetadataGroupBy>;
  groupByTeam: Array<TeamGroupBy>;
  groupByTeamMember: Array<TeamMemberGroupBy>;
  groupByTeamProject: Array<TeamProjectGroupBy>;
  groupByUser: Array<UserGroupBy>;
  issue?: Maybe<Issue>;
  issueHealthCheck: Scalars['String']['output'];
  issueLabel?: Maybe<IssueLabel>;
  issueLabels: Array<IssueLabel>;
  issuePriorities: Array<IssuePriority>;
  issuePriority?: Maybe<IssuePriority>;
  issueStatus?: Maybe<IssueStatus>;
  issueStatuses: Array<IssueStatus>;
  issues: Array<Issue>;
  issuesStats: IssueStats;
  label?: Maybe<Label>;
  labels: Array<Label>;
  project?: Maybe<Project>;
  projects: Array<Project>;
  subtask?: Maybe<Subtask>;
  subtasks: Array<Subtask>;
  syncConflict?: Maybe<SyncConflict>;
  syncConflicts: Array<SyncConflict>;
  syncOperation?: Maybe<SyncOperation>;
  syncOperations: Array<SyncOperation>;
  task?: Maybe<Task>;
  taskDependencies: Array<TaskDependency>;
  taskDependency?: Maybe<TaskDependency>;
  tasks: Array<Task>;
  team?: Maybe<Team>;
  teamMember?: Maybe<TeamMember>;
  teamMembers: Array<TeamMember>;
  teamProject?: Maybe<TeamProject>;
  teamProjects: Array<TeamProject>;
  teams: Array<Team>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateCycleArgs = {
  cursor?: InputMaybe<CycleWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CycleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CycleWhereInput>;
};


export type QueryAggregateIssueArgs = {
  cursor?: InputMaybe<IssueWhereUniqueInput>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};


export type QueryAggregateIssueLabelArgs = {
  cursor?: InputMaybe<IssueLabelWhereUniqueInput>;
  orderBy?: InputMaybe<Array<IssueLabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueLabelWhereInput>;
};


export type QueryAggregateIssuePriorityArgs = {
  cursor?: InputMaybe<IssuePriorityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<IssuePriorityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssuePriorityWhereInput>;
};


export type QueryAggregateIssueStatusArgs = {
  cursor?: InputMaybe<IssueStatusWhereUniqueInput>;
  orderBy?: InputMaybe<Array<IssueStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueStatusWhereInput>;
};


export type QueryAggregateLabelArgs = {
  cursor?: InputMaybe<LabelWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LabelWhereInput>;
};


export type QueryAggregateProjectArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryAggregateSubtaskArgs = {
  cursor?: InputMaybe<SubtaskWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SubtaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubtaskWhereInput>;
};


export type QueryAggregateSyncConflictArgs = {
  cursor?: InputMaybe<SyncConflictWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SyncConflictOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SyncConflictWhereInput>;
};


export type QueryAggregateSyncOperationArgs = {
  cursor?: InputMaybe<SyncOperationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SyncOperationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SyncOperationWhereInput>;
};


export type QueryAggregateTaskArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryAggregateTaskDependencyArgs = {
  cursor?: InputMaybe<TaskDependencyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TaskDependencyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskDependencyWhereInput>;
};


export type QueryAggregateTaskMasterMetadataArgs = {
  cursor?: InputMaybe<TaskMasterMetadataWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TaskMasterMetadataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskMasterMetadataWhereInput>;
};


export type QueryAggregateTeamArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryAggregateTeamMemberArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TeamMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamMemberWhereInput>;
};


export type QueryAggregateTeamProjectArgs = {
  cursor?: InputMaybe<TeamProjectWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TeamProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamProjectWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryCycleArgs = {
  where: CycleWhereUniqueInput;
};


export type QueryCyclesArgs = {
  cursor?: InputMaybe<CycleWhereUniqueInput>;
  distinct?: InputMaybe<Array<CycleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CycleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CycleWhereInput>;
};


export type QueryFindFirstCycleArgs = {
  cursor?: InputMaybe<CycleWhereUniqueInput>;
  distinct?: InputMaybe<Array<CycleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CycleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CycleWhereInput>;
};


export type QueryFindFirstCycleOrThrowArgs = {
  cursor?: InputMaybe<CycleWhereUniqueInput>;
  distinct?: InputMaybe<Array<CycleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CycleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CycleWhereInput>;
};


export type QueryFindFirstIssueArgs = {
  cursor?: InputMaybe<IssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};


export type QueryFindFirstIssueLabelArgs = {
  cursor?: InputMaybe<IssueLabelWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueLabelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueLabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueLabelWhereInput>;
};


export type QueryFindFirstIssueLabelOrThrowArgs = {
  cursor?: InputMaybe<IssueLabelWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueLabelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueLabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueLabelWhereInput>;
};


export type QueryFindFirstIssueOrThrowArgs = {
  cursor?: InputMaybe<IssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};


export type QueryFindFirstIssuePriorityArgs = {
  cursor?: InputMaybe<IssuePriorityWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssuePriorityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssuePriorityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssuePriorityWhereInput>;
};


export type QueryFindFirstIssuePriorityOrThrowArgs = {
  cursor?: InputMaybe<IssuePriorityWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssuePriorityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssuePriorityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssuePriorityWhereInput>;
};


export type QueryFindFirstIssueStatusArgs = {
  cursor?: InputMaybe<IssueStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueStatusWhereInput>;
};


export type QueryFindFirstIssueStatusOrThrowArgs = {
  cursor?: InputMaybe<IssueStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueStatusWhereInput>;
};


export type QueryFindFirstLabelArgs = {
  cursor?: InputMaybe<LabelWhereUniqueInput>;
  distinct?: InputMaybe<Array<LabelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LabelWhereInput>;
};


export type QueryFindFirstLabelOrThrowArgs = {
  cursor?: InputMaybe<LabelWhereUniqueInput>;
  distinct?: InputMaybe<Array<LabelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LabelWhereInput>;
};


export type QueryFindFirstProjectArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryFindFirstProjectOrThrowArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryFindFirstSubtaskArgs = {
  cursor?: InputMaybe<SubtaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubtaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubtaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubtaskWhereInput>;
};


export type QueryFindFirstSubtaskOrThrowArgs = {
  cursor?: InputMaybe<SubtaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubtaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubtaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubtaskWhereInput>;
};


export type QueryFindFirstSyncConflictArgs = {
  cursor?: InputMaybe<SyncConflictWhereUniqueInput>;
  distinct?: InputMaybe<Array<SyncConflictScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SyncConflictOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SyncConflictWhereInput>;
};


export type QueryFindFirstSyncConflictOrThrowArgs = {
  cursor?: InputMaybe<SyncConflictWhereUniqueInput>;
  distinct?: InputMaybe<Array<SyncConflictScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SyncConflictOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SyncConflictWhereInput>;
};


export type QueryFindFirstSyncOperationArgs = {
  cursor?: InputMaybe<SyncOperationWhereUniqueInput>;
  distinct?: InputMaybe<Array<SyncOperationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SyncOperationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SyncOperationWhereInput>;
};


export type QueryFindFirstSyncOperationOrThrowArgs = {
  cursor?: InputMaybe<SyncOperationWhereUniqueInput>;
  distinct?: InputMaybe<Array<SyncOperationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SyncOperationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SyncOperationWhereInput>;
};


export type QueryFindFirstTaskArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryFindFirstTaskDependencyArgs = {
  cursor?: InputMaybe<TaskDependencyWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskDependencyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskDependencyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskDependencyWhereInput>;
};


export type QueryFindFirstTaskDependencyOrThrowArgs = {
  cursor?: InputMaybe<TaskDependencyWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskDependencyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskDependencyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskDependencyWhereInput>;
};


export type QueryFindFirstTaskMasterMetadataArgs = {
  cursor?: InputMaybe<TaskMasterMetadataWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskMasterMetadataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskMasterMetadataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskMasterMetadataWhereInput>;
};


export type QueryFindFirstTaskMasterMetadataOrThrowArgs = {
  cursor?: InputMaybe<TaskMasterMetadataWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskMasterMetadataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskMasterMetadataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskMasterMetadataWhereInput>;
};


export type QueryFindFirstTaskOrThrowArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryFindFirstTeamArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryFindFirstTeamMemberArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamMemberWhereInput>;
};


export type QueryFindFirstTeamMemberOrThrowArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamMemberWhereInput>;
};


export type QueryFindFirstTeamOrThrowArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryFindFirstTeamProjectArgs = {
  cursor?: InputMaybe<TeamProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamProjectWhereInput>;
};


export type QueryFindFirstTeamProjectOrThrowArgs = {
  cursor?: InputMaybe<TeamProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamProjectWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyTaskMasterMetadataArgs = {
  cursor?: InputMaybe<TaskMasterMetadataWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskMasterMetadataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskMasterMetadataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskMasterMetadataWhereInput>;
};


export type QueryFindUniqueTaskMasterMetadataArgs = {
  where: TaskMasterMetadataWhereUniqueInput;
};


export type QueryFindUniqueTaskMasterMetadataOrThrowArgs = {
  where: TaskMasterMetadataWhereUniqueInput;
};


export type QueryGetCycleArgs = {
  where: CycleWhereUniqueInput;
};


export type QueryGetIssueArgs = {
  where: IssueWhereUniqueInput;
};


export type QueryGetIssueLabelArgs = {
  where: IssueLabelWhereUniqueInput;
};


export type QueryGetIssuePriorityArgs = {
  where: IssuePriorityWhereUniqueInput;
};


export type QueryGetIssueStatusArgs = {
  where: IssueStatusWhereUniqueInput;
};


export type QueryGetLabelArgs = {
  where: LabelWhereUniqueInput;
};


export type QueryGetProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryGetSubtaskArgs = {
  where: SubtaskWhereUniqueInput;
};


export type QueryGetSyncConflictArgs = {
  where: SyncConflictWhereUniqueInput;
};


export type QueryGetSyncOperationArgs = {
  where: SyncOperationWhereUniqueInput;
};


export type QueryGetTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryGetTaskDependencyArgs = {
  where: TaskDependencyWhereUniqueInput;
};


export type QueryGetTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryGetTeamMemberArgs = {
  where: TeamMemberWhereUniqueInput;
};


export type QueryGetTeamProjectArgs = {
  where: TeamProjectWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGroupByCycleArgs = {
  by: Array<CycleScalarFieldEnum>;
  having?: InputMaybe<CycleScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CycleOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CycleWhereInput>;
};


export type QueryGroupByIssueArgs = {
  by: Array<IssueScalarFieldEnum>;
  having?: InputMaybe<IssueScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<IssueOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};


export type QueryGroupByIssueLabelArgs = {
  by: Array<IssueLabelScalarFieldEnum>;
  having?: InputMaybe<IssueLabelScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<IssueLabelOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueLabelWhereInput>;
};


export type QueryGroupByIssuePriorityArgs = {
  by: Array<IssuePriorityScalarFieldEnum>;
  having?: InputMaybe<IssuePriorityScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<IssuePriorityOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssuePriorityWhereInput>;
};


export type QueryGroupByIssueStatusArgs = {
  by: Array<IssueStatusScalarFieldEnum>;
  having?: InputMaybe<IssueStatusScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<IssueStatusOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueStatusWhereInput>;
};


export type QueryGroupByLabelArgs = {
  by: Array<LabelScalarFieldEnum>;
  having?: InputMaybe<LabelScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LabelOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LabelWhereInput>;
};


export type QueryGroupByProjectArgs = {
  by: Array<ProjectScalarFieldEnum>;
  having?: InputMaybe<ProjectScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryGroupBySubtaskArgs = {
  by: Array<SubtaskScalarFieldEnum>;
  having?: InputMaybe<SubtaskScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SubtaskOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubtaskWhereInput>;
};


export type QueryGroupBySyncConflictArgs = {
  by: Array<SyncConflictScalarFieldEnum>;
  having?: InputMaybe<SyncConflictScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SyncConflictOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SyncConflictWhereInput>;
};


export type QueryGroupBySyncOperationArgs = {
  by: Array<SyncOperationScalarFieldEnum>;
  having?: InputMaybe<SyncOperationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SyncOperationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SyncOperationWhereInput>;
};


export type QueryGroupByTaskArgs = {
  by: Array<TaskScalarFieldEnum>;
  having?: InputMaybe<TaskScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TaskOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryGroupByTaskDependencyArgs = {
  by: Array<TaskDependencyScalarFieldEnum>;
  having?: InputMaybe<TaskDependencyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TaskDependencyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskDependencyWhereInput>;
};


export type QueryGroupByTaskMasterMetadataArgs = {
  by: Array<TaskMasterMetadataScalarFieldEnum>;
  having?: InputMaybe<TaskMasterMetadataScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TaskMasterMetadataOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskMasterMetadataWhereInput>;
};


export type QueryGroupByTeamArgs = {
  by: Array<TeamScalarFieldEnum>;
  having?: InputMaybe<TeamScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TeamOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryGroupByTeamMemberArgs = {
  by: Array<TeamMemberScalarFieldEnum>;
  having?: InputMaybe<TeamMemberScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TeamMemberOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamMemberWhereInput>;
};


export type QueryGroupByTeamProjectArgs = {
  by: Array<TeamProjectScalarFieldEnum>;
  having?: InputMaybe<TeamProjectScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TeamProjectOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamProjectWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryIssueArgs = {
  where: IssueWhereUniqueInput;
};


export type QueryIssueLabelArgs = {
  where: IssueLabelWhereUniqueInput;
};


export type QueryIssueLabelsArgs = {
  cursor?: InputMaybe<IssueLabelWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueLabelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueLabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueLabelWhereInput>;
};


export type QueryIssuePrioritiesArgs = {
  cursor?: InputMaybe<IssuePriorityWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssuePriorityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssuePriorityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssuePriorityWhereInput>;
};


export type QueryIssuePriorityArgs = {
  where: IssuePriorityWhereUniqueInput;
};


export type QueryIssueStatusArgs = {
  where: IssueStatusWhereUniqueInput;
};


export type QueryIssueStatusesArgs = {
  cursor?: InputMaybe<IssueStatusWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueStatusScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueStatusOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueStatusWhereInput>;
};


export type QueryIssuesArgs = {
  cursor?: InputMaybe<IssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};


export type QueryLabelArgs = {
  where: LabelWhereUniqueInput;
};


export type QueryLabelsArgs = {
  cursor?: InputMaybe<LabelWhereUniqueInput>;
  distinct?: InputMaybe<Array<LabelScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LabelOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LabelWhereInput>;
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput;
};


export type QueryProjectsArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QuerySubtaskArgs = {
  where: SubtaskWhereUniqueInput;
};


export type QuerySubtasksArgs = {
  cursor?: InputMaybe<SubtaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubtaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubtaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubtaskWhereInput>;
};


export type QuerySyncConflictArgs = {
  where: SyncConflictWhereUniqueInput;
};


export type QuerySyncConflictsArgs = {
  cursor?: InputMaybe<SyncConflictWhereUniqueInput>;
  distinct?: InputMaybe<Array<SyncConflictScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SyncConflictOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SyncConflictWhereInput>;
};


export type QuerySyncOperationArgs = {
  where: SyncOperationWhereUniqueInput;
};


export type QuerySyncOperationsArgs = {
  cursor?: InputMaybe<SyncOperationWhereUniqueInput>;
  distinct?: InputMaybe<Array<SyncOperationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SyncOperationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SyncOperationWhereInput>;
};


export type QueryTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryTaskDependenciesArgs = {
  cursor?: InputMaybe<TaskDependencyWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskDependencyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskDependencyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskDependencyWhereInput>;
};


export type QueryTaskDependencyArgs = {
  where: TaskDependencyWhereUniqueInput;
};


export type QueryTasksArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryTeamArgs = {
  where: TeamWhereUniqueInput;
};


export type QueryTeamMemberArgs = {
  where: TeamMemberWhereUniqueInput;
};


export type QueryTeamMembersArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamMemberWhereInput>;
};


export type QueryTeamProjectArgs = {
  where: TeamProjectWhereUniqueInput;
};


export type QueryTeamProjectsArgs = {
  cursor?: InputMaybe<TeamProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamProjectWhereInput>;
};


export type QueryTeamsArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subtask = {
  __typename?: 'Subtask';
  _count?: Maybe<SubtaskCount>;
  createdAt: Scalars['DateTime']['output'];
  dependencies: Scalars['String']['output'];
  description: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  issues: Array<Issue>;
  parentId: Scalars['Int']['output'];
  parentTask: Task;
  status: Scalars['String']['output'];
  testStrategy?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type SubtaskIssuesArgs = {
  cursor?: InputMaybe<IssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};

export type SubtaskAvgAggregate = {
  __typename?: 'SubtaskAvgAggregate';
  parentId?: Maybe<Scalars['Float']['output']>;
};

export type SubtaskAvgOrderByAggregateInput = {
  parentId?: InputMaybe<SortOrder>;
};

export type SubtaskCount = {
  __typename?: 'SubtaskCount';
  issues: Scalars['Int']['output'];
};


export type SubtaskCountIssuesArgs = {
  where?: InputMaybe<IssueWhereInput>;
};

export type SubtaskCountAggregate = {
  __typename?: 'SubtaskCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  dependencies: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  details: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  parentId: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  testStrategy: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type SubtaskCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dependencies?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  testStrategy?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubtaskCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependencies?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  issues?: InputMaybe<IssueCreateNestedManyWithoutSubtaskInput>;
  parentTask: TaskCreateNestedOneWithoutSubtasksInput;
  status: Scalars['String']['input'];
  testStrategy?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SubtaskCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependencies?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  parentId: Scalars['Int']['input'];
  status: Scalars['String']['input'];
  testStrategy?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SubtaskCreateManyParentTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependencies?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
  testStrategy?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SubtaskCreateManyParentTaskInputEnvelope = {
  data: Array<SubtaskCreateManyParentTaskInput>;
};

export type SubtaskCreateNestedManyWithoutParentTaskInput = {
  connect?: InputMaybe<Array<SubtaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubtaskCreateOrConnectWithoutParentTaskInput>>;
  create?: InputMaybe<Array<SubtaskCreateWithoutParentTaskInput>>;
  createMany?: InputMaybe<SubtaskCreateManyParentTaskInputEnvelope>;
};

export type SubtaskCreateNestedOneWithoutIssuesInput = {
  connect?: InputMaybe<SubtaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubtaskCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<SubtaskCreateWithoutIssuesInput>;
};

export type SubtaskCreateOrConnectWithoutIssuesInput = {
  create: SubtaskCreateWithoutIssuesInput;
  where: SubtaskWhereUniqueInput;
};

export type SubtaskCreateOrConnectWithoutParentTaskInput = {
  create: SubtaskCreateWithoutParentTaskInput;
  where: SubtaskWhereUniqueInput;
};

export type SubtaskCreateWithoutIssuesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependencies?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  parentTask: TaskCreateNestedOneWithoutSubtasksInput;
  status: Scalars['String']['input'];
  testStrategy?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SubtaskCreateWithoutParentTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependencies?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  issues?: InputMaybe<IssueCreateNestedManyWithoutSubtaskInput>;
  status: Scalars['String']['input'];
  testStrategy?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SubtaskGroupBy = {
  __typename?: 'SubtaskGroupBy';
  _avg?: Maybe<SubtaskAvgAggregate>;
  _count?: Maybe<SubtaskCountAggregate>;
  _max?: Maybe<SubtaskMaxAggregate>;
  _min?: Maybe<SubtaskMinAggregate>;
  _sum?: Maybe<SubtaskSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  dependencies: Scalars['String']['output'];
  description: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  parentId: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  testStrategy?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SubtaskListRelationFilter = {
  every?: InputMaybe<SubtaskWhereInput>;
  none?: InputMaybe<SubtaskWhereInput>;
  some?: InputMaybe<SubtaskWhereInput>;
};

export type SubtaskMaxAggregate = {
  __typename?: 'SubtaskMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dependencies?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  testStrategy?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SubtaskMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dependencies?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  testStrategy?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubtaskMinAggregate = {
  __typename?: 'SubtaskMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dependencies?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  testStrategy?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SubtaskMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dependencies?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  testStrategy?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubtaskNullableRelationFilter = {
  is?: InputMaybe<SubtaskWhereInput>;
  isNot?: InputMaybe<SubtaskWhereInput>;
};

export type SubtaskOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SubtaskOrderByWithAggregationInput = {
  _avg?: InputMaybe<SubtaskAvgOrderByAggregateInput>;
  _count?: InputMaybe<SubtaskCountOrderByAggregateInput>;
  _max?: InputMaybe<SubtaskMaxOrderByAggregateInput>;
  _min?: InputMaybe<SubtaskMinOrderByAggregateInput>;
  _sum?: InputMaybe<SubtaskSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  dependencies?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  testStrategy?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubtaskOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  dependencies?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  issues?: InputMaybe<IssueOrderByRelationAggregateInput>;
  parentId?: InputMaybe<SortOrder>;
  parentTask?: InputMaybe<TaskOrderByWithRelationInput>;
  status?: InputMaybe<SortOrder>;
  testStrategy?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum SubtaskScalarFieldEnum {
  CreatedAt = 'createdAt',
  Dependencies = 'dependencies',
  Description = 'description',
  Details = 'details',
  Id = 'id',
  ParentId = 'parentId',
  Status = 'status',
  TestStrategy = 'testStrategy',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type SubtaskScalarWhereInput = {
  AND?: InputMaybe<Array<SubtaskScalarWhereInput>>;
  NOT?: InputMaybe<Array<SubtaskScalarWhereInput>>;
  OR?: InputMaybe<Array<SubtaskScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dependencies?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  details?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  parentId?: InputMaybe<IntFilter>;
  status?: InputMaybe<StringFilter>;
  testStrategy?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SubtaskScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SubtaskScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SubtaskScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SubtaskScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  dependencies?: InputMaybe<StringWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  details?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  parentId?: InputMaybe<IntWithAggregatesFilter>;
  status?: InputMaybe<StringWithAggregatesFilter>;
  testStrategy?: InputMaybe<StringNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type SubtaskSumAggregate = {
  __typename?: 'SubtaskSumAggregate';
  parentId?: Maybe<Scalars['Int']['output']>;
};

export type SubtaskSumOrderByAggregateInput = {
  parentId?: InputMaybe<SortOrder>;
};

export type SubtaskUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dependencies?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueUpdateManyWithoutSubtaskNestedInput>;
  parentTask?: InputMaybe<TaskUpdateOneRequiredWithoutSubtasksNestedInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  testStrategy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubtaskUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dependencies?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  testStrategy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubtaskUpdateManyWithWhereWithoutParentTaskInput = {
  data: SubtaskUpdateManyMutationInput;
  where: SubtaskScalarWhereInput;
};

export type SubtaskUpdateManyWithoutParentTaskNestedInput = {
  connect?: InputMaybe<Array<SubtaskWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubtaskCreateOrConnectWithoutParentTaskInput>>;
  create?: InputMaybe<Array<SubtaskCreateWithoutParentTaskInput>>;
  createMany?: InputMaybe<SubtaskCreateManyParentTaskInputEnvelope>;
  delete?: InputMaybe<Array<SubtaskWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubtaskScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubtaskWhereUniqueInput>>;
  set?: InputMaybe<Array<SubtaskWhereUniqueInput>>;
  update?: InputMaybe<Array<SubtaskUpdateWithWhereUniqueWithoutParentTaskInput>>;
  updateMany?: InputMaybe<Array<SubtaskUpdateManyWithWhereWithoutParentTaskInput>>;
  upsert?: InputMaybe<Array<SubtaskUpsertWithWhereUniqueWithoutParentTaskInput>>;
};

export type SubtaskUpdateOneWithoutIssuesNestedInput = {
  connect?: InputMaybe<SubtaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubtaskCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<SubtaskCreateWithoutIssuesInput>;
  delete?: InputMaybe<SubtaskWhereInput>;
  disconnect?: InputMaybe<SubtaskWhereInput>;
  update?: InputMaybe<SubtaskUpdateToOneWithWhereWithoutIssuesInput>;
  upsert?: InputMaybe<SubtaskUpsertWithoutIssuesInput>;
};

export type SubtaskUpdateToOneWithWhereWithoutIssuesInput = {
  data: SubtaskUpdateWithoutIssuesInput;
  where?: InputMaybe<SubtaskWhereInput>;
};

export type SubtaskUpdateWithWhereUniqueWithoutParentTaskInput = {
  data: SubtaskUpdateWithoutParentTaskInput;
  where: SubtaskWhereUniqueInput;
};

export type SubtaskUpdateWithoutIssuesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dependencies?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentTask?: InputMaybe<TaskUpdateOneRequiredWithoutSubtasksNestedInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  testStrategy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubtaskUpdateWithoutParentTaskInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dependencies?: InputMaybe<StringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueUpdateManyWithoutSubtaskNestedInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  testStrategy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubtaskUpsertWithWhereUniqueWithoutParentTaskInput = {
  create: SubtaskCreateWithoutParentTaskInput;
  update: SubtaskUpdateWithoutParentTaskInput;
  where: SubtaskWhereUniqueInput;
};

export type SubtaskUpsertWithoutIssuesInput = {
  create: SubtaskCreateWithoutIssuesInput;
  update: SubtaskUpdateWithoutIssuesInput;
  where?: InputMaybe<SubtaskWhereInput>;
};

export type SubtaskWhereInput = {
  AND?: InputMaybe<Array<SubtaskWhereInput>>;
  NOT?: InputMaybe<Array<SubtaskWhereInput>>;
  OR?: InputMaybe<Array<SubtaskWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dependencies?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  details?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  issues?: InputMaybe<IssueListRelationFilter>;
  parentId?: InputMaybe<IntFilter>;
  parentTask?: InputMaybe<TaskRelationFilter>;
  status?: InputMaybe<StringFilter>;
  testStrategy?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SubtaskWhereUniqueInput = {
  AND?: InputMaybe<Array<SubtaskWhereInput>>;
  NOT?: InputMaybe<Array<SubtaskWhereInput>>;
  OR?: InputMaybe<Array<SubtaskWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dependencies?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  details?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  issues?: InputMaybe<IssueListRelationFilter>;
  parentId?: InputMaybe<IntFilter>;
  parentTask?: InputMaybe<TaskRelationFilter>;
  status?: InputMaybe<StringFilter>;
  testStrategy?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SyncConflict = {
  __typename?: 'SyncConflict';
  cliVersion: Scalars['String']['output'];
  id: Scalars['String']['output'];
  operationType: Scalars['String']['output'];
  resolution?: Maybe<Scalars['String']['output']>;
  resolved: Scalars['Boolean']['output'];
  resolvedAt?: Maybe<Scalars['DateTime']['output']>;
  resolvedBy?: Maybe<Scalars['String']['output']>;
  taskId: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  uiVersion: Scalars['String']['output'];
};

export type SyncConflictCountAggregate = {
  __typename?: 'SyncConflictCountAggregate';
  _all: Scalars['Int']['output'];
  cliVersion: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  operationType: Scalars['Int']['output'];
  resolution: Scalars['Int']['output'];
  resolved: Scalars['Int']['output'];
  resolvedAt: Scalars['Int']['output'];
  resolvedBy: Scalars['Int']['output'];
  taskId: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  uiVersion: Scalars['Int']['output'];
};

export type SyncConflictCountOrderByAggregateInput = {
  cliVersion?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  operationType?: InputMaybe<SortOrder>;
  resolution?: InputMaybe<SortOrder>;
  resolved?: InputMaybe<SortOrder>;
  resolvedAt?: InputMaybe<SortOrder>;
  resolvedBy?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  uiVersion?: InputMaybe<SortOrder>;
};

export type SyncConflictCreateInput = {
  cliVersion: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  operationType: Scalars['String']['input'];
  resolution?: InputMaybe<Scalars['String']['input']>;
  resolved?: InputMaybe<Scalars['Boolean']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedBy?: InputMaybe<Scalars['String']['input']>;
  taskId: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  uiVersion: Scalars['String']['input'];
};

export type SyncConflictCreateManyInput = {
  cliVersion: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  operationType: Scalars['String']['input'];
  resolution?: InputMaybe<Scalars['String']['input']>;
  resolved?: InputMaybe<Scalars['Boolean']['input']>;
  resolvedAt?: InputMaybe<Scalars['DateTime']['input']>;
  resolvedBy?: InputMaybe<Scalars['String']['input']>;
  taskId: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  uiVersion: Scalars['String']['input'];
};

export type SyncConflictGroupBy = {
  __typename?: 'SyncConflictGroupBy';
  _count?: Maybe<SyncConflictCountAggregate>;
  _max?: Maybe<SyncConflictMaxAggregate>;
  _min?: Maybe<SyncConflictMinAggregate>;
  cliVersion: Scalars['String']['output'];
  id: Scalars['String']['output'];
  operationType: Scalars['String']['output'];
  resolution?: Maybe<Scalars['String']['output']>;
  resolved: Scalars['Boolean']['output'];
  resolvedAt?: Maybe<Scalars['DateTime']['output']>;
  resolvedBy?: Maybe<Scalars['String']['output']>;
  taskId: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  uiVersion: Scalars['String']['output'];
};

export type SyncConflictMaxAggregate = {
  __typename?: 'SyncConflictMaxAggregate';
  cliVersion?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  operationType?: Maybe<Scalars['String']['output']>;
  resolution?: Maybe<Scalars['String']['output']>;
  resolved?: Maybe<Scalars['Boolean']['output']>;
  resolvedAt?: Maybe<Scalars['DateTime']['output']>;
  resolvedBy?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  uiVersion?: Maybe<Scalars['String']['output']>;
};

export type SyncConflictMaxOrderByAggregateInput = {
  cliVersion?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  operationType?: InputMaybe<SortOrder>;
  resolution?: InputMaybe<SortOrder>;
  resolved?: InputMaybe<SortOrder>;
  resolvedAt?: InputMaybe<SortOrder>;
  resolvedBy?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  uiVersion?: InputMaybe<SortOrder>;
};

export type SyncConflictMinAggregate = {
  __typename?: 'SyncConflictMinAggregate';
  cliVersion?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  operationType?: Maybe<Scalars['String']['output']>;
  resolution?: Maybe<Scalars['String']['output']>;
  resolved?: Maybe<Scalars['Boolean']['output']>;
  resolvedAt?: Maybe<Scalars['DateTime']['output']>;
  resolvedBy?: Maybe<Scalars['String']['output']>;
  taskId?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  uiVersion?: Maybe<Scalars['String']['output']>;
};

export type SyncConflictMinOrderByAggregateInput = {
  cliVersion?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  operationType?: InputMaybe<SortOrder>;
  resolution?: InputMaybe<SortOrder>;
  resolved?: InputMaybe<SortOrder>;
  resolvedAt?: InputMaybe<SortOrder>;
  resolvedBy?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  uiVersion?: InputMaybe<SortOrder>;
};

export type SyncConflictOrderByWithAggregationInput = {
  _count?: InputMaybe<SyncConflictCountOrderByAggregateInput>;
  _max?: InputMaybe<SyncConflictMaxOrderByAggregateInput>;
  _min?: InputMaybe<SyncConflictMinOrderByAggregateInput>;
  cliVersion?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  operationType?: InputMaybe<SortOrder>;
  resolution?: InputMaybe<SortOrderInput>;
  resolved?: InputMaybe<SortOrder>;
  resolvedAt?: InputMaybe<SortOrderInput>;
  resolvedBy?: InputMaybe<SortOrderInput>;
  taskId?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  uiVersion?: InputMaybe<SortOrder>;
};

export type SyncConflictOrderByWithRelationInput = {
  cliVersion?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  operationType?: InputMaybe<SortOrder>;
  resolution?: InputMaybe<SortOrderInput>;
  resolved?: InputMaybe<SortOrder>;
  resolvedAt?: InputMaybe<SortOrderInput>;
  resolvedBy?: InputMaybe<SortOrderInput>;
  taskId?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  uiVersion?: InputMaybe<SortOrder>;
};

export enum SyncConflictScalarFieldEnum {
  CliVersion = 'cliVersion',
  Id = 'id',
  OperationType = 'operationType',
  Resolution = 'resolution',
  Resolved = 'resolved',
  ResolvedAt = 'resolvedAt',
  ResolvedBy = 'resolvedBy',
  TaskId = 'taskId',
  Timestamp = 'timestamp',
  UiVersion = 'uiVersion'
}

export type SyncConflictScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SyncConflictScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SyncConflictScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SyncConflictScalarWhereWithAggregatesInput>>;
  cliVersion?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  operationType?: InputMaybe<StringWithAggregatesFilter>;
  resolution?: InputMaybe<StringNullableWithAggregatesFilter>;
  resolved?: InputMaybe<BoolWithAggregatesFilter>;
  resolvedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  resolvedBy?: InputMaybe<StringNullableWithAggregatesFilter>;
  taskId?: InputMaybe<StringWithAggregatesFilter>;
  timestamp?: InputMaybe<DateTimeWithAggregatesFilter>;
  uiVersion?: InputMaybe<StringWithAggregatesFilter>;
};

export type SyncConflictUpdateInput = {
  cliVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  operationType?: InputMaybe<StringFieldUpdateOperationsInput>;
  resolution?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  resolvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  resolvedBy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  taskId?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uiVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SyncConflictUpdateManyMutationInput = {
  cliVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  operationType?: InputMaybe<StringFieldUpdateOperationsInput>;
  resolution?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  resolved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  resolvedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  resolvedBy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  taskId?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  uiVersion?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SyncConflictWhereInput = {
  AND?: InputMaybe<Array<SyncConflictWhereInput>>;
  NOT?: InputMaybe<Array<SyncConflictWhereInput>>;
  OR?: InputMaybe<Array<SyncConflictWhereInput>>;
  cliVersion?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  operationType?: InputMaybe<StringFilter>;
  resolution?: InputMaybe<StringNullableFilter>;
  resolved?: InputMaybe<BoolFilter>;
  resolvedAt?: InputMaybe<DateTimeNullableFilter>;
  resolvedBy?: InputMaybe<StringNullableFilter>;
  taskId?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DateTimeFilter>;
  uiVersion?: InputMaybe<StringFilter>;
};

export type SyncConflictWhereUniqueInput = {
  AND?: InputMaybe<Array<SyncConflictWhereInput>>;
  NOT?: InputMaybe<Array<SyncConflictWhereInput>>;
  OR?: InputMaybe<Array<SyncConflictWhereInput>>;
  cliVersion?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  operationType?: InputMaybe<StringFilter>;
  resolution?: InputMaybe<StringNullableFilter>;
  resolved?: InputMaybe<BoolFilter>;
  resolvedAt?: InputMaybe<DateTimeNullableFilter>;
  resolvedBy?: InputMaybe<StringNullableFilter>;
  taskId?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DateTimeFilter>;
  uiVersion?: InputMaybe<StringFilter>;
};

export type SyncOperation = {
  __typename?: 'SyncOperation';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  data: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  maxRetries: Scalars['Int']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  retryCount: Scalars['Int']['output'];
  rollbackData?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  taskIds: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type SyncOperationAvgAggregate = {
  __typename?: 'SyncOperationAvgAggregate';
  maxRetries?: Maybe<Scalars['Float']['output']>;
  retryCount?: Maybe<Scalars['Float']['output']>;
};

export type SyncOperationAvgOrderByAggregateInput = {
  maxRetries?: InputMaybe<SortOrder>;
  retryCount?: InputMaybe<SortOrder>;
};

export type SyncOperationCountAggregate = {
  __typename?: 'SyncOperationCountAggregate';
  _all: Scalars['Int']['output'];
  completedAt: Scalars['Int']['output'];
  data: Scalars['Int']['output'];
  error: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  maxRetries: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  retryCount: Scalars['Int']['output'];
  rollbackData: Scalars['Int']['output'];
  source: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  taskIds: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type SyncOperationCountOrderByAggregateInput = {
  completedAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  error?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxRetries?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  retryCount?: InputMaybe<SortOrder>;
  rollbackData?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taskIds?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type SyncOperationCreateInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['String']['input'];
  error?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxRetries?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  retryCount?: InputMaybe<Scalars['Int']['input']>;
  rollbackData?: InputMaybe<Scalars['String']['input']>;
  source: Scalars['String']['input'];
  status: Scalars['String']['input'];
  taskIds?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type: Scalars['String']['input'];
};

export type SyncOperationCreateManyInput = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  data: Scalars['String']['input'];
  error?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxRetries?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  retryCount?: InputMaybe<Scalars['Int']['input']>;
  rollbackData?: InputMaybe<Scalars['String']['input']>;
  source: Scalars['String']['input'];
  status: Scalars['String']['input'];
  taskIds?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  type: Scalars['String']['input'];
};

export type SyncOperationGroupBy = {
  __typename?: 'SyncOperationGroupBy';
  _avg?: Maybe<SyncOperationAvgAggregate>;
  _count?: Maybe<SyncOperationCountAggregate>;
  _max?: Maybe<SyncOperationMaxAggregate>;
  _min?: Maybe<SyncOperationMinAggregate>;
  _sum?: Maybe<SyncOperationSumAggregate>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  data: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  maxRetries: Scalars['Int']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  retryCount: Scalars['Int']['output'];
  rollbackData?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  status: Scalars['String']['output'];
  taskIds: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};

export type SyncOperationMaxAggregate = {
  __typename?: 'SyncOperationMaxAggregate';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxRetries?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  retryCount?: Maybe<Scalars['Int']['output']>;
  rollbackData?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  taskIds?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SyncOperationMaxOrderByAggregateInput = {
  completedAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  error?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxRetries?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  retryCount?: InputMaybe<SortOrder>;
  rollbackData?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taskIds?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type SyncOperationMinAggregate = {
  __typename?: 'SyncOperationMinAggregate';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxRetries?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  retryCount?: Maybe<Scalars['Int']['output']>;
  rollbackData?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  taskIds?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type SyncOperationMinOrderByAggregateInput = {
  completedAt?: InputMaybe<SortOrder>;
  data?: InputMaybe<SortOrder>;
  error?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxRetries?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrder>;
  retryCount?: InputMaybe<SortOrder>;
  rollbackData?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taskIds?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type SyncOperationOrderByWithAggregationInput = {
  _avg?: InputMaybe<SyncOperationAvgOrderByAggregateInput>;
  _count?: InputMaybe<SyncOperationCountOrderByAggregateInput>;
  _max?: InputMaybe<SyncOperationMaxOrderByAggregateInput>;
  _min?: InputMaybe<SyncOperationMinOrderByAggregateInput>;
  _sum?: InputMaybe<SyncOperationSumOrderByAggregateInput>;
  completedAt?: InputMaybe<SortOrderInput>;
  data?: InputMaybe<SortOrder>;
  error?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  maxRetries?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  retryCount?: InputMaybe<SortOrder>;
  rollbackData?: InputMaybe<SortOrderInput>;
  source?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taskIds?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type SyncOperationOrderByWithRelationInput = {
  completedAt?: InputMaybe<SortOrderInput>;
  data?: InputMaybe<SortOrder>;
  error?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  maxRetries?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SortOrderInput>;
  retryCount?: InputMaybe<SortOrder>;
  rollbackData?: InputMaybe<SortOrderInput>;
  source?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  taskIds?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export enum SyncOperationScalarFieldEnum {
  CompletedAt = 'completedAt',
  Data = 'data',
  Error = 'error',
  Id = 'id',
  MaxRetries = 'maxRetries',
  Metadata = 'metadata',
  RetryCount = 'retryCount',
  RollbackData = 'rollbackData',
  Source = 'source',
  Status = 'status',
  TaskIds = 'taskIds',
  Timestamp = 'timestamp',
  Type = 'type'
}

export type SyncOperationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SyncOperationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SyncOperationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SyncOperationScalarWhereWithAggregatesInput>>;
  completedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  data?: InputMaybe<StringWithAggregatesFilter>;
  error?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  maxRetries?: InputMaybe<IntWithAggregatesFilter>;
  metadata?: InputMaybe<StringNullableWithAggregatesFilter>;
  retryCount?: InputMaybe<IntWithAggregatesFilter>;
  rollbackData?: InputMaybe<StringNullableWithAggregatesFilter>;
  source?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<StringWithAggregatesFilter>;
  taskIds?: InputMaybe<StringWithAggregatesFilter>;
  timestamp?: InputMaybe<DateTimeWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
};

export type SyncOperationSumAggregate = {
  __typename?: 'SyncOperationSumAggregate';
  maxRetries?: Maybe<Scalars['Int']['output']>;
  retryCount?: Maybe<Scalars['Int']['output']>;
};

export type SyncOperationSumOrderByAggregateInput = {
  maxRetries?: InputMaybe<SortOrder>;
  retryCount?: InputMaybe<SortOrder>;
};

export type SyncOperationUpdateInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<StringFieldUpdateOperationsInput>;
  error?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxRetries?: InputMaybe<IntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  retryCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  rollbackData?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  source?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  taskIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SyncOperationUpdateManyMutationInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  data?: InputMaybe<StringFieldUpdateOperationsInput>;
  error?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxRetries?: InputMaybe<IntFieldUpdateOperationsInput>;
  metadata?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  retryCount?: InputMaybe<IntFieldUpdateOperationsInput>;
  rollbackData?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  source?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  taskIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SyncOperationWhereInput = {
  AND?: InputMaybe<Array<SyncOperationWhereInput>>;
  NOT?: InputMaybe<Array<SyncOperationWhereInput>>;
  OR?: InputMaybe<Array<SyncOperationWhereInput>>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<StringFilter>;
  error?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  maxRetries?: InputMaybe<IntFilter>;
  metadata?: InputMaybe<StringNullableFilter>;
  retryCount?: InputMaybe<IntFilter>;
  rollbackData?: InputMaybe<StringNullableFilter>;
  source?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  taskIds?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<StringFilter>;
};

export type SyncOperationWhereUniqueInput = {
  AND?: InputMaybe<Array<SyncOperationWhereInput>>;
  NOT?: InputMaybe<Array<SyncOperationWhereInput>>;
  OR?: InputMaybe<Array<SyncOperationWhereInput>>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  data?: InputMaybe<StringFilter>;
  error?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  maxRetries?: InputMaybe<IntFilter>;
  metadata?: InputMaybe<StringNullableFilter>;
  retryCount?: InputMaybe<IntFilter>;
  rollbackData?: InputMaybe<StringNullableFilter>;
  source?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  taskIds?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<StringFilter>;
};

export type Task = {
  __typename?: 'Task';
  _count?: Maybe<TaskCount>;
  complexity?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  dependencies: Array<TaskDependency>;
  dependents: Array<TaskDependency>;
  description: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  issues: Array<Issue>;
  priority: Scalars['String']['output'];
  status: Scalars['String']['output'];
  subtasks: Array<Subtask>;
  testStrategy?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type TaskDependenciesArgs = {
  cursor?: InputMaybe<TaskDependencyWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskDependencyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskDependencyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskDependencyWhereInput>;
};


export type TaskDependentsArgs = {
  cursor?: InputMaybe<TaskDependencyWhereUniqueInput>;
  distinct?: InputMaybe<Array<TaskDependencyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TaskDependencyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TaskDependencyWhereInput>;
};


export type TaskIssuesArgs = {
  cursor?: InputMaybe<IssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};


export type TaskSubtasksArgs = {
  cursor?: InputMaybe<SubtaskWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubtaskScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubtaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SubtaskWhereInput>;
};

export type TaskAvgAggregate = {
  __typename?: 'TaskAvgAggregate';
  complexity?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type TaskAvgOrderByAggregateInput = {
  complexity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TaskCount = {
  __typename?: 'TaskCount';
  dependencies: Scalars['Int']['output'];
  dependents: Scalars['Int']['output'];
  issues: Scalars['Int']['output'];
  subtasks: Scalars['Int']['output'];
};


export type TaskCountDependenciesArgs = {
  where?: InputMaybe<TaskDependencyWhereInput>;
};


export type TaskCountDependentsArgs = {
  where?: InputMaybe<TaskDependencyWhereInput>;
};


export type TaskCountIssuesArgs = {
  where?: InputMaybe<IssueWhereInput>;
};


export type TaskCountSubtasksArgs = {
  where?: InputMaybe<SubtaskWhereInput>;
};

export type TaskCountAggregate = {
  __typename?: 'TaskCountAggregate';
  _all: Scalars['Int']['output'];
  complexity: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  details: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  priority: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  testStrategy: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type TaskCountOrderByAggregateInput = {
  complexity?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  testStrategy?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TaskCreateInput = {
  complexity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependencies?: InputMaybe<TaskDependencyCreateNestedManyWithoutTaskInput>;
  dependents?: InputMaybe<TaskDependencyCreateNestedManyWithoutDependsOnInput>;
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  issues?: InputMaybe<IssueCreateNestedManyWithoutTaskInput>;
  priority: Scalars['String']['input'];
  status: Scalars['String']['input'];
  subtasks?: InputMaybe<SubtaskCreateNestedManyWithoutParentTaskInput>;
  testStrategy?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskCreateManyInput = {
  complexity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  priority: Scalars['String']['input'];
  status: Scalars['String']['input'];
  testStrategy?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskCreateNestedOneWithoutDependenciesInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutDependenciesInput>;
  create?: InputMaybe<TaskCreateWithoutDependenciesInput>;
};

export type TaskCreateNestedOneWithoutDependentsInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutDependentsInput>;
  create?: InputMaybe<TaskCreateWithoutDependentsInput>;
};

export type TaskCreateNestedOneWithoutIssuesInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<TaskCreateWithoutIssuesInput>;
};

export type TaskCreateNestedOneWithoutSubtasksInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutSubtasksInput>;
  create?: InputMaybe<TaskCreateWithoutSubtasksInput>;
};

export type TaskCreateOrConnectWithoutDependenciesInput = {
  create: TaskCreateWithoutDependenciesInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutDependentsInput = {
  create: TaskCreateWithoutDependentsInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutIssuesInput = {
  create: TaskCreateWithoutIssuesInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutSubtasksInput = {
  create: TaskCreateWithoutSubtasksInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateWithoutDependenciesInput = {
  complexity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependents?: InputMaybe<TaskDependencyCreateNestedManyWithoutDependsOnInput>;
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  issues?: InputMaybe<IssueCreateNestedManyWithoutTaskInput>;
  priority: Scalars['String']['input'];
  status: Scalars['String']['input'];
  subtasks?: InputMaybe<SubtaskCreateNestedManyWithoutParentTaskInput>;
  testStrategy?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskCreateWithoutDependentsInput = {
  complexity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependencies?: InputMaybe<TaskDependencyCreateNestedManyWithoutTaskInput>;
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  issues?: InputMaybe<IssueCreateNestedManyWithoutTaskInput>;
  priority: Scalars['String']['input'];
  status: Scalars['String']['input'];
  subtasks?: InputMaybe<SubtaskCreateNestedManyWithoutParentTaskInput>;
  testStrategy?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskCreateWithoutIssuesInput = {
  complexity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependencies?: InputMaybe<TaskDependencyCreateNestedManyWithoutTaskInput>;
  dependents?: InputMaybe<TaskDependencyCreateNestedManyWithoutDependsOnInput>;
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  priority: Scalars['String']['input'];
  status: Scalars['String']['input'];
  subtasks?: InputMaybe<SubtaskCreateNestedManyWithoutParentTaskInput>;
  testStrategy?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskCreateWithoutSubtasksInput = {
  complexity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependencies?: InputMaybe<TaskDependencyCreateNestedManyWithoutTaskInput>;
  dependents?: InputMaybe<TaskDependencyCreateNestedManyWithoutDependsOnInput>;
  description: Scalars['String']['input'];
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  issues?: InputMaybe<IssueCreateNestedManyWithoutTaskInput>;
  priority: Scalars['String']['input'];
  status: Scalars['String']['input'];
  testStrategy?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TaskDependency = {
  __typename?: 'TaskDependency';
  createdAt: Scalars['DateTime']['output'];
  dependsOn: Task;
  dependsOnId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  task: Task;
  taskId: Scalars['Int']['output'];
};

export type TaskDependencyAvgAggregate = {
  __typename?: 'TaskDependencyAvgAggregate';
  dependsOnId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  taskId?: Maybe<Scalars['Float']['output']>;
};

export type TaskDependencyAvgOrderByAggregateInput = {
  dependsOnId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
};

export type TaskDependencyCountAggregate = {
  __typename?: 'TaskDependencyCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  dependsOnId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  taskId: Scalars['Int']['output'];
};

export type TaskDependencyCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dependsOnId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
};

export type TaskDependencyCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependsOn: TaskCreateNestedOneWithoutDependentsInput;
  task: TaskCreateNestedOneWithoutDependenciesInput;
};

export type TaskDependencyCreateManyDependsOnInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  taskId: Scalars['Int']['input'];
};

export type TaskDependencyCreateManyDependsOnInputEnvelope = {
  data: Array<TaskDependencyCreateManyDependsOnInput>;
};

export type TaskDependencyCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependsOnId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  taskId: Scalars['Int']['input'];
};

export type TaskDependencyCreateManyTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependsOnId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type TaskDependencyCreateManyTaskInputEnvelope = {
  data: Array<TaskDependencyCreateManyTaskInput>;
};

export type TaskDependencyCreateNestedManyWithoutDependsOnInput = {
  connect?: InputMaybe<Array<TaskDependencyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskDependencyCreateOrConnectWithoutDependsOnInput>>;
  create?: InputMaybe<Array<TaskDependencyCreateWithoutDependsOnInput>>;
  createMany?: InputMaybe<TaskDependencyCreateManyDependsOnInputEnvelope>;
};

export type TaskDependencyCreateNestedManyWithoutTaskInput = {
  connect?: InputMaybe<Array<TaskDependencyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskDependencyCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<TaskDependencyCreateWithoutTaskInput>>;
  createMany?: InputMaybe<TaskDependencyCreateManyTaskInputEnvelope>;
};

export type TaskDependencyCreateOrConnectWithoutDependsOnInput = {
  create: TaskDependencyCreateWithoutDependsOnInput;
  where: TaskDependencyWhereUniqueInput;
};

export type TaskDependencyCreateOrConnectWithoutTaskInput = {
  create: TaskDependencyCreateWithoutTaskInput;
  where: TaskDependencyWhereUniqueInput;
};

export type TaskDependencyCreateWithoutDependsOnInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  task: TaskCreateNestedOneWithoutDependenciesInput;
};

export type TaskDependencyCreateWithoutTaskInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dependsOn: TaskCreateNestedOneWithoutDependentsInput;
};

export type TaskDependencyGroupBy = {
  __typename?: 'TaskDependencyGroupBy';
  _avg?: Maybe<TaskDependencyAvgAggregate>;
  _count?: Maybe<TaskDependencyCountAggregate>;
  _max?: Maybe<TaskDependencyMaxAggregate>;
  _min?: Maybe<TaskDependencyMinAggregate>;
  _sum?: Maybe<TaskDependencySumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  dependsOnId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  taskId: Scalars['Int']['output'];
};

export type TaskDependencyListRelationFilter = {
  every?: InputMaybe<TaskDependencyWhereInput>;
  none?: InputMaybe<TaskDependencyWhereInput>;
  some?: InputMaybe<TaskDependencyWhereInput>;
};

export type TaskDependencyMaxAggregate = {
  __typename?: 'TaskDependencyMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dependsOnId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  taskId?: Maybe<Scalars['Int']['output']>;
};

export type TaskDependencyMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dependsOnId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
};

export type TaskDependencyMinAggregate = {
  __typename?: 'TaskDependencyMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dependsOnId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  taskId?: Maybe<Scalars['Int']['output']>;
};

export type TaskDependencyMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dependsOnId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
};

export type TaskDependencyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TaskDependencyOrderByWithAggregationInput = {
  _avg?: InputMaybe<TaskDependencyAvgOrderByAggregateInput>;
  _count?: InputMaybe<TaskDependencyCountOrderByAggregateInput>;
  _max?: InputMaybe<TaskDependencyMaxOrderByAggregateInput>;
  _min?: InputMaybe<TaskDependencyMinOrderByAggregateInput>;
  _sum?: InputMaybe<TaskDependencySumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  dependsOnId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
};

export type TaskDependencyOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  dependsOn?: InputMaybe<TaskOrderByWithRelationInput>;
  dependsOnId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  task?: InputMaybe<TaskOrderByWithRelationInput>;
  taskId?: InputMaybe<SortOrder>;
};

export enum TaskDependencyScalarFieldEnum {
  CreatedAt = 'createdAt',
  DependsOnId = 'dependsOnId',
  Id = 'id',
  TaskId = 'taskId'
}

export type TaskDependencyScalarWhereInput = {
  AND?: InputMaybe<Array<TaskDependencyScalarWhereInput>>;
  NOT?: InputMaybe<Array<TaskDependencyScalarWhereInput>>;
  OR?: InputMaybe<Array<TaskDependencyScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dependsOnId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  taskId?: InputMaybe<IntFilter>;
};

export type TaskDependencyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TaskDependencyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TaskDependencyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TaskDependencyScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  dependsOnId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  taskId?: InputMaybe<IntWithAggregatesFilter>;
};

export type TaskDependencySumAggregate = {
  __typename?: 'TaskDependencySumAggregate';
  dependsOnId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  taskId?: Maybe<Scalars['Int']['output']>;
};

export type TaskDependencySumOrderByAggregateInput = {
  dependsOnId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  taskId?: InputMaybe<SortOrder>;
};

export type TaskDependencyTaskIdDependsOnIdCompoundUniqueInput = {
  dependsOnId: Scalars['Int']['input'];
  taskId: Scalars['Int']['input'];
};

export type TaskDependencyUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dependsOn?: InputMaybe<TaskUpdateOneRequiredWithoutDependentsNestedInput>;
  task?: InputMaybe<TaskUpdateOneRequiredWithoutDependenciesNestedInput>;
};

export type TaskDependencyUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskDependencyUpdateManyWithWhereWithoutDependsOnInput = {
  data: TaskDependencyUpdateManyMutationInput;
  where: TaskDependencyScalarWhereInput;
};

export type TaskDependencyUpdateManyWithWhereWithoutTaskInput = {
  data: TaskDependencyUpdateManyMutationInput;
  where: TaskDependencyScalarWhereInput;
};

export type TaskDependencyUpdateManyWithoutDependsOnNestedInput = {
  connect?: InputMaybe<Array<TaskDependencyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskDependencyCreateOrConnectWithoutDependsOnInput>>;
  create?: InputMaybe<Array<TaskDependencyCreateWithoutDependsOnInput>>;
  createMany?: InputMaybe<TaskDependencyCreateManyDependsOnInputEnvelope>;
  delete?: InputMaybe<Array<TaskDependencyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TaskDependencyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TaskDependencyWhereUniqueInput>>;
  set?: InputMaybe<Array<TaskDependencyWhereUniqueInput>>;
  update?: InputMaybe<Array<TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput>>;
  updateMany?: InputMaybe<Array<TaskDependencyUpdateManyWithWhereWithoutDependsOnInput>>;
  upsert?: InputMaybe<Array<TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput>>;
};

export type TaskDependencyUpdateManyWithoutTaskNestedInput = {
  connect?: InputMaybe<Array<TaskDependencyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TaskDependencyCreateOrConnectWithoutTaskInput>>;
  create?: InputMaybe<Array<TaskDependencyCreateWithoutTaskInput>>;
  createMany?: InputMaybe<TaskDependencyCreateManyTaskInputEnvelope>;
  delete?: InputMaybe<Array<TaskDependencyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TaskDependencyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TaskDependencyWhereUniqueInput>>;
  set?: InputMaybe<Array<TaskDependencyWhereUniqueInput>>;
  update?: InputMaybe<Array<TaskDependencyUpdateWithWhereUniqueWithoutTaskInput>>;
  updateMany?: InputMaybe<Array<TaskDependencyUpdateManyWithWhereWithoutTaskInput>>;
  upsert?: InputMaybe<Array<TaskDependencyUpsertWithWhereUniqueWithoutTaskInput>>;
};

export type TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput = {
  data: TaskDependencyUpdateWithoutDependsOnInput;
  where: TaskDependencyWhereUniqueInput;
};

export type TaskDependencyUpdateWithWhereUniqueWithoutTaskInput = {
  data: TaskDependencyUpdateWithoutTaskInput;
  where: TaskDependencyWhereUniqueInput;
};

export type TaskDependencyUpdateWithoutDependsOnInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  task?: InputMaybe<TaskUpdateOneRequiredWithoutDependenciesNestedInput>;
};

export type TaskDependencyUpdateWithoutTaskInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dependsOn?: InputMaybe<TaskUpdateOneRequiredWithoutDependentsNestedInput>;
};

export type TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput = {
  create: TaskDependencyCreateWithoutDependsOnInput;
  update: TaskDependencyUpdateWithoutDependsOnInput;
  where: TaskDependencyWhereUniqueInput;
};

export type TaskDependencyUpsertWithWhereUniqueWithoutTaskInput = {
  create: TaskDependencyCreateWithoutTaskInput;
  update: TaskDependencyUpdateWithoutTaskInput;
  where: TaskDependencyWhereUniqueInput;
};

export type TaskDependencyWhereInput = {
  AND?: InputMaybe<Array<TaskDependencyWhereInput>>;
  NOT?: InputMaybe<Array<TaskDependencyWhereInput>>;
  OR?: InputMaybe<Array<TaskDependencyWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dependsOn?: InputMaybe<TaskRelationFilter>;
  dependsOnId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  task?: InputMaybe<TaskRelationFilter>;
  taskId?: InputMaybe<IntFilter>;
};

export type TaskDependencyWhereUniqueInput = {
  AND?: InputMaybe<Array<TaskDependencyWhereInput>>;
  NOT?: InputMaybe<Array<TaskDependencyWhereInput>>;
  OR?: InputMaybe<Array<TaskDependencyWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dependsOn?: InputMaybe<TaskRelationFilter>;
  dependsOnId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  task?: InputMaybe<TaskRelationFilter>;
  taskId?: InputMaybe<IntFilter>;
  taskId_dependsOnId?: InputMaybe<TaskDependencyTaskIdDependsOnIdCompoundUniqueInput>;
};

export type TaskGroupBy = {
  __typename?: 'TaskGroupBy';
  _avg?: Maybe<TaskAvgAggregate>;
  _count?: Maybe<TaskCountAggregate>;
  _max?: Maybe<TaskMaxAggregate>;
  _min?: Maybe<TaskMinAggregate>;
  _sum?: Maybe<TaskSumAggregate>;
  complexity?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  priority: Scalars['String']['output'];
  status: Scalars['String']['output'];
  testStrategy?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TaskMasterMetadata = {
  __typename?: 'TaskMasterMetadata';
  created: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updated: Scalars['DateTime']['output'];
};

export type TaskMasterMetadataAvgAggregate = {
  __typename?: 'TaskMasterMetadataAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type TaskMasterMetadataAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TaskMasterMetadataCountAggregate = {
  __typename?: 'TaskMasterMetadataCountAggregate';
  _all: Scalars['Int']['output'];
  created: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updated: Scalars['Int']['output'];
};

export type TaskMasterMetadataCountOrderByAggregateInput = {
  created?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updated?: InputMaybe<SortOrder>;
};

export type TaskMasterMetadataCreateInput = {
  created: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  updated: Scalars['DateTime']['input'];
};

export type TaskMasterMetadataCreateManyInput = {
  created: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  updated: Scalars['DateTime']['input'];
};

export type TaskMasterMetadataGroupBy = {
  __typename?: 'TaskMasterMetadataGroupBy';
  _avg?: Maybe<TaskMasterMetadataAvgAggregate>;
  _count?: Maybe<TaskMasterMetadataCountAggregate>;
  _max?: Maybe<TaskMasterMetadataMaxAggregate>;
  _min?: Maybe<TaskMasterMetadataMinAggregate>;
  _sum?: Maybe<TaskMasterMetadataSumAggregate>;
  created: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  updated: Scalars['DateTime']['output'];
};

export type TaskMasterMetadataMaxAggregate = {
  __typename?: 'TaskMasterMetadataMaxAggregate';
  created?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updated?: Maybe<Scalars['DateTime']['output']>;
};

export type TaskMasterMetadataMaxOrderByAggregateInput = {
  created?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updated?: InputMaybe<SortOrder>;
};

export type TaskMasterMetadataMinAggregate = {
  __typename?: 'TaskMasterMetadataMinAggregate';
  created?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updated?: Maybe<Scalars['DateTime']['output']>;
};

export type TaskMasterMetadataMinOrderByAggregateInput = {
  created?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updated?: InputMaybe<SortOrder>;
};

export type TaskMasterMetadataOrderByWithAggregationInput = {
  _avg?: InputMaybe<TaskMasterMetadataAvgOrderByAggregateInput>;
  _count?: InputMaybe<TaskMasterMetadataCountOrderByAggregateInput>;
  _max?: InputMaybe<TaskMasterMetadataMaxOrderByAggregateInput>;
  _min?: InputMaybe<TaskMasterMetadataMinOrderByAggregateInput>;
  _sum?: InputMaybe<TaskMasterMetadataSumOrderByAggregateInput>;
  created?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updated?: InputMaybe<SortOrder>;
};

export type TaskMasterMetadataOrderByWithRelationInput = {
  created?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updated?: InputMaybe<SortOrder>;
};

export enum TaskMasterMetadataScalarFieldEnum {
  Created = 'created',
  Description = 'description',
  Id = 'id',
  Updated = 'updated'
}

export type TaskMasterMetadataScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TaskMasterMetadataScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TaskMasterMetadataScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TaskMasterMetadataScalarWhereWithAggregatesInput>>;
  created?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updated?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TaskMasterMetadataSumAggregate = {
  __typename?: 'TaskMasterMetadataSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type TaskMasterMetadataSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type TaskMasterMetadataUpdateInput = {
  created?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskMasterMetadataUpdateManyMutationInput = {
  created?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  updated?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskMasterMetadataWhereInput = {
  AND?: InputMaybe<Array<TaskMasterMetadataWhereInput>>;
  NOT?: InputMaybe<Array<TaskMasterMetadataWhereInput>>;
  OR?: InputMaybe<Array<TaskMasterMetadataWhereInput>>;
  created?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  updated?: InputMaybe<DateTimeFilter>;
};

export type TaskMasterMetadataWhereUniqueInput = {
  AND?: InputMaybe<Array<TaskMasterMetadataWhereInput>>;
  NOT?: InputMaybe<Array<TaskMasterMetadataWhereInput>>;
  OR?: InputMaybe<Array<TaskMasterMetadataWhereInput>>;
  created?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updated?: InputMaybe<DateTimeFilter>;
};

export type TaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate';
  complexity?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  priority?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  testStrategy?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TaskMaxOrderByAggregateInput = {
  complexity?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  testStrategy?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TaskMinAggregate = {
  __typename?: 'TaskMinAggregate';
  complexity?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  priority?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  testStrategy?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TaskMinOrderByAggregateInput = {
  complexity?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  testStrategy?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TaskNullableRelationFilter = {
  is?: InputMaybe<TaskWhereInput>;
  isNot?: InputMaybe<TaskWhereInput>;
};

export type TaskOrderByWithAggregationInput = {
  _avg?: InputMaybe<TaskAvgOrderByAggregateInput>;
  _count?: InputMaybe<TaskCountOrderByAggregateInput>;
  _max?: InputMaybe<TaskMaxOrderByAggregateInput>;
  _min?: InputMaybe<TaskMinOrderByAggregateInput>;
  _sum?: InputMaybe<TaskSumOrderByAggregateInput>;
  complexity?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  priority?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  testStrategy?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TaskOrderByWithRelationInput = {
  complexity?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  dependencies?: InputMaybe<TaskDependencyOrderByRelationAggregateInput>;
  dependents?: InputMaybe<TaskDependencyOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrder>;
  details?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  issues?: InputMaybe<IssueOrderByRelationAggregateInput>;
  priority?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  subtasks?: InputMaybe<SubtaskOrderByRelationAggregateInput>;
  testStrategy?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TaskRelationFilter = {
  is?: InputMaybe<TaskWhereInput>;
  isNot?: InputMaybe<TaskWhereInput>;
};

export enum TaskScalarFieldEnum {
  Complexity = 'complexity',
  CreatedAt = 'createdAt',
  Description = 'description',
  Details = 'details',
  Id = 'id',
  Priority = 'priority',
  Status = 'status',
  TestStrategy = 'testStrategy',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type TaskScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TaskScalarWhereWithAggregatesInput>>;
  complexity?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  details?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  priority?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<StringWithAggregatesFilter>;
  testStrategy?: InputMaybe<StringNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TaskSumAggregate = {
  __typename?: 'TaskSumAggregate';
  complexity?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type TaskSumOrderByAggregateInput = {
  complexity?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TaskUpdateInput = {
  complexity?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dependencies?: InputMaybe<TaskDependencyUpdateManyWithoutTaskNestedInput>;
  dependents?: InputMaybe<TaskDependencyUpdateManyWithoutDependsOnNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueUpdateManyWithoutTaskNestedInput>;
  priority?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  subtasks?: InputMaybe<SubtaskUpdateManyWithoutParentTaskNestedInput>;
  testStrategy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateManyMutationInput = {
  complexity?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  priority?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  testStrategy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateOneRequiredWithoutDependenciesNestedInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutDependenciesInput>;
  create?: InputMaybe<TaskCreateWithoutDependenciesInput>;
  update?: InputMaybe<TaskUpdateToOneWithWhereWithoutDependenciesInput>;
  upsert?: InputMaybe<TaskUpsertWithoutDependenciesInput>;
};

export type TaskUpdateOneRequiredWithoutDependentsNestedInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutDependentsInput>;
  create?: InputMaybe<TaskCreateWithoutDependentsInput>;
  update?: InputMaybe<TaskUpdateToOneWithWhereWithoutDependentsInput>;
  upsert?: InputMaybe<TaskUpsertWithoutDependentsInput>;
};

export type TaskUpdateOneRequiredWithoutSubtasksNestedInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutSubtasksInput>;
  create?: InputMaybe<TaskCreateWithoutSubtasksInput>;
  update?: InputMaybe<TaskUpdateToOneWithWhereWithoutSubtasksInput>;
  upsert?: InputMaybe<TaskUpsertWithoutSubtasksInput>;
};

export type TaskUpdateOneWithoutIssuesNestedInput = {
  connect?: InputMaybe<TaskWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TaskCreateOrConnectWithoutIssuesInput>;
  create?: InputMaybe<TaskCreateWithoutIssuesInput>;
  delete?: InputMaybe<TaskWhereInput>;
  disconnect?: InputMaybe<TaskWhereInput>;
  update?: InputMaybe<TaskUpdateToOneWithWhereWithoutIssuesInput>;
  upsert?: InputMaybe<TaskUpsertWithoutIssuesInput>;
};

export type TaskUpdateToOneWithWhereWithoutDependenciesInput = {
  data: TaskUpdateWithoutDependenciesInput;
  where?: InputMaybe<TaskWhereInput>;
};

export type TaskUpdateToOneWithWhereWithoutDependentsInput = {
  data: TaskUpdateWithoutDependentsInput;
  where?: InputMaybe<TaskWhereInput>;
};

export type TaskUpdateToOneWithWhereWithoutIssuesInput = {
  data: TaskUpdateWithoutIssuesInput;
  where?: InputMaybe<TaskWhereInput>;
};

export type TaskUpdateToOneWithWhereWithoutSubtasksInput = {
  data: TaskUpdateWithoutSubtasksInput;
  where?: InputMaybe<TaskWhereInput>;
};

export type TaskUpdateWithoutDependenciesInput = {
  complexity?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dependents?: InputMaybe<TaskDependencyUpdateManyWithoutDependsOnNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueUpdateManyWithoutTaskNestedInput>;
  priority?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  subtasks?: InputMaybe<SubtaskUpdateManyWithoutParentTaskNestedInput>;
  testStrategy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateWithoutDependentsInput = {
  complexity?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dependencies?: InputMaybe<TaskDependencyUpdateManyWithoutTaskNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueUpdateManyWithoutTaskNestedInput>;
  priority?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  subtasks?: InputMaybe<SubtaskUpdateManyWithoutParentTaskNestedInput>;
  testStrategy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateWithoutIssuesInput = {
  complexity?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dependencies?: InputMaybe<TaskDependencyUpdateManyWithoutTaskNestedInput>;
  dependents?: InputMaybe<TaskDependencyUpdateManyWithoutDependsOnNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  priority?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  subtasks?: InputMaybe<SubtaskUpdateManyWithoutParentTaskNestedInput>;
  testStrategy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateWithoutSubtasksInput = {
  complexity?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dependencies?: InputMaybe<TaskDependencyUpdateManyWithoutTaskNestedInput>;
  dependents?: InputMaybe<TaskDependencyUpdateManyWithoutDependsOnNestedInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  details?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  issues?: InputMaybe<IssueUpdateManyWithoutTaskNestedInput>;
  priority?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  testStrategy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpsertWithoutDependenciesInput = {
  create: TaskCreateWithoutDependenciesInput;
  update: TaskUpdateWithoutDependenciesInput;
  where?: InputMaybe<TaskWhereInput>;
};

export type TaskUpsertWithoutDependentsInput = {
  create: TaskCreateWithoutDependentsInput;
  update: TaskUpdateWithoutDependentsInput;
  where?: InputMaybe<TaskWhereInput>;
};

export type TaskUpsertWithoutIssuesInput = {
  create: TaskCreateWithoutIssuesInput;
  update: TaskUpdateWithoutIssuesInput;
  where?: InputMaybe<TaskWhereInput>;
};

export type TaskUpsertWithoutSubtasksInput = {
  create: TaskCreateWithoutSubtasksInput;
  update: TaskUpdateWithoutSubtasksInput;
  where?: InputMaybe<TaskWhereInput>;
};

export type TaskWhereInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  complexity?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dependencies?: InputMaybe<TaskDependencyListRelationFilter>;
  dependents?: InputMaybe<TaskDependencyListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  details?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  issues?: InputMaybe<IssueListRelationFilter>;
  priority?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  subtasks?: InputMaybe<SubtaskListRelationFilter>;
  testStrategy?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TaskWhereUniqueInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  complexity?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dependencies?: InputMaybe<TaskDependencyListRelationFilter>;
  dependents?: InputMaybe<TaskDependencyListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  details?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  issues?: InputMaybe<IssueListRelationFilter>;
  priority?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  subtasks?: InputMaybe<SubtaskListRelationFilter>;
  testStrategy?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Team = {
  __typename?: 'Team';
  _count?: Maybe<TeamCount>;
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  cycles: Array<Cycle>;
  icon: Scalars['String']['output'];
  id: Scalars['String']['output'];
  joined: Scalars['Boolean']['output'];
  members: Array<TeamMember>;
  name: Scalars['String']['output'];
  projects: Array<TeamProject>;
  updatedAt: Scalars['DateTime']['output'];
};


export type TeamCyclesArgs = {
  cursor?: InputMaybe<CycleWhereUniqueInput>;
  distinct?: InputMaybe<Array<CycleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CycleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CycleWhereInput>;
};


export type TeamMembersArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamMemberWhereInput>;
};


export type TeamProjectsArgs = {
  cursor?: InputMaybe<TeamProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamProjectWhereInput>;
};

export type TeamCount = {
  __typename?: 'TeamCount';
  cycles: Scalars['Int']['output'];
  members: Scalars['Int']['output'];
  projects: Scalars['Int']['output'];
};


export type TeamCountCyclesArgs = {
  where?: InputMaybe<CycleWhereInput>;
};


export type TeamCountMembersArgs = {
  where?: InputMaybe<TeamMemberWhereInput>;
};


export type TeamCountProjectsArgs = {
  where?: InputMaybe<TeamProjectWhereInput>;
};

export type TeamCountAggregate = {
  __typename?: 'TeamCountAggregate';
  _all: Scalars['Int']['output'];
  color: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  icon: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  joined: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type TeamCountOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joined?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TeamCreateInput = {
  color: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycles?: InputMaybe<CycleCreateNestedManyWithoutTeamInput>;
  icon: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  joined?: InputMaybe<Scalars['Boolean']['input']>;
  members?: InputMaybe<TeamMemberCreateNestedManyWithoutTeamInput>;
  name: Scalars['String']['input'];
  projects?: InputMaybe<TeamProjectCreateNestedManyWithoutTeamInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TeamCreateManyInput = {
  color: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  icon: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  joined?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TeamCreateNestedOneWithoutCyclesInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutCyclesInput>;
  create?: InputMaybe<TeamCreateWithoutCyclesInput>;
};

export type TeamCreateNestedOneWithoutMembersInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<TeamCreateWithoutMembersInput>;
};

export type TeamCreateNestedOneWithoutProjectsInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<TeamCreateWithoutProjectsInput>;
};

export type TeamCreateOrConnectWithoutCyclesInput = {
  create: TeamCreateWithoutCyclesInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutMembersInput = {
  create: TeamCreateWithoutMembersInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutProjectsInput = {
  create: TeamCreateWithoutProjectsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateWithoutCyclesInput = {
  color: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  icon: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  joined?: InputMaybe<Scalars['Boolean']['input']>;
  members?: InputMaybe<TeamMemberCreateNestedManyWithoutTeamInput>;
  name: Scalars['String']['input'];
  projects?: InputMaybe<TeamProjectCreateNestedManyWithoutTeamInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TeamCreateWithoutMembersInput = {
  color: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycles?: InputMaybe<CycleCreateNestedManyWithoutTeamInput>;
  icon: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  joined?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  projects?: InputMaybe<TeamProjectCreateNestedManyWithoutTeamInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TeamCreateWithoutProjectsInput = {
  color: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  cycles?: InputMaybe<CycleCreateNestedManyWithoutTeamInput>;
  icon: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  joined?: InputMaybe<Scalars['Boolean']['input']>;
  members?: InputMaybe<TeamMemberCreateNestedManyWithoutTeamInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TeamGroupBy = {
  __typename?: 'TeamGroupBy';
  _count?: Maybe<TeamCountAggregate>;
  _max?: Maybe<TeamMaxAggregate>;
  _min?: Maybe<TeamMinAggregate>;
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['String']['output'];
  joined: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TeamMaxAggregate = {
  __typename?: 'TeamMaxAggregate';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  joined?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TeamMaxOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joined?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  id: Scalars['String']['output'];
  team: Team;
  teamId: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type TeamMemberCountAggregate = {
  __typename?: 'TeamMemberCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  teamId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type TeamMemberCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  teamId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TeamMemberCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  team: TeamCreateNestedOneWithoutMembersInput;
  user: UserCreateNestedOneWithoutTeamsInput;
};

export type TeamMemberCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type TeamMemberCreateManyTeamInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};

export type TeamMemberCreateManyTeamInputEnvelope = {
  data: Array<TeamMemberCreateManyTeamInput>;
};

export type TeamMemberCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['String']['input'];
};

export type TeamMemberCreateManyUserInputEnvelope = {
  data: Array<TeamMemberCreateManyUserInput>;
};

export type TeamMemberCreateNestedManyWithoutTeamInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamMemberCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<TeamMemberCreateWithoutTeamInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyTeamInputEnvelope>;
};

export type TeamMemberCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TeamMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyUserInputEnvelope>;
};

export type TeamMemberCreateOrConnectWithoutTeamInput = {
  create: TeamMemberCreateWithoutTeamInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberCreateOrConnectWithoutUserInput = {
  create: TeamMemberCreateWithoutUserInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberCreateWithoutTeamInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutTeamsInput;
};

export type TeamMemberCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  team: TeamCreateNestedOneWithoutMembersInput;
};

export type TeamMemberGroupBy = {
  __typename?: 'TeamMemberGroupBy';
  _count?: Maybe<TeamMemberCountAggregate>;
  _max?: Maybe<TeamMemberMaxAggregate>;
  _min?: Maybe<TeamMemberMinAggregate>;
  id: Scalars['String']['output'];
  teamId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type TeamMemberListRelationFilter = {
  every?: InputMaybe<TeamMemberWhereInput>;
  none?: InputMaybe<TeamMemberWhereInput>;
  some?: InputMaybe<TeamMemberWhereInput>;
};

export type TeamMemberMaxAggregate = {
  __typename?: 'TeamMemberMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  teamId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TeamMemberMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  teamId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TeamMemberMinAggregate = {
  __typename?: 'TeamMemberMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  teamId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type TeamMemberMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  teamId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TeamMemberOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TeamMemberOrderByWithAggregationInput = {
  _count?: InputMaybe<TeamMemberCountOrderByAggregateInput>;
  _max?: InputMaybe<TeamMemberMaxOrderByAggregateInput>;
  _min?: InputMaybe<TeamMemberMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  teamId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TeamMemberOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  team?: InputMaybe<TeamOrderByWithRelationInput>;
  teamId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum TeamMemberScalarFieldEnum {
  Id = 'id',
  TeamId = 'teamId',
  UserId = 'userId'
}

export type TeamMemberScalarWhereInput = {
  AND?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  teamId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TeamMemberScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TeamMemberScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TeamMemberScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TeamMemberScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  teamId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type TeamMemberTeamIdUserIdCompoundUniqueInput = {
  teamId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type TeamMemberUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  team?: InputMaybe<TeamUpdateOneRequiredWithoutMembersNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTeamsNestedInput>;
};

export type TeamMemberUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TeamMemberUpdateManyWithWhereWithoutTeamInput = {
  data: TeamMemberUpdateManyMutationInput;
  where: TeamMemberScalarWhereInput;
};

export type TeamMemberUpdateManyWithWhereWithoutUserInput = {
  data: TeamMemberUpdateManyMutationInput;
  where: TeamMemberScalarWhereInput;
};

export type TeamMemberUpdateManyWithoutTeamNestedInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamMemberCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<TeamMemberCreateWithoutTeamInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyTeamInputEnvelope>;
  delete?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<TeamMemberUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: InputMaybe<Array<TeamMemberUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: InputMaybe<Array<TeamMemberUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type TeamMemberUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TeamMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<TeamMemberUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TeamMemberUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TeamMemberUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
  data: TeamMemberUpdateWithoutTeamInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpdateWithWhereUniqueWithoutUserInput = {
  data: TeamMemberUpdateWithoutUserInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpdateWithoutTeamInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTeamsNestedInput>;
};

export type TeamMemberUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  team?: InputMaybe<TeamUpdateOneRequiredWithoutMembersNestedInput>;
};

export type TeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
  create: TeamMemberCreateWithoutTeamInput;
  update: TeamMemberUpdateWithoutTeamInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpsertWithWhereUniqueWithoutUserInput = {
  create: TeamMemberCreateWithoutUserInput;
  update: TeamMemberUpdateWithoutUserInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberWhereInput = {
  AND?: InputMaybe<Array<TeamMemberWhereInput>>;
  NOT?: InputMaybe<Array<TeamMemberWhereInput>>;
  OR?: InputMaybe<Array<TeamMemberWhereInput>>;
  id?: InputMaybe<StringFilter>;
  team?: InputMaybe<TeamRelationFilter>;
  teamId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TeamMemberWhereUniqueInput = {
  AND?: InputMaybe<Array<TeamMemberWhereInput>>;
  NOT?: InputMaybe<Array<TeamMemberWhereInput>>;
  OR?: InputMaybe<Array<TeamMemberWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  team?: InputMaybe<TeamRelationFilter>;
  teamId?: InputMaybe<StringFilter>;
  teamId_userId?: InputMaybe<TeamMemberTeamIdUserIdCompoundUniqueInput>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TeamMinAggregate = {
  __typename?: 'TeamMinAggregate';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  joined?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TeamMinOrderByAggregateInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joined?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TeamOrderByWithAggregationInput = {
  _count?: InputMaybe<TeamCountOrderByAggregateInput>;
  _max?: InputMaybe<TeamMaxOrderByAggregateInput>;
  _min?: InputMaybe<TeamMinOrderByAggregateInput>;
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joined?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TeamOrderByWithRelationInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  cycles?: InputMaybe<CycleOrderByRelationAggregateInput>;
  icon?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joined?: InputMaybe<SortOrder>;
  members?: InputMaybe<TeamMemberOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  projects?: InputMaybe<TeamProjectOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TeamProject = {
  __typename?: 'TeamProject';
  id: Scalars['String']['output'];
  project: Project;
  projectId: Scalars['String']['output'];
  team: Team;
  teamId: Scalars['String']['output'];
};

export type TeamProjectCountAggregate = {
  __typename?: 'TeamProjectCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  projectId: Scalars['Int']['output'];
  teamId: Scalars['Int']['output'];
};

export type TeamProjectCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  teamId?: InputMaybe<SortOrder>;
};

export type TeamProjectCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  project: ProjectCreateNestedOneWithoutTeamsInput;
  team: TeamCreateNestedOneWithoutProjectsInput;
};

export type TeamProjectCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};

export type TeamProjectCreateManyProjectInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  teamId: Scalars['String']['input'];
};

export type TeamProjectCreateManyProjectInputEnvelope = {
  data: Array<TeamProjectCreateManyProjectInput>;
};

export type TeamProjectCreateManyTeamInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  projectId: Scalars['String']['input'];
};

export type TeamProjectCreateManyTeamInputEnvelope = {
  data: Array<TeamProjectCreateManyTeamInput>;
};

export type TeamProjectCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<TeamProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamProjectCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<TeamProjectCreateWithoutProjectInput>>;
  createMany?: InputMaybe<TeamProjectCreateManyProjectInputEnvelope>;
};

export type TeamProjectCreateNestedManyWithoutTeamInput = {
  connect?: InputMaybe<Array<TeamProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamProjectCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<TeamProjectCreateWithoutTeamInput>>;
  createMany?: InputMaybe<TeamProjectCreateManyTeamInputEnvelope>;
};

export type TeamProjectCreateOrConnectWithoutProjectInput = {
  create: TeamProjectCreateWithoutProjectInput;
  where: TeamProjectWhereUniqueInput;
};

export type TeamProjectCreateOrConnectWithoutTeamInput = {
  create: TeamProjectCreateWithoutTeamInput;
  where: TeamProjectWhereUniqueInput;
};

export type TeamProjectCreateWithoutProjectInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  team: TeamCreateNestedOneWithoutProjectsInput;
};

export type TeamProjectCreateWithoutTeamInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  project: ProjectCreateNestedOneWithoutTeamsInput;
};

export type TeamProjectGroupBy = {
  __typename?: 'TeamProjectGroupBy';
  _count?: Maybe<TeamProjectCountAggregate>;
  _max?: Maybe<TeamProjectMaxAggregate>;
  _min?: Maybe<TeamProjectMinAggregate>;
  id: Scalars['String']['output'];
  projectId: Scalars['String']['output'];
  teamId: Scalars['String']['output'];
};

export type TeamProjectListRelationFilter = {
  every?: InputMaybe<TeamProjectWhereInput>;
  none?: InputMaybe<TeamProjectWhereInput>;
  some?: InputMaybe<TeamProjectWhereInput>;
};

export type TeamProjectMaxAggregate = {
  __typename?: 'TeamProjectMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  teamId?: Maybe<Scalars['String']['output']>;
};

export type TeamProjectMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  teamId?: InputMaybe<SortOrder>;
};

export type TeamProjectMinAggregate = {
  __typename?: 'TeamProjectMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  teamId?: Maybe<Scalars['String']['output']>;
};

export type TeamProjectMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  teamId?: InputMaybe<SortOrder>;
};

export type TeamProjectOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TeamProjectOrderByWithAggregationInput = {
  _count?: InputMaybe<TeamProjectCountOrderByAggregateInput>;
  _max?: InputMaybe<TeamProjectMaxOrderByAggregateInput>;
  _min?: InputMaybe<TeamProjectMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  teamId?: InputMaybe<SortOrder>;
};

export type TeamProjectOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  team?: InputMaybe<TeamOrderByWithRelationInput>;
  teamId?: InputMaybe<SortOrder>;
};

export enum TeamProjectScalarFieldEnum {
  Id = 'id',
  ProjectId = 'projectId',
  TeamId = 'teamId'
}

export type TeamProjectScalarWhereInput = {
  AND?: InputMaybe<Array<TeamProjectScalarWhereInput>>;
  NOT?: InputMaybe<Array<TeamProjectScalarWhereInput>>;
  OR?: InputMaybe<Array<TeamProjectScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  projectId?: InputMaybe<StringFilter>;
  teamId?: InputMaybe<StringFilter>;
};

export type TeamProjectScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TeamProjectScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TeamProjectScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TeamProjectScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  projectId?: InputMaybe<StringWithAggregatesFilter>;
  teamId?: InputMaybe<StringWithAggregatesFilter>;
};

export type TeamProjectTeamIdProjectIdCompoundUniqueInput = {
  projectId: Scalars['String']['input'];
  teamId: Scalars['String']['input'];
};

export type TeamProjectUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutTeamsNestedInput>;
  team?: InputMaybe<TeamUpdateOneRequiredWithoutProjectsNestedInput>;
};

export type TeamProjectUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TeamProjectUpdateManyWithWhereWithoutProjectInput = {
  data: TeamProjectUpdateManyMutationInput;
  where: TeamProjectScalarWhereInput;
};

export type TeamProjectUpdateManyWithWhereWithoutTeamInput = {
  data: TeamProjectUpdateManyMutationInput;
  where: TeamProjectScalarWhereInput;
};

export type TeamProjectUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<TeamProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamProjectCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<TeamProjectCreateWithoutProjectInput>>;
  createMany?: InputMaybe<TeamProjectCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<TeamProjectWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TeamProjectScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TeamProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamProjectWhereUniqueInput>>;
  update?: InputMaybe<Array<TeamProjectUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<TeamProjectUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<TeamProjectUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type TeamProjectUpdateManyWithoutTeamNestedInput = {
  connect?: InputMaybe<Array<TeamProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamProjectCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<TeamProjectCreateWithoutTeamInput>>;
  createMany?: InputMaybe<TeamProjectCreateManyTeamInputEnvelope>;
  delete?: InputMaybe<Array<TeamProjectWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TeamProjectScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TeamProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamProjectWhereUniqueInput>>;
  update?: InputMaybe<Array<TeamProjectUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: InputMaybe<Array<TeamProjectUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: InputMaybe<Array<TeamProjectUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type TeamProjectUpdateWithWhereUniqueWithoutProjectInput = {
  data: TeamProjectUpdateWithoutProjectInput;
  where: TeamProjectWhereUniqueInput;
};

export type TeamProjectUpdateWithWhereUniqueWithoutTeamInput = {
  data: TeamProjectUpdateWithoutTeamInput;
  where: TeamProjectWhereUniqueInput;
};

export type TeamProjectUpdateWithoutProjectInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  team?: InputMaybe<TeamUpdateOneRequiredWithoutProjectsNestedInput>;
};

export type TeamProjectUpdateWithoutTeamInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutTeamsNestedInput>;
};

export type TeamProjectUpsertWithWhereUniqueWithoutProjectInput = {
  create: TeamProjectCreateWithoutProjectInput;
  update: TeamProjectUpdateWithoutProjectInput;
  where: TeamProjectWhereUniqueInput;
};

export type TeamProjectUpsertWithWhereUniqueWithoutTeamInput = {
  create: TeamProjectCreateWithoutTeamInput;
  update: TeamProjectUpdateWithoutTeamInput;
  where: TeamProjectWhereUniqueInput;
};

export type TeamProjectWhereInput = {
  AND?: InputMaybe<Array<TeamProjectWhereInput>>;
  NOT?: InputMaybe<Array<TeamProjectWhereInput>>;
  OR?: InputMaybe<Array<TeamProjectWhereInput>>;
  id?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<StringFilter>;
  team?: InputMaybe<TeamRelationFilter>;
  teamId?: InputMaybe<StringFilter>;
};

export type TeamProjectWhereUniqueInput = {
  AND?: InputMaybe<Array<TeamProjectWhereInput>>;
  NOT?: InputMaybe<Array<TeamProjectWhereInput>>;
  OR?: InputMaybe<Array<TeamProjectWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<StringFilter>;
  team?: InputMaybe<TeamRelationFilter>;
  teamId?: InputMaybe<StringFilter>;
  teamId_projectId?: InputMaybe<TeamProjectTeamIdProjectIdCompoundUniqueInput>;
};

export type TeamRelationFilter = {
  is?: InputMaybe<TeamWhereInput>;
  isNot?: InputMaybe<TeamWhereInput>;
};

export enum TeamScalarFieldEnum {
  Color = 'color',
  CreatedAt = 'createdAt',
  Icon = 'icon',
  Id = 'id',
  Joined = 'joined',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type TeamScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TeamScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TeamScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TeamScalarWhereWithAggregatesInput>>;
  color?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  icon?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  joined?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TeamUpdateInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cycles?: InputMaybe<CycleUpdateManyWithoutTeamNestedInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joined?: InputMaybe<BoolFieldUpdateOperationsInput>;
  members?: InputMaybe<TeamMemberUpdateManyWithoutTeamNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<TeamProjectUpdateManyWithoutTeamNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateManyMutationInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joined?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateOneRequiredWithoutCyclesNestedInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutCyclesInput>;
  create?: InputMaybe<TeamCreateWithoutCyclesInput>;
  update?: InputMaybe<TeamUpdateToOneWithWhereWithoutCyclesInput>;
  upsert?: InputMaybe<TeamUpsertWithoutCyclesInput>;
};

export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<TeamCreateWithoutMembersInput>;
  update?: InputMaybe<TeamUpdateToOneWithWhereWithoutMembersInput>;
  upsert?: InputMaybe<TeamUpsertWithoutMembersInput>;
};

export type TeamUpdateOneRequiredWithoutProjectsNestedInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<TeamCreateWithoutProjectsInput>;
  update?: InputMaybe<TeamUpdateToOneWithWhereWithoutProjectsInput>;
  upsert?: InputMaybe<TeamUpsertWithoutProjectsInput>;
};

export type TeamUpdateToOneWithWhereWithoutCyclesInput = {
  data: TeamUpdateWithoutCyclesInput;
  where?: InputMaybe<TeamWhereInput>;
};

export type TeamUpdateToOneWithWhereWithoutMembersInput = {
  data: TeamUpdateWithoutMembersInput;
  where?: InputMaybe<TeamWhereInput>;
};

export type TeamUpdateToOneWithWhereWithoutProjectsInput = {
  data: TeamUpdateWithoutProjectsInput;
  where?: InputMaybe<TeamWhereInput>;
};

export type TeamUpdateWithoutCyclesInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joined?: InputMaybe<BoolFieldUpdateOperationsInput>;
  members?: InputMaybe<TeamMemberUpdateManyWithoutTeamNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<TeamProjectUpdateManyWithoutTeamNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutMembersInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cycles?: InputMaybe<CycleUpdateManyWithoutTeamNestedInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joined?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<TeamProjectUpdateManyWithoutTeamNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutProjectsInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  cycles?: InputMaybe<CycleUpdateManyWithoutTeamNestedInput>;
  icon?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joined?: InputMaybe<BoolFieldUpdateOperationsInput>;
  members?: InputMaybe<TeamMemberUpdateManyWithoutTeamNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpsertWithoutCyclesInput = {
  create: TeamCreateWithoutCyclesInput;
  update: TeamUpdateWithoutCyclesInput;
  where?: InputMaybe<TeamWhereInput>;
};

export type TeamUpsertWithoutMembersInput = {
  create: TeamCreateWithoutMembersInput;
  update: TeamUpdateWithoutMembersInput;
  where?: InputMaybe<TeamWhereInput>;
};

export type TeamUpsertWithoutProjectsInput = {
  create: TeamCreateWithoutProjectsInput;
  update: TeamUpdateWithoutProjectsInput;
  where?: InputMaybe<TeamWhereInput>;
};

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  cycles?: InputMaybe<CycleListRelationFilter>;
  icon?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  joined?: InputMaybe<BoolFilter>;
  members?: InputMaybe<TeamMemberListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  projects?: InputMaybe<TeamProjectListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TeamWhereUniqueInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  cycles?: InputMaybe<CycleListRelationFilter>;
  icon?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  joined?: InputMaybe<BoolFilter>;
  members?: InputMaybe<TeamMemberListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  projects?: InputMaybe<TeamProjectListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  assignedIssues: Array<Issue>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  joinedDate: Scalars['DateTime']['output'];
  ledProjects: Array<Project>;
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
  teamIds: Scalars['String']['output'];
  teams: Array<TeamMember>;
  updatedAt: Scalars['DateTime']['output'];
};


export type UserAssignedIssuesArgs = {
  cursor?: InputMaybe<IssueWhereUniqueInput>;
  distinct?: InputMaybe<Array<IssueScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IssueWhereInput>;
};


export type UserLedProjectsArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProjectScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type UserTeamsArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TeamMemberWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  assignedIssues: Scalars['Int']['output'];
  ledProjects: Scalars['Int']['output'];
  teams: Scalars['Int']['output'];
};


export type UserCountAssignedIssuesArgs = {
  where?: InputMaybe<IssueWhereInput>;
};


export type UserCountLedProjectsArgs = {
  where?: InputMaybe<ProjectWhereInput>;
};


export type UserCountTeamsArgs = {
  where?: InputMaybe<TeamMemberWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  avatarUrl: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  joinedDate: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  teamIds: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joinedDate?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  teamIds?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  assignedIssues?: InputMaybe<IssueCreateNestedManyWithoutAssigneeInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  joinedDate: Scalars['DateTime']['input'];
  ledProjects?: InputMaybe<ProjectCreateNestedManyWithoutLeadInput>;
  name: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  teamIds?: InputMaybe<Scalars['String']['input']>;
  teams?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateManyInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  joinedDate: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  teamIds?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateNestedOneWithoutAssignedIssuesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssignedIssuesInput>;
  create?: InputMaybe<UserCreateWithoutAssignedIssuesInput>;
};

export type UserCreateNestedOneWithoutLedProjectsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLedProjectsInput>;
  create?: InputMaybe<UserCreateWithoutLedProjectsInput>;
};

export type UserCreateNestedOneWithoutTeamsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTeamsInput>;
  create?: InputMaybe<UserCreateWithoutTeamsInput>;
};

export type UserCreateOrConnectWithoutAssignedIssuesInput = {
  create: UserCreateWithoutAssignedIssuesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLedProjectsInput = {
  create: UserCreateWithoutLedProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTeamsInput = {
  create: UserCreateWithoutTeamsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAssignedIssuesInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  joinedDate: Scalars['DateTime']['input'];
  ledProjects?: InputMaybe<ProjectCreateNestedManyWithoutLeadInput>;
  name: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  teamIds?: InputMaybe<Scalars['String']['input']>;
  teams?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutLedProjectsInput = {
  assignedIssues?: InputMaybe<IssueCreateNestedManyWithoutAssigneeInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  joinedDate: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  teamIds?: InputMaybe<Scalars['String']['input']>;
  teams?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutTeamsInput = {
  assignedIssues?: InputMaybe<IssueCreateNestedManyWithoutAssigneeInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  joinedDate: Scalars['DateTime']['input'];
  ledProjects?: InputMaybe<ProjectCreateNestedManyWithoutLeadInput>;
  name: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  teamIds?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  joinedDate: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
  teamIds: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  joinedDate?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  teamIds?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joinedDate?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  teamIds?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  joinedDate?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  teamIds?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joinedDate?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  teamIds?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  avatarUrl?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joinedDate?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  teamIds?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  assignedIssues?: InputMaybe<IssueOrderByRelationAggregateInput>;
  avatarUrl?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  joinedDate?: InputMaybe<SortOrder>;
  ledProjects?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  teamIds?: InputMaybe<SortOrder>;
  teams?: InputMaybe<TeamMemberOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  AvatarUrl = 'avatarUrl',
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  JoinedDate = 'joinedDate',
  Name = 'name',
  Role = 'role',
  Status = 'status',
  TeamIds = 'teamIds',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  avatarUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  joinedDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<StringWithAggregatesFilter>;
  teamIds?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  assignedIssues?: InputMaybe<IssueUpdateManyWithoutAssigneeNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joinedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  ledProjects?: InputMaybe<ProjectUpdateManyWithoutLeadNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  teamIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  teams?: InputMaybe<TeamMemberUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joinedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  teamIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutTeamsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTeamsInput>;
  create?: InputMaybe<UserCreateWithoutTeamsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutTeamsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTeamsInput>;
};

export type UserUpdateOneWithoutAssignedIssuesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssignedIssuesInput>;
  create?: InputMaybe<UserCreateWithoutAssignedIssuesInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAssignedIssuesInput>;
  upsert?: InputMaybe<UserUpsertWithoutAssignedIssuesInput>;
};

export type UserUpdateOneWithoutLedProjectsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLedProjectsInput>;
  create?: InputMaybe<UserCreateWithoutLedProjectsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutLedProjectsInput>;
  upsert?: InputMaybe<UserUpsertWithoutLedProjectsInput>;
};

export type UserUpdateToOneWithWhereWithoutAssignedIssuesInput = {
  data: UserUpdateWithoutAssignedIssuesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutLedProjectsInput = {
  data: UserUpdateWithoutLedProjectsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutTeamsInput = {
  data: UserUpdateWithoutTeamsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAssignedIssuesInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joinedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  ledProjects?: InputMaybe<ProjectUpdateManyWithoutLeadNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  teamIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  teams?: InputMaybe<TeamMemberUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLedProjectsInput = {
  assignedIssues?: InputMaybe<IssueUpdateManyWithoutAssigneeNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joinedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  teamIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  teams?: InputMaybe<TeamMemberUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTeamsInput = {
  assignedIssues?: InputMaybe<IssueUpdateManyWithoutAssigneeNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  joinedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  ledProjects?: InputMaybe<ProjectUpdateManyWithoutLeadNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  status?: InputMaybe<StringFieldUpdateOperationsInput>;
  teamIds?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAssignedIssuesInput = {
  create: UserCreateWithoutAssignedIssuesInput;
  update: UserUpdateWithoutAssignedIssuesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutLedProjectsInput = {
  create: UserCreateWithoutLedProjectsInput;
  update: UserUpdateWithoutLedProjectsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutTeamsInput = {
  create: UserCreateWithoutTeamsInput;
  update: UserUpdateWithoutTeamsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assignedIssues?: InputMaybe<IssueListRelationFilter>;
  avatarUrl?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  joinedDate?: InputMaybe<DateTimeFilter>;
  ledProjects?: InputMaybe<ProjectListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  teamIds?: InputMaybe<StringFilter>;
  teams?: InputMaybe<TeamMemberListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assignedIssues?: InputMaybe<IssueListRelationFilter>;
  avatarUrl?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  joinedDate?: InputMaybe<DateTimeFilter>;
  ledProjects?: InputMaybe<ProjectListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringFilter>;
  status?: InputMaybe<StringFilter>;
  teamIds?: InputMaybe<StringFilter>;
  teams?: InputMaybe<TeamMemberListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BulkUpdateIssuesMutationVariables = Exact<{
  where: IssueWhereInput;
  data: IssueUpdateManyMutationInput;
}>;


export type BulkUpdateIssuesMutation = { __typename?: 'Mutation', updateManyIssue: { __typename?: 'AffectedRowsOutput', count: number } };

export type CreateIssueMutationVariables = Exact<{
  data: IssueCreateInput;
}>;


export type CreateIssueMutation = { __typename?: 'Mutation', createOneIssue: { __typename?: 'Issue', id: string, identifier: string, title: string, description: string, status?: string | null, priority?: string | null, rank: string, cycleId?: string | null, dueDate?: string | null, issueType: string, taskId?: number | null, subtaskId?: string | null, assigneeId?: string | null, projectId?: string | null, createdAt: string, updatedAt: string, issueStatus?: { __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string } | null, issuePriority?: { __typename?: 'IssuePriority', id: string, name: string, iconName: string, order: number } | null, assignee?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null } | null, labels: Array<{ __typename?: 'IssueLabel', id: string, label: { __typename?: 'Label', id: string, name: string, color: string } }>, subtask?: { __typename?: 'Subtask', id: string, title: string, description: string, details?: string | null, status: string, createdAt: string, updatedAt: string } | null } };

export type CreateLabelMutationVariables = Exact<{
  input: LabelCreateInput;
}>;


export type CreateLabelMutation = { __typename?: 'Mutation', createOneLabel: { __typename?: 'Label', id: string, name: string, color: string, description?: string | null, createdAt: string, updatedAt: string } };

export type DeleteIssueMutationVariables = Exact<{
  where: IssueWhereUniqueInput;
}>;


export type DeleteIssueMutation = { __typename?: 'Mutation', deleteOneIssue?: { __typename?: 'Issue', id: string, identifier: string } | null };

export type GetIssueStatusesQueryVariables = Exact<{
  where?: InputMaybe<IssueStatusWhereInput>;
  orderBy?: InputMaybe<Array<IssueStatusOrderByWithRelationInput> | IssueStatusOrderByWithRelationInput>;
}>;


export type GetIssueStatusesQuery = { __typename?: 'Query', issueStatuses: Array<{ __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string, createdAt: string, updatedAt: string }> };

export type GetDisplayIssueStatusesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDisplayIssueStatusesQuery = { __typename?: 'Query', issueStatuses: Array<{ __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string, createdAt: string, updatedAt: string }> };

export type GetIssueQueryVariables = Exact<{
  where: IssueWhereUniqueInput;
}>;


export type GetIssueQuery = { __typename?: 'Query', issue?: { __typename?: 'Issue', id: string, identifier: string, title: string, description: string, status?: string | null, priority?: string | null, rank: string, cycleId?: string | null, dueDate?: string | null, issueType: string, taskId?: number | null, subtaskId?: string | null, assigneeId?: string | null, projectId?: string | null, createdAt: string, updatedAt: string, labels: Array<{ __typename?: 'IssueLabel', id: string, label: { __typename?: 'Label', id: string, name: string, color: string, description?: string | null } }>, project?: { __typename?: 'Project', id: string, name: string, identifier?: string | null, color?: string | null, icon?: string | null } | null, parentIssue?: { __typename?: 'Issue', id: string, identifier: string, title: string, status?: string | null } | null, subIssues: Array<{ __typename?: 'Issue', id: string, identifier: string, title: string, status?: string | null, assignee?: { __typename?: 'User', id: string, name: string, avatarUrl?: string | null } | null }>, issueStatus?: { __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string } | null, issuePriority?: { __typename?: 'IssuePriority', id: string, name: string, iconName: string, order: number } | null, assignee?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null } | null, subtask?: { __typename?: 'Subtask', id: string, title: string, description: string, details?: string | null, status: string, createdAt: string, updatedAt: string } | null } | null };

export type GetIssuesByStatusQueryVariables = Exact<{
  status: Scalars['String']['input'];
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput> | IssueOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetIssuesByStatusQuery = { __typename?: 'Query', issues: Array<{ __typename?: 'Issue', id: string, identifier: string, title: string, description: string, status?: string | null, priority?: string | null, rank: string, cycleId?: string | null, dueDate?: string | null, issueType: string, taskId?: number | null, subtaskId?: string | null, assigneeId?: string | null, projectId?: string | null, createdAt: string, updatedAt: string, issueStatus?: { __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string } | null, issuePriority?: { __typename?: 'IssuePriority', id: string, name: string, iconName: string, order: number } | null, assignee?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null } | null, labels: Array<{ __typename?: 'IssueLabel', id: string, label: { __typename?: 'Label', id: string, name: string, color: string } }>, subtask?: { __typename?: 'Subtask', id: string, title: string, description: string, details?: string | null, status: string, createdAt: string, updatedAt: string } | null }> };

export type GetIssuesStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIssuesStatsQuery = { __typename?: 'Query', issuesStats: { __typename?: 'IssueStats', total: number, completed: number, inProgress: number, pending: number, completionRate: number } };

export type GetIssuesQueryVariables = Exact<{
  where?: InputMaybe<IssueWhereInput>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput> | IssueOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetIssuesQuery = { __typename?: 'Query', issues: Array<{ __typename?: 'Issue', id: string, identifier: string, title: string, description: string, status?: string | null, priority?: string | null, rank: string, cycleId?: string | null, dueDate?: string | null, issueType: string, taskId?: number | null, subtaskId?: string | null, assigneeId?: string | null, projectId?: string | null, createdAt: string, updatedAt: string, issueStatus?: { __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string } | null, issuePriority?: { __typename?: 'IssuePriority', id: string, name: string, iconName: string, order: number } | null, assignee?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null } | null, labels: Array<{ __typename?: 'IssueLabel', id: string, label: { __typename?: 'Label', id: string, name: string, color: string } }>, subtask?: { __typename?: 'Subtask', id: string, title: string, description: string, details?: string | null, status: string, createdAt: string, updatedAt: string } | null }> };

export type GetIssuesDetailedQueryVariables = Exact<{
  where?: InputMaybe<IssueWhereInput>;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput> | IssueOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetIssuesDetailedQuery = { __typename?: 'Query', issues: Array<{ __typename?: 'Issue', id: string, identifier: string, title: string, description: string, status?: string | null, priority?: string | null, rank: string, cycleId?: string | null, dueDate?: string | null, issueType: string, taskId?: number | null, subtaskId?: string | null, assigneeId?: string | null, projectId?: string | null, createdAt: string, updatedAt: string, issueStatus?: { __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string } | null, issuePriority?: { __typename?: 'IssuePriority', id: string, name: string, iconName: string, order: number } | null, assignee?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null } | null, labels: Array<{ __typename?: 'IssueLabel', id: string, label: { __typename?: 'Label', id: string, name: string, color: string } }>, subtask?: { __typename?: 'Subtask', id: string, title: string, description: string, details?: string | null, status: string, createdAt: string, updatedAt: string } | null }> };

export type GetLabelsQueryVariables = Exact<{
  where?: InputMaybe<LabelWhereInput>;
  orderBy?: InputMaybe<Array<LabelOrderByWithRelationInput> | LabelOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetLabelsQuery = { __typename?: 'Query', labels: Array<{ __typename?: 'Label', id: string, name: string, color: string, description?: string | null, createdAt: string, updatedAt: string }> };

export type GetPrioritiesQueryVariables = Exact<{
  where?: InputMaybe<IssuePriorityWhereInput>;
  orderBy?: InputMaybe<Array<IssuePriorityOrderByWithRelationInput> | IssuePriorityOrderByWithRelationInput>;
}>;


export type GetPrioritiesQuery = { __typename?: 'Query', issuePriorities: Array<{ __typename?: 'IssuePriority', id: string, name: string, order: number, iconName: string, createdAt: string, updatedAt: string }> };

export type GetProjectsQueryVariables = Exact<{
  where?: InputMaybe<ProjectWhereInput>;
  orderBy?: InputMaybe<Array<ProjectOrderByWithRelationInput> | ProjectOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, name: string, identifier?: string | null, description?: string | null, color?: string | null, icon?: string | null, leadId?: string | null, health: string, percentComplete: number, startDate?: string | null, createdAt: string, updatedAt: string }> };

export type GetUsersQueryVariables = Exact<{
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null, role: string, status: string, createdAt: string, updatedAt: string }> };

export type GetUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null, role: string, status: string, createdAt: string, updatedAt: string } | null };

export type IssueCoreFragment = { __typename?: 'Issue', id: string, identifier: string, title: string, description: string, status?: string | null, priority?: string | null, rank: string, cycleId?: string | null, dueDate?: string | null, issueType: string, taskId?: number | null, subtaskId?: string | null, assigneeId?: string | null, projectId?: string | null, createdAt: string, updatedAt: string, issueStatus?: { __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string } | null, issuePriority?: { __typename?: 'IssuePriority', id: string, name: string, iconName: string, order: number } | null, assignee?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null } | null, labels: Array<{ __typename?: 'IssueLabel', id: string, label: { __typename?: 'Label', id: string, name: string, color: string } }>, subtask?: { __typename?: 'Subtask', id: string, title: string, description: string, details?: string | null, status: string, createdAt: string, updatedAt: string } | null };

export type IssueDetailsFragment = { __typename?: 'Issue', id: string, identifier: string, title: string, description: string, status?: string | null, priority?: string | null, rank: string, cycleId?: string | null, dueDate?: string | null, issueType: string, taskId?: number | null, subtaskId?: string | null, assigneeId?: string | null, projectId?: string | null, createdAt: string, updatedAt: string, labels: Array<{ __typename?: 'IssueLabel', id: string, label: { __typename?: 'Label', id: string, name: string, color: string, description?: string | null } }>, project?: { __typename?: 'Project', id: string, name: string, identifier?: string | null, color?: string | null, icon?: string | null } | null, parentIssue?: { __typename?: 'Issue', id: string, identifier: string, title: string, status?: string | null } | null, subIssues: Array<{ __typename?: 'Issue', id: string, identifier: string, title: string, status?: string | null, assignee?: { __typename?: 'User', id: string, name: string, avatarUrl?: string | null } | null }>, issueStatus?: { __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string } | null, issuePriority?: { __typename?: 'IssuePriority', id: string, name: string, iconName: string, order: number } | null, assignee?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null } | null, subtask?: { __typename?: 'Subtask', id: string, title: string, description: string, details?: string | null, status: string, createdAt: string, updatedAt: string } | null };

export type SearchIssuesQueryVariables = Exact<{
  search: Scalars['String']['input'];
  where: IssueWhereInput;
  orderBy?: InputMaybe<Array<IssueOrderByWithRelationInput> | IssueOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchIssuesQuery = { __typename?: 'Query', issues: Array<{ __typename?: 'Issue', id: string, identifier: string, title: string, description: string, status?: string | null, priority?: string | null, rank: string, cycleId?: string | null, dueDate?: string | null, issueType: string, taskId?: number | null, subtaskId?: string | null, assigneeId?: string | null, projectId?: string | null, createdAt: string, updatedAt: string, issueStatus?: { __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string } | null, issuePriority?: { __typename?: 'IssuePriority', id: string, name: string, iconName: string, order: number } | null, assignee?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null } | null, labels: Array<{ __typename?: 'IssueLabel', id: string, label: { __typename?: 'Label', id: string, name: string, color: string } }>, subtask?: { __typename?: 'Subtask', id: string, title: string, description: string, details?: string | null, status: string, createdAt: string, updatedAt: string } | null }> };

export type UpdateIssueMutationVariables = Exact<{
  where: IssueWhereUniqueInput;
  data: IssueUpdateInput;
}>;


export type UpdateIssueMutation = { __typename?: 'Mutation', updateOneIssue?: { __typename?: 'Issue', id: string, identifier: string, title: string, description: string, status?: string | null, priority?: string | null, rank: string, cycleId?: string | null, dueDate?: string | null, issueType: string, taskId?: number | null, subtaskId?: string | null, assigneeId?: string | null, projectId?: string | null, createdAt: string, updatedAt: string, labels: Array<{ __typename?: 'IssueLabel', id: string, label: { __typename?: 'Label', id: string, name: string, color: string, description?: string | null } }>, project?: { __typename?: 'Project', id: string, name: string, identifier?: string | null, color?: string | null, icon?: string | null } | null, parentIssue?: { __typename?: 'Issue', id: string, identifier: string, title: string, status?: string | null } | null, subIssues: Array<{ __typename?: 'Issue', id: string, identifier: string, title: string, status?: string | null, assignee?: { __typename?: 'User', id: string, name: string, avatarUrl?: string | null } | null }>, issueStatus?: { __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string } | null, issuePriority?: { __typename?: 'IssuePriority', id: string, name: string, iconName: string, order: number } | null, assignee?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null } | null, subtask?: { __typename?: 'Subtask', id: string, title: string, description: string, details?: string | null, status: string, createdAt: string, updatedAt: string } | null } | null };

export type UpdateIssueStatusMutationVariables = Exact<{
  id: Scalars['String']['input'];
  status: Scalars['String']['input'];
}>;


export type UpdateIssueStatusMutation = { __typename?: 'Mutation', updateOneIssue?: { __typename?: 'Issue', id: string, identifier: string, title: string, description: string, status?: string | null, priority?: string | null, rank: string, cycleId?: string | null, dueDate?: string | null, issueType: string, taskId?: number | null, subtaskId?: string | null, assigneeId?: string | null, projectId?: string | null, createdAt: string, updatedAt: string, issueStatus?: { __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string } | null, issuePriority?: { __typename?: 'IssuePriority', id: string, name: string, iconName: string, order: number } | null, assignee?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null } | null, labels: Array<{ __typename?: 'IssueLabel', id: string, label: { __typename?: 'Label', id: string, name: string, color: string } }>, subtask?: { __typename?: 'Subtask', id: string, title: string, description: string, details?: string | null, status: string, createdAt: string, updatedAt: string } | null } | null };

export type UpdateIssuePriorityMutationVariables = Exact<{
  id: Scalars['String']['input'];
  priorityId: Scalars['String']['input'];
}>;


export type UpdateIssuePriorityMutation = { __typename?: 'Mutation', updateOneIssue?: { __typename?: 'Issue', id: string, identifier: string, title: string, description: string, status?: string | null, priority?: string | null, rank: string, cycleId?: string | null, dueDate?: string | null, issueType: string, taskId?: number | null, subtaskId?: string | null, assigneeId?: string | null, projectId?: string | null, createdAt: string, updatedAt: string, issueStatus?: { __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string } | null, issuePriority?: { __typename?: 'IssuePriority', id: string, name: string, iconName: string, order: number } | null, assignee?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null } | null, labels: Array<{ __typename?: 'IssueLabel', id: string, label: { __typename?: 'Label', id: string, name: string, color: string } }>, subtask?: { __typename?: 'Subtask', id: string, title: string, description: string, details?: string | null, status: string, createdAt: string, updatedAt: string } | null } | null };

export type UpdateIssueAssigneeMutationVariables = Exact<{
  id: Scalars['String']['input'];
  assigneeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateIssueAssigneeMutation = { __typename?: 'Mutation', updateOneIssue?: { __typename?: 'Issue', id: string, identifier: string, title: string, description: string, status?: string | null, priority?: string | null, rank: string, cycleId?: string | null, dueDate?: string | null, issueType: string, taskId?: number | null, subtaskId?: string | null, assigneeId?: string | null, projectId?: string | null, createdAt: string, updatedAt: string, issueStatus?: { __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string } | null, issuePriority?: { __typename?: 'IssuePriority', id: string, name: string, iconName: string, order: number } | null, assignee?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null } | null, labels: Array<{ __typename?: 'IssueLabel', id: string, label: { __typename?: 'Label', id: string, name: string, color: string } }>, subtask?: { __typename?: 'Subtask', id: string, title: string, description: string, details?: string | null, status: string, createdAt: string, updatedAt: string } | null } | null };

export type UpdateIssueLabelsMutationVariables = Exact<{
  id: Scalars['String']['input'];
  connectLabels: Array<IssueLabelCreateWithoutIssueInput> | IssueLabelCreateWithoutIssueInput;
}>;


export type UpdateIssueLabelsMutation = { __typename?: 'Mutation', updateOneIssue?: { __typename?: 'Issue', id: string, identifier: string, title: string, description: string, status?: string | null, priority?: string | null, rank: string, cycleId?: string | null, dueDate?: string | null, issueType: string, taskId?: number | null, subtaskId?: string | null, assigneeId?: string | null, projectId?: string | null, createdAt: string, updatedAt: string, labels: Array<{ __typename?: 'IssueLabel', id: string, label: { __typename?: 'Label', id: string, name: string, color: string, description?: string | null } }>, project?: { __typename?: 'Project', id: string, name: string, identifier?: string | null, color?: string | null, icon?: string | null } | null, parentIssue?: { __typename?: 'Issue', id: string, identifier: string, title: string, status?: string | null } | null, subIssues: Array<{ __typename?: 'Issue', id: string, identifier: string, title: string, status?: string | null, assignee?: { __typename?: 'User', id: string, name: string, avatarUrl?: string | null } | null }>, issueStatus?: { __typename?: 'IssueStatus', id: string, name: string, color: string, iconName: string } | null, issuePriority?: { __typename?: 'IssuePriority', id: string, name: string, iconName: string, order: number } | null, assignee?: { __typename?: 'User', id: string, name: string, email: string, avatarUrl?: string | null } | null, subtask?: { __typename?: 'Subtask', id: string, title: string, description: string, details?: string | null, status: string, createdAt: string, updatedAt: string } | null } | null };

export type NewTaskFragment = { __typename?: 'Task', id: number, title: string, description: string, status: string, priority: string, details?: string | null, testStrategy?: string | null, complexity?: number | null, createdAt: string, updatedAt: string };

export const IssueCoreFragmentDoc = gql`
    fragment IssueCore on Issue {
  id
  identifier
  title
  description
  status
  priority
  rank
  cycleId
  dueDate
  issueType
  issueStatus {
    id
    name
    color
    iconName
  }
  issuePriority {
    id
    name
    iconName
    order
  }
  assignee {
    id
    name
    email
    avatarUrl
  }
  labels {
    id
    label {
      id
      name
      color
    }
  }
  taskId
  subtaskId
  subtask {
    id
    title
    description
    details
    status
    createdAt
    updatedAt
  }
  assigneeId
  projectId
  createdAt
  updatedAt
}
    `;
export const IssueDetailsFragmentDoc = gql`
    fragment IssueDetails on Issue {
  ...IssueCore
  labels {
    id
    label {
      id
      name
      color
      description
    }
  }
  project {
    id
    name
    identifier
    color
    icon
  }
  parentIssue {
    id
    identifier
    title
    status
  }
  subIssues {
    id
    identifier
    title
    status
    assignee {
      id
      name
      avatarUrl
    }
  }
}
    ${IssueCoreFragmentDoc}`;
export const NewTaskFragmentDoc = gql`
    fragment NewTask on Task {
  id
  title
  description
  status
  priority
  details
  testStrategy
  complexity
  createdAt
  updatedAt
}
    `;
export const BulkUpdateIssuesDocument = gql`
    mutation BulkUpdateIssues($where: IssueWhereInput!, $data: IssueUpdateManyMutationInput!) {
  updateManyIssue(where: $where, data: $data) {
    count
  }
}
    `;
export type BulkUpdateIssuesMutationFn = Apollo.MutationFunction<BulkUpdateIssuesMutation, BulkUpdateIssuesMutationVariables>;

/**
 * __useBulkUpdateIssuesMutation__
 *
 * To run a mutation, you first call `useBulkUpdateIssuesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkUpdateIssuesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkUpdateIssuesMutation, { data, loading, error }] = useBulkUpdateIssuesMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useBulkUpdateIssuesMutation(baseOptions?: Apollo.MutationHookOptions<BulkUpdateIssuesMutation, BulkUpdateIssuesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkUpdateIssuesMutation, BulkUpdateIssuesMutationVariables>(BulkUpdateIssuesDocument, options);
      }
export type BulkUpdateIssuesMutationHookResult = ReturnType<typeof useBulkUpdateIssuesMutation>;
export type BulkUpdateIssuesMutationResult = Apollo.MutationResult<BulkUpdateIssuesMutation>;
export type BulkUpdateIssuesMutationOptions = Apollo.BaseMutationOptions<BulkUpdateIssuesMutation, BulkUpdateIssuesMutationVariables>;
export const CreateIssueDocument = gql`
    mutation CreateIssue($data: IssueCreateInput!) {
  createOneIssue(data: $data) {
    ...IssueCore
  }
}
    ${IssueCoreFragmentDoc}`;
export type CreateIssueMutationFn = Apollo.MutationFunction<CreateIssueMutation, CreateIssueMutationVariables>;

/**
 * __useCreateIssueMutation__
 *
 * To run a mutation, you first call `useCreateIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIssueMutation, { data, loading, error }] = useCreateIssueMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateIssueMutation(baseOptions?: Apollo.MutationHookOptions<CreateIssueMutation, CreateIssueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateIssueMutation, CreateIssueMutationVariables>(CreateIssueDocument, options);
      }
export type CreateIssueMutationHookResult = ReturnType<typeof useCreateIssueMutation>;
export type CreateIssueMutationResult = Apollo.MutationResult<CreateIssueMutation>;
export type CreateIssueMutationOptions = Apollo.BaseMutationOptions<CreateIssueMutation, CreateIssueMutationVariables>;
export const CreateLabelDocument = gql`
    mutation CreateLabel($input: LabelCreateInput!) {
  createOneLabel(data: $input) {
    id
    name
    color
    description
    createdAt
    updatedAt
  }
}
    `;
export type CreateLabelMutationFn = Apollo.MutationFunction<CreateLabelMutation, CreateLabelMutationVariables>;

/**
 * __useCreateLabelMutation__
 *
 * To run a mutation, you first call `useCreateLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLabelMutation, { data, loading, error }] = useCreateLabelMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLabelMutation(baseOptions?: Apollo.MutationHookOptions<CreateLabelMutation, CreateLabelMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLabelMutation, CreateLabelMutationVariables>(CreateLabelDocument, options);
      }
export type CreateLabelMutationHookResult = ReturnType<typeof useCreateLabelMutation>;
export type CreateLabelMutationResult = Apollo.MutationResult<CreateLabelMutation>;
export type CreateLabelMutationOptions = Apollo.BaseMutationOptions<CreateLabelMutation, CreateLabelMutationVariables>;
export const DeleteIssueDocument = gql`
    mutation DeleteIssue($where: IssueWhereUniqueInput!) {
  deleteOneIssue(where: $where) {
    id
    identifier
  }
}
    `;
export type DeleteIssueMutationFn = Apollo.MutationFunction<DeleteIssueMutation, DeleteIssueMutationVariables>;

/**
 * __useDeleteIssueMutation__
 *
 * To run a mutation, you first call `useDeleteIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIssueMutation, { data, loading, error }] = useDeleteIssueMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteIssueMutation(baseOptions?: Apollo.MutationHookOptions<DeleteIssueMutation, DeleteIssueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteIssueMutation, DeleteIssueMutationVariables>(DeleteIssueDocument, options);
      }
export type DeleteIssueMutationHookResult = ReturnType<typeof useDeleteIssueMutation>;
export type DeleteIssueMutationResult = Apollo.MutationResult<DeleteIssueMutation>;
export type DeleteIssueMutationOptions = Apollo.BaseMutationOptions<DeleteIssueMutation, DeleteIssueMutationVariables>;
export const GetIssueStatusesDocument = gql`
    query GetIssueStatuses($where: IssueStatusWhereInput, $orderBy: [IssueStatusOrderByWithRelationInput!]) {
  issueStatuses(where: $where, orderBy: $orderBy) {
    id
    name
    color
    iconName
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetIssueStatusesQuery__
 *
 * To run a query within a React component, call `useGetIssueStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIssueStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIssueStatusesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetIssueStatusesQuery(baseOptions?: Apollo.QueryHookOptions<GetIssueStatusesQuery, GetIssueStatusesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIssueStatusesQuery, GetIssueStatusesQueryVariables>(GetIssueStatusesDocument, options);
      }
export function useGetIssueStatusesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIssueStatusesQuery, GetIssueStatusesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIssueStatusesQuery, GetIssueStatusesQueryVariables>(GetIssueStatusesDocument, options);
        }
export function useGetIssueStatusesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetIssueStatusesQuery, GetIssueStatusesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetIssueStatusesQuery, GetIssueStatusesQueryVariables>(GetIssueStatusesDocument, options);
        }
export type GetIssueStatusesQueryHookResult = ReturnType<typeof useGetIssueStatusesQuery>;
export type GetIssueStatusesLazyQueryHookResult = ReturnType<typeof useGetIssueStatusesLazyQuery>;
export type GetIssueStatusesSuspenseQueryHookResult = ReturnType<typeof useGetIssueStatusesSuspenseQuery>;
export type GetIssueStatusesQueryResult = Apollo.QueryResult<GetIssueStatusesQuery, GetIssueStatusesQueryVariables>;
export const GetDisplayIssueStatusesDocument = gql`
    query GetDisplayIssueStatuses {
  issueStatuses(orderBy: [{name: asc}]) {
    id
    name
    color
    iconName
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetDisplayIssueStatusesQuery__
 *
 * To run a query within a React component, call `useGetDisplayIssueStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDisplayIssueStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDisplayIssueStatusesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDisplayIssueStatusesQuery(baseOptions?: Apollo.QueryHookOptions<GetDisplayIssueStatusesQuery, GetDisplayIssueStatusesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDisplayIssueStatusesQuery, GetDisplayIssueStatusesQueryVariables>(GetDisplayIssueStatusesDocument, options);
      }
export function useGetDisplayIssueStatusesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDisplayIssueStatusesQuery, GetDisplayIssueStatusesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDisplayIssueStatusesQuery, GetDisplayIssueStatusesQueryVariables>(GetDisplayIssueStatusesDocument, options);
        }
export function useGetDisplayIssueStatusesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetDisplayIssueStatusesQuery, GetDisplayIssueStatusesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDisplayIssueStatusesQuery, GetDisplayIssueStatusesQueryVariables>(GetDisplayIssueStatusesDocument, options);
        }
export type GetDisplayIssueStatusesQueryHookResult = ReturnType<typeof useGetDisplayIssueStatusesQuery>;
export type GetDisplayIssueStatusesLazyQueryHookResult = ReturnType<typeof useGetDisplayIssueStatusesLazyQuery>;
export type GetDisplayIssueStatusesSuspenseQueryHookResult = ReturnType<typeof useGetDisplayIssueStatusesSuspenseQuery>;
export type GetDisplayIssueStatusesQueryResult = Apollo.QueryResult<GetDisplayIssueStatusesQuery, GetDisplayIssueStatusesQueryVariables>;
export const GetIssueDocument = gql`
    query GetIssue($where: IssueWhereUniqueInput!) {
  issue(where: $where) {
    ...IssueDetails
  }
}
    ${IssueDetailsFragmentDoc}`;

/**
 * __useGetIssueQuery__
 *
 * To run a query within a React component, call `useGetIssueQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIssueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIssueQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetIssueQuery(baseOptions: Apollo.QueryHookOptions<GetIssueQuery, GetIssueQueryVariables> & ({ variables: GetIssueQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIssueQuery, GetIssueQueryVariables>(GetIssueDocument, options);
      }
export function useGetIssueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIssueQuery, GetIssueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIssueQuery, GetIssueQueryVariables>(GetIssueDocument, options);
        }
export function useGetIssueSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetIssueQuery, GetIssueQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetIssueQuery, GetIssueQueryVariables>(GetIssueDocument, options);
        }
export type GetIssueQueryHookResult = ReturnType<typeof useGetIssueQuery>;
export type GetIssueLazyQueryHookResult = ReturnType<typeof useGetIssueLazyQuery>;
export type GetIssueSuspenseQueryHookResult = ReturnType<typeof useGetIssueSuspenseQuery>;
export type GetIssueQueryResult = Apollo.QueryResult<GetIssueQuery, GetIssueQueryVariables>;
export const GetIssuesByStatusDocument = gql`
    query GetIssuesByStatus($status: String!, $orderBy: [IssueOrderByWithRelationInput!], $skip: Int, $take: Int) {
  issues(
    where: {status: {equals: $status}}
    orderBy: $orderBy
    skip: $skip
    take: $take
  ) {
    ...IssueCore
  }
}
    ${IssueCoreFragmentDoc}`;

/**
 * __useGetIssuesByStatusQuery__
 *
 * To run a query within a React component, call `useGetIssuesByStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIssuesByStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIssuesByStatusQuery({
 *   variables: {
 *      status: // value for 'status'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetIssuesByStatusQuery(baseOptions: Apollo.QueryHookOptions<GetIssuesByStatusQuery, GetIssuesByStatusQueryVariables> & ({ variables: GetIssuesByStatusQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIssuesByStatusQuery, GetIssuesByStatusQueryVariables>(GetIssuesByStatusDocument, options);
      }
export function useGetIssuesByStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIssuesByStatusQuery, GetIssuesByStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIssuesByStatusQuery, GetIssuesByStatusQueryVariables>(GetIssuesByStatusDocument, options);
        }
export function useGetIssuesByStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetIssuesByStatusQuery, GetIssuesByStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetIssuesByStatusQuery, GetIssuesByStatusQueryVariables>(GetIssuesByStatusDocument, options);
        }
export type GetIssuesByStatusQueryHookResult = ReturnType<typeof useGetIssuesByStatusQuery>;
export type GetIssuesByStatusLazyQueryHookResult = ReturnType<typeof useGetIssuesByStatusLazyQuery>;
export type GetIssuesByStatusSuspenseQueryHookResult = ReturnType<typeof useGetIssuesByStatusSuspenseQuery>;
export type GetIssuesByStatusQueryResult = Apollo.QueryResult<GetIssuesByStatusQuery, GetIssuesByStatusQueryVariables>;
export const GetIssuesStatsDocument = gql`
    query GetIssuesStats {
  issuesStats {
    total
    completed
    inProgress
    pending
    completionRate
  }
}
    `;

/**
 * __useGetIssuesStatsQuery__
 *
 * To run a query within a React component, call `useGetIssuesStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIssuesStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIssuesStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIssuesStatsQuery(baseOptions?: Apollo.QueryHookOptions<GetIssuesStatsQuery, GetIssuesStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIssuesStatsQuery, GetIssuesStatsQueryVariables>(GetIssuesStatsDocument, options);
      }
export function useGetIssuesStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIssuesStatsQuery, GetIssuesStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIssuesStatsQuery, GetIssuesStatsQueryVariables>(GetIssuesStatsDocument, options);
        }
export function useGetIssuesStatsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetIssuesStatsQuery, GetIssuesStatsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetIssuesStatsQuery, GetIssuesStatsQueryVariables>(GetIssuesStatsDocument, options);
        }
export type GetIssuesStatsQueryHookResult = ReturnType<typeof useGetIssuesStatsQuery>;
export type GetIssuesStatsLazyQueryHookResult = ReturnType<typeof useGetIssuesStatsLazyQuery>;
export type GetIssuesStatsSuspenseQueryHookResult = ReturnType<typeof useGetIssuesStatsSuspenseQuery>;
export type GetIssuesStatsQueryResult = Apollo.QueryResult<GetIssuesStatsQuery, GetIssuesStatsQueryVariables>;
export const GetIssuesDocument = gql`
    query GetIssues($where: IssueWhereInput, $orderBy: [IssueOrderByWithRelationInput!], $skip: Int, $take: Int) {
  issues(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    ...IssueCore
  }
}
    ${IssueCoreFragmentDoc}`;

/**
 * __useGetIssuesQuery__
 *
 * To run a query within a React component, call `useGetIssuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIssuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIssuesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetIssuesQuery(baseOptions?: Apollo.QueryHookOptions<GetIssuesQuery, GetIssuesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIssuesQuery, GetIssuesQueryVariables>(GetIssuesDocument, options);
      }
export function useGetIssuesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIssuesQuery, GetIssuesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIssuesQuery, GetIssuesQueryVariables>(GetIssuesDocument, options);
        }
export function useGetIssuesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetIssuesQuery, GetIssuesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetIssuesQuery, GetIssuesQueryVariables>(GetIssuesDocument, options);
        }
export type GetIssuesQueryHookResult = ReturnType<typeof useGetIssuesQuery>;
export type GetIssuesLazyQueryHookResult = ReturnType<typeof useGetIssuesLazyQuery>;
export type GetIssuesSuspenseQueryHookResult = ReturnType<typeof useGetIssuesSuspenseQuery>;
export type GetIssuesQueryResult = Apollo.QueryResult<GetIssuesQuery, GetIssuesQueryVariables>;
export const GetIssuesDetailedDocument = gql`
    query GetIssuesDetailed($where: IssueWhereInput, $orderBy: [IssueOrderByWithRelationInput!], $skip: Int, $take: Int) {
  issues(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    ...IssueCore
  }
}
    ${IssueCoreFragmentDoc}`;

/**
 * __useGetIssuesDetailedQuery__
 *
 * To run a query within a React component, call `useGetIssuesDetailedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIssuesDetailedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIssuesDetailedQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetIssuesDetailedQuery(baseOptions?: Apollo.QueryHookOptions<GetIssuesDetailedQuery, GetIssuesDetailedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIssuesDetailedQuery, GetIssuesDetailedQueryVariables>(GetIssuesDetailedDocument, options);
      }
export function useGetIssuesDetailedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIssuesDetailedQuery, GetIssuesDetailedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIssuesDetailedQuery, GetIssuesDetailedQueryVariables>(GetIssuesDetailedDocument, options);
        }
export function useGetIssuesDetailedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetIssuesDetailedQuery, GetIssuesDetailedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetIssuesDetailedQuery, GetIssuesDetailedQueryVariables>(GetIssuesDetailedDocument, options);
        }
export type GetIssuesDetailedQueryHookResult = ReturnType<typeof useGetIssuesDetailedQuery>;
export type GetIssuesDetailedLazyQueryHookResult = ReturnType<typeof useGetIssuesDetailedLazyQuery>;
export type GetIssuesDetailedSuspenseQueryHookResult = ReturnType<typeof useGetIssuesDetailedSuspenseQuery>;
export type GetIssuesDetailedQueryResult = Apollo.QueryResult<GetIssuesDetailedQuery, GetIssuesDetailedQueryVariables>;
export const GetLabelsDocument = gql`
    query GetLabels($where: LabelWhereInput, $orderBy: [LabelOrderByWithRelationInput!], $skip: Int, $take: Int) {
  labels(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    id
    name
    color
    description
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetLabelsQuery__
 *
 * To run a query within a React component, call `useGetLabelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLabelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLabelsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetLabelsQuery(baseOptions?: Apollo.QueryHookOptions<GetLabelsQuery, GetLabelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLabelsQuery, GetLabelsQueryVariables>(GetLabelsDocument, options);
      }
export function useGetLabelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLabelsQuery, GetLabelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLabelsQuery, GetLabelsQueryVariables>(GetLabelsDocument, options);
        }
export function useGetLabelsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLabelsQuery, GetLabelsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLabelsQuery, GetLabelsQueryVariables>(GetLabelsDocument, options);
        }
export type GetLabelsQueryHookResult = ReturnType<typeof useGetLabelsQuery>;
export type GetLabelsLazyQueryHookResult = ReturnType<typeof useGetLabelsLazyQuery>;
export type GetLabelsSuspenseQueryHookResult = ReturnType<typeof useGetLabelsSuspenseQuery>;
export type GetLabelsQueryResult = Apollo.QueryResult<GetLabelsQuery, GetLabelsQueryVariables>;
export const GetPrioritiesDocument = gql`
    query GetPriorities($where: IssuePriorityWhereInput, $orderBy: [IssuePriorityOrderByWithRelationInput!]) {
  issuePriorities(where: $where, orderBy: $orderBy) {
    id
    name
    order
    iconName
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetPrioritiesQuery__
 *
 * To run a query within a React component, call `useGetPrioritiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrioritiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrioritiesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetPrioritiesQuery(baseOptions?: Apollo.QueryHookOptions<GetPrioritiesQuery, GetPrioritiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPrioritiesQuery, GetPrioritiesQueryVariables>(GetPrioritiesDocument, options);
      }
export function useGetPrioritiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPrioritiesQuery, GetPrioritiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPrioritiesQuery, GetPrioritiesQueryVariables>(GetPrioritiesDocument, options);
        }
export function useGetPrioritiesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPrioritiesQuery, GetPrioritiesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPrioritiesQuery, GetPrioritiesQueryVariables>(GetPrioritiesDocument, options);
        }
export type GetPrioritiesQueryHookResult = ReturnType<typeof useGetPrioritiesQuery>;
export type GetPrioritiesLazyQueryHookResult = ReturnType<typeof useGetPrioritiesLazyQuery>;
export type GetPrioritiesSuspenseQueryHookResult = ReturnType<typeof useGetPrioritiesSuspenseQuery>;
export type GetPrioritiesQueryResult = Apollo.QueryResult<GetPrioritiesQuery, GetPrioritiesQueryVariables>;
export const GetProjectsDocument = gql`
    query GetProjects($where: ProjectWhereInput, $orderBy: [ProjectOrderByWithRelationInput!], $skip: Int, $take: Int) {
  projects(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    id
    name
    identifier
    description
    color
    icon
    leadId
    health
    percentComplete
    startDate
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
      }
export function useGetProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export function useGetProjectsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProjectsQuery, GetProjectsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProjectsQuery, GetProjectsQueryVariables>(GetProjectsDocument, options);
        }
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>;
export type GetProjectsLazyQueryHookResult = ReturnType<typeof useGetProjectsLazyQuery>;
export type GetProjectsSuspenseQueryHookResult = ReturnType<typeof useGetProjectsSuspenseQuery>;
export type GetProjectsQueryResult = Apollo.QueryResult<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput!], $skip: Int, $take: Int) {
  users(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
    id
    name
    email
    avatarUrl
    role
    status
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    name
    email
    avatarUrl
    role
    status
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const SearchIssuesDocument = gql`
    query SearchIssues($search: String!, $where: IssueWhereInput!, $orderBy: [IssueOrderByWithRelationInput!], $skip: Int, $take: Int) {
  issues(
    where: {AND: [$where, {OR: [{title: {contains: $search}}, {description: {contains: $search}}, {identifier: {contains: $search}}]}]}
    orderBy: $orderBy
    skip: $skip
    take: $take
  ) {
    ...IssueCore
  }
}
    ${IssueCoreFragmentDoc}`;

/**
 * __useSearchIssuesQuery__
 *
 * To run a query within a React component, call `useSearchIssuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchIssuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchIssuesQuery({
 *   variables: {
 *      search: // value for 'search'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useSearchIssuesQuery(baseOptions: Apollo.QueryHookOptions<SearchIssuesQuery, SearchIssuesQueryVariables> & ({ variables: SearchIssuesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchIssuesQuery, SearchIssuesQueryVariables>(SearchIssuesDocument, options);
      }
export function useSearchIssuesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchIssuesQuery, SearchIssuesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchIssuesQuery, SearchIssuesQueryVariables>(SearchIssuesDocument, options);
        }
export function useSearchIssuesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchIssuesQuery, SearchIssuesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchIssuesQuery, SearchIssuesQueryVariables>(SearchIssuesDocument, options);
        }
export type SearchIssuesQueryHookResult = ReturnType<typeof useSearchIssuesQuery>;
export type SearchIssuesLazyQueryHookResult = ReturnType<typeof useSearchIssuesLazyQuery>;
export type SearchIssuesSuspenseQueryHookResult = ReturnType<typeof useSearchIssuesSuspenseQuery>;
export type SearchIssuesQueryResult = Apollo.QueryResult<SearchIssuesQuery, SearchIssuesQueryVariables>;
export const UpdateIssueDocument = gql`
    mutation UpdateIssue($where: IssueWhereUniqueInput!, $data: IssueUpdateInput!) {
  updateOneIssue(where: $where, data: $data) {
    ...IssueDetails
  }
}
    ${IssueDetailsFragmentDoc}`;
export type UpdateIssueMutationFn = Apollo.MutationFunction<UpdateIssueMutation, UpdateIssueMutationVariables>;

/**
 * __useUpdateIssueMutation__
 *
 * To run a mutation, you first call `useUpdateIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIssueMutation, { data, loading, error }] = useUpdateIssueMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateIssueMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIssueMutation, UpdateIssueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIssueMutation, UpdateIssueMutationVariables>(UpdateIssueDocument, options);
      }
export type UpdateIssueMutationHookResult = ReturnType<typeof useUpdateIssueMutation>;
export type UpdateIssueMutationResult = Apollo.MutationResult<UpdateIssueMutation>;
export type UpdateIssueMutationOptions = Apollo.BaseMutationOptions<UpdateIssueMutation, UpdateIssueMutationVariables>;
export const UpdateIssueStatusDocument = gql`
    mutation UpdateIssueStatus($id: String!, $status: String!) {
  updateOneIssue(where: {id: $id}, data: {issueStatus: {connect: {id: $status}}}) {
    ...IssueCore
  }
}
    ${IssueCoreFragmentDoc}`;
export type UpdateIssueStatusMutationFn = Apollo.MutationFunction<UpdateIssueStatusMutation, UpdateIssueStatusMutationVariables>;

/**
 * __useUpdateIssueStatusMutation__
 *
 * To run a mutation, you first call `useUpdateIssueStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIssueStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIssueStatusMutation, { data, loading, error }] = useUpdateIssueStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateIssueStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIssueStatusMutation, UpdateIssueStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIssueStatusMutation, UpdateIssueStatusMutationVariables>(UpdateIssueStatusDocument, options);
      }
export type UpdateIssueStatusMutationHookResult = ReturnType<typeof useUpdateIssueStatusMutation>;
export type UpdateIssueStatusMutationResult = Apollo.MutationResult<UpdateIssueStatusMutation>;
export type UpdateIssueStatusMutationOptions = Apollo.BaseMutationOptions<UpdateIssueStatusMutation, UpdateIssueStatusMutationVariables>;
export const UpdateIssuePriorityDocument = gql`
    mutation UpdateIssuePriority($id: String!, $priorityId: String!) {
  updateOneIssue(
    where: {id: $id}
    data: {issuePriority: {connect: {id: $priorityId}}}
  ) {
    ...IssueCore
  }
}
    ${IssueCoreFragmentDoc}`;
export type UpdateIssuePriorityMutationFn = Apollo.MutationFunction<UpdateIssuePriorityMutation, UpdateIssuePriorityMutationVariables>;

/**
 * __useUpdateIssuePriorityMutation__
 *
 * To run a mutation, you first call `useUpdateIssuePriorityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIssuePriorityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIssuePriorityMutation, { data, loading, error }] = useUpdateIssuePriorityMutation({
 *   variables: {
 *      id: // value for 'id'
 *      priorityId: // value for 'priorityId'
 *   },
 * });
 */
export function useUpdateIssuePriorityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIssuePriorityMutation, UpdateIssuePriorityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIssuePriorityMutation, UpdateIssuePriorityMutationVariables>(UpdateIssuePriorityDocument, options);
      }
export type UpdateIssuePriorityMutationHookResult = ReturnType<typeof useUpdateIssuePriorityMutation>;
export type UpdateIssuePriorityMutationResult = Apollo.MutationResult<UpdateIssuePriorityMutation>;
export type UpdateIssuePriorityMutationOptions = Apollo.BaseMutationOptions<UpdateIssuePriorityMutation, UpdateIssuePriorityMutationVariables>;
export const UpdateIssueAssigneeDocument = gql`
    mutation UpdateIssueAssignee($id: String!, $assigneeId: String) {
  updateOneIssue(where: {id: $id}, data: {assignee: {connect: {id: $assigneeId}}}) {
    ...IssueCore
  }
}
    ${IssueCoreFragmentDoc}`;
export type UpdateIssueAssigneeMutationFn = Apollo.MutationFunction<UpdateIssueAssigneeMutation, UpdateIssueAssigneeMutationVariables>;

/**
 * __useUpdateIssueAssigneeMutation__
 *
 * To run a mutation, you first call `useUpdateIssueAssigneeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIssueAssigneeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIssueAssigneeMutation, { data, loading, error }] = useUpdateIssueAssigneeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      assigneeId: // value for 'assigneeId'
 *   },
 * });
 */
export function useUpdateIssueAssigneeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIssueAssigneeMutation, UpdateIssueAssigneeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIssueAssigneeMutation, UpdateIssueAssigneeMutationVariables>(UpdateIssueAssigneeDocument, options);
      }
export type UpdateIssueAssigneeMutationHookResult = ReturnType<typeof useUpdateIssueAssigneeMutation>;
export type UpdateIssueAssigneeMutationResult = Apollo.MutationResult<UpdateIssueAssigneeMutation>;
export type UpdateIssueAssigneeMutationOptions = Apollo.BaseMutationOptions<UpdateIssueAssigneeMutation, UpdateIssueAssigneeMutationVariables>;
export const UpdateIssueLabelsDocument = gql`
    mutation UpdateIssueLabels($id: String!, $connectLabels: [IssueLabelCreateWithoutIssueInput!]!) {
  updateOneIssue(
    where: {id: $id}
    data: {labels: {deleteMany: {}, create: $connectLabels}}
  ) {
    ...IssueDetails
  }
}
    ${IssueDetailsFragmentDoc}`;
export type UpdateIssueLabelsMutationFn = Apollo.MutationFunction<UpdateIssueLabelsMutation, UpdateIssueLabelsMutationVariables>;

/**
 * __useUpdateIssueLabelsMutation__
 *
 * To run a mutation, you first call `useUpdateIssueLabelsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIssueLabelsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIssueLabelsMutation, { data, loading, error }] = useUpdateIssueLabelsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      connectLabels: // value for 'connectLabels'
 *   },
 * });
 */
export function useUpdateIssueLabelsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIssueLabelsMutation, UpdateIssueLabelsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIssueLabelsMutation, UpdateIssueLabelsMutationVariables>(UpdateIssueLabelsDocument, options);
      }
export type UpdateIssueLabelsMutationHookResult = ReturnType<typeof useUpdateIssueLabelsMutation>;
export type UpdateIssueLabelsMutationResult = Apollo.MutationResult<UpdateIssueLabelsMutation>;
export type UpdateIssueLabelsMutationOptions = Apollo.BaseMutationOptions<UpdateIssueLabelsMutation, UpdateIssueLabelsMutationVariables>;