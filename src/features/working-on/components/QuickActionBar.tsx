import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRightLeft, Target, NotebookPen, Loader2 } from 'lucide-react';
import type { QuickActionBarProps } from '../types/workingOnTypes';

/**
 * Quick Actions Bar Component
 * Primary action buttons for task management without leaving the focused workflow
 */
export const QuickActionBar: React.FC<QuickActionBarProps> = ({
  task,
  onTaskComplete,
  onTaskSwitch,
  onAddNote,
  onToggleFocus,
}) => {
  const [isCompleting, setIsCompleting] = useState(false);

  // Handle task completion with loading state
  const handleComplete = async () => {
    setIsCompleting(true);
    try {
      await onTaskComplete(task.id.toString());
    } catch (error) {
      console.error('Failed to complete task:', error);
    } finally {
      setIsCompleting(false);
    }
  };

  // Handle task switching
  const handleSwitch = () => {
    onTaskSwitch(task.id.toString());
  };

  // Handle adding a quick note
  const handleAddNote = () => {
    const note = prompt('Add a quick note:');
    if (note?.trim()) {
      onAddNote(note.trim());
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 p-4 border-t bg-card/50">
      {/* Primary action - Mark Complete */}
      <Button
        onClick={handleComplete}
        disabled={isCompleting}
        className="flex-1 sm:flex-none min-h-[44px] flex items-center justify-center gap-2"
        variant="default"
      >
        {isCompleting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Completing...
          </>
        ) : (
          <>
            <CheckCircle className="w-4 h-4" />
            Mark Complete
          </>
        )}
      </Button>

      {/* Secondary actions */}
      <div className="flex gap-2 flex-1 sm:flex-none">
        {/* Add Quick Note */}
        <Button
          onClick={handleAddNote}
          variant="outline"
          size="default"
          className="flex-1 sm:flex-none min-h-[44px] flex items-center justify-center gap-2"
        >
          <NotebookPen className="w-4 h-4" />
          <span className="hidden sm:inline">Quick Note</span>
        </Button>

        {/* Switch Task */}
        <Button
          onClick={handleSwitch}
          variant="outline"
          size="default"
          className="flex-1 sm:flex-none min-h-[44px] flex items-center justify-center gap-2"
        >
          <ArrowRightLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Switch</span>
        </Button>

        {/* Focus Mode Toggle */}
        <Button
          onClick={onToggleFocus}
          variant="ghost"
          size="default"
          className="flex-1 sm:flex-none min-h-[44px] flex items-center justify-center gap-2"
        >
          <Target className="w-4 h-4" />
          <span className="hidden sm:inline">Focus</span>
        </Button>
      </div>
    </div>
  );
};
