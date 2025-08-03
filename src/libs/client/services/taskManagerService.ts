import type { TaskManagerData, TaskMasterState } from './types';
import { DataRepository } from './dataRepository';
import { TaskConverter } from './taskConverter';
import { TagExtractor } from './tagExtractor';
import {
   DEFAULT_USER,
   DEFAULT_TAG,
   DEFAULT_LABEL,
   DEFAULT_STATUSES,
   DEFAULT_PRIORITIES,
} from './defaultData';

/**
 * Simple sync function to get merged TaskMaster + UI data
 * No complex service layer, just a single function to sync remote data
 */
export async function syncTaskMasterData(): Promise<TaskManagerData | null> {
   try {
      const dataRepository = new DataRepository();
      console.log('[syncTaskMasterData] Starting sync...');

      // Fetch from all endpoints in parallel
      const [baseData, taskMasterData] = await Promise.all([
         dataRepository.fetchTaskManagerData(),
         dataRepository.fetchTaskMasterData(),
      ]);

      // Fetch state data separately only if baseData doesn't include it
      let taskMasterState = baseData?.taskMasterState || null;
      if (!taskMasterState) {
         taskMasterState = await dataRepository.fetchTaskMasterState();
      }

      // If no data is available from any source, return null
      if (!baseData && !taskMasterData && !taskMasterState) {
         console.log('No data available from any source');
         return null;
      }

      // Use base data or create minimal structure
      const finalData: TaskManagerData = baseData || createDefaultData();

      // Ensure all required arrays exist
      if (!finalData.users) finalData.users = [DEFAULT_USER];
      if (!finalData.tags) finalData.tags = [DEFAULT_TAG];
      if (!finalData.labels) finalData.labels = [DEFAULT_LABEL];
      if (!finalData.statuses) finalData.statuses = DEFAULT_STATUSES;
      if (!finalData.priorities) finalData.priorities = DEFAULT_PRIORITIES;
      if (!finalData.tasks) finalData.tasks = [];
      if (!finalData.taskExtra) finalData.taskExtra = {};
      if (!finalData.tagExtra) finalData.tagExtra = {};

      // Process TaskMaster data if available
      if (taskMasterData) {
         // Extract and merge tags
         const extractedTags = TagExtractor.extractTagsFromTaskMasterData(taskMasterData);
         const existingTagIds = new Set(finalData.tags.map((tag) => tag.id));
         const newTags = extractedTags.filter((tag) => !existingTagIds.has(tag.id));
         finalData.tags = [...finalData.tags, ...newTags];

         // Convert and merge tasks
         const convertedTasks = [];
         for (const [tagKey, tagData] of Object.entries(taskMasterData)) {
            const tagTasks = tagData.tasks || [];
            const taggedTasks = TaskConverter.convertTaskMasterTasks(tagTasks, tagKey);
            convertedTasks.push(...taggedTasks);

            // Update tagExtra with task counts
            const tagId = `taskmaster-${tagKey}`;
            finalData.tagExtra[tagId] = {
               icon: 'tag',
               color: '#7f8c8d', // Default gray
               createdAt: new Date().toISOString(),
               updatedAt: new Date().toISOString(),
               metadata: {
                  visibility: 'private',
                  taskCount: tagTasks.length,
                  completedTaskCount: tagTasks.filter((t) => t.status === 'done').length,
               },
            };
         }

         // Reconstruct UI tasks and combine with TaskMaster tasks
         const uiTasks = TaskConverter.reconstructUITasksFromExtra(finalData.taskExtra);
         finalData.tasks = [...uiTasks, ...convertedTasks];

         console.log(
            `[syncTaskMasterData] Synced ${finalData.tasks.length} tasks (${uiTasks.length} UI + ${convertedTasks.length} TaskMaster)`
         );
      }

      // Add TaskMaster state data if available and not already present
      if (taskMasterState && !finalData.taskMasterState) {
         finalData.taskMasterState = taskMasterState;
         console.log('[syncTaskMasterData] Added TaskMaster state data from separate endpoint');
      } else if (finalData.taskMasterState) {
         console.log('[syncTaskMasterData] TaskMaster state data already included in base data');
      }

      return finalData;
   } catch (error) {
      console.error('[syncTaskMasterData] Sync failed:', error);
      return null;
   }
}

/**
 * Simple function to persist local data changes
 */
export async function persistTaskMasterData(data: TaskManagerData): Promise<boolean> {
   try {
      const dataRepository = new DataRepository();
      return await dataRepository.writeTaskManagerData(data);
   } catch (error) {
      console.error('[persistTaskMasterData] Persist failed:', error);
      return false;
   }
}

/**
 * Check if TaskMaster sync is available
 */
export async function isTaskMasterAvailable(): Promise<boolean> {
   try {
      const dataRepository = new DataRepository();
      return await dataRepository.checkAvailability();
   } catch (error) {
      return false;
   }
}

function createDefaultData(): TaskManagerData {
   return {
      users: [DEFAULT_USER],
      tags: [DEFAULT_TAG],
      labels: [DEFAULT_LABEL],
      statuses: DEFAULT_STATUSES,
      priorities: DEFAULT_PRIORITIES,
      tasks: [],
      tagExtra: {},
      taskMasterState: undefined,
      metadata: {
         created: new Date().toISOString(),
         updated: new Date().toISOString(),
         description: 'Merged TaskMaster UI and CLI data',
      },
   };
}

// Backward compatibility exports for existing code
export const taskManagerService = {
   readTaskManagerData: syncTaskMasterData,
   writeTaskManagerData: persistTaskMasterData,
   isAvailable: isTaskMasterAvailable,
};
