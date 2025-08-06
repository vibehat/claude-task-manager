/**
 * Basic test to verify useActiveTask hook functionality
 * This ensures our implementation follows the correct patterns
 */

import { renderHook } from '@testing-library/react';
import { useActiveTask } from '../hooks/useActiveTask';
import type { TaskMasterTask } from '@/libs/client/stores/types';

// Mock the dataStore
jest.mock('@/libs/client/stores/dataStore', () => ({
  useDataStore: jest.fn(() => ({
    tasksByStatus: {
      'in-progress': [
        {
          id: 1,
          title: 'Test Task',
          description: 'Test Description',
          details: 'Test Details',
          testStrategy: 'Test Strategy',
          priority: 'high',
          dependencies: [],
          status: 'in-progress',
          subtasks: [],
        },
      ] as TaskMasterTask[],
    },
    isLoading: false,
    updateTask: jest.fn(),
    forceSyncTaskMaster: jest.fn(),
  })),
}));

describe('useActiveTask', () => {
  it('should return active task when single in-progress task exists', () => {
    const { result } = renderHook(() => useActiveTask());

    expect(result.current.activeTask).toBeTruthy();
    expect(result.current.activeTask?.title).toBe('Test Task');
    expect(result.current.hasMultipleActive).toBe(false);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});
