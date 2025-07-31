'use client';

import React, { useState } from 'react';
import type { TaskDetailsFragment } from '@/libs/client/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, X } from 'lucide-react';
import { toast } from 'sonner';

interface SubtaskCreateFormProps {
   task: TaskDetailsFragment;
   onSuccess: () => void;
   onCancel: () => void;
}

export function SubtaskCreateForm({ task, onSuccess, onCancel }: SubtaskCreateFormProps) {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [loading, setLoading] = useState(false);

   const handleCreate = async () => {
      if (!title.trim()) {
         toast.error('Subtask title is required');
         return;
      }

      setLoading(true);
      try {
         // TODO: Implement actual subtask creation logic
         await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

         toast.success('Subtask created successfully');
         setTitle('');
         setDescription('');
         onSuccess();
      } catch (error) {
         toast.error('Failed to create subtask');
         console.error('Create subtask error:', error);
      } finally {
         setLoading(false);
      }
   };

   const handleCancel = () => {
      setTitle('');
      setDescription('');
      onCancel();
   };

   return (
      <Card className="border-dashed border-primary/50">
         <CardContent className="p-4 space-y-3">
            <Input
               placeholder="Subtask title..."
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               disabled={loading}
               autoFocus
            />
            <Textarea
               placeholder="Description (optional)..."
               value={description}
               onChange={(e) => setDescription(e.target.value)}
               disabled={loading}
               rows={3}
            />
            <div className="flex items-center gap-2">
               <Button
                  size="sm"
                  onClick={handleCreate}
                  disabled={loading || !title.trim()}
                  className="gap-2"
               >
                  <Check className="h-3 w-3" />
                  Create
               </Button>
               <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCancel}
                  disabled={loading}
                  className="gap-2"
               >
                  <X className="h-3 w-3" />
                  Cancel
               </Button>
            </div>
         </CardContent>
      </Card>
   );
}
