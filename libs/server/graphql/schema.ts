/**
 * TypeGraphQL Schema Builder
 *
 * Builds GraphQL schema from TypeGraphQL resolvers and types
 */

import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { DateTimeResolver } from 'graphql-scalars';
import { GraphQLJSONObject } from 'graphql-type-json';
import { CLIResolver } from './resolvers/cli.resolver';
import {
   // Import generated CRUD resolvers
   UserCrudResolver,
   ProjectCrudResolver,
   LabelCrudResolver,
   TeamCrudResolver,
   TeamMemberCrudResolver,
   TeamProjectCrudResolver,
   CycleCrudResolver,
   IssueLabelCrudResolver,
   IssueStatusCrudResolver,
   IssuePriorityCrudResolver,
   TaskDependencyCrudResolver,
   TaskMasterMetadataCrudResolver,
   TaskCrudResolver,
   SubtaskCrudResolver,
   IssueCrudResolver,
   SyncOperationCrudResolver,
   SyncConflictCrudResolver,
} from './generated';
import type { GraphQLSchema } from 'graphql';
import { pubSub } from './pubsub';

export async function createTypeGraphQLSchema(): Promise<GraphQLSchema> {
   const schema = await buildSchema({
      resolvers: [
         // Custom resolvers
         CLIResolver,
         // Generated CRUD resolvers for supporting models
         UserCrudResolver,
         ProjectCrudResolver,
         LabelCrudResolver,
         TeamCrudResolver,
         TeamMemberCrudResolver,
         TeamProjectCrudResolver,
         CycleCrudResolver,
         IssueLabelCrudResolver,
         IssueStatusCrudResolver,
         IssuePriorityCrudResolver,
         TaskDependencyCrudResolver,
         TaskMasterMetadataCrudResolver,
         // Generated CRUD resolvers for core models (replacing custom ones)
         TaskCrudResolver,
         SubtaskCrudResolver,
         IssueCrudResolver,
         SyncOperationCrudResolver,
         SyncConflictCrudResolver,
      ],
      emitSchemaFile: __dirname + '/generated-schema.graphql',
      validate: {
         forbidUnknownValues: false,
      },
      // Add PubSub for subscriptions
      pubSub,
      // Add scalar resolvers for custom scalars
      scalarsMap: [
         { type: Date, scalar: DateTimeResolver },
         { type: Object, scalar: GraphQLJSONObject },
      ],
   });

   return schema;
}

export { CLIResolver };
