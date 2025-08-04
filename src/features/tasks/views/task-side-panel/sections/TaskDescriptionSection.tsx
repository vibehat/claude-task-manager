'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MarkdownEditor } from '../../../components/editors/MarkdownEditor';

interface TaskDescriptionSectionProps {
  initialValue: string;
  onSave: (value: string) => void;
  disabled?: boolean;
}

export function TaskDescriptionSection({
  initialValue,
  onSave,
  disabled = false,
}: TaskDescriptionSectionProps): React.JSX.Element {
  const [description, setDescription] = useState(initialValue);

  useEffect(() => {
    setDescription(initialValue);
  }, [initialValue]);

  const handleSave = (): void => {
    if (description !== initialValue) {
      onSave(description);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-medium">Description</Label>
        <Button
          variant="outline"
          size="sm"
          onClick={handleSave}
          disabled={disabled}
          className="h-7 px-2 text-xs"
        >
          Save
        </Button>
      </div>
      <MarkdownEditor
        value={description}
        onChange={setDescription}
        placeholder="Add a description..."
        disabled={disabled}
      />
    </div>
  );
}

export default TaskDescriptionSection;
