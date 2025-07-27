'use client';

import { status } from '@/mock-data/status';
import { useIssuesStore } from '@/store/issues-store';
import { useIssuesIntegration } from '@/libs/client/hooks/use-issues-integration';
import { useSearchStore } from '@/store/search-store';
import { useViewStore } from '@/store/view-store';
import { useFilterStore } from '@/store/filter-store';
import { useMemo } from 'react';
import type { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { GroupIssues } from './group-issues';
import { SearchIssues } from './search-issues';
import { CustomDragLayer } from './issue-grid';
import { cn } from '@/libs/client/utils';
import type { Issue } from '@/mock-data/issues';

export default function AllIssues(): JSX.Element {
   const { isSearchOpen, searchQuery } = useSearchStore();
   const { viewType } = useViewStore();
   const { hasActiveFilters } = useFilterStore();

   // Initialize GraphQL data integration
   const { loading, error } = useIssuesIntegration();

   const isSearching = isSearchOpen && searchQuery.trim() !== '';
   const isViewTypeGrid = viewType === 'grid';
   const isFiltering = hasActiveFilters();

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
      <div className={cn('w-full h-full', isViewTypeGrid && 'overflow-x-auto')}>
         {isSearching ? (
            <SearchIssuesView />
         ) : isFiltering ? (
            <FilteredIssuesView isViewTypeGrid={isViewTypeGrid} />
         ) : (
            <GroupIssuesListView isViewTypeGrid={isViewTypeGrid} />
         )}
      </div>
   );
}

const SearchIssuesView = (): JSX.Element => (
   <div className="px-6 mb-6">
      <SearchIssues />
   </div>
);

const FilteredIssuesView: FC<{
   isViewTypeGrid: boolean;
}> = ({ isViewTypeGrid = false }) => {
   const { filters } = useFilterStore();
   const { filterIssues } = useIssuesStore();

   // Apply filters to get filtered issues
   const filteredIssues = useMemo(() => {
      return filterIssues(filters);
   }, [filterIssues, filters]);

   // Group filtered issues by status
   const filteredIssuesByStatus = useMemo(() => {
      const result: Record<string, Issue[]> = {};

      status.forEach((statusItem) => {
         result[statusItem.id] = filteredIssues.filter(
            (issue) => issue.status.id === statusItem.id
         );
      });

      return result;
   }, [filteredIssues]);

   return (
      <DndProvider backend={HTML5Backend}>
         <CustomDragLayer />
         <div className={cn(isViewTypeGrid && 'flex h-full gap-3 px-2 py-2 min-w-max')}>
            {status.map((statusItem) => (
               <GroupIssues
                  key={statusItem.id}
                  status={statusItem}
                  issues={filteredIssuesByStatus[statusItem.id] ?? []}
                  count={filteredIssuesByStatus[statusItem.id]?.length ?? 0}
               />
            ))}
         </div>
      </DndProvider>
   );
};

const GroupIssuesListView: FC<{
   isViewTypeGrid: boolean;
}> = ({ isViewTypeGrid = false }) => {
   const { issuesByStatus } = useIssuesStore();
   return (
      <DndProvider backend={HTML5Backend}>
         <CustomDragLayer />
         <div className={cn(isViewTypeGrid && 'flex h-full gap-3 px-2 py-2 min-w-max')}>
            {status.map((statusItem) => (
               <GroupIssues
                  key={statusItem.id}
                  status={statusItem}
                  issues={issuesByStatus[statusItem.id] ?? []}
                  count={issuesByStatus[statusItem.id]?.length ?? 0}
               />
            ))}
         </div>
      </DndProvider>
   );
};
