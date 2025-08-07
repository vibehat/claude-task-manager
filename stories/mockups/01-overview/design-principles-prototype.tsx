import React from 'react';

interface DesignPrinciplesPrototypeProps {}

export default function DesignPrinciplesPrototype({}: DesignPrinciplesPrototypeProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header demonstrating visual hierarchy */}
      <header className="bg-card border-b border-border px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-foreground">Task Master</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Design principles in action - Progressive disclosure and emotional design
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Progressive Disclosure Demo */}
          <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">Progressive Disclosure</h2>

            {/* Level 1 - Essential Info Only */}
            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-foreground">Build Authentication System</h3>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span className="text-xs text-muted-foreground">High</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Due: Tomorrow</p>
              </div>

              {/* Expandable details - Level 2 */}
              <details className="bg-secondary/50 rounded-lg">
                <summary className="p-4 cursor-pointer hover:bg-secondary/70 transition-colors">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-foreground">Design User Dashboard</h3>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-xs text-muted-foreground">Medium</span>
                    </div>
                  </div>
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    Create wireframes and user interface mockups for the main dashboard
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-accent rounded text-xs">UI/UX</span>
                    <span className="px-2 py-1 bg-accent rounded text-xs">Design</span>
                  </div>
                </div>
              </details>

              {/* Full context - Level 3 */}
              <details className="bg-secondary/50 rounded-lg">
                <summary className="p-4 cursor-pointer hover:bg-secondary/70 transition-colors">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-foreground">API Integration Testing</h3>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-muted-foreground">Low</span>
                    </div>
                  </div>
                </summary>
                <div className="px-4 pb-4 space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Comprehensive testing of all API endpoints including error handling and edge
                    cases
                  </p>

                  {/* Full context information */}
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-muted-foreground">Assignee:</span>
                      <p className="font-medium">John Doe</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Estimate:</span>
                      <p className="font-medium">8 hours</p>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-accent rounded text-xs">Testing</span>
                    <span className="px-2 py-1 bg-accent rounded text-xs">API</span>
                    <span className="px-2 py-1 bg-accent rounded text-xs">QA</span>
                  </div>

                  {/* Progress indicator */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-muted-foreground">75%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* Emotional Design Demo */}
          <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">Emotional Design</h2>

            {/* Celebration micro-interaction */}
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-green-800 dark:text-green-200">
                      Task Completed!
                    </h3>
                    <p className="text-sm text-green-600 dark:text-green-300">
                      Great work on finishing the user authentication system 🎉
                    </p>
                  </div>
                </div>
              </div>

              {/* Encouraging next steps */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">What's Next?</h3>
                <p className="text-sm text-blue-600 dark:text-blue-300 mb-3">
                  Ready to tackle your next priority task?
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Start Next Task
                </button>
              </div>

              {/* Safe exploration area */}
              <div className="border border-dashed border-muted-foreground/40 rounded-lg p-4">
                <h3 className="font-medium text-muted-foreground mb-2">Safe to Explore</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Try out features without worry - everything can be undone
                </p>
                <div className="flex gap-2">
                  <button className="text-xs px-3 py-1 border border-border rounded hover:bg-accent transition-colors">
                    Undo
                  </button>
                  <button className="text-xs px-3 py-1 border border-border rounded hover:bg-accent transition-colors">
                    Redo
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Visual Task Flow Demo */}
          <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">Visual Task Flow</h2>

            {/* Task hierarchy visualization */}
            <div className="space-y-3">
              {/* Parent task */}
              <div className="bg-secondary/50 rounded-lg p-3 border-l-4 border-blue-500">
                <h3 className="font-medium text-foreground">E-commerce Platform</h3>
                <p className="text-sm text-muted-foreground">Main project initiative</p>
              </div>

              {/* Child tasks with visual connections */}
              <div className="ml-4 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-2 w-4 h-px bg-muted-foreground/40"></div>
                  <div className="bg-secondary/30 rounded-lg p-3 flex-1 border-l-2 border-green-400">
                    <h4 className="text-sm font-medium text-foreground">User Authentication ✓</h4>
                    <p className="text-xs text-muted-foreground">Completed</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-2 w-4 h-px bg-muted-foreground/40"></div>
                  <div className="bg-secondary/30 rounded-lg p-3 flex-1 border-l-2 border-orange-400">
                    <h4 className="text-sm font-medium text-foreground">Product Catalog</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div
                          className="bg-orange-400 h-1.5 rounded-full"
                          style={{ width: '60%' }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">60%</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-2 w-4 h-px bg-muted-foreground/40"></div>
                  <div className="bg-secondary/30 rounded-lg p-3 flex-1 border-l-2 border-muted-foreground/40">
                    <h4 className="text-sm font-medium text-muted-foreground">Payment System</h4>
                    <p className="text-xs text-muted-foreground">Blocked by API access</p>
                  </div>
                </div>
              </div>

              {/* Drag and drop indicator */}
              <div className="mt-4 p-3 border border-dashed border-muted-foreground/40 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  Drag tasks to reorganize or change status
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Color Psychology Demonstration */}
        <section className="mt-8 bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground mb-6">Color Psychology in Action</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Progress colors */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Progress States</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-green-800 dark:text-green-200">Complete</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-blue-800 dark:text-blue-200">In Progress</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-800">
                  <div className="h-3 w-3 rounded-full bg-gray-400"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Pending</span>
                </div>
              </div>
            </div>

            {/* Priority indicators */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Priority Levels</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span className="text-sm text-red-800 dark:text-red-200">High Priority</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
                  <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm text-orange-800 dark:text-orange-200">Medium</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-blue-800 dark:text-blue-200">Low Priority</span>
                </div>
              </div>
            </div>

            {/* Emotional tone colors */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Emotional Tone</h3>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/40 dark:to-blue-900/40">
                  <span className="text-sm font-medium text-foreground">Encouraging</span>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40">
                  <span className="text-sm font-medium text-foreground">Creative</span>
                </div>
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-100 to-gray-100 dark:from-blue-900/40 dark:to-gray-900/40">
                  <span className="text-sm font-medium text-foreground">Professional</span>
                </div>
              </div>
            </div>

            {/* Accessibility considerations */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Accessibility</h3>
              <div className="space-y-2">
                <div className="p-3 rounded-lg border border-border">
                  <span className="text-sm text-foreground">High Contrast</span>
                  <div className="mt-1 text-xs text-muted-foreground">WCAG AAA compliant</div>
                </div>
                <div className="p-3 rounded-lg border border-border">
                  <span className="text-sm text-foreground">Color + Shape</span>
                  <div className="mt-1 text-xs text-muted-foreground">Never color alone</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
