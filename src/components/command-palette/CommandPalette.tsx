'use client';

import React, { useMemo, useCallback, useEffect, useState } from 'react';
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
import { ArrowLeftIcon, ChevronRightIcon, PlayIcon, CheckIcon } from 'lucide-react';
import { taskMasterCLI } from '@/hooks/useTaskMasterCLI';

export function CommandPalette() {
   const { state, actions } = useCommandPalette();
   const modules = useCommandModules();
   const [stepCommands, setStepCommands] = useState<CommandType[]>([]);

   // Flatten all commands from modules
   const allCommands = useMemo(() => {
      if (!modules || modules.length === 0) return [];
      return modules.flatMap((module) => {
         if (module.isEnabled?.() === false) return [];
         return module.commands || [];
      });
   }, [modules]);

   // Generate step-specific commands for nested flows
   const generateStepCommands = useCallback(
      async (step: any, stepIndex: number) => {
         const commands: CommandType[] = [];

         if (step.type === 'task-select') {
            try {
               const result = await taskMasterCLI.list();
               if (result.success && result.result?.parsed?.tasks) {
                  result.result.parsed.tasks.forEach((task: any) => {
                     commands.push({
                        id: `step-${stepIndex}-task-${task.id}`,
                        title: `${task.id}: ${task.title}`,
                        description: `Status: ${task.status} | Priority: ${task.priority}`,
                        icon: <span className="text-sm">{getStatusIcon(task.status)}</span>,
                        group: step.label,
                        execute: async () => {
                           actions.updateStepValue(stepIndex, task.id);
                           // Auto-advance to next step
                           if (stepIndex < state.nestedSteps.length - 1) {
                              setTimeout(() => actions.nextStep(), 100);
                           }
                        },
                     });
                  });
               }
            } catch (error) {
               console.error('Failed to load tasks:', error);
            }
         } else if (step.type === 'status-select') {
            const statuses = [
               {
                  value: 'pending',
                  label: 'Pending',
                  description: 'Task is ready to start',
                  icon: '⏳',
               },
               {
                  value: 'in-progress',
                  label: 'In Progress',
                  description: 'Currently working on this task',
                  icon: '🔄',
               },
               {
                  value: 'done',
                  label: 'Done',
                  description: 'Task completed successfully',
                  icon: '✅',
               },
               { value: 'deferred', label: 'Deferred', description: 'Task postponed', icon: '⏸️' },
               {
                  value: 'cancelled',
                  label: 'Cancelled',
                  description: 'Task no longer needed',
                  icon: '❌',
               },
               {
                  value: 'blocked',
                  label: 'Blocked',
                  description: 'Task waiting on external factors',
                  icon: '🚫',
               },
            ];

            statuses.forEach((status) => {
               commands.push({
                  id: `step-${stepIndex}-status-${status.value}`,
                  title: status.label,
                  description: status.description,
                  icon: <span className="text-sm">{status.icon}</span>,
                  group: step.label,
                  execute: async () => {
                     actions.updateStepValue(stepIndex, status.value);
                     // Auto-advance to next step
                     if (stepIndex < state.nestedSteps.length - 1) {
                        setTimeout(() => actions.nextStep(), 100);
                     }
                  },
               });
            });
         } else if (step.type === 'confirmation') {
            // Add execute and cancel commands for confirmation step
            commands.push(
               {
                  id: `step-${stepIndex}-execute`,
                  title: 'Execute Command',
                  description: `Execute ${state.currentCommand?.title} with selected parameters`,
                  icon: <PlayIcon className="w-4 h-4" />,
                  group: 'Confirmation',
                  execute: async () => {
                     await actions.confirmAndExecute();
                  },
               },
               {
                  id: `step-${stepIndex}-cancel`,
                  title: 'Cancel',
                  description: 'Cancel this command and return to main menu',
                  icon: <ArrowLeftIcon className="w-4 h-4" />,
                  group: 'Confirmation',
                  execute: async () => {
                     actions.resetNestedFlow();
                  },
               }
            );
         }

         return commands;
      },
      [state.nestedSteps.length, state.currentCommand, actions]
   );

   const getStatusIcon = (status: string) => {
      switch (status) {
         case 'pending':
            return '⏳';
         case 'in-progress':
            return '🔄';
         case 'done':
            return '✅';
         case 'deferred':
            return '⏸️';
         case 'cancelled':
            return '❌';
         case 'blocked':
            return '🚫';
         default:
            return '📝';
      }
   };

   // Load step commands when in nested flow
   useEffect(() => {
      if (state.nestedFlowState !== 'command-selection' && state.nestedSteps.length > 0) {
         const currentStep = state.nestedSteps[state.currentStepIndex];
         if (currentStep) {
            generateStepCommands(currentStep, state.currentStepIndex).then(setStepCommands);
         }
      } else {
         setStepCommands([]);
      }
   }, [state.nestedFlowState, state.currentStepIndex, state.nestedSteps, generateStepCommands]);

   // Determine which commands to show
   const commandsToShow = useMemo(() => {
      if (state.nestedFlowState !== 'command-selection') {
         return stepCommands;
      }
      return allCommands;
   }, [state.nestedFlowState, stepCommands, allCommands]);

   // Simple command search - no slash distinction, all commands are treated equally
   const filteredCommands = useMemo(() => {
      if (!commandsToShow || commandsToShow.length === 0) return [];

      if (!state.searchValue.trim()) {
         return commandsToShow;
      }

      const query = state.searchValue.toLowerCase();
      return commandsToShow.filter((command) => {
         return (
            command.title?.toLowerCase().includes(query) ||
            command.description?.toLowerCase().includes(query) ||
            command.id?.toLowerCase().includes(query) ||
            command.keywords?.some((keyword) => keyword.toLowerCase().includes(query))
         );
      });
   }, [commandsToShow, state.searchValue]);

   const handleCommandSelect = useCallback(
      (command: CommandType) => {
         if (command.disabled) return;

         if (command.args && command.args.length > 0) {
            // Check if this should use nested flow (task-select or status-select args)
            const hasNestedArgs = command.args.some(
               (arg) => arg.type === 'task-select' || arg.type === 'status-select'
            );

            if (hasNestedArgs) {
               actions.startNestedFlow(command);
            } else {
               actions.startArgumentCollection(command);
            }
         } else {
            actions.executeCommand(command);
         }
      },
      [actions]
   );

   const handleBack = useCallback(() => {
      if (state.nestedFlowState !== 'command-selection' && state.nestedSteps.length > 0) {
         if (state.currentStepIndex > 0) {
            actions.previousStep();
         } else {
            actions.resetNestedFlow();
         }
      } else if (state.isCollectingArgs) {
         actions.cancelArgumentCollection();
      }
   }, [
      state.nestedFlowState,
      state.nestedSteps.length,
      state.currentStepIndex,
      state.isCollectingArgs,
      actions,
   ]);

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
               {(state.isCollectingArgs || state.nestedFlowState !== 'command-selection') && (
                  <Button variant="ghost" size="sm" onClick={handleBack} className="p-2">
                     <ArrowLeftIcon className="w-4 h-4" />
                  </Button>
               )}
               <div className="flex-1">
                  {state.nestedFlowState !== 'command-selection' && state.currentCommand ? (
                     <div>
                        <h3 className="font-medium">
                           {state.currentCommand.title}
                           {state.nestedSteps[state.currentStepIndex] && (
                              <span className="text-muted-foreground">
                                 {' '}
                                 → {state.nestedSteps[state.currentStepIndex].label}
                              </span>
                           )}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                           Step {state.currentStepIndex + 1} of {state.nestedSteps.length}
                           {/* Show completed step values */}
                           {state.nestedSteps
                              .slice(0, state.currentStepIndex)
                              .some((s) => s.completed) && (
                              <span className="ml-2">
                                 {state.nestedSteps
                                    .slice(0, state.currentStepIndex)
                                    .filter((s) => s.completed)
                                    .map((s) => s.value)
                                    .join(' → ')}
                              </span>
                           )}
                        </p>
                     </div>
                  ) : state.isCollectingArgs && state.currentCommand ? (
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
                     placeholder={
                        state.nestedFlowState !== 'command-selection' &&
                        state.nestedSteps[state.currentStepIndex]
                           ? `Search ${state.nestedSteps[state.currentStepIndex].label.toLowerCase()}...`
                           : 'Search commands...'
                     }
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

                     {Object.entries(
                        filteredCommands.reduce(
                           (groups: Record<string, CommandType[]>, command) => {
                              const group = command.group || 'Other';
                              if (!groups[group]) groups[group] = [];
                              groups[group].push(command);
                              return groups;
                           },
                           {}
                        )
                     ).map(([groupName, commands]) => (
                        <CommandGroup key={groupName} heading={groupName}>
                           <AnimatePresence>
                              {commands.map((command) => (
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
                                          <div className="font-medium text-sm">{command.title}</div>
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
                              ))}
                           </AnimatePresence>
                        </CommandGroup>
                     ))}
                  </CommandList>
               </>
            )}
         </Command>
      </CommandDialog>
   );
}
