import type { TaskMasterTasks, TaskMasterState, ManagerData } from '../stores/types';

export interface TaskMasterDataResult {
  taskMasterTasks: TaskMasterTasks | null;
  taskMasterState: TaskMasterState | null;
  managerData: ManagerData | null;
  errors: string[];
}

export interface TaskMasterDataService {
  fetchTaskMasterFiles(): Promise<TaskMasterDataResult>;
}

export class ApiTaskMasterDataService implements TaskMasterDataService {
  async fetchTaskMasterFiles(): Promise<TaskMasterDataResult> {
    const result: TaskMasterDataResult = {
      taskMasterTasks: null,
      taskMasterState: null,
      managerData: null,
      errors: [],
    };

    try {
      const response = await fetch('/api/files', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paths: [
            '.taskmaster/tasks/tasks.json',
            '.taskmaster/state.json',
            '.taskmaster/task-manager.json',
          ],
        }),
      });

      if (!response.ok) {
        result.errors.push(`API request failed: ${response.status} ${response.statusText}`);
        return result;
      }

      const data = await response.json();

      // Parse tasks.json
      if (data['.taskmaster/tasks/tasks.json']) {
        try {
          result.taskMasterTasks = JSON.parse(data['.taskmaster/tasks/tasks.json']);
        } catch (error) {
          result.errors.push(`Failed to parse tasks.json: ${error}`);
        }
      }

      // Parse state.json
      if (data['.taskmaster/state.json']) {
        try {
          result.taskMasterState = JSON.parse(data['.taskmaster/state.json']);
        } catch (error) {
          result.errors.push(`Failed to parse state.json: ${error}`);
        }
      }

      // Parse task-manager.json
      if (data['.taskmaster/task-manager.json']) {
        try {
          result.managerData = JSON.parse(data['.taskmaster/task-manager.json']);
        } catch (error) {
          result.errors.push(`Failed to parse task-manager.json: ${error}`);
        }
      }
    } catch (error) {
      result.errors.push(`Network error: ${error}`);
    }

    return result;
  }
}
