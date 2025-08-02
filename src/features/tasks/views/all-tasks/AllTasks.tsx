'use client';

import { useStatuses } from '@/libs/client/hooks/useStatuses';
import { useSearchStore } from '../../store/searchStore';
import { useViewStore } from '@/store/viewStore';
import { useDataStore, useAllTasks } from '@/libs/client/stores';
import SearchTasks from './SearchTasks';
import { TaskListView } from '../tasks-list';
import { TaskGridView } from '../tasks-grid';
import { cn } from '@/libs/client/utils';
import { useMemo } from 'react';
import type { Task, TaskStatus } from '@/libs/client/types/dataModels';
import { EmptyTasksState } from '@/components/empty-states/EmptyTasksState';

function AllTasks(): React.JSX.Element {
   const { isSearchOpen, searchQuery } = useSearchStore();
   const { viewType } = useViewStore();

   // Fetch statuses from Zustand store
   const { data: statuses, loading: statusesLoading, error: statusesError } = useStatuses();

   // Get all tasks from the data store
   const allTasks = useAllTasks();
   const isInitialized = useDataStore((state) => state.isInitialized);
   const isLoading = useDataStore((state) => state.isLoading);

   console.log('[AllTasks] Store state:', {
      allTasksLength: allTasks.length,
      isInitialized,
      isLoading,
      sampleTaskIds: allTasks.slice(0, 3).map((t) => t.id),
   });

   const isSearching = isSearchOpen && searchQuery.trim() !== '';
   const isViewTypeGrid = viewType === 'grid';

   // Sort statuses based on their order property
   const sortedStatuses = useMemo(() => {
      if (!statuses) return [];
      return [...statuses].sort((a, b) => a.order - b.order);
   }, [statuses]);

   // Group tasks by status and filter parent tasks only
   const groupedTasks = useMemo(() => {
      if (!sortedStatuses.length) return new Map<string, Task[]>();

      const grouped = new Map<string, Task[]>();

      // Initialize groups for all statuses
      sortedStatuses.forEach((status) => {
         grouped.set(status.id, []);
      });

      // Group parent tasks (exclude sub-tasks) by status
      allTasks.forEach((task) => {
         if (!task.parentTaskId && grouped.has(task.statusId)) {
            grouped.get(task.statusId)!.push(task);
         }
      });

      return grouped;
   }, [sortedStatuses, allTasks]);

   // Check if there are any tasks at all
   const hasTasks = allTasks.length > 0;
   const hasTasksInAnyStatus = Array.from(groupedTasks.values()).some((tasks) => tasks.length > 0);

   // More debug logging
   console.log('[AllTasks] Grouped tasks by status:', {
      groupedTasksSize: groupedTasks.size,
      statuses: Array.from(groupedTasks.entries()).map(([statusId, tasks]) => ({
         statusId,
         taskCount: tasks.length,
      })),
      hasTasks,
      hasTasksInAnyStatus,
   });

   // Show loading state while fetching statuses OR while store is initializing
   if (statusesLoading || isLoading || !isInitialized) {
      return (
         <div className="flex items-center justify-center h-64">
            <div className="text-sm text-muted-foreground">
               Loading... (statuses: {statusesLoading ? 'loading' : 'ready'}, store:{' '}
               {isLoading ? 'loading' : isInitialized ? 'ready' : 'not initialized'})
            </div>
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

   // Show empty state only if we have statuses but no tasks in any of them
   if (sortedStatuses.length > 0 && !hasTasksInAnyStatus) {
      return (
         <div className={cn('w-full h-full')}>
            <EmptyTasksState statuses={sortedStatuses} variant="no-tasks" />
         </div>
      );
   }

   // If we have no statuses at all, show a loading/empty state
   if (sortedStatuses.length === 0) {
      return (
         <div className="flex items-center justify-center h-64">
            <div className="text-sm text-muted-foreground">No statuses configured</div>
         </div>
      );
   }

   return (
      <div className={cn('w-full h-full')}>
         {isSearching ? (
            <SearchTasksView />
         ) : isViewTypeGrid ? (
            <TaskGridView statuses={sortedStatuses} groupedTasks={groupedTasks} />
         ) : (
            <TaskListView statuses={sortedStatuses} groupedTasks={groupedTasks} />
         )}
      </div>
   );
}

const SearchTasksView = (): React.JSX.Element => (
   <div className="px-6 mb-6">
      <SearchTasks />
   </div>
);

export default AllTasks;
