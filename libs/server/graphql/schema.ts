/**
 * TypeGraphQL Schema Builder
 *
 * Builds GraphQL schema from TypeGraphQL resolvers and types
 */

import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { TaskResolver } from './resolvers/task.resolver';
import { GraphQLSchema } from 'graphql';

export async function createTypeGraphQLSchema(): Promise<GraphQLSchema> {
   const schema = await buildSchema({
      resolvers: [TaskResolver],
      emitSchemaFile: __dirname + '/generated-schema.graphql',
      validate: {
         forbidUnknownValues: false,
      },
   });

   return schema;
}

export { TaskResolver };
