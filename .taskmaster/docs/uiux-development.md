# UI/UX Development Guide - Claude Task Manager

> **Development Phase Instructions**: Implementation patterns, code examples, and technical specifications for building developer-focused UI components.

## Tech Stack & Setup

### Foundation

- **Framework**: Next.js 15.2.4 + App Router
- **Styling**: Tailwind CSS v4 with design tokens
- **Components**: Radix UI primitives + shadcn/ui
- **State Management**: Zustand with persistence
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate + Motion

### File Structure

```
src/
├── components/ui/          # shadcn/ui base components
├── features/tasks/         # Task-related components
├── features/terminal/      # Terminal integration
├── features/commands/      # Command palette
├── components/layout/      # Layout components
└── hooks/                  # Shared React hooks
```

---

## Core Component Implementations

### TaskCard - Primary Building Block

```typescript
interface TaskCardProps {
  task: Task;
  compact?: boolean;
  showSubtasks?: boolean;
  onStatusChange?: (status: TaskStatus) => void;
}

const TaskCard = ({ task, compact = false, showSubtasks = true, onStatusChange }) => {
  const [optimisticTask, setOptimisticTask] = useState(task);

  const handleStatusChange = async (newStatus: TaskStatus) => {
    // Optimistic update
    setOptimisticTask(prev => ({ ...prev, status: newStatus }));

    try {
      await onStatusChange?.(newStatus);
    } catch (error) {
      // Revert on error
      setOptimisticTask(task);
      toast.error('Failed to update task');
    }
  };

  return (
    <Card className={cn(
      "group relative transition-all duration-200",
      "hover:shadow-md hover:border-primary/20",
      "focus-within:ring-2 focus-within:ring-primary/20",
      compact && "py-2"
    )}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <TaskStatusButton
            status={optimisticTask.status}
            onChange={handleStatusChange}
          />
          <TaskPriorityIndicator priority={optimisticTask.priority} />
        </div>

        <TaskTitle
          task={optimisticTask}
          editable
          className="mt-2 font-medium"
        />

        {!compact && (
          <TaskDescription
            task={optimisticTask}
            className="mt-2 text-sm text-muted-foreground"
          />
        )}

        {showSubtasks && optimisticTask.subtasks?.length > 0 && (
          <SubtaskProgress task={optimisticTask} className="mt-3" />
        )}

        <div className="flex items-center justify-between mt-3">
          <TaskLabels task={optimisticTask} />
          <TaskActionsMenu task={optimisticTask} />
        </div>
      </CardContent>
    </Card>
  );
};
```

### Sidebar Implementation

```typescript
const WorkspaceSidebar = () => {
  const { tasks } = useTaskStore();
  const pathname = usePathname();

  const taskCounts = useMemo(() => ({
    pending: tasks.filter(t => t.status === 'pending').length,
    'in-progress': tasks.filter(t => t.status === 'in-progress').length,
    done: tasks.filter(t => t.status === 'done').length,
  }), [tasks]);

  return (
    <Sidebar className="w-[280px]">
      <SidebarHeader>
        <OrgSwitcher />
      </SidebarHeader>

      <SidebarContent className="space-y-4">
        {/* 🎯 Right Now Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-medium">
            🎯 Right Now
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <CurrentTaskWidget />
            <UpNextWidget />
          </SidebarGroupContent>
        </SidebarGroup>

        {/* 📝 My Work Section */}
        <SidebarGroup>
          <SidebarGroupLabel>📝 My Work</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/tasks/todo'}>
                <Link href="/tasks/todo">
                  <Circle className="w-4 h-4" />
                  <span>To Do</span>
                  {taskCounts.pending > 0 && (
                    <Badge variant="secondary" className="ml-auto">
                      {taskCounts.pending}
                    </Badge>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/tasks/progress'}>
                <Link href="/tasks/progress">
                  <CircleDot className="w-4 h-4" />
                  <span>In Progress</span>
                  {taskCounts['in-progress'] > 0 && (
                    <Badge variant="secondary" className="ml-auto">
                      {taskCounts['in-progress']}
                    </Badge>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/tasks/done'}>
                <Link href="/tasks/done">
                  <CheckCircle className="w-4 h-4" />
                  <span>Done</span>
                  {taskCounts.done > 0 && (
                    <Badge variant="outline" className="ml-auto">
                      {taskCounts.done}
                    </Badge>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* 📚 Notes & Docs Section */}
        <SidebarGroup>
          <SidebarGroupLabel>📚 Notes & Docs</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/docs">
                  <FileText className="w-4 h-4" />
                  <span>Browse Files</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => createNewDoc()}>
                <Plus className="w-4 h-4" />
                <span>Create New</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* 🤖 AI Helper Section */}
        <SidebarGroup>
          <SidebarGroupLabel>🤖 AI Helper</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/ai/chat">
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat History</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/ai/settings">
                  <Settings className="w-4 h-4" />
                  <span>Assistant Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <UserProfileMenu />
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  );
};
```

### Command Palette Implementation

```typescript
const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { tasks, createTask } = useTaskStore();
  const router = useRouter();

  // Global keyboard shortcuts
  useHotkeys('cmd+k', (e) => {
    e.preventDefault();
    setOpen(true);
  });

  useHotkeys('cmd+n', (e) => {
    e.preventDefault();
    handleCreateTask();
  });

  const recentTasks = useMemo(() =>
    tasks
      .filter(task => task.status !== 'done')
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 5),
    [tasks]
  );

  const filteredTasks = useMemo(() =>
    tasks.filter(task =>
      task.title.toLowerCase().includes(query.toLowerCase()) ||
      task.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8),
    [tasks, query]
  );

  const handleCreateTask = () => {
    setOpen(false);
    router.push('/tasks/new');
  };

  const handleOpenTask = (task: Task) => {
    setOpen(false);
    router.push(`/tasks/${task.id}`);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Type a command or search tasks..."
        value={query}
        onValueChange={setQuery}
        className="border-none focus:ring-0"
      />

      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Quick Actions">
          <CommandItem onSelect={handleCreateTask}>
            <Plus className="w-4 h-4 mr-2" />
            Create New Task
          </CommandItem>
          <CommandItem onSelect={() => {
            setOpen(false);
            // Toggle terminal logic
          }}>
            <Terminal className="w-4 h-4 mr-2" />
            Toggle Terminal
          </CommandItem>
          <CommandItem onSelect={() => {
            setOpen(false);
            router.push('/ai/chat');
          }}>
            <MessageSquare className="w-4 h-4 mr-2" />
            Open AI Chat
          </CommandItem>
        </CommandGroup>

        {query.length === 0 && recentTasks.length > 0 && (
          <CommandGroup heading="Recent Tasks">
            {recentTasks.map(task => (
              <CommandItem key={task.id} onSelect={() => handleOpenTask(task)}>
                <TaskStatusIcon status={task.status} className="w-4 h-4 mr-2" />
                <span className="truncate">{task.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {query.length > 0 && filteredTasks.length > 0 && (
          <CommandGroup heading="Search Results">
            {filteredTasks.map(task => (
              <CommandItem key={task.id} onSelect={() => handleOpenTask(task)}>
                <TaskStatusIcon status={task.status} className="w-4 h-4 mr-2" />
                <div className="flex flex-col">
                  <span className="truncate">{task.title}</span>
                  {task.description && (
                    <span className="text-xs text-muted-foreground truncate">
                      {task.description}
                    </span>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
};
```

---

## State Management Patterns

### Zustand Store with Persistence

```typescript
interface TaskStore {
  tasks: Task[];
  currentTask: Task | null;
  loading: boolean;
  error: string | null;

  // Actions
  setCurrentTask: (task: Task | null) => void;
  createTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      currentTask: null,
      loading: false,
      error: null,

      setCurrentTask: (task) => set({ currentTask: task }),

      createTask: (taskData) => {
        const newTask: Task = {
          ...taskData,
          id: generateId(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        set((state) => ({
          tasks: [...state.tasks, newTask],
        }));
      },

      updateTask: (id, updates) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updates, updatedAt: new Date().toISOString() } : task
          ),
        }));
      },

      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
          currentTask: state.currentTask?.id === id ? null : state.currentTask,
        }));
      },
    }),
    {
      name: 'task-store',
      partialize: (state) => ({
        tasks: state.tasks,
        currentTask: state.currentTask,
      }),
    }
  )
);
```

### UI State Management

```typescript
interface UIStore {
  sidebarExpanded: boolean;
  currentView: string;
  filterState: {
    status: TaskStatus | 'all';
    priority: TaskPriority | 'all';
    search: string;
  };

  toggleSidebar: () => void;
  setCurrentView: (view: string) => void;
  updateFilter: (key: keyof UIStore['filterState'], value: any) => void;
  resetFilters: () => void;
}

export const useUIStore = create<UIStore>()(
  persist(
    (set) => ({
      sidebarExpanded: true,
      currentView: 'tasks',
      filterState: {
        status: 'all',
        priority: 'all',
        search: '',
      },

      toggleSidebar: () =>
        set((state) => ({
          sidebarExpanded: !state.sidebarExpanded,
        })),

      setCurrentView: (view) => set({ currentView: view }),

      updateFilter: (key, value) =>
        set((state) => ({
          filterState: { ...state.filterState, [key]: value },
        })),

      resetFilters: () =>
        set({
          filterState: { status: 'all', priority: 'all', search: '' },
        }),
    }),
    { name: 'ui-store' }
  )
);
```

---

## Performance Optimization Patterns

### Virtual Scrolling for Large Lists

```typescript
import { FixedSizeList as List } from 'react-window';

const VirtualTaskList = ({ tasks }: { tasks: Task[] }) => {
  const rowHeight = 120;
  const listHeight = Math.min(tasks.length * rowHeight, 600);

  const TaskRow = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      <TaskCard task={tasks[index]} compact />
    </div>
  );

  return (
    <List
      height={listHeight}
      itemCount={tasks.length}
      itemSize={rowHeight}
      width="100%"
    >
      {TaskRow}
    </List>
  );
};
```

### Debounced Search Hook

```typescript
const useTaskSearch = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { tasks } = useTaskStore();

  // Debounce query updates
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return tasks;

    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        task.labels?.some((label) => label.toLowerCase().includes(debouncedQuery.toLowerCase()))
    );
  }, [tasks, debouncedQuery]);

  return { query, setQuery, results, isSearching: query !== debouncedQuery };
};
```

### Loading States and Skeletons

```typescript
const TaskCardSkeleton = () => (
  <Card className="animate-pulse">
    <CardContent className="p-4">
      <div className="flex items-start justify-between">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-5 w-3/4 mt-2" />
      <Skeleton className="h-4 w-full mt-2" />
      <Skeleton className="h-4 w-2/3 mt-1" />
      <div className="flex justify-between mt-3">
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-12" />
        </div>
        <Skeleton className="h-6 w-6" />
      </div>
    </CardContent>
  </Card>
);

const TaskList = () => {
  const { tasks, loading } = useTaskStore();

  if (loading) {
    return (
      <div className="space-y-2">
        {Array(3).fill(0).map((_, i) => (
          <TaskCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
```

---

## Accessibility Implementation

### Keyboard Navigation

```typescript
const TaskCard = ({ task }: { task: Task }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        openTaskDetail(task);
        break;
      case 'c':
        if (e.metaKey || e.ctrlKey) {
          e.preventDefault();
          completeTask(task.id);
        }
        break;
      case 'e':
        e.preventDefault();
        editTask(task.id);
        break;
      case 'd':
        e.preventDefault();
        deleteTask(task.id);
        break;
    }
  };

  return (
    <div
      ref={cardRef}
      role="article"
      aria-label={`Task: ${task.title}. Status: ${task.status}. Priority: ${task.priority}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md"
    >
      <TaskCardContent task={task} />
    </div>
  );
};
```

### Screen Reader Support

```typescript
const useScreenReaderAnnouncements = () => {
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  }, []);

  return { announce };
};

// Usage in components
const TaskActionButton = ({ task, action }: { task: Task; action: string }) => {
  const { announce } = useScreenReaderAnnouncements();

  const handleAction = () => {
    performAction(task, action);
    announce(`Task "${task.title}" marked as ${action}`);
  };

  return (
    <Button
      onClick={handleAction}
      aria-label={`Mark task "${task.title}" as ${action}`}
    >
      {action}
    </Button>
  );
};
```

---

## AI Integration Implementation

### Claude Code Context Provider

```typescript
const ClaudeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { currentTask, tasks } = useTaskStore();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).claude) {
      const context = {
        currentTask: currentTask?.title,
        currentView: pathname,
        activeTasks: tasks.filter(t => t.status === 'in-progress').length,
        totalTasks: tasks.length,
        projectPhase: determineProjectPhase(tasks),
      };

      (window as any).claude.setContext(context);
    }
  }, [currentTask, tasks, pathname]);

  return <>{children}</>;
};
```

### AI Task Creation Component

```typescript
const AITaskCreator = () => {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const { createTask, tasks } = useTaskStore();
  const { announce } = useScreenReaderAnnouncements();

  const handleGenerateTask = async () => {
    if (!prompt.trim()) return;

    setGenerating(true);

    try {
      const projectContext = {
        existingTasks: tasks.map(t => ({ title: t.title, status: t.status })),
        currentPhase: determineProjectPhase(tasks),
      };

      const generatedTask = await aiService.generateTask({
        prompt,
        context: projectContext,
      });

      createTask(generatedTask);
      setPrompt('');
      announce(`New task created: ${generatedTask.title}`);

    } catch (error) {
      console.error('Failed to generate task:', error);
      toast.error('Failed to generate task. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Create Task with AI
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Describe what you want to build... (e.g., 'Add user authentication with JWT tokens')"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[100px]"
          disabled={generating}
        />

        <div className="flex justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              // Generate subtasks for existing task
            }}
          >
            Generate Subtasks
          </Button>

          <Button
            onClick={handleGenerateTask}
            disabled={!prompt.trim() || generating}
          >
            {generating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Create Task
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
```

---

## Mobile Responsive Implementation

### Responsive Sidebar

```typescript
const ResponsiveSidebar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return (
      <>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-50 shadow-lg"
          aria-label="Open navigation menu"
        >
          <Menu className="w-4 h-4" />
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent
            side="bottom"
            className="h-[80vh] p-0"
            aria-describedby="mobile-navigation-description"
          >
            <div id="mobile-navigation-description" className="sr-only">
              Mobile navigation menu with tasks and project sections
            </div>
            <ScrollArea className="h-full">
              <div className="p-6">
                <SidebarContent />
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return <DesktopSidebar />;
};
```

### Touch Interactions

```typescript
const TouchTaskCard = ({ task }: { task: Task }) => {
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX, y: touch.clientY });
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragStart) return;

    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - dragStart.x);
    const deltaY = Math.abs(touch.clientY - dragStart.y);

    if (deltaX > 10 || deltaY > 10) {
      setIsDragging(true);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!dragStart || isDragging) {
      setDragStart(null);
      setIsDragging(false);
      return;
    }

    const touch = e.changedTouches[0];
    const deltaY = dragStart.y - touch.clientY;

    // Swipe up to complete
    if (deltaY > 50) {
      completeTask(task.id);
    }

    setDragStart(null);
    setIsDragging(false);
  };

  return (
    <div
      className={cn(
        "touch-manipulation select-none transition-transform duration-200",
        isDragging && "scale-105"
      )}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <TaskCard task={task} />
    </div>
  );
};
```

---

## Error Handling & Recovery

### Error Boundary Implementation

```typescript
class UIErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ComponentType<any> },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('UI Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}

const DefaultErrorFallback = ({ error }: { error?: Error }) => (
  <div className="flex flex-col items-center justify-center p-8">
    <AlertCircle className="w-8 h-8 text-destructive mb-4" />
    <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
    <p className="text-sm text-muted-foreground text-center mb-4">
      An unexpected error occurred. Please try refreshing the page.
    </p>
    <Button onClick={() => window.location.reload()}>
      Refresh Page
    </Button>
  </div>
);
```

---

## Performance Targets & Metrics

### Performance Benchmarks

- **Initial Load**: < 2 seconds
- **Interaction Response**: < 100ms UI feedback
- **Task List Render**: < 500ms for 1000+ tasks
- **Search Results**: < 200ms for filtering
- **Memory Usage**: < 100MB typical session

### Code Splitting Example

```typescript
// Lazy load heavy components
const TaskAnalytics = lazy(() => import('../features/analytics/TaskAnalytics'));
const AIChat = lazy(() => import('../features/ai/AIChat'));

const LazyComponent = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<ComponentSkeleton />}>
    {children}
  </Suspense>
);
```

---

**Development Summary**: Use these patterns to build fast, accessible, keyboard-friendly interfaces. All components should work without mouse input, provide instant feedback, and gracefully handle errors. Focus on developer productivity and flow state preservation.
