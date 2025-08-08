import React, { useState } from 'react';
import TaskFocusCard from './TaskFocusCard';
import WorkflowSuggestionsPanel from './WorkflowSuggestionsPanel';
import AIAgentCoordination from './AIAgentCoordination';
import BootstrapWizard from './BootstrapWizard';
import MultiTaskOrchestration from './MultiTaskOrchestration';
import TaskMasterCommands from './TaskMasterCommands';

export type WorkingPageState =
  | 'no-active-task'
  | 'planning-research'
  | 'ai-direction'
  | 'complete-handoff'
  | 'multi-task-orchestration'
  | 'bootstrap-from-nothing';

export type ViewMode = 'mobile' | 'desktop';

export interface AIAgent {
  id: string;
  name: string;
  status: 'idle' | 'working' | 'review' | 'blocked';
  currentTask?: string;
  duration?: string;
  progress?: string;
  files?: string[];
  lastUpdate?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
  priority: 'high' | 'medium' | 'low';
  phase?: string;
  subtasks?: SubTask[];
  context?: string;
  complexity?: number;
  dependencies?: string[];
}

export interface SubTask {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
  assignedTo?: 'human' | 'ai';
  aiAgent?: string;
}

export interface WorkingPageProps {
  state?: WorkingPageState;
  viewMode?: ViewMode;
  currentTask?: Task | null;
  activeTasks?: Task[];
  aiAgents?: AIAgent[];
  projectContext?: {
    tag?: string;
    gitBranch?: string;
    tasksTotal?: number;
    tasksPending?: number;
    filesModifiedToday?: number;
  };
}

export default function WorkingPage({
  state = 'no-active-task',
  viewMode = 'desktop',
  currentTask = null,
  activeTasks = [],
  aiAgents = [],
  projectContext = {
    tag: 'sprint-12',
    gitBranch: 'feat/auth',
    tasksTotal: 28,
    tasksPending: 12,
    filesModifiedToday: 3,
  },
}: WorkingPageProps) {
  const [currentView, setCurrentView] = useState<WorkingPageState>(state);
  const [isMultiTaskMode, setIsMultiTaskMode] = useState(false);

  const renderHeader = () => (
    <header className="bg-card border-b border-border px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold text-foreground flex items-center gap-2">
            {currentView === 'bootstrap-from-nothing' ? (
              <>🚀 Starting From Nothing</>
            ) : currentView === 'multi-task-orchestration' ? (
              <>🔄 Multi-Task Orchestration</>
            ) : (
              <>🎯 Working On</>
            )}
          </h1>
          {viewMode === 'desktop' && (
            <div className="flex gap-2">
              <button
                className={`px-3 py-1 rounded text-sm ${!isMultiTaskMode ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                onClick={() => {
                  setIsMultiTaskMode(false);
                  setCurrentView('no-active-task');
                }}
              >
                Single Task
              </button>
              <button
                className={`px-3 py-1 rounded text-sm ${isMultiTaskMode ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                onClick={() => {
                  setIsMultiTaskMode(true);
                  setCurrentView('multi-task-orchestration');
                }}
              >
                Multi-Task
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-accent rounded">⚙️</button>
          <button className="p-2 hover:bg-accent rounded">🔄</button>
        </div>
      </div>
    </header>
  );

  const renderProjectContext = () => (
    <div className="bg-secondary/30 border-b border-border px-4 py-2">
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">📁 Tag: {projectContext.tag}</span>
        <span className="flex items-center gap-1">🌿 Git: {projectContext.gitBranch}</span>
        {viewMode === 'desktop' && (
          <span className="flex items-center gap-1">
            📊 {projectContext.filesModifiedToday} files modified today
          </span>
        )}
      </div>
    </div>
  );

  const renderMobileLayout = () => (
    <div className="min-h-screen bg-background">
      {renderHeader()}
      {renderProjectContext()}

      <div className="p-4 space-y-4">
        {currentView === 'bootstrap-from-nothing' && <BootstrapWizard viewMode="mobile" />}

        {currentView === 'no-active-task' && (
          <WorkflowSuggestionsPanel viewMode="mobile" projectContext={projectContext} />
        )}

        {(currentView === 'ai-direction' || currentView === 'planning-research') && currentTask && (
          <>
            <TaskFocusCard task={currentTask} aiAgents={aiAgents} viewMode="mobile" />
            <AIAgentCoordination agents={aiAgents} viewMode="mobile" />
          </>
        )}

        <TaskMasterCommands viewMode="mobile" />
      </div>
    </div>
  );

  const renderDesktopLayout = () => (
    <div className="min-h-screen bg-background">
      {renderHeader()}
      {renderProjectContext()}

      <div className="p-6">
        {currentView === 'bootstrap-from-nothing' && <BootstrapWizard viewMode="desktop" />}

        {currentView === 'multi-task-orchestration' && (
          <MultiTaskOrchestration activeTasks={activeTasks} aiAgents={aiAgents} />
        )}

        {(currentView === 'no-active-task' ||
          currentView === 'ai-direction' ||
          currentView === 'planning-research') && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main task focus area */}
            <div className="lg:col-span-2 space-y-6">
              {currentTask ? (
                <TaskFocusCard task={currentTask} aiAgents={aiAgents} viewMode="desktop" />
              ) : (
                <WorkflowSuggestionsPanel viewMode="desktop" projectContext={projectContext} />
              )}

              {currentTask && <AIAgentCoordination agents={aiAgents} viewMode="desktop" />}
            </div>

            {/* Right sidebar */}
            <div className="space-y-6">
              <WorkflowSuggestionsPanel
                viewMode="desktop"
                projectContext={projectContext}
                isCompact={true}
              />
              <TaskMasterCommands viewMode="desktop" />
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return viewMode === 'mobile' ? renderMobileLayout() : renderDesktopLayout();
}
