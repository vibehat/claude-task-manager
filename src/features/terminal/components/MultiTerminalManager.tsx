'use client';

import React, { useEffect, useCallback } from 'react';
import { MultiTerminalWrapper } from './MultiTerminalWrapper';
import { useMultiTerminalStore } from '@/store/multiTerminalStore';
import { cn } from '@/libs/client/utils';

interface MultiTerminalManagerProps {
  className?: string;
}

export function MultiTerminalManager({ className }: MultiTerminalManagerProps) {
  const {
    terminals,
    activeTerminalId,
    setActiveTerminal,
    closeTerminal,
    toggleMinimize,
    toggleMaximize,
    updateTerminalPosition,
    updateTerminalSize,
    bringTerminalToFront,
    arrangeTerminals,
  } = useMultiTerminalStore();

  // Handle window resize to rearrange terminals
  useEffect(() => {
    const handleResize = () => {
      arrangeTerminals();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [arrangeTerminals]);

  // Handle terminal focus
  const handleTerminalFocus = useCallback(
    (terminalId: string) => {
      setActiveTerminal(terminalId);
      bringTerminalToFront(terminalId);
    },
    [setActiveTerminal, bringTerminalToFront]
  );

  // Handle terminal close
  const handleTerminalClose = useCallback(
    (terminalId: string) => {
      closeTerminal(terminalId);
    },
    [closeTerminal]
  );

  // Handle terminal minimize
  const handleTerminalMinimize = useCallback(
    (terminalId: string) => {
      console.log(`Minimizing terminal: ${terminalId}`);
      toggleMinimize(terminalId);
    },
    [toggleMinimize]
  );

  // Handle terminal maximize
  const handleTerminalMaximize = useCallback(
    (terminalId: string) => {
      toggleMaximize(terminalId);
    },
    [toggleMaximize]
  );

  return (
    <div className={cn('fixed inset-0 pointer-events-none z-40', className)}>
      {/* Render all terminals - keep them alive even when minimized */}
      {terminals.map((terminal) => (
        <div
          key={terminal.id}
          className={cn(
            'absolute pointer-events-auto terminal-transition',
            terminal.isMinimized ? 'hidden' : 'terminal-entering'
          )}
          style={{
            left: terminal.position.x,
            top: terminal.position.y,
            zIndex: terminal.zIndex,
            width: terminal.isMaximized ? 'calc(100vw - 32px)' : terminal.size.width,
            height: terminal.isMaximized ? 'calc(100vh - 32px)' : terminal.size.height,
          }}
        >
          <MultiTerminalWrapper
            terminalId={terminal.id}
            onClose={handleTerminalClose}
            onMinimize={handleTerminalMinimize}
            onMaximize={handleTerminalMaximize}
            onFocus={handleTerminalFocus}
          />
        </div>
      ))}

      {/* Chat-style terminals bar - show all terminals */}
      {terminals.length > 0 && (
        <div className="fixed bottom-0 right-0 flex flex-row-reverse space-x-reverse space-x-1 p-3 pointer-events-auto z-50">
          {terminals
            .slice(0, 5) // Limit to 5 visible chat tabs
            .map((terminal, index) => (
              <div
                key={terminal.id}
                className={cn(
                  'border rounded-t-xl shadow-lg cursor-pointer transition-all duration-200 ease-in-out',
                  'w-56 h-14 flex items-center justify-between px-4 py-3 relative overflow-hidden',
                  'chat-tab-stagger',
                  // Different styles for minimized vs active terminals
                  terminal.isMinimized
                    ? 'bg-secondary text-secondary-foreground border-border hover:bg-accent hover:text-accent-foreground'
                    : 'bg-muted text-foreground border-primary/50 hover:bg-accent hover:border-primary',
                  // Additional active terminal indicator
                  activeTerminalId === terminal.id && !terminal.isMinimized && 'border-primary',
                  index > 0 && '-ml-2' // Slight overlap for chat stacking effect
                )}
                onClick={() => handleTerminalMinimize(terminal.id)}
                title={
                  terminal.isMinimized
                    ? `Click to open ${terminal.title}`
                    : `Click to minimize ${terminal.title}`
                }
                style={{
                  zIndex: 50 - index, // Stack order for overlapping effect
                  animationDelay: `${index * 50}ms`, // Stagger animation
                }}
              >
                {/* Chat icon and title */}
                <div className="flex items-center space-x-3 min-w-0 flex-1 relative z-10">
                  {/* Chat bubble icon */}
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold truncate">{terminal.title}</div>
                    <div className="text-xs text-muted-foreground">
                      Terminal • {terminal.isMinimized ? 'Minimized' : 'Active'}
                    </div>
                  </div>
                </div>

                {/* Status indicator */}
                {!terminal.isMinimized && (
                  <div
                    className={cn(
                      'w-2 h-2 rounded-full flex-shrink-0',
                      activeTerminalId === terminal.id
                        ? 'bg-green-500 animate-pulse'
                        : 'bg-green-500/50'
                    )}
                  ></div>
                )}

                {/* Close button */}
                <button
                  className="ml-3 hover:bg-muted rounded-full p-1.5 transition-opacity duration-200 opacity-70 hover:opacity-100 relative z-10 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTerminalClose(terminal.id);
                  }}
                  title="Close terminal"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 13.41 12z" />
                  </svg>
                </button>
              </div>
            ))}

          {/* Show overflow indicator if there are more than 5 terminals */}
          {terminals.length > 5 && (
            <div className="bg-secondary text-secondary-foreground border border-border rounded-t-xl shadow-lg cursor-pointer transition-all duration-200 hover:bg-accent hover:text-accent-foreground w-12 h-14 flex items-center justify-center -ml-2">
              <span className="text-xs font-bold">+{terminals.length - 5}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MultiTerminalManager;
