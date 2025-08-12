'use client';

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { cn } from '@/libs/client/utils';
import {
  useTerminalManagerStore,
  useTerminals,
  useActiveTerminalId,
} from '../stores/terminalManagerStore';

interface TerminalButtonBarProps {
  className?: string;
}

export function TerminalButtonBar({ className }: TerminalButtonBarProps) {
  const terminals = useTerminals();
  const activeTerminalId = useActiveTerminalId();
  const { createTerminal, switchToTerminal, closeTerminal } = useTerminalManagerStore();

  const [hoveredTerminal, setHoveredTerminal] = useState<string | null>(null);

  const handleCreateTerminal = () => {
    createTerminal();
  };

  const handleSwitchTerminal = (id: string) => {
    switchToTerminal(id);
  };

  const handleCloseTerminal = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    closeTerminal(id);
  };

  if (terminals.length === 0) {
    return (
      <div className={cn('fixed bottom-6 right-6 z-40', 'flex items-center gap-2', className)}>
        <button
          onClick={handleCreateTerminal}
          className={cn(
            'flex items-center justify-center',
            'w-12 h-12 rounded-lg',
            'bg-blue-600 hover:bg-blue-700',
            'text-white',
            'shadow-lg hover:shadow-xl',
            'transition-all duration-200',
            'hover:scale-105 active:scale-95',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          )}
          title="New Terminal (⌘T)"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-40',
        'flex items-center gap-2',
        // Responsive layout adjustments
        'flex-wrap', // Allow wrapping on smaller screens
        'max-w-[calc(100vw-3rem)]', // Ensure it doesn't overflow screen
        className
      )}
    >
      {/* Terminal Buttons */}
      <div className="flex items-center gap-2 bg-gray-900/90 backdrop-blur-md rounded-lg px-3 py-2 shadow-xl border border-gray-700/50">
        {terminals.map((terminal, index) => (
          <div
            key={terminal.id}
            className="relative group"
            onMouseEnter={() => setHoveredTerminal(terminal.id)}
            onMouseLeave={() => setHoveredTerminal(null)}
          >
            <button
              onClick={() => handleSwitchTerminal(terminal.id)}
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                'hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900',
                // Active state styling
                activeTerminalId === terminal.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white',
                // Responsive text handling
                'max-w-32 md:max-w-40 lg:max-w-48'
              )}
              title={`Switch to ${terminal.title}`}
            >
              <span className="truncate">{terminal.title}</span>

              {/* Active indicator */}
              {activeTerminalId === terminal.id && (
                <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
              )}
            </button>

            {/* Close button on hover */}
            {hoveredTerminal === terminal.id && terminals.length > 1 && (
              <button
                onClick={(e) => handleCloseTerminal(e, terminal.id)}
                className={cn(
                  'absolute -top-1 -right-1 w-5 h-5',
                  'bg-red-500 hover:bg-red-600 rounded-full',
                  'flex items-center justify-center',
                  'opacity-0 group-hover:opacity-100 transition-opacity',
                  'focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1'
                )}
                title="Close Terminal"
              >
                <X className="h-3 w-3 text-white" />
              </button>
            )}

            {/* Terminal number badge for quick reference */}
            <span className="absolute -bottom-1 -left-1 w-4 h-4 bg-gray-800 text-white text-xs font-bold rounded-full flex items-center justify-center border border-gray-600 text-[10px]">
              {index + 1}
            </span>

            {/* Tooltip */}
            <div
              className={cn(
                'absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2',
                'px-2 py-1 bg-gray-800 text-white text-xs rounded',
                'opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none',
                'whitespace-nowrap z-10'
              )}
            >
              {terminal.title}
              <br />
              <span className="text-gray-400">⌘{index + 1} to switch</span>
            </div>
          </div>
        ))}
      </div>

      {/* New Terminal Button */}
      <button
        onClick={handleCreateTerminal}
        className={cn(
          'flex items-center justify-center',
          'w-12 h-12 rounded-lg',
          'bg-blue-600 hover:bg-blue-700',
          'text-white',
          'shadow-lg hover:shadow-xl',
          'transition-all duration-200',
          'hover:scale-105 active:scale-95',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        )}
        title="New Terminal (⌘T)"
      >
        <Plus className="h-5 w-5" />
      </button>
    </div>
  );
}

export default TerminalButtonBar;
