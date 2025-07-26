/**
 * Client Hooks
 *
 * Centralized exports for all client-side hooks
 */

// Issues management (modular GraphQL hooks)
export * from './issues';

// Other hooks
export { useGraphQLData } from './use-graphql-data';

// Legacy hooks (deprecated - use issues module instead)
export { useIssuesStore } from './use-issues-graphql';
export { useIssuesIntegration } from './use-issues-integration';
