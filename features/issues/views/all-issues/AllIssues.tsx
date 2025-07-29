'use client';

import { useGetIssueStatusesQuery } from '@/libs/client/graphql-client/generated';
import { useSearchStore } from '../../store/searchStore';
import { useViewStore } from '@/store/viewStore';
import SearchIssues from './SearchIssues';
import { IssueListView } from '../issues-list';
import { IssueGridView } from '../issues-grid';
import { cn } from '@/libs/client/utils';
import { useEdges } from '@/hooks/useEdges';
import { useMemo } from 'react';

function AllIssues(): React.JSX.Element {
   const { isSearchOpen, searchQuery } = useSearchStore();
   const { viewType } = useViewStore();

   // Fetch statuses from GraphQL instead of using mock data
   const {
      data: statusesData,
      loading: statusesLoading,
      error: statusesError,
   } = useGetIssueStatusesQuery();

   const isSearching = isSearchOpen && searchQuery.trim() !== '';
   const isViewTypeGrid = viewType === 'grid';

   const statuses = useEdges(statusesData?.issueStatuses);

   // Sort statuses based on the defined order
   const sortedStatuses = useMemo(() => {
      if (!statuses) return [];
      // Define correct status order
      const statusOrder = [
         'backlog',
         'to-do',
         'in-progress',
         'technical-review',
         'completed',
         'paused',
      ];
      return [...statuses].sort((a, b) => {
         const orderA = statusOrder.indexOf(a.id);
         const orderB = statusOrder.indexOf(b.id);
         // If status not found in order, put it at the end
         const finalOrderA = orderA === -1 ? statusOrder.length : orderA;
         const finalOrderB = orderB === -1 ? statusOrder.length : orderB;
         return finalOrderA - finalOrderB;
      });
   }, [statuses]);

   // Show loading state while fetching statuses
   if (statusesLoading) {
      return (
         <div className="flex items-center justify-center h-64">
            <div className="text-sm text-muted-foreground">Loading...</div>
         </div>
      );
   }

   // Show error state if statuses failed to load
   if (statusesError) {
      return (
         <div className="flex items-center justify-center h-64">
            <div className="text-sm text-red-500">
               Error loading statuses: {statusesError.message}
            </div>
         </div>
      );
   }

   return (
      <div className={cn('w-full h-full')}>
         {isSearching ? (
            <SearchIssuesView />
         ) : isViewTypeGrid ? (
            <IssueGridView statuses={sortedStatuses} />
         ) : (
            <IssueListView statuses={sortedStatuses} />
         )}
      </div>
   );
}

const SearchIssuesView = (): React.JSX.Element => (
   <div className="px-6 mb-6">
      <SearchIssues />
   </div>
);

export default AllIssues;
