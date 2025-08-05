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
            '.taskmaster/manager/manager.json',
          ],
        }),
      });

      if (!response.ok) {
        result.errors.push(`API request failed: ${response.status} ${response.statusText}`);
        return result;
      }

      const data = await response.json();

      // The API returns { files: [...] } format, convert to path-keyed object
      const fileMap: Record<string, string> = {};
      if (data.files && Array.isArray(data.files)) {
        data.files.forEach((file: any) => {
          if (file.content && !file.error) {
            fileMap[file.path] = file.content;
          } else if (file.error) {
            result.errors.push(`Failed to load ${file.path}: ${file.error}`);
          }
        });
      }

      // Parse tasks.json
      if (fileMap['.taskmaster/tasks/tasks.json']) {
        try {
          result.taskMasterTasks = JSON.parse(fileMap['.taskmaster/tasks/tasks.json']);
        } catch (error) {
          result.errors.push(`Failed to parse tasks.json: ${error}`);
        }
      }

      // Parse state.json
      if (fileMap['.taskmaster/state.json']) {
        try {
          result.taskMasterState = JSON.parse(fileMap['.taskmaster/state.json']);
        } catch (error) {
          result.errors.push(`Failed to parse state.json: ${error}`);
        }
      }

      // Parse manager.json
      if (fileMap['.taskmaster/manager/manager.json']) {
        try {
          result.managerData = JSON.parse(fileMap['.taskmaster/manager/manager.json']);
        } catch (error) {
          result.errors.push(`Failed to parse manager.json: ${error}`);
        }
      }
    } catch (error) {
      result.errors.push(`Network error: ${error}`);
    }

    return result;
  }
}
