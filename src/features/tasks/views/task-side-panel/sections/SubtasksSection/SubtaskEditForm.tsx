'use client';

import React, { useState } from 'react';
import type { Subtask } from '@/libs/client/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, X } from 'lucide-react';
import { toast } from 'sonner';

interface SubtaskEditFormProps {
  subtask: Subtask;
  onSuccess: () => void;
  onCancel: () => void;
}

export function SubtaskEditForm({ subtask, onSuccess, onCancel }: SubtaskEditFormProps) {
  const [title, setTitle] = useState(subtask?.title || '');
  const [description, setDescription] = useState('');
  const loading = false;

  const handleSave = () => {
    if (!title.trim()) {
      toast.error('Subtask title is required');
      return;
    }

    try {
      // TODO: Implement actual subtask update logic
      toast.success('Subtask updated successfully');
      onSuccess();
    } catch (error) {
      toast.error('Failed to update subtask');
      console.error('Update subtask error:', error);
    }
  };

  const handleCancel = () => {
    setTitle(subtask?.title || '');
    setDescription('');
    onCancel();
  };

  return (
    <Card className="border-primary/50">
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
