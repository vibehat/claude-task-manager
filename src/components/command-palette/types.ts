// Central types export for the command palette system
export * from './types/context.types';
export * from './types/module.types';
export * from './types/command.types';

// Additional types for command palette functionality
export type CommandMode = 'search' | 'select' | 'input';

// Re-export the new contextual input command helper
export { createContextualInputCommand } from './types/command.types';
