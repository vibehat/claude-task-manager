'use client';

import { useSearchTasks } from '@/libs/client/hooks/tasks/queries/tasks/useSearchTasks';
import { useSearchStore } from '@/store/searchStore';

export function SearchTasks(): React.JSX.Element {
   const { searchQuery, isSearchOpen } = useSearchStore();

   // Use search with skip when query is empty
   const { data, loading, error } = useSearchTasks({
      query: searchQuery,
      skip: searchQuery.trim() === '',
   });

   const searchResults = data?.searchTasks || [];

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
                  <div className="text-center py-8 text-red-500">
                     Error searching: {error.message}
                  </div>
               ) : searchResults.length > 0 ? (
                  <div className="border rounded-md mt-4">
                     <div className="py-2 px-4 border-b bg-muted/50">
                        <h3 className="text-sm font-medium">Results ({searchResults.length})</h3>
                     </div>
                     <div className="divide-y">
                        {searchResults.map((task) => (
                           <div key={task.id} className="p-2 hover:bg-accent">
                              <div className="text-sm font-medium">{task.title}</div>
                              <div className="text-xs text-muted-foreground">
                                 {task.description}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               ) : (
                  <div className="text-center py-8 text-muted-foreground">
                     No results found for &quot;{searchQuery}&quot;
                  </div>
               )}
            </div>
         )}
      </div>
   );
}
