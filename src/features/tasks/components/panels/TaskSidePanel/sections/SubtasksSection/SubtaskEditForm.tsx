'use client';

import React, { useState } from 'react';
import type { IssueDetailsFragment } from '@/libs/client/types';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, X } from 'lucide-react';
import { toast } from 'sonner';

interface SubIssueEditFormProps {
   subIssue: IssueDetailsFragment['subIssues'][0];
   onSuccess: () => void;
   onCancel: () => void;
}

export function SubIssueEditForm({ subIssue, onSuccess, onCancel }: SubIssueEditFormProps) {
   const [title, setTitle] = useState(subIssue.title);
   const [description, setDescription] = useState('');
   const { updateIssue } = useDataStore();
   const loading = false;

   const handleSave = () => {
      if (!title.trim()) {
         toast.error('Sub-issue title is required');
         return;
      }

      try {
         updateIssue(subIssue.id, {
            title: title.trim(),
            description: description.trim() || undefined,
         });

         toast.success('Sub-issue updated successfully');
         onSuccess();
      } catch (error) {
         toast.error('Failed to update sub-issue');
         console.error('Update sub-issue error:', error);
      }
   };

   const handleCancel = () => {
      setTitle(subIssue.title);
      setDescription('');
      onCancel();
   };

   return (
      <Card className="border-primary/50">
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
                  onClick={handleSave}
                  disabled={loading || !title.trim()}
                  className="gap-2"
               >
                  <Check className="h-3 w-3" />
                  Save
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
