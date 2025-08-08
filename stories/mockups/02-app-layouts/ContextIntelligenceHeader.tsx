import React from 'react';

export interface ContextIntelligenceHeaderProps {
  variant?:
    | 'bootstrap'
    | 'task-planning'
    | 'ai-handoff'
    | 'parallel-productivity'
    | 'ai-supervision';
}

export function ContextIntelligenceHeader({
  variant = 'task-planning',
}: ContextIntelligenceHeaderProps) {
  const getVariantData = () => {
    switch (variant) {
      case 'bootstrap':
        return {
          search: '"finance SaaS research"',
          agents: '🔄 AI Research Active',
          context: null,
        };
      case 'task-planning':
        return {
          search: 'Filter tasks',
          agents: '⚡ 15 Ready',
          context: '🔄 Sync',
        };
      case 'ai-handoff':
        return {
          search: 'Search context',
          agents: '🤖 Ready to Package',
          context: '⚡ AI',
        };
      case 'parallel-productivity':
        return {
          search: 'Roadmap planning',
          agents: '🤖 2 Agents Active',
          context: '⚡🔄',
        };
      case 'ai-supervision':
        return {
          search: '"search guidance"',
          agents: '🤖 Claude Active',
          context: '⚡ Live',
        };
      default:
        return {
          search: 'Context Search',
          agents: '🤖 3 Agents Active',
          context: '⚡ Context 94%',
        };
    }
  };

  const data = getVariantData();

  return (
    <header className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
      {/* Left: Brand */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-gray-900">Task Master AI</h1>
      </div>

      {/* Center: Context Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400">🔍</span>
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder={data.search}
            readOnly
          />
        </div>
      </div>

      {/* Right: AI Status & Context Quality */}
      <div className="flex items-center gap-6">
        {/* AI Agent Status */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-blue-600 font-medium">{data.agents}</span>
        </div>

        {/* Context Quality */}
        {data.context && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-600 font-medium">{data.context}</span>
          </div>
        )}

        {/* User Avatar */}
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-sm">👤</span>
        </div>
      </div>
    </header>
  );
}
