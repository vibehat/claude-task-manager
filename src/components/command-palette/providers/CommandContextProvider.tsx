'use client';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from 'react';
import type {
  CommandContext,
  CommandChainItem,
  CommandResult,
  Command,
  CommandModule,
  SideEffect,
} from '../types';

interface CommandContextValue {
  context: CommandContext;
  executeCommand: (command: Command, input?: any) => Promise<CommandResult>;
  pushToChain: (item: CommandChainItem) => void;
  popFromChain: () => CommandChainItem | undefined;
  navigateToChainIndex: (index: number) => void;
  updateContextData: (key: string, value: any) => void;
  updateGlobalState: (key: string, value: any) => void;
  registerModule: (module: CommandModule) => Promise<void>;
  unregisterModule: (moduleId: string) => void;
  getModule: (moduleId: string) => CommandModule | undefined;
  processSideEffects: (effects: SideEffect[]) => Promise<void>;
}

const CommandContextContext = createContext<CommandContextValue | null>(null);

interface CommandContextProviderProps {
  children: ReactNode;
  initialContext?: Partial<CommandContext>;
}

export function CommandContextProvider({ children, initialContext }: CommandContextProviderProps) {
  const [context, setContext] = useState<CommandContext>(() => ({
    chain: [],
    currentIndex: -1,
    results: new Map(),
    data: {},
    modules: new Map(),
    globalState: {},
    methods: {},
    ...initialContext,
  }));

  const chainIdCounter = useRef(0);

  // Process a single side effect
  const processSideEffect = useCallback(
    async (effect: SideEffect) => {
      switch (effect.type) {
        case 'notification':
          console.log('Notification:', effect.payload);
          break;
        case 'refresh':
          if (effect.payload?.target && context.methods[`${effect.payload.target}.refresh`]) {
            await context.methods[`${effect.payload.target}.refresh`]();
          }
          break;
        case 'navigate':
          console.log('Navigate to:', effect.payload);
          break;
        case 'custom':
          if (effect.handler) {
            effect.handler(context);
          }
          break;
      }
    },
    [context]
  );

  // Generate unique chain item ID
  const generateChainId = useCallback(() => {
    return `chain-${Date.now()}-${++chainIdCounter.current}`;
  }, []);

  // Execute a command with full context
  const executeCommand = useCallback(
    async (command: Command, input?: any): Promise<CommandResult> => {
      const chainItem: CommandChainItem = {
        id: generateChainId(),
        command,
        input,
        timestamp: Date.now(),
      };

      try {
        // Call lifecycle hook
        if (command.onEnter) {
          command.onEnter(context);
        }

        // Execute the command
        const result = await command.execute(input, context);

        // Update chain item with result
        chainItem.result = result;

        // Add to chain and update context
        setContext((prev) => {
          const newChain = [...prev.chain, chainItem];
          const newResults = new Map(prev.results);
          newResults.set(chainItem.id, result);

          return {
            ...prev,
            chain: newChain,
            currentIndex: newChain.length - 1,
            results: newResults,
          };
        });

        // Process side effects
        if (result.sideEffects) {
          // We'll call this later after defining it
          for (const effect of result.sideEffects) {
            await processSideEffect(effect);
          }
        }

        // Call module handlers
        context.modules.forEach((module) => {
          if (module.onCommandExecute) {
            module.onCommandExecute(command, result, context);
          }
        });

        // Call lifecycle hook
        if (command.onExit) {
          command.onExit(context);
        }

        return result;
      } catch (error) {
        const errorResult: CommandResult = {
          success: false,
          error: error instanceof Error ? error : new Error(String(error)),
        };

        chainItem.result = errorResult;

        // Still add failed command to chain
        setContext((prev) => {
          const newChain = [...prev.chain, chainItem];
          const newResults = new Map(prev.results);
          newResults.set(chainItem.id, errorResult);

          return {
            ...prev,
            chain: newChain,
            currentIndex: newChain.length - 1,
            results: newResults,
          };
        });

        return errorResult;
      }
    },
    [context, generateChainId, processSideEffect]
  );

  // Chain management
  const pushToChain = useCallback((item: CommandChainItem) => {
    setContext((prev) => ({
      ...prev,
      chain: [...prev.chain, item],
      currentIndex: prev.chain.length,
    }));
  }, []);

  const popFromChain = useCallback(() => {
    let poppedItem: CommandChainItem | undefined;

    setContext((prev) => {
      if (prev.chain.length === 0) return prev;

      const newChain = [...prev.chain];
      poppedItem = newChain.pop();

      return {
        ...prev,
        chain: newChain,
        currentIndex: Math.max(-1, newChain.length - 1),
      };
    });

    return poppedItem;
  }, []);

  const navigateToChainIndex = useCallback((index: number) => {
    setContext((prev) => ({
      ...prev,
      currentIndex: Math.max(-1, Math.min(index, prev.chain.length - 1)),
    }));
  }, []);

  // Context data management
  const updateContextData = useCallback((key: string, value: any) => {
    setContext((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [key]: value,
      },
    }));
  }, []);

  const updateGlobalState = useCallback((key: string, value: any) => {
    setContext((prev) => ({
      ...prev,
      globalState: {
        ...prev.globalState,
        [key]: value,
      },
    }));
  }, []);

  // Module management
  const registerModule = useCallback(
    async (module: CommandModule) => {
      // Check dependencies
      if (module.dependencies) {
        for (const depId of module.dependencies) {
          if (!context.modules.has(depId)) {
            throw new Error(`Module ${module.id} depends on ${depId} which is not registered`);
          }
        }
      }

      // Initialize module
      if (module.initialize) {
        await module.initialize(context);
      }

      // Add context extensions
      if (module.contextExtensions) {
        if (module.contextExtensions.data) {
          Object.entries(module.contextExtensions.data).forEach(([key, value]) => {
            updateContextData(`${module.id}.${key}`, value);
          });
        }

        if (module.contextExtensions.methods) {
          setContext((prev) => ({
            ...prev,
            methods: {
              ...prev.methods,
              ...Object.entries(module.contextExtensions.methods).reduce(
                (acc, [key, method]) => ({
                  ...acc,
                  [`${module.id}.${key}`]: method,
                }),
                {}
              ),
            },
          }));
        }
      }

      // Register module
      setContext((prev) => {
        const newModules = new Map(prev.modules);
        newModules.set(module.id, module);
        return {
          ...prev,
          modules: newModules,
        };
      });
    },
    [context, updateContextData]
  );

  const unregisterModule = useCallback(
    async (moduleId: string) => {
      const commandModule = context.modules.get(moduleId);
      if (!commandModule) return;

      // Cleanup module
      if (commandModule.cleanup) {
        await commandModule.cleanup(context);
      }

      // Remove module
      setContext((prev) => {
        const newModules = new Map(prev.modules);
        newModules.delete(moduleId);

        // Remove module data and methods
        const newData = { ...prev.data };
        const newMethods = { ...prev.methods };

        Object.keys(newData).forEach((key) => {
          if (key.startsWith(`${moduleId}.`)) {
            delete newData[key];
          }
        });

        Object.keys(newMethods).forEach((key) => {
          if (key.startsWith(`${moduleId}.`)) {
            delete newMethods[key];
          }
        });

        return {
          ...prev,
          modules: newModules,
          data: newData,
          methods: newMethods,
        };
      });
    },
    [context]
  );

  const getModule = useCallback(
    (moduleId: string) => {
      return context.modules.get(moduleId);
    },
    [context.modules]
  );

  // Side effect processing
  const processSideEffects = useCallback(
    async (effects: SideEffect[]) => {
      for (const effect of effects) {
        switch (effect.type) {
          case 'notification':
            // Handle notification (integrate with your notification system)
            console.log('Notification:', effect.payload);
            break;

          case 'refresh':
            // Handle refresh
            if (effect.payload?.target && context.methods[`${effect.payload.target}.refresh`]) {
              await context.methods[`${effect.payload.target}.refresh`]();
            }
            break;

          case 'navigate':
            // Handle navigation (integrate with your routing)
            console.log('Navigate to:', effect.payload);
            break;

          case 'custom':
            if (effect.handler) {
              effect.handler(context);
            }
            break;
        }
      }
    },
    [context]
  );

  const value: CommandContextValue = {
    context,
    executeCommand,
    pushToChain,
    popFromChain,
    navigateToChainIndex,
    updateContextData,
    updateGlobalState,
    registerModule,
    unregisterModule,
    getModule,
    processSideEffects,
  };

  return <CommandContextContext.Provider value={value}>{children}</CommandContextContext.Provider>;
}

export function useCommandContext() {
  const context = useContext(CommandContextContext);
  if (!context) {
    throw new Error('useCommandContext must be used within CommandContextProvider');
  }
  return context;
}
