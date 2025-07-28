'use client';

import type { Status } from '@/mock-data/status';
import type { Issue } from '@/mock-data/issues';
import type { FC } from 'react';
import { useFilterStore } from '@/store/filter-store';
import { useMemo } from 'react';
import { GroupIssues } from './group-issues';
import type { IssueFilterInput } from '@/features/issues/types/filters.types';

interface AllIssuesListViewProps {
   statuses: Status[];
   loading?: boolean;
   error?: Error | null;
}

export const AllIssuesListView: FC<AllIssuesListViewProps> = ({ statuses, loading, error }) => {
   const { filters, hasActiveFilters } = useFilterStore();

   // Convert filter store format to GraphQL filter format
   const graphqlFilter = useMemo((): Omit<IssueFilterInput, 'status'> | undefined => {
      if (!hasActiveFilters()) return undefined;

      return {
         priority: filters.priority.length > 0 ? filters.priority : undefined,
         assigneeId: filters.assignee.length > 0 ? filters.assignee : undefined,
         projectId: filters.project.length > 0 ? filters.project : undefined,
         labelIds: filters.labels.length > 0 ? filters.labels : undefined,
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
            <GroupIssues key={status.id} status={status} additionalFilter={graphqlFilter} />
         ))}
      </div>
   );
};
