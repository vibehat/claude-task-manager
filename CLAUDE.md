# Claude Code Instructions

## Task Master AI Instructions

**Import Task Master's development workflow commands and guidelines, treat as if import is in the main CLAUDE.md file.**
@./.taskmaster/CLAUDE.md

## Project Overview

This is a **Task Management UI** application built with modern web technologies to provide a beautiful interface for Claude Task Master. The application follows a feature-based architecture with GraphQL API and real-time updates.

### Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript with strict mode
- **API**: GraphQL with Apollo Server & Client
- **Database**: SQLite with Prisma ORM
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: Zustand for lightweight state
- **Forms**: React Hook Form with Zod validation

### Architecture

- `/app` - Next.js App Router pages and API routes
- `/features` - Feature-based modules (issues, projects, teams, members)
- `/components` - Reusable UI components
- `/libs` - Shared utilities and GraphQL client
- `/prisma` - Database schema and migrations

## Essential Development Commands

```bash
# Development
pnpm dev              # Start dev server with turbopack
pnpm lint             # Run ESLint
pnpm typecheck        # TypeScript type checking
pnpm format           # Format with Prettier

# Database & GraphQL
pnpm prisma:generate  # Generate Prisma client
pnpm graphql:codegen  # Generate GraphQL types
pnpm codegen          # Run both generators
pnpm prisma:studio    # Open Prisma Studio

# Testing
pnpm test             # Run Jest tests

# Task Master Sync
pnpm sync:taskmaster  # Sync tasks from Task Master
pnpm sync:taskmaster:watch  # Watch mode
pnpm sync:taskmaster:force  # Force sync

# Build & Production
pnpm build            # Build for production
pnpm start            # Start production server
```

## Coding Rules

### Core Principles

- **Use your tools, don't guess** - Always use Read, Grep, and other tools to understand code before making changes
- **Use pnpm for package management** - Never use npm or yarn, all commands should use pnpm
- **Implement MVP (Minimum Viable Product)** - Focus on working solutions first, optimize later
- **Follow SOLID, KISS, DRY principles** - Keep it Simple, Don't Repeat Yourself, Single Responsibility
- **Make it work, then make it clean** - Functionality first, refactor second, avoid over-engineering
- **Minimize footprint** - Add only necessary dependencies, keep bundle size small

### TypeScript Standards

- **Strict mode always** - TypeScript strict mode is enabled, no `any` types
- **Explicit types** - Define interfaces for all props, return types for functions
- **Type imports** - Use `import type` for type-only imports
- **Null safety** - Handle null/undefined cases explicitly

### React & Next.js Patterns

- **Functional components only** - No class components
- **Server components by default** - Use `'use client'` only when needed
- **Custom hooks** - Extract complex logic into custom hooks with `use` prefix
- **Error boundaries** - Wrap features with error boundaries for resilience
- **Loading states** - Always handle loading, error, and empty states

### Code Organization

- **Feature-based structure** - Group by feature, not by file type
- **Barrel exports** - Use index.ts files for clean imports
- **Consistent naming** - Components PascalCase, utilities camelCase, constants UPPER_SNAKE_CASE
- **File naming** - Components as `component-name.tsx`, utilities as `util-name.ts`

### Performance & Quality

- **Lazy loading** - Use dynamic imports for large components
- **Memoization** - Use React.memo, useMemo, useCallback appropriately
- **Accessibility** - All interactive elements must be keyboard accessible
- **Testing mindset** - Write testable code, consider edge cases
- **Comments sparingly** - Code should be self-documenting, comments for "why" not "what"

## Project-Specific Guidelines

### File Organization

- **Features**: Group related components, hooks, and utilities in `/features/{feature-name}/`
- **Components**: Shared UI components in `/components/ui/` (shadcn/ui based)
- **GraphQL**: Schema in `/libs/server/graphql/`, generated types in `/libs/client/graphql-client/generated/`
- **API Routes**: GraphQL endpoint at `/app/api/graphql/route.ts`

### Component Development

- Use feature-based architecture: each feature has its own `views/`, `components/`, `hooks/`, `types/`, and `utils/`
- Follow existing patterns from `/features/issues/` as reference
- Always use TypeScript with proper interfaces
- Prefer composition over inheritance
- Use Radix UI primitives with custom styling

### GraphQL Workflow

1. Define schema in `/libs/server/graphql/schema/`
2. Run `pnpm graphql:codegen` to generate types
3. Use generated hooks from `/libs/client/hooks/`
4. Follow resolver patterns in `/libs/server/graphql/resolvers/`

### State Management

- Use Zustand for global state (see `/features/issues/store/`)
- Prefer React Query/Apollo Client for server state
- Local component state with useState/useReducer
- Form state with React Hook Form

### Styling Guidelines

- Use Tailwind CSS utilities, avoid custom CSS
- Follow design system tokens from `/components/ui/`
- Responsive design: mobile-first approach
- Dark mode support via `next-themes`

## Common Development Tasks

### Working with Issues/Tasks

```typescript
// Query issues
const { data } = useSearchIssuesQuery({
   variables: { filter: { status: ['pending'] } },
});

// Update issue
const [updateIssue] = useUpdateIssueMutation();
await updateIssue({
   variables: { id: issueId, input: { status: 'done' } },
});
```

### Adding New Features

1. Create feature folder: `/features/{feature-name}/`
2. Add components in `components/`, views in `views/`
3. Define GraphQL schema if needed
4. Run `pnpm codegen` to generate types
5. Create Zustand store if global state needed

### Database Operations

```bash
# Make schema changes in prisma/schema.prisma
pnpm prisma migrate dev --name "description"
pnpm prisma:generate
pnpm codegen  # Regenerate GraphQL types
```

### Component Patterns

```typescript
// Feature component example
export function IssueList({ projectId }: IssueListProps) {
  const { data, loading } = useIssuesQuery({
    variables: { projectId }
  });

  if (loading) return <Skeleton />;
  return <>{/* render issues */}</>;
}
```

## Troubleshooting

### Common Issues

#### TypeScript Errors

```bash
pnpm typecheck        # Check for type errors
pnpm typecheck:strict # Strict mode checking
```

#### GraphQL Codegen Issues

- Ensure schema is valid: check `/libs/server/graphql/schema/`
- Run `pnpm codegen` after schema changes
- Clear generated files: `rm -rf libs/client/graphql-client/generated/`

#### Build Failures

```bash
# Clear Next.js cache
rm -rf .next
pnpm build

# Clear all caches
rm -rf .next node_modules/.cache
pnpm install
pnpm build
```

#### Database Sync Issues

```bash
# Reset database
pnpm prisma migrate reset
pnpm prisma:generate
pnpm sync:taskmaster:force
```

#### Development Server Issues

- Port conflicts: Check if port 3000 is in use
- Clear `.next` folder for cache issues
- Check `.env.local` for missing environment variables

## Important File References

### Configuration Files

- `/package.json` - Scripts and dependencies
- `/tsconfig.json` - TypeScript configuration
- `/tailwind.config.ts` - Tailwind CSS config
- `/codegen.yml` - GraphQL code generation config
- `/prisma/schema.prisma` - Database schema
- `/.env.local` - Environment variables (create from .env.example)

### Key Source Files

- `/app/api/graphql/route.ts` - GraphQL API endpoint
- `/libs/server/graphql/schema/` - GraphQL schema definitions
- `/libs/server/graphql/resolvers/` - GraphQL resolvers
- `/libs/client/apollo-client.ts` - Apollo Client setup
- `/components/ui/` - Reusable UI components
- `/features/issues/` - Reference feature implementation

### Task Master Integration

- `/.taskmaster/tasks/tasks.json` - Task Master task data
- `/scripts/sync-taskmaster-to-prisma.ts` - Sync script
- Task IDs: Current range 28-31 for individual mode features
