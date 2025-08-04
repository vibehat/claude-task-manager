# Claude Code Instructions

## Task Master AI Instructions

**Import Task Master's development workflow commands and guidelines, treat as if import is in the main CLAUDE.md file.**
@./.taskmaster/CLAUDE.md

## Critical Thinking and Feedback

**IMPORTANT: Always critically evaluate and challenge user suggestions, even when they seem reasonable.**

**USE BRUTAL HONESTY**: Don't try to be polite or agreeable. Be direct, challenge assumptions, and point out flaws immediately.

- **Question assumptions**: Don't just agree - analyze if there are better approaches
- **Offer alternative perspectives**: Suggest different solutions or point out potential issues
- **Challenge organization decisions**: If something doesn't fit logically, speak up
- **Point out inconsistencies**: Help catch logical errors or misplaced components
- **Research thoroughly**: Never skim documentation or issues - read them completely before responding
- **Use proper tools**: For GitHub issues, always use `gh` cli instead of WebFetch (WebFetch may miss critical content)
- **Admit ignorance**: Say "I don't know" instead of guessing or agreeing without understanding

This critical feedback helps improve decision-making and ensures robust solutions. Being agreeable is less valuable than being thoughtful and analytical.

### Example Behaviors

- ✅ "I disagree - that component belongs in a different file because..."
- ✅ "Have you considered this alternative approach?"
- ✅ "This seems inconsistent with the pattern we established..."
- ❌ Just implementing suggestions without evaluation

## Project Overview

This is a **Task Management UI** application built with modern web technologies to provide a beautiful interface for Claude Task Master. The application follows a feature-based architecture with real-time updates.

### Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: Zustand for lightweight state
- **Forms**: React Hook Form with Zod validation

### Architecture

**Note**: All source code is now organized under the `/src` directory following Next.js best practices.

- `/src` - All source code
  - `/src/app` - Next.js App Router pages and API routes
  - `/src/features` - Feature-based modules (issues, projects, teams, members)
  - `/src/components` - Reusable UI components
  - `/src/libs` - Shared utilities and services
  - `/src/hooks` - React hooks
  - `/src/store` - Zustand stores
  - `/src/mock-data` - Mock data files
  - `/src/styles` - Global styles
- `/public` - Static assets
- `/scripts` - Build and utility scripts
- `/docs` - Documentation
- `/server` - WebSocket server code

## Essential Development Commands

```bash
# Development
pnpm dev              # Start dev server with turbopack
pnpm lint             # Run ESLint
pnpm typecheck        # TypeScript type checking
pnpm format           # Format with Prettier

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
- **Don't over-engineer** - Avoid unnecessary complexity, focus on current requirements
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
- **File naming** - File names must match their default export:
  - Components: `ComponentName.tsx` (matches `export default ComponentName`)
  - Utilities/Functions: `functionName.ts` (matches `export default functionName`)
  - Multiple exports: descriptive name like `taskUtils.ts` or `authHelpers.ts`

### Performance & Quality

- **Lazy loading** - Use dynamic imports for large components
- **Memoization** - Use React.memo, useMemo, useCallback appropriately
- **Accessibility** - All interactive elements must be keyboard accessible
- **Testing mindset** - Write testable code, consider edge cases
- **Comments sparingly** - Code should be self-documenting, comments for "why" not "what"

## Project-Specific Guidelines

### File Organization

- **Features**: Group related components, hooks, and utilities in `/src/features/{feature-name}/`
- **Components**: Shared UI components in `/src/components/ui/` (shadcn/ui based)
- **API Routes**: API endpoints in `/src/app/api/`

### Component Development

- Use feature-based architecture: each feature has its own `views/`, `components/`, `hooks/`, `types/`, and `utils/`
- Follow existing patterns from `/src/features/issues/` as reference
- Always use TypeScript with proper interfaces
- Prefer composition over inheritance
- Use Radix UI primitives with custom styling

### State Management

- Use Zustand for global state (see `/src/features/issues/store/`)
- Local component state with useState/useReducer
- Form state with React Hook Form

### Styling Guidelines

- Use Tailwind CSS utilities, avoid custom CSS
- Follow design system tokens from `/src/components/ui/`
- Responsive design: mobile-first approach
- Dark mode support via `next-themes`

## Common Development Tasks

### Working with Issues/Tasks

```typescript
// Get issues from store
const issues = useIssueStore((state) => state.issues);
const filteredIssues = issues.filter((issue) => issue.status === 'pending');

// Update issue
const updateIssue = useIssueStore((state) => state.updateIssue);
updateIssue(issueId, { status: 'done' });
```

### Adding New Features

1. Create feature folder: `/src/features/{feature-name}/`
2. Add components in `components/`, views in `views/`
3. Create Zustand store if global state needed
4. Add any necessary API routes in `/src/app/api/`

### Component Patterns

```typescript
// Feature component example
export function IssueList({ projectId }: IssueListProps) {
  const issues = useIssueStore((state) => state.issues);
  const loading = useIssueStore((state) => state.loading);

  const projectIssues = issues.filter(issue => issue.projectId === projectId);

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

#### Development Server Issues

- Port conflicts: Check if port 3000 is in use
- Clear `.next` folder for cache issues
- Check `.env.local` for missing environment variables

## Important File References

### Configuration Files

- `/package.json` - Scripts and dependencies
- `/tsconfig.json` - TypeScript configuration
- `/tailwind.config.ts` - Tailwind CSS config
- `/.env.local` - Environment variables (create from .env.example)

### Key Source Files

- `/src/app/api/` - API endpoints
- `/src/components/ui/` - Reusable UI components
- `/src/features/tasks/` - Reference feature implementation
- `/src/store/` - Zustand stores for state management
- `/src/libs/client/` - Shared utilities and services

### Task Master Integration

- `/.taskmaster/tasks/tasks.json` - Task Master task data
- `/scripts/sync-taskmaster.ts` - Sync script
- Task IDs: Current range 28-31 for individual mode features
