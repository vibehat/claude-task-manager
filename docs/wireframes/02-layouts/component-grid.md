# Component Grid & Design System

## Core UI Components

### Basic Elements

#### Buttons

```
Primary:    [Submit Task]     Secondary: [Cancel]      Ghost: [More Options]
Success:    [Mark Complete]   Warning:   [Archive]     Danger: [Delete]
```

**Button Variants:**

- **Primary**: Main actions, high contrast, brand color
- **Secondary**: Alternative actions, medium contrast
- **Ghost**: Low-emphasis actions, minimal styling
- **Icon-only**: Compact actions with icon + tooltip

#### Form Controls

```
Text Input:     [____________________]
Select:         [Option Selected ▼]
Checkbox:       ☐ Unchecked  ☑ Checked
Radio:          ○ Option A   ● Option B
Toggle Switch:  ⚪────── Off    ──────⚫ On
```

#### Typography Scale

```
H1: Page Titles          (2.25rem, 900 weight)
H2: Section Headers      (1.875rem, 700 weight)
H3: Subsection Headers   (1.5rem, 600 weight)
H4: Component Titles     (1.25rem, 600 weight)
Body: Regular text       (1rem, 400 weight)
Small: Metadata text     (0.875rem, 400 weight)
```

---

## Composite Components

### Card Component System

#### Basic Card

```
┌─────────────────────────────────┐
│ [Card Title]              [•••] │
├─────────────────────────────────┤
│                                 │
│ Card content area with          │
│ flexible layout support         │
│                                 │
├─────────────────────────────────┤
│ [Action] [Secondary Action]     │
└─────────────────────────────────┘
```

#### Task Card

```
┌─────────────────────────────────┐
│ ☐ Implement JWT Authentication  │
│ Task #1.2.1 • High Priority     │
│ ████████░░░░ 45% complete       │
│ 🗓️ Due Aug 15 • 👤 Assigned to Me│
│ 🏷️ #auth #backend #security     │
│ [View Details] [Start Work]     │
└─────────────────────────────────┘
```

#### Widget Card (Dashboard)

```
┌─────────────────────────────────┐
│ 🎯 Working On            [⚙️]  │
├─────────────────────────────────┤
│                                 │
│     JWT Implementation          │
│       45% complete              │
│                                 │
│ [View Details] [Mark Complete]  │
└─────────────────────────────────┘
```

### Navigation Components

#### Sidebar Navigation Item

```
Active:     🎯 Right Now                    (Bold, brand color background)
Inactive:   📝 My Work                      (Normal weight)
With Badge: 🔍 Overview              (3)    (Badge with count)
Collapsed:  🎯                             (Icon only)
```

#### Breadcrumb Navigation

```
Tasks > Authentication System > JWT Implementation > Token Generation
[←]   [────────────] [──────────────] [─────────────────] [─────────────]
```

#### Tab Navigation

```
Active Tab:    [📝 Notes]  [💻 Code]  [🧪 Tests]  [📋 Checklist]
              ──────────   ─────────   ─────────   ──────────
              (Underlined, brand color)
```

---

## Layout Components

### Grid System

#### Responsive Grid

```
Desktop (>1024px):    [──3──] [──6──] [──3──]    (12-column)
Tablet (768-1024px):  [──6──] [──6──]            (12-column)
Mobile (<768px):      [─────12─────]             (12-column)
```

#### Widget Grid (Dashboard)

```
┌─────────────────────────────────────────┐
│ [────1/3────] [────1/3────] [────1/3────] │  Row 1
│ [──────────1/2──────────] [────1/2────] │  Row 2
│ [─────────────Full Width─────────────] │  Row 3
└─────────────────────────────────────────┘
```

### Spacing System

```
Spacing Scale:
xs: 4px    (0.25rem)    sm: 8px     (0.5rem)     md: 16px    (1rem)
lg: 24px   (1.5rem)     xl: 32px    (2rem)       2xl: 48px   (3rem)

Component Padding:
Tight:      xs (4px)     Normal: sm (8px)        Loose: md (16px)

Layout Margins:
Section:    lg (24px)    Page: xl (32px)         Container: 2xl (48px)
```

---

## Data Display Components

### Table Component

```
┌─────────────┬──────────┬──────────┬──────────┬─────────┐
│ ☐ Task Name │ Status   │ Priority │ Due Date │ Actions │
├─────────────┼──────────┼──────────┼──────────┼─────────┤
│ ☐ JWT Auth  │ Progress │ High     │ Aug 15   │ [•••]   │
│ ☐ Dashboard │ To Do    │ Medium   │ Aug 20   │ [•••]   │
│ ☐ Testing   │ Done     │ Low      │ Aug 10   │ [•••]   │
└─────────────┴──────────┴──────────┴──────────┴─────────┘
```

### Progress Indicators

```
Linear Progress:     ████████░░░░░░░░ 45%
Circular Progress:   ◐ 45%
Step Progress:       ●────●────○────○ (Step 2 of 4)
```

### Status Indicators

```
Status Dots:    ● Completed   ◐ In Progress   ○ Pending   ⛔ Blocked
Priority:       🔴 High       🟡 Medium       🔵 Low
```

---

## Interactive Components

### Dropdown Menus

```
Trigger Button: [Status: In Progress ▼]

Dropdown Menu:
┌─────────────────┐
│ ○ To Do         │
│ ● In Progress   │  (Selected)
│ ○ Done          │
│ ○ Blocked       │
└─────────────────┘
```

### Modal Dialogs

```
┌─────────────────────────────────────────────────────┐
│ [×] Confirm Task Deletion                           │
├─────────────────────────────────────────────────────┤
│                                                     │
│ Are you sure you want to delete "JWT               │
│ Implementation"? This action cannot be undone.      │
│                                                     │
│ All related notes, files, and time tracking        │
│ will also be deleted.                               │
│                                                     │
│                           [Cancel] [Delete Task]   │
└─────────────────────────────────────────────────────┘
```

### Tooltip System

```
Hover Target: [?]
Tooltip:     ┌─────────────────────────┐
             │ This task is blocked    │
             │ waiting for API docs    │
             └─────────────────────────┘
```

---

## Form Components

### Input Groups

```
┌─ Task Details ─────────────────────────────────────┐
│                                                    │
│ Title: [JWT Token Implementation________________]  │
│                                                    │
│ Description:                                       │
│ ┌──────────────────────────────────────────────────┐ │
│ │ Implement secure JWT token generation using...   │ │
│ └──────────────────────────────────────────────────┘ │
│                                                    │
│ Priority: [High ▼]    Due Date: [📅 Aug 15, 2025] │
│                                                    │
│ Tags: [#auth] [#backend] [#security] [+ Add tag]  │
│                                                    │
└────────────────────────────────────────────────────┘
```

### Search Components

```
Global Search: [🔍 Search tasks, notes, files...        ]
Faceted Search:
┌──────────────────────────────────────────────────────┐
│ [🔍 Search...]  [All Types ▼] [All Status ▼] [Reset] │
├──────────────────────────────────────────────────────┤
│ Filters: [×auth] [×high-priority] [×in-progress]     │
└──────────────────────────────────────────────────────┘
```

---

## Feedback Components

### Alert Messages

```
Success: ✅ Task "JWT Implementation" marked as complete!
Info:    ℹ️ 3 tasks are blocked and need your attention
Warning: ⚠️ Task deadline is approaching (2 days remaining)
Error:   ❌ Failed to save task. Please try again.
```

### Loading States

```
Skeleton Loading:
┌─────────────────────────────────┐
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   │  (Shimmer animation)
│ ░░░░░░░░░░░░░    ░░░░░░░░░░     │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░    │
└─────────────────────────────────┘

Spinner: ⟳ Loading tasks...
Progress: [██████░░░░] 60% complete
```

---

## Color System

### Brand Colors

```
Primary:     #4A90E2 (Blue)        Primary Dark:   #357ABD
Success:     #50C878 (Green)       Success Dark:   #3DA65C
Warning:     #FFB347 (Orange)      Warning Dark:   #E6A041
Danger:      #FF6B6B (Red)         Danger Dark:    #E55656
```

### Neutral Colors

```
Gray 50:     #F8F9FA               Gray 500:       #6C757D
Gray 100:    #E9ECEF               Gray 600:       #495057
Gray 200:    #DEE2E6               Gray 700:       #343A40
Gray 300:    #CED4DA               Gray 800:       #212529
Gray 400:    #ADB5BD               Gray 900:       #000000
```

### Theme Support

```
Light Theme:
- Background: White (#FFFFFF)
- Surface: Gray 50 (#F8F9FA)
- Text: Gray 800 (#212529)
- Border: Gray 200 (#DEE2E6)

Dark Theme:
- Background: Gray 900 (#0D1117)
- Surface: Gray 800 (#161B22)
- Text: Gray 100 (#C9D1D9)
- Border: Gray 600 (#30363D)
```

---

## Component States

### Interactive States

```
Default:    [Button]
Hover:      [Button]     (Slight opacity/color change)
Active:     [Button]     (Pressed appearance)
Focus:      [Button]     (Visible focus ring)
Disabled:   [Button]     (Reduced opacity, no interaction)
Loading:    [⟳ Loading] (Spinner + disabled state)
```

### Data States

```
Empty State:    📭 No tasks yet. Create your first task!
Error State:    ❌ Something went wrong. Please try again.
Loading State:  ⟳ Loading your tasks...
Success State:  ✅ All tasks loaded successfully.
```

---

**Related Documents:**

- [App Layout](./app-layout.md) - How components fit in overall layout
- [Design Principles](../01-overview/design-principles.md) - Philosophy behind component design
- [Implementation Specs](../06-implementation/component-specs.md) - Technical component requirements
