import type {
  WorkingOnTask,
  WorkflowAction,
  TaskQueueItem,
  ProjectContext,
  QuickAction,
  RelatedFile,
  TaskNote,
  SmartWorkflowSuggestion,
  ProjectState,
} from '../types';
import { workflowEngine } from './workflowEngine';

// Current focus task - matches wireframe JWT example
export const mockCurrentTask: WorkingOnTask = {
  id: 28.2,
  title: 'JWT Token Implementation',
  description:
    'Implement JWT-based authentication system with token generation, validation, and middleware integration',
  status: 'in-progress',
  priority: 'high',
  dependencies: [28, 28.1],
  progress: 67, // 2/3 subtasks done
  timeLeft: '2h left',
  details: `
Implementation of JSON Web Token authentication system for secure user sessions.

**Key Requirements:**
- Use HS256 for development environment
- Consider RS256 for production deployment
- Implement proper token expiration handling
- Add middleware for route protection

**Architecture Notes:**
- Token generation in auth service
- Validation middleware for protected routes
- Secure cookie storage for tokens
- Refresh token mechanism
  `,
  testStrategy: `
**Testing Strategy:**
1. Unit tests for token generation and validation
2. Integration tests for auth middleware
3. End-to-end tests for login/logout flow
4. Security testing for token tampering
  `,
  complexity: 7,
  subtasks: [
    {
      id: 28.21,
      title: 'Setup JWT library',
      description: 'Install and configure jsonwebtoken library',
      status: 'done',
      dependencies: [],
      details: 'Completed - jsonwebtoken@9.0.0 installed and configured',
    },
    {
      id: 28.22,
      title: 'Create token generation',
      description: 'Implement JWT token creation with user claims',
      status: 'done',
      dependencies: ['28.21'],
      details: 'Completed - token service with user claims and expiration',
    },
    {
      id: 28.23,
      title: 'Add validation middleware',
      description: 'Create middleware to validate JWT tokens on protected routes',
      status: 'pending',
      dependencies: ['28.22'],
      details: 'In progress - middleware structure created, validation logic needed',
    },
  ],
  relatedFiles: [
    {
      path: 'src/auth/jwt.ts',
      status: 'modified',
      description: 'JWT token generation and validation logic',
    },
    {
      path: 'src/middleware/auth.ts',
      status: 'new',
      description: 'Authentication middleware for protected routes',
    },
    {
      path: 'src/types/auth.ts',
      status: 'modified',
      description: 'Authentication type definitions',
    },
    {
      path: 'tests/auth/jwt.test.ts',
      status: 'new',
      description: 'Unit tests for JWT functionality',
    },
  ],
  notes: [
    {
      id: 'note-1',
      content: 'Use HS256 for development environment',
      timestamp: '2024-08-10T14:30:00Z',
      author: 'Developer',
    },
    {
      id: 'note-2',
      content: 'Consider RS256 for production deployment for better security',
      timestamp: '2024-08-10T15:45:00Z',
      author: 'Security Review',
    },
    {
      id: 'note-3',
      content: 'Token expiration should be configurable via environment variables',
      timestamp: '2024-08-10T16:20:00Z',
      author: 'DevOps',
    },
  ],
};

// Task queue with smart ordering
export const mockTaskQueue: TaskQueueItem[] = [
  {
    id: 28.2,
    title: 'JWT Implementation',
    status: 'working',
    indicator: '●',
    priority: 'high',
    progress: 67,
  },
  {
    id: 28.3,
    title: 'API Security Review',
    status: 'ready',
    indicator: '→',
    priority: 'high',
  },
  {
    id: 29.1,
    title: 'Rate Limiting Setup',
    status: 'queued',
    indicator: '...',
    priority: 'medium',
  },
  {
    id: 30.1,
    title: 'Session Management',
    status: 'queued',
    indicator: '...',
    priority: 'medium',
  },
  {
    id: 27.5,
    title: 'Database Migration',
    status: 'blocked',
    indicator: '⏸',
    priority: 'low',
  },
];

// Workflow actions - AI-suggested next steps
export const mockWorkflowActions: WorkflowAction[] = [
  {
    id: 'action-1',
    action: 'Start JWT validation',
    description: 'Complete the authentication middleware implementation',
    taskId: '28.2',
    taskTitle: 'JWT Token Implementation',
    type: 'implementation',
    category: 'manual',
    priority: 'high',
    estimatedTime: '45m',
    completed: false,
    metadata: {
      file: 'src/middleware/auth.ts',
    },
  },
  {
    id: 'action-2',
    action: 'Review API security',
    description: 'Security audit of API endpoints and authentication flow',
    taskId: '28.3',
    taskTitle: 'API Security Review',
    type: 'review',
    category: 'manual',
    priority: 'high',
    estimatedTime: '1h 30m',
    completed: false,
  },
  {
    id: 'action-3',
    action: 'Parse PRD for rate limiting',
    description: 'Extract rate limiting requirements from performance documentation',
    type: 'research',
    category: 'template',
    priority: 'medium',
    estimatedTime: '20m',
    completed: false,
    metadata: {
      file: 'docs/prd/performance.md',
    },
  },
  {
    id: 'action-4',
    action: 'Plan session management',
    description: 'Design session storage and cleanup strategies',
    taskId: '30.1',
    taskTitle: 'Session Management',
    type: 'planning',
    category: 'manual',
    priority: 'medium',
    estimatedTime: '1h',
    completed: false,
  },
  {
    id: 'action-5',
    action: 'Write JWT unit tests',
    description: 'Create comprehensive test suite for token operations',
    taskId: '28.2',
    taskTitle: 'JWT Token Implementation',
    type: 'testing',
    category: 'manual',
    priority: 'high',
    estimatedTime: '30m',
    completed: false,
    metadata: {
      file: 'tests/auth/jwt.test.ts',
    },
  },
  {
    id: 'action-6',
    action: 'Update API documentation',
    description: 'Document authentication endpoints and token usage',
    type: 'research',
    category: 'manual',
    priority: 'low',
    estimatedTime: '25m',
    completed: false,
    metadata: {
      file: 'docs/api/authentication.md',
    },
  },
];

// Mock project state for smart workflow generation
export const mockProjectState: ProjectState = {
  currentTask: mockCurrentTask,
  taskQueue: mockTaskQueue,
  gitStatus: {
    branch: 'feat/jwt-authentication',
    uncommittedFiles: 3,
    unstagedFiles: 1,
    ahead: 2,
    behind: 0,
  },
  recentActivity: {
    lastCommit: '2024-08-10T16:30:00Z',
    filesChanged: ['src/auth/jwt.ts', 'src/middleware/auth.ts', 'tests/auth/jwt.test.ts'],
    linesAdded: 127,
    linesRemoved: 23,
  },
  projectPhase: 'development',
  availableResources: {
    hasPRD: true,
    hasTests: true,
    hasDocs: true,
    hasTaskMaster: true,
  },
};

// Generate smart workflow suggestions based on mock project state
export const mockSmartSuggestions: SmartWorkflowSuggestion[] =
  workflowEngine.generateSuggestions(mockProjectState);

// Project context information
export const mockProjectContext: ProjectContext = {
  tag: 'user-auth',
  project: 'Task Master UI',
  activeTasks: 3,
  branch: 'feat/jwt-authentication',
  lastSync: '2024-08-10T16:45:00Z',
};

// Quick actions for the right panel
export const mockQuickActions: QuickAction[] = [
  {
    id: 'start-work',
    label: 'Start Work',
    icon: '⚡',
    shortcut: 'S',
    action: 'start-focused-task',
    category: 'workflow',
  },
  {
    id: 'add-note',
    label: 'Add Note',
    icon: '📝',
    shortcut: 'N',
    action: 'create-task-note',
    category: 'workflow',
  },
  {
    id: 'sync-tasks',
    label: 'Sync Tasks',
    icon: '🔄',
    shortcut: 'R',
    action: 'refresh-taskmaster-data',
    category: 'data',
  },
  {
    id: 'view-all-tasks',
    label: 'View All Tasks',
    icon: '📋',
    shortcut: 'T',
    action: 'navigate-to-tasks',
    category: 'navigation',
  },
  {
    id: 'focus-mode',
    label: 'Focus Mode',
    icon: '🎯',
    shortcut: 'F',
    action: 'toggle-focus-mode',
    category: 'settings',
  },
  {
    id: 'progress-report',
    label: 'Progress Report',
    icon: '📊',
    shortcut: 'P',
    action: 'show-progress-analytics',
    category: 'navigation',
  },
  {
    id: 'open-notes',
    label: 'Open Notes',
    icon: '🗒️',
    action: 'navigate-to-notes',
    category: 'navigation',
  },
  {
    id: 'task-settings',
    label: 'Task Settings',
    icon: '⚙️',
    action: 'open-task-settings',
    category: 'settings',
  },
];

// Documentation links from wireframe
export const mockDocumentationLinks = [
  {
    title: 'docs/prd/main.md#auth',
    description: 'Authentication requirements and specifications',
    url: '/workspace/docs/prd-main-auth',
  },
  {
    title: 'docs/api/authentication.md',
    description: 'API authentication endpoint documentation',
    url: '/workspace/docs/api-authentication',
  },
];

// Dependency information
export const mockDependencies = {
  blockedBy: [],
  blocks: [28.3, 29.1],
  related: [28, 28.1, 28.4],
};
