// Central types export for the command palette system
export type {
  CommandContext,
  CommandChainItem,
  CommandResult,
  SideEffect,
  Command,
  CommandOption,
  CommandModule,
  DynamicValue,
  CommandBuilder,
} from './types/context.types';
export type {
  ModuleRegistry,
  ModuleMetadata,
  ModuleLifecycle,
  ModuleConfig,
  ExtendedCommandModule,
} from './types/module.types';

// Additional types for command palette functionality
export type CommandMode = 'search' | 'select' | 'input' | 'input-with-actions' | 'command-search';

// Re-export the new command helpers
export {
  createActionCommand,
  createSelectCommand,
  createInputCommand,
  createContextualInputCommand,
  createInputWithActionsCommand,
  createCompositeCommand,
  createSearchCommand,
} from './types/command.types';
