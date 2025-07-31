'use client';

import React, { useEffect, useCallback } from 'react';
import { PersistentTerminal } from './PersistentTerminal';
import { useMultiTerminalStore } from '@/store/multiTerminalStore';
import { cn } from '@/libs/client/utils';

interface MultiTerminalManagerProps {
   className?: string;
}

export function MultiTerminalManager({ className }: MultiTerminalManagerProps) {
   const {
      terminals,
      activeTerminalId,
      setActiveTerminal,
      closeTerminal,
      toggleMinimize,
      toggleMaximize,
      updateTerminalPosition,
      updateTerminalSize,
      bringTerminalToFront,
      arrangeTerminals,
   } = useMultiTerminalStore();

   // Handle window resize to rearrange terminals
   useEffect(() => {
      const handleResize = () => {
         arrangeTerminals();
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, [arrangeTerminals]);

   // Handle terminal focus
   const handleTerminalFocus = useCallback(
      (terminalId: string) => {
         setActiveTerminal(terminalId);
         bringTerminalToFront(terminalId);
      },
      [setActiveTerminal, bringTerminalToFront]
   );

   // Handle terminal close
   const handleTerminalClose = useCallback(
      (terminalId: string) => {
         closeTerminal(terminalId);
      },
      [closeTerminal]
   );

   // Handle terminal minimize
   const handleTerminalMinimize = useCallback(
      (terminalId: string) => {
         console.log(`Minimizing terminal: ${terminalId}`);
         toggleMinimize(terminalId);
      },
      [toggleMinimize]
   );

   // Handle terminal maximize
   const handleTerminalMaximize = useCallback(
      (terminalId: string) => {
         toggleMaximize(terminalId);
      },
      [toggleMaximize]
   );

   // Render minimized terminals bar (Facebook chat style)
   const minimizedTerminals = terminals.filter((t) => t.isMinimized);
   const visibleTerminals = terminals.filter((t) => !t.isMinimized);

   return (
      <div className={cn('fixed inset-0 pointer-events-none z-40', className)}>
         {/* Render visible terminals */}
         {visibleTerminals.map((terminal) => (
            <div
               key={terminal.id}
               className="absolute pointer-events-auto"
               style={{
                  left: terminal.position.x,
                  top: terminal.position.y,
                  zIndex: terminal.zIndex,
                  width: terminal.isMaximized ? 'calc(100vw - 32px)' : terminal.size.width,
                  height: terminal.isMaximized ? 'calc(100vh - 32px)' : terminal.size.height,
               }}
            >
               <PersistentTerminal
                  terminalId={terminal.id}
                  onClose={handleTerminalClose}
                  onMinimize={handleTerminalMinimize}
                  onMaximize={handleTerminalMaximize}
                  onFocus={handleTerminalFocus}
               />
            </div>
         ))}

         {/* Minimized terminals bar (Facebook chat style) */}
         {minimizedTerminals.length > 0 && (
            <div className="fixed bottom-0 right-0 flex space-x-2 p-4 pointer-events-auto z-50">
               {minimizedTerminals
                  .sort((a, b) => b.lastActiveAt.getTime() - a.lastActiveAt.getTime())
                  .map((terminal) => (
                     <div
                        key={terminal.id}
                        className={cn(
                           'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-t-lg shadow-lg cursor-pointer transition-all hover:shadow-xl',
                           'w-48 h-12 flex items-center justify-between px-3 py-2',
                           activeTerminalId === terminal.id && 'ring-2 ring-blue-500'
                        )}
                        onClick={() => handleTerminalMinimize(terminal.id)}
                        title={`Click to restore ${terminal.title}`}
                     >
                        {/* Terminal icon and title */}
                        <div className="flex items-center space-x-2 min-w-0 flex-1">
                           <div className="flex space-x-1">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                           </div>
                           <span className="text-sm font-medium truncate text-gray-700 dark:text-gray-300">
                              {terminal.title}
                           </span>
                        </div>

                        {/* Close button */}
                        <button
                           className="ml-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded p-1 transition-colors"
                           onClick={(e) => {
                              e.stopPropagation();
                              handleTerminalClose(terminal.id);
                           }}
                           title="Close terminal"
                        >
                           <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                           </svg>
                        </button>
                     </div>
                  ))}
            </div>
         )}
      </div>
   );
}

export default MultiTerminalManager;
