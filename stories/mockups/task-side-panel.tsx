import React, { useState } from 'react';
import {
  FileText,
  TestTube,
  Maximize2,
  Minimize2,
  X,
  Check,
  Edit3,
  Save,
  RotateCcw,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

export interface Priority {
  id: string;
  name: string;
  color: string;
  order?: number;
  value?: number;
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

export interface Task {
  id: string;
  title: string;
  description: string;
  details?: string;
  testStrategy?: string;
  statusId: string;
  priorityId?: string;
  priority: Priority;
  tagId?: string;
  labelIds: string[];
  labels?: Label[];
  assigneeId?: string;
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
}

interface SubTask {
  id: string;
  title: string;
  statusId: 'status-1' | 'status-2' | 'status-3' | 'status-4';
  description: string;
  details: string;
  testStrategy: string;
}

interface TaskSidePanelMockupProps {
  variant?: 'normal' | 'fullscreen' | 'edit' | 'loading';
}

export default function TaskSidePanelMockup({ variant = 'normal' }: TaskSidePanelMockupProps) {
  const [isFullscreen, setIsFullscreen] = useState(variant === 'fullscreen');
  const [isEditing, setIsEditing] = useState(variant === 'edit');
  const [expandedSubtasks, setExpandedSubtasks] = useState<Set<string>>(new Set());
  const [taskData, setTaskData] = useState<Task>({
    id: '15.2',
    title: 'Implement JWT Authentication Middleware',
    description:
      '## Overview\n\nImplement a robust JWT authentication middleware that validates tokens on protected routes. The middleware should:\n\n- Extract JWT tokens from Authorization header\n- Validate token signature and expiration\n- Handle refresh token rotation\n- Provide user context to downstream handlers\n\n### Requirements\n- Support RS256 algorithm\n- Handle both access and refresh tokens\n- Graceful error handling for invalid/expired tokens\n- Rate limiting for token validation attempts',
    details:
      '## Implementation Details\n\n### Core Components\n1. **Token Validator**: Verify JWT signature using public key\n2. **Context Provider**: Inject user data into request context\n3. **Error Handler**: Return appropriate HTTP status codes\n4. **Rate Limiter**: Prevent brute force attempts\n\n### Key Functions\n```typescript\ninterface JWTMiddleware {\n  validateToken(token: string): Promise<JWTPayload>\n  refreshToken(refreshToken: string): Promise<TokenPair>\n  revokeToken(tokenId: string): Promise<void>\n}\n```\n\n### Security Considerations\n- Use secure key storage (KMS/Vault)\n- Implement token blacklisting\n- Add audit logging for authentication events\n- Consider token binding to client IP/fingerprint',
    testStrategy:
      '## Test Strategy\n\n### Unit Tests\n- Token validation with valid/invalid signatures\n- Expiration handling edge cases\n- Error response formatting\n- Rate limiting behavior\n\n### Integration Tests\n- End-to-end authentication flow\n- Protected route access patterns\n- Token refresh workflows\n- Error scenarios (malformed tokens, expired keys)\n\n### Security Tests\n- JWT algorithm confusion attacks\n- Token replay attacks\n- Timing attack resistance\n- Load testing for rate limiter\n\n### Test Coverage Goals\n- 95%+ code coverage\n- All error paths tested\n- Performance benchmarks established',
    statusId: 'status-2',
    priorityId: 'priority-1',
    priority: {
      id: 'priority-1',
      name: 'High',
      color: 'red',
      order: 1,
      value: 3,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    labelIds: ['label-1', 'label-2', 'label-3'],
    labels: [
      {
        id: 'label-1',
        name: 'authentication',
        color: 'blue',
        description: 'Auth related tasks',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z',
      },
      {
        id: 'label-2',
        name: 'security',
        color: 'green',
        description: 'Security focused work',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z',
      },
      {
        id: 'label-3',
        name: 'middleware',
        color: 'purple',
        description: 'Middleware components',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z',
      },
    ],
    orderIndex: 2,
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-17T14:20:00Z',
  });

  const subtasks: SubTask[] = [
    {
      id: '15.2.1',
      title: 'Set up JWT validation utilities',
      statusId: 'status-3',
      description:
        'Create reusable utilities for JWT token validation, signature verification, and payload extraction.',
      details:
        'Implement functions for:\n- Token signature validation using RS256\n- Payload extraction with type safety\n- Expiration time checking\n- Token format validation\n- Key rotation support',
      testStrategy:
        'Unit tests for each utility function covering valid tokens, expired tokens, invalid signatures, and malformed tokens.',
    },
    {
      id: '15.2.2',
      title: 'Implement middleware handler',
      statusId: 'status-2',
      description:
        'Build the core middleware function that integrates JWT validation into the request pipeline.',
      details:
        'Create Express/Fastify middleware that:\n- Extracts Authorization header\n- Validates token using utilities\n- Injects user context into request\n- Handles authentication flow\n- Supports optional authentication',
      testStrategy:
        'Integration tests with mock requests, testing both authenticated and unauthenticated scenarios.',
    },
    {
      id: '15.2.3',
      title: 'Add error handling',
      statusId: 'status-1',
      description:
        'Implement comprehensive error handling for all authentication failure scenarios.',
      details:
        'Handle errors for:\n- Missing Authorization header\n- Invalid token format\n- Expired tokens\n- Invalid signatures\n- Network failures\n- Return appropriate HTTP status codes',
      testStrategy:
        'Error scenario testing for each failure case, ensuring proper HTTP responses and error messages.',
    },
    {
      id: '15.2.4',
      title: 'Implement rate limiting',
      statusId: 'status-1',
      description:
        'Add rate limiting to prevent brute force attacks on token validation endpoints.',
      details:
        'Implement rate limiting with:\n- Redis-backed storage\n- Configurable limits per IP\n- Exponential backoff\n- Rate limit headers\n- Bypass for trusted sources',
      testStrategy:
        'Load testing to verify rate limits work correctly, test bypass mechanisms, and ensure performance.',
    },
    {
      id: '15.2.5',
      title: 'Write comprehensive tests',
      statusId: 'status-4',
      description: 'Create full test suite covering all middleware functionality and edge cases.',
      details:
        'Test coverage includes:\n- All utility functions\n- Middleware integration\n- Error scenarios\n- Performance benchmarks\n- Security attack vectors\n- End-to-end flows',
      testStrategy:
        'Achieve 95%+ code coverage with unit, integration, and E2E tests. Include security testing and performance benchmarks.',
    },
  ];

  // Status mapping
  const statusMap = {
    'status-1': { name: 'pending', color: 'bg-gray-100 text-gray-800 border-gray-200' },
    'status-2': { name: 'in-progress', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    'status-3': { name: 'done', color: 'bg-green-100 text-green-800 border-green-200' },
    'status-4': { name: 'blocked', color: 'bg-red-100 text-red-800 border-red-200' },
  };

  const getStatusColor = (statusId: string) => {
    return (
      statusMap[statusId as keyof typeof statusMap]?.color ||
      'bg-gray-100 text-gray-800 border-gray-200'
    );
  };

  const getStatusName = (statusId: string) => {
    return statusMap[statusId as keyof typeof statusMap]?.name || 'pending';
  };

  const getPriorityColor = (priority: Priority) => {
    switch (priority.name.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const toggleSubtaskExpansion = (subtaskId: string) => {
    setExpandedSubtasks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(subtaskId)) {
        newSet.delete(subtaskId);
      } else {
        newSet.add(subtaskId);
      }
      return newSet;
    });
  };

  const SubtaskMarkdownDisplay = ({
    content,
    label,
    icon,
  }: {
    content: string;
    label: string;
    icon: React.ReactNode;
  }) => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wide">
          {label}
        </h4>
      </div>
      <div
        className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed p-2 bg-gray-50 dark:bg-gray-900 rounded border"
        dangerouslySetInnerHTML={{
          __html: content
            .replace(/\n/g, '<br/>')
            .replace(/##/g, '<strong>')
            .replace(/\*\*/g, '<strong>')
            .replace(/<strong>(.*?)<strong>/g, '<strong>$1</strong>'),
        }}
      />
    </div>
  );

  const SkeletonLine = ({ width = '100%' }: { width?: string }) => (
    <div className={`h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse`} style={{ width }} />
  );

  const TaskHeader = () => (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950">
      <div className="flex items-center gap-3">
        <div className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm font-mono">
          T-{taskData.id}
        </div>

        {/* Status Selector */}
        <div
          className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(taskData.statusId)}`}
        >
          {getStatusName(taskData.statusId)}
        </div>

        {/* Priority Selector */}
        <div
          className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(taskData.priority)}`}
        >
          {taskData.priority.name}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        >
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  );

  const TaskTitleEditor = () => (
    <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950">
      <input
        type="text"
        value={taskData.title}
        onChange={(e) => setTaskData((prev) => ({ ...prev, title: e.target.value }))}
        className="w-full text-lg font-semibold bg-transparent border-none outline-none text-gray-900 dark:text-white"
        placeholder="Task title..."
      />
    </div>
  );

  const MarkdownEditor = ({
    content,
    label,
    icon,
    section,
  }: {
    content: string;
    label: string;
    icon: React.ReactNode;
    section: 'description' | 'details' | 'testStrategy';
  }) => {
    const [localContent, setLocalContent] = useState(content);
    const [isLocalEditing, setIsLocalEditing] = useState(false);

    if (variant === 'loading') {
      return (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="font-medium text-gray-900 dark:text-white">{label}</h3>
          </div>
          <div className="space-y-2">
            <SkeletonLine width="100%" />
            <SkeletonLine width="85%" />
            <SkeletonLine width="92%" />
            <SkeletonLine width="78%" />
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="font-medium text-gray-900 dark:text-white">{label}</h3>
          </div>
          {!isEditing && !isLocalEditing && (
            <button
              onClick={() => setIsLocalEditing(true)}
              className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
            >
              <Edit3 size={14} />
            </button>
          )}
        </div>

        {isEditing || isLocalEditing ? (
          <div className="space-y-2">
            <textarea
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
              className="w-full h-40 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-y font-mono text-sm leading-relaxed"
              placeholder={`Enter ${label.toLowerCase()}...`}
            />
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setTaskData((prev) => ({ ...prev, [section]: localContent }));
                  setIsLocalEditing(false);
                }}
                className="flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                <Save size={14} />
                Save
              </button>
              <button
                onClick={() => {
                  setLocalContent(content);
                  setIsLocalEditing(false);
                }}
                className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm"
              >
                <RotateCcw size={14} />
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div
            className="prose dark:prose-invert max-w-none text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50 p-3 rounded-lg transition-colors leading-relaxed"
            onDoubleClick={() => setIsLocalEditing(true)}
            dangerouslySetInnerHTML={{
              __html: content
                .replace(/\n/g, '<br/>')
                .replace(/##/g, '<strong>')
                .replace(/\*\*/g, '<strong>')
                .replace(/<strong>(.*?)<strong>/g, '<strong>$1</strong>'),
            }}
          />
        )}
      </div>
    );
  };

  const SubtasksSection = () => {
    const completedSubtasks = subtasks.filter((s) => s.statusId === 'status-3').length;
    const totalSubtasks = subtasks.length;
    const progressPercentage =
      totalSubtasks > 0 ? Math.round((completedSubtasks / totalSubtasks) * 100) : 0;

    return (
      <div className="space-y-4">
        <div className="space-y-3">
          <h3 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-500 flex items-center justify-center">
              <span className="text-white text-xs">S</span>
            </div>
            Subtasks ({completedSubtasks}/{totalSubtasks})
          </h3>

          {/* Parent Task Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Overall Progress</span>
              <span>{progressPercentage}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {variant === 'loading' ? (
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                <SkeletonLine width="70%" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {subtasks.map((subtask) => {
              const isExpanded = expandedSubtasks.has(subtask.id);

              return (
                <div
                  key={subtask.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  {/* Subtask Header - Always Visible */}
                  <div
                    className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors cursor-pointer"
                    onClick={() => toggleSubtaskExpansion(subtask.id)}
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${
                        subtask.statusId === 'status-3'
                          ? 'bg-green-500 border-green-500'
                          : subtask.statusId === 'status-2'
                            ? 'bg-blue-500 border-blue-500'
                            : subtask.statusId === 'status-4'
                              ? 'bg-red-500 border-red-500'
                              : 'border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      {subtask.statusId === 'status-3' && (
                        <Check size={12} className="text-white" />
                      )}
                      {subtask.statusId === 'status-2' && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 space-y-1">
                          <span className="text-sm text-gray-900 dark:text-white font-medium leading-relaxed block">
                            {subtask.title}
                          </span>
                          {/* Status Badge */}
                          <div
                            className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(subtask.statusId)}`}
                          >
                            {getStatusName(subtask.statusId)}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                            {subtask.id}
                          </span>
                          <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Subtask Details */}
                  {isExpanded && (
                    <div className="px-3 pb-3 pt-0 space-y-3 bg-gray-50/50 dark:bg-gray-900/25">
                      <SubtaskMarkdownDisplay
                        content={subtask.description}
                        label="Description"
                        icon={<FileText size={12} className="text-gray-500 dark:text-gray-400" />}
                      />

                      <SubtaskMarkdownDisplay
                        content={subtask.details}
                        label="Implementation Details"
                        icon={<FileText size={12} className="text-gray-500 dark:text-gray-400" />}
                      />

                      <SubtaskMarkdownDisplay
                        content={subtask.testStrategy}
                        label="Test Strategy"
                        icon={<TestTube size={12} className="text-gray-500 dark:text-gray-400" />}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  const TaskDetailsSection = () => (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-900 dark:text-white">Task Details</h3>

      {variant === 'loading' ? (
        <div className="space-y-4">
          <div className="space-y-2">
            <SkeletonLine width="50%" />
            <SkeletonLine width="80%" />
          </div>
          <div className="space-y-2">
            <SkeletonLine width="60%" />
            <SkeletonLine width="70%" />
          </div>
        </div>
      ) : (
        <div className="space-y-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="space-y-3">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-gray-900 dark:text-white text-xs uppercase tracking-wide">
                Created
              </span>
              <span>
                {new Date(taskData.createdAt).toLocaleDateString()} at{' '}
                {new Date(taskData.createdAt).toLocaleTimeString()}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-gray-900 dark:text-white text-xs uppercase tracking-wide">
                Last Updated
              </span>
              <span>
                {new Date(taskData.updatedAt).toLocaleDateString()} at{' '}
                {new Date(taskData.updatedAt).toLocaleTimeString()}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-medium text-gray-900 dark:text-white text-xs uppercase tracking-wide">
                Order Index
              </span>
              <span>{taskData.orderIndex}</span>
            </div>
            {taskData.assigneeId && (
              <div className="flex flex-col gap-1">
                <span className="font-medium text-gray-900 dark:text-white text-xs uppercase tracking-wide">
                  Assignee
                </span>
                <span>User {taskData.assigneeId}</span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <span className="font-medium text-gray-900 dark:text-white text-xs uppercase tracking-wide">
              Status ID
            </span>
            <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-mono">
              {taskData.statusId}
            </div>
          </div>

          {taskData.priorityId && (
            <div className="space-y-2">
              <span className="font-medium text-gray-900 dark:text-white text-xs uppercase tracking-wide">
                Priority ID
              </span>
              <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-mono">
                {taskData.priorityId}
              </div>
            </div>
          )}

          {taskData.labels && taskData.labels.length > 0 && (
            <div className="space-y-2">
              <span className="font-medium text-gray-900 dark:text-white text-xs uppercase tracking-wide">
                Labels
              </span>
              <div className="flex flex-wrap gap-2">
                {taskData.labels.map((label) => {
                  const colorClasses = {
                    blue: 'bg-blue-100 text-blue-800',
                    green: 'bg-green-100 text-green-800',
                    purple: 'bg-purple-100 text-purple-800',
                    red: 'bg-red-100 text-red-800',
                    yellow: 'bg-yellow-100 text-yellow-800',
                    gray: 'bg-gray-100 text-gray-800',
                  };
                  const colorClass =
                    colorClasses[label.color as keyof typeof colorClasses] || colorClasses.gray;

                  return (
                    <span key={label.id} className={`px-2 py-1 rounded-full text-xs ${colorClass}`}>
                      {label.name}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <span className="font-medium text-gray-900 dark:text-white text-xs uppercase tracking-wide">
              Label IDs
            </span>
            <div className="flex flex-wrap gap-1">
              {taskData.labelIds.map((labelId) => (
                <div
                  key={labelId}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono"
                >
                  {labelId}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-950 z-50 flex flex-col">
        <TaskHeader />
        <TaskTitleEditor />

        <div className="flex-1 grid grid-cols-3 gap-0 overflow-hidden">
          {/* Left Column - 2/3 */}
          <div className="col-span-2 overflow-y-auto border-r border-gray-200 dark:border-gray-700">
            <div className="p-6 space-y-8">
              <MarkdownEditor
                content={taskData.description}
                label="Description"
                icon={<FileText size={16} className="text-gray-600 dark:text-gray-400" />}
                section="description"
              />

              {taskData.details && (
                <MarkdownEditor
                  content={taskData.details}
                  label="Implementation Details"
                  icon={<FileText size={16} className="text-gray-600 dark:text-gray-400" />}
                  section="details"
                />
              )}

              {taskData.testStrategy && (
                <MarkdownEditor
                  content={taskData.testStrategy}
                  label="Test Strategy"
                  icon={<TestTube size={16} className="text-gray-600 dark:text-gray-400" />}
                  section="testStrategy"
                />
              )}

              <SubtasksSection />
            </div>
          </div>

          {/* Right Column - 1/3 */}
          <div className="overflow-y-auto">
            <div className="p-6">
              <TaskDetailsSection />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Working On Dashboard
          </h1>
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <p className="text-gray-600 dark:text-gray-400">
              Main content area. The task side panel will slide in from the right when a task is
              selected.
            </p>
          </div>
        </div>
      </div>

      {/* Task Side Panel - Increased width from w-96 (384px) to w-[600px] */}
      <div className="w-[600px] bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-700 flex flex-col shadow-xl">
        <TaskHeader />
        <TaskTitleEditor />

        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Top Row: Description and Quick Details */}
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <MarkdownEditor
                  content={taskData.description}
                  label="Description"
                  icon={<FileText size={16} className="text-gray-600 dark:text-gray-400" />}
                  section="description"
                />
              </div>
            </div>

            {/* Middle Row: Two-column layout for details */}
            {(taskData.details || taskData.testStrategy) && (
              <div className="grid grid-cols-2 gap-6">
                {taskData.details && (
                  <div>
                    <MarkdownEditor
                      content={taskData.details}
                      label="Implementation Details"
                      icon={<FileText size={16} className="text-gray-600 dark:text-gray-400" />}
                      section="details"
                    />
                  </div>
                )}

                {taskData.testStrategy && (
                  <div>
                    <MarkdownEditor
                      content={taskData.testStrategy}
                      label="Test Strategy"
                      icon={<TestTube size={16} className="text-gray-600 dark:text-gray-400" />}
                      section="testStrategy"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Bottom Row: Subtasks and Task Details side by side */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <SubtasksSection />
              </div>

              <div>
                <TaskDetailsSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
