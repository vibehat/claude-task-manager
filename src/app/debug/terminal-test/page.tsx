'use client';

import { useState, useEffect } from 'react';
import { useMultiTerminalStore } from '@/store/multiTerminalStore';
import { Button } from '@/components/ui/button';
import { TerminalProvider } from '@/features/terminal/contexts/TerminalContext';
import { MultiTerminalManager } from '@/features/terminal/components/MultiTerminalManager';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TestTerminalPage() {
   const [mounted, setMounted] = useState(false);
   const { terminals, createTerminal, isHydrated, lastSavedAt } = useMultiTerminalStore();

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return <div>Loading...</div>;
   }

   return (
      <div className="p-4 space-y-4">
         <Link
            href="/debug/index"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
         >
            <ArrowLeft className="h-4 w-4" />
            Back to Debug Tools
         </Link>
         <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Terminal Input & Persistence Test</h1>

            <div className="grid grid-cols-2 gap-4 mb-4">
               <div>
                  <h3 className="font-semibold">Store Status</h3>
                  <p>Hydrated: {isHydrated ? '✅' : '❌'}</p>
                  <p>Terminals: {terminals.length}</p>
                  <p>Last Saved: {lastSavedAt?.toLocaleTimeString() || 'Never'}</p>
               </div>

               <div>
                  <h3 className="font-semibold">Actions</h3>
                  <Button onClick={() => createTerminal('Test Terminal')} className="mb-2 mr-2">
                     Create Terminal
                  </Button>
                  <Button onClick={() => window.location.reload()} variant="outline">
                     Refresh Page
                  </Button>
               </div>
            </div>

            <div className="space-y-2">
               <h3 className="font-semibold">Terminal List</h3>
               {terminals.map((terminal) => (
                  <div
                     key={terminal.id}
                     className="flex items-center justify-between p-2 bg-white dark:bg-gray-700 rounded"
                  >
                     <div>
                        <span className="font-medium">{terminal.title}</span>
                        <span className="ml-2 text-sm text-gray-500">
                           ({terminal.isMinimized ? 'Minimized' : 'Visible'})
                        </span>
                        {terminal.isRestored && (
                           <span className="ml-2 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-1 rounded">
                              Restored
                           </span>
                        )}
                     </div>
                     <div className="text-xs text-gray-400">
                        Created: {terminal.createdAt.toLocaleTimeString()}
                     </div>
                  </div>
               ))}
               {terminals.length === 0 && (
                  <p className="text-gray-500 italic">No terminals created yet</p>
               )}
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border-l-4 border-blue-400">
               <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                  Testing Instructions
               </h4>
               <ul className="text-sm text-blue-700 dark:text-blue-300 mt-1 space-y-1">
                  <li>1. Create a terminal and wait for connection</li>
                  <li>2. Click inside the terminal to focus it</li>
                  <li>3. Type commands (e.g., "ls", "pwd", "echo hello")</li>
                  <li>4. Check browser console for input/output logs</li>
                  <li>5. Refresh page to test persistence</li>
               </ul>
            </div>
         </div>

         <TerminalProvider>
            <MultiTerminalManager />
         </TerminalProvider>
      </div>
   );
}
