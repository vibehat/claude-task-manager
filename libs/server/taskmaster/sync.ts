/**
 * Task Master One-Way Sync Implementation
 *
 * Provides one-way synchronization from tasks.json to SQLite database.
 * This is a focused implementation that reads Task Master CLI data and
 * syncs it to the database using Prisma.
 */

import fs from 'fs/promises';
import path from 'path';
import type { Prisma } from '../../../libs/server/generated/prisma';
import { PrismaClient } from '../../../libs/server/generated/prisma';
import type { TasksData, Task, Subtask } from '../types/taskmaster';
import type { TaskMasterSyncOptions, SyncResult } from './types';
import { TaskMasterSyncError } from './types';

export class TaskMasterSync {
   private prisma: PrismaClient;
   private defaultTasksJsonPath: string;

   constructor(prisma?: PrismaClient) {
      this.prisma = prisma || new PrismaClient();
      // Default path to tasks.json in project root
      this.defaultTasksJsonPath = path.join(process.cwd(), '.taskmaster', 'tasks', 'tasks.json');
   }

   /**
    * Main sync method - reads tasks.json and syncs data to SQLite database
    */
   async syncTasksToDatabase(options: TaskMasterSyncOptions = {}): Promise<SyncResult> {
      const startTime = Date.now();
      const result: SyncResult = {
         success: false,
         tasksProcessed: 0,
         subtasksProcessed: 0,
         issuesCreated: 0,
         errors: [],
         duration: 0,
         timestamp: new Date(),
      };

      try {
         // Step 1: Read and parse tasks.json
         const tasksData = await this.readTasksJson(options.tasksJsonPath);

         // Step 2: Validate data if requested
         if (options.validateIntegrity !== false) {
            this.validateTasksData(tasksData);
         }

         // Step 3: Sync tasks to database
         const { tasksProcessed, subtasksProcessed, issuesCreated } = await this.performSync(
            tasksData,
            options.incremental || false
         );

         result.success = true;
         result.tasksProcessed = tasksProcessed;
         result.subtasksProcessed = subtasksProcessed;
         result.issuesCreated = issuesCreated;
      } catch (error) {
         const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
         result.errors.push(errorMessage);

         // Rethrow as TaskMasterSyncError for better error handling
         if (!(error instanceof TaskMasterSyncError)) {
            throw new TaskMasterSyncError(`Sync failed: ${errorMessage}`, 'UNKNOWN_ERROR', error);
         }
         throw error;
      } finally {
         result.duration = Date.now() - startTime;
      }

      return result;
   }

   /**
    * Read and parse tasks.json file
    */
   private async readTasksJson(filePath?: string): Promise<TasksData> {
      const targetPath = filePath || this.defaultTasksJsonPath;

      try {
         const fileContent = await fs.readFile(targetPath, 'utf-8');
         const tasksData = JSON.parse(fileContent) as TasksData;

         if (!tasksData.master || !Array.isArray(tasksData.master.tasks)) {
            throw new TaskMasterSyncError(
               'Invalid tasks.json structure: missing master.tasks array',
               'VALIDATION_ERROR'
            );
         }

         return tasksData;
      } catch (error) {
         if (error instanceof TaskMasterSyncError) {
            throw error;
         }

         if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
            throw new TaskMasterSyncError(
               `Tasks file not found: ${targetPath}`,
               'FILE_READ_ERROR',
               error
            );
         }

         if (error instanceof SyntaxError) {
            throw new TaskMasterSyncError(
               `Invalid JSON in tasks file: ${error.message}`,
               'VALIDATION_ERROR',
               error
            );
         }

         throw new TaskMasterSyncError(
            `Failed to read tasks file: ${error}`,
            'FILE_READ_ERROR',
            error
         );
      }
   }

   /**
    * Validate the structure and content of tasks data
    */
   private validateTasksData(tasksData: TasksData): void {
      const tasks = tasksData.master.tasks;

      // Check for duplicate task IDs
      const taskIds = new Set<number>();
      for (const task of tasks) {
         if (taskIds.has(task.id)) {
            throw new TaskMasterSyncError(
               `Duplicate task ID found: ${task.id}`,
               'VALIDATION_ERROR'
            );
         }
         taskIds.add(task.id);

         // Validate task structure
         if (!task.title || !task.description) {
            throw new TaskMasterSyncError(
               `Task ${task.id} missing required fields (title, description)`,
               'VALIDATION_ERROR'
            );
         }

         // Validate subtasks if present
         if (task.subtasks) {
            const subtaskIds = new Set<number>();
            for (const subtask of task.subtasks) {
               if (subtaskIds.has(subtask.id)) {
                  throw new TaskMasterSyncError(
                     `Duplicate subtask ID found in task ${task.id}: ${subtask.id}`,
                     'VALIDATION_ERROR'
                  );
               }
               subtaskIds.add(subtask.id);
            }
         }
      }
   }

   /**
    * Perform the actual database sync operation
    */
   private async performSync(
      tasksData: TasksData,
      incremental: boolean
   ): Promise<{
      tasksProcessed: number;
      subtasksProcessed: number;
      issuesCreated: number;
   }> {
      let tasksProcessed = 0;
      let subtasksProcessed = 0;
      let issuesCreated = 0;

      try {
         // Use transaction to ensure data consistency
         await this.prisma.$transaction(async (tx) => {
            // If not incremental, clear existing data
            if (!incremental) {
               await tx.issueLabel.deleteMany();
               await tx.issue.deleteMany();
               await tx.subtask.deleteMany();
               await tx.taskDependency.deleteMany();
               await tx.task.deleteMany();
            }

            // Sync metadata
            await this.syncMetadata(tx, tasksData.master.metadata);

            // Sync tasks
            for (const task of tasksData.master.tasks) {
               await this.syncTask(tx, task);
               tasksProcessed++;

               // Create issue for task
               await this.createIssueForTask(tx, task);
               issuesCreated++;

               // Sync subtasks
               if (task.subtasks) {
                  for (const subtask of task.subtasks) {
                     await this.syncSubtask(tx, subtask, task.id);
                     subtasksProcessed++;

                     // Create issue for subtask
                     await this.createIssueForSubtask(tx, subtask, task.id);
                     issuesCreated++;
                  }
               }
            }

            // Sync dependencies (after all tasks are created)
            for (const task of tasksData.master.tasks) {
               await this.syncTaskDependencies(tx, task);
            }
         });
      } catch (error) {
         throw new TaskMasterSyncError(`Database sync failed: ${error}`, 'DATABASE_ERROR', error);
      }

      return { tasksProcessed, subtasksProcessed, issuesCreated };
   }

   /**
    * Sync task metadata to database
    */
   private async syncMetadata(
      tx: Prisma.TransactionClient,
      metadata: TasksData['master']['metadata']
   ): Promise<void> {
      await tx.taskMasterMetadata.upsert({
         where: { id: 1 }, // Single metadata record
         update: {
            created: new Date(metadata.created),
            updated: new Date(metadata.updated),
            description: metadata.description,
         },
         create: {
            id: 1,
            created: new Date(metadata.created),
            updated: new Date(metadata.updated),
            description: metadata.description,
         },
      });
   }

   /**
    * Sync individual task to database
    */
   private async syncTask(tx: Prisma.TransactionClient, task: Task): Promise<void> {
      await tx.task.upsert({
         where: { id: task.id },
         update: {
            title: task.title,
            description: task.description,
            details: task.details || null,
            testStrategy: task.testStrategy || null,
            priority: task.priority,
            status: task.status,
            complexity: task.complexity || null,
         },
         create: {
            id: task.id,
            title: task.title,
            description: task.description,
            details: task.details || null,
            testStrategy: task.testStrategy || null,
            priority: task.priority,
            status: task.status,
            complexity: task.complexity || null,
         },
      });
   }

   /**
    * Sync individual subtask to database
    */
   private async syncSubtask(
      tx: Prisma.TransactionClient,
      subtask: Subtask,
      parentId: number
   ): Promise<void> {
      const subtaskId = `${parentId}.${subtask.id}`;

      await tx.subtask.upsert({
         where: { id: subtaskId },
         update: {
            title: subtask.title,
            description: subtask.description,
            details: subtask.details || null,
            testStrategy: subtask.testStrategy || null,
            status: subtask.status,
            dependencies: JSON.stringify(subtask.dependencies || []),
         },
         create: {
            id: subtaskId,
            title: subtask.title,
            description: subtask.description,
            details: subtask.details || null,
            testStrategy: subtask.testStrategy || null,
            status: subtask.status,
            parentId: parentId,
            dependencies: JSON.stringify(subtask.dependencies || []),
         },
      });
   }

   /**
    * Sync task dependencies to database
    */
   private async syncTaskDependencies(tx: Prisma.TransactionClient, task: Task): Promise<void> {
      if (!task.dependencies || task.dependencies.length === 0) {
         return;
      }

      // First, remove existing dependencies for this task
      await tx.taskDependency.deleteMany({
         where: { taskId: task.id },
      });

      // Then add current dependencies
      for (const dependencyId of task.dependencies) {
         await tx.taskDependency.create({
            data: {
               taskId: task.id,
               dependsOnId: dependencyId,
            },
         });
      }
   }

   /**
    * Create an issue for a task
    */
   private async createIssueForTask(tx: Prisma.TransactionClient, task: Task): Promise<void> {
      const identifier = `TASK-${task.id}`;

      await tx.issue.upsert({
         where: { identifier },
         update: {
            title: task.title,
            description: task.description,
            statusId: this.mapTaskStatusToIssueStatus(task.status),
            priorityId: this.mapTaskPriorityToIssuePriority(task.priority),
            rank: `t${task.id}`,
            issueType: 'TASK',
            taskId: task.id,
            subtaskId: null,
            subissues: JSON.stringify([]),
         },
         create: {
            identifier,
            title: task.title,
            description: task.description,
            statusId: this.mapTaskStatusToIssueStatus(task.status),
            priorityId: this.mapTaskPriorityToIssuePriority(task.priority),
            rank: `t${task.id}`,
            issueType: 'TASK',
            taskId: task.id,
            subtaskId: null,
            subissues: JSON.stringify([]),
         },
      });
   }

   /**
    * Create an issue for a subtask
    */
   private async createIssueForSubtask(
      tx: Prisma.TransactionClient,
      subtask: Subtask,
      parentId: number
   ): Promise<void> {
      const subtaskId = `${parentId}.${subtask.id}`;
      const identifier = `SUBTASK-${subtaskId}`;

      await tx.issue.upsert({
         where: { identifier },
         update: {
            title: subtask.title,
            description: subtask.description,
            statusId: this.mapTaskStatusToIssueStatus(subtask.status),
            priorityId: 'medium', // Default priority for subtasks
            rank: `s${subtaskId.replace('.', '')}`,
            issueType: 'SUBTASK',
            taskId: null,
            subtaskId: subtaskId,
            subissues: JSON.stringify([]),
         },
         create: {
            identifier,
            title: subtask.title,
            description: subtask.description,
            statusId: this.mapTaskStatusToIssueStatus(subtask.status),
            priorityId: 'medium', // Default priority for subtasks
            rank: `s${subtaskId.replace('.', '')}`,
            issueType: 'SUBTASK',
            taskId: null,
            subtaskId: subtaskId,
            subissues: JSON.stringify([]),
         },
      });
   }

   /**
    * Map Task Master task status to Issue status
    */
   private mapTaskStatusToIssueStatus(taskStatus: string): string {
      const statusMap: Record<string, string> = {
         'pending': 'to-do',
         'in-progress': 'in-progress',
         'done': 'completed',
         'completed': 'completed',
         'deferred': 'backlog',
         'cancelled': 'backlog', // Map to backlog since cancelled doesn't exist
         'blocked': 'paused', // Map to paused since blocked doesn't exist
      };

      return statusMap[taskStatus] || 'to-do';
   }

   /**
    * Map Task Master task priority to Issue priority
    */
   private mapTaskPriorityToIssuePriority(taskPriority: string): string {
      const priorityMap: Record<string, string> = {
         high: 'high',
         medium: 'medium',
         low: 'low',
         critical: 'urgent',
         urgent: 'urgent',
      };

      return priorityMap[taskPriority] || 'medium';
   }

   /**
    * Close database connection
    */
   async disconnect(): Promise<void> {
      await this.prisma.$disconnect();
   }
}
