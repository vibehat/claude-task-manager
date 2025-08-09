# MVP Vision

Build the smallest product that proves the core value: humans provide strategy and context; AI executes with complete understanding — with near-zero context loss between planning and building — implemented by wrapping the Task Master engine (CLI) behind a secure API that the UI orchestrates.

## What we must validate

- Humans can orchestrate one active task end-to-end (plan → handoff → review) through Task Master commands.
- Context packages are consistent and reusable across tools (Claude/Cursor), even with basic integration.
- Navigation and copy feel simple, warm, and “Right Now” oriented.

## Pillars

- Working On as the orchestration center (single-task focus in MVP)
- Task Master engine (CLI) via secure API wrapper; local-first, CLI-compatible structures
- Fast, structured context provision preserved across handoffs
- Human-centered navigation with minimal choices and high clarity

## How this vision is realized (MVP)

- Right Now focus → `task-master next`
- Task list/detail → `task-master list` / `task-master show <id>` (or raw-data)
- Orchestration actions → `task-master set-status` and `task-master expand`
- PRD → tasks → `task-master parse-prd docs/prd/main.md`
- Insight loop → `task-master analyze-complexity` → `task-master complexity-report`
