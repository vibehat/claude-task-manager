import type { Command, CommandContext, CommandResult, CommandModule } from './context.types';

// Module registration and management types
export interface ModuleRegistry {
   modules: Map<string, CommandModule>;
   register(module: CommandModule): void;
   unregister(moduleId: string): void;
   get(moduleId: string): CommandModule | undefined;
   getAll(): CommandModule[];
   getDependencies(moduleId: string): CommandModule[];
}

export interface ModuleMetadata {
   id: string;
   name: string;
   version: string;
   description?: string;
   author?: string;
   homepage?: string;
   tags?: string[];
}

export interface ModuleLifecycle {
   onInstall?: (context: CommandContext) => Promise<void>;
   onUninstall?: (context: CommandContext) => Promise<void>;
   onEnable?: (context: CommandContext) => Promise<void>;
   onDisable?: (context: CommandContext) => Promise<void>;
   onUpdate?: (previousVersion: string, context: CommandContext) => Promise<void>;
}

export interface ModuleConfig {
   enabled?: boolean;
   settings?: Record<string, any>;
   permissions?: string[];
}

// Extended module interface with additional features
export interface ExtendedCommandModule extends CommandModule, ModuleLifecycle {
   metadata: ModuleMetadata;
   config?: ModuleConfig;

   // Module capabilities
   capabilities?: {
      persistentData?: boolean;
      backgroundTasks?: boolean;
      customUI?: boolean;
   };

   // Custom UI components
   components?: {
      settings?: React.ComponentType<{ module: ExtendedCommandModule }>;
      preview?: React.ComponentType<{ command: Command; context: CommandContext }>;
   };
}
