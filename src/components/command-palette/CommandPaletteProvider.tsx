'use client';

import React, {
   createContext,
   useContext,
   useCallback,
   useState,
   useEffect,
   useMemo,
   type ReactNode,
} from 'react';
import { toast } from 'sonner';
import type {
   CommandPaletteContext,
   CommandPaletteState,
   CommandPaletteActions,
   Command,
} from './types';

const CommandPaletteContext = createContext<CommandPaletteContext | null>(null);

interface CommandPaletteProviderProps {
   children: ReactNode;
}

const STORAGE_KEY = 'command-palette-data';
const MAX_HISTORY_SIZE = 20;
const MAX_FAVORITES_SIZE = 50;

export function CommandPaletteProvider({ children }: CommandPaletteProviderProps) {
   const [state, setState] = useState<CommandPaletteState>({
      isOpen: false,
      currentCommand: null,
      isExecuting: false,
      isCollectingArgs: false,
      commandArgs: {},
      currentArgIndex: 0,
      argValidationErrors: {},
      pages: [],
      currentPage: null,
      history: [],
      favorites: [],
      searchValue: '',
      filteredCommands: [],
      isSlashCommand: false,
      isLoading: false,
   });

   // Load persisted data on mount
   useEffect(() => {
      try {
         const saved = localStorage.getItem(STORAGE_KEY);
         if (saved) {
            const data = JSON.parse(saved);
            setState((prev) => ({
               ...prev,
               history: data.history || [],
               favorites: data.favorites || [],
            }));
         }
      } catch (error) {
         console.warn('Failed to load command palette data from localStorage:', error);
      }
   }, []);

   // Persist data when history or favorites change
   useEffect(() => {
      try {
         const dataToSave = {
            history: state.history.slice(0, MAX_HISTORY_SIZE),
            favorites: state.favorites.slice(0, MAX_FAVORITES_SIZE),
         };
         localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
      } catch (error) {
         console.warn('Failed to save command palette data to localStorage:', error);
      }
   }, [state.history, state.favorites]);

   // Global keyboard shortcut handler
   useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
         // Cmd+K or Ctrl+K to open command palette
         if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
            event.preventDefault();
            setState((prev) => {
               if (!prev.isOpen) {
                  return {
                     ...prev,
                     isOpen: true,
                     searchValue: '',
                     isCollectingArgs: false,
                     currentCommand: null,
                     commandArgs: {},
                     currentArgIndex: 0,
                     argValidationErrors: {},
                     pages: [],
                     currentPage: null,
                     isSlashCommand: false,
                  };
               }
               return prev;
            });
         }

         // Escape to close or navigate back
         if (event.key === 'Escape') {
            setState((prev) => {
               if (prev.isOpen) {
                  if (prev.isCollectingArgs) {
                     return {
                        ...prev,
                        isCollectingArgs: false,
                        currentCommand: null,
                        commandArgs: {},
                        currentArgIndex: 0,
                        argValidationErrors: {},
                     };
                  } else if (prev.pages.length > 0) {
                     const newPages = prev.pages.slice(0, -1);
                     return {
                        ...prev,
                        pages: newPages,
                        currentPage: newPages[newPages.length - 1] || null,
                        searchValue: '',
                     };
                  } else {
                     return {
                        ...prev,
                        isOpen: false,
                        searchValue: '',
                        isCollectingArgs: false,
                        currentCommand: null,
                        commandArgs: {},
                        currentArgIndex: 0,
                        argValidationErrors: {},
                        pages: [],
                        currentPage: null,
                        isExecuting: false,
                        isLoading: false,
                        isSlashCommand: false,
                     };
                  }
               }
               return prev;
            });
         }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
   }, []); // No dependencies - handle everything in setState callbacks

   // Dialog actions
   const openPalette = useCallback(() => {
      setState((prev) => ({
         ...prev,
         isOpen: true,
         searchValue: '',
         isCollectingArgs: false,
         currentCommand: null,
         commandArgs: {},
         currentArgIndex: 0,
         argValidationErrors: {},
         pages: [],
         currentPage: null,
         isSlashCommand: false,
      }));
   }, []);

   const closePalette = useCallback(() => {
      setState((prev) => ({
         ...prev,
         isOpen: false,
         searchValue: '',
         isCollectingArgs: false,
         currentCommand: null,
         commandArgs: {},
         currentArgIndex: 0,
         argValidationErrors: {},
         pages: [],
         currentPage: null,
         isExecuting: false,
         isLoading: false,
         isSlashCommand: false,
      }));
   }, []);

   // History and favorites actions (defined early to avoid reference issues)
   const addToHistory = useCallback((command: Command) => {
      setState((prev) => {
         const filteredHistory = prev.history.filter((h) => h.id !== command.id);
         const newHistory = [command, ...filteredHistory].slice(0, MAX_HISTORY_SIZE);
         return {
            ...prev,
            history: newHistory,
         };
      });
   }, []);

   // Command execution actions
   const executeCommand = useCallback(
      async (command: Command, args?: Record<string, any>) => {
         try {
            setState((prev) => ({
               ...prev,
               isExecuting: true,
               currentCommand: { ...command, loading: true },
            }));

            // Add to history before execution
            addToHistory(command);

            // Execute the command
            await command.execute(args);

            // Show success toast
            toast.success(`Executed: ${command.title}`);

            // Close palette after successful execution
            closePalette();
         } catch (error) {
            console.error('Command execution failed:', error);
            const errorMessage =
               error instanceof Error ? error.message : 'Command execution failed';
            toast.error(`Failed to execute ${command.title}: ${errorMessage}`);

            // Keep palette open on error
            setState((prev) => ({
               ...prev,
               isExecuting: false,
               currentCommand: command,
            }));
         }
      },
      [addToHistory, closePalette]
   );

   const setExecuting = useCallback((executing: boolean) => {
      setState((prev) => ({
         ...prev,
         isExecuting: executing,
      }));
   }, []);

   // Progressive argument collection actions
   const startArgumentCollection = useCallback(
      (command: Command, initialArgs?: Record<string, any>) => {
         setState((prev) => ({
            ...prev,
            currentCommand: command,
            isCollectingArgs: true,
            commandArgs: initialArgs || {},
            currentArgIndex: 0,
            argValidationErrors: {},
         }));
      },
      []
   );

   const updateCommandArgs = useCallback((args: Record<string, any>) => {
      setState((prev) => ({
         ...prev,
         commandArgs: { ...prev.commandArgs, ...args },
      }));
   }, []);

   const updateCurrentArg = useCallback((name: string, value: any) => {
      setState((prev) => ({
         ...prev,
         commandArgs: { ...prev.commandArgs, [name]: value },
         argValidationErrors: { ...prev.argValidationErrors, [name]: '' }, // Clear error when updating
      }));
   }, []);

   const setCurrentArgIndex = useCallback((index: number) => {
      setState((prev) => ({
         ...prev,
         currentArgIndex: index,
      }));
   }, []);

   const nextArg = useCallback(() => {
      setState((prev) => ({
         ...prev,
         currentArgIndex: Math.min(
            (prev.currentCommand?.args?.length || 1) - 1,
            prev.currentArgIndex + 1
         ),
      }));
   }, []);

   const previousArg = useCallback(() => {
      setState((prev) => ({
         ...prev,
         currentArgIndex: Math.max(0, prev.currentArgIndex - 1),
      }));
   }, []);

   const setArgValidationError = useCallback((argName: string, error: string) => {
      setState((prev) => ({
         ...prev,
         argValidationErrors: { ...prev.argValidationErrors, [argName]: error },
      }));
   }, []);

   const clearArgValidationError = useCallback((argName: string) => {
      setState((prev) => ({
         ...prev,
         argValidationErrors: { ...prev.argValidationErrors, [argName]: '' },
      }));
   }, []);

   const finishArgumentCollection = useCallback(() => {
      setState((prev) => ({
         ...prev,
         isCollectingArgs: false,
         currentArgIndex: 0,
         argValidationErrors: {},
      }));
   }, []);

   const cancelArgumentCollection = useCallback(() => {
      setState((prev) => ({
         ...prev,
         isCollectingArgs: false,
         currentCommand: null,
         commandArgs: {},
         currentArgIndex: 0,
         argValidationErrors: {},
      }));
   }, []);

   // Navigation actions
   const navigateToPage = useCallback((page: string) => {
      setState((prev) => ({
         ...prev,
         pages: [...prev.pages, page],
         currentPage: page,
         searchValue: '',
      }));
   }, []);

   const navigateBack = useCallback(() => {
      setState((prev) => {
         const newPages = prev.pages.slice(0, -1);
         return {
            ...prev,
            pages: newPages,
            currentPage: newPages[newPages.length - 1] || null,
            searchValue: '',
         };
      });
   }, []);

   const resetNavigation = useCallback(() => {
      setState((prev) => ({
         ...prev,
         pages: [],
         currentPage: null,
         searchValue: '',
      }));
   }, []);

   const addToFavorites = useCallback((commandId: string) => {
      setState((prev) => {
         if (prev.favorites.includes(commandId)) return prev;
         return {
            ...prev,
            favorites: [...prev.favorites, commandId].slice(0, MAX_FAVORITES_SIZE),
         };
      });
      toast.success('Added to favorites');
   }, []);

   const removeFromFavorites = useCallback((commandId: string) => {
      setState((prev) => ({
         ...prev,
         favorites: prev.favorites.filter((id) => id !== commandId),
      }));
      toast.success('Removed from favorites');
   }, []);

   // Search actions
   const setSearchValue = useCallback((value: string) => {
      setState((prev) => ({
         ...prev,
         searchValue: value,
      }));
   }, []);

   const setFilteredCommands = useCallback((commands: Command[]) => {
      setState((prev) => ({
         ...prev,
         filteredCommands: commands,
      }));
   }, []);

   const setSlashCommand = useCallback((isSlash: boolean) => {
      setState((prev) => ({
         ...prev,
         isSlashCommand: isSlash,
      }));
   }, []);

   // Loading actions
   const setLoading = useCallback((loading: boolean, message?: string) => {
      setState((prev) => ({
         ...prev,
         isLoading: loading,
         loadingMessage: message,
      }));
   }, []);

   const actions: CommandPaletteActions = useMemo(
      () => ({
         openPalette,
         closePalette,
         executeCommand,
         setExecuting,
         startArgumentCollection,
         updateCommandArgs,
         updateCurrentArg,
         setCurrentArgIndex,
         nextArg,
         previousArg,
         setArgValidationError,
         clearArgValidationError,
         finishArgumentCollection,
         cancelArgumentCollection,
         navigateToPage,
         navigateBack,
         resetNavigation,
         addToHistory,
         addToFavorites,
         removeFromFavorites,
         setSearchValue,
         setFilteredCommands,
         setSlashCommand,
         setLoading,
      }),
      [
         openPalette,
         closePalette,
         executeCommand,
         setExecuting,
         startArgumentCollection,
         updateCommandArgs,
         updateCurrentArg,
         setCurrentArgIndex,
         nextArg,
         previousArg,
         setArgValidationError,
         clearArgValidationError,
         finishArgumentCollection,
         cancelArgumentCollection,
         navigateToPage,
         navigateBack,
         resetNavigation,
         addToHistory,
         addToFavorites,
         removeFromFavorites,
         setSearchValue,
         setFilteredCommands,
         setSlashCommand,
         setLoading,
      ]
   );

   const contextValue: CommandPaletteContext = useMemo(
      () => ({
         state,
         actions,
      }),
      [state, actions]
   );

   return (
      <CommandPaletteContext.Provider value={contextValue}>
         {children}
      </CommandPaletteContext.Provider>
   );
}

export function useCommandPalette() {
   const context = useContext(CommandPaletteContext);
   if (!context) {
      throw new Error('useCommandPalette must be used within a CommandPaletteProvider');
   }
   return context;
}
