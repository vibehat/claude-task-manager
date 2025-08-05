'use client';

import { useState } from 'react';
import { useTaskMaster, useTaskDetails } from '@/hooks/useTaskMasterFrontendDriven';
import { commands } from '@/libs/taskmaster-commands';

export function TaskMasterFrontendDrivenDemo() {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [commandInput, setCommandInput] = useState('');

  const {
    tasks,
    metadata,
    stats,
    nextTask,
    isLoading,
    error,
    isExecuting,
    lastResult,
    lastError,
    refresh,
    setStatus,
    executeCommand,
  } = useTaskMaster();

  const { task: selectedTask } = useTaskDetails(selectedTaskId);

  const handleExecuteRawCommand = async () => {
    const parts = commandInput.trim().split(' ');
    const [cmd, ...args] = parts;

    if (cmd) {
      await executeCommand(() => commands.raw(cmd, args));
      setCommandInput('');
    }
  };

  if (error) {
    return (
      <div className="p-6 text-red-600">
        <h2 className="text-xl font-bold mb-2">Error</h2>
        <p>Failed to load TaskMaster data: {error.message}</p>
        <button
          onClick={() => refresh()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <header className="border-b pb-4">
        <h1 className="text-3xl font-bold">TaskMaster Frontend-Driven Architecture</h1>
        <p className="text-gray-600 mt-1">
          All logic in frontend • Backend just executes CLI • Frontend parses everything
        </p>

        {metadata && (
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date(metadata.updated).toLocaleString()}
          </p>
        )}
      </header>

      {/* Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-semibold text-sm text-gray-600">Total Tasks</h3>
          <p className="text-2xl font-bold">{stats.total}</p>
          <p className="text-xs text-gray-500 mt-1">+{stats.subtasksTotal} subtasks</p>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-semibold text-sm text-gray-600">Status Breakdown</h3>
          <div className="space-y-1 mt-2">
            {Object.entries(stats.byStatus).map(([status, count]) => (
              <div key={status} className="flex justify-between text-sm">
                <span className="capitalize">{status}:</span>
                <span className="font-medium">{count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-semibold text-sm text-gray-600">Task Availability</h3>
          <p className="text-lg font-bold text-green-600">{stats.readyTasks} ready</p>
          <p className="text-sm text-orange-600">{stats.blockedTasks} blocked</p>
        </div>

        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-semibold text-sm text-gray-600">Next Task</h3>
          {nextTask ? (
            <div>
              <p className="font-medium text-sm">#{nextTask.id}</p>
              <p className="text-xs text-gray-600 truncate">{nextTask.title}</p>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No tasks ready</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task List */}
        <div className="lg:col-span-2">
          <div className="bg-white border rounded-lg">
            <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
              <h2 className="font-semibold">Tasks ({isLoading ? '...' : tasks.length})</h2>
              <button
                onClick={() => refresh()}
                disabled={isLoading}
                className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {isLoading ? 'Loading...' : 'Refresh'}
              </button>
            </div>

            <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`p-3 border rounded cursor-pointer transition-all ${
                    selectedTaskId === task.id.toString()
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedTaskId(task.id.toString())}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">
                        #{task.id} - {task.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{task.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <StatusBadge status={task.status} />
                        <PriorityBadge priority={task.priority} />
                        {task.dependencies.length > 0 && (
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                            Deps: {task.dependencies.join(', ')}
                          </span>
                        )}
                        {task.subtasks.length > 0 && (
                          <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                            {task.subtasks.length} subtasks
                          </span>
                        )}
                      </div>
                    </div>

                    <TaskActions task={task} onStatusChange={setStatus} disabled={isExecuting} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Command Panel & Details */}
        <div className="space-y-4">
          {/* Command Executor */}
          <div className="bg-white border rounded-lg p-4">
            <h2 className="font-semibold mb-3">Direct Command</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleExecuteRawCommand()}
                placeholder="e.g. version, list, show 31"
                className="flex-1 px-3 py-2 border rounded text-sm"
                disabled={isExecuting}
              />
              <button
                onClick={handleExecuteRawCommand}
                disabled={isExecuting || !commandInput.trim()}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 disabled:opacity-50 text-sm"
              >
                Run
              </button>
            </div>

            {/* Quick Commands */}
            <div className="mt-3 space-y-1">
              <p className="text-xs text-gray-600 mb-2">Quick commands:</p>
              {[
                { label: 'Version', cmd: 'version' },
                { label: 'Next Task', cmd: 'next' },
                { label: 'Expand All', cmd: 'expand-all' },
                { label: 'Validate Deps', cmd: 'validate-dependencies' },
              ].map(({ label, cmd }) => (
                <button
                  key={cmd}
                  onClick={() => {
                    setCommandInput(cmd);
                    handleExecuteRawCommand();
                  }}
                  disabled={isExecuting}
                  className="text-xs px-2 py-1 bg-gray-100 rounded hover:bg-gray-200 mr-2"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Task Details */}
          {selectedTask && (
            <div className="bg-white border rounded-lg p-4">
              <h2 className="font-semibold mb-3">Task Details</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">ID:</span> {selectedTask.id}
                </div>
                <div>
                  <span className="font-medium">Title:</span> {selectedTask.title}
                </div>
                <div>
                  <span className="font-medium">Status:</span>{' '}
                  <StatusBadge status={selectedTask.status} />
                </div>
                <div>
                  <span className="font-medium">Priority:</span>{' '}
                  <PriorityBadge priority={selectedTask.priority} />
                </div>
                {selectedTask.dependencies.length > 0 && (
                  <div>
                    <span className="font-medium">Dependencies:</span>{' '}
                    {selectedTask.dependencies.join(', ')}
                  </div>
                )}
                {selectedTask.subtasks.length > 0 && (
                  <div>
                    <span className="font-medium">Subtasks:</span>
                    <ul className="mt-1 space-y-1">
                      {selectedTask.subtasks.map((st) => (
                        <li key={st.id} className="text-xs pl-4">
                          {st.id}. {st.title} [{st.status}]
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Last Command Result */}
          {lastResult && (
            <div className="bg-gray-50 border rounded-lg p-4">
              <h2 className="font-semibold mb-2 text-sm">Last Command Result</h2>
              <div className="text-xs space-y-2">
                <div>
                  <span className="font-medium">Command:</span> {lastResult.command}
                  {lastResult.args?.length > 0 && ` ${lastResult.args.join(' ')}`}
                </div>
                <div>
                  <span className="font-medium">Success:</span>{' '}
                  <span className={lastResult.parsed?.success ? 'text-green-600' : 'text-red-600'}>
                    {lastResult.parsed?.success ? 'Yes' : 'No'}
                  </span>
                </div>
                {lastError && (
                  <div className="text-red-600">
                    <span className="font-medium">Error:</span> {lastError}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Raw Output Viewer */}
      {lastResult?.raw && (
        <details className="bg-gray-50 rounded-lg">
          <summary className="p-4 cursor-pointer font-medium text-sm">View Raw CLI Output</summary>
          <pre className="p-4 text-xs bg-gray-100 rounded-b-lg overflow-auto max-h-64">
            {lastResult.raw}
          </pre>
        </details>
      )}
    </div>
  );
}

// Helper components
function StatusBadge({ status }: { status: string }) {
  const colors = {
    'pending': 'bg-blue-100 text-blue-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    'done': 'bg-green-100 text-green-800',
    'blocked': 'bg-red-100 text-red-800',
    'deferred': 'bg-gray-100 text-gray-800',
    'cancelled': 'bg-gray-100 text-gray-600',
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded ${colors[status as keyof typeof colors] || colors.pending}`}
    >
      {status}
    </span>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const colors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-orange-100 text-orange-800',
    low: 'bg-green-100 text-green-800',
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded ${colors[priority as keyof typeof colors] || colors.medium}`}
    >
      {priority}
    </span>
  );
}

function TaskActions({ task, onStatusChange, disabled }: any) {
  const canStart = task.status === 'pending';
  const canComplete = task.status === 'in-progress';

  return (
    <div className="flex flex-col gap-1 ml-3">
      {canStart && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onStatusChange(task.id, 'in-progress');
          }}
          disabled={disabled}
          className="text-xs px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50"
        >
          Start
        </button>
      )}
      {canComplete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onStatusChange(task.id, 'done');
          }}
          disabled={disabled}
          className="text-xs px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
        >
          Complete
        </button>
      )}
      {task.status === 'pending' && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onStatusChange(task.id, 'deferred');
          }}
          disabled={disabled}
          className="text-xs px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Defer
        </button>
      )}
    </div>
  );
}
