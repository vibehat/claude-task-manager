/**
 * Frontend-driven TaskMaster command builder
 * All command construction logic is in the frontend
 */

export type TaskMasterStatus =
  | 'pending'
  | 'in-progress'
  | 'done'
  | 'deferred'
  | 'cancelled'
  | 'blocked';
export type TaskMasterPriority = 'high' | 'medium' | 'low';

/**
 * Command builders for TaskMaster CLI
 */
export const commands = {
  // Core data commands
  readTasksJson: () => ({
    // Direct file read approach - read the tasks.json file directly
    command: 'raw-file-read',
    args: ['.taskmaster/tasks/tasks.json'],
  }),

  list: (filter?: { status?: TaskMasterStatus; priority?: TaskMasterPriority }) => {
    const args: string[] = [];
    if (filter?.status) args.push(`--status=${filter.status}`);
    if (filter?.priority) args.push(`--priority=${filter.priority}`);

    return {
      command: 'list',
      args,
    };
  },

  next: () => ({
    command: 'next',
    args: [],
  }),

  show: (taskId: string | number) => ({
    command: 'show',
    args: [taskId.toString()],
  }),

  // Task modification commands
  setStatus: (taskId: string | number, status: TaskMasterStatus) => ({
    command: 'set-status',
    options: {
      id: taskId.toString(),
      status,
    },
  }),

  addTask: (
    title: string,
    description: string,
    options?: {
      priority?: TaskMasterPriority;
      dependencies?: string[];
      research?: boolean;
    }
  ) => ({
    command: 'add-task',
    options: {
      task: {
        title,
        description,
        priority: options?.priority || 'medium',
        dependencies: options?.dependencies || [],
      },
      research: options?.research || false,
    },
  }),

  updateTask: (taskId: string | number, prompt: string) => ({
    command: 'update-task',
    options: {
      id: taskId.toString(),
      prompt,
    },
  }),

  updateSubtask: (subtaskId: string, notes: string) => ({
    command: 'update-subtask',
    options: {
      id: subtaskId,
      notes,
    },
  }),

  // Task expansion
  expand: (taskId: string | number, options?: { research?: boolean; force?: boolean }) => ({
    command: 'expand',
    options: {
      id: taskId.toString(),
      research: options?.research || false,
      force: options?.force || false,
    },
  }),

  expandAll: (research = false) => ({
    command: 'expand-all',
    options: { research },
  }),

  // Analysis commands
  analyzeComplexity: (research = false) => ({
    command: 'analyze-complexity',
    options: { research },
  }),

  complexityReport: () => ({
    command: 'complexity-report',
    args: [],
  }),

  // Dependency management
  addDependency: (taskId: string | number, dependsOnId: string | number) => ({
    command: 'add-dependency',
    options: {
      taskId: taskId.toString(),
      dependsOnId: dependsOnId.toString(),
    },
  }),

  removeDependency: (taskId: string | number, dependsOnId: string | number) => ({
    command: 'remove-dependency',
    options: {
      taskId: taskId.toString(),
      dependsOnId: dependsOnId.toString(),
    },
  }),

  validateDependencies: () => ({
    command: 'validate-dependencies',
    args: [],
  }),

  // Utility commands
  generate: () => ({
    command: 'generate',
    args: [],
  }),

  version: () => ({
    command: 'version',
    args: [],
  }),

  models: () => ({
    command: 'models',
    args: [],
  }),

  // Direct command execution for advanced users
  raw: (command: string, args: string[] = []) => ({
    command,
    args,
  }),
};

/**
 * Helper to determine if a task is ready to work on
 */
export function isTaskReady(task: any, allTasks: any[]): boolean {
  if (task.status !== 'pending') return false;

  if (!task.dependencies || task.dependencies.length === 0) return true;

  // Check if all dependencies are completed
  return task.dependencies.every((depId: number) => {
    const depTask = allTasks.find((t) => t.id === depId);
    return depTask && depTask.status === 'done';
  });
}

/**
 * Helper to find next available task
 */
export function findNextTask(tasks: any[]): any | null {
  return tasks.find((task) => isTaskReady(task, tasks)) || null;
}

/**
 * Helper to calculate task statistics
 */
export function calculateTaskStats(tasks: any[]) {
  const stats = {
    total: tasks.length,
    byStatus: {} as Record<string, number>,
    byPriority: {} as Record<string, number>,
    subtasksTotal: 0,
    subtasksByStatus: {} as Record<string, number>,
    readyTasks: 0,
    blockedTasks: 0,
  };

  tasks.forEach((task) => {
    // Count main tasks
    stats.byStatus[task.status] = (stats.byStatus[task.status] || 0) + 1;
    stats.byPriority[task.priority] = (stats.byPriority[task.priority] || 0) + 1;

    // Count subtasks
    if (task.subtasks) {
      stats.subtasksTotal += task.subtasks.length;
      task.subtasks.forEach((subtask: any) => {
        stats.subtasksByStatus[subtask.status] = (stats.subtasksByStatus[subtask.status] || 0) + 1;
      });
    }

    // Count ready vs blocked
    if (isTaskReady(task, tasks)) {
      stats.readyTasks++;
    } else if (task.status === 'pending' && task.dependencies?.length > 0) {
      stats.blockedTasks++;
    }
  });

  return stats;
}
