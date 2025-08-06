import type { CommandSuggestion } from '../types/workingOnTypes';

/**
 * Parse natural language input and suggest Task Master commands
 */
export function parseNaturalLanguageToCommand(
  input: string,
  currentContext?: { taskId?: string; sessionId?: string }
): CommandSuggestion[] {
  const lowerInput = input.toLowerCase().trim();
  const suggestions: CommandSuggestion[] = [];

  // Direct command patterns
  const commandPatterns = [
    // Task status changes
    {
      patterns: ['mark complete', 'mark done', 'complete this', 'this is done', 'finished'],
      command: currentContext?.taskId
        ? `task-master set-status --id=${currentContext.taskId} --status=done`
        : 'task-master set-status --id=<task-id> --status=done',
      description: 'Mark task as complete',
      confidence: 0.95,
    },
    {
      patterns: ['start this', 'begin this', 'work on this', 'start working'],
      command: currentContext?.taskId
        ? `task-master set-status --id=${currentContext.taskId} --status=in-progress`
        : 'task-master set-status --id=<task-id> --status=in-progress',
      description: 'Start working on task',
      confidence: 0.9,
    },

    // Task discovery
    {
      patterns: ['what next', 'next task', 'what should i work on', 'what to do next'],
      command: 'task-master next',
      description: 'Get the next available task to work on',
      confidence: 0.95,
    },
    {
      patterns: ['list tasks', 'show tasks', 'all tasks', 'view tasks'],
      command: 'task-master list',
      description: 'Show all tasks',
      confidence: 0.9,
    },
    {
      patterns: ['blocked tasks', 'show blocked', 'what is blocked'],
      command: 'task-master list --status=blocked',
      description: 'Show all blocked tasks',
      confidence: 0.85,
    },

    // Task expansion
    {
      patterns: ['break down', 'expand this', 'split this', 'subtasks', 'break this down'],
      command: currentContext?.taskId
        ? `task-master expand --id=${currentContext.taskId}`
        : 'task-master expand --id=<task-id>',
      description: 'Break down task into subtasks',
      confidence: 0.9,
    },
    {
      patterns: ['expand all', 'break down all', 'expand everything'],
      command: 'task-master expand --all',
      description: 'Expand all eligible tasks into subtasks',
      confidence: 0.85,
    },

    // Task information
    {
      patterns: ['show details', 'task details', 'more info', 'show this task'],
      command: currentContext?.taskId
        ? `task-master show --id=${currentContext.taskId}`
        : 'task-master show --id=<task-id>',
      description: 'View detailed task information',
      confidence: 0.85,
    },

    // Research and context
    {
      patterns: ['research this', 'find info', 'look up', 'investigate'],
      command: currentContext?.taskId
        ? `task-master research --prompt="${lowerInput}"`
        : 'task-master research --prompt="<search-terms>"',
      description: 'Research task-related information',
      confidence: 0.8,
    },

    // Task updates
    {
      patterns: ['add note', 'update this', 'add context', 'note that'],
      command: currentContext?.taskId
        ? `task-master update-subtask --id=${currentContext.taskId} --prompt="${input}"`
        : 'task-master update-task --id=<task-id> --prompt="<update-text>"',
      description: 'Add notes or context to task',
      confidence: 0.75,
    },

    // Task creation
    {
      patterns: ['add task', 'new task', 'create task'],
      command: `task-master add-task --prompt="${input}"`,
      description: 'Create a new task',
      confidence: 0.8,
    },
  ];

  // Find matching patterns
  commandPatterns.forEach((pattern) => {
    const matches = pattern.patterns.some((p) => lowerInput.includes(p));
    if (matches) {
      suggestions.push({
        command: pattern.command,
        description: pattern.description,
        confidence: pattern.confidence,
        contextRelevant: !!currentContext && pattern.command.includes(currentContext.taskId || ''),
      });
    }
  });

  // Fuzzy matching for partial commands
  if (suggestions.length === 0) {
    const fuzzyMatches = getFuzzyMatches(lowerInput, currentContext);
    suggestions.push(...fuzzyMatches);
  }

  // Sort by confidence and context relevance
  return suggestions
    .sort((a, b) => {
      if (a.contextRelevant !== b.contextRelevant) {
        return a.contextRelevant ? -1 : 1;
      }
      return b.confidence - a.confidence;
    })
    .slice(0, 5); // Limit to top 5 suggestions
}

/**
 * Get fuzzy matches for partial or unclear input
 */
function getFuzzyMatches(
  input: string,
  currentContext?: { taskId?: string; sessionId?: string }
): CommandSuggestion[] {
  const fuzzyMatches: CommandSuggestion[] = [];

  // Keywords that might indicate intent
  const keywords = {
    status: ['done', 'complete', 'finish', 'start', 'begin', 'stop'],
    list: ['show', 'list', 'view', 'display', 'see'],
    expand: ['break', 'split', 'divide', 'expand', 'detail'],
    research: ['find', 'search', 'look', 'research', 'investigate'],
    update: ['add', 'update', 'note', 'comment', 'modify'],
    next: ['next', 'what', 'should', 'work', 'do'],
  };

  Object.entries(keywords).forEach(([category, words]) => {
    const matches = words.filter((word) => input.includes(word));
    if (matches.length > 0) {
      switch (category) {
        case 'status':
          fuzzyMatches.push({
            command: 'task-master set-status --id=<task-id> --status=<status>',
            description: 'Change task status',
            confidence: 0.6,
            contextRelevant: !!currentContext,
          });
          break;
        case 'list':
          fuzzyMatches.push({
            command: 'task-master list',
            description: 'Show tasks',
            confidence: 0.7,
            contextRelevant: false,
          });
          break;
        case 'expand':
          fuzzyMatches.push({
            command: 'task-master expand --id=<task-id>',
            description: 'Expand task into subtasks',
            confidence: 0.65,
            contextRelevant: !!currentContext,
          });
          break;
        case 'research':
          fuzzyMatches.push({
            command: 'task-master research --prompt="<search-terms>"',
            description: 'Research information',
            confidence: 0.7,
            contextRelevant: true,
          });
          break;
        case 'update':
          fuzzyMatches.push({
            command: 'task-master update-task --id=<task-id> --prompt="<update>"',
            description: 'Update task with new information',
            confidence: 0.65,
            contextRelevant: !!currentContext,
          });
          break;
        case 'next':
          fuzzyMatches.push({
            command: 'task-master next',
            description: 'Get next available task',
            confidence: 0.8,
            contextRelevant: false,
          });
          break;
      }
    }
  });

  return fuzzyMatches;
}

/**
 * Extract task ID from natural language input
 */
export function extractTaskId(input: string): string | null {
  // Look for patterns like "task 28.2", "28.2", "#28.2"
  const taskIdPattern = /(?:task\s*)?(?:#)?(\d+(?:\.\d+)?)/i;
  const match = input.match(taskIdPattern);
  return match ? match[1] : null;
}

/**
 * Extract status from natural language input
 */
export function extractStatus(input: string): string | null {
  const statusKeywords = {
    'done': ['done', 'complete', 'completed', 'finished', 'finish'],
    'in-progress': ['in progress', 'working on', 'started', 'active'],
    'blocked': ['blocked', 'stuck', 'waiting', 'held up'],
    'pending': ['pending', 'todo', 'ready', 'queued'],
    'cancelled': ['cancelled', 'canceled', 'skip', 'skipped'],
  };

  const lowerInput = input.toLowerCase();

  for (const [status, keywords] of Object.entries(statusKeywords)) {
    if (keywords.some((keyword) => lowerInput.includes(keyword))) {
      return status;
    }
  }

  return null;
}

/**
 * Generate command examples for learning
 */
export function generateCommandExamples(): Array<{
  naturalLanguage: string;
  command: string;
  description: string;
}> {
  return [
    {
      naturalLanguage: 'what should I work on next?',
      command: 'task-master next',
      description: 'Find the next available task based on priorities and dependencies',
    },
    {
      naturalLanguage: 'mark task 28.2 as complete',
      command: 'task-master set-status --id=28.2 --status=done',
      description: 'Update the status of a specific task',
    },
    {
      naturalLanguage: 'break down this task further',
      command: 'task-master expand --id=28.2',
      description: 'Create subtasks for more detailed implementation',
    },
    {
      naturalLanguage: 'show me all blocked tasks',
      command: 'task-master list --status=blocked',
      description: 'Filter tasks by their current status',
    },
    {
      naturalLanguage: "I'm stuck on JWT security",
      command: 'task-master research --prompt="JWT security best practices"',
      description: 'Research specific topics related to your task',
    },
    {
      naturalLanguage: 'add a note that I need to test this',
      command: 'task-master update-subtask --id=28.2 --prompt="Need to add comprehensive tests"',
      description: 'Add implementation notes and progress updates',
    },
  ];
}

/**
 * Validate Task Master command syntax
 */
export function validateCommand(command: string): {
  valid: boolean;
  errors: string[];
  suggestions: string[];
} {
  const errors: string[] = [];
  const suggestions: string[] = [];

  if (!command.startsWith('task-master')) {
    errors.push('Commands must start with "task-master"');
    suggestions.push('Add "task-master" prefix to your command');
    return { valid: false, errors, suggestions };
  }

  // Basic command structure validation
  const parts = command.split(' ');
  const subcommand = parts[1];

  const validSubcommands = [
    'next',
    'list',
    'show',
    'set-status',
    'add-task',
    'expand',
    'update-task',
    'update-subtask',
    'research',
    'generate',
  ];

  if (!subcommand || !validSubcommands.includes(subcommand)) {
    errors.push(`Invalid subcommand: ${subcommand || 'missing'}`);
    suggestions.push(`Valid subcommands: ${validSubcommands.join(', ')}`);
  }

  // Check for required parameters
  if (subcommand === 'show' || subcommand === 'set-status') {
    if (!command.includes('--id=')) {
      errors.push('Missing required --id parameter');
      suggestions.push('Add --id=<task-id> to specify which task');
    }
  }

  if (subcommand === 'set-status' && !command.includes('--status=')) {
    errors.push('Missing required --status parameter');
    suggestions.push('Add --status=<status> to specify new status');
  }

  return {
    valid: errors.length === 0,
    errors,
    suggestions,
  };
}

/**
 * Format command for execution
 */
export function formatCommandForExecution(command: string, context?: { taskId?: string }): string {
  let formattedCommand = command;

  // Replace placeholders with actual values
  if (context?.taskId) {
    formattedCommand = formattedCommand.replace(/<task-id>/g, context.taskId);
  }

  // Add research context if applicable
  if (formattedCommand.includes('<search-terms>') && context?.taskId) {
    formattedCommand = formattedCommand.replace(
      '<search-terms>',
      `task ${context.taskId} implementation`
    );
  }

  return formattedCommand;
}
