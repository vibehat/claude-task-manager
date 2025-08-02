'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
   CommandPalette,
   CommandPaletteProvider,
   useCommandContext,
   useCommandModules,
} from '@/components/command-palette';
import { exampleModule } from '@/features/commands';

function CommandPaletteDemo() {
   const [open, setOpen] = useState(false);
   const { context } = useCommandContext();
   const { registeredModules } = useCommandModules();

   return (
      <div className="container mx-auto py-10">
         <Link
            href="/demo"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
         >
            ← Back to Demo Gallery
         </Link>
         <h1 className="text-3xl font-bold mb-6">Command Palette Demo</h1>

         <div className="space-y-4">
            <div>
               <Button onClick={() => setOpen(true)}>Open Command Palette (⌘K)</Button>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
               <h2 className="text-lg font-semibold">Context Info</h2>
               <p className="text-sm text-muted-foreground">Chain Length: {context.chain.length}</p>
               <p className="text-sm text-muted-foreground">
                  Loaded Modules: {registeredModules.map((m) => m.name).join(', ')}
               </p>
               <p className="text-sm text-muted-foreground">
                  Context Data: {JSON.stringify(context.data, null, 2)}
               </p>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
               <h2 className="text-lg font-semibold">Features</h2>
               <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Context-aware command execution</li>
                  <li>Multi-step command flows</li>
                  <li>Dynamic command resolution</li>
                  <li>Command chaining with history</li>
                  <li>Module system with dependencies</li>
                  <li>Input validation and transformation</li>
                  <li>Select commands with async options</li>
                  <li>Composite commands that return more commands</li>
               </ul>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
               <h2 className="text-lg font-semibold">Try These Commands</h2>
               <ul className="list-disc list-inside text-sm space-y-1">
                  <li>
                     <strong>Hello World</strong> - Simple action command
                  </li>
                  <li>
                     <strong>Select Item</strong> - Choose from dynamic options
                  </li>
                  <li>
                     <strong>Create Item</strong> - Input with validation
                  </li>
                  <li>
                     <strong>Multi-Step Example</strong> - Complex flow with multiple steps
                  </li>
                  <li>
                     <strong>Set User Name</strong> - Context-aware command
                  </li>
               </ul>
            </div>
         </div>

         <CommandPalette open={open} onOpenChange={setOpen} />
      </div>
   );
}

export default function DemoPage() {
   return (
      <CommandPaletteProvider modules={[exampleModule]}>
         <CommandPaletteDemo />
      </CommandPaletteProvider>
   );
}
