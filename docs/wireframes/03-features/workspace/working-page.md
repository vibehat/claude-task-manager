# Working On Page — Phase 1 (Multi-Task Orchestration)

## Context & Overview

The Working On page gives the human full control over the whole working context. Phase 1 supports managing multiple active tasks (2–4), instant focus switching, concise direction inputs, cross-task suggestions, and Task Master CLI sync — using lightweight references (PRD, use cases, notes/decisions). No special context packaging.

- **Multi-task working context**: 2–4 active tasks visible, quick switching via click/shortcuts.
- **Quick direction & handoff**: Single input scoped to focused task with insertable references.
- **Cross-task smart suggestions**: Actions across active tasks based on readiness and dependencies.
- **Simple progress (per-task + rollup)**: Status, recent files, next milestones.
- **Task Master CLI sync**: Primary flows surfaced in UI (no ceremony).
- **Tag context**: Lightweight context switching aligned with git branches or work streams.

## Primary States (Phase 1)

### 1) Start Workflow (No Active Tasks)

- Present an onboarding panel to select active tasks (2–4) and/or create/select a tag.
- Actions: Parse PRD, Next recommended, Select tasks (multi-select), Create tag from current branch, Refresh.

### 2) Multi-Task Working Context

- Active Tasks bar/list for switching focus.
- Cross-task suggestions and batch operations.
- Focused task panel with quick direction and references.

### 3) Review & Refine (Across Tasks)

- Monitor statuses, recent activity, and rollup; provide short course-corrections.
- Keep feedback tied to referenced artifacts.

---

## ASCII Wireframes (Desktop)

### Multi-Task Working Context (Active)

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Navigation: Right Now | Working On | Up Next | My Work: To Do • In Progress • Done                         │
│ Tag: [ user-auth ▼ ]  [🔄 Sync Tasks]  Shortcuts: 1..4 switch | Enter send | S start | T tag               │
├────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ACTIVE TASKS (3)                                                                                            │
│ [1] 28.2 – JWT Token Impl  [In Progress] [Ready: Validation] [High] [□] | [Switch]                         │
│ [2] 28.3 – API Endpoints    [Ready]       [No blockers]       [High] [□] | [Switch]                         │
│ [3] 29.1 – Rate Limiting    [Blocked]     [Wait: 28.2]        [Med]  [□] | [Switch]                         │
│ Batch: [Select All]  Actions: [Set In Progress] [Set Done] [Expand] [Move] [Add Tag] [Copy to Tag]         │
├────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────────┐   ┌──────────────────────────────────────────────────────┐ │
│ │ 🎯 FOCUSED TASK CONTEXT (28.2)               │   │ 💡 CROSS-TASK SMART SUGGESTIONS                      │ │
│ ├──────────────────────────────────────────────┤   ├──────────────────────────────────────────────────────┤ │
│ │ Title: 28.2 – JWT Token Implementation       │   │ For your active tasks:                               │ │
│ │ Status: In Progress                          │   │ 1) 28.2 – Review validation approach                  │ │
│ │ References:                                   │   │ 2) 28.3 – Define subtask breakdown                    │ │
│ │ • PRD: docs/prd/main.md#auth                 │   │ 3) 28.3 – Request implementation                       │ │
│ │ • Use cases: docs/prd/usecases.md#auth       │   │ 4) 29.1 – Pre-research rate limiting (blocked)         │ │
│ │ • Decisions: RS256, 15m expiry + refresh     │   │                                                      │ │
│ │ Your role now: Direct implementation         │   │ Quick CTAs: [View PRD] [Define Subtasks] [Research]   │ │
│ └──────────────────────────────────────────────┘   └──────────────────────────────────────────────────────┘ │
│                                                                                                            │
│ ┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ 📝 QUICK DIRECTION (Scoped to Focused Task 28.2)                                                         │ │
│ ├────────────────────────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ ▏Implement validation middleware per PRD. Refs: docs/prd/main.md#auth, RS256, 15m+refresh               │ │
│ │ [Send]  [Insert PRD Ref] [Insert Use Case] [Insert Decision]  [Research]                                │ │
│ └────────────────────────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                                            │
│ ┌──────────────────────────────────────────────┐   ┌──────────────────────────────────────────────────────┐ │
│ │ 📊 ACTIVITY & ROLLOUP                         │   │ 🔧 TASK MASTER (CLI) ACTIONS                         │ │
│ ├──────────────────────────────────────────────┤   ├──────────────────────────────────────────────────────┤ │
│ │ Recent activity (per task):                  │   │ Focused: [tm set-status] [tm open-ref] [tm analyze]   │ │
│ │ • 28.2 src/auth/jwt.ts                       │   │ Cross-task: [tm list] [tm show 28.2,28.3,29.1]         │ │
│ │ • 28.3 src/api/endpoints.ts                  │   │ Planning: [tm expand --id] [tm expand --all]           │ │
│ │ Rollup: 1 ready • 1 in progress • 1 blocked  │   │ Reorg: [tm move] [tm update] [tm update-subtask]       │ │
│ │ Next milestones:                             │   │ Tags: [tm tags] [tm use-tag] [tm add-tag --from-branch] │ │
│ │ • 28.2 Validation complete                   │   │                                                          │ │
│ │ • 28.3 Endpoint skeleton ready               │   │                                                          │ │
│ └──────────────────────────────────────────────┘   └──────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Start Workflow (No Active Tasks)

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ 🚀 START WORKFLOW                                                                    │
├────────────────────────────────────────────────────────────────────────────────────┤
│ You have no active tasks selected.                                                   │
│                                                                                      │
│ Recommended next: [Next Task] — based on dependencies and priority                   │
│                                                                                      │
│ Actions: [Parse PRD] [Select Active Tasks] [Create Tag from Branch] [Refresh]        │
│                                                                                      │
│ Select Active Tasks (multi-select):                                                   │
│ [ ] 28.2 – JWT Token Implementation  [In Progress] [High]                            │
│ [ ] 28.3 – API Endpoints             [Ready]       [High]                            │
│ [ ] 29.1 – Rate Limiting             [Blocked]     [Med]                             │
│                                                                                      │
│ [Add to Active]  Keyboard: S start • T tag • 1..4 hot-switch                         │
└────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Component Specifications (Phase 1)

### ActiveTasksBar

- Props: `activeTasks`, `onFocusChange`, `onBatchSelect`, `selectedTaskIds`
- Behavior:
  - Display up to 4 task chips with state/priority/blockers.
  - Support single-click focus switch, checkboxes for batch selection.
  - Keyboard shortcuts Cmd/Ctrl+1..4 to switch.

### TagContextSwitcher

- Props: `currentTag`, `availableTags`, `onSwitch`, `onCreateFromBranch`, `onCopyFromCurrent`
- Behavior:
  - Dropdown showing tag metadata; quick actions to switch/create.

### BatchActionsToolbar

- Props: `selectedTaskIds`, `onSetStatus`, `onExpand`, `onMove`, `onCopyToTag`
- Behavior:
  - Appears when one or more tasks are selected from ActiveTasksBar.

### FocusedTaskContext

- Props: `task`, `references`, `status`, `nextSteps`
- Behavior:
  - Show task title, status, linked references; emphasize “Your role now”.

### QuickDirectionInput

- Props: `onSend`, `insertReferenceHandlers`, `onResearch`
- Behavior:
  - Single input for concise directive; insert PRD/use case/decision refs; optional research action.

### CrossTaskSuggestions

- Props: `activeTasks`, `dependencies`, `readiness`
- Behavior:
  - Suggest next actions across tasks; respect dependencies; include quick CTAs.

### ActivityRollup

- Props: `recentActivity`, `perTaskStatus`, `milestones`
- Behavior:
  - Show per-task recent files and an overall rollup with upcoming milestones.

### TaskMasterActions

- Props: `onAction`
- Behavior:
  - Surface common CLI actions: list, show, set-status, open-ref, analyze, expand, move, update, tags.

---

## Accessibility

- Landmarks for: active tasks, focused context, suggestions, direction input, activity, CLI actions.
- Keyboard: Cmd/Ctrl+1..4 switch; Enter send; S start workflow; T open tag switcher.
- Clear focus states; SR-friendly labels for batch/CLI actions.

## Performance

- WebSocket updates for status/activity; background CLI sync.
- Lazy-load heavy context/details; optimistic UI for status changes.

---

Related references: `docs/ideas/feature-working-on.md`, `CLAUDE_TASK_MASTER.md` (commands & flows).
