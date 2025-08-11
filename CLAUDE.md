# Claude Code Instructions

## Task Master AI Integration

@./.taskmaster/CLAUDE.md

## Critical Rules

**COMPLIANCE REQUIRED**: This is a code reuse and consolidation project.

### Mandatory Workflow

1. **Start with `/analyze-first`** - Always analyze existing codebase before decisions
2. **Use `/reuse-check`** before creating any new files or components
3. **Plan with `/structured-plan`** for implementation
4. **Validate compliance** throughout the process

### Code Reuse Rules (violating ANY invalidates your response)

- ❌ **No new files without exhaustive reuse analysis**
- ❌ **No rewrites when refactoring is possible**
- ❌ **No generic advice - provide specific implementations**
- ❌ **No ignoring existing codebase architecture**
- ✅ **Extend existing services and components**
- ✅ **Consolidate duplicate code**
- ✅ **Reference specific file paths**

### Critical Thinking

**USE BRUTAL HONESTY**: Challenge assumptions, point out flaws, suggest alternatives. Being thoughtful > being agreeable.

## Core Principles

- **Analyze before acting** - Use workflow commands to understand existing code
- **Use pnpm only** - Never npm or yarn
- **TypeScript strict mode** - No `any` types, explicit interfaces
- **Feature-based architecture** - Group by feature, not file type
- **Extend don't create** - Prioritize reuse over new files

## Tech Stack & Architecture

- **Framework**: Next.js 15.2.4 + App Router + TypeScript strict
- **Styling**: Tailwind CSS v4 + shadcn/ui + Radix UI
- **State**: Zustand + React Hook Form + Zod
- **Structure**: All code in `/src` - features, components, libs, hooks, stores

## Essential Commands

```bash
pnpm dev             # Dev server
pnpm lint            # ESLint
pnpm typecheck       # TypeScript check
pnpm sync:taskmaster # Task sync
pnpm build           # Production build
```

## Quick Reference

- `/analyze-first [feature]` - Analyze before planning
- `/reuse-check [component]` - Validate before creating
- `/structured-plan [request]` - Full planning workflow
- `/spawn-reader [task]` - Analysis agent
- `/spawn-maker [task]` - Implementation agent

**Documentation**: See `.claude/docs/` for detailed patterns, examples, and standards.
