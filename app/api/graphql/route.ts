import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import schema from '@/lib/schema';
import { mergedResolvers } from '@/lib/resolvers';

const server = new ApolloServer({
   typeDefs: schema,
   resolvers: mergedResolvers,
   // Enable introspection and playground in development
   introspection: process.env.NODE_ENV !== 'production',
   plugins: [],
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
