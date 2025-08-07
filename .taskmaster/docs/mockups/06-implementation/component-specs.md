# Component Specifications & Technical Requirements

## Overview

Technical specifications for implementing the Task Management UI components, including data structures, API interfaces, state management patterns, and performance requirements.

## Core Data Structures

### Task Data Model

```typescript
interface Task {
  // Core identification
  id: string; // Format: "1.2.1" (hierarchical)
  title: string;
  description: string;

  // Status & workflow
  status: TaskStatus;
  priority: TaskPriority;

  // Hierarchy & relationships
  parentId?: string; // Parent task ID
  subtasks: Task[]; // Child tasks array
  dependencies: string[]; // Blocking task IDs

  // Context & metadata
  context: TaskContext;
  metadata: TaskMetadata;

  // Tracking
  timeTracking: TimeEntry[];
  progressPercentage: number; // 0-100, calculated from subtasks
}

type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'blocked' | 'archived';
type TaskPriority = 'low' | 'medium' | 'high';

interface TaskContext {
  notes: Note[];
  files: TaskFile[];
  conversations: Conversation[];
  tags: string[];
  linkedItems: string[]; // Related task/note IDs
}

interface TaskMetadata {
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  assignedTo?: string;
  dueDate?: Date;
  estimatedTime?: number; // Minutes
  actualTime?: number; // Minutes (from time tracking)
}

interface TimeEntry {
  id: string;
  taskId: string;
  startTime: Date;
  endTime?: Date; // null for active sessions
  duration?: number; // Calculated duration in minutes
  description?: string; // Session notes
  type: 'work' | 'break' | 'research' | 'meeting';
}
```

### Note Data Model

```typescript
interface Note {
  id: string;
  title: string;
  content: string; // Markdown content

  // Organization
  type: NoteType;
  tags: string[];
  collections: string[]; // Collection IDs

  // Relationships
  linkedTasks: string[]; // Task IDs
  linkedNotes: string[]; // Related note IDs

  // Content metadata
  metadata: NoteMetadata;
  searchData: NoteSearchData; // Pre-computed search fields
}

type NoteType = 'research' | 'bug-report' | 'meeting' | 'idea' | 'learning' | 'tutorial';

interface NoteMetadata {
  createdAt: Date;
  updatedAt: Date;
  author: string;
  wordCount: number;
  readingTime: number; // Estimated reading time in minutes
  attachments: string[]; // File IDs
}

interface NoteSearchData {
  searchableContent: string; // Processed content for full-text search
  extractedKeywords: string[];
  contentSummary: string; // AI-generated summary for previews
}
```

## Component Architecture

### Task Components

**TaskCard Component**

```typescript
interface TaskCardProps {
  task: Task;
  viewMode: 'compact' | 'detailed' | 'minimal';
  showSubtasks?: boolean;
  dragEnabled?: boolean;
  onStatusChange: (taskId: string, status: TaskStatus) => void;
  onPriorityChange: (taskId: string, priority: TaskPriority) => void;
  onTaskClick: (taskId: string) => void;
  onTaskEdit: (taskId: string) => void;
  className?: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  viewMode,
  showSubtasks = false,
  dragEnabled = true,
  onStatusChange,
  onPriorityChange,
  onTaskClick,
  onTaskEdit,
  className,
}) => {
  // Component implementation
};
```

**TaskDetail Component**

```typescript
interface TaskDetailProps {
  taskId: string;
  initialTab?: TaskDetailTab;
  editable?: boolean;
  onTaskUpdate: (taskId: string, updates: Partial<Task>) => void;
  onClose: () => void;
}

type TaskDetailTab = 'notes' | 'files' | 'conversations' | 'timeline' | 'subtasks';

const TaskDetail: React.FC<TaskDetailProps> = ({
  taskId,
  initialTab = 'notes',
  editable = true,
  onTaskUpdate,
  onClose,
}) => {
  // Detailed task view implementation
};
```

### Layout Components

**AppShell Component**

```typescript
interface AppShellProps {
  children: React.ReactNode;
  sidebarCollapsed?: boolean;
  theme?: 'light' | 'dark' | 'auto';
  onThemeChange: (theme: string) => void;
  user: UserInfo;
}

interface UserInfo {
  id: string;
  name: string;
  avatar?: string;
  role: string;
  preferences: UserPreferences;
}

interface UserPreferences {
  theme: string;
  sidebarCollapsed: boolean;
  defaultView: string;
  notifications: NotificationSettings;
}
```

**Sidebar Component**

```typescript
interface SidebarProps {
  collapsed: boolean;
  activeSection: string;
  sections: NavigationSection[];
  onToggle: () => void;
  onSectionChange: (sectionId: string) => void;
}

interface NavigationSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number | string;
  children?: NavigationItem[];
  collapsible?: boolean;
}

interface NavigationItem {
  id: string;
  title: string;
  href: string;
  badge?: number | string;
  active?: boolean;
}
```

## State Management

### Redux/Zustand Store Structure

```typescript
// Task Management Store
interface TaskState {
  tasks: Record<string, Task>;
  taskHierarchy: TaskHierarchy;
  activeTask: string | null;
  selectedTasks: string[];

  // UI state
  viewMode: 'list' | 'board' | 'timeline';
  filters: TaskFilters;
  sortBy: TaskSortOption;
  loading: LoadingState;
  error: string | null;
}

interface TaskHierarchy {
  rootTasks: string[]; // Top-level task IDs
  parentMap: Record<string, string>; // child -> parent mapping
  childrenMap: Record<string, string[]>; // parent -> children mapping
}

interface TaskFilters {
  status: TaskStatus[];
  priority: TaskPriority[];
  assignee: string[];
  tags: string[];
  dateRange: DateRange | null;
  searchQuery: string;
}

type TaskSortOption =
  | 'priority-desc'
  | 'priority-asc'
  | 'due-date-asc'
  | 'due-date-desc'
  | 'created-asc'
  | 'created-desc'
  | 'updated-asc'
  | 'updated-desc'
  | 'title-asc'
  | 'title-desc';

interface LoadingState {
  fetchingTasks: boolean;
  updatingTask: string | null;
  savingTask: string | null;
}
```

### Actions & Reducers

```typescript
// Task Actions
type TaskAction =
  | { type: 'FETCH_TASKS_START' }
  | { type: 'FETCH_TASKS_SUCCESS'; payload: Task[] }
  | { type: 'FETCH_TASKS_FAILURE'; payload: string }
  | { type: 'UPDATE_TASK'; payload: { id: string; updates: Partial<Task> } }
  | { type: 'DELETE_TASK'; payload: string }
  | {
      type: 'REORDER_TASKS';
      payload: { sourceId: string; targetId: string; position: 'before' | 'after' | 'child' };
    }
  | { type: 'SET_ACTIVE_TASK'; payload: string | null }
  | { type: 'SET_FILTERS'; payload: Partial<TaskFilters> }
  | { type: 'SET_VIEW_MODE'; payload: 'list' | 'board' | 'timeline' };

// Task Reducer
const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: {
            ...state.tasks[action.payload.id],
            ...action.payload.updates,
            updatedAt: new Date(),
          },
        },
      };
    // Other cases...
    default:
      return state;
  }
};
```

## API Integration

### REST API Endpoints

```typescript
// Task API
interface TaskAPI {
  // CRUD operations
  getTasks(filters?: TaskFilters): Promise<Task[]>;
  getTask(id: string): Promise<Task>;
  createTask(task: CreateTaskRequest): Promise<Task>;
  updateTask(id: string, updates: UpdateTaskRequest): Promise<Task>;
  deleteTask(id: string): Promise<void>;

  // Bulk operations
  bulkUpdateTasks(updates: BulkTaskUpdate[]): Promise<Task[]>;
  reorderTasks(reorderRequest: TaskReorderRequest): Promise<void>;

  // Hierarchy operations
  moveTask(taskId: string, newParentId: string | null, position: number): Promise<void>;

  // Time tracking
  startTimeTracking(taskId: string): Promise<TimeEntry>;
  stopTimeTracking(entryId: string): Promise<TimeEntry>;
  getTimeEntries(taskId: string): Promise<TimeEntry[]>;
}

interface CreateTaskRequest {
  title: string;
  description?: string;
  priority?: TaskPriority;
  parentId?: string;
  dueDate?: Date;
  tags?: string[];
  assignedTo?: string;
}

interface UpdateTaskRequest extends Partial<CreateTaskRequest> {
  status?: TaskStatus;
  progressPercentage?: number;
}

interface BulkTaskUpdate {
  id: string;
  updates: UpdateTaskRequest;
}

interface TaskReorderRequest {
  taskId: string;
  newPosition: number;
  newParentId?: string | null;
}
```

### WebSocket Events

```typescript
// Real-time updates
interface WebSocketEvents {
  // Task updates
  'task:created': (task: Task) => void;
  'task:updated': (taskId: string, updates: Partial<Task>) => void;
  'task:deleted': (taskId: string) => void;
  'task:reordered': (reorderData: TaskReorderEvent) => void;

  // Time tracking
  'time:started': (entry: TimeEntry) => void;
  'time:stopped': (entry: TimeEntry) => void;

  // Collaboration
  'user:editing': (taskId: string, userId: string) => void;
  'user:stopped-editing': (taskId: string, userId: string) => void;
}

interface TaskReorderEvent {
  taskId: string;
  oldPosition: number;
  newPosition: number;
  oldParentId: string | null;
  newParentId: string | null;
}
```

## Performance Requirements

### Rendering Performance

```typescript
// Virtualized List Implementation
interface VirtualizedTaskListProps {
  tasks: Task[];
  itemHeight: number;
  containerHeight: number;
  overscan?: number;
  onTaskClick: (taskId: string) => void;
}

const VirtualizedTaskList: React.FC<VirtualizedTaskListProps> = ({
  tasks,
  itemHeight,
  containerHeight,
  overscan = 5,
}) => {
  // Implementation using react-window or similar
  const [scrollTop, setScrollTop] = useState(0);

  const visibleRange = useMemo(() => {
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      tasks.length - 1,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
    );
    return { startIndex, endIndex };
  }, [scrollTop, itemHeight, containerHeight, overscan, tasks.length]);

  // Render only visible items
};
```

### Memory Management

```typescript
// Efficient Task Cache
class TaskCache {
  private cache = new Map<string, Task>();
  private maxSize = 1000;
  private accessOrder = new Map<string, number>();

  get(id: string): Task | undefined {
    const task = this.cache.get(id);
    if (task) {
      this.accessOrder.set(id, Date.now());
    }
    return task;
  }

  set(id: string, task: Task): void {
    if (this.cache.size >= this.maxSize) {
      this.evictLRU();
    }
    this.cache.set(id, task);
    this.accessOrder.set(id, Date.now());
  }

  private evictLRU(): void {
    let oldestKey: string | undefined;
    let oldestTime = Date.now();

    for (const [key, time] of this.accessOrder) {
      if (time < oldestTime) {
        oldestTime = time;
        oldestKey = key;
      }
    }

    if (oldestKey) {
      this.cache.delete(oldestKey);
      this.accessOrder.delete(oldestKey);
    }
  }
}
```

## Error Handling

### Error Boundaries

```typescript
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

class TaskErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ errorInfo });

    // Log to error reporting service
    console.error('Task component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <TaskErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}
```

### API Error Handling

```typescript
// Standardized error responses
interface APIError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: Date;
  requestId: string;
}

// Error handling utilities
class TaskAPIClient {
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const error: APIError = await response.json();
      throw new TaskAPIError(error);
    }
    return response.json();
  }

  async updateTask(id: string, updates: UpdateTaskRequest): Promise<Task> {
    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });

      return this.handleResponse<Task>(response);
    } catch (error) {
      if (error instanceof TaskAPIError) {
        // Handle specific API errors
        switch (error.code) {
          case 'TASK_NOT_FOUND':
            throw new Error('Task not found. It may have been deleted.');
          case 'VALIDATION_ERROR':
            throw new Error(`Invalid data: ${error.message}`);
          default:
            throw new Error('Failed to update task. Please try again.');
        }
      }
      throw error;
    }
  }
}

class TaskAPIError extends Error {
  constructor(public apiError: APIError) {
    super(apiError.message);
    this.name = 'TaskAPIError';
  }

  get code() {
    return this.apiError.code;
  }
}
```

## Testing Specifications

### Component Testing

```typescript
// Task Card Component Tests
describe('TaskCard', () => {
  const mockTask: Task = {
    id: '1.2.1',
    title: 'Test Task',
    description: 'Test Description',
    status: 'pending',
    priority: 'high',
    // ... other properties
  };

  it('displays task information correctly', () => {
    render(
      <TaskCard
        task={mockTask}
        viewMode="detailed"
        onStatusChange={jest.fn()}
        onPriorityChange={jest.fn()}
        onTaskClick={jest.fn()}
        onTaskEdit={jest.fn()}
      />
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('High')).toBeInTheDocument();
  });

  it('calls onStatusChange when status is updated', async () => {
    const onStatusChange = jest.fn();
    render(
      <TaskCard
        task={mockTask}
        viewMode="detailed"
        onStatusChange={onStatusChange}
        onPriorityChange={jest.fn()}
        onTaskClick={jest.fn()}
        onTaskEdit={jest.fn()}
      />
    );

    const statusButton = screen.getByRole('button', { name: /pending/i });
    await user.click(statusButton);

    const completeOption = screen.getByRole('option', { name: /completed/i });
    await user.click(completeOption);

    expect(onStatusChange).toHaveBeenCalledWith('1.2.1', 'completed');
  });
});
```

---

**Related Documents:**

- [State Management](./state-management.md) - Detailed state management patterns
- [Accessibility](./accessibility.md) - Accessibility implementation requirements
- [Design System](../02-layouts/component-grid.md) - Visual component specifications
