# GraphQL Client Library

A comprehensive GraphQL client library for the Task Master application, providing type-safe data fetching, caching, and React hooks.

## Features

- 🚀 **Simple & Fast**: Lightweight GraphQL client with minimal dependencies
- 🎯 **Type Safety**: Full TypeScript support with typed hooks
- 🗄️ **Caching**: Built-in caching layer with TTL and size limits
- ⚛️ **React Hooks**: Easy-to-use hooks for queries and mutations
- 🔄 **Real-time**: Polling support for live data updates
- 🛠️ **Configurable**: Flexible configuration for different environments
- 📊 **Operations**: Predefined queries and mutations for common use cases

## Quick Start

### Basic Usage

```typescript
import { useIssues, useCreateIssue } from '@/lib/graphql-client';

function IssuesList() {
  const { data: issues, loading, error } = useIssues();
  const { mutate: createIssue } = useCreateIssue();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {issues?.map(issue => (
        <div key={issue.id}>{issue.title}</div>
      ))}
      <button onClick={() => createIssue({
        input: { title: 'New Issue', description: 'Description' }
      })}>
        Create Issue
      </button>
    </div>
  );
}
```

### Direct Client Usage

```typescript
import { createGraphQLClient } from '@/lib/graphql-client';

const client = createGraphQLClient({
   endpoint: '/api/graphql',
   timeout: 30000,
});

// Execute query
const response = await client.query(`
  query GetIssues {
    issues {
      id
      title
      status { name }
    }
  }
`);

// Execute mutation
const result = await client.mutate(
   `
  mutation CreateIssue($input: CreateIssueInput!) {
    createIssue(input: $input) {
      id
      title
    }
  }
`,
   {
      input: { title: 'New Issue', description: 'Test' },
   }
);
```

## Available Hooks

### Issue Management

```typescript
import {
  useIssues,           // Get all issues
  useIssue,            // Get single issue by ID
  useCreateIssue,      // Create new issue
  useUpdateIssue,      // Update existing issue
  useDeleteIssue,      // Delete issue
  useIssueManagement   // Combined hook with all data
} from '@/lib/graphql-client';

// Example usage
function IssueComponent({ issueId }: { issueId: string }) {
  const { data: issue, loading } = useIssue(issueId);
  const { mutate: updateIssue } = useUpdateIssue();

  const handleStatusUpdate = async (newStatus: string) => {
    await updateIssue({
      id: issueId,
      input: { status: newStatus }
    });
  };

  return (
    <div>
      {loading ? 'Loading...' : issue?.title}
      <button onClick={() => handleStatusUpdate('DONE')}>
        Mark as Done
      </button>
    </div>
  );
}
```

### Task Management

```typescript
import {
   useTasks,
   useTask,
   useCreateTask,
   useUpdateTask,
   useDeleteTask,
   useTaskManagement,
} from '@/lib/graphql-client';
```

### Reference Data

```typescript
import {
   useUsers,
   useProjects,
   useStatuses,
   usePriorities,
   useLabels,
   useTeams,
} from '@/lib/graphql-client';
```

### Real-time Updates

```typescript
import { useRealtimeIssues, useRealtimeTasks } from '@/lib/graphql-client';

function LiveIssuesList() {
  // Poll for updates every 30 seconds
  const { data: issues } = useRealtimeIssues(30000);

  return (
    <div>
      {issues?.map(issue => (
        <div key={issue.id}>{issue.title}</div>
      ))}
    </div>
  );
}
```

## Caching

### Automatic Caching

```typescript
import { createCachedClient } from '@/lib/graphql-client';

const client = createCachedClient({
   endpoint: '/api/graphql',
});

// First call - fetches from server
const result1 = await client.query('query { issues { id title } }');

// Second call - returns from cache
const result2 = await client.query('query { issues { id title } }');
```

### Cache Management

```typescript
import { useGraphQLQuery } from '@/lib/graphql-client';

function IssuesList() {
  const { data, loading, refetch } = useGraphQLQuery(`
    query GetIssues {
      issues { id title status { name } }
    }
  `);

  return (
    <div>
      <button onClick={refetch}>Refresh</button>
      {/* ... */}
    </div>
  );
}
```

### Cache Configuration

```typescript
import { GraphQLCache, createCachedClient } from '@/lib/graphql-client';

const customCache = new GraphQLCache({
   ttl: 10 * 60 * 1000, // 10 minutes
   maxSize: 200, // 200 entries max
});

const client = createCachedClient({ endpoint: '/api/graphql' });
```

## Error Handling

```typescript
import { useGraphQLQuery } from '@/lib/graphql-client';

function Component() {
  const { data, loading, error } = useGraphQLQuery(
    'query { issues { id title } }',
    {},
    { errorPolicy: 'all' } // Show both data and errors
  );

  if (error) {
    console.error('GraphQL Error:', error.message);
  }

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error occurred, but showing partial data</div>}
      {data && <div>Data loaded successfully</div>}
    </div>
  );
}
```

## Configuration

### Client Configuration

```typescript
import { createGraphQLClient } from '@/lib/graphql-client';

const client = createGraphQLClient({
   endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || '/api/graphql',
   headers: {
      'Authorization': `Bearer ${token}`,
      'X-Custom-Header': 'value',
   },
   timeout: 45000, // 45 seconds
   retries: 5, // Retry failed requests 5 times
   retryDelay: 2000, // Wait 2 seconds between retries
});
```

### Hook Configuration

```typescript
import { useGraphQLQuery } from '@/lib/graphql-client';

function Component() {
   const { data } = useGraphQLQuery(
      'query GetIssues { issues { id title } }',
      {},
      {
         skip: false, // Skip query execution
         pollInterval: 30000, // Poll every 30 seconds
         errorPolicy: 'none', // Error handling policy
      }
   );
}
```

## Predefined Operations

The library includes predefined operations for common use cases:

```typescript
import { GRAPHQL_OPERATIONS } from '@/lib/graphql-client';

// Available operation categories:
GRAPHQL_OPERATIONS.TASKS; // Task management
GRAPHQL_OPERATIONS.ISSUES; // Issue tracking
GRAPHQL_OPERATIONS.USERS; // User management
GRAPHQL_OPERATIONS.PROJECTS; // Project management
GRAPHQL_OPERATIONS.REFERENCE; // Reference data (statuses, priorities, etc.)
GRAPHQL_OPERATIONS.SYSTEM; // System operations (health, CLI status)
```

## Advanced Usage

### Custom Hook Creation

```typescript
import { useGraphQLQuery } from '@/lib/graphql-client';

function useCustomIssueQuery(filters: { status?: string; assignee?: string }) {
   return useGraphQLQuery(
      `
      query GetFilteredIssues($status: String, $assignee: String) {
        issues(status: $status, assignee: $assignee) {
          id
          title
          status { name }
          assignee { name }
        }
      }
    `,
      filters,
      { skip: !filters.status && !filters.assignee }
   );
}
```

### Lazy Queries

```typescript
import { useLazyGraphQLQuery } from '@/lib/graphql-client';

function SearchComponent() {
  const [executeSearch, { data, loading }] = useLazyGraphQLQuery(`
    query SearchIssues($query: String!) {
      searchIssues(query: $query) {
        id
        title
      }
    }
  `);

  return (
    <div>
      <input
        onChange={(e) => executeSearch({ query: e.target.value })}
        placeholder="Search issues..."
      />
      {loading && <div>Searching...</div>}
      {data && <div>{data.searchIssues.length} results</div>}
    </div>
  );
}
```

## Migration from Previous Implementation

If migrating from the previous GraphQL implementation:

```typescript
// Before
import { useIssues } from '@/lib/hooks/use-graphql-data';

// After
import { useIssues } from '@/lib/graphql-client';

// The API remains the same, but with additional features:
const { data, loading, error, refetch, startPolling, stopPolling } = useIssues();
```

## TypeScript Support

Full TypeScript support with generated types:

```typescript
import type {
   GraphQLResponse,
   UseGraphQLQueryResult,
   CreateTaskVariables,
   UpdateTaskVariables,
} from '@/lib/graphql-client';

// Type-safe mutation usage
const { mutate } = useCreateTask();
await mutate({
   input: {
      title: 'New Task', // ✅ Required field
      description: 'Details', // ✅ Required field
      priority: 'HIGH', // ✅ Valid enum value
      // complexity: 'invalid' // ❌ TypeScript error
   },
});
```

## Performance Considerations

- **Caching**: Reduces redundant network requests
- **Query Deduplication**: Multiple components requesting same data share requests
- **Polling**: Configurable intervals for real-time updates
- **Error Boundaries**: Graceful error handling prevents app crashes
- **Loading States**: Smooth user experience during data fetching

## Architecture

```
lib/graphql-client/
├── client.ts          # Core GraphQL client implementation
├── hooks.ts           # React hooks for queries and mutations
├── cache.ts           # Caching layer with TTL and size limits
├── operations.ts      # Predefined GraphQL operations
├── typed-hooks.ts     # Type-safe hooks for specific operations
├── index.ts           # Main entry point and exports
└── README.md          # This documentation
```

This GraphQL client provides a robust foundation for data fetching in the Task Master application, with type safety, caching, and excellent developer experience.
