import { createTypeGraphQLSchema } from '../libs/server/graphql/schema';
import { writeFileSync } from 'fs';
import { printSchema } from 'graphql';

async function generateSchema() {
  try {
    console.log('Generating GraphQL schema...');
    const schema = await createTypeGraphQLSchema();
    const schemaString = printSchema(schema);
    writeFileSync('./schema.graphql', schemaString);
    console.log('Schema written to schema.graphql');
  } catch (error) {
    console.error('Error generating schema:', error);
    process.exit(1);
  }
}

generateSchema();