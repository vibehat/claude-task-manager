import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs, resolvers } from '@/libs/server/graphql';
import { createQueryComplexityPlugin } from '@/libs/server/performance/query-complexity';
import { getComplexityConfigWithOverrides } from '@/libs/server/performance/complexity-config';
import { responseCachePlugin } from '@apollo/server-plugin-response-cache';
import { getRedisCache } from '@/libs/server/performance/redis-cache';
import {
   createPerformanceMonitoringPlugin,
   defaultQueryTracker,
   initializePerformanceMonitoring,
} from '@/libs/server/performance/performance-metrics';
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

      // Query complexity analysis and depth limiting
      createQueryComplexityPlugin(getComplexityConfigWithOverrides()),

      // Response caching with Redis
      responseCachePlugin({
         cache: getRedisCache(),
         sessionId: (requestContext) => {
            // Use user-specific caching if authentication is added later
            return requestContext.request.http?.headers.get('x-user-id') || 'anonymous';
         },
      }),

      // Performance monitoring and metrics collection
      createPerformanceMonitoringPlugin(defaultQueryTracker),
   ],
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
