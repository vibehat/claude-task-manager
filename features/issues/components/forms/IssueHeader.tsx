'use client';

import type { GetIssuesQuery } from '@/libs/client/graphql-client/generated';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { StatusSelector } from '../selectors/StatusSelector';
import { PrioritySelector } from '../selectors/PrioritySelector';

type IssueFromQuery = GetIssuesQuery['issues'][0];

interface IssueHeaderProps {
   issue: IssueFromQuery;
   onClose: () => void;
}

export function IssueHeader({ issue, onClose }: IssueHeaderProps): React.JSX.Element {
   return (
      <div className="p-6 pb-4 border-b">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
               <Badge variant="secondary" className="font-mono text-xs">
                  {issue.identifier}
               </Badge>
               <div className="flex items-center gap-2">
                  <StatusSelector status={issue.issueStatus} issueId={issue.id} />
                  <PrioritySelector priority={issue.issuePriority} issueId={issue.id} />
               </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6">
               <X className="h-4 w-4" />
            </Button>
         </div>
      </div>
   );
}

export default IssueHeader;
