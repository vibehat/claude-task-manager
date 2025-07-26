import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs, resolvers } from '@/libs/server/graphql';

const server = new ApolloServer({
   typeDefs,
   resolvers,
   // Enable introspection and playground in development
   introspection: process.env.NODE_ENV !== 'production',
   plugins: [],
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
