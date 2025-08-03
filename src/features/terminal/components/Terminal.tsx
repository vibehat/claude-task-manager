'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useIndividualTerminal } from '../hooks/useIndividualTerminal';
import type { TerminalComponentProps } from '../types/terminal';
import { TerminalConnectionStatus } from '../types/terminal';
import { TerminalStatus } from './TerminalStatus';
import { XTermStyles } from './XTermStyles';
import { cn } from '@/libs/client/utils';

export function Terminal({
   className,
   onConnect,
   onDisconnect,
   onError,
   theme = 'auto',
   fontSize = 14,
   fontFamily = 'Monaco, Menlo, "Ubuntu Mono", monospace',
}: TerminalComponentProps) {
   const terminalContainerRef = useRef<HTMLDivElement>(null);
   const terminalMountedRef = useRef(false);
   const resizeObserverRef = useRef<ResizeObserver | null>(null);

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
   } = useIndividualTerminal({
      theme,
      fontSize,
      fontFamily,
      onConnect,
      onDisconnect,
      onError,
   });

   // Mount terminal to DOM
   const mountTerminal = useCallback(async () => {
      if (!terminalContainerRef.current || terminalMountedRef.current) {
         return;
      }

      try {
         // Initialize terminal if not already done
         const terminalInstance = terminal || (await initializeTerminal());

         if (!terminalInstance) {
            console.error('Failed to initialize terminal');
            onError?.('Failed to initialize terminal');
            return;
         }

         terminalInstance.open(terminalContainerRef.current);
         terminalMountedRef.current = true;

         // Focus the terminal and fit to container after mounting
         setTimeout(() => {
            terminalInstance.focus();
            fit();
         }, 100);
      } catch (err) {
         console.error('Error mounting terminal:', err);
         onError?.('Failed to mount terminal');
      }
   }, [terminal, initializeTerminal, fit, onError]);

   // Setup resize observer
   useEffect(() => {
      if (!terminalContainerRef.current) return;

      const resizeObserver = new ResizeObserver(() => {
         if (terminalMountedRef.current && isConnected) {
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
   }, [fit, isConnected]);

   // Mount terminal when component mounts
   useEffect(() => {
      mountTerminal();
   }, [mountTerminal]);

   // Auto-connect when component mounts
   useEffect(() => {
      if (connectionStatus === TerminalConnectionStatus.DISCONNECTED) {
         connect();
      }
   }, [connect, connectionStatus]);

   // Cleanup on unmount
   useEffect(() => {
      return () => {
         if (resizeObserverRef.current) {
            resizeObserverRef.current.disconnect();
         }
         terminalMountedRef.current = false;
      };
   }, []);

   // Handle reconnect
   const handleReconnect = useCallback(() => {
      disconnect();
      setTimeout(() => {
         connect();
      }, 500);
   }, [connect, disconnect]);

   return (
      <div className={cn('flex flex-col h-full w-full', className)}>
         <XTermStyles />
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
            className="flex-1 w-full terminal-container"
            style={{ minHeight: '300px' }}
         />

         {/* Loading Overlay */}
         {connectionStatus === TerminalConnectionStatus.CONNECTING && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
               <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                     <span className="text-sm font-medium">Connecting to terminal...</span>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default Terminal;
