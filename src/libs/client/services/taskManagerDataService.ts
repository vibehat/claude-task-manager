import {
   syncTaskMasterData,
   persistTaskMasterData,
   isTaskMasterAvailable,
} from './taskManagerService';

// Re-export types from the new modular structure
export type { TaskExtra, TaskManagerData } from './types';

/**
 * Simplified data service - just wraps the simple sync functions
 * Local data management happens in Zustand store, remote sync happens here
 */
export const taskManagerDataService = {
   // Core sync operations
   async readTaskManagerData() {
      return syncTaskMasterData();
   },

   async writeTaskManagerData(data: any) {
      return persistTaskMasterData(data);
   },

   async isAvailable() {
      return isTaskMasterAvailable();
   },

   // Simplified entity methods (just sync after changes)
   async addUser(user: any) {
      // Since we manage data locally in Zustand, these methods
      // can be simplified or removed entirely
      console.warn('addUser: Local data management should be done in Zustand store');
      return null;
   },

   async updateUser(id: string, updates: any) {
      console.warn('updateUser: Local data management should be done in Zustand store');
      return false;
   },

   async deleteUser(id: string) {
      console.warn('deleteUser: Local data management should be done in Zustand store');
      return false;
   },

   async addTag(tag: any) {
      console.warn('addTag: Local data management should be done in Zustand store');
      return null;
   },

   async updateTag(id: string, updates: any) {
      console.warn('updateTag: Local data management should be done in Zustand store');
      return false;
   },

   async deleteTag(id: string) {
      console.warn('deleteTag: Local data management should be done in Zustand store');
      return false;
   },

   async addLabel(label: any) {
      console.warn('addLabel: Local data management should be done in Zustand store');
      return null;
   },

   async updateLabel(id: string, updates: any) {
      console.warn('updateLabel: Local data management should be done in Zustand store');
      return false;
   },

   async deleteLabel(id: string) {
      console.warn('deleteLabel: Local data management should be done in Zustand store');
      return false;
   },

   async addAdditionalTask(task: any) {
      console.warn('addAdditionalTask: Local data management should be done in Zustand store');
      return null;
   },

   async updateAdditionalTask(id: string, updates: any) {
      console.warn('updateAdditionalTask: Local data management should be done in Zustand store');
      return false;
   },

   async deleteAdditionalTask(id: string) {
      console.warn('deleteAdditionalTask: Local data management should be done in Zustand store');
      return false;
   },
};
