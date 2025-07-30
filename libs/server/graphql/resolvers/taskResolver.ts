/**
 * Task Resolver - TypeGraphQL Implementation
 *
 * Code-first GraphQL resolver for Task queries using Prisma client integration
 */

import { Resolver } from 'type-graphql';
import { TaskType } from '../types/taskTypes';
import { BaseResolver } from './baseResolver';

@Resolver(() => TaskType)
export class TaskResolver extends BaseResolver {}
