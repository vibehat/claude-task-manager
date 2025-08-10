# Working On Page — Phase 1 (Core Orchestration)

## Context & Overview

The Working On page is a lightweight, human-centered orchestration center. Phase 1 focuses on fast task direction, concise handoffs, and clarity — leveraging existing references (PRD, use cases, notes/decisions) and Task Master CLI integration. No special context packaging.

- **No special context packages**: Reference existing artifacts directly (PRD sections, use cases, notes/decisions).
- **Single-task focus**: Set and direct the active task quickly.
- **Quick direction & handoff**: One concise instruction input referencing linked context.
- **Smart workflow suggestions**: Simple, actionable next steps.
- **Simple progress visibility**: Status, recently touched files, next milestones.
- **Task Master CLI sync**: Primary flows use existing CLI actions surfaced in the UI.

## Primary States (Phase 1)

### 1) No Active Task → Suggest Start

- Show one clear recommendation and why (dependencies, readiness).
- Actions: Start Task, View Other Options, Refresh.

### 2) Planning/Research → Implementation

- Human actions: research, define requirements, create subtask breakdown.
- Next: Direct implementation using a concise instruction referencing PRD/decisions.

### 3) AI Implementation → Review/Refine

- Monitor progress simply; provide short course-corrections.
- Keep feedback tied to referenced artifacts.

### 4) Manual Documentation (Optional)

- Capture decisions where helpful; keep close to implementation.

---

## ASCII Wireframes (Desktop)

### Working On — Active Task

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ Navigation:  Right Now  |  Working On  |  Up Next  |  My Work: To Do • In Progress • Done │
│ Actions: [🔄 Sync Tasks]                                                               │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│ ┌──────────────────────────────────────────────┐   ┌──────────────────────────────────┐ │
│ │ 🎯 CURRENT TASK FOCUS                        │   │ 💡 SMART WORKFLOW SUGGESTIONS    │ │
│ ├──────────────────────────────────────────────┤   ├──────────────────────────────────┤ │
│ │ Task: 28.2 – JWT Token Implementation        │   │ Next best actions:               │ │
│ │ Status: In Progress                          │   │ 1) Review requirements           │ │
│ │                                              │   │ 2) Define subtask breakdown      │ │
│ │ References:                                  │   │ 3) Request implementation        │ │
│ │ • PRD: docs/prd/main.md#auth                 │   │ 4) Write tests                    │ │
│ │ • Use cases: docs/prd/usecases.md#auth       │   │                                  │ │
│ │ • Decisions/notes: linked via CLI            │   │ Shortcuts:                        │ │
│ │                                              │   │ [View PRD] [Define Subtasks]      │ │
│ │ Your role now: Direct implementation         │   │ [Direct Implementation]           │ │
│ └──────────────────────────────────────────────┘   └──────────────────────────────────┘ │
│                                                                                        │
│ ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ 📝 QUICK DIRECTION & HANDOFF                                                       │ │
│ ├────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ Instruction (concise; references allowed):                                         │ │
│ │ ▏Implement according to Task 28.2.                                                │ │
│ │ ▏References:                                                                       │ │
│ │ ▏- PRD: docs/prd/main.md (Auth requirements)                                       │ │
│ │ ▏- Decisions: RS256, 15m expiry + refresh                                          │ │
│ │ ▏- Patterns: Follow existing auth middleware                                       │ │
│ │ [Send] [Insert PRD Ref] [Insert Use Case] [Insert Decision]                        │ │
│ └────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                        │
│ ┌──────────────────────────────────────────────┐   ┌──────────────────────────────────┐ │
│ │ 📊 ACTIVITY & PROGRESS                        │   │ 🔧 TASK MASTER (CLI) ACTIONS     │ │
│ ├──────────────────────────────────────────────┤   ├──────────────────────────────────┤ │
│ │ Status: Implementation                        │   │ [tm list] [tm set-active]        │ │
│ │ Recently touched files:                       │   │ [tm set-status] [tm open-ref]     │ │
│ │ • src/auth/jwt.ts                             │   │ [tm analyze] [tm report]          │ │
│ │ • src/middleware/auth.ts                      │   │                                  │ │
│ │ Next milestones:                              │   │ Notes/Decisions:                  │ │
│ │ • Validation complete                         │   │ [Open Notes] [Link Decision]      │ │
│ │ • Unit tests passing                          │   │                                  │ │
│ └──────────────────────────────────────────────┘   └──────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Working On — No Active Task View

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ SMART WORKFLOW                                                                         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ No active task                                                                         │
│                                                                                        │
│ Recommended: Start Task 28.3 – API Endpoints                                           │
│ Why: JWT (28.2) near complete; dependencies met; high priority                         │
│                                                                                        │
│ Actions: [Start Task] [View Other Options] [Refresh]                                   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Lightweight Context Model (Phase 1)

- Definition: References to existing artifacts (no packaging):
  - PRD sections in `docs/prd/main.md`
  - Use cases in `docs/prd/usecases.md`
  - Notes/decisions maintained manually as needed
  - Task Master CLI task metadata and relationships
- Usage: Handoff instructions reference these artifacts; no bundling required.

Example instruction:

```text
Implement authentication according to Task 2.
References:
- PRD: docs/prd/main.md (Auth requirements section)
- Decisions: Use JWT RS256, 15m expiry + refresh
- Patterns: Follow existing middleware/auth patterns
```

---

## Component Specifications (Phase 1)

### CurrentTaskContext

- Props: `currentTask`, `references`, `status`
- Behavior:
  - Show task title, status, linked references (PRD/use cases/notes)
  - Emphasize “Your role now” with a clear next strategic action

### QuickDirectionInput

- Props: `onSend`, `insertReferenceHandlers`
- Behavior:
  - Single input for concise directive that can insert PRD/use case/decision links

### WorkflowSuggestionsPanel

- Props: `projectState`, `availableTasks`
- Behavior:
  - Suggest immediate next steps based on task state and dependencies

### ActivityProgress

- Props: `status`, `recentFiles`, `milestones`
- Behavior:
  - Simple visibility of status, recent file touches (if available), and next milestones

### TaskMasterActions

- Props: `actions`
- Behavior:
  - Surface common CLI actions in UI (e.g., `tm list`, `tm set-active`, `tm set-status`, `tm open-ref`)

---

## Phase Boundaries

The Working On page in Phase 1 intentionally excludes or defers:

- Multi-task orchestration and balancing (Phase 2 – optional/future)
- AI agent coordination hub (Phase 2 – optional/future)
- Living documentation automation (Phase 3 – optional/future)

---

## Accessibility

- Clear landmark roles for: current task focus, suggestions, quick direction, activity, CLI actions
- Descriptive headings reflecting strategic context and current state
- Keyboard shortcuts for: Send direction, Start Task, View PRD, Sync Tasks
- High contrast and visible focus indicators for primary actions

## Performance

- Real-time updates via WebSocket where available (status, activity)
- Background sync for Task Master operations
- Lazy-load detailed context; optimistic updates for task status changes

---

Related references: see `docs/ideas/feature-working-on.md` for alignment with PRD and success metrics.
