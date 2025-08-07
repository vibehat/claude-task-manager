# User Flows & Journey Mapping

## Primary User Journeys

### 1. New Task Creation Flow

**Entry Points:**

- Quick capture widget from any page
- "Add Task" button from task list
- AI suggestion prompt
- Import from external system

**Flow:**

```
Start → Task Details Form → Link to Context (Optional) → Set Priority/Due Date → Save → View in List
  ↓
Auto-suggest: Tags, Project, Dependencies based on content
```

**Success Criteria:**

- Task created in < 30 seconds
- Relevant metadata auto-populated
- Clear next action provided

---

### 2. Daily Work Session Flow

**Entry Points:**

- Dashboard landing
- Direct link to "Working" page
- Resume from last session

**Primary Flow:**

```
Landing → View "Right Now" → Select Current Task → Open Task Detail → Work Session
    ↓              ↓                   ↓                     ↓
Quick Overview → Focus Mode → Track Progress → Add Notes → Mark Complete
```

**Power User Flow:**

```
Landing → Keyboard Shortcut (Space) → Quick Task Preview → Enter → Full Context
```

**Success Criteria:**

- Zero friction to resume work
- Clear progress indication
- Easy context switching between tasks

---

### 3. Task Research & Planning Flow

**Entry Points:**

- Task detail page
- Planning session
- Problem-solving mode

**Flow:**

```
Task Context → Research Notes → External Resources → AI Assistance → Action Plan
     ↓              ↓                 ↓                 ↓              ↓
Gather Info → Document Findings → Link Resources → Get Suggestions → Break into Subtasks
```

**Success Criteria:**

- All research linked to task context
- Easy knowledge retrieval for future reference
- Clear path from research to action

---

### 4. Project Review & Achievement Flow

**Entry Points:**

- Weekly review session
- Portfolio showcase
- Progress tracking

**Flow:**

```
My Works → Filter by Time/Project → Detailed View → Export/Share → Insights
    ↓           ↓                      ↓              ↓            ↓
Overview → Deep Dive Analysis → Time Tracking → Portfolio → Improvement Areas
```

**Success Criteria:**

- Clear achievement visualization
- Actionable insights for improvement
- Easy sharing and documentation

---

## Navigation Patterns

### Hierarchical Navigation

```
Application Shell
├── Dashboard (Home)
├── Tasks (List View)
│   └── Task Detail
│       ├── Context Tabs
│       ├── Subtasks
│       └── Related Items
├── Working (Focus View)
│   ├── Current Task
│   ├── Up Next
│   └── Progress Tracking
├── My Works (Portfolio)
│   ├── Achievements
│   ├── Analytics
│   └── Sharing
└── Notes (Knowledge)
    ├── Browse
    ├── Search
    └── Create
```

### Contextual Navigation

- **Breadcrumbs**: Always show path back to parent contexts
- **Related Items**: Cross-link between connected tasks and notes
- **Quick Actions**: Context-sensitive shortcuts in all views
- **Search Everywhere**: Global search accessible from any page

---

## State Transitions

### Task Status Progression

```
Idea → Planning → Ready → In Progress → Review → Complete → Archive
  ↓        ↓        ↓          ↓          ↓        ↓         ↓
Capture → Research → Queue → Active Work → QA → Done → History
```

**Status Rules:**

- **Forward progression**: Natural workflow advancement
- **Backward movement**: Allowed for corrections/changes
- **Skip stages**: Permitted for simple tasks
- **Bulk operations**: Multi-select for batch status changes

### Focus Mode Transitions

```
Overview Mode → Focus Mode → Deep Work → Break → Resume/Switch
      ↓           ↓           ↓         ↓        ↓
  See Everything → Single Task → Timer → Rest → Next Task
```

---

## User Mental Models

### Task Hierarchy Understanding

**Users think of tasks as:**

- **Projects** containing multiple related work items
- **Tasks** that can be broken down into actionable steps
- **Subtasks** that represent individual work units
- **Context** that includes all related information and progress

### Time & Progress Concepts

**Users expect:**

- **Estimates** to guide planning and scheduling
- **Actual time** tracking for learning and billing
- **Progress percentages** to show completion status
- **Milestones** to mark significant achievements

### Context & Knowledge Management

**Users want to:**

- **Capture ideas** quickly without interrupting flow
- **Link related information** to maintain context
- **Search across all content** to find relevant information
- **Build knowledge base** over time for future reference

---

## Edge Cases & Error Scenarios

### Connection Issues

**Offline Scenarios:**

- Continue viewing cached tasks and notes
- Allow local edits with sync indicators
- Queue actions for when connection returns
- Clear feedback about sync status

### Data Conflicts

**Concurrent Editing:**

- Show who else is editing
- Merge non-conflicting changes automatically
- Provide clear conflict resolution interface
- Maintain edit history for recovery

### Performance Edge Cases

**Large Data Sets:**

- Paginate long task lists
- Lazy load task details and context
- Provide search filtering for navigation
- Optimize for common usage patterns

### User Error Recovery

**Common Mistakes:**

- Accidental task deletion (soft delete with undo)
- Wrong status changes (easy reversion)
- Lost context when navigating (breadcrumb recovery)
- Mistaken bulk operations (confirmation dialogs)

---

## Accessibility Journey Considerations

### Keyboard-Only Navigation

```
Tab Order: Main Navigation → Current Focus Area → Secondary Actions → Context Panel
Shortcuts: Space (preview), Enter (select), Esc (back), / (search)
```

### Screen Reader Experience

- **Clear headings** for section navigation
- **Status announcements** for task updates
- **Progress descriptions** with concrete numbers
- **Context descriptions** for complex interactive elements

### Motor Accessibility

- **Large click targets** (minimum 44px)
- **Generous spacing** between interactive elements
- **Drag alternatives** for all drag-and-drop operations
- **Voice command support** for common actions

---

## Success Metrics by User Flow

### Task Creation (30-second rule)

- Form completion rate > 95%
- Average time to save < 30 seconds
- Auto-suggestion acceptance rate > 40%

### Work Session (Flow state maintenance)

- Session duration average > 25 minutes
- Task switching frequency < 3 per hour
- Progress update frequency 2-3 per session

### Research & Planning (Knowledge building)

- Note creation rate 2-3 per task
- Link creation between related items > 50%
- Research retrieval success rate > 80%

### Review & Achievement (Motivation)

- Weekly review completion rate > 60%
- Achievement sharing rate > 20%
- Return engagement after review > 75%

---

**Related Documents:**

- [Design Principles](./design-principles.md) - Core UX philosophy
- [Information Architecture](./information-architecture.md) - Content organization
- [Task Management Features](../03-features/task-management/) - Detailed task workflows
