'use client';

import React, { useState } from 'react';
import type { TaskDetailsFragment } from '@/libs/client/types';
import { GitBranch, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SubtaskCreateForm } from './SubtaskCreateForm';
import { SubtaskItem } from './SubtaskItem';
import { EmptySubtasks } from './EmptySubtasks';

interface SubtasksSectionProps {
   task: TaskDetailsFragment;
   disabled?: boolean;
}

export function SubtasksSection({ task, disabled }: SubtasksSectionProps) {
   const [isCreating, setIsCreating] = useState(false);
   const subtasks = task.subtasks || [];

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
               <span>Subtasks ({subtasks.length})</span>
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
                  Add subtask
               </Button>
            )}
         </div>

         {subtasks.length === 0 && !isCreating ? (
            <EmptySubtasks />
         ) : (
            <div className="space-y-1">
               {isCreating && (
                  <SubtaskCreateForm
                     task={task}
                     onSuccess={handleCreateSuccess}
                     onCancel={handleCreateCancel}
                  />
               )}

               {subtasks.map((subtask) => (
                  <SubtaskItem
                     key={subtask.id}
                     subtask={subtask}
                     parentTask={task}
                     disabled={disabled}
                  />
               ))}
            </div>
         )}
      </div>
   );
}
