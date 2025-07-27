import { useState, useEffect } from 'react';

// Simple GraphQL client without external dependencies
class SimpleGraphQLClient {
   private endpoint: string;

   constructor(endpoint = '/api/graphql') {
      this.endpoint = endpoint;
   }

   async query<T>(query: string, variables?: Record<string, any>): Promise<T> {
      const response = await fetch(this.endpoint, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            query,
            variables,
         }),
      });

      const result = await response.json();

      if (result.errors) {
         throw new Error(result.errors[0]?.message || 'GraphQL Error');
      }

      return result.data;
   }
}

const graphqlClient = new SimpleGraphQLClient();

// Hook for GraphQL queries
export function useGraphQLQuery<T>(
   query: string,
   variables?: Record<string, any>,
   options?: { skip?: boolean }
) {
   const [data, setData] = useState<T | null>(null);
   const [loading, setLoading] = useState(!options?.skip);
   const [error, setError] = useState<Error | null>(null);

   useEffect(() => {
      if (options?.skip) {
         return;
      }

      const executeQuery = async () => {
         try {
            setLoading(true);
            setError(null);
            const result = await graphqlClient.query<T>(query, variables);
            setData(result);
         } catch (err) {
            setError(err instanceof Error ? err : new Error('Unknown error'));
         } finally {
            setLoading(false);
         }
      };

      executeQuery();
   }, [query, variables, options?.skip]);

   const refetch = async () => {
      if (options?.skip) return;

      try {
         setLoading(true);
         setError(null);
         const result = await graphqlClient.query<T>(query, variables);
         setData(result);
      } catch (err) {
         setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
         setLoading(false);
      }
   };

   return { data, loading, error, refetch };
}

// Hook for GraphQL mutations
export function useGraphQLMutation<T, V = Record<string, any>>(mutation: string) {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<Error | null>(null);

   const mutate = async (variables?: V): Promise<T> => {
      try {
         setLoading(true);
         setError(null);
         const result = await graphqlClient.query<T>(mutation, variables);
         return result;
      } catch (err) {
         const error = err instanceof Error ? err : new Error('Unknown error');
         setError(error);
         throw error;
      } finally {
         setLoading(false);
      }
   };

   return { mutate, loading, error };
}

// Pre-built hooks for common queries
export function useIssues() {
   return useGraphQLQuery(`
    query GetIssuesSimple {
      issues {
        id
        identifier
        title
        description
        status {
          id
          name
          color
        }
        assignee {
          id
          name
          email
          avatarUrl
          status
          role
        }
        priority {
          id
          name
          icon
          color
        }
        labels {
          id
          name
          color
        }
        project {
          id
          name
          identifier
          icon
          color
        }
        createdAt
        dueDate
        rank
      }
    }
  `);
}

export function useUsers() {
   return useGraphQLQuery(`
    query GetUsers {
      users {
        id
        name
        email
        avatarUrl
        status
        role
        joinedDate
        teamIds
      }
    }
  `);
}

export function useProjects() {
   return useGraphQLQuery(`
    query GetProjects {
      projects {
        id
        name
        identifier
        description
        icon
        color
        status {
          id
          name
          color
        }
        priority {
          id
          name
          icon
          color
        }
        lead {
          id
          name
          email
          avatarUrl
        }
        members {
          id
          name
          email
          avatarUrl
        }
        createdAt
        updatedAt
      }
    }
  `);
}

export function useStatuses() {
   return useGraphQLQuery(`
    query GetStatuses {
      statuses {
        id
        name
        color
        icon
      }
    }
  `);
}

export function usePriorities() {
   return useGraphQLQuery(`
    query GetPriorities {
      priorities {
        id
        name
        icon
        color
      }
    }
  `);
}

export function useLabels() {
   return useGraphQLQuery(`
    query GetLabels {
      labels {
        id
        name
        color
      }
    }
  `);
}

export function useTeams() {
   return useGraphQLQuery(`
    query GetTeams {
      teams {
        id
        name
        identifier
        description
        members {
          id
          name
          email
          avatarUrl
        }
        projects {
          id
          name
          identifier
        }
        createdAt
      }
    }
  `);
}
