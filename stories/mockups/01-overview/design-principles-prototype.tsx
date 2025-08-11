import React from 'react';

interface DesignPrinciplesPrototypeProps {}

export default function DesignPrinciplesPrototype({}: DesignPrinciplesPrototypeProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header demonstrating context-first design */}
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="flex h-14 items-center px-6 max-w-7xl mx-auto">
          <h1 className="text-lg font-semibold">Claude Task Manager</h1>
          <div className="ml-auto flex items-center gap-2">
            {/* Context quality indicator */}
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground">Context:</span>
              <span className="text-yellow-400">★★★★</span>
              <span className="text-gray-300">★</span>
              <span className="text-xs text-muted-foreground">(4/5)</span>
            </div>
            {/* AI status indicator */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="font-medium text-blue-700">Claude Active</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Context-First Design Demo */}
          <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-6">Context-First Design</h2>

            {/* Complete Task Card with Context Quality */}
            <div className="p-4 space-y-3 rounded-lg border bg-card hover:shadow-md transition-all duration-200 ring-2 ring-blue-200 dark:ring-blue-800 bg-blue-50/50 dark:bg-blue-900/10">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium">User Authentication System</h3>
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 px-2 py-1 rounded-md text-xs font-medium">
                  <svg className="w-3 h-3 mr-1 inline" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Ready for AI
                </span>
              </div>

              <p className="text-sm text-muted-foreground">
                Implement JWT-based authentication with secure password hashing and session
                management
              </p>

              <div className="flex items-center gap-1">
                <span className="text-xs text-muted-foreground">Context Quality:</span>
                <span className="text-yellow-400">★★★★</span>
                <span className="text-gray-300">★</span>
                <span className="text-xs text-muted-foreground">(4/5)</span>
              </div>

              <div className="flex gap-2">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Hand off to AI
                </button>
                <button className="border border-input hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Add Context
                </button>
              </div>
            </div>

            {/* Context Handoff Visualization */}
            <div className="border rounded-lg p-4 space-y-3 mt-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
                <span className="text-sm font-medium">Handing off to Claude</span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              {/* Checklist */}
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Project context packaged
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Requirements analyzed
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                  AI agent initializing...
                </li>
              </ul>
            </div>
          </section>

          {/* AI-Specific UI Patterns */}
          <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              AI Collaboration Patterns
            </h2>

            {/* AI Activity Indicator */}
            <div className="bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2 text-sm mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="font-medium">Claude Active</span>
                <span className="text-xs text-muted-foreground ml-auto">2m ago</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Implementing authentication middleware and JWT token validation...
              </p>
              <div className="w-full bg-muted rounded-full h-1 mt-2">
                <div className="bg-green-500 h-1 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>

            {/* Collaborative Progress Tracking */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Implementation Progress</span>
                <span className="text-sm text-muted-foreground">65%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-primary h-3 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span className="text-blue-700 dark:text-blue-300">Human Planning: Complete</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">AI Execution: 65%</span>
                </div>
              </div>
            </div>

            {/* Navigation Items with Badges */}
            <nav className="space-y-1">
              <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>Working On</span>
                <span className="ml-auto bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                  3
                </span>
              </a>
              <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>AI Handoffs</span>
                <span className="ml-auto bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                  2
                </span>
              </a>
              <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span>Completed</span>
                <span className="ml-auto bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300 text-xs px-2 py-1 rounded-full">
                  12
                </span>
              </a>
            </nav>
          </section>
        </div>

        {/* Color System Demonstration */}
        <section className="mt-8 bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            AI Collaboration Color System
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Human Strategic Elements */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Human Strategic</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span className="text-sm font-medium">Planning Phase</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                  <span className="text-sm font-medium">Context Review</span>
                </div>
              </div>
            </div>

            {/* AI Execution Status */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">AI Execution</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-sm font-medium">AI Working</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
                  <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Processing</span>
                </div>
              </div>
            </div>

            {/* Successful Collaboration */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Success</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300 border border-green-200 dark:border-green-800">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-sm font-medium">Completed</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300 border border-green-200 dark:border-green-800">
                  <span className="text-sm font-medium">🎉 Handoff Success</span>
                </div>
              </div>
            </div>

            {/* Context Quality Issues */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Context Issues</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                  </svg>
                  <span className="text-sm font-medium">Low Context</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800">
                  <span className="text-yellow-400">★★</span>
                  <span className="text-gray-300">★★★</span>
                  <span className="text-sm font-medium">Needs More Info</span>
                </div>
              </div>
            </div>

            {/* Errors/Blocks */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Errors/Blocks</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300 border border-red-200 dark:border-red-800">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                  </svg>
                  <span className="text-sm font-medium">AI Error</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300 border border-red-200 dark:border-red-800">
                  <span className="text-sm font-medium">⛔ Blocked</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context-Rich Form Demo */}
        <section className="mt-8 bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Context-Rich AI Handoff Form
          </h2>

          <div className="space-y-4 max-w-lg">
            <div className="space-y-2">
              <label className="text-sm font-medium">Task Description</label>
              <textarea
                className="min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm resize-none"
                placeholder="Describe what needs to be implemented..."
                defaultValue="Build a user authentication system with JWT tokens"
              />
              <p className="text-xs text-muted-foreground">
                Clear, specific descriptions improve AI understanding
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Additional Context for AI</label>
              <textarea
                className="min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm resize-none"
                placeholder="Requirements, constraints, examples, or specific approaches..."
                defaultValue="- Use bcrypt for password hashing&#10;- Implement refresh token rotation&#10;- Follow OWASP security guidelines&#10;- Include password strength validation"
              />

              {/* Context quality preview */}
              <div className="flex items-center justify-between p-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 rounded border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center gap-1">
                  <span className="text-xs">Context Quality:</span>
                  <span className="text-yellow-400">★★★★</span>
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-xs">Good for AI handoff</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                <svg className="w-4 h-4 mr-2 inline" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Hand off to Claude
              </button>
              <button className="border border-input hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Save Draft
              </button>
            </div>
          </div>
        </section>

        {/* Progressive Disclosure Demo */}
        <section className="mt-8 bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Progressive Disclosure with AI Context
          </h2>

          <div className="space-y-4">
            {/* Level 1 - Essential Info + Context Quality */}
            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">Build Payment Integration</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <span className="text-xs text-muted-foreground">High Priority</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-muted-foreground">Context:</span>
                      <span className="text-yellow-400">★★</span>
                      <span className="text-gray-300">★★★</span>
                      <span className="text-xs text-muted-foreground">(2/5)</span>
                    </div>
                  </div>
                </div>
                <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 px-2 py-1 rounded-md text-xs font-medium">
                  Needs Context
                </span>
              </div>
            </div>

            {/* Level 2 - More Details + AI Readiness */}
            <details className="bg-secondary/50 rounded-lg">
              <summary className="p-4 cursor-pointer hover:bg-secondary/70 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">API Documentation Generator</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span className="text-xs text-muted-foreground">Medium Priority</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-muted-foreground">Context:</span>
                        <span className="text-yellow-400">★★★★</span>
                        <span className="text-gray-300">★</span>
                        <span className="text-xs text-muted-foreground">(4/5)</span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 px-2 py-1 rounded-md text-xs font-medium">
                    Ready for AI
                  </span>
                </div>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-sm text-muted-foreground mb-3">
                  Build an automated system to generate OpenAPI documentation from existing code
                  annotations
                </p>
                <div className="flex gap-2 flex-wrap mb-3">
                  <span className="px-2 py-1 bg-accent rounded text-xs">API</span>
                  <span className="px-2 py-1 bg-accent rounded text-xs">Documentation</span>
                  <span className="px-2 py-1 bg-accent rounded text-xs">Automation</span>
                </div>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3 py-1 rounded-md text-xs font-medium transition-colors">
                  Hand off to Claude
                </button>
              </div>
            </details>

            {/* Level 3 - Full Context + AI Collaboration History */}
            <details className="bg-secondary/50 rounded-lg">
              <summary className="p-4 cursor-pointer hover:bg-secondary/70 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">User Dashboard Analytics</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-xs text-muted-foreground">In Progress</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-muted-foreground">Context:</span>
                        <span className="text-yellow-400">★★★★★</span>
                        <span className="text-xs text-muted-foreground">(5/5)</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-green-700 dark:text-green-300">
                      Claude Working
                    </span>
                  </div>
                </div>
              </summary>
              <div className="px-4 pb-4 space-y-4">
                <p className="text-sm text-muted-foreground">
                  Implement comprehensive analytics dashboard with real-time metrics, user
                  engagement tracking, and customizable reporting widgets
                </p>

                {/* AI Collaboration History */}
                <div className="bg-muted/50 rounded p-3 space-y-2">
                  <h4 className="text-xs font-medium text-muted-foreground">
                    AI Collaboration History
                  </h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-3 h-3 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span className="text-muted-foreground">
                        Claude implemented data models (2h ago)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-3 h-3 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span className="text-muted-foreground">
                        Claude building chart components (in progress)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress with human/AI breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Overall Progress</span>
                    <span className="text-muted-foreground">75%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Human: Planning ✓</span>
                    <span>AI: Implementation 75%</span>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-accent rounded text-xs">Analytics</span>
                  <span className="px-2 py-1 bg-accent rounded text-xs">Dashboard</span>
                  <span className="px-2 py-1 bg-accent rounded text-xs">Real-time</span>
                </div>
              </div>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
}
