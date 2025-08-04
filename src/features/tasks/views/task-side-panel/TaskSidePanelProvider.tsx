'use client';

import { useTaskSidePanelStore } from '@/store/taskSidePanelStore';
import { useDataStore } from '@/libs/client/stores';
import { TaskSidePanel } from './TaskSidePanel';

export function TaskSidePanelProvider(): React.JSX.Element {
  const { taskId } = useTaskSidePanelStore();
  const { getTaskById } = useDataStore();

  // Get the current task data
  const _task = taskId ? getTaskById(taskId) : null;

  return <TaskSidePanel />;
}

export default TaskSidePanelProvider;
