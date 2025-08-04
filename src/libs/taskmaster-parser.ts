/**
 * Frontend-driven TaskMaster CLI output parser
 * All parsing logic is in the frontend - backend just executes commands
 */

export interface TaskMasterTask {
  id: number;
  title: string;
  description: string;
  details: string;
  testStrategy: string;
  priority: 'high' | 'medium' | 'low';
  dependencies: number[];
  status: 'pending' | 'in-progress' | 'done' | 'deferred' | 'cancelled' | 'blocked';
  subtasks: TaskMasterSubtask[];
}

export interface TaskMasterSubtask {
  id: number;
  title: string;
  description: string;
  dependencies: string[];
  details: string;
  status: 'pending' | 'in-progress' | 'done' | 'deferred' | 'cancelled' | 'blocked';
  testStrategy: string;
}

export interface TaskMasterData {
  tasks: TaskMasterTask[];
  metadata?: {
    created: string;
    updated: string;
    description: string;
  };
}

/**
 * Parse the raw tasks.json content from 'cat' command
 */
export function parseTasksJson(rawOutput: string): TaskMasterData {
  try {
    const data = JSON.parse(rawOutput);
    const masterData = data.master || data;

    return {
      tasks: masterData.tasks || [],
      metadata: masterData.metadata,
    };
  } catch (error) {
    console.error('Failed to parse tasks JSON:', error);
    return { tasks: [] };
  }
}

/**
 * Parse 'list' command output to extract task information
 */
export function parseListOutput(rawOutput: string): {
  summary: {
    total: number;
    done: number;
    inProgress: number;
    pending: number;
    blocked: number;
  };
  nextTaskId?: number;
  taskLines: Array<{
    id: number;
    title: string;
    status: string;
    priority: string;
    dependencies: string;
  }>;
} {
  const lines = rawOutput.split('\n');
  const summary = {
    total: 0,
    done: 0,
    inProgress: 0,
    pending: 0,
    blocked: 0,
  };

  let nextTaskId: number | undefined;
  const taskLines: any[] = [];

  // Parse summary section
  const doneMatch = rawOutput.match(/Done:\s*(\d+)/);
  const inProgressMatch = rawOutput.match(/In Progress:\s*(\d+)/);
  const pendingMatch = rawOutput.match(/Pending:\s*(\d+)/);
  const blockedMatch = rawOutput.match(/Blocked:\s*(\d+)/);

  if (doneMatch) summary.done = parseInt(doneMatch[1]);
  if (inProgressMatch) summary.inProgress = parseInt(inProgressMatch[1]);
  if (pendingMatch) summary.pending = parseInt(pendingMatch[1]);
  if (blockedMatch) summary.blocked = parseInt(blockedMatch[1]);

  summary.total = summary.done + summary.inProgress + summary.pending + summary.blocked;

  // Parse next task
  const nextTaskMatch = rawOutput.match(/Next Task to Work On:\s*ID:\s*(\d+)/);
  if (nextTaskMatch) {
    nextTaskId = parseInt(nextTaskMatch[1]);
  }

  // Parse task table
  let inTable = false;
  for (const line of lines) {
    if (line.includes('│ ID │ Title')) {
      inTable = true;
      continue;
    }

    if (inTable && line.startsWith('│') && !line.includes('├─') && !line.includes('└─')) {
      const parts = line
        .split('│')
        .map((p) => p.trim())
        .filter((p) => p);

      if (parts.length >= 5 && /^\d+$/.test(parts[0])) {
        taskLines.push({
          id: parseInt(parts[0]),
          title: parts[1],
          status: parts[2],
          priority: parts[3],
          dependencies: parts[4],
        });
      }
    }
  }

  return { summary, nextTaskId, taskLines };
}

/**
 * Parse 'show' command output to extract task details
 */
export function parseShowOutput(rawOutput: string): TaskMasterTask | null {
  try {
    // First try to parse as JSON (some versions might output JSON)
    const data = JSON.parse(rawOutput);
    return data;
  } catch {
    // Parse formatted text output
    const idMatch = rawOutput.match(/Task #(\d+)/);
    const titleMatch = rawOutput.match(/Title:\s*(.+)/);
    const statusMatch = rawOutput.match(/Status:\s*(\S+)/);
    const priorityMatch = rawOutput.match(/Priority:\s*(\S+)/);
    const descMatch = rawOutput.match(/Description:\s*(.+)/);

    if (!idMatch || !titleMatch) return null;

    const task: TaskMasterTask = {
      id: parseInt(idMatch[1]),
      title: titleMatch[1].trim(),
      status: (statusMatch?.[1] || 'pending') as any,
      priority: (priorityMatch?.[1] || 'medium') as any,
      description: descMatch?.[1]?.trim() || '',
      details: '',
      testStrategy: '',
      dependencies: [],
      subtasks: [],
    };

    // Extract subtasks
    const subtaskSection = rawOutput.match(/Subtasks:[\s\S]+?(?=\n\n|\n$|$)/);
    if (subtaskSection) {
      const subtaskLines = subtaskSection[0].split('\n').slice(1);
      for (const line of subtaskLines) {
        const subtaskMatch = line.match(/(\d+)\.(\d+)\s+(.+?)\s+\[(\w+)\]/);
        if (subtaskMatch) {
          task.subtasks.push({
            id: parseInt(subtaskMatch[2]),
            title: subtaskMatch[3].trim(),
            status: subtaskMatch[4].toLowerCase() as any,
            description: '',
            dependencies: [],
            details: '',
            testStrategy: '',
          });
        }
      }
    }

    return task;
  }
}

/**
 * Parse 'next' command output to extract next task info
 */
export function parseNextOutput(rawOutput: string): {
  id: number;
  title: string;
  priority: string;
  dependencies: string;
} | null {
  const idMatch = rawOutput.match(/Next Task to Work On:\s*#?(\d+)/);
  const titleMatch = rawOutput.match(/(?:Next Task to Work On:\s*#?\d+\s*[-–]\s*)(.+)/);
  const priorityMatch = rawOutput.match(/Priority:\s*(\w+)/);
  const dependenciesMatch = rawOutput.match(/Dependencies:\s*(.+)/);

  if (!idMatch) return null;

  return {
    id: parseInt(idMatch[1]),
    title: titleMatch?.[1]?.trim() || '',
    priority: priorityMatch?.[1] || 'medium',
    dependencies: dependenciesMatch?.[1]?.trim() || 'None',
  };
}

/**
 * Extract exit code and success status from CLI output
 */
export function parseCommandResult(stdout: string, stderr: string, exitCode: number) {
  const success = exitCode === 0;
  const hasError = stderr.length > 0 || stdout.includes('Error:') || stdout.includes('Failed:');

  return {
    success: success && !hasError,
    hasOutput: stdout.length > 0,
    hasError,
    errorMessage: stderr || (hasError ? stdout : ''),
  };
}
