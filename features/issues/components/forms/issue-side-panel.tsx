'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useIssueSidePanelStore } from '@/store/issue-side-panel-store';
import { useUpdateIssueMutation } from '@/libs/client/graphql-client/generated';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Calendar, Clock, User, Flag, Folder, X } from 'lucide-react';
import { StatusSelector } from '../selectors/status-selector';
import { PrioritySelector } from '../selectors/priority-selector';
import { AssigneeUser } from '../assignee-user';
import { cn } from '@/libs/client/utils';

export function IssueSidePanel(): React.JSX.Element {
   const { isOpen, issue, closePanel } = useIssueSidePanelStore();
   const [updateIssue, { loading: updating }] = useUpdateIssueMutation();

   // Form state
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');

   // Reset form when issue changes
   useEffect(() => {
      if (issue) {
         setTitle(issue.title);
         setDescription(issue.description || '');
      }
   }, [issue]);

   const handleUpdate = async (field: 'title' | 'description'): Promise<void> => {
      if (!issue) return;

      try {
         await updateIssue({
            variables: {
               where: {
                  id: issue.id,
               },
               data: {
                  [field]: { set: field === 'title' ? title : description },
               },
            },
            refetchQueries: ['GetIssues'],
         });
         toast.success(`${field === 'title' ? 'Title' : 'Description'} updated successfully`);
      } catch (error) {
         toast.error(`Failed to update ${field}`);
         console.error(`Update ${field} error:`, error);
      }
   };

   const handleTitleBlur = (): void => {
      if (issue && title !== issue.title && title.trim()) {
         handleUpdate('title');
      }
   };

   const handleDescriptionBlur = (): void => {
      if (issue && description !== (issue.description || '')) {
         handleUpdate('description');
      }
   };

   const handleClose = (): void => {
      closePanel();
   };

   if (!issue) return <></>;

   return (
      <Sheet open={isOpen} onOpenChange={(open) => !open && handleClose()}>
         <SheetContent side="right" className="w-full sm:w-[600px] p-0 overflow-y-auto">
            <SheetHeader className="p-6 pb-4 border-b">
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
                  <Button variant="ghost" size="icon" onClick={handleClose} className="h-6 w-6">
                     <X className="h-4 w-4" />
                  </Button>
               </div>
            </SheetHeader>

            <div className="p-6 space-y-6">
               {/* Title Section */}
               <div className="space-y-2">
                  <Input
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     onBlur={handleTitleBlur}
                     className="text-xl font-semibold border-none px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
                     placeholder="Issue title"
                     disabled={updating}
                  />
               </div>

               {/* Description Section */}
               <div className="space-y-3">
                  <Label className="text-sm font-medium">Description</Label>
                  <Textarea
                     value={description}
                     onChange={(e) => setDescription(e.target.value)}
                     onBlur={handleDescriptionBlur}
                     className="min-h-[120px] resize-none"
                     placeholder="Add a description..."
                     disabled={updating}
                  />
               </div>

               <Separator />

               {/* Details Section */}
               <div className="space-y-4">
                  <h3 className="text-sm font-medium">Details</h3>

                  <div className="grid gap-4">
                     {/* Assignee */}
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                           <User className="h-4 w-4" />
                           <span>Assignee</span>
                        </div>
                        <div className="flex items-center gap-2">
                           {issue.assignee ? (
                              <AssigneeUser user={issue.assignee} />
                           ) : (
                              <span className="text-sm text-muted-foreground">Unassigned</span>
                           )}
                        </div>
                     </div>

                     {/* Priority */}
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                           <Flag className="h-4 w-4" />
                           <span>Priority</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <PrioritySelector priority={issue.issuePriority} issueId={issue.id} />
                        </div>
                     </div>

                     {/* Status */}
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                           <Flag className="h-4 w-4" />
                           <span>Status</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <StatusSelector status={issue.issueStatus} issueId={issue.id} />
                        </div>
                     </div>

                     {/* Project */}
                     {issue.projectId && (
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Folder className="h-4 w-4" />
                              <span>Project</span>
                           </div>
                           <Badge variant="outline">Project ID: {issue.projectId}</Badge>
                        </div>
                     )}

                     {/* Due Date */}
                     {issue.dueDate && (
                        <div className="flex items-center justify-between">
                           <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>Due Date</span>
                           </div>
                           <span className="text-sm">
                              {format(new Date(issue.dueDate), 'MMM dd, yyyy')}
                           </span>
                        </div>
                     )}

                     {/* Created */}
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                           <Clock className="h-4 w-4" />
                           <span>Created</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                           {format(new Date(issue.createdAt), 'MMM dd, yyyy')}
                        </span>
                     </div>

                     {/* Updated */}
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                           <Clock className="h-4 w-4" />
                           <span>Updated</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                           {format(new Date(issue.updatedAt), 'MMM dd, yyyy')}
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </SheetContent>
      </Sheet>
   );
}
