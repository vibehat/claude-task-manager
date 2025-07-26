import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { applyCors } from '@/lib/cors';
import schema from '@/lib/schema';
import { resolvers } from '@/lib/resolvers';

const server = new ApolloServer({
   typeDefs: schema,
   resolvers,
   // Enable introspection and playground in development
   introspection: process.env.NODE_ENV !== 'production',
   plugins: [],
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   // Apply CORS in development
   const corsHandled = await applyCors(req, res);
   if (corsHandled) {
      return; // OPTIONS request was handled
   }

   // Use the Apollo Server Next.js integration
   return await startServerAndCreateNextHandler(server)(req, res);
};

export { handler as GET, handler as POST, handler as OPTIONS };
