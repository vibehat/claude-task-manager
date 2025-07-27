/**
 * Client Hooks
 *
 * Centralized exports for all client-side hooks
 */

// Issues management (modular GraphQL hooks)
export * from './issues';

// GraphQL hooks
export {
   useGraphQLQuery,
   useGraphQLMutation,
   useIssues,
   useUsers,
   useProjects,
   useStatuses,
   usePriorities,
   useLabels,
   useTeams,
} from './use-graphql-data';

// Integration hooks
export { useIssuesIntegration } from './use-issues-integration';
