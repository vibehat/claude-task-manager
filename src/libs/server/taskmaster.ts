import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs/promises';
import type {
   Task,
   TaskStatus,
   TasksData,
   TaskFilter,
   CreateTaskRequest,
   TaskMasterConfig,
} from '../client/types/taskmaster';

const execAsync = promisify(exec);

export interface CommandResult {
   stdout: string;
   stderr: string;
   exitCode: number;
}

export interface ParsedCommandResult<T = unknown> extends CommandResult {
   parsed?: T;
}

export class TaskMasterCLI {
   private workingDirectory: string;
   private taskMasterPath: string;

   constructor(workingDirectory?: string) {
      this.workingDirectory = workingDirectory || process.cwd();
      this.taskMasterPath = 'task-master';
   }

   /**
    * Execute a task-master command
    */
   private async execute(command: string, args: string[] = []): Promise<CommandResult> {
      const fullCommand = `${this.taskMasterPath} ${command} ${args.join(' ')}`.trim();

      try {
         const { stdout, stderr } = await execAsync(fullCommand, {
            cwd: this.workingDirectory,
            env: process.env,
         });

         return {
            stdout,
            stderr,
            exitCode: 0,
         };
      } catch (error: unknown) {
         const execError = error as any;
         return {
            stdout: execError.stdout || '',
            stderr: execError.stderr || (error instanceof Error ? error.message : String(error)),
            exitCode: execError.code || 1,
         };
      }
   }

   /**
    * Parse JSON output from task-master commands
    */
   private parseJsonOutput<T>(output: string): T | null {
      try {
         // Task-master often outputs non-JSON text before the actual JSON
         // Look for JSON-like structures in the output
         const jsonMatch = output.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
         if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
         }
         return null;
      } catch (error) {
         console.warn('Failed to parse JSON output:', error);
         return null;
      }
   }

   /**
    * Initialize Task Master in the current project
    */
   async init(): Promise<CommandResult> {
      return this.execute('init');
   }

   /**
    * Parse PRD to generate tasks
    */
   async parsePRD(prdPath: string, append = false): Promise<CommandResult> {
      const args = [prdPath];
      if (append) args.push('--append');
      return this.execute('parse-prd', args);
   }

   /**
    * List all tasks
    */
   async listTasks(filter?: TaskFilter): Promise<ParsedCommandResult<Task[]>> {
      const args: string[] = [];

      if (filter?.status) args.push(`--status=${filter.status}`);
      if (filter?.priority) args.push(`--priority=${filter.priority}`);
      if (filter?.id) args.push(`--id=${filter.id}`);

      const result = await this.execute('list', args);
      const parsed = this.parseJsonOutput<Task[]>(result.stdout);

      return {
         ...result,
         parsed,
      };
   }

   /**
    * Get next available task
    */
   async getNextTask(): Promise<ParsedCommandResult<Task>> {
      const result = await this.execute('next');
      const parsed = this.parseJsonOutput<Task>(result.stdout);

      return {
         ...result,
         parsed,
      };
   }

   /**
    * Show detailed task information
    */
   async showTask(id: string): Promise<ParsedCommandResult<Task>> {
      const result = await this.execute('show', [id]);
      const parsed = this.parseJsonOutput<Task>(result.stdout);

      return {
         ...result,
         parsed,
      };
   }

   /**
    * Set task status
    */
   async setTaskStatus(id: string, status: TaskStatus): Promise<CommandResult> {
      return this.execute('set-status', [`--id=${id}`, `--status=${status}`]);
   }

   /**
    * Add a new task
    */
   async addTask(request: CreateTaskRequest, research = false): Promise<ParsedCommandResult<Task>> {
      const args = [`--prompt="${request.title}: ${request.description}"`];

      if (research) args.push('--research');
      if (request.priority) args.push(`--priority=${request.priority}`);
      if (request.dependencies?.length) {
         args.push(`--dependencies=${request.dependencies.join(',')}`);
      }

      const result = await this.execute('add-task', args);
      const parsed = this.parseJsonOutput<Task>(result.stdout);

      return {
         ...result,
         parsed,
      };
   }

   /**
    * Expand task into subtasks
    */
   async expandTask(id: string, research = false, force = false): Promise<CommandResult> {
      const args = [`--id=${id}`];
      if (research) args.push('--research');
      if (force) args.push('--force');

      return this.execute('expand', args);
   }

   /**
    * Expand all eligible tasks
    */
   async expandAllTasks(research = false): Promise<CommandResult> {
      const args = ['--all'];
      if (research) args.push('--research');

      return this.execute('expand', args);
   }

   /**
    * Update a specific task
    */
   async updateTask(id: string, prompt: string): Promise<CommandResult> {
      return this.execute('update-task', [`--id=${id}`, `--prompt="${prompt}"`]);
   }

   /**
    * Update multiple tasks from a specific ID onwards
    */
   async updateTasksFrom(fromId: string, prompt: string): Promise<CommandResult> {
      return this.execute('update', [`--from=${fromId}`, `--prompt="${prompt}"`]);
   }

   /**
    * Update subtask with implementation notes
    */
   async updateSubtask(id: string, notes: string): Promise<CommandResult> {
      return this.execute('update-subtask', [`--id=${id}`, `--prompt="${notes}"`]);
   }

   /**
    * Analyze project complexity
    */
   async analyzeComplexity(research = false): Promise<CommandResult> {
      const args: string[] = [];
      if (research) args.push('--research');

      return this.execute('analyze-complexity', args);
   }

   /**
    * Get complexity report
    */
   async getComplexityReport(): Promise<ParsedCommandResult<any>> {
      const result = await this.execute('complexity-report');
      const parsed = this.parseJsonOutput<any>(result.stdout);

      return {
         ...result,
         parsed,
      };
   }

   /**
    * Add task dependency
    */
   async addDependency(taskId: string, dependsOnId: string): Promise<CommandResult> {
      return this.execute('add-dependency', [`--id=${taskId}`, `--depends-on=${dependsOnId}`]);
   }

   /**
    * Move task in hierarchy
    */
   async moveTask(fromId: string, toId: string): Promise<CommandResult> {
      return this.execute('move', [`--from=${fromId}`, `--to=${toId}`]);
   }

   /**
    * Validate task dependencies
    */
   async validateDependencies(): Promise<CommandResult> {
      return this.execute('validate-dependencies');
   }

   /**
    * Generate/update task markdown files
    */
   async generate(): Promise<CommandResult> {
      return this.execute('generate');
   }

   /**
    * Configure AI models
    */
   async configureModels(
      setup = false,
      main?: string,
      research?: string,
      fallback?: string
   ): Promise<CommandResult> {
      const args: string[] = [];

      if (setup) {
         args.push('--setup');
      } else {
         if (main) args.push(`--set-main`, main);
         if (research) args.push(`--set-research`, research);
         if (fallback) args.push(`--set-fallback`, fallback);
      }

      return this.execute('models', args);
   }

   /**
    * Get current model configuration
    */
   async getModels(): Promise<ParsedCommandResult<TaskMasterConfig['models']>> {
      const result = await this.execute('models');
      const parsed = this.parseJsonOutput<TaskMasterConfig['models']>(result.stdout);

      return {
         ...result,
         parsed,
      };
   }

   /**
    * Read tasks.json file directly
    */
   async readTasksFile(): Promise<TasksData | null> {
      try {
         const tasksPath = path.join(this.workingDirectory, '.taskmaster', 'tasks', 'tasks.json');
         const content = await fs.readFile(tasksPath, 'utf-8');
         return JSON.parse(content);
      } catch (error) {
         console.warn('Failed to read tasks.json:', error);
         return null;
      }
   }

   /**
    * Check if Task Master is initialized
    */
   async isInitialized(): Promise<boolean> {
      try {
         const tasksPath = path.join(this.workingDirectory, '.taskmaster', 'tasks', 'tasks.json');
         await fs.access(tasksPath);
         return true;
      } catch {
         return false;
      }
   }

   /**
    * Remove a task or subtask permanently
    */
   async removeTask(id: string, skipConfirmation = false): Promise<CommandResult> {
      const args = [`--id=${id}`];
      if (skipConfirmation) args.push('-y');

      return this.execute('remove-task', args);
   }

   /**
    * Get Task Master version
    */
   async getVersion(): Promise<string> {
      const result = await this.execute('--version');
      return result.stdout.trim();
   }

   /**
    * Execute arbitrary task-master command
    */
   async executeCommand(command: string, args: string[] = []): Promise<CommandResult> {
      return this.execute(command, args);
   }
}

// Export singleton instance
export const taskMasterCLI = new TaskMasterCLI();

// Re-export types for convenience
export * from '../client/types/taskmaster';
