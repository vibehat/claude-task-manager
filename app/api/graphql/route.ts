import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs, resolvers } from '@/libs/server/graphql';
import { createGraphQLContext } from '@/libs/server/graphql/context';
import { NextRequest } from 'next/server';
// import { responseCachePlugin } from '@apollo/server-plugin-response-cache';
import { initializePerformanceMonitoring } from '@/libs/server/performance/performance-metrics';
import { createGraphQLSecurityPlugin } from '@/libs/server/security/graphql-security-plugin';

// Initialize performance monitoring
initializePerformanceMonitoring();

const server = new ApolloServer({
   typeDefs,
   resolvers,
   // Enable introspection and playground in development
   introspection: process.env.NODE_ENV !== 'production',
   plugins: [
      // Security controls - MUST be first to block malicious requests early
      createGraphQLSecurityPlugin({
         enableRateLimiting: true,
         enableInputValidation: true,
         enableQueryLogging: true,
         enableSecurityAudit: true,
         maxQueryDepth: 10,
         maxQueryComplexity: 1000,
         blockSuspiciousQueries: true,
         auditSensitiveOperations: true,
      }),
   ],
});

const handler = startServerAndCreateNextHandler(server, {
   context: async () => {
      return createGraphQLContext();
   },
});

export async function GET(request: NextRequest) {
   return handler(request);
}

export async function POST(request: NextRequest) {
   return handler(request);
}
