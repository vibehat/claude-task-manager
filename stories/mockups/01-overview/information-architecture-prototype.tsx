import React from 'react';

interface InformationArchitecturePrototypeProps {}

export default function InformationArchitecturePrototype({}: InformationArchitecturePrototypeProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Global Navigation */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-semibold text-foreground">Task Master</h1>

              {/* Primary navigation */}
              <div className="hidden md:flex items-center gap-6">
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  Dashboard
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/40"></div>
                  Tasks
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/40"></div>
                  Working
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/40"></div>
                  My Works
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/40"></div>
                  Notes
                </a>
              </div>
            </div>

            {/* Global search */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search across all content..."
                  className="w-64 px-4 py-2 bg-secondary rounded-lg text-sm border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                <div className="absolute right-3 top-2.5">
                  <span className="text-xs text-muted-foreground">/</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb navigation */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="#" className="hover:text-foreground transition-colors">
            Dashboard
          </a>
          <span>→</span>
          <span className="text-foreground">Information Architecture</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Primary content hierarchy */}
          <section className="lg:col-span-3 space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Content Organization</h1>
              <p className="text-muted-foreground mb-6">
                Demonstrating hierarchical information structure and cross-cutting concerns
              </p>
            </div>

            {/* Dashboard section */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                Dashboard (Entry Point)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Today's Focus</h3>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                      Build authentication system
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                      Review API documentation
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Recent Activity</h3>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      Completed: User registration flow
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Updated: Database schema notes
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors">
                      + Create new task
                    </button>
                    <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors">
                      + Add quick note
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tasks section with hierarchy */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                Tasks (Task Management)
              </h2>

              <div className="space-y-4">
                {/* Task with full context model */}
                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-secondary/30 p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="font-medium text-foreground">
                          E-commerce Platform Development
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Build comprehensive online store with user management and payment
                          processing
                        </p>

                        {/* Metadata display */}
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>ID: #2023-001</span>
                          <span>Created: Nov 15</span>
                          <span>Due: Dec 31</span>
                          <span>Assignee: Development Team</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                          <span className="text-xs text-muted-foreground">High Priority</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                          <span className="text-xs text-muted-foreground">In Progress</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Context tabs representation */}
                  <div className="border-t border-border">
                    <div className="flex items-center gap-1 p-2 bg-secondary/10">
                      <button className="px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded">
                        Description
                      </button>
                      <button className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground">
                        Notes (3)
                      </button>
                      <button className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground">
                        Files (7)
                      </button>
                      <button className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground">
                        History
                      </button>
                    </div>
                  </div>

                  {/* Subtasks and dependencies */}
                  <div className="p-4 space-y-3">
                    <h4 className="text-sm font-medium text-foreground">Subtasks & Dependencies</h4>
                    <div className="ml-4 space-y-2">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="h-4 w-px bg-muted-foreground/40"></div>
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                        <span className="text-foreground">User Authentication System</span>
                        <span className="text-muted-foreground">- Completed</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="h-4 w-px bg-muted-foreground/40"></div>
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                        <span className="text-foreground">Product Catalog</span>
                        <span className="text-muted-foreground">
                          - In Progress (depends on Auth)
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="h-4 w-px bg-muted-foreground/40"></div>
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
                        <span className="text-muted-foreground">Payment Integration</span>
                        <span className="text-muted-foreground">
                          - Blocked (depends on Catalog)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cross-cutting concerns */}
            <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-4">Cross-Cutting Concerns</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground">Tags & Organization</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded text-xs">
                      Backend
                    </span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded text-xs">
                      Frontend
                    </span>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded text-xs">
                      Database
                    </span>
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded text-xs">
                      API
                    </span>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    Horizontal organization across all content types
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-foreground">Time-based Views</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">This Week</span>
                      <span className="text-muted-foreground">12 tasks</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">This Month</span>
                      <span className="text-muted-foreground">45 tasks</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">This Quarter</span>
                      <span className="text-muted-foreground">120 tasks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar - Contextual navigation */}
          <aside className="space-y-6">
            {/* Related items navigation */}
            <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
              <h3 className="font-medium text-foreground mb-3">Related Items</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  → Authentication Notes
                </a>
                <a
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  → API Documentation
                </a>
                <a
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  → User Flow Diagrams
                </a>
                <a
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  → Database Schema
                </a>
              </div>
            </div>

            {/* Recent items */}
            <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
              <h3 className="font-medium text-foreground mb-3">Recent Items</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <div className="text-sm text-foreground">User Login Flow</div>
                    <div className="text-xs text-muted-foreground">Task • 2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <div className="text-sm text-foreground">JWT Implementation</div>
                    <div className="text-xs text-muted-foreground">Note • 4 hours ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2"></div>
                  <div>
                    <div className="text-sm text-foreground">Security Checklist</div>
                    <div className="text-xs text-muted-foreground">File • Yesterday</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick actions contextual */}
            <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
              <h3 className="font-medium text-foreground mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  + Add related task
                </button>
                <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  + Create linked note
                </button>
                <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  + Attach file
                </button>
                <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                  ⌨ View shortcuts
                </button>
              </div>
            </div>

            {/* Search facets */}
            <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
              <h3 className="font-medium text-foreground mb-3">Filter & Browse</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground mb-2">BY STATUS</h4>
                  <div className="space-y-1">
                    <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5">
                      In Progress (23)
                    </button>
                    <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5">
                      To Do (45)
                    </button>
                    <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5">
                      Done (128)
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-medium text-muted-foreground mb-2">BY TYPE</h4>
                  <div className="space-y-1">
                    <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5">
                      Tasks (196)
                    </button>
                    <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5">
                      Notes (84)
                    </button>
                    <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5">
                      Files (42)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
