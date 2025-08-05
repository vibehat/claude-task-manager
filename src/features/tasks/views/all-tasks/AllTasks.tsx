'use client';

import { useTags } from '@/libs/client/hooks/useTags';
import { useSearchStore } from '../../store/searchStore';
import { useViewStore } from '@/store/viewStore';
import { useDataStore } from '@/libs/client/stores';
import { useFilteredTasksByTag } from '../../hooks/useFilteredAndGroupedTasks';
import SearchTasks from './SearchTasks';
import { TaskListView } from '../tasks-list';
import { TaskGridView } from '../tasks-grid';
import { cn } from '@/libs/client/utils';
import { useMemo } from 'react';
import { EmptyTasksState } from '@/components/empty-states/EmptyTasksState';
import type { GroupItem } from '../../types/groupTypes';

function AllTasks(): React.JSX.Element {
  const { isSearchOpen, searchQuery } = useSearchStore();
  const { viewType } = useViewStore();

  // Fetch tags from Zustand store
  const { data: tags, loading: tagsLoading, error: tagsError } = useTags();

  // Get store loading state
  const isInitialized = useDataStore((state) => state.isInitialized);
  const isLoading = useDataStore((state) => state.isLoading);

  const isSearching = isSearchOpen && searchQuery.trim() !== '';
  const isViewTypeGrid = viewType === 'grid';

  // Get filtered and grouped tasks by tag
  const { groupedTasks, isEmpty } = useFilteredTasksByTag();

  console.log('AllTasks - groupedTasks:', groupedTasks);

  // Create tag groups for display
  const groupTags = useMemo((): GroupItem[] => {
    const tagGroups: GroupItem[] = [];

    // Only include tags that have tasks in groupedTasks
    Object.keys(groupedTasks).forEach((tagName) => {
      if (groupedTasks[tagName].length > 0) {
        if (tagName === 'no-tag') {
          tagGroups.push({
            key: 'no-tag',
            label: 'No Tag',
          });
        } else {
          tagGroups.push({
            key: tagName,
            label: tagName,
          });
        }
      }
    });

    // Sort alphabetically with 'No Tag' at the end
    return tagGroups.sort((a, b) => {
      if (a.key === 'no-tag') return 1;
      if (b.key === 'no-tag') return -1;
      return a.label.localeCompare(b.label);
    });
  }, [groupedTasks]);

  // Show loading state while fetching tags OR while store is initializing
  if (tagsLoading || isLoading || !isInitialized) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-sm text-muted-foreground">
          Loading... (tags: {tagsLoading ? 'loading' : 'ready'}, store:{' '}
          {isLoading ? 'loading' : isInitialized ? 'ready' : 'not initialized'})
        </div>
      </div>
    );
  }

  // Show error state if tags failed to load
  if (tagsError) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-sm text-red-500">Error loading tags: {tagsError.message}</div>
      </div>
    );
  }

  // Show empty state only if we have no tasks after filtering
  if (isEmpty) {
    return (
      <div className={cn('w-full h-full')}>
        <EmptyTasksState variant="no-tasks" />
      </div>
    );
  }

  return (
    <div className={cn('w-full h-full')}>
      {isSearching ? (
        <SearchTasksView />
      ) : isViewTypeGrid ? (
        <TaskGridView groups={groupTags} groupedTasks={groupedTasks} />
      ) : (
        <TaskListView groups={groupTags} groupedTasks={groupedTasks} />
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
