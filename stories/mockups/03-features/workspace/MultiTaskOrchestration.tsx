import React, { useState } from 'react';
import type { Task, AIAgent } from './WorkingPage';

export interface MultiTaskOrchestrationProps {
  activeTasks: Task[];
  aiAgents: AIAgent[];
}

export default function MultiTaskOrchestration({
  activeTasks,
  aiAgents,
}: MultiTaskOrchestrationProps) {
  const [focusedTask, setFocusedTask] = useState<string | null>(activeTasks[0]?.id || null);

  const getTaskPhaseIcon = (task: Task) => {
    if (task.status === 'completed') return '✅';
    if (task.status === 'blocked') return '⏸️';
    return '🤖';
  };

  const getTaskStatusDescription = (task: Task) => {
    if (task.status === 'in-progress') {
      const assignedAgent = aiAgents.find((agent) => agent.currentTask?.includes(task.title));
      if (assignedAgent) {
        return `AI Working → Your ${assignedAgent.status === 'review' ? 'review needed' : 'periodic review'}`;
      }
      return 'You planning → AI waiting';
    }
    if (task.status === 'completed') return 'Completed';
    if (task.status === 'blocked') return 'Blocked → depends on other task';
    return 'Ready to start strategic planning';
  };

  const renderTaskCard = (task: Task, index: number) => {
    const isFocused = focusedTask === task.id;
    const assignedAgent = aiAgents.find((agent) => agent.currentTask?.includes(task.title));

    return (
      <div
        key={task.id}
        className={`border rounded-lg p-4 transition-all cursor-pointer ${
          isFocused
            ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 ring-2 ring-blue-500'
            : 'border-border hover:border-blue-300 hover:bg-accent/50'
        }`}
        onClick={() => setFocusedTask(isFocused ? null : task.id)}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">{getTaskPhaseIcon(task)}</span>
              <span className="font-medium text-foreground">
                #{index + 1} Task {task.id}: {task.title}
              </span>
            </div>
            <button
              className={`px-3 py-1 rounded text-sm transition-colors ${
                isFocused
                  ? 'bg-blue-500 text-white'
                  : 'bg-accent hover:bg-accent/80 text-accent-foreground'
              }`}
            >
              Switch Focus: #{index + 1}
            </button>
          </div>

          <p className="text-sm text-muted-foreground">Status: {getTaskStatusDescription(task)}</p>

          {assignedAgent && (
            <div className="p-3 bg-secondary/30 rounded">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-foreground">
                  🤖 {assignedAgent.name} Progress:
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{assignedAgent.progress}</p>
              {assignedAgent.duration && (
                <p className="text-xs text-muted-foreground">
                  Progress: 85% → 90% (last {assignedAgent.duration})
                </p>
              )}
            </div>
          )}

          {isFocused && (
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              <div>
                <h4 className="font-medium text-foreground mb-2">Your Next Strategic Input:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Review validation approach</li>
                  <li>• Approve for testing phase</li>
                  <li>• Provide security requirements</li>
                </ul>
              </div>

              <div className="flex gap-2 flex-wrap">
                <button className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm font-medium transition-colors">
                  👀 Review Now
                </button>
                <button className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded text-sm font-medium transition-colors">
                  📝 Add Context
                </button>
                <button className="px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded text-sm font-medium transition-colors">
                  🤖 Hand to AI
                </button>
                <button className="px-3 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded text-sm font-medium transition-colors">
                  ⏸️ Switch Tasks
                </button>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <button className="px-2 py-1 bg-accent hover:bg-accent/80 text-accent-foreground rounded text-xs transition-colors">
              Monitor
            </button>
            <button className="px-2 py-1 bg-accent hover:bg-accent/80 text-accent-foreground rounded text-xs transition-colors">
              Direct
            </button>
            <button className="px-2 py-1 bg-accent hover:bg-accent/80 text-accent-foreground rounded text-xs transition-colors">
              Switch Focus
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-foreground">
              🔄 YOUR ACTIVE TASKS ({activeTasks.length} concurrent) - Strategic coordination mode
            </h2>
            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
              {activeTasks.map((task, index) => (
                <div key={task.id}>
                  #{index + 1} Task {task.id}: {task.title} ({getTaskStatusDescription(task)})
                </div>
              ))}
            </div>
          </div>
          <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors">
            + Add Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Task Focus */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              🎯 ACTIVE FOCUS: {focusedTask ? `Task ${focusedTask}` : 'Select a task'}
            </h2>

            {focusedTask ? (
              <div className="space-y-4">
                {activeTasks.filter((task) => task.id === focusedTask).map(renderTaskCard)}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>Select a task to focus on</p>
              </div>
            )}
          </div>
        </div>

        {/* Right sidebar - Intelligence and Controls */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              💡 CONCURRENT WORKFLOW INTELLIGENCE
            </h2>

            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                  While AI works on Task #1:
                </h3>
                <ul className="text-sm text-blue-600 dark:text-blue-300 space-y-1">
                  <li>• You can plan Task #2 strategy</li>
                  <li>• Task #3 auto-starts when #1 done</li>
                  <li>• Research feeds into your planning</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Smart Scheduling:</h4>
                <p className="text-sm text-muted-foreground">Plan → Research → Code → Review</p>

                <h4 className="font-medium text-foreground">Workflow Optimization:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Parallel research + coding</li>
                  <li>• Automatic handoff triggers</li>
                  <li>• Context sharing between tasks</li>
                </ul>
              </div>

              <button className="w-full px-4 py-2 bg-accent hover:bg-accent/80 text-accent-foreground rounded-lg transition-colors">
                ⚙️ Workflow Settings
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              🎮 ORCHESTRATION CONTROL PANEL
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-foreground mb-2">Global Actions:</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm transition-colors">
                    📊 View All Tasks
                  </button>
                  <button className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded text-sm transition-colors">
                    📈 Reports
                  </button>
                  <button className="px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded text-sm transition-colors">
                    🔄 Balance Agents
                  </button>
                  <button className="px-3 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded text-sm transition-colors">
                    ⚙️ Configure
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-medium text-foreground mb-2">AI Agent Management:</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>• Claude: Task #1 (active)</div>
                  <div>• Available for: Task #2, #3</div>
                  <div>• Queue management: Smart priority</div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-medium text-foreground mb-2">Context Intelligence:</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Shared learnings between tasks</div>
                  <div>Pattern recognition across work</div>
                  <div>Automatic context handoffs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Stream */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          📰 MULTI-TASK ACTIVITY STREAM
        </h2>

        <div className="space-y-4">
          {activeTasks.map((task, index) => {
            const assignedAgent = aiAgents.find((agent) => agent.currentTask?.includes(task.title));
            return (
              <div key={task.id} className="p-4 bg-secondary/30 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">
                      #{index + 1} {getTaskPhaseIcon(task)} {task.title}
                    </h3>
                    {assignedAgent ? (
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>
                          {assignedAgent.name}: {assignedAgent.progress}
                        </p>
                        {assignedAgent.duration && (
                          <p>Progress: 85% → 90% (last {assignedAgent.duration})</p>
                        )}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {getTaskStatusDescription(task)}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button className="px-2 py-1 bg-accent hover:bg-accent/80 text-accent-foreground rounded text-xs transition-colors">
                      Monitor
                    </button>
                    <button className="px-2 py-1 bg-accent hover:bg-accent/80 text-accent-foreground rounded text-xs transition-colors">
                      Direct
                    </button>
                    <button className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs transition-colors">
                      Switch Focus
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
