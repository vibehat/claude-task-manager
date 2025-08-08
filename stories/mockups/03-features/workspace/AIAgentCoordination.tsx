import React, { useState } from 'react';
import type { AIAgent, ViewMode } from './WorkingPage';

export interface AIAgentCoordinationProps {
  agents: AIAgent[];
  viewMode: ViewMode;
}

export default function AIAgentCoordination({ agents, viewMode }: AIAgentCoordinationProps) {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [commandInput, setCommandInput] = useState('');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'working':
        return '🤖';
      case 'review':
        return '👀';
      case 'blocked':
        return '⏸️';
      default:
        return '💤';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'working':
        return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
      case 'review':
        return 'text-orange-600 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800';
      case 'blocked':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800';
    }
  };

  const primaryAgent = agents.find((agent) => agent.status === 'working') || agents[0];

  const renderAgentStatus = (agent: AIAgent) => (
    <div
      key={agent.id}
      className={`p-4 rounded-lg border transition-all cursor-pointer ${
        selectedAgent === agent.id
          ? 'ring-2 ring-blue-500 bg-blue-50/50 dark:bg-blue-900/10'
          : 'hover:bg-accent/50'
      }`}
      onClick={() => setSelectedAgent(selectedAgent === agent.id ? null : agent.id)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <span className="text-lg">{getStatusIcon(agent.status)}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium text-foreground">{agent.name}</h4>
              <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(agent.status)}`}>
                {agent.status}
              </span>
            </div>

            {agent.currentTask && (
              <p className="text-sm text-muted-foreground mb-1">Task: {agent.currentTask}</p>
            )}

            {agent.status === 'working' && (
              <div className="space-y-1">
                <p className="text-sm text-foreground">
                  {agent.progress || 'Writing validation middleware'}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Duration: {agent.duration || '45 minutes active'}</span>
                  {agent.files && <span>Files: {agent.files.join(', ')}</span>}
                </div>
              </div>
            )}

            {agent.lastUpdate && (
              <p className="text-xs text-muted-foreground italic mt-2">
                Last Update: "{agent.lastUpdate}"
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-2 ml-2">
          <button className="p-1.5 hover:bg-accent rounded text-xs transition-colors">👀</button>
          <button className="p-1.5 hover:bg-accent rounded text-xs transition-colors">💬</button>
        </div>
      </div>

      {selectedAgent === agent.id && (
        <div className="mt-4 pt-4 border-t border-border space-y-3">
          <div className="space-y-2">
            <h5 className="font-medium text-foreground">Direct Commands:</h5>
            <div className="relative">
              <input
                type="text"
                placeholder="Also implement rate limiting for..."
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors">
                Send
              </button>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <button className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm transition-colors">
              ✅ Approve
            </button>
            <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm transition-colors">
              👀 Review Code
            </button>
            <button className="px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded text-sm transition-colors">
              🔄 Request Changes
            </button>
            <button className="px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white rounded text-sm transition-colors">
              ⏸️ Pause
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderMobileLayout = () => (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
      <div className="space-y-4">
        <h3 className="font-medium text-foreground flex items-center gap-2">
          ── AI AGENT STATUS ──
        </h3>

        {primaryAgent && (
          <div className="space-y-3">
            {renderAgentStatus(primaryAgent)}

            {agents.length > 1 && (
              <div className="pt-2">
                <details className="bg-secondary/30 rounded-lg">
                  <summary className="p-3 cursor-pointer text-sm font-medium text-muted-foreground">
                    View Other Agents ({agents.length - 1})
                  </summary>
                  <div className="px-3 pb-3 space-y-2">
                    {agents.filter((agent) => agent.id !== primaryAgent.id).map(renderAgentStatus)}
                  </div>
                </details>
              </div>
            )}
          </div>
        )}

        {agents.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No active AI agents</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm">
              Start AI Agent
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderDesktopLayout = () => (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-foreground">🤖 AI AGENT COORDINATION</h2>

        {primaryAgent ? (
          <div className="space-y-4">
            {renderAgentStatus(primaryAgent)}

            {agents.length > 1 && (
              <div className="space-y-4">
                <h3 className="font-medium text-foreground border-t border-border pt-4">
                  Additional Agents ({agents.length - 1})
                </h3>
                <div className="grid gap-3">
                  {agents.filter((agent) => agent.id !== primaryAgent.id).map(renderAgentStatus)}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-border">
              <h3 className="font-medium text-foreground mb-3">Global Agent Controls:</h3>
              <div className="flex gap-2 flex-wrap">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
                  🤖 Hand Off All
                </button>
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors">
                  🔄 Review All
                </button>
                <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-medium transition-colors">
                  📝 Batch Update
                </button>
                <button className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors">
                  ⚙️ Configure
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="space-y-4">
              <div className="text-6xl">🤖</div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">No Active AI Agents</h3>
                <p className="text-muted-foreground mb-4">
                  Start an AI agent to begin automated task execution
                </p>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all">
                  🚀 Start AI Agent
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return viewMode === 'mobile' ? renderMobileLayout() : renderDesktopLayout();
}
