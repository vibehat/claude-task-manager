'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useTerminalContext } from '../contexts/TerminalContext';
import { useTerminal } from '../hooks/useTerminal';
import { TerminalStatus } from './TerminalStatus';
import { XTermStyles } from './XTermStyles';
import { TerminalConnectionStatus, PersistentTerminalProps } from '../types/terminal';
import { cn } from '@/libs/client/utils';
import { X, Minimize2, Maximize2, Move } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMultiTerminalStore } from '@/store/multiTerminalStore';
import { useTheme } from 'next-themes';

export function PersistentTerminal({
   className,
   terminalId,
   onClose,
   onMinimize,
   onMaximize,
   onFocus,
}: PersistentTerminalProps) {
   const { theme } = useTheme();
   const terminalContext = useTerminalContext();
   const multiTerminalStore = useMultiTerminalStore();

   const terminalContainerRef = useRef<HTMLDivElement>(null);
   const terminalMountedRef = useRef(false);
   const resizeObserverRef = useRef<ResizeObserver | null>(null);
   const [isDragging, setIsDragging] = useState(false);
   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

   // Get terminal instance from store
   const terminalInstance = terminalId ? multiTerminalStore.getTerminalById(terminalId) : null;

   if (!terminalId || !terminalInstance) {
      return null; // Must have a terminal ID and instance
   }

   // Create individual terminal hook
   const individualTerminal = useTerminal({
      theme: theme as 'light' | 'dark' | 'auto',
      fontSize: 14,
      fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
      onConnect: () => console.log(`Terminal ${terminalId} connected`),
      onDisconnect: () => console.log(`Terminal ${terminalId} disconnected`),
      onError: (error: string) => console.error(`Terminal ${terminalId} error:`, error),
   });

   // Use terminal instance data
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
   } = individualTerminal;

   // Terminal state
   const isMinimized = terminalInstance.isMinimized;
   const isMaximized = terminalInstance.isMaximized;
   const title = terminalInstance.title;

   // Mount terminal to DOM
   const mountTerminal = useCallback(async () => {
      if (!terminalContainerRef.current || terminalMountedRef.current) {
         return;
      }

      try {
         // Initialize terminal if not already done
         const terminalInstanceToMount = terminal || (await initializeTerminal());

         if (!terminalInstanceToMount) {
            console.error('Failed to initialize persistent terminal');
            return;
         }

         terminalInstanceToMount.open(terminalContainerRef.current);
         terminalMountedRef.current = true;

         // Focus the terminal and fit to container after mounting
         setTimeout(() => {
            terminalInstanceToMount.focus();
            fit();
         }, 100);
      } catch (err) {
         console.error('Error mounting persistent terminal:', err);
      }
   }, [terminal, initializeTerminal, fit]);

   // Setup resize observer
   useEffect(() => {
      if (!terminalContainerRef.current || isMinimized) return;

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
   }, [fit, isConnected, isMinimized]);

   // Mount terminal
   useEffect(() => {
      mountTerminal();
   }, [mountTerminal]);

   // Auto-connect
   useEffect(() => {
      if (connectionStatus === TerminalConnectionStatus.DISCONNECTED) {
         connect();
      }
   }, [connect, connectionStatus]);

   // Handle reconnect
   const handleReconnect = useCallback(() => {
      disconnect();
      setTimeout(() => {
         connect();
      }, 500);
   }, [connect, disconnect]);

   // Handle minimize/maximize
   const handleMinimize = useCallback(() => {
      onMinimize?.(terminalId);
   }, [terminalId, onMinimize]);

   const handleMaximize = useCallback(() => {
      onMaximize?.(terminalId);
   }, [terminalId, onMaximize]);

   const handleClose = useCallback(() => {
      onClose?.(terminalId);
   }, [terminalId, onClose]);

   const handleFocus = useCallback(() => {
      onFocus?.(terminalId);
   }, [terminalId, onFocus]);

   // Handle dragging
   const handleMouseDown = useCallback(
      (e: React.MouseEvent) => {
         if (isMaximized) return;

         setIsDragging(true);
         const rect = e.currentTarget.getBoundingClientRect();
         setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
         });
      },
      [isMaximized]
   );

   const handleMouseMove = useCallback(
      (e: MouseEvent) => {
         if (!isDragging || isMaximized) return;

         const newX = e.clientX - dragOffset.x;
         const newY = e.clientY - dragOffset.y;

         multiTerminalStore.updateTerminalPosition(terminalId, newX, newY);
      },
      [isDragging, terminalId, isMaximized, dragOffset, multiTerminalStore]
   );

   const handleMouseUp = useCallback(() => {
      setIsDragging(false);
   }, []);

   // Add mouse event listeners for dragging
   useEffect(() => {
      if (isDragging) {
         document.addEventListener('mousemove', handleMouseMove);
         document.addEventListener('mouseup', handleMouseUp);
         return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
         };
      }
   }, [isDragging, handleMouseMove, handleMouseUp]);

   return (
      <div
         className={cn(
            'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl relative w-full h-full',
            className
         )}
         onClick={handleFocus}
      >
         <XTermStyles />
         {/* Terminal Header */}
         <div
            className={cn(
               'flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 rounded-t-lg',
               isDragging && 'cursor-grabbing',
               !isMaximized && 'cursor-grab'
            )}
            onMouseDown={handleMouseDown}
         >
            <div className="flex items-center space-x-2">
               <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <Move className="h-3 w-3 text-gray-400" />
               <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{title}</span>
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
               <Button size="sm" variant="ghost" onClick={handleClose} className="h-6 w-6 p-0">
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
