'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import { useCommandChain } from './useCommandChain';
import { useCommandResolver } from './useCommandResolver';
import { useCommandExecution } from './useCommandExecution';
import { useCommandContext } from '../providers/CommandContextProvider';
import type { Command, CommandOption, CommandMode } from '../types';
import type { CommandPaletteInitialState } from '../CommandPalette';

interface UseCommandPaletteStateProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
   context?: Record<string, any>;
   initialState?: CommandPaletteInitialState;
}

export function useCommandPaletteState({
   open,
   onOpenChange,
   context: externalContext,
   initialState,
}: UseCommandPaletteStateProps) {
   // Local state
   const [search, setSearch] = useState('');
   const [inputValue, setInputValue] = useState('');
   const [currentCommand, setCurrentCommand] = useState<Command | null>(null);
   const [selectOptions, setSelectOptions] = useState<CommandOption[]>([]);
   const [isLoadingOptions, setIsLoadingOptions] = useState(false);
   const [submitActions, setSubmitActions] = useState<CommandOption[]>([]);
   const [isLoadingActions, setIsLoadingActions] = useState(false);

   // Hooks
   const { context: commandContext, updateContextData } = useCommandContext();
   const { breadcrumbs, goBack, executeCommandInChain } = useCommandChain();
   const {
      searchCommands,
      resolveSelectOptions,
      resolveInputConfig,
      getContextualSuggestions,
      getCommandById,
   } = useCommandResolver();
   const { isExecuting, isCommandEnabled, execute } = useCommandExecution();

   // Update context with external context data when it changes
   useEffect(() => {
      if (externalContext) {
         Object.entries(externalContext).forEach(([key, value]) => {
            updateContextData(`external.${key}`, value);
         });
      }
   }, [externalContext, updateContextData]);

   // Handle initial state when dialog opens
   useEffect(() => {
      if (open && initialState) {
         // Set initial search value if provided
         if (initialState.searchValue !== undefined) {
            setSearch(initialState.searchValue);
         }

         // Set initial input value if provided
         if (initialState.inputValue !== undefined) {
            setInputValue(initialState.inputValue);
         }

         // Set initial command if provided
         if (initialState.commandId) {
            const command = getCommandById(initialState.commandId);
            if (command) {
               setCurrentCommand(command);
               setSearch(''); // Clear search when selecting a command
            }
         }
      }
   }, [open, initialState, getCommandById]);

   // Derived state
   const mode: CommandMode = useMemo(() => {
      if (!currentCommand) return 'search';
      if (currentCommand.type === 'select') return 'select';
      if (currentCommand.type === 'input') return 'input';
      if (currentCommand.type === 'input-with-actions') return 'input-with-actions';
      return 'search';
   }, [currentCommand]);

   const displayCommands = useMemo(() => {
      if (mode === 'search') {
         return search ? searchCommands(search) : getContextualSuggestions(20);
      }
      return [];
   }, [mode, search, searchCommands, getContextualSuggestions]);

   const inputConfig = useMemo(() => {
      return currentCommand ? resolveInputConfig(currentCommand) : null;
   }, [currentCommand, resolveInputConfig]);

   // Track if we should auto-select an option
   const [shouldAutoSelectOption, setShouldAutoSelectOption] = useState<string | null>(null);

   // Load options for select commands
   useEffect(() => {
      if (currentCommand?.type === 'select') {
         setIsLoadingOptions(true);
         resolveSelectOptions(currentCommand)
            .then(setSelectOptions)
            .finally(() => setIsLoadingOptions(false));
      } else {
         setSelectOptions([]);
      }
   }, [currentCommand, resolveSelectOptions]);

   // Check for auto-selection when options are loaded and we have an initial state
   useEffect(() => {
      console.log('🔍 Auto-select check:', {
         hasSelectedOptionId: !!initialState?.selectedOptionId,
         autoExecute: initialState?.autoExecute,
         selectOptionsCount: selectOptions.length,
         isLoadingOptions,
         commandType: currentCommand?.type,
         open,
         alreadyHasAutoSelect: !!shouldAutoSelectOption,
      });

      if (
         initialState?.selectedOptionId &&
         selectOptions.length > 0 &&
         !isLoadingOptions &&
         currentCommand?.type === 'select' &&
         open &&
         !shouldAutoSelectOption &&
         initialState.autoExecute !== false // Only auto-select if autoExecute is not explicitly false
      ) {
         const selectedOption = selectOptions.find(
            (opt) => opt.id === initialState.selectedOptionId
         );
         console.log('🎯 Setting auto-select for option:', selectedOption);

         if (selectedOption) {
            setShouldAutoSelectOption(selectedOption.id);
         }
      }
   }, [
      initialState,
      selectOptions,
      isLoadingOptions,
      currentCommand?.type,
      open,
      shouldAutoSelectOption,
   ]);

   // Load submit actions for input-with-actions commands
   useEffect(() => {
      if (currentCommand?.type === 'input-with-actions' && currentCommand.submitActions) {
         setIsLoadingActions(true);

         const loadActions = async () => {
            if (typeof currentCommand.submitActions === 'function') {
               return await currentCommand.submitActions(inputValue, {} as any);
            }
            return currentCommand.submitActions || [];
         };

         loadActions()
            .then(setSubmitActions)
            .finally(() => setIsLoadingActions(false));
      } else {
         setSubmitActions([]);
      }
   }, [currentCommand, inputValue]);

   // Reset state when dialog closes
   useEffect(() => {
      if (!open) {
         setCurrentCommand(null);
         setSearch('');
         setInputValue('');
         setSelectOptions([]);
         setIsLoadingOptions(false);
         setShouldAutoSelectOption(null);
      }
   }, [open]);

   // Handle next command logic
   const handleNextCommand = useCallback(
      (nextCommand: Command | Command[] | undefined) => {
         if (!nextCommand) {
            onOpenChange(false);
            return;
         }

         const nextCommands = Array.isArray(nextCommand) ? nextCommand : [nextCommand];

         if (nextCommands.length === 1) {
            setCurrentCommand(nextCommands[0]);
            setSearch('');
            setInputValue('');
         } else {
            // Multiple commands - reset to search mode to show them
            setCurrentCommand(null);
            setSearch('');
            setInputValue('');
         }
      },
      [onOpenChange]
   );

   // Command selection handler
   const handleCommandSelect = useCallback(
      async (command: Command) => {
         if (!isCommandEnabled(command)) return;

         switch (command.type) {
            case 'action': {
               const result = await execute(command);
               if (result.success) {
                  handleNextCommand(result.nextCommand);
               }
               break;
            }

            case 'select':
            case 'input':
            case 'input-with-actions': {
               setCurrentCommand(command);
               setSearch('');
               setInputValue('');
               break;
            }

            case 'branch':
            case 'composite': {
               const result = await execute(command);
               if (result.success) {
                  handleNextCommand(result.nextCommand);
               }
               break;
            }
         }
      },
      [execute, isCommandEnabled, handleNextCommand]
   );

   // Option selection handler
   const handleOptionSelect = useCallback(
      async (option: CommandOption) => {
         if (!currentCommand) return;

         const result = await executeCommandInChain(currentCommand, option.value);

         if (result.success) {
            handleNextCommand(result.nextCommand);
         }
      },
      [currentCommand, executeCommandInChain, handleNextCommand]
   );

   // Input submission handler (for regular input commands)
   const handleInputSubmit = useCallback(async () => {
      if (!currentCommand || !inputValue.trim()) return;

      // Validate input
      if (inputConfig?.validation) {
         const error = inputConfig.validation(inputValue, {} as any);
         if (error) {
            // TODO: Show error state
            console.error('Validation error:', error);
            return;
         }
      }

      // Transform input if needed
      const finalValue = inputConfig?.transform
         ? inputConfig.transform(inputValue, {} as any)
         : inputValue;

      const result = await executeCommandInChain(currentCommand, finalValue);

      if (result.success) {
         handleNextCommand(result.nextCommand);
      }
   }, [currentCommand, inputValue, inputConfig, executeCommandInChain, handleNextCommand]);

   // Action selection handler (for input-with-actions commands)
   const handleActionSelect = useCallback(
      async (action: CommandOption) => {
         if (!currentCommand || currentCommand.type !== 'input-with-actions') return;

         // Validate input first
         if (inputConfig?.validation) {
            const error = inputConfig.validation(inputValue, {} as any);
            if (error) {
               // TODO: Show error state
               console.error('Validation error:', error);
               return;
            }
         }

         // Transform input if needed
         const finalValue = inputConfig?.transform
            ? inputConfig.transform(inputValue, {} as any)
            : inputValue;

         // Execute with both input value and selected action
         const params = { inputValue: finalValue, action };
         const result = await executeCommandInChain(currentCommand, params);

         if (result.success) {
            handleNextCommand(result.nextCommand);
         }
      },
      [currentCommand, inputValue, inputConfig, executeCommandInChain, handleNextCommand]
   );

   // Back navigation handler
   const handleBack = useCallback(() => {
      if (currentCommand) {
         setCurrentCommand(null);
         setSearch('');
         setInputValue('');
      } else if (breadcrumbs.length > 0) {
         goBack();
      }
   }, [currentCommand, breadcrumbs.length, goBack]);

   // Keyboard handler
   const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
         if (e.key === 'Escape') {
            if (currentCommand) {
               handleBack();
               e.preventDefault();
            }
         } else if (e.key === 'Enter' && mode === 'input') {
            handleInputSubmit();
            e.preventDefault();
         }
         // Note: input-with-actions mode doesn't use Enter, user must select an action
      },
      [currentCommand, mode, handleBack, handleInputSubmit]
   );

   // Handle auto-selection of option when specified
   useEffect(() => {
      if (
         shouldAutoSelectOption &&
         selectOptions.length > 0 &&
         !isLoadingOptions &&
         currentCommand
      ) {
         const selectedOption = selectOptions.find((opt) => opt.id === shouldAutoSelectOption);

         if (selectedOption) {
            // Auto-select the option using the same logic as handleOptionSelect
            const autoSelect = async () => {
               console.log('🚀 Auto-selecting option:', selectedOption);
               try {
                  const result = await executeCommandInChain(currentCommand, selectedOption.value);
                  console.log('✅ Auto-selection result:', result);
                  if (result.success) {
                     // Handle next command if there is one
                     if (result.nextCommand) {
                        const nextCommands = Array.isArray(result.nextCommand)
                           ? result.nextCommand
                           : [result.nextCommand];
                        if (nextCommands.length === 1) {
                           setCurrentCommand(nextCommands[0]);
                           setSearch('');
                           setInputValue('');
                        } else {
                           // Multiple commands - reset to search mode to show them
                           setCurrentCommand(null);
                           setSearch('');
                           setInputValue('');
                        }
                     } else {
                        // No next command, close the palette
                        onOpenChange(false);
                     }
                  }
               } catch (error) {
                  console.error('Auto-selection failed:', error);
               } finally {
                  setShouldAutoSelectOption(null); // Clear the flag
               }
            };

            // Execute after a delay to ensure UI is ready
            const timeoutId = setTimeout(autoSelect, 300);
            return () => clearTimeout(timeoutId);
         }
      }
   }, [
      shouldAutoSelectOption,
      selectOptions,
      isLoadingOptions,
      currentCommand,
      executeCommandInChain,
      onOpenChange,
   ]);

   return {
      // State
      search,
      setSearch,
      inputValue,
      setInputValue,
      currentCommand,
      selectOptions,
      isLoadingOptions,
      submitActions,
      isLoadingActions,
      mode,
      displayCommands,
      inputConfig,
      breadcrumbs,
      isExecuting,

      // Handlers
      handleCommandSelect,
      handleOptionSelect,
      handleActionSelect,
      handleInputSubmit,
      handleBack,
      handleKeyDown,
      isCommandEnabled,
   };
}
