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
         {/* Render visible terminals with animations */}
         {visibleTerminals.map((terminal) => (
            <div
               key={terminal.id}
               className="absolute pointer-events-auto terminal-transition terminal-entering virtual-ray-effect"
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

         {/* Chat-style minimized terminals bar */}
         {minimizedTerminals.length > 0 && (
            <div className="fixed bottom-0 right-0 flex flex-row-reverse space-x-reverse space-x-1 p-3 pointer-events-auto z-50">
               {minimizedTerminals
                  .sort((a, b) => b.lastActiveAt.getTime() - a.lastActiveAt.getTime())
                  .slice(0, 5) // Limit to 5 visible chat tabs
                  .map((terminal, index) => (
                     <div
                        key={terminal.id}
                        className={cn(
                           'bg-gradient-to-t from-blue-600 to-blue-500 text-white border border-blue-500 rounded-t-xl shadow-2xl cursor-pointer transition-all duration-300 ease-out hover:shadow-blue-500/25 hover:scale-105 hover:-translate-y-1',
                           'w-56 h-14 flex items-center justify-between px-4 py-3 relative overflow-hidden group',
                           'hover:from-blue-500 hover:to-blue-400 hover:chat-tab-hover',
                           'chat-tab-stagger',
                           activeTerminalId === terminal.id &&
                              'ring-2 ring-blue-300 ring-opacity-75',
                           index > 0 && '-ml-2' // Slight overlap for chat stacking effect
                        )}
                        onClick={() => handleTerminalMinimize(terminal.id)}
                        title={`Click to open ${terminal.title}`}
                        style={{
                           zIndex: 50 - index, // Stack order for overlapping effect
                           animationDelay: `${index * 100}ms`, // Stagger animation
                        }}
                     >
                        {/* Background glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12"></div>

                        {/* Chat icon and title */}
                        <div className="flex items-center space-x-3 min-w-0 flex-1 relative z-10">
                           {/* Chat bubble icon */}
                           <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <svg
                                 className="w-3 h-3 text-white"
                                 viewBox="0 0 24 24"
                                 fill="currentColor"
                              >
                                 <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                              </svg>
                           </div>

                           <div className="min-w-0 flex-1">
                              <div className="text-sm font-semibold truncate text-white">
                                 {terminal.title}
                              </div>
                              <div className="text-xs text-blue-200 opacity-90">
                                 Terminal • Active
                              </div>
                           </div>
                        </div>

                        {/* Active indicator */}
                        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0 animate-pulse shadow-lg shadow-green-400/50"></div>

                        {/* Close button */}
                        <button
                           className="ml-3 hover:bg-white/20 rounded-full p-1.5 transition-all duration-200 opacity-70 hover:opacity-100 relative z-10"
                           onClick={(e) => {
                              e.stopPropagation();
                              handleTerminalClose(terminal.id);
                           }}
                           title="Close terminal"
                        >
                           <svg
                              className="w-3 h-3 text-white"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                           >
                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                           </svg>
                        </button>
                     </div>
                  ))}

               {/* Show overflow indicator if there are more than 5 terminals */}
               {minimizedTerminals.length > 5 && (
                  <div className="bg-gray-600 text-white border border-gray-500 rounded-t-xl shadow-lg cursor-pointer transition-all duration-300 hover:bg-gray-500 w-12 h-14 flex items-center justify-center -ml-2">
                     <span className="text-xs font-bold">+{minimizedTerminals.length - 5}</span>
                  </div>
               )}
            </div>
         )}
      </div>
   );
}

export default MultiTerminalManager;
