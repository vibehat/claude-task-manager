'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useTerminalContext } from '../contexts/TerminalContext';
import { TerminalStatus } from './TerminalStatus';
import { XTermStyles } from './XTermStyles';
import { TerminalConnectionStatus } from '../types/terminal';
import { cn } from '@/libs/client/utils';
import { X, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PersistentTerminalProps {
   className?: string;
}

export function PersistentTerminal({ className }: PersistentTerminalProps) {
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
      isVisible,
      hideTerminal,
      terminalRef,
   } = useTerminalContext();

   const terminalContainerRef = useRef<HTMLDivElement>(null);
   const terminalMountedRef = useRef(false);
   const resizeObserverRef = useRef<ResizeObserver | null>(null);
   const [isMinimized, setIsMinimized] = React.useState(false);
   const [isMaximized, setIsMaximized] = React.useState(false);

   // Mount terminal to DOM
   const mountTerminal = useCallback(async () => {
      if (!terminalContainerRef.current || terminalMountedRef.current) {
         return;
      }

      try {
         // Initialize terminal if not already done
         const terminalInstance = terminal || (await initializeTerminal());

         if (!terminalInstance) {
            console.error('Failed to initialize persistent terminal');
            return;
         }

         terminalInstance.open(terminalContainerRef.current);
         terminalMountedRef.current = true;

         // Store reference in context for external access
         if (terminalRef) {
            terminalRef.current = terminalContainerRef.current;
         }

         // Focus the terminal and fit to container after mounting
         setTimeout(() => {
            terminalInstance.focus();
            fit();
         }, 100);
      } catch (err) {
         console.error('Error mounting persistent terminal:', err);
      }
   }, [terminal, initializeTerminal, fit, terminalRef]);

   // Setup resize observer
   useEffect(() => {
      if (!terminalContainerRef.current || isMinimized) return;

      const resizeObserver = new ResizeObserver(() => {
         if (terminalMountedRef.current && isConnected && isVisible) {
            // Debounce resize calls
            setTimeout(() => {
               fit();
            }, 100);
         }
      });

      resizeObserver.observe(terminalContainerRef.current);
      resizeObserverRef.current = resizeObserver;

      return () => {
         resizeObserver.disconnect();
         resizeObserverRef.current = null;
      };
   }, [fit, isConnected, isVisible, isMinimized]);

   // Mount terminal when visible
   useEffect(() => {
      if (isVisible) {
         mountTerminal();
      }
   }, [isVisible, mountTerminal]);

   // Auto-connect when terminal becomes visible
   useEffect(() => {
      if (isVisible && connectionStatus === TerminalConnectionStatus.DISCONNECTED) {
         connect();
      }
   }, [isVisible, connect, connectionStatus]);

   // Handle reconnect
   const handleReconnect = useCallback(() => {
      disconnect();
      setTimeout(() => {
         connect();
      }, 500);
   }, [connect, disconnect]);

   // Handle minimize/maximize
   const handleMinimize = useCallback(() => {
      setIsMinimized(!isMinimized);
      setIsMaximized(false);
   }, [isMinimized]);

   const handleMaximize = useCallback(() => {
      setIsMaximized(!isMaximized);
      setIsMinimized(false);
   }, [isMaximized]);

   if (!isVisible) {
      return null;
   }

   return (
      <div
         className={cn(
            'fixed bottom-0 right-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-t-lg shadow-2xl z-50',
            isMaximized
               ? 'inset-4 rounded-lg'
               : isMinimized
                 ? 'w-96 h-12'
                 : 'w-[800px] h-[500px] max-w-[90vw] max-h-[70vh]',
            className
         )}
      >
         <XTermStyles />
         {/* Terminal Header */}
         <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 rounded-t-lg">
            <div className="flex items-center space-x-2">
               <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Terminal
               </span>
               {session && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                     {session.shell} • {session.platform}
                  </span>
               )}
            </div>

            <div className="flex items-center space-x-1">
               <Button size="sm" variant="ghost" onClick={handleMinimize} className="h-6 w-6 p-0">
                  <Minimize2 className="h-3 w-3" />
               </Button>
               <Button size="sm" variant="ghost" onClick={handleMaximize} className="h-6 w-6 p-0">
                  <Maximize2 className="h-3 w-3" />
               </Button>
               <Button size="sm" variant="ghost" onClick={hideTerminal} className="h-6 w-6 p-0">
                  <X className="h-3 w-3" />
               </Button>
            </div>
         </div>

         {!isMinimized && (
            <>
               {/* Terminal Status Bar */}
               <TerminalStatus
                  status={connectionStatus}
                  session={session}
                  error={error}
                  onReconnect={handleReconnect}
               />

               {/* Terminal Container */}
               <div
                  ref={terminalContainerRef}
                  className="flex-1 h-full terminal-container border-0 rounded-none"
                  style={{
                     height: isMaximized ? 'calc(100% - 100px)' : 'calc(100% - 90px)',
                     minHeight: '200px',
                  }}
               />

               {/* Loading Overlay */}
               {connectionStatus === TerminalConnectionStatus.CONNECTING && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                     <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                        <div className="flex items-center space-x-3">
                           <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                           <span className="text-sm font-medium">Connecting to terminal...</span>
                        </div>
                     </div>
                  </div>
               )}
            </>
         )}
      </div>
   );
}

export default PersistentTerminal;
