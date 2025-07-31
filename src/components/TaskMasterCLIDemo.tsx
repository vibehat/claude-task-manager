'use client';

import { useState } from 'react';
import {
   useTasksList,
   useNextTask,
   useTaskDetails,
   useTaskMasterCLI,
   taskMasterCLI,
} from '@/hooks/useTaskMasterCLI';

export function TaskMasterCLIDemo() {
   const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
   const [autoRefresh, setAutoRefresh] = useState(true);

   const { tasks, rawOutput, isLoading, error, refresh } = useTasksList(autoRefresh);
   const { nextTask, isLoading: nextLoading } = useNextTask();
   const { task: selectedTask, isLoading: taskLoading } = useTaskDetails(selectedTaskId);
   const { execute, isExecuting, lastResult } = useTaskMasterCLI();

   const handleSetStatus = async (taskId: string, status: string) => {
      try {
         await taskMasterCLI.setStatus(taskId, status);
         refresh(); // Refresh the list
      } catch (error) {
         console.error('Failed to set status:', error);
      }
   };

   const handleExecuteCommand = async (command: string) => {
      await execute({ command });
   };

   if (error) {
      return (
         <div className="p-6 text-red-600">
            <h2 className="text-xl font-bold mb-2">Error</h2>
            <p>Failed to connect to TaskMaster CLI: {error.message}</p>
            <button
               onClick={() => refresh()}
               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
               Retry
            </button>
         </div>
      );
   }

   return (
      <div className="p-6 max-w-6xl mx-auto space-y-6">
         <header className="border-b pb-4">
            <h1 className="text-3xl font-bold">TaskMaster CLI Direct Integration</h1>
            <p className="text-gray-600 mt-1">Desktop-style direct CLI command execution</p>

            <div className="flex items-center gap-4 mt-4">
               <label className="flex items-center gap-2">
                  <input
                     type="checkbox"
                     checked={autoRefresh}
                     onChange={(e) => setAutoRefresh(e.target.checked)}
                     className="rounded"
                  />
                  Auto-refresh (3s)
               </label>

               <button
                  onClick={() => refresh()}
                  disabled={isLoading}
                  className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
               >
                  {isLoading ? 'Loading...' : 'Refresh'}
               </button>
            </div>
         </header>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tasks List */}
            <div className="lg:col-span-2">
               <div className="bg-white border rounded-lg">
                  <div className="p-4 border-b bg-gray-50">
                     <h2 className="font-semibold">All Tasks</h2>
                     <p className="text-sm text-gray-600">
                        {isLoading ? 'Loading...' : `${tasks.length} tasks found`}
                     </p>
                  </div>

                  <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                     {tasks.map((task: any) => (
                        <div
                           key={task.id}
                           className={`p-3 border rounded cursor-pointer transition-colors ${
                              selectedTaskId === task.id.toString()
                                 ? 'border-blue-500 bg-blue-50'
                                 : 'border-gray-200 hover:bg-gray-50'
                           }`}
                           onClick={() => setSelectedTaskId(task.id.toString())}
                        >
                           <div className="flex items-start justify-between">
                              <div className="flex-1">
                                 <h3 className="font-medium text-sm">{task.title}</h3>
                                 <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                                    {task.description}
                                 </p>
                                 <div className="flex items-center gap-2 mt-2">
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                       ID: {task.id}
                                    </span>
                                    <span
                                       className={`text-xs px-2 py-1 rounded text-white ${
                                          task.status === 'done'
                                             ? 'bg-green-500'
                                             : task.status === 'in-progress'
                                               ? 'bg-yellow-500'
                                               : task.status === 'pending'
                                                 ? 'bg-blue-500'
                                                 : 'bg-gray-500'
                                       }`}
                                    >
                                       {task.status}
                                    </span>
                                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                                       {task.priority}
                                    </span>
                                 </div>
                              </div>

                              <div className="flex flex-col gap-1 ml-3">
                                 {task.status !== 'done' && (
                                    <button
                                       onClick={(e) => {
                                          e.stopPropagation();
                                          handleSetStatus(task.id.toString(), 'done');
                                       }}
                                       className="text-xs px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                                    >
                                       Mark Done
                                    </button>
                                 )}
                                 {task.status === 'pending' && (
                                    <button
                                       onClick={(e) => {
                                          e.stopPropagation();
                                          handleSetStatus(task.id.toString(), 'in-progress');
                                       }}
                                       className="text-xs px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                                    >
                                       Start
                                    </button>
                                 )}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Task Details & Actions */}
            <div className="space-y-4">
               {/* Next Task */}
               <div className="bg-white border rounded-lg p-4">
                  <h2 className="font-semibold mb-3">Next Task</h2>
                  {nextLoading ? (
                     <p className="text-sm text-gray-500">Loading...</p>
                  ) : nextTask ? (
                     <div className="space-y-2">
                        <h3 className="text-sm font-medium">{nextTask.title}</h3>
                        <p className="text-xs text-gray-600">{nextTask.description}</p>
                        <div className="flex gap-1">
                           <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              ID: {nextTask.id}
                           </span>
                           <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                              {nextTask.priority}
                           </span>
                        </div>
                     </div>
                  ) : (
                     <p className="text-sm text-gray-500">No pending tasks</p>
                  )}
               </div>

               {/* Selected Task Details */}
               {selectedTaskId && (
                  <div className="bg-white border rounded-lg p-4">
                     <h2 className="font-semibold mb-3">Task Details</h2>
                     {taskLoading ? (
                        <p className="text-sm text-gray-500">Loading...</p>
                     ) : selectedTask ? (
                        <div className="space-y-3">
                           <div>
                              <h3 className="text-sm font-medium">Title</h3>
                              <p className="text-sm text-gray-600">{selectedTask.title}</p>
                           </div>
                           <div>
                              <h3 className="text-sm font-medium">Description</h3>
                              <p className="text-sm text-gray-600">{selectedTask.description}</p>
                           </div>
                           <div>
                              <h3 className="text-sm font-medium">Details</h3>
                              <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                                 {selectedTask.details || 'No details available'}
                              </p>
                           </div>
                           {selectedTask.subtasks && selectedTask.subtasks.length > 0 && (
                              <div>
                                 <h3 className="text-sm font-medium">
                                    Subtasks ({selectedTask.subtasks.length})
                                 </h3>
                                 <div className="space-y-1 mt-1">
                                    {selectedTask.subtasks.map((subtask: any) => (
                                       <div
                                          key={subtask.id}
                                          className="text-xs p-2 bg-gray-50 rounded"
                                       >
                                          <div className="flex justify-between items-start">
                                             <span className="font-medium">{subtask.title}</span>
                                             <span
                                                className={`px-1 py-0.5 rounded text-white text-xs ${
                                                   subtask.status === 'done'
                                                      ? 'bg-green-500'
                                                      : subtask.status === 'in-progress'
                                                        ? 'bg-yellow-500'
                                                        : 'bg-blue-500'
                                                }`}
                                             >
                                                {subtask.status}
                                             </span>
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           )}
                        </div>
                     ) : (
                        <p className="text-sm text-gray-500">Task not found</p>
                     )}
                  </div>
               )}

               {/* Quick Commands */}
               <div className="bg-white border rounded-lg p-4">
                  <h2 className="font-semibold mb-3">Quick Commands</h2>
                  <div className="space-y-2">
                     {[
                        { cmd: 'next', label: 'Get Next Task' },
                        { cmd: 'expand-all', label: 'Expand All Tasks' },
                        { cmd: 'validate-dependencies', label: 'Validate Dependencies' },
                        { cmd: 'generate', label: 'Generate Files' },
                        { cmd: 'version', label: 'Get Version' },
                     ].map(({ cmd, label }) => (
                        <button
                           key={cmd}
                           onClick={() => handleExecuteCommand(cmd)}
                           disabled={isExecuting}
                           className="w-full text-left text-xs px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50 transition-colors"
                        >
                           {label}
                        </button>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Raw Output */}
         {rawOutput && (
            <details className="bg-gray-50 rounded-lg">
               <summary className="p-4 cursor-pointer font-medium">Raw CLI Output</summary>
               <pre className="p-4 text-xs bg-gray-100 rounded-b-lg overflow-auto max-h-48">
                  {rawOutput}
               </pre>
            </details>
         )}

         {/* Last Command Result */}
         {lastResult && (
            <details className="bg-blue-50 rounded-lg">
               <summary className="p-4 cursor-pointer font-medium">
                  Last Command: {lastResult.command}
                  <span
                     className={`ml-2 px-2 py-1 rounded text-xs ${
                        lastResult.success
                           ? 'bg-green-100 text-green-800'
                           : 'bg-red-100 text-red-800'
                     }`}
                  >
                     {lastResult.success ? 'Success' : 'Failed'}
                  </span>
               </summary>
               <div className="p-4 space-y-2">
                  <div>
                     <h4 className="text-sm font-medium">Output:</h4>
                     <pre className="text-xs bg-white p-2 rounded border overflow-auto max-h-32">
                        {lastResult.result.stdout || 'No output'}
                     </pre>
                  </div>
                  {lastResult.result.stderr && (
                     <div>
                        <h4 className="text-sm font-medium text-red-600">Errors:</h4>
                        <pre className="text-xs bg-red-50 p-2 rounded border overflow-auto max-h-32">
                           {lastResult.result.stderr}
                        </pre>
                     </div>
                  )}
               </div>
            </details>
         )}
      </div>
   );
}
