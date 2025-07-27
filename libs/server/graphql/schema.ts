/**
 * TypeGraphQL Schema Builder
 *
 * Builds GraphQL schema from TypeGraphQL resolvers and types
 */

import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { TaskResolver } from './resolvers/task.resolver';
import { CLIResolver } from './resolvers/cli.resolver';
import { IssueResolver } from './resolvers/issue.resolver';
import { SyncResolver } from './resolvers/sync.resolver';
import type { GraphQLSchema } from 'graphql';
import { pubSub } from './pubsub';

export async function createTypeGraphQLSchema(): Promise<GraphQLSchema> {
   const schema = await buildSchema({
      resolvers: [TaskResolver, CLIResolver, IssueResolver, SyncResolver],
      emitSchemaFile: __dirname + '/generated-schema.graphql',
      validate: {
         forbidUnknownValues: false,
      },
      // Add PubSub for subscriptions
      pubSub,
      // Add scalar resolvers for custom scalars
      scalarsMap: [
         { type: Date, scalar: require('graphql-scalars').DateTimeResolver },
         { type: Object, scalar: require('graphql-type-json').GraphQLJSONObject },
      ],
   });

   return schema;
}

export { TaskResolver, CLIResolver, IssueResolver, SyncResolver };
