'use client';

import React, { useMemo } from 'react';
import { CommandEmptyState } from './CommandEmptyState';
import { CommandSelectView } from './CommandSelectView';
import { CommandSearchView } from './CommandSearchView';
import { useCommandContext } from '../providers/CommandContextProvider';
import type { Command, CommandOption } from '../types';
import type { CommandMode } from '../types';

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

  // Command search mode props
  searchResults?: Command[];
  isLoadingSearch?: boolean;
  searchQuery?: string;
  searchResultConfig?: Command['searchResultConfig'];
  currentCommand?: Command | null;

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
  searchResults = [],
  isLoadingSearch = false,
  searchQuery = '',
  searchResultConfig,
  currentCommand,
  searchValue,
  activeIndex,
}: CommandPaletteContentProps) {
  const { context: commandContext } = useCommandContext();

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
      case 'command-search':
        return searchQuery.trim() && searchResults.length === 0 && !isLoadingSearch;
      default:
        return true;
    }
  }, [
    mode,
    displayCommands.length,
    selectOptions.length,
    submitActions.length,
    searchResults.length,
    isLoadingOptions,
    isLoadingActions,
    isLoadingSearch,
    searchValue,
    searchQuery,
  ]);

  // Determine empty message based on context
  const getEmptyMessage = () => {
    if (mode === 'search' && searchValue.trim()) {
      return `No commands found for "${searchValue}"`;
    }
    if (mode === 'command-search' && searchQuery.trim()) {
      // Check for custom empty state message in search config
      if (currentCommand?.type === 'search' && currentCommand.searchConfig?.emptyStateMessage) {
        const message = currentCommand.searchConfig.emptyStateMessage;
        return typeof message === 'function' ? message(commandContext) : message;
      }
      return `No results found for "${searchQuery}"`;
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
          isLoading={isLoadingOptions || isLoadingActions || isLoadingSearch}
          emptyMessage={getEmptyMessage()}
          loadingMessage={
            mode === 'command-search'
              ? 'Searching...'
              : mode === 'input-with-actions'
                ? 'Loading actions...'
                : 'Loading options...'
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

      {/* Command search mode - show search results */}
      {mode === 'command-search' && (
        <CommandSearchView
          commands={searchResults}
          onSelectCommand={onSelectCommand}
          isCommandEnabled={isCommandEnabled}
          activeIndex={activeIndex}
          searchResultConfig={searchResultConfig}
        />
      )}
    </div>
  );
}
