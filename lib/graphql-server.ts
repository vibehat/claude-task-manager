import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import typeDefs from './schema';
import { resolvers } from './resolvers';
import { webSocketManager } from './websocket-server';

// Create the GraphQL schema
const schema = makeExecutableSchema({
   typeDefs,
   resolvers,
});

// Context factory for GraphQL requests
async function createContext({ req }: { req: any }) {
   // Add authentication, user info, etc. here
   return {
      user: null, // Would be populated from JWT token
      request: req,
   };
}

// Context factory for GraphQL subscriptions
async function createSubscriptionContext(ctx: any) {
   // Add authentication for WebSocket connections here
   return {
      user: null, // Would be populated from connection params
      connectionParams: ctx.connectionParams,
   };
}

export async function createApolloServer(httpServer: any) {
   // Create WebSocket server for subscriptions
   const wsServer = new WebSocketServer({
      server: httpServer,
      path: '/graphql',
      verifyClient: (info) => {
         // Add WebSocket authentication logic here
         return true;
      },
   });

   // Save the returned server's info so we can shutdown this server later
   const serverCleanup = useServer(
      {
         schema,
         context: createSubscriptionContext,
         onConnect: async (ctx) => {
            console.log('GraphQL WebSocket client connected');
            return true;
         },
         onDisconnect: (ctx) => {
            console.log('GraphQL WebSocket client disconnected');
         },
         onError: (ctx, msg, errors) => {
            console.error('GraphQL WebSocket error:', errors);
         },
      },
      wsServer
   );

   // Create Apollo Server
   const server = new ApolloServer({
      schema,
      plugins: [
         // Proper shutdown for the HTTP server
         ApolloServerPluginDrainHttpServer({ httpServer }),

         // Proper shutdown for the WebSocket server
         {
            async serverWillStart() {
               return {
                  async drainServer() {
                     await serverCleanup.dispose();
                  },
               };
            },
         },
      ],
      introspection: true,
      // Enable GraphQL Playground in development
      // playground: process.env.NODE_ENV === 'development',
   });

   await server.start();

   return {
      server,
      wsServer,
      serverCleanup,
   };
}

export async function setupGraphQLWithSubscriptions(port = 4000) {
   // Create Express app
   const app = express();

   // Create HTTP server
   const httpServer = createServer(app);

   // Create Apollo Server with WebSocket support
   const { server, wsServer, serverCleanup } = await createApolloServer(httpServer);

   // Set up Express middleware for GraphQL
   app.use(
      '/graphql',
      cors<cors.CorsRequest>({
         origin: ['http://localhost:3000', 'http://localhost:4000'],
         credentials: true,
      }),
      express.json(),
      expressMiddleware(server, {
         context: createContext,
      })
   );

   // Initialize WebSocket manager with HTTP server
   webSocketManager.createServer(httpServer);

   // Health check endpoint
   app.get('/health', (req, res) => {
      res.json({
         status: 'OK',
         websockets: {
            connections: webSocketManager.getConnectionCount(),
            graphqlWsReady: wsServer?.readyState === 1,
         },
         timestamp: new Date().toISOString(),
      });
   });

   // Start the server
   httpServer.listen(port, () => {
      console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
      console.log(`🔗 GraphQL WebSocket Server ready at ws://localhost:${port}/graphql`);
      console.log(`🌐 WebSocket Server ready at ws://localhost:${port}/graphql-ws`);
   });

   // Graceful shutdown
   const shutdown = async () => {
      console.log('Shutting down GraphQL server...');

      try {
         await serverCleanup.dispose(); // GraphQL WebSocket cleanup
         webSocketManager.shutdown(); // Custom WebSocket cleanup
         await server.stop(); // Apollo Server shutdown
         httpServer.close(); // HTTP server shutdown
         console.log('GraphQL server shut down gracefully');
      } catch (error) {
         console.error('Error during shutdown:', error);
      }

      process.exit(0);
   };

   // Handle shutdown signals
   process.on('SIGTERM', shutdown);
   process.on('SIGINT', shutdown);

   return {
      app,
      httpServer,
      server,
      wsServer,
      shutdown,
   };
}

// Export for use in Next.js API routes
export { schema, resolvers, createContext };
