import React from 'react';

export interface ContextIntelligencePanelProps {
  contextQuality?: number;
  strategicContext?: {
    architecture: boolean;
    research: boolean;
    prd: boolean;
  };
  aiContext?: {
    patterns: boolean;
    dependencies: boolean;
    edgeCases: boolean;
  };
}

export function ContextIntelligencePanel({
  contextQuality = 94,
  strategicContext = {
    architecture: true,
    research: true,
    prd: true,
  },
  aiContext = {
    patterns: true,
    dependencies: true,
    edgeCases: false,
  },
}: ContextIntelligencePanelProps) {
  const getStatusIcon = (status: boolean) => (status ? '✅' : '⚠️');
  const getStatusText = (status: boolean) => (status ? 'Complete' : 'Needs Work');
  const getStatusColor = (status: boolean) => (status ? 'text-green-600' : 'text-orange-600');

  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Context Intelligence Panel</h3>
        <div className="text-lg font-bold text-blue-600">{contextQuality}% Complete</div>
      </div>

      <div className="space-y-4">
        {/* Context Quality Header */}
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-800 mb-2">
            Current Context Package Quality: {contextQuality}% Complete
          </div>
        </div>

        {/* Strategic Context */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Strategic Context:</h4>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span>{getStatusIcon(strategicContext.architecture)}</span>
              <span className={getStatusColor(strategicContext.architecture)}>Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{getStatusIcon(strategicContext.research)}</span>
              <span className={getStatusColor(strategicContext.research)}>Research</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{getStatusIcon(strategicContext.prd)}</span>
              <span className={getStatusColor(strategicContext.prd)}>PRD</span>
            </div>
          </div>
        </div>

        {/* AI Context */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">AI Context:</h4>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span>{getStatusIcon(aiContext.patterns)}</span>
              <span className={getStatusColor(aiContext.patterns)}>Patterns</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{getStatusIcon(aiContext.dependencies)}</span>
              <span className={getStatusColor(aiContext.dependencies)}>Dependencies</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{getStatusIcon(aiContext.edgeCases)}</span>
              <span className={getStatusColor(aiContext.edgeCases)}>Edge Cases</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-3 border-t border-gray-200">
          <button className="px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
            🤖 Hand to Claude
          </button>
          <button className="px-3 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors">
            🔧 Direct Cursor
          </button>
          <button className="px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
            🔬 Research
          </button>
        </div>
      </div>
    </div>
  );
}
