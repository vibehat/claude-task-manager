import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { createTypeGraphQLSchema } from '@/libs/server/graphql';
import { createGraphQLContext } from '@/libs/server/graphql/context';
import type { NextRequest } from 'next/server';
// import { responseCachePlugin } from '@apollo/server-plugin-response-cache';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

// Create server with lazy schema initialization to avoid top-level await
const createServer = async () => {
   const schema = await createTypeGraphQLSchema();

   return new ApolloServer({
      schema,
      // Enable introspection and playground in development
      introspection: process.env.NODE_ENV !== 'production',
      plugins: [
         // Apollo Studio Explorer in development only
         ...(process.env.NODE_ENV !== 'production'
            ? [
                 ApolloServerPluginLandingPageLocalDefault({
                    includeCookies: true,
                 }),
              ]
            : []),
      ],
   });
};

let serverPromise: Promise<ApolloServer> | null = null;

const getServer = () => {
   serverPromise ??= createServer();
   return serverPromise;
};

export async function GET(request: NextRequest): Promise<Response> {
   const server = await getServer();
   const handler = startServerAndCreateNextHandler(server, {
      context: async () => {
         return createGraphQLContext();
      },
   });
   return handler(request);
}

export async function POST(request: NextRequest): Promise<Response> {
   const server = await getServer();
   const handler = startServerAndCreateNextHandler(server, {
      context: async () => {
         return createGraphQLContext();
      },
   });
   return handler(request);
}
