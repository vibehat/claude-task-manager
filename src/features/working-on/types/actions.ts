import type { z } from 'zod';

// Base action interface that all actions extend
export interface BaseWorkflowAction {
  id: string;
  title: string;
  description: string;
  type: WorkflowActionType;
  priority: 'high' | 'medium' | 'low';
  category: 'manual' | 'smart' | 'template';
  completed: boolean;
  createdAt: string;
  executedAt?: string;
  executionTime?: number; // in milliseconds
  status: WorkflowActionStatus;
  error?: string;
}

export type WorkflowActionType = 'terminal' | 'web' | 'file' | 'api' | 'workflow' | 'notification';

export type WorkflowActionStatus = 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';

// Terminal Action - launches new terminal with command
export interface TerminalAction extends BaseWorkflowAction {
  type: 'terminal';
  parameters: {
    command: string;
    args?: string[];
    workingDirectory?: string;
    environment?: Record<string, string>;
    autoExecute?: boolean; // Whether to auto-run command or just prepare it
    terminalTitle?: string;
    shell?: string; // bash, zsh, fish, etc.
  };
  result?: {
    terminalId: string;
    exitCode?: number;
    output?: string;
    pid?: number;
  };
}

// Web Action - opens URLs or makes HTTP requests
export interface WebAction extends BaseWorkflowAction {
  type: 'web';
  parameters: {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    body?: any;
    openInBrowser?: boolean; // If true, opens in browser; if false, makes HTTP request
    timeout?: number;
  };
  result?: {
    statusCode?: number;
    response?: any;
    browserTab?: string;
  };
}

// File Action - creates, modifies, or opens files
export interface FileAction extends BaseWorkflowAction {
  type: 'file';
  parameters: {
    operation: 'create' | 'edit' | 'delete' | 'move' | 'copy' | 'open';
    filePath: string;
    content?: string;
    targetPath?: string; // for move/copy operations
    openInEditor?: boolean;
    backup?: boolean;
  };
  result?: {
    success: boolean;
    filePath: string;
    backup?: string;
  };
}

// API Action - calls external APIs or internal services
export interface APIAction extends BaseWorkflowAction {
  type: 'api';
  parameters: {
    endpoint: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    body?: any;
    authentication?: {
      type: 'bearer' | 'basic' | 'api-key';
      token?: string;
      username?: string;
      password?: string;
      apiKey?: string;
    };
    timeout?: number;
  };
  result?: {
    statusCode: number;
    response: any;
    headers?: Record<string, string>;
  };
}

// Workflow Action - triggers other workflow actions or templates
export interface WorkflowTriggerAction extends BaseWorkflowAction {
  type: 'workflow';
  parameters: {
    workflowId: string;
    inputs?: Record<string, any>;
    waitForCompletion?: boolean;
    parallel?: boolean;
  };
  result?: {
    workflowExecutionId: string;
    status: string;
    outputs?: Record<string, any>;
  };
}

// Notification Action - shows notifications or sends messages
export interface NotificationAction extends BaseWorkflowAction {
  type: 'notification';
  parameters: {
    message: string;
    title?: string;
    type: 'info' | 'success' | 'warning' | 'error';
    duration?: number; // in milliseconds
    persistent?: boolean;
    actions?: NotificationActionButton[];
  };
  result?: {
    shown: boolean;
    userAction?: string;
  };
}

export interface NotificationActionButton {
  label: string;
  action: string;
  variant?: 'default' | 'destructive';
}

// Union type for all action types
export type WorkflowAction =
  | TerminalAction
  | WebAction
  | FileAction
  | APIAction
  | WorkflowTriggerAction
  | NotificationAction;

// Action execution context
export interface ActionExecutionContext {
  workflowId?: string;
  taskId?: string;
  userId?: string;
  sessionId: string;
  timestamp: string;
  environment: Record<string, string>;
  workingDirectory: string;
}

// Action execution result
export interface ActionExecutionResult {
  actionId: string;
  status: WorkflowActionStatus;
  startTime: string;
  endTime?: string;
  duration?: number;
  result?: any;
  error?: ActionExecutionError;
  logs?: string[];
}

export interface ActionExecutionError {
  code: string;
  message: string;
  details?: any;
  stack?: string;
}

// Action factory types
export interface ActionTemplate {
  id: string;
  name: string;
  description: string;
  type: WorkflowActionType;
  parameters: Record<string, any>;
  schema: any; // Zod schema for validation
}

// Action executor interface for strategy pattern
export interface ActionExecutor<T extends WorkflowAction = WorkflowAction> {
  canExecute(action: WorkflowAction): action is T;
  execute(action: T, context: ActionExecutionContext): Promise<ActionExecutionResult>;
  validate(parameters: any): boolean;
  getSchema(): any; // Zod schema
}

// Action creation helpers
export type CreateActionInput<T extends WorkflowActionType> = {
  title: string;
  description: string;
  type: T;
  priority?: 'high' | 'medium' | 'low';
  category?: 'manual' | 'smart' | 'template';
} & (T extends 'terminal'
  ? { parameters: TerminalAction['parameters'] }
  : T extends 'web'
    ? { parameters: WebAction['parameters'] }
    : T extends 'file'
      ? { parameters: FileAction['parameters'] }
      : T extends 'api'
        ? { parameters: APIAction['parameters'] }
        : T extends 'workflow'
          ? { parameters: WorkflowTriggerAction['parameters'] }
          : T extends 'notification'
            ? { parameters: NotificationAction['parameters'] }
            : { parameters: any });

// Legacy compatibility with existing WorkflowAction type
export interface LegacyWorkflowAction {
  id: string;
  action: string;
  description: string;
  taskId?: string;
  taskTitle?: string;
  type:
    | 'implementation'
    | 'review'
    | 'research'
    | 'planning'
    | 'testing'
    | 'workflow'
    | 'prd'
    | 'feature'
    | 'deployment'
    | 'maintenance';
  priority: 'high' | 'medium' | 'low';
  estimatedTime?: string;
  completed: boolean;
  category: 'manual' | 'smart' | 'template';
  metadata?: {
    file?: string;
    command?: string;
    url?: string;
    workflowType?: string;
    conditions?: string[];
    executionContext?: Record<string, any>;
  };
}

// Converter function to migrate legacy actions
export function convertLegacyAction(legacy: LegacyWorkflowAction): WorkflowAction {
  const base: BaseWorkflowAction = {
    id: legacy.id,
    title: legacy.action,
    description: legacy.description,
    type: legacy.metadata?.command ? 'terminal' : 'workflow',
    priority: legacy.priority,
    category: legacy.category,
    completed: legacy.completed,
    createdAt: new Date().toISOString(),
    status: legacy.completed ? 'completed' : 'pending',
  };

  // If has command metadata, convert to terminal action
  if (legacy.metadata?.command) {
    return {
      ...base,
      type: 'terminal',
      parameters: {
        command: legacy.metadata.command,
        autoExecute: true,
        terminalTitle: legacy.action,
      },
    } as TerminalAction;
  }

  // If has URL metadata, convert to web action
  if (legacy.metadata?.url) {
    return {
      ...base,
      type: 'web',
      parameters: {
        url: legacy.metadata.url,
        openInBrowser: true,
      },
    } as WebAction;
  }

  // If has file metadata, convert to file action
  if (legacy.metadata?.file) {
    return {
      ...base,
      type: 'file',
      parameters: {
        operation: 'open',
        filePath: legacy.metadata.file,
        openInEditor: true,
      },
    } as FileAction;
  }

  // Default to workflow action
  return {
    ...base,
    type: 'workflow',
    parameters: {
      workflowId: legacy.type,
      waitForCompletion: false,
    },
  } as WorkflowTriggerAction;
}
