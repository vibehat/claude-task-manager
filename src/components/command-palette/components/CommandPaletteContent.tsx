'use client';

import React, { useMemo } from 'react';
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

   // Input-with-actions mode props
   submitActions?: CommandOption[];
   onSelectAction?: (action: CommandOption) => void;
   isLoadingActions?: boolean;

   // Common props
   searchValue: string;
   activeIndex: number;
}

export function CommandPaletteContent({
   mode,
   displayCommands,
   onSelectCommand,
   isCommandEnabled,
   selectOptions,
   onSelectOption,
   isLoadingOptions,
   submitActions = [],
   onSelectAction,
   isLoadingActions = false,
   searchValue,
   activeIndex,
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
         case 'input-with-actions':
            return submitActions.length === 0 && !isLoadingActions;
         default:
            return true;
      }
   }, [
      mode,
      displayCommands.length,
      selectOptions.length,
      submitActions.length,
      isLoadingOptions,
      isLoadingActions,
      searchValue,
   ]);

   // Determine empty message based on context
   const getEmptyMessage = () => {
      if (mode === 'search' && searchValue.trim()) {
         return `No commands found for "${searchValue}"`;
      }
      if (mode === 'select') {
         return 'No options available';
      }
      if (mode === 'input-with-actions') {
         return 'No submit actions available';
      }
      return 'No results found';
   };

   return (
      <div className="min-h-[250px]">
         {/* Only show empty state when we actually want it */}
         {shouldShowEmpty && (
            <CommandEmptyState
               isLoading={isLoadingOptions || isLoadingActions}
               emptyMessage={getEmptyMessage()}
               loadingMessage={
                  mode === 'input-with-actions' ? 'Loading actions...' : 'Loading options...'
               }
            />
         )}

         {/* Select mode - show options */}
         {mode === 'select' && (
            <CommandSelectView
               options={selectOptions}
               isLoading={isLoadingOptions}
               onSelectOption={onSelectOption}
               activeIndex={activeIndex}
            />
         )}

         {/* Search mode - show commands */}
         {mode === 'search' && (
            <CommandSearchView
               commands={displayCommands}
               onSelectCommand={onSelectCommand}
               isCommandEnabled={isCommandEnabled}
               activeIndex={activeIndex}
            />
         )}

         {/* Input-with-actions mode - show submit actions */}
         {mode === 'input-with-actions' && onSelectAction && (
            <CommandSelectView
               options={submitActions}
               isLoading={isLoadingActions}
               onSelectOption={onSelectAction}
               activeIndex={activeIndex}
            />
         )}
      </div>
   );
}
