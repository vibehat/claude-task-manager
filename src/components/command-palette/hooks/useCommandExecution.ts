'use client';

import { useState, useCallback } from 'react';
import { useCommandContext } from '../providers/CommandContextProvider';
import type { Command, CommandResult } from '../types';
import { resolveDynamicValue } from '../types/command.types';

interface ExecutionState {
  isExecuting: boolean;
  currentCommand: Command | null;
  lastResult: CommandResult | null;
  error: Error | null;
}

export function useCommandExecution() {
  const { context, executeCommand } = useCommandContext();
  const [executionState, setExecutionState] = useState<ExecutionState>({
    isExecuting: false,
    currentCommand: null,
    lastResult: null,
    error: null,
  });

  // Execute a command with loading state management
  const execute = useCallback(
    async (command: Command, input?: any): Promise<CommandResult> => {
      setExecutionState({
        isExecuting: true,
        currentCommand: command,
        lastResult: null,
        error: null,
      });

      try {
        const result = await executeCommand(command, input);

        setExecutionState((prev) => ({
          ...prev,
          isExecuting: false,
          lastResult: result,
          error: result.error || null,
        }));

        return result;
      } catch (error) {
        const errorObj = error instanceof Error ? error : new Error(String(error));

        setExecutionState((prev) => ({
          ...prev,
          isExecuting: false,
          error: errorObj,
        }));

        return {
          success: false,
          error: errorObj,
        };
      }
    },
    [executeCommand]
  );

  // Execute a branch command by evaluating conditions
  const executeBranch = useCallback(
    async (command: Command, input?: any): Promise<CommandResult> => {
      if (command.type !== 'branch' || !command.branches) {
        return execute(command, input);
      }

      // Find the first branch whose condition is true
      for (const branch of command.branches) {
        if (branch.condition(context)) {
          return execute(branch.command, input);
        }
      }

      // No branch matched
      return {
        success: false,
        error: new Error('No branch condition matched'),
      };
    },
    [context, execute]
  );

  // Execute a composite command that may return multiple commands
  const executeComposite = useCallback(
    async (command: Command, input?: any): Promise<CommandResult> => {
      if (command.type !== 'composite') {
        return execute(command, input);
      }

      const result = await execute(command, input);

      // Composite commands often return next commands
      if (result.nextCommand) {
        // The UI will handle displaying these commands
        return result;
      }

      return result;
    },
    [execute]
  );

  // Execute with input validation
  const executeWithValidation = useCallback(
    async (command: Command, input?: any): Promise<CommandResult> => {
      // For input commands, validate the input
      if (command.type === 'input' && command.inputConfig?.validation) {
        const validationError = command.inputConfig.validation(input, context);
        if (validationError) {
          return {
            success: false,
            error: new Error(validationError),
          };
        }
      }

      // Transform input if needed
      let transformedInput = input;
      if (command.type === 'input' && command.inputConfig?.transform) {
        transformedInput = command.inputConfig.transform(input, context);
      }

      return execute(command, transformedInput);
    },
    [context, execute]
  );

  // Check if a command is visible
  const isCommandVisible = useCallback(
    (command: Command): boolean => {
      if (!command.visible) return true;
      return command.visible(context);
    },
    [context]
  );

  // Check if a command is enabled
  const isCommandEnabled = useCallback(
    (command: Command): boolean => {
      if (!command.enabled) return true;
      return command.enabled(context);
    },
    [context]
  );

  // Get resolved command properties
  const getResolvedCommand = useCallback(
    (command: Command) => {
      return {
        ...command,
        title: resolveDynamicValue(command.title, context),
        description: command.description
          ? resolveDynamicValue(command.description, context)
          : undefined,
        icon: command.icon ? resolveDynamicValue(command.icon, context) : undefined,
      };
    },
    [context]
  );

  // Cancel current execution (if supported)
  const cancel = useCallback(() => {
    if (executionState.currentCommand?.onCancel) {
      executionState.currentCommand.onCancel(context);
    }

    setExecutionState({
      isExecuting: false,
      currentCommand: null,
      lastResult: null,
      error: new Error('Command cancelled'),
    });
  }, [context, executionState.currentCommand]);

  return {
    // Execution methods
    execute,
    executeBranch,
    executeComposite,
    executeWithValidation,
    cancel,

    // State
    ...executionState,

    // Helpers
    isCommandVisible,
    isCommandEnabled,
    getResolvedCommand,
  };
}
