import { useMemo } from 'react';
import { useWorkingOnStore } from '../store/workingOnStore';
import { shallow } from 'zustand/shallow';

// Memoized selectors to prevent infinite loops
export const useCurrentFocusTask = () => {
  const currentFocusId = useWorkingOnStore((state) => state.currentFocusId);
  const tasks = useWorkingOnStore((state) => state.tasks);

  return useMemo(() => {
    return tasks.find((task) => task.id === currentFocusId) || null;
  }, [tasks, currentFocusId]);
};

export const useActiveTasks = () => {
  const tasks = useWorkingOnStore((state) => state.tasks);

  return useMemo(() => {
    return tasks.filter((task) => task.status === 'in-progress' || task.aiSession);
  }, [tasks]);
};

export const useBlockedTasks = () => {
  const tasks = useWorkingOnStore((state) => state.tasks);

  return useMemo(() => {
    return tasks.filter((task) => task.status === 'blocked');
  }, [tasks]);
};

export const useWorkingOnUI = () => {
  return useWorkingOnStore(
    (state) => ({
      commandPaletteOpen: state.commandPaletteOpen,
      contextViewOpen: state.contextViewOpen,
      handoffModalOpen: state.handoffModalOpen,
      selectedTaskId: state.selectedTaskId,
      layout: state.layout,
    }),
    shallow
  );
};

export const useWorkingOnLoading = () => {
  return useWorkingOnStore((state) => state.loading, shallow);
};
