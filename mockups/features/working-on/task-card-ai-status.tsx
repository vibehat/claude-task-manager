export default function TaskCardAIStatusMockup() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Task Cards with AI Status</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Active Task with Claude */}
        <div className="bg-white rounded-lg shadow-sm border border-blue-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-gray-900">28.2</span>
              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full font-medium">
                High Priority
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-blue-700">Claude Active</span>
            </div>
          </div>

          <h3 className="font-semibold text-gray-900 mb-2">JWT Token Implementation</h3>
          <p className="text-sm text-gray-600 mb-4">
            Create secure JWT implementation with RS256 algorithm and refresh token support
          </p>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-600">Progress</span>
              <span className="text-xs text-gray-600">3/5 subtasks</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                style={{ width: '60%' }}
              ></div>
            </div>
          </div>

          {/* AI Status Detail */}
          <div className="bg-blue-50 p-3 rounded-lg mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <span className="text-sm font-medium text-blue-800">Claude Status: Implementing</span>
            </div>
            <p className="text-xs text-blue-700 mb-2">Currently working on key rotation logic</p>
            <div className="text-xs text-blue-600">Last activity: 2 minutes ago</div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2">
            <button className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm font-medium">
              Continue
            </button>
            <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm">
              View Chat
            </button>
            <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm">
              Switch Agent
            </button>
          </div>
        </div>

        {/* Preparing Task */}
        <div className="bg-white rounded-lg shadow-sm border border-orange-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-gray-900">28.5</span>
              <span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full font-medium">
                Medium Priority
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-orange-700">Preparing</span>
            </div>
          </div>

          <h3 className="font-semibold text-gray-900 mb-2">RBAC System Implementation</h3>
          <p className="text-sm text-gray-600 mb-4">
            Implement role-based access control with user roles and permissions
          </p>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-600">Progress</span>
              <span className="text-xs text-gray-600">0/4 subtasks</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-orange-500 rounded-full transition-all duration-300"
                style={{ width: '0%' }}
              ></div>
            </div>
          </div>

          {/* AI Status Detail */}
          <div className="bg-orange-50 p-3 rounded-lg mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⚙️</span>
              </div>
              <span className="text-sm font-medium text-orange-800">Building Context</span>
            </div>
            <p className="text-xs text-orange-700 mb-2">
              Gathering project context and dependencies
            </p>
            <div className="text-xs text-orange-600">Estimated ready: 5 minutes</div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2">
            <button className="flex-1 px-3 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed text-sm font-medium">
              Preparing...
            </button>
            <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm">
              Edit Context
            </button>
          </div>
        </div>

        {/* Blocked Task */}
        <div className="bg-white rounded-lg shadow-sm border border-red-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-gray-900">28.3</span>
              <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded-full font-medium">
                Blocked
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-xs font-medium text-red-700">Blocked</span>
            </div>
          </div>

          <h3 className="font-semibold text-gray-900 mb-2">Authentication Endpoints</h3>
          <p className="text-sm text-gray-600 mb-4">
            Create login, logout, and refresh token API endpoints
          </p>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-600">Progress</span>
              <span className="text-xs text-gray-600">0/3 subtasks</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-red-500 rounded-full transition-all duration-300"
                style={{ width: '0%' }}
              ></div>
            </div>
          </div>

          {/* Blocking Info */}
          <div className="bg-red-50 p-3 rounded-lg mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⚠️</span>
              </div>
              <span className="text-sm font-medium text-red-800">Waiting for Dependencies</span>
            </div>
            <p className="text-xs text-red-700 mb-2">Blocked by Task 28.2 (JWT Implementation)</p>
            <div className="text-xs text-red-600">Will auto-start when 28.2 completes</div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2">
            <button className="flex-1 px-3 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed text-sm font-medium">
              Blocked
            </button>
            <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm">
              View Dependencies
            </button>
          </div>
        </div>

        {/* Ready Task */}
        <div className="bg-white rounded-lg shadow-sm border border-green-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-gray-900">29.1</span>
              <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full font-medium">
                Ready
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs font-medium text-green-700">Ready</span>
            </div>
          </div>

          <h3 className="font-semibold text-gray-900 mb-2">Session Management</h3>
          <p className="text-sm text-gray-600 mb-4">
            Implement user session storage and cleanup mechanisms
          </p>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-600">Progress</span>
              <span className="text-xs text-gray-600">0/3 subtasks</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-green-500 rounded-full transition-all duration-300"
                style={{ width: '0%' }}
              ></div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="bg-green-50 p-3 rounded-lg mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm font-medium text-green-800">Ready to Start</span>
            </div>
            <p className="text-xs text-green-700 mb-2">All dependencies satisfied</p>
            <div className="text-xs text-green-600">
              Recommended agent: Cursor (database patterns)
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2">
            <button className="flex-1 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm font-medium">
              Start with AI
            </button>
            <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 text-sm">
              Prepare Context
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
