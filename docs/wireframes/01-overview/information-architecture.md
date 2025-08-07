# Information Architecture

## Content Organization Strategy

### Primary Content Hierarchy

```
Application Root
├── Dashboard (Entry Point)
│   ├── Today's Focus
│   ├── Recent Activity
│   └── Quick Actions
├── Tasks (Task Management)
│   ├── All Tasks (List/Board View)
│   ├── Task Detail (Individual Focus)
│   │   ├── Description & Requirements
│   │   ├── Context Tabs (Notes, Files, Conversations)
│   │   ├── Subtasks & Dependencies
│   │   └── Progress & Time Tracking
│   └── Task Templates & Patterns
├── Working (Active Session)
│   ├── Current Task Focus
│   ├── Up Next Queue
│   ├── Progress Tracking
│   ├── Focus Timer
│   └── Recent Activity Feed
├── My Works (Portfolio & Achievement)
│   ├── Completed Works
│   ├── Time & Productivity Analytics
│   ├── Achievement Badges
│   └── Export & Sharing
└── Notes (Knowledge Management)
    ├── Browse & Search
    ├── Create & Edit
    ├── Tags & Collections
    └── Templates & Patterns
```

### Cross-Cutting Concerns

- **Search**: Global search across all content types
- **Tags**: Horizontal organization across tasks and notes
- **Time**: Chronological views and time-based filtering
- **People**: Assignment and collaboration context
- **Projects**: Higher-level grouping mechanism

---

## Content Types & Relationships

### Task Content Model

```
Task {
  Core Data: ID, Title, Description, Status, Priority, Due Date
  Hierarchy: Parent Task, Subtasks, Dependencies
  Context: Notes, Files, Conversations, Time Entries
  Metadata: Creator, Assignee, Tags, Project
  History: Status Changes, Edit Log, Comments
}
```

### Note Content Model

```
Note {
  Core Data: ID, Title, Content (Markdown), Type
  Organization: Tags, Collections, Task Links
  Metadata: Created, Modified, Author, Read Count
  Relationships: Related Notes, Linked Tasks, File Attachments
  Format: Rich Text, Code Blocks, Images, Links
}
```

### Activity Content Model

```
Activity {
  Core Data: ID, Type, Timestamp, Actor
  Context: Related Task, Related Note, Change Details
  Metadata: Session, Location, Device
  Aggregation: Daily Summary, Weekly Patterns, Trends
}
```

---

## Navigation Architecture

### Primary Navigation

**Top-level sections accessible from anywhere:**

- **Dashboard**: Overview and entry point
- **Tasks**: Task management and detail views
- **Working**: Focus mode and active session
- **My Works**: Portfolio and achievements
- **Notes**: Knowledge management

### Contextual Navigation

**Context-sensitive navigation within sections:**

- **Breadcrumbs**: Path back to parent contexts
- **Related Items**: Cross-references between content
- **Quick Actions**: Context-appropriate shortcuts
- **Recent Items**: History-based navigation

### Search & Discovery

**Multiple pathways to find content:**

- **Global Search**: Full-text search across all content
- **Faceted Browse**: Filter by type, date, status, tags
- **Smart Suggestions**: AI-powered content recommendations
- **Saved Searches**: Bookmark complex filter combinations

---

## Data Relationships

### Task Hierarchies

```
Project Level: Epic/Initiative
    ↓
Task Level: Major work item
    ↓
Subtask Level: Actionable work unit
    ↓
Check Item Level: Simple completion step
```

**Relationship Rules:**

- Tasks can have multiple subtasks
- Subtasks can have dependencies on other subtasks
- Tasks inherit project context from parent
- Status rolls up from subtasks to parent tasks

### Knowledge Connections

```
Task ←→ Notes (Many-to-Many)
Task ←→ Files (One-to-Many)
Note ←→ Note (Many-to-Many via links)
Tag ←→ Content (Many-to-Many)
```

**Connection Principles:**

- Bidirectional links maintain referential integrity
- Orphaned content is discoverable through browse views
- Implicit connections through tags and shared context
- Explicit connections through user-created links

---

## Content Discovery Patterns

### Browse by Structure

```
All Tasks
├── By Status (To Do, In Progress, Done, Blocked)
├── By Priority (High, Medium, Low)
├── By Project (Project A, Project B, Unassigned)
├── By Assignee (Me, Others, Unassigned)
└── By Due Date (Overdue, This Week, This Month, Future)
```

### Browse by Time

```
Recent Activity
├── Today
├── This Week
├── This Month
├── This Quarter
└── Archive (Older)
```

### Browse by Type

```
All Content
├── Tasks
│   ├── Active Tasks
│   ├── Completed Tasks
│   └── Templates
├── Notes
│   ├── Task Notes
│   ├── Standalone Notes
│   └── Templates
└── Files & Resources
    ├── Task Attachments
    ├── Shared Resources
    └── External Links
```

---

## Search Architecture

### Search Scopes

- **Global**: Search across all content types
- **Tasks Only**: Focus on task titles, descriptions, comments
- **Notes Only**: Search note content and titles
- **Current Context**: Search within current task or project

### Search Features

- **Full-text search**: Content-based matching
- **Metadata search**: Filter by tags, dates, status
- **Smart suggestions**: Auto-complete and typo tolerance
- **Saved searches**: Bookmark complex queries

### Search Results Ranking

1. **Exact title matches** (highest priority)
2. **Recent activity** relevance
3. **User interaction** frequency
4. **Content relevance** scoring
5. **Relationship proximity** to current context

---

## Information Density Management

### Progressive Disclosure Levels

**Level 1 - Overview (List Views)**

- Essential information only: Title, Status, Priority, Due Date
- Visual indicators: Progress bars, status colors, priority icons
- Quick actions: Status change, assign, due date

**Level 2 - Summary (Card Views)**

- Additional context: Description preview, tag summary, assignee
- Extended metadata: Created date, last update, time estimate
- Expanded actions: Edit, duplicate, archive, share

**Level 3 - Detail (Full Views)**

- Complete information: Full description, all metadata, history
- Full context: Notes, files, conversations, dependencies
- All actions: Edit all fields, advanced operations, bulk actions

### Responsive Information Priority

```
Mobile (< 768px):
  Priority 1: Title, Status, Due Date
  Priority 2: Progress, Priority Indicator
  Collapsed: Description, Tags, Metadata

Tablet (768-1024px):
  Add: Description Preview, Tag Summary
  Expand: Quick actions, assignee info

Desktop (> 1024px):
  Full: All metadata, expanded descriptions
  Side panels: Context information, related items
```

---

## Content Lifecycle Management

### Creation Patterns

- **Quick capture**: Minimal friction, auto-populate later
- **Template-based**: Pre-filled forms for common patterns
- **Import-based**: Bulk creation from external sources
- **AI-assisted**: Suggestions and auto-generation

### Maintenance Patterns

- **Bulk operations**: Multi-select for common changes
- **Template updates**: Propagate changes to derived content
- **Cleanup workflows**: Archive completed, remove duplicates
- **Migration tools**: Update structure, fix relationships

### Archive & Retention

- **Soft delete**: Remove from active views, maintain in archive
- **Hard delete**: Permanent removal with confirmation
- **Export options**: Backup before major changes
- **Retention policies**: Auto-archive based on age and status

---

## Accessibility Information Architecture

### Screen Reader Navigation

- **Landmark roles**: Main, navigation, complementary sections
- **Heading hierarchy**: Logical H1-H6 structure for navigation
- **Skip links**: Jump to main content, skip repetitive elements
- **Section summaries**: Count and status information for lists

### Keyboard Navigation

- **Tab order**: Logical progression through interactive elements
- **Shortcut keys**: Quick access to major sections and actions
- **Focus management**: Clear visual and programmatic focus
- **Navigation landmarks**: Quick jump between sections

---

**Related Documents:**

- [Design Principles](./design-principles.md) - Core UX philosophy guiding organization
- [User Flows](./user-flows.md) - How users navigate through this architecture
- [App Layout](../02-layouts/app-layout.md) - Visual implementation of this structure
