'use client';

import { GroupIssues } from '@/components/common/group-issues';
import { status } from '@/lib/mock-data/status';
import { useIssuesStore } from '@/lib/store/issues-store';
import { useSearchStore } from '@/lib/store/search-store';
import { SearchIssues } from './search-issues';

export default function AllIssues() {
   const { issuesByStatus } = useIssuesStore();
   const { isSearchOpen, searchQuery } = useSearchStore();

   return (
      <div className="w-full">
         {isSearchOpen && searchQuery.trim() !== '' ? (
            <div className="px-6 mb-6">
               <SearchIssues />
            </div>
         ) : (
            status.map((statusItem) => (
               <GroupIssues
                  key={statusItem.id}
                  status={statusItem}
                  issues={issuesByStatus[statusItem.id] || []}
                  count={issuesByStatus[statusItem.id]?.length || 0}
               />
            ))
         )}
      </div>
   );
}
