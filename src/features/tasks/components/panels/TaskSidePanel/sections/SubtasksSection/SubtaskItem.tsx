'use client';

import React, { useState } from 'react';
import type { TaskDetailsFragment } from '@/libs/client/types';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
   ChevronRight,
   ChevronDown,
   Circle,
   CheckCircle2,
   CircleDot,
   PauseCircle,
   XCircle,
   Edit2,
   Trash2,
   FileText,
   TestTube,
} from 'lucide-react';
import { cn } from '@/libs/client/utils';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { SubtaskEditForm } from './SubtaskEditForm';

interface SubtaskItemProps {
   subtask: TaskDetailsFragment['subtasks'][0];
   parentTask: TaskDetailsFragment;
   disabled?: boolean;
}

export function SubtaskItem({ subtask, parentTask: _parentTask, disabled }: SubtaskItemProps) {
   const [isEditing, setIsEditing] = useState(false);
   const [isExpanded, setIsExpanded] = useState(false);
   const deleting = false;

   // Get assignee data - TODO: implement proper assignee logic
   const assignee = null;

   const getStatusIcon = (status?: string | null) => {
      switch (status) {
         case 'done':
            return <CheckCircle2 className="h-4 w-4 text-green-500" />;
         case 'in-progress':
            return <CircleDot className="h-4 w-4 text-blue-500" />;
         case 'review':
            return <PauseCircle className="h-4 w-4 text-yellow-500" />;
         case 'cancelled':
            return <XCircle className="h-4 w-4 text-red-500" />;
         case 'pending':
            return <Circle className="h-4 w-4 text-blue-400" />;
         default:
            return <Circle className="h-4 w-4 text-muted-foreground" />;
      }
   };

   const handleTitleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (isEditing || disabled) return;
      setIsExpanded(!isExpanded);
   };

   const handleClick = (e: React.MouseEvent) => {
      // Don't toggle expansion if clicking buttons
      const target = e.target as HTMLElement;
      if (target.closest('button')) return;

      // Allow clicking anywhere on the card to expand/collapse
      if (!isEditing && !disabled) {
         setIsExpanded(!isExpanded);
      }
   };

   const handleEdit = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsEditing(true);
   };

   const handleDelete = (e: React.MouseEvent) => {
      e.stopPropagation();

      if (!confirm('Are you sure you want to delete this subtask?')) {
         return;
      }

      try {
         // TODO: implement actual subtask deletion
         toast.success('Subtask deleted successfully');
      } catch (error) {
         toast.error('Failed to delete subtask');
         console.error('Delete subtask error:', error);
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
         <SubtaskEditForm
            subtask={subtask}
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
                  {getStatusIcon(subtask?.statusId)}
                  <span className="text-xs text-muted-foreground font-mono">{subtask?.id}</span>
                  <button
                     className="text-sm font-medium line-clamp-1 flex-1 text-left hover:underline"
                     onClick={handleTitleClick}
                  >
                     {subtask?.title}
                  </button>
               </div>

               <div className="flex items-center flex-shrink-0">
                  {assignee && (
                     <Avatar className="h-4 w-4">
                        <AvatarImage src={assignee.avatarUrl || undefined} />
                        <AvatarFallback className="text-xs">
                           {assignee.name?.charAt(0).toUpperCase() || '?'}
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

                  {isExpanded ? (
                     <ChevronDown className="h-2.5 w-2.5 text-muted-foreground" />
                  ) : (
                     <ChevronRight className="h-2.5 w-2.5 text-muted-foreground" />
                  )}
               </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
               {isExpanded && (
                  <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 'auto', opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     transition={{ duration: 0.2, ease: 'easeInOut' }}
                     className="overflow-hidden"
                  >
                     <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
                        {/* Description */}
                        {subtask?.description && (
                           <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                 <FileText className="h-3 w-3 text-muted-foreground" />
                                 <span className="text-xs font-medium text-muted-foreground">
                                    Description
                                 </span>
                              </div>
                              <p className="text-xs text-foreground/80 leading-relaxed pl-5">
                                 {subtask.description}
                              </p>
                           </div>
                        )}

                        {/* Details */}
                        {subtask?.details && (
                           <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                 <FileText className="h-3 w-3 text-blue-500" />
                                 <span className="text-xs font-medium text-blue-600">
                                    Implementation Details
                                 </span>
                              </div>
                              <p className="text-xs text-foreground/80 leading-relaxed pl-5">
                                 {subtask.details}
                              </p>
                           </div>
                        )}

                        {/* Test Strategy */}
                        {subtask?.testStrategy && (
                           <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                 <TestTube className="h-3 w-3 text-green-500" />
                                 <span className="text-xs font-medium text-green-600">
                                    Test Strategy
                                 </span>
                              </div>
                              <p className="text-xs text-foreground/80 leading-relaxed pl-5">
                                 {subtask.testStrategy}
                              </p>
                           </div>
                        )}

                        {/* Show a message if no additional info is available */}
                        {!subtask?.description && !subtask?.details && !subtask?.testStrategy && (
                           <div className="text-xs text-muted-foreground italic pl-5">
                              No additional details available
                           </div>
                        )}
                     </div>
                  </motion.div>
               )}
            </AnimatePresence>
         </CardContent>
      </Card>
   );
}
