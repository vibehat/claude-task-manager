import React, { useState } from 'react';

interface PageTemplatesProps {
  activeTemplate?: 'list' | 'detail' | 'dashboard' | 'form';
  showResponsive?: boolean;
}

export default function PageTemplates({
  activeTemplate = 'list',
  showResponsive = false,
}: PageTemplatesProps) {
  const [currentTemplate, setCurrentTemplate] = useState(activeTemplate);

  const templates = [
    { id: 'list', name: 'List/Table View', icon: '📋' },
    { id: 'detail', name: 'Detail View', icon: '📄' },
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'form', name: 'Form/Creation', icon: '✏️' },
  ];

  const renderBaseLayout = (content: React.ReactNode) => (
    <div className="min-h-screen bg-background">
      {/* Global Header */}
      <header className="h-15 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground text-sm">
            TM
          </div>
          <span className="font-semibold text-foreground">Task Master</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-64 px-3 py-2 bg-background border border-border rounded-lg text-sm"
            />
            <span className="absolute right-3 top-2.5 text-muted-foreground text-sm">🔍</span>
          </div>
          <button className="p-2 text-muted-foreground hover:text-foreground">🔔</button>
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <span className="text-accent-foreground text-sm">👤</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-60 bg-card border-r border-border">
          <nav className="p-4 space-y-2">
            <div className="flex items-center gap-3 p-3 bg-accent text-accent-foreground rounded-lg">
              <span>🎯</span>
              <span className="font-medium">Right Now</span>
              <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                2
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 text-muted-foreground hover:bg-accent/50 rounded-lg">
              <span>📝</span>
              <span className="font-medium">My Work</span>
              <span className="ml-auto text-xs">12</span>
            </div>
            <div className="flex items-center gap-3 p-3 text-muted-foreground hover:bg-accent/50 rounded-lg">
              <span>📚</span>
              <span className="font-medium">Notes</span>
            </div>
            <div className="flex items-center gap-3 p-3 text-muted-foreground hover:bg-accent/50 rounded-lg">
              <span>🔍</span>
              <span className="font-medium">Overview</span>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1">{content}</div>
      </div>
    </div>
  );

  const renderListTemplate = () =>
    renderBaseLayout(
      <div className="p-6">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-foreground">Tasks</h1>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90">
              + New Task
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            <select className="px-3 py-2 bg-background border border-border rounded-lg text-sm">
              <option>All</option>
            </select>
            <select className="px-3 py-2 bg-background border border-border rounded-lg text-sm">
              <option>Status</option>
            </select>
            <select className="px-3 py-2 bg-background border border-border rounded-lg text-sm">
              <option>Priority</option>
            </select>
            <div className="flex-1 relative">
              <input
                type="search"
                placeholder="Search tasks..."
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm"
              />
              <span className="absolute right-3 top-2.5 text-muted-foreground text-sm">🔍</span>
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-5 h-5 border-2 border-border rounded"></div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">Implement authentication</h3>
                  <p className="text-sm text-muted-foreground">Due: Aug 15 • #backend</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Progress</div>
                  <div className="text-sm font-medium">45%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Priority</div>
                  <span className="text-sm font-medium text-red-600 dark:text-red-400">High</span>
                </div>
                <button className="p-2 text-muted-foreground hover:text-foreground">•••</button>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-5 h-5 border-2 border-border rounded"></div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">Design user dashboard</h3>
                  <p className="text-sm text-muted-foreground">Due: Aug 20 • #frontend</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">To Do</div>
                  <div className="text-sm font-medium">0%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Priority</div>
                  <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
                    Medium
                  </span>
                </div>
                <button className="p-2 text-muted-foreground hover:text-foreground">•••</button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 text-muted-foreground hover:text-foreground">←</button>
            <button className="px-3 py-2 bg-primary text-primary-foreground rounded">1</button>
            <button className="px-3 py-2 text-muted-foreground hover:text-foreground">2</button>
            <button className="px-3 py-2 text-muted-foreground hover:text-foreground">3</button>
            <span className="text-muted-foreground">...</span>
            <button className="px-3 py-2 text-muted-foreground hover:text-foreground">12</button>
            <button className="px-3 py-2 text-muted-foreground hover:text-foreground">→</button>
          </div>
          <select className="px-3 py-2 bg-background border border-border rounded-lg text-sm">
            <option>25 items per page</option>
          </select>
        </div>
      </div>
    );

  const renderDetailTemplate = () =>
    renderBaseLayout(
      <div className="p-6">
        {/* Navigation & Title */}
        <div className="mb-6">
          <button className="text-muted-foreground hover:text-foreground mb-4 flex items-center gap-2">
            <span>←</span> Back to Tasks
          </button>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-foreground">[Task 1.2.1] JWT Implementation</h1>
            <button className="p-2 text-muted-foreground hover:text-foreground">⚡</button>
          </div>

          {/* Status Bar */}
          <div className="flex items-center gap-6 text-sm">
            <span className="text-muted-foreground">
              Status:{' '}
              <span className="text-orange-600 dark:text-orange-400 font-medium">In Progress</span>
            </span>
            <span className="text-muted-foreground">
              Priority: <span className="text-red-600 dark:text-red-400 font-medium">High</span>
            </span>
            <span className="text-muted-foreground">
              Due: <span className="font-medium">Aug 15</span>
            </span>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-semibold text-foreground mb-4">Description & Requirements</h2>
              <p className="text-muted-foreground mb-4">
                Implement JWT-based authentication system with secure token handling and refresh
                mechanism.
              </p>

              {/* Tabbed Content */}
              <div className="mt-6">
                <div className="flex gap-4 border-b border-border">
                  <button className="px-4 py-2 font-medium text-foreground border-b-2 border-primary">
                    Notes
                  </button>
                  <button className="px-4 py-2 text-muted-foreground hover:text-foreground">
                    Files
                  </button>
                  <button className="px-4 py-2 text-muted-foreground hover:text-foreground">
                    Tests
                  </button>
                  <button className="px-4 py-2 text-muted-foreground hover:text-foreground">
                    Code
                  </button>
                </div>

                <div className="mt-4 bg-secondary/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    Implementation notes and research findings...
                  </p>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center gap-3">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 flex items-center gap-2">
                <span>🏃</span> Start Work
              </button>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 flex items-center gap-2">
                <span>✅</span> Complete
              </button>
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary/80 flex items-center gap-2">
                <span>⏸️</span> Pause
              </button>
              <button className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent/80 flex items-center gap-2">
                <span>🔄</span> Sync
              </button>
            </div>
          </div>

          {/* Context Panel */}
          <div className="w-72 space-y-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3">📝 Notes (3)</h3>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground p-2 bg-secondary/30 rounded">
                  Research findings on JWT security
                </div>
                <div className="text-sm text-muted-foreground p-2 bg-secondary/30 rounded">
                  Implementation approach
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3">📁 Files (7)</h3>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground p-2 bg-secondary/30 rounded">
                  auth.spec.js
                </div>
                <div className="text-sm text-muted-foreground p-2 bg-secondary/30 rounded">
                  jwt-utils.ts
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3">💬 Conversations (2)</h3>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground p-2 bg-secondary/30 rounded">
                  Security review discussion
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3">📊 Progress</h3>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">45% complete</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3">🔗 Dependencies (1)</h3>
              <div className="text-sm text-muted-foreground p-2 bg-secondary/30 rounded">
                Task 1.2.0: Database setup
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  const renderDashboardTemplate = () =>
    renderBaseLayout(
      <div className="p-6">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>🗓️</span>
            <span>Today, Aug 7</span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Primary Widgets Row */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span>🎯</span> Working On
              </h3>
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">JWT Implementation</h4>
                <p className="text-muted-foreground">45% complete</p>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span>⏱️</span> Focus Timer
              </h3>
              <div className="text-center space-y-4">
                <div className="text-3xl font-mono font-bold text-foreground">25:00</div>
                <div className="flex gap-2 justify-center">
                  <button className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm">
                    ⏸️ Pause
                  </button>
                  <button className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm">
                    ✅ Done
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">Stats</h3>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-foreground">3/7</div>
                <div className="text-sm text-muted-foreground">tasks done</div>
                <div className="text-lg font-semibold text-foreground">4.5 hrs</div>
                <div className="text-sm text-muted-foreground">focused today</div>
              </div>
            </div>
          </div>

          {/* Full Width Widget */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span>📈</span> Recent Activity
            </h3>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                • 2 min ago: Added note to Task 1.2.1
              </div>
              <div className="text-sm text-muted-foreground">
                • 15 min ago: Completed research phase
              </div>
              <div className="text-sm text-muted-foreground">
                • 1h ago: Started working on Task 1.2.1
              </div>
            </div>
          </div>

          {/* Split Widgets Row */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span>⛔</span> Blocked (2)
              </h3>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground p-2 bg-secondary/30 rounded">
                  API Integration
                </div>
                <div className="text-sm text-muted-foreground p-2 bg-secondary/30 rounded">
                  Email Templates
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span>💡</span> Quick Capture
              </h3>
              <textarea
                placeholder="Add idea or note..."
                className="w-full h-20 p-3 bg-background border border-border rounded-lg text-sm resize-none"
              ></textarea>
              <button className="mt-2 bg-primary text-primary-foreground px-3 py-1 rounded text-sm">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );

  const renderFormTemplate = () =>
    renderBaseLayout(
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Create New Task</h1>
          <div className="flex gap-3">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90">
              Save
            </button>
            <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary/80">
              Cancel
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Main Form */}
          <div className="flex-1 bg-card border border-border rounded-lg p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Title</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg"
                  placeholder="Enter task title..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Description
                </label>
                <div className="bg-background border border-border rounded-lg p-3 min-h-32">
                  <p className="text-muted-foreground text-sm">[Rich text editor]</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Priority</label>
                  <select className="w-full px-3 py-2 bg-background border border-border rounded-lg">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Due Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg"
                    defaultValue="2025-08-15"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tags</label>
                <div className="flex gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                    #auth
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                    #backend
                  </span>
                  <input
                    type="text"
                    placeholder="Add tag..."
                    className="px-2 py-1 bg-background border border-border rounded text-sm flex-1 max-w-32"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Assistance */}
          <div className="w-80 space-y-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span>📝</span> Templates
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground p-2 hover:bg-accent/50 rounded">
                  • Bug Report
                </button>
                <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground p-2 hover:bg-accent/50 rounded">
                  • Feature Request
                </button>
                <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground p-2 hover:bg-accent/50 rounded">
                  • Research Task
                </button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span>🏷️</span> Suggested Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                <button className="bg-secondary/50 text-secondary-foreground px-2 py-1 rounded text-sm hover:bg-secondary">
                  #backend
                </button>
                <button className="bg-secondary/50 text-secondary-foreground px-2 py-1 rounded text-sm hover:bg-secondary">
                  #auth
                </button>
                <button className="bg-secondary/50 text-secondary-foreground px-2 py-1 rounded text-sm hover:bg-secondary">
                  #jwt
                </button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span>🤖</span> AI Assistance
              </h3>
              <div className="space-y-2">
                <button className="w-full bg-primary text-primary-foreground py-2 px-3 rounded text-sm hover:bg-primary/90">
                  Generate Description
                </button>
                <button className="w-full bg-secondary text-secondary-foreground py-2 px-3 rounded text-sm hover:bg-secondary/80">
                  Suggest Subtasks
                </button>
                <button className="w-full bg-accent text-accent-foreground py-2 px-3 rounded text-sm hover:bg-accent/80">
                  Find Dependencies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  const renderMobileView = () => {
    if (currentTemplate === 'list') {
      return (
        <div className="max-w-sm mx-auto bg-background min-h-screen">
          <header className="bg-card border-b border-border p-4">
            <h1 className="font-semibold text-foreground">Tasks</h1>
          </header>

          <div className="p-4 space-y-3">
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-medium text-foreground">Auth System</h3>
              <p className="text-sm text-muted-foreground">Progress: 45%</p>
              <div className="text-sm text-muted-foreground">High • Aug 15</div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 bg-primary text-primary-foreground py-1 px-3 rounded text-sm">
                  View
                </button>
                <button className="flex-1 bg-secondary text-secondary-foreground py-1 px-3 rounded text-sm">
                  Edit
                </button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-medium text-foreground">Dashboard</h3>
              <p className="text-sm text-muted-foreground">To Do • 0%</p>
              <div className="text-sm text-muted-foreground">Med • Aug 20</div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 bg-primary text-primary-foreground py-1 px-3 rounded text-sm">
                  View
                </button>
                <button className="flex-1 bg-secondary text-secondary-foreground py-1 px-3 rounded text-sm">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentTemplate === 'detail') {
      return (
        <div className="max-w-sm mx-auto bg-background min-h-screen">
          <header className="bg-card border-b border-border p-4">
            <button className="text-muted-foreground">← JWT Auth</button>
          </header>

          <div className="p-4 space-y-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="text-sm text-muted-foreground mb-2">Status: In Progress</div>
              <div className="text-sm text-muted-foreground mb-2">Priority: High</div>
              <div className="text-sm text-muted-foreground">Due: Aug 15</div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-medium text-foreground mb-2">[Description]</h3>
              <p className="text-sm text-muted-foreground">JWT implementation details...</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <button className="w-full text-left font-medium text-foreground mb-2 flex items-center justify-between">
                📝 Notes (3) <span>▼</span>
              </button>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <button className="w-full text-left font-medium text-foreground mb-2 flex items-center justify-between">
                📁 Files (7) <span>▼</span>
              </button>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-primary text-primary-foreground py-2 rounded">
                Start
              </button>
              <button className="flex-1 bg-secondary text-secondary-foreground py-2 rounded">
                Done
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-sm mx-auto bg-background min-h-screen">
        <div className="p-4 text-center text-muted-foreground">
          Mobile view for {currentTemplate} template
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Template Selector */}
      <div className="mb-6 p-4 bg-card border border-border rounded-lg">
        <h2 className="font-semibold text-foreground mb-4">Page Template Examples</h2>
        <div className="flex gap-2 mb-4">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => setCurrentTemplate(template.id as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentTemplate === template.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {template.icon} {template.name}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showResponsive}
            onChange={(e) => setShowResponsive(e.target.checked)}
            className="rounded"
          />
          <span className="text-sm text-muted-foreground">Show mobile responsive view</span>
        </label>
      </div>

      {/* Template Display */}
      {showResponsive ? (
        <div className="bg-secondary/30 p-8 rounded-lg">
          <h3 className="font-medium text-center text-foreground mb-4">
            Mobile View ({currentTemplate})
          </h3>
          {renderMobileView()}
        </div>
      ) : (
        <div className="border border-border rounded-lg overflow-hidden">
          {currentTemplate === 'list' && renderListTemplate()}
          {currentTemplate === 'detail' && renderDetailTemplate()}
          {currentTemplate === 'dashboard' && renderDashboardTemplate()}
          {currentTemplate === 'form' && renderFormTemplate()}
        </div>
      )}
    </div>
  );
}
