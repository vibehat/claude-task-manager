'use client';
import { useMemo } from 'react';
import { useStatuses } from '@/libs/client/hooks/useStatuses';
import { useSearchStore } from '../../store/searchStore';
import { useViewStore } from '@/store/viewStore';
import { useDataStore } from '@/libs/client/stores';
import { useCurrentTag } from '@/libs/client/stores/selectors';
import { useFilteredTasksByStatus } from '../../hooks/useFilteredAndGroupedTasks';
import SearchTasks from './SearchTasks';
import { TaskListView } from '../tasks-list';
import { TaskGridView } from '../tasks-grid';
import { cn } from '@/libs/client/utils';
import { EmptyTasksState } from '@/components/empty-states/EmptyTasksState';
import { getTaskStatusIcon } from '../../hooks/useTaskStatusIcon';
import type { GroupItem } from '../../types/groupTypes';

function CurrentTasks(): React.JSX.Element {
  const { isSearchOpen, searchQuery } = useSearchStore();
  const { viewType } = useViewStore();

  // Fetch statuses from Zustand store
  const { data: statuses, loading: statusesLoading, error: statusesError } = useStatuses();

  // Get store state
  const isInitialized = useDataStore((state) => state.isInitialized);
  const isLoading = useDataStore((state) => state.isLoading);

  // Get current tag from TaskMaster
  const currentTag = useCurrentTag();

  const isSearching = isSearchOpen && searchQuery.trim() !== '';
  const isViewTypeGrid = viewType === 'grid';

  // Sort statuses based on their order property
  const sortedStatuses = useMemo(() => {
    if (!statuses) return [];
    return [...statuses].sort((a, b) => a.order - b.order);
  }, [statuses]);

  // Get filtered and grouped tasks by status, filtered by current tag only
  const { groupedTasks, isEmpty } = useFilteredTasksByStatus(
    currentTag ? { tagIds: [currentTag] } : undefined
  );

  // Create status groups with icons
  const statusGroups = useMemo((): GroupItem[] => {
    if (!sortedStatuses) return [];

    return sortedStatuses.map((status) => {
      return {
        key: status.id,
        label: status.name,
        icon: getTaskStatusIcon(status),
      };
    });
  }, [sortedStatuses]);

  // Check if there are any tasks after filtering
  const hasTasksInAnyStatus = !isEmpty;

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
        <div className="text-sm text-red-500">Error loading statuses: {statusesError.message}</div>
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
        <TaskGridView groupedTasks={groupedTasks} groups={statusGroups} />
      ) : (
        <TaskListView groupedTasks={groupedTasks} groups={statusGroups} />
      )}
    </div>
  );
}

const SearchTasksView = (): React.JSX.Element => (
  <div className="px-6 mb-6">
    <SearchTasks />
  </div>
);

export default CurrentTasks;
