# Issues Store Migration Guide: Zustand to GraphQL + Apollo

This guide helps you migrate from the Zustand-based `useIssuesStore` to the new GraphQL-based hooks that leverage Apollo Client caching.

## Benefits of the New Approach

- **Apollo Client Caching**: Automatic caching, deduplication, and cache invalidation
- **Real-time Updates**: GraphQL subscriptions support (when implemented)
- **Optimistic Updates**: Immediate UI updates with automatic rollback on failure
- **Better Performance**: Query batching, request deduplication, and intelligent refetching
- **Server-side State**: Single source of truth from your GraphQL API
- **DevTools**: Excellent debugging with Apollo DevTools

## Migration Examples

### Before (Zustand Store)

```tsx
import { useIssuesStore } from '@/store/issues-store';

function IssuesComponent() {
   const {
      issues,
      loading,
      error,
      addIssue,
      updateIssue,
      deleteIssue,
      filterByStatus,
      searchIssues,
   } = useIssuesStore();

   // Component logic...
}
```

### After (GraphQL Hooks)

```tsx
import { useIssuesManagement } from '@/libs/client/hooks/use-issues-graphql';

function IssuesComponent() {
   const {
      issues,
      loading,
      error,
      addIssue,
      updateIssue,
      deleteIssue,
      filterByStatus,
      searchIssues,
   } = useIssuesManagement();

   // Component logic remains mostly the same!
}
```

## Hook-by-Hook Migration

### 1. Main Issues Management

**Before:**

```tsx
const store = useIssuesStore();
const issues = store.getAllIssues();
```

**After:**

```tsx
const { issues, loading, error } = useIssuesManagement();
```

### 2. Single Issue Management

**Before:**

```tsx
const issue = useIssuesStore().getIssueById(id);
```

**After:**

```tsx
const { issue, loading, error } = useIssueManagement(issueId);
// Or for just querying:
const { issue } = useIssueQueryWithCache(issueId);
```

### 3. Filtered Issues

**Before:**

```tsx
const store = useIssuesStore();
const filteredIssues = store.filterIssues({ status: ['open'], assignee: ['user1'] });
```

**After:**

```tsx
const { issues } = useFilteredIssues({ status: ['open'], assignee: ['user1'] });
```

### 4. Search Issues

**Before:**

```tsx
const store = useIssuesStore();
const searchResults = store.searchIssues('bug');
```

**After:**

```tsx
const { results } = useIssueSearch('bug');
```

### 5. Issues by Status

**Before:**

```tsx
const store = useIssuesStore();
const openIssues = store.filterByStatus('open');
```

**After:**

```tsx
const { issues } = useIssuesByStatus('open');
```

## Advanced Usage Examples

### Optimistic Updates

```tsx
function IssueCard({ issue }) {
   const { updateIssue } = useIssueManagement(issue.id);

   const handleStatusChange = async (newStatus) => {
      try {
         // This will update the UI immediately and rollback if it fails
         await updateIssue({ status: newStatus });
         toast.success('Status updated!');
      } catch (error) {
         toast.error('Failed to update status');
      }
   };

   return (
      <div>
         <h3>{issue.title}</h3>
         <StatusSelect value={issue.status} onChange={handleStatusChange} />
      </div>
   );
}
```

### Cache-Aware Components

```tsx
function IssueDetail({ issueId }) {
   const { issue, loading, fromCache } = useIssueQueryWithCache(issueId);

   return (
      <div>
         {loading && !fromCache && <Spinner />}
         {fromCache && <Badge>Cached</Badge>}
         {issue && (
            <div>
               <h1>{issue.title}</h1>
               <p>{issue.description}</p>
            </div>
         )}
      </div>
   );
}
```

### Complex Filtering with Real-time Updates

```tsx
function IssuesBoard() {
   const [filters, setFilters] = useState({
      status: ['open', 'in-progress'],
      assignee: [],
      priority: ['high'],
   });

   const { issues, loading, groupedIssues } = useFilteredIssues(filters);

   return (
      <div>
         <IssueFilters filters={filters} onChange={setFilters} />
         {Object.entries(groupedIssues).map(([status, statusIssues]) => (
            <StatusColumn key={status} status={status} issues={statusIssues} />
         ))}
      </div>
   );
}
```

## Migration Checklist

### Phase 1: Preparation

- [ ] Ensure GraphQL schema includes all Issue operations
- [ ] Verify Apollo Client is configured with proper caching
- [ ] Test GraphQL operations in GraphQL Playground/Apollo Studio

### Phase 2: Component Migration

- [ ] Replace `useIssuesStore` imports with `useIssuesManagement`
- [ ] Update component props to handle loading states
- [ ] Add error handling for GraphQL mutations
- [ ] Test optimistic updates work correctly

### Phase 3: Advanced Features

- [ ] Implement real-time subscriptions (if needed)
- [ ] Add offline support with Apollo Client persistence
- [ ] Optimize queries with field selection
- [ ] Add query polling for critical data

### Phase 4: Cleanup

- [ ] Remove old Zustand store files
- [ ] Update TypeScript interfaces if needed
- [ ] Remove mock data dependencies
- [ ] Update tests to use GraphQL mocks

## Performance Considerations

### Apollo Client Configuration

```tsx
// Recommended Apollo Client setup for issues
const client = new ApolloClient({
   uri: '/api/graphql',
   cache: new InMemoryCache({
      typePolicies: {
         Issue: {
            keyFields: ['id'],
            fields: {
               labels: {
                  merge(existing = [], incoming) {
                     return incoming;
                  },
               },
               assignee: {
                  merge(existing, incoming) {
                     return incoming;
                  },
               },
            },
         },
         Query: {
            fields: {
               issues: {
                  merge(existing = [], incoming) {
                     return incoming;
                  },
               },
            },
         },
      },
   }),
   defaultOptions: {
      watchQuery: {
         errorPolicy: 'all',
      },
   },
});
```

### Query Optimization

```tsx
// Use field selection to reduce payload size
const OPTIMIZED_ISSUES_QUERY = gql`
   query GetIssuesOptimized($limit: Int, $offset: Int) {
      issues(limit: $limit, offset: $offset) {
         id
         identifier
         title
         status {
            id
            name
            color
         }
         priority {
            id
            name
            color
         }
         assignee {
            id
            name
            avatarUrl
         }
         # Only fetch what you need
      }
   }
`;
```

## Troubleshooting

### Common Issues

1. **Cache not updating after mutations**

   - Ensure proper cache update functions in mutations
   - Use `refetchQueries` as fallback
   - Check Apollo DevTools for cache state

2. **Loading states not working**

   - Verify Apollo Client network status
   - Use `notifyOnNetworkStatusChange: true` in queries
   - Handle `networkStatus` for different loading states

3. **Optimistic updates failing**
   - Ensure optimistic response matches GraphQL schema
   - Add proper error handling
   - Test rollback behavior

### Debug Tools

```tsx
// Add this to debug cache state
function CacheDebugger() {
   const client = useApolloClient();

   const dumpCache = () => {
      console.log('Apollo Cache:', client.cache.extract());
   };

   return <button onClick={dumpCache}>Dump Cache</button>;
}
```

## Migration Timeline

- **Week 1**: Setup GraphQL hooks and test basic functionality
- **Week 2**: Migrate core components (issues list, issue detail)
- **Week 3**: Migrate filtering and search functionality
- **Week 4**: Add optimistic updates and error handling
- **Week 5**: Performance optimization and cleanup

This migration will significantly improve your app's performance and maintainability while providing a better developer experience.
