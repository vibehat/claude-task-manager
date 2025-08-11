# MVP Scope

## In Scope

1. Task Master CLI Bridge
   - Server-side wrapper + API endpoints (`/api/taskmaster/cli`, `/status`, `/raw-data`)
   - Whitelist: init, parse-prd, list, next, show, set-status, add-task, expand, expand-all, update-task, update-subtask, analyze-complexity, complexity-report, add-dependency, validate-dependencies, generate, models (read)
   - Friendly errors when not initialized
2. Working On (Single Task Focus)
   - View current task, phase, and minimal subtask progress
   - Provide/curate context (requirements, links to docs/files)
   - Generate a shareable context package for AI handoff
   - Trigger CLI actions (set-status, expand) via integration
3. Right Now
   - Shows current focus and one recommended next action (uses `next`)
4. Tasks (List + Detail)
   - Filterable list, minimal statuses (To Do, In Progress, Done)
   - Task Detail with description, acceptance criteria, notes, and attachments
   - `show`/`list` wired to CLI
5. Context Provision
   - Structured fields: requirements, constraints, patterns, links
   - Auto-assemble context package preview (markdown)
6. Navigation
   - Sidebar with: Right Now, Working On, Tasks, Browse Files, Create New
7. Data Model & Local Store
   - Local-first persistence compatible with Task Master CLI structures
   - Import/export JSON for portability

## Out of Scope (Post-MVP)

- Multi-agent orchestration and batch operations
- Advanced Git intelligence (heatmaps, constellation, drift detection)
- Living documentation automation
- Multi-task orchestration dashboard
- Team collaboration, permissions, presence
- Full terminal embedding and command streaming

## Assumptions

- Solo developer primary user
- Local project context (repo available on disk)
- CLI installed and accessible as `task-master`
- Research commands require API keys; MVP does not depend on them

## Constraints

- Desktop-first UI
- Keep flows within 2 clicks from sidebar to core action
- Accessibility: keyboard nav and basic ARIA labels
