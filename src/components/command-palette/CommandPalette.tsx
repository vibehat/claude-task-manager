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
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import { useCommandPalette } from './CommandPaletteProvider';
import { useCommandModules } from './hooks/useCommandModules';
import type { Command as CommandType, CommandArg } from './types';
import { ArrowLeftIcon, ChevronRightIcon, PlayIcon } from 'lucide-react';

export function CommandPalette() {
   const { state, actions } = useCommandPalette();
   const modules = useCommandModules();

   // Flatten all commands from modules
   const allCommands = useMemo(() => {
      if (!modules || modules.length === 0) return [];
      return modules.flatMap((module) => {
         if (module.isEnabled?.() === false) return [];
         return module.commands || [];
      });
   }, [modules]);

   // Simple command search - no slash distinction, all commands are treated equally
   const filteredCommands = useMemo(() => {
      if (!allCommands || allCommands.length === 0) return [];

      if (!state.searchValue.trim()) {
         return allCommands;
      }

      const query = state.searchValue.toLowerCase();
      return allCommands.filter((command) => {
         return (
            command.title?.toLowerCase().includes(query) ||
            command.description?.toLowerCase().includes(query) ||
            command.id?.toLowerCase().includes(query) ||
            command.keywords?.some((keyword) => keyword.toLowerCase().includes(query))
         );
      });
   }, [allCommands, state.searchValue]);

   const handleCommandSelect = useCallback(
      (command: CommandType) => {
         if (command.disabled) return;

         if (command.args && command.args.length > 0) {
            actions.startArgumentCollection(command);
         } else {
            actions.executeCommand(command);
         }
      },
      [actions]
   );

   const handleBack = useCallback(() => {
      if (state.isCollectingArgs) {
         actions.cancelArgumentCollection();
      }
   }, [state.isCollectingArgs, actions]);

   const handleParameterSubmit = useCallback(
      (argName: string, value: any) => {
         actions.updateCurrentArg(argName, value);

         if (!state.currentCommand) return;

         const totalArgs = state.currentCommand.args?.length || 0;
         if (state.currentArgIndex >= totalArgs - 1) {
            // This is the last parameter, execute
            const finalArgs = { ...state.commandArgs, [argName]: value };
            actions.executeCommand(state.currentCommand, finalArgs);
         } else {
            // Move to next parameter
            actions.nextArg();
         }
      },
      [state.currentCommand, state.currentArgIndex, state.commandArgs, actions]
   );

   const renderParameterInput = useCallback(
      (arg: CommandArg, index: number) => {
         const value = state.commandArgs[arg.name];
         const isActive = index === state.currentArgIndex;

         if (!isActive) {
            // Show completed parameter as read-only
            return (
               <div
                  key={arg.name}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
               >
                  <div>
                     <span className="text-sm font-medium">{arg.label}</span>
                     {arg.description && (
                        <p className="text-xs text-muted-foreground mt-1">{arg.description}</p>
                     )}
                  </div>
                  <div className="text-sm text-muted-foreground">{value || '—'}</div>
               </div>
            );
         }

         // Active parameter input
         return (
            <motion.div
               key={arg.name}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="p-4 bg-background border rounded-xl space-y-3"
            >
               <div>
                  <label className="text-sm font-medium flex items-center gap-2">
                     {arg.label}
                     {arg.required && <span className="text-red-500">*</span>}
                  </label>
                  {arg.description && (
                     <p className="text-xs text-muted-foreground mt-1">{arg.description}</p>
                  )}
               </div>

               {arg.type === 'select' ? (
                  <Select
                     value={value || ''}
                     onValueChange={(newValue) => handleParameterSubmit(arg.name, newValue)}
                  >
                     <SelectTrigger>
                        <SelectValue
                           placeholder={arg.placeholder || `Select ${arg.label.toLowerCase()}`}
                        />
                     </SelectTrigger>
                     <SelectContent>
                        {arg.options?.map((option) => (
                           <SelectItem key={option.value} value={option.value}>
                              {option.label}
                           </SelectItem>
                        ))}
                     </SelectContent>
                  </Select>
               ) : (
                  <Input
                     type={arg.type === 'number' ? 'number' : 'text'}
                     placeholder={arg.placeholder || arg.label}
                     value={value || ''}
                     onChange={(e) => actions.updateCurrentArg(arg.name, e.target.value)}
                     onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                           handleParameterSubmit(arg.name, e.currentTarget.value);
                        }
                     }}
                     autoFocus
                     className="bg-background"
                  />
               )}

               <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                     Step {index + 1} of {state.currentCommand?.args?.length || 0}
                  </span>
                  <Button
                     size="sm"
                     onClick={() => handleParameterSubmit(arg.name, value)}
                     disabled={arg.required && !value}
                     className="gap-2"
                  >
                     {index === (state.currentCommand?.args?.length || 0) - 1 ? (
                        <>
                           Execute <PlayIcon className="w-3 h-3" />
                        </>
                     ) : (
                        <>
                           Next <ChevronRightIcon className="w-3 h-3" />
                        </>
                     )}
                  </Button>
               </div>
            </motion.div>
         );
      },
      [
         state.commandArgs,
         state.currentArgIndex,
         state.currentCommand,
         actions,
         handleParameterSubmit,
      ]
   );

   // Add keyboard handling for the dialog
   useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
         if (!state.isOpen) return;

         if (event.key === 'Escape') {
            if (state.isCollectingArgs) {
               actions.cancelArgumentCollection();
            } else {
               actions.closePalette();
            }
         }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
   }, [state.isOpen, state.isCollectingArgs, actions]);

   return (
      <CommandDialog
         open={state.isOpen}
         onOpenChange={(open) => {
            if (!open) {
               actions.closePalette();
            }
         }}
      >
         <Command shouldFilter={false} className="max-w-lg">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b">
               {state.isCollectingArgs && (
                  <Button variant="ghost" size="sm" onClick={handleBack} className="p-2">
                     <ArrowLeftIcon className="w-4 h-4" />
                  </Button>
               )}
               <div className="flex-1">
                  {state.isCollectingArgs && state.currentCommand ? (
                     <div>
                        <h3 className="font-medium">{state.currentCommand.title}</h3>
                        <p className="text-xs text-muted-foreground">Configure parameters</p>
                     </div>
                  ) : (
                     <h3 className="font-medium">Command Palette</h3>
                  )}
               </div>
            </div>

            {/* Content */}
            {state.isCollectingArgs && state.currentCommand ? (
               <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                  {state.currentCommand.args?.map(renderParameterInput)}
               </div>
            ) : (
               <>
                  <CommandInput
                     placeholder="Search commands..."
                     value={state.searchValue}
                     onValueChange={actions.setSearchValue}
                  />

                  <CommandList className="max-h-80">
                     <CommandEmpty>
                        <div className="text-center py-8">
                           <p className="text-sm text-muted-foreground">No commands found</p>
                           <p className="text-xs text-muted-foreground mt-1">
                              Try a different search term
                           </p>
                        </div>
                     </CommandEmpty>

                     <CommandGroup>
                        <AnimatePresence>
                           {filteredCommands && filteredCommands.length > 0
                              ? filteredCommands.map((command) => (
                                   <motion.div
                                      key={command.id}
                                      initial={{ opacity: 0, y: 4 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -4 }}
                                      transition={{ duration: 0.15 }}
                                   >
                                      <CommandItem
                                         value={`${command.id} ${command.title} ${command.description || ''}`}
                                         onSelect={() => handleCommandSelect(command)}
                                         disabled={command.disabled}
                                         className="flex items-center gap-3 p-3 cursor-pointer"
                                      >
                                         {command.icon && (
                                            <div className="w-5 h-5 flex-shrink-0 text-muted-foreground">
                                               {command.icon}
                                            </div>
                                         )}
                                         <div className="flex-1 min-w-0">
                                            <div className="font-medium text-sm">
                                               {command.title}
                                            </div>
                                            {command.description && (
                                               <div className="text-xs text-muted-foreground truncate">
                                                  {command.description}
                                               </div>
                                            )}
                                         </div>
                                         {command.args && command.args.length > 0 && (
                                            <ChevronRightIcon className="w-4 h-4 text-muted-foreground" />
                                         )}
                                      </CommandItem>
                                   </motion.div>
                                ))
                              : null}
                        </AnimatePresence>
                     </CommandGroup>
                  </CommandList>
               </>
            )}
         </Command>
      </CommandDialog>
   );
}
