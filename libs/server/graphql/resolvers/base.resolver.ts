/**
 * Base Resolver Class for TaskMaster GraphQL
 *
 * Provides shared functionality and Prisma integration for all resolvers
 */

import { PrismaClient } from '@prisma/client';
import { TaskMasterDB, TaskMasterSync } from '../../taskmaster';
import type { TaskType } from '../types/task.types';
import type { TaskStatus as GraphQLTaskStatus } from '../types/task.types';
import type { GraphQLContext } from '../context';

export class BaseResolver {
   protected prisma: PrismaClient;
   protected taskMasterDB: TaskMasterDB;
   protected taskMasterSync: TaskMasterSync;
   protected context: GraphQLContext;

   constructor() {
      this.prisma = new PrismaClient();
      this.taskMasterDB = new TaskMasterDB(this.prisma);
      this.taskMasterSync = new TaskMasterSync(this.prisma);
      this.context = {
         prisma: this.prisma,
         taskMasterDB: this.taskMasterDB,
         taskMasterSync: this.taskMasterSync,
         isAdmin: false,
         userId: null,
      };
   }

   /**
    * Health check for database connection
    */
   protected async checkDatabaseHealth(): Promise<boolean> {
      return await this.taskMasterDB.healthCheck();
   }

   /**
    * Handle errors consistently across resolvers with enhanced logging
    */
   protected handleError(error: unknown, operation: string): never {
      const timestamp = new Date().toISOString();
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      const stack = error instanceof Error ? error.stack : undefined;

      // Enhanced logging with operation context
      console.error(`[${timestamp}] GraphQL ${operation} error:`, {
         message: errorMessage,
         stack,
         operation,
         error,
      });

      // Log to TaskMaster's logging infrastructure if available
      this.logToTaskMaster('error', operation, errorMessage);

      if (error instanceof Error) {
         throw new Error(`${operation} failed: ${error.message}`);
      }

      throw new Error(`${operation} failed: Unknown error`);
   }

   /**
    * Log performance metrics for resolver operations
    */
   protected async logPerformance<T>(operation: string, fn: () => Promise<T>): Promise<T> {
      const startTime = performance.now();
      const timestamp = new Date().toISOString();

      try {
         const result = await fn();
         const duration = performance.now() - startTime;

         console.info(`[${timestamp}] GraphQL ${operation} completed in ${duration.toFixed(2)}ms`);
         this.logToTaskMaster('info', operation, `Completed in ${duration.toFixed(2)}ms`);

         return result;
      } catch (error) {
         const duration = performance.now() - startTime;
         console.error(`[${timestamp}] GraphQL ${operation} failed after ${duration.toFixed(2)}ms`);
         throw error;
      }
   }

   /**
    * Integration with TaskMaster's logging infrastructure
    */
   private logToTaskMaster(
      level: 'info' | 'error' | 'warn',
      operation: string,
      message: string
   ): void {
      try {
         // Simple console logging for now - can be enhanced with TaskMaster's actual logging
         const logEntry = {
            timestamp: new Date().toISOString(),
            level,
            component: 'GraphQL',
            operation,
            message,
         };

         if (level === 'error') {
            console.error('[TaskMaster-GraphQL]', logEntry);
         } else if (level === 'warn') {
            console.warn('[TaskMaster-GraphQL]', logEntry);
         } else {
            console.info('[TaskMaster-GraphQL]', logEntry);
         }
      } catch (logError) {
         // Don't let logging errors affect the main operation
         console.error('Failed to log to TaskMaster:', logError);
      }
   }

   /**
    * Transform TaskMasterDB result to GraphQL types
    */
   protected transformTaskForGraphQL(task: any): TaskType {
      return {
         id: task.id,
         title: task.title,
         description: task.description,
         status: task.status as GraphQLTaskStatus,
         priority: task.priority,
         dependencies: task.dependencies || [],
         details: task.details,
         testStrategy: task.testStrategy,
         complexity: task.complexity,
         subtasks:
            task.subtasks?.map((subtask: any) => ({
               id: subtask.id,
               fullId: `${task.id}.${subtask.id}`,
               title: subtask.title,
               description: subtask.description,
               status: subtask.status as GraphQLTaskStatus,
               dependencies: subtask.dependencies || [],
               details: subtask.details,
               testStrategy: subtask.testStrategy,
               createdAt:
                  subtask.createdAt instanceof Date
                     ? subtask.createdAt
                     : new Date(subtask.createdAt),
               updatedAt:
                  subtask.updatedAt instanceof Date
                     ? subtask.updatedAt
                     : new Date(subtask.updatedAt),
            })) || [],
         createdAt: task.createdAt instanceof Date ? task.createdAt : new Date(task.createdAt),
         updatedAt: task.updatedAt instanceof Date ? task.updatedAt : new Date(task.updatedAt),
      };
   }

   /**
    * Clean up database connections
    */
   async cleanup(): Promise<void> {
      await this.taskMasterDB.disconnect();
      await this.taskMasterSync.disconnect();
   }
}
