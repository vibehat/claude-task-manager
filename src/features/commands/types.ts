// Application-level types and utilities re-exported from components
// This allows features to use component types without direct dependencies
export {
  createActionCommand,
  createSelectCommand,
  createInputCommand,
  createContextualInputCommand,
  createInputWithActionsCommand,
  createCompositeCommand,
  createSearchCommand,
} from '@/components/command-palette/types';
export type { CommandMode } from '@/components/command-palette/types';
