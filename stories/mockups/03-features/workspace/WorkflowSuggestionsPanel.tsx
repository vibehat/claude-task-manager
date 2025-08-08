import React from 'react';
import type { ViewMode } from './WorkingPage';

export interface ProjectContext {
  tag?: string;
  gitBranch?: string;
  tasksTotal?: number;
  tasksPending?: number;
  filesModifiedToday?: number;
}

export interface WorkflowSuggestionsPanelProps {
  viewMode: ViewMode;
  projectContext?: ProjectContext;
  isCompact?: boolean;
  hasActiveTask?: boolean;
}

export default function WorkflowSuggestionsPanel({
  viewMode,
  projectContext = {},
  isCompact = false,
  hasActiveTask = false,
}: WorkflowSuggestionsPanelProps) {
  const renderSmartSuggestion = () => (
    <div className="space-y-4">
      <div className="p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">🎯 Start Task 28.3: API Endpoints</h3>
        <div className="text-sm space-y-1">
          <p className="text-muted-foreground">Priority: High | Ready to start</p>
          <p className="text-muted-foreground">Estimate: 2 hours</p>
        </div>

        <div className="mt-3 space-y-2">
          <p className="text-sm font-medium text-foreground">Why this task:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>JWT task is 80% complete</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>APIs depend on JWT</span>
            </li>
            <li className="flex items-start gap-2">
              <span>•</span>
              <span>No blockers or dependencies</span>
            </li>
          </ul>
        </div>

        <button className="w-full mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
          🎯 Start This Task
        </button>
      </div>
    </div>
  );

  const renderOrchestrationRecommendations = () => (
    <div className="space-y-3">
      <h3 className="font-medium text-foreground">Orchestration Recommendations:</h3>
      <div className="space-y-2">
        <div className="p-3 bg-secondary/50 rounded-lg">
          <p className="text-sm text-foreground">1. Review Claude's token logic</p>
        </div>
        <div className="p-3 bg-secondary/50 rounded-lg">
          <p className="text-sm text-foreground">2. Direct validation middleware</p>
        </div>
        <div className="p-3 bg-secondary/50 rounded-lg">
          <p className="text-sm text-foreground">3. Prepare test strategy handoff</p>
        </div>
      </div>

      <div className="pt-2">
        <h4 className="font-medium text-foreground mb-2">Strategic Options:</h4>
        <div className="space-y-2">
          <button className="w-full p-2 text-left text-sm bg-gradient-to-r from-green-500 to-blue-500 text-white rounded hover:from-green-600 hover:to-blue-600 transition-all">
            🚀 Complete Task Handoff
          </button>
          <p className="text-xs text-muted-foreground">Let AI complete autonomously</p>

          <div className="mt-3">
            <p className="text-sm font-medium text-foreground mb-2">Next Strategic Focus:</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>• Task 28.3: API Endpoints</div>
              <div>• Task 29.1: Rate Limiting</div>
            </div>
          </div>
        </div>

        <button className="w-full mt-3 px-3 py-2 bg-accent hover:bg-accent/80 text-accent-foreground rounded text-sm transition-colors">
          📋 View Full Pipeline
        </button>
      </div>
    </div>
  );

  const renderTaskIntelligence = () => (
    <div className="space-y-4">
      <h3 className="font-medium text-foreground">📊 TASK INTELLIGENCE</h3>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-muted-foreground">Complexity:</span>
          <p className="font-medium text-red-600">8/10 (High)</p>
        </div>
        <div>
          <span className="text-muted-foreground">Risk:</span>
          <p className="font-medium text-orange-600">Medium</p>
        </div>
        <div>
          <span className="text-muted-foreground">Context Quality:</span>
          <p className="font-medium text-green-600">Excellent ✅</p>
        </div>
        <div>
          <span className="text-muted-foreground">Critical Path:</span>
          <p className="font-medium text-red-600">Yes ⚠️</p>
        </div>
      </div>

      <div className="text-sm space-y-1">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Dependencies:</span>
          <span className="text-foreground">1 ready, 0 blocked</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Blocks:</span>
          <span className="text-foreground">2 downstream tasks</span>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="px-3 py-1 bg-accent hover:bg-accent/80 text-accent-foreground rounded text-xs transition-colors">
          🔪 Split Task
        </button>
        <button className="px-3 py-1 bg-accent hover:bg-accent/80 text-accent-foreground rounded text-xs transition-colors">
          🔧 Expand More
        </button>
      </div>

      <div className="pt-2 border-t border-border">
        <h4 className="font-medium text-foreground mb-2">Pattern Recognition:</h4>
        <div className="space-y-1 text-sm text-muted-foreground">
          <div>• Security-focused task</div>
          <div>• Requires testing strategy</div>
          <div>• High-context implementation</div>
        </div>
      </div>
    </div>
  );

  const renderOtherOptions = () => (
    <div className="space-y-4">
      <h3 className="font-medium text-foreground">── OTHER OPTIONS ──</h3>
      <div className="space-y-2">
        <button className="w-full p-3 bg-card hover:bg-accent border border-border rounded-lg text-left transition-colors">
          <span className="text-sm font-medium text-foreground">
            📋 View All Tasks (12 pending)
          </span>
        </button>
        <button className="w-full p-3 bg-card hover:bg-accent border border-border rounded-lg text-left transition-colors">
          <span className="text-sm font-medium text-foreground">📊 Complexity Analysis</span>
        </button>
        <button className="w-full p-3 bg-card hover:bg-accent border border-border rounded-lg text-left transition-colors">
          <span className="text-sm font-medium text-foreground">📈 Project Report</span>
        </button>
        <button className="w-full p-3 bg-card hover:bg-accent border border-border rounded-lg text-left transition-colors">
          <span className="text-sm font-medium text-foreground">📝 Add New Task</span>
        </button>
      </div>

      <div className="pt-4 border-t border-border">
        <h4 className="font-medium text-foreground mb-2">── PROJECT CONTEXT ──</h4>
        <div className="space-y-1 text-sm text-muted-foreground">
          <div>
            Tasks: {projectContext.tasksTotal || 28} total, {projectContext.tasksPending || 12}{' '}
            pending
          </div>
          <div>Tags: {projectContext.tag || 'sprint-12'} (active)</div>
          <div>Git: 3 branches, {projectContext.gitBranch || 'feat/auth'} main</div>
        </div>
      </div>
    </div>
  );

  const renderMobileLayout = () => (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
      {!hasActiveTask ? (
        <div className="space-y-4">
          <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border">
            <h2 className="text-lg font-semibold text-foreground mb-2">
              💡 Smart Workflow Suggestion
            </h2>
            <p className="text-sm text-muted-foreground">Recommended next action</p>
          </div>

          {renderSmartSuggestion()}
          {renderOtherOptions()}
        </div>
      ) : (
        renderOrchestrationRecommendations()
      )}
    </div>
  );

  const renderDesktopLayout = () => (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      {isCompact ? (
        hasActiveTask ? (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">💡 SMART WORKFLOW SUGGESTIONS</h2>
            {renderOrchestrationRecommendations()}
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">💡 SMART WORKFLOW SUGGESTIONS</h2>
            {renderSmartSuggestion()}
          </div>
        )
      ) : !hasActiveTask ? (
        <div className="space-y-6">
          <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              💡 Smart Workflow Suggestion
            </h2>
            <p className="text-muted-foreground">
              Transform requirements document into structured task hierarchy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                ── RECOMMENDED NEXT ACTION ──
              </h3>
              {renderSmartSuggestion()}
            </div>

            <div>{renderOtherOptions()}</div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">
              💡 SMART WORKFLOW SUGGESTIONS
            </h2>
            {renderOrchestrationRecommendations()}
          </div>
          <div>{renderTaskIntelligence()}</div>
        </div>
      )}
    </div>
  );

  return viewMode === 'mobile' ? renderMobileLayout() : renderDesktopLayout();
}
