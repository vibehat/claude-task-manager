'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useUpdateTaskStore } from '@/store/updateTaskStore';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';

export function UpdateTaskModal(): React.JSX.Element {
   const { isOpen, task, closeModal } = useUpdateTaskStore();
   const { updateTask } = useDataStore();
   const [updating, setUpdating] = useState(false);

   // Form state
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');

   // Reset form when task changes
   useEffect(() => {
      if (task) {
         setTitle(task.title);
         setDescription(task.description || '');
      }
   }, [task]);

   const handleUpdate = async (): Promise<void> => {
      if (!task) return;

      try {
         setUpdating(true);
         updateTask(task.id, {
            title,
            description,
         });
         toast.success('Task updated successfully');
         closeModal();
      } catch (error) {
         toast.error('Failed to update task');
         console.error('Update task error:', error);
      } finally {
         setUpdating(false);
      }
   };

   const handleClose = (): void => {
      closeModal();
   };

   // Always render the dialog, but control visibility with open prop
   return (
      <Dialog open={isOpen} onOpenChange={(value) => !value && handleClose()}>
         <DialogContent className="w-full sm:max-w-[600px]">
            <DialogHeader>
               <DialogTitle>
                  <div className="flex items-center gap-2">
                     <span className="text-muted-foreground">{task?.id || 'Task'}</span>
                     <span>Update Task</span>
                  </div>
               </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
               <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                     id="title"
                     className="w-full"
                     placeholder="Task title"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                  />
               </div>

               <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                     id="description"
                     className="w-full min-h-[120px]"
                     placeholder="Add description..."
                     value={description}
                     onChange={(e) => setDescription(e.target.value)}
                  />
               </div>

               <div className="flex items-center justify-between pt-4">
                  <p className="text-sm text-muted-foreground">
                     Use the selectors in the task list to update status, priority, and assignee
                  </p>
                  <div className="flex items-center gap-2">
                     <Button variant="outline" onClick={handleClose} disabled={updating}>
                        Cancel
                     </Button>
                     <Button onClick={handleUpdate} disabled={updating || !title}>
                        {updating ? 'Updating...' : 'Update'}
                     </Button>
                  </div>
               </div>
            </div>
         </DialogContent>
      </Dialog>
   );
}
