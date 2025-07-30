/**
 * TypeGraphQL Type Definitions for Sync Operations
 *
 * Code-first GraphQL types using TypeGraphQL decorators
 */

import { ObjectType, Field, ID, registerEnumType, InputType, ArgsType, Int } from 'type-graphql';
import {
   IsOptional,
   IsArray,
   IsString,
   MinLength,
   MaxLength,
   IsBoolean,
   IsIn,
   IsInt,
   Min,
   Max,
} from 'class-validator';
import { GraphQLJSONObject } from 'graphql-type-json';

// Enums
export enum SyncOperationType {
   TASK_UPDATE = 'TASK_UPDATE',
   TASK_CREATE = 'TASK_CREATE',
   TASK_DELETE = 'TASK_DELETE',
   STATUS_CHANGE = 'STATUS_CHANGE',
   BATCH_UPDATE = 'BATCH_UPDATE',
   FILE_SYNC = 'FILE_SYNC',
   FULL_SYNC = 'FULL_SYNC',
}

export enum SyncOperationStatus {
   PENDING = 'PENDING',
   EXECUTING = 'EXECUTING',
   COMPLETED = 'COMPLETED',
   FAILED = 'FAILED',
   CANCELLED = 'CANCELLED',
}

export enum SyncState {
   IDLE = 'IDLE',
   SYNCING = 'SYNCING',
   ERROR = 'ERROR',
}

export enum ConflictResolution {
   UI_WINS = 'UI_WINS',
   CLI_WINS = 'CLI_WINS',
   LAST_WRITE_WINS = 'LAST_WRITE_WINS',
   MERGE = 'MERGE',
   USER_RESOLVE = 'USER_RESOLVE',
}

export enum SyncChangeType {
   STARTED = 'STARTED',
   PROGRESS = 'PROGRESS',
   COMPLETED = 'COMPLETED',
   FAILED = 'FAILED',
   CONFLICT_DETECTED = 'CONFLICT_DETECTED',
   CONFLICT_RESOLVED = 'CONFLICT_RESOLVED',
}

// Register enums
registerEnumType(SyncOperationType, { name: 'SyncOperationType' });
registerEnumType(SyncOperationStatus, { name: 'SyncOperationStatus' });
registerEnumType(SyncState, { name: 'SyncState' });
registerEnumType(ConflictResolution, { name: 'ConflictResolution' });
registerEnumType(SyncChangeType, { name: 'SyncChangeType' });

// Core types
@ObjectType()
export class SyncError {
   @Field()
   code!: string;

   @Field()
   message!: string;

   @Field(() => GraphQLJSONObject, { nullable: true })
   details?: any;

   @Field(() => ID, { nullable: true })
   operationId?: string;
}

@ObjectType()
export class SyncOperation {
   @Field(() => ID)
   id!: string;

   @Field(() => SyncOperationType)
   type!: SyncOperationType;

   @Field(() => SyncOperationStatus)
   status!: SyncOperationStatus;

   @Field()
   timestamp!: Date;

   @Field()
   source!: string;

   @Field(() => [ID])
   taskIds!: string[];

   @Field(() => GraphQLJSONObject, { nullable: true })
   metadata?: any;

   @Field(() => Int)
   retryCount!: number;

   @Field(() => SyncError, { nullable: true })
   error?: SyncError;

   @Field({ nullable: true })
   completedAt?: Date;
}

@ObjectType()
export class SyncConflict {
   @Field(() => ID)
   id!: string;

   @Field(() => SyncOperationType)
   operationType!: SyncOperationType;

   @Field(() => ID)
   taskId!: string;

   @Field(() => GraphQLJSONObject)
   uiVersion!: any;

   @Field(() => GraphQLJSONObject)
   cliVersion!: any;

   @Field()
   timestamp!: Date;

   @Field()
   resolved!: boolean;

   @Field(() => ConflictResolution, { nullable: true })
   resolution?: ConflictResolution;

   @Field({ nullable: true })
   resolvedAt?: Date;
}

@ObjectType()
export class SyncHealthMetrics {
   @Field(() => Int)
   recentFailureRate!: number;

   @Field(() => Int)
   unresolvedConflicts!: number;

   @Field(() => Int)
   stalledOperations!: number;

   @Field(() => Int)
   queueSize!: number;

   @Field(() => Int)
   activeOperations!: number;
}

@ObjectType()
export class SyncHealth {
   @Field()
   status!: string;

   @Field(() => Int)
   score!: number;

   @Field()
   lastCheck!: Date;

   @Field(() => SyncHealthMetrics)
   metrics!: SyncHealthMetrics;

   @Field(() => [String])
   issues!: string[];

   @Field(() => [String])
   recommendations!: string[];

   @Field()
   uptime!: number;

   @Field(() => SyncState)
   syncState!: SyncState;

   @Field({ nullable: true })
   error?: string;
}

@ObjectType()
export class SyncStatus {
   @Field(() => SyncState)
   state!: SyncState;

   @Field(() => Int)
   queueSize!: number;

   @Field(() => [SyncOperation])
   operations!: SyncOperation[];

   @Field(() => [SyncConflict])
   conflicts!: SyncConflict[];

   @Field(() => Int)
   optimisticUpdatesCount!: number;
}

// Input types
@InputType()
export class TriggerSyncInput {
   @Field({ defaultValue: 'incremental' })
   @IsOptional()
   @IsString()
   @IsIn(['full', 'incremental', 'conflict_resolution'])
   type?: string;

   @Field({ defaultValue: 'normal' })
   @IsOptional()
   @IsString()
   @IsIn(['low', 'normal', 'high', 'urgent'])
   priority?: string;

   @Field({ defaultValue: false })
   @IsOptional()
   @IsBoolean()
   force?: boolean;

   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   description?: string;
}

@InputType()
export class ResolveConflictInput {
   @Field(() => ID)
   @IsString()
   @MinLength(1)
   conflictId!: string;

   @Field()
   @IsString()
   @IsIn(['accept_a', 'accept_b', 'merge', 'manual', 'auto'])
   resolution!: string;

   @Field(() => GraphQLJSONObject, { nullable: true })
   @IsOptional()
   resolutionData?: any;

   @Field({ defaultValue: true })
   @IsOptional()
   @IsBoolean()
   autoSync?: boolean;
}

@InputType()
export class RetryOperationInput {
   @Field(() => ID)
   @IsString()
   @MinLength(1)
   operationId!: string;

   @Field(() => Int, { defaultValue: 3 })
   @IsOptional()
   @IsInt()
   @Min(1)
   @Max(10)
   maxRetries?: number;

   @Field(() => Int, { nullable: true })
   @IsOptional()
   @IsInt()
   @Min(1)
   @Max(5)
   priority?: number;

   @Field(() => GraphQLJSONObject, { nullable: true })
   @IsOptional()
   overrideData?: any;

   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   reason?: string;
}

@InputType()
export class BatchOperationInput {
   @Field()
   @IsString()
   @IsIn(['task_update', 'task_create', 'task_delete', 'status_change'])
   type!: string;

   @Field(() => GraphQLJSONObject)
   data!: any;

   @Field(() => Int, { defaultValue: 3 })
   @IsOptional()
   @IsInt()
   @Min(1)
   @Max(5)
   priority?: number;
}

@InputType()
export class BatchUpdateInput {
   @Field(() => [BatchOperationInput])
   @IsArray()
   operations!: BatchOperationInput[];

   @Field({ defaultValue: false })
   @IsOptional()
   @IsBoolean()
   transactional?: boolean;

   @Field({ defaultValue: true })
   @IsOptional()
   @IsBoolean()
   autoSync?: boolean;
}

// Result types
@ObjectType()
export class BatchOperationResult {
   @Field(() => Int)
   index!: number;

   @Field(() => ID, { nullable: true })
   operationId?: string;

   @Field()
   success!: boolean;

   @Field(() => GraphQLJSONObject, { nullable: true })
   result?: any;

   @Field({ nullable: true })
   error?: string;
}

@ObjectType()
export class BatchUpdateResult {
   @Field(() => ID)
   batchId!: string;

   @Field(() => Int)
   totalOperations!: number;

   @Field(() => Int)
   successCount!: number;

   @Field(() => Int)
   failureCount!: number;

   @Field(() => Int)
   successRate!: number;

   @Field(() => [BatchOperationResult])
   results!: BatchOperationResult[];

   @Field(() => [ID])
   batchOperations!: string[];

   @Field()
   transactional!: boolean;

   @Field()
   completedAt!: Date;

   @Field(() => GraphQLJSONObject, { nullable: true })
   metadata?: any;
}

// Subscription types
@ObjectType()
export class SyncOperationPayload {
   @Field(() => SyncOperation)
   operation!: SyncOperation;

   @Field(() => SyncChangeType)
   changeType!: SyncChangeType;

   @Field()
   timestamp!: Date;
}

@InputType()
export class SyncOperationSubscriptionFilter {
   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   operationIds?: string[];

   @Field(() => [SyncOperationType], { nullable: true })
   @IsOptional()
   @IsArray()
   types?: SyncOperationType[];

   @Field(() => [SyncOperationStatus], { nullable: true })
   @IsOptional()
   @IsArray()
   statuses?: SyncOperationStatus[];
}
