/**
 * GraphQL PubSub Configuration
 *
 * Centralized PubSub instance and topic definitions for GraphQL subscriptions
 */

import { createPubSub } from '@graphql-yoga/subscription';
import type { IssueUpdatePayload } from './types/issue.types';
import type { SyncOperationPayload } from './types/sync.types';

export const enum Topic {
   ISSUE_UPDATED = 'ISSUE_UPDATED',
   SYNC_OPERATION = 'SYNC_OPERATION',
   TASK_UPDATED = 'TASK_UPDATED',
   CLI_COMMAND = 'CLI_COMMAND',
}

export const pubSub = createPubSub<
   {
      [Topic.ISSUE_UPDATED]: [IssueUpdatePayload];
      [Topic.SYNC_OPERATION]: [SyncOperationPayload];
      [Topic.TASK_UPDATED]: [any]; // TaskUpdatePayload when available
      [Topic.CLI_COMMAND]: [any]; // CLICommandPayload when available
   } & Record<string, [any]> // Fallback for dynamic topics
>();
