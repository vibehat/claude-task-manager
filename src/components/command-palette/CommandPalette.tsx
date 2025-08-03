'use client';

import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogHeader } from '@/components/ui/dialog';
import { CommandSearchInput } from './components/CommandSearchInput';
import { CommandInputHint } from './components/CommandInputHint';
import { CommandPaletteContent } from './components/CommandPaletteContent';
import { CommandLoadingOverlay } from './components/CommandLoadingOverlay';
import { useCommandPaletteState } from './hooks/useCommandPaletteState';

export interface CommandPaletteInitialState {
   commandId?: string;
   inputValue?: string;
   searchValue?: string;
   selectedOptionId?: string;
   autoExecute?: boolean; // Whether to auto-execute the selected option (default: true)
}

interface CommandPaletteProps {
   open: boolean;
   onOpenChange: (open: boolean) => void;
   context?: Record<string, any>;
   initialState?: CommandPaletteInitialState;
}

export function CommandPalette({ open, onOpenChange, context, initialState }: CommandPaletteProps) {
   const {
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
      searchResults,
      isLoadingSearch,
      searchQuery,
      searchResultConfig,
      mode,
      displayCommands,
      inputConfig,
      breadcrumbs,
      isExecuting,
      activeIndex,

      // Handlers
      handleCommandSelect,
      handleOptionSelect,
      handleActionSelect,
      handleBack,
      handleKeyDown,
      handleSearchQueryChange,
      isCommandEnabled,
   } = useCommandPaletteState({ open, onOpenChange, context, initialState });

   return (
      <Dialog open={open} onOpenChange={onOpenChange}>
         <DialogContent className="overflow-hidden p-0 !w-[650px] !max-w-[650px] max-h-[90vh] h-auto">
            <DialogHeader className="px-4 py-3 border-b border-border">
               <DialogTitle className="text-lg font-semibold flex items-center gap-2">
                  {currentCommand ? (
                     <>
                        {breadcrumbs.length > 0 && (
                           <button
                              onClick={handleBack}
                              className="p-1 rounded-sm hover:bg-accent transition-colors"
                              aria-label="Go back"
                           >
                              <svg
                                 className="w-4 h-4"
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                 />
                              </svg>
                           </button>
                        )}
                        <span className="truncate">
                           {(() => {
                              const title =
                                 typeof currentCommand.title === 'string'
                                    ? currentCommand.title
                                    : 'Command';

                              // Show contextual title for input commands if enabled
                              if (
                                 currentCommand.type === 'input' &&
                                 currentCommand.inputConfig?.showContextualTitle &&
                                 inputValue
                              ) {
                                 // Use custom format if provided, otherwise default format
                                 if (currentCommand.inputConfig.contextFormat) {
                                    return currentCommand.inputConfig.contextFormat(
                                       title,
                                       inputValue
                                    );
                                 }
                                 return `${title}: "${inputValue}"`;
                              }

                              return title;
                           })()}
                        </span>
                        {currentCommand.type === 'select' && (
                           <span className="text-sm text-muted-foreground">• Choose an option</span>
                        )}
                        {currentCommand.type === 'input' &&
                           !currentCommand.inputConfig?.showContextualTitle && (
                              <span className="text-sm text-muted-foreground">• Enter value</span>
                           )}
                        {currentCommand.type === 'input' &&
                           currentCommand.inputConfig?.showContextualTitle &&
                           !inputValue && (
                              <span className="text-sm text-muted-foreground">• Enter value</span>
                           )}
                        {currentCommand.type === 'input-with-actions' && (
                           <span className="text-sm text-muted-foreground">
                              • Enter value and select action
                           </span>
                        )}
                     </>
                  ) : (
                     <>
                        <svg
                           className="w-5 h-5 text-primary"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                           />
                        </svg>
                        <span>Command Palette</span>
                        <span className="text-sm text-muted-foreground">• Search for commands</span>
                     </>
                  )}
               </DialogTitle>
               {currentCommand?.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                     {typeof currentCommand.description === 'string'
                        ? currentCommand.description
                        : ''}
                  </p>
               )}
            </DialogHeader>
            <div className="h-full flex flex-col" onKeyDown={handleKeyDown}>
               {/* Command input */}
               <CommandSearchInput
                  mode={mode}
                  value={
                     mode === 'input'
                        ? inputValue
                        : mode === 'command-search'
                          ? searchQuery
                          : search
                  }
                  onValueChange={
                     mode === 'input'
                        ? setInputValue
                        : mode === 'command-search'
                          ? handleSearchQueryChange
                          : setSearch
                  }
                  inputPlaceholder={inputConfig?.placeholder}
               />

               {/* Input mode hint */}
               {mode === 'input' && <CommandInputHint hint={inputConfig?.submitHint} />}

               {/* Main content */}
               <div className="max-h-[calc(100vh-10rem)] overflow-y-auto mx-1.5">
                  <CommandPaletteContent
                     mode={mode}
                     displayCommands={displayCommands}
                     onSelectCommand={handleCommandSelect}
                     isCommandEnabled={isCommandEnabled}
                     selectOptions={selectOptions}
                     onSelectOption={handleOptionSelect}
                     isLoadingOptions={isLoadingOptions}
                     submitActions={submitActions}
                     onSelectAction={handleActionSelect}
                     isLoadingActions={isLoadingActions}
                     searchResults={searchResults}
                     isLoadingSearch={isLoadingSearch}
                     searchQuery={searchQuery}
                     searchResultConfig={searchResultConfig}
                     currentCommand={currentCommand}
                     searchValue={search}
                     activeIndex={activeIndex}
                  />
               </div>

               {/* Loading overlay */}
               <CommandLoadingOverlay isLoading={isExecuting} message="Executing command..." />
            </div>
         </DialogContent>
      </Dialog>
   );
}
