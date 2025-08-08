import React, { useState } from 'react';
import type { ViewMode } from './WorkingPage';

export type BootstrapMode = 'research' | 'prd' | 'rapid';

export interface BootstrapWizardProps {
  viewMode: ViewMode;
}

export default function BootstrapWizard({ viewMode }: BootstrapWizardProps) {
  const [selectedMode, setSelectedMode] = useState<BootstrapMode | null>(null);
  const [researchQuery, setResearchQuery] = useState('');

  const bootstrapOptions = [
    {
      mode: 'research' as const,
      title: '🔬 Start with Research',
      subtitle: 'AI research → Strategic decisions',
      description: 'Perfect for: Market analysis, competitive research, technology decisions',
      example: 'Research competitor pricing for SaaS tools',
      workflow: [
        'Direct AI Research Agent',
        'AI Returns Structured Analysis',
        'Make Strategic Decisions',
        'Context Flows to AI Implementation',
      ],
    },
    {
      mode: 'prd' as const,
      title: '📋 Create PRD First',
      subtitle: 'Requirements → Task generation',
      description: 'Perfect for: Clear vision needs structured documentation',
      example: 'Define user stories and technical requirements',
      workflow: [
        'Create Requirements Document',
        'AI Parses PRD into Task Structure',
        'Perfect Context for AI Handoffs',
      ],
    },
    {
      mode: 'rapid' as const,
      title: '🎯 Rapid Bootstrap',
      subtitle: 'Quick tasks → Immediate handoff',
      description: 'Perfect for: Prototypes, known domain projects',
      example: 'Build a task management system with real-time features',
      workflow: [
        'Describe Project Concept',
        'AI Generates Initial Task Structure',
        'Immediate Strategic Handoff',
      ],
    },
  ];

  const contextExamples = [
    {
      type: 'SaaS Finance App',
      flow: 'Research findings → PRD sections → Implementation tasks',
    },
    {
      type: 'Open Source Tool',
      flow: 'Community research → Architecture → Development workflow',
    },
    {
      type: 'Client Project',
      flow: 'Requirements gathering → Strategic planning → AI execution',
    },
  ];

  const renderBootstrapOption = (option: (typeof bootstrapOptions)[0]) => (
    <div
      key={option.mode}
      className={`p-4 border rounded-lg cursor-pointer transition-all ${
        selectedMode === option.mode
          ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 ring-2 ring-blue-500'
          : 'border-border hover:border-blue-300 hover:bg-accent/50'
      }`}
      onClick={() => setSelectedMode(selectedMode === option.mode ? null : option.mode)}
    >
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-foreground text-lg">{option.title}</h3>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{option.subtitle}</p>
        </div>

        <p className="text-sm text-muted-foreground">{option.description}</p>

        <div className="p-3 bg-secondary/30 rounded border border-dashed border-muted-foreground/40">
          <p className="text-xs text-muted-foreground mb-1">Example:</p>
          <p className="text-sm text-foreground italic">"{option.example}"</p>
        </div>

        {selectedMode === option.mode && (
          <div className="mt-4 space-y-3">
            <h4 className="font-medium text-foreground">Strategic Workflow:</h4>
            <ol className="space-y-2">
              {option.workflow.map((step, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-500 text-white rounded-full text-xs flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>

            {option.mode === 'research' && (
              <div className="mt-4 space-y-2">
                <label className="text-sm font-medium text-foreground">Research Query:</label>
                <input
                  type="text"
                  placeholder="What would you like to research?"
                  className="w-full p-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground"
                  value={researchQuery}
                  onChange={(e) => setResearchQuery(e.target.value)}
                />
                <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                  🔍 Start Research Mode
                </button>
              </div>
            )}

            {option.mode === 'prd' && (
              <div className="mt-4 space-y-2">
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors">
                    📋 Create New PRD
                  </button>
                  <button className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
                    🔄 Import Existing
                  </button>
                </div>
              </div>
            )}

            {option.mode === 'rapid' && (
              <div className="mt-4">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all">
                  🎯 Rapid Bootstrap Project
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );

  const renderMobileLayout = () => (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
        <div className="text-center space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Transform idea → AI execution</h2>
          <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded">
            <p className="text-sm text-foreground font-medium">── YOUR STRATEGIC ROLE ──</p>
            <p className="text-sm text-muted-foreground mt-1">Research → Plan → Direct AI</p>
          </div>
          <p className="text-sm text-muted-foreground">Choose your approach:</p>
        </div>
      </div>

      <div className="space-y-4">{bootstrapOptions.map(renderBootstrapOption)}</div>

      <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
        <h3 className="font-medium text-foreground mb-3">── CONTEXT EXAMPLES ──</h3>
        <div className="space-y-2">
          {contextExamples.map((example, index) => (
            <div key={index} className="text-sm">
              <span className="font-medium text-foreground">{example.type}:</span>
              <p className="text-muted-foreground">{example.flow}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            💡 Every choice creates context that flows to AI agents
          </p>
        </div>
      </div>
    </div>
  );

  const renderDesktopLayout = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          🚀 STARTING FROM NOTHING - Transform Idea to AI-Powered Execution
        </h2>
        <p className="text-lg text-muted-foreground">
          Your Strategic Role: Research → Plan → Direct AI Agents
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Choose Your Bootstrap Approach</h2>
          <div className="space-y-4">{bootstrapOptions.map(renderBootstrapOption)}</div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              💡 CONTEXT INTELLIGENCE EXAMPLES
            </h3>

            <div className="space-y-4">
              {contextExamples.map((example, index) => (
                <div key={index} className="p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-medium text-foreground">{example.type}:</h4>
                  <p className="text-sm text-muted-foreground">{example.flow}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h4 className="font-medium text-foreground mb-2">Every Strategic Choice:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Creates context for AI agents</li>
                <li>• Flows to implementation tasks</li>
                <li>• Compounds project intelligence</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">🎮 BOOTSTRAP ACTIONS</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2">Task Master Integration:</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button className="px-3 py-2 bg-accent hover:bg-accent/80 text-accent-foreground rounded text-sm transition-colors">
                    📋 tm init
                  </button>
                  <button className="px-3 py-2 bg-accent hover:bg-accent/80 text-accent-foreground rounded text-sm transition-colors">
                    📝 tm parse-prd
                  </button>
                  <button className="px-3 py-2 bg-accent hover:bg-accent/80 text-accent-foreground rounded text-sm transition-colors">
                    🔧 tm expand-all
                  </button>
                  <button className="px-3 py-2 bg-accent hover:bg-accent/80 text-accent-foreground rounded text-sm transition-colors">
                    📊 tm analyze
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-medium text-foreground mb-2">Context Building:</h4>
                <p className="text-sm text-muted-foreground">
                  AI learns your patterns and preferences to suggest better structures and
                  approaches
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              📊 PROJECT INTELLIGENCE PREVIEW
            </h3>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                As you make strategic choices, the system builds intelligence:
              </p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Architecture patterns you prefer</li>
                <li>• Research approaches that work</li>
                <li>• Implementation styles you like</li>
                <li>• Quality standards you enforce</li>
              </ul>
              <div className="pt-2 border-t border-border">
                <p className="text-foreground font-medium">Every Project Teaches:</p>
                <p className="text-muted-foreground">
                  The system to be a better orchestration partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return viewMode === 'mobile' ? renderMobileLayout() : renderDesktopLayout();
}
