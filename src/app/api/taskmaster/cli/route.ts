import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { taskMasterCLI } from '@/libs/server';

/**
 * Task Master CLI API endpoint
 * Provides direct access to Task Master commands via HTTP
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
   try {
      const body = await request.json();
      const { command, args = [], options = {} } = body;

      if (!command) {
         return NextResponse.json({ error: 'Command is required' }, { status: 400 });
      }

      let result;

      // Handle specific Task Master commands
      switch (command) {
         case 'init':
            result = await taskMasterCLI.init();
            break;

         case 'list':
            result = await taskMasterCLI.listTasks(options.filter);
            break;

         case 'next':
            result = await taskMasterCLI.getNextTask();
            break;

         case 'show':
            if (!args[0]) {
               return NextResponse.json(
                  { error: 'Task ID is required for show command' },
                  { status: 400 }
               );
            }
            result = await taskMasterCLI.showTask(args[0]);
            break;

         case 'set-status':
            if (!options.id || !options.status) {
               return NextResponse.json(
                  { error: 'Task ID and status are required' },
                  { status: 400 }
               );
            }
            result = await taskMasterCLI.setTaskStatus(options.id, options.status);
            break;

         case 'add-task':
            if (!options.task) {
               return NextResponse.json({ error: 'Task details are required' }, { status: 400 });
            }
            result = await taskMasterCLI.addTask(options.task, options.research);
            break;

         case 'expand':
            if (!options.id) {
               return NextResponse.json(
                  { error: 'Task ID is required for expand command' },
                  { status: 400 }
               );
            }
            result = await taskMasterCLI.expandTask(options.id, options.research, options.force);
            break;

         case 'expand-all':
            result = await taskMasterCLI.expandAllTasks(options.research);
            break;

         case 'update-task':
            if (!options.id || !options.prompt) {
               return NextResponse.json(
                  { error: 'Task ID and prompt are required' },
                  { status: 400 }
               );
            }
            result = await taskMasterCLI.updateTask(options.id, options.prompt);
            break;

         case 'update-subtask':
            if (!options.id || !options.notes) {
               return NextResponse.json(
                  { error: 'Subtask ID and notes are required' },
                  { status: 400 }
               );
            }
            result = await taskMasterCLI.updateSubtask(options.id, options.notes);
            break;

         case 'analyze-complexity':
            result = await taskMasterCLI.analyzeComplexity(options.research);
            break;

         case 'complexity-report':
            result = await taskMasterCLI.getComplexityReport();
            break;

         case 'add-dependency':
            if (!options.taskId || !options.dependsOnId) {
               return NextResponse.json(
                  { error: 'Task ID and dependency ID are required' },
                  { status: 400 }
               );
            }
            result = await taskMasterCLI.addDependency(options.taskId, options.dependsOnId);
            break;

         case 'validate-dependencies':
            result = await taskMasterCLI.validateDependencies();
            break;

         case 'generate':
            result = await taskMasterCLI.generate();
            break;

         case 'models':
            result = await taskMasterCLI.getModels();
            break;

         case 'version':
            const version = await taskMasterCLI.getVersion();
            result = {
               stdout: version,
               stderr: '',
               exitCode: 0,
            };
            break;

         default:
            // Execute arbitrary command
            result = await taskMasterCLI.executeCommand(command, args);
            break;
      }

      return NextResponse.json({
         success: result.exitCode === 0,
         command,
         args,
         result,
         timestamp: new Date().toISOString(),
      });
   } catch (error) {
      console.error('Task Master CLI API error:', error);
      return NextResponse.json(
         {
            success: false,
            error: 'Internal server error',
            message: error.message,
            timestamp: new Date().toISOString(),
         },
         { status: 500 }
      );
   }
}

/**
 * Get available commands and their descriptions
 */
export async function GET(): Promise<NextResponse> {
   const commands = {
      // Core commands
      'init': {
         description: 'Initialize Task Master in current project',
         args: [],
         options: [],
      },
      'list': {
         description: 'List all tasks',
         args: [],
         options: ['filter'],
      },
      'next': {
         description: 'Get next available task',
         args: [],
         options: [],
      },
      'show': {
         description: 'Show detailed task information',
         args: ['taskId'],
         options: [],
      },
      'set-status': {
         description: 'Update task status',
         args: [],
         options: ['id', 'status'],
      },
      'add-task': {
         description: 'Create new task',
         args: [],
         options: ['task', 'research?'],
      },
      'expand': {
         description: 'Expand task into subtasks',
         args: [],
         options: ['id', 'research?', 'force?'],
      },
      'expand-all': {
         description: 'Expand all eligible tasks',
         args: [],
         options: ['research?'],
      },
      'update-task': {
         description: 'Update specific task',
         args: [],
         options: ['id', 'prompt'],
      },
      'update-subtask': {
         description: 'Add implementation notes to subtask',
         args: [],
         options: ['id', 'notes'],
      },
      'analyze-complexity': {
         description: 'Analyze project complexity',
         args: [],
         options: ['research?'],
      },
      'complexity-report': {
         description: 'Get complexity analysis report',
         args: [],
         options: [],
      },
      'add-dependency': {
         description: 'Add task dependency',
         args: [],
         options: ['taskId', 'dependsOnId'],
      },
      'validate-dependencies': {
         description: 'Check for dependency issues',
         args: [],
         options: [],
      },
      'generate': {
         description: 'Update task markdown files',
         args: [],
         options: [],
      },
      'models': {
         description: 'Get current model configuration',
         args: [],
         options: [],
      },
      'version': {
         description: 'Get Task Master version',
         args: [],
         options: [],
      },
   };

   return NextResponse.json({
      success: true,
      commands,
      usage: {
         method: 'POST',
         body: {
            command: 'string (required)',
            args: 'string[] (optional)',
            options: 'object (optional)',
         },
      },
      examples: [
         {
            command: 'list',
            body: {
               command: 'list',
               options: {
                  filter: { status: 'pending' },
               },
            },
         },
         {
            command: 'show',
            body: {
               command: 'show',
               args: ['1.2'],
            },
         },
         {
            command: 'set-status',
            body: {
               command: 'set-status',
               options: {
                  id: '1.2',
                  status: 'in-progress',
               },
            },
         },
      ],
   });
}
