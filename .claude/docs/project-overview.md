# Project Overview

Task Management UI application built with modern web technologies to provide a beautiful interface for Claude Task Master.

## Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **State Management**: Zustand for lightweight state
- **Forms**: React Hook Form with Zod validation

## Architecture

All source code is organized under `/src` directory:

- `/src/app` - Next.js App Router pages and API routes
- `/src/features` - Feature-based modules (issues, projects, teams, members)
- `/src/components` - Reusable UI components
- `/src/libs` - Shared utilities and services
- `/src/hooks` - React hooks
- `/src/store` - Zustand stores
- `/src/mock-data` - Mock data files
- `/src/styles` - Global styles

## Essential Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm lint             # ESLint
pnpm typecheck        # TypeScript checking
pnpm format           # Prettier formatting

# Task Master
pnpm sync:taskmaster  # Sync tasks

# Build
pnpm build            # Production build
```
