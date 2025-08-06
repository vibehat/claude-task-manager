export default function AIHandoffFlowMockup() {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">AI Handoff Flow</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Task 28.5: RBAC System Implementation
        </p>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {/* Step 1 - Task Selection */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                ✓
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Task Selection</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Task 28.5 selected</p>
              </div>
            </div>

            <div className="flex-1 h-0.5 bg-green-500 mx-4"></div>

            {/* Step 2 - Context Building */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                ✓
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Context Building
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">6 files, 8.2K tokens</p>
              </div>
            </div>

            <div className="flex-1 h-0.5 bg-blue-500 mx-4"></div>

            {/* Step 3 - Agent Selection */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-pulse">
                3
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-blue-700">Agent Selection</p>
                <p className="text-xs text-blue-600">Choosing AI agent...</p>
              </div>
            </div>

            <div className="flex-1 h-0.5 bg-gray-300 mx-4"></div>

            {/* Step 4 - Execution */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-sm font-bold">
                4
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-500">AI Execution</p>
                <p className="text-xs text-gray-400">Awaiting handoff</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Left Column - Agent Selection */}
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Select AI Agent
            </h2>

            <div className="space-y-4">
              {/* Claude - Recommended */}
              <div className="relative p-4 border-2 border-blue-200 bg-blue-50 rounded-lg cursor-pointer">
                <div className="absolute top-2 right-2">
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                    Recommended
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-900 mb-2">Claude</h3>
                    <p className="text-sm text-blue-700 mb-3">
                      Excellent for complex logic, security implementations, and detailed
                      architectural decisions.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-blue-600">
                      <span>• Security-focused</span>
                      <span>• Complex reasoning</span>
                      <span>• Best practices</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-blue-600">Match score: 95%</span>
                      <input
                        type="radio"
                        name="agent"
                        value="claude"
                        defaultChecked
                        className="text-blue-600"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cursor */}
              <div className="p-4 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Cu</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cursor</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Strong with database operations and existing codebase integration.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                      <span>• Database-heavy</span>
                      <span>• Codebase aware</span>
                      <span>• Fast iteration</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        Match score: 78%
                      </span>
                      <input type="radio" name="agent" value="cursor" className="text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* GitHub Copilot */}
              <div className="p-4 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Co</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      GitHub Copilot
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Great for boilerplate code and following established patterns.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                      <span>• Pattern matching</span>
                      <span>• Boilerplate</span>
                      <span>• IDE integration</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        Match score: 65%
                      </span>
                      <input
                        type="radio"
                        name="agent"
                        value="copilot"
                        className="text-gray-600 dark:text-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Selection Reasoning */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="text-sm font-medium text-blue-800 mb-2">Why Claude is Recommended:</h4>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>• RBAC requires careful security considerations</li>
                <li>• Complex role hierarchy logic needed</li>
                <li>• Database permissions integration</li>
                <li>• Comprehensive testing strategy required</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Handoff Configuration */}
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Handoff Configuration
            </h2>

            {/* Handoff Method */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Handoff Method
              </label>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="handoff"
                    value="clipboard"
                    defaultChecked
                    className="text-blue-600"
                  />
                  <label className="ml-3 text-sm text-gray-900 dark:text-white">
                    Copy to Clipboard
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Copy context and open Claude Code manually
                    </p>
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="handoff" value="file" className="text-blue-600" />
                  <label className="ml-3 text-sm text-gray-900 dark:text-white">
                    File-based Handoff
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Save context to .claude-context.md
                    </p>
                  </label>
                </div>
                <div className="flex items-center opacity-50">
                  <input
                    type="radio"
                    name="handoff"
                    value="api"
                    disabled
                    className="text-blue-600"
                  />
                  <label className="ml-3 text-sm text-gray-500">
                    Direct API Integration
                    <p className="text-xs text-gray-400">Coming soon - direct AI API calls</p>
                  </label>
                </div>
              </div>
            </div>

            {/* Context Summary */}
            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                Context to Transfer
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Task description & acceptance criteria
                  </span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Project context & conventions
                  </span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Related files (6 files)</span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Custom instructions</span>
                  <span className="text-green-600">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Implementation constraints
                  </span>
                  <span className="text-green-600">✓</span>
                </div>
              </div>
            </div>

            {/* Prompt Preview */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Generated Prompt Preview
              </label>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs overflow-auto max-h-32">
                <pre className="whitespace-pre-wrap">
                  {`# Task: Implement RBAC System (Task 28.5)

## Objective
Create a role-based access control system with hierarchical roles and database-level permissions.

## Context
- Project: Next.js 15 with TypeScript and Prisma
- Dependencies: Task 28.2 (JWT implementation) - In Progress
- Priority: Medium

## Requirements
- Support hierarchical roles (admin > manager > user)
- Use principle of least privilege
- Maintain backward compatibility...

## Files Included
- src/middleware/auth.ts
- src/lib/jwt.ts
- prisma/schema.prisma...`}
                </pre>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium">
                Start AI Handoff
              </button>
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-900 text-sm">
                  Edit Context
                </button>
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-900 text-sm">
                  Save Configuration
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Handoff Status Panel */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white dark:bg-gray-950 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-blue-800">Ready for Handoff</h3>
              <p className="text-xs text-blue-700">
                Context prepared for Claude. Click "Start AI Handoff" to copy context and launch
                Claude Code.
              </p>
            </div>
            <div className="ml-auto">
              <div className="text-right">
                <div className="text-xs text-blue-600">Estimated cost: $0.16</div>
                <div className="text-xs text-blue-600">Context size: 8.2K tokens</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
