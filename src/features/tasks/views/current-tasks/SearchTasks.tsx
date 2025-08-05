'use client';

import { useSearchTasks } from '@/libs/client/hooks/tasks/queries/tasks/useSearchTasks';
import { useSearchStore } from '@/store/searchStore';
import { useDataStore } from '@/libs/client/stores';
import { TaskLine } from '../../components/items/TaskLine';
import { useMemo } from 'react';

function SearchTasks(): React.JSX.Element {
  const { searchQuery, isSearchOpen } = useSearchStore();
  // TODO: Fix getCurrentTag method or use alternative approach
  const currentTag = null;

  // Use GraphQL search with skip when query is empty
  const { data, loading, error } = useSearchTasks({
    query: searchQuery,
    skip: searchQuery.trim() === '',
  });

  // Filter search results by current tag
  const filteredSearchResults = useMemo(() => {
    const searchResults = data?.searchTasks || [];

    if (!currentTag) {
      return searchResults;
    }

    return searchResults.filter((task) => task.tagId === currentTag);
  }, [data?.searchTasks, currentTag]);

  if (!isSearchOpen) {
    return <></>;
  }

  return (
    <div className="w-full">
      {searchQuery.trim() !== '' && (
        <div>
          {loading ? (
            <div className="text-center py-8 text-muted-foreground">Searching...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">Error searching: {error.message}</div>
          ) : filteredSearchResults.length > 0 ? (
            <div className="border rounded-md mt-4">
              <div className="py-2 px-4 border-b bg-muted/50">
                <h3 className="text-sm font-medium">Results ({filteredSearchResults.length})</h3>
              </div>
              <div className="divide-y">
                {filteredSearchResults.map((task) => (
                  <TaskLine key={task.id} task={task} layoutId={false} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No results found for &quot;{searchQuery}&quot;
              {currentTag && <div className="text-xs mt-1">in current tag</div>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchTasks;
