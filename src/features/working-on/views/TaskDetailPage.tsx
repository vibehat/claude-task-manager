// Placeholder component to fix build issues
// TODO: Replace with actual TaskDetailPage implementation

import React from 'react';

interface TaskDetailPageProps {
  taskId: string;
}

export function TaskDetailPage({ taskId }: TaskDetailPageProps): React.JSX.Element {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Task Detail Page</h1>
      <p className="text-gray-600 mt-2">Task ID: {taskId}</p>
      <p className="text-gray-600 mt-1">
        This is a placeholder component. Replace with actual implementation.
      </p>
    </div>
  );
}

export default TaskDetailPage;
