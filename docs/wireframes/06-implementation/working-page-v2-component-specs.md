# Working Page v2.0 - Component Specifications

## Overview

This document provides detailed component specifications for implementing the production-ready Working Page v2.0 design. Each component includes props, behavior, styling guidelines, and responsive considerations.

---

## Layout Components

### 1. WorkingPageLayout

**File**: `WorkingPageLayout.tsx`

```typescript
interface WorkingPageLayoutProps {
  currentTask: Task | null;
  activeTasks: Task[];
  onTaskSwitch: (taskId: string) => void;
  onAction: (action: string, payload?: any) => void;
}
```

**Structure**:

```tsx
<div className="flex h-screen bg-background">
  <TaskSidebar />
  <div className="flex-1 flex flex-col">
    <HeaderContextStrip />
    <main className="flex-1 p-6 overflow-auto">
      <HeroDirectionInput />
      <TaskContextCard />
      <ContextualActions />
    </main>
  </div>
</div>
```

**Responsive Behavior**:

- Desktop (>1024px): Full sidebar visible
- Tablet (768-1024px): Collapsible sidebar with overlay
- Mobile (<768px): Bottom navigation replaces sidebar

**Styling Guidelines**:

- Use CSS Grid for main layout structure
- Sidebar width: `200px` fixed on desktop
- Main content padding: `24px` (p-6)
- Background: `bg-background` from design system

---

## Core Components

### 2. HeroDirectionInput

**File**: `HeroDirectionInput.tsx`

```typescript
interface HeroDirectionInputProps {
  currentTask: Task | null;
  onSubmit: (command: string, context?: string[]) => void;
  onSuggestionSelect: (suggestion: AISuggestion) => void;
  isProcessing?: boolean;
  placeholder?: string;
}

interface AISuggestion {
  id: string;
  text: string;
  confidence: number;
  contextRequired?: string[];
  estimatedTime?: string;
}
```

**Key Features**:

- **Auto-resize textarea**: Minimum 120px height, expands up to 300px
- **AI suggestions**: Appear below input as user types (debounced 300ms)
- **Context insertion**: Dropdown with PRD, notes, files, tasks
- **Smart placeholders**: Context-aware based on task state
- **Keyboard shortcuts**: Enter to submit, Esc to clear

**Styling Guidelines**:

```scss
.hero-input {
  @apply w-full mb-8;

  .input-container {
    @apply relative bg-card border-2 border-border rounded-xl shadow-sm;
    @apply focus-within:border-primary focus-within:shadow-md;
    transition: all 200ms ease;
  }

  .textarea {
    @apply w-full min-h-[120px] p-4 text-base bg-transparent resize-none;
    @apply placeholder:text-muted-foreground focus:outline-none;
    font-family: 'Inter', sans-serif;
  }

  .suggestions {
    @apply mt-2 bg-card border border-border rounded-lg shadow-lg;
    @apply max-h-48 overflow-y-auto;
  }

  .suggestion-item {
    @apply p-3 hover:bg-accent cursor-pointer border-b border-border last:border-b-0;
    @apply transition-colors duration-150;
  }
}
```

**Responsive Adaptations**:

- Mobile: Minimum height reduces to 80px
- Tablet: Width adjusts to container
- Focus state: More prominent on mobile (larger tap targets)

### 3. TaskSidebar

**File**: `TaskSidebar.tsx`

```typescript
interface TaskSidebarProps {
  currentTask: Task | null;
  activeTasks: Task[];
  onTaskSelect: (taskId: string) => void;
  onQuickAction: (action: QuickAction) => void;
  onTaskAdd: () => void;
  isCollapsed?: boolean;
  onToggleCollapse: () => void;
}

interface TaskSidebarItem {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  progress: number;
  status: TaskStatus;
  isCurrent: boolean;
}
```

**Structure**:

```
┌─────────────┐
│ 🎯 CURRENT  │ <- Section header
│ ┌─────────┐ │ <- Current task card (prominent)
│ │ 28.2    │ │
│ │ JWT     │ │
│ │ 🔴 HIGH │ │
│ │ 🟢 80%  │ │
│ └─────────┘ │
│             │
│ 📝 OTHERS   │ <- Other tasks (compact list)
│ □ 28.3 API  │
│ □ 29.1 Rate │
│ + Add Task  │
│             │
│ ⚡ QUICK     │ <- Quick actions
│ 🔍 Research │
│ 📋 Context  │
│ ⌘ Commands  │
│ 🔄 Sync    │
└─────────────┘
```

**Styling Guidelines**:

```scss
.task-sidebar {
  @apply w-[200px] bg-card border-r border-border flex flex-col;
  min-height: 100vh;

  .current-task-card {
    @apply p-3 m-3 bg-accent/50 border border-accent rounded-lg;
    @apply shadow-sm hover:shadow-md transition-shadow;
  }

  .task-list-item {
    @apply px-3 py-2 mx-2 text-sm hover:bg-accent rounded cursor-pointer;
    @apply transition-colors duration-150;

    &.completed {
      @apply text-muted-foreground line-through;
    }
  }

  .quick-actions {
    @apply mt-auto p-3 border-t border-border;

    .quick-action-button {
      @apply w-full p-2 text-left text-sm hover:bg-accent rounded;
      @apply flex items-center gap-2 transition-colors;
    }
  }
}
```

**Responsive Behavior**:

- Desktop: Fixed 200px width, always visible
- Tablet: Collapsible to 60px (icons only), expands on hover
- Mobile: Replaced by bottom navigation bar

### 4. TaskContextCard

**File**: `TaskContextCard.tsx`

```typescript
interface TaskContextCardProps {
  task: Task;
  aiSession?: AISession;
  onExpand: () => void;
  onAction: (action: string) => void;
  isExpanded?: boolean;
}

interface Task {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  progress: number;
  status: TaskStatus;
  contextQuality: number; // 1-5 stars
  dependencies: string[];
  estimatedTimeRemaining: string;
  lastActivity: {
    message: string;
    timestamp: string;
    files?: string[];
  };
}
```

**Visual Hierarchy**:

```
┌─────────────────────────────────────────────────────────────────────────┐
│ Task 28.2: JWT Token Implementation                    🔴 HIGH PRIORITY │ ← Title + Priority
│ ════════════════════════════════════════════════════════════════════════ │ ← Visual separator
│ Progress: ████████████░░░░░░ 80%                              ⏱️ 2h left │ ← Progress bar + time
│                                                                         │
│ Status: 🟢 AI Active (Claude) • Dependencies: ✅ Ready • Context: ★★★★☆ │ ← Status indicators
│                                                                         │
│ 📝 Latest Activity: Updated src/auth/jwt.ts (12 minutes ago)           │ ← Activity feed
│ └─────────────────────────────────────────────────────────────────────┘ │ ← Expand trigger
```

**Styling Guidelines**:

```scss
.task-context-card {
  @apply bg-card border border-border rounded-xl p-6 mb-6 shadow-sm;
  @apply hover:shadow-md transition-shadow cursor-pointer;

  .task-header {
    @apply flex items-center justify-between mb-4;

    .task-title {
      @apply text-xl font-semibold text-foreground;
    }

    .priority-badge {
      @apply px-3 py-1 rounded-full text-sm font-medium;

      &.high {
        @apply bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300;
      }
      &.medium {
        @apply bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300;
      }
      &.low {
        @apply bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300;
      }
    }
  }

  .progress-section {
    @apply flex items-center justify-between mb-3;

    .progress-bar {
      @apply w-full h-2 bg-muted rounded-full overflow-hidden mr-4;

      .progress-fill {
        @apply h-full bg-primary transition-all duration-500;
      }
    }
  }

  .status-indicators {
    @apply flex items-center gap-4 text-sm mb-3;

    .status-item {
      @apply flex items-center gap-1;

      .status-icon {
        @apply w-3 h-3 rounded-full;

        &.active {
          @apply bg-green-500;
        }
        &.blocked {
          @apply bg-red-500;
        }
        &.idle {
          @apply bg-yellow-500;
        }
      }
    }
  }
}
```

### 5. ContextualActions

**File**: `ContextualActions.tsx`

```typescript
interface ContextualActionsProps {
  task: Task;
  aiSession?: AISession;
  onAction: (action: ActionType, payload?: any) => void;
  availableActions: ActionType[];
}

type ActionType =
  | 'continue-ai'
  | 'review-code'
  | 'run-tests'
  | 'mark-complete'
  | 'switch-task'
  | 'view-subtasks'
  | 'research'
  | 'export-context'
  | 'set-status';
```

**Adaptive Action Display**:

```typescript
const getActionsForTaskState = (task: Task, aiSession?: AISession): ActionType[] => {
  const baseActions: ActionType[] = ['switch-task'];

  if (aiSession?.status === 'active') {
    return ['continue-ai', 'review-code', 'run-tests', ...baseActions];
  }

  if (task.status === 'completed') {
    return ['review-code', 'mark-complete', ...baseActions];
  }

  if (task.status === 'blocked') {
    return ['research', 'set-status', ...baseActions];
  }

  // Default pending state
  return ['continue-ai', 'research', 'view-subtasks', ...baseActions];
};
```

**Styling Guidelines**:

```scss
.contextual-actions {
  @apply flex flex-wrap gap-3;

  .primary-action {
    @apply px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium;
    @apply hover:bg-primary/90 transition-colors shadow-sm;
  }

  .secondary-action {
    @apply px-4 py-2 bg-accent text-accent-foreground rounded-lg;
    @apply hover:bg-accent/80 transition-colors;
  }

  .tertiary-action {
    @apply px-3 py-2 text-muted-foreground hover:text-foreground;
    @apply hover:bg-accent rounded transition-colors;
  }
}
```

---

## Progressive Disclosure Panels

### 6. TaskDetailsPanel

**File**: `panels/TaskDetailsPanel.tsx`

```typescript
interface TaskDetailsPanelProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onSubtaskUpdate: (subtaskId: string, update: Partial<Subtask>) => void;
}
```

**Sliding Panel Animation**:

```scss
.task-details-panel {
  @apply fixed right-0 top-0 h-full w-96 bg-card border-l border-border shadow-lg;
  @apply transform transition-transform duration-300 ease-in-out;

  &.closed {
    @apply translate-x-full;
  }

  &.open {
    @apply translate-x-0;
  }

  .panel-content {
    @apply p-6 overflow-y-auto h-full;

    .subtasks-section {
      @apply space-y-3;

      .subtask-item {
        @apply flex items-center gap-3 p-3 bg-accent/30 rounded-lg;
        @apply hover:bg-accent/50 transition-colors;
      }
    }
  }
}
```

### 7. ContextBrowserPanel

**File**: `panels/ContextBrowserPanel.tsx`

```typescript
interface ContextBrowserPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onInsertContext: (context: ContextItem[]) => void;
  availableContext: {
    documents: Document[];
    files: File[];
    tasks: Task[];
    notes: Note[];
  };
}
```

**Tabbed Interface**:

```scss
.context-browser-panel {
  @apply fixed bottom-0 left-0 right-0 h-80 bg-card border-t border-border;
  @apply transform transition-transform duration-300 ease-in-out;

  &.closed {
    @apply translate-y-full;
  }

  .context-tabs {
    @apply flex border-b border-border;

    .tab {
      @apply px-4 py-2 text-sm hover:bg-accent cursor-pointer;
      @apply transition-colors border-b-2 border-transparent;

      &.active {
        @apply border-primary text-primary;
      }
    }
  }

  .context-grid {
    @apply grid grid-cols-2 gap-4 p-4 overflow-y-auto;

    .context-category {
      @apply space-y-2;

      .context-item {
        @apply p-2 bg-accent/30 rounded text-sm hover:bg-accent/50;
        @apply cursor-pointer transition-colors;

        &.selected {
          @apply bg-primary/20 border border-primary;
        }
      }
    }
  }
}
```

---

## Responsive Design System

### Breakpoint Strategy

```scss
// Tailwind custom breakpoints
@screen xs {
  // 475px and up
}

@screen sm {
  // 640px and up
}

@screen md {
  // 768px and up
}

@screen lg {
  // 1024px and up
}

@screen xl {
  // 1280px and up
}
```

### Mobile Adaptations

#### Bottom Navigation (Mobile Replacement for Sidebar)

```typescript
interface BottomNavigationProps {
  currentTask: Task | null;
  activeTasks: Task[];
  onTaskSelect: (taskId: string) => void;
  onQuickAction: (action: string) => void;
}
```

```scss
.bottom-navigation {
  @apply fixed bottom-0 left-0 right-0 bg-card border-t border-border;
  @apply flex items-center justify-around p-2 safe-area-pb;

  .nav-item {
    @apply flex flex-col items-center gap-1 p-2 rounded-lg;
    @apply hover:bg-accent transition-colors min-w-0 flex-1;

    .nav-icon {
      @apply text-lg;
    }

    .nav-label {
      @apply text-xs text-muted-foreground truncate;
    }

    &.active {
      @apply bg-accent text-accent-foreground;

      .nav-label {
        @apply text-accent-foreground;
      }
    }
  }
}
```

#### Mobile Hero Input

```scss
@media (max-width: 768px) {
  .hero-input {
    .input-container {
      @apply border border-border; // Reduce border weight
    }

    .textarea {
      @apply min-h-[80px] p-3 text-base; // Smaller on mobile
    }

    .action-buttons {
      @apply flex-wrap gap-2;

      .action-button {
        @apply flex-1 min-w-[120px]; // Ensure buttons are tappable
      }
    }
  }
}
```

---

## Keyboard Shortcuts & Accessibility

### Keyboard Navigation Map

```typescript
const keyboardShortcuts = {
  'Enter': 'submit-hero-input',
  'Escape': 'clear-input-or-close-panel',
  'Cmd+K': 'open-command-palette',
  '/': 'open-command-palette',
  'Cmd+1': 'switch-to-task-1',
  'Cmd+2': 'switch-to-task-2',
  'Cmd+3': 'switch-to-task-3',
  'Cmd+4': 'switch-to-task-4',
  'Cmd+Shift+C': 'copy-context',
  'Tab': 'navigate-next-element',
  'Shift+Tab': 'navigate-previous-element',
};
```

### Focus Management

```typescript
const focusableElements = [
  'heroInput',
  'primaryActions',
  'taskSidebarItems',
  'contextualActions',
  'panelControls',
];

const useFocusManagement = () => {
  const [focusIndex, setFocusIndex] = useState(0);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const direction = e.shiftKey ? -1 : 1;
      setFocusIndex(
        (prev) => (prev + direction + focusableElements.length) % focusableElements.length
      );
    }
  }, []);

  return { focusIndex, handleKeyDown };
};
```

### ARIA Labels & Screen Reader Support

```typescript
const ariaLabels = {
  heroInput: 'Main command input for task direction',
  taskSidebar: 'Task navigation and quick actions',
  currentTaskCard: 'Current task information and context',
  contextualActions: 'Actions available for current task',
  progressBar: (progress: number) => `Task progress: ${progress}% complete`,
  priorityBadge: (priority: string) => `Priority level: ${priority}`,
  statusIndicator: (status: string) => `Current status: ${status}`,
};
```

---

## Performance Optimization

### Code Splitting Strategy

```typescript
// Lazy load heavy panels
const TaskDetailsPanel = lazy(() => import('./panels/TaskDetailsPanel'));
const ContextBrowserPanel = lazy(() => import('./panels/ContextBrowserPanel'));
const ActivityFeedPanel = lazy(() => import('./panels/ActivityFeedPanel'));

// Critical components loaded immediately
import HeroDirectionInput from './HeroDirectionInput';
import TaskSidebar from './TaskSidebar';
import TaskContextCard from './TaskContextCard';
```

### Virtualization for Long Lists

```typescript
import { FixedSizeList as List } from 'react-window';

const VirtualizedTaskList = ({ tasks, itemSize = 60 }) => (
  <List
    height={300}
    itemCount={tasks.length}
    itemSize={itemSize}
    itemData={tasks}
  >
    {TaskListItem}
  </List>
);
```

### Memoization Strategy

```typescript
const MemoizedHeroInput = memo(HeroDirectionInput, (prevProps, nextProps) => {
  return (
    prevProps.currentTask?.id === nextProps.currentTask?.id &&
    prevProps.isProcessing === nextProps.isProcessing
  );
});

const MemoizedTaskSidebar = memo(TaskSidebar, (prevProps, nextProps) => {
  return (
    prevProps.activeTasks.length === nextProps.activeTasks.length &&
    prevProps.currentTask?.id === nextProps.currentTask?.id
  );
});
```

---

This comprehensive component specification provides everything needed to implement the Working Page v2.0 design with modern UI/UX best practices, responsive design, accessibility, and performance optimization.
