/**
 * TypeGraphQL Type Definitions for Task Master
 *
 * Code-first GraphQL types using TypeGraphQL decorators
 * integrated with Prisma models from lib/taskmaster
 */

import { ObjectType, Field, ID, registerEnumType, InputType, ArgsType, Int } from 'type-graphql';
import {
   IsOptional,
   IsArray,
   IsBoolean,
   IsInt,
   Min,
   Max,
   IsString,
   MinLength,
   MaxLength,
   IsIn,
} from 'class-validator';

// Define enums for TypeGraphQL
export enum TaskStatus {
   PENDING = 'pending',
   IN_PROGRESS = 'in-progress',
   DONE = 'done',
   CANCELLED = 'cancelled',
   DEFERRED = 'deferred',
   BLOCKED = 'blocked',
}

export enum TaskPriority {
   HIGH = 'high',
   MEDIUM = 'medium',
   LOW = 'low',
}

// Register enums for GraphQL schema generation
registerEnumType(TaskStatus, {
   name: 'TaskStatus',
   description: 'Task status values',
});

registerEnumType(TaskPriority, {
   name: 'TaskPriority',
   description: 'Task priority levels',
});

// Main Task ObjectType
@ObjectType('Task')
export class TaskType {
   @Field(() => ID)
   id!: number;

   @Field()
   title!: string;

   @Field()
   description!: string;

   @Field(() => TaskStatus)
   status!: TaskStatus;

   @Field(() => TaskPriority)
   priority!: TaskPriority;

   @Field(() => [Int], { nullable: true })
   dependencies?: number[];

   @Field({ nullable: true })
   details?: string;

   @Field({ nullable: true })
   testStrategy?: string;

   @Field(() => Int, { nullable: true })
   complexity?: number;

   @Field(() => [SubtaskType], { nullable: true })
   subtasks?: SubtaskType[];

   @Field()
   createdAt!: Date;

   @Field()
   updatedAt!: Date;
}

// Subtask ObjectType
@ObjectType('Subtask')
export class SubtaskType {
   @Field(() => ID)
   id!: number;

   @Field()
   fullId!: string; // The full "parentId.subtaskId" format

   @Field()
   title!: string;

   @Field()
   description!: string;

   @Field(() => TaskStatus)
   status!: TaskStatus;

   @Field(() => [String], { nullable: true })
   dependencies?: string[];

   @Field({ nullable: true })
   details?: string;

   @Field({ nullable: true })
   testStrategy?: string;

   @Field()
   createdAt!: Date;

   @Field()
   updatedAt!: Date;
}

// Statistics Support Types (defined first)
@ObjectType('TaskStatusCount')
export class TaskStatusCount {
   @Field(() => Int, { nullable: true })
   pending?: number;

   @Field(() => Int, { nullable: true, name: 'inProgress' })
   inProgress?: number;

   @Field(() => Int, { nullable: true })
   done?: number;

   @Field(() => Int, { nullable: true })
   cancelled?: number;

   @Field(() => Int, { nullable: true })
   deferred?: number;

   @Field(() => Int, { nullable: true })
   blocked?: number;
}

@ObjectType('TaskPriorityCount')
export class TaskPriorityCount {
   @Field(() => Int, { nullable: true })
   high?: number;

   @Field(() => Int, { nullable: true })
   medium?: number;

   @Field(() => Int, { nullable: true })
   low?: number;
}

// Task Statistics ObjectType
@ObjectType('TaskStats')
export class TaskStatsType {
   @Field(() => Int)
   totalTasks!: number;

   @Field(() => Int)
   totalSubtasks!: number;

   @Field(() => TaskStatusCount, { nullable: true })
   tasksByStatus?: TaskStatusCount;

   @Field(() => TaskPriorityCount, { nullable: true })
   tasksByPriority?: TaskPriorityCount;
}

// Input Types for Queries
@InputType('TaskFilters')
export class TaskFiltersInput {
   @Field(() => [TaskStatus], { nullable: true })
   @IsOptional()
   @IsArray()
   status?: TaskStatus[];

   @Field(() => [TaskPriority], { nullable: true })
   @IsOptional()
   @IsArray()
   priority?: TaskPriority[];

   @Field(() => [Int], { nullable: true })
   @IsOptional()
   @IsArray()
   @IsInt({ each: true })
   @Min(1, { each: true })
   ids?: number[];

   @Field({ nullable: true })
   @IsOptional()
   @IsBoolean()
   hasDependencies?: boolean;

   @Field({ nullable: true })
   @IsOptional()
   @IsBoolean()
   hasSubtasks?: boolean;

   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   @MinLength(1)
   @MaxLength(500)
   search?: string;
}

@InputType('TaskOrderBy')
export class TaskOrderByInput {
   @Field()
   @IsString()
   @IsIn(['id', 'title', 'status', 'priority', 'createdAt', 'updatedAt'])
   field!: 'id' | 'title' | 'status' | 'priority' | 'createdAt' | 'updatedAt';

   @Field()
   @IsString()
   @IsIn(['asc', 'desc'])
   direction!: 'asc' | 'desc';
}

@InputType('TaskOptions')
export class TaskOptionsInput {
   @Field({ nullable: true, defaultValue: true })
   @IsOptional()
   @IsBoolean()
   includeSubtasks?: boolean;

   @Field(() => Int, { nullable: true })
   @IsOptional()
   @IsInt()
   @Min(1)
   @Max(100)
   limit?: number;

   @Field(() => Int, { nullable: true })
   @IsOptional()
   @IsInt()
   @Min(0)
   offset?: number;
}

// Cursor-based pagination types
@InputType('CursorPaginationInput')
export class CursorPaginationInput {
   @Field(() => Int, { nullable: true, defaultValue: 20 })
   @IsOptional()
   @IsInt()
   @Min(1)
   @Max(100)
   first?: number;

   @Field(() => Int, { nullable: true })
   @IsOptional()
   @IsInt()
   @Min(1)
   @Max(100)
   last?: number;

   @Field(() => String, { nullable: true })
   @IsOptional()
   @IsString()
   after?: string;

   @Field(() => String, { nullable: true })
   @IsOptional()
   @IsString()
   before?: string;
}

@ObjectType('PageInfo')
export class PageInfo {
   @Field()
   hasNextPage!: boolean;

   @Field()
   hasPreviousPage!: boolean;

   @Field(() => String, { nullable: true })
   startCursor?: string | null;

   @Field(() => String, { nullable: true })
   endCursor?: string | null;
}

@ObjectType('TaskEdge')
export class TaskEdge {
   @Field()
   cursor!: string;

   @Field(() => TaskType)
   node!: TaskType;
}

@ObjectType('TaskConnection')
export class TaskConnection {
   @Field(() => [TaskEdge])
   edges!: TaskEdge[];

   @Field(() => PageInfo)
   pageInfo!: PageInfo;

   @Field(() => Int)
   totalCount!: number;
}

// Args Types for Resolver Methods
@ArgsType()
export class TaskQueryArgs {
   @Field(() => Int)
   @IsInt()
   @Min(1)
   id!: number;

   @Field(() => TaskOptionsInput, { nullable: true })
   @IsOptional()
   options?: TaskOptionsInput;
}

@ArgsType()
export class TasksQueryArgs {
   @Field(() => TaskFiltersInput, { nullable: true })
   @IsOptional()
   filters?: TaskFiltersInput;

   @Field(() => TaskOrderByInput, { nullable: true })
   @IsOptional()
   orderBy?: TaskOrderByInput;

   @Field(() => TaskOptionsInput, { nullable: true })
   @IsOptional()
   options?: TaskOptionsInput;
}

@ArgsType()
export class SearchTasksArgs {
   @Field()
   @IsString()
   @MinLength(1)
   @MaxLength(500)
   searchText!: string;

   @Field(() => TaskOptionsInput, { nullable: true })
   @IsOptional()
   options?: TaskOptionsInput;
}

@ArgsType()
export class TasksConnectionArgs {
   @Field(() => TaskFiltersInput, { nullable: true })
   @IsOptional()
   filters?: TaskFiltersInput;

   @Field(() => TaskOrderByInput, { nullable: true })
   @IsOptional()
   orderBy?: TaskOrderByInput;

   @Field(() => CursorPaginationInput, { nullable: true })
   @IsOptional()
   pagination?: CursorPaginationInput;
}
