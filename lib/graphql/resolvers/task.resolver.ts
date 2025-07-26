/**
 * Task Resolver - TypeGraphQL Implementation
 *
 * Code-first GraphQL resolver for Task queries using Prisma client integration
 */

import { Resolver, Query, Args, FieldResolver, Root, Arg } from 'type-graphql';
import {
   TaskType,
   SubtaskType,
   TaskStatsType,
   TaskQueryArgs,
   TasksQueryArgs,
   SearchTasksArgs,
   TasksConnectionArgs,
   TaskConnection,
   TaskEdge,
   PageInfo,
   TaskStatus as GraphQLTaskStatus,
} from '../types/task.types';
import { BaseResolver } from './base.resolver';
import { TaskWithTimestamps } from '../../taskmaster/types';

@Resolver(() => TaskType)
export class TaskResolver extends BaseResolver {
   /**
    * Get a single task by ID
    */
   @Query(() => TaskType, { nullable: true })
   async task(@Args() { id, options }: TaskQueryArgs): Promise<TaskType | null> {
      return this.logPerformance(`task(${id})`, async () => {
         try {
            const result = await this.taskMasterDB.getTask(id, {
               includeSubtasks: options?.includeSubtasks,
               limit: options?.limit,
               offset: options?.offset,
            });

            if (!result) {
               return null;
            }

            return this.transformTaskForGraphQL(result);
         } catch (error) {
            this.handleError(error, 'task query');
            return null;
         }
      });
   }

   /**
    * Get multiple tasks with filtering and pagination
    */
   @Query(() => [TaskType])
   async tasks(@Args() { filters, orderBy, options }: TasksQueryArgs): Promise<TaskType[]> {
      try {
         const queryFilters = filters
            ? {
                 status: filters.status?.[0], // Convert array to single value for now
                 priority: filters.priority?.[0],
                 ids: filters.ids,
                 hasDependencies: filters.hasDependencies,
                 hasSubtasks: filters.hasSubtasks,
                 search: filters.search,
              }
            : {};

         const queryOrderBy = orderBy
            ? {
                 field: orderBy.field,
                 direction: orderBy.direction,
              }
            : undefined;

         const queryOptions = {
            includeSubtasks: options?.includeSubtasks,
            limit: options?.limit,
            offset: options?.offset,
         };

         const results = await this.taskMasterDB.getTasks(queryFilters, queryOrderBy, queryOptions);

         return results.map((task) => this.transformTaskForGraphQL(task));
      } catch (error) {
         this.handleError(error, 'tasks query');
         return [];
      }
   }

   /**
    * Search tasks by text
    */
   @Query(() => [TaskType])
   async searchTasks(@Args() { searchText, options }: SearchTasksArgs): Promise<TaskType[]> {
      try {
         const results = await this.taskMasterDB.searchTasks(searchText, {
            includeSubtasks: options?.includeSubtasks,
            limit: options?.limit,
            offset: options?.offset,
         });

         return results.map((task) => this.transformTaskForGraphQL(task));
      } catch (error) {
         this.handleError(error, 'searchTasks query');
         return [];
      }
   }

   /**
    * Get tasks that are ready to work on (no blocking dependencies)
    */
   @Query(() => [TaskType])
   async readyTasks(
      @Arg('limit', { nullable: true }) limit?: number,
      @Arg('offset', { nullable: true }) offset?: number
   ): Promise<TaskType[]> {
      try {
         const results = await this.taskMasterDB.getReadyTasks({
            limit,
            offset,
         });

         return results.map((task) => this.transformTaskForGraphQL(task));
      } catch (error) {
         this.handleError(error, 'readyTasks query');
         return [];
      }
   }

   /**
    * Get tasks with cursor-based pagination (GraphQL Connection standard)
    */
   @Query(() => TaskConnection)
   async tasksConnection(
      @Args() { filters, orderBy, pagination }: TasksConnectionArgs
   ): Promise<TaskConnection> {
      return this.logPerformance('tasksConnection', async () => {
         try {
            const limit = pagination?.first || pagination?.last || 20;
            const offset = this.calculateOffsetFromCursor(pagination?.after);

            // Get one extra item to determine if there's a next page
            const resultsLimit = limit + 1;

            const queryFilters = filters
               ? {
                    status: filters.status?.[0],
                    priority: filters.priority?.[0],
                    ids: filters.ids,
                    hasDependencies: filters.hasDependencies,
                    hasSubtasks: filters.hasSubtasks,
                    search: filters.search,
                 }
               : {};

            const queryOrderBy = orderBy
               ? {
                    field: orderBy.field,
                    direction: orderBy.direction,
                 }
               : { field: 'id' as const, direction: 'asc' as const };

            const results = await this.taskMasterDB.getTasks(queryFilters, queryOrderBy, {
               includeSubtasks: true,
               limit: resultsLimit,
               offset,
            });

            // Determine if there are more pages
            const hasNextPage = results.length > limit;
            const taskResults = hasNextPage ? results.slice(0, -1) : results;

            // Get total count for metadata
            const totalCount = await this.taskMasterDB.getTaskCount(queryFilters);

            // Create edges with cursors
            const edges: TaskEdge[] = taskResults.map((task, index) => ({
               cursor: this.createCursor(task.id, offset + index),
               node: this.transformTaskForGraphQL(task),
            }));

            // Create page info
            const pageInfo: PageInfo = {
               hasNextPage,
               hasPreviousPage: offset > 0,
               startCursor: edges.length > 0 ? edges[0].cursor : null,
               endCursor: edges.length > 0 ? edges[edges.length - 1].cursor : null,
            };

            return {
               edges,
               pageInfo,
               totalCount,
            };
         } catch (error) {
            this.handleError(error, 'tasksConnection query');
            return {
               edges: [],
               pageInfo: {
                  hasNextPage: false,
                  hasPreviousPage: false,
                  startCursor: null,
                  endCursor: null,
               },
               totalCount: 0,
            };
         }
      });
   }

   /**
    * Get database statistics
    */
   @Query(() => TaskStatsType)
   async taskStats(): Promise<TaskStatsType> {
      try {
         const stats = await this.taskMasterDB.getStats();

         return {
            totalTasks: stats.totalTasks,
            totalSubtasks: stats.totalSubtasks,
            tasksByStatus: {
               pending: stats.tasksByStatus.pending || 0,
               inProgress: stats.tasksByStatus['in-progress'] || 0,
               done: stats.tasksByStatus.done || 0,
               cancelled: stats.tasksByStatus.cancelled || 0,
               deferred: stats.tasksByStatus.deferred || 0,
               blocked: stats.tasksByStatus.blocked || 0,
            },
            tasksByPriority: {
               high: stats.tasksByPriority.high || 0,
               medium: stats.tasksByPriority.medium || 0,
               low: stats.tasksByPriority.low || 0,
            },
         };
      } catch (error) {
         this.handleError(error, 'taskStats query');
         throw error;
      }
   }

   /**
    * Field resolver for subtasks
    */
   @FieldResolver(() => [SubtaskType])
   async subtasks(@Root() task: TaskWithTimestamps): Promise<SubtaskType[]> {
      try {
         if (task.subtasks && task.subtasks.length > 0) {
            // Return already loaded subtasks
            return task.subtasks.map((subtask) => ({
               id: subtask.id,
               fullId: `${task.id}.${subtask.id}`,
               title: subtask.title,
               description: subtask.description,
               status: subtask.status as GraphQLTaskStatus,
               dependencies: subtask.dependencies || [],
               details: subtask.details,
               testStrategy: subtask.testStrategy,
               createdAt: new Date(),
               updatedAt: new Date(),
            }));
         }

         // Fetch subtasks if not already loaded
         const subtasks = await this.taskMasterDB.getSubtasks(task.id);
         return subtasks.map((subtask) => ({
            id: parseInt(subtask.id),
            fullId: subtask.fullId,
            title: subtask.title,
            description: subtask.description,
            status: subtask.status as GraphQLTaskStatus,
            dependencies: subtask.dependencies || [],
            details: subtask.details,
            testStrategy: subtask.testStrategy,
            createdAt: subtask.createdAt,
            updatedAt: subtask.updatedAt,
         }));
      } catch (error) {
         console.error('Error fetching subtasks:', error);
         return [];
      }
   }

   /**
    * Helper method to create a cursor from task ID and position
    */
   private createCursor(taskId: number, position: number): string {
      return Buffer.from(`${taskId}:${position}`).toString('base64');
   }

   /**
    * Helper method to calculate offset from cursor
    */
   private calculateOffsetFromCursor(cursor?: string): number {
      if (!cursor) return 0;

      try {
         const decoded = Buffer.from(cursor, 'base64').toString('utf-8');
         const [, position] = decoded.split(':');
         return parseInt(position, 10) + 1;
      } catch {
         return 0;
      }
   }
}
