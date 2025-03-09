'use client';

import { GroupIssues } from '@/components/common/group-issues';
import { useIssuesStore } from '@/store/issues-store';
import { useSearchStore } from '@/store/search-store';
import { useViewStore } from '@/store/view-store';
import { cn } from '@/lib/utils';
import { status } from '@/mock-data/status';
import { SearchIssues } from './search-issues';

export default function AllIssues() {
   const { issuesByStatus } = useIssuesStore();
   const { isSearchOpen, searchQuery } = useSearchStore();
   const { viewType } = useViewStore();

   return (
      <div className={cn('w-full h-full', viewType === 'grid' ? 'overflow-x-auto' : '')}>
         {isSearchOpen && searchQuery.trim() !== '' ? (
            <div className="px-6 mb-6">
               <SearchIssues />
            </div>
         ) : viewType === 'list' ? (
            <div>
               {status.map((statusItem) => (
                  <GroupIssues
                     key={statusItem.id}
                     status={statusItem}
                     issues={issuesByStatus[statusItem.id] || []}
                     count={issuesByStatus[statusItem.id]?.length || 0}
                  />
               ))}
            </div>
         ) : (
            <div className="flex h-full gap-3 px-2 py-2 min-w-max">
               {status.map((statusItem) => (
                  <GroupIssues
                     key={statusItem.id}
                     status={statusItem}
                     issues={issuesByStatus[statusItem.id] || []}
                     count={issuesByStatus[statusItem.id]?.length || 0}
                  />
               ))}
            </div>
         )}
      </div>
   );
}
