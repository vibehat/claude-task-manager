/**
 * Hook to fetch all users
 *
 * @module queries/reference/use-users
 */

import { useQuery, gql } from '@apollo/client';
import type { User } from '@/mock-data/users';

// GraphQL Document
const GET_USERS = gql`
   query GetUsers(
      $where: UserWhereInput
      $orderBy: [UserOrderByWithRelationInput!]
      $skip: Int
      $take: Int
   ) {
      users(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
         id
         name
         email
         avatarUrl
         status
         role
         joinedDate
         createdAt
         updatedAt
      }
   }
`;

export interface UserFilterInput {
   name?: string;
   email?: string;
   status?: string[];
   role?: string[];
   teamIds?: string[];
   search?: string;
}

export interface UseUsersOptions {
   filter?: UserFilterInput;
   pagination?: {
      first?: number;
      after?: string;
      last?: number;
      before?: string;
   };
   skip?: boolean;
   fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'no-cache' | 'standby';
}

export type UseUsersResult = ReturnType<
   typeof useQuery<{ users: { nodes: User[]; totalCount: number; pageInfo: any } }>
>;

/**
 * Hook to fetch all users with optional filters
 *
 * @param options - Query options including filters and pagination
 * @returns User data, loading state, error, and query utilities
 *
 * @example
 * ```typescript
 * // Basic usage
 * const { users, loading } = useUsers();
 *
 * // Filter by status
 * const { users } = useUsers({
 *   filter: {
 *     status: ['online', 'away']
 *   }
 * });
 *
 * // Search users
 * const { users } = useUsers({
 *   filter: {
 *     search: 'john'
 *   }
 * });
 *
 * // With pagination
 * const { users, pageInfo, fetchMore } = useUsers({
 *   pagination: { first: 20 }
 * });
 * ```
 */
export function useUsers(options: UseUsersOptions = {}) {
   const { filter, pagination, skip = false, fetchPolicy = 'cache-first' } = options;

   return useQuery(GET_USERS, {
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
