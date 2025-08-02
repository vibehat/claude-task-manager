'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { FileText, TestTube, Edit2 } from 'lucide-react';
import { MarkdownEditor } from '../../../editors/MarkdownEditor';
import type { Task } from '@/libs/client/types';

interface TaskInfoSectionProps {
   task: Task;
   onDescriptionSave?: (value: string) => void;
   disabled?: boolean;
}

export function TaskInfoSection({
   task,
   onDescriptionSave,
   disabled = false,
}: TaskInfoSectionProps): React.JSX.Element {
   const [description, setDescription] = useState(task.description || '');
   const [isEditing, setIsEditing] = useState(false);

   useEffect(() => {
      setDescription(task.description || '');
   }, [task.description]);

   const handleSave = (): void => {
      if (description !== task.description && onDescriptionSave) {
         onDescriptionSave(description);
      }
      setIsEditing(false);
   };

   const handleCancel = (): void => {
      setDescription(task.description || '');
      setIsEditing(false);
   };

   return (
      <div className="space-y-4">
         {/* Description Section */}
         <div className="space-y-3">
            <div className="flex items-center justify-between">
               <Label className="text-sm font-medium">Description</Label>
               {!isEditing && (
                  <Button
                     variant="ghost"
                     size="sm"
                     onClick={() => setIsEditing(true)}
                     disabled={disabled}
                     className="h-7 px-2"
                  >
                     <Edit2 className="h-3 w-3 mr-1" />
                     Edit
                  </Button>
               )}
            </div>

            {isEditing ? (
               <div className="space-y-3">
                  <MarkdownEditor
                     value={description}
                     onChange={setDescription}
                     placeholder="Add a description..."
                     disabled={disabled}
                  />
                  <div className="flex justify-end gap-2">
                     <Button variant="outline" size="sm" onClick={handleCancel} className="h-7">
                        Cancel
                     </Button>
                     <Button size="sm" onClick={handleSave} className="h-7">
                        Save
                     </Button>
                  </div>
               </div>
            ) : (
               <div className="text-sm text-foreground/80 leading-relaxed">
                  {task.description || (
                     <span className="text-muted-foreground italic">No description provided</span>
                  )}
               </div>
            )}
         </div>

         {/* Implementation Details Section */}
         {task.details && (
            <div className="space-y-2">
               <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-blue-500" />
                  <Label className="text-sm font-medium text-blue-600">
                     Implementation Details
                  </Label>
               </div>
               <p className="text-sm text-foreground/80 leading-relaxed pl-6">{task.details}</p>
            </div>
         )}

         {/* Test Strategy Section */}
         {task.testStrategy && (
            <div className="space-y-2">
               <div className="flex items-center gap-2">
                  <TestTube className="h-4 w-4 text-green-500" />
                  <Label className="text-sm font-medium text-green-600">Test Strategy</Label>
               </div>
               <p className="text-sm text-foreground/80 leading-relaxed pl-6">
                  {task.testStrategy}
               </p>
            </div>
         )}
      </div>
   );
}
