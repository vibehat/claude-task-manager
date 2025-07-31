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

   // Multi-terminal mode: use terminalId to get specific terminal
   const isMultiTerminalMode = !!terminalId;
   const terminalInstance = terminalId ? multiTerminalStore.getTerminalById(terminalId) : null;

   // Create individual terminal hook for multi-terminal mode
   const individualTerminal = useTerminal({
      theme: theme as 'light' | 'dark' | 'auto',
      fontSize: 14,
      fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
      onConnect: () => console.log(`Terminal ${terminalId} connected`),
      onDisconnect: () => console.log(`Terminal ${terminalId} disconnected`),
      onError: (error: string) => console.error(`Terminal ${terminalId} error:`, error),
   });

   // Use multi-terminal instance data or fallback to legacy context
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
   } = isMultiTerminalMode ? individualTerminal : terminalContext;

   // Terminal visibility and state
   const isVisible = isMultiTerminalMode ? true : terminalContext.isVisible;
   const isMinimized = terminalInstance?.isMinimized || false;
   const isMaximized = terminalInstance?.isMaximized || false;
   const title = terminalInstance?.title || 'Terminal';

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

         // Store reference in context for external access (legacy mode only)
         if (!isMultiTerminalMode && terminalContext.terminalRef) {
            terminalContext.terminalRef.current = terminalContainerRef.current;
         }

         // Focus the terminal and fit to container after mounting
         setTimeout(() => {
            terminalInstance.focus();
            fit();
         }, 100);
      } catch (err) {
         console.error('Error mounting persistent terminal:', err);
      }
   }, [terminal, initializeTerminal, fit, isMultiTerminalMode, terminalContext]);

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
      if (isMultiTerminalMode && terminalId) {
         onMinimize?.(terminalId);
      } else {
         // Legacy mode - would need local state management
      }
   }, [isMultiTerminalMode, terminalId, onMinimize]);

   const handleMaximize = useCallback(() => {
      if (isMultiTerminalMode && terminalId) {
         onMaximize?.(terminalId);
      } else {
         // Legacy mode - would need local state management
      }
   }, [isMultiTerminalMode, terminalId, onMaximize]);

   const handleClose = useCallback(() => {
      if (isMultiTerminalMode && terminalId) {
         onClose?.(terminalId);
      } else {
         terminalContext.hideTerminal();
      }
   }, [isMultiTerminalMode, terminalId, onClose, terminalContext]);

   const handleFocus = useCallback(() => {
      if (isMultiTerminalMode && terminalId) {
         onFocus?.(terminalId);
      }
   }, [isMultiTerminalMode, terminalId, onFocus]);

   // Handle dragging for multi-terminal mode
   const handleMouseDown = useCallback(
      (e: React.MouseEvent) => {
         if (!isMultiTerminalMode || !terminalId || isMaximized) return;

         setIsDragging(true);
         const rect = e.currentTarget.getBoundingClientRect();
         setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
         });
      },
      [isMultiTerminalMode, terminalId, isMaximized]
   );

   const handleMouseMove = useCallback(
      (e: MouseEvent) => {
         if (!isDragging || !terminalId || isMaximized) return;

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

   if (!isVisible) {
      return null;
   }

   return (
      <div
         className={cn(
            'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl',
            isMultiTerminalMode ? 'relative w-full h-full' : 'fixed bottom-0 right-0 z-50',
            !isMultiTerminalMode && isMaximized && 'inset-4 rounded-lg',
            !isMultiTerminalMode && isMinimized && 'w-96 h-12',
            !isMultiTerminalMode &&
               !isMaximized &&
               !isMinimized &&
               'w-[800px] h-[500px] max-w-[90vw] max-h-[70vh]',
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
               isMultiTerminalMode && !isMaximized && 'cursor-grab'
            )}
            onMouseDown={handleMouseDown}
         >
            <div className="flex items-center space-x-2">
               <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               {isMultiTerminalMode && <Move className="h-3 w-3 text-gray-400" />}
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
