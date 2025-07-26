# GraphQL Client with Apollo & Code Generation

This modern GraphQL client provides fully-typed Apollo Client integration with automatic code generation for Task Master UI.

## Features

- 🚀 **Apollo Client** with InMemoryCache and optimized caching strategies
- 📝 **GraphQL Code Generation** with automatic TypeScript types and React hooks
- 🧠 **Smart Type Policies** for efficient caching and normalization
- 🔄 **Enhanced Hooks** with better error handling and loading states
- 📦 **Memory Cache** with intelligent cache management
- 🎯 **Type Safety** with full TypeScript integration

## Quick Start

### 1. Wrap your app with GraphQL Provider

```tsx
import { GraphQLProvider } from '@/libs/client/graphql-client';

export default function App({ children }: { children: React.ReactNode }) {
   return <GraphQLProvider>{children}</GraphQLProvider>;
}
```

### 2. Use Generated Hooks

```tsx
import { useTasks, useCreateTaskMutation } from '@/libs/client/graphql-client';

function TaskList() {
   const { tasks, loading, error } = useTasks();

   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error: {error.message}</div>;

   return (
      <div>
         {tasks.map((task) => (
            <div key={task.id}>{task.title}</div>
         ))}
      </div>
   );
}
```

## Enhanced Hooks

### Query Hooks

- `useTasks(variables?)` - Enhanced tasks query with pagination support
- `useTask(taskId)` - Single task query with error handling
- `useReadyTasks(variables?)` - Ready tasks with smart caching
- `useHealth()` - System health check with polling
- `useHello()` - Simple test query

### Utility Hooks

- `useTaskList(filters?)` - Complete task list management with pagination

## Performance Optimizations

### Cache Configuration

- **cache-and-network**: Fetches from cache first, then network
- **Normalized storage**: Prevents duplicate data
- **Intelligent merging**: Combines paginated results
- **Computed fields**: Derives progress and readiness
