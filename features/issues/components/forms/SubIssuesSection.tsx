'use client';

import React from 'react';
import { IssueDetailsFragment } from '@/libs/client/graphql-client/generated';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
   ChevronRight,
   GitBranch,
   Circle,
   CheckCircle2,
   CircleDot,
   PauseCircle,
   XCircle,
} from 'lucide-react';
import { cn } from '@/libs/client/utils';
import { useIssueSidePanelStore } from '@/store/issueSidePanelStore';

interface SubIssuesSectionProps {
   issue: IssueDetailsFragment;
   disabled?: boolean;
}

export function SubIssuesSection({ issue, disabled }: SubIssuesSectionProps) {
   const subIssues = issue.subIssues || [];

   if (subIssues.length === 0) {
      return null;
   }

   return (
      <div className="space-y-2">
         <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <GitBranch className="h-4 w-4" />
            <span>Sub-issues ({subIssues.length})</span>
         </div>

         <div className="space-y-2">
            {subIssues.map((subIssue) => (
               <SubIssueItem key={subIssue.id} subIssue={subIssue} disabled={disabled} />
            ))}
         </div>
      </div>
   );
}

interface SubIssueItemProps {
   subIssue: IssueDetailsFragment['subIssues'][0];
   disabled?: boolean;
}

function SubIssueItem({ subIssue, disabled }: SubIssueItemProps) {
   const { openPanel } = useIssueSidePanelStore();

   const getStatusIcon = (status?: string | null) => {
      switch (status) {
         case 'completed':
            return <CheckCircle2 className="h-4 w-4 text-green-500" />;
         case 'in-progress':
            return <CircleDot className="h-4 w-4 text-blue-500" />;
         case 'paused':
            return <PauseCircle className="h-4 w-4 text-yellow-500" />;
         case 'cancelled':
            return <XCircle className="h-4 w-4 text-red-500" />;
         default:
            return <Circle className="h-4 w-4 text-muted-foreground" />;
      }
   };

   const handleClick = () => {
      if (!disabled) {
         // We need to pass a full issue object to openPanel, so we'll cast the subIssue
         openPanel(subIssue as any);
      }
   };

   return (
      <Card
         className={cn(
            'cursor-pointer hover:bg-accent/50 transition-colors',
            disabled && 'opacity-50 cursor-not-allowed'
         )}
         onClick={handleClick}
      >
         <CardContent className="p-4">
            <div className="flex items-start justify-between gap-3">
               <div className="flex items-start gap-3 flex-1 min-w-0">
                  {getStatusIcon(subIssue.status)}

                  <div className="flex-1 min-w-0">
                     <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-muted-foreground font-mono">
                           {subIssue.identifier}
                        </span>
                     </div>

                     <h4 className="text-sm font-medium line-clamp-2">{subIssue.title}</h4>
                  </div>
               </div>

               <div className="flex items-center gap-2 flex-shrink-0">
                  {subIssue.assignee && (
                     <Avatar className="h-6 w-6">
                        <AvatarImage src={subIssue.assignee.avatarUrl || undefined} />
                        <AvatarFallback className="text-xs">
                           {subIssue.assignee.name?.charAt(0).toUpperCase() || '?'}
                        </AvatarFallback>
                     </Avatar>
                  )}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
               </div>
            </div>
         </CardContent>
      </Card>
   );
}
