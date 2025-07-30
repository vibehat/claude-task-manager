'use client';

import React, { useState } from 'react';
import {
   IssueDetailsFragment,
   useCreateIssueMutation,
} from '@/libs/client/graphql-client/generated';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, X } from 'lucide-react';
import { LexoRank } from '@/libs/client/utils';
import { toast } from 'sonner';

interface SubIssueCreateFormProps {
   issue: IssueDetailsFragment;
   onSuccess: () => void;
   onCancel: () => void;
}

export function SubIssueCreateForm({ issue, onSuccess, onCancel }: SubIssueCreateFormProps) {
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [createIssue, { loading }] = useCreateIssueMutation();

   const handleCreate = async () => {
      if (!title.trim()) {
         toast.error('Sub-issue title is required');
         return;
      }

      if (!issue.project?.id) {
         toast.error('Parent issue must have a project');
         return;
      }

      try {
         // Generate a unique identifier for the sub-issue
         const identifier = `SUB-${Date.now()}`;

         // Generate a rank for ordering (place at the end)
         const rank = new LexoRank('z' + Math.random().toString(36).substring(2)).toString();

         const { data } = await createIssue({
            variables: {
               data: {
                  identifier,
                  title: title.trim(),
                  description: description.trim() || 'Sub-issue',
                  status: 'pending',
                  issueType: 'subtask',
                  rank,
                  parentIssue: {
                     connect: { id: issue.id },
                  },
                  project: {
                     connect: { id: issue.project.id },
                  },
               },
            },
            refetchQueries: ['GetIssues', 'GetIssue'],
         });

         if (data?.createOneIssue) {
            toast.success('Sub-issue created successfully');
            setTitle('');
            setDescription('');
            onSuccess();
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
