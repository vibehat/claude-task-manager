/**
 * TypeGraphQL Type Definitions for Issues
 *
 * Code-first GraphQL types using TypeGraphQL decorators
 */

import { ObjectType, Field, ID, registerEnumType, InputType, Int } from 'type-graphql';
import { PageInfo, TaskType } from './task.types';
import {
   IsOptional,
   IsArray,
   IsString,
   MinLength,
   MaxLength,
   IsEmail,
   IsIn,
} from 'class-validator';

// Enums
export enum UserStatus {
   ONLINE = 'ONLINE',
   OFFLINE = 'OFFLINE',
   AWAY = 'AWAY',
}

export enum UserRole {
   MEMBER = 'MEMBER',
   ADMIN = 'ADMIN',
   GUEST = 'GUEST',
}

export enum IssueChangeType {
   CREATED = 'CREATED',
   UPDATED = 'UPDATED',
   DELETED = 'DELETED',
   STATUS_CHANGED = 'STATUS_CHANGED',
   ASSIGNED = 'ASSIGNED',
   PRIORITY_CHANGED = 'PRIORITY_CHANGED',
   LABEL_ADDED = 'LABEL_ADDED',
   LABEL_REMOVED = 'LABEL_REMOVED',
}

export enum IssueType {
   TASK = 'TASK',
   SUBTASK = 'SUBTASK',
}

// Register enums
registerEnumType(UserStatus, { name: 'UserStatus' });
registerEnumType(UserRole, { name: 'UserRole' });
registerEnumType(IssueChangeType, { name: 'IssueChangeType' });
registerEnumType(IssueType, { name: 'IssueType' });

// Base types
@ObjectType()
export class Status {
   @Field(() => ID)
   id!: string;

   @Field()
   name!: string;

   @Field()
   color!: string;

   @Field({ nullable: true })
   icon?: string;
}

@ObjectType()
export class Priority {
   @Field(() => ID)
   id!: string;

   @Field()
   name!: string;

   @Field()
   icon!: string;

   @Field()
   color!: string;
}

@ObjectType()
export class Label {
   @Field(() => ID)
   id!: string;

   @Field()
   name!: string;

   @Field()
   color!: string;

   @Field({ nullable: true })
   description?: string;

   @Field()
   createdAt!: Date;

   @Field()
   updatedAt!: Date;
}

@ObjectType()
export class User {
   @Field(() => ID)
   id!: string;

   @Field()
   name!: string;

   @Field()
   email!: string;

   @Field()
   avatarUrl!: string;

   @Field(() => UserStatus)
   status!: UserStatus;

   @Field(() => UserRole)
   role!: UserRole;

   @Field()
   joinedDate!: Date;

   @Field(() => [ID])
   teamIds!: string[];

   @Field()
   createdAt!: Date;

   @Field()
   updatedAt!: Date;

   @Field(() => [Issue])
   assignedIssues!: Issue[];
}

@ObjectType()
export class Project {
   @Field(() => ID)
   id!: string;

   @Field()
   name!: string;

   @Field()
   identifier!: string;

   @Field({ nullable: true })
   description?: string;

   @Field({ nullable: true })
   icon?: string;

   @Field()
   color!: string;

   @Field(() => Status)
   status!: Status;

   @Field(() => Priority)
   priority!: Priority;

   @Field(() => User, { nullable: true })
   lead?: User;

   @Field(() => [User])
   members!: User[];

   @Field(() => [Issue])
   issues!: Issue[];

   @Field()
   createdAt!: Date;

   @Field()
   updatedAt!: Date;
}

@ObjectType()
export class Issue {
   @Field(() => ID)
   id!: string;

   @Field()
   identifier!: string;

   @Field()
   title!: string;

   @Field()
   description!: string;

   @Field()
   status!: string;

   @Field(() => User, { nullable: true })
   assignee?: User;

   @Field()
   priority!: string;

   @Field(() => [Label])
   labels!: Label[];

   @Field(() => Project, { nullable: true })
   project?: Project;

   @Field(() => [Issue], { nullable: true })
   subIssues?: Issue[];

   @Field(() => Issue, { nullable: true })
   parentIssue?: Issue;

   @Field({ nullable: true })
   parentIssueId?: string;

   @Field()
   createdAt!: Date;

   @Field()
   updatedAt!: Date;

   @Field({ nullable: true })
   dueDate?: Date;

   @Field()
   rank!: string;

   @Field({ nullable: true })
   cycleId?: string;

   @Field(() => IssueType)
   issueType!: IssueType;

   @Field(() => Int, { nullable: true })
   taskId?: number;

   @Field({ nullable: true })
   subtaskId?: string;

   @Field(() => [String], { nullable: true })
   subissues?: string[];

   @Field(() => TaskType, { nullable: true })
   task?: TaskType;
}

@ObjectType()
export class Team {
   @Field(() => ID)
   id!: string;

   @Field()
   name!: string;

   @Field()
   identifier!: string;

   @Field({ nullable: true })
   description?: string;

   @Field(() => [User])
   members!: User[];

   @Field(() => [Project])
   projects!: Project[];

   @Field()
   createdAt!: Date;
}

// Connection types for pagination
@ObjectType()
export class IssueEdge {
   @Field(() => Issue)
   node!: Issue;

   @Field()
   cursor!: string;
}

@ObjectType()
export class IssueConnection {
   @Field(() => [IssueEdge])
   edges!: IssueEdge[];

   @Field(() => [Issue])
   nodes!: Issue[];

   @Field(() => PageInfo)
   pageInfo!: PageInfo;

   @Field(() => Int)
   totalCount!: number;
}

@ObjectType()
export class UserEdge {
   @Field(() => User)
   node!: User;

   @Field()
   cursor!: string;
}

@ObjectType()
export class UserConnection {
   @Field(() => [UserEdge])
   edges!: UserEdge[];

   @Field(() => [User])
   nodes!: User[];

   @Field(() => PageInfo)
   pageInfo!: PageInfo;

   @Field(() => Int)
   totalCount!: number;
}

@ObjectType()
export class ProjectEdge {
   @Field(() => Project)
   node!: Project;

   @Field()
   cursor!: string;
}

@ObjectType()
export class ProjectConnection {
   @Field(() => [ProjectEdge])
   edges!: ProjectEdge[];

   @Field(() => [Project])
   nodes!: Project[];

   @Field(() => PageInfo)
   pageInfo!: PageInfo;

   @Field(() => Int)
   totalCount!: number;
}

@ObjectType()
export class LabelEdge {
   @Field(() => Label)
   node!: Label;

   @Field()
   cursor!: string;
}

@ObjectType()
export class LabelConnection {
   @Field(() => [LabelEdge])
   edges!: LabelEdge[];

   @Field(() => [Label])
   nodes!: Label[];

   @Field(() => PageInfo)
   pageInfo!: PageInfo;

   @Field(() => Int)
   totalCount!: number;
}

// Input types
@InputType()
export class CreateIssueInput {
   @Field()
   @IsString()
   @MinLength(1)
   @MaxLength(200)
   title!: string;

   @Field()
   @IsString()
   @MinLength(1)
   description!: string;

   @Field(() => ID)
   projectId!: string;

   @Field(() => ID, { nullable: true })
   @IsOptional()
   statusId?: string;

   @Field(() => ID, { nullable: true })
   @IsOptional()
   assigneeId?: string;

   @Field(() => ID)
   priorityId!: string;

   @Field(() => [ID], { defaultValue: [] })
   @IsOptional()
   @IsArray()
   labelIds?: string[];

   @Field({ nullable: true })
   @IsOptional()
   dueDate?: Date;

   @Field({ nullable: true })
   @IsOptional()
   rank?: string;
}

@InputType()
export class UpdateIssueInput {
   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   @MinLength(1)
   @MaxLength(200)
   title?: string;

   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   description?: string;

   @Field(() => ID, { nullable: true })
   @IsOptional()
   statusId?: string;

   @Field(() => ID, { nullable: true })
   @IsOptional()
   assigneeId?: string;

   @Field(() => ID, { nullable: true })
   @IsOptional()
   priorityId?: string;

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   labelIds?: string[];

   @Field({ nullable: true })
   @IsOptional()
   dueDate?: Date;

   @Field({ nullable: true })
   @IsOptional()
   rank?: string;
}

@InputType()
export class CreateProjectInput {
   @Field()
   @IsString()
   @MinLength(1)
   @MaxLength(100)
   name!: string;

   @Field()
   @IsString()
   @MinLength(1)
   @MaxLength(20)
   identifier!: string;

   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   description?: string;

   @Field()
   @IsString()
   color!: string;

   @Field(() => ID, { nullable: true })
   @IsOptional()
   leadId?: string;

   @Field(() => [ID], { defaultValue: [] })
   @IsOptional()
   @IsArray()
   memberIds?: string[];
}

@InputType()
export class UpdateProjectInput {
   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   @MinLength(1)
   @MaxLength(100)
   name?: string;

   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   description?: string;

   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   color?: string;

   @Field(() => ID, { nullable: true })
   @IsOptional()
   leadId?: string;

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   memberIds?: string[];
}

@InputType()
export class CreateUserInput {
   @Field()
   @IsString()
   @MinLength(1)
   @MaxLength(100)
   name!: string;

   @Field()
   @IsEmail()
   email!: string;

   @Field(() => UserRole, { defaultValue: UserRole.MEMBER })
   @IsOptional()
   role?: UserRole;

   @Field(() => [ID], { defaultValue: [] })
   @IsOptional()
   @IsArray()
   teamIds?: string[];
}

@InputType()
export class UpdateUserInput {
   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   @MinLength(1)
   @MaxLength(100)
   name?: string;

   @Field({ nullable: true })
   @IsOptional()
   @IsEmail()
   email?: string;

   @Field(() => UserRole, { nullable: true })
   @IsOptional()
   role?: UserRole;

   @Field(() => UserStatus, { nullable: true })
   @IsOptional()
   status?: UserStatus;

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   teamIds?: string[];
}

@InputType()
export class CreateLabelInput {
   @Field()
   @IsString()
   @MinLength(1)
   @MaxLength(50)
   name!: string;

   @Field()
   @IsString()
   color!: string;
}

@InputType()
export class UpdateLabelInput {
   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   @MinLength(1)
   @MaxLength(50)
   name?: string;

   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   color?: string;
}

// Filter and pagination inputs
@InputType()
export class IssueFilterInput {
   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   search?: string;

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   statusIds?: string[];

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   assigneeIds?: string[];

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   projectIds?: string[];

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   priorityIds?: string[];

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   labelIds?: string[];
}

@InputType()
export class UserFilterInput {
   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   search?: string;

   @Field(() => UserRole, { nullable: true })
   @IsOptional()
   role?: UserRole;

   @Field(() => UserStatus, { nullable: true })
   @IsOptional()
   status?: UserStatus;

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   teamIds?: string[];
}

@InputType()
export class ProjectFilterInput {
   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   search?: string;

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   statusIds?: string[];

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   leadIds?: string[];
}

@InputType()
export class LabelFilterInput {
   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   search?: string;

   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   name?: string;
}

@InputType()
export class PaginationInput {
   @Field(() => Int, { nullable: true })
   @IsOptional()
   limit?: number;

   @Field(() => Int, { nullable: true })
   @IsOptional()
   first?: number;

   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   after?: string;

   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   before?: string;
}

@InputType()
export class IssueOrderByInput {
   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   @IsIn([
      'ID',
      'IDENTIFIER',
      'TITLE',
      'STATUS',
      'PRIORITY',
      'RANK',
      'CREATED_AT',
      'UPDATED_AT',
      'DUE_DATE',
   ])
   field?:
      | 'ID'
      | 'IDENTIFIER'
      | 'TITLE'
      | 'STATUS'
      | 'PRIORITY'
      | 'RANK'
      | 'CREATED_AT'
      | 'UPDATED_AT'
      | 'DUE_DATE';

   @Field({ nullable: true })
   @IsOptional()
   @IsString()
   @IsIn(['ASC', 'DESC'])
   direction?: 'ASC' | 'DESC';
}

// Subscription types
@ObjectType()
export class IssueUpdatePayload {
   @Field(() => Issue)
   issue!: Issue;

   @Field(() => IssueChangeType)
   changeType!: IssueChangeType;

   @Field()
   timestamp!: Date;

   @Field()
   source!: string;

   @Field({ nullable: true })
   previousState?: string;
}

@InputType()
export class IssueSubscriptionFilter {
   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   issueIds?: string[];

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   projectIds?: string[];

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   statusIds?: string[];

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   assigneeIds?: string[];

   @Field(() => [ID], { nullable: true })
   @IsOptional()
   @IsArray()
   priorityIds?: string[];
}
