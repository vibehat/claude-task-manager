import type { ReactNode } from 'react';

// Core context types for command execution
export interface CommandContext {
   // Current execution chain
   chain: CommandChainItem[];
   currentIndex: number;

   // Results from each step
   results: Map<string, CommandResult>;

   // Shared context data
   data: Record<string, any>;

   // Module registry
   modules: Map<string, CommandModule>;

   // Global state
   globalState: Record<string, any>;

   // Methods available in context
   methods: Record<string, Function>;
}

export interface CommandChainItem {
   id: string;
   command: Command;
   input?: any;
   result?: CommandResult;
   timestamp: number;
   metadata?: Record<string, any>;
}

export interface CommandResult {
   success: boolean;
   data?: any;
   error?: Error;
   nextCommand?: Command | Command[];
   sideEffects?: SideEffect[];
}

export interface SideEffect {
   type: 'notification' | 'refresh' | 'navigate' | 'custom';
   payload?: any;
   handler?: (context: CommandContext) => void;
}

// Enhanced command types with context awareness
export interface Command {
   id: string;
   title: string | ((context: CommandContext) => string);
   description?: string | ((context: CommandContext) => string);
   icon?: ReactNode | ((context: CommandContext) => ReactNode);
   keywords?: string[];
   group?: string;

   // Dynamic properties based on context
   visible?: (context: CommandContext) => boolean;
   enabled?: (context: CommandContext) => boolean;

   // Command behavior
   type: 'action' | 'select' | 'input' | 'input-with-actions' | 'branch' | 'composite' | 'search';

   // For select commands
   options?: CommandOption[] | ((context: CommandContext) => Promise<CommandOption[]>);

   // For input commands
   inputConfig?: {
      placeholder?: string | ((context: CommandContext) => string);
      validation?: (value: string, context: CommandContext) => string | undefined;
      transform?: (value: string, context: CommandContext) => any;
      submitHint?: string;
      showContextualTitle?: boolean; // Show "Title: 'input value...'" format
      contextFormat?: (title: string, value: string) => string; // Custom format function
   };

   // For input-with-actions commands (submit buttons as selectable commands)
   submitActions?:
      | CommandOption[]
      | ((inputValue: string, context: CommandContext) => Promise<CommandOption[]>);

   // For branch commands
   branches?: {
      condition: (context: CommandContext) => boolean;
      command: Command;
   }[];

   // For search commands
   searchConfig?: {
      placeholder?: string | ((context: CommandContext) => string);
      debounceMs?: number;
      minQueryLength?: number;
      emptyStateMessage?: string | ((context: CommandContext) => string);
      maxResults?: number;
   };
   searchHandler?: (query: string, context: CommandContext) => Promise<Command[]>;

   // Custom display configuration for search results
   searchResultConfig?: {
      // Custom renderer for individual search result items
      customRenderer?: (command: Command, isActive: boolean, onSelect: () => void) => ReactNode;
      // Layout mode for results
      layout?: 'list' | 'grid' | 'table' | 'custom';
      // Grid configuration (when layout is 'grid')
      gridConfig?: {
         columns?: number;
         gap?: string;
         minItemWidth?: string;
      };
      // Table configuration (when layout is 'table')
      tableConfig?: {
         columns: Array<{
            key: string;
            header: string;
            width?: string;
            render?: (command: Command) => ReactNode;
         }>;
      };
      // Custom container styling
      containerClassName?: string;
      itemClassName?: string;
      // Show additional metadata
      showMetadata?: boolean;
      // Custom grouping
      groupBy?: (command: Command) => string;
      groupRenderer?: (groupName: string, commands: Command[]) => ReactNode;
   };

   // Execution
   execute: (input: any, context: CommandContext) => Promise<CommandResult>;

   // Lifecycle hooks
   onEnter?: (context: CommandContext) => void;
   onExit?: (context: CommandContext) => void;
   onCancel?: (context: CommandContext) => void;
}

export interface CommandOption {
   id: string;
   title: string;
   description?: string;
   icon?: ReactNode;
   value: any;
   disabled?: boolean;
   category?: string;
}

// Module system types
export interface CommandModule {
   id: string;
   name: string;
   version: string;
   description?: string;

   // Module dependencies
   dependencies?: string[];

   // Commands provided by this module
   commands: Command[] | ((context: CommandContext) => Command[]);

   // Module initialization
   initialize?: (context: CommandContext) => Promise<void>;
   cleanup?: (context: CommandContext) => Promise<void>;

   // Context extensions
   contextExtensions?: {
      data?: Record<string, any>;
      methods?: Record<string, Function>;
   };

   // Event handlers
   onCommandExecute?: (command: Command, result: CommandResult, context: CommandContext) => void;
   onContextChange?: (context: CommandContext) => void;
}

// Helper type for dynamic values
export type DynamicValue<T> = T | ((context: CommandContext) => T);

// Command builder helpers
export interface CommandBuilder {
   action(config: Partial<Command> & { execute: Command['execute'] }): Command;
   select(config: Partial<Command> & { options: Command['options'] }): Command;
   input(config: Partial<Command> & { inputConfig?: Command['inputConfig'] }): Command;
   branch(config: Partial<Command> & { branches: Command['branches'] }): Command;
   composite(config: Partial<Command> & { execute: Command['execute'] }): Command;
}
