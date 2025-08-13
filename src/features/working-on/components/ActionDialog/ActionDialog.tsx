'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Terminal, Globe, FileText, Zap, Bell, Workflow, Plus, X } from 'lucide-react';
import {
  CreateTerminalActionSchema,
  CreateWebActionSchema,
  CreateFileActionSchema,
  CreateAPIActionSchema,
  CreateNotificationActionSchema,
} from '../../schemas/actionSchemas';
import type { WorkflowAction } from '../../types/actions';
import { useWorkflowActionStore } from '../../stores/workflowActionStore';
import { TerminalExecutor } from '../../services/executors/TerminalExecutor';
import { WebExecutor } from '../../services/executors/WebExecutor';
import { FileExecutor } from '../../services/executors/FileExecutor';

interface ActionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  editingAction?: WorkflowAction | null;
}

type ActionType = 'terminal' | 'web' | 'file' | 'api' | 'notification';

const actionTypeConfig = {
  terminal: {
    icon: Terminal,
    label: 'Terminal Command',
    description: 'Execute shell commands in a new terminal',
    schema: CreateTerminalActionSchema,
  },
  web: {
    icon: Globe,
    label: 'Web Request',
    description: 'Open URLs or make HTTP requests',
    schema: CreateWebActionSchema,
  },
  file: {
    icon: FileText,
    label: 'File Operation',
    description: 'Create, edit, or manage files',
    schema: CreateFileActionSchema,
  },
  api: {
    icon: Zap,
    label: 'API Call',
    description: 'Make authenticated API requests',
    schema: CreateAPIActionSchema,
  },
  notification: {
    icon: Bell,
    label: 'Notification',
    description: 'Show notifications or alerts',
    schema: CreateNotificationActionSchema,
  },
};

export function ActionDialog({ open, onOpenChange, editingAction }: ActionDialogProps) {
  const [selectedType, setSelectedType] = useState<ActionType>('terminal');
  const [environment, setEnvironment] = useState<Array<{ key: string; value: string }>>([]);
  const { addAction, updateAction } = useWorkflowActionStore();

  const isEditing = !!editingAction;
  const currentSchema = actionTypeConfig[selectedType].schema;

  const form = useForm({
    resolver: zodResolver(currentSchema),
    defaultValues: {
      title: '',
      description: '',
      priority: 'medium' as const,
      category: 'manual' as const,
      parameters: getDefaultParameters(selectedType),
    },
  });

  function getDefaultParameters(type: ActionType) {
    switch (type) {
      case 'terminal':
        return {
          command: '',
          args: [],
          workingDirectory: '',
          environment: {},
          autoExecute: true,
          terminalTitle: '',
          shell: '',
        };
      case 'web':
        return {
          url: '',
          method: 'GET' as const,
          headers: {},
          body: undefined,
          openInBrowser: true,
          timeout: 10000,
        };
      case 'file':
        return {
          operation: 'open' as const,
          filePath: '',
          content: '',
          targetPath: '',
          openInEditor: false,
          backup: false,
        };
      case 'api':
        return {
          endpoint: '',
          method: 'GET' as const,
          headers: {},
          body: undefined,
          authentication: undefined,
          timeout: 10000,
        };
      case 'notification':
        return {
          message: '',
          title: '',
          type: 'info' as const,
          duration: 5000,
          persistent: false,
          actions: [],
        };
      default:
        return {};
    }
  }

  const handleTypeChange = (type: ActionType) => {
    setSelectedType(type);
    form.reset({
      title: '',
      description: '',
      priority: 'medium',
      category: 'manual',
      parameters: getDefaultParameters(type),
    });
  };

  const addEnvironmentVariable = () => {
    setEnvironment([...environment, { key: '', value: '' }]);
  };

  const updateEnvironmentVariable = (index: number, field: 'key' | 'value', value: string) => {
    const newEnv = [...environment];
    newEnv[index][field] = value;
    setEnvironment(newEnv);
  };

  const removeEnvironmentVariable = (index: number) => {
    setEnvironment(environment.filter((_, i) => i !== index));
  };

  const onSubmit = (data: any) => {
    try {
      // Convert environment array to object for terminal actions
      if (selectedType === 'terminal' && environment.length > 0) {
        data.parameters.environment = environment.reduce(
          (acc, env) => {
            if (env.key && env.value) {
              acc[env.key] = env.value;
            }
            return acc;
          },
          {} as Record<string, string>
        );
      }

      const actionData: WorkflowAction = {
        id: isEditing ? editingAction!.id : `${selectedType}-${Date.now()}`,
        title: data.title,
        description: data.description,
        type: selectedType,
        priority: data.priority,
        category: data.category,
        completed: false,
        createdAt: isEditing ? editingAction!.createdAt : new Date().toISOString(),
        status: 'pending',
        parameters: data.parameters,
      } as WorkflowAction;

      if (isEditing) {
        updateAction(editingAction!.id, actionData);
      } else {
        addAction(actionData);
      }

      // Reset form and close dialog
      form.reset();
      setEnvironment([]);
      onOpenChange(false);
    } catch (error) {
      console.error('Failed to save action:', error);
    }
  };

  const handleClose = () => {
    form.reset();
    setEnvironment([]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Action' : 'Create New Action'}</DialogTitle>
          <DialogDescription>
            Configure a workflow action to automate tasks and commands.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Action Type Selection */}
            {!isEditing && (
              <div className="space-y-3">
                <FormLabel>Action Type</FormLabel>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(actionTypeConfig).map(([type, config]) => {
                    const IconComponent = config.icon;
                    return (
                      <Button
                        key={type}
                        type="button"
                        variant={selectedType === type ? 'default' : 'outline'}
                        className="h-auto p-3 flex flex-col items-start gap-1"
                        onClick={() => handleTypeChange(type as ActionType)}
                      >
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4" />
                          <span className="font-medium text-sm">{config.label}</span>
                        </div>
                        <span className="text-xs text-muted-foreground text-left">
                          {config.description}
                        </span>
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Basic Information */}
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Action title..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Describe what this action does..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Type-specific Parameters */}
            <div className="space-y-4">
              <FormLabel className="text-base">Parameters</FormLabel>

              {selectedType === 'terminal' && (
                <TerminalParametersForm
                  form={form}
                  environment={environment}
                  onAddEnv={addEnvironmentVariable}
                  onUpdateEnv={updateEnvironmentVariable}
                  onRemoveEnv={removeEnvironmentVariable}
                />
              )}

              {selectedType === 'web' && <WebParametersForm form={form} />}
              {selectedType === 'file' && <FileParametersForm form={form} />}
              {selectedType === 'api' && <APIParametersForm form={form} />}
              {selectedType === 'notification' && <NotificationParametersForm form={form} />}
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit">{isEditing ? 'Update Action' : 'Create Action'}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// Terminal Parameters Form Component
function TerminalParametersForm({
  form,
  environment,
  onAddEnv,
  onUpdateEnv,
  onRemoveEnv,
}: {
  form: any;
  environment: Array<{ key: string; value: string }>;
  onAddEnv: () => void;
  onUpdateEnv: (index: number, field: 'key' | 'value', value: string) => void;
  onRemoveEnv: (index: number) => void;
}) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="parameters.command"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Command</FormLabel>
            <FormControl>
              <Input placeholder="npm run dev" {...field} />
            </FormControl>
            <FormDescription>The shell command to execute</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="parameters.workingDirectory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Working Directory</FormLabel>
              <FormControl>
                <Input placeholder="/path/to/directory" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="parameters.terminalTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Terminal Title</FormLabel>
              <FormControl>
                <Input placeholder="My Terminal" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="parameters.autoExecute"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
            <div className="space-y-0.5">
              <FormLabel>Auto Execute</FormLabel>
              <FormDescription>Automatically run the command when terminal opens</FormDescription>
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />

      {/* Environment Variables */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <FormLabel>Environment Variables</FormLabel>
          <Button type="button" variant="outline" size="sm" onClick={onAddEnv}>
            <Plus className="w-4 h-4 mr-1" />
            Add Variable
          </Button>
        </div>
        {environment.map((env, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              placeholder="KEY"
              value={env.key}
              onChange={(e) => onUpdateEnv(index, 'key', e.target.value)}
            />
            <Input
              placeholder="value"
              value={env.value}
              onChange={(e) => onUpdateEnv(index, 'value', e.target.value)}
            />
            <Button type="button" variant="ghost" size="sm" onClick={() => onRemoveEnv(index)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Web Parameters Form Component
function WebParametersForm({ form }: { form: any }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="parameters.url"
        render={({ field }) => (
          <FormItem>
            <FormLabel>URL</FormLabel>
            <FormControl>
              <Input placeholder="https://example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="parameters.method"
          render={({ field }) => (
            <FormItem>
              <FormLabel>HTTP Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="GET">GET</SelectItem>
                  <SelectItem value="POST">POST</SelectItem>
                  <SelectItem value="PUT">PUT</SelectItem>
                  <SelectItem value="DELETE">DELETE</SelectItem>
                  <SelectItem value="PATCH">PATCH</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="parameters.timeout"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Timeout (ms)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="10000"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="parameters.openInBrowser"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
            <div className="space-y-0.5">
              <FormLabel>Open in Browser</FormLabel>
              <FormDescription>Open URL in browser instead of making HTTP request</FormDescription>
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}

// File Parameters Form Component
function FileParametersForm({ form }: { form: any }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="parameters.operation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Operation</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="create">Create</SelectItem>
                <SelectItem value="edit">Edit</SelectItem>
                <SelectItem value="delete">Delete</SelectItem>
                <SelectItem value="move">Move</SelectItem>
                <SelectItem value="copy">Copy</SelectItem>
                <SelectItem value="open">Open</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="parameters.filePath"
        render={({ field }) => (
          <FormItem>
            <FormLabel>File Path</FormLabel>
            <FormControl>
              <Input placeholder="/path/to/file.txt" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="parameters.content"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Content (for create/edit)</FormLabel>
            <FormControl>
              <Textarea placeholder="File content..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

// API Parameters Form Component
function APIParametersForm({ form }: { form: any }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="parameters.endpoint"
        render={({ field }) => (
          <FormItem>
            <FormLabel>API Endpoint</FormLabel>
            <FormControl>
              <Input placeholder="https://api.example.com/endpoint" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="parameters.method"
        render={({ field }) => (
          <FormItem>
            <FormLabel>HTTP Method</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="GET">GET</SelectItem>
                <SelectItem value="POST">POST</SelectItem>
                <SelectItem value="PUT">PUT</SelectItem>
                <SelectItem value="DELETE">DELETE</SelectItem>
                <SelectItem value="PATCH">PATCH</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

// Notification Parameters Form Component
function NotificationParametersForm({ form }: { form: any }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="parameters.title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input placeholder="Notification title" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="parameters.message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea placeholder="Notification message..." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="parameters.type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="info">Info</SelectItem>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="parameters.duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration (ms)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="5000"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
