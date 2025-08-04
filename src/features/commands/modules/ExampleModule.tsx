import {
  createActionCommand,
  createSelectCommand,
  createInputCommand,
  createContextualInputCommand,
  createInputWithActionsCommand,
  createCompositeCommand,
  createSearchCommand,
  type CommandModule,
} from '../types';
import { toast } from 'sonner';
import { FileIcon, FolderIcon, SettingsIcon, PlusIcon, StarIcon, UserIcon } from 'lucide-react';

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
      submitActions: async (inputValue, _context) => {
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
      execute: async (content, action, _context) => {
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
          toast.info('Pass project context like { projectName: "MyApp", projectType: "react" }');
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

    // Search command examples
    createSearchCommand({
      id: 'example:file-search',
      title: 'Search Files',
      description: 'Search for files and folders in your project',
      icon: <FileIcon className="w-4 h-4" />,
      group: 'Search Examples',
      searchConfig: {
        placeholder: 'Enter filename to search...',
        debounceMs: 250,
        minQueryLength: 2,
        maxResults: 8,
        emptyStateMessage: 'No files found',
      },
      searchHandler: async (query, _context) => {
        // Simulate file search
        await new Promise((resolve) => setTimeout(resolve, 300));

        const mockFiles = [
          'package.json',
          'README.md',
          'tsconfig.json',
          'index.tsx',
          'app.tsx',
          'components/Button.tsx',
          'hooks/useAuth.ts',
          'utils/helpers.ts',
          'styles/globals.css',
          'public/favicon.ico',
          'docs/setup.md',
          'src/main.tsx',
          'src/types.ts',
          'tests/example.test.ts',
        ];

        const results = mockFiles
          .filter((file) => file.toLowerCase().includes(query.toLowerCase()))
          .map((file) =>
            createActionCommand({
              id: `file:${file}`,
              title: file,
              description: `Open ${file}`,
              icon:
                file.endsWith('.tsx') || file.endsWith('.ts')
                  ? '📄'
                  : file.endsWith('.json')
                    ? '⚙️'
                    : file.endsWith('.md')
                      ? '📝'
                      : file.endsWith('.css')
                        ? '🎨'
                        : '📁',
              execute: async () => {
                toast.success(`Opening ${file}`);
                return { success: true };
              },
            })
          );

        return results;
      },
    }),

    createSearchCommand({
      id: 'example:command-search',
      title: 'Search Commands',
      description: 'Search through all available commands in the system',
      icon: <SettingsIcon className="w-4 h-4" />,
      group: 'Search Examples',
      searchConfig: {
        placeholder: 'Search commands...',
        debounceMs: 200,
        minQueryLength: 1,
        maxResults: 10,
      },
      searchHandler: async (query, _context) => {
        // Simulate command search
        await new Promise((resolve) => setTimeout(resolve, 200));

        const mockCommands = [
          { id: 'git:commit', title: 'Git Commit', description: 'Commit changes to git' },
          { id: 'git:push', title: 'Git Push', description: 'Push changes to remote' },
          { id: 'git:pull', title: 'Git Pull', description: 'Pull latest changes' },
          { id: 'npm:install', title: 'NPM Install', description: 'Install dependencies' },
          { id: 'npm:build', title: 'NPM Build', description: 'Build the project' },
          { id: 'npm:test', title: 'NPM Test', description: 'Run tests' },
          { id: 'file:create', title: 'Create File', description: 'Create a new file' },
          { id: 'file:delete', title: 'Delete File', description: 'Delete selected file' },
          {
            id: 'search:global',
            title: 'Global Search',
            description: 'Search across project',
          },
          {
            id: 'deploy:staging',
            title: 'Deploy to Staging',
            description: 'Deploy to staging environment',
          },
        ];

        const results = mockCommands
          .filter(
            (cmd) =>
              cmd.title.toLowerCase().includes(query.toLowerCase()) ||
              cmd.description.toLowerCase().includes(query.toLowerCase())
          )
          .map((cmd) =>
            createActionCommand({
              id: cmd.id,
              title: cmd.title,
              description: cmd.description,
              icon: '⚡',
              execute: async () => {
                toast.info(`Executing: ${cmd.title}`);
                return { success: true };
              },
            })
          );

        return results;
      },
    }),

    createSearchCommand({
      id: 'example:dynamic-search',
      title: 'Dynamic Data Search',
      description: 'Search through dynamic data with context-aware results',
      icon: <FolderIcon className="w-4 h-4" />,
      group: 'Search Examples',
      searchConfig: {
        placeholder: (ctx) => {
          const projectName = ctx.data['external.projectName'] || 'your project';
          return `Search in ${projectName}...`;
        },
        debounceMs: 300,
        minQueryLength: 2,
        maxResults: 6,
        emptyStateMessage: (ctx) => {
          const theme = ctx.data['external.theme'] || 'default';
          return `No results found in ${theme} mode`;
        },
      },
      searchHandler: async (query, context) => {
        // Simulate context-aware search
        await new Promise((resolve) => setTimeout(resolve, 400));

        const projectType = context.data['external.projectType'] || 'generic';
        const theme = context.data['external.theme'] || 'light';

        let mockData = [];

        if (projectType === 'react') {
          mockData = [
            { id: 'component:header', type: 'Component', name: 'Header' },
            { id: 'component:footer', type: 'Component', name: 'Footer' },
            { id: 'hook:useAuth', type: 'Hook', name: 'useAuth' },
            { id: 'context:theme', type: 'Context', name: 'ThemeContext' },
          ];
        } else if (projectType === 'node') {
          mockData = [
            { id: 'route:users', type: 'Route', name: '/api/users' },
            { id: 'middleware:auth', type: 'Middleware', name: 'authMiddleware' },
            { id: 'service:database', type: 'Service', name: 'DatabaseService' },
            { id: 'util:logger', type: 'Utility', name: 'Logger' },
          ];
        } else {
          mockData = [
            { id: 'item:config', type: 'Config', name: 'Configuration' },
            { id: 'item:settings', type: 'Settings', name: 'User Settings' },
            { id: 'item:data', type: 'Data', name: 'Sample Data' },
          ];
        }

        const results = mockData
          .filter(
            (item) =>
              item.name.toLowerCase().includes(query.toLowerCase()) ||
              item.type.toLowerCase().includes(query.toLowerCase())
          )
          .map((item) =>
            createActionCommand({
              id: item.id,
              title: `${item.type}: ${item.name}`,
              description: `Open ${item.name} (${projectType} project, ${theme} theme)`,
              icon:
                item.type === 'Component'
                  ? '⚛️'
                  : item.type === 'Hook'
                    ? '🪝'
                    : item.type === 'Route'
                      ? '🛣️'
                      : item.type === 'Service'
                        ? '⚙️'
                        : '📋',
              execute: async () => {
                toast.success(`Opening ${item.name} in ${projectType} project`);
                return { success: true };
              },
            })
          );

        return results;
      },
    }),

    // Custom display examples
    createSearchCommand({
      id: 'example:grid-search',
      title: 'Grid Layout Search',
      description: 'Search with grid display for visual browsing',
      icon: <FolderIcon className="w-4 h-4" />,
      group: 'Custom Display Examples',
      searchConfig: {
        placeholder: 'Search for items...',
        debounceMs: 200,
        minQueryLength: 1,
        maxResults: 12,
      },
      searchResultConfig: {
        layout: 'grid',
        gridConfig: {
          columns: 3,
          gap: '0.75rem',
          minItemWidth: '120px',
        },
        showMetadata: true,
        containerClassName: 'p-3',
        itemClassName: 'min-h-[80px]',
      },
      searchHandler: async (query, _context) => {
        await new Promise((resolve) => setTimeout(resolve, 250));

        const items = [
          { id: 'item1', name: 'Dashboard', icon: '📊', category: 'View' },
          { id: 'item2', name: 'Settings', icon: '⚙️', category: 'Config' },
          { id: 'item3', name: 'Profile', icon: '👤', category: 'User' },
          { id: 'item4', name: 'Analytics', icon: '📈', category: 'Data' },
          { id: 'item5', name: 'Reports', icon: '📄', category: 'Export' },
          { id: 'item6', name: 'Users', icon: '👥', category: 'Admin' },
          { id: 'item7', name: 'Messages', icon: '💬', category: 'Communication' },
          { id: 'item8', name: 'Files', icon: '📁', category: 'Storage' },
          { id: 'item9', name: 'Calendar', icon: '📅', category: 'Schedule' },
        ];

        return items
          .filter(
            (item) =>
              item.name.toLowerCase().includes(query.toLowerCase()) ||
              item.category.toLowerCase().includes(query.toLowerCase())
          )
          .map((item) =>
            createActionCommand({
              id: `grid:${item.id}`,
              title: item.name,
              description: `Open ${item.name} (${item.category})`,
              icon: item.icon,
              group: item.category,
              execute: async () => {
                toast.success(`Opening ${item.name}`);
                return { success: true };
              },
            })
          );
      },
    }),

    createSearchCommand({
      id: 'example:table-search',
      title: 'Table Layout Search',
      description: 'Search with table display for detailed information',
      icon: <SettingsIcon className="w-4 h-4" />,
      group: 'Custom Display Examples',
      searchConfig: {
        placeholder: 'Search database records...',
        debounceMs: 300,
        minQueryLength: 2,
        maxResults: 15,
      },
      searchResultConfig: {
        layout: 'table',
        tableConfig: {
          columns: [
            { key: 'title', header: 'Name', width: '30%' },
            { key: 'description', header: 'Type', width: '25%' },
            { key: 'status', header: 'Status', width: '20%' },
            { key: 'date', header: 'Modified', width: '25%' },
          ],
        },
        showMetadata: false,
        containerClassName: 'max-h-80',
      },
      searchHandler: async (query, _context) => {
        await new Promise((resolve) => setTimeout(resolve, 400));

        const records = [
          {
            name: 'User Database',
            type: 'PostgreSQL',
            status: 'Active',
            modified: '2 hours ago',
          },
          { name: 'Cache Store', type: 'Redis', status: 'Active', modified: '5 minutes ago' },
          {
            name: 'Analytics DB',
            type: 'ClickHouse',
            status: 'Inactive',
            modified: '1 day ago',
          },
          {
            name: 'Session Store',
            type: 'MongoDB',
            status: 'Active',
            modified: '30 minutes ago',
          },
          {
            name: 'Message Queue',
            type: 'RabbitMQ',
            status: 'Active',
            modified: '1 hour ago',
          },
          {
            name: 'Search Index',
            type: 'Elasticsearch',
            status: 'Warning',
            modified: '3 hours ago',
          },
        ];

        return records
          .filter(
            (record) =>
              record.name.toLowerCase().includes(query.toLowerCase()) ||
              record.type.toLowerCase().includes(query.toLowerCase()) ||
              record.status.toLowerCase().includes(query.toLowerCase())
          )
          .map((record) =>
            createActionCommand({
              id: `table:${record.name.replace(/\s+/g, '-').toLowerCase()}`,
              title: record.name,
              description: record.type,
              icon: record.status === 'Active' ? '🟢' : record.status === 'Warning' ? '🟡' : '🔴',
              execute: async () => {
                toast.info(`Accessing ${record.name} (${record.type})`);
                return { success: true };
              },
            })
          );
      },
    }),

    createSearchCommand({
      id: 'example:custom-render-search',
      title: 'Custom Render Search',
      description: 'Search with fully custom result rendering',
      icon: <StarIcon className="w-4 h-4" />,
      group: 'Custom Display Examples',
      searchConfig: {
        placeholder: 'Search for team members...',
        debounceMs: 250,
        minQueryLength: 1,
        maxResults: 8,
      },
      searchResultConfig: {
        layout: 'custom',
        customRenderer: (command, isActive, onSelect) => {
          const title = typeof command.title === 'string' ? command.title : 'User';
          const description = typeof command.description === 'string' ? command.description : '';
          const icon = typeof command.icon === 'function' ? command.icon({} as any) : command.icon;

          return (
            <div
              key={command.id}
              className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                isActive
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                  : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
              onClick={onSelect}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                    isActive ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  {icon || '👤'}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 dark:text-gray-100">{title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{description}</div>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      Online
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                      {command.group || 'Team'}
                    </span>
                  </div>
                </div>
                <div className="text-2xl">{isActive ? '👋' : '💬'}</div>
              </div>
            </div>
          );
        },
        containerClassName: 'space-y-3 p-2',
      },
      searchHandler: async (query, _context) => {
        await new Promise((resolve) => setTimeout(resolve, 200));

        const teamMembers = [
          {
            name: 'Alice Johnson',
            role: 'Frontend Developer',
            avatar: '👩‍💻',
            team: 'Engineering',
          },
          { name: 'Bob Smith', role: 'Backend Developer', avatar: '👨‍💻', team: 'Engineering' },
          { name: 'Carol Davis', role: 'UX Designer', avatar: '👩‍🎨', team: 'Design' },
          { name: 'David Wilson', role: 'Product Manager', avatar: '👨‍💼', team: 'Product' },
          { name: 'Eva Martinez', role: 'QA Engineer', avatar: '👩‍🔬', team: 'Quality' },
          { name: 'Frank Brown', role: 'DevOps Engineer', avatar: '👨‍🔧', team: 'Engineering' },
        ];

        return teamMembers
          .filter(
            (member) =>
              member.name.toLowerCase().includes(query.toLowerCase()) ||
              member.role.toLowerCase().includes(query.toLowerCase()) ||
              member.team.toLowerCase().includes(query.toLowerCase())
          )
          .map((member) =>
            createActionCommand({
              id: `team:${member.name.replace(/\s+/g, '-').toLowerCase()}`,
              title: member.name,
              description: member.role,
              icon: member.avatar,
              group: member.team,
              execute: async () => {
                toast.success(`Starting chat with ${member.name}`);
                return { success: true };
              },
            })
          );
      },
    }),

    createSearchCommand({
      id: 'example:grouped-search',
      title: 'Grouped Search Results',
      description: 'Search with custom grouping and group renderers',
      icon: <UserIcon className="w-4 h-4" />,
      group: 'Custom Display Examples',
      searchConfig: {
        placeholder: 'Search actions by category...',
        debounceMs: 200,
        minQueryLength: 1,
        maxResults: 20,
      },
      searchResultConfig: {
        layout: 'list',
        groupBy: (command) => command.group || 'Other',
        groupRenderer: (groupName, commands) => (
          <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
            <div className="text-lg">
              {groupName === 'File Operations'
                ? '📁'
                : groupName === 'User Actions'
                  ? '👤'
                  : groupName === 'System Tools'
                    ? '⚙️'
                    : groupName === 'Communication'
                      ? '💬'
                      : '📋'}
            </div>
            <div className="font-semibold text-blue-900 dark:text-blue-100">{groupName}</div>
            <div className="text-sm text-blue-600 dark:text-blue-300">
              ({commands.length} items)
            </div>
          </div>
        ),
        showMetadata: false,
        containerClassName: 'space-y-4',
      },
      searchHandler: async (query, _context) => {
        await new Promise((resolve) => setTimeout(resolve, 300));

        const actions = [
          { name: 'Create File', group: 'File Operations', icon: '📄' },
          { name: 'Delete File', group: 'File Operations', icon: '🗑️' },
          { name: 'Rename File', group: 'File Operations', icon: '✏️' },
          { name: 'User Profile', group: 'User Actions', icon: '👤' },
          { name: 'Change Password', group: 'User Actions', icon: '🔐' },
          { name: 'User Settings', group: 'User Actions', icon: '⚙️' },
          { name: 'System Monitor', group: 'System Tools', icon: '📊' },
          { name: 'Task Manager', group: 'System Tools', icon: '📋' },
          { name: 'Send Message', group: 'Communication', icon: '💬' },
          { name: 'Video Call', group: 'Communication', icon: '📹' },
        ];

        return actions
          .filter(
            (action) =>
              action.name.toLowerCase().includes(query.toLowerCase()) ||
              action.group.toLowerCase().includes(query.toLowerCase())
          )
          .map((action) =>
            createActionCommand({
              id: `grouped:${action.name.replace(/\s+/g, '-').toLowerCase()}`,
              title: action.name,
              description: `Execute ${action.name.toLowerCase()}`,
              icon: action.icon,
              group: action.group,
              execute: async () => {
                toast.info(`Executing: ${action.name}`);
                return { success: true };
              },
            })
          );
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
