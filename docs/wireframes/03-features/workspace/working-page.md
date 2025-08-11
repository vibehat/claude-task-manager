# Working On Page v2 — Production-Ready Design

## Executive Summary

A hero-focused redesign that prioritizes user efficiency through intelligent workflow suggestions, contextual task management, and progressive disclosure. This production-ready design integrates with the universal sidebar navigation while providing AI-powered next-action guidance instead of requiring manual input.

### Key Metrics

- **Primary action time**: < 1 second (one-click workflow suggestions)
- **Task switching**: < 0.5 seconds (keyboard shortcuts or task cards)
- **Information discovery**: 2 clicks max (progressive disclosure)
- **Mobile efficiency**: Touch-optimized with gesture support

---

## Core Design Principles

### 1. Hero Workflow Pattern

Smart workflow suggestions dominate the interface as the primary interaction point, providing contextual next actions instead of requiring manual input. Fallback to command palette available via ⌘K.

### 2. Progressive Disclosure

Advanced features and detailed information reveal on-demand, keeping the interface clean and focused.

### 3. Contextual Intelligence

UI adapts based on task state, showing relevant actions and hiding irrelevant options.

### 4. Universal Sidebar Integration

Leverages the app-wide navigation structure while maintaining page-specific context.

---

## Layout Architecture

### Desktop Layout (1280px+) - Two Column Grid (9:3)

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│ UNIVERSAL SIDEBAR (240px) │  MAIN CONTENT (col-span-9)        │ RIGHT PANEL (col-span-3) │
├──────────────────────────┼───────────────────────────────────┼──────────────────────────┤
│                          │ ┌─────────────────────────────────┐ │ ┌──────────────────────┐ │
│ [Logo/Brand]             │ │ CONTEXT SECTION                 │ │ │ WORKFLOW SECTION     │ │
│                          │ │ Tag: user-auth • 3 active       │ │ │                      │ │
│ ─────────────            │ │ Project: Task Master UI         │ │ │ 💡 Suggested Actions │ │
│                          │ │ [Command ⌘K] [Settings]         │ │ │                      │ │
│ 🎯 RIGHT NOW             │ └─────────────────────────────────┘ │ │ ☐ Start JWT validation │
│ ├── Working On ●         │                                   │ │   📝 Task 28.2         │
│ └── Up Next              │ ┌─────────────────────────────────┐ │ │                      │ │
│                          │ │ MY TASKS SECTION                │ │ │ ☐ Review API security  │
│ 📝 MY WORK               │ │                                 │ │ │   🔍 Task 28.3         │
│ ├── To Do                │ │ ┌──────┐ ┌──────┐ ┌──────┐ [+] │ │ │                      │ │
│ ├── In Progress          │ │ │28.2  │ │28.3  │ │29.1  │ Add │ │ │ ☐ Parse PRD docs      │
│ └── Done                 │ │ │ JWT  │ │ API  │ │ Rate │Task │ │ │   📄 performance.md   │
│                          │ │ │ ●    │ │ →    │ │ ...  │     │ │ │                      │ │
│ 📚 NOTES & DOCS          │ │ └──────┘ └──────┘ └──────┘     │ │ │ ☐ Plan session mgmt   │
│ ├── Browse Files         │ │ [Working][Ready] [Queued]       │ │ │   📊 Task 30.1        │
│ └── Create New           │ └─────────────────────────────────┘ │ │                      │ │
│                          │                                   │ │ [➕ Add] [🔄 Refresh] │
│ 🔍 PROJECT OVERVIEW      │ ┌─────────────────────────────────┐ │ └──────────────────────┘ │
│ ├── Big Picture          │ │ TASK DETAILS SECTION            │ │                        │
│ └── Planning             │ │                                 │ │ ┌──────────────────────┐ │
│                          │ │ 28.2 — JWT Token Implementation │ │ │ QUICK ACTIONS        │ │
│ 🤖 AI HELPER             │ │ 📊 In Progress • ⏱️ 2h left      │ │ │                      │ │
│ ├── Chat History         │ │ 🎯 Priority: High • Due: Today   │ │ │ ⚡ Start Work        │ │
│ └── Assistant Settings   │ │                                 │ │ │ 📝 Add Note          │ │
│                          │ │ 📋 Subtasks (2/3 done):        │ │ │ 🔄 Sync Tasks        │ │
│ ⚙️ PREFERENCES           │ │ ✅ 28.2.1 Setup JWT library      │ │ │ 📋 View All Tasks    │ │
│ ├── Project Setup        │ │ ✅ 28.2.2 Create token gen      │ │ │ 🎯 Focus Mode        │ │
│ └── My Settings          │ │ ☐ 28.2.3 Add validation middleware │ │ │ 📊 Progress Report   │ │
│                          │ │                                 │ │ │ 🗒️ Open Notes        │ │
│ ─────────────            │ │ 📁 Related Files:               │ │ │ ⚙️ Task Settings     │ │
│                          │ │ • src/auth/jwt.ts (modified)    │ │ │                      │ │
│ USER                     │ │ • src/middleware/auth.ts (new)  │ │ │ [⌘K Command Palette]│ │
│ [Profile] [Logout]       │ │                                 │ │ └──────────────────────┘ │
│                          │ │ 📚 Documentation:               │ │                        │
│                          │ │ • docs/prd/main.md#auth         │ │                        │
│                          │ │ • docs/api/authentication.md    │ │                        │
│                          │ │                                 │ │                        │
│                          │ │ 🔗 Dependencies:                │ │                        │
│                          │ │ • Blocked by: none              │ │                        │
│                          │ │ • Blocks: 28.3, 29.1           │ │                        │
│                          │ │                                 │ │                        │
│                          │ │ 📝 Notes (2):                   │ │                        │
│                          │ │ • "Use HS256 for development"   │ │                        │
│                          │ │ • "Consider RS256 for production" │                        │
│                          │ │                                 │ │                        │
│                          │ │ [⚡ Start Work] [📝 Add Note]   │ │                        │
│                          │ └─────────────────────────────────┘ │                        │
│                          │                                   │                        │
└──────────────────────────┴───────────────────────────────────┴────────────────────────┘
```

### Tablet Layout (768px - 1279px)

```
┌─────────────────────────────────────────────────────────────────────┐
│ COLLAPSED SIDEBAR (60px) │  MAIN CONTENT (flex-1)                   │
├─────────────────────────┼─────────────────────────────────────────┤
│ [≡]                     │  CONTEXT BAR                            │
│                         │  Tag: user-auth • 3 active              │
│ 🎯                       ├─────────────────────────────────────────┤
│ 📝                       │  WORKFLOW                               │
│ 📚                       │  [Now: 28.2] [Next: 28.3] [Later] [+]   │
│ 🔍                       ├─────────────────────────────────────────┤
│ 🤖                       │  WORKFLOW PANEL                      │
│ ⚙️                       │                                        │
│                         │  ☐ Start smart workflow               │
│                         │  ☐ Work on JWT validation             │
│                         │  ☐ Check API security setup           │
│                         │  ☐ Parse PRD for rate limiting        │
│                         │  ☐ Plan session management            │
│                         │  ☐ Review auth work                   │
│                         │                                        │
│                         │  [➕ Add] [🔄 Refresh] [⌘K]            │
│                         ├─────────────────────────────────────────┤
│                         │  TASK CARD (Collapsed by default)       │
│                         │  28.2 JWT Implementation [Expand ▼]     │
└─────────────────────────┴─────────────────────────────────────────┘
```

### Mobile Layout (< 768px)

```
┌──────────────────────────┐
│ STATUS BAR               │
│ user-auth • 3 active     │
├──────────────────────────┤
│ WORKFLOW (Swipeable)     │
│ ← [Now: JWT] [Next] →      │
├──────────────────────────┤
│                          │
│ WORKFLOW PANEL           │
│                          │
│ ☐ Start smart workflow   │
│ ☐ Work on JWT validation │
│ ☐ Check API security     │
│ ☐ Parse PRD rate limit   │
│ ☐ Plan sessions          │
│ ☐ Review auth work       │
│                          │
│ [➕] [⌘K] [Ask AI]        │
│                          │
├──────────────────────────┤
│ CURRENT TASK (Card)      │
│ 28.2 JWT Implementation  │
│ In Progress • High       │
│ [Details ▼]              │
├──────────────────────────┤
│ BOTTOM NAV (Fixed)       │
│ 🎯 Right Now (Active)    │
│ 📝 My Work               │
│ 🤖 AI Helper             │
│ ≡ Menu                   │
└──────────────────────────┘
```

---

## Component Specifications

### 1. Universal Sidebar

- **Fixed width**: 240px desktop, 60px collapsed (tablet), hidden (mobile)
- **Sections**:
  - 🎯 Right Now (Working On, Up Next)
  - 📝 My Work (To Do, In Progress, Done)
  - 📚 Notes & Docs (Browse Files, Create New)
  - 🔍 Project Overview (Big Picture, Planning)
  - 🤖 AI Helper (Chat History, Assistant Settings)
  - ⚙️ Preferences (Project Setup, My Settings)
- **Active state**: Bold text + dot indicator for current page

### 2. Context Section

- **Location**: Top of main content area
- **Purpose**: Show current project context and general settings
- **Content**:
  - Current tag/branch information
  - Project name and status
  - Command palette access
  - General settings access
- **Visual**: Clean header bar with essential context information

### 3. My Tasks Section

- **Location**: Middle of main content area
- **Layout**: Horizontal task cards showing current work queue
- **Cards**:
  - **Task cards**: Show task ID, name, and status (●, →, ...)
  - **Add Task**: Button to add new task to the queue
- **Interaction**: Click to focus task, visual status indicators
- **Visual states**: Working, Ready, Queued with progress indicators
- **Smart ordering**: Task sequence based on dependencies

### 4. Task Details Section

- **Location**: Bottom of main content area
- **Purpose**: Show comprehensive information about the selected/focused task
- **Content**:
  - Task overview (title, status, priority, time)
  - Subtasks list with progress
  - Related files with status indicators
  - Documentation links
  - Dependencies tracking
  - Development notes
- **Actions**: Start Work, Add Note buttons
- **Smart updates**: Context updates based on file changes and progress

### 5. Workflow Section (Right Panel)

- **Location**: Right column, top section
- **Purpose**: AI-suggested workflow actions to guide users
- **Action-oriented items**: Simple checkboxes with actionable verbs
  - ☐ Start working on [task name]
  - ☐ Review [deliverable]
  - ☐ Parse PRD for [feature]
  - ☐ Plan [component]
- **Contextual metadata**: Brief task context (ID, status) when relevant
- **Smart ordering**: AI-prioritized list based on dependencies and optimal workflow
- **Quick actions**: ➕ Add, 🔄 Refresh buttons

### 6. Quick Actions Section (Right Panel)

- **Location**: Right column, bottom section
- **Purpose**: Provide instant access to frequently used actions
- **Actions List**:
  - ⚡ Start Work - Begin working on focused task
  - 📝 Add Note - Add development notes
  - 🔄 Sync Tasks - Refresh task data from Task Master
  - 📋 View All Tasks - Show complete task list
  - 🎯 Focus Mode - Hide distractions
  - 📊 Progress Report - View progress analytics
  - 🗒️ Open Notes - Access project notes
  - ⚙️ Task Settings - Configure task preferences
- **Command Palette**: ⌘K access for advanced commands
- **Responsive**: Condensed action names on smaller screens

---

## Workflow Guidance System

### How It Helps Users Who Don't Know What To Do

The interface is designed as a **guided todo system** that eliminates decision paralysis:

#### 1. Workflow Bar - Your Action Queue

- **Now**: What you should focus on right now (⚫)
- **Next**: What you should do after completing current task (→)
- **Later**: What's coming up in your sequence (...)
- **More**: Add or browse additional tasks (+)

#### 2. Workflow Panel - Actionable Todo List

- **☐ Start smart workflow**: AI analyzes project and suggests optimal path
- **☐ Start working on [task]**: Begin specific ready tasks
- **☐ Check for [deliverable]**: Review completed work or requirements
- **☐ Parse PRD for [feature]**: Extract requirements from documentation
- **☐ Start planning [component]**: Begin architectural or design work
- **☐ Review [completed work]**: Validate and approve finished tasks

#### 3. Progressive Guidance Flow

```
User opens page → Workflow Bar shows sequence →
Workflow Panel shows actionable steps → User clicks action →
Task Context provides all needed information → User completes work →
System updates automatically → User always knows next step
```

#### 4. When Stuck - Simple Support Layers

1. **Workflow Panel**: Immediate actionable next steps
2. **Workflow Bar**: Sequential task progression overview
3. **Task Context**: Comprehensive information for focused work
4. **Custom Command (⌘K)**: Manual override for specific needs
5. **Quick Actions**: Add actions, refresh, or ask for help

This creates a **zero-decision** experience where users are always guided toward productive work.

---

## Interaction Patterns

### Keyboard Shortcuts (Production-Ready)

```
Primary Actions:
- Enter         : Send direction
- Cmd/Ctrl+K    : Command palette
- 1, 2, 3       : Switch workflow steps
- Tab           : Navigate between areas

Task Management:
- N             : New task
- S             : Set status
- E             : Expand task details
- W             : Show workflow panel

Navigation:
- Cmd/Ctrl+1    : Go to Right Now
- Cmd/Ctrl+2    : Go to My Work
- Cmd/Ctrl+3    : Go to Notes & Docs
- /             : Quick search
```

### Touch Gestures (Mobile)

- **Swipe left/right**: Switch between workflow steps
- **Pull down**: Refresh task status
- **Long press**: Task context menu
- **Pinch**: Expand/collapse task details

---

## Visual Design System

### Typography Hierarchy

```
Todo Items:     text-lg (18px) font-semibold
Task Metadata:  text-sm (14px) font-normal text-gray-600
Task Context:   text-base (16px) font-normal
Subtask Items:  text-sm (14px) font-normal
File Links:     text-sm (14px) font-normal text-blue-600
Micro Text:     text-xs (12px) font-normal text-gray-500
```

### Color System

```
Primary Action:   blue-600 (hover: blue-700)
Success/Ready:    green-600
Warning/Blocked:  amber-600
Error/Critical:   red-600
Neutral/Info:     gray-600
Background:       white (dark: gray-900)
Card Background:  gray-50 (dark: gray-800)
```

### Spacing & Layout

```
Page Padding:     24px (desktop), 16px (tablet), 12px (mobile)
Section Gap:      32px
Component Gap:    16px
Card Padding:     16px
Input Padding:    12px 16px
Button Padding:   8px 16px
```

---

## Empty States

### No Workflow Set

```
┌──────────────────────────────────────────┐
│                                          │
│        🎯 No Workflow Planned            │
│                                          │
│    Let AI suggest your next actions      │
│                                          │
│    [Smart Workflow]  [Browse Tasks]      │
│                                          │
└──────────────────────────────────────────┘
```

### No Tasks Available

```
📝 No tasks to work on
   All tasks are completed or blocked
   [Add New Task]  [Import Tasks]
```

---

## Loading & Error States

### Loading Pattern

```
Hero Input:      Skeleton shimmer
Task Cards:      Pulse animation
Suggestions:     Three-dot loader
```

### Error Handling

```
Connection Lost:  Toast notification with retry
Invalid Input:    Inline validation message
Task Error:       Error card with action buttons
```

---

## Performance Optimizations

### Critical Rendering Path

1. Universal sidebar (static, cached)
2. Workflow progression cards
3. Todo list (dynamic, prioritized)
4. Task context panel (lazy loaded)
5. Advanced features (on-demand)

### Optimization Strategies

- **Code splitting**: Per-route chunks
- **Virtual scrolling**: For long task lists
- **Optimistic updates**: Immediate UI feedback
- **Service worker**: Offline capability
- **Image optimization**: WebP with fallbacks

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

- **Color contrast**: 4.5:1 minimum
- **Focus indicators**: Visible outline
- **Screen reader**: Semantic HTML + ARIA
- **Keyboard navigation**: Full support
- **Motion preferences**: Respect reduced-motion

### Semantic Structure

```html
<nav aria-label="Main navigation">       <!-- Universal sidebar -->
<main>
  <section aria-label="Workflow progression">    <!-- Workflow bar -->
  <section aria-label="Workflow panel">         <!-- Workflow actions -->
  <section aria-label="Task context">           <!-- Focused task context -->
</main>
```

---

## Implementation Phases

### Phase 1: Core Functionality (Week 1-2)

- Universal sidebar integration
- Workflow progression bar
- Workflow panel with action items
- Basic task context display

### Phase 2: Intelligence (Week 3)

- AI-powered workflow action generation
- Smart action ordering and prioritization
- Context-aware action suggestions
- Keyboard shortcuts

### Phase 3: Polish (Week 4)

- Animations and transitions
- Mobile optimizations
- Error handling
- Performance tuning

---

## Success Metrics

### Efficiency Metrics

- **Task switching time**: < 0.5 seconds
- **Direction input time**: < 2 seconds
- **Page load time**: < 1 second
- **Time to first interaction**: < 100ms

### Usability Metrics

- **Task completion rate**: > 95%
- **Error rate**: < 5%
- **User satisfaction**: > 4.5/5
- **Accessibility score**: 100%

---

Related references:

- `docs/ideas/feature-working-on.md` (requirements)
- `docs/wireframes/01-overview/design-principles.md` (design system)
- `src/components/layout/Sidebar.tsx` (sidebar implementation)
