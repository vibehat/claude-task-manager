# Application Layout & Shell

## Overall Shell Structure

### Desktop Layout (> 1024px)

```
┌─────────────────────────────────────────────────────────────┐
│  Claude Task Manager                                    ⚙️ 👤 │
├─────────────┬───────────────────────────────────────────────┤
│             │                                               │
│  🎯 Right Now│          Main Content Area                   │
│  ├ Working On│                                              │
│  └ Up Next   │    ┌────────────────────────────────┐       │
│              │    │                                 │       │
│  📝 My Work  │    │   Primary Content Panel        │       │
│  ├ To Do     │    │   (Dynamic based on section)   │       │
│  ├ In Progress    │                                 │       │
│  └ Done      │    └────────────────────────────────┘       │
│              │                                              │
│  📚 Notes    │    ┌────────────────────────────────┐       │
│  ├ Browse    │    │   Secondary/Context Panel      │       │
│  └ Create    │    │   (Optional, contextual)       │       │
│              │    └────────────────────────────────┘       │
│  🔍 Overview │                                              │
│  ├ Big Picture                                              │
│  └ Planning  │    ┌────────────────────────────────┐       │
│              │    │   Tertiary/Action Panel        │       │
│  🤖 AI Helper│    │   (Quick actions, metadata)     │       │
│  ├ History   │    └────────────────────────────────┘       │
│  └ Settings  │                                              │
│              │                                              │
│  ⚙️ Preferences                                             │
│  ├ Project   │                                              │
│  └ Personal  │                                              │
└─────────────┴───────────────────────────────────────────────┘
```

### Component Breakdown

**Header Bar (Fixed)**

- Application branding and title
- Global search input
- User avatar and settings menu
- Notifications indicator
- Theme toggle (light/dark)

**Sidebar (240px width, collapsible)**

- Primary navigation sections
- Contextual sub-navigation
- Collapse/expand toggle
- Quick action shortcuts

**Main Content Area (Flexible)**

- Primary content panel (takes remaining space)
- Optional secondary panels (300-400px each)
- Responsive grid system for content organization

---

## Responsive Breakpoints

### Mobile Layout (< 768px)

```
┌─────────────────┐
│ ☰ Task Manager  │ ← Header with hamburger menu
├─────────────────┤
│ 🎯 Working On   │ ← Collapsed to cards
│                 │
│ Authentication  │
│ Task #5 • 45%   │
│                 │
│ [Details] [Done]│
├─────────────────┤
│ Up Next (3)     │ ← Collapsed list
│ • Database      │
│ • API endpoints │
│ [View All]      │
└─────────────────┘
```

**Mobile Adaptations:**

- Sidebar becomes slide-out overlay menu
- Content stacks vertically in single column
- Touch-optimized button sizes (minimum 44px)
- Swipe gestures for navigation
- Bottom tab bar for primary sections

### Tablet Layout (768px - 1024px)

```
┌─────────────────────────────────────────────┐
│  Task Manager    🔍              ⚙️ 👤    │
├─────────────────────────────────────────────┤
│[≡]│              Main Content              │
│   │                                       │
│   │  ┌─────────────────────────────────┐  │
│   │  │        Primary Panel            │  │
│   │  │                                 │  │
│   │  └─────────────────────────────────┘  │
│   │                                       │
│   │  ┌─────────────────────────────────┐  │
│   │  │      Secondary Panel            │  │
│   │  └─────────────────────────────────┘  │
└───┴───────────────────────────────────────┘
```

**Tablet Adaptations:**

- Sidebar collapses to icon-only strip
- Two-column content layout
- Touch and mouse interaction support
- Responsive grid adjusts column count

---

## Layout States & Variations

### Sidebar States

**Expanded Sidebar (240px)**

```
┌─────────────────┐
│ 🎯 Right Now    │
│ ├ Working On    │
│ └ Up Next       │
│                 │
│ 📝 My Work      │
│ ├ To Do         │
│ ├ In Progress   │
│ └ Done          │
│                 │
│ [« Collapse]    │
└─────────────────┘
```

**Collapsed Sidebar (60px)**

```
┌───┐
│🎯 │
│   │
│📝 │
│   │
│📚 │
│   │
│🔍 │
│   │
│🤖 │
│   │
│⚙️ │
│   │
│[»]│
└───┘
```

**Mobile Overlay Sidebar**

```
┌─────────────────────────────┐
│ × Task Manager              │
│                             │
│ 🎯 Right Now               │
│    Working On              │
│    Up Next                 │
│                             │
│ 📝 My Work                 │
│    To Do                   │
│    In Progress             │
│    Done                    │
│                             │
│ ... (full navigation)       │
└─────────────────────────────┘
```

### Content Panel Configurations

**Single Panel (Full Width)**

- Task detail view
- Note editing view
- Settings pages
- Dashboard overview

**Two Panel (70/30 Split)**

- Main content + context panel
- Task list + task preview
- Notes list + note preview

**Three Panel (50/25/25 Split)**

- Main content + two context panels
- Task + notes + files
- Dashboard + recent activity + quick actions

---

## Navigation Patterns

### Primary Navigation

**Section-based Navigation:**

```
Dashboard → Landing page, overview of all activity
Tasks → Task management, lists, and detail views
Working → Focus mode, active session management
My Works → Portfolio, achievements, time tracking
Notes → Knowledge management, note creation
```

**Visual Indicators:**

- Active section highlighted in sidebar
- Breadcrumb navigation in main content
- Progress indicators for multi-step processes
- Badge counts for pending items

### Contextual Navigation

**Within-Section Navigation:**

- Sub-navigation appears when section is active
- Contextual actions in content area
- Quick-access shortcuts in sidebar
- Related item suggestions

**Cross-Section Navigation:**

- Global search with section-specific results
- Quick switch between related items
- Recent items accessible from anywhere
- Bookmarked/pinned items for fast access

---

## Content Zones & Hierarchy

### Z-Pattern Reading Flow

**Primary Path (Top-Left to Bottom-Right):**

1. **Header/Branding** - Establishes context
2. **Main Navigation** - Primary wayfinding
3. **Content Title** - Current focus area
4. **Primary Actions** - Main task actions
5. **Content Details** - Supporting information

### Visual Weight Distribution

**High Priority Areas (Bold, High Contrast):**

- Current task/active work
- Primary action buttons
- Status indicators and alerts
- Navigation active states

**Medium Priority Areas (Standard Weight):**

- Task lists and content
- Secondary actions
- Metadata and descriptions
- Navigation inactive states

**Low Priority Areas (Subtle, Lower Contrast):**

- Support information
- Timestamps and IDs
- Tertiary actions
- Background content

---

## Layout Components

### Header Component Structure

```typescript
interface HeaderProps {
  title: string;
  searchEnabled?: boolean;
  userMenu?: boolean;
  notifications?: number;
  theme?: 'light' | 'dark' | 'auto';
}
```

### Sidebar Component Structure

```typescript
interface SidebarProps {
  collapsed: boolean;
  activeSection: string;
  sections: NavigationSection[];
  user: UserInfo;
  onToggle: () => void;
}

interface NavigationSection {
  id: string;
  title: string;
  icon: string;
  badge?: number;
  children?: NavigationItem[];
}
```

### Content Area Structure

```typescript
interface ContentLayoutProps {
  panels: PanelConfig[];
  responsive: boolean;
  spacing: 'comfortable' | 'compact';
}

interface PanelConfig {
  id: string;
  width: string | number;
  minWidth?: number;
  collapsible?: boolean;
  priority: number; // For responsive stacking
}
```

---

## Accessibility Layout Considerations

### Screen Reader Navigation

```html
<!-- Landmark structure -->
<header role="banner">
  <nav role="navigation" aria-label="Primary">
    <main role="main">
      <aside role="complementary" aria-label="Task Context">
        <footer role="contentinfo"></footer>
      </aside>
    </main>
  </nav>
</header>
```

### Focus Management

- **Focus trap** in modal overlays and sidebars
- **Skip links** to main content and navigation
- **Focus rings** clearly visible on all interactive elements
- **Logical tab order** through interface sections

### Layout Announcements

- Sidebar expand/collapse announced to screen readers
- Panel layout changes communicated clearly
- Loading states described during content updates
- Error states clearly announced and actionable

---

**Related Documents:**

- [Design Principles](../01-overview/design-principles.md) - Core layout philosophy
- [User Flows](../01-overview/user-flows.md) - Navigation patterns through layout
- [Page Templates](./page-templates.md) - Specific page layout implementations
