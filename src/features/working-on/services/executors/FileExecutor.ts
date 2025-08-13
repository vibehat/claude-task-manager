import type {
  FileAction,
  ActionExecutor,
  ActionExecutionContext,
  ActionExecutionResult,
  WorkflowAction,
} from '../../types/actions';
import { z } from 'zod';

// Zod schema for file action parameters validation
const FileParametersSchema = z.object({
  operation: z.enum(['create', 'edit', 'delete', 'move', 'copy', 'open']),
  filePath: z.string().min(1, 'File path is required'),
  content: z.string().optional(),
  targetPath: z.string().optional(),
  openInEditor: z.boolean().default(false),
  backup: z.boolean().default(false),
});

export class FileExecutor implements ActionExecutor<FileAction> {
  canExecute(action: WorkflowAction): action is FileAction {
    return action.type === 'file';
  }

  validate(parameters: any): boolean {
    try {
      const params = FileParametersSchema.parse(parameters);

      // Additional validation based on operation
      if (['move', 'copy'].includes(params.operation) && !params.targetPath) {
        console.error('Target path is required for move/copy operations');
        return false;
      }

      if (params.operation === 'create' && !params.content) {
        console.warn('No content provided for file creation');
      }

      return true;
    } catch (error) {
      console.error('File action validation failed:', error);
      return false;
    }
  }

  getSchema() {
    return FileParametersSchema;
  }

  async execute(
    action: FileAction,
    context: ActionExecutionContext
  ): Promise<ActionExecutionResult> {
    const startTime = new Date().toISOString();

    try {
      const validatedParams = FileParametersSchema.parse(action.parameters);

      let result: any;
      const logs: string[] = [];

      switch (validatedParams.operation) {
        case 'open':
          result = await this.openFile(validatedParams);
          logs.push(`Opened file: ${validatedParams.filePath}`);
          break;

        case 'create':
          result = await this.createFile(validatedParams);
          logs.push(`Created file: ${validatedParams.filePath}`);
          break;

        case 'edit':
          result = await this.editFile(validatedParams);
          logs.push(`Edited file: ${validatedParams.filePath}`);
          break;

        case 'delete':
          result = await this.deleteFile(validatedParams);
          logs.push(`Deleted file: ${validatedParams.filePath}`);
          break;

        case 'move':
          result = await this.moveFile(validatedParams);
          logs.push(`Moved file from ${validatedParams.filePath} to ${validatedParams.targetPath}`);
          break;

        case 'copy':
          result = await this.copyFile(validatedParams);
          logs.push(
            `Copied file from ${validatedParams.filePath} to ${validatedParams.targetPath}`
          );
          break;

        default:
          throw new Error(`Unsupported file operation: ${validatedParams.operation}`);
      }

      const endTime = new Date().toISOString();
      const duration = new Date(endTime).getTime() - new Date(startTime).getTime();

      return {
        actionId: action.id,
        status: 'completed',
        startTime,
        endTime,
        duration,
        result,
        logs,
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
          code: 'FILE_EXECUTION_FAILED',
          message: error instanceof Error ? error.message : 'Unknown file execution error',
          details: error,
        },
        logs: [`Failed to execute file action: ${action.title}`],
      };
    }
  }

  private async openFile(params: z.infer<typeof FileParametersSchema>) {
    // In a real implementation, this would integrate with the editor/IDE
    // For now, we'll simulate opening the file

    if (params.openInEditor) {
      // This would trigger the editor to open the file
      console.log(`Opening file in editor: ${params.filePath}`);

      // In Claude Code context, we could use the Read tool or trigger editor commands
      // For now, we'll return a success result
      return {
        success: true,
        filePath: params.filePath,
        openedInEditor: true,
      };
    } else {
      // Just log that we're opening the file
      console.log(`Opening file: ${params.filePath}`);
      return {
        success: true,
        filePath: params.filePath,
        openedInEditor: false,
      };
    }
  }

  private async createFile(params: z.infer<typeof FileParametersSchema>) {
    // In a real implementation, this would use the file system API
    // For now, we'll simulate file creation

    console.log(`Creating file: ${params.filePath}`);
    if (params.content) {
      console.log(`File content length: ${params.content.length} characters`);
    }

    // Simulate backup if requested
    let backupPath: string | undefined;
    if (params.backup) {
      backupPath = `${params.filePath}.backup.${Date.now()}`;
      console.log(`Backup would be created at: ${backupPath}`);
    }

    return {
      success: true,
      filePath: params.filePath,
      backup: backupPath,
      created: true,
    };
  }

  private async editFile(params: z.infer<typeof FileParametersSchema>) {
    // In a real implementation, this would modify the file
    console.log(`Editing file: ${params.filePath}`);

    let backupPath: string | undefined;
    if (params.backup) {
      backupPath = `${params.filePath}.backup.${Date.now()}`;
      console.log(`Backup would be created at: ${backupPath}`);
    }

    return {
      success: true,
      filePath: params.filePath,
      backup: backupPath,
      modified: true,
    };
  }

  private async deleteFile(params: z.infer<typeof FileParametersSchema>) {
    // In a real implementation, this would delete the file
    console.log(`Deleting file: ${params.filePath}`);

    let backupPath: string | undefined;
    if (params.backup) {
      backupPath = `${params.filePath}.backup.${Date.now()}`;
      console.log(`Backup would be created at: ${backupPath}`);
    }

    return {
      success: true,
      filePath: params.filePath,
      backup: backupPath,
      deleted: true,
    };
  }

  private async moveFile(params: z.infer<typeof FileParametersSchema>) {
    console.log(`Moving file from ${params.filePath} to ${params.targetPath}`);

    return {
      success: true,
      filePath: params.targetPath!,
      originalPath: params.filePath,
      moved: true,
    };
  }

  private async copyFile(params: z.infer<typeof FileParametersSchema>) {
    console.log(`Copying file from ${params.filePath} to ${params.targetPath}`);

    return {
      success: true,
      filePath: params.targetPath!,
      originalPath: params.filePath,
      copied: true,
    };
  }

  static createAction(
    operation: 'create' | 'edit' | 'delete' | 'move' | 'copy' | 'open',
    filePath: string,
    options: {
      title?: string;
      description?: string;
      content?: string;
      targetPath?: string;
      openInEditor?: boolean;
      backup?: boolean;
      priority?: 'high' | 'medium' | 'low';
    } = {}
  ): FileAction {
    const operationLabels = {
      create: 'Create',
      edit: 'Edit',
      delete: 'Delete',
      move: 'Move',
      copy: 'Copy',
      open: 'Open',
    };

    return {
      id: `file-${Date.now()}`,
      title: options.title || `${operationLabels[operation]}: ${filePath}`,
      description: options.description || `${operationLabels[operation]} file: ${filePath}`,
      type: 'file',
      priority: options.priority || 'medium',
      category: 'manual',
      completed: false,
      createdAt: new Date().toISOString(),
      status: 'pending',
      parameters: {
        operation,
        filePath,
        content: options.content,
        targetPath: options.targetPath,
        openInEditor: options.openInEditor ?? false,
        backup: options.backup ?? false,
      },
    };
  }

  static createCommonActions() {
    return {
      openReadme: () =>
        FileExecutor.createAction('open', 'README.md', {
          title: 'Open README',
          description: 'Open project README file',
          openInEditor: true,
          priority: 'low',
        }),

      openPackageJson: () =>
        FileExecutor.createAction('open', 'package.json', {
          title: 'Open Package.json',
          description: 'Open package.json file',
          openInEditor: true,
          priority: 'medium',
        }),

      createEnvFile: () =>
        FileExecutor.createAction('create', '.env.local', {
          title: 'Create Env File',
          description: 'Create local environment file',
          content: '# Local environment variables\n',
          backup: true,
          priority: 'medium',
        }),

      openTsConfig: () =>
        FileExecutor.createAction('open', 'tsconfig.json', {
          title: 'Open TypeScript Config',
          description: 'Open TypeScript configuration',
          openInEditor: true,
          priority: 'low',
        }),
    };
  }
}
