'use client';

import { TerminalProvider } from '@/features/terminal/contexts/TerminalContext';
import { MultiTerminalManager } from '@/features/terminal/components/MultiTerminalManager';
import { useMultiTerminalStore } from '@/store/multiTerminalStore';
import { Button } from '@/components/ui/button';
import { Terminal, Plus, Trash2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TerminalDemo() {
   const { terminals, createTerminal, closeTerminal } = useMultiTerminalStore();

   const handleCreateTerminal = () => {
      createTerminal('Demo Terminal');
   };

   const handleClearAll = () => {
      terminals.forEach((terminal) => closeTerminal(terminal.id));
   };

   return (
      <TerminalProvider>
         <div className="min-h-screen relative">
            {/* Header */}
            <div className="container mx-auto py-6 px-4">
               <Link
                  href="/debug/index"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
               >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Debug & Demo Tools
               </Link>
               <div className="flex items-center justify-between mb-6">
                  <div>
                     <h1 className="text-3xl font-bold mb-2">Terminal Demo</h1>
                     <p className="text-muted-foreground">
                        Interactive multi-terminal environment with WebSocket connectivity
                     </p>
                  </div>
                  <div className="flex gap-2">
                     <Button onClick={handleCreateTerminal} className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        New Terminal
                     </Button>
                     {terminals.length > 0 && (
                        <Button
                           onClick={handleClearAll}
                           variant="destructive"
                           className="flex items-center gap-2"
                        >
                           <Trash2 className="h-4 w-4" />
                           Clear All
                        </Button>
                     )}
                  </div>
               </div>

               {/* Instructions */}
               <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <h2 className="text-lg font-semibold mb-3">Features</h2>
                  <ul className="space-y-2 text-sm">
                     <li className="flex items-start gap-2">
                        <Terminal className="h-4 w-4 mt-0.5 text-primary" />
                        <span>Create multiple terminal instances with persistent sessions</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <Terminal className="h-4 w-4 mt-0.5 text-primary" />
                        <span>Drag terminals around the screen to arrange your workspace</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <Terminal className="h-4 w-4 mt-0.5 text-primary" />
                        <span>Minimize terminals to a chat-style bar at the bottom</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <Terminal className="h-4 w-4 mt-0.5 text-primary" />
                        <span>Maximize terminals for full-screen focus mode</span>
                     </li>
                     <li className="flex items-start gap-2">
                        <Terminal className="h-4 w-4 mt-0.5 text-primary" />
                        <span>Sessions persist across page refreshes and reconnections</span>
                     </li>
                  </ul>
               </div>

               {/* Demo area placeholder */}
               {terminals.length === 0 && (
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center">
                     <Terminal className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                     <p className="text-muted-foreground mb-4">No terminals open</p>
                     <Button onClick={handleCreateTerminal} variant="outline">
                        Create your first terminal
                     </Button>
                  </div>
               )}
            </div>

            {/* Terminal Manager */}
            <MultiTerminalManager />
         </div>
      </TerminalProvider>
   );
}
