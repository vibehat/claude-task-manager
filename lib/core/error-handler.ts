import { EventEmitter } from 'events';

// Error classification system
export enum ErrorCategory {
   CLI_EXECUTION = 'cli_execution',
   FILE_SYSTEM = 'file_system',
   NETWORK = 'network',
   VALIDATION = 'validation',
   PERMISSION = 'permission',
   TIMEOUT = 'timeout',
   SYNC = 'sync',
   WEBSOCKET = 'websocket',
   PARSING = 'parsing',
   SYSTEM = 'system',
}

export enum ErrorSeverity {
   LOW = 'low', // Non-critical, can continue
   MEDIUM = 'medium', // Important but recoverable
   HIGH = 'high', // Critical, requires attention
   CRITICAL = 'critical', // System-breaking, immediate action needed
}

export enum ErrorType {
   // CLI Execution Errors
   CLI_COMMAND_NOT_FOUND = 'cli_command_not_found',
   CLI_INVALID_ARGUMENTS = 'cli_invalid_arguments',
   CLI_EXECUTION_FAILED = 'cli_execution_failed',
   CLI_TIMEOUT = 'cli_timeout',
   CLI_PERMISSION_DENIED = 'cli_permission_denied',

   // File System Errors
   FILE_NOT_FOUND = 'file_not_found',
   FILE_PERMISSION_DENIED = 'file_permission_denied',
   FILE_CORRUPTED = 'file_corrupted',
   FILE_LOCK_FAILED = 'file_lock_failed',
   DIRECTORY_NOT_FOUND = 'directory_not_found',
   DISK_SPACE_FULL = 'disk_space_full',

   // Network Errors
   NETWORK_TIMEOUT = 'network_timeout',
   NETWORK_CONNECTION_REFUSED = 'network_connection_refused',
   NETWORK_DNS_FAILED = 'network_dns_failed',
   NETWORK_UNAUTHORIZED = 'network_unauthorized',

   // Validation Errors
   VALIDATION_SCHEMA_MISMATCH = 'validation_schema_mismatch',
   VALIDATION_REQUIRED_FIELD = 'validation_required_field',
   VALIDATION_TYPE_MISMATCH = 'validation_type_mismatch',
   VALIDATION_RANGE_ERROR = 'validation_range_error',

   // Sync Errors
   SYNC_CONFLICT = 'sync_conflict',
   SYNC_OPERATION_FAILED = 'sync_operation_failed',
   SYNC_ROLLBACK_FAILED = 'sync_rollback_failed',
   SYNC_STATE_CORRUPTED = 'sync_state_corrupted',

   // WebSocket Errors
   WEBSOCKET_CONNECTION_FAILED = 'websocket_connection_failed',
   WEBSOCKET_MESSAGE_FAILED = 'websocket_message_failed',
   WEBSOCKET_AUTHENTICATION_FAILED = 'websocket_authentication_failed',

   // Parsing Errors
   JSON_PARSE_ERROR = 'json_parse_error',
   YAML_PARSE_ERROR = 'yaml_parse_error',
   MARKDOWN_PARSE_ERROR = 'markdown_parse_error',

   // System Errors
   MEMORY_EXHAUSTED = 'memory_exhausted',
   CPU_OVERLOAD = 'cpu_overload',
   PROCESS_KILLED = 'process_killed',
   UNKNOWN_ERROR = 'unknown_error',
}

// Enhanced error interface
export interface TaskMasterError {
   id: string;
   type: ErrorType;
   category: ErrorCategory;
   severity: ErrorSeverity;
   message: string;
   userMessage: string;
   technicalDetails: string;
   timestamp: Date;
   context: {
      operation?: string;
      component?: string;
      taskId?: string;
      userId?: string;
      sessionId?: string;
      [key: string]: any;
   };
   stack?: string;
   causedBy?: TaskMasterError;
   retryable: boolean;
   retryCount: number;
   maxRetries: number;
   suggested_actions: string[];
   metadata: Record<string, any>;
}

// Error recovery strategies
export interface RecoveryStrategy {
   name: string;
   description: string;
   execute: (error: TaskMasterError, context: any) => Promise<boolean>;
   applicable: (error: TaskMasterError) => boolean;
   priority: number;
}

// Retry configuration
export interface RetryConfig {
   maxAttempts: number;
   baseDelay: number;
   maxDelay: number;
   backoffMultiplier: number;
   jitter: boolean;
   retryableErrors: ErrorType[];
}

// Error reporting interface
export interface ErrorReport {
   error: TaskMasterError;
   systemState: {
      memory: NodeJS.MemoryUsage;
      uptime: number;
      platform: string;
      nodeVersion: string;
   };
   timestamp: Date;
   userAgent?: string;
   sessionData?: any;
}

// Main error handler class
export class TaskMasterErrorHandler extends EventEmitter {
   private errors = new Map<string, TaskMasterError>();
   private recoveryStrategies = new Map<ErrorType, RecoveryStrategy[]>();
   private errorCounts = new Map<ErrorType, number>();
   private defaultRetryConfig: RetryConfig = {
      maxAttempts: 3,
      baseDelay: 1000,
      maxDelay: 30000,
      backoffMultiplier: 2,
      jitter: true,
      retryableErrors: [
         ErrorType.CLI_TIMEOUT,
         ErrorType.NETWORK_TIMEOUT,
         ErrorType.NETWORK_CONNECTION_REFUSED,
         ErrorType.FILE_LOCK_FAILED,
         ErrorType.SYNC_OPERATION_FAILED,
         ErrorType.WEBSOCKET_CONNECTION_FAILED,
      ],
   };

   constructor() {
      super();
      this.initializeRecoveryStrategies();
      this.setupGlobalErrorHandlers();
   }

   // Create standardized error
   createError(
      type: ErrorType,
      message: string,
      context: any = {},
      originalError?: Error
   ): TaskMasterError {
      const errorId = this.generateErrorId();
      const category = this.getErrorCategory(type);
      const severity = this.getErrorSeverity(type);
      const userMessage = this.generateUserMessage(type, message, context);
      const suggestedActions = this.generateSuggestedActions(type, context);

      const error: TaskMasterError = {
         id: errorId,
         type,
         category,
         severity,
         message,
         userMessage,
         technicalDetails: originalError?.message || message,
         timestamp: new Date(),
         context,
         stack: originalError?.stack || new Error().stack,
         causedBy: originalError ? this.createSimpleErrorRef(originalError) : undefined,
         retryable: this.isRetryable(type),
         retryCount: 0,
         maxRetries: this.getMaxRetries(type),
         suggested_actions: suggestedActions,
         metadata: {
            originalErrorType: originalError?.constructor.name,
            nodeVersion: process.version,
            platform: process.platform,
            timestamp: Date.now(),
         },
      };

      // Store error
      this.errors.set(errorId, error);

      // Update error counts
      const currentCount = this.errorCounts.get(type) || 0;
      this.errorCounts.set(type, currentCount + 1);

      // Emit error event
      this.emit('error', error);

      return error;
   }

   // Handle error with automatic recovery
   async handleError(error: TaskMasterError, autoRecover = true): Promise<boolean> {
      try {
         this.logError(error);

         if (autoRecover && error.retryable && error.retryCount < error.maxRetries) {
            const recovered = await this.attemptRecovery(error);
            if (recovered) {
               this.emit('errorRecovered', error);
               return true;
            }
         }

         // If recovery failed or not attempted, escalate
         this.escalateError(error);
         return false;
      } catch (recoveryError) {
         console.error('Error during error handling:', recoveryError);
         return false;
      }
   }

   // Attempt error recovery
   private async attemptRecovery(error: TaskMasterError): Promise<boolean> {
      const strategies = this.recoveryStrategies.get(error.type) || [];
      const applicableStrategies = strategies
         .filter((strategy) => strategy.applicable(error))
         .sort((a, b) => b.priority - a.priority);

      for (const strategy of applicableStrategies) {
         try {
            console.log(`Attempting recovery strategy: ${strategy.name} for error: ${error.type}`);

            const success = await strategy.execute(error, error.context);
            if (success) {
               error.metadata.recoveryStrategy = strategy.name;
               error.metadata.recoveryAttempts = (error.metadata.recoveryAttempts || 0) + 1;
               return true;
            }
         } catch (strategyError) {
            console.error(`Recovery strategy ${strategy.name} failed:`, strategyError);
         }
      }

      return false;
   }

   // Retry operation with exponential backoff
   async retryOperation<T>(
      operation: () => Promise<T>,
      context: any,
      config?: Partial<RetryConfig>
   ): Promise<T> {
      const retryConfig = { ...this.defaultRetryConfig, ...config };
      let lastError: Error;

      for (let attempt = 1; attempt <= retryConfig.maxAttempts; attempt++) {
         try {
            return await operation();
         } catch (error) {
            lastError = error as Error;

            const taskMasterError = this.convertToTaskMasterError(error);
            taskMasterError.retryCount = attempt - 1;

            if (attempt === retryConfig.maxAttempts) {
               break;
            }

            if (!retryConfig.retryableErrors.includes(taskMasterError.type)) {
               break;
            }

            const delay = this.calculateRetryDelay(attempt, retryConfig);
            console.log(
               `Retry attempt ${attempt}/${retryConfig.maxAttempts} in ${delay}ms for ${taskMasterError.type}`
            );

            await new Promise((resolve) => setTimeout(resolve, delay));
         }
      }

      throw lastError!;
   }

   // Calculate retry delay with exponential backoff
   private calculateRetryDelay(attempt: number, config: RetryConfig): number {
      let delay = config.baseDelay * Math.pow(config.backoffMultiplier, attempt - 1);
      delay = Math.min(delay, config.maxDelay);

      if (config.jitter) {
         delay *= 0.5 + Math.random() * 0.5; // Add jitter
      }

      return Math.floor(delay);
   }

   // Get error category based on type
   private getErrorCategory(type: ErrorType): ErrorCategory {
      if (type.startsWith('cli_')) return ErrorCategory.CLI_EXECUTION;
      if (type.startsWith('file_')) return ErrorCategory.FILE_SYSTEM;
      if (type.startsWith('network_')) return ErrorCategory.NETWORK;
      if (type.startsWith('validation_')) return ErrorCategory.VALIDATION;
      if (type.startsWith('sync_')) return ErrorCategory.SYNC;
      if (type.startsWith('websocket_')) return ErrorCategory.WEBSOCKET;
      if (type.includes('parse')) return ErrorCategory.PARSING;
      if (type.includes('permission')) return ErrorCategory.PERMISSION;
      if (type.includes('timeout')) return ErrorCategory.TIMEOUT;
      return ErrorCategory.SYSTEM;
   }

   // Get error severity based on type
   private getErrorSeverity(type: ErrorType): ErrorSeverity {
      const criticalErrors = [
         ErrorType.MEMORY_EXHAUSTED,
         ErrorType.DISK_SPACE_FULL,
         ErrorType.SYNC_STATE_CORRUPTED,
         ErrorType.PROCESS_KILLED,
      ];

      const highErrors = [
         ErrorType.CLI_PERMISSION_DENIED,
         ErrorType.FILE_PERMISSION_DENIED,
         ErrorType.SYNC_ROLLBACK_FAILED,
         ErrorType.FILE_CORRUPTED,
      ];

      const mediumErrors = [
         ErrorType.CLI_EXECUTION_FAILED,
         ErrorType.SYNC_CONFLICT,
         ErrorType.WEBSOCKET_CONNECTION_FAILED,
         ErrorType.VALIDATION_SCHEMA_MISMATCH,
      ];

      if (criticalErrors.includes(type)) return ErrorSeverity.CRITICAL;
      if (highErrors.includes(type)) return ErrorSeverity.HIGH;
      if (mediumErrors.includes(type)) return ErrorSeverity.MEDIUM;
      return ErrorSeverity.LOW;
   }

   // Generate user-friendly error messages
   private generateUserMessage(type: ErrorType, technicalMessage: string, context: any): string {
      const userMessages: Record<ErrorType, (msg: string, ctx: any) => string> = {
         [ErrorType.CLI_COMMAND_NOT_FOUND]: (msg, ctx) =>
            `Task Master CLI command not found. Please ensure Task Master is installed and accessible.`,

         [ErrorType.CLI_TIMEOUT]: (msg, ctx) =>
            `Command took too long to complete. This might be due to a large task list or system load.`,

         [ErrorType.FILE_NOT_FOUND]: (msg, ctx) =>
            `Required file not found: ${ctx.filePath || 'unknown'}. The file may have been moved or deleted.`,

         [ErrorType.FILE_PERMISSION_DENIED]: (msg, ctx) =>
            `Permission denied accessing file: ${ctx.filePath || 'unknown'}. Please check file permissions.`,

         [ErrorType.SYNC_CONFLICT]: (msg, ctx) =>
            `Multiple changes detected for the same task. Please resolve the conflict or try again.`,

         [ErrorType.NETWORK_TIMEOUT]: (msg, ctx) =>
            `Network request timed out. Please check your internet connection and try again.`,

         [ErrorType.JSON_PARSE_ERROR]: (msg, ctx) =>
            `Invalid data format detected. The file may be corrupted or in an unexpected format.`,

         [ErrorType.VALIDATION_REQUIRED_FIELD]: (msg, ctx) =>
            `Required field missing: ${ctx.field || 'unknown'}. Please provide all required information.`,

         [ErrorType.WEBSOCKET_CONNECTION_FAILED]: (msg, ctx) =>
            `Real-time connection failed. Features may work with reduced functionality.`,

         [ErrorType.MEMORY_EXHAUSTED]: (msg, ctx) =>
            `System is running low on memory. Please close other applications and try again.`,
      };

      const messageGenerator = userMessages[type];
      if (messageGenerator) {
         return messageGenerator(technicalMessage, context);
      }

      return `An unexpected error occurred: ${technicalMessage}`;
   }

   // Generate suggested actions for errors
   private generateSuggestedActions(type: ErrorType, context: any): string[] {
      const actionMap: Record<ErrorType, string[]> = {
         [ErrorType.CLI_COMMAND_NOT_FOUND]: [
            'Install Task Master CLI: npm install -g task-master-ai',
            'Verify Task Master is in your PATH',
            'Restart your terminal or IDE',
         ],

         [ErrorType.CLI_TIMEOUT]: [
            'Try running the command again',
            'Check if your task list is very large',
            'Increase timeout in settings if available',
         ],

         [ErrorType.FILE_NOT_FOUND]: [
            'Check if the file exists at the expected location',
            'Verify file permissions',
            'Initialize Task Master if this is a new project',
         ],

         [ErrorType.SYNC_CONFLICT]: [
            'Refresh the page to see latest changes',
            'Wait a moment and try again',
            'Manually resolve conflicts if they persist',
         ],

         [ErrorType.NETWORK_TIMEOUT]: [
            'Check your internet connection',
            'Try again in a few moments',
            'Contact support if the problem persists',
         ],

         [ErrorType.WEBSOCKET_CONNECTION_FAILED]: [
            'Refresh the page to reconnect',
            'Check if real-time features are needed',
            'Continue working - changes will sync when possible',
         ],
      };

      return (
         actionMap[type] || [
            'Try the operation again',
            'Check the console for more details',
            'Contact support if the problem persists',
         ]
      );
   }

   // Initialize recovery strategies
   private initializeRecoveryStrategies(): void {
      // CLI timeout recovery
      this.addRecoveryStrategy(ErrorType.CLI_TIMEOUT, {
         name: 'RetryWithIncreasedTimeout',
         description: 'Retry CLI operation with increased timeout',
         priority: 10,
         applicable: (error) => error.retryCount < 2,
         execute: async (error, context) => {
            context.timeout = (context.timeout || 30000) * 2;
            return true; // Signal to retry
         },
      });

      // File lock recovery
      this.addRecoveryStrategy(ErrorType.FILE_LOCK_FAILED, {
         name: 'WaitAndRetry',
         description: 'Wait for file lock to be released',
         priority: 10,
         applicable: (error) => error.retryCount < 3,
         execute: async (error, context) => {
            await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000));
            return true;
         },
      });

      // WebSocket reconnection
      this.addRecoveryStrategy(ErrorType.WEBSOCKET_CONNECTION_FAILED, {
         name: 'ReconnectWebSocket',
         description: 'Attempt to reconnect WebSocket',
         priority: 10,
         applicable: (error) => error.retryCount < 5,
         execute: async (error, context) => {
            // This would be handled by the WebSocket client
            return true;
         },
      });

      // Sync conflict resolution
      this.addRecoveryStrategy(ErrorType.SYNC_CONFLICT, {
         name: 'AutoResolveConflict',
         description: 'Automatically resolve sync conflict using last-write-wins',
         priority: 5,
         applicable: (error) => context.autoResolve !== false,
         execute: async (error, context) => {
            // This would delegate to the sync manager
            return true;
         },
      });
   }

   // Add recovery strategy
   private addRecoveryStrategy(errorType: ErrorType, strategy: RecoveryStrategy): void {
      const strategies = this.recoveryStrategies.get(errorType) || [];
      strategies.push(strategy);
      this.recoveryStrategies.set(errorType, strategies);
   }

   // Check if error type is retryable
   private isRetryable(type: ErrorType): boolean {
      return this.defaultRetryConfig.retryableErrors.includes(type);
   }

   // Get max retries for error type
   private getMaxRetries(type: ErrorType): number {
      const typeSpecificRetries: Record<ErrorType, number> = {
         [ErrorType.CLI_TIMEOUT]: 2,
         [ErrorType.FILE_LOCK_FAILED]: 5,
         [ErrorType.NETWORK_TIMEOUT]: 3,
         [ErrorType.WEBSOCKET_CONNECTION_FAILED]: 10,
         [ErrorType.SYNC_OPERATION_FAILED]: 3,
      };

      return typeSpecificRetries[type] || this.defaultRetryConfig.maxAttempts;
   }

   // Convert generic error to TaskMasterError
   private convertToTaskMasterError(error: Error): TaskMasterError {
      if ('type' in error && 'category' in error) {
         return error as TaskMasterError;
      }

      let errorType = ErrorType.UNKNOWN_ERROR;
      let category = ErrorCategory.SYSTEM;

      // Try to infer error type from message
      const message = error.message.toLowerCase();
      if (message.includes('timeout')) errorType = ErrorType.CLI_TIMEOUT;
      else if (message.includes('permission denied')) errorType = ErrorType.FILE_PERMISSION_DENIED;
      else if (message.includes('not found')) errorType = ErrorType.FILE_NOT_FOUND;
      else if (message.includes('parse')) errorType = ErrorType.JSON_PARSE_ERROR;
      else if (message.includes('network')) errorType = ErrorType.NETWORK_CONNECTION_REFUSED;

      return this.createError(errorType, error.message, { originalError: error }, error);
   }

   // Create simple error reference to avoid circular dependencies
   private createSimpleErrorRef(error: Error): TaskMasterError {
      const errorId = this.generateErrorId();
      let errorType = ErrorType.UNKNOWN_ERROR;
      const message = error.message.toLowerCase();

      if (message.includes('timeout')) errorType = ErrorType.CLI_TIMEOUT;
      else if (message.includes('permission denied')) errorType = ErrorType.FILE_PERMISSION_DENIED;
      else if (message.includes('not found')) errorType = ErrorType.FILE_NOT_FOUND;
      else if (message.includes('parse')) errorType = ErrorType.JSON_PARSE_ERROR;
      else if (message.includes('network')) errorType = ErrorType.NETWORK_CONNECTION_REFUSED;

      return {
         id: errorId,
         type: errorType,
         category: this.getErrorCategory(errorType),
         severity: this.getErrorSeverity(errorType),
         message: error.message,
         userMessage: error.message,
         technicalDetails: error.message,
         timestamp: new Date(),
         context: { originalError: error },
         stack: error.stack,
         causedBy: undefined, // Prevent circular reference
         retryable: this.isRetryable(errorType),
         retryCount: 0,
         maxRetries: this.getMaxRetries(errorType),
         suggested_actions: this.generateSuggestedActions(errorType, { originalError: error }),
         metadata: {
            originalErrorType: error.constructor.name,
            nodeVersion: process.version,
            platform: process.platform,
            timestamp: Date.now(),
         },
      };
   }

   // Log error with appropriate level
   private logError(error: TaskMasterError): void {
      const logLevel = this.getLogLevel(error.severity);
      const logMessage = `[${error.category}:${error.type}] ${error.message}`;

      switch (logLevel) {
         case 'error':
            console.error(logMessage, {
               errorId: error.id,
               context: error.context,
               stack: error.stack,
            });
            break;
         case 'warn':
            console.warn(logMessage, { errorId: error.id, context: error.context });
            break;
         case 'info':
            console.info(logMessage, { errorId: error.id });
            break;
         default:
            console.log(logMessage);
      }

      // Emit for external logging systems
      this.emit('errorLogged', { error, logLevel });
   }

   // Get appropriate log level
   private getLogLevel(severity: ErrorSeverity): string {
      switch (severity) {
         case ErrorSeverity.CRITICAL:
         case ErrorSeverity.HIGH:
            return 'error';
         case ErrorSeverity.MEDIUM:
            return 'warn';
         case ErrorSeverity.LOW:
            return 'info';
         default:
            return 'debug';
      }
   }

   // Escalate error for manual intervention
   private escalateError(error: TaskMasterError): void {
      console.error(`Error escalated: ${error.type} - ${error.userMessage}`);

      this.emit('errorEscalated', error);

      // For critical errors, consider additional actions
      if (error.severity === ErrorSeverity.CRITICAL) {
         this.emit('criticalError', error);
      }
   }

   // Setup global error handlers (skip in test environment)
   private setupGlobalErrorHandlers(): void {
      if (process.env.NODE_ENV === 'test') {
         return; // Skip setting up global handlers in tests
      }

      // Handle uncaught exceptions
      process.on('uncaughtException', (error) => {
         const taskMasterError = this.createError(
            ErrorType.UNKNOWN_ERROR,
            'Uncaught exception',
            { originalError: error },
            error
         );
         this.handleError(taskMasterError, false);
      });

      // Handle unhandled promise rejections
      process.on('unhandledRejection', (reason, promise) => {
         const error = reason instanceof Error ? reason : new Error(String(reason));
         const taskMasterError = this.createError(
            ErrorType.UNKNOWN_ERROR,
            'Unhandled promise rejection',
            { promise, reason },
            error
         );
         this.handleError(taskMasterError, false);
      });
   }

   // Generate unique error ID
   private generateErrorId(): string {
      return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
   }

   // Public API methods

   // Get error statistics
   getErrorStats() {
      const stats = {
         totalErrors: this.errors.size,
         errorsByType: Object.fromEntries(this.errorCounts),
         errorsByCategory: {} as Record<ErrorCategory, number>,
         errorsBySeverity: {} as Record<ErrorSeverity, number>,
         recentErrors: Array.from(this.errors.values())
            .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
            .slice(0, 10),
      };

      // Calculate category and severity distributions
      for (const error of this.errors.values()) {
         stats.errorsByCategory[error.category] = (stats.errorsByCategory[error.category] || 0) + 1;
         stats.errorsBySeverity[error.severity] = (stats.errorsBySeverity[error.severity] || 0) + 1;
      }

      return stats;
   }

   // Get specific error
   getError(errorId: string): TaskMasterError | undefined {
      return this.errors.get(errorId);
   }

   // Clear old errors
   clearErrors(olderThan?: Date): void {
      const cutoff = olderThan || new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 hours ago

      for (const [id, error] of this.errors.entries()) {
         if (error.timestamp < cutoff) {
            this.errors.delete(id);
         }
      }
   }

   // Create error report
   createErrorReport(error: TaskMasterError): ErrorReport {
      return {
         error,
         systemState: {
            memory: process.memoryUsage(),
            uptime: process.uptime(),
            platform: process.platform,
            nodeVersion: process.version,
         },
         timestamp: new Date(),
         sessionData: {
            errorId: error.id,
            userAgent: error.context.userAgent,
            sessionId: error.context.sessionId,
         },
      };
   }
}

// Singleton instance
let globalErrorHandler: TaskMasterErrorHandler | null = null;

export function getGlobalErrorHandler(): TaskMasterErrorHandler {
   if (!globalErrorHandler) {
      globalErrorHandler = new TaskMasterErrorHandler();
   }
   return globalErrorHandler;
}

// Utility functions for common error operations
export const ErrorUtils = {
   // Create CLI error
   createCLIError: (message: string, context: any, originalError?: Error) => {
      const handler = getGlobalErrorHandler();
      return handler.createError(ErrorType.CLI_EXECUTION_FAILED, message, context, originalError);
   },

   // Create file error
   createFileError: (message: string, filePath: string, originalError?: Error) => {
      const handler = getGlobalErrorHandler();
      return handler.createError(ErrorType.FILE_NOT_FOUND, message, { filePath }, originalError);
   },

   // Create sync error
   createSyncError: (message: string, operationId: string, originalError?: Error) => {
      const handler = getGlobalErrorHandler();
      return handler.createError(
         ErrorType.SYNC_OPERATION_FAILED,
         message,
         { operationId },
         originalError
      );
   },

   // Handle error with recovery
   handleErrorWithRecovery: async (error: TaskMasterError) => {
      const handler = getGlobalErrorHandler();
      return handler.handleError(error, true);
   },

   // Retry operation
   retryOperation: async <T>(
      operation: () => Promise<T>,
      context: any,
      config?: Partial<RetryConfig>
   ): Promise<T> => {
      const handler = getGlobalErrorHandler();
      return handler.retryOperation(operation, context, config);
   },
};
