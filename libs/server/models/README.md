# ⚠️ DEPRECATED: Models Directory

This directory has been **DEPRECATED** in favor of the new services-based architecture.

## Migration Guide

**OLD** (libs/server/models):

```typescript
import { IssueModel, TaskModel } from 'libs/server/models';

const issueModel = new IssueModel(prisma);
const taskModel = new TaskModel(prisma);
```

**NEW** (libs/server/services):

```typescript
import { createServices, IssueService, TaskService } from 'libs/server/services';

// Option 1: Use service container
const services = createServices(prisma);
const issues = services.issue;
const tasks = services.task;

// Option 2: Individual services
const issueService = new IssueService(prisma);
const taskService = new TaskService(prisma);
```

## Key Improvements in Services

1. **Better TypeScript Support**: Full Prisma type integration
2. **Cleaner API**: Consistent interface across all services
3. **Error Handling**: Proper error types and validation
4. **Relations**: Better handling of Prisma relations
5. **Performance**: Optimized queries and caching support

## What Changed

- **Models** → **Services**: Better naming and clearer purpose
- **GraphQL Error** → **Service Errors**: Better error types
- **Manual typing** → **Prisma types**: Automatic type safety
- **Inconsistent patterns** → **Unified base class**: Consistent behavior

## Timeline

- **Phase 1** ✅: Services created (current)
- **Phase 2**: Update GraphQL resolvers to use services
- **Phase 3**: Update tests to use services
- **Phase 4**: Remove models directory

Please use the new services directory for all new code and migrate existing code when convenient.
