'use client';

import { useCallback, useMemo } from 'react';
import { useCommandContext } from '../providers/CommandContextProvider';
import { useCommandModules } from '../providers/CommandModuleProvider';
import { useCommandExecution } from './useCommandExecution';
import type { Command, CommandOption, CommandContext } from '../types';
import { resolveDynamicValue } from '../types/command.types';

export function useCommandResolver() {
   const { context } = useCommandContext();
   const { getAllCommands } = useCommandModules();
   const { isCommandVisible, isCommandEnabled, getResolvedCommand } = useCommandExecution();

   // Get all available commands filtered by visibility
   const availableCommands = useMemo(() => {
      const allCommands = getAllCommands();
      return allCommands.filter(isCommandVisible).map(getResolvedCommand);
   }, [getAllCommands, isCommandVisible, getResolvedCommand]);

   // Search commands by query
   const searchCommands = useCallback(
      (query: string): Command[] => {
         if (!query.trim()) return availableCommands;

         const lowerQuery = query.toLowerCase();

         const matchingCommands = availableCommands.filter((command) => {
            // Search in title
            const title = typeof command.title === 'string' ? command.title : '';
            if (title.toLowerCase().includes(lowerQuery)) return true;

            // Search in description
            const description = typeof command.description === 'string' ? command.description : '';
            if (description.toLowerCase().includes(lowerQuery)) return true;

            // Search in keywords
            if (command.keywords?.some((keyword) => keyword.toLowerCase().includes(lowerQuery))) {
               return true;
            }

            // Search in id
            if (command.id.toLowerCase().includes(lowerQuery)) return true;

            return false;
         });

         // If no matches found, add Claude fallback command
         if (matchingCommands.length === 0) {
            const { registeredModules } = useCommandModules();
            const fallbackCommands: Command[] = [];

            registeredModules.forEach((module) => {
               if (typeof (module as any).onNoMatch === 'function') {
                  try {
                     const fallbackCommand = (module as any).onNoMatch(query, context);
                     if (fallbackCommand) {
                        fallbackCommands.push(fallbackCommand);
                     }
                  } catch (error) {
                     console.warn(`Module ${module.id} onNoMatch handler failed:`, error);
                  }
               }
            });

            return fallbackCommands;
         }

         return matchingCommands;
      },
      [availableCommands, context]
   );

   // Group commands by their group property
   const groupedCommands = useMemo(() => {
      const groups = new Map<string, Command[]>();

      availableCommands.forEach((command) => {
         const group = command.group || 'Other';
         if (!groups.has(group)) {
            groups.set(group, []);
         }
         groups.get(group)!.push(command);
      });

      return groups;
   }, [availableCommands]);

   // Resolve options for select commands
   const resolveSelectOptions = useCallback(
      async (command: Command): Promise<CommandOption[]> => {
         if (command.type !== 'select' || !command.options) {
            return [];
         }

         if (typeof command.options === 'function') {
            return await command.options(context);
         }

         return command.options;
      },
      [context]
   );

   // Resolve input configuration
   const resolveInputConfig = useCallback(
      (command: Command) => {
         if (command.type !== 'input' || !command.inputConfig) {
            return null;
         }

         return {
            placeholder: command.inputConfig.placeholder
               ? resolveDynamicValue(command.inputConfig.placeholder, context)
               : undefined,
            submitHint: command.inputConfig.submitHint || 'Press Enter to submit',
            validation: command.inputConfig.validation,
            transform: command.inputConfig.transform,
         };
      },
      [context]
   );

   // Get command suggestions based on context
   const getContextualSuggestions = useCallback(
      (limit: number = 20): Command[] => {
         const suggestions: Command[] = [];

         // Get last executed command
         const lastChainItem = context.chain[context.chain.length - 1];

         // If last command returned next commands, prioritize those
         if (lastChainItem?.result?.nextCommand) {
            const nextCommands = Array.isArray(lastChainItem.result.nextCommand)
               ? lastChainItem.result.nextCommand
               : [lastChainItem.result.nextCommand];

            suggestions.push(...nextCommands.filter(isCommandVisible));
         }

         // Add frequently used commands from history
         // This would require tracking command usage frequency

         // Add commands based on current context data
         const contextBasedCommands = availableCommands.filter((command) => {
            // Example: If we have a selected task, show task-related commands
            if (context.data.selectedTask && command.id.includes('task')) {
               return true;
            }

            // Add more contextual rules here
            return false;
         });

         suggestions.push(...contextBasedCommands);

         // If we don't have enough contextual suggestions, add all available commands
         if (suggestions.length < limit) {
            const remainingSlots = limit - suggestions.length;
            const existingIds = new Set(suggestions.map((cmd) => cmd.id));

            const additionalCommands = availableCommands
               .filter((cmd) => !existingIds.has(cmd.id))
               .slice(0, remainingSlots);

            suggestions.push(...additionalCommands);
         }

         // Remove duplicates and limit
         const uniqueSuggestions = Array.from(
            new Map(suggestions.map((cmd) => [cmd.id, cmd])).values()
         );

         return uniqueSuggestions.slice(0, limit);
      },
      [context, availableCommands, isCommandVisible]
   );

   // Create dynamic commands based on context
   const createDynamicCommands = useCallback((): Command[] => {
      const dynamicCommands: Command[] = [];

      // Example: Create "Continue with..." commands based on last result
      const lastResult = Array.from(context.results.values()).pop();
      if (lastResult?.success && lastResult.data) {
         // Add dynamic commands based on the result data
         // This is where you'd implement smart command generation
      }

      return dynamicCommands;
   }, [context]);

   // Filter commands by type
   const getCommandsByType = useCallback(
      (type: Command['type']): Command[] => {
         return availableCommands.filter((command) => command.type === type);
      },
      [availableCommands]
   );

   // Get command by ID
   const getCommandById = useCallback(
      (id: string): Command | undefined => {
         return availableCommands.find((command) => command.id === id);
      },
      [availableCommands]
   );

   return {
      // All commands
      availableCommands,
      groupedCommands,

      // Search and filter
      searchCommands,
      getCommandsByType,
      getCommandById,

      // Resolution
      resolveSelectOptions,
      resolveInputConfig,

      // Suggestions
      getContextualSuggestions,
      createDynamicCommands,

      // Helpers
      isCommandEnabled,
   };
}
