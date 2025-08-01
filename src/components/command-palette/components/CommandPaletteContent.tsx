'use client';

import React, { useMemo } from 'react';
import { CommandList } from '@/components/ui/command';
import { CommandEmptyState } from './CommandEmptyState';
import { CommandSelectView } from './CommandSelectView';
import { CommandSearchView } from './CommandSearchView';
import type { Command, CommandOption } from '../types';
import type { CommandMode } from './CommandSearchInput';

interface CommandPaletteContentProps {
   mode: CommandMode;

   // Search mode props
   displayCommands: Command[];
   onSelectCommand: (command: Command) => void;
   isCommandEnabled: (command: Command) => boolean;

   // Select mode props
   selectOptions: CommandOption[];
   onSelectOption: (option: CommandOption) => void;
   isLoadingOptions: boolean;

   // Common props
   searchValue: string;
}

export function CommandPaletteContent({
   mode,
   displayCommands,
   onSelectCommand,
   isCommandEnabled,
   selectOptions,
   onSelectOption,
   isLoadingOptions,
   searchValue,
}: CommandPaletteContentProps) {
   // Determine if we should show empty state
   const shouldShowEmpty = useMemo(() => {
      switch (mode) {
         case 'search':
            // Only show empty state if there's a search query but no results
            return searchValue.trim() && displayCommands.length === 0 && !isLoadingOptions;
         case 'select':
            return selectOptions.length === 0 && !isLoadingOptions;
         case 'input':
            return false; // Input mode doesn't show lists
         default:
            return true;
      }
   }, [mode, displayCommands.length, selectOptions.length, isLoadingOptions, searchValue]);

   // Determine empty message based on context
   const getEmptyMessage = () => {
      if (mode === 'search' && searchValue.trim()) {
         return `No commands found for "${searchValue}"`;
      }
      if (mode === 'select') {
         return 'No options available';
      }
      return 'No results found';
   };

   return (
      <CommandList className="max-h-[600px] min-h-[250px]">
         {/* Only show empty state when we actually want it */}
         {shouldShowEmpty && (
            <CommandEmptyState
               isLoading={isLoadingOptions}
               emptyMessage={getEmptyMessage()}
               loadingMessage="Loading options..."
            />
         )}

         {/* Select mode - show options */}
         {mode === 'select' && (
            <CommandSelectView
               options={selectOptions}
               isLoading={isLoadingOptions}
               onSelectOption={onSelectOption}
            />
         )}

         {/* Search mode - show commands */}
         {mode === 'search' && (
            <CommandSearchView
               commands={displayCommands}
               onSelectCommand={onSelectCommand}
               isCommandEnabled={isCommandEnabled}
            />
         )}
      </CommandList>
   );
}
