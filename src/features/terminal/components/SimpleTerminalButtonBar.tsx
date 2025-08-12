'use client';

import React from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/libs/client/utils';
import { Button } from '@/components/ui/button';
import { TerminalTab } from './TerminalTab';

interface TerminalInstance {
  id: string;
  title: string;
}

interface SimpleTerminalButtonBarProps {
  terminals: TerminalInstance[];
  activeTerminalId: string | null;
  onSwitchTerminal: (id: string) => void;
  onCreateTerminal: () => void;
}

export function SimpleTerminalButtonBar({
  terminals,
  activeTerminalId,
  onSwitchTerminal,
  onCreateTerminal,
}: SimpleTerminalButtonBarProps) {
  return (
    <div className={cn('fixed bottom-4 right-4 z-50', 'flex items-center gap-2')}>
      {terminals.length > 0 ? (
        <div className="flex items-center gap-1 bg-card/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-lg border border-border">
          {terminals.map((terminal) => (
            <TerminalTab
              key={terminal.id}
              id={terminal.id}
              title={terminal.title}
              isActive={activeTerminalId === terminal.id}
              onClick={() => onSwitchTerminal(terminal.id)}
            />
          ))}

          <div className="w-px h-4 bg-border mx-1" />

          <Button
            variant="ghost"
            size="sm"
            onClick={onCreateTerminal}
            className="h-7 px-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
            title="New Terminal (⌘T)"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      ) : (
        <div className="bg-card/95 backdrop-blur-sm rounded-lg p-1 shadow-lg border border-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={onCreateTerminal}
            className="h-8 px-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
            title="New Terminal (⌘T)"
          >
            <Plus className="h-3 w-3 mr-2" />
            <span className="text-xs font-medium">Terminal</span>
          </Button>
        </div>
      )}
    </div>
  );
}
