'use client';

import { useMemo } from 'react';
import { taskMasterCLI } from '@/hooks/useTaskMasterCLI';
import type { CommandModule, Command } from '../types';
import {
   ListIcon,
   PlayIcon,
   EyeIcon,
   CheckIcon,
   PlusIcon,
   EditIcon,
   ExpandIcon,
   BarChartIcon,
   LinkIcon,
   ShieldCheckIcon,
   FileIcon,
   SettingsIcon,
   InfoIcon,
} from 'lucide-react';
import { toast } from 'sonner';

export function useTaskMasterModule(): CommandModule {
   const commands: Command[] = useMemo(
      () => [
         // Core data commands
         {
            id: 'tm:list',
            title: 'List Tasks',
            description: 'Show all tasks with optional filtering',
            icon: <ListIcon className="w-4 h-4" />,
            keywords: ['tasks', 'show', 'display', 'filter'],
            group: '📋 Task Master',
            shortcut: ['⌘', 'L'],
            args: [
               {
                  name: 'status',
                  type: 'status-select',
                  label: 'Filter by Status',
                  description: 'Show only tasks with this status',
                  required: false,
               },
               {
                  name: 'priority',
                  type: 'select',
                  label: 'Filter by Priority',
                  description: 'Show only tasks with this priority',
                  required: false,
                  options: [
                     { label: 'High', value: 'high' },
                     { label: 'Medium', value: 'medium' },
                     { label: 'Low', value: 'low' },
                  ],
               },
            ],
            execute: async (args) => {
               const filter: any = {};
               if (args?.status) filter.status = args.status;
               if (args?.priority) filter.priority = args.priority;

               const result = await taskMasterCLI.list(
                  Object.keys(filter).length > 0 ? filter : undefined
               );
               if (result.success) {
                  toast.success('Tasks listed successfully');
               }
            },
         },

         {
            id: 'tm:next',
            title: 'Get Next Task',
            description: 'Find the next available task to work on',
            icon: <PlayIcon className="w-4 h-4" />,
            keywords: ['next', 'available', 'ready', 'work'],
            group: '📋 Task Master',
            shortcut: ['⌘', 'N'],
            execute: async () => {
               const result = await taskMasterCLI.next();
               if (result.success) {
                  toast.success('Next task retrieved');
               }
            },
         },

         {
            id: 'tm:show',
            title: 'Show Task Details',
            description: 'Display detailed information about a specific task',
            icon: <EyeIcon className="w-4 h-4" />,
            keywords: ['show', 'details', 'view', 'inspect'],
            group: '📋 Task Master',
            args: [
               {
                  name: 'taskId',
                  type: 'task-select',
                  label: 'Task',
                  description: 'Select the task to view',
                  required: true,
               },
            ],
            execute: async (args) => {
               if (!args?.taskId) throw new Error('Task ID is required');
               const result = await taskMasterCLI.show(args.taskId);
               if (result.success) {
                  toast.success('Task details retrieved');
               }
            },
         },

         // Task modification commands
         {
            id: 'tm:set-status',
            title: 'Set Task Status',
            description: 'Change the status of a task',
            icon: <CheckIcon className="w-4 h-4" />,
            keywords: ['status', 'update', 'change', 'complete', 'done'],
            group: '📋 Task Master',
            shortcut: ['⌘', 'S'],
            args: [
               {
                  name: 'taskId',
                  type: 'task-select',
                  label: 'Task',
                  description: 'Select the task to update',
                  required: true,
               },
               {
                  name: 'status',
                  type: 'status-select',
                  label: 'New Status',
                  description: 'Select the new status for the task',
                  required: true,
               },
            ],
            execute: async (args) => {
               if (!args?.taskId || !args?.status) {
                  throw new Error('Task ID and status are required');
               }
               const result = await taskMasterCLI.setStatus(args.taskId, args.status);
               if (result.success) {
                  toast.success(`Task status updated to ${args.status}`);
               }
            },
         },

         {
            id: 'tm:add-task',
            title: 'Add New Task',
            description: 'Create a new task with AI assistance',
            icon: <PlusIcon className="w-4 h-4" />,
            keywords: ['add', 'create', 'new', 'task'],
            group: '📋 Task Master',
            shortcut: ['⌘', 'A'],
            args: [
               {
                  name: 'title',
                  type: 'string',
                  label: 'Task Title',
                  placeholder: 'Enter task title...',
                  required: true,
               },
               {
                  name: 'description',
                  type: 'string',
                  label: 'Description',
                  placeholder: 'Enter task description...',
                  required: true,
               },
               {
                  name: 'priority',
                  type: 'select',
                  label: 'Priority',
                  required: false,
                  options: [
                     { label: 'High', value: 'high' },
                     { label: 'Medium', value: 'medium' },
                     { label: 'Low', value: 'low' },
                  ],
               },
               {
                  name: 'research',
                  type: 'boolean',
                  label: 'Use Research Mode',
                  description: 'Enable AI research for better task creation',
                  required: false,
               },
            ],
            execute: async (args) => {
               if (!args?.title || !args?.description) {
                  throw new Error('Title and description are required');
               }

               const task = {
                  title: args.title,
                  description: args.description,
                  priority: args.priority || 'medium',
               };

               const result = await taskMasterCLI.addTask(task, args.research || false);
               if (result.success) {
                  toast.success('Task created successfully');
               }
            },
         },

         {
            id: 'tm:update-task',
            title: 'Update Task',
            description: 'Update task information with AI assistance',
            icon: <EditIcon className="w-4 h-4" />,
            keywords: ['update', 'edit', 'modify', 'change'],
            group: '📋 Task Master',
            args: [
               {
                  name: 'taskId',
                  type: 'task-select',
                  label: 'Task',
                  description: 'Select the task to update',
                  required: true,
               },
               {
                  name: 'prompt',
                  type: 'string',
                  label: 'Update Prompt',
                  placeholder: 'Describe what to update about this task...',
                  description: 'Explain what changes you want to make',
                  required: true,
               },
               {
                  name: 'research',
                  type: 'boolean',
                  label: 'Use Research Mode',
                  description: 'Enable AI research for better updates',
                  required: false,
               },
            ],
            execute: async (args) => {
               if (!args?.taskId || !args?.prompt) {
                  throw new Error('Task ID and update prompt are required');
               }
               const result = await taskMasterCLI.updateTask(args.taskId, args.prompt);
               if (result.success) {
                  toast.success('Task updated successfully');
               }
            },
         },

         // Subtask operations
         {
            id: 'tm:update-subtask',
            title: 'Update Subtask',
            description: 'Add notes or updates to a subtask',
            icon: <EditIcon className="w-4 h-4" />,
            keywords: ['subtask', 'notes', 'update', 'progress'],
            group: '📋 Task Master',
            args: [
               {
                  name: 'subtaskId',
                  type: 'string',
                  label: 'Subtask ID',
                  placeholder: 'e.g., 1.2 or 5.3',
                  description: 'Enter the subtask ID (e.g., 1.2 for subtask 2 of task 1)',
                  required: true,
               },
               {
                  name: 'notes',
                  type: 'string',
                  label: 'Notes',
                  placeholder: 'Add your progress notes...',
                  description: 'Describe progress, issues, or updates',
                  required: true,
               },
            ],
            execute: async (args) => {
               if (!args?.subtaskId || !args?.notes) {
                  throw new Error('Subtask ID and notes are required');
               }
               const result = await taskMasterCLI.updateSubtask(args.subtaskId, args.notes);
               if (result.success) {
                  toast.success('Subtask updated successfully');
               }
            },
         },

         // Task expansion
         {
            id: 'tm:expand',
            title: 'Expand Task',
            description: 'Break down a task into detailed subtasks',
            icon: <ExpandIcon className="w-4 h-4" />,
            keywords: ['expand', 'subtasks', 'breakdown', 'detail'],
            group: '🔧 Advanced',
            args: [
               {
                  name: 'taskId',
                  type: 'task-select',
                  label: 'Task',
                  description: 'Select the task to expand',
                  required: true,
               },
               {
                  name: 'research',
                  type: 'boolean',
                  label: 'Use Research Mode',
                  description: 'Enable AI research for better subtask generation',
                  required: false,
               },
               {
                  name: 'force',
                  type: 'boolean',
                  label: 'Force Expansion',
                  description: 'Regenerate subtasks even if they already exist',
                  required: false,
               },
            ],
            execute: async (args) => {
               if (!args?.taskId) throw new Error('Task ID is required');
               const result = await taskMasterCLI.expand(
                  args.taskId,
                  args.research || false,
                  args.force || false
               );
               if (result.success) {
                  toast.success('Task expanded into subtasks');
               }
            },
         },

         {
            id: 'tm:expand-all',
            title: 'Expand All Tasks',
            description: 'Expand all eligible tasks into subtasks',
            icon: <ExpandIcon className="w-4 h-4" />,
            keywords: ['expand', 'all', 'subtasks', 'bulk'],
            group: '🔧 Advanced',
            args: [
               {
                  name: 'research',
                  type: 'boolean',
                  label: 'Use Research Mode',
                  description: 'Enable AI research for better subtask generation',
                  required: false,
               },
            ],
            execute: async (args) => {
               const result = await taskMasterCLI.expandAll(args?.research || false);
               if (result.success) {
                  toast.success('All eligible tasks expanded');
               }
            },
         },

         // Analysis commands
         {
            id: 'tm:analyze-complexity',
            title: 'Analyze Complexity',
            description: 'Analyze task complexity and get expansion recommendations',
            icon: <BarChartIcon className="w-4 h-4" />,
            keywords: ['analyze', 'complexity', 'difficulty', 'analysis'],
            group: '🔧 Advanced',
            args: [
               {
                  name: 'research',
                  type: 'boolean',
                  label: 'Use Research Mode',
                  description: 'Enable AI research for more informed analysis',
                  required: false,
               },
            ],
            execute: async (args) => {
               const result = await taskMasterCLI.analyzeComplexity(args?.research || false);
               if (result.success) {
                  toast.success('Complexity analysis completed');
               }
            },
         },

         {
            id: 'tm:complexity-report',
            title: 'Show Complexity Report',
            description: 'Display the complexity analysis report',
            icon: <BarChartIcon className="w-4 h-4" />,
            keywords: ['complexity', 'report', 'analysis', 'results'],
            group: '🔧 Advanced',
            execute: async () => {
               const result = await taskMasterCLI.complexityReport();
               if (result.success) {
                  toast.success('Complexity report displayed');
               }
            },
         },

         // Dependency management
         {
            id: 'tm:add-dependency',
            title: 'Add Task Dependency',
            description: 'Create a dependency relationship between tasks',
            icon: <LinkIcon className="w-4 h-4" />,
            keywords: ['dependency', 'depends', 'link', 'relationship'],
            group: '🔗 Dependencies',
            args: [
               {
                  name: 'taskId',
                  type: 'task-select',
                  label: 'Task',
                  description: 'The task that will depend on another',
                  required: true,
               },
               {
                  name: 'dependsOnId',
                  type: 'task-select',
                  label: 'Depends On',
                  description: 'The task that must be completed first',
                  required: true,
               },
            ],
            execute: async (args) => {
               if (!args?.taskId || !args?.dependsOnId) {
                  throw new Error('Both task IDs are required');
               }
               const result = await taskMasterCLI.addDependency(args.taskId, args.dependsOnId);
               if (result.success) {
                  toast.success('Dependency added successfully');
               }
            },
         },

         {
            id: 'tm:validate-dependencies',
            title: 'Validate Dependencies',
            description: 'Check for circular dependencies and other issues',
            icon: <ShieldCheckIcon className="w-4 h-4" />,
            keywords: ['validate', 'check', 'dependencies', 'circular'],
            group: '🔗 Dependencies',
            execute: async () => {
               const result = await taskMasterCLI.validateDependencies();
               if (result.success) {
                  toast.success('Dependencies validated');
               }
            },
         },

         // Utility commands
         {
            id: 'tm:generate',
            title: 'Generate Task Files',
            description: 'Generate individual task markdown files',
            icon: <FileIcon className="w-4 h-4" />,
            keywords: ['generate', 'files', 'markdown', 'export'],
            group: '⚙️ Utilities',
            execute: async () => {
               const result = await taskMasterCLI.generate();
               if (result.success) {
                  toast.success('Task files generated');
               }
            },
         },

         {
            id: 'tm:models',
            title: 'Manage Models',
            description: 'View and configure AI models',
            icon: <SettingsIcon className="w-4 h-4" />,
            keywords: ['models', 'ai', 'config', 'settings'],
            group: '⚙️ Utilities',
            execute: async () => {
               const result = await taskMasterCLI.getModels();
               if (result.success) {
                  toast.success('Model configuration displayed');
               }
            },
         },

         {
            id: 'tm:version',
            title: 'Show Version',
            description: 'Display Task Master version information',
            icon: <InfoIcon className="w-4 h-4" />,
            keywords: ['version', 'info', 'about'],
            group: '⚙️ Utilities',
            execute: async () => {
               const result = await taskMasterCLI.getVersion();
               if (result.success) {
                  toast.success('Version information displayed');
               }
            },
         },
      ],
      []
   );

   return useMemo(
      () => ({
         id: 'taskmaster',
         name: 'Task Master',
         description: 'Task Master CLI commands for project management',
         icon: <ListIcon className="w-4 h-4" />,
         commands,
         isEnabled: () => true,
      }),
      [commands]
   );
}
