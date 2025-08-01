'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import { useCommandChain } from './useCommandChain';
import { useCommandResolver } from './useCommandResolver';
import { useCommandExecution } from './useCommandExecution';
import type { Command, CommandOption, CommandMode } from '../types';

interface UseCommandPaletteStateProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
}

export function useCommandPaletteState({ open, onOpenChange }: UseCommandPaletteStateProps) {
   // Local state
   const [search, setSearch] = useState('');
   const [inputValue, setInputValue] = useState('');
   const [currentCommand, setCurrentCommand] = useState<Command | null>(null);
   const [selectOptions, setSelectOptions] = useState<CommandOption[]>([]);
   const [isLoadingOptions, setIsLoadingOptions] = useState(false);

   // Hooks
   const { breadcrumbs, goBack, executeCommandInChain } = useCommandChain();
   const { searchCommands, resolveSelectOptions, resolveInputConfig, getContextualSuggestions } =
      useCommandResolver();
   const { isExecuting, isCommandEnabled, execute } = useCommandExecution();

   // Derived state
   const mode: CommandMode = useMemo(() => {
      if (!currentCommand) return 'search';
      if (currentCommand.type === 'select') return 'select';
      if (currentCommand.type === 'input') return 'input';
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

   // Reset state when dialog closes
   useEffect(() => {
      if (!open) {
         setCurrentCommand(null);
         setSearch('');
         setInputValue('');
         setSelectOptions([]);
         setIsLoadingOptions(false);
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
            case 'input': {
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

   // Input submission handler
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
      },
      [currentCommand, mode, handleBack, handleInputSubmit]
   );

   return {
      // State
      search,
      setSearch,
      inputValue,
      setInputValue,
      currentCommand,
      selectOptions,
      isLoadingOptions,
      mode,
      displayCommands,
      inputConfig,
      breadcrumbs,
      isExecuting,

      // Handlers
      handleCommandSelect,
      handleOptionSelect,
      handleInputSubmit,
      handleBack,
      handleKeyDown,
      isCommandEnabled,
   };
}
