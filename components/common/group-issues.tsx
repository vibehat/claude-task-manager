'use client';

import { Status } from '@/lib/mock-data/status';
import { Issue } from '@/lib/mock-data/issues';
import { IssueLine } from './issue-line';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

interface GroupIssuesProps {
   status: Status;
   issues: Issue[];
   count: number;
}

export function GroupIssues({ status, issues, count }: GroupIssuesProps) {
   return (
      <div className="bg-container">
         <div className="sticky top-0 z-10 bg-container w-full h-10">
            <div
               className="w-full h-full flex items-center justify-between px-6"
               style={{
                  backgroundColor: `${status.color}08`,
               }}
            >
               <div className="flex items-center gap-2">
                  <status.icon />
                  <span className="text-sm font-medium">{status.name}</span>
                  <span className="text-sm text-muted-foreground">{count}</span>
               </div>

               <Button className="size-6 " size="icon" variant="ghost">
                  <Plus className="size-4" />
               </Button>
            </div>
         </div>

         <div className="space-y-0">
            {issues.map((issue) => (
               <IssueLine key={issue.id} issue={issue} />
            ))}
         </div>
      </div>
   );
}
