'use client';

import { useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useMultiTerminalStore } from '@/store/multiTerminalStore';
import type { CommandModule, Command } from '../types';
import {
   TerminalIcon,
   PlusIcon,
   XIcon,
   SplitIcon,
   RefreshCwIcon,
   FolderOpenIcon,
   CommandIcon,
   HashIcon,
   SquareIcon,
   GitBranchIcon,
   PackageIcon,
   PlayIcon,
   SquareIcon as StopIcon,
   SearchIcon,
   FileTextIcon,
   MinimizeIcon,
   MaximizeIcon,
   ArrowUpIcon,
} from 'lucide-react';
import { toast } from 'sonner';

export function useTerminalModule(): CommandModule {
   const router = useRouter();

   // Use the actual terminal store
   const {
      terminals,
      activeTerminalId,
      createTerminal,
      closeTerminal,
      setActiveTerminal,
      minimizeTerminal,
      maximizeTerminal,
      restoreTerminal,
      toggleMinimize,
      toggleMaximize,
      updateTerminalTitle,
      bringTerminalToFront,
   } = useMultiTerminalStore();

   const createNewTerminal = useCallback(async () => {
      const terminalId = createTerminal('Terminal');
      toast.success('New terminal created');
      router.push('/indie/terminal');
   }, [createTerminal, router]);

   const switchToTerminal = useCallback(
      async (terminalId: string) => {
         const terminal = terminals.find((t) => t.id === terminalId);
         if (terminal) {
            setActiveTerminal(terminalId);
            toast.success(`Switched to ${terminal.title}`);
            router.push('/indie/terminal');
         }
      },
      [terminals, setActiveTerminal, router]
   );

   const closeTerminalById = useCallback(
      async (terminalId: string) => {
         const terminal = terminals.find((t) => t.id === terminalId);
         if (terminal) {
            closeTerminal(terminalId);
            toast.success(`Closed ${terminal.title}`);
         }
      },
      [terminals, closeTerminal]
   );

   const splitTerminal = useCallback(async () => {
      const terminalId = createTerminal('Split Terminal');
      toast.success('Terminal split created');
      router.push('/indie/terminal');
   }, [createTerminal, router]);

   const clearTerminal = useCallback(async () => {
      if (activeTerminalId) {
         // In a real terminal implementation, this would send a clear command
         toast.success('Terminal cleared');
      } else {
         toast.error('No active terminal');
      }
   }, [activeTerminalId]);

   const restartTerminalSession = useCallback(async () => {
      if (activeTerminalId) {
         // In a real terminal implementation, this would restart the terminal session
         toast.success('Terminal restarted');
      } else {
         toast.error('No active terminal');
      }
   }, [activeTerminalId]);

   const minimizeActiveTerminal = useCallback(async () => {
      if (activeTerminalId) {
         minimizeTerminal(activeTerminalId);
         toast.success('Terminal minimized');
      } else {
         toast.error('No active terminal');
      }
   }, [activeTerminalId, minimizeTerminal]);

   const maximizeActiveTerminal = useCallback(async () => {
      if (activeTerminalId) {
         maximizeTerminal(activeTerminalId);
         toast.success('Terminal maximized');
      } else {
         toast.error('No active terminal');
      }
   }, [activeTerminalId, maximizeTerminal]);

   const restoreActiveTerminal = useCallback(async () => {
      if (activeTerminalId) {
         restoreTerminal(activeTerminalId);
         toast.success('Terminal restored');
      } else {
         toast.error('No active terminal');
      }
   }, [activeTerminalId, restoreTerminal]);

   const renameTerminal = useCallback(
      async (args?: Record<string, any>) => {
         const newTitle = args?.title;
         if (!newTitle) {
            toast.error('No title specified');
            return;
         }
         if (!activeTerminalId) {
            toast.error('No active terminal');
            return;
         }
         updateTerminalTitle(activeTerminalId, newTitle);
         toast.success(`Terminal renamed to "${newTitle}"`);
      },
      [activeTerminalId, updateTerminalTitle]
   );

   const changeDirectory = useCallback(async (args?: Record<string, any>) => {
      const path = args?.path || '~';
      // In a real implementation, this would change the current directory
      toast.success(`Changed directory to ${path}`);
   }, []);

   const runCommand = useCallback(async (args?: Record<string, any>) => {
      const command = args?.command;
      if (!command) {
         toast.error('No command specified');
         return;
      }
      // In a real implementation, this would execute the command
      toast.success(`Executing: ${command}`);
   }, []);

   const quickGitStatus = useCallback(async () => {
      toast.success('Executing: git status');
   }, []);

   const quickNpmInstall = useCallback(async () => {
      toast.success('Executing: npm install');
   }, []);

   const quickNpmDev = useCallback(async () => {
      toast.success('Executing: npm run dev');
   }, []);

   const quickNpmBuild = useCallback(async () => {
      toast.success('Executing: npm run build');
   }, []);

   const quickLs = useCallback(async () => {
      toast.success('Executing: ls -la');
   }, []);

   const quickPwd = useCallback(async () => {
      toast.success('Executing: pwd');
   }, []);

   const commands: Command[] = useMemo(
      () => [
         {
            id: 'terminal:new',
            title: 'New Terminal',
            description: 'Create a new terminal instance',
            icon: <PlusIcon className="w-4 h-4" />,
            keywords: ['new', 'create', 'terminal', 'shell'],
            group: '💻 Terminal',
            shortcut: ['⌘', 'Shift', 'T'],
            execute: createNewTerminal,
         },

         {
            id: 'terminal:split',
            title: 'Split Terminal',
            description: 'Split the current terminal horizontally',
            icon: <SplitIcon className="w-4 h-4" />,
            keywords: ['split', 'divide', 'horizontal'],
            group: '💻 Terminal',
            shortcut: ['⌘', 'Shift', 'D'],
            execute: splitTerminal,
         },

         {
            id: 'terminal:clear',
            title: 'Clear Terminal',
            description: 'Clear the current terminal output',
            icon: <SquareIcon className="w-4 h-4" />,
            keywords: ['clear', 'clean', 'reset'],
            group: '💻 Terminal',
            shortcut: ['⌘', 'K'],
            execute: clearTerminal,
         },

         {
            id: 'terminal:restart',
            title: 'Restart Terminal',
            description: 'Restart the current terminal session',
            icon: <RefreshCwIcon className="w-4 h-4" />,
            keywords: ['restart', 'reload', 'refresh'],
            group: '💻 Terminal',
            execute: restartTerminalSession,
         },

         {
            id: 'terminal:minimize',
            title: 'Minimize Terminal',
            description: 'Minimize the current terminal window',
            icon: <MinimizeIcon className="w-4 h-4" />,
            keywords: ['minimize', 'hide', 'collapse'],
            group: '💻 Terminal',
            shortcut: ['⌘', 'M'],
            execute: minimizeActiveTerminal,
         },

         {
            id: 'terminal:maximize',
            title: 'Maximize Terminal',
            description: 'Maximize the current terminal window',
            icon: <MaximizeIcon className="w-4 h-4" />,
            keywords: ['maximize', 'fullscreen', 'expand'],
            group: '💻 Terminal',
            execute: maximizeActiveTerminal,
         },

         {
            id: 'terminal:restore',
            title: 'Restore Terminal',
            description: 'Restore the terminal to normal size',
            icon: <ArrowUpIcon className="w-4 h-4" />,
            keywords: ['restore', 'normal', 'windowed'],
            group: '💻 Terminal',
            execute: restoreActiveTerminal,
         },

         {
            id: 'terminal:rename',
            title: 'Rename Terminal',
            description: 'Change the title of the current terminal',
            icon: <HashIcon className="w-4 h-4" />,
            keywords: ['rename', 'title', 'label'],
            group: '💻 Terminal',
            execute: renameTerminal,
            args: [
               {
                  name: 'title',
                  type: 'string',
                  label: 'New Title',
                  placeholder: 'e.g., Frontend, API Server, Build',
                  description: 'The new title for the terminal',
                  required: true,
               },
            ],
         },

         {
            id: 'terminal:cd',
            title: 'Change Directory',
            description: 'Change the current working directory',
            icon: <FolderOpenIcon className="w-4 h-4" />,
            keywords: ['cd', 'directory', 'folder', 'navigate'],
            group: '💻 Terminal',
            execute: changeDirectory,
            args: [
               {
                  name: 'path',
                  type: 'string',
                  label: 'Directory Path',
                  placeholder: 'e.g., ~/Documents, /usr/local/bin',
                  description: 'The directory path to navigate to',
                  required: true,
               },
            ],
         },

         {
            id: 'terminal:run',
            title: 'Run Command',
            description: 'Execute a shell command',
            icon: <CommandIcon className="w-4 h-4" />,
            keywords: ['run', 'execute', 'command', 'shell'],
            group: '💻 Terminal',
            execute: runCommand,
            args: [
               {
                  name: 'command',
                  type: 'string',
                  label: 'Command',
                  placeholder: 'e.g., npm install, git status, ls -la',
                  description: 'The shell command to execute',
                  required: true,
               },
            ],
         },

         // Quick commands
         {
            id: 'terminal:git-status',
            title: 'Git Status',
            description: 'Check git repository status',
            icon: <GitBranchIcon className="w-4 h-4" />,
            keywords: ['git', 'status', 'repo', 'changes'],
            group: '⚡ Quick Commands',
            shortcut: ['⌘', 'Shift', 'G'],
            execute: quickGitStatus,
         },

         {
            id: 'terminal:npm-install',
            title: 'NPM Install',
            description: 'Install npm dependencies',
            icon: <PackageIcon className="w-4 h-4" />,
            keywords: ['npm', 'install', 'dependencies', 'packages'],
            group: '⚡ Quick Commands',
            execute: quickNpmInstall,
         },

         {
            id: 'terminal:npm-dev',
            title: 'NPM Dev',
            description: 'Start development server',
            icon: <PlayIcon className="w-4 h-4" />,
            keywords: ['npm', 'dev', 'start', 'development', 'server'],
            group: '⚡ Quick Commands',
            shortcut: ['⌘', 'R'],
            execute: quickNpmDev,
         },

         {
            id: 'terminal:npm-build',
            title: 'NPM Build',
            description: 'Build the project for production',
            icon: <PackageIcon className="w-4 h-4" />,
            keywords: ['npm', 'build', 'production', 'compile'],
            group: '⚡ Quick Commands',
            execute: quickNpmBuild,
         },

         {
            id: 'terminal:ls',
            title: 'List Files',
            description: 'List files in current directory',
            icon: <FileTextIcon className="w-4 h-4" />,
            keywords: ['ls', 'list', 'files', 'directory'],
            group: '⚡ Quick Commands',
            execute: quickLs,
         },

         {
            id: 'terminal:pwd',
            title: 'Print Working Directory',
            description: 'Show current directory path',
            icon: <FolderOpenIcon className="w-4 h-4" />,
            keywords: ['pwd', 'directory', 'path', 'location'],
            group: '⚡ Quick Commands',
            execute: quickPwd,
         },

         // Dynamic terminal switching commands
         ...terminals.map((terminal) => ({
            id: `terminal:switch:${terminal.id}`,
            title: `Switch to ${terminal.title}`,
            description: `Switch to ${terminal.title}${terminal.cwd ? ` (${terminal.cwd})` : ''}`,
            icon: <HashIcon className="w-4 h-4" />,
            keywords: ['switch', 'terminal', terminal.title.toLowerCase(), 'tab'],
            group: '🖥️ Terminal Tabs',
            execute: async () => switchToTerminal(terminal.id),
         })),

         // Dynamic terminal closing commands
         ...terminals
            .filter((terminal) => terminal.id !== activeTerminalId) // Don't allow closing active terminal
            .map((terminal) => ({
               id: `terminal:close:${terminal.id}`,
               title: `Close ${terminal.title}`,
               description: `Close ${terminal.title} terminal`,
               icon: <XIcon className="w-4 h-4" />,
               keywords: ['close', 'kill', 'terminate', terminal.title.toLowerCase()],
               group: '🖥️ Terminal Tabs',
               execute: async () => closeTerminalById(terminal.id),
            })),

         // Dynamic terminal minimize/restore commands
         ...terminals.map((terminal) => ({
            id: `terminal:toggle:${terminal.id}`,
            title: terminal.isMinimized ? `Show ${terminal.title}` : `Hide ${terminal.title}`,
            description: terminal.isMinimized
               ? `Restore ${terminal.title} terminal`
               : `Minimize ${terminal.title} terminal`,
            icon: terminal.isMinimized ? (
               <ArrowUpIcon className="w-4 h-4" />
            ) : (
               <MinimizeIcon className="w-4 h-4" />
            ),
            keywords: [
               terminal.isMinimized ? 'show' : 'hide',
               'toggle',
               'minimize',
               'restore',
               terminal.title.toLowerCase(),
            ],
            group: '🖥️ Terminal Tabs',
            execute: async () => {
               toggleMinimize(terminal.id);
               toast.success(
                  terminal.isMinimized ? `Showing ${terminal.title}` : `Hiding ${terminal.title}`
               );
            },
         })),
      ],
      [
         terminals,
         activeTerminalId,
         createNewTerminal,
         switchToTerminal,
         closeTerminalById,
         splitTerminal,
         clearTerminal,
         restartTerminalSession,
         minimizeActiveTerminal,
         maximizeActiveTerminal,
         restoreActiveTerminal,
         renameTerminal,
         changeDirectory,
         runCommand,
         quickGitStatus,
         quickNpmInstall,
         quickNpmDev,
         quickNpmBuild,
         quickLs,
         quickPwd,
         toggleMinimize,
      ]
   );

   return useMemo(
      () => ({
         id: 'terminal',
         name: 'Terminal Management',
         description: 'Manage terminal instances and execute commands',
         icon: <TerminalIcon className="w-4 h-4" />,
         commands,
         isEnabled: () => true,
      }),
      [commands]
   );
}
