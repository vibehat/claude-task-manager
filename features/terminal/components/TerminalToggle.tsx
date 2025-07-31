'use client';

import React from 'react';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTerminalContext } from '../contexts/TerminalContext';
import { TerminalConnectionStatus } from '../types/terminal';
import { cn } from '@/libs/client/utils';

interface TerminalToggleProps {
   className?: string;
   size?: 'sm' | 'default' | 'lg';
   variant?: 'default' | 'outline' | 'secondary' | 'ghost';
}

export function TerminalToggle({ className, size = 'sm', variant = 'ghost' }: TerminalToggleProps) {
   const { isVisible, toggleTerminal, connectionStatus, session } = useTerminalContext();

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

   const getTooltipText = () => {
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
