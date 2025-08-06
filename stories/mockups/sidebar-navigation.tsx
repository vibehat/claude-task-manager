export default function SidebarNavigationMockup() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-[280px] bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">Task Master</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">My Workspace</p>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto">
          {/* 🎯 Right Now */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">🎯</span>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 text-sm">Right Now</h3>
            </div>
            <div className="space-y-1 ml-4">
              <div className="flex items-center justify-between p-2 rounded-md bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-950/50 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Working On</span>
                </div>
                <div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  title="AI Assistant Active"
                ></div>
              </div>
              <div className="flex items-center justify-between p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-sm">Up Next</span>
                </div>
                <span className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-full">
                  3
                </span>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 dark:bg-gray-800 mx-4"></div>

          {/* 📝 My Work */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">📝</span>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 text-sm">My Work</h3>
            </div>
            <div className="space-y-1 ml-4">
              <div className="flex items-center justify-between p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <span className="text-sm">To Do</span>
                </div>
                <span className="bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 text-xs px-2 py-0.5 rounded-full">
                  12
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">In Progress</span>
                </div>
                <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs px-2 py-0.5 rounded-full">
                  5
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">Done</span>
                </div>
                <span className="bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 text-xs px-2 py-0.5 rounded-full">
                  47
                </span>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 dark:bg-gray-800 mx-4"></div>

          {/* 📚 Notes & Docs */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">📚</span>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 text-sm">Notes & Docs</h3>
            </div>
            <div className="space-y-1 ml-4">
              <div className="flex items-center justify-between p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 1v6" />
                  </svg>
                  <span className="text-sm">Browse Files</span>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500">142</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="text-sm">Create New</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 dark:bg-gray-800 mx-4"></div>

          {/* 🔍 Project Overview */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">🔍</span>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                Project Overview
              </h3>
            </div>
            <div className="space-y-1 ml-4">
              <div className="flex items-center gap-2 p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
                <span className="text-sm">Big Picture</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">Planning</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 dark:bg-gray-800 mx-4"></div>

          {/* 🤖 AI Helper */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">🤖</span>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 text-sm">AI Helper</h3>
              <div className="w-2 h-2 bg-green-500 rounded-full" title="AI Connected"></div>
            </div>
            <div className="space-y-1 ml-4">
              <div className="flex items-center justify-between p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="text-sm">Chat History</span>
                </div>
                <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 text-xs px-2 py-0.5 rounded-full">
                  23
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm">Assistant Settings</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 dark:bg-gray-800 mx-4"></div>

          {/* ⚙️ Preferences */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">⚙️</span>
              <h3 className="font-medium text-gray-700 dark:text-gray-300 text-sm">Preferences</h3>
            </div>
            <div className="space-y-1 ml-4">
              <div className="flex items-center gap-2 p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-sm">Project Setup</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-sm">My Settings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">MN</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Minh Nguyen</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">minh@taskmaster.ai</p>
            </div>
            <button
              className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Collapse sidebar"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area - Mockup Preview */}
      <div className="flex-1 p-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Sidebar Navigation Mockup
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Complete sidebar implementing SIDEBAR.md structure with Working On page integration
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                🎯 Right Now Focus
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Active "Working On" with AI status indicator</li>
                <li>• "Up Next" shows ready tasks (3)</li>
                <li>• Clear visual hierarchy with active states</li>
                <li>• Immediate clarity for current focus</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">📝 Work Progress</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• To Do (12), In Progress (5), Done (47)</li>
                <li>• Color-coded badges for quick status</li>
                <li>• Natural task progression flow</li>
                <li>• Sense of accomplishment with "Done"</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                🤖 AI Integration
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• AI Helper with connection status</li>
                <li>• Chat History (23 conversations)</li>
                <li>• Approachable assistant settings</li>
                <li>• Real-time AI activity indicators</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">⚡ UX Features</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• 280px width with collapse support</li>
                <li>• Keyboard navigation ready</li>
                <li>• Dark mode optimized</li>
                <li>• ARIA labels for accessibility</li>
              </ul>
            </div>
          </div>

          {/* Design Principles */}
          <div className="bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Design Principles Applied
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Human-Centered Language
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  "Working On", "Up Next", "My Work" - warm, approachable terminology
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Immediate Clarity
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  "Right Now" section prominent at top eliminates decision paralysis
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Visual Hierarchy</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  12px section spacing, 8px item spacing, clear groupings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
