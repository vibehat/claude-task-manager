'use client';

import React, { useEffect } from 'react';
import { useTerminalContext } from '@/features/terminal';
import { Terminal as TerminalIcon, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TerminalPage(): React.JSX.Element {
   let terminalContext;

   try {
      terminalContext = useTerminalContext();
   } catch (error) {
      // If TerminalProvider is not available, show error message
      return (
         <div className="flex flex-col h-full p-6">
            <div className="flex-1 flex items-center justify-center">
               <div className="max-w-md text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                     <TerminalIcon className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                     <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Terminal Provider Not Available
                     </h2>
                     <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        The terminal functionality is not available. Please ensure you're accessing
                        this page through the proper layout.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      );
   }

   const { showTerminal, isVisible, session, connectionStatus } = terminalContext;

   // Auto-show terminal when visiting terminal page
   useEffect(() => {
      if (!isVisible) {
         showTerminal();
      }
   }, [isVisible, showTerminal]);

   return (
      <div className="flex flex-col h-full p-6">
         {/* Page Header */}
         <div className="flex items-center justify-between mb-6">
            <div>
               <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <TerminalIcon className="h-6 w-6" />
                  Terminal
               </h1>
               <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Interactive terminal for running commands and Task Master CLI
               </p>
            </div>

            <Button
               onClick={showTerminal}
               variant={isVisible ? 'secondary' : 'default'}
               className="flex items-center gap-2"
            >
               <ExternalLink className="h-4 w-4" />
               {isVisible ? 'Terminal Open' : 'Open Terminal'}
            </Button>
         </div>

         {/* Terminal Info */}
         <div className="flex-1 flex items-center justify-center">
            <div className="max-w-md text-center space-y-4">
               <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <TerminalIcon className="h-8 w-8 text-gray-600 dark:text-gray-400" />
               </div>

               <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                     Persistent Terminal
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                     The terminal runs persistently across all pages in Individual Mode. Click the
                     terminal icon in the header or use the button above to toggle it.
                  </p>
               </div>

               {session && (
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-left">
                     <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                        Current Session
                     </h3>
                     <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <div>
                           <span className="font-medium">Status:</span> {connectionStatus}
                        </div>
                        <div>
                           <span className="font-medium">Shell:</span> {session.shell}
                        </div>
                        <div>
                           <span className="font-medium">Platform:</span> {session.platform}
                        </div>
                        {session.cwd && (
                           <div>
                              <span className="font-medium">Directory:</span> {session.cwd}
                           </div>
                        )}
                     </div>
                  </div>
               )}

               <div className="text-xs text-gray-500 dark:text-gray-400">
                  <p>💡 Pro tip: The terminal stays connected while you navigate between pages</p>
               </div>
            </div>
         </div>
      </div>
   );
}
