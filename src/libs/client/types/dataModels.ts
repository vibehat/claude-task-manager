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

export type TaskStatus = Status;

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
  details?: string;
  testStrategy?: string;
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
  taskExtra?: Record<string, unknown>;
  metadata?: {
    created: string;
    updated: string;
    description: string;
  };
}
