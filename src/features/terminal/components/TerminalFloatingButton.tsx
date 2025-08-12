'use client';

import React from 'react';
import { Terminal } from 'lucide-react';
import { cn } from '@/libs/client/utils';
import { useTerminalManagerStore } from '../stores/terminalManagerStore';

interface TerminalFloatingButtonProps {
  className?: string;
}

export function TerminalFloatingButton({ className }: TerminalFloatingButtonProps) {
  const showTerminals = useTerminalManagerStore((state) => state.showTerminals);

  const handleClick = () => {
    showTerminals();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        // Base styling
        'fixed bottom-6 right-6 z-50',
        'w-14 h-14 rounded-full',
        'bg-gray-900 hover:bg-gray-800',
        'border border-gray-700 hover:border-gray-600',
        'shadow-lg hover:shadow-xl',
        'transition-all duration-200 ease-out',
        'flex items-center justify-center',
        'group',
        // Hover effects
        'hover:scale-105 active:scale-95',
        // Focus styles for accessibility
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900',
        className
      )}
      title="Open Terminal (⌘T)"
    >
      <Terminal className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors" />
    </button>
  );
}

export default TerminalFloatingButton;
