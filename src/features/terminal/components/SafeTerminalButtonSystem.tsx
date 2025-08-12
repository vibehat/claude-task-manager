'use client';

import React, { useState, useCallback } from 'react';
import { cn } from '@/libs/client/utils';
import { TerminalWindowContainer } from './TerminalWindowContainer';
import { SimpleTerminalButtonBar } from './SimpleTerminalButtonBar';

interface TerminalInstance {
  id: string;
  title: string;
}

interface SafeTerminalButtonSystemProps {
  className?: string;
}

export function SafeTerminalButtonSystem({ className }: SafeTerminalButtonSystemProps) {
  const [terminals, setTerminals] = useState<TerminalInstance[]>([]);
  const [activeTerminalId, setActiveTerminalId] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const createTerminal = useCallback(() => {
    const id = `terminal-${Date.now()}`;
    const title = `Terminal ${terminals.length + 1}`;

    setTerminals((prev) => [...prev, { id, title }]);
    setActiveTerminalId(id);
    setIsVisible(true);
  }, [terminals.length]);

  const closeTerminal = useCallback(
    (id: string) => {
      setTerminals((prev) => {
        const updated = prev.filter((t) => t.id !== id);
        if (activeTerminalId === id) {
          const newActive = updated.length > 0 ? updated[updated.length - 1].id : null;
          setActiveTerminalId(newActive);
          setIsVisible(updated.length > 0);
        }
        return updated;
      });
    },
    [activeTerminalId]
  );

  const switchTerminal = useCallback((id: string) => {
    setActiveTerminalId(id);
    setIsVisible(true);
  }, []);

  const hideTerminals = useCallback(() => {
    setIsVisible(false);
  }, []);

  const showTerminals = useCallback(() => {
    if (terminals.length === 0) {
      createTerminal();
    } else {
      setIsVisible(true);
    }
  }, [terminals.length, createTerminal]);

  const handleMaximize = useCallback(() => {
    setIsMaximized(!isMaximized);
  }, [isMaximized]);

  const handleMinimize = useCallback(() => {
    setIsVisible(false);
  }, []);

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
          isVisible={isVisible && activeTerminalId === terminal.id}
          isMaximized={isMaximized}
          onClose={hideTerminals}
          onMinimize={handleMinimize}
          onMaximize={handleMaximize}
          onDelete={() => handleDelete(terminal.id)}
        />
      ))}

      {/* Button Bar - Always visible */}
      <SimpleTerminalButtonBar
        terminals={terminals}
        activeTerminalId={activeTerminalId}
        onSwitchTerminal={switchTerminal}
        onCreateTerminal={createTerminal}
      />
    </div>
  );
}

export default SafeTerminalButtonSystem;
