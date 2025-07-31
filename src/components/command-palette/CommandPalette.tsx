'use client';

import React, { useMemo, useCallback, useEffect } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'motion/react';
import {
   CommandDialog,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
   CommandSeparator,
} from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';
import { CommandArgumentsModal } from './CommandArgumentsModal';
import { useCommandPalette } from './CommandPaletteProvider';
import { useCommandModules } from './hooks/useCommandModules';
import type { Command as CommandType } from './types';
import { StarIcon, SearchIcon, ArrowRightIcon, KeyboardIcon, LoaderIcon } from 'lucide-react';

export function CommandPalette() {
   const { state, actions } = useCommandPalette();
   const modules = useCommandModules();

   // Flatten all commands from modules
   const allCommands = useMemo(() => {
      return modules.flatMap((module) => (module.isEnabled?.() !== false ? module.commands : []));
   }, [modules]);

   // Custom fuzzy search implementation
   const searchCommands = useCallback(
      (commands: CommandType[], query: string) => {
         if (!query.trim()) {
            return commands;
         }

         const lowerQuery = query.toLowerCase();

         return commands
            .map((command) => {
               let score = 0;
               const title = command.title.toLowerCase();
               const description = command.description?.toLowerCase() || '';
               const keywords = command.keywords?.join(' ').toLowerCase() || '';
               const group = command.group.toLowerCase();

               // Exact matches get highest score
               if (title === lowerQuery) score += 100;
               else if (title.includes(lowerQuery)) score += 50;
               else if (description.includes(lowerQuery)) score += 30;
               else if (keywords.includes(lowerQuery)) score += 20;
               else if (group.includes(lowerQuery)) score += 10;

               // Boost favorites
               if (state.favorites.includes(command.id)) score += 5;

               // Boost recent commands
               if (state.history.some((h) => h.id === command.id)) score += 3;

               return { command, score };
            })
            .filter(({ score }) => score > 0)
            .sort((a, b) => b.score - a.score)
            .map(({ command }) => command);
      },
      [state.favorites, state.history]
   );

   // Group commands for display
   const groupedCommands = useMemo(() => {
      let commands = allCommands;

      // Apply search if there's a query
      if (state.searchValue) {
         commands = searchCommands(commands, state.searchValue);
      }

      const groups: Record<string, CommandType[]> = {};

      // Add favorites group (only when not searching)
      if (!state.searchValue && state.favorites.length > 0) {
         const favoriteCommands = allCommands.filter((cmd) => state.favorites.includes(cmd.id));
         if (favoriteCommands.length > 0) {
            groups['⭐ Favorites'] = favoriteCommands;
         }
      }

      // Add recent commands group (only when not searching)
      if (!state.searchValue && state.history.length > 0) {
         const recentCommands = state.history.slice(0, 5);
         if (recentCommands.length > 0) {
            groups['🕒 Recent'] = recentCommands;
         }
      }

      // Group remaining commands
      commands.forEach((command) => {
         const group = command.group;
         if (!groups[group]) {
            groups[group] = [];
         }
         // Avoid duplicates from favorites/recent
         const alreadyInGroups = Object.values(groups)
            .flat()
            .some((c) => c.id === command.id);

         if (!alreadyInGroups) {
            groups[group].push(command);
         }
      });

      return groups;
   }, [allCommands, state.searchValue, state.favorites, state.history, searchCommands]);

   const handleCommandSelect = useCallback(
      (command: CommandType) => {
         if (command.disabled) return;

         // If command has arguments, start argument collection
         if (command.args && command.args.length > 0) {
            actions.startArgumentCollection(command);
         } else {
            // Execute command directly
            actions.executeCommand(command);
         }
      },
      [actions]
   );

   const handleArgumentsExecute = useCallback(
      (args: Record<string, any>) => {
         if (state.currentCommand) {
            actions.executeCommand(state.currentCommand, args);
         }
      },
      [state.currentCommand, actions]
   );

   const handleArgumentsCancel = useCallback(() => {
      actions.cancelArgumentCollection();
   }, [actions]);

   const toggleFavorite = useCallback(
      (commandId: string, event: React.MouseEvent) => {
         event.stopPropagation();
         if (state.favorites.includes(commandId)) {
            actions.removeFromFavorites(commandId);
         } else {
            actions.addToFavorites(commandId);
         }
      },
      [state.favorites, actions]
   );

   const renderCommandShortcut = useCallback((shortcut?: string[]) => {
      if (!shortcut || shortcut.length === 0) return null;

      return (
         <div className="flex items-center space-x-1">
            {shortcut.map((key, index) => (
               <Badge key={index} variant="outline" className="px-1.5 py-0.5 text-xs font-mono">
                  {key}
               </Badge>
            ))}
         </div>
      );
   }, []);

   const renderCommandItem = useCallback(
      (command: CommandType) => {
         const isFavorite = state.favorites.includes(command.id);
         const isRecent = state.history.some((h) => h.id === command.id);

         return (
            <motion.div
               key={command.id}
               initial={{ opacity: 0, y: 4 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -4 }}
               transition={{ duration: 0.15 }}
            >
               <CommandItem
                  value={`${command.id} ${command.title} ${command.description || ''} ${command.keywords?.join(' ') || ''}`}
                  onSelect={() => handleCommandSelect(command)}
                  disabled={command.disabled}
                  className="flex items-center justify-between p-3 cursor-pointer group"
               >
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                     {command.icon && (
                        <motion.div
                           className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-muted-foreground"
                           initial={{ scale: 0.8 }}
                           animate={{ scale: 1 }}
                           transition={{ duration: 0.2, delay: 0.1 }}
                        >
                           {command.icon}
                        </motion.div>
                     )}
                     <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                           <span className="font-medium text-sm">{command.title}</span>
                           {command.loading && (
                              <LoaderIcon className="w-3 h-3 animate-spin text-muted-foreground" />
                           )}
                           {command.args && command.args.length > 0 && (
                              <ArrowRightIcon className="w-3 h-3 text-muted-foreground" />
                           )}
                        </div>
                        {command.description && (
                           <p className="text-xs text-muted-foreground truncate">
                              {command.description}
                           </p>
                        )}
                     </div>
                  </div>

                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                     <motion.button
                        onClick={(e) => toggleFavorite(command.id, e)}
                        className="p-1 hover:bg-accent rounded-sm transition-colors"
                        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <StarIcon
                           className={`w-3 h-3 ${isFavorite ? 'text-yellow-500 fill-current' : 'text-muted-foreground'}`}
                        />
                     </motion.button>
                     {renderCommandShortcut(command.shortcut)}
                  </div>
               </CommandItem>
            </motion.div>
         );
      },
      [state.favorites, state.history, handleCommandSelect, toggleFavorite, renderCommandShortcut]
   );

   // Handle keyboard navigation for back action
   useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
         if (!state.isOpen) return;

         // Backspace to go back when search is empty
         if (event.key === 'Backspace' && !state.searchValue && state.pages.length > 0) {
            event.preventDefault();
            actions.navigateBack();
         }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
   }, [state.isOpen, state.searchValue, state.pages.length, actions]);

   return (
      <CommandDialog
         open={state.isOpen}
         onOpenChange={(open) => {
            if (!open) {
               actions.closePalette();
            }
         }}
      >
         {state.isCollectingArgs && state.currentCommand ? (
            <CommandArgumentsModal
               command={state.currentCommand}
               initialArgs={state.commandArgs}
               onExecute={handleArgumentsExecute}
               onCancel={handleArgumentsCancel}
            />
         ) : (
            <Command shouldFilter={false} className="max-w-2xl">
               <CommandInput
                  placeholder="Search commands..."
                  value={state.searchValue}
                  onValueChange={actions.setSearchValue}
               />

               <CommandList className="max-h-[400px]">
                  {state.isLoading && (
                     <Command.Loading>
                        <div className="flex items-center justify-center py-6">
                           <LoaderIcon className="w-6 h-6 animate-spin text-muted-foreground mr-2" />
                           <span className="text-sm text-muted-foreground">
                              {state.loadingMessage || 'Loading commands...'}
                           </span>
                        </div>
                     </Command.Loading>
                  )}

                  <CommandEmpty>
                     <div className="text-center py-6">
                        <SearchIcon className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground mb-1">No commands found</p>
                        <p className="text-xs text-muted-foreground">
                           {state.searchValue
                              ? `Try a different search term`
                              : 'Start typing to search for commands'}
                        </p>
                        <div className="flex items-center justify-center mt-3 text-xs text-muted-foreground">
                           <KeyboardIcon className="w-3 h-3 mr-1" />
                           <span>Use ⌘K to open • ESC to close</span>
                        </div>
                     </div>
                  </CommandEmpty>

                  <AnimatePresence mode="popLayout">
                     {Object.entries(groupedCommands).map(
                        ([groupName, commands], groupIndex) =>
                           commands.length > 0 && (
                              <motion.div
                                 key={groupName}
                                 initial={{ opacity: 0, height: 0 }}
                                 animate={{ opacity: 1, height: 'auto' }}
                                 exit={{ opacity: 0, height: 0 }}
                                 transition={{ duration: 0.2, delay: groupIndex * 0.05 }}
                              >
                                 {groupIndex > 0 && <CommandSeparator />}
                                 <CommandGroup heading={groupName}>
                                    <AnimatePresence mode="popLayout">
                                       {commands.map(renderCommandItem)}
                                    </AnimatePresence>
                                 </CommandGroup>
                              </motion.div>
                           )
                     )}
                  </AnimatePresence>

                  {!state.isLoading &&
                     Object.keys(groupedCommands).length === 0 &&
                     !state.searchValue && (
                        <div className="p-4 text-center">
                           <p className="text-sm text-muted-foreground mb-2">
                              Welcome to the Command Palette!
                           </p>
                           <p className="text-xs text-muted-foreground">
                              Start typing to search for Task Master commands (tm:xxx) and other
                              actions.
                           </p>
                        </div>
                     )}
               </CommandList>
            </Command>
         )}
      </CommandDialog>
   );
}
