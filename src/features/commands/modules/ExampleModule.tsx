import {
   createActionCommand,
   createSelectCommand,
   createInputCommand,
   createContextualInputCommand,
   createCompositeCommand,
   type CommandModule,
} from '../types';
import { toast } from 'sonner';
import { FileIcon, FolderIcon, SettingsIcon, PlusIcon } from 'lucide-react';

export const exampleModule: CommandModule = {
   id: 'example',
   name: 'Example Commands',
   version: '1.0.0',
   description: 'Example commands demonstrating the new command system',

   commands: (context) => [
      // Simple action command
      createActionCommand({
         id: 'example:hello',
         title: 'Hello World',
         description: 'A simple greeting command',
         icon: <FileIcon className="w-4 h-4" />,
         group: 'Examples',
         execute: async () => {
            toast.success('Hello from the new command system!');
            return { success: true };
         },
      }),

      // Select command with dynamic options
      createSelectCommand({
         id: 'example:select-item',
         title: 'Select Item',
         description: 'Choose from a list of items',
         icon: <FolderIcon className="w-4 h-4" />,
         group: 'Examples',
         options: async () => {
            // Simulate loading options
            await new Promise((resolve) => setTimeout(resolve, 500));

            return [
               { id: '1', title: 'Item One', value: 'one', icon: <FileIcon className="w-3 h-3" /> },
               { id: '2', title: 'Item Two', value: 'two', icon: <FileIcon className="w-3 h-3" /> },
               {
                  id: '3',
                  title: 'Item Three',
                  value: 'three',
                  icon: <FileIcon className="w-3 h-3" />,
               },
            ];
         },
         execute: async (selectedValue) => {
            toast.info(`You selected: ${selectedValue}`);
            return { success: true };
         },
      }),

      // Input command with contextual display
      createContextualInputCommand({
         id: 'example:create-item',
         title: 'Create Item',
         description: 'Enter a name for the new item',
         icon: <PlusIcon className="w-4 h-4" />,
         group: 'Examples',
         inputConfig: {
            placeholder: 'Enter item name...',
            submitHint: 'Press Enter to create',
            validation: (value) => {
               if (!value.trim()) return 'Name is required';
               if (value.length < 3) return 'Name must be at least 3 characters';
               return undefined;
            },
         },
         execute: async (name) => {
            toast.success(`Created item: ${name}`);
            return { success: true };
         },
      }),

      // Input command with custom contextual format
      createContextualInputCommand({
         id: 'example:create-item-custom',
         title: 'Create New Item',
         description: 'Enter a name for the new item with custom formatting',
         icon: <PlusIcon className="w-4 h-4" />,
         group: 'Examples',
         contextFormat: (title, value) => `${title}: "${value}"...`,
         inputConfig: {
            placeholder: 'Enter item name...',
            submitHint: 'Press Enter to create',
            validation: (value) => {
               if (!value.trim()) return 'Name is required';
               if (value.length < 3) return 'Name must be at least 3 characters';
               return undefined;
            },
         },
         execute: async (name) => {
            toast.success(`Created custom item: ${name}`);
            return { success: true };
         },
      }),

      // Composite command with multi-step flow
      createCompositeCommand({
         id: 'example:multi-step',
         title: 'Multi-Step Example',
         description: 'A command that returns more commands',
         icon: <SettingsIcon className="w-4 h-4" />,
         group: 'Examples',
         execute: async () => {
            return {
               success: true,
               nextCommand: createSelectCommand({
                  id: 'example:multi-step-2',
                  title: 'Step 2: Choose Type',
                  type: 'select',
                  options: [
                     { id: 'file', title: 'File', value: 'file' },
                     { id: 'folder', title: 'Folder', value: 'folder' },
                  ],
                  execute: async (type) => {
                     context.data.selectedType = type;

                     return {
                        success: true,
                        nextCommand: createInputCommand({
                           id: 'example:multi-step-3',
                           title: `Step 3: Name your ${type}`,
                           type: 'input',
                           inputConfig: {
                              placeholder: `Enter ${type} name...`,
                           },
                           execute: async (name) => {
                              toast.success(`Created ${type}: ${name}`);
                              return {
                                 success: true,
                                 data: { type, name },
                              };
                           },
                        }),
                     };
                  },
               }),
            };
         },
      }),

      // Context-aware command
      createActionCommand({
         id: 'example:context-aware',
         title: (ctx) => (ctx.data.userName ? `Hello, ${ctx.data.userName}!` : 'Set User Name'),
         description: 'This command changes based on context',
         visible: (ctx) => !ctx.data.hideExample,
         execute: async (_, ctx) => {
            if (ctx.data.userName) {
               toast.info(`Welcome back, ${ctx.data.userName}!`);
            } else {
               return {
                  success: true,
                  nextCommand: createInputCommand({
                     id: 'example:set-username',
                     title: 'Enter your name',
                     type: 'input',
                     inputConfig: {
                        placeholder: 'Your name...',
                     },
                     execute: async (name) => {
                        ctx.data.userName = name;
                        toast.success(`Nice to meet you, ${name}!`);
                        return { success: true };
                     },
                  }),
               };
            }
            return { success: true };
         },
      }),
   ],

   // Context extensions
   contextExtensions: {
      data: {
         exampleData: 'This is example module data',
      },
      methods: {
         exampleMethod: () => {
            console.log('Example method called');
         },
      },
   },

   // Event handlers
   onCommandExecute: (command, result) => {
      console.log(`Example module: Command ${command.id} executed`, result);
   },
};
