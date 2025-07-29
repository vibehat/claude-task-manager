/**
 * GraphQL PubSub Configuration
 *
 * Centralized PubSub instance and topic definitions for GraphQL subscriptions
 */

import { PubSub } from 'graphql-subscriptions';
import type { IssueUpdatePayload } from './types/issueTypes';
import type { SyncOperationPayload } from './types/syncTypes';

export const enum Topic {
   ISSUE_UPDATED = 'ISSUE_UPDATED',
   SYNC_OPERATION = 'SYNC_OPERATION',
   TASK_UPDATED = 'TASK_UPDATED',
   CLI_COMMAND = 'CLI_COMMAND',
}

export const pubSub = new PubSub();
