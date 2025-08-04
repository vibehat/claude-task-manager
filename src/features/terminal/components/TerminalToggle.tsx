'use client';

import React, { useState } from 'react';
import { Terminal, Plus, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { useTerminalContext } from '../contexts/TerminalContext';
import { cn } from '@/libs/client/utils';
import { useMultiTerminalStore } from '@/store/multiTerminalStore';

interface TerminalToggleProps {
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
}

export function TerminalToggle({ className, size = 'sm', variant = 'ghost' }: TerminalToggleProps) {
  const terminalContext = useTerminalContext();
  const multiTerminalStore = useMultiTerminalStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Multi-terminal functionality
  const { activeTerminalId, createTerminal, closeTerminal, setActiveTerminal } = terminalContext;

  // Get terminals from the multi-terminal store
  const storeTerminals = multiTerminalStore.terminals;
  const hasTerminals = storeTerminals.length > 0;
  const activeTerminal = activeTerminalId
    ? multiTerminalStore.getTerminalById(activeTerminalId)
    : null;

  const getStatusColor = () => {
    if (activeTerminal) {
      return 'text-green-500'; // Active terminal
    }
    return hasTerminals ? 'text-blue-500' : 'text-gray-500';
  };

  const handleCreateNewTerminal = () => {
    createTerminal();
    setIsDropdownOpen(false);
  };

  const handleSwitchToTerminal = (terminalId: string) => {
    setActiveTerminal(terminalId);
    multiTerminalStore.restoreTerminal(terminalId); // Restore if minimized
    setIsDropdownOpen(false);
  };

  const handleCloseTerminal = (terminalId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    closeTerminal(terminalId);
  };

  const getTooltipText = () => {
    if (hasTerminals) {
      return `Terminal Manager (${storeTerminals.length} terminals)`;
    }
    return 'Create Terminal';
  };

  // If we have terminals, show dropdown
  if (hasTerminals) {
    return (
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            size={size}
            variant={variant}
            className={cn('relative', activeTerminal && 'bg-accent', className)}
            title={getTooltipText()}
          >
            <Terminal className={cn('h-4 w-4', getStatusColor())} />
            <ChevronDown className="h-3 w-3 ml-1" />

            {/* Terminal count indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
              {storeTerminals.length}
            </div>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-64">
          <DropdownMenuItem onClick={handleCreateNewTerminal} className="flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            New Terminal
          </DropdownMenuItem>

          {storeTerminals.length > 0 && <DropdownMenuSeparator />}

          {storeTerminals.map((terminal) => {
            return (
              <DropdownMenuItem
                key={terminal.id}
                onClick={() => handleSwitchToTerminal(terminal.id)}
                className={cn(
                  'flex items-center justify-between',
                  activeTerminalId === terminal.id && 'bg-accent'
                )}
              >
                <div className="flex items-center min-w-0 flex-1">
                  <Terminal className="h-3 w-3 mr-2 flex-shrink-0" />
                  <span className="truncate">
                    {terminal.title || `Terminal ${terminal.id.slice(0, 8)}`}
                  </span>
                  {terminal.isMinimized && (
                    <span className="ml-1 text-xs text-gray-400">(minimized)</span>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => handleCloseTerminal(terminal.id, e)}
                  className="h-5 w-5 p-0 hover:bg-red-100 hover:text-red-600"
                >
                  <X className="h-3 w-3" />
                </Button>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // No terminals - show create button
  return (
    <Button
      size={size}
      variant={variant}
      onClick={handleCreateNewTerminal}
      className={cn('relative', className)}
      title={getTooltipText()}
    >
      <Terminal className={cn('h-4 w-4', getStatusColor())} />
    </Button>
  );
}

export default TerminalToggle;
