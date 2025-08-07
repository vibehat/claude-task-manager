export default function MainDashboardMockup() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Working On: Authentication System</h1>
            <p className="text-sm text-gray-600 mt-1">AI Orchestration Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full font-medium">
              Team
            </button>
            <button className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full font-medium">
              ✓ Synced
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Active Tasks & Quick Actions */}
        <div className="col-span-3 space-y-6">
          {/* Active Tasks Panel */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Active Tasks</h2>

            {/* Task 28.2 - Active with Claude */}
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">28.2</span>
                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                  →Claude
                </span>
              </div>
              <div className="mb-2">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <span className="text-xs text-gray-600 mt-1">60% complete</span>
              </div>
              <p className="text-xs text-gray-700">JWT Token Implementation</p>
            </div>

            {/* Task 28.5 - Waiting */}
            <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">28.5</span>
                <span className="text-xs bg-gray-400 text-white px-2 py-1 rounded-full">
                  Waiting
                </span>
              </div>
              <div className="mb-2">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-gray-400 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <span className="text-xs text-gray-600 mt-1">0% complete</span>
              </div>
              <p className="text-xs text-gray-700">RBAC System</p>
            </div>

            {/* Task 29.1 - Ready */}
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">29.1</span>
                <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                  Ready
                </span>
              </div>
              <div className="mb-2">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <span className="text-xs text-gray-600 mt-1">0% complete</span>
              </div>
              <p className="text-xs text-gray-700">Session Management</p>
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm bg-blue-50 hover:bg-blue-100 rounded-md text-blue-700">
                + New Task
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-md text-gray-700">
                ⟳ Sync TaskMaster
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-purple-50 hover:bg-purple-100 rounded-md text-purple-700">
                🔍 Research
              </button>
              <button className="w-full text-left px-3 py-2 text-sm bg-orange-50 hover:bg-orange-100 rounded-md text-orange-700">
                📋 Copy Context
              </button>
            </div>
          </div>

          {/* Blocked Tasks Panel */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Blocked Tasks</h2>
            <div className="space-y-2">
              <div className="text-xs text-gray-600 p-2 bg-red-50 rounded border border-red-200">
                28.3 → waiting for 28.2
              </div>
              <div className="text-xs text-gray-600 p-2 bg-red-50 rounded border border-red-200">
                28.4 → waiting for 28.2
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Current Focus */}
        <div className="col-span-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Current Focus: Task 28.2</h2>
              <h3 className="text-base text-gray-700 mt-1">JWT Token Implementation</h3>
            </div>

            <div className="space-y-6">
              {/* Status Section */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-blue-700">Status: AI Implementing</span>
                </div>
                <p className="text-sm text-gray-600">Next: Review generateToken() function</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm font-medium">
                  Continue with Claude
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm">
                  View AI Conversation
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm">
                  Update Task Status
                </button>
              </div>

              {/* Context Requirements */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Context Requirements:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    Use RS256 algorithm for token signing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    Support refresh tokens mechanism
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    Follow existing auth patterns in middleware/
                  </li>
                </ul>
              </div>

              {/* Implementation Progress */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Implementation Progress:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-4 h-4 bg-green-500 rounded-full text-white flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span className="text-gray-700">JWT generation utilities created</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-4 h-4 bg-green-500 rounded-full text-white flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span className="text-gray-700">Token validation middleware added</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-4 h-4 bg-blue-500 rounded-full text-white flex items-center justify-center text-xs">
                      •
                    </span>
                    <span className="text-blue-700 font-medium">Adding key rotation logic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - AI Activity Feed */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">AI Activity Feed</h2>

            <div className="space-y-3">
              <div className="text-xs text-gray-600 pb-2 border-b border-gray-100">
                <span className="font-medium text-gray-500">3:42pm</span> - Claude started 28.2
              </div>
              <div className="text-xs text-gray-600 pb-2 border-b border-gray-100">
                <span className="font-medium text-gray-500">3:45pm</span> - Generated JWT utilities
              </div>
              <div className="text-xs text-gray-600 pb-2 border-b border-gray-100">
                <span className="font-medium text-gray-500">3:47pm</span> - Added validation
                middleware
              </div>
              <div className="text-xs text-blue-600 pb-2">
                <span className="font-medium text-blue-500">3:48pm</span> - Implementing key
                rotation
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-500">In progress...</span>
                </div>
              </div>
            </div>

            {/* Recent Insights */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h3 className="text-xs font-medium text-gray-900 mb-2">Recent Insights</h3>
              <div className="bg-yellow-50 p-3 rounded-md">
                <p className="text-xs text-yellow-800">
                  Claude suggests using environment variables for JWT secrets instead of hardcoded
                  values
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
