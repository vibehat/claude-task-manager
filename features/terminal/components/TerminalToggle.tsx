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
import { TerminalConnectionStatus } from '../types/terminal';
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
   const { terminals, activeTerminalId, createTerminal, closeTerminal, setActiveTerminal } =
      terminalContext;

   // Legacy single terminal fallback
   const { isVisible, toggleTerminal, connectionStatus, session } = terminalContext;

   const hasMultipleTerminals = terminals.size > 0;
   const activeTerminal = activeTerminalId
      ? multiTerminalStore.getTerminalById(activeTerminalId)
      : null;

   const getStatusColor = () => {
      switch (connectionStatus) {
         case TerminalConnectionStatus.CONNECTED:
            return 'text-green-500';
         case TerminalConnectionStatus.CONNECTING:
         case TerminalConnectionStatus.RECONNECTING:
            return 'text-yellow-500';
         case TerminalConnectionStatus.ERROR:
            return 'text-red-500';
         default:
            return 'text-gray-500';
      }
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
      if (hasMultipleTerminals) {
         return `Terminal Manager (${terminals.size} terminals)`;
      }

      if (isVisible) {
         return 'Hide Terminal';
      }

      switch (connectionStatus) {
         case TerminalConnectionStatus.CONNECTED:
            return `Show Terminal (${session?.shell || 'Connected'})`;
         case TerminalConnectionStatus.CONNECTING:
            return 'Show Terminal (Connecting...)';
         case TerminalConnectionStatus.RECONNECTING:
            return 'Show Terminal (Reconnecting...)';
         case TerminalConnectionStatus.ERROR:
            return 'Show Terminal (Connection Error)';
         default:
            return 'Show Terminal';
      }
   };

   // If we have multiple terminals, show dropdown
   if (hasMultipleTerminals) {
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
                  {terminals.size > 0 && (
                     <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                        {terminals.size}
                     </div>
                  )}
               </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-64">
               <DropdownMenuItem onClick={handleCreateNewTerminal} className="flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  New Terminal
               </DropdownMenuItem>

               {terminals.size > 0 && <DropdownMenuSeparator />}

               {Array.from(terminals.entries()).map(([terminalId, terminalInstance]) => {
                  const terminal = multiTerminalStore.getTerminalById(terminalId);
                  return (
                     <DropdownMenuItem
                        key={terminalId}
                        onClick={() => handleSwitchToTerminal(terminalId)}
                        className={cn(
                           'flex items-center justify-between',
                           activeTerminalId === terminalId && 'bg-accent'
                        )}
                     >
                        <div className="flex items-center min-w-0 flex-1">
                           <Terminal className="h-3 w-3 mr-2 flex-shrink-0" />
                           <span className="truncate">
                              {terminal?.title || `Terminal ${terminalId.slice(0, 8)}`}
                           </span>
                           {terminal?.isMinimized && (
                              <span className="ml-1 text-xs text-gray-400">(minimized)</span>
                           )}
                        </div>
                        <Button
                           variant="ghost"
                           size="sm"
                           onClick={(e) => handleCloseTerminal(terminalId, e)}
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

   // Legacy single terminal toggle
   return (
      <Button
         size={size}
         variant={variant}
         onClick={toggleTerminal}
         className={cn('relative', isVisible && 'bg-accent', className)}
         title={getTooltipText()}
      >
         <Terminal className={cn('h-4 w-4', getStatusColor())} />

         {/* Connection status indicator */}
         <div
            className={cn(
               'absolute -top-1 -right-1 w-2 h-2 rounded-full',
               connectionStatus === TerminalConnectionStatus.CONNECTED && 'bg-green-400',
               connectionStatus === TerminalConnectionStatus.CONNECTING &&
                  'bg-yellow-400 animate-pulse',
               connectionStatus === TerminalConnectionStatus.RECONNECTING &&
                  'bg-yellow-400 animate-pulse',
               connectionStatus === TerminalConnectionStatus.ERROR && 'bg-red-400',
               connectionStatus === TerminalConnectionStatus.DISCONNECTED && 'bg-gray-400'
            )}
         />
      </Button>
   );
}

export default TerminalToggle;
