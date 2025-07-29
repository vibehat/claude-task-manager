'use client';

import type { GetIssueStatusesQuery } from '@/libs/client/graphql-client/generated';
import type { FC } from 'react';
import { useFilterStore } from '@/store/filter-store';
import { useMemo } from 'react';
import GroupIssuesList from './group-issues-list';
import type { IssueWhereInput } from '@/libs/client/graphql-client/generated';

type IssueStatusFromQuery = GetIssueStatusesQuery['issueStatuses'][0];

interface IssueListViewProps {
   statuses: IssueStatusFromQuery[];
   loading?: boolean;
   error?: Error | null;
}

const IssueListView: FC<IssueListViewProps> = ({ statuses, loading, error }) => {
   const { filters, hasActiveFilters } = useFilterStore();

   // Convert filter store format to GraphQL filter format
   const graphqlFilter = useMemo((): IssueWhereInput | undefined => {
      if (!hasActiveFilters()) return undefined;

      return {
         assigneeId: filters.assignee.length > 0 ? { in: filters.assignee } : undefined,
         projectId: filters.project.length > 0 ? { in: filters.project } : undefined,
         labels:
            filters.labels.length > 0 ? { some: { labelId: { in: filters.labels } } } : undefined,
      };
   }, [filters, hasActiveFilters]);

   if (loading) {
      return (
         <div className="flex items-center justify-center h-64">
            <div className="text-sm text-muted-foreground">Loading issues...</div>
         </div>
      );
   }

   if (error) {
      return (
         <div className="flex items-center justify-center h-64">
            <div className="text-sm text-red-500">Error loading issues: {error.message}</div>
         </div>
      );
   }

   return (
      <div className="w-full h-full">
         {statuses.map((status) => (
            <GroupIssuesList key={status.id} status={status} additionalFilter={graphqlFilter} />
         ))}
      </div>
   );
};

export default IssueListView;
