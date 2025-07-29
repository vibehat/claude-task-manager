/**
 * Modern GraphQL Client with Apollo Client and CodeGen
 *
 * This module provides a fully-typed GraphQL client using Apollo Client
 * with automatic code generation for types and hooks.
 */

// Apollo Client exports
export { apolloClient as client, apolloClient, cacheHelpers } from './apolloClient';

// Generated types and hooks
export * from './generated';

// Enhanced hooks with better UX (comment out for now until we create the hooks)
// export * from './hooks';

// Re-export Apollo Client utilities for convenience
export {
   useQuery,
   useMutation,
   useSubscription,
   useLazyQuery,
   gql,
   type QueryHookOptions,
   type MutationHookOptions,
   type SubscriptionHookOptions,
   type LazyQueryHookOptions,
} from '@apollo/client';

// Provider component for React apps
export { ApolloProvider } from '@apollo/client';
export { GraphQLProvider } from './GraphQLProvider';

// Error handling utilities
export { ApolloError, isApolloError } from '@apollo/client';

// Cache utilities
export { InMemoryCache } from '@apollo/client';
