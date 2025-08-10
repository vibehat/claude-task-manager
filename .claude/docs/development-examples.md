# Development Examples

## Working with Issues/Tasks

```typescript
// Get issues from store
const issues = useIssueStore((state) => state.issues);
const filteredIssues = issues.filter((issue) => issue.status === 'pending');

// Update issue
const updateIssue = useIssueStore((state) => state.updateIssue);
updateIssue(issueId, { status: 'done' });
```

## Component Pattern

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

## Adding New Features

1. Create feature folder: `/src/features/{feature-name}/`
2. Add components in `components/`, views in `views/`
3. Create Zustand store if global state needed
4. Add API routes in `/src/app/api/` if needed

## Troubleshooting

### TypeScript Errors

```bash
pnpm typecheck        # Check for type errors
```

### Build Failures

```bash
rm -rf .next && pnpm build  # Clear cache and rebuild
```

### Development Issues

- Port conflicts: Check if port 3000 is in use
- Clear `.next` folder for cache issues
- Check `.env.local` for missing environment variables
