'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
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
            href="/debug/index"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
         >
            <ArrowLeft className="h-4 w-4" />
            Back to Debug & Demo Tools
         </Link>
         <h1 className="text-3xl font-bold mb-6">Command Palette Demo</h1>

         <div className="space-y-6">
            {/* Basic Command Palette */}
            <div className="p-6 border rounded-lg">
               <h2 className="text-xl font-semibold mb-4">Basic Command Palette</h2>
               <p className="text-sm text-muted-foreground mb-4">
                  Standard command palette without any initial state
               </p>
               <Button
                  size="lg"
                  onClick={() => {
                     setInitialState(undefined);
                     setOpen(true);
                  }}
               >
                  Open Command Palette (⌘K)
               </Button>
            </div>

            {/* Initial State Demos */}
            <div className="p-6 border rounded-lg">
               <h2 className="text-xl font-semibold mb-4">Initial State Demonstrations</h2>
               <p className="text-sm text-muted-foreground mb-6">
                  Click any button to see how the command palette can be opened with pre-selected
                  commands and values
               </p>

               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="p-4 border rounded-lg">
                     <h3 className="font-medium mb-2">Pre-filled Input</h3>
                     <p className="text-xs text-muted-foreground mb-3">
                        Opens directly to Quick Note with text
                     </p>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                           setInitialState({
                              commandId: 'example:quick-note',
                              inputValue: 'This is a pre-filled note!',
                           });
                           setOpen(true);
                        }}
                     >
                        Pre-filled Note
                     </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                     <h3 className="font-medium mb-2">Auto-execute Option</h3>
                     <p className="text-xs text-muted-foreground mb-3">
                        Opens and immediately selects staging
                     </p>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                           setInitialState({
                              commandId: 'example:environment-selector',
                              selectedOptionId: 'staging',
                           });
                           setOpen(true);
                        }}
                     >
                        Staging Auto-execute
                     </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                     <h3 className="font-medium mb-2">No Auto-execute</h3>
                     <p className="text-xs text-muted-foreground mb-3">
                        Opens to selector but waits for user
                     </p>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                           setInitialState({
                              commandId: 'example:environment-selector',
                              selectedOptionId: 'staging',
                              autoExecute: false,
                           });
                           setOpen(true);
                        }}
                     >
                        Environment Selector
                     </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                     <h3 className="font-medium mb-2">Input with Actions</h3>
                     <p className="text-xs text-muted-foreground mb-3">
                        Bug report form with description
                     </p>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                           setInitialState({
                              commandId: 'example:issue-reporter',
                              inputValue: 'The login button is not working properly',
                           });
                           setOpen(true);
                        }}
                     >
                        Bug Report
                     </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                     <h3 className="font-medium mb-2">Pre-filled Search</h3>
                     <p className="text-xs text-muted-foreground mb-3">Opens with search query</p>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                           setInitialState({
                              searchValue: 'theme',
                           });
                           setOpen(true);
                        }}
                     >
                        Search "theme"
                     </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                     <h3 className="font-medium mb-2">Workflow Start</h3>
                     <p className="text-xs text-muted-foreground mb-3">
                        Multi-step workflow example
                     </p>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                           setInitialState({
                              commandId: 'example:workflow-starter',
                           });
                           setOpen(true);
                        }}
                     >
                        Start Workflow
                     </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                     <h3 className="font-medium mb-2">File Search</h3>
                     <p className="text-xs text-muted-foreground mb-3">
                        Search through project files
                     </p>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                           setInitialState({
                              commandId: 'example:file-search',
                           });
                           setOpen(true);
                        }}
                     >
                        Search Files
                     </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                     <h3 className="font-medium mb-2">Command Search</h3>
                     <p className="text-xs text-muted-foreground mb-3">Search available commands</p>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                           setInitialState({
                              commandId: 'example:command-search',
                           });
                           setOpen(true);
                        }}
                     >
                        Search Commands
                     </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                     <h3 className="font-medium mb-2">Dynamic Search</h3>
                     <p className="text-xs text-muted-foreground mb-3">
                        Context-aware search results
                     </p>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                           setInitialState({
                              commandId: 'example:dynamic-search',
                           });
                           setOpen(true);
                        }}
                     >
                        Dynamic Search
                     </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                     <h3 className="font-medium mb-2">Grid Layout</h3>
                     <p className="text-xs text-muted-foreground mb-3">Search with grid display</p>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                           setInitialState({
                              commandId: 'example:grid-search',
                           });
                           setOpen(true);
                        }}
                     >
                        Grid Search
                     </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                     <h3 className="font-medium mb-2">Table Layout</h3>
                     <p className="text-xs text-muted-foreground mb-3">Search with table display</p>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                           setInitialState({
                              commandId: 'example:table-search',
                           });
                           setOpen(true);
                        }}
                     >
                        Table Search
                     </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                     <h3 className="font-medium mb-2">Custom Renderer</h3>
                     <p className="text-xs text-muted-foreground mb-3">
                        Fully custom result display
                     </p>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                           setInitialState({
                              commandId: 'example:custom-render-search',
                           });
                           setOpen(true);
                        }}
                     >
                        Custom Display
                     </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                     <h3 className="font-medium mb-2">Grouped Results</h3>
                     <p className="text-xs text-muted-foreground mb-3">
                        Search with custom grouping
                     </p>
                     <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                           setInitialState({
                              commandId: 'example:grouped-search',
                           });
                           setOpen(true);
                        }}
                     >
                        Grouped Search
                     </Button>
                  </div>
               </div>

               <div className="mt-4 text-xs text-muted-foreground p-3 bg-muted rounded-lg">
                  <strong>Current Initial State:</strong>{' '}
                  <code className="text-xs">
                     {initialState ? JSON.stringify(initialState, null, 2) : 'undefined'}
                  </code>
               </div>
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

            <div className="p-6 border rounded-lg">
               <h2 className="text-xl font-semibold mb-4">System Features</h2>
               <div className="grid gap-4 md:grid-cols-2">
                  <div>
                     <h3 className="font-medium text-sm mb-2">Core Features</h3>
                     <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                        <li>Context-aware command execution</li>
                        <li>Multi-step command flows</li>
                        <li>Dynamic command resolution</li>
                        <li>Command chaining with history</li>
                     </ul>
                  </div>
                  <div>
                     <h3 className="font-medium text-sm mb-2">Advanced Features</h3>
                     <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                        <li>Module system with dependencies</li>
                        <li>Input validation and transformation</li>
                        <li>Select commands with async options</li>
                        <li>Initial state support (NEW)</li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="p-6 border rounded-lg">
               <h2 className="text-xl font-semibold mb-4">Available Commands</h2>
               <p className="text-sm text-muted-foreground mb-4">
                  Try these commands when the palette is open:
               </p>
               <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-2">
                     <h3 className="font-medium text-sm">Basic Commands</h3>
                     <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
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
                           <strong>Multi-Step Example</strong> - Complex flow
                        </li>
                     </ul>
                  </div>
                  <div className="space-y-2">
                     <h3 className="font-medium text-sm">Context-Aware Commands</h3>
                     <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                        <li>
                           <strong>User Context Demo</strong> - Shows external context
                        </li>
                        <li>
                           <strong>Theme Actions</strong> - Different options by theme
                        </li>
                        <li>
                           <strong>Workspace Commands</strong> - Project-specific commands
                        </li>
                        <li>
                           <strong>Set User Name</strong> - Dynamic title based on context
                        </li>
                     </ul>
                  </div>
                  <div className="space-y-2">
                     <h3 className="font-medium text-sm">Search Commands</h3>
                     <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                        <li>
                           <strong>Search Files</strong> - Search through project files with
                           real-time results
                        </li>
                        <li>
                           <strong>Search Commands</strong> - Find available commands by name or
                           description
                        </li>
                        <li>
                           <strong>Dynamic Data Search</strong> - Context-aware search with
                           project-specific results
                        </li>
                     </ul>
                  </div>
                  <div className="space-y-2">
                     <h3 className="font-medium text-sm">Custom Display Options</h3>
                     <ul className="list-disc list-inside text-xs space-y-1 text-muted-foreground">
                        <li>
                           <strong>Grid Layout</strong> - Display search results in a responsive
                           grid format
                        </li>
                        <li>
                           <strong>Table Layout</strong> - Show results in a structured table with
                           multiple columns
                        </li>
                        <li>
                           <strong>Custom Renderer</strong> - Fully custom component rendering for
                           each result
                        </li>
                        <li>
                           <strong>Grouped Results</strong> - Organize results by category with
                           custom group headers
                        </li>
                     </ul>
                  </div>
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
