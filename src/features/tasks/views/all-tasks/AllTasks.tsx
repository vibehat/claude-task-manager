'use client';

import { useStatuses } from '@/libs/client/hooks/useStatuses';
import { useSearchStore } from '../../store/searchStore';
import { useViewStore } from '@/store/viewStore';
import { useDataStore } from '@/libs/client/stores/dataStore';
import SearchTasks from './SearchTasks';
import { TaskListView } from '../tasks-list';
import { TaskGridView } from '../tasks-grid';
import { cn } from '@/libs/client/utils';
import { useMemo } from 'react';
import type { Task, TaskStatus } from '@/libs/client/types/dataModels';

function AllTasks(): React.JSX.Element {
   const { isSearchOpen, searchQuery } = useSearchStore();
   const { viewType } = useViewStore();

   // Fetch statuses from Zustand store
   const { data: statuses, loading: statusesLoading, error: statusesError } = useStatuses();

   // Get all tasks from the data store
   const allTasks = useDataStore((state) => state.tasks);

   const isSearching = isSearchOpen && searchQuery.trim() !== '';
   const isViewTypeGrid = viewType === 'grid';

   // Sort statuses based on their order property
   const sortedStatuses = useMemo(() => {
      if (!statuses) return [];
      return [...statuses].sort((a, b) => a.order - b.order);
   }, [statuses]);

   // Group tasks by status and filter parent tasks only
   const groupedTasks = useMemo(() => {
      if (!sortedStatuses.length || !allTasks.length) return new Map<string, Task[]>();

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
