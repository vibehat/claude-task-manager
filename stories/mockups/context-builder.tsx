export default function ContextBuilderMockup() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Context Builder</h1>
          <p className="text-gray-600 mt-2">
            Preparing AI context for Task 28.5: RBAC System Implementation
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Automatic Context */}
          <div className="col-span-2 space-y-6">
            {/* Auto-Gathered Context */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Automatic Context</h2>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  ✓ Gathered
                </span>
              </div>

              {/* Task Context */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Task Information</h3>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">ID:</span>
                      <span className="ml-2 text-gray-900">28.5</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Priority:</span>
                      <span className="ml-2 text-orange-600">Medium</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Dependencies:</span>
                      <span className="ml-2 text-gray-900">28.2 (In Progress)</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Estimated:</span>
                      <span className="ml-2 text-gray-900">4 subtasks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Context */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Project Context</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Framework</span>
                      <span className="text-sm text-gray-900">Next.js 15 with TypeScript</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Database</span>
                      <span className="text-sm text-gray-900">PostgreSQL with Prisma</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Auth Patterns</span>
                      <span className="text-sm text-gray-900">JWT + Middleware</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Files */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Related Files Detected</h3>
                <div className="space-y-2">
                  {[
                    { path: 'src/middleware/auth.ts', reason: 'Authentication middleware' },
                    { path: 'src/lib/jwt.ts', reason: 'JWT utilities' },
                    { path: 'prisma/schema.prisma', reason: 'User schema' },
                    { path: 'src/types/auth.ts', reason: 'Auth type definitions' },
                  ].map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-purple-50 rounded border border-purple-200"
                    >
                      <div>
                        <span className="text-sm font-mono text-purple-800">{file.path}</span>
                        <p className="text-xs text-purple-600">{file.reason}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-purple-300"
                        />
                        <span className="text-xs text-purple-700">Include</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Manual Enrichment */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Manual Context Enrichment
              </h2>

              {/* Custom Instructions */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Instructions
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Add specific requirements, constraints, or implementation details..."
                  defaultValue="Implement RBAC following the principle of least privilege. Support hierarchical roles (admin > manager > user). Use database-level permissions where possible."
                />
              </div>

              {/* Include Additional Files */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Files to Include
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter file paths (comma-separated)"
                  />
                  <button className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Add
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                    src/config/roles.ts
                    <button className="ml-2 text-blue-600 hover:text-blue-800">×</button>
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                    docs/auth-spec.md
                    <button className="ml-2 text-blue-600 hover:text-blue-800">×</button>
                  </span>
                </div>
              </div>

              {/* Constraints */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Constraints
                </label>
                <div className="space-y-2">
                  {[
                    'Must maintain backward compatibility with existing auth system',
                    'Performance: Role checks must be under 50ms',
                    'Security: All role changes must be logged',
                    'Testing: Require 90%+ test coverage for role logic',
                  ].map((constraint, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                      <span className="text-sm text-gray-700">{constraint}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Templates & Actions */}
          <div className="space-y-6">
            {/* Context Templates */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Context Templates</h3>
              <div className="space-y-2">
                {[
                  {
                    name: 'Feature Implementation',
                    selected: true,
                    description: 'Full context for new features',
                  },
                  {
                    name: 'Bug Fix',
                    selected: false,
                    description: 'Error context and reproduction',
                  },
                  { name: 'Refactoring', selected: false, description: 'Legacy code and patterns' },
                  {
                    name: 'Architecture',
                    selected: false,
                    description: 'High-level design context',
                  },
                ].map((template, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded border cursor-pointer transition-colors ${
                      template.selected
                        ? 'bg-blue-50 border-blue-200'
                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="template"
                        defaultChecked={template.selected}
                        className="text-blue-600"
                      />
                      <div>
                        <span className="text-sm font-medium text-gray-900">{template.name}</span>
                        <p className="text-xs text-gray-600">{template.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Agent Selection */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Recommended AI Agent</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <span className="font-medium text-blue-800">Claude</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                  <p className="text-xs text-blue-700">
                    Best for complex logic and security-focused implementations
                  </p>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-75">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">Cu</span>
                    </div>
                    <span className="font-medium text-gray-700">Cursor</span>
                  </div>
                  <p className="text-xs text-gray-600">Good for database-heavy implementations</p>
                </div>
              </div>
            </div>

            {/* Context Summary */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Context Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Files included:</span>
                  <span className="font-medium text-gray-900">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Context size:</span>
                  <span className="font-medium text-gray-900">~8.2K tokens</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Estimated cost:</span>
                  <span className="font-medium text-green-600">$0.16</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium">
                Generate AI Prompt
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                Preview Context
              </button>
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                Save as Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
