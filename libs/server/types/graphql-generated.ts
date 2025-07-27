import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Task, Subtask, TasksData } from '../taskmaster';
import { CLIExecuteResponse } from '../types';
import { GraphQLContext } from '../graphql/context';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

export type CursorPaginationInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  readyTasks: Array<Task>;
  searchTasks: Array<Task>;
  task?: Maybe<Task>;
  taskStats: TaskStats;
  tasks: Array<Task>;
  tasksConnection: TaskConnection;
};


export type QueryReadyTasksArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
};


export type QuerySearchTasksArgs = {
  options?: InputMaybe<TaskOptions>;
  searchText: Scalars['String']['input'];
};


export type QueryTaskArgs = {
  id: Scalars['Int']['input'];
  options?: InputMaybe<TaskOptions>;
};


export type QueryTasksArgs = {
  filters?: InputMaybe<TaskFilters>;
  options?: InputMaybe<TaskOptions>;
  orderBy?: InputMaybe<TaskOrderBy>;
};


export type QueryTasksConnectionArgs = {
  filters?: InputMaybe<TaskFilters>;
  orderBy?: InputMaybe<TaskOrderBy>;
  pagination?: InputMaybe<CursorPaginationInput>;
};

export type Subtask = {
  __typename?: 'Subtask';
  createdAt: Scalars['DateTimeISO']['output'];
  dependencies?: Maybe<Array<Scalars['String']['output']>>;
  description: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  fullId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: TaskStatus;
  testStrategy?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type Task = {
  __typename?: 'Task';
  complexity?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  dependencies?: Maybe<Array<Scalars['Int']['output']>>;
  description: Scalars['String']['output'];
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  priority: TaskPriority;
  status: TaskStatus;
  subtasks?: Maybe<Array<Subtask>>;
  testStrategy?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type TaskConnection = {
  __typename?: 'TaskConnection';
  edges: Array<TaskEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TaskEdge = {
  __typename?: 'TaskEdge';
  cursor: Scalars['String']['output'];
  node: Task;
};

export type TaskFilters = {
  hasDependencies?: InputMaybe<Scalars['Boolean']['input']>;
  hasSubtasks?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['Int']['input']>>;
  priority?: InputMaybe<Array<TaskPriority>>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<TaskStatus>>;
};

export type TaskOptions = {
  includeSubtasks?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type TaskOrderBy = {
  direction: Scalars['String']['input'];
  field: Scalars['String']['input'];
};

/** Task priority levels */
export type TaskPriority =
  | 'HIGH'
  | 'LOW'
  | 'MEDIUM';

export type TaskPriorityCount = {
  __typename?: 'TaskPriorityCount';
  high?: Maybe<Scalars['Int']['output']>;
  low?: Maybe<Scalars['Int']['output']>;
  medium?: Maybe<Scalars['Int']['output']>;
};

export type TaskStats = {
  __typename?: 'TaskStats';
  tasksByPriority?: Maybe<TaskPriorityCount>;
  tasksByStatus?: Maybe<TaskStatusCount>;
  totalSubtasks: Scalars['Int']['output'];
  totalTasks: Scalars['Int']['output'];
};

/** Task status values */
export type TaskStatus =
  | 'BLOCKED'
  | 'CANCELLED'
  | 'DEFERRED'
  | 'DONE'
  | 'IN_PROGRESS'
  | 'PENDING';

export type TaskStatusCount = {
  __typename?: 'TaskStatusCount';
  blocked?: Maybe<Scalars['Int']['output']>;
  cancelled?: Maybe<Scalars['Int']['output']>;
  deferred?: Maybe<Scalars['Int']['output']>;
  done?: Maybe<Scalars['Int']['output']>;
  inProgress?: Maybe<Scalars['Int']['output']>;
  pending?: Maybe<Scalars['Int']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
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

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

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
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']['output']>>;
  CursorPaginationInput: ResolverTypeWrapper<Partial<CursorPaginationInput>>;
  DateTimeISO: ResolverTypeWrapper<Partial<Scalars['DateTimeISO']['output']>>;
  Float: ResolverTypeWrapper<Partial<Scalars['Float']['output']>>;
  ID: ResolverTypeWrapper<Partial<Scalars['ID']['output']>>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']['output']>>;
  PageInfo: ResolverTypeWrapper<Partial<PageInfo>>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Partial<Scalars['String']['output']>>;
  Subtask: ResolverTypeWrapper<Subtask>;
  Task: ResolverTypeWrapper<Task>;
  TaskConnection: ResolverTypeWrapper<Partial<Omit<TaskConnection, 'edges'> & { edges: Array<ResolversTypes['TaskEdge']> }>>;
  TaskEdge: ResolverTypeWrapper<Partial<Omit<TaskEdge, 'node'> & { node: ResolversTypes['Task'] }>>;
  TaskFilters: ResolverTypeWrapper<Partial<TaskFilters>>;
  TaskOptions: ResolverTypeWrapper<Partial<TaskOptions>>;
  TaskOrderBy: ResolverTypeWrapper<Partial<TaskOrderBy>>;
  TaskPriority: ResolverTypeWrapper<Partial<TaskPriority>>;
  TaskPriorityCount: ResolverTypeWrapper<Partial<TaskPriorityCount>>;
  TaskStats: ResolverTypeWrapper<Partial<TaskStats>>;
  TaskStatus: ResolverTypeWrapper<Partial<TaskStatus>>;
  TaskStatusCount: ResolverTypeWrapper<Partial<TaskStatusCount>>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Partial<Scalars['Boolean']['output']>;
  CursorPaginationInput: Partial<CursorPaginationInput>;
  DateTimeISO: Partial<Scalars['DateTimeISO']['output']>;
  Float: Partial<Scalars['Float']['output']>;
  ID: Partial<Scalars['ID']['output']>;
  Int: Partial<Scalars['Int']['output']>;
  PageInfo: Partial<PageInfo>;
  Query: {};
  String: Partial<Scalars['String']['output']>;
  Subtask: Subtask;
  Task: Task;
  TaskConnection: Partial<Omit<TaskConnection, 'edges'> & { edges: Array<ResolversParentTypes['TaskEdge']> }>;
  TaskEdge: Partial<Omit<TaskEdge, 'node'> & { node: ResolversParentTypes['Task'] }>;
  TaskFilters: Partial<TaskFilters>;
  TaskOptions: Partial<TaskOptions>;
  TaskOrderBy: Partial<TaskOrderBy>;
  TaskPriorityCount: Partial<TaskPriorityCount>;
  TaskStats: Partial<TaskStats>;
  TaskStatusCount: Partial<TaskStatusCount>;
}>;

export interface DateTimeIsoScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTimeISO'], any> {
  name: 'DateTimeISO';
}

export type PageInfoResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  readyTasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, Partial<QueryReadyTasksArgs>>;
  searchTasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QuerySearchTasksArgs, 'searchText'>>;
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QueryTaskArgs, 'id'>>;
  taskStats?: Resolver<ResolversTypes['TaskStats'], ParentType, ContextType>;
  tasks?: Resolver<Array<ResolversTypes['Task']>, ParentType, ContextType, Partial<QueryTasksArgs>>;
  tasksConnection?: Resolver<ResolversTypes['TaskConnection'], ParentType, ContextType, Partial<QueryTasksConnectionArgs>>;
}>;

export type SubtaskResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Subtask'] = ResolversParentTypes['Subtask']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  dependencies?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TaskStatus'], ParentType, ContextType>;
  testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = ResolversObject<{
  complexity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  dependencies?: Resolver<Maybe<Array<ResolversTypes['Int']>>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  priority?: Resolver<ResolversTypes['TaskPriority'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['TaskStatus'], ParentType, ContextType>;
  subtasks?: Resolver<Maybe<Array<ResolversTypes['Subtask']>>, ParentType, ContextType>;
  testStrategy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTimeISO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskConnectionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['TaskConnection'] = ResolversParentTypes['TaskConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['TaskEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskEdgeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['TaskEdge'] = ResolversParentTypes['TaskEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskPriorityCountResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['TaskPriorityCount'] = ResolversParentTypes['TaskPriorityCount']> = ResolversObject<{
  high?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  low?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  medium?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskStatsResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['TaskStats'] = ResolversParentTypes['TaskStats']> = ResolversObject<{
  tasksByPriority?: Resolver<Maybe<ResolversTypes['TaskPriorityCount']>, ParentType, ContextType>;
  tasksByStatus?: Resolver<Maybe<ResolversTypes['TaskStatusCount']>, ParentType, ContextType>;
  totalSubtasks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalTasks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TaskStatusCountResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['TaskStatusCount'] = ResolversParentTypes['TaskStatusCount']> = ResolversObject<{
  blocked?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cancelled?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deferred?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  done?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  inProgress?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pending?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GraphQLContext> = ResolversObject<{
  DateTimeISO?: GraphQLScalarType;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subtask?: SubtaskResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  TaskConnection?: TaskConnectionResolvers<ContextType>;
  TaskEdge?: TaskEdgeResolvers<ContextType>;
  TaskPriorityCount?: TaskPriorityCountResolvers<ContextType>;
  TaskStats?: TaskStatsResolvers<ContextType>;
  TaskStatusCount?: TaskStatusCountResolvers<ContextType>;
}>;

