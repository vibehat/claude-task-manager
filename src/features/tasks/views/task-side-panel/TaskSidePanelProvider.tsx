'use client';

import { useTaskSidePanelStore } from '@/store/taskSidePanelStore';
import { useDataStore } from '@/libs/client/stores';
import { TaskSidePanel } from './TaskSidePanel';

export function TaskSidePanelProvider(): React.JSX.Element {
  const { taskId } = useTaskSidePanelStore();
  const _task = useDataStore((state) => (taskId ? state.tasksById[taskId] : null));

  return <TaskSidePanel />;
}

export default TaskSidePanelProvider;
