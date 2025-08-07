import React, { useState } from 'react';

interface ComponentGridProps {}

export default function ComponentGrid({}: ComponentGridProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('In Progress');
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-black text-foreground mb-2">
            Component Grid & Design System
          </h1>
          <p className="text-lg text-muted-foreground">Comprehensive UI component showcase</p>
        </header>

        {/* Basic Elements Section */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-6">Basic Elements</h2>

          {/* Typography Scale */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Typography Scale</h3>
            <div className="space-y-2">
              <h1 className="text-4xl font-black text-foreground">
                H1: Page Titles (2.25rem, 900 weight)
              </h1>
              <h2 className="text-3xl font-bold text-foreground">
                H2: Section Headers (1.875rem, 700 weight)
              </h2>
              <h3 className="text-2xl font-semibold text-foreground">
                H3: Subsection Headers (1.5rem, 600 weight)
              </h3>
              <h4 className="text-xl font-semibold text-foreground">
                H4: Component Titles (1.25rem, 600 weight)
              </h4>
              <p className="text-base text-foreground">Body: Regular text (1rem, 400 weight)</p>
              <p className="text-sm text-muted-foreground">
                Small: Metadata text (0.875rem, 400 weight)
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Button Variants</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90">
                Submit Task
              </button>
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary/80">
                Cancel
              </button>
              <button className="text-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent">
                More Options
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700">
                Mark Complete
              </button>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700">
                Archive
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700">
                Delete
              </button>
              <button
                className="w-10 h-10 rounded-lg bg-accent hover:bg-accent/80 flex items-center justify-center"
                title="Settings"
              >
                ⚙️
              </button>
            </div>
          </div>

          {/* Form Controls */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Form Controls</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Text Input</label>
                <input
                  type="text"
                  placeholder="Enter task name..."
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Select Dropdown
                </label>
                <select className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>High Priority</option>
                  <option>Medium Priority</option>
                  <option>Low Priority</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-foreground">
                  Checkboxes & Radio
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                    />
                    <span className="text-sm">Enable notifications</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="priority"
                      value="high"
                      className="w-4 h-4 text-primary border-border focus:ring-primary"
                    />
                    <span className="text-sm">High Priority</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="priority"
                      value="medium"
                      defaultChecked
                      className="w-4 h-4 text-primary border-border focus:ring-primary"
                    />
                    <span className="text-sm">Medium Priority</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Composite Components Section */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-6">Composite Components</h2>

          {/* Card Components */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Card Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Basic Card */}
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-foreground">Card Title</h4>
                  <button className="text-muted-foreground hover:text-foreground">•••</button>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    Card content area with flexible layout support for various types of information.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-primary text-primary-foreground px-3 py-1.5 rounded text-sm font-medium">
                    Action
                  </button>
                  <button className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded text-sm font-medium">
                    Secondary
                  </button>
                </div>
              </div>

              {/* Task Card */}
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 mt-0.5 text-primary border-border rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">Implement JWT Authentication</h4>
                    <p className="text-sm text-muted-foreground">Task #1.2.1 • High Priority</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground mb-3">
                  🗓️ Due Aug 15 • 👤 Assigned to Me
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                    #auth
                  </span>
                  <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                    #backend
                  </span>
                  <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                    #security
                  </span>
                </div>

                <div className="flex gap-2">
                  <button className="bg-secondary text-secondary-foreground px-3 py-1.5 rounded text-sm font-medium">
                    View Details
                  </button>
                  <button className="bg-primary text-primary-foreground px-3 py-1.5 rounded text-sm font-medium">
                    Start Work
                  </button>
                </div>
              </div>

              {/* Widget Card */}
              <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🎯</span>
                    <h4 className="font-semibold text-foreground">Working On</h4>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground">⚙️</button>
                </div>

                <div className="text-center py-4">
                  <h5 className="font-medium text-foreground mb-2">JWT Implementation</h5>
                  <p className="text-sm text-muted-foreground mb-4">45% complete</p>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-secondary text-secondary-foreground px-3 py-1.5 rounded text-sm font-medium">
                    View Details
                  </button>
                  <button className="flex-1 bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium">
                    Mark Complete
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Components */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Navigation Components</h3>

            {/* Sidebar Navigation */}
            <div className="mb-6">
              <h4 className="text-base font-medium text-foreground mb-3">Sidebar Navigation</h4>
              <div className="bg-secondary/30 rounded-lg p-4 w-64">
                <nav className="space-y-2">
                  <div className="bg-primary/10 border-r-2 border-primary px-3 py-2 rounded-l font-semibold text-primary">
                    <span className="mr-2">🎯</span>Right Now
                  </div>
                  <div className="px-3 py-2 text-foreground hover:bg-accent rounded">
                    <span className="mr-2">📝</span>My Work
                  </div>
                  <div className="px-3 py-2 text-foreground hover:bg-accent rounded flex items-center justify-between">
                    <div>
                      <span className="mr-2">🔍</span>Overview
                    </div>
                    <span className="bg-muted px-2 py-0.5 rounded-full text-xs">3</span>
                  </div>
                  <div className="px-3 py-2 text-foreground hover:bg-accent rounded">
                    <span className="mr-2">🎯</span>
                  </div>
                </nav>
              </div>
            </div>

            {/* Breadcrumb Navigation */}
            <div className="mb-6">
              <h4 className="text-base font-medium text-foreground mb-3">Breadcrumb Navigation</h4>
              <nav className="flex items-center space-x-2 text-sm">
                <button className="text-primary hover:underline">Tasks</button>
                <span className="text-muted-foreground">›</span>
                <button className="text-primary hover:underline">Authentication System</button>
                <span className="text-muted-foreground">›</span>
                <button className="text-primary hover:underline">JWT Implementation</button>
                <span className="text-muted-foreground">›</span>
                <span className="text-foreground font-medium">Token Generation</span>
              </nav>
            </div>

            {/* Tab Navigation */}
            <div className="mb-6">
              <h4 className="text-base font-medium text-foreground mb-3">Tab Navigation</h4>
              <div className="border-b border-border">
                <nav className="flex space-x-8">
                  <button className="border-b-2 border-primary text-primary px-1 py-2 font-medium">
                    📝 Notes
                  </button>
                  <button className="border-b-2 border-transparent text-muted-foreground hover:text-foreground px-1 py-2">
                    💻 Code
                  </button>
                  <button className="border-b-2 border-transparent text-muted-foreground hover:text-foreground px-1 py-2">
                    🧪 Tests
                  </button>
                  <button className="border-b-2 border-transparent text-muted-foreground hover:text-foreground px-1 py-2">
                    📋 Checklist
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </section>

        {/* Data Display Components */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-6">Data Display Components</h2>

          {/* Table Component */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Table Component</h3>
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 text-sm font-medium text-foreground">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-border rounded"
                      />
                      <span className="ml-2">Task Name</span>
                    </th>
                    <th className="text-left p-3 text-sm font-medium text-foreground">Status</th>
                    <th className="text-left p-3 text-sm font-medium text-foreground">Priority</th>
                    <th className="text-left p-3 text-sm font-medium text-foreground">Due Date</th>
                    <th className="text-left p-3 text-sm font-medium text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-background">
                  <tr className="border-t border-border">
                    <td className="p-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-border rounded"
                      />
                      <span className="ml-2 text-sm">JWT Auth</span>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 rounded text-xs">
                        Progress
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200 rounded text-xs">
                        High
                      </span>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">Aug 15</td>
                    <td className="p-3">
                      <button className="text-muted-foreground hover:text-foreground">•••</button>
                    </td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-border rounded"
                      />
                      <span className="ml-2 text-sm">Dashboard</span>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded text-xs">
                        To Do
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200 rounded text-xs">
                        Medium
                      </span>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">Aug 20</td>
                    <td className="p-3">
                      <button className="text-muted-foreground hover:text-foreground">•••</button>
                    </td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary border-border rounded"
                      />
                      <span className="ml-2 text-sm">Testing</span>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200 rounded text-xs">
                        Done
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 rounded text-xs">
                        Low
                      </span>
                    </td>
                    <td className="p-3 text-sm text-muted-foreground">Aug 10</td>
                    <td className="p-3">
                      <button className="text-muted-foreground hover:text-foreground">•••</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Progress and Status Indicators */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Progress & Status Indicators
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Linear Progress */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Linear Progress</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Task Progress</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Circular Progress */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Circular Progress</h4>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12">
                    <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-muted stroke-current"
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        strokeWidth="2"
                      />
                      <path
                        className="text-primary stroke-current"
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        strokeWidth="2"
                        strokeDasharray="45, 100"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">45%</span>
                </div>
              </div>

              {/* Step Progress */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Step Progress</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <div className="h-0.5 w-8 bg-green-500"></div>
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                    2
                  </div>
                  <div className="h-0.5 w-8 bg-muted"></div>
                  <div className="w-6 h-6 rounded-full bg-muted"></div>
                  <div className="h-0.5 w-8 bg-muted"></div>
                  <div className="w-6 h-6 rounded-full bg-muted"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Step 2 of 4</p>
              </div>
            </div>

            {/* Status Indicators */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-foreground mb-3">Status Indicators</h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-pulse"></div>
                  </div>
                  <span className="text-sm">In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border-2 border-muted-foreground"></div>
                  <span className="text-sm">Pending</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500">
                    <div className="w-2 h-0.5 bg-white absolute transform rotate-45 translate-x-0.5 translate-y-1"></div>
                  </div>
                  <span className="text-sm">Blocked</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-3">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">🔴</span>
                  <span className="text-sm">High Priority</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-500">🟡</span>
                  <span className="text-sm">Medium Priority</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">🔵</span>
                  <span className="text-sm">Low Priority</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Components */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-6">Interactive Components</h2>

          {/* Dropdown Menu */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Dropdown Menu</h3>
            <div className="relative inline-block">
              <button
                onClick={() =>
                  setSelectedStatus(selectedStatus === 'In Progress' ? 'To Do' : 'In Progress')
                }
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg bg-background hover:bg-accent"
              >
                <span>Status: {selectedStatus}</span>
                <span className="text-muted-foreground">▼</span>
              </button>
            </div>
          </div>

          {/* Tooltip System */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tooltip System</h3>
            <div className="relative inline-block">
              <button
                className="w-6 h-6 rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-foreground flex items-center justify-center text-sm"
                onMouseEnter={() => setIsTooltipVisible(true)}
                onMouseLeave={() => setIsTooltipVisible(false)}
              >
                ?
              </button>
              {isTooltipVisible && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-popover border border-border rounded-lg shadow-lg text-sm text-popover-foreground whitespace-nowrap z-10">
                  This task is blocked waiting for API docs
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-popover border-b border-r border-border rotate-45"></div>
                </div>
              )}
            </div>
          </div>

          {/* Modal Dialog */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Modal Dialog</h3>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700"
            >
              Open Delete Modal
            </button>

            {isModalOpen && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-card border border-border rounded-xl p-6 max-w-md mx-4 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-foreground">Confirm Task Deletion</h4>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="mb-6">
                    <p className="text-foreground mb-4">
                      Are you sure you want to delete "JWT Implementation"? This action cannot be
                      undone.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      All related notes, files, and time tracking will also be deleted.
                    </p>
                  </div>

                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 border border-border rounded-lg hover:bg-accent"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700"
                    >
                      Delete Task
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Form Components */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-6">Form Components</h2>

          {/* Input Groups */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Input Groups</h3>
            <div className="bg-secondary/30 rounded-xl p-6">
              <h4 className="text-base font-medium text-foreground mb-4">Task Details</h4>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="JWT Token Implementation"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Implement secure JWT token generation using..."
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Priority
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Due Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <span className="absolute right-3 top-2 text-muted-foreground">📅</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tags</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                      #auth
                    </span>
                    <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                      #backend
                    </span>
                    <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                      #security
                    </span>
                    <button className="px-3 py-1 border border-dashed border-border text-muted-foreground rounded-full text-sm hover:bg-accent">
                      + Add tag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Components */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Search Components</h3>
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-muted-foreground">🔍</span>
                </div>
                <input
                  type="text"
                  placeholder="Search tasks, notes, files..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="bg-secondary/30 rounded-lg p-4">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-muted-foreground">🔍</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-sm"
                    />
                  </div>
                  <select className="px-3 py-2 border border-border rounded-lg bg-background text-sm">
                    <option>All Types</option>
                    <option>Tasks</option>
                    <option>Notes</option>
                  </select>
                  <select className="px-3 py-2 border border-border rounded-lg bg-background text-sm">
                    <option>All Status</option>
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Done</option>
                  </select>
                  <button className="px-3 py-2 text-muted-foreground hover:text-foreground text-sm">
                    Reset
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="text-sm">Filters:</span>
                  <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs flex items-center gap-1">
                    auth <button>×</button>
                  </span>
                  <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs flex items-center gap-1">
                    high-priority <button>×</button>
                  </span>
                  <span className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs flex items-center gap-1">
                    in-progress <button>×</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Components */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-6">Feedback Components</h2>

          {/* Alert Messages */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Alert Messages</h3>
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center gap-3">
                <span className="text-green-600">✅</span>
                <span className="text-green-800 dark:text-green-200">
                  Task "JWT Implementation" marked as complete!
                </span>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex items-center gap-3">
                <span className="text-blue-600">ℹ️</span>
                <span className="text-blue-800 dark:text-blue-200">
                  3 tasks are blocked and need your attention
                </span>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 flex items-center gap-3">
                <span className="text-orange-600">⚠️</span>
                <span className="text-orange-800 dark:text-orange-200">
                  Task deadline is approaching (2 days remaining)
                </span>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center gap-3">
                <span className="text-red-600">❌</span>
                <span className="text-red-800 dark:text-red-200">
                  Failed to save task. Please try again.
                </span>
              </div>
            </div>
          </div>

          {/* Loading States */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Loading States</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Skeleton Loading</h4>
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="animate-pulse space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                    <div className="h-4 bg-muted rounded w-5/6"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="animate-spin w-5 h-5 border-2 border-muted border-t-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground">Loading tasks...</span>
              </div>

              <div>
                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                  <span>Loading progress</span>
                  <span>60%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full animate-pulse"
                    style={{ width: '60%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color System */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-6">Color System</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Brand Colors */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Brand Colors</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-500 text-white">
                  <div className="h-4 w-4 rounded bg-blue-600"></div>
                  <span className="text-sm">Primary Blue</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500 text-white">
                  <div className="h-4 w-4 rounded bg-green-600"></div>
                  <span className="text-sm">Success Green</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-500 text-white">
                  <div className="h-4 w-4 rounded bg-orange-600"></div>
                  <span className="text-sm">Warning Orange</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-red-500 text-white">
                  <div className="h-4 w-4 rounded bg-red-600"></div>
                  <span className="text-sm">Danger Red</span>
                </div>
              </div>
            </div>

            {/* Neutral Colors */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Neutral Colors</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 rounded border border-border">
                  <div className="h-4 w-4 rounded bg-gray-50 border border-gray-200"></div>
                  <span className="text-xs">Gray 50</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded border border-border">
                  <div className="h-4 w-4 rounded bg-gray-200"></div>
                  <span className="text-xs">Gray 200</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded border border-border">
                  <div className="h-4 w-4 rounded bg-gray-400"></div>
                  <span className="text-xs">Gray 400</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded border border-border">
                  <div className="h-4 w-4 rounded bg-gray-600"></div>
                  <span className="text-xs">Gray 600</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded border border-border">
                  <div className="h-4 w-4 rounded bg-gray-800"></div>
                  <span className="text-xs">Gray 800</span>
                </div>
              </div>
            </div>

            {/* Theme Support */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Light Theme</h3>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-white border border-gray-200">
                  <span className="text-sm text-gray-800">Background</span>
                </div>
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <span className="text-sm text-gray-800">Surface</span>
                </div>
                <div className="p-3 rounded-lg border border-gray-200">
                  <span className="text-sm text-gray-800">Text</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Dark Theme</h3>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-gray-900 border border-gray-700">
                  <span className="text-sm text-gray-100">Background</span>
                </div>
                <div className="p-3 rounded-lg bg-gray-800 border border-gray-700">
                  <span className="text-sm text-gray-100">Surface</span>
                </div>
                <div className="p-3 rounded-lg border border-gray-600">
                  <span className="text-sm text-gray-100">Text</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layout Components */}
        <section className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-6">Layout Components</h2>

          {/* Grid System */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Responsive Grid System</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">
                  Desktop ({'>'}1024px): 12-column
                </h4>
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-3 bg-secondary/50 p-3 rounded text-center text-sm">
                    3 cols
                  </div>
                  <div className="col-span-6 bg-secondary/50 p-3 rounded text-center text-sm">
                    6 cols
                  </div>
                  <div className="col-span-3 bg-secondary/50 p-3 rounded text-center text-sm">
                    3 cols
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">
                  Widget Grid (Dashboard)
                </h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-secondary/50 p-4 rounded text-center text-sm">1/3</div>
                    <div className="bg-secondary/50 p-4 rounded text-center text-sm">1/3</div>
                    <div className="bg-secondary/50 p-4 rounded text-center text-sm">1/3</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-secondary/50 p-4 rounded text-center text-sm">1/2</div>
                    <div className="bg-secondary/50 p-4 rounded text-center text-sm">1/2</div>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded text-center text-sm">Full Width</div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacing System */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Spacing System</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Spacing Scale</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-primary"></div>
                    <span>xs: 4px (0.25rem)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-4 bg-primary"></div>
                    <span>sm: 8px (0.5rem)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary"></div>
                    <span>md: 16px (1rem)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-4 bg-primary"></div>
                    <span>lg: 24px (1.5rem)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-4 bg-primary"></div>
                    <span>xl: 32px (2rem)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-4 bg-primary"></div>
                    <span>2xl: 48px (3rem)</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">
                  Component Padding
                </h4>
                <div className="space-y-2">
                  <div className="p-1 bg-secondary/50 rounded text-xs text-center">Tight (xs)</div>
                  <div className="p-2 bg-secondary/50 rounded text-xs text-center">Normal (sm)</div>
                  <div className="p-4 bg-secondary/50 rounded text-xs text-center">Loose (md)</div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Layout Margins</h4>
                <div className="space-y-2">
                  <div className="p-2 m-6 bg-secondary/50 rounded text-xs text-center">
                    Section (lg)
                  </div>
                  <div className="p-2 m-8 bg-secondary/50 rounded text-xs text-center">
                    Page (xl)
                  </div>
                  <div className="p-2 m-12 bg-secondary/50 rounded text-xs text-center">
                    Container (2xl)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
