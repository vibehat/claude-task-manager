'use client';

import { useDisplayIssueStatuses } from '../../hooks/use-display-issue-statuses';
import { useSearchStore } from '../../store/search-store';
import { useViewStore } from '../../store/view-store';
import { SearchIssues } from './search-issues';
import AllIssuesListView from './issue-list-view';
import AllIssuesGridView from './issue-grid-view';
import { cn } from '@/libs/client/utils';

export default function AllIssues(): React.JSX.Element {
   const { isSearchOpen, searchQuery } = useSearchStore();
   const { viewType } = useViewStore();

   // Fetch statuses from GraphQL instead of using mock data
   const {
      data: statusesData,
      loading: statusesLoading,
      error: statusesError,
   } = useDisplayIssueStatuses();

   const isSearching = isSearchOpen && searchQuery.trim() !== '';
   const isViewTypeGrid = viewType === 'grid';

   const statuses = statusesData?.issueStatuses?.nodes || [];

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
            <AllIssuesGridView statuses={statuses} />
         ) : (
            <AllIssuesListView statuses={statuses} />
         )}
      </div>
   );
}

const SearchIssuesView = (): React.JSX.Element => (
   <div className="px-6 mb-6">
      <SearchIssues />
   </div>
);
