import type { Task, ContextItem, HandoffContext } from '../types/workingOnTypes';

/**
 * Build context for AI handoff
 */
export function buildTaskContext(
  task: Task,
  contextItems: ContextItem[],
  relatedTasks: Task[] = []
): HandoffContext {
  const relatedContext = contextItems.filter((item) => item.relatedTasks.includes(task.id));

  const contextSections = [
    `# Task: ${task.title}`,
    '',
    '## Context',
    `You are implementing ${task.title}. This is part of task ${task.id}.`,
    '',
    '## Requirements',
    task.description,
    '',
    `## Priority: ${task.priority.toUpperCase()}`,
    `## Status: ${task.status}`,
    `## Progress: ${task.progress}%`,
    `## Estimated Time: ${task.estimatedTime}`,
    '',
  ];

  // Add dependencies
  if (task.dependencies.length > 0) {
    contextSections.push('## Dependencies');
    contextSections.push(`This task depends on: ${task.dependencies.join(', ')}`);
    contextSections.push('');
  }

  // Add blocking information
  if (task.blockedTasks.length > 0) {
    contextSections.push('## Blocking Tasks');
    contextSections.push(`This task blocks: ${task.blockedTasks.join(', ')}`);
    contextSections.push('');
  }

  // Add related documentation
  const docItems = relatedContext.filter((item) => item.type === 'documentation');
  if (docItems.length > 0) {
    contextSections.push('## Related Documentation');
    docItems.forEach((doc) => {
      contextSections.push(`- ${doc.title}: ${doc.content}`);
    });
    contextSections.push('');
  }

  // Add notes and decisions
  const noteItems = relatedContext.filter(
    (item) => item.type === 'note' || item.type === 'decision'
  );
  if (noteItems.length > 0) {
    contextSections.push('## Important Notes & Decisions');
    noteItems.forEach((note) => {
      contextSections.push(`- ${note.title}: ${note.content}`);
    });
    contextSections.push('');
  }

  // Add research findings
  const researchItems = relatedContext.filter((item) => item.type === 'research');
  if (researchItems.length > 0) {
    contextSections.push('## Research Findings');
    researchItems.forEach((research) => {
      contextSections.push(`- ${research.title}: ${research.content}`);
    });
    contextSections.push('');
  }

  // Add tags
  if (task.tags.length > 0) {
    contextSections.push('## Tags');
    contextSections.push(task.tags.join(', '));
    contextSections.push('');
  }

  const generatedContext = contextSections.join('\n');
  const tokenCount = estimateTokenCount(generatedContext);

  return {
    taskId: task.id,
    contextQuality: task.contextQuality,
    generatedContext,
    tokenCount,
  };
}

/**
 * Estimate token count for context (rough approximation)
 */
function estimateTokenCount(text: string): number {
  // Rough estimation: ~4 characters per token
  return Math.ceil(text.length / 4);
}

/**
 * Generate context quality assessment
 */
export function assessContextQuality(
  task: Task,
  contextItems: ContextItem[]
): {
  score: number;
  details: {
    requirementsClear: boolean;
    filesIdentified: boolean;
    dependenciesMapped: boolean;
    testingStrategy: boolean;
    architecturePatterns: boolean;
  };
  suggestions: string[];
} {
  const relatedContext = contextItems.filter((item) => item.relatedTasks.includes(task.id));

  const details = {
    requirementsClear: task.description.length > 50,
    filesIdentified: relatedContext.some(
      (item) => item.content.includes('file') || item.content.includes('component')
    ),
    dependenciesMapped: task.dependencies.length > 0 || task.blockedTasks.length > 0,
    testingStrategy: relatedContext.some(
      (item) =>
        item.content.toLowerCase().includes('test') ||
        item.content.toLowerCase().includes('testing')
    ),
    architecturePatterns: relatedContext.some(
      (item) =>
        item.content.toLowerCase().includes('pattern') ||
        item.content.toLowerCase().includes('architecture')
    ),
  };

  const score = Object.values(details).filter(Boolean).length;

  const suggestions: string[] = [];
  if (!details.requirementsClear) {
    suggestions.push('Add more detailed requirements and acceptance criteria');
  }
  if (!details.filesIdentified) {
    suggestions.push('Identify related files and components to modify');
  }
  if (!details.dependenciesMapped) {
    suggestions.push('Map task dependencies and relationships');
  }
  if (!details.testingStrategy) {
    suggestions.push('Define testing strategy and test cases');
  }
  if (!details.architecturePatterns) {
    suggestions.push('Clarify architecture patterns and design decisions');
  }

  return { score, details, suggestions };
}

/**
 * Format context for clipboard copying
 */
export function formatContextForClipboard(context: HandoffContext): string {
  const header = [
    '# AI Task Context',
    `Task ID: ${context.taskId}`,
    `Context Quality: ${context.contextQuality}/5 stars`,
    `Token Count: ~${context.tokenCount}`,
    '',
    '---',
    '',
  ].join('\n');

  return header + context.generatedContext;
}

/**
 * Format context for file saving
 */
export function formatContextForFile(
  context: HandoffContext,
  task: Task
): { filename: string; content: string } {
  const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
  const filename = `.claude-context-${task.id}-${timestamp}.md`;

  const content = [
    `# Claude Context - Task ${task.id}`,
    '',
    `**Generated:** ${new Date().toLocaleString()}`,
    `**Task:** ${task.title}`,
    `**Priority:** ${task.priority}`,
    `**Status:** ${task.status}`,
    `**Progress:** ${task.progress}%`,
    '',
    '---',
    '',
    context.generatedContext,
    '',
    '---',
    '',
    '## Handoff Notes',
    '- Review requirements carefully',
    '- Check existing patterns in codebase',
    '- Run tests after implementation',
    '- Update progress in Task Master',
    '',
  ].join('\n');

  return { filename, content };
}

/**
 * Generate command suggestions based on context
 */
export function generateContextualCommands(
  task: Task,
  recentActivities: string[] = []
): Array<{ command: string; description: string; confidence: number }> {
  const commands = [];

  // Status-based suggestions
  if (task.status === 'pending') {
    commands.push({
      command: `task-master set-status --id=${task.id} --status=in-progress`,
      description: 'Start working on this task',
      confidence: 0.9,
    });
  } else if (task.status === 'in-progress' && task.progress >= 100) {
    commands.push({
      command: `task-master set-status --id=${task.id} --status=done`,
      description: 'Mark this task as complete',
      confidence: 0.95,
    });
  }

  // Progress-based suggestions
  if (task.progress === 0) {
    commands.push({
      command: `task-master expand --id=${task.id}`,
      description: 'Break down this task into subtasks',
      confidence: 0.85,
    });
  }

  // Context-based suggestions
  if (task.contextQuality < 3) {
    commands.push({
      command: `task-master research --prompt="${task.title} implementation approach"`,
      description: 'Research implementation approach',
      confidence: 0.8,
    });

    commands.push({
      command: `task-master update-task --id=${task.id} --prompt="Added context and requirements"`,
      description: 'Add more context to this task',
      confidence: 0.75,
    });
  }

  // Dependency-based suggestions
  if (task.blockedTasks.length > 0) {
    commands.push({
      command: `task-master list --status=blocked`,
      description: 'View all blocked tasks',
      confidence: 0.7,
    });
  }

  return commands.sort((a, b) => b.confidence - a.confidence);
}

/**
 * Build comprehensive project context
 */
export function buildProjectContext(allTasks: Task[], contextItems: ContextItem[]): string {
  const sections = [
    '# Project Context Overview',
    '',
    `## Task Summary`,
    `Total tasks: ${allTasks.length}`,
    `Active tasks: ${allTasks.filter((t) => t.status === 'in-progress').length}`,
    `Blocked tasks: ${allTasks.filter((t) => t.status === 'blocked').length}`,
    `Completed tasks: ${allTasks.filter((t) => t.status === 'done').length}`,
    '',
    '## Task Hierarchy',
    ...buildTaskHierarchy(allTasks),
    '',
    '## Key Documentation',
    ...contextItems
      .filter((item) => item.type === 'documentation')
      .slice(0, 5)
      .map((item) => `- ${item.title}: ${item.content.slice(0, 100)}...`),
    '',
    '## Recent Decisions',
    ...contextItems
      .filter((item) => item.type === 'decision')
      .slice(0, 3)
      .map((item) => `- ${item.title}: ${item.content}`),
  ];

  return sections.join('\n');
}

/**
 * Build task hierarchy visualization
 */
function buildTaskHierarchy(tasks: Task[]): string[] {
  const hierarchy: string[] = [];

  // Group tasks by dependencies to show hierarchy
  const rootTasks = tasks.filter((task) => task.dependencies.length === 0);
  const dependentTasks = tasks.filter((task) => task.dependencies.length > 0);

  hierarchy.push('### Root Tasks');
  rootTasks.forEach((task) => {
    hierarchy.push(`- ${task.id}: ${task.title} (${task.status})`);

    // Find tasks that depend on this one
    const children = dependentTasks.filter((dt) => dt.dependencies.includes(task.id));
    children.forEach((child) => {
      hierarchy.push(`  - ${child.id}: ${child.title} (${child.status})`);
    });
  });

  return hierarchy;
}
