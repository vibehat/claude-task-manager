# Human-AI Orchestration Layout — Context Intelligence & Multi-Agent Coordination

## Critical Assessment

```
PROBLEM SOLVED: Fast, confident human orchestration of multiple AI agents with perfect context retention.
PRIMARY ACTION: Hand off to AI.
SUCCESS METRIC: >30% faster task throughput; <2% handoff errors; context quality ≥90%.
REMOVED: Redundant nav, page-level scroll, decorative chrome; kept only orchestration-critical UI.
```

## Visual Hierarchy Law

```
PRIMARY (60%) → Human Strategy + AI Handoff zone (Main orchestration area)
SECONDARY (30%) → Context Intelligence panels (status, quality, links)
TERTIARY (10%) → Utilities, legal/edge controls (collapsed)
NEGATIVE SPACE → 40% minimum. Space IS design.
```

## ASCII Wireframe (Fixed-height, Desktop-first, 8px grid)

```
┌───────────────────────────────────────────────────────────────────────────────┐ 100vh
│ Task Master AI     🔍 Context Search     🤖 3 Agents   ⚡ Context 94%    👤 │ 48px
├───────────────────────────────────────────────────────────────────────────────┤ HEADER (Fixed)
│┌───────────────┐┌─────────────────────────────────────────────────────────────┐
││               ││ ╭─ Human Strategy Center (PRIMARY 60%) ─────────────────── │
││🎯 Right Now   ││ │  [🤖 Hand off to AI]   [📦 Prepare Context]               │
││├ My Work      ││ │  Headline: 32/40 bold, Actions: 24/32 bold               │
││├ Context  📊  ││ │                                                             │
││├ Overview     ││ │  ▓▓▓ Context Intelligence (SECONDARY 30%)                │
││├ AI Helper    ││ │  - Context Quality: 94%                                   │
││└──────────────┘│ │  - Agents: Claude, Cursor, Research                       │
││  280px (Sidebar│ │  - Links: PRD, Research, Decisions, Patterns              │
││  with internal ││ │                                                             │
││  scroll)       ││ │  ░░░ Multi-Agent Status Dashboard                         │
││               ││ │  - Claude: ████████▓ 80%                                   │
││               ││ │  - Cursor: Ready                                          │
││               ││ │  - Research: ██▓▓ 20%                                     │
││               ││ │                                                             │
││               ││ │  [✅ Approve] [💬 Guide] [📜 View History] (TERTIARY 10%)  │
│└───────────────┘└─────────────────────────────────────────────────────────────┘
│  SIDEBAR (Fixed height, 8px grid)       MAIN CONTENT (calc(100vh - 48px))       │
│                                          Primary scrolling zone only             │
└───────────────────────────────────────────────────────────────────────────────┘

VISUAL WEIGHT: 60/30/10 (no exceptions)
SCAN PATTERN: Z-pattern (primary action top-right within main)
CONTRAST: 7:1 primary, 4.5:1 secondary
```

## State Matrix

```
Component        Default                 Hover                    Active                   Error
────────────────────────────────────────────────────────────────────────────────────────────────────────
Primary CTA      bg:#000 text:#FFF       bg:#333 cursor:pointer   scale:0.98 shadow:0,2   border:2px #F00
("Hand off")     radius:8 shadow:0,4     duration:150ms ease-out  duration:50ms           shake:200ms text:#F00

Secondary CTA    text:#111 underline:0   text:#000 underline:1    underline:2             disabled opacity:0.4
("Prepare")      icon:#666               icon:#000                icon:#000                aria-disabled

Sidebar Item     text:#444 bg:transparent bg:#F5F5F5              bg:#EAEAEA               —
                 dot:●(status)           dot:● bold               dot:● bold

Table Row        bg:#FFF                  bg:#FAFAFA               bg:#F0F7FF border-left:4 #2B6CB0   row-error bg:#FFF5F5
(virtual list)   dividers:#EEE           dividers:#E5E5E5         focus:ring: #99C2FF      text:#C53030
```

## Interaction Timing

```
User Intent → System Response
─────────────────────────────
Hover       → 150ms ease-out (no debate)
Click       → 50ms feedback (instant feel)
Load        → 300ms skeleton (perceived speed)
Error       → 200ms shake + persist (acknowledgment)
Success     → 500ms celebrate + continue (momentum)
```

## Handoff Specifications

```
GRID:        8px only. Period.
BREAKPOINTS: 1280px desktop, 768px tablet, 375px mobile
TYPOGRAPHY:  16/24 body, 24/32 subhead, 32/40 headline
SPACING:     8, 16, 24, 40, 64 (nothing else)
RADIUS:      0 (sharp), 4 (subtle), 8 (friendly)
SHADOW:      0,2 (hint), 0,4 (float), 0,8 (emphasis)
```

## Measurements (Exact)

- Header: 48px fixed; z-index above all scroll regions
- Sidebar: 280px fixed width; own scroll when overflow; no page-level scroll
- Main content height: calc(100vh - 48px); primary scroll zone
- Minimum content width: 900px desktop; below that, collapse secondary regions
- Primary CTA hit area: ≥44x44px; placement top-right of primary panel

## Rationale → Hierarchy → States → Measurements → Business Impact

- Rationale: Solo developer directs multiple AI agents without losing context
- Hierarchy: Primary orchestration (60%); Context intelligence (30%); Utilities (10%)
- States: Defined above for CTAs, sidebar, rows; accessible focus rings across controls
- Measurements: Pixel-exact header/sidebar, hit areas, scroll containment to preserve context
- Business Impact: Faster throughput, fewer handoff errors, preserved context; targets set in Success Metric

---

## Appendix: Reference Architecture (Condensed from prior doc)

### Core Layout Concepts

- Fixed Height Container (100vh): Header 48px fixed; Sidebar fixed height; Main content smart scroll; No page-level scroll
- Intelligent Scrolling Zones: Main primary; Sidebar internal; Modals independent
- Information Architecture: L1 Active work; L2 Available tasks; L3 Background context

### Human-AI Orchestration Layout Structure

```
┌──────────────────────────────────────────────────────────────────────────────────┐ 100vh
│ Task Master AI      🔍 Context Search   🤖 3 Agents Active   ⚡ Context 94%   👤 │ 48px
├─────────────┬────────────────────────────────────────────────────────────────────┤ (Fixed)
│             │ ╭─ Human Strategy Center ──────────────────────────────────────────│
│🎯 Right Now │ │  Context-intelligent views for human orchestration               │
│📋 My Work   │ │  • Right Now: Status + context quality dashboard                 │
│📚 Context   │ │  • My Work: Portfolio with AI readiness scoring                  │
│🏗️ Overview  │ │  • Context Web: Decisions ↔ implementations                      │
│🤖 AI Helper │ │  • AI Helper: Agent direction + context package prep             │
└─────────────┴────────────────────────────────────────────────────────────────────┘
  280px (Sidebar)                       Flexible width ≥900px (Main Content)
```

### Human-AI Orchestration Components

- Context Intelligence Header (48px, Fixed): agent status, context quality metric, search
- Context-Intelligent Sidebar (280px): Right Now, My Work, Context, Overview, AI Helper
- Main Orchestration Area: Strategy, Context Panels, Multi-Agent Coordination, Context Web

### Design Principles

- Context Intelligence Consistency; Orchestration Context Preservation; Information Flow Efficiency
- Solo Developer Standards; Seamless Human-AI Collaboration Intelligence

---

## Scenarios (Kept; design now governed by sections above)

- Scenario 1: Project Bootstrap — fixed header, sidebar stable, main scroll only
- Scenario 2: Task Planning — high-density virtual list, keyboard nav, bulk ops
- Scenario 3: AI Handoff — perfect context transfer with package and links
- Scenario 4: Parallel Productivity — plan while AI works; live research input
- Scenario 5: Real-Time Oversight — progress + guidance log; immediate feedback

All scenarios must adhere to: 8px grid, 60/30/10 hierarchy, fixed-height layout, defined states, and timings above.
