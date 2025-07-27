/**
 * Issue Query Hooks
 *
 * Comprehensive query hooks for fetching issues, users, projects, and labels
 */

import { useQuery, UseQueryOptions, UseQueryResult, gql } from '@apollo/client';
import type {
   Issue,
   User,
   Project,
   Label,
   IssueConnection,
   UserConnection,
   ProjectConnection,
   LabelConnection,
   IssueFilterInput,
   IssueOrderByInput,
   UserFilterInput,
   ProjectFilterInput,
   LabelFilterInput,
   PaginationInput,
   IssueQueryResult,
   IssuesQueryResult,
} from './types';

// GraphQL Documents - defined locally until generated
const GetIssuesDocument = gql`
   query GetIssues(
      $filter: IssueFilterInput
      $orderBy: [IssueOrderByInput!]
      $pagination: PaginationInput
   ) {
      issues(filter: $filter, orderBy: $orderBy, pagination: $pagination) {
         edges {
            node {
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
               taskId
               subtaskId
               subissues
               createdAt
               updatedAt
               assignee {
                  id
                  name
                  email
                  avatarUrl
                  status
                  role
               }
               project {
                  id
                  name
                  description
                  color
                  identifier
               }
               labels {
                  id
                  name
                  color
                  description
               }
            }
            cursor
         }
         nodes {
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
            taskId
            subtaskId
            subissues
            createdAt
            updatedAt
            assignee {
               id
               name
               email
               avatarUrl
               status
               role
            }
            project {
               id
               name
               description
               color
               identifier
            }
            labels {
               id
               name
               color
               description
            }
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

const GetIssueDocument = gql`
   query GetIssue($id: ID!) {
      issue(id: $id) {
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
         taskId
         subtaskId
         subissues
         createdAt
         updatedAt
         assignee {
            id
            name
            email
            avatarUrl
            status
            role
         }
         project {
            id
            name
            description
            color
            identifier
         }
         labels {
            id
            name
            color
            description
         }
         task {
            id
            title
            description
            status
            priority
            dependencies
            details
            testStrategy
            complexity
         }
      }
   }
`;

const SearchIssuesDocument = gql`
   query SearchIssues(
      $query: String!
      $filter: IssueFilterInput
      $orderBy: [IssueOrderByInput!]
      $pagination: PaginationInput
   ) {
      searchIssues(query: $query, filter: $filter, orderBy: $orderBy, pagination: $pagination) {
         edges {
            node {
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
               taskId
               subtaskId
               subissues
               createdAt
               updatedAt
               assignee {
                  id
                  name
                  email
                  avatarUrl
                  status
                  role
               }
               project {
                  id
                  name
                  description
                  color
                  identifier
               }
               labels {
                  id
                  name
                  color
                  description
               }
            }
            cursor
         }
         nodes {
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
            taskId
            subtaskId
            subissues
            createdAt
            updatedAt
            assignee {
               id
               name
               email
               avatarUrl
               status
               role
            }
            project {
               id
               name
               description
               color
               identifier
            }
            labels {
               id
               name
               color
               description
            }
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

const GetIssuesByProjectDocument = gql`
   query GetIssuesByProject(
      $projectId: ID!
      $filter: IssueFilterInput
      $orderBy: [IssueOrderByInput!]
      $pagination: PaginationInput
   ) {
      issuesByProject(
         projectId: $projectId
         filter: $filter
         orderBy: $orderBy
         pagination: $pagination
      ) {
         edges {
            node {
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
               taskId
               subtaskId
               subissues
               createdAt
               updatedAt
               assignee {
                  id
                  name
                  email
                  avatarUrl
                  status
                  role
               }
               project {
                  id
                  name
                  description
                  color
                  identifier
               }
               labels {
                  id
                  name
                  color
                  description
               }
            }
            cursor
         }
         nodes {
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
            taskId
            subtaskId
            subissues
            createdAt
            updatedAt
            assignee {
               id
               name
               email
               avatarUrl
               status
               role
            }
            project {
               id
               name
               description
               color
               identifier
            }
            labels {
               id
               name
               color
               description
            }
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

const GetIssuesByAssigneeDocument = gql`
   query GetIssuesByAssignee(
      $assigneeId: ID!
      $filter: IssueFilterInput
      $orderBy: [IssueOrderByInput!]
      $pagination: PaginationInput
   ) {
      issuesByAssignee(
         assigneeId: $assigneeId
         filter: $filter
         orderBy: $orderBy
         pagination: $pagination
      ) {
         edges {
            node {
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
               taskId
               subtaskId
               subissues
               createdAt
               updatedAt
               assignee {
                  id
                  name
                  email
                  avatarUrl
                  status
                  role
               }
               project {
                  id
                  name
                  description
                  color
                  identifier
               }
               labels {
                  id
                  name
                  color
                  description
               }
            }
            cursor
         }
         nodes {
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
            taskId
            subtaskId
            subissues
            createdAt
            updatedAt
            assignee {
               id
               name
               email
               avatarUrl
               status
               role
            }
            project {
               id
               name
               description
               color
               identifier
            }
            labels {
               id
               name
               color
               description
            }
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

const GetUsersDocument = gql`
   query GetUsers($filter: UserFilterInput, $pagination: PaginationInput) {
      users(filter: $filter, pagination: $pagination) {
         edges {
            node {
               id
               name
               email
               avatarUrl
               status
               role
               teamIds
               joinedDate
               createdAt
               updatedAt
            }
            cursor
         }
         nodes {
            id
            name
            email
            avatarUrl
            status
            role
            teamIds
            joinedDate
            createdAt
            updatedAt
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

const GetUserDocument = gql`
   query GetUser($id: ID!) {
      user(id: $id) {
         id
         name
         email
         avatarUrl
         status
         role
         teamIds
         joinedDate
         createdAt
         updatedAt
         assignedIssues {
            id
            identifier
            title
            status
            priority
         }
      }
   }
`;

const GetProjectsDocument = gql`
   query GetProjects($filter: ProjectFilterInput, $pagination: PaginationInput) {
      projects(filter: $filter, pagination: $pagination) {
         edges {
            node {
               id
               name
               description
               color
               identifier
               createdAt
               updatedAt
            }
            cursor
         }
         nodes {
            id
            name
            description
            color
            identifier
            createdAt
            updatedAt
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

const GetProjectDocument = gql`
   query GetProject($id: ID!) {
      project(id: $id) {
         id
         name
         description
         color
         identifier
         createdAt
         updatedAt
         issues {
            id
            identifier
            title
            status
            priority
         }
      }
   }
`;

const GetLabelsDocument = gql`
   query GetLabels($filter: LabelFilterInput, $pagination: PaginationInput) {
      labels(filter: $filter, pagination: $pagination) {
         edges {
            node {
               id
               name
               color
               description
               createdAt
               updatedAt
            }
            cursor
         }
         nodes {
            id
            name
            color
            description
            createdAt
            updatedAt
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

const GetLabelDocument = gql`
   query GetLabel($id: ID!) {
      label(id: $id) {
         id
         name
         color
         description
         createdAt
         updatedAt
         issues {
            id
            identifier
            title
            status
            priority
         }
      }
   }
`;

// Issue Query Hooks

export interface UseIssuesOptions {
   filter?: IssueFilterInput;
   orderBy?: IssueOrderByInput[];
   pagination?: PaginationInput;
   skip?: boolean;
}

export function useIssues(
   options: UseIssuesOptions = {},
   queryOptions?: UseQueryOptions<{ issues: IssueConnection }>
): UseQueryResult<{ issues: IssueConnection }> {
   return useQuery(GetIssuesDocument, {
      variables: {
         filter: options.filter,
         orderBy: options.orderBy,
         pagination: options.pagination,
      },
      skip: options.skip,
      ...queryOptions,
   });
}

export function useIssue(
   id: string,
   queryOptions?: UseQueryOptions<{ issue: Issue | null }>
): UseQueryResult<{ issue: Issue | null }> {
   return useQuery(GetIssueDocument, {
      variables: { id },
      skip: !id,
      ...queryOptions,
   });
}

export interface UseSearchIssuesOptions {
   query: string;
   filter?: IssueFilterInput;
   orderBy?: IssueOrderByInput[];
   pagination?: PaginationInput;
   skip?: boolean;
}

export function useSearchIssues(
   options: UseSearchIssuesOptions,
   queryOptions?: UseQueryOptions<{ searchIssues: IssueConnection }>
): UseQueryResult<{ searchIssues: IssueConnection }> {
   return useQuery(SearchIssuesDocument, {
      variables: {
         query: options.query,
         filter: options.filter,
         orderBy: options.orderBy,
         pagination: options.pagination,
      },
      skip: options.skip || !options.query,
      ...queryOptions,
   });
}

export interface UseIssuesByProjectOptions {
   projectId: string;
   filter?: IssueFilterInput;
   orderBy?: IssueOrderByInput[];
   pagination?: PaginationInput;
   skip?: boolean;
}

export function useIssuesByProject(
   options: UseIssuesByProjectOptions,
   queryOptions?: UseQueryOptions<{ issuesByProject: IssueConnection }>
): UseQueryResult<{ issuesByProject: IssueConnection }> {
   return useQuery(GetIssuesByProjectDocument, {
      variables: {
         projectId: options.projectId,
         filter: options.filter,
         orderBy: options.orderBy,
         pagination: options.pagination,
      },
      skip: options.skip || !options.projectId,
      ...queryOptions,
   });
}

export interface UseIssuesByAssigneeOptions {
   assigneeId: string;
   filter?: IssueFilterInput;
   orderBy?: IssueOrderByInput[];
   pagination?: PaginationInput;
   skip?: boolean;
}

export function useIssuesByAssignee(
   options: UseIssuesByAssigneeOptions,
   queryOptions?: UseQueryOptions<{ issuesByAssignee: IssueConnection }>
): UseQueryResult<{ issuesByAssignee: IssueConnection }> {
   return useQuery(GetIssuesByAssigneeDocument, {
      variables: {
         assigneeId: options.assigneeId,
         filter: options.filter,
         orderBy: options.orderBy,
         pagination: options.pagination,
      },
      skip: options.skip || !options.assigneeId,
      ...queryOptions,
   });
}

// User Query Hooks

export interface UseUsersOptions {
   filter?: UserFilterInput;
   pagination?: PaginationInput;
   skip?: boolean;
}

export function useUsers(
   options: UseUsersOptions = {},
   queryOptions?: UseQueryOptions<{ users: UserConnection }>
): UseQueryResult<{ users: UserConnection }> {
   return useQuery(GetUsersDocument, {
      variables: {
         filter: options.filter,
         pagination: options.pagination,
      },
      skip: options.skip,
      ...queryOptions,
   });
}

export function useUser(
   id: string,
   queryOptions?: UseQueryOptions<{ user: User | null }>
): UseQueryResult<{ user: User | null }> {
   return useQuery(GetUserDocument, {
      variables: { id },
      skip: !id,
      ...queryOptions,
   });
}

// Project Query Hooks

export interface UseProjectsOptions {
   filter?: ProjectFilterInput;
   pagination?: PaginationInput;
   skip?: boolean;
}

export function useProjects(
   options: UseProjectsOptions = {},
   queryOptions?: UseQueryOptions<{ projects: ProjectConnection }>
): UseQueryResult<{ projects: ProjectConnection }> {
   return useQuery(GetProjectsDocument, {
      variables: {
         filter: options.filter,
         pagination: options.pagination,
      },
      skip: options.skip,
      ...queryOptions,
   });
}

export function useProject(
   id: string,
   queryOptions?: UseQueryOptions<{ project: Project | null }>
): UseQueryResult<{ project: Project | null }> {
   return useQuery(GetProjectDocument, {
      variables: { id },
      skip: !id,
      ...queryOptions,
   });
}

// Label Query Hooks

export interface UseLabelsOptions {
   filter?: LabelFilterInput;
   pagination?: PaginationInput;
   skip?: boolean;
}

export function useLabels(
   options: UseLabelsOptions = {},
   queryOptions?: UseQueryOptions<{ labels: LabelConnection }>
): UseQueryResult<{ labels: LabelConnection }> {
   return useQuery(GetLabelsDocument, {
      variables: {
         filter: options.filter,
         pagination: options.pagination,
      },
      skip: options.skip,
      ...queryOptions,
   });
}

export function useLabel(
   id: string,
   queryOptions?: UseQueryOptions<{ label: Label | null }>
): UseQueryResult<{ label: Label | null }> {
   return useQuery(GetLabelDocument, {
      variables: { id },
      skip: !id,
      ...queryOptions,
   });
}

// Backward compatibility hooks

/**
 * Enhanced useIssueQuery hook with Apollo caching
 * @deprecated Use useIssue instead
 */
export function useIssueQueryWithCache(id: string): IssueQueryResult {
   const { data, loading, error, refetch } = useIssue(id);
   const issue = data?.issue || null;

   return {
      issue,
      loading,
      error,
      refetch,
      // Cache-aware utilities
      isStale: false, // Apollo manages staleness
      fromCache: !loading && !!issue, // If not loading and has data, likely from cache
   };
}

/**
 * Enhanced useIssuesQuery hook with Apollo caching
 * @deprecated Use useIssues instead
 */
export function useIssuesQueryWithCache(): IssuesQueryResult {
   const { data, loading, error, refetch } = useIssues();
   const issues = data?.issues?.nodes || [];

   return {
      issues,
      loading,
      error,
      refetch,
      fromCache: !loading && issues.length > 0,
   };
}

/**
 * Hook for fetching all reference data needed for issues
 */
export function useIssueReferenceData() {
   const { data: usersData } = useUsers();
   const { data: projectsData } = useProjects();
   const { data: labelsData } = useLabels();

   return {
      statuses: [], // Using mock-data statuses
      priorities: [], // Using mock-data priorities
      labels: labelsData?.labels?.nodes || [],
      users: usersData?.users?.nodes || [],
      projects: projectsData?.projects?.nodes || [],
   };
}

/**
 * Combined hook for issues and reference data
 */
export function useIssuesWithReferenceData() {
   const issuesQuery = useIssuesQueryWithCache();
   const referenceData = useIssueReferenceData();

   return {
      ...issuesQuery,
      ...referenceData,
   };
}
