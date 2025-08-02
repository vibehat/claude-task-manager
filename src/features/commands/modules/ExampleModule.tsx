import {
   createActionCommand,
   createSelectCommand,
   createInputCommand,
   createContextualInputCommand,
   createInputWithActionsCommand,
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

      // Input with submit actions - user enters text and selects action button
      createInputWithActionsCommand({
         id: 'example:create-with-actions',
         title: 'Create with Actions',
         description: 'Enter content and choose how to create it',
         icon: <PlusIcon className="w-4 h-4" />,
         group: 'Examples',
         inputConfig: {
            placeholder: 'Enter your content...',
            validation: (value) => {
               if (!value.trim()) return 'Content is required';
               return undefined;
            },
         },
         submitActions: [
            {
               id: 'create-task',
               title: 'Create as Task',
               description: 'Create a new task with this content',
               value: 'task',
               icon: '📝',
            },
            {
               id: 'create-note',
               title: 'Create as Note',
               description: 'Save as a note',
               value: 'note',
               icon: '📄',
            },
            {
               id: 'create-reminder',
               title: 'Set as Reminder',
               description: 'Create a reminder for later',
               value: 'reminder',
               icon: '⏰',
            },
         ],
         execute: async (content, action, context) => {
            toast.success(`Created ${action.value}: "${content}"`);

            // Store in context for other commands to use
            context.data.lastCreatedItem = {
               type: action.value,
               content,
               timestamp: new Date().toISOString(),
            };

            return {
               success: true,
               data: { createdType: action.value, content },
            };
         },
      }),

      // Dynamic submit actions based on input
      createInputWithActionsCommand({
         id: 'example:dynamic-actions',
         title: 'Smart Actions',
         description: 'Actions change based on what you type',
         icon: <SettingsIcon className="w-4 h-4" />,
         group: 'Examples',
         inputConfig: {
            placeholder: 'Try typing "email", "call", or "meet"...',
         },
         submitActions: async (inputValue, context) => {
            // Dynamic actions based on input content
            const value = inputValue.toLowerCase();

            if (value.includes('email')) {
               return [
                  { id: 'send-email', title: 'Send Email', value: 'email', icon: '📧' },
                  { id: 'draft-email', title: 'Save as Draft', value: 'draft-email', icon: '📝' },
               ];
            }

            if (value.includes('call')) {
               return [
                  { id: 'make-call', title: 'Make Call', value: 'call', icon: '📞' },
                  {
                     id: 'schedule-call',
                     title: 'Schedule Call',
                     value: 'schedule-call',
                     icon: '📅',
                  },
               ];
            }

            if (value.includes('meet')) {
               return [
                  { id: 'create-meeting', title: 'Create Meeting', value: 'meeting', icon: '🤝' },
                  { id: 'find-time', title: 'Find Meeting Time', value: 'find-time', icon: '🔍' },
               ];
            }

            // Default actions
            return [
               { id: 'save', title: 'Save', value: 'save', icon: '💾' },
               { id: 'share', title: 'Share', value: 'share', icon: '🔗' },
               { id: 'delete', title: 'Delete', value: 'delete', icon: '🗑️' },
            ];
         },
         execute: async (content, action, context) => {
            toast.info(`Action: ${action.title} with content: "${content}"`);
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

      // External context aware command - shows current user role if provided
      createActionCommand({
         id: 'example:external-context-user',
         title: (ctx) => {
            const userRole = ctx.data['external.userRole'];
            const userName = ctx.data['external.userName'];
            if (userRole && userName) {
               return `Welcome ${userName} (${userRole})`;
            } else if (userRole) {
               return `Current Role: ${userRole}`;
            } else if (userName) {
               return `Hello ${userName}`;
            }
            return 'User Context Demo';
         },
         description: (ctx) => {
            const hasExternal = ctx.data['external.userRole'] || ctx.data['external.userName'];
            return hasExternal
               ? 'Command using external context data'
               : 'Pass external context to see dynamic behavior';
         },
         icon: <SettingsIcon className="w-4 h-4" />,
         group: 'Context Examples',
         execute: async (_, ctx) => {
            const userRole = ctx.data['external.userRole'];
            const userName = ctx.data['external.userName'];

            if (userRole || userName) {
               toast.success(
                  `External context detected - Role: ${userRole || 'none'}, Name: ${userName || 'none'}`
               );
            } else {
               toast.info(
                  'No external context provided. Try passing { userRole: "admin", userName: "John" }'
               );
            }
            return { success: true };
         },
      }),

      // Theme-aware command that shows different options based on theme
      createSelectCommand({
         id: 'example:theme-aware',
         title: (ctx) => {
            const theme = ctx.data['external.theme'] || 'system';
            return `Theme Actions (${theme})`;
         },
         description: 'Different options based on current theme',
         icon: <SettingsIcon className="w-4 h-4" />,
         group: 'Context Examples',
         visible: (ctx) => !!ctx.data['external.theme'],
         options: async (ctx) => {
            const theme = ctx.data['external.theme'];
            const baseOptions = [{ id: 'toggle', title: 'Toggle Theme', value: 'toggle' }];

            if (theme === 'dark') {
               return [
                  ...baseOptions,
                  { id: 'light', title: 'Switch to Light', value: 'light' },
                  { id: 'adjust-dark', title: 'Adjust Dark Settings', value: 'adjust-dark' },
               ];
            } else if (theme === 'light') {
               return [
                  ...baseOptions,
                  { id: 'dark', title: 'Switch to Dark', value: 'dark' },
                  { id: 'adjust-light', title: 'Adjust Light Settings', value: 'adjust-light' },
               ];
            } else {
               return [
                  ...baseOptions,
                  { id: 'light', title: 'Set Light Theme', value: 'light' },
                  { id: 'dark', title: 'Set Dark Theme', value: 'dark' },
                  { id: 'auto', title: 'Use System Theme', value: 'auto' },
               ];
            }
         },
         execute: async (action, ctx) => {
            const currentTheme = ctx.data['external.theme'];
            toast.info(`Theme action: ${action} (current: ${currentTheme})`);
            return { success: true };
         },
      }),

      // Dynamic workspace command that changes based on external project context
      createActionCommand({
         id: 'example:workspace-context',
         title: (ctx) => {
            const projectName = ctx.data['external.projectName'];
            const projectType = ctx.data['external.projectType'];

            if (projectName && projectType) {
               return `${projectName} (${projectType})`;
            } else if (projectName) {
               return `Project: ${projectName}`;
            }
            return 'Workspace Commands';
         },
         description: (ctx) => {
            const projectName = ctx.data['external.projectName'];
            return projectName
               ? `Commands for ${projectName}`
               : 'Pass project context to see specific commands';
         },
         icon: <FolderIcon className="w-4 h-4" />,
         group: 'Context Examples',
         execute: async (_, ctx) => {
            const projectName = ctx.data['external.projectName'];
            const projectType = ctx.data['external.projectType'];

            if (projectName || projectType) {
               return {
                  success: true,
                  nextCommand: createSelectCommand({
                     id: 'example:project-actions',
                     title: `${projectName || 'Project'} Actions`,
                     type: 'select',
                     options: async () => {
                        const options = [
                           { id: 'build', title: 'Build Project', value: 'build' },
                           { id: 'test', title: 'Run Tests', value: 'test' },
                           { id: 'deploy', title: 'Deploy', value: 'deploy' },
                        ];

                        // Add type-specific options
                        if (projectType === 'react') {
                           options.push(
                              { id: 'dev', title: 'Start Dev Server', value: 'dev' },
                              { id: 'storybook', title: 'Start Storybook', value: 'storybook' }
                           );
                        } else if (projectType === 'node') {
                           options.push(
                              { id: 'start', title: 'Start Server', value: 'start' },
                              { id: 'debug', title: 'Debug Mode', value: 'debug' }
                           );
                        }

                        return options;
                     },
                     execute: async (action) => {
                        toast.success(`Running ${action} for ${projectName || 'project'}`);
                        return { success: true };
                     },
                  }),
               };
            } else {
               toast.info(
                  'Pass project context like { projectName: "MyApp", projectType: "react" }'
               );
               return { success: true };
            }
         },
      }),

      // Commands specifically designed for demonstrating initial state
      createInputCommand({
         id: 'example:quick-note',
         title: 'Quick Note',
         description: 'Create a quick note with pre-filled content',
         icon: <FileIcon className="w-4 h-4" />,
         group: 'Initial State Examples',
         inputConfig: {
            placeholder: 'Enter your note...',
            submitHint: 'Press Enter to save note',
         },
         execute: async (content) => {
            toast.success(`Note saved: "${content}"`);
            return { success: true };
         },
      }),

      createSelectCommand({
         id: 'example:environment-selector',
         title: 'Deploy to Environment',
         description: 'Select deployment environment (great for pre-selection)',
         icon: <SettingsIcon className="w-4 h-4" />,
         group: 'Initial State Examples',
         options: async () => [
            {
               id: 'dev',
               title: 'Development',
               description: 'Deploy to dev environment',
               value: 'dev',
            },
            {
               id: 'staging',
               title: 'Staging',
               description: 'Deploy to staging environment',
               value: 'staging',
            },
            {
               id: 'prod',
               title: 'Production',
               description: 'Deploy to production environment',
               value: 'prod',
            },
         ],
         execute: async (environment) => {
            toast.success(`Deploying to ${environment} environment`);
            return { success: true };
         },
      }),

      createInputWithActionsCommand({
         id: 'example:issue-reporter',
         title: 'Report Issue',
         description: 'Report a bug or issue with pre-filled details',
         icon: <PlusIcon className="w-4 h-4" />,
         group: 'Initial State Examples',
         inputConfig: {
            placeholder: 'Describe the issue...',
            validation: (value) => {
               if (!value.trim()) return 'Issue description is required';
               return undefined;
            },
         },
         submitActions: [
            {
               id: 'bug',
               title: 'Report as Bug',
               description: 'File as a bug report',
               value: 'bug',
               icon: '🐛',
            },
            {
               id: 'feature',
               title: 'Request Feature',
               description: 'File as a feature request',
               value: 'feature',
               icon: '✨',
            },
            {
               id: 'question',
               title: 'Ask Question',
               description: 'File as a question',
               value: 'question',
               icon: '❓',
            },
         ],
         execute: async (description, action) => {
            toast.success(`${action.title}: "${description}"`);
            return { success: true };
         },
      }),

      // Command that demonstrates chaining with initial state
      createCompositeCommand({
         id: 'example:workflow-starter',
         title: 'Start Workflow',
         description: 'Initiate a multi-step workflow (can pre-select steps)',
         icon: <SettingsIcon className="w-4 h-4" />,
         group: 'Initial State Examples',
         execute: async () => {
            return {
               success: true,
               nextCommand: createSelectCommand({
                  id: 'example:workflow-step-1',
                  title: 'Choose Workflow Type',
                  type: 'select',
                  options: [
                     { id: 'ci-cd', title: 'CI/CD Pipeline', value: 'ci-cd' },
                     { id: 'data-sync', title: 'Data Synchronization', value: 'data-sync' },
                     { id: 'backup', title: 'Backup Process', value: 'backup' },
                  ],
                  execute: async (workflowType) => {
                     toast.info(`Starting ${workflowType} workflow`);
                     return {
                        success: true,
                        nextCommand: createInputCommand({
                           id: 'example:workflow-step-2',
                           title: `Configure ${workflowType}`,
                           type: 'input',
                           inputConfig: {
                              placeholder: `Enter ${workflowType} configuration...`,
                           },
                           execute: async (config) => {
                              toast.success(`${workflowType} configured: ${config}`);
                              return { success: true };
                           },
                        }),
                     };
                  },
               }),
            };
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
