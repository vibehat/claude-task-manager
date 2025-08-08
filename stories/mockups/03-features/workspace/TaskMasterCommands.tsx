import React, { useState } from 'react';
export interface TaskMasterCommandsProps {}

export default function TaskMasterCommands({}: TaskMasterCommandsProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState<string>('core');

  const commandCategories = {
    core: {
      title: 'Task Master Commands',
      commands: [
        {
          icon: '📋',
          label: 'Get Task',
          command: 'tm show <id>',
          description: 'View task details',
        },
        {
          icon: '✅',
          label: 'Set Status',
          command: 'tm set-status <id> done',
          description: 'Update task status',
        },
        {
          icon: '🔧',
          label: 'Expand',
          command: 'tm expand <id>',
          description: 'Break into subtasks',
        },
        {
          icon: '📝',
          label: 'Update',
          command: 'tm update <id>',
          description: 'Modify task content',
        },
        { icon: '🔍', label: 'Next', command: 'tm next', description: 'Find next available task' },
      ],
    },
    orchestration: {
      title: 'Orchestration Commands',
      commands: [
        {
          icon: '🤖',
          label: 'Hand Off All',
          command: 'tm handoff --all',
          description: 'Let AI complete tasks',
        },
        {
          icon: '🔄',
          label: 'Review All',
          command: 'tm review --all',
          description: 'Check AI progress',
        },
        {
          icon: '📝',
          label: 'Batch Update',
          command: 'tm update --batch',
          description: 'Update multiple tasks',
        },
        { icon: '⚙️', label: 'Configure', command: 'tm config', description: 'Setup preferences' },
      ],
    },
    strategic: {
      title: 'Strategic Tools',
      commands: [
        {
          icon: '🔬',
          label: 'Research',
          command: 'tm research',
          description: 'AI-powered research',
        },
        {
          icon: '📋',
          label: 'Create PRD',
          command: 'tm create-prd',
          description: 'Generate requirements doc',
        },
        {
          icon: '🎯',
          label: 'Bootstrap',
          command: 'tm bootstrap',
          description: 'Quick project setup',
        },
        {
          icon: '📈',
          label: 'Analyze',
          command: 'tm analyze',
          description: 'Complexity assessment',
        },
      ],
    },
    sync: {
      title: 'Task Master Tools',
      commands: [
        { icon: '🔄', label: 'Sync Tasks', command: 'tm sync', description: 'Pull latest tasks' },
        { icon: '📋', label: 'Get Next', command: 'tm next', description: 'Next available task' },
        {
          icon: '🔧',
          label: 'Expand All',
          command: 'tm expand --all',
          description: 'Break down all tasks',
        },
        { icon: '📊', label: 'Analyze', command: 'tm analyze', description: 'Project complexity' },
      ],
    },
  };

  const renderCommandButton = (command: (typeof commandCategories.core.commands)[0]) => (
    <button
      key={command.command}
      className="w-full p-3 text-left bg-card hover:bg-accent border border-border rounded-lg transition-colors group"
      onClick={() => console.log(`Execute: ${command.command}`)}
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{command.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-foreground">{command.label}</span>
            <code className="text-xs bg-muted px-2 py-1 rounded font-mono text-muted-foreground group-hover:text-foreground transition-colors">
              {command.command}
            </code>
          </div>
          <p className="text-sm text-muted-foreground">{command.description}</p>
        </div>
      </div>
    </button>
  );

  const renderMobileLayout = () => (
    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="font-medium text-foreground mb-2">── TASK MASTER COMMANDS ──</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(commandCategories).map(([key, category]) => (
              <button
                key={key}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  selectedCategory === key
                    ? 'bg-blue-500 text-white'
                    : 'bg-accent hover:bg-accent/80 text-accent-foreground'
                }`}
                onClick={() => setSelectedCategory(key)}
              >
                {category.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          {commandCategories[selectedCategory as keyof typeof commandCategories].commands.map(
            renderCommandButton
          )}
        </div>
      </div>
    </div>
  );

  const renderDesktopLayout = () => (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-foreground">🎮 ORCHESTRATION COMMANDS</h2>

        <div className="space-y-6">
          {Object.entries(commandCategories).map(([key, category]) => (
            <div key={key}>
              <h3 className="font-medium text-foreground mb-3">{category.title}:</h3>
              <div className="space-y-2">{category.commands.map(renderCommandButton)}</div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <h3 className="font-medium text-foreground mb-3">CLI Integration:</h3>
          <div className="p-4 bg-secondary/30 rounded-lg border border-dashed border-muted-foreground/40">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-mono text-muted-foreground">$</span>
              <code className="text-sm font-mono text-foreground">task-master</code>
            </div>
            <p className="text-xs text-muted-foreground">
              All commands available through CLI or MCP integration
            </p>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
            💡 Pro Tip: Command Shortcuts
          </h4>
          <div className="text-sm text-green-700 dark:text-green-300 space-y-1">
            <div>
              <kbd className="bg-green-100 dark:bg-green-900/40 px-1 rounded">Ctrl+K</kbd> Command
              palette
            </div>
            <div>
              <kbd className="bg-green-100 dark:bg-green-900/40 px-1 rounded">Ctrl+N</kbd> Next task
            </div>
            <div>
              <kbd className="bg-green-100 dark:bg-green-900/40 px-1 rounded">Ctrl+R</kbd> Research
              mode
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return renderDesktopLayout();
}
