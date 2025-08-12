'use client';

import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/libs/client/utils';
import { useTerminalManagerStore, useActiveTerminal } from '../stores/terminalManagerStore';

interface TerminalWindowProps {
  className?: string;
}

export function TerminalWindow({ className }: TerminalWindowProps) {
  const activeTerminal = useActiveTerminal();
  const closeTerminal = useTerminalManagerStore((state) => state.closeTerminal);

  if (!activeTerminal) {
    return null;
  }

  const handleClose = () => {
    closeTerminal(activeTerminal.id);
  };

  return (
    <div
      className={cn(
        'fixed right-0 top-0 h-screen bg-black rounded-l-lg shadow-2xl overflow-hidden',
        'z-40 border-l border-gray-700',
        // Responsive widths following wireframe specs
        'w-full', // Mobile: full width
        'md:w-2/3', // Tablet: 2/3 width
        'lg:w-1/2', // Desktop: 1/2 width
        className
      )}
    >
      {/* Terminal Header */}
      <div className="bg-gray-800 h-12 flex items-center justify-between px-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <h3 className="text-gray-200 text-sm font-medium truncate">{activeTerminal.title}</h3>
        </div>

        <button
          onClick={handleClose}
          className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-700 transition-colors group"
          title="Close Terminal"
        >
          <X className="h-4 w-4 text-gray-400 group-hover:text-gray-200" />
        </button>
      </div>

      {/* Terminal Content - iframe to simple-terminal */}
      <div className="h-[calc(100%-48px)] w-full">
        <iframe
          src={`/simple-terminal?terminalId=${activeTerminal.id}`}
          className="w-full h-full border-0 bg-black"
          title={activeTerminal.title}
          allow="clipboard-write"
        />
      </div>
    </div>
  );
}

export default TerminalWindow;
