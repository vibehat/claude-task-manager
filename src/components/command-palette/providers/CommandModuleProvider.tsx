'use client';

import React, {
   createContext,
   useContext,
   useState,
   useCallback,
   useEffect,
   type ReactNode,
} from 'react';
import type { Command, CommandModule, ExtendedCommandModule, ModuleRegistry } from '../types';
import { useCommandContext } from './CommandContextProvider';

interface CommandModuleContextValue {
   registry: ModuleRegistry;
   registeredModules: CommandModule[];
   loadModule: (module: CommandModule | ExtendedCommandModule) => Promise<void>;
   unloadModule: (moduleId: string) => Promise<void>;
   getModuleCommands: (moduleId: string) => Command[];
   getAllCommands: () => Command[];
   isModuleLoaded: (moduleId: string) => boolean;
}

const CommandModuleContext = createContext<CommandModuleContextValue | null>(null);

interface CommandModuleProviderProps {
   children: ReactNode;
   initialModules?: (CommandModule | ExtendedCommandModule)[];
   autoLoadModules?: boolean;
}

export function CommandModuleProvider({
   children,
   initialModules = [],
   autoLoadModules = true,
}: CommandModuleProviderProps) {
   const { context, registerModule, unregisterModule } = useCommandContext();
   const [loadedModules, setLoadedModules] = useState<Map<string, CommandModule>>(new Map());

   // Initialize modules on mount
   useEffect(() => {
      if (autoLoadModules && initialModules.length > 0) {
         Promise.all(initialModules.map((module) => loadModule(module as CommandModule))).catch(
            console.error
         );
      }
   }, []); // Only run on mount

   // Create module registry
   const registry: ModuleRegistry = {
      modules: loadedModules,
      register: (module) => loadModule(module),
      unregister: (moduleId) => unloadModule(moduleId),
      get: (moduleId) => loadedModules.get(moduleId),
      getAll: () => Array.from(loadedModules.values()),
      getDependencies: (moduleId) => {
         const module = loadedModules.get(moduleId);
         if (!module || !module.dependencies) return [];

         return module.dependencies
            .map((depId) => loadedModules.get(depId))
            .filter((dep): dep is CommandModule => dep !== undefined);
      },
   };

   // Load a module
   const loadModule = useCallback(
      async (module: CommandModule) => {
         try {
            // Check if already loaded
            if (loadedModules.has(module.id)) {
               console.warn(`Module ${module.id} is already loaded`);
               return;
            }

            // Check dependencies
            if (module.dependencies) {
               const missingDeps = module.dependencies.filter((depId) => !loadedModules.has(depId));
               if (missingDeps.length > 0) {
                  throw new Error(
                     `Module ${module.id} has missing dependencies: ${missingDeps.join(', ')}`
                  );
               }
            }

            // Register with command context
            await registerModule(module);

            // Add to loaded modules
            setLoadedModules((prev) => {
               const newModules = new Map(prev);
               newModules.set(module.id, module);
               return newModules;
            });

            // Call onInstall if available (for extended modules)
            const extendedModule = module as any;
            if (extendedModule.onInstall) {
               await extendedModule.onInstall(context);
            }

            console.log(`Module ${module.id} loaded successfully`);
         } catch (error) {
            console.error(`Failed to load module ${module.id}:`, error);
            throw error;
         }
      },
      [context, loadedModules, registerModule]
   );

   // Unload a module
   const unloadModule = useCallback(
      async (moduleId: string) => {
         try {
            const module = loadedModules.get(moduleId);
            if (!module) {
               console.warn(`Module ${moduleId} is not loaded`);
               return;
            }

            // Check if other modules depend on this one
            const dependentModules = Array.from(loadedModules.values()).filter((m) =>
               m.dependencies?.includes(moduleId)
            );

            if (dependentModules.length > 0) {
               throw new Error(
                  `Cannot unload module ${moduleId}: ${dependentModules.map((m) => m.id).join(', ')} depend on it`
               );
            }

            // Call onUninstall if available (for extended modules)
            const extendedModule = module as any;
            if (extendedModule.onUninstall) {
               await extendedModule.onUninstall(context);
            }

            // Unregister from command context
            await unregisterModule(moduleId);

            // Remove from loaded modules
            setLoadedModules((prev) => {
               const newModules = new Map(prev);
               newModules.delete(moduleId);
               return newModules;
            });

            console.log(`Module ${moduleId} unloaded successfully`);
         } catch (error) {
            console.error(`Failed to unload module ${moduleId}:`, error);
            throw error;
         }
      },
      [context, loadedModules, unregisterModule]
   );

   // Get commands from a specific module
   const getModuleCommands = useCallback(
      (moduleId: string): Command[] => {
         const module = loadedModules.get(moduleId);
         if (!module) return [];

         const commands =
            typeof module.commands === 'function' ? module.commands(context) : module.commands;

         return commands || [];
      },
      [context, loadedModules]
   );

   // Get all commands from all loaded modules
   const getAllCommands = useCallback((): Command[] => {
      const allCommands: Command[] = [];

      loadedModules.forEach((module) => {
         const commands =
            typeof module.commands === 'function' ? module.commands(context) : module.commands;

         if (commands) {
            allCommands.push(...commands);
         }
      });

      return allCommands;
   }, [context, loadedModules]);

   // Check if a module is loaded
   const isModuleLoaded = useCallback(
      (moduleId: string): boolean => {
         return loadedModules.has(moduleId);
      },
      [loadedModules]
   );

   const value: CommandModuleContextValue = {
      registry,
      registeredModules: Array.from(loadedModules.values()),
      loadModule,
      unloadModule,
      getModuleCommands,
      getAllCommands,
      isModuleLoaded,
   };

   return <CommandModuleContext.Provider value={value}>{children}</CommandModuleContext.Provider>;
}

export function useCommandModules() {
   const context = useContext(CommandModuleContext);
   if (!context) {
      throw new Error('useCommandModules must be used within CommandModuleProvider');
   }
   return context;
}
