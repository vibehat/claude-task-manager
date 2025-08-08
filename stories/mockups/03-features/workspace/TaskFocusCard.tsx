import React from 'react';
import type { Task, AIAgent, ViewMode } from './WorkingPage';

export interface TaskFocusCardProps {
  task: Task;
  aiAgents?: AIAgent[];
  viewMode: ViewMode;
}

export default function TaskFocusCard({ task, aiAgents = [], viewMode }: TaskFocusCardProps) {
  const getPhaseIcon = (phase?: string) => {
    switch (phase) {
      case 'AI Implementation':
        return '🤖';
      case 'Strategic Planning':
        return '🎯';
      case 'Research':
        return '🔬';
      case 'Review':
        return '👀';
      default:
        return '📋';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'in-progress':
        return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
      case 'blocked':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-orange-500';
      case 'low':
        return 'bg-blue-500';
      default:
        return 'bg-gray-400';
    }
  };

  const renderSubtasks = () => {
    if (!task.subtasks?.length) return null;

    return (
      <div className="space-y-2">
        <h4 className="font-medium text-foreground flex items-center gap-2">── SUBTASKS ──</h4>
        {task.subtasks.map((subtask) => (
          <div key={subtask.id} className="flex items-center gap-3 p-2 rounded bg-secondary/30">
            <div
              className={`h-2 w-2 rounded-full ${
                subtask.status === 'completed'
                  ? 'bg-green-500'
                  : subtask.status === 'in-progress'
                    ? 'bg-blue-500'
                    : subtask.status === 'blocked'
                      ? 'bg-red-500'
                      : 'bg-gray-400'
              }`}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm text-foreground">{subtask.title}</span>
                {subtask.assignedTo === 'ai' && (
                  <span className="text-xs text-muted-foreground">({subtask.aiAgent || 'AI'})</span>
                )}
              </div>
              {subtask.status === 'in-progress' && subtask.assignedTo === 'ai' && (
                <span className="text-xs text-muted-foreground">Working for 12m</span>
              )}
            </div>
            {subtask.status === 'completed' && <span className="text-xs text-green-600">✅</span>}
            {subtask.status === 'blocked' && <span className="text-xs text-red-600">⏸️</span>}
            {subtask.status === 'in-progress' && <span className="text-xs text-blue-600">🤖</span>}
          </div>
        ))}
      </div>
    );
  };

  const renderMobileLayout = () => (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
      <div className="space-y-4">
        {/* Task header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{getPhaseIcon(task.phase)}</span>
            <h2 className="text-lg font-semibold text-foreground">
              {task.id} {task.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">🔄 Phase:</span>
            <span className="font-medium text-foreground">{task.phase || 'Planning'}</span>
          </div>
        </div>

        {/* Your role */}
        <div className="p-3 bg-accent/50 rounded">
          <span className="text-sm font-medium text-foreground">
            Your Role: 🎭 Strategic Oversight
          </span>
        </div>

        {/* Subtasks */}
        {renderSubtasks()}

        {/* Smart actions */}
        <div>
          <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
            ── SMART ACTIONS ──
          </h4>
          <div className="space-y-2">
            <button className="w-full p-2 text-left text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              💡 Review AI progress
            </button>
            <button className="w-full p-2 text-left text-sm bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
              💡 Direct validation next
            </button>
            <button className="w-full p-2 text-left text-sm bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200 rounded hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
              💡 Hand off remaining tasks
            </button>
          </div>
        </div>

        {/* Quick handoff */}
        <div className="pt-4 border-t border-border">
          <button className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
            🚀 Complete Task Handoff
          </button>
          <p className="text-xs text-muted-foreground mt-1 text-center">
            Let AI finish entire task
          </p>
        </div>
      </div>
    </div>
  );

  const renderDesktopLayout = () => (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-1">🎯 CURRENT TASK FOCUS</h2>
            <div className="flex items-center gap-4">
              <span className="text-lg font-medium text-foreground">
                Task {task.id}: {task.title}
              </span>
              <div className={`h-2 w-2 rounded-full ${getPriorityColor(task.priority)}`} />
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm">
              <span className="text-muted-foreground">Phase:</span>
              <span
                className={`px-2 py-1 rounded border text-sm font-medium ${getStatusColor(task.status)}`}
              >
                {getPhaseIcon(task.phase)} {task.phase || 'Planning'} (75% done)
              </span>
            </div>
          </div>
          {task.complexity && (
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Complexity</div>
              <div className="text-lg font-semibold text-foreground">{task.complexity}/10</div>
            </div>
          )}
        </div>

        {/* Strategic role */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border">
          <h3 className="font-semibold text-foreground mb-1">🎭 Your Strategic Role:</h3>
          <p className="text-sm text-muted-foreground">Orchestrating AI implementation</p>
        </div>

        {/* Progress and subtasks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-foreground mb-3">📊 Subtask Progress:</h4>
            {renderSubtasks()}
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3">Context Package Includes:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">Security requirements (RS256)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">
                  Token expiry patterns (15min + refresh)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">Existing auth middleware patterns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
          <button className="px-4 py-2 bg-accent hover:bg-accent/80 text-accent-foreground rounded-lg text-sm font-medium transition-colors">
            📋 Full Context
          </button>
          <button className="px-4 py-2 bg-accent hover:bg-accent/80 text-accent-foreground rounded-lg text-sm font-medium transition-colors">
            🔍 Research
          </button>
          <button className="px-4 py-2 bg-accent hover:bg-accent/80 text-accent-foreground rounded-lg text-sm font-medium transition-colors">
            📝 Plan
          </button>
          <button className="px-4 py-2 bg-accent hover:bg-accent/80 text-accent-foreground rounded-lg text-sm font-medium transition-colors">
            🔧 Expand Further
          </button>
          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors">
            ✅ Mark Done
          </button>
          <button className="px-4 py-2 bg-accent hover:bg-accent/80 text-accent-foreground rounded-lg text-sm font-medium transition-colors">
            📝 Log
          </button>
        </div>
      </div>
    </div>
  );

  return viewMode === 'mobile' ? renderMobileLayout() : renderDesktopLayout();
}
