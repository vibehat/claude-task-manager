# Task Master Integration (MVP)

This document specifies how the MVP wraps Task Master CLI via secure API endpoints so the UI can orchestrate real commands.

## Endpoints

- POST `/api/taskmaster/cli` — Execute whitelisted commands
- GET `/api/taskmaster/status` — Initialized + version
- GET `/api/taskmaster/raw-data` — Read `.taskmaster/tasks/tasks.json`

## Whitelisted Commands

- Project: `init`, `parse-prd`, `version`
- Tasks: `list`, `next`, `show`, `set-status`, `add-task`, `remove-task` (post-MVP), `generate`
- Structure: `expand`, `expand-all`, `add-dependency`, `validate-dependencies`
- Analysis: `analyze-complexity`, `complexity-report`
- Config: `models` (read-only in MVP)

## UI ↔ CLI Mappings

- Right Now → `task-master next`
- Tasks List → `task-master list` or `/raw-data`
- Task Detail → `task-master show <id>`
- Working On: Set In Progress → `task-master set-status --id=<id> --status=in-progress`
- Working On: Mark Done → `task-master set-status --id=<id> --status=done`
- Expand Task → `task-master expand --id=<id>`
- Parse PRD → `task-master parse-prd docs/prd/main.md`
- Complexity → `task-master analyze-complexity` → `task-master complexity-report`

## Request Examples

- Execute command

```json
{
  "command": "set-status",
  "options": { "id": "28.2", "status": "in-progress" }
}
```

- Update subtask notes

```json
{
  "command": "update-subtask",
  "options": { "id": "28.2.1", "notes": "Outlined test cases and edge conditions" }
}
```

- Expand a task

```json
{
  "command": "expand",
  "options": { "id": "28.2", "research": false }
}
```

- Parse PRD

```json
{
  "command": "parse-prd",
  "options": { "prdPath": "docs/prd/main.md", "append": false }
}
```

- Get next task

```json
{
  "command": "next"
}
```

- List tasks (optional filter)

```json
{
  "command": "list",
  "options": { "filter": { "status": "in-progress" } }
}
```

- Show task

```json
{
  "command": "show",
  "options": { "id": "28.2" }
}
```

- Complexity analysis

```json
{ "command": "analyze-complexity" }
```

- Complexity report

```json
{ "command": "complexity-report" }
```

## Preconditions

- Task Master CLI installed (`npm i -g task-master-ai`)
- Project initialized (`task-master init`)
- Optional: API keys for research-enabled commands; MVP should function without research flags

## Error Handling

- If not initialized, endpoints return a friendly message and `initialized=false` in `/status`
- CLI stdout/stderr are returned; UI surfaces actionable summaries

## Security & Constraints

- Strict command whitelist; no arbitrary shell
- Desktop-first, local project context
- Research flags off by default unless keys configured
