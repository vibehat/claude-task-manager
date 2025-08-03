'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { cn } from '@/libs/client/utils';
import { Terminal, Trash2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIndividualTerminal } from '@/features/terminal/hooks/useIndividualTerminal';
import { TerminalConnectionStatus } from '@/features/terminal/types/terminal';
import { XTermStyles } from '@/features/terminal/components/XTermStyles';
import { useTheme } from 'next-themes';

interface DebugTerminalProps {
   className?: string;
   initialCommand?: string;
}

export function DebugTerminal({ className, initialCommand }: DebugTerminalProps) {
   const { theme } = useTheme();
   const terminalContainerRef = useRef<HTMLDivElement>(null);

   const {
      terminal,
      initializeTerminal,
      connectionStatus,
      session,
      connect,
      disconnect,
      fit,
      isConnected,
      error,
      sendInput,
   } = useIndividualTerminal({
      theme: theme as 'light' | 'dark' | 'auto',
      fontSize: 12,
      fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
      clientId: 'debug-terminal',
      onConnect: () => console.log('Debug terminal connected'),
      onDisconnect: () => console.log('Debug terminal disconnected'),
      onError: (error: string) => console.error('Debug terminal error:', error),
   });

   // Mount terminal to DOM
   const mountTerminal = useCallback(async () => {
      if (!terminalContainerRef.current || terminal?.element) {
         return;
      }

      try {
         const terminalInstance = terminal || (await initializeTerminal());

         if (!terminalInstance) {
            console.error('Failed to initialize debug terminal');
            return;
         }

         console.log('Mounting debug terminal to DOM');
         terminalInstance.open(terminalContainerRef.current);

         // Wait for DOM to be ready before fitting
         setTimeout(() => {
            terminalInstance.focus();
            // Wait longer for container dimensions to stabilize
            setTimeout(() => {
               fit();
            }, 50);
         }, 150);
      } catch (err) {
         console.error('Error mounting debug terminal:', err);
      }
   }, [terminal, initializeTerminal, fit]);

   // Auto-connect on mount
   useEffect(() => {
      if (connectionStatus === TerminalConnectionStatus.DISCONNECTED) {
         connect();
      }
   }, [connect, connectionStatus]);

   // Mount terminal when ready
   useEffect(() => {
      mountTerminal();
   }, [mountTerminal]);

   // Execute initial command when connected
   useEffect(() => {
      if (isConnected && initialCommand && sendInput) {
         // Small delay to ensure terminal is fully ready
         const timer = setTimeout(() => {
            console.log('Executing initial command:', initialCommand);
            sendInput(initialCommand + '\r');
         }, 1000);

         return () => clearTimeout(timer);
      }
   }, [isConnected, initialCommand, sendInput]);

   // Handle clear terminal
   const handleClear = useCallback(() => {
      if (terminal) {
         terminal.clear();
      }
   }, [terminal]);

   // Handle reconnect
   const handleReconnect = useCallback(() => {
      disconnect();
      setTimeout(() => {
         connect();
      }, 500);
   }, [connect, disconnect]);

   const getStatusColor = () => {
      switch (connectionStatus) {
         case TerminalConnectionStatus.CONNECTED:
            return 'text-green-500';
         case TerminalConnectionStatus.CONNECTING:
            return 'text-yellow-500';
         case TerminalConnectionStatus.DISCONNECTED:
            return 'text-red-500';
         default:
            return 'text-gray-500';
      }
   };

   const getStatusText = () => {
      switch (connectionStatus) {
         case TerminalConnectionStatus.CONNECTED:
            return 'Connected';
         case TerminalConnectionStatus.CONNECTING:
            return 'Connecting...';
         case TerminalConnectionStatus.DISCONNECTED:
            return 'Disconnected';
         default:
            return 'Unknown';
      }
   };

   return (
      <div className={cn('border rounded-lg bg-background', className)}>
         <XTermStyles />
         {/* Header */}
         <div className="flex items-center justify-between px-4 py-2 bg-muted border-b rounded-t-lg">
            <div className="flex items-center gap-2">
               <Terminal className="h-4 w-4" />
               <span className="text-sm font-medium">Debug Terminal</span>
               <div className="flex items-center gap-1">
                  <div className={cn('w-2 h-2 rounded-full', getStatusColor())} />
                  <span className="text-xs text-muted-foreground">{getStatusText()}</span>
               </div>
               {session && (
                  <span className="text-xs text-muted-foreground">
                     {session.shell} • {session.platform}
                  </span>
               )}
            </div>
            <div className="flex items-center gap-1">
               <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleClear}
                  className="h-8 w-8 p-0"
                  title="Clear terminal"
                  disabled={!isConnected}
               >
                  <Trash2 className="h-4 w-4" />
               </Button>
               <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleReconnect}
                  className="h-8 w-8 p-0"
                  title="Reconnect"
               >
                  <RefreshCw className="h-4 w-4" />
               </Button>
            </div>
         </div>

         {/* Terminal Content */}
         <div className="relative">
            <div
               ref={terminalContainerRef}
               className="h-[800px] lg:h-[1000px] xl:h-[1200px] w-full bg-black overflow-hidden"
               style={{
                  backgroundColor: '#000000',
                  minHeight: '700px',
                  maxHeight: '1200px',
               }}
            />

            {/* Connection overlay */}
            {connectionStatus === TerminalConnectionStatus.CONNECTING && (
               <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                     <div className="flex items-center space-x-3">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                        <span className="text-sm font-medium">Connecting to terminal...</span>
                     </div>
                  </div>
               </div>
            )}

            {/* Error overlay */}
            {error && (
               <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg max-w-sm">
                     <div className="text-center">
                        <div className="text-red-500 mb-2">Connection Error</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">{error}</div>
                        <Button onClick={handleReconnect} size="sm">
                           Retry Connection
                        </Button>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}
