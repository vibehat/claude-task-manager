import type {
  WorkflowAction,
  ActionExecutor,
  ActionExecutionContext,
  ActionExecutionResult,
  WorkflowActionStatus,
  ActionExecutionError,
} from '../types/actions';

export class ActionExecutionEngine {
  private executors = new Map<string, ActionExecutor>();
  private runningActions = new Map<string, AbortController>();
  private executionHistory: ActionExecutionResult[] = [];

  constructor() {
    this.setupDefaultExecutors();
  }

  private setupDefaultExecutors() {
    // Executors will be registered here
    // This will be populated when we create the individual executors
  }

  /**
   * Register an action executor for a specific action type
   */
  registerExecutor(actionType: string, executor: ActionExecutor): void {
    this.executors.set(actionType, executor);
    console.log(`Registered executor for action type: ${actionType}`);
  }

  /**
   * Get the appropriate executor for an action
   */
  private getExecutor(action: WorkflowAction): ActionExecutor | null {
    const executor = this.executors.get(action.type);
    if (!executor) {
      console.warn(`No executor found for action type: ${action.type}`);
      return null;
    }

    if (!executor.canExecute(action)) {
      console.warn(`Executor cannot handle action: ${action.id}`);
      return null;
    }

    return executor;
  }

  /**
   * Validate an action before execution
   */
  validateAction(action: WorkflowAction): boolean {
    const executor = this.getExecutor(action);
    if (!executor) {
      return false;
    }

    try {
      return executor.validate(action.parameters);
    } catch (error) {
      console.error(`Validation failed for action ${action.id}:`, error);
      return false;
    }
  }

  /**
   * Execute a single action
   */
  async executeAction(
    action: WorkflowAction,
    context: ActionExecutionContext,
    onStatusChange?: (status: WorkflowActionStatus, result?: any) => void
  ): Promise<ActionExecutionResult> {
    const startTime = new Date().toISOString();

    // Check if action is already running
    if (this.runningActions.has(action.id)) {
      throw new Error(`Action ${action.id} is already running`);
    }

    // Validate action
    if (!this.validateAction(action)) {
      const error: ActionExecutionError = {
        code: 'VALIDATION_FAILED',
        message: 'Action validation failed',
      };
      return this.createErrorResult(action.id, startTime, error);
    }

    const executor = this.getExecutor(action);
    if (!executor) {
      const error: ActionExecutionError = {
        code: 'NO_EXECUTOR',
        message: `No executor available for action type: ${action.type}`,
      };
      return this.createErrorResult(action.id, startTime, error);
    }

    // Create abort controller for cancellation
    const abortController = new AbortController();
    this.runningActions.set(action.id, abortController);

    try {
      // Notify status change to running
      onStatusChange?.('running');

      // Execute the action
      const result = await executor.execute(action, context);

      // Store in history
      this.executionHistory.push(result);

      // Notify status change based on result
      onStatusChange?.(result.status, result.result);

      return result;
    } catch (error) {
      const executionError: ActionExecutionError = {
        code: 'EXECUTION_FAILED',
        message: error instanceof Error ? error.message : 'Unknown execution error',
        details: error,
        stack: error instanceof Error ? error.stack : undefined,
      };

      const errorResult = this.createErrorResult(action.id, startTime, executionError);

      // Store in history
      this.executionHistory.push(errorResult);

      // Notify status change to failed
      onStatusChange?.('failed', executionError);

      return errorResult;
    } finally {
      // Clean up running action
      this.runningActions.delete(action.id);
    }
  }

  /**
   * Execute multiple actions in sequence
   */
  async executeActionsSequential(
    actions: WorkflowAction[],
    context: ActionExecutionContext,
    onActionComplete?: (result: ActionExecutionResult) => void,
    onStatusChange?: (actionId: string, status: WorkflowActionStatus) => void
  ): Promise<ActionExecutionResult[]> {
    const results: ActionExecutionResult[] = [];

    for (const action of actions) {
      try {
        const result = await this.executeAction(action, context, (status, resultData) =>
          onStatusChange?.(action.id, status)
        );

        results.push(result);
        onActionComplete?.(result);

        // Stop execution if action failed and it's marked as critical
        if (result.status === 'failed' && action.priority === 'high') {
          console.warn(`Critical action ${action.id} failed, stopping execution chain`);
          break;
        }
      } catch (error) {
        console.error(`Failed to execute action ${action.id}:`, error);

        const errorResult = this.createErrorResult(action.id, new Date().toISOString(), {
          code: 'EXECUTION_FAILED',
          message: error instanceof Error ? error.message : 'Unknown error',
        });

        results.push(errorResult);
        onActionComplete?.(errorResult);

        // Stop on critical failure
        if (action.priority === 'high') {
          break;
        }
      }
    }

    return results;
  }

  /**
   * Execute multiple actions in parallel
   */
  async executeActionsParallel(
    actions: WorkflowAction[],
    context: ActionExecutionContext,
    onActionComplete?: (result: ActionExecutionResult) => void,
    onStatusChange?: (actionId: string, status: WorkflowActionStatus) => void
  ): Promise<ActionExecutionResult[]> {
    const promises = actions.map((action) =>
      this.executeAction(action, context, (status, resultData) =>
        onStatusChange?.(action.id, status)
      ).then((result) => {
        onActionComplete?.(result);
        return result;
      })
    );

    return Promise.all(promises);
  }

  /**
   * Cancel a running action
   */
  cancelAction(actionId: string): boolean {
    const abortController = this.runningActions.get(actionId);
    if (abortController) {
      abortController.abort();
      this.runningActions.delete(actionId);
      console.log(`Cancelled action: ${actionId}`);
      return true;
    }
    return false;
  }

  /**
   * Cancel all running actions
   */
  cancelAllActions(): void {
    for (const [actionId, abortController] of this.runningActions) {
      abortController.abort();
      console.log(`Cancelled action: ${actionId}`);
    }
    this.runningActions.clear();
  }

  /**
   * Get currently running actions
   */
  getRunningActions(): string[] {
    return Array.from(this.runningActions.keys());
  }

  /**
   * Check if an action is currently running
   */
  isActionRunning(actionId: string): boolean {
    return this.runningActions.has(actionId);
  }

  /**
   * Get execution history
   */
  getExecutionHistory(limit?: number): ActionExecutionResult[] {
    const history = [...this.executionHistory].reverse(); // Most recent first
    return limit ? history.slice(0, limit) : history;
  }

  /**
   * Get execution statistics
   */
  getExecutionStats() {
    const total = this.executionHistory.length;
    const successful = this.executionHistory.filter((r) => r.status === 'completed').length;
    const failed = this.executionHistory.filter((r) => r.status === 'failed').length;
    const cancelled = this.executionHistory.filter((r) => r.status === 'cancelled').length;

    const averageDuration =
      this.executionHistory
        .filter((r) => r.duration)
        .reduce((sum, r) => sum + (r.duration || 0), 0) /
        this.executionHistory.filter((r) => r.duration).length || 0;

    return {
      total,
      successful,
      failed,
      cancelled,
      running: this.runningActions.size,
      successRate: total > 0 ? (successful / total) * 100 : 0,
      averageDuration: Math.round(averageDuration),
    };
  }

  /**
   * Clear execution history
   */
  clearHistory(): void {
    this.executionHistory = [];
  }

  /**
   * Create a standardized error result
   */
  private createErrorResult(
    actionId: string,
    startTime: string,
    error: ActionExecutionError
  ): ActionExecutionResult {
    const endTime = new Date().toISOString();
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);

    return {
      actionId,
      status: 'failed',
      startTime,
      endTime,
      duration: endDate.getTime() - startDate.getTime(),
      error,
      logs: [],
    };
  }

  /**
   * Get available action types
   */
  getAvailableActionTypes(): string[] {
    return Array.from(this.executors.keys());
  }

  /**
   * Get schema for an action type
   */
  getActionSchema(actionType: string): any {
    const executor = this.executors.get(actionType);
    return executor?.getSchema();
  }
}

// Singleton instance
export const actionExecutionEngine = new ActionExecutionEngine();
