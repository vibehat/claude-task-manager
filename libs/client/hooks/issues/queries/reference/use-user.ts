/**
 * Hook to fetch a single user by ID
 *
 * @module queries/reference/use-user
 */

import { useQuery, gql } from '@apollo/client';
import type { User } from '@/mock-data/users';

// GraphQL Document
const GET_USER = gql`
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

export interface UseUserOptions {
   skip?: boolean;
   fetchPolicy?: 'cache-first' | 'cache-and-network' | 'network-only' | 'no-cache' | 'standby';
   onCompleted?: (data: any) => void;
   onError?: (error: any) => void;
}

export type UseUserResult = ReturnType<typeof useQuery<{ user: User | null }>>;

/**
 * Hook to fetch a single user by ID
 *
 * @param id - The user ID to fetch
 * @param options - Query options
 * @returns User data, loading state, error, and query utilities
 *
 * @example
 * ```typescript
 * // Basic usage
 * const { user, loading, error } = useUser('user-123');
 *
 * // Skip if no ID
 * const { user } = useUser(userId, {
 *   skip: !userId
 * });
 *
 * // With callbacks
 * const { user } = useUser('user-123', {
 *   onCompleted: (data) => console.log('User loaded:', data.user),
 *   onError: (error) => console.error('Failed to load user:', error)
 * });
 * ```
 */
export function useUser(id: string, options: UseUserOptions = {}) {
   const { skip = false, fetchPolicy = 'cache-first', onCompleted, onError } = options;

   return useQuery(GET_USER, {
      variables: { id },
      skip: skip || !id,
      fetchPolicy,
      onCompleted,
      onError,
   });
}
