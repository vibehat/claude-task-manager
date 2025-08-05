// Raw data types that match the actual TaskMaster file structures

export interface TaskMasterTask {
  id: number;
  title: string;
  description: string;
  details: string;
  testStrategy: string;
  priority: string;
  dependencies: string[];
  status: string;
  subtasks?: TaskMasterTask[];
}

export interface TaskMasterTasks {
  [tagName: string]: {
    tasks: TaskMasterTask[];
  };
}

export interface TaskMasterState {
  currentTag: string;
  lastSwitched: string;
  branchTagMapping: Record<string, string>;
  migrationNoticeShown: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Label {
  id: string;
  name: string;
  color: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Status {
  id: string;
  name: string;
  color: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Priority {
  id: string;
  name: string;
  color: string;
  order?: number;
  value?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  id: string;
  name: string;
  color: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  statusId: string;
  priorityId?: string;
  tagId?: string;
  labelIds: string[];
  assigneeId?: string;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

export interface ManagerData {
  users: User[];
  labels: Label[];
  statuses: Status[];
  priorities: Priority[];
  tags: Tag[];
  tasks: Task[];
  taskExtra?: Record<string, any>;
  metadata?: {
    created: string;
    updated: string;
    description: string;
  };
}

// Data store state interface - internal state can be mutated, but external access is read-only
export interface SimpleDataState {
  // -----------------------------
  // Raw data - exactly as stored in files
  // -----------------------------
  taskMasterTasks: TaskMasterTasks;
  taskMasterState: TaskMasterState | null;
  managerData: ManagerData | null;

  // -----------------------------
  // Normalized & flattened structures
  // -----------------------------
  taskIds: string[];
  tasksById: Record<string, TaskMasterTask>;

  userIds: string[];
  usersById: Record<string, User>;

  labelIds: string[];
  labelsById: Record<string, Label>;

  statusIds: string[];
  statusesById: Record<string, Status>;

  priorityIds: string[];
  prioritiesById: Record<string, Priority>;

  tagIds: string[];
  tagsById: Record<string, Tag>;

  // Precomputed simple lists (for UI rendering or dropdowns)
  allTasks: TaskMasterTask[];
  allLabels: Label[];
  allStatuses: Status[];
  allPriorities: Priority[];
  allTags: string[]; // First-level keys from tasks.json (tag names)
  allTagsObjects: Tag[]; // Tag objects for UI components

  // Computed grouped data
  tasksByTag: Record<string, TaskMasterTask[]>;
  tasksByStatus: Record<string, TaskMasterTask[]>;
  tasksByPriority: Record<string, TaskMasterTask[]>;

  // -----------------------------
  // Simple loading states
  // -----------------------------
  isLoading: boolean;
  isInitialized: boolean;

  // -----------------------------
  // Lifecycle methods (no direct setters)
  // -----------------------------
  initialize: () => Promise<void>;
  reset: () => void;

  // -----------------------------
  // Search and filter methods
  // -----------------------------
  fuzzySearchTasks: (query: string) => TaskMasterTask[];

  // -----------------------------
  // Update methods
  // -----------------------------
  updateTask: (id: string, updates: Partial<TaskMasterTask>) => void;
  deleteTask: (id: string) => void;

  // -----------------------------
  // Sync methods
  // -----------------------------
  forceSyncTaskMaster: () => Promise<void>;
}
