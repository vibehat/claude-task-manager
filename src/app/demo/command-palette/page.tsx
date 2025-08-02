'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
   CommandPalette,
   CommandPaletteProvider,
   useCommandContext,
   useCommandModules,
   type CommandPaletteInitialState,
} from '@/components/command-palette';
import { exampleModule } from '@/features/commands';

function CommandPaletteDemo() {
   const [open, setOpen] = useState(false);
   const [externalContext, setExternalContext] = useState<Record<string, any>>({
      theme: 'dark',
      userRole: 'admin',
      userName: 'John Doe',
      projectName: 'TaskMaster UI',
      projectType: 'react',
   });
   const [initialState, setInitialState] = useState<CommandPaletteInitialState | undefined>(
      undefined
   );
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
            <div className="flex gap-2 flex-wrap">
               <Button
                  onClick={() => {
                     setInitialState(undefined);
                     setOpen(true);
                  }}
               >
                  Open Command Palette (⌘K)
               </Button>
               <Button
                  variant="outline"
                  onClick={() => {
                     setInitialState({
                        commandId: 'example:quick-note',
                        inputValue: 'This is a pre-filled note!',
                     });
                     setOpen(true);
                  }}
               >
                  Open with Pre-filled Note
               </Button>
               <Button
                  variant="outline"
                  onClick={() => {
                     setInitialState({
                        commandId: 'example:environment-selector',
                        selectedOptionId: 'staging',
                     });
                     setOpen(true);
                  }}
               >
                  Open with Staging Auto-executed
               </Button>
               <Button
                  variant="outline"
                  onClick={() => {
                     setInitialState({
                        commandId: 'example:environment-selector',
                        selectedOptionId: 'staging',
                        autoExecute: false,
                     });
                     setOpen(true);
                  }}
               >
                  Open Environment Selector (No Auto-execute)
               </Button>
               <Button
                  variant="outline"
                  onClick={() => {
                     setInitialState({
                        commandId: 'example:issue-reporter',
                        inputValue: 'The login button is not working properly',
                     });
                     setOpen(true);
                  }}
               >
                  Open with Bug Report
               </Button>
               <Button
                  variant="outline"
                  onClick={() => {
                     setInitialState({
                        searchValue: 'theme',
                     });
                     setOpen(true);
                  }}
               >
                  Open with Search "theme"
               </Button>
            </div>

            <div className="p-4 border rounded-lg space-y-4">
               <h2 className="text-lg font-semibold">External Context Demo</h2>
               <p className="text-sm text-muted-foreground">
                  Try changing these values and reopening the command palette to see dynamic
                  commands:
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <div>
                     <label className="block text-sm font-medium mb-1">Theme</label>
                     <select
                        value={externalContext.theme}
                        onChange={(e) =>
                           setExternalContext((prev) => ({ ...prev, theme: e.target.value }))
                        }
                        className="w-full p-2 border rounded text-sm"
                     >
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                        <option value="auto">Auto</option>
                     </select>
                  </div>
                  <div>
                     <label className="block text-sm font-medium mb-1">User Role</label>
                     <select
                        value={externalContext.userRole}
                        onChange={(e) =>
                           setExternalContext((prev) => ({ ...prev, userRole: e.target.value }))
                        }
                        className="w-full p-2 border rounded text-sm"
                     >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="guest">Guest</option>
                     </select>
                  </div>
                  <div>
                     <label className="block text-sm font-medium mb-1">User Name</label>
                     <input
                        type="text"
                        value={externalContext.userName}
                        onChange={(e) =>
                           setExternalContext((prev) => ({ ...prev, userName: e.target.value }))
                        }
                        className="w-full p-2 border rounded text-sm"
                        placeholder="Enter name..."
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium mb-1">Project Type</label>
                     <select
                        value={externalContext.projectType}
                        onChange={(e) =>
                           setExternalContext((prev) => ({ ...prev, projectType: e.target.value }))
                        }
                        className="w-full p-2 border rounded text-sm"
                     >
                        <option value="react">React</option>
                        <option value="node">Node.js</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                     </select>
                  </div>
               </div>
               <div>
                  <label className="block text-sm font-medium mb-1">Project Name</label>
                  <input
                     type="text"
                     value={externalContext.projectName}
                     onChange={(e) =>
                        setExternalContext((prev) => ({ ...prev, projectName: e.target.value }))
                     }
                     className="w-full p-2 border rounded text-sm"
                     placeholder="Enter project name..."
                  />
               </div>
               <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
                  <strong>Current Context:</strong> {JSON.stringify(externalContext, null, 2)}
               </div>
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
                  <li>
                     <strong>User Context Demo</strong> - Shows external context data
                  </li>
                  <li>
                     <strong>Theme Actions</strong> - Different options based on theme (only visible
                     when theme is set)
                  </li>
                  <li>
                     <strong>Workspace Commands</strong> - Project-specific commands based on
                     context
                  </li>
               </ul>
            </div>

            <div className="p-4 border rounded-lg space-y-2">
               <h2 className="text-lg font-semibold">Initial State Feature</h2>
               <p className="text-sm text-muted-foreground">
                  The command palette can be opened with a pre-selected command and input values.
               </p>
               <ul className="list-disc list-inside text-sm space-y-1">
                  <li>
                     <strong>Quick Note</strong> - Opens with pre-filled input text
                  </li>
                  <li>
                     <strong>Staging Auto-executed</strong> - Opens and immediately executes
                     "staging" option
                  </li>
                  <li>
                     <strong>Environment Selector (No Auto-execute)</strong> - Opens to environment
                     selector but waits for user choice
                  </li>
                  <li>
                     <strong>Bug Report</strong> - Opens with pre-filled issue description
                  </li>
                  <li>
                     <strong>Search "theme"</strong> - Opens with search pre-filled
                  </li>
               </ul>
               <div className="text-xs text-muted-foreground p-2 bg-muted rounded">
                  <strong>Current Initial State:</strong>{' '}
                  {initialState ? JSON.stringify(initialState, null, 2) : 'None'}
               </div>
            </div>
         </div>

         <CommandPalette
            open={open}
            onOpenChange={setOpen}
            context={externalContext}
            initialState={initialState}
         />
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
