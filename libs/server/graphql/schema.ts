/**
 * TypeGraphQL Schema Builder
 *
 * Builds GraphQL schema from TypeGraphQL resolvers and types
 */

import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { DateTimeResolver } from 'graphql-scalars';
import { GraphQLJSONObject } from 'graphql-type-json';
// import { CLIResolver } from './resolvers/cli.resolver'; // Temporarily disabled
import { IssueResolver } from './resolvers/issue.resolver'; // Temporarily disabled
import {
   // Import all generated resolvers (CRUD + Relations)
   resolvers as generatedResolvers,
} from './generated';
import type { GraphQLSchema } from 'graphql';
import { pubSub } from './pubsub';

export async function createTypeGraphQLSchema(): Promise<GraphQLSchema> {
   const schema = await buildSchema({
      resolvers: [
         // Custom resolvers temporarily disabled for testing
         // CLIResolver, // Temporarily disabled due to TypeGraphQL issues
         IssueResolver, // Temporarily disabled for testing
         // All generated resolvers (CRUD + Relations)
         ...generatedResolvers,
      ],
      emitSchemaFile: './schema.graphql',
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

// export { CLIResolver }; // Temporarily disabled
