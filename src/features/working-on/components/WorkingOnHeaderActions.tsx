'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Focus, Maximize2, Minimize2, Command } from 'lucide-react';
import type { WorkingOnHeaderActionsProps } from '../types';

type WorkingOnHeaderActionsPropsExtended = WorkingOnHeaderActionsProps & {
  showFocusToggle?: boolean;
  onCommandPalette?: () => void;
};

export function WorkingOnHeaderActions({
  focusMode = false,
  onToggleFocusMode,
  onRefresh,
  showFocusToggle = true,
  onCommandPalette,
}: WorkingOnHeaderActionsPropsExtended): React.JSX.Element {
  return (
    <div className="flex items-center gap-2">
      {/* Command Palette Button */}
      {onCommandPalette && (
        <Button
          variant="outline"
          size="sm"
          onClick={onCommandPalette}
          className="flex items-center gap-2"
          title="Open command palette (⌘K)"
        >
          <Command className="h-4 w-4" />
          <span className="hidden sm:inline">Command</span>
          <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-2">
            ⌘K
          </kbd>
        </Button>
      )}

      {showFocusToggle && (
        <Button
          variant={focusMode ? 'default' : 'outline'}
          size="sm"
          onClick={onToggleFocusMode}
          className="flex items-center gap-2"
          title="Toggle focus mode (F)"
        >
          {focusMode ? (
            <>
              <Minimize2 className="h-4 w-4" />
              <span className="hidden sm:inline">Exit Focus</span>
            </>
          ) : (
            <>
              <Focus className="h-4 w-4" />
              <span className="hidden sm:inline">Focus Mode</span>
            </>
          )}
        </Button>
      )}

      {/* Terminal Button - Removed (now in global layout) */}
    </div>
  );
}

export default WorkingOnHeaderActions;
