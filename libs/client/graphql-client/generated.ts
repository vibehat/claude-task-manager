import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
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
export enum TaskPriority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

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
export enum TaskStatus {
  Blocked = 'BLOCKED',
  Cancelled = 'CANCELLED',
  Deferred = 'DEFERRED',
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type TaskStatusCount = {
  __typename?: 'TaskStatusCount';
  blocked?: Maybe<Scalars['Int']['output']>;
  cancelled?: Maybe<Scalars['Int']['output']>;
  deferred?: Maybe<Scalars['Int']['output']>;
  done?: Maybe<Scalars['Int']['output']>;
  inProgress?: Maybe<Scalars['Int']['output']>;
  pending?: Maybe<Scalars['Int']['output']>;
};

export type GetTasksQueryVariables = Exact<{
  filters?: InputMaybe<TaskFilters>;
  orderBy?: InputMaybe<TaskOrderBy>;
  options?: InputMaybe<TaskOptions>;
}>;


export type GetTasksQueryResult = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, title: string, description: string, status: TaskStatus, priority: TaskPriority, dependencies?: Array<number> | null, details?: string | null, testStrategy?: string | null, complexity?: number | null, createdAt: any, updatedAt: any, subtasks?: Array<{ __typename?: 'Subtask', id: string, fullId: string, title: string, description: string, status: TaskStatus, dependencies?: Array<string> | null, details?: string | null, testStrategy?: string | null, createdAt: any, updatedAt: any }> | null }> };

export type GetTaskQueryVariables = Exact<{
  id: Scalars['Int']['input'];
  options?: InputMaybe<TaskOptions>;
}>;


export type GetTaskQueryResult = { __typename?: 'Query', task?: { __typename?: 'Task', id: string, title: string, description: string, status: TaskStatus, priority: TaskPriority, dependencies?: Array<number> | null, details?: string | null, testStrategy?: string | null, complexity?: number | null, createdAt: any, updatedAt: any, subtasks?: Array<{ __typename?: 'Subtask', id: string, fullId: string, title: string, description: string, status: TaskStatus, dependencies?: Array<string> | null, details?: string | null, testStrategy?: string | null, createdAt: any, updatedAt: any }> | null } | null };

export type GetReadyTasksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Float']['input']>;
  offset?: InputMaybe<Scalars['Float']['input']>;
}>;


export type GetReadyTasksQueryResult = { __typename?: 'Query', readyTasks: Array<{ __typename?: 'Task', id: string, title: string, description: string, status: TaskStatus, priority: TaskPriority, dependencies?: Array<number> | null, details?: string | null, testStrategy?: string | null, complexity?: number | null, createdAt: any, updatedAt: any, subtasks?: Array<{ __typename?: 'Subtask', id: string, fullId: string, title: string, description: string, status: TaskStatus, dependencies?: Array<string> | null, details?: string | null, testStrategy?: string | null, createdAt: any, updatedAt: any }> | null }> };

export type GetTasksConnectionQueryVariables = Exact<{
  filters?: InputMaybe<TaskFilters>;
  orderBy?: InputMaybe<TaskOrderBy>;
  pagination?: InputMaybe<CursorPaginationInput>;
}>;


export type GetTasksConnectionQueryResult = { __typename?: 'Query', tasksConnection: { __typename?: 'TaskConnection', totalCount: number, edges: Array<{ __typename?: 'TaskEdge', cursor: string, node: { __typename?: 'Task', id: string, title: string, description: string, status: TaskStatus, priority: TaskPriority, dependencies?: Array<number> | null, details?: string | null, testStrategy?: string | null, complexity?: number | null, createdAt: any, updatedAt: any, subtasks?: Array<{ __typename?: 'Subtask', id: string, fullId: string, title: string, description: string, status: TaskStatus, dependencies?: Array<string> | null, details?: string | null, testStrategy?: string | null, createdAt: any, updatedAt: any }> | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type SearchTasksQueryVariables = Exact<{
  searchText: Scalars['String']['input'];
  options?: InputMaybe<TaskOptions>;
}>;


export type SearchTasksQueryResult = { __typename?: 'Query', searchTasks: Array<{ __typename?: 'Task', id: string, title: string, description: string, status: TaskStatus, priority: TaskPriority, dependencies?: Array<number> | null, details?: string | null, testStrategy?: string | null, complexity?: number | null, createdAt: any, updatedAt: any, subtasks?: Array<{ __typename?: 'Subtask', id: string, fullId: string, title: string, description: string, status: TaskStatus, dependencies?: Array<string> | null, details?: string | null, testStrategy?: string | null, createdAt: any, updatedAt: any }> | null }> };

export type GetTaskStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTaskStatsQueryResult = { __typename?: 'Query', taskStats: { __typename?: 'TaskStats', totalTasks: number, totalSubtasks: number, tasksByStatus?: { __typename?: 'TaskStatusCount', pending?: number | null, inProgress?: number | null, done?: number | null, cancelled?: number | null, deferred?: number | null, blocked?: number | null } | null, tasksByPriority?: { __typename?: 'TaskPriorityCount', high?: number | null, medium?: number | null, low?: number | null } | null } };


export const GetTasksDocument = gql`
    query GetTasks($filters: TaskFilters, $orderBy: TaskOrderBy, $options: TaskOptions) {
  tasks(filters: $filters, orderBy: $orderBy, options: $options) {
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
    subtasks {
      id
      fullId
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
 *      filters: // value for 'filters'
 *      orderBy: // value for 'orderBy'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetTasksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTasksQueryResult, GetTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTasksQueryResult, GetTasksQueryVariables>(GetTasksDocument, options);
      }
export function useGetTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTasksQueryResult, GetTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTasksQueryResult, GetTasksQueryVariables>(GetTasksDocument, options);
        }
export function useGetTasksSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTasksQueryResult, GetTasksQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetTasksQueryResult, GetTasksQueryVariables>(GetTasksDocument, options);
        }
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksSuspenseQueryHookResult = ReturnType<typeof useGetTasksSuspenseQuery>;
export function refetchGetTasksQuery(variables?: GetTasksQueryVariables) {
      return { query: GetTasksDocument, variables: variables }
    }
export const GetTaskDocument = gql`
    query GetTask($id: Int!, $options: TaskOptions) {
  task(id: $id, options: $options) {
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
    subtasks {
      id
      fullId
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
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetTaskQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetTaskQueryResult, GetTaskQueryVariables> & ({ variables: GetTaskQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTaskQueryResult, GetTaskQueryVariables>(GetTaskDocument, options);
      }
export function useGetTaskLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTaskQueryResult, GetTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTaskQueryResult, GetTaskQueryVariables>(GetTaskDocument, options);
        }
export function useGetTaskSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTaskQueryResult, GetTaskQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetTaskQueryResult, GetTaskQueryVariables>(GetTaskDocument, options);
        }
export type GetTaskQueryHookResult = ReturnType<typeof useGetTaskQuery>;
export type GetTaskLazyQueryHookResult = ReturnType<typeof useGetTaskLazyQuery>;
export type GetTaskSuspenseQueryHookResult = ReturnType<typeof useGetTaskSuspenseQuery>;
export function refetchGetTaskQuery(variables: GetTaskQueryVariables) {
      return { query: GetTaskDocument, variables: variables }
    }
export const GetReadyTasksDocument = gql`
    query GetReadyTasks($limit: Float, $offset: Float) {
  readyTasks(limit: $limit, offset: $offset) {
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
    subtasks {
      id
      fullId
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
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetReadyTasksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetReadyTasksQueryResult, GetReadyTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetReadyTasksQueryResult, GetReadyTasksQueryVariables>(GetReadyTasksDocument, options);
      }
export function useGetReadyTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetReadyTasksQueryResult, GetReadyTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetReadyTasksQueryResult, GetReadyTasksQueryVariables>(GetReadyTasksDocument, options);
        }
export function useGetReadyTasksSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetReadyTasksQueryResult, GetReadyTasksQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetReadyTasksQueryResult, GetReadyTasksQueryVariables>(GetReadyTasksDocument, options);
        }
export type GetReadyTasksQueryHookResult = ReturnType<typeof useGetReadyTasksQuery>;
export type GetReadyTasksLazyQueryHookResult = ReturnType<typeof useGetReadyTasksLazyQuery>;
export type GetReadyTasksSuspenseQueryHookResult = ReturnType<typeof useGetReadyTasksSuspenseQuery>;
export function refetchGetReadyTasksQuery(variables?: GetReadyTasksQueryVariables) {
      return { query: GetReadyTasksDocument, variables: variables }
    }
export const GetTasksConnectionDocument = gql`
    query GetTasksConnection($filters: TaskFilters, $orderBy: TaskOrderBy, $pagination: CursorPaginationInput) {
  tasksConnection(filters: $filters, orderBy: $orderBy, pagination: $pagination) {
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
        subtasks {
          id
          fullId
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
 * __useGetTasksConnectionQuery__
 *
 * To run a query within a React component, call `useGetTasksConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksConnectionQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      orderBy: // value for 'orderBy'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetTasksConnectionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTasksConnectionQueryResult, GetTasksConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTasksConnectionQueryResult, GetTasksConnectionQueryVariables>(GetTasksConnectionDocument, options);
      }
export function useGetTasksConnectionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTasksConnectionQueryResult, GetTasksConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTasksConnectionQueryResult, GetTasksConnectionQueryVariables>(GetTasksConnectionDocument, options);
        }
export function useGetTasksConnectionSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTasksConnectionQueryResult, GetTasksConnectionQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetTasksConnectionQueryResult, GetTasksConnectionQueryVariables>(GetTasksConnectionDocument, options);
        }
export type GetTasksConnectionQueryHookResult = ReturnType<typeof useGetTasksConnectionQuery>;
export type GetTasksConnectionLazyQueryHookResult = ReturnType<typeof useGetTasksConnectionLazyQuery>;
export type GetTasksConnectionSuspenseQueryHookResult = ReturnType<typeof useGetTasksConnectionSuspenseQuery>;
export function refetchGetTasksConnectionQuery(variables?: GetTasksConnectionQueryVariables) {
      return { query: GetTasksConnectionDocument, variables: variables }
    }
export const SearchTasksDocument = gql`
    query SearchTasks($searchText: String!, $options: TaskOptions) {
  searchTasks(searchText: $searchText, options: $options) {
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
    subtasks {
      id
      fullId
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
 * __useSearchTasksQuery__
 *
 * To run a query within a React component, call `useSearchTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTasksQuery({
 *   variables: {
 *      searchText: // value for 'searchText'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useSearchTasksQuery(baseOptions: ApolloReactHooks.QueryHookOptions<SearchTasksQueryResult, SearchTasksQueryVariables> & ({ variables: SearchTasksQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SearchTasksQueryResult, SearchTasksQueryVariables>(SearchTasksDocument, options);
      }
export function useSearchTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchTasksQueryResult, SearchTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SearchTasksQueryResult, SearchTasksQueryVariables>(SearchTasksDocument, options);
        }
export function useSearchTasksSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<SearchTasksQueryResult, SearchTasksQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<SearchTasksQueryResult, SearchTasksQueryVariables>(SearchTasksDocument, options);
        }
export type SearchTasksQueryHookResult = ReturnType<typeof useSearchTasksQuery>;
export type SearchTasksLazyQueryHookResult = ReturnType<typeof useSearchTasksLazyQuery>;
export type SearchTasksSuspenseQueryHookResult = ReturnType<typeof useSearchTasksSuspenseQuery>;
export function refetchSearchTasksQuery(variables: SearchTasksQueryVariables) {
      return { query: SearchTasksDocument, variables: variables }
    }
export const GetTaskStatsDocument = gql`
    query GetTaskStats {
  taskStats {
    totalTasks
    totalSubtasks
    tasksByStatus {
      pending
      inProgress
      done
      cancelled
      deferred
      blocked
    }
    tasksByPriority {
      high
      medium
      low
    }
  }
}
    `;

/**
 * __useGetTaskStatsQuery__
 *
 * To run a query within a React component, call `useGetTaskStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTaskStatsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTaskStatsQueryResult, GetTaskStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTaskStatsQueryResult, GetTaskStatsQueryVariables>(GetTaskStatsDocument, options);
      }
export function useGetTaskStatsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTaskStatsQueryResult, GetTaskStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTaskStatsQueryResult, GetTaskStatsQueryVariables>(GetTaskStatsDocument, options);
        }
export function useGetTaskStatsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetTaskStatsQueryResult, GetTaskStatsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetTaskStatsQueryResult, GetTaskStatsQueryVariables>(GetTaskStatsDocument, options);
        }
export type GetTaskStatsQueryHookResult = ReturnType<typeof useGetTaskStatsQuery>;
export type GetTaskStatsLazyQueryHookResult = ReturnType<typeof useGetTaskStatsLazyQuery>;
export type GetTaskStatsSuspenseQueryHookResult = ReturnType<typeof useGetTaskStatsSuspenseQuery>;
export function refetchGetTaskStatsQuery(variables?: GetTaskStatsQueryVariables) {
      return { query: GetTaskStatsDocument, variables: variables }
    }