import { z } from 'zod';

// Base action schema
export const BaseWorkflowActionSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  type: z.enum(['terminal', 'web', 'file', 'api', 'workflow', 'notification']),
  priority: z.enum(['high', 'medium', 'low']).default('medium'),
  category: z.enum(['manual', 'smart', 'template']).default('manual'),
  completed: z.boolean().default(false),
  createdAt: z.string().datetime(),
  executedAt: z.string().datetime().optional(),
  executionTime: z.number().min(0).optional(),
  status: z.enum(['pending', 'running', 'completed', 'failed', 'cancelled']).default('pending'),
  error: z.string().optional(),
});

// Terminal action parameters schema
export const TerminalParametersSchema = z.object({
  command: z.string().min(1, 'Command is required'),
  args: z.array(z.string()).optional(),
  workingDirectory: z.string().optional(),
  environment: z.record(z.string(), z.string()).optional(),
  autoExecute: z.boolean().default(true),
  terminalTitle: z.string().optional(),
  shell: z.string().optional(),
});

// Terminal action result schema
export const TerminalResultSchema = z.object({
  terminalId: z.string(),
  exitCode: z.number().optional(),
  output: z.string().optional(),
  pid: z.number().optional(),
});

// Terminal action schema
export const TerminalActionSchema = BaseWorkflowActionSchema.extend({
  type: z.literal('terminal'),
  parameters: TerminalParametersSchema,
  result: TerminalResultSchema.optional(),
});

// Web action parameters schema
export const WebParametersSchema = z.object({
  url: z.string().url('Invalid URL format'),
  method: z.enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH']).default('GET'),
  headers: z.record(z.string(), z.string()).optional(),
  body: z.any().optional(),
  openInBrowser: z.boolean().default(true),
  timeout: z.number().min(1000).max(60000).default(10000),
});

// Web action result schema
export const WebResultSchema = z.object({
  statusCode: z.number().optional(),
  response: z.any().optional(),
  browserTab: z.string().optional(),
});

// Web action schema
export const WebActionSchema = BaseWorkflowActionSchema.extend({
  type: z.literal('web'),
  parameters: WebParametersSchema,
  result: WebResultSchema.optional(),
});

// File action parameters schema
export const FileParametersSchema = z.object({
  operation: z.enum(['create', 'edit', 'delete', 'move', 'copy', 'open']),
  filePath: z.string().min(1, 'File path is required'),
  content: z.string().optional(),
  targetPath: z.string().optional(),
  openInEditor: z.boolean().default(false),
  backup: z.boolean().default(false),
});

// File action result schema
export const FileResultSchema = z.object({
  success: z.boolean(),
  filePath: z.string(),
  backup: z.string().optional(),
});

// File action schema
export const FileActionSchema = BaseWorkflowActionSchema.extend({
  type: z.literal('file'),
  parameters: FileParametersSchema,
  result: FileResultSchema.optional(),
});

// API action parameters schema
export const APIParametersSchema = z.object({
  endpoint: z.string().url('Invalid endpoint URL'),
  method: z.enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH']),
  headers: z.record(z.string(), z.string()).optional(),
  body: z.any().optional(),
  authentication: z
    .object({
      type: z.enum(['bearer', 'basic', 'api-key']),
      token: z.string().optional(),
      username: z.string().optional(),
      password: z.string().optional(),
      apiKey: z.string().optional(),
    })
    .optional(),
  timeout: z.number().min(1000).max(60000).default(10000),
});

// API action result schema
export const APIResultSchema = z.object({
  statusCode: z.number(),
  response: z.any(),
  headers: z.record(z.string(), z.string()).optional(),
});

// API action schema
export const APIActionSchema = BaseWorkflowActionSchema.extend({
  type: z.literal('api'),
  parameters: APIParametersSchema,
  result: APIResultSchema.optional(),
});

// Workflow action parameters schema
export const WorkflowParametersSchema = z.object({
  workflowId: z.string().min(1, 'Workflow ID is required'),
  inputs: z.record(z.string(), z.any()).optional(),
  waitForCompletion: z.boolean().default(false),
  parallel: z.boolean().default(false),
});

// Workflow action result schema
export const WorkflowResultSchema = z.object({
  workflowExecutionId: z.string(),
  status: z.string(),
  outputs: z.record(z.string(), z.any()).optional(),
});

// Workflow action schema
export const WorkflowTriggerActionSchema = BaseWorkflowActionSchema.extend({
  type: z.literal('workflow'),
  parameters: WorkflowParametersSchema,
  result: WorkflowResultSchema.optional(),
});

// Notification action button schema
export const NotificationActionButtonSchema = z.object({
  label: z.string().min(1, 'Button label is required'),
  action: z.string().min(1, 'Button action is required'),
  variant: z.enum(['default', 'destructive']).default('default'),
});

// Notification action parameters schema
export const NotificationParametersSchema = z.object({
  message: z.string().min(1, 'Message is required'),
  title: z.string().optional(),
  type: z.enum(['info', 'success', 'warning', 'error']).default('info'),
  duration: z.number().min(1000).default(5000),
  persistent: z.boolean().default(false),
  actions: z.array(NotificationActionButtonSchema).optional(),
});

// Notification action result schema
export const NotificationResultSchema = z.object({
  shown: z.boolean(),
  userAction: z.string().optional(),
});

// Notification action schema
export const NotificationActionSchema = BaseWorkflowActionSchema.extend({
  type: z.literal('notification'),
  parameters: NotificationParametersSchema,
  result: NotificationResultSchema.optional(),
});

// Union schema for all workflow actions
export const WorkflowActionSchema = z.discriminatedUnion('type', [
  TerminalActionSchema,
  WebActionSchema,
  FileActionSchema,
  APIActionSchema,
  WorkflowTriggerActionSchema,
  NotificationActionSchema,
]);

// Action execution context schema
export const ActionExecutionContextSchema = z.object({
  workflowId: z.string().optional(),
  taskId: z.string().optional(),
  userId: z.string().optional(),
  sessionId: z.string().min(1, 'Session ID is required'),
  timestamp: z.string().datetime(),
  environment: z.record(z.string(), z.string()),
  workingDirectory: z.string().min(1, 'Working directory is required'),
});

// Action execution error schema
export const ActionExecutionErrorSchema = z.object({
  code: z.string().min(1, 'Error code is required'),
  message: z.string().min(1, 'Error message is required'),
  details: z.any().optional(),
  stack: z.string().optional(),
});

// Action execution result schema
export const ActionExecutionResultSchema = z.object({
  actionId: z.string().min(1, 'Action ID is required'),
  status: z.enum(['pending', 'running', 'completed', 'failed', 'cancelled']),
  startTime: z.string().datetime(),
  endTime: z.string().datetime().optional(),
  duration: z.number().min(0).optional(),
  result: z.any().optional(),
  error: ActionExecutionErrorSchema.optional(),
  logs: z.array(z.string()).default([]),
});

// Action creation input schemas (for forms)
export const CreateTerminalActionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  priority: z.enum(['high', 'medium', 'low']).default('medium'),
  category: z.enum(['manual', 'smart', 'template']).default('manual'),
  parameters: TerminalParametersSchema,
});

export const CreateWebActionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  priority: z.enum(['high', 'medium', 'low']).default('medium'),
  category: z.enum(['manual', 'smart', 'template']).default('manual'),
  parameters: WebParametersSchema,
});

export const CreateFileActionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  priority: z.enum(['high', 'medium', 'low']).default('medium'),
  category: z.enum(['manual', 'smart', 'template']).default('manual'),
  parameters: FileParametersSchema,
});

export const CreateAPIActionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  priority: z.enum(['high', 'medium', 'low']).default('medium'),
  category: z.enum(['manual', 'smart', 'template']).default('manual'),
  parameters: APIParametersSchema,
});

export const CreateNotificationActionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  priority: z.enum(['high', 'medium', 'low']).default('medium'),
  category: z.enum(['manual', 'smart', 'template']).default('manual'),
  parameters: NotificationParametersSchema,
});

// Legacy workflow action schema (for backward compatibility)
export const LegacyWorkflowActionSchema = z.object({
  id: z.string().min(1),
  action: z.string().min(1, 'Action is required'),
  description: z.string().min(1, 'Description is required'),
  taskId: z.string().optional(),
  taskTitle: z.string().optional(),
  type: z.enum([
    'implementation',
    'review',
    'research',
    'planning',
    'testing',
    'workflow',
    'prd',
    'feature',
    'deployment',
    'maintenance',
  ]),
  priority: z.enum(['high', 'medium', 'low']),
  estimatedTime: z.string().optional(),
  completed: z.boolean(),
  category: z.enum(['manual', 'smart', 'template']),
  metadata: z
    .object({
      file: z.string().optional(),
      command: z.string().optional(),
      url: z.string().optional(),
      workflowType: z.string().optional(),
      conditions: z.array(z.string()).optional(),
      executionContext: z.record(z.string(), z.any()).optional(),
    })
    .optional(),
});

// Utility functions for validation
export function validateWorkflowAction(
  action: unknown
): action is z.infer<typeof WorkflowActionSchema> {
  try {
    WorkflowActionSchema.parse(action);
    return true;
  } catch {
    return false;
  }
}

export function validateActionExecutionContext(
  context: unknown
): context is z.infer<typeof ActionExecutionContextSchema> {
  try {
    ActionExecutionContextSchema.parse(context);
    return true;
  } catch {
    return false;
  }
}

export function validateActionExecutionResult(
  result: unknown
): result is z.infer<typeof ActionExecutionResultSchema> {
  try {
    ActionExecutionResultSchema.parse(result);
    return true;
  } catch {
    return false;
  }
}

// Schema getters for executors
export const getSchemaForActionType = (actionType: string) => {
  switch (actionType) {
    case 'terminal':
      return TerminalParametersSchema;
    case 'web':
      return WebParametersSchema;
    case 'file':
      return FileParametersSchema;
    case 'api':
      return APIParametersSchema;
    case 'workflow':
      return WorkflowParametersSchema;
    case 'notification':
      return NotificationParametersSchema;
    default:
      throw new Error(`Unknown action type: ${actionType}`);
  }
};

// Type exports for TypeScript
export type WorkflowActionType = z.infer<typeof WorkflowActionSchema>;
export type TerminalActionType = z.infer<typeof TerminalActionSchema>;
export type WebActionType = z.infer<typeof WebActionSchema>;
export type FileActionType = z.infer<typeof FileActionSchema>;
export type APIActionType = z.infer<typeof APIActionSchema>;
export type WorkflowTriggerActionType = z.infer<typeof WorkflowTriggerActionSchema>;
export type NotificationActionType = z.infer<typeof NotificationActionSchema>;
export type ActionExecutionContextType = z.infer<typeof ActionExecutionContextSchema>;
export type ActionExecutionResultType = z.infer<typeof ActionExecutionResultSchema>;
export type LegacyWorkflowActionType = z.infer<typeof LegacyWorkflowActionSchema>;
