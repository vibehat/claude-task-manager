'use client';

import React, { useState } from 'react';
import { IssueDetailsFragment } from '@/libs/client/types';
import { GitBranch, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SubIssueCreateForm } from './SubIssueCreateForm';
import { SubIssueItem } from './SubIssueItem';
import { EmptySubIssues } from './EmptySubIssues';

interface SubIssuesSectionProps {
   issue: IssueDetailsFragment;
   disabled?: boolean;
}

export function SubIssuesSection({ issue, disabled }: SubIssuesSectionProps) {
   const [isCreating, setIsCreating] = useState(false);
   const subIssues = issue.subIssues || [];

   const handleCreateSuccess = () => {
      setIsCreating(false);
   };

   const handleCreateCancel = () => {
      setIsCreating(false);
   };

   return (
      <div className="space-y-4">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
               <GitBranch className="h-4 w-4" />
               <span>Sub-issues ({subIssues.length})</span>
            </div>
            {!isCreating && (
               <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsCreating(true)}
                  disabled={disabled}
                  className="h-8 gap-2"
               >
                  <Plus className="h-3 w-3" />
                  Add sub-issue
               </Button>
            )}
         </div>

         {subIssues.length === 0 && !isCreating ? (
            <EmptySubIssues />
         ) : (
            <div className="space-y-1">
               {isCreating && (
                  <SubIssueCreateForm
                     issue={issue}
                     onSuccess={handleCreateSuccess}
                     onCancel={handleCreateCancel}
                  />
               )}

               {subIssues.map((subIssue) => (
                  <SubIssueItem
                     key={subIssue.id}
                     subIssue={subIssue}
                     parentIssue={issue}
                     disabled={disabled}
                  />
               ))}
            </div>
         )}
      </div>
   );
}
