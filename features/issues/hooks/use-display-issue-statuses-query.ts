/**
 * Hook to fetch issue statuses with display icons
 * This hook wraps useIssueStatusesQuery and maps iconName to React components
 *
 * @module queries/reference/use-display-issue-statuses
 */

import { useMemo } from 'react';
import { mapStatusWithIcon } from '@/libs/client/utils/status-icons';
import { useGetIssueStatusesQuery } from '@/libs/client/graphql-client/generated';

export type UseDisplayIssueStatusesOptions = any;

/**
 * Hook to fetch all available issue statuses with display icons
 *
 * @param options - Query options including where conditions, ordering, and pagination
 * @returns Status data with icon components, loading state, error, and query utilities
 *
 * @example
 * ```typescript
 * // Basic usage
 * const { data, loading } = useDisplayIssueStatuses();
 * const statuses = data?.issueStatuses?.nodes || [];
 *
 * // Render status with icon
 * statuses.map(status => (
 *   <div key={status.id}>
 *     <status.icon />
 *     <span>{status.name}</span>
 *   </div>
 * ))
 * ```
 */
export function useDisplayIssueStatuses(options: UseDisplayIssueStatusesOptions = {}) {
   const queryResult = useGetIssueStatusesQuery(options);

   // Transform the data to include icon components
   const transformedData = useMemo(() => {
      if (!queryResult.data?.issueStatuses) return queryResult.data;

      return {
         ...queryResult.data,
         issueStatuses: {
            ...queryResult.data.issueStatuses,
            nodes: queryResult.data.issueStatuses.map(mapStatusWithIcon),
         },
      };
   }, [queryResult.data]);

   return {
      ...queryResult,
      data: transformedData,
   };
}
