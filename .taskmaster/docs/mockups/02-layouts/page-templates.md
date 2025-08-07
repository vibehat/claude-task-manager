# Page Templates & Layout Patterns

## Standard Page Template Structure

### Base Page Template

```
┌─────────────────────────────────────────────────────────────┐
│ [Header: Global Navigation & Search]                       │
├─────────────┬───────────────────────────────────────────────┤
│ [Sidebar:   │ [Page Header: Title, Actions, Breadcrumbs]   │
│  Navigation │ ├─────────────────────────────────────────────┤
│  & Context] │ [Main Content: Primary page content]         │
│             │ ├─────────────────────────────────────────────┤
│             │ [Secondary Content: Context panels, metadata]│
└─────────────┴───────────────────────────────────────────────┘
```

**Template Zones:**

1. **Global Header** (Fixed, 60px height)
2. **Sidebar Navigation** (Collapsible, 240px/60px width)
3. **Page Header** (Dynamic height, min 80px)
4. **Main Content** (Flexible, takes remaining space)
5. **Secondary Content** (Optional, contextual)

---

## Page Type Templates

### 1. List/Table View Template

**Used for:** Task lists, note collections, search results

```
┌─────────────────────────────────────────────────────────────┐
│ [Page Title] Tasks                           [+ New Task]   │
├─────────────────────────────────────────────────────────────┤
│ [Filters] [All▼] [Status▼] [Priority▼] [🔍 Search...    ] │
├─────────────────────────────────────────────────────────────┤
│ ┌─ Task Item ────────────────┬─ Status ─┬─ Priority ─────┐ │
│ │ ☐ Implement authentication │ Progress │ High     [•••] │ │
│ │   Due: Aug 15 • #backend   │   45%    │                │ │
│ └────────────────────────────┴──────────┴────────────────┘ │
│ ┌─ Task Item ────────────────┬─ Status ─┬─ Priority ─────┐ │
│ │ ☐ Design user dashboard    │ To Do    │ Medium   [•••] │ │
│ │   Due: Aug 20 • #frontend  │   0%     │                │ │
│ └────────────────────────────┴──────────┴────────────────┘ │
│                                                             │
│ [Pagination: ← 1 2 3 ... 12 →]    [25 items per page ▼]  │
└─────────────────────────────────────────────────────────────┘
```

**Template Components:**

- Page header with title and primary action
- Filter/search bar with common controls
- List items with consistent structure
- Pagination and view controls

### 2. Detail View Template

**Used for:** Task details, note editing, individual item focus

```
┌─────────────────────────────────────────────────────────────┐
│ ← Back to Tasks    [Task 1.2.1] JWT Implementation         │
├─────────────────────────────────────────────────────────────┤
│ Status: In Progress │ Priority: High │ Due: Aug 15 │ [⚡▼] │
├─────────────────────────────────────────────────────────────┤
│ ┌─ Main Content ─────────────────┐ ┌─ Context Panel ─────┐ │
│ │                                │ │ 📝 Notes (3)        │ │
│ │ [Description & Requirements]   │ │ 📁 Files (7)        │ │
│ │                                │ │ 💬 Conversations(2) │ │
│ │ ┌─ Tabbed Content ────────────┐ │ │ 📊 Progress         │ │
│ │ │ [Notes][Files][Tests][Code] │ │ │ 🔗 Dependencies(1)  │ │
│ │ │                            │ │ └─────────────────────┘ │
│ │ │ [Tab content area]         │ │                       │ │
│ │ │                            │ │                       │ │
│ │ └─────────────────────────────┘ │                       │ │
│ └────────────────────────────────┘                       │ │
│ [🏃 Start Work] [✅ Complete] [⏸️ Pause] [🔄 Sync]      │ │
└─────────────────────────────────────────────────────────────┘
```

**Template Components:**

- Navigation breadcrumbs and back link
- Item title and key metadata
- Main content area with rich information
- Context panel with related data
- Action bar with primary task actions

### 3. Dashboard Template

**Used for:** Overview pages, analytics, summaries

```
┌─────────────────────────────────────────────────────────────┐
│ Dashboard                                🗓️ Today, Aug 7    │
├─────────────────────────────────────────────────────────────┤
│ ┌─ Primary Widget ─────┐ ┌─ Secondary Widget ──┐ ┌─ Tertiary┐ │
│ │ 🎯 Working On        │ │ ⏱️ Focus Timer      │ │ Stats    │ │
│ │                      │ │                     │ │          │ │
│ │ JWT Implementation   │ │       25:00         │ │ 3/7 done │ │
│ │ 45% complete         │ │                     │ │ 4.5 hrs  │ │
│ │                      │ │ [⏸️ Pause] [✅ Done] │ │          │ │
│ └──────────────────────┘ └─────────────────────┘ └──────────┘ │
│                                                             │
│ ┌─ Full Width Widget ─────────────────────────────────────┐ │
│ │ 📈 Recent Activity                                     │ │
│ │ • 2 min ago: Added note to Task 1.2.1                 │ │
│ │ • 15 min ago: Completed research phase                 │ │
│ │ • 1h ago: Started working on Task 1.2.1               │ │
│ └────────────────────────────────────────────────────────┘ │
│                                                             │
│ ┌─ Split Widgets ────────┐ ┌─ Split Widgets ────────────┐ │
│ │ ⛔ Blocked (2)          │ │ 💡 Quick Capture           │ │
│ │                        │ │                            │ │
│ │ API Integration        │ │ [Add idea or note...]      │ │
│ │ Email Templates        │ │                            │ │
│ └────────────────────────┘ └────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**Template Components:**

- Flexible widget grid system
- Mix of widget sizes (1/3, 1/2, full width)
- Quick actions and status indicators
- Activity feeds and summary data

### 4. Creation/Form Template

**Used for:** Create/edit tasks, notes, settings

```
┌─────────────────────────────────────────────────────────────┐
│ Create New Task                          [Save] [Cancel]    │
├─────────────────────────────────────────────────────────────┤
│ ┌─ Main Form ─────────────────┐ ┌─ Form Assistance ───────┐ │
│ │                             │ │ 📝 Templates:           │ │
│ │ Title: [________________]   │ │ • Bug Report           │ │
│ │                             │ │ • Feature Request      │ │
│ │ Description:                │ │ • Research Task        │ │
│ │ ┌─────────────────────────┐ │ │                        │ │
│ │ │                         │ │ │ 🏷️ Suggested Tags:     │ │
│ │ │ [Rich text editor]      │ │ │ #backend #auth #jwt    │ │
│ │ │                         │ │ │                        │ │
│ │ └─────────────────────────┘ │ │ 🤖 AI Assistance:      │ │
│ │                             │ │ [Generate Description] │ │
│ │ Priority: [High ▼]          │ │ [Suggest Subtasks]     │ │
│ │ Due Date: [Aug 15, 2025]    │ │ [Find Dependencies]    │ │
│ │ Tags: [#auth] [#backend]    │ │                        │ │
│ └─────────────────────────────┘ └────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**Template Components:**

- Form fields with appropriate input types
- Rich text editing capabilities
- Assistance panel with templates and suggestions
- Clear save/cancel actions

---

## Responsive Template Behaviors

### Mobile Adaptations (< 768px)

**List Template → Card Stack:**

```
┌─────────────────┐
│ Tasks           │
├─────────────────┤
│ ┌─ Task Card ─┐ │
│ │ Auth System │ │
│ │ Progress 45%│ │
│ │ High • Aug15│ │
│ │ [View][Edit]│ │
│ └─────────────┘ │
│ ┌─ Task Card ─┐ │
│ │ Dashboard   │ │
│ │ To Do • 0%  │ │
│ │ Med • Aug20 │ │
│ │ [View][Edit]│ │
│ └─────────────┘ │
└─────────────────┘
```

**Detail Template → Stacked Sections:**

```
┌─────────────────┐
│ ← JWT Auth      │
├─────────────────┤
│ Status: Progress│
│ Priority: High  │
│ Due: Aug 15     │
├─────────────────┤
│ [Description]   │
│                 │
├─────────────────┤
│ [📝 Notes (3)] ▼│
├─────────────────┤
│ [📁 Files (7)] ▼│
├─────────────────┤
│ [Start] [Done]  │
└─────────────────┘
```

### Tablet Adaptations (768px - 1024px)

**Responsive Grid System:**

- 2-column layouts become primary
- Sidebar collapses to icon-only
- Touch-friendly sizing maintained
- Horizontal scrolling for wide tables

---

## Layout Utilities & Components

### Content Containers

**Page Container**

```css
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
```

**Content Grid**

```css
.content-grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
}
```

### Card Components

**Basic Card**

```typescript
interface CardProps {
  title?: string;
  actions?: ReactNode;
  collapsible?: boolean;
  size?: 'small' | 'medium' | 'large';
  padding?: 'tight' | 'normal' | 'loose';
}
```

**Widget Card (Dashboard)**

```typescript
interface WidgetProps extends CardProps {
  gridArea?: string; // CSS grid area
  minHeight?: number;
  refresh?: () => void;
  loading?: boolean;
}
```

---

## Template Composition

### Layout Inheritance

```
BaseTemplate
├── PageTemplate (adds sidebar, header)
│   ├── ListTemplate (adds filters, pagination)
│   ├── DetailTemplate (adds context panels)
│   ├── DashboardTemplate (adds widget grid)
│   └── FormTemplate (adds form assistance)
└── ModalTemplate (overlay, no sidebar)
```

### Template Slots

```typescript
interface PageTemplateSlots {
  header?: ReactNode;
  sidebar?: ReactNode;
  filters?: ReactNode;
  primaryContent: ReactNode;
  secondaryContent?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
}
```

---

**Related Documents:**

- [App Layout](./app-layout.md) - Overall application shell structure
- [Component Grid](./component-grid.md) - Design system components
- [Feature Mockups](../03-features/) - Specific implementations of these templates
