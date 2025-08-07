import { useState } from 'react';
import Image from 'next/image';

interface AppLayoutProps {
  sidebarCollapsed?: boolean;
  panelConfiguration?: 'single' | 'two-panel' | 'three-panel';
  activeSection?: string;
  showMobileOverlay?: boolean;
}

export default function AppLayout({
  sidebarCollapsed = false,
  panelConfiguration = 'two-panel',
  activeSection = 'tasks',
  showMobileOverlay = false,
}: AppLayoutProps) {
  const [collapsed, setCollapsed] = useState(sidebarCollapsed);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(showMobileOverlay);

  const navigationSections = [
    {
      id: 'right-now',
      icon: '🎯',
      title: 'Right Now',
      badge: 2,
      children: ['Working On', 'Up Next'],
    },
    {
      id: 'my-work',
      icon: '📝',
      title: 'My Work',
      badge: 12,
      children: ['To Do', 'In Progress', 'Done'],
    },
    { id: 'notes', icon: '📚', title: 'Notes', children: ['Browse', 'Create'] },
    { id: 'overview', icon: '🔍', title: 'Overview', children: ['Big Picture', 'Planning'] },
    { id: 'ai-helper', icon: '🤖', title: 'AI Helper', children: ['History', 'Settings'] },
    { id: 'preferences', icon: '⚙️', title: 'Preferences', children: ['Project', 'Personal'] },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full">
        {/* Sidebar */}
        <aside
          className={`${collapsed ? 'w-16' : 'w-60'} transition-all duration-300 bg-card border-r border-border flex flex-col`}
        >
          {/* Sidebar Header */}
          <div className="p-4 border-b border-border">
            {!collapsed ? (
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Logo" width={24} height={24} />
                <h1 className="text-lg font-semibold text-foreground">Task Manager</h1>
              </div>
            ) : (
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src="/logo.png" alt="Logo" width={20} height={20} />
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-2 space-y-1">
            {navigationSections.map((section) => (
              <div key={section.id}>
                <button
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-accent group ${
                    activeSection === section.id
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  <span className="text-lg">{section.icon}</span>
                  {!collapsed && (
                    <>
                      <span className="font-medium flex-1 text-left">{section.title}</span>
                      {section.badge && (
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                          {section.badge}
                        </span>
                      )}
                    </>
                  )}
                </button>

                {/* Sub-navigation */}
                {!collapsed && activeSection === section.id && section.children && (
                  <div className="ml-8 mt-2 space-y-1">
                    {section.children.map((child) => (
                      <button
                        key={child}
                        className="block w-full text-left p-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded"
                      >
                        {child}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Collapse Toggle */}
          <div className="p-4 border-t border-border">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="w-full flex items-center justify-center p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
            >
              {collapsed ? '»' : '«'} {!collapsed && 'Collapse'}
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="bg-card border-b border-border px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-semibold text-foreground">Task Management</h2>
                <nav className="text-sm text-muted-foreground">
                  <span>Tasks</span> <span className="mx-2">/</span> <span>Active Work</span>
                </nav>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search tasks..."
                    className="w-64 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <span className="absolute right-3 top-2.5 text-muted-foreground">🔍</span>
                </div>

                <button className="relative p-2 text-muted-foreground hover:text-foreground">
                  <span className="text-lg">🔔</span>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>

                <button className="p-2 text-muted-foreground hover:text-foreground">
                  <span className="text-lg">⚙️</span>
                </button>

                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">👤</span>
                </div>
              </div>
            </div>
          </header>

          {/* Content Panels */}
          <div className="flex-1 flex">
            {panelConfiguration === 'single' && (
              <main className="flex-1 p-6">
                <div className="bg-card rounded-xl border border-border p-6 h-full">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Single Panel View</h3>
                  <div className="space-y-4">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <h4 className="font-medium text-foreground">Build Authentication System</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        High priority task due tomorrow
                      </p>
                      <div className="mt-3 flex gap-2">
                        <span className="px-2 py-1 bg-red-500/20 text-red-700 dark:text-red-300 rounded text-xs">
                          High Priority
                        </span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded text-xs">
                          Development
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            )}

            {panelConfiguration === 'two-panel' && (
              <>
                <main className="flex-1 p-6">
                  <div className="bg-card rounded-xl border border-border p-6 h-full">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Primary Content Panel
                    </h3>
                    <div className="space-y-4">
                      {[
                        'Build Authentication System',
                        'Design User Dashboard',
                        'API Integration Testing',
                      ].map((task, index) => (
                        <div key={task} className="bg-secondary/50 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-foreground">{task}</h4>
                            <div className="flex items-center gap-2">
                              <div
                                className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-red-500' : index === 1 ? 'bg-blue-500' : 'bg-green-500'}`}
                              ></div>
                              <span className="text-xs text-muted-foreground">
                                {index === 0 ? 'High' : index === 1 ? 'Medium' : 'Low'}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {index === 0 && 'Due: Tomorrow'}
                            {index === 1 && 'In Progress - 60% complete'}
                            {index === 2 && 'Testing phase - 75% complete'}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </main>

                <aside className="w-80 p-6">
                  <div className="bg-card rounded-xl border border-border p-6 h-full">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Context Panel</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground">Recent Activity</h4>
                        <div className="space-y-2">
                          <div className="text-xs text-muted-foreground p-2 bg-secondary/30 rounded">
                            <span className="text-green-600 dark:text-green-400">Completed:</span>{' '}
                            User login flow
                          </div>
                          <div className="text-xs text-muted-foreground p-2 bg-secondary/30 rounded">
                            <span className="text-blue-600 dark:text-blue-400">Updated:</span> API
                            documentation
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </>
            )}

            {panelConfiguration === 'three-panel' && (
              <>
                <main className="flex-1 p-6">
                  <div className="bg-card rounded-xl border border-border p-6 h-full">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Main Content</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-secondary/50 rounded-lg p-4">
                        <h4 className="font-medium text-foreground">Active Sprint Dashboard</h4>
                        <div className="mt-3 grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                              8
                            </div>
                            <div className="text-xs text-muted-foreground">To Do</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                              5
                            </div>
                            <div className="text-xs text-muted-foreground">In Progress</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                              12
                            </div>
                            <div className="text-xs text-muted-foreground">Completed</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>

                <aside className="w-72 p-6">
                  <div className="bg-card rounded-xl border border-border p-6 h-full">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Notes & Files</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-secondary/30 rounded-lg">
                        <h4 className="text-sm font-medium">Project Notes</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Authentication requirements...
                        </p>
                      </div>
                      <div className="p-3 bg-secondary/30 rounded-lg">
                        <h4 className="text-sm font-medium">API Spec.pdf</h4>
                        <p className="text-xs text-muted-foreground mt-1">Updated 2 hours ago</p>
                      </div>
                    </div>
                  </div>
                </aside>

                <aside className="w-72 p-6">
                  <div className="bg-card rounded-xl border border-border p-6 h-full">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                    <div className="space-y-2">
                      <button className="w-full p-3 text-left bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                        + New Task
                      </button>
                      <button className="w-full p-3 text-left bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
                        📝 Quick Note
                      </button>
                      <button className="w-full p-3 text-left bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors">
                        🎯 Start Focus Timer
                      </button>
                    </div>
                  </div>
                </aside>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full flex flex-col">
        {/* Mobile Header */}
        <header className="bg-card border-b border-border px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground"
            >
              <span className="text-lg">☰</span>
            </button>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={20} height={20} />
              <h1 className="font-semibold text-foreground">Task Manager</h1>
            </div>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-sm">👤</span>
            </div>
          </div>
        </header>

        {/* Mobile Content */}
        <main className="flex-1 p-4 space-y-4">
          <div className="bg-card rounded-xl border border-border p-4">
            <h2 className="text-lg font-semibold text-foreground mb-3">🎯 Working On</h2>
            <div className="bg-secondary/50 rounded-lg p-4">
              <h3 className="font-medium text-foreground">Authentication</h3>
              <p className="text-sm text-muted-foreground">Task #5 • 45%</p>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium">
                  Details
                </button>
                <button className="flex-1 bg-secondary text-secondary-foreground py-2 rounded-lg text-sm font-medium">
                  Done
                </button>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-4">
            <h2 className="text-lg font-semibold text-foreground mb-3">Up Next (3)</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 text-sm">
                <span className="text-foreground">• Database schema</span>
              </div>
              <div className="flex items-center justify-between p-2 text-sm">
                <span className="text-foreground">• API endpoints</span>
              </div>
            </div>
            <button className="w-full mt-3 p-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium">
              View All
            </button>
          </div>
        </main>
      </div>

      {/* Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed left-0 top-0 bottom-0 w-72 bg-card border-r border-border">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Logo" width={20} height={20} />
                <h2 className="font-semibold text-foreground">Task Manager</h2>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </div>

            <nav className="p-4 space-y-2">
              {navigationSections.map((section) => (
                <div key={section.id}>
                  <button className="w-full flex items-center gap-3 p-3 rounded-lg text-left hover:bg-accent group">
                    <span className="text-lg">{section.icon}</span>
                    <span className="font-medium flex-1">{section.title}</span>
                    {section.badge && (
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        {section.badge}
                      </span>
                    )}
                  </button>

                  {section.children && (
                    <div className="ml-8 mt-2 space-y-1">
                      {section.children.map((child) => (
                        <button
                          key={child}
                          className="block w-full text-left p-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {child}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
