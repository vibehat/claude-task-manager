# Working On Page - Human Orchestration Center (PRD-Aligned)

This document aligns the Working On page concept with the PRD and Use Cases. Phase 1 is reframed to give the human full control over the whole working context — managing multiple active tasks, switching focus instantly, and directing work with concise, reference-based instructions. No special context packaging; leverage Task Master CLI references. Phase 2/3 capabilities deepen automation and collaboration.

## Alignment Summary

- **No special context packages**: Use Task Master CLI references to PRD, research, tasks, and decisions.
- **Phase 1 (MVP)**: Whole working context control (multi-task orchestration, quick switching), Working On flow, Task Master CLI integration/sync, human-centered navigation.
- **Phase 2 (Agents)**: AI agent coordination and balancing (assignments, monitoring) — optional/future.
- **Phase 3 (Collaboration)**: Lightweight docs (manual-first) and Git awareness (lightweight) — optional/future.
- **Success metrics**: Quick context switching, clear multi-task visibility, fast direction, and high-quality handoffs without back-and-forth.

## Scope by Phase

### Phase 1: Multi-Task Orchestration (Weeks 1–4)

- **Whole Working Context**
  - Manage 2–4 active tasks concurrently with a simple Active Tasks bar/list.
  - Instant focus switching with keyboard and click.
  - Unified visibility: status, key references, and next steps per task.
- **Quick Direction & Handoff**
  - One concise instruction input targeting the currently focused task.
  - Insert references (PRD/use cases/decisions) inline — no packaging.
- **Cross-Task Smart Suggestions**
  - Next best actions across active tasks (e.g., review requirements for A, request implementation for B).
  - Respect dependencies; surface “ready to start” items.
- **Task Master Integration**
  - Read/sync tasks and statuses from CLI.
  - Use CLI references for context (PRD sections, research notes, decisions, patterns).
- **Human-Centered Navigation**
  - Right Now, Working On (multi-task), Up Next; My Work: To Do, In Progress, Done.
- **Manual-First Docs (Optional)**
  - Capture decisions where helpful; keep close to implementation.

Success metrics:

- Switch focus between active tasks in < 2 seconds (keyboard or click).
- Maintain 2–4 active tasks without confusion (self-reported clarity ≥ 90%).
- 95% of actions accessible within 2 clicks or 1 keyboard shortcut.
- 90%+ of handoffs complete without back-and-forth.
- 90% of flows use Task Master actions directly in the UI.

### Phase 2: AI Agent Coordination (Weeks 5–8) — Optional/Future

- **Agent Coordination**: Assign tasks to Claude, Cursor, Copilot from one place.
- **Concurrent Work & Balancing**: Optional multi-agent balancing across active tasks.
- **Shared Direction**: Consistent instructions shared across agents via the same lightweight CLI-linked context.

Success metrics:

- Seamless direction of 3+ agents without duplicate setup.
- Human orchestration effort remains stable as agents scale.

### Phase 3: Collaboration & Ecosystem (Weeks 9–12+) — Optional/Future

- **Lightweight Documentation**: Manual-first updates close to implementation; automation optional.
- **Git Awareness**: Branch context and basic status (lightweight).
- **Exports/Shared Views**: Team-ready outputs as needed.

Success metrics:

- Docs updated when needed (not ceremony); 80%+ of referenced docs remain current.

## Core Philosophy

- **Human Strategy, AI Execution**: You provide direction; AI executes. Keep handoffs simple and context-rich via references.
- **Lightweight by Default**: No context packaging systems. Leverage existing assets (PRD, notes, tasks) through Task Master CLI links.
- **Clarity First**: Immediate understanding of what to do now and what comes next across multiple active tasks.
- **Minimal Friction**: Natural language direction, minimal clicks, friendly UI.

## What the Working On Page Delivers (Phase 1)

1. **Working Context Overview (Multi-Task)**

   - Active Tasks bar/list with up to 2–4 tasks selected as “in focus”.
   - Quick status chips: state, priority, readiness, blockers.
   - One-click/shortcut switch to change the focused task.

2. **Focused Task Context**

   - For the currently focused task: title, status, essential references (PRD/use cases/decisions), and immediate next steps.

3. **Quick Direction & Handoff**

   - A single input for concise instruction to your tooling/agent, scoped to the focused task.
   - Insert PRD/use case/decision references inline.

4. **Cross-Task Smart Suggestions**

   - Suggest next best actions across the active set (e.g., “Request implementation for Task B” while Task A compiles tests).

5. **Simple Progress Visibility (Per-Task + Rollup)**

   - Status and recent activity per task; overall rollup (e.g., 2/4 active tasks “ready for review”).

6. **Task Master CLI Sync**

   - Reads tasks/statuses and maps lightweight context links.
   - Primary flows use existing CLI actions surfaced in UI.

7. **Tag Context Switcher (Lightweight)**

   - Switch between tag contexts (often aligned to branches or work streams).
   - Create a tag from current branch; copy tasks to a new tag for QA or experiments.

8. **Batch Operations for Active Tasks**
   - Multi-select tasks to apply: Set In Progress/Done, Expand, Move/Reorg, Copy to Tag.

## Lightweight Context Model (Phase 1)

- **Definition**: References to existing artifacts (no bundling):
  - PRD sections in `docs/prd/main.md`
  - Use cases in `docs/prd/usecases.md`
  - Notes/decisions maintained manually as needed
  - Task Master CLI task metadata and relationships
- **Usage**: Handoff instructions reference these artifacts; no packaging required.

Example handoff instruction:

```text
Implement authentication according to Task 2.
References:
- PRD: docs/prd/main.md (Auth requirements section)
- Decisions: Use JWT RS256, 15m expiry + refresh
- Patterns: Follow existing middleware/auth patterns
```

## Primary User Flows (Phase 1)

- **Start Workflow (No Active Tasks)**

  - Recommended next based on dependencies/priority.
  - Actions: Parse PRD, Select Active Tasks (multi-select 2–4), Create Tag from Branch, Refresh.

- **Multi-Task Setup & Switching**

  - Select 2–4 tasks as active; switch focus instantly via bar/list or shortcuts.
  - View cross-task suggestions; pick next actions per task.

- **Planning/Research → Implementation (Per Task)**

  - Research, define requirements, create subtask breakdown.
  - Direct implementation using concise instructions referencing PRD/decisions.
  - Optional research CTA before direction.

- **Review/Refine (Across Tasks)**

  - Monitor progress simply; provide short course-corrections.
  - Keep feedback tied to referenced artifacts.
  - Use batch operations for status updates or structural changes.

- **Manual Documentation (Optional)**
  - Capture decisions where helpful; keep close to implementation.

## UI Notes (Phase 1)

- **Navigation**

  - Right Now, Working On (multi-task), Up Next; My Work: To Do, In Progress, Done.

- **Working On Layout**

  - Active Tasks bar/list (primary for switching)
  - Focused Task Context panel
  - Cross-Task Smart Suggestions panel
  - Activity/Progress (per-task + rollup)
  - Tag Context Switcher
  - Quick Actions (always accessible), CLI actions

- **Interaction Guidelines**
  - Natural language for direction.
  - Defaults that reduce clicks and mental overhead.
  - Progressive disclosure—details on demand.
  - Keyboard: Cmd/Ctrl+1..4 to switch focus; Enter to send direction; S to start workflow; T for tag switcher.

## Examples (Phase 1)

### Active Tasks Overview

```text
ACTIVE TASKS (3)
1) 28.2 – JWT Token Implementation  [In Progress] [Ready: Validation] [High]
2) 28.3 – API Endpoints             [Ready]       [No blockers]       [High]
3) 29.1 – Rate Limiting             [Blocked]     [Wait: 28.2]        [Med]

Focused: 28.2 – JWT Token Implementation
Actions: [Switch to 28.3] [Switch to 29.1] [Start New]
```

### Focused Task Context + Quick Direction

```text
TASK CONTEXT (Focused: 28.2 – JWT Token Implementation)
Requirements (via PRD refs):
- RS256 algorithm
- 15-min expiry + refresh
- Follow existing auth patterns

Your role now: Direct implementation
Actions: [View PRD] [Define Subtasks] [Direct Implementation]

Quick direction (to 28.2):
"Implement token validation according to PRD. Ref: docs/prd/main.md#auth, RS256, 15m+refresh"
```

### Start Workflow

```text
START WORKFLOW
No active tasks selected

Recommended next: [Next Task]
Actions: [Parse PRD] [Select Active Tasks] [Create Tag from Branch] [Refresh]

Select Active Tasks (2–4):
[ ] 28.2 – JWT Token Implementation  [In Progress] [High]
[ ] 28.3 – API Endpoints             [Ready]       [High]
[ ] 29.1 – Rate Limiting             [Blocked]     [Med]
```

## Task Master CLI Mappings (Phase 1)

- **Start Workflow**: `task-master parse-prd`, `task-master next`, `task-master show <ids>`, `task-master add-tag --from-branch`
- **Active Tasks & Status**: `task-master list`, `task-master set-status --id=<id> --status=<state>`
- **Context & References**: `task-master open-ref`, links to PRD/use cases/notes
- **Cross-Task Suggestions**: `task-master analyze`, readiness/blockers surfaced via CLI data
- **Research (Optional)**: `task-master research "query" --id=<id> [--files=...]`
- **Expand/Breakdown**: `task-master expand --id=<id> [--research]`, `task-master expand --all`
- **Reorg/Move**: `task-master move --from=<id> --to=<id>`
- **Update Scope**: `task-master update --from=<id> --prompt="..."`, `task-master update-subtask --id=<id.x> --prompt="..."`
- **Tags**: `task-master tags --show-metadata`, `task-master use-tag <name>`, `task-master add-tag --from-branch`, `task-master add-tag testing --copy-from-current`

## Future/Optional Capabilities

### AI Agent Coordination (Phase 2)

- Assign/monitor Claude, Cursor, Copilot.
- Balance across active tasks.
- Keep instructions consistent via the same reference-based context.

### Living Documentation (Phase 3)

- Manual-first docs that evolve alongside code.
- Light automation only if/when it proves helpful.

## Success Metrics (Mapped to PRD)

- **Collaboration Efficiency**

  - Multi-task setup in < 2 minutes; focus switch in < 2 seconds.
  - Start Workflow to active set (2–4 tasks) in < 60 seconds.
  - 90%+ of handoffs complete without back-and-forth.

- **Navigation & Usability**

  - 95% of actions within 2 clicks or 1 shortcut.
  - Users report strong control over the whole working context.

- **Execution Quality**
  - Reduced rework due to clearer direction and visibility.
  - 90% of flows use Task Master actions directly in the UI.

## Implementation Notes (Non-UI)

- **UI Layer (Next.js + React)**: Feature-based structure under `/src`, real-time updates via WebSocket.
- **Task Master Integration**: Strict compatibility with CLI; leverage existing analysis and operations.
- **Integration Layer**: Simple wrappers for command execution; file system and git awareness where useful.
- **Data Layer**: Local-first, real-time sync, export options later.

---

## The Updated Vision

The Working On page gives the human full control of the whole working context from day one: manage multiple active tasks, switch focus instantly, and provide concise, reference-based direction — with simple visibility and minimal ceremony. Later phases deepen agent coordination and collaboration without compromising simplicity or human control.
