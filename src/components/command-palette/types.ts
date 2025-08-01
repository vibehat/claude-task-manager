import type { ReactNode } from 'react';

export interface CommandArg {
   name: string;
   type:
      | 'string'
      | 'select'
      | 'number'
      | 'boolean'
      | 'task-select'
      | 'status-select'
      | 'nested-select';
   label: string;
   placeholder?: string;
   description?: string;
   required?: boolean;
   options?: { label: string; value: string }[];
   validation?: (value: any) => string | undefined;
   // Nested select configuration
   nestedConfig?: {
      searchPlaceholder?: string;
      loadOptions?: () => Promise<
         { label: string; value: string; description?: string; icon?: React.ReactNode }[]
      >;
      allowSearch?: boolean;
      emptyMessage?: string;
   };
}

export interface Command {
   id: string;
   title: string;
   description?: string;
   icon?: ReactNode;
   keywords?: string[];
   group: string;
   shortcut?: string[];
   execute: (args?: Record<string, any>) => Promise<void>;
   args?: CommandArg[];
   disabled?: boolean;
   loading?: boolean;
}

export interface CommandModule {
   id: string;
   name: string;
   description: string;
   icon?: ReactNode;
   commands: Command[];
   isEnabled?: () => boolean;
}

export interface CommandPaletteState {
   // Dialog state
   isOpen: boolean;

   // Command execution state
   currentCommand: Command | null;
   isExecuting: boolean;

   // Progressive argument collection state
   isCollectingArgs: boolean;
   commandArgs: Record<string, any>;
   currentArgIndex: number; // Track which parameter we're currently filling
   argValidationErrors: Record<string, string>; // Validation errors per argument

   // Nested command flow state
   nestedFlowState: 'command-selection' | 'argument-collection' | 'confirmation';
   nestedSteps: NestedStep[];
   currentStepIndex: number;
   canGoBack: boolean;
   canSubmit: boolean;

   // Navigation state (for nested pages)
   pages: string[];
   currentPage: string | null;

   // History and favorites
   history: Command[];
   favorites: string[];

   // Search and filtering
   searchValue: string;
   filteredCommands: Command[];
   isSlashCommand: boolean; // Track if user started with slash

   // Loading state
   isLoading: boolean;
   loadingMessage?: string;
}

export interface CommandPaletteActions {
   // Dialog actions
   openPalette: () => void;
   closePalette: () => void;

   // Command execution actions
   executeCommand: (command: Command, args?: Record<string, any>) => Promise<void>;
   setExecuting: (executing: boolean) => void;

   // Progressive argument collection actions
   startArgumentCollection: (command: Command, initialArgs?: Record<string, any>) => void;
   updateCommandArgs: (args: Record<string, any>) => void;
   updateCurrentArg: (name: string, value: any) => void;
   setCurrentArgIndex: (index: number) => void;
   nextArg: () => void;
   previousArg: () => void;
   setArgValidationError: (argName: string, error: string) => void;
   clearArgValidationError: (argName: string) => void;
   finishArgumentCollection: () => void;
   cancelArgumentCollection: () => void;

   // Nested command flow actions
   startNestedFlow: (command: Command) => void;
   nextStep: () => void;
   previousStep: () => void;
   goToStep: (stepIndex: number) => void;
   confirmAndExecute: () => Promise<void>;
   resetNestedFlow: () => void;
   updateStepValue: (stepIndex: number, value: any) => void;

   // Navigation actions
   navigateToPage: (page: string) => void;
   navigateBack: () => void;
   resetNavigation: () => void;

   // History and favorites actions
   addToHistory: (command: Command) => void;
   addToFavorites: (commandId: string) => void;
   removeFromFavorites: (commandId: string) => void;

   // Search actions
   setSearchValue: (value: string) => void;
   setFilteredCommands: (commands: Command[]) => void;
   setSlashCommand: (isSlash: boolean) => void;

   // Loading actions
   setLoading: (loading: boolean, message?: string) => void;
}

export interface CommandPaletteContext {
   state: CommandPaletteState;
   actions: CommandPaletteActions;
}

// Task Master specific types
export type TaskMasterStatus =
   | 'pending'
   | 'in-progress'
   | 'done'
   | 'deferred'
   | 'cancelled'
   | 'blocked';
export type TaskMasterPriority = 'high' | 'medium' | 'low';

export interface TaskMasterTask {
   id: string;
   title: string;
   description?: string;
   status: TaskMasterStatus;
   priority: TaskMasterPriority;
   dependencies?: string[];
   subtasks?: TaskMasterTask[];
}

// Nested command flow types
export interface NestedStep {
   id: string;
   label: string;
   description?: string;
   type: 'task-select' | 'status-select' | 'confirmation' | 'custom';
   value?: any;
   completed: boolean;
   searchValue?: string;
   options?: { label: string; value: string; description?: string; icon?: React.ReactNode }[];
   isLoading?: boolean;
   error?: string;
}

export interface NestedCommandConfig {
   steps: {
      id: string;
      label: string;
      description?: string;
      type: 'task-select' | 'status-select' | 'confirmation';
      searchPlaceholder?: string;
      loadOptions?: () => Promise<
         { label: string; value: string; description?: string; icon?: React.ReactNode }[]
      >;
      allowSearch?: boolean;
      emptyMessage?: string;
   }[];
   onSubmit: (values: Record<string, any>) => Promise<void>;
   submitLabel?: string;
   submitDescription?: string;
}

// Command execution result
export interface CommandResult {
   success: boolean;
   message?: string;
   data?: any;
   error?: string;
}
