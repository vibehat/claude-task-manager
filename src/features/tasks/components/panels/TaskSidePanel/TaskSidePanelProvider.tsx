'use client';

import { useEffect } from 'react';
import { useTaskSidePanelStore } from '@/store/taskSidePanelStore';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { TaskSidePanel } from './TaskSidePanel';

export function TaskSidePanelProvider(): React.JSX.Element {
   const { task, updateTask } = useTaskSidePanelStore();
   const { getTaskById } = useDataStore();

   useEffect(() => {
      if (task?.id) {
         // Get the latest task data from the store
         const latestTask = getTaskById(task.id);
         if (latestTask) {
            updateTask(latestTask);
         }
      }
   }, [task?.id, getTaskById, updateTask]);

   return <TaskSidePanel />;
}

export default TaskSidePanelProvider;
