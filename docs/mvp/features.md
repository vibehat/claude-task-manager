# MVP Features & Acceptance Criteria

## 1) Working On — Orchestration Center (Single Task)

- Shows: task title, status, phase, subtask checklist
- Context editor: requirements, constraints, patterns, links
- Handoff: generates markdown context package with 1 click
- Integration: set status/expand via CLI
- Success: user can create, preview, copy/share the package without leaving the page

## 2) Right Now

- Surfaces exactly one recommended action tied to project state
- Success: from open → user can act within 2 clicks

## 3) Tasks (List)

- Minimal filters: status, text search
- Sorting: updated_at desc
- Success: find and open a task in ≤2 steps

## 4) Task Detail

- Description + acceptance criteria (checkboxes)
- Notes timeline (plain text/markdown), file links
- Success: update status and acceptance criteria without modal dialogs

## 5) Context Package

- Structured markdown export with sections:
  - Problem, Requirements, Constraints, Patterns, Dependencies, Validation
- Success: Produced package references linked docs and task fields

## 6) Browse Files + Create New

- Browse project docs under `docs/` and `src/`
- Create new note/doc from templates
- Success: link created doc to a task in one step

## 7) Task Master Integration (CLI Bridge)

- Endpoints: `/api/taskmaster/cli`, `/api/taskmaster/status`, `/api/taskmaster/raw-data`
- Whitelist: init, parse-prd, list, next, show, set-status, add-task, expand, expand-all, update-task, update-subtask, analyze-complexity, complexity-report, add-dependency, validate-dependencies, generate, models (read), version
- UI mappings:
  - Right Now → next
  - Working On → set-status, expand
  - Tasks → list/show
  - PRD → parse-prd
  - Analysis → analyze-complexity, complexity-report
- Acceptance
  - 95%+ of calls succeed locally (proper errors if uninitialized)
  - Commands reflect immediately in list/detail views
  - Research flags disabled unless keys present

## 8) Persistent Context (Local-first)

- Data model mirrors Task Master structures for compatibility
- Read-only raw view available via `/api/taskmaster/raw-data`
- Import/export JSON for portability
- Success: app remains fully usable offline once initialized
