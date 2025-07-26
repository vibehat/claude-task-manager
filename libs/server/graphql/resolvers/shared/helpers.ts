// Helper functions for GraphQL resolvers

// Helper function to categorize CLI commands
export function categorizeCommand(commandName: string): string {
   const taskCommands = [
      'list',
      'next',
      'show',
      'set-status',
      'add-task',
      'expand',
      'update-task',
      'update-subtask',
      'update',
   ];
   const analysisCommands = ['analyze-complexity', 'complexity-report'];
   const projectCommands = ['init', 'parse-prd', 'generate'];
   const configCommands = ['models'];
   const dependencyCommands = ['add-dependency', 'validate-dependencies', 'move'];

   if (taskCommands.includes(commandName)) return 'task';
   if (analysisCommands.includes(commandName)) return 'analysis';
   if (projectCommands.includes(commandName)) return 'project';
   if (configCommands.includes(commandName)) return 'configuration';
   if (dependencyCommands.includes(commandName)) return 'dependency';
   return 'other';
}

// Helper function to group operations by type
export function groupOperationsByType(operations: any[]): Record<string, number> {
   const grouped: Record<string, number> = {};
   for (const op of operations) {
      grouped[op.type] = (grouped[op.type] || 0) + 1;
   }
   return grouped;
}

// Helper function to group operations by source
export function groupOperationsBySource(operations: any[]): Record<string, number> {
   const grouped: Record<string, number> = {};
   for (const op of operations) {
      grouped[op.source] = (grouped[op.source] || 0) + 1;
   }
   return grouped;
}

// Helper function to calculate operation duration
export function calculateOperationDuration(operation: any): number {
   // This would need more detailed tracking in real implementation
   // For now, estimate based on type
   const typeDurations: Record<string, number> = {
      task_update: 2000,
      task_create: 1500,
      task_delete: 1000,
      status_change: 500,
      batch_update: 5000,
   };
   return typeDurations[operation.type] || 1000;
}

// Helper function to format operation data for display
export function formatOperationData(operation: any): any {
   if (!operation.data) return null;

   const formatted = { ...operation.data };

   // Add human-readable descriptions
   if (operation.type === 'status_change' && formatted.status) {
      formatted.description = `Changed status to ${formatted.status}`;
   } else if (operation.type === 'task_update' && formatted.changes) {
      const changeCount = Object.keys(formatted.changes).length;
      formatted.description = `Updated ${changeCount} field(s)`;
   } else if (operation.type === 'task_create') {
      formatted.description = 'Created new task';
   } else if (operation.type === 'task_delete') {
      formatted.description = 'Deleted task';
   }

   return formatted;
}

// Helper function to get related operations
export function getRelatedOperations(operation: any, allOperations: any[]): any[] {
   if (!operation.data?.taskId) return [];

   return allOperations
      .filter((op) => op.id !== operation.id && op.data?.taskId === operation.data.taskId)
      .slice(0, 5); // Limit to 5 related operations
}

// Helper function to get conflict severity
export function getConflictSeverity(conflict: any): 'low' | 'medium' | 'high' | 'critical' {
   const age = Date.now() - Math.min(conflict.operationA.timestamp, conflict.operationB.timestamp);
   const dayInMs = 24 * 60 * 60 * 1000;

   if (conflict.conflictType === 'version_conflict') return 'critical';
   if (age > dayInMs) return 'high';
   if (age > dayInMs / 4) return 'medium';
   return 'low';
}

// Helper function to get affected task from conflict
export function getConflictAffectedTask(conflict: any): string | null {
   return conflict.operationA.data?.taskId || conflict.operationB.data?.taskId || null;
}

// Helper function to calculate health score
export function calculateHealthScore(
   failureRate: number,
   unresolvedConflicts: number,
   stalledOperations: number,
   queueSize: number
): number {
   let score = 100;

   // Deduct for failure rate
   score -= failureRate;

   // Deduct for unresolved conflicts
   score -= Math.min(unresolvedConflicts * 2, 20);

   // Deduct for stalled operations
   score -= Math.min(stalledOperations * 5, 25);

   // Deduct for large queue size
   if (queueSize > 50) score -= Math.min((queueSize - 50) / 10, 15);

   return Math.max(0, Math.round(score));
}

// Helper function to generate health recommendations
export function generateHealthRecommendations(status: string, issues: string[]): string[] {
   const recommendations: string[] = [];

   if (status === 'critical') {
      recommendations.push('Immediate attention required');
      recommendations.push('Check sync manager logs');
      recommendations.push('Consider restarting sync manager');
   } else if (status === 'warning') {
      recommendations.push('Monitor sync operations closely');
      recommendations.push('Review recent failures');
      recommendations.push('Consider reducing sync frequency');
   } else if (status === 'degraded') {
      recommendations.push('Monitor system performance');
      recommendations.push('Check for resource constraints');
   }

   if (issues.some((issue) => issue.includes('failure rate'))) {
      recommendations.push('Review error logs for patterns');
      recommendations.push('Check network connectivity');
   }

   if (issues.some((issue) => issue.includes('conflicts'))) {
      recommendations.push('Review conflict resolution strategies');
      recommendations.push('Consider manual conflict resolution');
   }

   if (issues.some((issue) => issue.includes('queue'))) {
      recommendations.push('Consider increasing sync concurrency');
      recommendations.push('Review operation complexity');
   }

   return recommendations;
}

// Helper function to get command examples
export function getCommandExamples(commandName: string): string[] {
   const examples: Record<string, string[]> = {
      'list': [
         'task-master list',
         'task-master list --status=pending',
         'task-master list --priority=high',
      ],
      'show': ['task-master show --id=1', 'task-master show --id=2.1'],
      'set-status': [
         'task-master set-status --id=1 --status=done',
         'task-master set-status --id=2 --status=in-progress',
      ],
      'add-task': [
         'task-master add-task --prompt="New feature description"',
         'task-master add-task --prompt="Bug fix" --priority=high',
      ],
      'expand': ['task-master expand --id=1', 'task-master expand --id=2 --research'],
      'update-task': ['task-master update-task --id=1 --prompt="Updated requirements"'],
      'analyze-complexity': ['task-master analyze-complexity --research'],
      'models': ['task-master models --setup', 'task-master models --set-main claude-3-5-sonnet'],
   };
   return examples[commandName] || [];
}

// Helper function to check for circular dependencies
export async function checkCircularDependencies(
   taskId: number,
   newDependencies: number[],
   allTasks: any[]
): Promise<void> {
   const visited = new Set<number>();
   const recursionStack = new Set<number>();

   function hasCycle(currentTaskId: number): boolean {
      if (recursionStack.has(currentTaskId)) {
         return true; // Cycle detected
      }
      if (visited.has(currentTaskId)) {
         return false; // Already processed
      }

      visited.add(currentTaskId);
      recursionStack.add(currentTaskId);

      // Get dependencies for current task
      const currentTask = allTasks.find((t) => t.id === currentTaskId);
      const dependencies =
         currentTaskId === taskId ? newDependencies : currentTask?.dependencies || [];

      for (const depId of dependencies) {
         if (hasCycle(depId)) {
            return true;
         }
      }

      recursionStack.delete(currentTaskId);
      return false;
   }

   if (hasCycle(taskId)) {
      throw new Error('Circular dependency detected. This change would create a dependency loop.');
   }
}

// Helper function to transform tasks for GraphQL
export function transformTask(task: any) {
   return {
      ...task,
      dependencies: task.dependencies || [],
      subtasks: task.subtasks || [],
      createdAt: new Date(),
      updatedAt: new Date(),
   };
}

// Helper function to transform database tasks for GraphQL
export function transformTaskFromDB(dbTask: any) {
   return {
      id: dbTask.id,
      title: dbTask.title,
      description: dbTask.description,
      status: dbTask.status,
      priority: dbTask.priority,
      dependencies: dbTask.dependencies || [],
      details: dbTask.details,
      testStrategy: dbTask.testStrategy,
      complexity: dbTask.complexity,
      subtasks: dbTask.subtasks || [],
      createdAt: dbTask.createdAt || new Date(),
      updatedAt: dbTask.updatedAt || new Date(),
   };
}
