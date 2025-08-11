import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { taskMasterCLI } from '@/libs/server/taskmaster';

// Allowed commands mapping to specific TaskMasterCLI methods
const ALLOWED_COMMANDS = new Set([
  'init',
  'parse-prd',
  'list',
  'next',
  'show',
  'set-status',
  'add-task',
  'expand',
  'expand-all',
  'update-task',
  'update-subtask',
  'analyze-complexity',
  'complexity-report',
  'add-dependency',
  'validate-dependencies',
  'generate',
  'models',
  'version',
]);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { command, args = [], options = {} } = body || {};

    if (!command || typeof command !== 'string') {
      return NextResponse.json({ error: 'Invalid command' }, { status: 400 });
    }

    if (!ALLOWED_COMMANDS.has(command)) {
      return NextResponse.json(
        {
          error: 'Command not allowed',
          allowed: Array.from(ALLOWED_COMMANDS.values()),
        },
        { status: 400 }
      );
    }

    // Ensure Task Master is installed/available for commands that require it
    if (command !== 'version' && command !== 'init') {
      const isInitialized = await taskMasterCLI.isInitialized();
      if (!isInitialized) {
        return NextResponse.json(
          {
            success: false,
            error: 'Task Master not initialized. Run "task-master init" first.',
          },
          { status: 200 }
        );
      }
    }

    let result: any = null;

    switch (command) {
      case 'init':
        result = await taskMasterCLI.init();
        break;
      case 'parse-prd':
        // args: [prdPath], options.append?: boolean
        if (!args[0] && !options.prdPath) {
          return NextResponse.json({ error: 'Missing PRD path' }, { status: 400 });
        }
        result = await taskMasterCLI.parsePRD(args[0] || options.prdPath, !!options.append);
        break;
      case 'list':
        result = await taskMasterCLI.listTasks(options.filter);
        break;
      case 'next':
        result = await taskMasterCLI.getNextTask();
        break;
      case 'show':
        if (!args[0] && !options.id) {
          return NextResponse.json({ error: 'Missing task id' }, { status: 400 });
        }
        result = await taskMasterCLI.showTask(args[0] || options.id);
        break;
      case 'set-status':
        if (!options.id || !options.status) {
          return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
        }
        result = await taskMasterCLI.setTaskStatus(String(options.id), options.status);
        break;
      case 'add-task':
        if (!options.task) {
          return NextResponse.json({ error: 'Missing task payload' }, { status: 400 });
        }
        result = await taskMasterCLI.addTask(options.task, !!options.research);
        break;
      case 'expand':
        if (!options.id) {
          return NextResponse.json({ error: 'Missing id' }, { status: 400 });
        }
        result = await taskMasterCLI.expandTask(
          String(options.id),
          !!options.research,
          !!options.force
        );
        break;
      case 'expand-all':
        result = await taskMasterCLI.expandAllTasks(!!options.research);
        break;
      case 'update-task':
        if (!options.id || !options.prompt) {
          return NextResponse.json({ error: 'Missing id or prompt' }, { status: 400 });
        }
        result = await taskMasterCLI.updateTask(String(options.id), String(options.prompt));
        break;
      case 'update-subtask':
        if (!options.id || !options.notes) {
          return NextResponse.json({ error: 'Missing id or notes' }, { status: 400 });
        }
        result = await taskMasterCLI.updateSubtask(String(options.id), String(options.notes));
        break;
      case 'analyze-complexity':
        result = await taskMasterCLI.analyzeComplexity(!!options.research);
        break;
      case 'complexity-report':
        result = await taskMasterCLI.getComplexityReport();
        break;
      case 'add-dependency':
        if (!options.taskId || !options.dependsOnId) {
          return NextResponse.json({ error: 'Missing ids' }, { status: 400 });
        }
        result = await taskMasterCLI.addDependency(
          String(options.taskId),
          String(options.dependsOnId)
        );
        break;
      case 'validate-dependencies':
        result = await taskMasterCLI.validateDependencies();
        break;
      case 'generate':
        result = await taskMasterCLI.generate();
        break;
      case 'models':
        // For MVP, only read configuration
        result = await taskMasterCLI.getModels();
        break;
      case 'version':
        result = { stdout: await taskMasterCLI.getVersion(), stderr: '', exitCode: 0 };
        break;
      default:
        return NextResponse.json({ error: 'Unhandled command' }, { status: 400 });
    }

    return NextResponse.json({
      success: (result?.exitCode ?? 0) === 0,
      command,
      args,
      options,
      result,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
