import { useTerminalManagerStore } from '@/features/terminal/stores/terminalManagerStore';
import type {
  TerminalAction,
  ActionExecutor,
  ActionExecutionContext,
  ActionExecutionResult,
  WorkflowAction,
} from '../../types/actions';
import { z } from 'zod';

// Zod schema for terminal action parameters validation
const TerminalParametersSchema = z.object({
  command: z.string().min(1, 'Command is required'),
  args: z.array(z.string()).optional(),
  workingDirectory: z.string().optional(),
  environment: z.record(z.string()).optional(),
  autoExecute: z.boolean().default(true),
  terminalTitle: z.string().optional(),
  shell: z.string().optional(),
});

export class TerminalExecutor implements ActionExecutor<TerminalAction> {
  private pendingExecutions = new Map<
    string,
    {
      terminalId: string;
      resolve: (result: ActionExecutionResult) => void;
      reject: (error: any) => void;
      startTime: string;
    }
  >();

  canExecute(action: WorkflowAction): action is TerminalAction {
    return action.type === 'terminal';
  }

  validate(parameters: any): boolean {
    try {
      TerminalParametersSchema.parse(parameters);
      return true;
    } catch (error) {
      console.error('Terminal action validation failed:', error);
      return false;
    }
  }

  getSchema() {
    return TerminalParametersSchema;
  }

  async execute(
    action: TerminalAction,
    context: ActionExecutionContext
  ): Promise<ActionExecutionResult> {
    const startTime = new Date().toISOString();

    try {
      // Validate parameters
      const validatedParams = TerminalParametersSchema.parse(action.parameters);

      // Get terminal manager store
      const terminalStore = useTerminalManagerStore.getState();

      // Prepare command
      const fullCommand = this.prepareCommand(validatedParams, context);

      // Create terminal title
      const terminalTitle =
        validatedParams.terminalTitle ||
        `Action: ${action.title}` ||
        `Command: ${validatedParams.command}`;

      // Create new terminal with the command
      const terminalId = terminalStore.createTerminal(
        terminalTitle,
        validatedParams.autoExecute ? fullCommand : undefined
      );

      // If not auto-executing, we need to prepare the command for user execution
      if (!validatedParams.autoExecute) {
        // For non-auto execution, we'll return immediately with a pending status
        // The user can manually run the command in the terminal
        const endTime = new Date().toISOString();
        const duration = new Date(endTime).getTime() - new Date(startTime).getTime();

        return {
          actionId: action.id,
          status: 'completed',
          startTime,
          endTime,
          duration,
          result: {
            terminalId,
            exitCode: undefined,
            output: `Terminal created with command ready: ${fullCommand}`,
            pid: undefined,
          },
          logs: [
            `Created terminal: ${terminalTitle}`,
            `Command prepared: ${fullCommand}`,
            'Ready for manual execution',
          ],
        };
      }

      // For auto-execute commands, we return immediately as the terminal system
      // handles the execution asynchronously. In a real implementation, we would
      // need to set up event listeners to track the command completion.
      const endTime = new Date().toISOString();
      const duration = new Date(endTime).getTime() - new Date(startTime).getTime();

      return {
        actionId: action.id,
        status: 'completed',
        startTime,
        endTime,
        duration,
        result: {
          terminalId,
          exitCode: undefined, // Would be set when command completes
          output: `Command executed in terminal: ${fullCommand}`,
          pid: undefined, // Would be set by terminal system
        },
        logs: [
          `Created terminal: ${terminalTitle}`,
          `Executed command: ${fullCommand}`,
          `Terminal ID: ${terminalId}`,
        ],
      };
    } catch (error) {
      const endTime = new Date().toISOString();
      const duration = new Date(endTime).getTime() - new Date(startTime).getTime();

      return {
        actionId: action.id,
        status: 'failed',
        startTime,
        endTime,
        duration,
        error: {
          code: 'TERMINAL_EXECUTION_FAILED',
          message: error instanceof Error ? error.message : 'Unknown terminal execution error',
          details: error,
          stack: error instanceof Error ? error.stack : undefined,
        },
        logs: [
          `Failed to execute terminal action: ${action.title}`,
          `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        ],
      };
    }
  }

  /**
   * Prepare the full command string with environment variables and working directory
   */
  private prepareCommand(
    params: z.infer<typeof TerminalParametersSchema>,
    context: ActionExecutionContext
  ): string {
    let command = params.command;

    // Add arguments if provided
    if (params.args && params.args.length > 0) {
      command += ' ' + params.args.map((arg) => this.escapeShellArg(arg)).join(' ');
    }

    // Prepare environment variables
    const envVars = { ...context.environment, ...params.environment };
    const envString = Object.entries(envVars)
      .filter(([key, value]) => key && value)
      .map(([key, value]) => `${key}="${this.escapeShellValue(value)}"`)
      .join(' ');

    // Prepare working directory change
    const workingDir = params.workingDirectory || context.workingDirectory;
    let fullCommand = '';

    // Add environment variables if any
    if (envString) {
      fullCommand += `${envString} `;
    }

    // Add working directory change if different from context
    if (workingDir && workingDir !== context.workingDirectory) {
      fullCommand += `cd "${this.escapeShellValue(workingDir)}" && `;
    }

    // Add the main command
    fullCommand += command;

    return fullCommand;
  }

  /**
   * Escape shell argument for safe execution
   */
  private escapeShellArg(arg: string): string {
    // Simple escaping - in production, use a proper shell escape library
    if (arg.includes(' ') || arg.includes('"') || arg.includes("'")) {
      return `"${arg.replace(/"/g, '\\"')}"`;
    }
    return arg;
  }

  /**
   * Escape shell value for safe execution
   */
  private escapeShellValue(value: string): string {
    return value.replace(/"/g, '\\"');
  }

  /**
   * Get terminal by ID (utility method)
   */
  getTerminal(terminalId: string) {
    const terminalStore = useTerminalManagerStore.getState();
    return terminalStore.getTerminal(terminalId);
  }

  /**
   * Create a terminal action from a simple command
   */
  static createAction(
    command: string,
    options: {
      title?: string;
      description?: string;
      autoExecute?: boolean;
      workingDirectory?: string;
      environment?: Record<string, string>;
      priority?: 'high' | 'medium' | 'low';
    } = {}
  ): TerminalAction {
    return {
      id: `terminal-${Date.now()}`,
      title: options.title || `Run: ${command}`,
      description: options.description || `Execute terminal command: ${command}`,
      type: 'terminal',
      priority: options.priority || 'medium',
      category: 'manual',
      completed: false,
      createdAt: new Date().toISOString(),
      status: 'pending',
      parameters: {
        command,
        autoExecute: options.autoExecute ?? true,
        workingDirectory: options.workingDirectory,
        environment: options.environment,
        terminalTitle: options.title,
      },
    };
  }

  /**
   * Create common terminal actions
   */
  static createCommonActions() {
    return {
      // Development commands
      runTests: () =>
        TerminalExecutor.createAction('pnpm test', {
          title: 'Run Tests',
          description: 'Execute the test suite',
          priority: 'medium',
        }),

      runBuild: () =>
        TerminalExecutor.createAction('pnpm build', {
          title: 'Build Project',
          description: 'Build the project for production',
          priority: 'medium',
        }),

      runLint: () =>
        TerminalExecutor.createAction('pnpm lint', {
          title: 'Run Linter',
          description: 'Check code quality with ESLint',
          priority: 'low',
        }),

      runTypecheck: () =>
        TerminalExecutor.createAction('pnpm typecheck', {
          title: 'Type Check',
          description: 'Run TypeScript type checking',
          priority: 'medium',
        }),

      // Git commands
      gitStatus: () =>
        TerminalExecutor.createAction('git status', {
          title: 'Git Status',
          description: 'Check git repository status',
          priority: 'low',
        }),

      gitCommit: (message: string) =>
        TerminalExecutor.createAction(`git commit -m "${message}"`, {
          title: 'Git Commit',
          description: `Commit changes: ${message}`,
          priority: 'medium',
        }),

      gitPush: () =>
        TerminalExecutor.createAction('git push', {
          title: 'Git Push',
          description: 'Push changes to remote repository',
          priority: 'medium',
        }),

      // Task Master commands
      taskMasterNext: () =>
        TerminalExecutor.createAction('task-master next', {
          title: 'Next Task',
          description: 'Get the next available task from Task Master',
          priority: 'high',
        }),

      taskMasterList: () =>
        TerminalExecutor.createAction('task-master list', {
          title: 'List Tasks',
          description: 'Show all available tasks',
          priority: 'low',
        }),

      taskMasterShow: (taskId: string) =>
        TerminalExecutor.createAction(`task-master show ${taskId}`, {
          title: 'Show Task',
          description: `Show details for task ${taskId}`,
          priority: 'medium',
        }),
    };
  }
}
