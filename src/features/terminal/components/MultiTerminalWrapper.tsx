'use client';

import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useTerminal } from '../hooks/useTerminal';
import { TerminalStatus } from './TerminalStatus';
import { XTermStyles } from './XTermStyles';
import { useMultiTerminalStore } from '@/store/multiTerminalStore';
import { useTheme } from 'next-themes';
import { cn } from '@/libs/client/utils';
import { X, Minimize2, Maximize2, Move } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TerminalConnectionStatus } from '../types/terminal';

interface MultiTerminalWrapperProps {
   terminalId: string;
   onClose?: (id: string) => void;
   onMinimize?: (id: string) => void;
   onMaximize?: (id: string) => void;
   onFocus?: (id: string) => void;
   className?: string;
}

export function MultiTerminalWrapper({
   terminalId,
   onClose,
   onMinimize,
   onMaximize,
   onFocus,
   className,
}: MultiTerminalWrapperProps) {
   const { theme } = useTheme();
   const multiTerminalStore = useMultiTerminalStore();
   const [isDragging, setIsDragging] = useState(false);
   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
   const [isEditingTitle, setIsEditingTitle] = useState(false);
   const [editingTitle, setEditingTitle] = useState('');

   const terminalContainerRef = useRef<HTMLDivElement>(null);
   const terminalMountedRef = useRef(false);
   const resizeObserverRef = useRef<ResizeObserver | null>(null);

   // Get terminal instance from store
   const terminalInstance = multiTerminalStore.getTerminalById(terminalId);

   // Extract properties early to use in callbacks
   const title = terminalInstance?.title || '';
   const isMinimized = terminalInstance?.isMinimized || false;
   const isMaximized = terminalInstance?.isMaximized || false;

   // Use the existing useTerminal hook that integrates with multiTerminalStore
   // NOTE: This must be called before any early returns to maintain hook order
   const {
      terminal,
      initializeTerminal,
      connectionStatus,
      session,
      connect,
      fit,
      isConnected,
      error,
   } = useTerminal(terminalId, {
      theme: theme as 'light' | 'dark' | 'auto',
      fontSize: 14,
      fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
      sessionId: terminalInstance?.sessionId,
      clientId: terminalId,
      onConnect: () => console.log(`Terminal ${terminalId} connected`),
      onDisconnect: () => console.log(`Terminal ${terminalId} disconnected`),
      onError: (error: string) => console.error(`Terminal ${terminalId} error:`, error),
      onSessionRestored: (sessionId: string) => {
         console.log(`✅ Terminal ${terminalId} session restored: ${sessionId}`);
         if (terminalInstance) {
            multiTerminalStore.updateTerminalSession(terminalId, sessionId);
            multiTerminalStore.markTerminalAsRestored(terminalId);
         }
      },
   });

   // Mount terminal to DOM - fix the repeated mounting issue
   const mountTerminal = useCallback(async () => {
      if (!terminalContainerRef.current || terminalMountedRef.current || !terminal) {
         return;
      }

      try {
         console.log(`🔧 Mounting terminal ${terminalId} to DOM container`);

         // Debug: Check container dimensions
         const containerRect = terminalContainerRef.current.getBoundingClientRect();
         console.log(`📐 Container dimensions:`, {
            width: containerRect.width,
            height: containerRect.height,
            offsetWidth: terminalContainerRef.current.offsetWidth,
            offsetHeight: terminalContainerRef.current.offsetHeight,
            clientWidth: terminalContainerRef.current.clientWidth,
            clientHeight: terminalContainerRef.current.clientHeight,
         });

         // Ensure terminal is not already mounted elsewhere
         if (terminal.element && terminal.element.parentNode) {
            console.log(`Terminal ${terminalId} already mounted, removing from previous container`);
            terminal.element.parentNode.removeChild(terminal.element);
         }

         terminal.open(terminalContainerRef.current);
         terminalMountedRef.current = true;

         console.log(`✅ Terminal ${terminalId} successfully mounted`);
         console.log(`Terminal element:`, terminal.element);
         console.log(`Terminal dimensions after mount:`, {
            cols: terminal.cols,
            rows: terminal.rows,
         });

         // Focus and fit after mounting
         setTimeout(() => {
            if (terminal && terminalMountedRef.current) {
               console.log(`🎯 Focusing and fitting terminal ${terminalId}`);
               terminal.focus();
               fit();

               // Additional debug after fit
               setTimeout(() => {
                  console.log(`📏 Terminal dimensions after fit:`, {
                     cols: terminal.cols,
                     rows: terminal.rows,
                     element: !!terminal.element,
                     hasCanvas: !!terminal.element?.querySelector('canvas'),
                  });
               }, 100);
            }
         }, 100);
      } catch (err) {
         console.error(`❌ Error mounting terminal ${terminalId}:`, err);
      }
   }, [terminal, terminalId, fit]);

   // Setup resize observer - fix repeated setup
   useEffect(() => {
      if (
         !terminalContainerRef.current ||
         terminalInstance?.isMinimized ||
         resizeObserverRef.current
      )
         return;

      console.log(`📏 Setting up resize observer for terminal ${terminalId}`);

      const resizeObserver = new ResizeObserver(() => {
         if (terminalMountedRef.current && isConnected && terminal) {
            console.log(`📐 Resizing terminal ${terminalId}`);
            // Debounce resize calls
            setTimeout(() => {
               fit();
            }, 100);
         }
      });

      resizeObserver.observe(terminalContainerRef.current);
      resizeObserverRef.current = resizeObserver;

      return () => {
         console.log(`🧹 Cleaning up resize observer for terminal ${terminalId}`);
         resizeObserver.disconnect();
         resizeObserverRef.current = null;
      };
   }, [fit, isConnected, terminalInstance?.isMinimized, terminalId, terminal]);

   // Mount terminal when it's ready
   useEffect(() => {
      if (terminal && terminalContainerRef.current && !terminalMountedRef.current) {
         mountTerminal();
      }
   }, [terminal, mountTerminal]);

   // Auto-connect logic - fix repeated connections
   useEffect(() => {
      if (!terminalInstance || !terminalId) return;

      if (connectionStatus === TerminalConnectionStatus.DISCONNECTED) {
         console.log(`🔗 Auto-connecting terminal ${terminalId}`);
         connect().catch((error) => {
            console.error(`❌ Failed to auto-connect terminal ${terminalId}:`, error);
         });
      }
   }, [terminalInstance, terminalId, connectionStatus, connect]);

   // Handle callbacks
   const handleClose = useCallback(
      (e: React.MouseEvent) => {
         e.stopPropagation(); // Prevent triggering the parent's onClick (handleFocus)
         onClose?.(terminalId);
      },
      [terminalId, onClose]
   );

   const handleMinimize = useCallback(
      (e: React.MouseEvent) => {
         e.stopPropagation(); // Prevent triggering the parent's onClick (handleFocus)
         onMinimize?.(terminalId);
      },
      [terminalId, onMinimize]
   );

   const handleMaximize = useCallback(
      (e: React.MouseEvent) => {
         e.stopPropagation(); // Prevent triggering the parent's onClick (handleFocus)
         onMaximize?.(terminalId);
      },
      [terminalId, onMaximize]
   );

   // Handle title editing
   const handleTitleDoubleClick = useCallback(
      (e: React.MouseEvent) => {
         e.stopPropagation();
         if (!isEditingTitle) {
            setIsEditingTitle(true);
            setEditingTitle(title);
         }
      },
      [isEditingTitle, title]
   );

   const handleTitleSubmit = useCallback(() => {
      if (editingTitle.trim() && editingTitle.trim() !== title) {
         multiTerminalStore.updateTerminalTitle(terminalId, editingTitle.trim());
      }
      setIsEditingTitle(false);
      setEditingTitle('');
   }, [editingTitle, title, terminalId, multiTerminalStore]);

   const handleTitleCancel = useCallback(() => {
      setIsEditingTitle(false);
      setEditingTitle('');
   }, []);

   const handleTitleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
         if (e.key === 'Enter') {
            e.preventDefault();
            handleTitleSubmit();
         } else if (e.key === 'Escape') {
            e.preventDefault();
            handleTitleCancel();
         }
      },
      [handleTitleSubmit, handleTitleCancel]
   );

   const handleFocus = useCallback(() => {
      // Focus the actual terminal when clicked
      if (terminal && !terminalInstance?.isMinimized) {
         setTimeout(() => {
            terminal.focus();
         }, 0);
      }
      onFocus?.(terminalId);
   }, [terminalId, onFocus, terminal, terminalInstance?.isMinimized]);

   // Handle reconnect
   const handleReconnect = useCallback(() => {
      console.log(`🔄 Manual reconnect requested for terminal ${terminalId}`);
      multiTerminalStore
         .reconnectTerminal(terminalId)
         .then(() => {
            if (terminalInstance) {
               multiTerminalStore.markTerminalAsRestored(terminalId);
            }
         })
         .catch((error) => {
            console.error(`Failed to manually reconnect terminal ${terminalId}:`, error);
         });
   }, [multiTerminalStore, terminalId, terminalInstance]);

   // Handle dragging
   const handleMouseDown = useCallback(
      (e: React.MouseEvent) => {
         if (terminalInstance?.isMaximized) return;

         setIsDragging(true);
         const rect = e.currentTarget.getBoundingClientRect();
         setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
         });
      },
      [terminalInstance?.isMaximized]
   );

   const handleMouseMove = useCallback(
      (e: MouseEvent) => {
         if (!isDragging || terminalInstance?.isMaximized) return;

         const newX = e.clientX - dragOffset.x;
         const newY = e.clientY - dragOffset.y;

         multiTerminalStore.updateTerminalPosition(terminalId, newX, newY);
      },
      [isDragging, terminalId, terminalInstance?.isMaximized, dragOffset, multiTerminalStore]
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

   // Early return after all hooks are defined to maintain hook order
   if (!terminalInstance) {
      return null; // Terminal not found
   }

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
               {isEditingTitle ? (
                  <input
                     type="text"
                     value={editingTitle}
                     onChange={(e) => setEditingTitle(e.target.value)}
                     onKeyDown={handleTitleKeyDown}
                     onBlur={handleTitleSubmit}
                     className="text-sm font-medium bg-transparent border-b border-gray-400 dark:border-gray-500 outline-none text-gray-700 dark:text-gray-300 min-w-0 flex-1 max-w-48"
                     autoFocus
                     onClick={(e) => e.stopPropagation()}
                  />
               ) : (
                  <span
                     className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-gray-100 transition-colors select-none"
                     onDoubleClick={handleTitleDoubleClick}
                     title="Double-click to rename"
                  >
                     {title}
                  </span>
               )}
               {session && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                     {session.shell} • {session.platform}
                  </span>
               )}
               {terminalInstance?.isRestored && (
                  <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full">
                     Restored
                  </span>
               )}
               {connectionStatus === TerminalConnectionStatus.RECONNECTING && (
                  <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full">
                     Reconnecting...
                  </span>
               )}
            </div>

            <div className="flex items-center space-x-1">
               <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleMinimize}
                  className="h-6 w-6 p-0 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
               >
                  <Minimize2 className="h-3 w-3" />
               </Button>
               <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleMaximize}
                  className="h-6 w-6 p-0 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
               >
                  <Maximize2 className="h-3 w-3" />
               </Button>
               <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleClose}
                  className="h-6 w-6 p-0 cursor-pointer hover:bg-red-500 hover:text-white rounded transition-colors"
               >
                  <X className="h-3 w-3" />
               </Button>
            </div>
         </div>

         {/* Terminal Content - only render when not minimized */}
         {!isMinimized && (
            <div
               className="flex flex-col h-full"
               style={{ height: isMaximized ? 'calc(100% - 60px)' : 'calc(100% - 60px)' }}
            >
               {/* Terminal Status Bar */}
               <TerminalStatus
                  status={connectionStatus}
                  session={session}
                  error={error}
                  onReconnect={handleReconnect}
               />

               {/* Terminal Container - simplified styling like Terminal.tsx */}
               <div
                  ref={terminalContainerRef}
                  className="flex-1 w-full terminal-container"
                  style={{
                     minHeight: '300px',
                     backgroundColor: '#000000', // Ensure black background
                     position: 'relative', // Ensure proper positioning for XTerm
                  }}
                  onClick={handleFocus}
               />

               {/* Loading/Restoration Overlay */}
               {(connectionStatus === TerminalConnectionStatus.CONNECTING ||
                  connectionStatus === TerminalConnectionStatus.RECONNECTING) && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                     <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                        <div className="flex items-center space-x-3">
                           <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                           <span className="text-sm font-medium">
                              {connectionStatus === TerminalConnectionStatus.RECONNECTING
                                 ? 'Reconnecting to terminal...'
                                 : 'Connecting to terminal...'}
                           </span>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         )}
      </div>
   );
}

export default MultiTerminalWrapper;
