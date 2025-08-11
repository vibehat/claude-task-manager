# MVP Implementation Plan

## Purpose

Concrete, code-first plan to ship the MVP defined in `docs/mvp/README.md`, aligned with `vision.md`, `scope.md`, `features.md`, `user-flows.md`, `wireframes.md`, `success-metrics.md`, and `release-plan.md`.

## Quick Links

- Vision: `docs/mvp/vision.md`
- Scope: `docs/mvp/scope.md`
- Features: `docs/mvp/features.md`
- User Flows: `docs/mvp/user-flows.md`
- Wireframes: `docs/mvp/wireframes.md`
- Success metrics: `docs/mvp/success-metrics.md`
- Release plan: `docs/mvp/release-plan.md`
- PRD: `docs/prd/main.md`
- Use cases: `docs/prd/usecases.md`

## Current State Summary (as of this plan)

- API wrapper for Task Master CLI in place:
  - `POST /api/taskmaster/cli` maps to whitelisted commands
  - `GET /api/taskmaster/status` returns init/version
  - `GET /api/taskmaster/raw-data` reads `.taskmaster/tasks/tasks.json`
  - Server library: `src/libs/server/taskmaster.ts` (full CLI coverage)
- Client data layer:
  - Local-first store via `src/libs/client/stores/dataStore.ts`
  - Fetches `.taskmaster` files via `POST /api/files`
- Workspace UI routes present:
  - Tasks list: `src/app/workspace/tasks/page.tsx` → `features/tasks`
  - Task detail: `src/app/workspace/task/[taskId]/page.tsx` → `features/working-on/views/TaskDetailPage`
  - Working On: `src/app/workspace/working-on/page.tsx`
  - Up Next exists (`up-next/page.tsx`) and Dashboard; no dedicated Right Now route yet
- Context builder utilities exist: `src/features/working-on/utils/contextBuilder.ts`
- Terminal infra exists but full streaming is out-of-scope for MVP

## Deliverables by Feature

### 1) Working On — Orchestration Center (Single Task)

- Wire current `WorkingOnPage` to real data and CLI:
  - Load current focus from store (or from `next` if no focus set)
  - Actions:
    - Set In Progress / Done → `set-status`
    - Expand subtasks → `expand`
  - Context editing & package generation:
    - Use `buildTaskContext`, `formatContextForClipboard`, `formatContextForFile`
    - Provide [Generate], [Copy] buttons per wireframe
- Store/UI updates:
  - After CLI calls, re-sync store with `useDataStore().forceSyncTaskMaster()`
- Acceptance: user can prepare and copy context package without leaving page; CLI changes reflected immediately

### 2) Right Now

- Add a Right Now surface (option A: new route `workspace/right-now`; option B: card on `workspace/dashboard`):
  - Fetch recommended next via `POST /api/taskmaster/cli` `{ command: "next" }`
  - Show single action and CTA to open Working On for that task
- Acceptance: from open → act within 2 clicks

### 3) Tasks (List)

- Ensure list is backed by `.taskmaster` files (already via `dataStore`)
- Add lightweight filter (status) and search (already supported in features/tasks)
- Add "Refresh" to re-sync from disk after CLI operations
- Acceptance: find and open a task in ≤2 steps

### 4) Task Detail

- Show description, acceptance criteria (checkbox UI), notes timeline, links
- Wire status updates to CLI `set-status` when toggled; persist notes via `update-task` or `update-subtask` as appropriate
- Add "Open in Working On" CTA
- Acceptance: update status and acceptance criteria inline, no modal

### 5) Context Package

- In Working On and Task Detail:
  - Compose markdown sections (Problem, Requirements, Constraints, Patterns, Dependencies, Validation)
  - Reference PRD `docs/prd/main.md` and linked notes where available
  - Provide [Copy] and [Save as .md under docs/context/] using a simple write endpoint
- Acceptance: package references linked docs and task fields

### 6) Browse Files + Create New

- Browse: reuse `GET/POST /api/files` to view under `docs/` and `src/`
- Create New:
  - Add minimal write endpoint `POST /api/files/write` to create files from templates under `docs/notes/` or `docs/context/`
  - After creation, allow linking the new doc to a task (store association in task notes via `update-task` prompt)
- Acceptance: link created doc to a task in one step

### 7) Task Master Integration (CLI Bridge)

- Keep whitelist in `src/app/api/taskmaster/cli/route.ts`
- UI → CLI mappings:
  - Right Now → `next`
  - Working On → `set-status`, `expand`
  - Tasks → `list`/raw-data, `show`
  - PRD bootstrap → `parse-prd`
  - Analysis → `analyze-complexity`, `complexity-report`
- Error handling: if not initialized, surface actionable message with “Initialize” CTA that calls `init`

### 8) Persistent Context (Local-first)

- Continue to mirror Task Master structures via `.taskmaster` files
- Import/export JSON:
  - Export: bundle `.taskmaster/tasks/tasks.json`, `.taskmaster/state.json`, `.taskmaster/manager/manager.json`
  - Import: write back files and re-init store
- Provide read-only raw view via `/api/taskmaster/raw-data` (already)

## API Contracts Used

- `POST /api/taskmaster/cli`
  - `{ command: 'set-status', options: { id, status } }`
  - `{ command: 'expand', options: { id, research?: boolean, force?: boolean } }`
  - `{ command: 'list' | 'show' | 'next' }`
  - `{ command: 'parse-prd', options: { prdPath, append?: boolean } }`
  - `{ command: 'analyze-complexity' | 'complexity-report' }`
- `GET /api/taskmaster/status` → `{ initialized, version }`
- `GET /api/taskmaster/raw-data` → `{ tasks, metadata }`
- `POST /api/files` → read multiple files
- NEW: `POST /api/files/write` (to implement) → create/update specific docs (scoped to `docs/`)

## Routing & Components Inventory

- Working On
  - `src/app/workspace/working-on/page.tsx`
  - `src/features/working-on/views/WorkingOnPage(.tsx|Client.tsx)`
  - Add context package UI and CLI actions in `WorkingOnPage`
- Right Now
  - Add `src/app/workspace/right-now/page.tsx` (or implement card in `workspace/dashboard`)
- Tasks
  - `src/app/workspace/tasks/page.tsx` → `features/tasks/views/all-tasks`
  - `src/app/workspace/task/[taskId]/page.tsx` → `features/working-on/views/TaskDetailPage`
- Files
  - `src/app/api/files/route.ts` (read)
  - Add `src/app/api/files/write/route.ts` (write)

## Data Flow

- Read path: UI → `POST /api/files` → store normalize → views render
- Write path (task ops): UI action → `POST /api/taskmaster/cli` → on success → store re-sync (`forceSyncTaskMaster`) → UI reflects
- Write path (docs): UI create doc → `POST /api/files/write` → link to task via `update-task` prompt → store re-sync

## Non-Goals (Post-MVP)

- Multi-agent orchestration, batch ops
- Advanced Git intelligence, living docs automation
- Full terminal embedding/streaming
- Team collaboration, presence, permissions

## Risks & Mitigations

- CLI not initialized → add friendly banner with “Initialize” button that calls `init`
- JSON parse variability from CLI → continue robust parse in `TaskMasterCLI.parseJsonOutput`
- File write security → restrict write endpoint to `docs/` subtree and safe filenames
- Offline mode consistency → depend on `.taskmaster` files; show stale indicator if CLI offline

## QA & Acceptance

- Success metrics from `success-metrics.md` baked into checks:
  - Context handoff prep time < 2 minutes via Working On
  - CLI success rate ≥ 95% locally; retries + clear errors
  - Navigation to core action ≤ 2 clicks
  - Import/export round-trip fidelity (sample project)

## Week-by-Week Milestones (3 weeks)

- Week 1 — Structure & Tasks
  - Sidebar/nav verification; add Right Now route or card
  - Finish `/api/taskmaster/*` wiring in list/detail
  - Acceptance criteria + notes inline editing; refresh & re-sync
- Week 2 — Working On & Context
  - Wire Working On to CLI; implement context editor and package generator
  - Add Right Now recommendation pipeline (`next`)
- Week 3 — Polish & Links
  - Browse Files UI + Create New from templates with `files/write`
  - Link docs to tasks; import/export JSON
  - Accessibility & keyboard pass

## Setup & Dev Commands

- Run app: `pnpm dev`
- Optional terminal server (local only): `pnpm dev:terminal`
- Verify CLI: `curl -X GET /api/taskmaster/status`

## Definition of Done

- All MVP features functionally complete
- All acceptance criteria met; success metrics validated on a sample project
- Error handling for uninitialized CLI present and friendly
- No blocking a11y issues; keyboard navigation works on core flows
