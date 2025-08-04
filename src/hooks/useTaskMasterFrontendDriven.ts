import { useState } from 'react';
import useSWR from 'swr';
import { commands, findNextTask, calculateTaskStats } from '@/libs/taskmaster-commands';
import { parseTasksJson, parseShowOutput, parseCommandResult } from '@/libs/taskmaster-parser';
import type { TaskMasterData, TaskMasterTask } from '@/libs/taskmaster-parser';

// Execute CLI command via backend API
async function executeCLI(request: any) {
  const response = await fetch('/api/taskmaster/cli', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(`CLI request failed: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Frontend-driven hook for TaskMaster data
 * Backend just executes commands, frontend handles all logic
 */
export function useTaskMasterData(autoRefresh = true) {
  const { data, error, isLoading, mutate } = useSWR<TaskMasterData>(
    'taskmaster-data',
    async () => {
      // Frontend constructs the command
      const cmd = commands.readTasksJson();
      const result = await executeCLI(cmd);

      // Frontend parses the output
      return parseTasksJson(result.result.stdout);
    },
    {
      refreshInterval: autoRefresh ? 3000 : 0,
      revalidateOnFocus: false,
    }
  );

  const tasks = data?.tasks || [];
  const metadata = data?.metadata;

  // Frontend calculates all derived data
  const stats = calculateTaskStats(tasks);
  const nextTask = findNextTask(tasks);

  return {
    tasks,
    metadata,
    stats,
    nextTask,
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * Hook for executing TaskMaster commands
 */
export function useTaskMasterCommand() {
  const [isExecuting, setIsExecuting] = useState(false);
  const [lastResult, setLastResult] = useState<any>(null);
  const [lastError, setLastError] = useState<string | null>(null);

  const execute = async (commandBuilder: () => any) => {
    setIsExecuting(true);
    setLastError(null);

    try {
      // Frontend builds the command
      const cmd = commandBuilder();

      // Backend executes it
      const result = await executeCLI(cmd);

      // Frontend parses the result
      const parsed = parseCommandResult(
        result.result.stdout,
        result.result.stderr,
        result.result.exitCode
      );

      setLastResult({
        ...result,
        parsed,
        raw: result.result.stdout,
      });

      if (!parsed.success) {
        setLastError(parsed.errorMessage);
      }

      return result;
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Command failed';
      setLastError(errorMsg);
      throw error;
    } finally {
      setIsExecuting(false);
    }
  };

  return {
    execute,
    isExecuting,
    lastResult,
    lastError,
  };
}

/**
 * Hook for task details with frontend parsing
 */
export function useTaskDetails(taskId: string | null) {
  const { data, error, isLoading, mutate } = useSWR<TaskMasterTask | null>(
    taskId ? `task-${taskId}` : null,
    async () => {
      if (!taskId) return null;

      // Frontend builds command
      const cmd = commands.show(taskId);
      const result = await executeCLI(cmd);

      // Frontend parses output
      return parseShowOutput(result.result.stdout);
    },
    { revalidateOnFocus: false }
  );

  return {
    task: data || null,
    isLoading,
    error,
    refresh: mutate,
  };
}

/**
 * Combined hook for complete frontend-driven TaskMaster integration
 */
export function useTaskMaster() {
  const { tasks, metadata, stats, nextTask, isLoading, error, refresh } = useTaskMasterData();
  const { execute, isExecuting, lastResult, lastError } = useTaskMasterCommand();

  // Command executors with automatic refresh
  const setStatus = async (taskId: string | number, status: string) => {
    await execute(() => commands.setStatus(taskId, status as any));
    refresh();
  };

  const addTask = async (title: string, description: string, options?: any) => {
    await execute(() => commands.addTask(title, description, options));
    refresh();
  };

  const expandTask = async (taskId: string | number, options?: any) => {
    await execute(() => commands.expand(taskId, options));
    refresh();
  };

  const updateTask = async (taskId: string | number, prompt: string) => {
    await execute(() => commands.updateTask(taskId, prompt));
    refresh();
  };

  const addDependency = async (taskId: string | number, dependsOnId: string | number) => {
    await execute(() => commands.addDependency(taskId, dependsOnId));
    refresh();
  };

  return {
    // Data
    tasks,
    metadata,
    stats,
    nextTask,

    // State
    isLoading,
    error,
    isExecuting,
    lastResult,
    lastError,

    // Actions
    refresh,
    setStatus,
    addTask,
    expandTask,
    updateTask,
    addDependency,

    // Raw command execution
    executeCommand: execute,

    // Command builders exposed for advanced use
    commands,
  };
}
