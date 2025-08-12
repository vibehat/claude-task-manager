'use client';

import React, { useCallback } from 'react';
import { cn } from '@/libs/client/utils';
import { TerminalWindowContainer } from './TerminalWindowContainer';
import { SimpleTerminalButtonBar } from './SimpleTerminalButtonBar';
import { useTerminalManagerStore } from '../stores/terminalManagerStore';

interface SafeTerminalButtonSystemProps {
  className?: string;
}

export function SafeTerminalButtonSystem({ className }: SafeTerminalButtonSystemProps) {
  const {
    terminals,
    activeTerminalId,
    isTerminalVisible,
    createTerminal,
    closeTerminal,
    switchToTerminal,
    showTerminals,
    hideTerminals,
  } = useTerminalManagerStore();

  const handleCreateTerminal = useCallback(() => {
    const title = `Terminal ${terminals.length + 1}`;
    createTerminal(title);
  }, [terminals.length, createTerminal]);

  const handleSwitchTerminal = useCallback(
    (id: string) => {
      switchToTerminal(id);
    },
    [switchToTerminal]
  );

  const handleShowTerminals = useCallback(() => {
    if (terminals.length === 0) {
      handleCreateTerminal();
    } else {
      showTerminals();
    }
  }, [terminals.length, handleCreateTerminal, showTerminals]);

  const handleDelete = useCallback(
    (id: string) => {
      closeTerminal(id);
    },
    [closeTerminal]
  );

  // All terminals are always mounted to preserve state

  return (
    <div className={className}>
      {/* Terminal Windows - All mounted, only active one visible */}
      {terminals.map((terminal) => (
        <TerminalWindowContainer
          key={terminal.id}
          id={terminal.id}
          title={terminal.title}
          initCommand={terminal.initCommand}
          isVisible={isTerminalVisible && activeTerminalId === terminal.id}
          isMaximized={false}
          onClose={hideTerminals}
          onMinimize={hideTerminals}
          onMaximize={() => {}}
          onDelete={() => handleDelete(terminal.id)}
        />
      ))}

      {/* Button Bar - Always visible */}
      <SimpleTerminalButtonBar
        terminals={terminals}
        activeTerminalId={activeTerminalId}
        onSwitchTerminal={handleSwitchTerminal}
        onCreateTerminal={handleCreateTerminal}
      />
    </div>
  );
}

export default SafeTerminalButtonSystem;
