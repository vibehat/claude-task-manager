# Coding Standards

## TypeScript Standards

- **Strict mode always** - No `any` types
- **Explicit types** - Define interfaces for all props, return types for functions
- **Type imports** - Use `import type` for type-only imports
- **Null safety** - Handle null/undefined cases explicitly

## React & Next.js Patterns

- **Functional components only** - No class components
- **Server components by default** - Use `'use client'` only when needed
- **Custom hooks** - Extract complex logic with `use` prefix
- **Error boundaries** - Wrap features for resilience
- **Loading states** - Always handle loading, error, and empty states

## Code Organization

- **Feature-based structure** - Group by feature, not file type
- **No barrel exports** - Use direct imports
- **Consistent naming** - Components PascalCase, utilities camelCase, constants UPPER_SNAKE_CASE
- **File naming** - Must match default export

## Performance & Quality

- **Lazy loading** - Dynamic imports for large components
- **Memoization** - Use React.memo, useMemo, useCallback appropriately
- **Accessibility** - All interactive elements keyboard accessible
- **Testing mindset** - Write testable code, consider edge cases
- **Comments sparingly** - Code self-documenting, comments for "why" not "what"

## Project Patterns

- Use feature-based architecture: `/src/features/{feature-name}/`
- Follow existing patterns from `/src/features/issues/` as reference
- Use Zustand for global state
- Use Tailwind CSS utilities, avoid custom CSS
- Follow design system tokens from `/src/components/ui/`
