import type {
  Task,
  AISession,
  AIActivity,
  ContextItem,
  CommandSuggestion,
} from '../types/workingOnTypes';

// Dummy AI Activities
export const dummyActivities: AIActivity[] = [
  {
    id: 'act-1',
    sessionId: 'session-1',
    timestamp: '2025-01-08T15:42:00Z',
    type: 'progress',
    message: 'Claude started task 28.2 - JWT Implementation',
  },
  {
    id: 'act-2',
    sessionId: 'session-1',
    timestamp: '2025-01-08T15:45:00Z',
    type: 'completion',
    message: 'Generated JWT utility functions',
    metadata: { filesChanged: ['lib/jwt.ts'], linesAdded: 127 },
  },
  {
    id: 'act-3',
    sessionId: 'session-1',
    timestamp: '2025-01-08T15:47:00Z',
    type: 'question',
    message: 'Claude requesting guidance on RS256 key rotation strategy',
  },
  {
    id: 'act-4',
    sessionId: 'session-1',
    timestamp: '2025-01-08T15:48:00Z',
    type: 'completion',
    message: 'Added validation middleware',
    metadata: { filesChanged: ['middleware/auth.ts'], linesAdded: 45 },
  },
  {
    id: 'act-5',
    sessionId: 'session-1',
    timestamp: '2025-01-08T15:49:00Z',
    type: 'research',
    message: 'Researching JWT security best practices',
  },
  {
    id: 'act-6',
    sessionId: 'session-2',
    timestamp: '2025-01-08T14:30:00Z',
    type: 'progress',
    message: 'Started research on RBAC patterns',
  },
  {
    id: 'act-7',
    sessionId: 'session-2',
    timestamp: '2025-01-08T14:32:00Z',
    type: 'completion',
    message: 'Analyzed existing authorization structure',
  },
];

// Dummy AI Sessions
export const dummyAISessions: AISession[] = [
  {
    id: 'session-1',
    taskId: '28.2',
    agent: 'claude',
    status: 'implementing',
    startTime: '2025-01-08T15:42:00Z',
    lastActivity: '2025-01-08T15:49:00Z',
    duration: '8m 23s',
    activities: dummyActivities.filter((a) => a.sessionId === 'session-1'),
  },
  {
    id: 'session-2',
    taskId: '28.5',
    agent: 'claude',
    status: 'blocked',
    startTime: '2025-01-08T14:30:00Z',
    lastActivity: '2025-01-08T14:32:00Z',
    duration: '2m 15s',
    activities: dummyActivities.filter((a) => a.sessionId === 'session-2'),
  },
];

// Dummy Tasks
export const dummyTasks: Task[] = [
  {
    id: '28.2',
    title: 'Implement JWT Token Generation/Validation',
    description:
      'Set up JWT-based authentication with RS256 algorithm for secure token generation and validation',
    status: 'in-progress',
    priority: 'high',
    progress: 60,
    estimatedTime: '45-60 minutes',
    dependencies: ['28.1'],
    blockedTasks: ['28.3', '28.4'],
    tags: ['authentication', 'security', 'backend'],
    contextQuality: 4,
    aiSession: dummyAISessions[0],
    createdAt: '2025-01-08T14:30:00Z',
    updatedAt: '2025-01-08T15:49:00Z',
  },
  {
    id: '28.3',
    title: 'Create JWT Authentication Endpoints',
    description: 'Build REST endpoints for login, logout, and token refresh functionality',
    status: 'blocked',
    priority: 'high',
    progress: 0,
    estimatedTime: '30-45 minutes',
    dependencies: ['28.2'],
    blockedTasks: [],
    tags: ['api', 'authentication', 'endpoints'],
    contextQuality: 3,
    createdAt: '2025-01-08T14:30:00Z',
    updatedAt: '2025-01-08T14:30:00Z',
  },
  {
    id: '28.4',
    title: 'Implement Refresh Token Mechanism',
    description: 'Add secure refresh token system with automatic rotation',
    status: 'blocked',
    priority: 'medium',
    progress: 0,
    estimatedTime: '60-90 minutes',
    dependencies: ['28.2'],
    blockedTasks: [],
    tags: ['authentication', 'security', 'tokens'],
    contextQuality: 2,
    createdAt: '2025-01-08T14:30:00Z',
    updatedAt: '2025-01-08T14:30:00Z',
  },
  {
    id: '28.5',
    title: 'Create Role-Based Access Control System',
    description: 'Implement RBAC with role definitions, permission mapping, and middleware',
    status: 'pending',
    priority: 'medium',
    progress: 15,
    estimatedTime: '2-3 hours',
    dependencies: ['28.1'],
    blockedTasks: ['30.1', '30.2'],
    tags: ['authorization', 'rbac', 'security'],
    contextQuality: 4,
    aiSession: dummyAISessions[1],
    createdAt: '2025-01-08T14:30:00Z',
    updatedAt: '2025-01-08T14:32:00Z',
  },
  {
    id: '29.1',
    title: 'Create User Registration Endpoint',
    description: 'Build secure user registration with email verification and password validation',
    status: 'pending',
    priority: 'medium',
    progress: 0,
    estimatedTime: '45 minutes',
    dependencies: ['28.2'],
    blockedTasks: [],
    tags: ['user-management', 'api', 'registration'],
    contextQuality: 3,
    createdAt: '2025-01-08T14:30:00Z',
    updatedAt: '2025-01-08T14:30:00Z',
  },
  {
    id: '29.2',
    title: 'Add Password Reset Functionality',
    description: 'Implement secure password reset flow with email tokens',
    status: 'pending',
    priority: 'low',
    progress: 0,
    estimatedTime: '30-45 minutes',
    dependencies: ['29.1'],
    blockedTasks: [],
    tags: ['user-management', 'security', 'email'],
    contextQuality: 2,
    createdAt: '2025-01-08T14:30:00Z',
    updatedAt: '2025-01-08T14:30:00Z',
  },
];

// Dummy Context Items
export const dummyContextItems: ContextItem[] = [
  {
    id: 'ctx-1',
    type: 'documentation',
    title: 'JWT Implementation Guide.md',
    content:
      'Comprehensive guide for JWT implementation with RS256 algorithm, including security considerations and best practices.',
    relatedTasks: ['28.2', '28.3'],
    tags: ['jwt', 'security', 'documentation'],
    createdAt: '2025-01-08T10:00:00Z',
  },
  {
    id: 'ctx-2',
    type: 'note',
    title: 'RS256 vs HS256 Decision',
    content:
      'Decided to use RS256 over HS256 for better key management and scalability in distributed systems.',
    relatedTasks: ['28.2'],
    tags: ['jwt', 'architecture', 'decision'],
    createdAt: '2025-01-08T11:30:00Z',
  },
  {
    id: 'ctx-3',
    type: 'research',
    title: 'JWT Security Best Practices',
    content:
      'Research findings on JWT security including token expiration, key rotation, and common vulnerabilities.',
    relatedTasks: ['28.2', '28.4'],
    tags: ['security', 'research', 'jwt'],
    createdAt: '2025-01-08T12:15:00Z',
  },
  {
    id: 'ctx-4',
    type: 'documentation',
    title: 'RBAC System Design',
    content:
      'System design document for role-based access control implementation with permission hierarchy.',
    relatedTasks: ['28.5', '30.1'],
    tags: ['rbac', 'authorization', 'design'],
    createdAt: '2025-01-08T09:45:00Z',
  },
  {
    id: 'ctx-5',
    type: 'decision',
    title: 'Environment-based Key Management',
    content:
      'Decision to store JWT keys as environment variables with different keys per environment.',
    relatedTasks: ['28.2'],
    tags: ['keys', 'environment', 'security'],
    createdAt: '2025-01-08T13:20:00Z',
  },
];

// Dummy Command Suggestions
export const dummyCommandSuggestions: CommandSuggestion[] = [
  {
    command: 'task-master next',
    description: 'Get the next available task to work on',
    confidence: 0.95,
    contextRelevant: true,
  },
  {
    command: 'task-master expand --id=28.2',
    description: 'Break down task 28.2 into subtasks',
    confidence: 0.88,
    contextRelevant: true,
  },
  {
    command: 'task-master set-status --id=28.2 --status=done',
    description: 'Mark task 28.2 as complete',
    confidence: 0.82,
    contextRelevant: true,
  },
  {
    command: 'task-master list --status=blocked',
    description: 'Show all blocked tasks',
    confidence: 0.75,
    contextRelevant: false,
  },
  {
    command: 'task-master research --prompt="JWT security patterns"',
    description: 'Research JWT security patterns',
    confidence: 0.9,
    contextRelevant: true,
  },
];

// Helper functions for data access
export const getTaskById = (id: string): Task | undefined => {
  return dummyTasks.find((task) => task.id === id);
};

export const getActiveTasks = (): Task[] => {
  return dummyTasks.filter((task) => task.status === 'in-progress' || task.aiSession);
};

export const getBlockedTasks = (): Task[] => {
  return dummyTasks.filter((task) => task.status === 'blocked');
};

export const getPendingTasks = (): Task[] => {
  return dummyTasks.filter((task) => task.status === 'pending');
};

export const getTasksByPriority = (priority: 'high' | 'medium' | 'low'): Task[] => {
  return dummyTasks.filter((task) => task.priority === priority);
};

export const getContextByTaskId = (taskId: string): ContextItem[] => {
  return dummyContextItems.filter((context) => context.relatedTasks.includes(taskId));
};

export const getRecentActivities = (limit?: number): AIActivity[] => {
  const sorted = [...dummyActivities].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
};
