'use client';

import React, { useState } from 'react';
import { Issue } from '@/libs/client/services/mockDataService';
import { useIssueMutations } from '@/libs/client/hooks/useIssues';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, X } from 'lucide-react';
import { toast } from 'sonner';

interface SubIssueCreateFormProps {
   issue: Issue;
   onSuccess: () => void;
   onCancel: () => void;
}

export function SubIssueCreateForm({ issue, onSuccess, onCancel }: SubIssueCreateFormProps) {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const { createIssue, loading } = useIssueMutations();

   const handleCreate = async () => {
      if (!title.trim()) {
         toast.error('Sub-issue title is required');
         return;
      }

      try {
         const result = await createIssue({
            title: title.trim(),
            description: description.trim() || undefined,
            statusId: issue.statusId, // Use same status as parent
            priorityId: issue.priorityId,
            assigneeId: issue.assigneeId,
            projectId: issue.projectId,
            parentIssueId: issue.id,
            labelIds: [],
         });

         if (result.data) {
            toast.success('Sub-issue created successfully');
            setTitle('');
            setDescription('');
            onSuccess();
         } else if (result.error) {
            toast.error('Failed to create sub-issue');
            console.error('Create sub-issue error:', result.error);
         }
      } catch (error) {
         toast.error('Failed to create sub-issue');
         console.error('Create sub-issue error:', error);
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
               placeholder="Sub-issue title..."
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
