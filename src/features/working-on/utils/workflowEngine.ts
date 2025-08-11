import type {
  ProjectState,
  SmartWorkflowSuggestion,
  WorkflowAction,
  WorkflowTrigger,
  WorkingOnTask,
  TaskQueueItem,
} from '../types';

/**
 * Smart workflow engine that analyzes project state and generates contextual suggestions
 */
export class WorkflowEngine {
  private readonly workflowTemplates: Map<string, SmartWorkflowSuggestion> = new Map();

  constructor() {
    this.initializeWorkflowTemplates();
  }

  /**
   * Generate smart workflow suggestions based on current project state
   */
  generateSuggestions(projectState: ProjectState): SmartWorkflowSuggestion[] {
    const suggestions: SmartWorkflowSuggestion[] = [];

    // Analyze each workflow template against current state
    for (const [, template] of this.workflowTemplates) {
      const score = this.calculateRelevanceScore(template, projectState);
      if (score > 0.5) {
        // Only suggest if relevance score > 50%
        suggestions.push({
          ...template,
          reasoning: this.generateReasoning(template, projectState, score),
        });
      }
    }

    // Sort by relevance score (highest first)
    return suggestions
      .sort(
        (a, b) =>
          this.calculateRelevanceScore(b, projectState) -
          this.calculateRelevanceScore(a, projectState)
      )
      .slice(0, 3); // Return top 3 suggestions
  }

  /**
   * Calculate relevance score for a workflow template based on project state
   */
  private calculateRelevanceScore(
    template: SmartWorkflowSuggestion,
    projectState: ProjectState
  ): number {
    let score = 0;
    let totalWeight = 0;

    for (const trigger of template.triggers) {
      const triggerScore = this.evaluateTrigger(trigger, projectState);
      score += triggerScore * trigger.weight;
      totalWeight += trigger.weight;
    }

    return totalWeight > 0 ? score / totalWeight : 0;
  }

  /**
   * Evaluate individual trigger against project state
   */
  private evaluateTrigger(trigger: WorkflowTrigger, projectState: ProjectState): number {
    switch (trigger.type) {
      case 'project-state':
        return this.evaluateProjectStateTrigger(trigger, projectState);
      case 'task-status':
        return this.evaluateTaskStatusTrigger(trigger, projectState);
      case 'git-status':
        return this.evaluateGitStatusTrigger(trigger, projectState);
      case 'file-changes':
        return this.evaluateFileChangesTrigger(trigger, projectState);
      case 'time-context':
        return this.evaluateTimeContextTrigger(trigger);
      default:
        return 0;
    }
  }

  private evaluateProjectStateTrigger(
    trigger: WorkflowTrigger,
    projectState: ProjectState
  ): number {
    switch (trigger.condition) {
      case 'phase-equals':
        return projectState.projectPhase === trigger.value ? 1 : 0;
      case 'has-prd':
        return projectState.availableResources.hasPRD === trigger.value ? 1 : 0;
      case 'has-taskmaster':
        return projectState.availableResources.hasTaskMaster === trigger.value ? 1 : 0;
      case 'queue-length-gt':
        return projectState.taskQueue.length > trigger.value ? 1 : 0;
      default:
        return 0;
    }
  }

  private evaluateTaskStatusTrigger(trigger: WorkflowTrigger, projectState: ProjectState): number {
    if (!projectState.currentTask) return 0;

    switch (trigger.condition) {
      case 'status-equals':
        return projectState.currentTask.status === trigger.value ? 1 : 0;
      case 'progress-gt':
        return projectState.currentTask.progress > trigger.value ? 1 : 0;
      case 'has-subtasks':
        return (projectState.currentTask.subtasks?.length || 0) > 0 ? 1 : 0;
      default:
        return 0;
    }
  }

  private evaluateGitStatusTrigger(trigger: WorkflowTrigger, projectState: ProjectState): number {
    if (!projectState.gitStatus) return 0;

    switch (trigger.condition) {
      case 'uncommitted-files-gt':
        return projectState.gitStatus.uncommittedFiles > trigger.value ? 1 : 0;
      case 'branch-contains':
        return projectState.gitStatus.branch.includes(trigger.value) ? 1 : 0;
      default:
        return 0;
    }
  }

  private evaluateFileChangesTrigger(trigger: WorkflowTrigger, projectState: ProjectState): number {
    if (!projectState.recentActivity?.filesChanged) return 0;

    switch (trigger.condition) {
      case 'files-changed-gt':
        return projectState.recentActivity.filesChanged.length > trigger.value ? 1 : 0;
      case 'contains-file-type':
        return projectState.recentActivity.filesChanged.some((file) => file.endsWith(trigger.value))
          ? 1
          : 0;
      default:
        return 0;
    }
  }

  private evaluateTimeContextTrigger(trigger: WorkflowTrigger): number {
    const hour = new Date().getHours();
    const timeContext = hour < 12 ? 'morning' : hour < 17 ? 'afternoon' : 'evening';
    return timeContext === trigger.value ? 1 : 0;
  }

  /**
   * Generate human-readable reasoning for why a workflow is suggested
   */
  private generateReasoning(
    template: SmartWorkflowSuggestion,
    projectState: ProjectState,
    score: number
  ): string {
    const reasons: string[] = [];
    const relevantTriggers = template.triggers.filter(
      (trigger) => this.evaluateTrigger(trigger, projectState) > 0.5
    );

    for (const trigger of relevantTriggers) {
      switch (trigger.type) {
        case 'project-state':
          if (trigger.condition === 'phase-equals') {
            reasons.push(`Project is in ${projectState.projectPhase} phase`);
          }
          break;
        case 'task-status':
          if (projectState.currentTask) {
            reasons.push(`Current task is ${projectState.currentTask.status}`);
          }
          break;
        case 'git-status':
          if (projectState.gitStatus?.uncommittedFiles) {
            reasons.push(`You have ${projectState.gitStatus.uncommittedFiles} uncommitted files`);
          }
          break;
      }
    }

    const confidence = Math.round(score * 100);
    return reasons.length > 0
      ? `${reasons.join(', ')} (${confidence}% confidence)`
      : `Suggested based on current project context (${confidence}% confidence)`;
  }

  /**
   * Initialize predefined workflow templates
   */
  private initializeWorkflowTemplates(): void {
    // Smart Project Analysis Workflow
    this.workflowTemplates.set('smart-project-analysis', {
      id: 'smart-project-analysis',
      title: 'Smart Project Analysis',
      description:
        'Execute an intelligent workflow based on current project state and recent commands',
      reasoning: '',
      complexity: 'medium',
      category: 'project-management',
      estimatedTotalTime: '15-30m',
      triggers: [
        {
          type: 'project-state',
          condition: 'phase-equals',
          value: 'development',
          weight: 0.6,
        },
        {
          type: 'git-status',
          condition: 'uncommitted-files-gt',
          value: 0,
          weight: 0.4,
        },
      ],
      actions: [
        {
          id: 'analyze-progress',
          action: 'Analyze Current Progress',
          description: 'Review task completion status and identify blockers',
          type: 'workflow',
          priority: 'high',
          category: 'smart',
          estimatedTime: '5m',
          completed: false,
          metadata: {
            workflowType: 'analysis',
            command: 'task-master next && task-master complexity-report',
          },
        },
        {
          id: 'review-changes',
          action: 'Review Recent Changes',
          description: 'Examine git diff and assess code quality',
          type: 'review',
          priority: 'high',
          category: 'smart',
          estimatedTime: '10m',
          completed: false,
          metadata: {
            workflowType: 'review',
            command: 'git diff --stat && git status',
          },
        },
        {
          id: 'suggest-next-steps',
          action: 'Generate Next Steps',
          description: 'AI-powered suggestion of optimal next actions',
          type: 'planning',
          priority: 'medium',
          category: 'smart',
          estimatedTime: '10m',
          completed: false,
          metadata: {
            workflowType: 'planning',
          },
        },
      ],
    });

    // Plan New Feature Workflow
    this.workflowTemplates.set('plan-new-feature', {
      id: 'plan-new-feature',
      title: 'Plan New Feature',
      description: 'Create a new feature from PRD requirements with proper task breakdown',
      reasoning: '',
      complexity: 'high',
      category: 'planning',
      estimatedTotalTime: '45m-1h',
      triggers: [
        {
          type: 'project-state',
          condition: 'has-prd',
          value: true,
          weight: 0.8,
        },
        {
          type: 'project-state',
          condition: 'queue-length-gt',
          value: 0,
          weight: 0.2,
        },
      ],
      actions: [
        {
          id: 'parse-prd',
          action: 'Parse PRD Requirements',
          description: 'Extract and analyze requirements from PRD documents',
          type: 'prd',
          priority: 'high',
          category: 'smart',
          estimatedTime: '15m',
          completed: false,
          metadata: {
            workflowType: 'prd-analysis',
            command: 'task-master parse-prd',
          },
        },
        {
          id: 'generate-tasks',
          action: 'Generate Feature Tasks',
          description: 'Break down feature into implementable tasks with dependencies',
          type: 'planning',
          priority: 'high',
          category: 'smart',
          estimatedTime: '20m',
          completed: false,
          metadata: {
            workflowType: 'task-generation',
            command: 'task-master expand --all --research',
          },
        },
        {
          id: 'create-architecture',
          action: 'Design Feature Architecture',
          description: 'Plan component structure and data flow',
          type: 'planning',
          priority: 'medium',
          category: 'smart',
          estimatedTime: '15m',
          completed: false,
          metadata: {
            workflowType: 'architecture-planning',
          },
        },
      ],
    });

    // Research Workflow
    this.workflowTemplates.set('research-workflow', {
      id: 'research-workflow',
      title: 'Research Current Task',
      description: 'Conduct comprehensive research on the current task and related technologies',
      reasoning: '',
      complexity: 'low',
      category: 'research',
      estimatedTotalTime: '20-30m',
      triggers: [
        {
          type: 'task-status',
          condition: 'status-equals',
          value: 'in-progress',
          weight: 0.6,
        },
        {
          type: 'project-state',
          condition: 'phase-equals',
          value: 'development',
          weight: 0.4,
        },
      ],
      actions: [
        {
          id: 'research-task',
          action: 'Research Task Requirements',
          description: 'Deep dive into task requirements and best practices',
          type: 'research',
          priority: 'high',
          category: 'smart',
          estimatedTime: '15m',
          completed: false,
          metadata: {
            workflowType: 'task-research',
            command: 'task-master research --task-id=current',
          },
        },
        {
          id: 'find-examples',
          action: 'Find Implementation Examples',
          description: 'Search for similar implementations and code patterns',
          type: 'research',
          priority: 'medium',
          category: 'smart',
          estimatedTime: '10m',
          completed: false,
          metadata: {
            workflowType: 'example-search',
          },
        },
      ],
    });

    // Create PRD Workflow
    this.workflowTemplates.set('create-prd', {
      id: 'create-prd',
      title: 'Create Project PRD',
      description: 'Generate a comprehensive Product Requirements Document for the project',
      reasoning: '',
      complexity: 'high',
      category: 'project-management',
      estimatedTotalTime: '1-2h',
      triggers: [
        {
          type: 'project-state',
          condition: 'has-prd',
          value: false,
          weight: 0.9,
        },
        {
          type: 'project-state',
          condition: 'phase-equals',
          value: 'planning',
          weight: 0.1,
        },
      ],
      actions: [
        {
          id: 'analyze-requirements',
          action: 'Analyze Project Requirements',
          description: 'Gather and document all project requirements and constraints',
          type: 'planning',
          priority: 'high',
          category: 'smart',
          estimatedTime: '30m',
          completed: false,
          metadata: {
            workflowType: 'requirements-analysis',
          },
        },
        {
          id: 'create-prd-document',
          action: 'Generate PRD Document',
          description: 'Create comprehensive PRD with user stories and acceptance criteria',
          type: 'prd',
          priority: 'high',
          category: 'smart',
          estimatedTime: '45m',
          completed: false,
          metadata: {
            workflowType: 'prd-generation',
            file: 'docs/prd/main.md',
          },
        },
        {
          id: 'review-prd',
          action: 'Review and Validate PRD',
          description: 'Ensure PRD covers all requirements and is actionable',
          type: 'review',
          priority: 'medium',
          category: 'smart',
          estimatedTime: '15m',
          completed: false,
          metadata: {
            workflowType: 'prd-validation',
          },
        },
      ],
    });
  }

  /**
   * Get available workflow categories
   */
  getWorkflowCategories(): string[] {
    return Array.from(new Set(Array.from(this.workflowTemplates.values()).map((t) => t.category)));
  }

  /**
   * Get workflows by category
   */
  getWorkflowsByCategory(category: string): SmartWorkflowSuggestion[] {
    return Array.from(this.workflowTemplates.values()).filter(
      (template) => template.category === category
    );
  }
}

// Export singleton instance
export const workflowEngine = new WorkflowEngine();
