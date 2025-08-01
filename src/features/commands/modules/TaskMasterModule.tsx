import {
   createActionCommand,
   createSelectCommand,
   createInputCommand,
   createCompositeCommand,
   type CommandModule,
   type CommandOption,
} from '../types';
import { taskMasterCLI } from '@/hooks/useTaskMasterCLI';
import { ListIcon, PlayIcon, EyeIcon, CheckIcon, PlusIcon, ExpandIcon } from 'lucide-react';
import { toast } from 'sonner';

// Status options
const STATUS_OPTIONS: CommandOption[] = [
   { id: 'pending', title: 'Pending', value: 'pending', icon: '⏳' },
   { id: 'in-progress', title: 'In Progress', value: 'in-progress', icon: '🔄' },
   { id: 'done', title: 'Done', value: 'done', icon: '✅' },
   { id: 'deferred', title: 'Deferred', value: 'deferred', icon: '⏸️' },
   { id: 'cancelled', title: 'Cancelled', value: 'cancelled', icon: '❌' },
   { id: 'blocked', title: 'Blocked', value: 'blocked', icon: '🚫' },
];

export const taskMasterModule: CommandModule = {
   id: 'taskmaster',
   name: 'Task Master',
   version: '2.0.0',
   description: 'Task Master commands for project management',

   initialize: async (context) => {
      // Load initial task data
      try {
         const result = await taskMasterCLI.list();
         if (result.success && result.result?.parsed?.tasks) {
            context.data.tasks = result.result.parsed.tasks;
         }
      } catch (error) {
         console.error('Failed to load tasks:', error);
      }
   },

   commands: (context) => [
      // List tasks
      createActionCommand({
         id: 'tm:list',
         title: 'List Tasks',
         description: 'Show all tasks with optional filtering',
         icon: <ListIcon className="w-4 h-4" />,
         group: '📋 Task Master',
         execute: async () => {
            const result = await taskMasterCLI.list();
            if (result.success) {
               toast.success('Tasks listed successfully');
               if (result.result?.parsed?.tasks) {
                  context.data.tasks = result.result.parsed.tasks;
               }
            } else {
               toast.error('Failed to list tasks');
            }
            return { success: result.success };
         },
      }),

      // Get next task
      createActionCommand({
         id: 'tm:next',
         title: 'Get Next Task',
         description: 'Find the next available task to work on',
         icon: <PlayIcon className="w-4 h-4" />,
         group: '📋 Task Master',
         execute: async () => {
            const result = await taskMasterCLI.next();
            if (result.success) {
               toast.success('Next task retrieved');
            } else {
               toast.error('Failed to get next task');
            }
            return { success: result.success };
         },
      }),

      // Show task details
      createCompositeCommand({
         id: 'tm:show',
         title: 'Show Task Details',
         description: 'Display detailed information about a specific task',
         icon: <EyeIcon className="w-4 h-4" />,
         group: '📋 Task Master',
         execute: async () => {
            return {
               success: true,
               nextCommand: createSelectCommand({
                  id: 'tm:show-select-task',
                  title: 'Select Task to View',
                  type: 'select',
                  options: async () => {
                     const result = await taskMasterCLI.list();
                     if (result.success && result.result?.parsed?.tasks) {
                        return result.result.parsed.tasks.map((task: any) => ({
                           id: task.id,
                           title: `${task.id}: ${task.title}`,
                           description: `Status: ${task.status} | Priority: ${task.priority}`,
                           value: task.id,
                           icon: getStatusIcon(task.status),
                        }));
                     }
                     return [];
                  },
                  execute: async (taskId) => {
                     const result = await taskMasterCLI.show(taskId);
                     if (result.success) {
                        toast.success('Task details retrieved');
                     } else {
                        toast.error('Failed to get task details');
                     }
                     return { success: result.success };
                  },
               }),
            };
         },
      }),

      // Update task status
      createCompositeCommand({
         id: 'tm:set-status',
         title: 'Update Task Status',
         description: 'Change the status of a task',
         icon: <CheckIcon className="w-4 h-4" />,
         group: '📋 Task Master',
         execute: async () => {
            return {
               success: true,
               nextCommand: createSelectCommand({
                  id: 'tm:status-select-task',
                  title: 'Select Task to Update',
                  type: 'select',
                  options: async () => {
                     const result = await taskMasterCLI.list();
                     if (result.success && result.result?.parsed?.tasks) {
                        return result.result.parsed.tasks.map((task: any) => ({
                           id: task.id,
                           title: `${task.id}: ${task.title}`,
                           description: `Current status: ${task.status}`,
                           value: task,
                           icon: getStatusIcon(task.status),
                        }));
                     }
                     return [];
                  },
                  execute: async (task) => {
                     context.data.selectedTask = task;
                     return {
                        success: true,
                        nextCommand: createSelectCommand({
                           id: 'tm:status-select-status',
                           title: `Select new status for: ${task.title}`,
                           type: 'select',
                           options: STATUS_OPTIONS,
                           execute: async (status) => {
                              const result = await taskMasterCLI.setStatus(task.id, status);
                              if (result.success) {
                                 toast.success(`Task ${task.id} status updated to ${status}`);
                                 // Refresh tasks - we'll need to access context from execute function
                                 // This will be handled by the onCommandExecute handler
                              } else {
                                 toast.error('Failed to update task status');
                              }
                              return { success: result.success };
                           },
                        }),
                     };
                  },
               }),
            };
         },
      }),

      // Add new task
      createCompositeCommand({
         id: 'tm:add-task',
         title: 'Add New Task',
         description: 'Create a new task',
         icon: <PlusIcon className="w-4 h-4" />,
         group: '📋 Task Master',
         execute: async () => {
            return {
               success: true,
               nextCommand: createInputCommand({
                  id: 'tm:add-task-title',
                  title: 'Task Title',
                  type: 'input',
                  inputConfig: {
                     placeholder: 'Enter task title...',
                     validation: (value) => {
                        if (!value.trim()) return 'Title is required';
                        return undefined;
                     },
                  },
                  execute: async (title) => {
                     context.data.newTaskTitle = title;
                     return {
                        success: true,
                        nextCommand: createInputCommand({
                           id: 'tm:add-task-description',
                           title: 'Task Description',
                           type: 'input',
                           inputConfig: {
                              placeholder: 'Enter task description...',
                              validation: (value) => {
                                 if (!value.trim()) return 'Description is required';
                                 return undefined;
                              },
                           },
                           execute: async (description) => {
                              const task = {
                                 title: context.data.newTaskTitle,
                                 description,
                                 priority: 'medium',
                              };

                              const result = await taskMasterCLI.addTask(task, false);
                              if (result.success) {
                                 toast.success('Task created successfully');
                                 // Refresh tasks - we'll need to access context from execute function
                                 // This will be handled by the onCommandExecute handler
                              } else {
                                 toast.error('Failed to create task');
                              }
                              return { success: result.success };
                           },
                        }),
                     };
                  },
               }),
            };
         },
      }),

      // Expand task
      createCompositeCommand({
         id: 'tm:expand',
         title: 'Expand Task',
         description: 'Break down a task into detailed subtasks',
         icon: <ExpandIcon className="w-4 h-4" />,
         group: '🔧 Advanced',
         execute: async () => {
            return {
               success: true,
               nextCommand: createSelectCommand({
                  id: 'tm:expand-select-task',
                  title: 'Select Task to Expand',
                  type: 'select',
                  options: async () => {
                     const result = await taskMasterCLI.list();
                     if (result.success && result.result?.parsed?.tasks) {
                        return result.result.parsed.tasks
                           .filter((task: any) => !task.subtasks || task.subtasks.length === 0)
                           .map((task: any) => ({
                              id: task.id,
                              title: `${task.id}: ${task.title}`,
                              description: task.description,
                              value: task.id,
                              icon: getStatusIcon(task.status),
                           }));
                     }
                     return [];
                  },
                  execute: async (taskId) => {
                     const result = await taskMasterCLI.expand(taskId, false, false);
                     if (result.success) {
                        toast.success('Task expanded into subtasks');
                        // Refresh tasks
                        await taskMasterCLI.list().then((r) => {
                           if (r.result?.parsed?.tasks) {
                              context.data.tasks = r.result.parsed.tasks;
                           }
                        });
                     } else {
                        toast.error('Failed to expand task');
                     }
                     return { success: result.success };
                  },
               }),
            };
         },
      }),
   ],

   contextExtensions: {
      data: {
         tasks: [],
         selectedTask: null,
      },
      methods: {
         refreshTasks: async () => {
            const result = await taskMasterCLI.list();
            if (result.success && result.result?.parsed?.tasks) {
               // This will be handled by accessing context from the calling function
               return result.result.parsed.tasks;
            }
            return [];
         },
      },
   },

   onCommandExecute: (command, result, context) => {
      // Auto-refresh tasks after task-related commands
      if (command.id.startsWith('tm:') && result.success) {
         const shouldRefresh = ['tm:set-status', 'tm:add-task', 'tm:expand'].some((id) =>
            command.id.startsWith(id)
         );

         if (shouldRefresh && context.methods['taskmaster.refreshTasks']) {
            context.methods['taskmaster.refreshTasks']();
         }
      }
   },
};

function getStatusIcon(status: string) {
   switch (status) {
      case 'pending':
         return '⏳';
      case 'in-progress':
         return '🔄';
      case 'done':
         return '✅';
      case 'deferred':
         return '⏸️';
      case 'cancelled':
         return '❌';
      case 'blocked':
         return '🚫';
      default:
         return '📝';
   }
}
