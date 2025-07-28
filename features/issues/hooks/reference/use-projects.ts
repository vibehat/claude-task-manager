/**
 * Hook to fetch all projects
 *
 * @module queries/reference/use-projects
 */

import { useQuery, gql } from '@apollo/client';
import type { Project } from '@/mock-data/projects';

// GraphQL Document
const GET_PROJECTS = gql`
   query GetProjects(
      $where: ProjectWhereInput
      $orderBy: [ProjectOrderByWithRelationInput!]
      $skip: Int
      $take: Int
   ) {
      projects(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
         id
         name
         description
         color
         identifier
         createdAt
         updatedAt
      }
   }
`;

export interface ProjectFilterInput {
   name?: string;
   identifier?: string;
   color?: string;
   search?: string;
}

export interface UseProjectsOptions {
   filter?: ProjectFilterInput;
   pagination?: {
      first?: number;
      after?: string;
      last?: number;
      before?: string;
   };
   skip?: boolean;
   fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'no-cache' | 'standby';
}

export type UseProjectsResult = ReturnType<
   typeof useQuery<{ projects: { nodes: Project[]; totalCount: number; pageInfo: any } }>
>;

/**
 * Hook to fetch all projects with optional filters
 *
 * @param options - Query options including filters and pagination
 * @returns Project data, loading state, error, and query utilities
 *
 * @example
 * ```typescript
 * // Basic usage
 * const { projects, loading } = useProjects();
 *
 * // Search projects
 * const { projects } = useProjects({
 *   filter: {
 *     search: 'web app'
 *   }
 * });
 *
 * // Filter by identifier
 * const { projects } = useProjects({
 *   filter: {
 *     identifier: 'WEB'
 *   }
 * });
 *
 * // With pagination
 * const { projects, pageInfo, fetchMore } = useProjects({
 *   pagination: { first: 10 }
 * });
 * ```
 */
export function useProjects(options: UseProjectsOptions = {}) {
   const { filter, pagination, skip = false, fetchPolicy = 'cache-first' } = options;

   return useQuery(GET_PROJECTS, {
      variables: {
         where: filter,
         orderBy: [{ name: 'asc' }],
         skip: pagination?.after ? parseInt(pagination.after) : 0,
         take: pagination?.first || 50,
      },
      skip,
      fetchPolicy,
      notifyOnNetworkStatusChange: true,
   });
}
