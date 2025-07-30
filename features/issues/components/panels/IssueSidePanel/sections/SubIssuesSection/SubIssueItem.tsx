'use client';

import React, { useState } from 'react';
import {
   IssueDetailsFragment,
   useDeleteIssueMutation,
} from '@/libs/client/graphql-client/generated';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
   ChevronRight,
   Circle,
   CheckCircle2,
   CircleDot,
   PauseCircle,
   XCircle,
   Edit2,
   Trash2,
} from 'lucide-react';
import { cn } from '@/libs/client/utils';
import { useIssueSidePanelStore } from '@/store/issueSidePanelStore';
import { toast } from 'sonner';
import { SubIssueEditForm } from './SubIssueEditForm';

interface SubIssueItemProps {
   subIssue: IssueDetailsFragment['subIssues'][0];
   parentIssue: IssueDetailsFragment;
   disabled?: boolean;
}

export function SubIssueItem({ subIssue, parentIssue, disabled }: SubIssueItemProps) {
   const [isEditing, setIsEditing] = useState(false);
   const { openPanel } = useIssueSidePanelStore();
   const [deleteIssue, { loading: deleting }] = useDeleteIssueMutation();

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

   const handleClick = (e: React.MouseEvent) => {
      // Don't open panel if clicking edit/delete buttons or if editing
      if (isEditing || disabled) return;

      const target = e.target as HTMLElement;
      if (target.closest('button')) return;

      // We need to pass a full issue object to openPanel, so we'll cast the subIssue
      openPanel(subIssue as any);
   };

   const handleEdit = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsEditing(true);
   };

   const handleDelete = async (e: React.MouseEvent) => {
      e.stopPropagation();

      if (!confirm('Are you sure you want to delete this sub-issue?')) {
         return;
      }

      try {
         await deleteIssue({
            variables: {
               where: { id: subIssue.id },
            },
            refetchQueries: ['GetIssues', 'GetIssue'],
         });
         toast.success('Sub-issue deleted successfully');
      } catch (error) {
         toast.error('Failed to delete sub-issue');
         console.error('Delete sub-issue error:', error);
      }
   };

   const handleEditSuccess = () => {
      setIsEditing(false);
   };

   const handleEditCancel = () => {
      setIsEditing(false);
   };

   if (isEditing) {
      return (
         <SubIssueEditForm
            subIssue={subIssue}
            onSuccess={handleEditSuccess}
            onCancel={handleEditCancel}
         />
      );
   }

   return (
      <Card
         className={cn(
            'cursor-pointer hover:bg-accent/50 transition-colors group',
            'py-3',
            'px-3',
            disabled && 'opacity-50 cursor-not-allowed'
         )}
         onClick={handleClick}
      >
         <CardContent className="px-1 py-0">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3 flex-1 min-w-0">
                  {getStatusIcon(subIssue.status)}
                  <span className="text-xs text-muted-foreground font-mono">
                     {subIssue.identifier}
                  </span>
                  <h4 className="text-sm font-medium line-clamp-1 flex-1">{subIssue.title}</h4>
               </div>

               <div className="flex items-center flex-shrink-0">
                  {subIssue.assignee && (
                     <Avatar className="h-4 w-4">
                        <AvatarImage src={subIssue.assignee.avatarUrl || undefined} />
                        <AvatarFallback className="text-xs">
                           {subIssue.assignee.name?.charAt(0).toUpperCase() || '?'}
                        </AvatarFallback>
                     </Avatar>
                  )}

                  <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleEdit}
                        disabled={disabled || deleting}
                        className="h-4 w-4 p-0"
                     >
                        <Edit2 className="h-2 w-2" />
                     </Button>
                     <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleDelete}
                        disabled={disabled || deleting}
                        className="h-4 w-4 p-0 text-destructive hover:text-destructive"
                     >
                        <Trash2 className="h-2 w-2" />
                     </Button>
                  </div>

                  <ChevronRight className="h-2.5 w-2.5 text-muted-foreground" />
               </div>
            </div>
         </CardContent>
      </Card>
   );
}
