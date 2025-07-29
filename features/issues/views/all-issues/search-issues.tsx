'use client';

import { useSearchIssues } from '@/libs/client/hooks/issues/queries/issues/use-search-issues';
import { useSearchStore } from '@/store/search-store';
import { IssueLine } from '../../components/items/issue-line';

function SearchIssues(): React.JSX.Element {
   const { searchQuery, isSearchOpen } = useSearchStore();

   // Use GraphQL search with skip when query is empty
   const { data, loading, error } = useSearchIssues({
      query: searchQuery,
      skip: searchQuery.trim() === '',
   });

   const searchResults = data?.issues || [];

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
                        {searchResults.map((issue) => (
                           <IssueLine key={issue.id} issue={issue} layoutId={false} />
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

export default SearchIssues;
