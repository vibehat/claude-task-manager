export default function MultiTaskSwitchingMockup() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Multi-Task Management</h1>
          <p className="text-gray-600 mt-2">
            Switch between multiple AI-assisted tasks while preserving context
          </p>
        </div>

        {/* Active Task Tabs */}
        <div className="mb-6">
          <div className="flex items-center gap-2 border-b border-gray-200">
            {/* Task 28.2 - Currently Active */}
            <div className="relative px-4 py-3 bg-blue-50 border-b-2 border-blue-500">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <div>
                  <span className="text-sm font-medium text-blue-700">Task 28.2</span>
                  <p className="text-xs text-blue-600">JWT Implementation</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                  Claude Active
                </span>
                <button className="ml-2 text-blue-400 hover:text-blue-600">×</button>
              </div>
            </div>

            {/* Task 28.5 - Preparing */}
            <div className="relative px-4 py-3 bg-orange-50 border-b-2 border-transparent hover:border-orange-300 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div>
                  <span className="text-sm font-medium text-orange-700">Task 28.5</span>
                  <p className="text-xs text-orange-600">RBAC System</p>
                </div>
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                  Context Built
                </span>
                <button className="ml-2 text-orange-400 hover:text-orange-600">×</button>
              </div>
            </div>

            {/* Task 29.1 - Paused */}
            <div className="relative px-4 py-3 bg-gray-100 border-b-2 border-transparent hover:border-gray-300 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Task 29.1</span>
                  <p className="text-xs text-gray-600">Session Mgmt</p>
                </div>
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                  Paused
                </span>
                <button className="ml-2 text-gray-400 hover:text-gray-600">×</button>
              </div>
            </div>

            {/* Add New Task Button */}
            <button className="px-4 py-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
              <span className="text-sm">+ Add Task</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Left Column - Current Task Detail */}
          <div className="col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Current Task: 28.2</h2>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-700 font-medium">Claude Active</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Task Overview */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">JWT Token Implementation</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Create secure JWT implementation with RS256 algorithm and refresh token support
                </p>

                {/* Progress */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Progress</span>
                    <span className="text-xs text-gray-600">3/5 subtasks complete</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>

              {/* AI Conversation Status */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-blue-800 mb-2">Active AI Conversation</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-700">Session started:</span>
                    <span className="text-blue-800">2:45 PM</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-700">Last exchange:</span>
                    <span className="text-blue-800">3 minutes ago</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-700">Current focus:</span>
                    <span className="text-blue-800">Key rotation logic</span>
                  </div>
                </div>

                <div className="mt-3 flex gap-2">
                  <button className="px-3 py-2 bg-blue-500 text-white rounded-md text-xs hover:bg-blue-600">
                    Continue Conversation
                  </button>
                  <button className="px-3 py-2 border border-blue-300 text-blue-700 rounded-md text-xs hover:bg-blue-100">
                    View History
                  </button>
                </div>
              </div>

              {/* Recent Activities */}
              <div>
                <h4 className="text-sm font-medium text-gray-800 mb-3">Recent Activities</h4>
                <div className="space-y-2">
                  <div className="text-xs text-gray-600 p-2 bg-gray-50 rounded border-l-2 border-green-400">
                    ✓ Generated JWT utility functions
                  </div>
                  <div className="text-xs text-gray-600 p-2 bg-gray-50 rounded border-l-2 border-green-400">
                    ✓ Added token validation middleware
                  </div>
                  <div className="text-xs text-blue-600 p-2 bg-blue-50 rounded border-l-2 border-blue-400">
                    🔄 Working on key rotation implementation
                  </div>
                </div>
              </div>

              {/* Context Preservation Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-xs text-green-700 font-medium">Context Preserved</span>
                </div>
                <p className="text-xs text-gray-600">
                  All conversation history, decisions, and implementation notes are automatically
                  saved when switching tasks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Task Queue & Quick Switch */}
          <div className="col-span-2 space-y-6">
            {/* Quick Task Switcher */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Switch</h3>

              {/* Task 28.5 - Ready to Resume */}
              <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg cursor-pointer hover:bg-orange-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-900">
                      Task 28.5: RBAC System
                    </span>
                  </div>
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                    Ready
                  </span>
                </div>

                <div className="text-xs text-gray-600 mb-2">
                  Context built, AI agent selected (Claude), awaiting handoff
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-orange-600">
                    <span>• Context: 8.2K tokens</span>
                    <span>• Files: 6</span>
                  </div>
                  <button className="px-3 py-1 bg-orange-500 text-white rounded text-xs hover:bg-orange-600">
                    Start AI Session
                  </button>
                </div>
              </div>

              {/* Task 29.1 - Paused */}
              <div className="mb-4 p-3 bg-gray-100 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">
                      Task 29.1: Session Management
                    </span>
                  </div>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                    Paused
                  </span>
                </div>

                <div className="text-xs text-gray-600 mb-2">
                  Paused 2 days ago during database schema design
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>• Progress: 1/3 subtasks</span>
                    <span>• Agent: Cursor</span>
                  </div>
                  <button className="px-3 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600">
                    Resume
                  </button>
                </div>
              </div>
            </div>

            {/* Context Switching Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Session Statistics</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">3</div>
                  <div className="text-xs text-blue-700">Active Tasks</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-600">12</div>
                  <div className="text-xs text-green-700">Context Switches</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">47min</div>
                  <div className="text-xs text-purple-700">Total AI Time</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-lg font-bold text-orange-600">0s</div>
                  <div className="text-xs text-orange-700">Switch Time</div>
                </div>
              </div>
            </div>

            {/* Available Tasks to Add */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Available Tasks</h3>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Task 28.3</span>
                    <p className="text-xs text-gray-600">Auth Endpoints</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                      Blocked
                    </span>
                    <button className="text-xs text-gray-500 hover:text-gray-700">+ Add</button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Task 28.6</span>
                    <p className="text-xs text-gray-600">Rate Limiting</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Ready
                    </span>
                    <button className="text-xs text-blue-600 hover:text-blue-800">+ Add</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Context Preservation Indicator */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <h4 className="text-sm font-medium text-green-800">Context Auto-Saved</h4>
              </div>
              <p className="text-xs text-green-700">
                All task contexts, AI conversations, and progress are automatically preserved when
                switching between tasks. No work is lost.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="mt-8 bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Task Management:</span>
              <button className="px-3 py-2 text-sm bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
                Save All Contexts
              </button>
              <button className="px-3 py-2 text-sm bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100">
                Export Session
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                Auto-save: <span className="text-green-600 font-medium">Enabled</span>
              </div>
              <button className="px-3 py-2 text-sm bg-red-50 text-red-700 rounded-lg hover:bg-red-100">
                End All Sessions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
