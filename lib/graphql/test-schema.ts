/**
 * Test Script for TypeGraphQL Schema
 *
 * Verifies that the schema builds correctly and integrates with Prisma
 */

import 'reflect-metadata';
import { createTypeGraphQLSchema } from './schema';
import { createGraphQLContext } from './context';
import { printSchema } from 'graphql';

async function testTypeGraphQLSchema() {
   try {
      console.log('🔄 Testing TypeGraphQL schema generation...');

      // Test schema creation
      const schema = await createTypeGraphQLSchema();
      console.log('✅ Schema created successfully!');

      // Test context creation
      const context = createGraphQLContext();
      console.log('✅ GraphQL context created successfully!');

      // Test database connection
      const isHealthy = await context.taskMasterDB.healthCheck();
      console.log(`📊 Database health check: ${isHealthy ? '✅ Connected' : '❌ Failed'}`);

      // Print schema (first 500 characters for preview)
      const schemaString = printSchema(schema);
      console.log('\n📋 Generated Schema Preview:');
      console.log(schemaString.substring(0, 500) + '...');

      // Cleanup
      await context.taskMasterDB.disconnect();
      await context.taskMasterSync.disconnect();

      console.log('\n✅ TypeGraphQL setup test completed successfully!');
   } catch (error) {
      console.error('❌ TypeGraphQL test failed:', error);
   }
}

// Run test if this file is executed directly
if (require.main === module) {
   testTypeGraphQLSchema().catch(console.error);
}

export { testTypeGraphQLSchema };
