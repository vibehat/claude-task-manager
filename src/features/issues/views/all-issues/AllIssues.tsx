'use client';

import { useStatuses } from '@/libs/client/hooks/useStatuses';
import { useSearchStore } from '../../store/searchStore';
import { useViewStore } from '@/store/viewStore';
import SearchIssues from './SearchIssues';
import { IssueListView } from '../issues-list';
import { IssueGridView } from '../issues-grid';
import { cn } from '@/libs/client/utils';
import { useMemo } from 'react';

function AllIssues(): React.JSX.Element {
   const { isSearchOpen, searchQuery } = useSearchStore();
   const { viewType } = useViewStore();

   // Fetch statuses from Zustand store
   const { data: statuses, loading: statusesLoading, error: statusesError } = useStatuses();

   const isSearching = isSearchOpen && searchQuery.trim() !== '';
   const isViewTypeGrid = viewType === 'grid';

   // Sort statuses based on their order property
   const sortedStatuses = useMemo(() => {
      if (!statuses) return [];
      return [...statuses].sort((a, b) => a.order - b.order);
   }, [statuses]);

   // Debug logging
   console.log('AllIssues debug:', {
      statusesLoading,
      statusesError,
      statuses,
      sortedStatuses,
      isSearching,
      isViewTypeGrid,
   });

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
