import React from 'react';

export interface AgentStatus {
  name: string;
  icon: string;
  status: 'active' | 'ready' | 'working';
  progress?: number;
  currentTask?: string;
  progressColor?: string;
}

export interface MultiAgentStatusDashboardProps {
  agents?: AgentStatus[];
  contextSyncStatus?: boolean;
}

export function MultiAgentStatusDashboard({
  agents = [
    {
      name: 'Claude Agent',
      icon: '🤖',
      status: 'working',
      progress: 80,
      currentTask: 'Implementing auth',
      progressColor: 'bg-blue-500',
    },
    {
      name: 'Cursor Agent',
      icon: '🔧',
      status: 'ready',
      currentTask: 'Awaiting handoff',
    },
    {
      name: 'Research Agent',
      icon: '🔬',
      status: 'working',
      progress: 20,
      currentTask: 'Mobile analysis',
      progressColor: 'bg-green-500',
    },
  ],
  contextSyncStatus = true,
}: MultiAgentStatusDashboardProps) {
  const renderProgressBar = (agent: AgentStatus) => {
    if (agent.status === 'ready') return null;

    const progress = agent.progress || 0;
    const filledBlocks = Math.floor((progress / 100) * 10);
    const partialBlock = progress % 10 > 5;

    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className={`w-2 h-3 ${
              index < filledBlocks
                ? agent.progressColor || 'bg-blue-500'
                : index === filledBlocks && partialBlock
                  ? 'bg-gray-400'
                  : 'bg-gray-200'
            }`}
          />
        ))}
        <span className="ml-2 text-sm font-medium">{progress}%</span>
      </div>
    );
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Multi-Agent Status Dashboard</h3>
        <div className="text-sm text-gray-600">{agents.length} Agents</div>
      </div>

      <div className="space-y-3">
        {agents.map((agent, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <div className="flex items-center gap-3">
              <span className="text-lg">{agent.icon}</span>
              <div>
                <div className="font-medium text-gray-900">{agent.name}</div>
                {agent.currentTask && (
                  <div className="text-sm text-gray-600">{agent.currentTask}</div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {agent.status === 'ready' ? (
                <span className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded">Ready</span>
              ) : (
                renderProgressBar(agent)
              )}
            </div>
          </div>
        ))}

        {/* Context Sync Status */}
        <div className="flex items-center justify-between p-3 bg-green-50 rounded border border-green-200">
          <div className="flex items-center gap-2">
            <span className="text-green-600">{contextSyncStatus ? '✅' : '⚠️'}</span>
            <span className="font-medium text-gray-900">Context Sync:</span>
          </div>
          <span className="text-sm text-green-700">
            {contextSyncStatus
              ? 'All agents have current project state'
              : 'Syncing project state...'}
          </span>
        </div>
      </div>
    </div>
  );
}
