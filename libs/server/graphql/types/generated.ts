import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLContext } from '../context';
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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
   ID: { input: string; output: string };
   String: { input: string; output: string };
   Boolean: { input: boolean; output: boolean };
   Int: { input: number; output: number };
   Float: { input: number; output: number };
   /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
   DateTime: { input: string; output: string };
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

export type CycleScalarFieldEnum =
   | 'createdAt'
   | 'endDate'
   | 'id'
   | 'name'
   | 'number'
   | 'progress'
   | 'startDate'
   | 'teamId'
   | 'updatedAt';

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

export type IssueLabelScalarFieldEnum = 'id' | 'issueId' | 'labelId';

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

export type IssuePriorityScalarFieldEnum =
   | 'createdAt'
   | 'iconName'
   | 'id'
   | 'name'
   | 'order'
   | 'updatedAt';

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

export type IssueScalarFieldEnum =
   | 'assigneeId'
   | 'createdAt'
   | 'cycleId'
   | 'description'
   | 'dueDate'
   | 'id'
   | 'identifier'
   | 'issueType'
   | 'parentIssueId'
   | 'priority'
   | 'priorityId'
   | 'projectId'
   | 'rank'
   | 'status'
   | 'statusId'
   | 'subtaskId'
   | 'taskId'
   | 'title'
   | 'updatedAt';

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

export type IssueStatusScalarFieldEnum =
   | 'color'
   | 'createdAt'
   | 'iconName'
   | 'id'
   | 'name'
   | 'updatedAt';

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

export type LabelScalarFieldEnum =
   | 'color'
   | 'createdAt'
   | 'description'
   | 'id'
   | 'name'
   | 'updatedAt';

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

export type NullsOrder = 'first' | 'last';

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

export type ProjectScalarFieldEnum =
   | 'color'
   | 'createdAt'
   | 'description'
   | 'health'
   | 'icon'
   | 'id'
   | 'identifier'
   | 'leadId'
   | 'name'
   | 'percentComplete'
   | 'startDate'
   | 'updatedAt';

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

export type SortOrder = 'asc' | 'desc';

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

export type SubtaskScalarFieldEnum =
   | 'createdAt'
   | 'dependencies'
   | 'description'
   | 'details'
   | 'id'
   | 'parentId'
   | 'status'
   | 'testStrategy'
   | 'title'
   | 'updatedAt';

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

export type SyncConflictScalarFieldEnum =
   | 'cliVersion'
   | 'id'
   | 'operationType'
   | 'resolution'
   | 'resolved'
   | 'resolvedAt'
   | 'resolvedBy'
   | 'taskId'
   | 'timestamp'
   | 'uiVersion';

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

export type SyncOperationScalarFieldEnum =
   | 'completedAt'
   | 'data'
   | 'error'
   | 'id'
   | 'maxRetries'
   | 'metadata'
   | 'retryCount'
   | 'rollbackData'
   | 'source'
   | 'status'
   | 'taskIds'
   | 'timestamp'
   | 'type';

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

export type TaskDependencyScalarFieldEnum = 'createdAt' | 'dependsOnId' | 'id' | 'taskId';

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

export type TaskMasterMetadataScalarFieldEnum = 'created' | 'description' | 'id' | 'updated';

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

export type TaskScalarFieldEnum =
   | 'complexity'
   | 'createdAt'
   | 'description'
   | 'details'
   | 'id'
   | 'priority'
   | 'status'
   | 'testStrategy'
   | 'title'
   | 'updatedAt';

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

export type TeamMemberScalarFieldEnum = 'id' | 'teamId' | 'userId';

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

export type TeamProjectScalarFieldEnum = 'id' | 'projectId' | 'teamId';

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

export type TeamScalarFieldEnum =
   | 'color'
   | 'createdAt'
   | 'icon'
   | 'id'
   | 'joined'
   | 'name'
   | 'updatedAt';

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

export type UserScalarFieldEnum =
   | 'avatarUrl'
   | 'createdAt'
   | 'email'
   | 'id'
   | 'joinedDate'
   | 'name'
   | 'role'
   | 'status'
   | 'teamIds'
   | 'updatedAt';

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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
   resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
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

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
   AffectedRowsOutput: ResolverTypeWrapper<Partial<AffectedRowsOutput>>;
   AggregateCycle: ResolverTypeWrapper<Partial<AggregateCycle>>;
   AggregateIssue: ResolverTypeWrapper<Partial<AggregateIssue>>;
   AggregateIssueLabel: ResolverTypeWrapper<Partial<AggregateIssueLabel>>;
   AggregateIssuePriority: ResolverTypeWrapper<Partial<AggregateIssuePriority>>;
   AggregateIssueStatus: ResolverTypeWrapper<Partial<AggregateIssueStatus>>;
   AggregateLabel: ResolverTypeWrapper<Partial<AggregateLabel>>;
   AggregateProject: ResolverTypeWrapper<Partial<AggregateProject>>;
   AggregateSubtask: ResolverTypeWrapper<Partial<AggregateSubtask>>;
   AggregateSyncConflict: ResolverTypeWrapper<Partial<AggregateSyncConflict>>;
   AggregateSyncOperation: ResolverTypeWrapper<Partial<AggregateSyncOperation>>;
   AggregateTask: ResolverTypeWrapper<Partial<AggregateTask>>;
   AggregateTaskDependency: ResolverTypeWrapper<Partial<AggregateTaskDependency>>;
   AggregateTaskMasterMetadata: ResolverTypeWrapper<Partial<AggregateTaskMasterMetadata>>;
   AggregateTeam: ResolverTypeWrapper<Partial<AggregateTeam>>;
   AggregateTeamMember: ResolverTypeWrapper<Partial<AggregateTeamMember>>;
   AggregateTeamProject: ResolverTypeWrapper<Partial<AggregateTeamProject>>;
   AggregateUser: ResolverTypeWrapper<Partial<AggregateUser>>;
   BoolFieldUpdateOperationsInput: ResolverTypeWrapper<Partial<BoolFieldUpdateOperationsInput>>;
   BoolFilter: ResolverTypeWrapper<Partial<BoolFilter>>;
   BoolWithAggregatesFilter: ResolverTypeWrapper<Partial<BoolWithAggregatesFilter>>;
   Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']['output']>>;
   CreateManyAndReturnCycle: ResolverTypeWrapper<Partial<CreateManyAndReturnCycle>>;
   CreateManyAndReturnIssue: ResolverTypeWrapper<Partial<CreateManyAndReturnIssue>>;
   CreateManyAndReturnIssueLabel: ResolverTypeWrapper<Partial<CreateManyAndReturnIssueLabel>>;
   CreateManyAndReturnIssuePriority: ResolverTypeWrapper<Partial<CreateManyAndReturnIssuePriority>>;
   CreateManyAndReturnIssueStatus: ResolverTypeWrapper<Partial<CreateManyAndReturnIssueStatus>>;
   CreateManyAndReturnLabel: ResolverTypeWrapper<Partial<CreateManyAndReturnLabel>>;
   CreateManyAndReturnProject: ResolverTypeWrapper<Partial<CreateManyAndReturnProject>>;
   CreateManyAndReturnSubtask: ResolverTypeWrapper<Partial<CreateManyAndReturnSubtask>>;
   CreateManyAndReturnSyncConflict: ResolverTypeWrapper<Partial<CreateManyAndReturnSyncConflict>>;
   CreateManyAndReturnSyncOperation: ResolverTypeWrapper<Partial<CreateManyAndReturnSyncOperation>>;
   CreateManyAndReturnTask: ResolverTypeWrapper<Partial<CreateManyAndReturnTask>>;
   CreateManyAndReturnTaskDependency: ResolverTypeWrapper<
      Partial<CreateManyAndReturnTaskDependency>
   >;
   CreateManyAndReturnTaskMasterMetadata: ResolverTypeWrapper<
      Partial<CreateManyAndReturnTaskMasterMetadata>
   >;
   CreateManyAndReturnTeam: ResolverTypeWrapper<Partial<CreateManyAndReturnTeam>>;
   CreateManyAndReturnTeamMember: ResolverTypeWrapper<Partial<CreateManyAndReturnTeamMember>>;
   CreateManyAndReturnTeamProject: ResolverTypeWrapper<Partial<CreateManyAndReturnTeamProject>>;
   CreateManyAndReturnUser: ResolverTypeWrapper<Partial<CreateManyAndReturnUser>>;
   Cycle: ResolverTypeWrapper<Partial<Cycle>>;
   CycleAvgAggregate: ResolverTypeWrapper<Partial<CycleAvgAggregate>>;
   CycleAvgOrderByAggregateInput: ResolverTypeWrapper<Partial<CycleAvgOrderByAggregateInput>>;
   CycleCount: ResolverTypeWrapper<Partial<CycleCount>>;
   CycleCountAggregate: ResolverTypeWrapper<Partial<CycleCountAggregate>>;
   CycleCountOrderByAggregateInput: ResolverTypeWrapper<Partial<CycleCountOrderByAggregateInput>>;
   CycleCreateInput: ResolverTypeWrapper<Partial<CycleCreateInput>>;
   CycleCreateManyInput: ResolverTypeWrapper<Partial<CycleCreateManyInput>>;
   CycleCreateManyTeamInput: ResolverTypeWrapper<Partial<CycleCreateManyTeamInput>>;
   CycleCreateManyTeamInputEnvelope: ResolverTypeWrapper<Partial<CycleCreateManyTeamInputEnvelope>>;
   CycleCreateNestedManyWithoutTeamInput: ResolverTypeWrapper<
      Partial<CycleCreateNestedManyWithoutTeamInput>
   >;
   CycleCreateNestedOneWithoutIssuesInput: ResolverTypeWrapper<
      Partial<CycleCreateNestedOneWithoutIssuesInput>
   >;
   CycleCreateOrConnectWithoutIssuesInput: ResolverTypeWrapper<
      Partial<CycleCreateOrConnectWithoutIssuesInput>
   >;
   CycleCreateOrConnectWithoutTeamInput: ResolverTypeWrapper<
      Partial<CycleCreateOrConnectWithoutTeamInput>
   >;
   CycleCreateWithoutIssuesInput: ResolverTypeWrapper<Partial<CycleCreateWithoutIssuesInput>>;
   CycleCreateWithoutTeamInput: ResolverTypeWrapper<Partial<CycleCreateWithoutTeamInput>>;
   CycleGroupBy: ResolverTypeWrapper<Partial<CycleGroupBy>>;
   CycleListRelationFilter: ResolverTypeWrapper<Partial<CycleListRelationFilter>>;
   CycleMaxAggregate: ResolverTypeWrapper<Partial<CycleMaxAggregate>>;
   CycleMaxOrderByAggregateInput: ResolverTypeWrapper<Partial<CycleMaxOrderByAggregateInput>>;
   CycleMinAggregate: ResolverTypeWrapper<Partial<CycleMinAggregate>>;
   CycleMinOrderByAggregateInput: ResolverTypeWrapper<Partial<CycleMinOrderByAggregateInput>>;
   CycleNullableRelationFilter: ResolverTypeWrapper<Partial<CycleNullableRelationFilter>>;
   CycleOrderByRelationAggregateInput: ResolverTypeWrapper<
      Partial<CycleOrderByRelationAggregateInput>
   >;
   CycleOrderByWithAggregationInput: ResolverTypeWrapper<Partial<CycleOrderByWithAggregationInput>>;
   CycleOrderByWithRelationInput: ResolverTypeWrapper<Partial<CycleOrderByWithRelationInput>>;
   CycleScalarFieldEnum: ResolverTypeWrapper<Partial<CycleScalarFieldEnum>>;
   CycleScalarWhereInput: ResolverTypeWrapper<Partial<CycleScalarWhereInput>>;
   CycleScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<CycleScalarWhereWithAggregatesInput>
   >;
   CycleSumAggregate: ResolverTypeWrapper<Partial<CycleSumAggregate>>;
   CycleSumOrderByAggregateInput: ResolverTypeWrapper<Partial<CycleSumOrderByAggregateInput>>;
   CycleUpdateInput: ResolverTypeWrapper<Partial<CycleUpdateInput>>;
   CycleUpdateManyMutationInput: ResolverTypeWrapper<Partial<CycleUpdateManyMutationInput>>;
   CycleUpdateManyWithWhereWithoutTeamInput: ResolverTypeWrapper<
      Partial<CycleUpdateManyWithWhereWithoutTeamInput>
   >;
   CycleUpdateManyWithoutTeamNestedInput: ResolverTypeWrapper<
      Partial<CycleUpdateManyWithoutTeamNestedInput>
   >;
   CycleUpdateOneWithoutIssuesNestedInput: ResolverTypeWrapper<
      Partial<CycleUpdateOneWithoutIssuesNestedInput>
   >;
   CycleUpdateToOneWithWhereWithoutIssuesInput: ResolverTypeWrapper<
      Partial<CycleUpdateToOneWithWhereWithoutIssuesInput>
   >;
   CycleUpdateWithWhereUniqueWithoutTeamInput: ResolverTypeWrapper<
      Partial<CycleUpdateWithWhereUniqueWithoutTeamInput>
   >;
   CycleUpdateWithoutIssuesInput: ResolverTypeWrapper<Partial<CycleUpdateWithoutIssuesInput>>;
   CycleUpdateWithoutTeamInput: ResolverTypeWrapper<Partial<CycleUpdateWithoutTeamInput>>;
   CycleUpsertWithWhereUniqueWithoutTeamInput: ResolverTypeWrapper<
      Partial<CycleUpsertWithWhereUniqueWithoutTeamInput>
   >;
   CycleUpsertWithoutIssuesInput: ResolverTypeWrapper<Partial<CycleUpsertWithoutIssuesInput>>;
   CycleWhereInput: ResolverTypeWrapper<Partial<CycleWhereInput>>;
   CycleWhereUniqueInput: ResolverTypeWrapper<Partial<CycleWhereUniqueInput>>;
   DateTime: ResolverTypeWrapper<Partial<Scalars['DateTime']['output']>>;
   DateTimeFieldUpdateOperationsInput: ResolverTypeWrapper<
      Partial<DateTimeFieldUpdateOperationsInput>
   >;
   DateTimeFilter: ResolverTypeWrapper<Partial<DateTimeFilter>>;
   DateTimeNullableFilter: ResolverTypeWrapper<Partial<DateTimeNullableFilter>>;
   DateTimeNullableWithAggregatesFilter: ResolverTypeWrapper<
      Partial<DateTimeNullableWithAggregatesFilter>
   >;
   DateTimeWithAggregatesFilter: ResolverTypeWrapper<Partial<DateTimeWithAggregatesFilter>>;
   Float: ResolverTypeWrapper<Partial<Scalars['Float']['output']>>;
   Int: ResolverTypeWrapper<Partial<Scalars['Int']['output']>>;
   IntFieldUpdateOperationsInput: ResolverTypeWrapper<Partial<IntFieldUpdateOperationsInput>>;
   IntFilter: ResolverTypeWrapper<Partial<IntFilter>>;
   IntNullableFilter: ResolverTypeWrapper<Partial<IntNullableFilter>>;
   IntNullableWithAggregatesFilter: ResolverTypeWrapper<Partial<IntNullableWithAggregatesFilter>>;
   IntWithAggregatesFilter: ResolverTypeWrapper<Partial<IntWithAggregatesFilter>>;
   Issue: ResolverTypeWrapper<Partial<Issue>>;
   IssueAvgAggregate: ResolverTypeWrapper<Partial<IssueAvgAggregate>>;
   IssueAvgOrderByAggregateInput: ResolverTypeWrapper<Partial<IssueAvgOrderByAggregateInput>>;
   IssueCount: ResolverTypeWrapper<Partial<IssueCount>>;
   IssueCountAggregate: ResolverTypeWrapper<Partial<IssueCountAggregate>>;
   IssueCountOrderByAggregateInput: ResolverTypeWrapper<Partial<IssueCountOrderByAggregateInput>>;
   IssueCreateInput: ResolverTypeWrapper<Partial<IssueCreateInput>>;
   IssueCreateManyAssigneeInput: ResolverTypeWrapper<Partial<IssueCreateManyAssigneeInput>>;
   IssueCreateManyAssigneeInputEnvelope: ResolverTypeWrapper<
      Partial<IssueCreateManyAssigneeInputEnvelope>
   >;
   IssueCreateManyCycleInput: ResolverTypeWrapper<Partial<IssueCreateManyCycleInput>>;
   IssueCreateManyCycleInputEnvelope: ResolverTypeWrapper<
      Partial<IssueCreateManyCycleInputEnvelope>
   >;
   IssueCreateManyInput: ResolverTypeWrapper<Partial<IssueCreateManyInput>>;
   IssueCreateManyIssuePriorityInput: ResolverTypeWrapper<
      Partial<IssueCreateManyIssuePriorityInput>
   >;
   IssueCreateManyIssuePriorityInputEnvelope: ResolverTypeWrapper<
      Partial<IssueCreateManyIssuePriorityInputEnvelope>
   >;
   IssueCreateManyIssueStatusInput: ResolverTypeWrapper<Partial<IssueCreateManyIssueStatusInput>>;
   IssueCreateManyIssueStatusInputEnvelope: ResolverTypeWrapper<
      Partial<IssueCreateManyIssueStatusInputEnvelope>
   >;
   IssueCreateManyParentIssueInput: ResolverTypeWrapper<Partial<IssueCreateManyParentIssueInput>>;
   IssueCreateManyParentIssueInputEnvelope: ResolverTypeWrapper<
      Partial<IssueCreateManyParentIssueInputEnvelope>
   >;
   IssueCreateManyProjectInput: ResolverTypeWrapper<Partial<IssueCreateManyProjectInput>>;
   IssueCreateManyProjectInputEnvelope: ResolverTypeWrapper<
      Partial<IssueCreateManyProjectInputEnvelope>
   >;
   IssueCreateManySubtaskInput: ResolverTypeWrapper<Partial<IssueCreateManySubtaskInput>>;
   IssueCreateManySubtaskInputEnvelope: ResolverTypeWrapper<
      Partial<IssueCreateManySubtaskInputEnvelope>
   >;
   IssueCreateManyTaskInput: ResolverTypeWrapper<Partial<IssueCreateManyTaskInput>>;
   IssueCreateManyTaskInputEnvelope: ResolverTypeWrapper<Partial<IssueCreateManyTaskInputEnvelope>>;
   IssueCreateNestedManyWithoutAssigneeInput: ResolverTypeWrapper<
      Partial<IssueCreateNestedManyWithoutAssigneeInput>
   >;
   IssueCreateNestedManyWithoutCycleInput: ResolverTypeWrapper<
      Partial<IssueCreateNestedManyWithoutCycleInput>
   >;
   IssueCreateNestedManyWithoutIssuePriorityInput: ResolverTypeWrapper<
      Partial<IssueCreateNestedManyWithoutIssuePriorityInput>
   >;
   IssueCreateNestedManyWithoutIssueStatusInput: ResolverTypeWrapper<
      Partial<IssueCreateNestedManyWithoutIssueStatusInput>
   >;
   IssueCreateNestedManyWithoutParentIssueInput: ResolverTypeWrapper<
      Partial<IssueCreateNestedManyWithoutParentIssueInput>
   >;
   IssueCreateNestedManyWithoutProjectInput: ResolverTypeWrapper<
      Partial<IssueCreateNestedManyWithoutProjectInput>
   >;
   IssueCreateNestedManyWithoutSubtaskInput: ResolverTypeWrapper<
      Partial<IssueCreateNestedManyWithoutSubtaskInput>
   >;
   IssueCreateNestedManyWithoutTaskInput: ResolverTypeWrapper<
      Partial<IssueCreateNestedManyWithoutTaskInput>
   >;
   IssueCreateNestedOneWithoutLabelsInput: ResolverTypeWrapper<
      Partial<IssueCreateNestedOneWithoutLabelsInput>
   >;
   IssueCreateNestedOneWithoutSubIssuesInput: ResolverTypeWrapper<
      Partial<IssueCreateNestedOneWithoutSubIssuesInput>
   >;
   IssueCreateOrConnectWithoutAssigneeInput: ResolverTypeWrapper<
      Partial<IssueCreateOrConnectWithoutAssigneeInput>
   >;
   IssueCreateOrConnectWithoutCycleInput: ResolverTypeWrapper<
      Partial<IssueCreateOrConnectWithoutCycleInput>
   >;
   IssueCreateOrConnectWithoutIssuePriorityInput: ResolverTypeWrapper<
      Partial<IssueCreateOrConnectWithoutIssuePriorityInput>
   >;
   IssueCreateOrConnectWithoutIssueStatusInput: ResolverTypeWrapper<
      Partial<IssueCreateOrConnectWithoutIssueStatusInput>
   >;
   IssueCreateOrConnectWithoutLabelsInput: ResolverTypeWrapper<
      Partial<IssueCreateOrConnectWithoutLabelsInput>
   >;
   IssueCreateOrConnectWithoutParentIssueInput: ResolverTypeWrapper<
      Partial<IssueCreateOrConnectWithoutParentIssueInput>
   >;
   IssueCreateOrConnectWithoutProjectInput: ResolverTypeWrapper<
      Partial<IssueCreateOrConnectWithoutProjectInput>
   >;
   IssueCreateOrConnectWithoutSubIssuesInput: ResolverTypeWrapper<
      Partial<IssueCreateOrConnectWithoutSubIssuesInput>
   >;
   IssueCreateOrConnectWithoutSubtaskInput: ResolverTypeWrapper<
      Partial<IssueCreateOrConnectWithoutSubtaskInput>
   >;
   IssueCreateOrConnectWithoutTaskInput: ResolverTypeWrapper<
      Partial<IssueCreateOrConnectWithoutTaskInput>
   >;
   IssueCreateWithoutAssigneeInput: ResolverTypeWrapper<Partial<IssueCreateWithoutAssigneeInput>>;
   IssueCreateWithoutCycleInput: ResolverTypeWrapper<Partial<IssueCreateWithoutCycleInput>>;
   IssueCreateWithoutIssuePriorityInput: ResolverTypeWrapper<
      Partial<IssueCreateWithoutIssuePriorityInput>
   >;
   IssueCreateWithoutIssueStatusInput: ResolverTypeWrapper<
      Partial<IssueCreateWithoutIssueStatusInput>
   >;
   IssueCreateWithoutLabelsInput: ResolverTypeWrapper<Partial<IssueCreateWithoutLabelsInput>>;
   IssueCreateWithoutParentIssueInput: ResolverTypeWrapper<
      Partial<IssueCreateWithoutParentIssueInput>
   >;
   IssueCreateWithoutProjectInput: ResolverTypeWrapper<Partial<IssueCreateWithoutProjectInput>>;
   IssueCreateWithoutSubIssuesInput: ResolverTypeWrapper<Partial<IssueCreateWithoutSubIssuesInput>>;
   IssueCreateWithoutSubtaskInput: ResolverTypeWrapper<Partial<IssueCreateWithoutSubtaskInput>>;
   IssueCreateWithoutTaskInput: ResolverTypeWrapper<Partial<IssueCreateWithoutTaskInput>>;
   IssueGroupBy: ResolverTypeWrapper<Partial<IssueGroupBy>>;
   IssueLabel: ResolverTypeWrapper<Partial<IssueLabel>>;
   IssueLabelCountAggregate: ResolverTypeWrapper<Partial<IssueLabelCountAggregate>>;
   IssueLabelCountOrderByAggregateInput: ResolverTypeWrapper<
      Partial<IssueLabelCountOrderByAggregateInput>
   >;
   IssueLabelCreateInput: ResolverTypeWrapper<Partial<IssueLabelCreateInput>>;
   IssueLabelCreateManyInput: ResolverTypeWrapper<Partial<IssueLabelCreateManyInput>>;
   IssueLabelCreateManyIssueInput: ResolverTypeWrapper<Partial<IssueLabelCreateManyIssueInput>>;
   IssueLabelCreateManyIssueInputEnvelope: ResolverTypeWrapper<
      Partial<IssueLabelCreateManyIssueInputEnvelope>
   >;
   IssueLabelCreateManyLabelInput: ResolverTypeWrapper<Partial<IssueLabelCreateManyLabelInput>>;
   IssueLabelCreateManyLabelInputEnvelope: ResolverTypeWrapper<
      Partial<IssueLabelCreateManyLabelInputEnvelope>
   >;
   IssueLabelCreateNestedManyWithoutIssueInput: ResolverTypeWrapper<
      Partial<IssueLabelCreateNestedManyWithoutIssueInput>
   >;
   IssueLabelCreateNestedManyWithoutLabelInput: ResolverTypeWrapper<
      Partial<IssueLabelCreateNestedManyWithoutLabelInput>
   >;
   IssueLabelCreateOrConnectWithoutIssueInput: ResolverTypeWrapper<
      Partial<IssueLabelCreateOrConnectWithoutIssueInput>
   >;
   IssueLabelCreateOrConnectWithoutLabelInput: ResolverTypeWrapper<
      Partial<IssueLabelCreateOrConnectWithoutLabelInput>
   >;
   IssueLabelCreateWithoutIssueInput: ResolverTypeWrapper<
      Partial<IssueLabelCreateWithoutIssueInput>
   >;
   IssueLabelCreateWithoutLabelInput: ResolverTypeWrapper<
      Partial<IssueLabelCreateWithoutLabelInput>
   >;
   IssueLabelGroupBy: ResolverTypeWrapper<Partial<IssueLabelGroupBy>>;
   IssueLabelIssueIdLabelIdCompoundUniqueInput: ResolverTypeWrapper<
      Partial<IssueLabelIssueIdLabelIdCompoundUniqueInput>
   >;
   IssueLabelListRelationFilter: ResolverTypeWrapper<Partial<IssueLabelListRelationFilter>>;
   IssueLabelMaxAggregate: ResolverTypeWrapper<Partial<IssueLabelMaxAggregate>>;
   IssueLabelMaxOrderByAggregateInput: ResolverTypeWrapper<
      Partial<IssueLabelMaxOrderByAggregateInput>
   >;
   IssueLabelMinAggregate: ResolverTypeWrapper<Partial<IssueLabelMinAggregate>>;
   IssueLabelMinOrderByAggregateInput: ResolverTypeWrapper<
      Partial<IssueLabelMinOrderByAggregateInput>
   >;
   IssueLabelOrderByRelationAggregateInput: ResolverTypeWrapper<
      Partial<IssueLabelOrderByRelationAggregateInput>
   >;
   IssueLabelOrderByWithAggregationInput: ResolverTypeWrapper<
      Partial<IssueLabelOrderByWithAggregationInput>
   >;
   IssueLabelOrderByWithRelationInput: ResolverTypeWrapper<
      Partial<IssueLabelOrderByWithRelationInput>
   >;
   IssueLabelScalarFieldEnum: ResolverTypeWrapper<Partial<IssueLabelScalarFieldEnum>>;
   IssueLabelScalarWhereInput: ResolverTypeWrapper<Partial<IssueLabelScalarWhereInput>>;
   IssueLabelScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<IssueLabelScalarWhereWithAggregatesInput>
   >;
   IssueLabelUpdateInput: ResolverTypeWrapper<Partial<IssueLabelUpdateInput>>;
   IssueLabelUpdateManyMutationInput: ResolverTypeWrapper<
      Partial<IssueLabelUpdateManyMutationInput>
   >;
   IssueLabelUpdateManyWithWhereWithoutIssueInput: ResolverTypeWrapper<
      Partial<IssueLabelUpdateManyWithWhereWithoutIssueInput>
   >;
   IssueLabelUpdateManyWithWhereWithoutLabelInput: ResolverTypeWrapper<
      Partial<IssueLabelUpdateManyWithWhereWithoutLabelInput>
   >;
   IssueLabelUpdateManyWithoutIssueNestedInput: ResolverTypeWrapper<
      Partial<IssueLabelUpdateManyWithoutIssueNestedInput>
   >;
   IssueLabelUpdateManyWithoutLabelNestedInput: ResolverTypeWrapper<
      Partial<IssueLabelUpdateManyWithoutLabelNestedInput>
   >;
   IssueLabelUpdateWithWhereUniqueWithoutIssueInput: ResolverTypeWrapper<
      Partial<IssueLabelUpdateWithWhereUniqueWithoutIssueInput>
   >;
   IssueLabelUpdateWithWhereUniqueWithoutLabelInput: ResolverTypeWrapper<
      Partial<IssueLabelUpdateWithWhereUniqueWithoutLabelInput>
   >;
   IssueLabelUpdateWithoutIssueInput: ResolverTypeWrapper<
      Partial<IssueLabelUpdateWithoutIssueInput>
   >;
   IssueLabelUpdateWithoutLabelInput: ResolverTypeWrapper<
      Partial<IssueLabelUpdateWithoutLabelInput>
   >;
   IssueLabelUpsertWithWhereUniqueWithoutIssueInput: ResolverTypeWrapper<
      Partial<IssueLabelUpsertWithWhereUniqueWithoutIssueInput>
   >;
   IssueLabelUpsertWithWhereUniqueWithoutLabelInput: ResolverTypeWrapper<
      Partial<IssueLabelUpsertWithWhereUniqueWithoutLabelInput>
   >;
   IssueLabelWhereInput: ResolverTypeWrapper<Partial<IssueLabelWhereInput>>;
   IssueLabelWhereUniqueInput: ResolverTypeWrapper<Partial<IssueLabelWhereUniqueInput>>;
   IssueListRelationFilter: ResolverTypeWrapper<Partial<IssueListRelationFilter>>;
   IssueMaxAggregate: ResolverTypeWrapper<Partial<IssueMaxAggregate>>;
   IssueMaxOrderByAggregateInput: ResolverTypeWrapper<Partial<IssueMaxOrderByAggregateInput>>;
   IssueMinAggregate: ResolverTypeWrapper<Partial<IssueMinAggregate>>;
   IssueMinOrderByAggregateInput: ResolverTypeWrapper<Partial<IssueMinOrderByAggregateInput>>;
   IssueNullableRelationFilter: ResolverTypeWrapper<Partial<IssueNullableRelationFilter>>;
   IssueOrderByRelationAggregateInput: ResolverTypeWrapper<
      Partial<IssueOrderByRelationAggregateInput>
   >;
   IssueOrderByWithAggregationInput: ResolverTypeWrapper<Partial<IssueOrderByWithAggregationInput>>;
   IssueOrderByWithRelationInput: ResolverTypeWrapper<Partial<IssueOrderByWithRelationInput>>;
   IssuePriority: ResolverTypeWrapper<Partial<IssuePriority>>;
   IssuePriorityAvgAggregate: ResolverTypeWrapper<Partial<IssuePriorityAvgAggregate>>;
   IssuePriorityAvgOrderByAggregateInput: ResolverTypeWrapper<
      Partial<IssuePriorityAvgOrderByAggregateInput>
   >;
   IssuePriorityCount: ResolverTypeWrapper<Partial<IssuePriorityCount>>;
   IssuePriorityCountAggregate: ResolverTypeWrapper<Partial<IssuePriorityCountAggregate>>;
   IssuePriorityCountOrderByAggregateInput: ResolverTypeWrapper<
      Partial<IssuePriorityCountOrderByAggregateInput>
   >;
   IssuePriorityCreateInput: ResolverTypeWrapper<Partial<IssuePriorityCreateInput>>;
   IssuePriorityCreateManyInput: ResolverTypeWrapper<Partial<IssuePriorityCreateManyInput>>;
   IssuePriorityCreateNestedOneWithoutIssuesInput: ResolverTypeWrapper<
      Partial<IssuePriorityCreateNestedOneWithoutIssuesInput>
   >;
   IssuePriorityCreateOrConnectWithoutIssuesInput: ResolverTypeWrapper<
      Partial<IssuePriorityCreateOrConnectWithoutIssuesInput>
   >;
   IssuePriorityCreateWithoutIssuesInput: ResolverTypeWrapper<
      Partial<IssuePriorityCreateWithoutIssuesInput>
   >;
   IssuePriorityGroupBy: ResolverTypeWrapper<Partial<IssuePriorityGroupBy>>;
   IssuePriorityMaxAggregate: ResolverTypeWrapper<Partial<IssuePriorityMaxAggregate>>;
   IssuePriorityMaxOrderByAggregateInput: ResolverTypeWrapper<
      Partial<IssuePriorityMaxOrderByAggregateInput>
   >;
   IssuePriorityMinAggregate: ResolverTypeWrapper<Partial<IssuePriorityMinAggregate>>;
   IssuePriorityMinOrderByAggregateInput: ResolverTypeWrapper<
      Partial<IssuePriorityMinOrderByAggregateInput>
   >;
   IssuePriorityNullableRelationFilter: ResolverTypeWrapper<
      Partial<IssuePriorityNullableRelationFilter>
   >;
   IssuePriorityOrderByWithAggregationInput: ResolverTypeWrapper<
      Partial<IssuePriorityOrderByWithAggregationInput>
   >;
   IssuePriorityOrderByWithRelationInput: ResolverTypeWrapper<
      Partial<IssuePriorityOrderByWithRelationInput>
   >;
   IssuePriorityScalarFieldEnum: ResolverTypeWrapper<Partial<IssuePriorityScalarFieldEnum>>;
   IssuePriorityScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<IssuePriorityScalarWhereWithAggregatesInput>
   >;
   IssuePrioritySumAggregate: ResolverTypeWrapper<Partial<IssuePrioritySumAggregate>>;
   IssuePrioritySumOrderByAggregateInput: ResolverTypeWrapper<
      Partial<IssuePrioritySumOrderByAggregateInput>
   >;
   IssuePriorityUpdateInput: ResolverTypeWrapper<Partial<IssuePriorityUpdateInput>>;
   IssuePriorityUpdateManyMutationInput: ResolverTypeWrapper<
      Partial<IssuePriorityUpdateManyMutationInput>
   >;
   IssuePriorityUpdateOneWithoutIssuesNestedInput: ResolverTypeWrapper<
      Partial<IssuePriorityUpdateOneWithoutIssuesNestedInput>
   >;
   IssuePriorityUpdateToOneWithWhereWithoutIssuesInput: ResolverTypeWrapper<
      Partial<IssuePriorityUpdateToOneWithWhereWithoutIssuesInput>
   >;
   IssuePriorityUpdateWithoutIssuesInput: ResolverTypeWrapper<
      Partial<IssuePriorityUpdateWithoutIssuesInput>
   >;
   IssuePriorityUpsertWithoutIssuesInput: ResolverTypeWrapper<
      Partial<IssuePriorityUpsertWithoutIssuesInput>
   >;
   IssuePriorityWhereInput: ResolverTypeWrapper<Partial<IssuePriorityWhereInput>>;
   IssuePriorityWhereUniqueInput: ResolverTypeWrapper<Partial<IssuePriorityWhereUniqueInput>>;
   IssueRelationFilter: ResolverTypeWrapper<Partial<IssueRelationFilter>>;
   IssueScalarFieldEnum: ResolverTypeWrapper<Partial<IssueScalarFieldEnum>>;
   IssueScalarWhereInput: ResolverTypeWrapper<Partial<IssueScalarWhereInput>>;
   IssueScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<IssueScalarWhereWithAggregatesInput>
   >;
   IssueStats: ResolverTypeWrapper<Partial<IssueStats>>;
   IssueStatus: ResolverTypeWrapper<Partial<IssueStatus>>;
   IssueStatusCount: ResolverTypeWrapper<Partial<IssueStatusCount>>;
   IssueStatusCountAggregate: ResolverTypeWrapper<Partial<IssueStatusCountAggregate>>;
   IssueStatusCountOrderByAggregateInput: ResolverTypeWrapper<
      Partial<IssueStatusCountOrderByAggregateInput>
   >;
   IssueStatusCreateInput: ResolverTypeWrapper<Partial<IssueStatusCreateInput>>;
   IssueStatusCreateManyInput: ResolverTypeWrapper<Partial<IssueStatusCreateManyInput>>;
   IssueStatusCreateNestedOneWithoutIssuesInput: ResolverTypeWrapper<
      Partial<IssueStatusCreateNestedOneWithoutIssuesInput>
   >;
   IssueStatusCreateOrConnectWithoutIssuesInput: ResolverTypeWrapper<
      Partial<IssueStatusCreateOrConnectWithoutIssuesInput>
   >;
   IssueStatusCreateWithoutIssuesInput: ResolverTypeWrapper<
      Partial<IssueStatusCreateWithoutIssuesInput>
   >;
   IssueStatusGroupBy: ResolverTypeWrapper<Partial<IssueStatusGroupBy>>;
   IssueStatusMaxAggregate: ResolverTypeWrapper<Partial<IssueStatusMaxAggregate>>;
   IssueStatusMaxOrderByAggregateInput: ResolverTypeWrapper<
      Partial<IssueStatusMaxOrderByAggregateInput>
   >;
   IssueStatusMinAggregate: ResolverTypeWrapper<Partial<IssueStatusMinAggregate>>;
   IssueStatusMinOrderByAggregateInput: ResolverTypeWrapper<
      Partial<IssueStatusMinOrderByAggregateInput>
   >;
   IssueStatusNullableRelationFilter: ResolverTypeWrapper<
      Partial<IssueStatusNullableRelationFilter>
   >;
   IssueStatusOrderByWithAggregationInput: ResolverTypeWrapper<
      Partial<IssueStatusOrderByWithAggregationInput>
   >;
   IssueStatusOrderByWithRelationInput: ResolverTypeWrapper<
      Partial<IssueStatusOrderByWithRelationInput>
   >;
   IssueStatusScalarFieldEnum: ResolverTypeWrapper<Partial<IssueStatusScalarFieldEnum>>;
   IssueStatusScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<IssueStatusScalarWhereWithAggregatesInput>
   >;
   IssueStatusUpdateInput: ResolverTypeWrapper<Partial<IssueStatusUpdateInput>>;
   IssueStatusUpdateManyMutationInput: ResolverTypeWrapper<
      Partial<IssueStatusUpdateManyMutationInput>
   >;
   IssueStatusUpdateOneWithoutIssuesNestedInput: ResolverTypeWrapper<
      Partial<IssueStatusUpdateOneWithoutIssuesNestedInput>
   >;
   IssueStatusUpdateToOneWithWhereWithoutIssuesInput: ResolverTypeWrapper<
      Partial<IssueStatusUpdateToOneWithWhereWithoutIssuesInput>
   >;
   IssueStatusUpdateWithoutIssuesInput: ResolverTypeWrapper<
      Partial<IssueStatusUpdateWithoutIssuesInput>
   >;
   IssueStatusUpsertWithoutIssuesInput: ResolverTypeWrapper<
      Partial<IssueStatusUpsertWithoutIssuesInput>
   >;
   IssueStatusWhereInput: ResolverTypeWrapper<Partial<IssueStatusWhereInput>>;
   IssueStatusWhereUniqueInput: ResolverTypeWrapper<Partial<IssueStatusWhereUniqueInput>>;
   IssueSumAggregate: ResolverTypeWrapper<Partial<IssueSumAggregate>>;
   IssueSumOrderByAggregateInput: ResolverTypeWrapper<Partial<IssueSumOrderByAggregateInput>>;
   IssueUpdateInput: ResolverTypeWrapper<Partial<IssueUpdateInput>>;
   IssueUpdateManyMutationInput: ResolverTypeWrapper<Partial<IssueUpdateManyMutationInput>>;
   IssueUpdateManyWithWhereWithoutAssigneeInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithWhereWithoutAssigneeInput>
   >;
   IssueUpdateManyWithWhereWithoutCycleInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithWhereWithoutCycleInput>
   >;
   IssueUpdateManyWithWhereWithoutIssuePriorityInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithWhereWithoutIssuePriorityInput>
   >;
   IssueUpdateManyWithWhereWithoutIssueStatusInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithWhereWithoutIssueStatusInput>
   >;
   IssueUpdateManyWithWhereWithoutParentIssueInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithWhereWithoutParentIssueInput>
   >;
   IssueUpdateManyWithWhereWithoutProjectInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithWhereWithoutProjectInput>
   >;
   IssueUpdateManyWithWhereWithoutSubtaskInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithWhereWithoutSubtaskInput>
   >;
   IssueUpdateManyWithWhereWithoutTaskInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithWhereWithoutTaskInput>
   >;
   IssueUpdateManyWithoutAssigneeNestedInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithoutAssigneeNestedInput>
   >;
   IssueUpdateManyWithoutCycleNestedInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithoutCycleNestedInput>
   >;
   IssueUpdateManyWithoutIssuePriorityNestedInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithoutIssuePriorityNestedInput>
   >;
   IssueUpdateManyWithoutIssueStatusNestedInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithoutIssueStatusNestedInput>
   >;
   IssueUpdateManyWithoutParentIssueNestedInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithoutParentIssueNestedInput>
   >;
   IssueUpdateManyWithoutProjectNestedInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithoutProjectNestedInput>
   >;
   IssueUpdateManyWithoutSubtaskNestedInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithoutSubtaskNestedInput>
   >;
   IssueUpdateManyWithoutTaskNestedInput: ResolverTypeWrapper<
      Partial<IssueUpdateManyWithoutTaskNestedInput>
   >;
   IssueUpdateOneRequiredWithoutLabelsNestedInput: ResolverTypeWrapper<
      Partial<IssueUpdateOneRequiredWithoutLabelsNestedInput>
   >;
   IssueUpdateOneWithoutSubIssuesNestedInput: ResolverTypeWrapper<
      Partial<IssueUpdateOneWithoutSubIssuesNestedInput>
   >;
   IssueUpdateToOneWithWhereWithoutLabelsInput: ResolverTypeWrapper<
      Partial<IssueUpdateToOneWithWhereWithoutLabelsInput>
   >;
   IssueUpdateToOneWithWhereWithoutSubIssuesInput: ResolverTypeWrapper<
      Partial<IssueUpdateToOneWithWhereWithoutSubIssuesInput>
   >;
   IssueUpdateWithWhereUniqueWithoutAssigneeInput: ResolverTypeWrapper<
      Partial<IssueUpdateWithWhereUniqueWithoutAssigneeInput>
   >;
   IssueUpdateWithWhereUniqueWithoutCycleInput: ResolverTypeWrapper<
      Partial<IssueUpdateWithWhereUniqueWithoutCycleInput>
   >;
   IssueUpdateWithWhereUniqueWithoutIssuePriorityInput: ResolverTypeWrapper<
      Partial<IssueUpdateWithWhereUniqueWithoutIssuePriorityInput>
   >;
   IssueUpdateWithWhereUniqueWithoutIssueStatusInput: ResolverTypeWrapper<
      Partial<IssueUpdateWithWhereUniqueWithoutIssueStatusInput>
   >;
   IssueUpdateWithWhereUniqueWithoutParentIssueInput: ResolverTypeWrapper<
      Partial<IssueUpdateWithWhereUniqueWithoutParentIssueInput>
   >;
   IssueUpdateWithWhereUniqueWithoutProjectInput: ResolverTypeWrapper<
      Partial<IssueUpdateWithWhereUniqueWithoutProjectInput>
   >;
   IssueUpdateWithWhereUniqueWithoutSubtaskInput: ResolverTypeWrapper<
      Partial<IssueUpdateWithWhereUniqueWithoutSubtaskInput>
   >;
   IssueUpdateWithWhereUniqueWithoutTaskInput: ResolverTypeWrapper<
      Partial<IssueUpdateWithWhereUniqueWithoutTaskInput>
   >;
   IssueUpdateWithoutAssigneeInput: ResolverTypeWrapper<Partial<IssueUpdateWithoutAssigneeInput>>;
   IssueUpdateWithoutCycleInput: ResolverTypeWrapper<Partial<IssueUpdateWithoutCycleInput>>;
   IssueUpdateWithoutIssuePriorityInput: ResolverTypeWrapper<
      Partial<IssueUpdateWithoutIssuePriorityInput>
   >;
   IssueUpdateWithoutIssueStatusInput: ResolverTypeWrapper<
      Partial<IssueUpdateWithoutIssueStatusInput>
   >;
   IssueUpdateWithoutLabelsInput: ResolverTypeWrapper<Partial<IssueUpdateWithoutLabelsInput>>;
   IssueUpdateWithoutParentIssueInput: ResolverTypeWrapper<
      Partial<IssueUpdateWithoutParentIssueInput>
   >;
   IssueUpdateWithoutProjectInput: ResolverTypeWrapper<Partial<IssueUpdateWithoutProjectInput>>;
   IssueUpdateWithoutSubIssuesInput: ResolverTypeWrapper<Partial<IssueUpdateWithoutSubIssuesInput>>;
   IssueUpdateWithoutSubtaskInput: ResolverTypeWrapper<Partial<IssueUpdateWithoutSubtaskInput>>;
   IssueUpdateWithoutTaskInput: ResolverTypeWrapper<Partial<IssueUpdateWithoutTaskInput>>;
   IssueUpsertWithWhereUniqueWithoutAssigneeInput: ResolverTypeWrapper<
      Partial<IssueUpsertWithWhereUniqueWithoutAssigneeInput>
   >;
   IssueUpsertWithWhereUniqueWithoutCycleInput: ResolverTypeWrapper<
      Partial<IssueUpsertWithWhereUniqueWithoutCycleInput>
   >;
   IssueUpsertWithWhereUniqueWithoutIssuePriorityInput: ResolverTypeWrapper<
      Partial<IssueUpsertWithWhereUniqueWithoutIssuePriorityInput>
   >;
   IssueUpsertWithWhereUniqueWithoutIssueStatusInput: ResolverTypeWrapper<
      Partial<IssueUpsertWithWhereUniqueWithoutIssueStatusInput>
   >;
   IssueUpsertWithWhereUniqueWithoutParentIssueInput: ResolverTypeWrapper<
      Partial<IssueUpsertWithWhereUniqueWithoutParentIssueInput>
   >;
   IssueUpsertWithWhereUniqueWithoutProjectInput: ResolverTypeWrapper<
      Partial<IssueUpsertWithWhereUniqueWithoutProjectInput>
   >;
   IssueUpsertWithWhereUniqueWithoutSubtaskInput: ResolverTypeWrapper<
      Partial<IssueUpsertWithWhereUniqueWithoutSubtaskInput>
   >;
   IssueUpsertWithWhereUniqueWithoutTaskInput: ResolverTypeWrapper<
      Partial<IssueUpsertWithWhereUniqueWithoutTaskInput>
   >;
   IssueUpsertWithoutLabelsInput: ResolverTypeWrapper<Partial<IssueUpsertWithoutLabelsInput>>;
   IssueUpsertWithoutSubIssuesInput: ResolverTypeWrapper<Partial<IssueUpsertWithoutSubIssuesInput>>;
   IssueWhereInput: ResolverTypeWrapper<Partial<IssueWhereInput>>;
   IssueWhereUniqueInput: ResolverTypeWrapper<Partial<IssueWhereUniqueInput>>;
   Label: ResolverTypeWrapper<Partial<Label>>;
   LabelCount: ResolverTypeWrapper<Partial<LabelCount>>;
   LabelCountAggregate: ResolverTypeWrapper<Partial<LabelCountAggregate>>;
   LabelCountOrderByAggregateInput: ResolverTypeWrapper<Partial<LabelCountOrderByAggregateInput>>;
   LabelCreateInput: ResolverTypeWrapper<Partial<LabelCreateInput>>;
   LabelCreateManyInput: ResolverTypeWrapper<Partial<LabelCreateManyInput>>;
   LabelCreateNestedOneWithoutIssuesInput: ResolverTypeWrapper<
      Partial<LabelCreateNestedOneWithoutIssuesInput>
   >;
   LabelCreateOrConnectWithoutIssuesInput: ResolverTypeWrapper<
      Partial<LabelCreateOrConnectWithoutIssuesInput>
   >;
   LabelCreateWithoutIssuesInput: ResolverTypeWrapper<Partial<LabelCreateWithoutIssuesInput>>;
   LabelGroupBy: ResolverTypeWrapper<Partial<LabelGroupBy>>;
   LabelMaxAggregate: ResolverTypeWrapper<Partial<LabelMaxAggregate>>;
   LabelMaxOrderByAggregateInput: ResolverTypeWrapper<Partial<LabelMaxOrderByAggregateInput>>;
   LabelMinAggregate: ResolverTypeWrapper<Partial<LabelMinAggregate>>;
   LabelMinOrderByAggregateInput: ResolverTypeWrapper<Partial<LabelMinOrderByAggregateInput>>;
   LabelOrderByWithAggregationInput: ResolverTypeWrapper<Partial<LabelOrderByWithAggregationInput>>;
   LabelOrderByWithRelationInput: ResolverTypeWrapper<Partial<LabelOrderByWithRelationInput>>;
   LabelRelationFilter: ResolverTypeWrapper<Partial<LabelRelationFilter>>;
   LabelScalarFieldEnum: ResolverTypeWrapper<Partial<LabelScalarFieldEnum>>;
   LabelScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<LabelScalarWhereWithAggregatesInput>
   >;
   LabelUpdateInput: ResolverTypeWrapper<Partial<LabelUpdateInput>>;
   LabelUpdateManyMutationInput: ResolverTypeWrapper<Partial<LabelUpdateManyMutationInput>>;
   LabelUpdateOneRequiredWithoutIssuesNestedInput: ResolverTypeWrapper<
      Partial<LabelUpdateOneRequiredWithoutIssuesNestedInput>
   >;
   LabelUpdateToOneWithWhereWithoutIssuesInput: ResolverTypeWrapper<
      Partial<LabelUpdateToOneWithWhereWithoutIssuesInput>
   >;
   LabelUpdateWithoutIssuesInput: ResolverTypeWrapper<Partial<LabelUpdateWithoutIssuesInput>>;
   LabelUpsertWithoutIssuesInput: ResolverTypeWrapper<Partial<LabelUpsertWithoutIssuesInput>>;
   LabelWhereInput: ResolverTypeWrapper<Partial<LabelWhereInput>>;
   LabelWhereUniqueInput: ResolverTypeWrapper<Partial<LabelWhereUniqueInput>>;
   Mutation: ResolverTypeWrapper<{}>;
   NestedBoolFilter: ResolverTypeWrapper<Partial<NestedBoolFilter>>;
   NestedBoolWithAggregatesFilter: ResolverTypeWrapper<Partial<NestedBoolWithAggregatesFilter>>;
   NestedDateTimeFilter: ResolverTypeWrapper<Partial<NestedDateTimeFilter>>;
   NestedDateTimeNullableFilter: ResolverTypeWrapper<Partial<NestedDateTimeNullableFilter>>;
   NestedDateTimeNullableWithAggregatesFilter: ResolverTypeWrapper<
      Partial<NestedDateTimeNullableWithAggregatesFilter>
   >;
   NestedDateTimeWithAggregatesFilter: ResolverTypeWrapper<
      Partial<NestedDateTimeWithAggregatesFilter>
   >;
   NestedFloatFilter: ResolverTypeWrapper<Partial<NestedFloatFilter>>;
   NestedFloatNullableFilter: ResolverTypeWrapper<Partial<NestedFloatNullableFilter>>;
   NestedIntFilter: ResolverTypeWrapper<Partial<NestedIntFilter>>;
   NestedIntNullableFilter: ResolverTypeWrapper<Partial<NestedIntNullableFilter>>;
   NestedIntNullableWithAggregatesFilter: ResolverTypeWrapper<
      Partial<NestedIntNullableWithAggregatesFilter>
   >;
   NestedIntWithAggregatesFilter: ResolverTypeWrapper<Partial<NestedIntWithAggregatesFilter>>;
   NestedStringFilter: ResolverTypeWrapper<Partial<NestedStringFilter>>;
   NestedStringNullableFilter: ResolverTypeWrapper<Partial<NestedStringNullableFilter>>;
   NestedStringNullableWithAggregatesFilter: ResolverTypeWrapper<
      Partial<NestedStringNullableWithAggregatesFilter>
   >;
   NestedStringWithAggregatesFilter: ResolverTypeWrapper<Partial<NestedStringWithAggregatesFilter>>;
   NullableDateTimeFieldUpdateOperationsInput: ResolverTypeWrapper<
      Partial<NullableDateTimeFieldUpdateOperationsInput>
   >;
   NullableIntFieldUpdateOperationsInput: ResolverTypeWrapper<
      Partial<NullableIntFieldUpdateOperationsInput>
   >;
   NullableStringFieldUpdateOperationsInput: ResolverTypeWrapper<
      Partial<NullableStringFieldUpdateOperationsInput>
   >;
   NullsOrder: ResolverTypeWrapper<Partial<NullsOrder>>;
   Project: ResolverTypeWrapper<Partial<Project>>;
   ProjectAvgAggregate: ResolverTypeWrapper<Partial<ProjectAvgAggregate>>;
   ProjectAvgOrderByAggregateInput: ResolverTypeWrapper<Partial<ProjectAvgOrderByAggregateInput>>;
   ProjectCount: ResolverTypeWrapper<Partial<ProjectCount>>;
   ProjectCountAggregate: ResolverTypeWrapper<Partial<ProjectCountAggregate>>;
   ProjectCountOrderByAggregateInput: ResolverTypeWrapper<
      Partial<ProjectCountOrderByAggregateInput>
   >;
   ProjectCreateInput: ResolverTypeWrapper<Partial<ProjectCreateInput>>;
   ProjectCreateManyInput: ResolverTypeWrapper<Partial<ProjectCreateManyInput>>;
   ProjectCreateManyLeadInput: ResolverTypeWrapper<Partial<ProjectCreateManyLeadInput>>;
   ProjectCreateManyLeadInputEnvelope: ResolverTypeWrapper<
      Partial<ProjectCreateManyLeadInputEnvelope>
   >;
   ProjectCreateNestedManyWithoutLeadInput: ResolverTypeWrapper<
      Partial<ProjectCreateNestedManyWithoutLeadInput>
   >;
   ProjectCreateNestedOneWithoutIssuesInput: ResolverTypeWrapper<
      Partial<ProjectCreateNestedOneWithoutIssuesInput>
   >;
   ProjectCreateNestedOneWithoutTeamsInput: ResolverTypeWrapper<
      Partial<ProjectCreateNestedOneWithoutTeamsInput>
   >;
   ProjectCreateOrConnectWithoutIssuesInput: ResolverTypeWrapper<
      Partial<ProjectCreateOrConnectWithoutIssuesInput>
   >;
   ProjectCreateOrConnectWithoutLeadInput: ResolverTypeWrapper<
      Partial<ProjectCreateOrConnectWithoutLeadInput>
   >;
   ProjectCreateOrConnectWithoutTeamsInput: ResolverTypeWrapper<
      Partial<ProjectCreateOrConnectWithoutTeamsInput>
   >;
   ProjectCreateWithoutIssuesInput: ResolverTypeWrapper<Partial<ProjectCreateWithoutIssuesInput>>;
   ProjectCreateWithoutLeadInput: ResolverTypeWrapper<Partial<ProjectCreateWithoutLeadInput>>;
   ProjectCreateWithoutTeamsInput: ResolverTypeWrapper<Partial<ProjectCreateWithoutTeamsInput>>;
   ProjectGroupBy: ResolverTypeWrapper<Partial<ProjectGroupBy>>;
   ProjectListRelationFilter: ResolverTypeWrapper<Partial<ProjectListRelationFilter>>;
   ProjectMaxAggregate: ResolverTypeWrapper<Partial<ProjectMaxAggregate>>;
   ProjectMaxOrderByAggregateInput: ResolverTypeWrapper<Partial<ProjectMaxOrderByAggregateInput>>;
   ProjectMinAggregate: ResolverTypeWrapper<Partial<ProjectMinAggregate>>;
   ProjectMinOrderByAggregateInput: ResolverTypeWrapper<Partial<ProjectMinOrderByAggregateInput>>;
   ProjectNullableRelationFilter: ResolverTypeWrapper<Partial<ProjectNullableRelationFilter>>;
   ProjectOrderByRelationAggregateInput: ResolverTypeWrapper<
      Partial<ProjectOrderByRelationAggregateInput>
   >;
   ProjectOrderByWithAggregationInput: ResolverTypeWrapper<
      Partial<ProjectOrderByWithAggregationInput>
   >;
   ProjectOrderByWithRelationInput: ResolverTypeWrapper<Partial<ProjectOrderByWithRelationInput>>;
   ProjectRelationFilter: ResolverTypeWrapper<Partial<ProjectRelationFilter>>;
   ProjectScalarFieldEnum: ResolverTypeWrapper<Partial<ProjectScalarFieldEnum>>;
   ProjectScalarWhereInput: ResolverTypeWrapper<Partial<ProjectScalarWhereInput>>;
   ProjectScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<ProjectScalarWhereWithAggregatesInput>
   >;
   ProjectSumAggregate: ResolverTypeWrapper<Partial<ProjectSumAggregate>>;
   ProjectSumOrderByAggregateInput: ResolverTypeWrapper<Partial<ProjectSumOrderByAggregateInput>>;
   ProjectUpdateInput: ResolverTypeWrapper<Partial<ProjectUpdateInput>>;
   ProjectUpdateManyMutationInput: ResolverTypeWrapper<Partial<ProjectUpdateManyMutationInput>>;
   ProjectUpdateManyWithWhereWithoutLeadInput: ResolverTypeWrapper<
      Partial<ProjectUpdateManyWithWhereWithoutLeadInput>
   >;
   ProjectUpdateManyWithoutLeadNestedInput: ResolverTypeWrapper<
      Partial<ProjectUpdateManyWithoutLeadNestedInput>
   >;
   ProjectUpdateOneRequiredWithoutTeamsNestedInput: ResolverTypeWrapper<
      Partial<ProjectUpdateOneRequiredWithoutTeamsNestedInput>
   >;
   ProjectUpdateOneWithoutIssuesNestedInput: ResolverTypeWrapper<
      Partial<ProjectUpdateOneWithoutIssuesNestedInput>
   >;
   ProjectUpdateToOneWithWhereWithoutIssuesInput: ResolverTypeWrapper<
      Partial<ProjectUpdateToOneWithWhereWithoutIssuesInput>
   >;
   ProjectUpdateToOneWithWhereWithoutTeamsInput: ResolverTypeWrapper<
      Partial<ProjectUpdateToOneWithWhereWithoutTeamsInput>
   >;
   ProjectUpdateWithWhereUniqueWithoutLeadInput: ResolverTypeWrapper<
      Partial<ProjectUpdateWithWhereUniqueWithoutLeadInput>
   >;
   ProjectUpdateWithoutIssuesInput: ResolverTypeWrapper<Partial<ProjectUpdateWithoutIssuesInput>>;
   ProjectUpdateWithoutLeadInput: ResolverTypeWrapper<Partial<ProjectUpdateWithoutLeadInput>>;
   ProjectUpdateWithoutTeamsInput: ResolverTypeWrapper<Partial<ProjectUpdateWithoutTeamsInput>>;
   ProjectUpsertWithWhereUniqueWithoutLeadInput: ResolverTypeWrapper<
      Partial<ProjectUpsertWithWhereUniqueWithoutLeadInput>
   >;
   ProjectUpsertWithoutIssuesInput: ResolverTypeWrapper<Partial<ProjectUpsertWithoutIssuesInput>>;
   ProjectUpsertWithoutTeamsInput: ResolverTypeWrapper<Partial<ProjectUpsertWithoutTeamsInput>>;
   ProjectWhereInput: ResolverTypeWrapper<Partial<ProjectWhereInput>>;
   ProjectWhereUniqueInput: ResolverTypeWrapper<Partial<ProjectWhereUniqueInput>>;
   Query: ResolverTypeWrapper<{}>;
   SortOrder: ResolverTypeWrapper<Partial<SortOrder>>;
   SortOrderInput: ResolverTypeWrapper<Partial<SortOrderInput>>;
   String: ResolverTypeWrapper<Partial<Scalars['String']['output']>>;
   StringFieldUpdateOperationsInput: ResolverTypeWrapper<Partial<StringFieldUpdateOperationsInput>>;
   StringFilter: ResolverTypeWrapper<Partial<StringFilter>>;
   StringNullableFilter: ResolverTypeWrapper<Partial<StringNullableFilter>>;
   StringNullableWithAggregatesFilter: ResolverTypeWrapper<
      Partial<StringNullableWithAggregatesFilter>
   >;
   StringWithAggregatesFilter: ResolverTypeWrapper<Partial<StringWithAggregatesFilter>>;
   Subtask: ResolverTypeWrapper<Partial<Subtask>>;
   SubtaskAvgAggregate: ResolverTypeWrapper<Partial<SubtaskAvgAggregate>>;
   SubtaskAvgOrderByAggregateInput: ResolverTypeWrapper<Partial<SubtaskAvgOrderByAggregateInput>>;
   SubtaskCount: ResolverTypeWrapper<Partial<SubtaskCount>>;
   SubtaskCountAggregate: ResolverTypeWrapper<Partial<SubtaskCountAggregate>>;
   SubtaskCountOrderByAggregateInput: ResolverTypeWrapper<
      Partial<SubtaskCountOrderByAggregateInput>
   >;
   SubtaskCreateInput: ResolverTypeWrapper<Partial<SubtaskCreateInput>>;
   SubtaskCreateManyInput: ResolverTypeWrapper<Partial<SubtaskCreateManyInput>>;
   SubtaskCreateManyParentTaskInput: ResolverTypeWrapper<Partial<SubtaskCreateManyParentTaskInput>>;
   SubtaskCreateManyParentTaskInputEnvelope: ResolverTypeWrapper<
      Partial<SubtaskCreateManyParentTaskInputEnvelope>
   >;
   SubtaskCreateNestedManyWithoutParentTaskInput: ResolverTypeWrapper<
      Partial<SubtaskCreateNestedManyWithoutParentTaskInput>
   >;
   SubtaskCreateNestedOneWithoutIssuesInput: ResolverTypeWrapper<
      Partial<SubtaskCreateNestedOneWithoutIssuesInput>
   >;
   SubtaskCreateOrConnectWithoutIssuesInput: ResolverTypeWrapper<
      Partial<SubtaskCreateOrConnectWithoutIssuesInput>
   >;
   SubtaskCreateOrConnectWithoutParentTaskInput: ResolverTypeWrapper<
      Partial<SubtaskCreateOrConnectWithoutParentTaskInput>
   >;
   SubtaskCreateWithoutIssuesInput: ResolverTypeWrapper<Partial<SubtaskCreateWithoutIssuesInput>>;
   SubtaskCreateWithoutParentTaskInput: ResolverTypeWrapper<
      Partial<SubtaskCreateWithoutParentTaskInput>
   >;
   SubtaskGroupBy: ResolverTypeWrapper<Partial<SubtaskGroupBy>>;
   SubtaskListRelationFilter: ResolverTypeWrapper<Partial<SubtaskListRelationFilter>>;
   SubtaskMaxAggregate: ResolverTypeWrapper<Partial<SubtaskMaxAggregate>>;
   SubtaskMaxOrderByAggregateInput: ResolverTypeWrapper<Partial<SubtaskMaxOrderByAggregateInput>>;
   SubtaskMinAggregate: ResolverTypeWrapper<Partial<SubtaskMinAggregate>>;
   SubtaskMinOrderByAggregateInput: ResolverTypeWrapper<Partial<SubtaskMinOrderByAggregateInput>>;
   SubtaskNullableRelationFilter: ResolverTypeWrapper<Partial<SubtaskNullableRelationFilter>>;
   SubtaskOrderByRelationAggregateInput: ResolverTypeWrapper<
      Partial<SubtaskOrderByRelationAggregateInput>
   >;
   SubtaskOrderByWithAggregationInput: ResolverTypeWrapper<
      Partial<SubtaskOrderByWithAggregationInput>
   >;
   SubtaskOrderByWithRelationInput: ResolverTypeWrapper<Partial<SubtaskOrderByWithRelationInput>>;
   SubtaskScalarFieldEnum: ResolverTypeWrapper<Partial<SubtaskScalarFieldEnum>>;
   SubtaskScalarWhereInput: ResolverTypeWrapper<Partial<SubtaskScalarWhereInput>>;
   SubtaskScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<SubtaskScalarWhereWithAggregatesInput>
   >;
   SubtaskSumAggregate: ResolverTypeWrapper<Partial<SubtaskSumAggregate>>;
   SubtaskSumOrderByAggregateInput: ResolverTypeWrapper<Partial<SubtaskSumOrderByAggregateInput>>;
   SubtaskUpdateInput: ResolverTypeWrapper<Partial<SubtaskUpdateInput>>;
   SubtaskUpdateManyMutationInput: ResolverTypeWrapper<Partial<SubtaskUpdateManyMutationInput>>;
   SubtaskUpdateManyWithWhereWithoutParentTaskInput: ResolverTypeWrapper<
      Partial<SubtaskUpdateManyWithWhereWithoutParentTaskInput>
   >;
   SubtaskUpdateManyWithoutParentTaskNestedInput: ResolverTypeWrapper<
      Partial<SubtaskUpdateManyWithoutParentTaskNestedInput>
   >;
   SubtaskUpdateOneWithoutIssuesNestedInput: ResolverTypeWrapper<
      Partial<SubtaskUpdateOneWithoutIssuesNestedInput>
   >;
   SubtaskUpdateToOneWithWhereWithoutIssuesInput: ResolverTypeWrapper<
      Partial<SubtaskUpdateToOneWithWhereWithoutIssuesInput>
   >;
   SubtaskUpdateWithWhereUniqueWithoutParentTaskInput: ResolverTypeWrapper<
      Partial<SubtaskUpdateWithWhereUniqueWithoutParentTaskInput>
   >;
   SubtaskUpdateWithoutIssuesInput: ResolverTypeWrapper<Partial<SubtaskUpdateWithoutIssuesInput>>;
   SubtaskUpdateWithoutParentTaskInput: ResolverTypeWrapper<
      Partial<SubtaskUpdateWithoutParentTaskInput>
   >;
   SubtaskUpsertWithWhereUniqueWithoutParentTaskInput: ResolverTypeWrapper<
      Partial<SubtaskUpsertWithWhereUniqueWithoutParentTaskInput>
   >;
   SubtaskUpsertWithoutIssuesInput: ResolverTypeWrapper<Partial<SubtaskUpsertWithoutIssuesInput>>;
   SubtaskWhereInput: ResolverTypeWrapper<Partial<SubtaskWhereInput>>;
   SubtaskWhereUniqueInput: ResolverTypeWrapper<Partial<SubtaskWhereUniqueInput>>;
   SyncConflict: ResolverTypeWrapper<Partial<SyncConflict>>;
   SyncConflictCountAggregate: ResolverTypeWrapper<Partial<SyncConflictCountAggregate>>;
   SyncConflictCountOrderByAggregateInput: ResolverTypeWrapper<
      Partial<SyncConflictCountOrderByAggregateInput>
   >;
   SyncConflictCreateInput: ResolverTypeWrapper<Partial<SyncConflictCreateInput>>;
   SyncConflictCreateManyInput: ResolverTypeWrapper<Partial<SyncConflictCreateManyInput>>;
   SyncConflictGroupBy: ResolverTypeWrapper<Partial<SyncConflictGroupBy>>;
   SyncConflictMaxAggregate: ResolverTypeWrapper<Partial<SyncConflictMaxAggregate>>;
   SyncConflictMaxOrderByAggregateInput: ResolverTypeWrapper<
      Partial<SyncConflictMaxOrderByAggregateInput>
   >;
   SyncConflictMinAggregate: ResolverTypeWrapper<Partial<SyncConflictMinAggregate>>;
   SyncConflictMinOrderByAggregateInput: ResolverTypeWrapper<
      Partial<SyncConflictMinOrderByAggregateInput>
   >;
   SyncConflictOrderByWithAggregationInput: ResolverTypeWrapper<
      Partial<SyncConflictOrderByWithAggregationInput>
   >;
   SyncConflictOrderByWithRelationInput: ResolverTypeWrapper<
      Partial<SyncConflictOrderByWithRelationInput>
   >;
   SyncConflictScalarFieldEnum: ResolverTypeWrapper<Partial<SyncConflictScalarFieldEnum>>;
   SyncConflictScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<SyncConflictScalarWhereWithAggregatesInput>
   >;
   SyncConflictUpdateInput: ResolverTypeWrapper<Partial<SyncConflictUpdateInput>>;
   SyncConflictUpdateManyMutationInput: ResolverTypeWrapper<
      Partial<SyncConflictUpdateManyMutationInput>
   >;
   SyncConflictWhereInput: ResolverTypeWrapper<Partial<SyncConflictWhereInput>>;
   SyncConflictWhereUniqueInput: ResolverTypeWrapper<Partial<SyncConflictWhereUniqueInput>>;
   SyncOperation: ResolverTypeWrapper<Partial<SyncOperation>>;
   SyncOperationAvgAggregate: ResolverTypeWrapper<Partial<SyncOperationAvgAggregate>>;
   SyncOperationAvgOrderByAggregateInput: ResolverTypeWrapper<
      Partial<SyncOperationAvgOrderByAggregateInput>
   >;
   SyncOperationCountAggregate: ResolverTypeWrapper<Partial<SyncOperationCountAggregate>>;
   SyncOperationCountOrderByAggregateInput: ResolverTypeWrapper<
      Partial<SyncOperationCountOrderByAggregateInput>
   >;
   SyncOperationCreateInput: ResolverTypeWrapper<Partial<SyncOperationCreateInput>>;
   SyncOperationCreateManyInput: ResolverTypeWrapper<Partial<SyncOperationCreateManyInput>>;
   SyncOperationGroupBy: ResolverTypeWrapper<Partial<SyncOperationGroupBy>>;
   SyncOperationMaxAggregate: ResolverTypeWrapper<Partial<SyncOperationMaxAggregate>>;
   SyncOperationMaxOrderByAggregateInput: ResolverTypeWrapper<
      Partial<SyncOperationMaxOrderByAggregateInput>
   >;
   SyncOperationMinAggregate: ResolverTypeWrapper<Partial<SyncOperationMinAggregate>>;
   SyncOperationMinOrderByAggregateInput: ResolverTypeWrapper<
      Partial<SyncOperationMinOrderByAggregateInput>
   >;
   SyncOperationOrderByWithAggregationInput: ResolverTypeWrapper<
      Partial<SyncOperationOrderByWithAggregationInput>
   >;
   SyncOperationOrderByWithRelationInput: ResolverTypeWrapper<
      Partial<SyncOperationOrderByWithRelationInput>
   >;
   SyncOperationScalarFieldEnum: ResolverTypeWrapper<Partial<SyncOperationScalarFieldEnum>>;
   SyncOperationScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<SyncOperationScalarWhereWithAggregatesInput>
   >;
   SyncOperationSumAggregate: ResolverTypeWrapper<Partial<SyncOperationSumAggregate>>;
   SyncOperationSumOrderByAggregateInput: ResolverTypeWrapper<
      Partial<SyncOperationSumOrderByAggregateInput>
   >;
   SyncOperationUpdateInput: ResolverTypeWrapper<Partial<SyncOperationUpdateInput>>;
   SyncOperationUpdateManyMutationInput: ResolverTypeWrapper<
      Partial<SyncOperationUpdateManyMutationInput>
   >;
   SyncOperationWhereInput: ResolverTypeWrapper<Partial<SyncOperationWhereInput>>;
   SyncOperationWhereUniqueInput: ResolverTypeWrapper<Partial<SyncOperationWhereUniqueInput>>;
   Task: ResolverTypeWrapper<Partial<Task>>;
   TaskAvgAggregate: ResolverTypeWrapper<Partial<TaskAvgAggregate>>;
   TaskAvgOrderByAggregateInput: ResolverTypeWrapper<Partial<TaskAvgOrderByAggregateInput>>;
   TaskCount: ResolverTypeWrapper<Partial<TaskCount>>;
   TaskCountAggregate: ResolverTypeWrapper<Partial<TaskCountAggregate>>;
   TaskCountOrderByAggregateInput: ResolverTypeWrapper<Partial<TaskCountOrderByAggregateInput>>;
   TaskCreateInput: ResolverTypeWrapper<Partial<TaskCreateInput>>;
   TaskCreateManyInput: ResolverTypeWrapper<Partial<TaskCreateManyInput>>;
   TaskCreateNestedOneWithoutDependenciesInput: ResolverTypeWrapper<
      Partial<TaskCreateNestedOneWithoutDependenciesInput>
   >;
   TaskCreateNestedOneWithoutDependentsInput: ResolverTypeWrapper<
      Partial<TaskCreateNestedOneWithoutDependentsInput>
   >;
   TaskCreateNestedOneWithoutIssuesInput: ResolverTypeWrapper<
      Partial<TaskCreateNestedOneWithoutIssuesInput>
   >;
   TaskCreateNestedOneWithoutSubtasksInput: ResolverTypeWrapper<
      Partial<TaskCreateNestedOneWithoutSubtasksInput>
   >;
   TaskCreateOrConnectWithoutDependenciesInput: ResolverTypeWrapper<
      Partial<TaskCreateOrConnectWithoutDependenciesInput>
   >;
   TaskCreateOrConnectWithoutDependentsInput: ResolverTypeWrapper<
      Partial<TaskCreateOrConnectWithoutDependentsInput>
   >;
   TaskCreateOrConnectWithoutIssuesInput: ResolverTypeWrapper<
      Partial<TaskCreateOrConnectWithoutIssuesInput>
   >;
   TaskCreateOrConnectWithoutSubtasksInput: ResolverTypeWrapper<
      Partial<TaskCreateOrConnectWithoutSubtasksInput>
   >;
   TaskCreateWithoutDependenciesInput: ResolverTypeWrapper<
      Partial<TaskCreateWithoutDependenciesInput>
   >;
   TaskCreateWithoutDependentsInput: ResolverTypeWrapper<Partial<TaskCreateWithoutDependentsInput>>;
   TaskCreateWithoutIssuesInput: ResolverTypeWrapper<Partial<TaskCreateWithoutIssuesInput>>;
   TaskCreateWithoutSubtasksInput: ResolverTypeWrapper<Partial<TaskCreateWithoutSubtasksInput>>;
   TaskDependency: ResolverTypeWrapper<Partial<TaskDependency>>;
   TaskDependencyAvgAggregate: ResolverTypeWrapper<Partial<TaskDependencyAvgAggregate>>;
   TaskDependencyAvgOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TaskDependencyAvgOrderByAggregateInput>
   >;
   TaskDependencyCountAggregate: ResolverTypeWrapper<Partial<TaskDependencyCountAggregate>>;
   TaskDependencyCountOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TaskDependencyCountOrderByAggregateInput>
   >;
   TaskDependencyCreateInput: ResolverTypeWrapper<Partial<TaskDependencyCreateInput>>;
   TaskDependencyCreateManyDependsOnInput: ResolverTypeWrapper<
      Partial<TaskDependencyCreateManyDependsOnInput>
   >;
   TaskDependencyCreateManyDependsOnInputEnvelope: ResolverTypeWrapper<
      Partial<TaskDependencyCreateManyDependsOnInputEnvelope>
   >;
   TaskDependencyCreateManyInput: ResolverTypeWrapper<Partial<TaskDependencyCreateManyInput>>;
   TaskDependencyCreateManyTaskInput: ResolverTypeWrapper<
      Partial<TaskDependencyCreateManyTaskInput>
   >;
   TaskDependencyCreateManyTaskInputEnvelope: ResolverTypeWrapper<
      Partial<TaskDependencyCreateManyTaskInputEnvelope>
   >;
   TaskDependencyCreateNestedManyWithoutDependsOnInput: ResolverTypeWrapper<
      Partial<TaskDependencyCreateNestedManyWithoutDependsOnInput>
   >;
   TaskDependencyCreateNestedManyWithoutTaskInput: ResolverTypeWrapper<
      Partial<TaskDependencyCreateNestedManyWithoutTaskInput>
   >;
   TaskDependencyCreateOrConnectWithoutDependsOnInput: ResolverTypeWrapper<
      Partial<TaskDependencyCreateOrConnectWithoutDependsOnInput>
   >;
   TaskDependencyCreateOrConnectWithoutTaskInput: ResolverTypeWrapper<
      Partial<TaskDependencyCreateOrConnectWithoutTaskInput>
   >;
   TaskDependencyCreateWithoutDependsOnInput: ResolverTypeWrapper<
      Partial<TaskDependencyCreateWithoutDependsOnInput>
   >;
   TaskDependencyCreateWithoutTaskInput: ResolverTypeWrapper<
      Partial<TaskDependencyCreateWithoutTaskInput>
   >;
   TaskDependencyGroupBy: ResolverTypeWrapper<Partial<TaskDependencyGroupBy>>;
   TaskDependencyListRelationFilter: ResolverTypeWrapper<Partial<TaskDependencyListRelationFilter>>;
   TaskDependencyMaxAggregate: ResolverTypeWrapper<Partial<TaskDependencyMaxAggregate>>;
   TaskDependencyMaxOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TaskDependencyMaxOrderByAggregateInput>
   >;
   TaskDependencyMinAggregate: ResolverTypeWrapper<Partial<TaskDependencyMinAggregate>>;
   TaskDependencyMinOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TaskDependencyMinOrderByAggregateInput>
   >;
   TaskDependencyOrderByRelationAggregateInput: ResolverTypeWrapper<
      Partial<TaskDependencyOrderByRelationAggregateInput>
   >;
   TaskDependencyOrderByWithAggregationInput: ResolverTypeWrapper<
      Partial<TaskDependencyOrderByWithAggregationInput>
   >;
   TaskDependencyOrderByWithRelationInput: ResolverTypeWrapper<
      Partial<TaskDependencyOrderByWithRelationInput>
   >;
   TaskDependencyScalarFieldEnum: ResolverTypeWrapper<Partial<TaskDependencyScalarFieldEnum>>;
   TaskDependencyScalarWhereInput: ResolverTypeWrapper<Partial<TaskDependencyScalarWhereInput>>;
   TaskDependencyScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<TaskDependencyScalarWhereWithAggregatesInput>
   >;
   TaskDependencySumAggregate: ResolverTypeWrapper<Partial<TaskDependencySumAggregate>>;
   TaskDependencySumOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TaskDependencySumOrderByAggregateInput>
   >;
   TaskDependencyTaskIdDependsOnIdCompoundUniqueInput: ResolverTypeWrapper<
      Partial<TaskDependencyTaskIdDependsOnIdCompoundUniqueInput>
   >;
   TaskDependencyUpdateInput: ResolverTypeWrapper<Partial<TaskDependencyUpdateInput>>;
   TaskDependencyUpdateManyMutationInput: ResolverTypeWrapper<
      Partial<TaskDependencyUpdateManyMutationInput>
   >;
   TaskDependencyUpdateManyWithWhereWithoutDependsOnInput: ResolverTypeWrapper<
      Partial<TaskDependencyUpdateManyWithWhereWithoutDependsOnInput>
   >;
   TaskDependencyUpdateManyWithWhereWithoutTaskInput: ResolverTypeWrapper<
      Partial<TaskDependencyUpdateManyWithWhereWithoutTaskInput>
   >;
   TaskDependencyUpdateManyWithoutDependsOnNestedInput: ResolverTypeWrapper<
      Partial<TaskDependencyUpdateManyWithoutDependsOnNestedInput>
   >;
   TaskDependencyUpdateManyWithoutTaskNestedInput: ResolverTypeWrapper<
      Partial<TaskDependencyUpdateManyWithoutTaskNestedInput>
   >;
   TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput: ResolverTypeWrapper<
      Partial<TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput>
   >;
   TaskDependencyUpdateWithWhereUniqueWithoutTaskInput: ResolverTypeWrapper<
      Partial<TaskDependencyUpdateWithWhereUniqueWithoutTaskInput>
   >;
   TaskDependencyUpdateWithoutDependsOnInput: ResolverTypeWrapper<
      Partial<TaskDependencyUpdateWithoutDependsOnInput>
   >;
   TaskDependencyUpdateWithoutTaskInput: ResolverTypeWrapper<
      Partial<TaskDependencyUpdateWithoutTaskInput>
   >;
   TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput: ResolverTypeWrapper<
      Partial<TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput>
   >;
   TaskDependencyUpsertWithWhereUniqueWithoutTaskInput: ResolverTypeWrapper<
      Partial<TaskDependencyUpsertWithWhereUniqueWithoutTaskInput>
   >;
   TaskDependencyWhereInput: ResolverTypeWrapper<Partial<TaskDependencyWhereInput>>;
   TaskDependencyWhereUniqueInput: ResolverTypeWrapper<Partial<TaskDependencyWhereUniqueInput>>;
   TaskGroupBy: ResolverTypeWrapper<Partial<TaskGroupBy>>;
   TaskMasterMetadata: ResolverTypeWrapper<Partial<TaskMasterMetadata>>;
   TaskMasterMetadataAvgAggregate: ResolverTypeWrapper<Partial<TaskMasterMetadataAvgAggregate>>;
   TaskMasterMetadataAvgOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TaskMasterMetadataAvgOrderByAggregateInput>
   >;
   TaskMasterMetadataCountAggregate: ResolverTypeWrapper<Partial<TaskMasterMetadataCountAggregate>>;
   TaskMasterMetadataCountOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TaskMasterMetadataCountOrderByAggregateInput>
   >;
   TaskMasterMetadataCreateInput: ResolverTypeWrapper<Partial<TaskMasterMetadataCreateInput>>;
   TaskMasterMetadataCreateManyInput: ResolverTypeWrapper<
      Partial<TaskMasterMetadataCreateManyInput>
   >;
   TaskMasterMetadataGroupBy: ResolverTypeWrapper<Partial<TaskMasterMetadataGroupBy>>;
   TaskMasterMetadataMaxAggregate: ResolverTypeWrapper<Partial<TaskMasterMetadataMaxAggregate>>;
   TaskMasterMetadataMaxOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TaskMasterMetadataMaxOrderByAggregateInput>
   >;
   TaskMasterMetadataMinAggregate: ResolverTypeWrapper<Partial<TaskMasterMetadataMinAggregate>>;
   TaskMasterMetadataMinOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TaskMasterMetadataMinOrderByAggregateInput>
   >;
   TaskMasterMetadataOrderByWithAggregationInput: ResolverTypeWrapper<
      Partial<TaskMasterMetadataOrderByWithAggregationInput>
   >;
   TaskMasterMetadataOrderByWithRelationInput: ResolverTypeWrapper<
      Partial<TaskMasterMetadataOrderByWithRelationInput>
   >;
   TaskMasterMetadataScalarFieldEnum: ResolverTypeWrapper<
      Partial<TaskMasterMetadataScalarFieldEnum>
   >;
   TaskMasterMetadataScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<TaskMasterMetadataScalarWhereWithAggregatesInput>
   >;
   TaskMasterMetadataSumAggregate: ResolverTypeWrapper<Partial<TaskMasterMetadataSumAggregate>>;
   TaskMasterMetadataSumOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TaskMasterMetadataSumOrderByAggregateInput>
   >;
   TaskMasterMetadataUpdateInput: ResolverTypeWrapper<Partial<TaskMasterMetadataUpdateInput>>;
   TaskMasterMetadataUpdateManyMutationInput: ResolverTypeWrapper<
      Partial<TaskMasterMetadataUpdateManyMutationInput>
   >;
   TaskMasterMetadataWhereInput: ResolverTypeWrapper<Partial<TaskMasterMetadataWhereInput>>;
   TaskMasterMetadataWhereUniqueInput: ResolverTypeWrapper<
      Partial<TaskMasterMetadataWhereUniqueInput>
   >;
   TaskMaxAggregate: ResolverTypeWrapper<Partial<TaskMaxAggregate>>;
   TaskMaxOrderByAggregateInput: ResolverTypeWrapper<Partial<TaskMaxOrderByAggregateInput>>;
   TaskMinAggregate: ResolverTypeWrapper<Partial<TaskMinAggregate>>;
   TaskMinOrderByAggregateInput: ResolverTypeWrapper<Partial<TaskMinOrderByAggregateInput>>;
   TaskNullableRelationFilter: ResolverTypeWrapper<Partial<TaskNullableRelationFilter>>;
   TaskOrderByWithAggregationInput: ResolverTypeWrapper<Partial<TaskOrderByWithAggregationInput>>;
   TaskOrderByWithRelationInput: ResolverTypeWrapper<Partial<TaskOrderByWithRelationInput>>;
   TaskRelationFilter: ResolverTypeWrapper<Partial<TaskRelationFilter>>;
   TaskScalarFieldEnum: ResolverTypeWrapper<Partial<TaskScalarFieldEnum>>;
   TaskScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<TaskScalarWhereWithAggregatesInput>
   >;
   TaskSumAggregate: ResolverTypeWrapper<Partial<TaskSumAggregate>>;
   TaskSumOrderByAggregateInput: ResolverTypeWrapper<Partial<TaskSumOrderByAggregateInput>>;
   TaskUpdateInput: ResolverTypeWrapper<Partial<TaskUpdateInput>>;
   TaskUpdateManyMutationInput: ResolverTypeWrapper<Partial<TaskUpdateManyMutationInput>>;
   TaskUpdateOneRequiredWithoutDependenciesNestedInput: ResolverTypeWrapper<
      Partial<TaskUpdateOneRequiredWithoutDependenciesNestedInput>
   >;
   TaskUpdateOneRequiredWithoutDependentsNestedInput: ResolverTypeWrapper<
      Partial<TaskUpdateOneRequiredWithoutDependentsNestedInput>
   >;
   TaskUpdateOneRequiredWithoutSubtasksNestedInput: ResolverTypeWrapper<
      Partial<TaskUpdateOneRequiredWithoutSubtasksNestedInput>
   >;
   TaskUpdateOneWithoutIssuesNestedInput: ResolverTypeWrapper<
      Partial<TaskUpdateOneWithoutIssuesNestedInput>
   >;
   TaskUpdateToOneWithWhereWithoutDependenciesInput: ResolverTypeWrapper<
      Partial<TaskUpdateToOneWithWhereWithoutDependenciesInput>
   >;
   TaskUpdateToOneWithWhereWithoutDependentsInput: ResolverTypeWrapper<
      Partial<TaskUpdateToOneWithWhereWithoutDependentsInput>
   >;
   TaskUpdateToOneWithWhereWithoutIssuesInput: ResolverTypeWrapper<
      Partial<TaskUpdateToOneWithWhereWithoutIssuesInput>
   >;
   TaskUpdateToOneWithWhereWithoutSubtasksInput: ResolverTypeWrapper<
      Partial<TaskUpdateToOneWithWhereWithoutSubtasksInput>
   >;
   TaskUpdateWithoutDependenciesInput: ResolverTypeWrapper<
      Partial<TaskUpdateWithoutDependenciesInput>
   >;
   TaskUpdateWithoutDependentsInput: ResolverTypeWrapper<Partial<TaskUpdateWithoutDependentsInput>>;
   TaskUpdateWithoutIssuesInput: ResolverTypeWrapper<Partial<TaskUpdateWithoutIssuesInput>>;
   TaskUpdateWithoutSubtasksInput: ResolverTypeWrapper<Partial<TaskUpdateWithoutSubtasksInput>>;
   TaskUpsertWithoutDependenciesInput: ResolverTypeWrapper<
      Partial<TaskUpsertWithoutDependenciesInput>
   >;
   TaskUpsertWithoutDependentsInput: ResolverTypeWrapper<Partial<TaskUpsertWithoutDependentsInput>>;
   TaskUpsertWithoutIssuesInput: ResolverTypeWrapper<Partial<TaskUpsertWithoutIssuesInput>>;
   TaskUpsertWithoutSubtasksInput: ResolverTypeWrapper<Partial<TaskUpsertWithoutSubtasksInput>>;
   TaskWhereInput: ResolverTypeWrapper<Partial<TaskWhereInput>>;
   TaskWhereUniqueInput: ResolverTypeWrapper<Partial<TaskWhereUniqueInput>>;
   Team: ResolverTypeWrapper<Partial<Team>>;
   TeamCount: ResolverTypeWrapper<Partial<TeamCount>>;
   TeamCountAggregate: ResolverTypeWrapper<Partial<TeamCountAggregate>>;
   TeamCountOrderByAggregateInput: ResolverTypeWrapper<Partial<TeamCountOrderByAggregateInput>>;
   TeamCreateInput: ResolverTypeWrapper<Partial<TeamCreateInput>>;
   TeamCreateManyInput: ResolverTypeWrapper<Partial<TeamCreateManyInput>>;
   TeamCreateNestedOneWithoutCyclesInput: ResolverTypeWrapper<
      Partial<TeamCreateNestedOneWithoutCyclesInput>
   >;
   TeamCreateNestedOneWithoutMembersInput: ResolverTypeWrapper<
      Partial<TeamCreateNestedOneWithoutMembersInput>
   >;
   TeamCreateNestedOneWithoutProjectsInput: ResolverTypeWrapper<
      Partial<TeamCreateNestedOneWithoutProjectsInput>
   >;
   TeamCreateOrConnectWithoutCyclesInput: ResolverTypeWrapper<
      Partial<TeamCreateOrConnectWithoutCyclesInput>
   >;
   TeamCreateOrConnectWithoutMembersInput: ResolverTypeWrapper<
      Partial<TeamCreateOrConnectWithoutMembersInput>
   >;
   TeamCreateOrConnectWithoutProjectsInput: ResolverTypeWrapper<
      Partial<TeamCreateOrConnectWithoutProjectsInput>
   >;
   TeamCreateWithoutCyclesInput: ResolverTypeWrapper<Partial<TeamCreateWithoutCyclesInput>>;
   TeamCreateWithoutMembersInput: ResolverTypeWrapper<Partial<TeamCreateWithoutMembersInput>>;
   TeamCreateWithoutProjectsInput: ResolverTypeWrapper<Partial<TeamCreateWithoutProjectsInput>>;
   TeamGroupBy: ResolverTypeWrapper<Partial<TeamGroupBy>>;
   TeamMaxAggregate: ResolverTypeWrapper<Partial<TeamMaxAggregate>>;
   TeamMaxOrderByAggregateInput: ResolverTypeWrapper<Partial<TeamMaxOrderByAggregateInput>>;
   TeamMember: ResolverTypeWrapper<Partial<TeamMember>>;
   TeamMemberCountAggregate: ResolverTypeWrapper<Partial<TeamMemberCountAggregate>>;
   TeamMemberCountOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TeamMemberCountOrderByAggregateInput>
   >;
   TeamMemberCreateInput: ResolverTypeWrapper<Partial<TeamMemberCreateInput>>;
   TeamMemberCreateManyInput: ResolverTypeWrapper<Partial<TeamMemberCreateManyInput>>;
   TeamMemberCreateManyTeamInput: ResolverTypeWrapper<Partial<TeamMemberCreateManyTeamInput>>;
   TeamMemberCreateManyTeamInputEnvelope: ResolverTypeWrapper<
      Partial<TeamMemberCreateManyTeamInputEnvelope>
   >;
   TeamMemberCreateManyUserInput: ResolverTypeWrapper<Partial<TeamMemberCreateManyUserInput>>;
   TeamMemberCreateManyUserInputEnvelope: ResolverTypeWrapper<
      Partial<TeamMemberCreateManyUserInputEnvelope>
   >;
   TeamMemberCreateNestedManyWithoutTeamInput: ResolverTypeWrapper<
      Partial<TeamMemberCreateNestedManyWithoutTeamInput>
   >;
   TeamMemberCreateNestedManyWithoutUserInput: ResolverTypeWrapper<
      Partial<TeamMemberCreateNestedManyWithoutUserInput>
   >;
   TeamMemberCreateOrConnectWithoutTeamInput: ResolverTypeWrapper<
      Partial<TeamMemberCreateOrConnectWithoutTeamInput>
   >;
   TeamMemberCreateOrConnectWithoutUserInput: ResolverTypeWrapper<
      Partial<TeamMemberCreateOrConnectWithoutUserInput>
   >;
   TeamMemberCreateWithoutTeamInput: ResolverTypeWrapper<Partial<TeamMemberCreateWithoutTeamInput>>;
   TeamMemberCreateWithoutUserInput: ResolverTypeWrapper<Partial<TeamMemberCreateWithoutUserInput>>;
   TeamMemberGroupBy: ResolverTypeWrapper<Partial<TeamMemberGroupBy>>;
   TeamMemberListRelationFilter: ResolverTypeWrapper<Partial<TeamMemberListRelationFilter>>;
   TeamMemberMaxAggregate: ResolverTypeWrapper<Partial<TeamMemberMaxAggregate>>;
   TeamMemberMaxOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TeamMemberMaxOrderByAggregateInput>
   >;
   TeamMemberMinAggregate: ResolverTypeWrapper<Partial<TeamMemberMinAggregate>>;
   TeamMemberMinOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TeamMemberMinOrderByAggregateInput>
   >;
   TeamMemberOrderByRelationAggregateInput: ResolverTypeWrapper<
      Partial<TeamMemberOrderByRelationAggregateInput>
   >;
   TeamMemberOrderByWithAggregationInput: ResolverTypeWrapper<
      Partial<TeamMemberOrderByWithAggregationInput>
   >;
   TeamMemberOrderByWithRelationInput: ResolverTypeWrapper<
      Partial<TeamMemberOrderByWithRelationInput>
   >;
   TeamMemberScalarFieldEnum: ResolverTypeWrapper<Partial<TeamMemberScalarFieldEnum>>;
   TeamMemberScalarWhereInput: ResolverTypeWrapper<Partial<TeamMemberScalarWhereInput>>;
   TeamMemberScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<TeamMemberScalarWhereWithAggregatesInput>
   >;
   TeamMemberTeamIdUserIdCompoundUniqueInput: ResolverTypeWrapper<
      Partial<TeamMemberTeamIdUserIdCompoundUniqueInput>
   >;
   TeamMemberUpdateInput: ResolverTypeWrapper<Partial<TeamMemberUpdateInput>>;
   TeamMemberUpdateManyMutationInput: ResolverTypeWrapper<
      Partial<TeamMemberUpdateManyMutationInput>
   >;
   TeamMemberUpdateManyWithWhereWithoutTeamInput: ResolverTypeWrapper<
      Partial<TeamMemberUpdateManyWithWhereWithoutTeamInput>
   >;
   TeamMemberUpdateManyWithWhereWithoutUserInput: ResolverTypeWrapper<
      Partial<TeamMemberUpdateManyWithWhereWithoutUserInput>
   >;
   TeamMemberUpdateManyWithoutTeamNestedInput: ResolverTypeWrapper<
      Partial<TeamMemberUpdateManyWithoutTeamNestedInput>
   >;
   TeamMemberUpdateManyWithoutUserNestedInput: ResolverTypeWrapper<
      Partial<TeamMemberUpdateManyWithoutUserNestedInput>
   >;
   TeamMemberUpdateWithWhereUniqueWithoutTeamInput: ResolverTypeWrapper<
      Partial<TeamMemberUpdateWithWhereUniqueWithoutTeamInput>
   >;
   TeamMemberUpdateWithWhereUniqueWithoutUserInput: ResolverTypeWrapper<
      Partial<TeamMemberUpdateWithWhereUniqueWithoutUserInput>
   >;
   TeamMemberUpdateWithoutTeamInput: ResolverTypeWrapper<Partial<TeamMemberUpdateWithoutTeamInput>>;
   TeamMemberUpdateWithoutUserInput: ResolverTypeWrapper<Partial<TeamMemberUpdateWithoutUserInput>>;
   TeamMemberUpsertWithWhereUniqueWithoutTeamInput: ResolverTypeWrapper<
      Partial<TeamMemberUpsertWithWhereUniqueWithoutTeamInput>
   >;
   TeamMemberUpsertWithWhereUniqueWithoutUserInput: ResolverTypeWrapper<
      Partial<TeamMemberUpsertWithWhereUniqueWithoutUserInput>
   >;
   TeamMemberWhereInput: ResolverTypeWrapper<Partial<TeamMemberWhereInput>>;
   TeamMemberWhereUniqueInput: ResolverTypeWrapper<Partial<TeamMemberWhereUniqueInput>>;
   TeamMinAggregate: ResolverTypeWrapper<Partial<TeamMinAggregate>>;
   TeamMinOrderByAggregateInput: ResolverTypeWrapper<Partial<TeamMinOrderByAggregateInput>>;
   TeamOrderByWithAggregationInput: ResolverTypeWrapper<Partial<TeamOrderByWithAggregationInput>>;
   TeamOrderByWithRelationInput: ResolverTypeWrapper<Partial<TeamOrderByWithRelationInput>>;
   TeamProject: ResolverTypeWrapper<Partial<TeamProject>>;
   TeamProjectCountAggregate: ResolverTypeWrapper<Partial<TeamProjectCountAggregate>>;
   TeamProjectCountOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TeamProjectCountOrderByAggregateInput>
   >;
   TeamProjectCreateInput: ResolverTypeWrapper<Partial<TeamProjectCreateInput>>;
   TeamProjectCreateManyInput: ResolverTypeWrapper<Partial<TeamProjectCreateManyInput>>;
   TeamProjectCreateManyProjectInput: ResolverTypeWrapper<
      Partial<TeamProjectCreateManyProjectInput>
   >;
   TeamProjectCreateManyProjectInputEnvelope: ResolverTypeWrapper<
      Partial<TeamProjectCreateManyProjectInputEnvelope>
   >;
   TeamProjectCreateManyTeamInput: ResolverTypeWrapper<Partial<TeamProjectCreateManyTeamInput>>;
   TeamProjectCreateManyTeamInputEnvelope: ResolverTypeWrapper<
      Partial<TeamProjectCreateManyTeamInputEnvelope>
   >;
   TeamProjectCreateNestedManyWithoutProjectInput: ResolverTypeWrapper<
      Partial<TeamProjectCreateNestedManyWithoutProjectInput>
   >;
   TeamProjectCreateNestedManyWithoutTeamInput: ResolverTypeWrapper<
      Partial<TeamProjectCreateNestedManyWithoutTeamInput>
   >;
   TeamProjectCreateOrConnectWithoutProjectInput: ResolverTypeWrapper<
      Partial<TeamProjectCreateOrConnectWithoutProjectInput>
   >;
   TeamProjectCreateOrConnectWithoutTeamInput: ResolverTypeWrapper<
      Partial<TeamProjectCreateOrConnectWithoutTeamInput>
   >;
   TeamProjectCreateWithoutProjectInput: ResolverTypeWrapper<
      Partial<TeamProjectCreateWithoutProjectInput>
   >;
   TeamProjectCreateWithoutTeamInput: ResolverTypeWrapper<
      Partial<TeamProjectCreateWithoutTeamInput>
   >;
   TeamProjectGroupBy: ResolverTypeWrapper<Partial<TeamProjectGroupBy>>;
   TeamProjectListRelationFilter: ResolverTypeWrapper<Partial<TeamProjectListRelationFilter>>;
   TeamProjectMaxAggregate: ResolverTypeWrapper<Partial<TeamProjectMaxAggregate>>;
   TeamProjectMaxOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TeamProjectMaxOrderByAggregateInput>
   >;
   TeamProjectMinAggregate: ResolverTypeWrapper<Partial<TeamProjectMinAggregate>>;
   TeamProjectMinOrderByAggregateInput: ResolverTypeWrapper<
      Partial<TeamProjectMinOrderByAggregateInput>
   >;
   TeamProjectOrderByRelationAggregateInput: ResolverTypeWrapper<
      Partial<TeamProjectOrderByRelationAggregateInput>
   >;
   TeamProjectOrderByWithAggregationInput: ResolverTypeWrapper<
      Partial<TeamProjectOrderByWithAggregationInput>
   >;
   TeamProjectOrderByWithRelationInput: ResolverTypeWrapper<
      Partial<TeamProjectOrderByWithRelationInput>
   >;
   TeamProjectScalarFieldEnum: ResolverTypeWrapper<Partial<TeamProjectScalarFieldEnum>>;
   TeamProjectScalarWhereInput: ResolverTypeWrapper<Partial<TeamProjectScalarWhereInput>>;
   TeamProjectScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<TeamProjectScalarWhereWithAggregatesInput>
   >;
   TeamProjectTeamIdProjectIdCompoundUniqueInput: ResolverTypeWrapper<
      Partial<TeamProjectTeamIdProjectIdCompoundUniqueInput>
   >;
   TeamProjectUpdateInput: ResolverTypeWrapper<Partial<TeamProjectUpdateInput>>;
   TeamProjectUpdateManyMutationInput: ResolverTypeWrapper<
      Partial<TeamProjectUpdateManyMutationInput>
   >;
   TeamProjectUpdateManyWithWhereWithoutProjectInput: ResolverTypeWrapper<
      Partial<TeamProjectUpdateManyWithWhereWithoutProjectInput>
   >;
   TeamProjectUpdateManyWithWhereWithoutTeamInput: ResolverTypeWrapper<
      Partial<TeamProjectUpdateManyWithWhereWithoutTeamInput>
   >;
   TeamProjectUpdateManyWithoutProjectNestedInput: ResolverTypeWrapper<
      Partial<TeamProjectUpdateManyWithoutProjectNestedInput>
   >;
   TeamProjectUpdateManyWithoutTeamNestedInput: ResolverTypeWrapper<
      Partial<TeamProjectUpdateManyWithoutTeamNestedInput>
   >;
   TeamProjectUpdateWithWhereUniqueWithoutProjectInput: ResolverTypeWrapper<
      Partial<TeamProjectUpdateWithWhereUniqueWithoutProjectInput>
   >;
   TeamProjectUpdateWithWhereUniqueWithoutTeamInput: ResolverTypeWrapper<
      Partial<TeamProjectUpdateWithWhereUniqueWithoutTeamInput>
   >;
   TeamProjectUpdateWithoutProjectInput: ResolverTypeWrapper<
      Partial<TeamProjectUpdateWithoutProjectInput>
   >;
   TeamProjectUpdateWithoutTeamInput: ResolverTypeWrapper<
      Partial<TeamProjectUpdateWithoutTeamInput>
   >;
   TeamProjectUpsertWithWhereUniqueWithoutProjectInput: ResolverTypeWrapper<
      Partial<TeamProjectUpsertWithWhereUniqueWithoutProjectInput>
   >;
   TeamProjectUpsertWithWhereUniqueWithoutTeamInput: ResolverTypeWrapper<
      Partial<TeamProjectUpsertWithWhereUniqueWithoutTeamInput>
   >;
   TeamProjectWhereInput: ResolverTypeWrapper<Partial<TeamProjectWhereInput>>;
   TeamProjectWhereUniqueInput: ResolverTypeWrapper<Partial<TeamProjectWhereUniqueInput>>;
   TeamRelationFilter: ResolverTypeWrapper<Partial<TeamRelationFilter>>;
   TeamScalarFieldEnum: ResolverTypeWrapper<Partial<TeamScalarFieldEnum>>;
   TeamScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<TeamScalarWhereWithAggregatesInput>
   >;
   TeamUpdateInput: ResolverTypeWrapper<Partial<TeamUpdateInput>>;
   TeamUpdateManyMutationInput: ResolverTypeWrapper<Partial<TeamUpdateManyMutationInput>>;
   TeamUpdateOneRequiredWithoutCyclesNestedInput: ResolverTypeWrapper<
      Partial<TeamUpdateOneRequiredWithoutCyclesNestedInput>
   >;
   TeamUpdateOneRequiredWithoutMembersNestedInput: ResolverTypeWrapper<
      Partial<TeamUpdateOneRequiredWithoutMembersNestedInput>
   >;
   TeamUpdateOneRequiredWithoutProjectsNestedInput: ResolverTypeWrapper<
      Partial<TeamUpdateOneRequiredWithoutProjectsNestedInput>
   >;
   TeamUpdateToOneWithWhereWithoutCyclesInput: ResolverTypeWrapper<
      Partial<TeamUpdateToOneWithWhereWithoutCyclesInput>
   >;
   TeamUpdateToOneWithWhereWithoutMembersInput: ResolverTypeWrapper<
      Partial<TeamUpdateToOneWithWhereWithoutMembersInput>
   >;
   TeamUpdateToOneWithWhereWithoutProjectsInput: ResolverTypeWrapper<
      Partial<TeamUpdateToOneWithWhereWithoutProjectsInput>
   >;
   TeamUpdateWithoutCyclesInput: ResolverTypeWrapper<Partial<TeamUpdateWithoutCyclesInput>>;
   TeamUpdateWithoutMembersInput: ResolverTypeWrapper<Partial<TeamUpdateWithoutMembersInput>>;
   TeamUpdateWithoutProjectsInput: ResolverTypeWrapper<Partial<TeamUpdateWithoutProjectsInput>>;
   TeamUpsertWithoutCyclesInput: ResolverTypeWrapper<Partial<TeamUpsertWithoutCyclesInput>>;
   TeamUpsertWithoutMembersInput: ResolverTypeWrapper<Partial<TeamUpsertWithoutMembersInput>>;
   TeamUpsertWithoutProjectsInput: ResolverTypeWrapper<Partial<TeamUpsertWithoutProjectsInput>>;
   TeamWhereInput: ResolverTypeWrapper<Partial<TeamWhereInput>>;
   TeamWhereUniqueInput: ResolverTypeWrapper<Partial<TeamWhereUniqueInput>>;
   User: ResolverTypeWrapper<Partial<User>>;
   UserCount: ResolverTypeWrapper<Partial<UserCount>>;
   UserCountAggregate: ResolverTypeWrapper<Partial<UserCountAggregate>>;
   UserCountOrderByAggregateInput: ResolverTypeWrapper<Partial<UserCountOrderByAggregateInput>>;
   UserCreateInput: ResolverTypeWrapper<Partial<UserCreateInput>>;
   UserCreateManyInput: ResolverTypeWrapper<Partial<UserCreateManyInput>>;
   UserCreateNestedOneWithoutAssignedIssuesInput: ResolverTypeWrapper<
      Partial<UserCreateNestedOneWithoutAssignedIssuesInput>
   >;
   UserCreateNestedOneWithoutLedProjectsInput: ResolverTypeWrapper<
      Partial<UserCreateNestedOneWithoutLedProjectsInput>
   >;
   UserCreateNestedOneWithoutTeamsInput: ResolverTypeWrapper<
      Partial<UserCreateNestedOneWithoutTeamsInput>
   >;
   UserCreateOrConnectWithoutAssignedIssuesInput: ResolverTypeWrapper<
      Partial<UserCreateOrConnectWithoutAssignedIssuesInput>
   >;
   UserCreateOrConnectWithoutLedProjectsInput: ResolverTypeWrapper<
      Partial<UserCreateOrConnectWithoutLedProjectsInput>
   >;
   UserCreateOrConnectWithoutTeamsInput: ResolverTypeWrapper<
      Partial<UserCreateOrConnectWithoutTeamsInput>
   >;
   UserCreateWithoutAssignedIssuesInput: ResolverTypeWrapper<
      Partial<UserCreateWithoutAssignedIssuesInput>
   >;
   UserCreateWithoutLedProjectsInput: ResolverTypeWrapper<
      Partial<UserCreateWithoutLedProjectsInput>
   >;
   UserCreateWithoutTeamsInput: ResolverTypeWrapper<Partial<UserCreateWithoutTeamsInput>>;
   UserGroupBy: ResolverTypeWrapper<Partial<UserGroupBy>>;
   UserMaxAggregate: ResolverTypeWrapper<Partial<UserMaxAggregate>>;
   UserMaxOrderByAggregateInput: ResolverTypeWrapper<Partial<UserMaxOrderByAggregateInput>>;
   UserMinAggregate: ResolverTypeWrapper<Partial<UserMinAggregate>>;
   UserMinOrderByAggregateInput: ResolverTypeWrapper<Partial<UserMinOrderByAggregateInput>>;
   UserNullableRelationFilter: ResolverTypeWrapper<Partial<UserNullableRelationFilter>>;
   UserOrderByWithAggregationInput: ResolverTypeWrapper<Partial<UserOrderByWithAggregationInput>>;
   UserOrderByWithRelationInput: ResolverTypeWrapper<Partial<UserOrderByWithRelationInput>>;
   UserRelationFilter: ResolverTypeWrapper<Partial<UserRelationFilter>>;
   UserScalarFieldEnum: ResolverTypeWrapper<Partial<UserScalarFieldEnum>>;
   UserScalarWhereWithAggregatesInput: ResolverTypeWrapper<
      Partial<UserScalarWhereWithAggregatesInput>
   >;
   UserUpdateInput: ResolverTypeWrapper<Partial<UserUpdateInput>>;
   UserUpdateManyMutationInput: ResolverTypeWrapper<Partial<UserUpdateManyMutationInput>>;
   UserUpdateOneRequiredWithoutTeamsNestedInput: ResolverTypeWrapper<
      Partial<UserUpdateOneRequiredWithoutTeamsNestedInput>
   >;
   UserUpdateOneWithoutAssignedIssuesNestedInput: ResolverTypeWrapper<
      Partial<UserUpdateOneWithoutAssignedIssuesNestedInput>
   >;
   UserUpdateOneWithoutLedProjectsNestedInput: ResolverTypeWrapper<
      Partial<UserUpdateOneWithoutLedProjectsNestedInput>
   >;
   UserUpdateToOneWithWhereWithoutAssignedIssuesInput: ResolverTypeWrapper<
      Partial<UserUpdateToOneWithWhereWithoutAssignedIssuesInput>
   >;
   UserUpdateToOneWithWhereWithoutLedProjectsInput: ResolverTypeWrapper<
      Partial<UserUpdateToOneWithWhereWithoutLedProjectsInput>
   >;
   UserUpdateToOneWithWhereWithoutTeamsInput: ResolverTypeWrapper<
      Partial<UserUpdateToOneWithWhereWithoutTeamsInput>
   >;
   UserUpdateWithoutAssignedIssuesInput: ResolverTypeWrapper<
      Partial<UserUpdateWithoutAssignedIssuesInput>
   >;
   UserUpdateWithoutLedProjectsInput: ResolverTypeWrapper<
      Partial<UserUpdateWithoutLedProjectsInput>
   >;
   UserUpdateWithoutTeamsInput: ResolverTypeWrapper<Partial<UserUpdateWithoutTeamsInput>>;
   UserUpsertWithoutAssignedIssuesInput: ResolverTypeWrapper<
      Partial<UserUpsertWithoutAssignedIssuesInput>
   >;
   UserUpsertWithoutLedProjectsInput: ResolverTypeWrapper<
      Partial<UserUpsertWithoutLedProjectsInput>
   >;
   UserUpsertWithoutTeamsInput: ResolverTypeWrapper<Partial<UserUpsertWithoutTeamsInput>>;
   UserWhereInput: ResolverTypeWrapper<Partial<UserWhereInput>>;
   UserWhereUniqueInput: ResolverTypeWrapper<Partial<UserWhereUniqueInput>>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
   AffectedRowsOutput: Partial<AffectedRowsOutput>;
   AggregateCycle: Partial<AggregateCycle>;
   AggregateIssue: Partial<AggregateIssue>;
   AggregateIssueLabel: Partial<AggregateIssueLabel>;
   AggregateIssuePriority: Partial<AggregateIssuePriority>;
   AggregateIssueStatus: Partial<AggregateIssueStatus>;
   AggregateLabel: Partial<AggregateLabel>;
   AggregateProject: Partial<AggregateProject>;
   AggregateSubtask: Partial<AggregateSubtask>;
   AggregateSyncConflict: Partial<AggregateSyncConflict>;
   AggregateSyncOperation: Partial<AggregateSyncOperation>;
   AggregateTask: Partial<AggregateTask>;
   AggregateTaskDependency: Partial<AggregateTaskDependency>;
   AggregateTaskMasterMetadata: Partial<AggregateTaskMasterMetadata>;
   AggregateTeam: Partial<AggregateTeam>;
   AggregateTeamMember: Partial<AggregateTeamMember>;
   AggregateTeamProject: Partial<AggregateTeamProject>;
   AggregateUser: Partial<AggregateUser>;
   BoolFieldUpdateOperationsInput: Partial<BoolFieldUpdateOperationsInput>;
   BoolFilter: Partial<BoolFilter>;
   BoolWithAggregatesFilter: Partial<BoolWithAggregatesFilter>;
   Boolean: Partial<Scalars['Boolean']['output']>;
   CreateManyAndReturnCycle: Partial<CreateManyAndReturnCycle>;
   CreateManyAndReturnIssue: Partial<CreateManyAndReturnIssue>;
   CreateManyAndReturnIssueLabel: Partial<CreateManyAndReturnIssueLabel>;
   CreateManyAndReturnIssuePriority: Partial<CreateManyAndReturnIssuePriority>;
   CreateManyAndReturnIssueStatus: Partial<CreateManyAndReturnIssueStatus>;
   CreateManyAndReturnLabel: Partial<CreateManyAndReturnLabel>;
   CreateManyAndReturnProject: Partial<CreateManyAndReturnProject>;
   CreateManyAndReturnSubtask: Partial<CreateManyAndReturnSubtask>;
   CreateManyAndReturnSyncConflict: Partial<CreateManyAndReturnSyncConflict>;
   CreateManyAndReturnSyncOperation: Partial<CreateManyAndReturnSyncOperation>;
   CreateManyAndReturnTask: Partial<CreateManyAndReturnTask>;
   CreateManyAndReturnTaskDependency: Partial<CreateManyAndReturnTaskDependency>;
   CreateManyAndReturnTaskMasterMetadata: Partial<CreateManyAndReturnTaskMasterMetadata>;
   CreateManyAndReturnTeam: Partial<CreateManyAndReturnTeam>;
   CreateManyAndReturnTeamMember: Partial<CreateManyAndReturnTeamMember>;
   CreateManyAndReturnTeamProject: Partial<CreateManyAndReturnTeamProject>;
   CreateManyAndReturnUser: Partial<CreateManyAndReturnUser>;
   Cycle: Partial<Cycle>;
   CycleAvgAggregate: Partial<CycleAvgAggregate>;
   CycleAvgOrderByAggregateInput: Partial<CycleAvgOrderByAggregateInput>;
   CycleCount: Partial<CycleCount>;
   CycleCountAggregate: Partial<CycleCountAggregate>;
   CycleCountOrderByAggregateInput: Partial<CycleCountOrderByAggregateInput>;
   CycleCreateInput: Partial<CycleCreateInput>;
   CycleCreateManyInput: Partial<CycleCreateManyInput>;
   CycleCreateManyTeamInput: Partial<CycleCreateManyTeamInput>;
   CycleCreateManyTeamInputEnvelope: Partial<CycleCreateManyTeamInputEnvelope>;
   CycleCreateNestedManyWithoutTeamInput: Partial<CycleCreateNestedManyWithoutTeamInput>;
   CycleCreateNestedOneWithoutIssuesInput: Partial<CycleCreateNestedOneWithoutIssuesInput>;
   CycleCreateOrConnectWithoutIssuesInput: Partial<CycleCreateOrConnectWithoutIssuesInput>;
   CycleCreateOrConnectWithoutTeamInput: Partial<CycleCreateOrConnectWithoutTeamInput>;
   CycleCreateWithoutIssuesInput: Partial<CycleCreateWithoutIssuesInput>;
   CycleCreateWithoutTeamInput: Partial<CycleCreateWithoutTeamInput>;
   CycleGroupBy: Partial<CycleGroupBy>;
   CycleListRelationFilter: Partial<CycleListRelationFilter>;
   CycleMaxAggregate: Partial<CycleMaxAggregate>;
   CycleMaxOrderByAggregateInput: Partial<CycleMaxOrderByAggregateInput>;
   CycleMinAggregate: Partial<CycleMinAggregate>;
   CycleMinOrderByAggregateInput: Partial<CycleMinOrderByAggregateInput>;
   CycleNullableRelationFilter: Partial<CycleNullableRelationFilter>;
   CycleOrderByRelationAggregateInput: Partial<CycleOrderByRelationAggregateInput>;
   CycleOrderByWithAggregationInput: Partial<CycleOrderByWithAggregationInput>;
   CycleOrderByWithRelationInput: Partial<CycleOrderByWithRelationInput>;
   CycleScalarWhereInput: Partial<CycleScalarWhereInput>;
   CycleScalarWhereWithAggregatesInput: Partial<CycleScalarWhereWithAggregatesInput>;
   CycleSumAggregate: Partial<CycleSumAggregate>;
   CycleSumOrderByAggregateInput: Partial<CycleSumOrderByAggregateInput>;
   CycleUpdateInput: Partial<CycleUpdateInput>;
   CycleUpdateManyMutationInput: Partial<CycleUpdateManyMutationInput>;
   CycleUpdateManyWithWhereWithoutTeamInput: Partial<CycleUpdateManyWithWhereWithoutTeamInput>;
   CycleUpdateManyWithoutTeamNestedInput: Partial<CycleUpdateManyWithoutTeamNestedInput>;
   CycleUpdateOneWithoutIssuesNestedInput: Partial<CycleUpdateOneWithoutIssuesNestedInput>;
   CycleUpdateToOneWithWhereWithoutIssuesInput: Partial<CycleUpdateToOneWithWhereWithoutIssuesInput>;
   CycleUpdateWithWhereUniqueWithoutTeamInput: Partial<CycleUpdateWithWhereUniqueWithoutTeamInput>;
   CycleUpdateWithoutIssuesInput: Partial<CycleUpdateWithoutIssuesInput>;
   CycleUpdateWithoutTeamInput: Partial<CycleUpdateWithoutTeamInput>;
   CycleUpsertWithWhereUniqueWithoutTeamInput: Partial<CycleUpsertWithWhereUniqueWithoutTeamInput>;
   CycleUpsertWithoutIssuesInput: Partial<CycleUpsertWithoutIssuesInput>;
   CycleWhereInput: Partial<CycleWhereInput>;
   CycleWhereUniqueInput: Partial<CycleWhereUniqueInput>;
   DateTime: Partial<Scalars['DateTime']['output']>;
   DateTimeFieldUpdateOperationsInput: Partial<DateTimeFieldUpdateOperationsInput>;
   DateTimeFilter: Partial<DateTimeFilter>;
   DateTimeNullableFilter: Partial<DateTimeNullableFilter>;
   DateTimeNullableWithAggregatesFilter: Partial<DateTimeNullableWithAggregatesFilter>;
   DateTimeWithAggregatesFilter: Partial<DateTimeWithAggregatesFilter>;
   Float: Partial<Scalars['Float']['output']>;
   Int: Partial<Scalars['Int']['output']>;
   IntFieldUpdateOperationsInput: Partial<IntFieldUpdateOperationsInput>;
   IntFilter: Partial<IntFilter>;
   IntNullableFilter: Partial<IntNullableFilter>;
   IntNullableWithAggregatesFilter: Partial<IntNullableWithAggregatesFilter>;
   IntWithAggregatesFilter: Partial<IntWithAggregatesFilter>;
   Issue: Partial<Issue>;
   IssueAvgAggregate: Partial<IssueAvgAggregate>;
   IssueAvgOrderByAggregateInput: Partial<IssueAvgOrderByAggregateInput>;
   IssueCount: Partial<IssueCount>;
   IssueCountAggregate: Partial<IssueCountAggregate>;
   IssueCountOrderByAggregateInput: Partial<IssueCountOrderByAggregateInput>;
   IssueCreateInput: Partial<IssueCreateInput>;
   IssueCreateManyAssigneeInput: Partial<IssueCreateManyAssigneeInput>;
   IssueCreateManyAssigneeInputEnvelope: Partial<IssueCreateManyAssigneeInputEnvelope>;
   IssueCreateManyCycleInput: Partial<IssueCreateManyCycleInput>;
   IssueCreateManyCycleInputEnvelope: Partial<IssueCreateManyCycleInputEnvelope>;
   IssueCreateManyInput: Partial<IssueCreateManyInput>;
   IssueCreateManyIssuePriorityInput: Partial<IssueCreateManyIssuePriorityInput>;
   IssueCreateManyIssuePriorityInputEnvelope: Partial<IssueCreateManyIssuePriorityInputEnvelope>;
   IssueCreateManyIssueStatusInput: Partial<IssueCreateManyIssueStatusInput>;
   IssueCreateManyIssueStatusInputEnvelope: Partial<IssueCreateManyIssueStatusInputEnvelope>;
   IssueCreateManyParentIssueInput: Partial<IssueCreateManyParentIssueInput>;
   IssueCreateManyParentIssueInputEnvelope: Partial<IssueCreateManyParentIssueInputEnvelope>;
   IssueCreateManyProjectInput: Partial<IssueCreateManyProjectInput>;
   IssueCreateManyProjectInputEnvelope: Partial<IssueCreateManyProjectInputEnvelope>;
   IssueCreateManySubtaskInput: Partial<IssueCreateManySubtaskInput>;
   IssueCreateManySubtaskInputEnvelope: Partial<IssueCreateManySubtaskInputEnvelope>;
   IssueCreateManyTaskInput: Partial<IssueCreateManyTaskInput>;
   IssueCreateManyTaskInputEnvelope: Partial<IssueCreateManyTaskInputEnvelope>;
   IssueCreateNestedManyWithoutAssigneeInput: Partial<IssueCreateNestedManyWithoutAssigneeInput>;
   IssueCreateNestedManyWithoutCycleInput: Partial<IssueCreateNestedManyWithoutCycleInput>;
   IssueCreateNestedManyWithoutIssuePriorityInput: Partial<IssueCreateNestedManyWithoutIssuePriorityInput>;
   IssueCreateNestedManyWithoutIssueStatusInput: Partial<IssueCreateNestedManyWithoutIssueStatusInput>;
   IssueCreateNestedManyWithoutParentIssueInput: Partial<IssueCreateNestedManyWithoutParentIssueInput>;
   IssueCreateNestedManyWithoutProjectInput: Partial<IssueCreateNestedManyWithoutProjectInput>;
   IssueCreateNestedManyWithoutSubtaskInput: Partial<IssueCreateNestedManyWithoutSubtaskInput>;
   IssueCreateNestedManyWithoutTaskInput: Partial<IssueCreateNestedManyWithoutTaskInput>;
   IssueCreateNestedOneWithoutLabelsInput: Partial<IssueCreateNestedOneWithoutLabelsInput>;
   IssueCreateNestedOneWithoutSubIssuesInput: Partial<IssueCreateNestedOneWithoutSubIssuesInput>;
   IssueCreateOrConnectWithoutAssigneeInput: Partial<IssueCreateOrConnectWithoutAssigneeInput>;
   IssueCreateOrConnectWithoutCycleInput: Partial<IssueCreateOrConnectWithoutCycleInput>;
   IssueCreateOrConnectWithoutIssuePriorityInput: Partial<IssueCreateOrConnectWithoutIssuePriorityInput>;
   IssueCreateOrConnectWithoutIssueStatusInput: Partial<IssueCreateOrConnectWithoutIssueStatusInput>;
   IssueCreateOrConnectWithoutLabelsInput: Partial<IssueCreateOrConnectWithoutLabelsInput>;
   IssueCreateOrConnectWithoutParentIssueInput: Partial<IssueCreateOrConnectWithoutParentIssueInput>;
   IssueCreateOrConnectWithoutProjectInput: Partial<IssueCreateOrConnectWithoutProjectInput>;
   IssueCreateOrConnectWithoutSubIssuesInput: Partial<IssueCreateOrConnectWithoutSubIssuesInput>;
   IssueCreateOrConnectWithoutSubtaskInput: Partial<IssueCreateOrConnectWithoutSubtaskInput>;
   IssueCreateOrConnectWithoutTaskInput: Partial<IssueCreateOrConnectWithoutTaskInput>;
   IssueCreateWithoutAssigneeInput: Partial<IssueCreateWithoutAssigneeInput>;
   IssueCreateWithoutCycleInput: Partial<IssueCreateWithoutCycleInput>;
   IssueCreateWithoutIssuePriorityInput: Partial<IssueCreateWithoutIssuePriorityInput>;
   IssueCreateWithoutIssueStatusInput: Partial<IssueCreateWithoutIssueStatusInput>;
   IssueCreateWithoutLabelsInput: Partial<IssueCreateWithoutLabelsInput>;
   IssueCreateWithoutParentIssueInput: Partial<IssueCreateWithoutParentIssueInput>;
   IssueCreateWithoutProjectInput: Partial<IssueCreateWithoutProjectInput>;
   IssueCreateWithoutSubIssuesInput: Partial<IssueCreateWithoutSubIssuesInput>;
   IssueCreateWithoutSubtaskInput: Partial<IssueCreateWithoutSubtaskInput>;
   IssueCreateWithoutTaskInput: Partial<IssueCreateWithoutTaskInput>;
   IssueGroupBy: Partial<IssueGroupBy>;
   IssueLabel: Partial<IssueLabel>;
   IssueLabelCountAggregate: Partial<IssueLabelCountAggregate>;
   IssueLabelCountOrderByAggregateInput: Partial<IssueLabelCountOrderByAggregateInput>;
   IssueLabelCreateInput: Partial<IssueLabelCreateInput>;
   IssueLabelCreateManyInput: Partial<IssueLabelCreateManyInput>;
   IssueLabelCreateManyIssueInput: Partial<IssueLabelCreateManyIssueInput>;
   IssueLabelCreateManyIssueInputEnvelope: Partial<IssueLabelCreateManyIssueInputEnvelope>;
   IssueLabelCreateManyLabelInput: Partial<IssueLabelCreateManyLabelInput>;
   IssueLabelCreateManyLabelInputEnvelope: Partial<IssueLabelCreateManyLabelInputEnvelope>;
   IssueLabelCreateNestedManyWithoutIssueInput: Partial<IssueLabelCreateNestedManyWithoutIssueInput>;
   IssueLabelCreateNestedManyWithoutLabelInput: Partial<IssueLabelCreateNestedManyWithoutLabelInput>;
   IssueLabelCreateOrConnectWithoutIssueInput: Partial<IssueLabelCreateOrConnectWithoutIssueInput>;
   IssueLabelCreateOrConnectWithoutLabelInput: Partial<IssueLabelCreateOrConnectWithoutLabelInput>;
   IssueLabelCreateWithoutIssueInput: Partial<IssueLabelCreateWithoutIssueInput>;
   IssueLabelCreateWithoutLabelInput: Partial<IssueLabelCreateWithoutLabelInput>;
   IssueLabelGroupBy: Partial<IssueLabelGroupBy>;
   IssueLabelIssueIdLabelIdCompoundUniqueInput: Partial<IssueLabelIssueIdLabelIdCompoundUniqueInput>;
   IssueLabelListRelationFilter: Partial<IssueLabelListRelationFilter>;
   IssueLabelMaxAggregate: Partial<IssueLabelMaxAggregate>;
   IssueLabelMaxOrderByAggregateInput: Partial<IssueLabelMaxOrderByAggregateInput>;
   IssueLabelMinAggregate: Partial<IssueLabelMinAggregate>;
   IssueLabelMinOrderByAggregateInput: Partial<IssueLabelMinOrderByAggregateInput>;
   IssueLabelOrderByRelationAggregateInput: Partial<IssueLabelOrderByRelationAggregateInput>;
   IssueLabelOrderByWithAggregationInput: Partial<IssueLabelOrderByWithAggregationInput>;
   IssueLabelOrderByWithRelationInput: Partial<IssueLabelOrderByWithRelationInput>;
   IssueLabelScalarWhereInput: Partial<IssueLabelScalarWhereInput>;
   IssueLabelScalarWhereWithAggregatesInput: Partial<IssueLabelScalarWhereWithAggregatesInput>;
   IssueLabelUpdateInput: Partial<IssueLabelUpdateInput>;
   IssueLabelUpdateManyMutationInput: Partial<IssueLabelUpdateManyMutationInput>;
   IssueLabelUpdateManyWithWhereWithoutIssueInput: Partial<IssueLabelUpdateManyWithWhereWithoutIssueInput>;
   IssueLabelUpdateManyWithWhereWithoutLabelInput: Partial<IssueLabelUpdateManyWithWhereWithoutLabelInput>;
   IssueLabelUpdateManyWithoutIssueNestedInput: Partial<IssueLabelUpdateManyWithoutIssueNestedInput>;
   IssueLabelUpdateManyWithoutLabelNestedInput: Partial<IssueLabelUpdateManyWithoutLabelNestedInput>;
   IssueLabelUpdateWithWhereUniqueWithoutIssueInput: Partial<IssueLabelUpdateWithWhereUniqueWithoutIssueInput>;
   IssueLabelUpdateWithWhereUniqueWithoutLabelInput: Partial<IssueLabelUpdateWithWhereUniqueWithoutLabelInput>;
   IssueLabelUpdateWithoutIssueInput: Partial<IssueLabelUpdateWithoutIssueInput>;
   IssueLabelUpdateWithoutLabelInput: Partial<IssueLabelUpdateWithoutLabelInput>;
   IssueLabelUpsertWithWhereUniqueWithoutIssueInput: Partial<IssueLabelUpsertWithWhereUniqueWithoutIssueInput>;
   IssueLabelUpsertWithWhereUniqueWithoutLabelInput: Partial<IssueLabelUpsertWithWhereUniqueWithoutLabelInput>;
   IssueLabelWhereInput: Partial<IssueLabelWhereInput>;
   IssueLabelWhereUniqueInput: Partial<IssueLabelWhereUniqueInput>;
   IssueListRelationFilter: Partial<IssueListRelationFilter>;
   IssueMaxAggregate: Partial<IssueMaxAggregate>;
   IssueMaxOrderByAggregateInput: Partial<IssueMaxOrderByAggregateInput>;
   IssueMinAggregate: Partial<IssueMinAggregate>;
   IssueMinOrderByAggregateInput: Partial<IssueMinOrderByAggregateInput>;
   IssueNullableRelationFilter: Partial<IssueNullableRelationFilter>;
   IssueOrderByRelationAggregateInput: Partial<IssueOrderByRelationAggregateInput>;
   IssueOrderByWithAggregationInput: Partial<IssueOrderByWithAggregationInput>;
   IssueOrderByWithRelationInput: Partial<IssueOrderByWithRelationInput>;
   IssuePriority: Partial<IssuePriority>;
   IssuePriorityAvgAggregate: Partial<IssuePriorityAvgAggregate>;
   IssuePriorityAvgOrderByAggregateInput: Partial<IssuePriorityAvgOrderByAggregateInput>;
   IssuePriorityCount: Partial<IssuePriorityCount>;
   IssuePriorityCountAggregate: Partial<IssuePriorityCountAggregate>;
   IssuePriorityCountOrderByAggregateInput: Partial<IssuePriorityCountOrderByAggregateInput>;
   IssuePriorityCreateInput: Partial<IssuePriorityCreateInput>;
   IssuePriorityCreateManyInput: Partial<IssuePriorityCreateManyInput>;
   IssuePriorityCreateNestedOneWithoutIssuesInput: Partial<IssuePriorityCreateNestedOneWithoutIssuesInput>;
   IssuePriorityCreateOrConnectWithoutIssuesInput: Partial<IssuePriorityCreateOrConnectWithoutIssuesInput>;
   IssuePriorityCreateWithoutIssuesInput: Partial<IssuePriorityCreateWithoutIssuesInput>;
   IssuePriorityGroupBy: Partial<IssuePriorityGroupBy>;
   IssuePriorityMaxAggregate: Partial<IssuePriorityMaxAggregate>;
   IssuePriorityMaxOrderByAggregateInput: Partial<IssuePriorityMaxOrderByAggregateInput>;
   IssuePriorityMinAggregate: Partial<IssuePriorityMinAggregate>;
   IssuePriorityMinOrderByAggregateInput: Partial<IssuePriorityMinOrderByAggregateInput>;
   IssuePriorityNullableRelationFilter: Partial<IssuePriorityNullableRelationFilter>;
   IssuePriorityOrderByWithAggregationInput: Partial<IssuePriorityOrderByWithAggregationInput>;
   IssuePriorityOrderByWithRelationInput: Partial<IssuePriorityOrderByWithRelationInput>;
   IssuePriorityScalarWhereWithAggregatesInput: Partial<IssuePriorityScalarWhereWithAggregatesInput>;
   IssuePrioritySumAggregate: Partial<IssuePrioritySumAggregate>;
   IssuePrioritySumOrderByAggregateInput: Partial<IssuePrioritySumOrderByAggregateInput>;
   IssuePriorityUpdateInput: Partial<IssuePriorityUpdateInput>;
   IssuePriorityUpdateManyMutationInput: Partial<IssuePriorityUpdateManyMutationInput>;
   IssuePriorityUpdateOneWithoutIssuesNestedInput: Partial<IssuePriorityUpdateOneWithoutIssuesNestedInput>;
   IssuePriorityUpdateToOneWithWhereWithoutIssuesInput: Partial<IssuePriorityUpdateToOneWithWhereWithoutIssuesInput>;
   IssuePriorityUpdateWithoutIssuesInput: Partial<IssuePriorityUpdateWithoutIssuesInput>;
   IssuePriorityUpsertWithoutIssuesInput: Partial<IssuePriorityUpsertWithoutIssuesInput>;
   IssuePriorityWhereInput: Partial<IssuePriorityWhereInput>;
   IssuePriorityWhereUniqueInput: Partial<IssuePriorityWhereUniqueInput>;
   IssueRelationFilter: Partial<IssueRelationFilter>;
   IssueScalarWhereInput: Partial<IssueScalarWhereInput>;
   IssueScalarWhereWithAggregatesInput: Partial<IssueScalarWhereWithAggregatesInput>;
   IssueStats: Partial<IssueStats>;
   IssueStatus: Partial<IssueStatus>;
   IssueStatusCount: Partial<IssueStatusCount>;
   IssueStatusCountAggregate: Partial<IssueStatusCountAggregate>;
   IssueStatusCountOrderByAggregateInput: Partial<IssueStatusCountOrderByAggregateInput>;
   IssueStatusCreateInput: Partial<IssueStatusCreateInput>;
   IssueStatusCreateManyInput: Partial<IssueStatusCreateManyInput>;
   IssueStatusCreateNestedOneWithoutIssuesInput: Partial<IssueStatusCreateNestedOneWithoutIssuesInput>;
   IssueStatusCreateOrConnectWithoutIssuesInput: Partial<IssueStatusCreateOrConnectWithoutIssuesInput>;
   IssueStatusCreateWithoutIssuesInput: Partial<IssueStatusCreateWithoutIssuesInput>;
   IssueStatusGroupBy: Partial<IssueStatusGroupBy>;
   IssueStatusMaxAggregate: Partial<IssueStatusMaxAggregate>;
   IssueStatusMaxOrderByAggregateInput: Partial<IssueStatusMaxOrderByAggregateInput>;
   IssueStatusMinAggregate: Partial<IssueStatusMinAggregate>;
   IssueStatusMinOrderByAggregateInput: Partial<IssueStatusMinOrderByAggregateInput>;
   IssueStatusNullableRelationFilter: Partial<IssueStatusNullableRelationFilter>;
   IssueStatusOrderByWithAggregationInput: Partial<IssueStatusOrderByWithAggregationInput>;
   IssueStatusOrderByWithRelationInput: Partial<IssueStatusOrderByWithRelationInput>;
   IssueStatusScalarWhereWithAggregatesInput: Partial<IssueStatusScalarWhereWithAggregatesInput>;
   IssueStatusUpdateInput: Partial<IssueStatusUpdateInput>;
   IssueStatusUpdateManyMutationInput: Partial<IssueStatusUpdateManyMutationInput>;
   IssueStatusUpdateOneWithoutIssuesNestedInput: Partial<IssueStatusUpdateOneWithoutIssuesNestedInput>;
   IssueStatusUpdateToOneWithWhereWithoutIssuesInput: Partial<IssueStatusUpdateToOneWithWhereWithoutIssuesInput>;
   IssueStatusUpdateWithoutIssuesInput: Partial<IssueStatusUpdateWithoutIssuesInput>;
   IssueStatusUpsertWithoutIssuesInput: Partial<IssueStatusUpsertWithoutIssuesInput>;
   IssueStatusWhereInput: Partial<IssueStatusWhereInput>;
   IssueStatusWhereUniqueInput: Partial<IssueStatusWhereUniqueInput>;
   IssueSumAggregate: Partial<IssueSumAggregate>;
   IssueSumOrderByAggregateInput: Partial<IssueSumOrderByAggregateInput>;
   IssueUpdateInput: Partial<IssueUpdateInput>;
   IssueUpdateManyMutationInput: Partial<IssueUpdateManyMutationInput>;
   IssueUpdateManyWithWhereWithoutAssigneeInput: Partial<IssueUpdateManyWithWhereWithoutAssigneeInput>;
   IssueUpdateManyWithWhereWithoutCycleInput: Partial<IssueUpdateManyWithWhereWithoutCycleInput>;
   IssueUpdateManyWithWhereWithoutIssuePriorityInput: Partial<IssueUpdateManyWithWhereWithoutIssuePriorityInput>;
   IssueUpdateManyWithWhereWithoutIssueStatusInput: Partial<IssueUpdateManyWithWhereWithoutIssueStatusInput>;
   IssueUpdateManyWithWhereWithoutParentIssueInput: Partial<IssueUpdateManyWithWhereWithoutParentIssueInput>;
   IssueUpdateManyWithWhereWithoutProjectInput: Partial<IssueUpdateManyWithWhereWithoutProjectInput>;
   IssueUpdateManyWithWhereWithoutSubtaskInput: Partial<IssueUpdateManyWithWhereWithoutSubtaskInput>;
   IssueUpdateManyWithWhereWithoutTaskInput: Partial<IssueUpdateManyWithWhereWithoutTaskInput>;
   IssueUpdateManyWithoutAssigneeNestedInput: Partial<IssueUpdateManyWithoutAssigneeNestedInput>;
   IssueUpdateManyWithoutCycleNestedInput: Partial<IssueUpdateManyWithoutCycleNestedInput>;
   IssueUpdateManyWithoutIssuePriorityNestedInput: Partial<IssueUpdateManyWithoutIssuePriorityNestedInput>;
   IssueUpdateManyWithoutIssueStatusNestedInput: Partial<IssueUpdateManyWithoutIssueStatusNestedInput>;
   IssueUpdateManyWithoutParentIssueNestedInput: Partial<IssueUpdateManyWithoutParentIssueNestedInput>;
   IssueUpdateManyWithoutProjectNestedInput: Partial<IssueUpdateManyWithoutProjectNestedInput>;
   IssueUpdateManyWithoutSubtaskNestedInput: Partial<IssueUpdateManyWithoutSubtaskNestedInput>;
   IssueUpdateManyWithoutTaskNestedInput: Partial<IssueUpdateManyWithoutTaskNestedInput>;
   IssueUpdateOneRequiredWithoutLabelsNestedInput: Partial<IssueUpdateOneRequiredWithoutLabelsNestedInput>;
   IssueUpdateOneWithoutSubIssuesNestedInput: Partial<IssueUpdateOneWithoutSubIssuesNestedInput>;
   IssueUpdateToOneWithWhereWithoutLabelsInput: Partial<IssueUpdateToOneWithWhereWithoutLabelsInput>;
   IssueUpdateToOneWithWhereWithoutSubIssuesInput: Partial<IssueUpdateToOneWithWhereWithoutSubIssuesInput>;
   IssueUpdateWithWhereUniqueWithoutAssigneeInput: Partial<IssueUpdateWithWhereUniqueWithoutAssigneeInput>;
   IssueUpdateWithWhereUniqueWithoutCycleInput: Partial<IssueUpdateWithWhereUniqueWithoutCycleInput>;
   IssueUpdateWithWhereUniqueWithoutIssuePriorityInput: Partial<IssueUpdateWithWhereUniqueWithoutIssuePriorityInput>;
   IssueUpdateWithWhereUniqueWithoutIssueStatusInput: Partial<IssueUpdateWithWhereUniqueWithoutIssueStatusInput>;
   IssueUpdateWithWhereUniqueWithoutParentIssueInput: Partial<IssueUpdateWithWhereUniqueWithoutParentIssueInput>;
   IssueUpdateWithWhereUniqueWithoutProjectInput: Partial<IssueUpdateWithWhereUniqueWithoutProjectInput>;
   IssueUpdateWithWhereUniqueWithoutSubtaskInput: Partial<IssueUpdateWithWhereUniqueWithoutSubtaskInput>;
   IssueUpdateWithWhereUniqueWithoutTaskInput: Partial<IssueUpdateWithWhereUniqueWithoutTaskInput>;
   IssueUpdateWithoutAssigneeInput: Partial<IssueUpdateWithoutAssigneeInput>;
   IssueUpdateWithoutCycleInput: Partial<IssueUpdateWithoutCycleInput>;
   IssueUpdateWithoutIssuePriorityInput: Partial<IssueUpdateWithoutIssuePriorityInput>;
   IssueUpdateWithoutIssueStatusInput: Partial<IssueUpdateWithoutIssueStatusInput>;
   IssueUpdateWithoutLabelsInput: Partial<IssueUpdateWithoutLabelsInput>;
   IssueUpdateWithoutParentIssueInput: Partial<IssueUpdateWithoutParentIssueInput>;
   IssueUpdateWithoutProjectInput: Partial<IssueUpdateWithoutProjectInput>;
   IssueUpdateWithoutSubIssuesInput: Partial<IssueUpdateWithoutSubIssuesInput>;
   IssueUpdateWithoutSubtaskInput: Partial<IssueUpdateWithoutSubtaskInput>;
   IssueUpdateWithoutTaskInput: Partial<IssueUpdateWithoutTaskInput>;
   IssueUpsertWithWhereUniqueWithoutAssigneeInput: Partial<IssueUpsertWithWhereUniqueWithoutAssigneeInput>;
   IssueUpsertWithWhereUniqueWithoutCycleInput: Partial<IssueUpsertWithWhereUniqueWithoutCycleInput>;
   IssueUpsertWithWhereUniqueWithoutIssuePriorityInput: Partial<IssueUpsertWithWhereUniqueWithoutIssuePriorityInput>;
   IssueUpsertWithWhereUniqueWithoutIssueStatusInput: Partial<IssueUpsertWithWhereUniqueWithoutIssueStatusInput>;
   IssueUpsertWithWhereUniqueWithoutParentIssueInput: Partial<IssueUpsertWithWhereUniqueWithoutParentIssueInput>;
   IssueUpsertWithWhereUniqueWithoutProjectInput: Partial<IssueUpsertWithWhereUniqueWithoutProjectInput>;
   IssueUpsertWithWhereUniqueWithoutSubtaskInput: Partial<IssueUpsertWithWhereUniqueWithoutSubtaskInput>;
   IssueUpsertWithWhereUniqueWithoutTaskInput: Partial<IssueUpsertWithWhereUniqueWithoutTaskInput>;
   IssueUpsertWithoutLabelsInput: Partial<IssueUpsertWithoutLabelsInput>;
   IssueUpsertWithoutSubIssuesInput: Partial<IssueUpsertWithoutSubIssuesInput>;
   IssueWhereInput: Partial<IssueWhereInput>;
   IssueWhereUniqueInput: Partial<IssueWhereUniqueInput>;
   Label: Partial<Label>;
   LabelCount: Partial<LabelCount>;
   LabelCountAggregate: Partial<LabelCountAggregate>;
   LabelCountOrderByAggregateInput: Partial<LabelCountOrderByAggregateInput>;
   LabelCreateInput: Partial<LabelCreateInput>;
   LabelCreateManyInput: Partial<LabelCreateManyInput>;
   LabelCreateNestedOneWithoutIssuesInput: Partial<LabelCreateNestedOneWithoutIssuesInput>;
   LabelCreateOrConnectWithoutIssuesInput: Partial<LabelCreateOrConnectWithoutIssuesInput>;
   LabelCreateWithoutIssuesInput: Partial<LabelCreateWithoutIssuesInput>;
   LabelGroupBy: Partial<LabelGroupBy>;
   LabelMaxAggregate: Partial<LabelMaxAggregate>;
   LabelMaxOrderByAggregateInput: Partial<LabelMaxOrderByAggregateInput>;
   LabelMinAggregate: Partial<LabelMinAggregate>;
   LabelMinOrderByAggregateInput: Partial<LabelMinOrderByAggregateInput>;
   LabelOrderByWithAggregationInput: Partial<LabelOrderByWithAggregationInput>;
   LabelOrderByWithRelationInput: Partial<LabelOrderByWithRelationInput>;
   LabelRelationFilter: Partial<LabelRelationFilter>;
   LabelScalarWhereWithAggregatesInput: Partial<LabelScalarWhereWithAggregatesInput>;
   LabelUpdateInput: Partial<LabelUpdateInput>;
   LabelUpdateManyMutationInput: Partial<LabelUpdateManyMutationInput>;
   LabelUpdateOneRequiredWithoutIssuesNestedInput: Partial<LabelUpdateOneRequiredWithoutIssuesNestedInput>;
   LabelUpdateToOneWithWhereWithoutIssuesInput: Partial<LabelUpdateToOneWithWhereWithoutIssuesInput>;
   LabelUpdateWithoutIssuesInput: Partial<LabelUpdateWithoutIssuesInput>;
   LabelUpsertWithoutIssuesInput: Partial<LabelUpsertWithoutIssuesInput>;
   LabelWhereInput: Partial<LabelWhereInput>;
   LabelWhereUniqueInput: Partial<LabelWhereUniqueInput>;
   Mutation: {};
   NestedBoolFilter: Partial<NestedBoolFilter>;
   NestedBoolWithAggregatesFilter: Partial<NestedBoolWithAggregatesFilter>;
   NestedDateTimeFilter: Partial<NestedDateTimeFilter>;
   NestedDateTimeNullableFilter: Partial<NestedDateTimeNullableFilter>;
   NestedDateTimeNullableWithAggregatesFilter: Partial<NestedDateTimeNullableWithAggregatesFilter>;
   NestedDateTimeWithAggregatesFilter: Partial<NestedDateTimeWithAggregatesFilter>;
   NestedFloatFilter: Partial<NestedFloatFilter>;
   NestedFloatNullableFilter: Partial<NestedFloatNullableFilter>;
   NestedIntFilter: Partial<NestedIntFilter>;
   NestedIntNullableFilter: Partial<NestedIntNullableFilter>;
   NestedIntNullableWithAggregatesFilter: Partial<NestedIntNullableWithAggregatesFilter>;
   NestedIntWithAggregatesFilter: Partial<NestedIntWithAggregatesFilter>;
   NestedStringFilter: Partial<NestedStringFilter>;
   NestedStringNullableFilter: Partial<NestedStringNullableFilter>;
   NestedStringNullableWithAggregatesFilter: Partial<NestedStringNullableWithAggregatesFilter>;
   NestedStringWithAggregatesFilter: Partial<NestedStringWithAggregatesFilter>;
   NullableDateTimeFieldUpdateOperationsInput: Partial<NullableDateTimeFieldUpdateOperationsInput>;
   NullableIntFieldUpdateOperationsInput: Partial<NullableIntFieldUpdateOperationsInput>;
   NullableStringFieldUpdateOperationsInput: Partial<NullableStringFieldUpdateOperationsInput>;
   Project: Partial<Project>;
   ProjectAvgAggregate: Partial<ProjectAvgAggregate>;
   ProjectAvgOrderByAggregateInput: Partial<ProjectAvgOrderByAggregateInput>;
   ProjectCount: Partial<ProjectCount>;
   ProjectCountAggregate: Partial<ProjectCountAggregate>;
   ProjectCountOrderByAggregateInput: Partial<ProjectCountOrderByAggregateInput>;
   ProjectCreateInput: Partial<ProjectCreateInput>;
   ProjectCreateManyInput: Partial<ProjectCreateManyInput>;
   ProjectCreateManyLeadInput: Partial<ProjectCreateManyLeadInput>;
   ProjectCreateManyLeadInputEnvelope: Partial<ProjectCreateManyLeadInputEnvelope>;
   ProjectCreateNestedManyWithoutLeadInput: Partial<ProjectCreateNestedManyWithoutLeadInput>;
   ProjectCreateNestedOneWithoutIssuesInput: Partial<ProjectCreateNestedOneWithoutIssuesInput>;
   ProjectCreateNestedOneWithoutTeamsInput: Partial<ProjectCreateNestedOneWithoutTeamsInput>;
   ProjectCreateOrConnectWithoutIssuesInput: Partial<ProjectCreateOrConnectWithoutIssuesInput>;
   ProjectCreateOrConnectWithoutLeadInput: Partial<ProjectCreateOrConnectWithoutLeadInput>;
   ProjectCreateOrConnectWithoutTeamsInput: Partial<ProjectCreateOrConnectWithoutTeamsInput>;
   ProjectCreateWithoutIssuesInput: Partial<ProjectCreateWithoutIssuesInput>;
   ProjectCreateWithoutLeadInput: Partial<ProjectCreateWithoutLeadInput>;
   ProjectCreateWithoutTeamsInput: Partial<ProjectCreateWithoutTeamsInput>;
   ProjectGroupBy: Partial<ProjectGroupBy>;
   ProjectListRelationFilter: Partial<ProjectListRelationFilter>;
   ProjectMaxAggregate: Partial<ProjectMaxAggregate>;
   ProjectMaxOrderByAggregateInput: Partial<ProjectMaxOrderByAggregateInput>;
   ProjectMinAggregate: Partial<ProjectMinAggregate>;
   ProjectMinOrderByAggregateInput: Partial<ProjectMinOrderByAggregateInput>;
   ProjectNullableRelationFilter: Partial<ProjectNullableRelationFilter>;
   ProjectOrderByRelationAggregateInput: Partial<ProjectOrderByRelationAggregateInput>;
   ProjectOrderByWithAggregationInput: Partial<ProjectOrderByWithAggregationInput>;
   ProjectOrderByWithRelationInput: Partial<ProjectOrderByWithRelationInput>;
   ProjectRelationFilter: Partial<ProjectRelationFilter>;
   ProjectScalarWhereInput: Partial<ProjectScalarWhereInput>;
   ProjectScalarWhereWithAggregatesInput: Partial<ProjectScalarWhereWithAggregatesInput>;
   ProjectSumAggregate: Partial<ProjectSumAggregate>;
   ProjectSumOrderByAggregateInput: Partial<ProjectSumOrderByAggregateInput>;
   ProjectUpdateInput: Partial<ProjectUpdateInput>;
   ProjectUpdateManyMutationInput: Partial<ProjectUpdateManyMutationInput>;
   ProjectUpdateManyWithWhereWithoutLeadInput: Partial<ProjectUpdateManyWithWhereWithoutLeadInput>;
   ProjectUpdateManyWithoutLeadNestedInput: Partial<ProjectUpdateManyWithoutLeadNestedInput>;
   ProjectUpdateOneRequiredWithoutTeamsNestedInput: Partial<ProjectUpdateOneRequiredWithoutTeamsNestedInput>;
   ProjectUpdateOneWithoutIssuesNestedInput: Partial<ProjectUpdateOneWithoutIssuesNestedInput>;
   ProjectUpdateToOneWithWhereWithoutIssuesInput: Partial<ProjectUpdateToOneWithWhereWithoutIssuesInput>;
   ProjectUpdateToOneWithWhereWithoutTeamsInput: Partial<ProjectUpdateToOneWithWhereWithoutTeamsInput>;
   ProjectUpdateWithWhereUniqueWithoutLeadInput: Partial<ProjectUpdateWithWhereUniqueWithoutLeadInput>;
   ProjectUpdateWithoutIssuesInput: Partial<ProjectUpdateWithoutIssuesInput>;
   ProjectUpdateWithoutLeadInput: Partial<ProjectUpdateWithoutLeadInput>;
   ProjectUpdateWithoutTeamsInput: Partial<ProjectUpdateWithoutTeamsInput>;
   ProjectUpsertWithWhereUniqueWithoutLeadInput: Partial<ProjectUpsertWithWhereUniqueWithoutLeadInput>;
   ProjectUpsertWithoutIssuesInput: Partial<ProjectUpsertWithoutIssuesInput>;
   ProjectUpsertWithoutTeamsInput: Partial<ProjectUpsertWithoutTeamsInput>;
   ProjectWhereInput: Partial<ProjectWhereInput>;
   ProjectWhereUniqueInput: Partial<ProjectWhereUniqueInput>;
   Query: {};
   SortOrderInput: Partial<SortOrderInput>;
   String: Partial<Scalars['String']['output']>;
   StringFieldUpdateOperationsInput: Partial<StringFieldUpdateOperationsInput>;
   StringFilter: Partial<StringFilter>;
   StringNullableFilter: Partial<StringNullableFilter>;
   StringNullableWithAggregatesFilter: Partial<StringNullableWithAggregatesFilter>;
   StringWithAggregatesFilter: Partial<StringWithAggregatesFilter>;
   Subtask: Partial<Subtask>;
   SubtaskAvgAggregate: Partial<SubtaskAvgAggregate>;
   SubtaskAvgOrderByAggregateInput: Partial<SubtaskAvgOrderByAggregateInput>;
   SubtaskCount: Partial<SubtaskCount>;
   SubtaskCountAggregate: Partial<SubtaskCountAggregate>;
   SubtaskCountOrderByAggregateInput: Partial<SubtaskCountOrderByAggregateInput>;
   SubtaskCreateInput: Partial<SubtaskCreateInput>;
   SubtaskCreateManyInput: Partial<SubtaskCreateManyInput>;
   SubtaskCreateManyParentTaskInput: Partial<SubtaskCreateManyParentTaskInput>;
   SubtaskCreateManyParentTaskInputEnvelope: Partial<SubtaskCreateManyParentTaskInputEnvelope>;
   SubtaskCreateNestedManyWithoutParentTaskInput: Partial<SubtaskCreateNestedManyWithoutParentTaskInput>;
   SubtaskCreateNestedOneWithoutIssuesInput: Partial<SubtaskCreateNestedOneWithoutIssuesInput>;
   SubtaskCreateOrConnectWithoutIssuesInput: Partial<SubtaskCreateOrConnectWithoutIssuesInput>;
   SubtaskCreateOrConnectWithoutParentTaskInput: Partial<SubtaskCreateOrConnectWithoutParentTaskInput>;
   SubtaskCreateWithoutIssuesInput: Partial<SubtaskCreateWithoutIssuesInput>;
   SubtaskCreateWithoutParentTaskInput: Partial<SubtaskCreateWithoutParentTaskInput>;
   SubtaskGroupBy: Partial<SubtaskGroupBy>;
   SubtaskListRelationFilter: Partial<SubtaskListRelationFilter>;
   SubtaskMaxAggregate: Partial<SubtaskMaxAggregate>;
   SubtaskMaxOrderByAggregateInput: Partial<SubtaskMaxOrderByAggregateInput>;
   SubtaskMinAggregate: Partial<SubtaskMinAggregate>;
   SubtaskMinOrderByAggregateInput: Partial<SubtaskMinOrderByAggregateInput>;
   SubtaskNullableRelationFilter: Partial<SubtaskNullableRelationFilter>;
   SubtaskOrderByRelationAggregateInput: Partial<SubtaskOrderByRelationAggregateInput>;
   SubtaskOrderByWithAggregationInput: Partial<SubtaskOrderByWithAggregationInput>;
   SubtaskOrderByWithRelationInput: Partial<SubtaskOrderByWithRelationInput>;
   SubtaskScalarWhereInput: Partial<SubtaskScalarWhereInput>;
   SubtaskScalarWhereWithAggregatesInput: Partial<SubtaskScalarWhereWithAggregatesInput>;
   SubtaskSumAggregate: Partial<SubtaskSumAggregate>;
   SubtaskSumOrderByAggregateInput: Partial<SubtaskSumOrderByAggregateInput>;
   SubtaskUpdateInput: Partial<SubtaskUpdateInput>;
   SubtaskUpdateManyMutationInput: Partial<SubtaskUpdateManyMutationInput>;
   SubtaskUpdateManyWithWhereWithoutParentTaskInput: Partial<SubtaskUpdateManyWithWhereWithoutParentTaskInput>;
   SubtaskUpdateManyWithoutParentTaskNestedInput: Partial<SubtaskUpdateManyWithoutParentTaskNestedInput>;
   SubtaskUpdateOneWithoutIssuesNestedInput: Partial<SubtaskUpdateOneWithoutIssuesNestedInput>;
   SubtaskUpdateToOneWithWhereWithoutIssuesInput: Partial<SubtaskUpdateToOneWithWhereWithoutIssuesInput>;
   SubtaskUpdateWithWhereUniqueWithoutParentTaskInput: Partial<SubtaskUpdateWithWhereUniqueWithoutParentTaskInput>;
   SubtaskUpdateWithoutIssuesInput: Partial<SubtaskUpdateWithoutIssuesInput>;
   SubtaskUpdateWithoutParentTaskInput: Partial<SubtaskUpdateWithoutParentTaskInput>;
   SubtaskUpsertWithWhereUniqueWithoutParentTaskInput: Partial<SubtaskUpsertWithWhereUniqueWithoutParentTaskInput>;
   SubtaskUpsertWithoutIssuesInput: Partial<SubtaskUpsertWithoutIssuesInput>;
   SubtaskWhereInput: Partial<SubtaskWhereInput>;
   SubtaskWhereUniqueInput: Partial<SubtaskWhereUniqueInput>;
   SyncConflict: Partial<SyncConflict>;
   SyncConflictCountAggregate: Partial<SyncConflictCountAggregate>;
   SyncConflictCountOrderByAggregateInput: Partial<SyncConflictCountOrderByAggregateInput>;
   SyncConflictCreateInput: Partial<SyncConflictCreateInput>;
   SyncConflictCreateManyInput: Partial<SyncConflictCreateManyInput>;
   SyncConflictGroupBy: Partial<SyncConflictGroupBy>;
   SyncConflictMaxAggregate: Partial<SyncConflictMaxAggregate>;
   SyncConflictMaxOrderByAggregateInput: Partial<SyncConflictMaxOrderByAggregateInput>;
   SyncConflictMinAggregate: Partial<SyncConflictMinAggregate>;
   SyncConflictMinOrderByAggregateInput: Partial<SyncConflictMinOrderByAggregateInput>;
   SyncConflictOrderByWithAggregationInput: Partial<SyncConflictOrderByWithAggregationInput>;
   SyncConflictOrderByWithRelationInput: Partial<SyncConflictOrderByWithRelationInput>;
   SyncConflictScalarWhereWithAggregatesInput: Partial<SyncConflictScalarWhereWithAggregatesInput>;
   SyncConflictUpdateInput: Partial<SyncConflictUpdateInput>;
   SyncConflictUpdateManyMutationInput: Partial<SyncConflictUpdateManyMutationInput>;
   SyncConflictWhereInput: Partial<SyncConflictWhereInput>;
   SyncConflictWhereUniqueInput: Partial<SyncConflictWhereUniqueInput>;
   SyncOperation: Partial<SyncOperation>;
   SyncOperationAvgAggregate: Partial<SyncOperationAvgAggregate>;
   SyncOperationAvgOrderByAggregateInput: Partial<SyncOperationAvgOrderByAggregateInput>;
   SyncOperationCountAggregate: Partial<SyncOperationCountAggregate>;
   SyncOperationCountOrderByAggregateInput: Partial<SyncOperationCountOrderByAggregateInput>;
   SyncOperationCreateInput: Partial<SyncOperationCreateInput>;
   SyncOperationCreateManyInput: Partial<SyncOperationCreateManyInput>;
   SyncOperationGroupBy: Partial<SyncOperationGroupBy>;
   SyncOperationMaxAggregate: Partial<SyncOperationMaxAggregate>;
   SyncOperationMaxOrderByAggregateInput: Partial<SyncOperationMaxOrderByAggregateInput>;
   SyncOperationMinAggregate: Partial<SyncOperationMinAggregate>;
   SyncOperationMinOrderByAggregateInput: Partial<SyncOperationMinOrderByAggregateInput>;
   SyncOperationOrderByWithAggregationInput: Partial<SyncOperationOrderByWithAggregationInput>;
   SyncOperationOrderByWithRelationInput: Partial<SyncOperationOrderByWithRelationInput>;
   SyncOperationScalarWhereWithAggregatesInput: Partial<SyncOperationScalarWhereWithAggregatesInput>;
   SyncOperationSumAggregate: Partial<SyncOperationSumAggregate>;
   SyncOperationSumOrderByAggregateInput: Partial<SyncOperationSumOrderByAggregateInput>;
   SyncOperationUpdateInput: Partial<SyncOperationUpdateInput>;
   SyncOperationUpdateManyMutationInput: Partial<SyncOperationUpdateManyMutationInput>;
   SyncOperationWhereInput: Partial<SyncOperationWhereInput>;
   SyncOperationWhereUniqueInput: Partial<SyncOperationWhereUniqueInput>;
   Task: Partial<Task>;
   TaskAvgAggregate: Partial<TaskAvgAggregate>;
   TaskAvgOrderByAggregateInput: Partial<TaskAvgOrderByAggregateInput>;
   TaskCount: Partial<TaskCount>;
   TaskCountAggregate: Partial<TaskCountAggregate>;
   TaskCountOrderByAggregateInput: Partial<TaskCountOrderByAggregateInput>;
   TaskCreateInput: Partial<TaskCreateInput>;
   TaskCreateManyInput: Partial<TaskCreateManyInput>;
   TaskCreateNestedOneWithoutDependenciesInput: Partial<TaskCreateNestedOneWithoutDependenciesInput>;
   TaskCreateNestedOneWithoutDependentsInput: Partial<TaskCreateNestedOneWithoutDependentsInput>;
   TaskCreateNestedOneWithoutIssuesInput: Partial<TaskCreateNestedOneWithoutIssuesInput>;
   TaskCreateNestedOneWithoutSubtasksInput: Partial<TaskCreateNestedOneWithoutSubtasksInput>;
   TaskCreateOrConnectWithoutDependenciesInput: Partial<TaskCreateOrConnectWithoutDependenciesInput>;
   TaskCreateOrConnectWithoutDependentsInput: Partial<TaskCreateOrConnectWithoutDependentsInput>;
   TaskCreateOrConnectWithoutIssuesInput: Partial<TaskCreateOrConnectWithoutIssuesInput>;
   TaskCreateOrConnectWithoutSubtasksInput: Partial<TaskCreateOrConnectWithoutSubtasksInput>;
   TaskCreateWithoutDependenciesInput: Partial<TaskCreateWithoutDependenciesInput>;
   TaskCreateWithoutDependentsInput: Partial<TaskCreateWithoutDependentsInput>;
   TaskCreateWithoutIssuesInput: Partial<TaskCreateWithoutIssuesInput>;
   TaskCreateWithoutSubtasksInput: Partial<TaskCreateWithoutSubtasksInput>;
   TaskDependency: Partial<TaskDependency>;
   TaskDependencyAvgAggregate: Partial<TaskDependencyAvgAggregate>;
   TaskDependencyAvgOrderByAggregateInput: Partial<TaskDependencyAvgOrderByAggregateInput>;
   TaskDependencyCountAggregate: Partial<TaskDependencyCountAggregate>;
   TaskDependencyCountOrderByAggregateInput: Partial<TaskDependencyCountOrderByAggregateInput>;
   TaskDependencyCreateInput: Partial<TaskDependencyCreateInput>;
   TaskDependencyCreateManyDependsOnInput: Partial<TaskDependencyCreateManyDependsOnInput>;
   TaskDependencyCreateManyDependsOnInputEnvelope: Partial<TaskDependencyCreateManyDependsOnInputEnvelope>;
   TaskDependencyCreateManyInput: Partial<TaskDependencyCreateManyInput>;
   TaskDependencyCreateManyTaskInput: Partial<TaskDependencyCreateManyTaskInput>;
   TaskDependencyCreateManyTaskInputEnvelope: Partial<TaskDependencyCreateManyTaskInputEnvelope>;
   TaskDependencyCreateNestedManyWithoutDependsOnInput: Partial<TaskDependencyCreateNestedManyWithoutDependsOnInput>;
   TaskDependencyCreateNestedManyWithoutTaskInput: Partial<TaskDependencyCreateNestedManyWithoutTaskInput>;
   TaskDependencyCreateOrConnectWithoutDependsOnInput: Partial<TaskDependencyCreateOrConnectWithoutDependsOnInput>;
   TaskDependencyCreateOrConnectWithoutTaskInput: Partial<TaskDependencyCreateOrConnectWithoutTaskInput>;
   TaskDependencyCreateWithoutDependsOnInput: Partial<TaskDependencyCreateWithoutDependsOnInput>;
   TaskDependencyCreateWithoutTaskInput: Partial<TaskDependencyCreateWithoutTaskInput>;
   TaskDependencyGroupBy: Partial<TaskDependencyGroupBy>;
   TaskDependencyListRelationFilter: Partial<TaskDependencyListRelationFilter>;
   TaskDependencyMaxAggregate: Partial<TaskDependencyMaxAggregate>;
   TaskDependencyMaxOrderByAggregateInput: Partial<TaskDependencyMaxOrderByAggregateInput>;
   TaskDependencyMinAggregate: Partial<TaskDependencyMinAggregate>;
   TaskDependencyMinOrderByAggregateInput: Partial<TaskDependencyMinOrderByAggregateInput>;
   TaskDependencyOrderByRelationAggregateInput: Partial<TaskDependencyOrderByRelationAggregateInput>;
   TaskDependencyOrderByWithAggregationInput: Partial<TaskDependencyOrderByWithAggregationInput>;
   TaskDependencyOrderByWithRelationInput: Partial<TaskDependencyOrderByWithRelationInput>;
   TaskDependencyScalarWhereInput: Partial<TaskDependencyScalarWhereInput>;
   TaskDependencyScalarWhereWithAggregatesInput: Partial<TaskDependencyScalarWhereWithAggregatesInput>;
   TaskDependencySumAggregate: Partial<TaskDependencySumAggregate>;
   TaskDependencySumOrderByAggregateInput: Partial<TaskDependencySumOrderByAggregateInput>;
   TaskDependencyTaskIdDependsOnIdCompoundUniqueInput: Partial<TaskDependencyTaskIdDependsOnIdCompoundUniqueInput>;
   TaskDependencyUpdateInput: Partial<TaskDependencyUpdateInput>;
   TaskDependencyUpdateManyMutationInput: Partial<TaskDependencyUpdateManyMutationInput>;
   TaskDependencyUpdateManyWithWhereWithoutDependsOnInput: Partial<TaskDependencyUpdateManyWithWhereWithoutDependsOnInput>;
   TaskDependencyUpdateManyWithWhereWithoutTaskInput: Partial<TaskDependencyUpdateManyWithWhereWithoutTaskInput>;
   TaskDependencyUpdateManyWithoutDependsOnNestedInput: Partial<TaskDependencyUpdateManyWithoutDependsOnNestedInput>;
   TaskDependencyUpdateManyWithoutTaskNestedInput: Partial<TaskDependencyUpdateManyWithoutTaskNestedInput>;
   TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput: Partial<TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput>;
   TaskDependencyUpdateWithWhereUniqueWithoutTaskInput: Partial<TaskDependencyUpdateWithWhereUniqueWithoutTaskInput>;
   TaskDependencyUpdateWithoutDependsOnInput: Partial<TaskDependencyUpdateWithoutDependsOnInput>;
   TaskDependencyUpdateWithoutTaskInput: Partial<TaskDependencyUpdateWithoutTaskInput>;
   TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput: Partial<TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput>;
   TaskDependencyUpsertWithWhereUniqueWithoutTaskInput: Partial<TaskDependencyUpsertWithWhereUniqueWithoutTaskInput>;
   TaskDependencyWhereInput: Partial<TaskDependencyWhereInput>;
   TaskDependencyWhereUniqueInput: Partial<TaskDependencyWhereUniqueInput>;
   TaskGroupBy: Partial<TaskGroupBy>;
   TaskMasterMetadata: Partial<TaskMasterMetadata>;
   TaskMasterMetadataAvgAggregate: Partial<TaskMasterMetadataAvgAggregate>;
   TaskMasterMetadataAvgOrderByAggregateInput: Partial<TaskMasterMetadataAvgOrderByAggregateInput>;
   TaskMasterMetadataCountAggregate: Partial<TaskMasterMetadataCountAggregate>;
   TaskMasterMetadataCountOrderByAggregateInput: Partial<TaskMasterMetadataCountOrderByAggregateInput>;
   TaskMasterMetadataCreateInput: Partial<TaskMasterMetadataCreateInput>;
   TaskMasterMetadataCreateManyInput: Partial<TaskMasterMetadataCreateManyInput>;
   TaskMasterMetadataGroupBy: Partial<TaskMasterMetadataGroupBy>;
   TaskMasterMetadataMaxAggregate: Partial<TaskMasterMetadataMaxAggregate>;
   TaskMasterMetadataMaxOrderByAggregateInput: Partial<TaskMasterMetadataMaxOrderByAggregateInput>;
   TaskMasterMetadataMinAggregate: Partial<TaskMasterMetadataMinAggregate>;
   TaskMasterMetadataMinOrderByAggregateInput: Partial<TaskMasterMetadataMinOrderByAggregateInput>;
   TaskMasterMetadataOrderByWithAggregationInput: Partial<TaskMasterMetadataOrderByWithAggregationInput>;
   TaskMasterMetadataOrderByWithRelationInput: Partial<TaskMasterMetadataOrderByWithRelationInput>;
   TaskMasterMetadataScalarWhereWithAggregatesInput: Partial<TaskMasterMetadataScalarWhereWithAggregatesInput>;
   TaskMasterMetadataSumAggregate: Partial<TaskMasterMetadataSumAggregate>;
   TaskMasterMetadataSumOrderByAggregateInput: Partial<TaskMasterMetadataSumOrderByAggregateInput>;
   TaskMasterMetadataUpdateInput: Partial<TaskMasterMetadataUpdateInput>;
   TaskMasterMetadataUpdateManyMutationInput: Partial<TaskMasterMetadataUpdateManyMutationInput>;
   TaskMasterMetadataWhereInput: Partial<TaskMasterMetadataWhereInput>;
   TaskMasterMetadataWhereUniqueInput: Partial<TaskMasterMetadataWhereUniqueInput>;
   TaskMaxAggregate: Partial<TaskMaxAggregate>;
   TaskMaxOrderByAggregateInput: Partial<TaskMaxOrderByAggregateInput>;
   TaskMinAggregate: Partial<TaskMinAggregate>;
   TaskMinOrderByAggregateInput: Partial<TaskMinOrderByAggregateInput>;
   TaskNullableRelationFilter: Partial<TaskNullableRelationFilter>;
   TaskOrderByWithAggregationInput: Partial<TaskOrderByWithAggregationInput>;
   TaskOrderByWithRelationInput: Partial<TaskOrderByWithRelationInput>;
   TaskRelationFilter: Partial<TaskRelationFilter>;
   TaskScalarWhereWithAggregatesInput: Partial<TaskScalarWhereWithAggregatesInput>;
   TaskSumAggregate: Partial<TaskSumAggregate>;
   TaskSumOrderByAggregateInput: Partial<TaskSumOrderByAggregateInput>;
   TaskUpdateInput: Partial<TaskUpdateInput>;
   TaskUpdateManyMutationInput: Partial<TaskUpdateManyMutationInput>;
   TaskUpdateOneRequiredWithoutDependenciesNestedInput: Partial<TaskUpdateOneRequiredWithoutDependenciesNestedInput>;
   TaskUpdateOneRequiredWithoutDependentsNestedInput: Partial<TaskUpdateOneRequiredWithoutDependentsNestedInput>;
   TaskUpdateOneRequiredWithoutSubtasksNestedInput: Partial<TaskUpdateOneRequiredWithoutSubtasksNestedInput>;
   TaskUpdateOneWithoutIssuesNestedInput: Partial<TaskUpdateOneWithoutIssuesNestedInput>;
   TaskUpdateToOneWithWhereWithoutDependenciesInput: Partial<TaskUpdateToOneWithWhereWithoutDependenciesInput>;
   TaskUpdateToOneWithWhereWithoutDependentsInput: Partial<TaskUpdateToOneWithWhereWithoutDependentsInput>;
   TaskUpdateToOneWithWhereWithoutIssuesInput: Partial<TaskUpdateToOneWithWhereWithoutIssuesInput>;
   TaskUpdateToOneWithWhereWithoutSubtasksInput: Partial<TaskUpdateToOneWithWhereWithoutSubtasksInput>;
   TaskUpdateWithoutDependenciesInput: Partial<TaskUpdateWithoutDependenciesInput>;
   TaskUpdateWithoutDependentsInput: Partial<TaskUpdateWithoutDependentsInput>;
   TaskUpdateWithoutIssuesInput: Partial<TaskUpdateWithoutIssuesInput>;
   TaskUpdateWithoutSubtasksInput: Partial<TaskUpdateWithoutSubtasksInput>;
   TaskUpsertWithoutDependenciesInput: Partial<TaskUpsertWithoutDependenciesInput>;
   TaskUpsertWithoutDependentsInput: Partial<TaskUpsertWithoutDependentsInput>;
   TaskUpsertWithoutIssuesInput: Partial<TaskUpsertWithoutIssuesInput>;
   TaskUpsertWithoutSubtasksInput: Partial<TaskUpsertWithoutSubtasksInput>;
   TaskWhereInput: Partial<TaskWhereInput>;
   TaskWhereUniqueInput: Partial<TaskWhereUniqueInput>;
   Team: Partial<Team>;
   TeamCount: Partial<TeamCount>;
   TeamCountAggregate: Partial<TeamCountAggregate>;
   TeamCountOrderByAggregateInput: Partial<TeamCountOrderByAggregateInput>;
   TeamCreateInput: Partial<TeamCreateInput>;
   TeamCreateManyInput: Partial<TeamCreateManyInput>;
   TeamCreateNestedOneWithoutCyclesInput: Partial<TeamCreateNestedOneWithoutCyclesInput>;
   TeamCreateNestedOneWithoutMembersInput: Partial<TeamCreateNestedOneWithoutMembersInput>;
   TeamCreateNestedOneWithoutProjectsInput: Partial<TeamCreateNestedOneWithoutProjectsInput>;
   TeamCreateOrConnectWithoutCyclesInput: Partial<TeamCreateOrConnectWithoutCyclesInput>;
   TeamCreateOrConnectWithoutMembersInput: Partial<TeamCreateOrConnectWithoutMembersInput>;
   TeamCreateOrConnectWithoutProjectsInput: Partial<TeamCreateOrConnectWithoutProjectsInput>;
   TeamCreateWithoutCyclesInput: Partial<TeamCreateWithoutCyclesInput>;
   TeamCreateWithoutMembersInput: Partial<TeamCreateWithoutMembersInput>;
   TeamCreateWithoutProjectsInput: Partial<TeamCreateWithoutProjectsInput>;
   TeamGroupBy: Partial<TeamGroupBy>;
   TeamMaxAggregate: Partial<TeamMaxAggregate>;
   TeamMaxOrderByAggregateInput: Partial<TeamMaxOrderByAggregateInput>;
   TeamMember: Partial<TeamMember>;
   TeamMemberCountAggregate: Partial<TeamMemberCountAggregate>;
   TeamMemberCountOrderByAggregateInput: Partial<TeamMemberCountOrderByAggregateInput>;
   TeamMemberCreateInput: Partial<TeamMemberCreateInput>;
   TeamMemberCreateManyInput: Partial<TeamMemberCreateManyInput>;
   TeamMemberCreateManyTeamInput: Partial<TeamMemberCreateManyTeamInput>;
   TeamMemberCreateManyTeamInputEnvelope: Partial<TeamMemberCreateManyTeamInputEnvelope>;
   TeamMemberCreateManyUserInput: Partial<TeamMemberCreateManyUserInput>;
   TeamMemberCreateManyUserInputEnvelope: Partial<TeamMemberCreateManyUserInputEnvelope>;
   TeamMemberCreateNestedManyWithoutTeamInput: Partial<TeamMemberCreateNestedManyWithoutTeamInput>;
   TeamMemberCreateNestedManyWithoutUserInput: Partial<TeamMemberCreateNestedManyWithoutUserInput>;
   TeamMemberCreateOrConnectWithoutTeamInput: Partial<TeamMemberCreateOrConnectWithoutTeamInput>;
   TeamMemberCreateOrConnectWithoutUserInput: Partial<TeamMemberCreateOrConnectWithoutUserInput>;
   TeamMemberCreateWithoutTeamInput: Partial<TeamMemberCreateWithoutTeamInput>;
   TeamMemberCreateWithoutUserInput: Partial<TeamMemberCreateWithoutUserInput>;
   TeamMemberGroupBy: Partial<TeamMemberGroupBy>;
   TeamMemberListRelationFilter: Partial<TeamMemberListRelationFilter>;
   TeamMemberMaxAggregate: Partial<TeamMemberMaxAggregate>;
   TeamMemberMaxOrderByAggregateInput: Partial<TeamMemberMaxOrderByAggregateInput>;
   TeamMemberMinAggregate: Partial<TeamMemberMinAggregate>;
   TeamMemberMinOrderByAggregateInput: Partial<TeamMemberMinOrderByAggregateInput>;
   TeamMemberOrderByRelationAggregateInput: Partial<TeamMemberOrderByRelationAggregateInput>;
   TeamMemberOrderByWithAggregationInput: Partial<TeamMemberOrderByWithAggregationInput>;
   TeamMemberOrderByWithRelationInput: Partial<TeamMemberOrderByWithRelationInput>;
   TeamMemberScalarWhereInput: Partial<TeamMemberScalarWhereInput>;
   TeamMemberScalarWhereWithAggregatesInput: Partial<TeamMemberScalarWhereWithAggregatesInput>;
   TeamMemberTeamIdUserIdCompoundUniqueInput: Partial<TeamMemberTeamIdUserIdCompoundUniqueInput>;
   TeamMemberUpdateInput: Partial<TeamMemberUpdateInput>;
   TeamMemberUpdateManyMutationInput: Partial<TeamMemberUpdateManyMutationInput>;
   TeamMemberUpdateManyWithWhereWithoutTeamInput: Partial<TeamMemberUpdateManyWithWhereWithoutTeamInput>;
   TeamMemberUpdateManyWithWhereWithoutUserInput: Partial<TeamMemberUpdateManyWithWhereWithoutUserInput>;
   TeamMemberUpdateManyWithoutTeamNestedInput: Partial<TeamMemberUpdateManyWithoutTeamNestedInput>;
   TeamMemberUpdateManyWithoutUserNestedInput: Partial<TeamMemberUpdateManyWithoutUserNestedInput>;
   TeamMemberUpdateWithWhereUniqueWithoutTeamInput: Partial<TeamMemberUpdateWithWhereUniqueWithoutTeamInput>;
   TeamMemberUpdateWithWhereUniqueWithoutUserInput: Partial<TeamMemberUpdateWithWhereUniqueWithoutUserInput>;
   TeamMemberUpdateWithoutTeamInput: Partial<TeamMemberUpdateWithoutTeamInput>;
   TeamMemberUpdateWithoutUserInput: Partial<TeamMemberUpdateWithoutUserInput>;
   TeamMemberUpsertWithWhereUniqueWithoutTeamInput: Partial<TeamMemberUpsertWithWhereUniqueWithoutTeamInput>;
   TeamMemberUpsertWithWhereUniqueWithoutUserInput: Partial<TeamMemberUpsertWithWhereUniqueWithoutUserInput>;
   TeamMemberWhereInput: Partial<TeamMemberWhereInput>;
   TeamMemberWhereUniqueInput: Partial<TeamMemberWhereUniqueInput>;
   TeamMinAggregate: Partial<TeamMinAggregate>;
   TeamMinOrderByAggregateInput: Partial<TeamMinOrderByAggregateInput>;
   TeamOrderByWithAggregationInput: Partial<TeamOrderByWithAggregationInput>;
   TeamOrderByWithRelationInput: Partial<TeamOrderByWithRelationInput>;
   TeamProject: Partial<TeamProject>;
   TeamProjectCountAggregate: Partial<TeamProjectCountAggregate>;
   TeamProjectCountOrderByAggregateInput: Partial<TeamProjectCountOrderByAggregateInput>;
   TeamProjectCreateInput: Partial<TeamProjectCreateInput>;
   TeamProjectCreateManyInput: Partial<TeamProjectCreateManyInput>;
   TeamProjectCreateManyProjectInput: Partial<TeamProjectCreateManyProjectInput>;
   TeamProjectCreateManyProjectInputEnvelope: Partial<TeamProjectCreateManyProjectInputEnvelope>;
   TeamProjectCreateManyTeamInput: Partial<TeamProjectCreateManyTeamInput>;
   TeamProjectCreateManyTeamInputEnvelope: Partial<TeamProjectCreateManyTeamInputEnvelope>;
   TeamProjectCreateNestedManyWithoutProjectInput: Partial<TeamProjectCreateNestedManyWithoutProjectInput>;
   TeamProjectCreateNestedManyWithoutTeamInput: Partial<TeamProjectCreateNestedManyWithoutTeamInput>;
   TeamProjectCreateOrConnectWithoutProjectInput: Partial<TeamProjectCreateOrConnectWithoutProjectInput>;
   TeamProjectCreateOrConnectWithoutTeamInput: Partial<TeamProjectCreateOrConnectWithoutTeamInput>;
   TeamProjectCreateWithoutProjectInput: Partial<TeamProjectCreateWithoutProjectInput>;
   TeamProjectCreateWithoutTeamInput: Partial<TeamProjectCreateWithoutTeamInput>;
   TeamProjectGroupBy: Partial<TeamProjectGroupBy>;
   TeamProjectListRelationFilter: Partial<TeamProjectListRelationFilter>;
   TeamProjectMaxAggregate: Partial<TeamProjectMaxAggregate>;
   TeamProjectMaxOrderByAggregateInput: Partial<TeamProjectMaxOrderByAggregateInput>;
   TeamProjectMinAggregate: Partial<TeamProjectMinAggregate>;
   TeamProjectMinOrderByAggregateInput: Partial<TeamProjectMinOrderByAggregateInput>;
   TeamProjectOrderByRelationAggregateInput: Partial<TeamProjectOrderByRelationAggregateInput>;
   TeamProjectOrderByWithAggregationInput: Partial<TeamProjectOrderByWithAggregationInput>;
   TeamProjectOrderByWithRelationInput: Partial<TeamProjectOrderByWithRelationInput>;
   TeamProjectScalarWhereInput: Partial<TeamProjectScalarWhereInput>;
   TeamProjectScalarWhereWithAggregatesInput: Partial<TeamProjectScalarWhereWithAggregatesInput>;
   TeamProjectTeamIdProjectIdCompoundUniqueInput: Partial<TeamProjectTeamIdProjectIdCompoundUniqueInput>;
   TeamProjectUpdateInput: Partial<TeamProjectUpdateInput>;
   TeamProjectUpdateManyMutationInput: Partial<TeamProjectUpdateManyMutationInput>;
   TeamProjectUpdateManyWithWhereWithoutProjectInput: Partial<TeamProjectUpdateManyWithWhereWithoutProjectInput>;
   TeamProjectUpdateManyWithWhereWithoutTeamInput: Partial<TeamProjectUpdateManyWithWhereWithoutTeamInput>;
   TeamProjectUpdateManyWithoutProjectNestedInput: Partial<TeamProjectUpdateManyWithoutProjectNestedInput>;
   TeamProjectUpdateManyWithoutTeamNestedInput: Partial<TeamProjectUpdateManyWithoutTeamNestedInput>;
   TeamProjectUpdateWithWhereUniqueWithoutProjectInput: Partial<TeamProjectUpdateWithWhereUniqueWithoutProjectInput>;
   TeamProjectUpdateWithWhereUniqueWithoutTeamInput: Partial<TeamProjectUpdateWithWhereUniqueWithoutTeamInput>;
   TeamProjectUpdateWithoutProjectInput: Partial<TeamProjectUpdateWithoutProjectInput>;
   TeamProjectUpdateWithoutTeamInput: Partial<TeamProjectUpdateWithoutTeamInput>;
   TeamProjectUpsertWithWhereUniqueWithoutProjectInput: Partial<TeamProjectUpsertWithWhereUniqueWithoutProjectInput>;
   TeamProjectUpsertWithWhereUniqueWithoutTeamInput: Partial<TeamProjectUpsertWithWhereUniqueWithoutTeamInput>;
   TeamProjectWhereInput: Partial<TeamProjectWhereInput>;
   TeamProjectWhereUniqueInput: Partial<TeamProjectWhereUniqueInput>;
   TeamRelationFilter: Partial<TeamRelationFilter>;
   TeamScalarWhereWithAggregatesInput: Partial<TeamScalarWhereWithAggregatesInput>;
   TeamUpdateInput: Partial<TeamUpdateInput>;
   TeamUpdateManyMutationInput: Partial<TeamUpdateManyMutationInput>;
   TeamUpdateOneRequiredWithoutCyclesNestedInput: Partial<TeamUpdateOneRequiredWithoutCyclesNestedInput>;
   TeamUpdateOneRequiredWithoutMembersNestedInput: Partial<TeamUpdateOneRequiredWithoutMembersNestedInput>;
   TeamUpdateOneRequiredWithoutProjectsNestedInput: Partial<TeamUpdateOneRequiredWithoutProjectsNestedInput>;
   TeamUpdateToOneWithWhereWithoutCyclesInput: Partial<TeamUpdateToOneWithWhereWithoutCyclesInput>;
   TeamUpdateToOneWithWhereWithoutMembersInput: Partial<TeamUpdateToOneWithWhereWithoutMembersInput>;
   TeamUpdateToOneWithWhereWithoutProjectsInput: Partial<TeamUpdateToOneWithWhereWithoutProjectsInput>;
   TeamUpdateWithoutCyclesInput: Partial<TeamUpdateWithoutCyclesInput>;
   TeamUpdateWithoutMembersInput: Partial<TeamUpdateWithoutMembersInput>;
   TeamUpdateWithoutProjectsInput: Partial<TeamUpdateWithoutProjectsInput>;
   TeamUpsertWithoutCyclesInput: Partial<TeamUpsertWithoutCyclesInput>;
   TeamUpsertWithoutMembersInput: Partial<TeamUpsertWithoutMembersInput>;
   TeamUpsertWithoutProjectsInput: Partial<TeamUpsertWithoutProjectsInput>;
   TeamWhereInput: Partial<TeamWhereInput>;
   TeamWhereUniqueInput: Partial<TeamWhereUniqueInput>;
   User: Partial<User>;
   UserCount: Partial<UserCount>;
   UserCountAggregate: Partial<UserCountAggregate>;
   UserCountOrderByAggregateInput: Partial<UserCountOrderByAggregateInput>;
   UserCreateInput: Partial<UserCreateInput>;
   UserCreateManyInput: Partial<UserCreateManyInput>;
   UserCreateNestedOneWithoutAssignedIssuesInput: Partial<UserCreateNestedOneWithoutAssignedIssuesInput>;
   UserCreateNestedOneWithoutLedProjectsInput: Partial<UserCreateNestedOneWithoutLedProjectsInput>;
   UserCreateNestedOneWithoutTeamsInput: Partial<UserCreateNestedOneWithoutTeamsInput>;
   UserCreateOrConnectWithoutAssignedIssuesInput: Partial<UserCreateOrConnectWithoutAssignedIssuesInput>;
   UserCreateOrConnectWithoutLedProjectsInput: Partial<UserCreateOrConnectWithoutLedProjectsInput>;
   UserCreateOrConnectWithoutTeamsInput: Partial<UserCreateOrConnectWithoutTeamsInput>;
   UserCreateWithoutAssignedIssuesInput: Partial<UserCreateWithoutAssignedIssuesInput>;
   UserCreateWithoutLedProjectsInput: Partial<UserCreateWithoutLedProjectsInput>;
   UserCreateWithoutTeamsInput: Partial<UserCreateWithoutTeamsInput>;
   UserGroupBy: Partial<UserGroupBy>;
   UserMaxAggregate: Partial<UserMaxAggregate>;
   UserMaxOrderByAggregateInput: Partial<UserMaxOrderByAggregateInput>;
   UserMinAggregate: Partial<UserMinAggregate>;
   UserMinOrderByAggregateInput: Partial<UserMinOrderByAggregateInput>;
   UserNullableRelationFilter: Partial<UserNullableRelationFilter>;
   UserOrderByWithAggregationInput: Partial<UserOrderByWithAggregationInput>;
   UserOrderByWithRelationInput: Partial<UserOrderByWithRelationInput>;
   UserRelationFilter: Partial<UserRelationFilter>;
   UserScalarWhereWithAggregatesInput: Partial<UserScalarWhereWithAggregatesInput>;
   UserUpdateInput: Partial<UserUpdateInput>;
   UserUpdateManyMutationInput: Partial<UserUpdateManyMutationInput>;
   UserUpdateOneRequiredWithoutTeamsNestedInput: Partial<UserUpdateOneRequiredWithoutTeamsNestedInput>;
   UserUpdateOneWithoutAssignedIssuesNestedInput: Partial<UserUpdateOneWithoutAssignedIssuesNestedInput>;
   UserUpdateOneWithoutLedProjectsNestedInput: Partial<UserUpdateOneWithoutLedProjectsNestedInput>;
   UserUpdateToOneWithWhereWithoutAssignedIssuesInput: Partial<UserUpdateToOneWithWhereWithoutAssignedIssuesInput>;
   UserUpdateToOneWithWhereWithoutLedProjectsInput: Partial<UserUpdateToOneWithWhereWithoutLedProjectsInput>;
   UserUpdateToOneWithWhereWithoutTeamsInput: Partial<UserUpdateToOneWithWhereWithoutTeamsInput>;
   UserUpdateWithoutAssignedIssuesInput: Partial<UserUpdateWithoutAssignedIssuesInput>;
   UserUpdateWithoutLedProjectsInput: Partial<UserUpdateWithoutLedProjectsInput>;
   UserUpdateWithoutTeamsInput: Partial<UserUpdateWithoutTeamsInput>;
   UserUpsertWithoutAssignedIssuesInput: Partial<UserUpsertWithoutAssignedIssuesInput>;
   UserUpsertWithoutLedProjectsInput: Partial<UserUpsertWithoutLedProjectsInput>;
   UserUpsertWithoutTeamsInput: Partial<UserUpsertWithoutTeamsInput>;
   UserWhereInput: Partial<UserWhereInput>;
   UserWhereUniqueInput: Partial<UserWhereUniqueInput>;
}>;

export type AffectedRowsOutputResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AffectedRowsOutput'] = ResolversParentTypes['AffectedRowsOutput'],
> = ResolversObject<{
   count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateCycleResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateCycle'] = ResolversParentTypes['AggregateCycle'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['CycleAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['CycleCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['CycleMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['CycleMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['CycleSumAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateIssueResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateIssue'] = ResolversParentTypes['AggregateIssue'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['IssueAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['IssueCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['IssueMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['IssueMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['IssueSumAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateIssueLabelResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateIssueLabel'] = ResolversParentTypes['AggregateIssueLabel'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['IssueLabelCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['IssueLabelMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['IssueLabelMinAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateIssuePriorityResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateIssuePriority'] = ResolversParentTypes['AggregateIssuePriority'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['IssuePriorityAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['IssuePriorityCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['IssuePriorityMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['IssuePriorityMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['IssuePrioritySumAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateIssueStatusResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateIssueStatus'] = ResolversParentTypes['AggregateIssueStatus'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['IssueStatusCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['IssueStatusMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['IssueStatusMinAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateLabelResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateLabel'] = ResolversParentTypes['AggregateLabel'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['LabelCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['LabelMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['LabelMinAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateProjectResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateProject'] = ResolversParentTypes['AggregateProject'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['ProjectAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['ProjectCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['ProjectMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['ProjectMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['ProjectSumAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateSubtaskResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateSubtask'] = ResolversParentTypes['AggregateSubtask'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['SubtaskAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['SubtaskCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['SubtaskMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['SubtaskMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['SubtaskSumAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateSyncConflictResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateSyncConflict'] = ResolversParentTypes['AggregateSyncConflict'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['SyncConflictCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['SyncConflictMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['SyncConflictMinAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateSyncOperationResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateSyncOperation'] = ResolversParentTypes['AggregateSyncOperation'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['SyncOperationAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['SyncOperationCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['SyncOperationMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['SyncOperationMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['SyncOperationSumAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateTaskResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['AggregateTask'] = ResolversParentTypes['AggregateTask'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['TaskAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['TaskCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['TaskMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['TaskMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['TaskSumAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateTaskDependencyResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateTaskDependency'] = ResolversParentTypes['AggregateTaskDependency'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['TaskDependencyAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<
      Maybe<ResolversTypes['TaskDependencyCountAggregate']>,
      ParentType,
      ContextType
   >;
   _max?: Resolver<Maybe<ResolversTypes['TaskDependencyMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['TaskDependencyMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['TaskDependencySumAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateTaskMasterMetadataResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateTaskMasterMetadata'] = ResolversParentTypes['AggregateTaskMasterMetadata'],
> = ResolversObject<{
   _avg?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadataAvgAggregate']>,
      ParentType,
      ContextType
   >;
   _count?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadataCountAggregate']>,
      ParentType,
      ContextType
   >;
   _max?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadataMaxAggregate']>,
      ParentType,
      ContextType
   >;
   _min?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadataMinAggregate']>,
      ParentType,
      ContextType
   >;
   _sum?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadataSumAggregate']>,
      ParentType,
      ContextType
   >;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateTeamResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['AggregateTeam'] = ResolversParentTypes['AggregateTeam'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['TeamCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['TeamMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['TeamMinAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateTeamMemberResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateTeamMember'] = ResolversParentTypes['AggregateTeamMember'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['TeamMemberCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['TeamMemberMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['TeamMemberMinAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateTeamProjectResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['AggregateTeamProject'] = ResolversParentTypes['AggregateTeamProject'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['TeamProjectCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['TeamProjectMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['TeamProjectMinAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AggregateUserResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['AggregateUser'] = ResolversParentTypes['AggregateUser'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['UserCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['UserMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['UserMinAggregate']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnCycleResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnCycle'] = ResolversParentTypes['CreateManyAndReturnCycle'],
> = ResolversObject<{
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   progress?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   team?: Resolver<ResolversTypes['Team'], ParentType, ContextType>;
   teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnIssueResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnIssue'] = ResolversParentTypes['CreateManyAndReturnIssue'],
> = ResolversObject<{
   assignee?: Resolver<
      Maybe<ResolversTypes['User']>,
      ParentType,
      ContextType,
      Partial<CreateManyAndReturnIssueAssigneeArgs>
   >;
   assigneeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   cycle?: Resolver<
      Maybe<ResolversTypes['Cycle']>,
      ParentType,
      ContextType,
      Partial<CreateManyAndReturnIssueCycleArgs>
   >;
   cycleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   dueDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issuePriority?: Resolver<
      Maybe<ResolversTypes['IssuePriority']>,
      ParentType,
      ContextType,
      Partial<CreateManyAndReturnIssueIssuePriorityArgs>
   >;
   issueStatus?: Resolver<
      Maybe<ResolversTypes['IssueStatus']>,
      ParentType,
      ContextType,
      Partial<CreateManyAndReturnIssueIssueStatusArgs>
   >;
   issueType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   parentIssue?: Resolver<
      Maybe<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      Partial<CreateManyAndReturnIssueParentIssueArgs>
   >;
   parentIssueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   priority?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   priorityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   project?: Resolver<
      Maybe<ResolversTypes['Project']>,
      ParentType,
      ContextType,
      Partial<CreateManyAndReturnIssueProjectArgs>
   >;
   projectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   statusId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   subtask?: Resolver<
      Maybe<ResolversTypes['Subtask']>,
      ParentType,
      ContextType,
      Partial<CreateManyAndReturnIssueSubtaskArgs>
   >;
   subtaskId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   task?: Resolver<
      Maybe<ResolversTypes['Task']>,
      ParentType,
      ContextType,
      Partial<CreateManyAndReturnIssueTaskArgs>
   >;
   taskId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnIssueLabelResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnIssueLabel'] = ResolversParentTypes['CreateManyAndReturnIssueLabel'],
> = ResolversObject<{
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issue?: Resolver<ResolversTypes['Issue'], ParentType, ContextType>;
   issueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   label?: Resolver<ResolversTypes['Label'], ParentType, ContextType>;
   labelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnIssuePriorityResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnIssuePriority'] = ResolversParentTypes['CreateManyAndReturnIssuePriority'],
> = ResolversObject<{
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   iconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnIssueStatusResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnIssueStatus'] = ResolversParentTypes['CreateManyAndReturnIssueStatus'],
> = ResolversObject<{
   color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   iconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnLabelResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnLabel'] = ResolversParentTypes['CreateManyAndReturnLabel'],
> = ResolversObject<{
   color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnProjectResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnProject'] = ResolversParentTypes['CreateManyAndReturnProject'],
> = ResolversObject<{
   color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   health?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   lead?: Resolver<
      Maybe<ResolversTypes['User']>,
      ParentType,
      ContextType,
      Partial<CreateManyAndReturnProjectLeadArgs>
   >;
   leadId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   percentComplete?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnSubtaskResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnSubtask'] = ResolversParentTypes['CreateManyAndReturnSubtask'],
> = ResolversObject<{
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   dependencies?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   parentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   parentTask?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnSyncConflictResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnSyncConflict'] = ResolversParentTypes['CreateManyAndReturnSyncConflict'],
> = ResolversObject<{
   cliVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   operationType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   resolved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
   resolvedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   resolvedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   taskId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   uiVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnSyncOperationResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnSyncOperation'] = ResolversParentTypes['CreateManyAndReturnSyncOperation'],
> = ResolversObject<{
   completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   maxRetries?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   retryCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   rollbackData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   taskIds?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnTaskResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnTask'] = ResolversParentTypes['CreateManyAndReturnTask'],
> = ResolversObject<{
   complexity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   priority?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnTaskDependencyResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnTaskDependency'] = ResolversParentTypes['CreateManyAndReturnTaskDependency'],
> = ResolversObject<{
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   dependsOn?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
   dependsOnId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   task?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
   taskId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnTaskMasterMetadataResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnTaskMasterMetadata'] = ResolversParentTypes['CreateManyAndReturnTaskMasterMetadata'],
> = ResolversObject<{
   created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnTeamResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnTeam'] = ResolversParentTypes['CreateManyAndReturnTeam'],
> = ResolversObject<{
   color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   joined?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnTeamMemberResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnTeamMember'] = ResolversParentTypes['CreateManyAndReturnTeamMember'],
> = ResolversObject<{
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   team?: Resolver<ResolversTypes['Team'], ParentType, ContextType>;
   teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
   userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnTeamProjectResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnTeamProject'] = ResolversParentTypes['CreateManyAndReturnTeamProject'],
> = ResolversObject<{
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
   projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   team?: Resolver<ResolversTypes['Team'], ParentType, ContextType>;
   teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateManyAndReturnUserResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CreateManyAndReturnUser'] = ResolversParentTypes['CreateManyAndReturnUser'],
> = ResolversObject<{
   avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   joinedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   teamIds?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CycleResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Cycle'] = ResolversParentTypes['Cycle'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['CycleCount']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issues?: Resolver<
      Array<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      Partial<CycleIssuesArgs>
   >;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   progress?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   team?: Resolver<ResolversTypes['Team'], ParentType, ContextType>;
   teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CycleAvgAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CycleAvgAggregate'] = ResolversParentTypes['CycleAvgAggregate'],
> = ResolversObject<{
   number?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   progress?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CycleCountResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['CycleCount'] = ResolversParentTypes['CycleCount'],
> = ResolversObject<{
   issues?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<CycleCountIssuesArgs>>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CycleCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CycleCountAggregate'] = ResolversParentTypes['CycleCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   endDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   progress?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   startDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CycleGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['CycleGroupBy'] = ResolversParentTypes['CycleGroupBy'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['CycleAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['CycleCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['CycleMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['CycleMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['CycleSumAggregate']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   endDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   progress?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CycleMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CycleMaxAggregate'] = ResolversParentTypes['CycleMaxAggregate'],
> = ResolversObject<{
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   progress?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CycleMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CycleMinAggregate'] = ResolversParentTypes['CycleMinAggregate'],
> = ResolversObject<{
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   progress?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CycleSumAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['CycleSumAggregate'] = ResolversParentTypes['CycleSumAggregate'],
> = ResolversObject<{
   number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   progress?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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
   _count?: Resolver<Maybe<ResolversTypes['IssueCount']>, ParentType, ContextType>;
   assignee?: Resolver<
      Maybe<ResolversTypes['User']>,
      ParentType,
      ContextType,
      Partial<IssueAssigneeArgs>
   >;
   assigneeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   cycle?: Resolver<
      Maybe<ResolversTypes['Cycle']>,
      ParentType,
      ContextType,
      Partial<IssueCycleArgs>
   >;
   cycleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   dueDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issuePriority?: Resolver<
      Maybe<ResolversTypes['IssuePriority']>,
      ParentType,
      ContextType,
      Partial<IssueIssuePriorityArgs>
   >;
   issueStatus?: Resolver<
      Maybe<ResolversTypes['IssueStatus']>,
      ParentType,
      ContextType,
      Partial<IssueIssueStatusArgs>
   >;
   issueType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   labels?: Resolver<
      Array<ResolversTypes['IssueLabel']>,
      ParentType,
      ContextType,
      Partial<IssueLabelsArgs>
   >;
   parentIssue?: Resolver<
      Maybe<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      Partial<IssueParentIssueArgs>
   >;
   parentIssueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   priority?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   priorityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   project?: Resolver<
      Maybe<ResolversTypes['Project']>,
      ParentType,
      ContextType,
      Partial<IssueProjectArgs>
   >;
   projectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   statusId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   subIssues?: Resolver<
      Array<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      Partial<IssueSubIssuesArgs>
   >;
   subtask?: Resolver<
      Maybe<ResolversTypes['Subtask']>,
      ParentType,
      ContextType,
      Partial<IssueSubtaskArgs>
   >;
   subtaskId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, Partial<IssueTaskArgs>>;
   taskId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueAvgAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueAvgAggregate'] = ResolversParentTypes['IssueAvgAggregate'],
> = ResolversObject<{
   taskId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueCountResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['IssueCount'] = ResolversParentTypes['IssueCount'],
> = ResolversObject<{
   labels?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<IssueCountLabelsArgs>>;
   subIssues?: Resolver<
      ResolversTypes['Int'],
      ParentType,
      ContextType,
      Partial<IssueCountSubIssuesArgs>
   >;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueCountAggregate'] = ResolversParentTypes['IssueCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   assigneeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   cycleId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   dueDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   identifier?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   issueType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   parentIssueId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   priorityId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   statusId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   subtaskId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   taskId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   title?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['IssueGroupBy'] = ResolversParentTypes['IssueGroupBy'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['IssueAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['IssueCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['IssueMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['IssueMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['IssueSumAggregate']>, ParentType, ContextType>;
   assigneeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   cycleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   dueDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issueType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   parentIssueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   priority?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   priorityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   projectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   rank?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   statusId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   subtaskId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   taskId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueLabelResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['IssueLabel'] = ResolversParentTypes['IssueLabel'],
> = ResolversObject<{
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issue?: Resolver<ResolversTypes['Issue'], ParentType, ContextType>;
   issueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   label?: Resolver<ResolversTypes['Label'], ParentType, ContextType>;
   labelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueLabelCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueLabelCountAggregate'] = ResolversParentTypes['IssueLabelCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   issueId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   labelId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueLabelGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueLabelGroupBy'] = ResolversParentTypes['IssueLabelGroupBy'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['IssueLabelCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['IssueLabelMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['IssueLabelMinAggregate']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issueId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   labelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueLabelMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueLabelMaxAggregate'] = ResolversParentTypes['IssueLabelMaxAggregate'],
> = ResolversObject<{
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   issueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   labelId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueLabelMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueLabelMinAggregate'] = ResolversParentTypes['IssueLabelMinAggregate'],
> = ResolversObject<{
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   issueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   labelId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueMaxAggregate'] = ResolversParentTypes['IssueMaxAggregate'],
> = ResolversObject<{
   assigneeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   cycleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   dueDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   issueType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   parentIssueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   priority?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   priorityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   projectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   rank?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   statusId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   subtaskId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   taskId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueMinAggregate'] = ResolversParentTypes['IssueMinAggregate'],
> = ResolversObject<{
   assigneeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   cycleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   dueDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   issueType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   parentIssueId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   priority?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   priorityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   projectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   rank?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   statusId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   subtaskId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   taskId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssuePriorityResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['IssuePriority'] = ResolversParentTypes['IssuePriority'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['IssuePriorityCount']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   iconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issues?: Resolver<
      Array<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      Partial<IssuePriorityIssuesArgs>
   >;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssuePriorityAvgAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssuePriorityAvgAggregate'] = ResolversParentTypes['IssuePriorityAvgAggregate'],
> = ResolversObject<{
   order?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssuePriorityCountResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssuePriorityCount'] = ResolversParentTypes['IssuePriorityCount'],
> = ResolversObject<{
   issues?: Resolver<
      ResolversTypes['Int'],
      ParentType,
      ContextType,
      Partial<IssuePriorityCountIssuesArgs>
   >;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssuePriorityCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssuePriorityCountAggregate'] = ResolversParentTypes['IssuePriorityCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   iconName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssuePriorityGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssuePriorityGroupBy'] = ResolversParentTypes['IssuePriorityGroupBy'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['IssuePriorityAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['IssuePriorityCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['IssuePriorityMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['IssuePriorityMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['IssuePrioritySumAggregate']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   iconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssuePriorityMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssuePriorityMaxAggregate'] = ResolversParentTypes['IssuePriorityMaxAggregate'],
> = ResolversObject<{
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssuePriorityMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssuePriorityMinAggregate'] = ResolversParentTypes['IssuePriorityMinAggregate'],
> = ResolversObject<{
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssuePrioritySumAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssuePrioritySumAggregate'] = ResolversParentTypes['IssuePrioritySumAggregate'],
> = ResolversObject<{
   order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueStatsResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['IssueStats'] = ResolversParentTypes['IssueStats'],
> = ResolversObject<{
   completed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   completionRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   inProgress?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   pending?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueStatusResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['IssueStatus'] = ResolversParentTypes['IssueStatus'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['IssueStatusCount']>, ParentType, ContextType>;
   color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   iconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issues?: Resolver<
      Array<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      Partial<IssueStatusIssuesArgs>
   >;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueStatusCountResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueStatusCount'] = ResolversParentTypes['IssueStatusCount'],
> = ResolversObject<{
   issues?: Resolver<
      ResolversTypes['Int'],
      ParentType,
      ContextType,
      Partial<IssueStatusCountIssuesArgs>
   >;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueStatusCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueStatusCountAggregate'] = ResolversParentTypes['IssueStatusCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   color?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   iconName?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueStatusGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueStatusGroupBy'] = ResolversParentTypes['IssueStatusGroupBy'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['IssueStatusCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['IssueStatusMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['IssueStatusMinAggregate']>, ParentType, ContextType>;
   color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   iconName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueStatusMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueStatusMaxAggregate'] = ResolversParentTypes['IssueStatusMaxAggregate'],
> = ResolversObject<{
   color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueStatusMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueStatusMinAggregate'] = ResolversParentTypes['IssueStatusMinAggregate'],
> = ResolversObject<{
   color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   iconName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IssueSumAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['IssueSumAggregate'] = ResolversParentTypes['IssueSumAggregate'],
> = ResolversObject<{
   taskId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LabelResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Label'] = ResolversParentTypes['Label'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['LabelCount']>, ParentType, ContextType>;
   color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issues?: Resolver<
      Array<ResolversTypes['IssueLabel']>,
      ParentType,
      ContextType,
      Partial<LabelIssuesArgs>
   >;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LabelCountResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['LabelCount'] = ResolversParentTypes['LabelCount'],
> = ResolversObject<{
   issues?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<LabelCountIssuesArgs>>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LabelCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['LabelCountAggregate'] = ResolversParentTypes['LabelCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   color?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LabelGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['LabelGroupBy'] = ResolversParentTypes['LabelGroupBy'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['LabelCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['LabelMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['LabelMinAggregate']>, ParentType, ContextType>;
   color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LabelMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['LabelMaxAggregate'] = ResolversParentTypes['LabelMaxAggregate'],
> = ResolversObject<{
   color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LabelMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['LabelMinAggregate'] = ResolversParentTypes['LabelMinAggregate'],
> = ResolversObject<{
   color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
   createManyAndReturnCycle?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnCycle']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnCycleArgs, 'data'>
   >;
   createManyAndReturnIssue?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnIssue']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnIssueArgs, 'data'>
   >;
   createManyAndReturnIssueLabel?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnIssueLabel']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnIssueLabelArgs, 'data'>
   >;
   createManyAndReturnIssuePriority?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnIssuePriority']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnIssuePriorityArgs, 'data'>
   >;
   createManyAndReturnIssueStatus?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnIssueStatus']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnIssueStatusArgs, 'data'>
   >;
   createManyAndReturnLabel?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnLabel']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnLabelArgs, 'data'>
   >;
   createManyAndReturnProject?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnProject']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnProjectArgs, 'data'>
   >;
   createManyAndReturnSubtask?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnSubtask']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnSubtaskArgs, 'data'>
   >;
   createManyAndReturnSyncConflict?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnSyncConflict']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnSyncConflictArgs, 'data'>
   >;
   createManyAndReturnSyncOperation?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnSyncOperation']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnSyncOperationArgs, 'data'>
   >;
   createManyAndReturnTask?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnTask']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnTaskArgs, 'data'>
   >;
   createManyAndReturnTaskDependency?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnTaskDependency']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnTaskDependencyArgs, 'data'>
   >;
   createManyAndReturnTaskMasterMetadata?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnTaskMasterMetadata']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnTaskMasterMetadataArgs, 'data'>
   >;
   createManyAndReturnTeam?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnTeam']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnTeamArgs, 'data'>
   >;
   createManyAndReturnTeamMember?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnTeamMember']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnTeamMemberArgs, 'data'>
   >;
   createManyAndReturnTeamProject?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnTeamProject']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnTeamProjectArgs, 'data'>
   >;
   createManyAndReturnUser?: Resolver<
      Array<ResolversTypes['CreateManyAndReturnUser']>,
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyAndReturnUserArgs, 'data'>
   >;
   createManyCycle?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyCycleArgs, 'data'>
   >;
   createManyIssue?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyIssueArgs, 'data'>
   >;
   createManyIssueLabel?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyIssueLabelArgs, 'data'>
   >;
   createManyIssuePriority?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyIssuePriorityArgs, 'data'>
   >;
   createManyIssueStatus?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyIssueStatusArgs, 'data'>
   >;
   createManyLabel?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyLabelArgs, 'data'>
   >;
   createManyProject?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyProjectArgs, 'data'>
   >;
   createManySubtask?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManySubtaskArgs, 'data'>
   >;
   createManySyncConflict?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManySyncConflictArgs, 'data'>
   >;
   createManySyncOperation?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManySyncOperationArgs, 'data'>
   >;
   createManyTask?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyTaskArgs, 'data'>
   >;
   createManyTaskDependency?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyTaskDependencyArgs, 'data'>
   >;
   createManyTaskMasterMetadata?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyTaskMasterMetadataArgs, 'data'>
   >;
   createManyTeam?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyTeamArgs, 'data'>
   >;
   createManyTeamMember?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyTeamMemberArgs, 'data'>
   >;
   createManyTeamProject?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyTeamProjectArgs, 'data'>
   >;
   createManyUser?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateManyUserArgs, 'data'>
   >;
   createOneCycle?: Resolver<
      ResolversTypes['Cycle'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneCycleArgs, 'data'>
   >;
   createOneIssue?: Resolver<
      ResolversTypes['Issue'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneIssueArgs, 'data'>
   >;
   createOneIssueLabel?: Resolver<
      ResolversTypes['IssueLabel'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneIssueLabelArgs, 'data'>
   >;
   createOneIssuePriority?: Resolver<
      ResolversTypes['IssuePriority'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneIssuePriorityArgs, 'data'>
   >;
   createOneIssueStatus?: Resolver<
      ResolversTypes['IssueStatus'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneIssueStatusArgs, 'data'>
   >;
   createOneLabel?: Resolver<
      ResolversTypes['Label'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneLabelArgs, 'data'>
   >;
   createOneProject?: Resolver<
      ResolversTypes['Project'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneProjectArgs, 'data'>
   >;
   createOneSubtask?: Resolver<
      ResolversTypes['Subtask'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneSubtaskArgs, 'data'>
   >;
   createOneSyncConflict?: Resolver<
      ResolversTypes['SyncConflict'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneSyncConflictArgs, 'data'>
   >;
   createOneSyncOperation?: Resolver<
      ResolversTypes['SyncOperation'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneSyncOperationArgs, 'data'>
   >;
   createOneTask?: Resolver<
      ResolversTypes['Task'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneTaskArgs, 'data'>
   >;
   createOneTaskDependency?: Resolver<
      ResolversTypes['TaskDependency'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneTaskDependencyArgs, 'data'>
   >;
   createOneTaskMasterMetadata?: Resolver<
      ResolversTypes['TaskMasterMetadata'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneTaskMasterMetadataArgs, 'data'>
   >;
   createOneTeam?: Resolver<
      ResolversTypes['Team'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneTeamArgs, 'data'>
   >;
   createOneTeamMember?: Resolver<
      ResolversTypes['TeamMember'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneTeamMemberArgs, 'data'>
   >;
   createOneTeamProject?: Resolver<
      ResolversTypes['TeamProject'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneTeamProjectArgs, 'data'>
   >;
   createOneUser?: Resolver<
      ResolversTypes['User'],
      ParentType,
      ContextType,
      RequireFields<MutationCreateOneUserArgs, 'data'>
   >;
   deleteManyCycle?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyCycleArgs>
   >;
   deleteManyIssue?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyIssueArgs>
   >;
   deleteManyIssueLabel?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyIssueLabelArgs>
   >;
   deleteManyIssuePriority?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyIssuePriorityArgs>
   >;
   deleteManyIssueStatus?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyIssueStatusArgs>
   >;
   deleteManyLabel?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyLabelArgs>
   >;
   deleteManyProject?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyProjectArgs>
   >;
   deleteManySubtask?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManySubtaskArgs>
   >;
   deleteManySyncConflict?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManySyncConflictArgs>
   >;
   deleteManySyncOperation?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManySyncOperationArgs>
   >;
   deleteManyTask?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyTaskArgs>
   >;
   deleteManyTaskDependency?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyTaskDependencyArgs>
   >;
   deleteManyTaskMasterMetadata?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyTaskMasterMetadataArgs>
   >;
   deleteManyTeam?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyTeamArgs>
   >;
   deleteManyTeamMember?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyTeamMemberArgs>
   >;
   deleteManyTeamProject?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyTeamProjectArgs>
   >;
   deleteManyUser?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      Partial<MutationDeleteManyUserArgs>
   >;
   deleteOneCycle?: Resolver<
      Maybe<ResolversTypes['Cycle']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneCycleArgs, 'where'>
   >;
   deleteOneIssue?: Resolver<
      Maybe<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneIssueArgs, 'where'>
   >;
   deleteOneIssueLabel?: Resolver<
      Maybe<ResolversTypes['IssueLabel']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneIssueLabelArgs, 'where'>
   >;
   deleteOneIssuePriority?: Resolver<
      Maybe<ResolversTypes['IssuePriority']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneIssuePriorityArgs, 'where'>
   >;
   deleteOneIssueStatus?: Resolver<
      Maybe<ResolversTypes['IssueStatus']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneIssueStatusArgs, 'where'>
   >;
   deleteOneLabel?: Resolver<
      Maybe<ResolversTypes['Label']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneLabelArgs, 'where'>
   >;
   deleteOneProject?: Resolver<
      Maybe<ResolversTypes['Project']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneProjectArgs, 'where'>
   >;
   deleteOneSubtask?: Resolver<
      Maybe<ResolversTypes['Subtask']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneSubtaskArgs, 'where'>
   >;
   deleteOneSyncConflict?: Resolver<
      Maybe<ResolversTypes['SyncConflict']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneSyncConflictArgs, 'where'>
   >;
   deleteOneSyncOperation?: Resolver<
      Maybe<ResolversTypes['SyncOperation']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneSyncOperationArgs, 'where'>
   >;
   deleteOneTask?: Resolver<
      Maybe<ResolversTypes['Task']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneTaskArgs, 'where'>
   >;
   deleteOneTaskDependency?: Resolver<
      Maybe<ResolversTypes['TaskDependency']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneTaskDependencyArgs, 'where'>
   >;
   deleteOneTaskMasterMetadata?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadata']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneTaskMasterMetadataArgs, 'where'>
   >;
   deleteOneTeam?: Resolver<
      Maybe<ResolversTypes['Team']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneTeamArgs, 'where'>
   >;
   deleteOneTeamMember?: Resolver<
      Maybe<ResolversTypes['TeamMember']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneTeamMemberArgs, 'where'>
   >;
   deleteOneTeamProject?: Resolver<
      Maybe<ResolversTypes['TeamProject']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneTeamProjectArgs, 'where'>
   >;
   deleteOneUser?: Resolver<
      Maybe<ResolversTypes['User']>,
      ParentType,
      ContextType,
      RequireFields<MutationDeleteOneUserArgs, 'where'>
   >;
   updateManyCycle?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyCycleArgs, 'data'>
   >;
   updateManyIssue?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyIssueArgs, 'data'>
   >;
   updateManyIssueLabel?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyIssueLabelArgs, 'data'>
   >;
   updateManyIssuePriority?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyIssuePriorityArgs, 'data'>
   >;
   updateManyIssueStatus?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyIssueStatusArgs, 'data'>
   >;
   updateManyLabel?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyLabelArgs, 'data'>
   >;
   updateManyProject?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyProjectArgs, 'data'>
   >;
   updateManySubtask?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManySubtaskArgs, 'data'>
   >;
   updateManySyncConflict?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManySyncConflictArgs, 'data'>
   >;
   updateManySyncOperation?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManySyncOperationArgs, 'data'>
   >;
   updateManyTask?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyTaskArgs, 'data'>
   >;
   updateManyTaskDependency?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyTaskDependencyArgs, 'data'>
   >;
   updateManyTaskMasterMetadata?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyTaskMasterMetadataArgs, 'data'>
   >;
   updateManyTeam?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyTeamArgs, 'data'>
   >;
   updateManyTeamMember?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyTeamMemberArgs, 'data'>
   >;
   updateManyTeamProject?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyTeamProjectArgs, 'data'>
   >;
   updateManyUser?: Resolver<
      ResolversTypes['AffectedRowsOutput'],
      ParentType,
      ContextType,
      RequireFields<MutationUpdateManyUserArgs, 'data'>
   >;
   updateOneCycle?: Resolver<
      Maybe<ResolversTypes['Cycle']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneCycleArgs, 'data' | 'where'>
   >;
   updateOneIssue?: Resolver<
      Maybe<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneIssueArgs, 'data' | 'where'>
   >;
   updateOneIssueLabel?: Resolver<
      Maybe<ResolversTypes['IssueLabel']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneIssueLabelArgs, 'data' | 'where'>
   >;
   updateOneIssuePriority?: Resolver<
      Maybe<ResolversTypes['IssuePriority']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneIssuePriorityArgs, 'data' | 'where'>
   >;
   updateOneIssueStatus?: Resolver<
      Maybe<ResolversTypes['IssueStatus']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneIssueStatusArgs, 'data' | 'where'>
   >;
   updateOneLabel?: Resolver<
      Maybe<ResolversTypes['Label']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneLabelArgs, 'data' | 'where'>
   >;
   updateOneProject?: Resolver<
      Maybe<ResolversTypes['Project']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneProjectArgs, 'data' | 'where'>
   >;
   updateOneSubtask?: Resolver<
      Maybe<ResolversTypes['Subtask']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneSubtaskArgs, 'data' | 'where'>
   >;
   updateOneSyncConflict?: Resolver<
      Maybe<ResolversTypes['SyncConflict']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneSyncConflictArgs, 'data' | 'where'>
   >;
   updateOneSyncOperation?: Resolver<
      Maybe<ResolversTypes['SyncOperation']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneSyncOperationArgs, 'data' | 'where'>
   >;
   updateOneTask?: Resolver<
      Maybe<ResolversTypes['Task']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneTaskArgs, 'data' | 'where'>
   >;
   updateOneTaskDependency?: Resolver<
      Maybe<ResolversTypes['TaskDependency']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneTaskDependencyArgs, 'data' | 'where'>
   >;
   updateOneTaskMasterMetadata?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadata']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneTaskMasterMetadataArgs, 'data' | 'where'>
   >;
   updateOneTeam?: Resolver<
      Maybe<ResolversTypes['Team']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneTeamArgs, 'data' | 'where'>
   >;
   updateOneTeamMember?: Resolver<
      Maybe<ResolversTypes['TeamMember']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneTeamMemberArgs, 'data' | 'where'>
   >;
   updateOneTeamProject?: Resolver<
      Maybe<ResolversTypes['TeamProject']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneTeamProjectArgs, 'data' | 'where'>
   >;
   updateOneUser?: Resolver<
      Maybe<ResolversTypes['User']>,
      ParentType,
      ContextType,
      RequireFields<MutationUpdateOneUserArgs, 'data' | 'where'>
   >;
   upsertOneCycle?: Resolver<
      ResolversTypes['Cycle'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneCycleArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneIssue?: Resolver<
      ResolversTypes['Issue'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneIssueArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneIssueLabel?: Resolver<
      ResolversTypes['IssueLabel'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneIssueLabelArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneIssuePriority?: Resolver<
      ResolversTypes['IssuePriority'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneIssuePriorityArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneIssueStatus?: Resolver<
      ResolversTypes['IssueStatus'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneIssueStatusArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneLabel?: Resolver<
      ResolversTypes['Label'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneLabelArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneProject?: Resolver<
      ResolversTypes['Project'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneProjectArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneSubtask?: Resolver<
      ResolversTypes['Subtask'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneSubtaskArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneSyncConflict?: Resolver<
      ResolversTypes['SyncConflict'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneSyncConflictArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneSyncOperation?: Resolver<
      ResolversTypes['SyncOperation'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneSyncOperationArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneTask?: Resolver<
      ResolversTypes['Task'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneTaskArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneTaskDependency?: Resolver<
      ResolversTypes['TaskDependency'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneTaskDependencyArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneTaskMasterMetadata?: Resolver<
      ResolversTypes['TaskMasterMetadata'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneTaskMasterMetadataArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneTeam?: Resolver<
      ResolversTypes['Team'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneTeamArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneTeamMember?: Resolver<
      ResolversTypes['TeamMember'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneTeamMemberArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneTeamProject?: Resolver<
      ResolversTypes['TeamProject'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneTeamProjectArgs, 'create' | 'update' | 'where'>
   >;
   upsertOneUser?: Resolver<
      ResolversTypes['User'],
      ParentType,
      ContextType,
      RequireFields<MutationUpsertOneUserArgs, 'create' | 'update' | 'where'>
   >;
}>;

export type ProjectResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['ProjectCount']>, ParentType, ContextType>;
   color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   health?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   issues?: Resolver<
      Array<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      Partial<ProjectIssuesArgs>
   >;
   lead?: Resolver<
      Maybe<ResolversTypes['User']>,
      ParentType,
      ContextType,
      Partial<ProjectLeadArgs>
   >;
   leadId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   percentComplete?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   teams?: Resolver<
      Array<ResolversTypes['TeamProject']>,
      ParentType,
      ContextType,
      Partial<ProjectTeamsArgs>
   >;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectAvgAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['ProjectAvgAggregate'] = ResolversParentTypes['ProjectAvgAggregate'],
> = ResolversObject<{
   percentComplete?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectCountResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['ProjectCount'] = ResolversParentTypes['ProjectCount'],
> = ResolversObject<{
   issues?: Resolver<
      ResolversTypes['Int'],
      ParentType,
      ContextType,
      Partial<ProjectCountIssuesArgs>
   >;
   teams?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<ProjectCountTeamsArgs>>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['ProjectCountAggregate'] = ResolversParentTypes['ProjectCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   color?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   health?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   icon?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   identifier?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   leadId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   percentComplete?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   startDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['ProjectGroupBy'] = ResolversParentTypes['ProjectGroupBy'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['ProjectAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['ProjectCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['ProjectMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['ProjectMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['ProjectSumAggregate']>, ParentType, ContextType>;
   color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   health?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   leadId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   percentComplete?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['ProjectMaxAggregate'] = ResolversParentTypes['ProjectMaxAggregate'],
> = ResolversObject<{
   color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   health?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   leadId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   percentComplete?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['ProjectMinAggregate'] = ResolversParentTypes['ProjectMinAggregate'],
> = ResolversObject<{
   color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   health?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   leadId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   percentComplete?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectSumAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['ProjectSumAggregate'] = ResolversParentTypes['ProjectSumAggregate'],
> = ResolversObject<{
   percentComplete?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
   aggregateCycle?: Resolver<
      ResolversTypes['AggregateCycle'],
      ParentType,
      ContextType,
      Partial<QueryAggregateCycleArgs>
   >;
   aggregateIssue?: Resolver<
      ResolversTypes['AggregateIssue'],
      ParentType,
      ContextType,
      Partial<QueryAggregateIssueArgs>
   >;
   aggregateIssueLabel?: Resolver<
      ResolversTypes['AggregateIssueLabel'],
      ParentType,
      ContextType,
      Partial<QueryAggregateIssueLabelArgs>
   >;
   aggregateIssuePriority?: Resolver<
      ResolversTypes['AggregateIssuePriority'],
      ParentType,
      ContextType,
      Partial<QueryAggregateIssuePriorityArgs>
   >;
   aggregateIssueStatus?: Resolver<
      ResolversTypes['AggregateIssueStatus'],
      ParentType,
      ContextType,
      Partial<QueryAggregateIssueStatusArgs>
   >;
   aggregateLabel?: Resolver<
      ResolversTypes['AggregateLabel'],
      ParentType,
      ContextType,
      Partial<QueryAggregateLabelArgs>
   >;
   aggregateProject?: Resolver<
      ResolversTypes['AggregateProject'],
      ParentType,
      ContextType,
      Partial<QueryAggregateProjectArgs>
   >;
   aggregateSubtask?: Resolver<
      ResolversTypes['AggregateSubtask'],
      ParentType,
      ContextType,
      Partial<QueryAggregateSubtaskArgs>
   >;
   aggregateSyncConflict?: Resolver<
      ResolversTypes['AggregateSyncConflict'],
      ParentType,
      ContextType,
      Partial<QueryAggregateSyncConflictArgs>
   >;
   aggregateSyncOperation?: Resolver<
      ResolversTypes['AggregateSyncOperation'],
      ParentType,
      ContextType,
      Partial<QueryAggregateSyncOperationArgs>
   >;
   aggregateTask?: Resolver<
      ResolversTypes['AggregateTask'],
      ParentType,
      ContextType,
      Partial<QueryAggregateTaskArgs>
   >;
   aggregateTaskDependency?: Resolver<
      ResolversTypes['AggregateTaskDependency'],
      ParentType,
      ContextType,
      Partial<QueryAggregateTaskDependencyArgs>
   >;
   aggregateTaskMasterMetadata?: Resolver<
      ResolversTypes['AggregateTaskMasterMetadata'],
      ParentType,
      ContextType,
      Partial<QueryAggregateTaskMasterMetadataArgs>
   >;
   aggregateTeam?: Resolver<
      ResolversTypes['AggregateTeam'],
      ParentType,
      ContextType,
      Partial<QueryAggregateTeamArgs>
   >;
   aggregateTeamMember?: Resolver<
      ResolversTypes['AggregateTeamMember'],
      ParentType,
      ContextType,
      Partial<QueryAggregateTeamMemberArgs>
   >;
   aggregateTeamProject?: Resolver<
      ResolversTypes['AggregateTeamProject'],
      ParentType,
      ContextType,
      Partial<QueryAggregateTeamProjectArgs>
   >;
   aggregateUser?: Resolver<
      ResolversTypes['AggregateUser'],
      ParentType,
      ContextType,
      Partial<QueryAggregateUserArgs>
   >;
   cycle?: Resolver<
      Maybe<ResolversTypes['Cycle']>,
      ParentType,
      ContextType,
      RequireFields<QueryCycleArgs, 'where'>
   >;
   cycles?: Resolver<
      Array<ResolversTypes['Cycle']>,
      ParentType,
      ContextType,
      Partial<QueryCyclesArgs>
   >;
   findFirstCycle?: Resolver<
      Maybe<ResolversTypes['Cycle']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstCycleArgs>
   >;
   findFirstCycleOrThrow?: Resolver<
      Maybe<ResolversTypes['Cycle']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstCycleOrThrowArgs>
   >;
   findFirstIssue?: Resolver<
      Maybe<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstIssueArgs>
   >;
   findFirstIssueLabel?: Resolver<
      Maybe<ResolversTypes['IssueLabel']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstIssueLabelArgs>
   >;
   findFirstIssueLabelOrThrow?: Resolver<
      Maybe<ResolversTypes['IssueLabel']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstIssueLabelOrThrowArgs>
   >;
   findFirstIssueOrThrow?: Resolver<
      Maybe<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstIssueOrThrowArgs>
   >;
   findFirstIssuePriority?: Resolver<
      Maybe<ResolversTypes['IssuePriority']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstIssuePriorityArgs>
   >;
   findFirstIssuePriorityOrThrow?: Resolver<
      Maybe<ResolversTypes['IssuePriority']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstIssuePriorityOrThrowArgs>
   >;
   findFirstIssueStatus?: Resolver<
      Maybe<ResolversTypes['IssueStatus']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstIssueStatusArgs>
   >;
   findFirstIssueStatusOrThrow?: Resolver<
      Maybe<ResolversTypes['IssueStatus']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstIssueStatusOrThrowArgs>
   >;
   findFirstLabel?: Resolver<
      Maybe<ResolversTypes['Label']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstLabelArgs>
   >;
   findFirstLabelOrThrow?: Resolver<
      Maybe<ResolversTypes['Label']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstLabelOrThrowArgs>
   >;
   findFirstProject?: Resolver<
      Maybe<ResolversTypes['Project']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstProjectArgs>
   >;
   findFirstProjectOrThrow?: Resolver<
      Maybe<ResolversTypes['Project']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstProjectOrThrowArgs>
   >;
   findFirstSubtask?: Resolver<
      Maybe<ResolversTypes['Subtask']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstSubtaskArgs>
   >;
   findFirstSubtaskOrThrow?: Resolver<
      Maybe<ResolversTypes['Subtask']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstSubtaskOrThrowArgs>
   >;
   findFirstSyncConflict?: Resolver<
      Maybe<ResolversTypes['SyncConflict']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstSyncConflictArgs>
   >;
   findFirstSyncConflictOrThrow?: Resolver<
      Maybe<ResolversTypes['SyncConflict']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstSyncConflictOrThrowArgs>
   >;
   findFirstSyncOperation?: Resolver<
      Maybe<ResolversTypes['SyncOperation']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstSyncOperationArgs>
   >;
   findFirstSyncOperationOrThrow?: Resolver<
      Maybe<ResolversTypes['SyncOperation']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstSyncOperationOrThrowArgs>
   >;
   findFirstTask?: Resolver<
      Maybe<ResolversTypes['Task']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstTaskArgs>
   >;
   findFirstTaskDependency?: Resolver<
      Maybe<ResolversTypes['TaskDependency']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstTaskDependencyArgs>
   >;
   findFirstTaskDependencyOrThrow?: Resolver<
      Maybe<ResolversTypes['TaskDependency']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstTaskDependencyOrThrowArgs>
   >;
   findFirstTaskMasterMetadata?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadata']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstTaskMasterMetadataArgs>
   >;
   findFirstTaskMasterMetadataOrThrow?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadata']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstTaskMasterMetadataOrThrowArgs>
   >;
   findFirstTaskOrThrow?: Resolver<
      Maybe<ResolversTypes['Task']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstTaskOrThrowArgs>
   >;
   findFirstTeam?: Resolver<
      Maybe<ResolversTypes['Team']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstTeamArgs>
   >;
   findFirstTeamMember?: Resolver<
      Maybe<ResolversTypes['TeamMember']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstTeamMemberArgs>
   >;
   findFirstTeamMemberOrThrow?: Resolver<
      Maybe<ResolversTypes['TeamMember']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstTeamMemberOrThrowArgs>
   >;
   findFirstTeamOrThrow?: Resolver<
      Maybe<ResolversTypes['Team']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstTeamOrThrowArgs>
   >;
   findFirstTeamProject?: Resolver<
      Maybe<ResolversTypes['TeamProject']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstTeamProjectArgs>
   >;
   findFirstTeamProjectOrThrow?: Resolver<
      Maybe<ResolversTypes['TeamProject']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstTeamProjectOrThrowArgs>
   >;
   findFirstUser?: Resolver<
      Maybe<ResolversTypes['User']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstUserArgs>
   >;
   findFirstUserOrThrow?: Resolver<
      Maybe<ResolversTypes['User']>,
      ParentType,
      ContextType,
      Partial<QueryFindFirstUserOrThrowArgs>
   >;
   findManyTaskMasterMetadata?: Resolver<
      Array<ResolversTypes['TaskMasterMetadata']>,
      ParentType,
      ContextType,
      Partial<QueryFindManyTaskMasterMetadataArgs>
   >;
   findUniqueTaskMasterMetadata?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadata']>,
      ParentType,
      ContextType,
      RequireFields<QueryFindUniqueTaskMasterMetadataArgs, 'where'>
   >;
   findUniqueTaskMasterMetadataOrThrow?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadata']>,
      ParentType,
      ContextType,
      RequireFields<QueryFindUniqueTaskMasterMetadataOrThrowArgs, 'where'>
   >;
   getCycle?: Resolver<
      Maybe<ResolversTypes['Cycle']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetCycleArgs, 'where'>
   >;
   getIssue?: Resolver<
      Maybe<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetIssueArgs, 'where'>
   >;
   getIssueLabel?: Resolver<
      Maybe<ResolversTypes['IssueLabel']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetIssueLabelArgs, 'where'>
   >;
   getIssuePriority?: Resolver<
      Maybe<ResolversTypes['IssuePriority']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetIssuePriorityArgs, 'where'>
   >;
   getIssueStatus?: Resolver<
      Maybe<ResolversTypes['IssueStatus']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetIssueStatusArgs, 'where'>
   >;
   getLabel?: Resolver<
      Maybe<ResolversTypes['Label']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetLabelArgs, 'where'>
   >;
   getProject?: Resolver<
      Maybe<ResolversTypes['Project']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetProjectArgs, 'where'>
   >;
   getSubtask?: Resolver<
      Maybe<ResolversTypes['Subtask']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetSubtaskArgs, 'where'>
   >;
   getSyncConflict?: Resolver<
      Maybe<ResolversTypes['SyncConflict']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetSyncConflictArgs, 'where'>
   >;
   getSyncOperation?: Resolver<
      Maybe<ResolversTypes['SyncOperation']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetSyncOperationArgs, 'where'>
   >;
   getTask?: Resolver<
      Maybe<ResolversTypes['Task']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetTaskArgs, 'where'>
   >;
   getTaskDependency?: Resolver<
      Maybe<ResolversTypes['TaskDependency']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetTaskDependencyArgs, 'where'>
   >;
   getTeam?: Resolver<
      Maybe<ResolversTypes['Team']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetTeamArgs, 'where'>
   >;
   getTeamMember?: Resolver<
      Maybe<ResolversTypes['TeamMember']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetTeamMemberArgs, 'where'>
   >;
   getTeamProject?: Resolver<
      Maybe<ResolversTypes['TeamProject']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetTeamProjectArgs, 'where'>
   >;
   getUser?: Resolver<
      Maybe<ResolversTypes['User']>,
      ParentType,
      ContextType,
      RequireFields<QueryGetUserArgs, 'where'>
   >;
   groupByCycle?: Resolver<
      Array<ResolversTypes['CycleGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByCycleArgs, 'by'>
   >;
   groupByIssue?: Resolver<
      Array<ResolversTypes['IssueGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByIssueArgs, 'by'>
   >;
   groupByIssueLabel?: Resolver<
      Array<ResolversTypes['IssueLabelGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByIssueLabelArgs, 'by'>
   >;
   groupByIssuePriority?: Resolver<
      Array<ResolversTypes['IssuePriorityGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByIssuePriorityArgs, 'by'>
   >;
   groupByIssueStatus?: Resolver<
      Array<ResolversTypes['IssueStatusGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByIssueStatusArgs, 'by'>
   >;
   groupByLabel?: Resolver<
      Array<ResolversTypes['LabelGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByLabelArgs, 'by'>
   >;
   groupByProject?: Resolver<
      Array<ResolversTypes['ProjectGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByProjectArgs, 'by'>
   >;
   groupBySubtask?: Resolver<
      Array<ResolversTypes['SubtaskGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupBySubtaskArgs, 'by'>
   >;
   groupBySyncConflict?: Resolver<
      Array<ResolversTypes['SyncConflictGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupBySyncConflictArgs, 'by'>
   >;
   groupBySyncOperation?: Resolver<
      Array<ResolversTypes['SyncOperationGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupBySyncOperationArgs, 'by'>
   >;
   groupByTask?: Resolver<
      Array<ResolversTypes['TaskGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByTaskArgs, 'by'>
   >;
   groupByTaskDependency?: Resolver<
      Array<ResolversTypes['TaskDependencyGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByTaskDependencyArgs, 'by'>
   >;
   groupByTaskMasterMetadata?: Resolver<
      Array<ResolversTypes['TaskMasterMetadataGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByTaskMasterMetadataArgs, 'by'>
   >;
   groupByTeam?: Resolver<
      Array<ResolversTypes['TeamGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByTeamArgs, 'by'>
   >;
   groupByTeamMember?: Resolver<
      Array<ResolversTypes['TeamMemberGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByTeamMemberArgs, 'by'>
   >;
   groupByTeamProject?: Resolver<
      Array<ResolversTypes['TeamProjectGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByTeamProjectArgs, 'by'>
   >;
   groupByUser?: Resolver<
      Array<ResolversTypes['UserGroupBy']>,
      ParentType,
      ContextType,
      RequireFields<QueryGroupByUserArgs, 'by'>
   >;
   issue?: Resolver<
      Maybe<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      RequireFields<QueryIssueArgs, 'where'>
   >;
   issueHealthCheck?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issueLabel?: Resolver<
      Maybe<ResolversTypes['IssueLabel']>,
      ParentType,
      ContextType,
      RequireFields<QueryIssueLabelArgs, 'where'>
   >;
   issueLabels?: Resolver<
      Array<ResolversTypes['IssueLabel']>,
      ParentType,
      ContextType,
      Partial<QueryIssueLabelsArgs>
   >;
   issuePriorities?: Resolver<
      Array<ResolversTypes['IssuePriority']>,
      ParentType,
      ContextType,
      Partial<QueryIssuePrioritiesArgs>
   >;
   issuePriority?: Resolver<
      Maybe<ResolversTypes['IssuePriority']>,
      ParentType,
      ContextType,
      RequireFields<QueryIssuePriorityArgs, 'where'>
   >;
   issueStatus?: Resolver<
      Maybe<ResolversTypes['IssueStatus']>,
      ParentType,
      ContextType,
      RequireFields<QueryIssueStatusArgs, 'where'>
   >;
   issueStatuses?: Resolver<
      Array<ResolversTypes['IssueStatus']>,
      ParentType,
      ContextType,
      Partial<QueryIssueStatusesArgs>
   >;
   issues?: Resolver<
      Array<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      Partial<QueryIssuesArgs>
   >;
   issuesStats?: Resolver<ResolversTypes['IssueStats'], ParentType, ContextType>;
   label?: Resolver<
      Maybe<ResolversTypes['Label']>,
      ParentType,
      ContextType,
      RequireFields<QueryLabelArgs, 'where'>
   >;
   labels?: Resolver<
      Array<ResolversTypes['Label']>,
      ParentType,
      ContextType,
      Partial<QueryLabelsArgs>
   >;
   project?: Resolver<
      Maybe<ResolversTypes['Project']>,
      ParentType,
      ContextType,
      RequireFields<QueryProjectArgs, 'where'>
   >;
   projects?: Resolver<
      Array<ResolversTypes['Project']>,
      ParentType,
      ContextType,
      Partial<QueryProjectsArgs>
   >;
   subtask?: Resolver<
      Maybe<ResolversTypes['Subtask']>,
      ParentType,
      ContextType,
      RequireFields<QuerySubtaskArgs, 'where'>
   >;
   subtasks?: Resolver<
      Array<ResolversTypes['Subtask']>,
      ParentType,
      ContextType,
      Partial<QuerySubtasksArgs>
   >;
   syncConflict?: Resolver<
      Maybe<ResolversTypes['SyncConflict']>,
      ParentType,
      ContextType,
      RequireFields<QuerySyncConflictArgs, 'where'>
   >;
   syncConflicts?: Resolver<
      Array<ResolversTypes['SyncConflict']>,
      ParentType,
      ContextType,
      Partial<QuerySyncConflictsArgs>
   >;
   syncOperation?: Resolver<
      Maybe<ResolversTypes['SyncOperation']>,
      ParentType,
      ContextType,
      RequireFields<QuerySyncOperationArgs, 'where'>
   >;
   syncOperations?: Resolver<
      Array<ResolversTypes['SyncOperation']>,
      ParentType,
      ContextType,
      Partial<QuerySyncOperationsArgs>
   >;
   task?: Resolver<
      Maybe<ResolversTypes['Task']>,
      ParentType,
      ContextType,
      RequireFields<QueryTaskArgs, 'where'>
   >;
   taskDependencies?: Resolver<
      Array<ResolversTypes['TaskDependency']>,
      ParentType,
      ContextType,
      Partial<QueryTaskDependenciesArgs>
   >;
   taskDependency?: Resolver<
      Maybe<ResolversTypes['TaskDependency']>,
      ParentType,
      ContextType,
      RequireFields<QueryTaskDependencyArgs, 'where'>
   >;
   tasks?: Resolver<
      Array<ResolversTypes['Task']>,
      ParentType,
      ContextType,
      Partial<QueryTasksArgs>
   >;
   team?: Resolver<
      Maybe<ResolversTypes['Team']>,
      ParentType,
      ContextType,
      RequireFields<QueryTeamArgs, 'where'>
   >;
   teamMember?: Resolver<
      Maybe<ResolversTypes['TeamMember']>,
      ParentType,
      ContextType,
      RequireFields<QueryTeamMemberArgs, 'where'>
   >;
   teamMembers?: Resolver<
      Array<ResolversTypes['TeamMember']>,
      ParentType,
      ContextType,
      Partial<QueryTeamMembersArgs>
   >;
   teamProject?: Resolver<
      Maybe<ResolversTypes['TeamProject']>,
      ParentType,
      ContextType,
      RequireFields<QueryTeamProjectArgs, 'where'>
   >;
   teamProjects?: Resolver<
      Array<ResolversTypes['TeamProject']>,
      ParentType,
      ContextType,
      Partial<QueryTeamProjectsArgs>
   >;
   teams?: Resolver<
      Array<ResolversTypes['Team']>,
      ParentType,
      ContextType,
      Partial<QueryTeamsArgs>
   >;
   user?: Resolver<
      Maybe<ResolversTypes['User']>,
      ParentType,
      ContextType,
      RequireFields<QueryUserArgs, 'where'>
   >;
   users?: Resolver<
      Array<ResolversTypes['User']>,
      ParentType,
      ContextType,
      Partial<QueryUsersArgs>
   >;
}>;

export type SubtaskResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Subtask'] = ResolversParentTypes['Subtask'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['SubtaskCount']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   dependencies?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   issues?: Resolver<
      Array<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      Partial<SubtaskIssuesArgs>
   >;
   parentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   parentTask?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubtaskAvgAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SubtaskAvgAggregate'] = ResolversParentTypes['SubtaskAvgAggregate'],
> = ResolversObject<{
   parentId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubtaskCountResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['SubtaskCount'] = ResolversParentTypes['SubtaskCount'],
> = ResolversObject<{
   issues?: Resolver<
      ResolversTypes['Int'],
      ParentType,
      ContextType,
      Partial<SubtaskCountIssuesArgs>
   >;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubtaskCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SubtaskCountAggregate'] = ResolversParentTypes['SubtaskCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   dependencies?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   details?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   parentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   testStrategy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   title?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubtaskGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SubtaskGroupBy'] = ResolversParentTypes['SubtaskGroupBy'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['SubtaskAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['SubtaskCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['SubtaskMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['SubtaskMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['SubtaskSumAggregate']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   dependencies?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   parentId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubtaskMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SubtaskMaxAggregate'] = ResolversParentTypes['SubtaskMaxAggregate'],
> = ResolversObject<{
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   dependencies?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubtaskMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SubtaskMinAggregate'] = ResolversParentTypes['SubtaskMinAggregate'],
> = ResolversObject<{
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   dependencies?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubtaskSumAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SubtaskSumAggregate'] = ResolversParentTypes['SubtaskSumAggregate'],
> = ResolversObject<{
   parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncConflictResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['SyncConflict'] = ResolversParentTypes['SyncConflict'],
> = ResolversObject<{
   cliVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   operationType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   resolved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
   resolvedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   resolvedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   taskId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   uiVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncConflictCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncConflictCountAggregate'] = ResolversParentTypes['SyncConflictCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   cliVersion?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   operationType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   resolution?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   resolved?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   resolvedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   resolvedBy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   taskId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   uiVersion?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncConflictGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncConflictGroupBy'] = ResolversParentTypes['SyncConflictGroupBy'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['SyncConflictCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['SyncConflictMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['SyncConflictMinAggregate']>, ParentType, ContextType>;
   cliVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   operationType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   resolved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
   resolvedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   resolvedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   taskId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   uiVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncConflictMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncConflictMaxAggregate'] = ResolversParentTypes['SyncConflictMaxAggregate'],
> = ResolversObject<{
   cliVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   operationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   resolved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
   resolvedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   resolvedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   taskId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   timestamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   uiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncConflictMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncConflictMinAggregate'] = ResolversParentTypes['SyncConflictMinAggregate'],
> = ResolversObject<{
   cliVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   operationType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   resolution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   resolved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
   resolvedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   resolvedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   taskId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   timestamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   uiVersion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncOperationResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['SyncOperation'] = ResolversParentTypes['SyncOperation'],
> = ResolversObject<{
   completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   maxRetries?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   retryCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   rollbackData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   taskIds?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncOperationAvgAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncOperationAvgAggregate'] = ResolversParentTypes['SyncOperationAvgAggregate'],
> = ResolversObject<{
   maxRetries?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   retryCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncOperationCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncOperationCountAggregate'] = ResolversParentTypes['SyncOperationCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   completedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   data?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   error?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   maxRetries?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   metadata?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   retryCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   rollbackData?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   source?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   taskIds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncOperationGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncOperationGroupBy'] = ResolversParentTypes['SyncOperationGroupBy'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['SyncOperationAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['SyncOperationCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['SyncOperationMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['SyncOperationMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['SyncOperationSumAggregate']>, ParentType, ContextType>;
   completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   data?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   maxRetries?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   retryCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   rollbackData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   taskIds?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   timestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncOperationMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncOperationMaxAggregate'] = ResolversParentTypes['SyncOperationMaxAggregate'],
> = ResolversObject<{
   completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   maxRetries?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   retryCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   rollbackData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   taskIds?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   timestamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncOperationMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncOperationMinAggregate'] = ResolversParentTypes['SyncOperationMinAggregate'],
> = ResolversObject<{
   completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   maxRetries?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   retryCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   rollbackData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   taskIds?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   timestamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SyncOperationSumAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['SyncOperationSumAggregate'] = ResolversParentTypes['SyncOperationSumAggregate'],
> = ResolversObject<{
   maxRetries?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   retryCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['TaskCount']>, ParentType, ContextType>;
   complexity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   dependencies?: Resolver<
      Array<ResolversTypes['TaskDependency']>,
      ParentType,
      ContextType,
      Partial<TaskDependenciesArgs>
   >;
   dependents?: Resolver<
      Array<ResolversTypes['TaskDependency']>,
      ParentType,
      ContextType,
      Partial<TaskDependentsArgs>
   >;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   issues?: Resolver<
      Array<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      Partial<TaskIssuesArgs>
   >;
   priority?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   subtasks?: Resolver<
      Array<ResolversTypes['Subtask']>,
      ParentType,
      ContextType,
      Partial<TaskSubtasksArgs>
   >;
   testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskAvgAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskAvgAggregate'] = ResolversParentTypes['TaskAvgAggregate'],
> = ResolversObject<{
   complexity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskCountResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['TaskCount'] = ResolversParentTypes['TaskCount'],
> = ResolversObject<{
   dependencies?: Resolver<
      ResolversTypes['Int'],
      ParentType,
      ContextType,
      Partial<TaskCountDependenciesArgs>
   >;
   dependents?: Resolver<
      ResolversTypes['Int'],
      ParentType,
      ContextType,
      Partial<TaskCountDependentsArgs>
   >;
   issues?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<TaskCountIssuesArgs>>;
   subtasks?: Resolver<
      ResolversTypes['Int'],
      ParentType,
      ContextType,
      Partial<TaskCountSubtasksArgs>
   >;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskCountAggregate'] = ResolversParentTypes['TaskCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   complexity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   details?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   priority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   testStrategy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   title?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskDependencyResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskDependency'] = ResolversParentTypes['TaskDependency'],
> = ResolversObject<{
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   dependsOn?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
   dependsOnId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   task?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
   taskId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskDependencyAvgAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskDependencyAvgAggregate'] = ResolversParentTypes['TaskDependencyAvgAggregate'],
> = ResolversObject<{
   dependsOnId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   taskId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskDependencyCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskDependencyCountAggregate'] = ResolversParentTypes['TaskDependencyCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   dependsOnId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   taskId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskDependencyGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskDependencyGroupBy'] = ResolversParentTypes['TaskDependencyGroupBy'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['TaskDependencyAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<
      Maybe<ResolversTypes['TaskDependencyCountAggregate']>,
      ParentType,
      ContextType
   >;
   _max?: Resolver<Maybe<ResolversTypes['TaskDependencyMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['TaskDependencyMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['TaskDependencySumAggregate']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   dependsOnId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   taskId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskDependencyMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskDependencyMaxAggregate'] = ResolversParentTypes['TaskDependencyMaxAggregate'],
> = ResolversObject<{
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   dependsOnId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   taskId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskDependencyMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskDependencyMinAggregate'] = ResolversParentTypes['TaskDependencyMinAggregate'],
> = ResolversObject<{
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   dependsOnId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   taskId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskDependencySumAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskDependencySumAggregate'] = ResolversParentTypes['TaskDependencySumAggregate'],
> = ResolversObject<{
   dependsOnId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   taskId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['TaskGroupBy'] = ResolversParentTypes['TaskGroupBy'],
> = ResolversObject<{
   _avg?: Resolver<Maybe<ResolversTypes['TaskAvgAggregate']>, ParentType, ContextType>;
   _count?: Resolver<Maybe<ResolversTypes['TaskCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['TaskMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['TaskMinAggregate']>, ParentType, ContextType>;
   _sum?: Resolver<Maybe<ResolversTypes['TaskSumAggregate']>, ParentType, ContextType>;
   complexity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   priority?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskMasterMetadataResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskMasterMetadata'] = ResolversParentTypes['TaskMasterMetadata'],
> = ResolversObject<{
   created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskMasterMetadataAvgAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskMasterMetadataAvgAggregate'] = ResolversParentTypes['TaskMasterMetadataAvgAggregate'],
> = ResolversObject<{
   id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskMasterMetadataCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskMasterMetadataCountAggregate'] = ResolversParentTypes['TaskMasterMetadataCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   created?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskMasterMetadataGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskMasterMetadataGroupBy'] = ResolversParentTypes['TaskMasterMetadataGroupBy'],
> = ResolversObject<{
   _avg?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadataAvgAggregate']>,
      ParentType,
      ContextType
   >;
   _count?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadataCountAggregate']>,
      ParentType,
      ContextType
   >;
   _max?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadataMaxAggregate']>,
      ParentType,
      ContextType
   >;
   _min?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadataMinAggregate']>,
      ParentType,
      ContextType
   >;
   _sum?: Resolver<
      Maybe<ResolversTypes['TaskMasterMetadataSumAggregate']>,
      ParentType,
      ContextType
   >;
   created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskMasterMetadataMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskMasterMetadataMaxAggregate'] = ResolversParentTypes['TaskMasterMetadataMaxAggregate'],
> = ResolversObject<{
   created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   updated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskMasterMetadataMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskMasterMetadataMinAggregate'] = ResolversParentTypes['TaskMasterMetadataMinAggregate'],
> = ResolversObject<{
   created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   updated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskMasterMetadataSumAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskMasterMetadataSumAggregate'] = ResolversParentTypes['TaskMasterMetadataSumAggregate'],
> = ResolversObject<{
   id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskMaxAggregate'] = ResolversParentTypes['TaskMaxAggregate'],
> = ResolversObject<{
   complexity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   priority?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskMinAggregate'] = ResolversParentTypes['TaskMinAggregate'],
> = ResolversObject<{
   complexity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   priority?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskSumAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TaskSumAggregate'] = ResolversParentTypes['TaskSumAggregate'],
> = ResolversObject<{
   complexity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['TeamCount']>, ParentType, ContextType>;
   color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   cycles?: Resolver<
      Array<ResolversTypes['Cycle']>,
      ParentType,
      ContextType,
      Partial<TeamCyclesArgs>
   >;
   icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   joined?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
   members?: Resolver<
      Array<ResolversTypes['TeamMember']>,
      ParentType,
      ContextType,
      Partial<TeamMembersArgs>
   >;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   projects?: Resolver<
      Array<ResolversTypes['TeamProject']>,
      ParentType,
      ContextType,
      Partial<TeamProjectsArgs>
   >;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamCountResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['TeamCount'] = ResolversParentTypes['TeamCount'],
> = ResolversObject<{
   cycles?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<TeamCountCyclesArgs>>;
   members?: Resolver<
      ResolversTypes['Int'],
      ParentType,
      ContextType,
      Partial<TeamCountMembersArgs>
   >;
   projects?: Resolver<
      ResolversTypes['Int'],
      ParentType,
      ContextType,
      Partial<TeamCountProjectsArgs>
   >;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TeamCountAggregate'] = ResolversParentTypes['TeamCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   color?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   icon?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   joined?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['TeamGroupBy'] = ResolversParentTypes['TeamGroupBy'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['TeamCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['TeamMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['TeamMinAggregate']>, ParentType, ContextType>;
   color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   icon?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   joined?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TeamMaxAggregate'] = ResolversParentTypes['TeamMaxAggregate'],
> = ResolversObject<{
   color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   joined?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMemberResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['TeamMember'] = ResolversParentTypes['TeamMember'],
> = ResolversObject<{
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   team?: Resolver<ResolversTypes['Team'], ParentType, ContextType>;
   teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
   userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMemberCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TeamMemberCountAggregate'] = ResolversParentTypes['TeamMemberCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMemberGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TeamMemberGroupBy'] = ResolversParentTypes['TeamMemberGroupBy'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['TeamMemberCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['TeamMemberMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['TeamMemberMinAggregate']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMemberMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TeamMemberMaxAggregate'] = ResolversParentTypes['TeamMemberMaxAggregate'],
> = ResolversObject<{
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMemberMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TeamMemberMinAggregate'] = ResolversParentTypes['TeamMemberMinAggregate'],
> = ResolversObject<{
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TeamMinAggregate'] = ResolversParentTypes['TeamMinAggregate'],
> = ResolversObject<{
   color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   joined?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamProjectResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['TeamProject'] = ResolversParentTypes['TeamProject'],
> = ResolversObject<{
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
   projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   team?: Resolver<ResolversTypes['Team'], ParentType, ContextType>;
   teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamProjectCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TeamProjectCountAggregate'] = ResolversParentTypes['TeamProjectCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamProjectGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TeamProjectGroupBy'] = ResolversParentTypes['TeamProjectGroupBy'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['TeamProjectCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['TeamProjectMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['TeamProjectMinAggregate']>, ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   projectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   teamId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamProjectMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TeamProjectMaxAggregate'] = ResolversParentTypes['TeamProjectMaxAggregate'],
> = ResolversObject<{
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   projectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamProjectMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['TeamProjectMinAggregate'] = ResolversParentTypes['TeamProjectMinAggregate'],
> = ResolversObject<{
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   projectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   teamId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['UserCount']>, ParentType, ContextType>;
   assignedIssues?: Resolver<
      Array<ResolversTypes['Issue']>,
      ParentType,
      ContextType,
      Partial<UserAssignedIssuesArgs>
   >;
   avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   joinedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   ledProjects?: Resolver<
      Array<ResolversTypes['Project']>,
      ParentType,
      ContextType,
      Partial<UserLedProjectsArgs>
   >;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   teamIds?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   teams?: Resolver<
      Array<ResolversTypes['TeamMember']>,
      ParentType,
      ContextType,
      Partial<UserTeamsArgs>
   >;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCountResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['UserCount'] = ResolversParentTypes['UserCount'],
> = ResolversObject<{
   assignedIssues?: Resolver<
      ResolversTypes['Int'],
      ParentType,
      ContextType,
      Partial<UserCountAssignedIssuesArgs>
   >;
   ledProjects?: Resolver<
      ResolversTypes['Int'],
      ParentType,
      ContextType,
      Partial<UserCountLedProjectsArgs>
   >;
   teams?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<UserCountTeamsArgs>>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCountAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['UserCountAggregate'] = ResolversParentTypes['UserCountAggregate'],
> = ResolversObject<{
   _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   avatarUrl?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   email?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   joinedDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   role?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   teamIds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserGroupByResolvers<
   ContextType = GraphQLContext,
   ParentType extends ResolversParentTypes['UserGroupBy'] = ResolversParentTypes['UserGroupBy'],
> = ResolversObject<{
   _count?: Resolver<Maybe<ResolversTypes['UserCountAggregate']>, ParentType, ContextType>;
   _max?: Resolver<Maybe<ResolversTypes['UserMaxAggregate']>, ParentType, ContextType>;
   _min?: Resolver<Maybe<ResolversTypes['UserMinAggregate']>, ParentType, ContextType>;
   avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   joinedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   teamIds?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
   updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMaxAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['UserMaxAggregate'] = ResolversParentTypes['UserMaxAggregate'],
> = ResolversObject<{
   avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   joinedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   teamIds?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMinAggregateResolvers<
   ContextType = GraphQLContext,
   ParentType extends
      ResolversParentTypes['UserMinAggregate'] = ResolversParentTypes['UserMinAggregate'],
> = ResolversObject<{
   avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   joinedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   teamIds?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
   updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
   __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GraphQLContext> = ResolversObject<{
   AffectedRowsOutput?: AffectedRowsOutputResolvers<ContextType>;
   AggregateCycle?: AggregateCycleResolvers<ContextType>;
   AggregateIssue?: AggregateIssueResolvers<ContextType>;
   AggregateIssueLabel?: AggregateIssueLabelResolvers<ContextType>;
   AggregateIssuePriority?: AggregateIssuePriorityResolvers<ContextType>;
   AggregateIssueStatus?: AggregateIssueStatusResolvers<ContextType>;
   AggregateLabel?: AggregateLabelResolvers<ContextType>;
   AggregateProject?: AggregateProjectResolvers<ContextType>;
   AggregateSubtask?: AggregateSubtaskResolvers<ContextType>;
   AggregateSyncConflict?: AggregateSyncConflictResolvers<ContextType>;
   AggregateSyncOperation?: AggregateSyncOperationResolvers<ContextType>;
   AggregateTask?: AggregateTaskResolvers<ContextType>;
   AggregateTaskDependency?: AggregateTaskDependencyResolvers<ContextType>;
   AggregateTaskMasterMetadata?: AggregateTaskMasterMetadataResolvers<ContextType>;
   AggregateTeam?: AggregateTeamResolvers<ContextType>;
   AggregateTeamMember?: AggregateTeamMemberResolvers<ContextType>;
   AggregateTeamProject?: AggregateTeamProjectResolvers<ContextType>;
   AggregateUser?: AggregateUserResolvers<ContextType>;
   CreateManyAndReturnCycle?: CreateManyAndReturnCycleResolvers<ContextType>;
   CreateManyAndReturnIssue?: CreateManyAndReturnIssueResolvers<ContextType>;
   CreateManyAndReturnIssueLabel?: CreateManyAndReturnIssueLabelResolvers<ContextType>;
   CreateManyAndReturnIssuePriority?: CreateManyAndReturnIssuePriorityResolvers<ContextType>;
   CreateManyAndReturnIssueStatus?: CreateManyAndReturnIssueStatusResolvers<ContextType>;
   CreateManyAndReturnLabel?: CreateManyAndReturnLabelResolvers<ContextType>;
   CreateManyAndReturnProject?: CreateManyAndReturnProjectResolvers<ContextType>;
   CreateManyAndReturnSubtask?: CreateManyAndReturnSubtaskResolvers<ContextType>;
   CreateManyAndReturnSyncConflict?: CreateManyAndReturnSyncConflictResolvers<ContextType>;
   CreateManyAndReturnSyncOperation?: CreateManyAndReturnSyncOperationResolvers<ContextType>;
   CreateManyAndReturnTask?: CreateManyAndReturnTaskResolvers<ContextType>;
   CreateManyAndReturnTaskDependency?: CreateManyAndReturnTaskDependencyResolvers<ContextType>;
   CreateManyAndReturnTaskMasterMetadata?: CreateManyAndReturnTaskMasterMetadataResolvers<ContextType>;
   CreateManyAndReturnTeam?: CreateManyAndReturnTeamResolvers<ContextType>;
   CreateManyAndReturnTeamMember?: CreateManyAndReturnTeamMemberResolvers<ContextType>;
   CreateManyAndReturnTeamProject?: CreateManyAndReturnTeamProjectResolvers<ContextType>;
   CreateManyAndReturnUser?: CreateManyAndReturnUserResolvers<ContextType>;
   Cycle?: CycleResolvers<ContextType>;
   CycleAvgAggregate?: CycleAvgAggregateResolvers<ContextType>;
   CycleCount?: CycleCountResolvers<ContextType>;
   CycleCountAggregate?: CycleCountAggregateResolvers<ContextType>;
   CycleGroupBy?: CycleGroupByResolvers<ContextType>;
   CycleMaxAggregate?: CycleMaxAggregateResolvers<ContextType>;
   CycleMinAggregate?: CycleMinAggregateResolvers<ContextType>;
   CycleSumAggregate?: CycleSumAggregateResolvers<ContextType>;
   DateTime?: GraphQLScalarType;
   Issue?: IssueResolvers<ContextType>;
   IssueAvgAggregate?: IssueAvgAggregateResolvers<ContextType>;
   IssueCount?: IssueCountResolvers<ContextType>;
   IssueCountAggregate?: IssueCountAggregateResolvers<ContextType>;
   IssueGroupBy?: IssueGroupByResolvers<ContextType>;
   IssueLabel?: IssueLabelResolvers<ContextType>;
   IssueLabelCountAggregate?: IssueLabelCountAggregateResolvers<ContextType>;
   IssueLabelGroupBy?: IssueLabelGroupByResolvers<ContextType>;
   IssueLabelMaxAggregate?: IssueLabelMaxAggregateResolvers<ContextType>;
   IssueLabelMinAggregate?: IssueLabelMinAggregateResolvers<ContextType>;
   IssueMaxAggregate?: IssueMaxAggregateResolvers<ContextType>;
   IssueMinAggregate?: IssueMinAggregateResolvers<ContextType>;
   IssuePriority?: IssuePriorityResolvers<ContextType>;
   IssuePriorityAvgAggregate?: IssuePriorityAvgAggregateResolvers<ContextType>;
   IssuePriorityCount?: IssuePriorityCountResolvers<ContextType>;
   IssuePriorityCountAggregate?: IssuePriorityCountAggregateResolvers<ContextType>;
   IssuePriorityGroupBy?: IssuePriorityGroupByResolvers<ContextType>;
   IssuePriorityMaxAggregate?: IssuePriorityMaxAggregateResolvers<ContextType>;
   IssuePriorityMinAggregate?: IssuePriorityMinAggregateResolvers<ContextType>;
   IssuePrioritySumAggregate?: IssuePrioritySumAggregateResolvers<ContextType>;
   IssueStats?: IssueStatsResolvers<ContextType>;
   IssueStatus?: IssueStatusResolvers<ContextType>;
   IssueStatusCount?: IssueStatusCountResolvers<ContextType>;
   IssueStatusCountAggregate?: IssueStatusCountAggregateResolvers<ContextType>;
   IssueStatusGroupBy?: IssueStatusGroupByResolvers<ContextType>;
   IssueStatusMaxAggregate?: IssueStatusMaxAggregateResolvers<ContextType>;
   IssueStatusMinAggregate?: IssueStatusMinAggregateResolvers<ContextType>;
   IssueSumAggregate?: IssueSumAggregateResolvers<ContextType>;
   Label?: LabelResolvers<ContextType>;
   LabelCount?: LabelCountResolvers<ContextType>;
   LabelCountAggregate?: LabelCountAggregateResolvers<ContextType>;
   LabelGroupBy?: LabelGroupByResolvers<ContextType>;
   LabelMaxAggregate?: LabelMaxAggregateResolvers<ContextType>;
   LabelMinAggregate?: LabelMinAggregateResolvers<ContextType>;
   Mutation?: MutationResolvers<ContextType>;
   Project?: ProjectResolvers<ContextType>;
   ProjectAvgAggregate?: ProjectAvgAggregateResolvers<ContextType>;
   ProjectCount?: ProjectCountResolvers<ContextType>;
   ProjectCountAggregate?: ProjectCountAggregateResolvers<ContextType>;
   ProjectGroupBy?: ProjectGroupByResolvers<ContextType>;
   ProjectMaxAggregate?: ProjectMaxAggregateResolvers<ContextType>;
   ProjectMinAggregate?: ProjectMinAggregateResolvers<ContextType>;
   ProjectSumAggregate?: ProjectSumAggregateResolvers<ContextType>;
   Query?: QueryResolvers<ContextType>;
   Subtask?: SubtaskResolvers<ContextType>;
   SubtaskAvgAggregate?: SubtaskAvgAggregateResolvers<ContextType>;
   SubtaskCount?: SubtaskCountResolvers<ContextType>;
   SubtaskCountAggregate?: SubtaskCountAggregateResolvers<ContextType>;
   SubtaskGroupBy?: SubtaskGroupByResolvers<ContextType>;
   SubtaskMaxAggregate?: SubtaskMaxAggregateResolvers<ContextType>;
   SubtaskMinAggregate?: SubtaskMinAggregateResolvers<ContextType>;
   SubtaskSumAggregate?: SubtaskSumAggregateResolvers<ContextType>;
   SyncConflict?: SyncConflictResolvers<ContextType>;
   SyncConflictCountAggregate?: SyncConflictCountAggregateResolvers<ContextType>;
   SyncConflictGroupBy?: SyncConflictGroupByResolvers<ContextType>;
   SyncConflictMaxAggregate?: SyncConflictMaxAggregateResolvers<ContextType>;
   SyncConflictMinAggregate?: SyncConflictMinAggregateResolvers<ContextType>;
   SyncOperation?: SyncOperationResolvers<ContextType>;
   SyncOperationAvgAggregate?: SyncOperationAvgAggregateResolvers<ContextType>;
   SyncOperationCountAggregate?: SyncOperationCountAggregateResolvers<ContextType>;
   SyncOperationGroupBy?: SyncOperationGroupByResolvers<ContextType>;
   SyncOperationMaxAggregate?: SyncOperationMaxAggregateResolvers<ContextType>;
   SyncOperationMinAggregate?: SyncOperationMinAggregateResolvers<ContextType>;
   SyncOperationSumAggregate?: SyncOperationSumAggregateResolvers<ContextType>;
   Task?: TaskResolvers<ContextType>;
   TaskAvgAggregate?: TaskAvgAggregateResolvers<ContextType>;
   TaskCount?: TaskCountResolvers<ContextType>;
   TaskCountAggregate?: TaskCountAggregateResolvers<ContextType>;
   TaskDependency?: TaskDependencyResolvers<ContextType>;
   TaskDependencyAvgAggregate?: TaskDependencyAvgAggregateResolvers<ContextType>;
   TaskDependencyCountAggregate?: TaskDependencyCountAggregateResolvers<ContextType>;
   TaskDependencyGroupBy?: TaskDependencyGroupByResolvers<ContextType>;
   TaskDependencyMaxAggregate?: TaskDependencyMaxAggregateResolvers<ContextType>;
   TaskDependencyMinAggregate?: TaskDependencyMinAggregateResolvers<ContextType>;
   TaskDependencySumAggregate?: TaskDependencySumAggregateResolvers<ContextType>;
   TaskGroupBy?: TaskGroupByResolvers<ContextType>;
   TaskMasterMetadata?: TaskMasterMetadataResolvers<ContextType>;
   TaskMasterMetadataAvgAggregate?: TaskMasterMetadataAvgAggregateResolvers<ContextType>;
   TaskMasterMetadataCountAggregate?: TaskMasterMetadataCountAggregateResolvers<ContextType>;
   TaskMasterMetadataGroupBy?: TaskMasterMetadataGroupByResolvers<ContextType>;
   TaskMasterMetadataMaxAggregate?: TaskMasterMetadataMaxAggregateResolvers<ContextType>;
   TaskMasterMetadataMinAggregate?: TaskMasterMetadataMinAggregateResolvers<ContextType>;
   TaskMasterMetadataSumAggregate?: TaskMasterMetadataSumAggregateResolvers<ContextType>;
   TaskMaxAggregate?: TaskMaxAggregateResolvers<ContextType>;
   TaskMinAggregate?: TaskMinAggregateResolvers<ContextType>;
   TaskSumAggregate?: TaskSumAggregateResolvers<ContextType>;
   Team?: TeamResolvers<ContextType>;
   TeamCount?: TeamCountResolvers<ContextType>;
   TeamCountAggregate?: TeamCountAggregateResolvers<ContextType>;
   TeamGroupBy?: TeamGroupByResolvers<ContextType>;
   TeamMaxAggregate?: TeamMaxAggregateResolvers<ContextType>;
   TeamMember?: TeamMemberResolvers<ContextType>;
   TeamMemberCountAggregate?: TeamMemberCountAggregateResolvers<ContextType>;
   TeamMemberGroupBy?: TeamMemberGroupByResolvers<ContextType>;
   TeamMemberMaxAggregate?: TeamMemberMaxAggregateResolvers<ContextType>;
   TeamMemberMinAggregate?: TeamMemberMinAggregateResolvers<ContextType>;
   TeamMinAggregate?: TeamMinAggregateResolvers<ContextType>;
   TeamProject?: TeamProjectResolvers<ContextType>;
   TeamProjectCountAggregate?: TeamProjectCountAggregateResolvers<ContextType>;
   TeamProjectGroupBy?: TeamProjectGroupByResolvers<ContextType>;
   TeamProjectMaxAggregate?: TeamProjectMaxAggregateResolvers<ContextType>;
   TeamProjectMinAggregate?: TeamProjectMinAggregateResolvers<ContextType>;
   User?: UserResolvers<ContextType>;
   UserCount?: UserCountResolvers<ContextType>;
   UserCountAggregate?: UserCountAggregateResolvers<ContextType>;
   UserGroupBy?: UserGroupByResolvers<ContextType>;
   UserMaxAggregate?: UserMaxAggregateResolvers<ContextType>;
   UserMinAggregate?: UserMinAggregateResolvers<ContextType>;
}>;
