// Central types export for the command palette system
export * from './types/context.types';
export * from './types/module.types';
export * from './types/command.types';

// Additional types for command palette functionality
export type CommandMode = 'search' | 'select' | 'input' | 'input-with-actions' | 'command-search';

// Re-export the new command helpers
export {
   createContextualInputCommand,
   createInputWithActionsCommand,
   createSearchCommand,
} from './types/command.types';
