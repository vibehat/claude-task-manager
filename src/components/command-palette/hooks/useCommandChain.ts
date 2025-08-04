'use client';

import { useCallback, useMemo } from 'react';
import { useCommandContext } from '../providers/CommandContextProvider';
import type { Command, CommandResult } from '../types';

export function useCommandChain() {
  const { context, executeCommand, popFromChain, navigateToChainIndex } = useCommandContext();

  // Get current chain item
  const currentChainItem = useMemo(() => {
    if (context.currentIndex < 0 || context.currentIndex >= context.chain.length) {
      return null;
    }
    return context.chain[context.currentIndex];
  }, [context.chain, context.currentIndex]);

  // Get chain navigation state
  const chainNavigation = useMemo(
    () => ({
      canGoBack: context.currentIndex > 0,
      canGoForward: context.currentIndex < context.chain.length - 1,
      currentIndex: context.currentIndex,
      chainLength: context.chain.length,
    }),
    [context.currentIndex, context.chain.length]
  );

  // Navigate back in chain
  const goBack = useCallback(() => {
    if (chainNavigation.canGoBack) {
      navigateToChainIndex(context.currentIndex - 1);
    }
  }, [chainNavigation.canGoBack, context.currentIndex, navigateToChainIndex]);

  // Navigate forward in chain
  const goForward = useCallback(() => {
    if (chainNavigation.canGoForward) {
      navigateToChainIndex(context.currentIndex + 1);
    }
  }, [chainNavigation.canGoForward, context.currentIndex, navigateToChainIndex]);

  // Go to specific index
  const goToIndex = useCallback(
    (index: number) => {
      navigateToChainIndex(index);
    },
    [navigateToChainIndex]
  );

  // Execute command and handle chain navigation
  const executeCommandInChain = useCallback(
    async (
      command: Command,
      input?: any,
      options?: {
        clearForward?: boolean; // Clear forward history when executing new command
      }
    ): Promise<CommandResult> => {
      // If we're not at the end of the chain and clearForward is true,
      // remove all items after current index
      if (options?.clearForward && context.currentIndex < context.chain.length - 1) {
        // This would require a new method in the provider to trim the chain
        // For now, we'll just execute normally
      }

      const result = await executeCommand(command, input);

      // Handle next command(s) if returned
      if (result.nextCommand) {
        const nextCommands = Array.isArray(result.nextCommand)
          ? result.nextCommand
          : [result.nextCommand];

        // Return the next commands for the UI to handle
        return {
          ...result,
          nextCommand: nextCommands,
        };
      }

      return result;
    },
    [context.currentIndex, context.chain.length, executeCommand]
  );

  // Get chain breadcrumb data
  const breadcrumbs = useMemo(() => {
    return context.chain.map((item, index) => ({
      id: item.id,
      title:
        typeof item.command.title === 'function' ? item.command.title(context) : item.command.title,
      isActive: index === context.currentIndex,
      index,
      timestamp: item.timestamp,
      hasResult: !!item.result,
      isSuccess: item.result?.success ?? false,
    }));
  }, [context]);

  // Get result for a specific chain item
  const getChainResult = useCallback(
    (chainId: string): CommandResult | undefined => {
      return context.results.get(chainId);
    },
    [context.results]
  );

  // Clear the entire chain
  const clearChain = useCallback(() => {
    // This would require a new method in the provider
    // For now, we can navigate to -1 to indicate no selection
    navigateToChainIndex(-1);
  }, [navigateToChainIndex]);

  // Pop the last item from chain
  const popLast = useCallback(() => {
    return popFromChain();
  }, [popFromChain]);

  return {
    // Current state
    currentChainItem,
    chain: context.chain,
    breadcrumbs,

    // Navigation
    chainNavigation,
    goBack,
    goForward,
    goToIndex,

    // Execution
    executeCommandInChain,

    // Chain management
    clearChain,
    popLast,
    getChainResult,
  };
}
