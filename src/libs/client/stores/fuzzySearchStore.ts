/**
 * Dead Simple Fuse.js Search Store
 *
 * Blazing fast fuzzy search for tasks and tags using Fuse.js
 */

import { create } from 'zustand';
import Fuse from 'fuse.js';
import { useDataStore } from './dataStore';
import type { TaskMasterTask, Tag } from './types';

// Simple search result type
export interface SearchResult<T> {
  item: T;
  score?: number;
  refIndex: number;
}

// Fuzzy search store state
interface FuzzySearchState {
  // Fuse instances
  tasksFuse: Fuse<TaskMasterTask> | null;
  tagsFuse: Fuse<Tag> | null;

  // Last update timestamps
  lastTasksUpdate: number;
  lastTagsUpdate: number;

  // Search methods
  searchTasks: (query: string, options?: any) => SearchResult<TaskMasterTask>[];
  searchTags: (query: string, options?: any) => SearchResult<Tag>[];
  searchLabels: (query: string, options?: any) => SearchResult<any>[];
  searchUsers: (query: string, options?: any) => SearchResult<any>[];
  searchStatuses: (query: string, options?: any) => SearchResult<any>[];
  searchPriorities: (query: string, options?: any) => SearchResult<any>[];
  searchAllTasks: (query: string, options?: any) => SearchResult<any>[];
  searchGlobal: (
    query: string,
    options?: any
  ) => {
    tasks: SearchResult<TaskMasterTask>[];
    tags: SearchResult<Tag>[];
    labels: SearchResult<any>[];
    users: SearchResult<any>[];
    statuses: SearchResult<any>[];
    priorities: SearchResult<any>[];
    allTasks: SearchResult<any>[];
  };
  searchAll: (
    query: string,
    limit?: number
  ) => {
    tasks: SearchResult<TaskMasterTask>[];
    tags: SearchResult<Tag>[];
  };

  // Index management
  rebuildTasksIndex: () => void;
  rebuildTagsIndex: () => void;
  rebuildAllIndices: () => void;
  rebuildIndex: () => Promise<void>;

  // Index statistics
  getIndexStats: () => {
    tasks: number;
    tags: number;
    labels: number;
    users: number;
    statuses: number;
    priorities: number;
    allTasks: number;
    lastUpdate: number;
  };

  // Auto-sync
  syncWithDataStore: () => void;

  // Last index update timestamp for hook dependencies
  lastIndexUpdate: number;
}

// Fuse.js options for tasks - optimized for task search
const TASKS_FUSE_OPTIONS = {
  includeScore: true,
  threshold: 0.4, // More lenient for better fuzzy matching
  location: 0,
  distance: 100,
  minMatchCharLength: 1,
  shouldSort: true,
  ignoreLocation: false,
  keys: [
    { name: 'title', weight: 2.0 }, // Title is most important
    { name: 'description', weight: 1.5 }, // Description is important
    { name: 'details', weight: 1.0 }, // Details less important
    { name: 'status', weight: 0.8 }, // Status for filtering
    { name: 'priority', weight: 0.6 }, // Priority for filtering
    'id', // ID for exact matches
  ],
};

// Fuse.js options for tags - optimized for tag search
const TAGS_FUSE_OPTIONS = {
  includeScore: true,
  threshold: 0.3, // Stricter for tags (shorter text)
  location: 0,
  distance: 50,
  minMatchCharLength: 1,
  shouldSort: true,
  ignoreLocation: true, // Tags are short, location doesn't matter
  keys: [
    { name: 'name', weight: 2.0 },
    { name: 'description', weight: 1.0 },
  ],
};

// Create the fuzzy search store
export const useFuzzySearchStore = create<FuzzySearchState>()((set, get) => ({
  // Initial state
  tasksFuse: null,
  tagsFuse: null,
  lastTasksUpdate: 0,
  lastTagsUpdate: 0,
  lastIndexUpdate: 0,

  // Search tasks
  searchTasks: (query: string, limit = 20) => {
    const { tasksFuse } = get();

    if (!tasksFuse) {
      console.warn('[SimpleSearch] Tasks index not built yet');
      return [];
    }

    if (!query.trim()) {
      // Return empty array for empty query to avoid type issues
      return [];
    }

    const results = tasksFuse.search(query, { limit });
    return results.map((result) => ({
      item: result.item,
      score: result.score,
      refIndex: result.refIndex,
    }));
  },

  // Search tags
  searchTags: (query: string, limit = 10) => {
    const { tagsFuse } = get();

    if (!tagsFuse) {
      console.warn('[SimpleSearch] Tags index not built yet');
      return [];
    }

    if (!query.trim()) {
      // Return empty array for empty query to avoid type issues
      return [];
    }

    const results = tagsFuse.search(query, { limit });
    return results.map((result) => ({
      item: result.item,
      score: result.score,
      refIndex: result.refIndex,
    }));
  },

  // Search both tasks and tags
  searchAll: (query: string, limit = 15) => {
    const state = get();

    const taskLimit = Math.ceil(limit * 0.7); // 70% for tasks
    const tagLimit = Math.ceil(limit * 0.3); // 30% for tags

    return {
      tasks: state.searchTasks(query, taskLimit),
      tags: state.searchTags(query, tagLimit),
    };
  },

  // Rebuild tasks index
  rebuildTasksIndex: () => {
    try {
      const dataStore = useDataStore.getState();
      const tasks = dataStore.allTasks;

      console.log(`[SimpleSearch] Building tasks index with ${tasks.length} tasks...`);
      const startTime = Date.now();

      const tasksFuse = new Fuse(tasks, TASKS_FUSE_OPTIONS);

      const buildTime = Date.now() - startTime;
      console.log(`[SimpleSearch] Tasks index built in ${buildTime}ms`);

      const now = Date.now();
      set({
        tasksFuse,
        lastTasksUpdate: now,
        lastIndexUpdate: now,
      });
    } catch (error) {
      console.error('[SimpleSearch] Failed to build tasks index:', error);
    }
  },

  // Rebuild tags index
  rebuildTagsIndex: () => {
    try {
      const dataStore = useDataStore.getState();
      const tags = dataStore.tagIds.map((id) => dataStore.tagsById[id]).filter(Boolean);

      console.log(`[SimpleSearch] Building tags index with ${tags.length} tags...`);
      const startTime = Date.now();

      const tagsFuse = new Fuse(tags, TAGS_FUSE_OPTIONS);

      const buildTime = Date.now() - startTime;
      console.log(`[SimpleSearch] Tags index built in ${buildTime}ms`);

      const now = Date.now();
      set({
        tagsFuse,
        lastTagsUpdate: now,
        lastIndexUpdate: now,
      });
    } catch (error) {
      console.error('[SimpleSearch] Failed to build tags index:', error);
    }
  },

  // Rebuild all indices
  rebuildAllIndices: () => {
    const state = get();
    state.rebuildTasksIndex();
    state.rebuildTagsIndex();
  },

  // Sync with data store
  syncWithDataStore: () => {
    const dataStore = useDataStore.getState();

    if (!dataStore.isInitialized) {
      console.log('[SimpleSearch] Data store not initialized, skipping sync');
      return;
    }

    // Always rebuild for now - could optimize later with change detection
    const state = get();
    state.rebuildAllIndices();
  },

  // Additional search methods required by the hook
  searchLabels: (query: string, _: any = {}) => {
    // For now, return empty array since we don't have a labels search index
    // In a real implementation, you'd build a Fuse index for labels
    return [];
  },

  searchUsers: (query: string, _: any = {}) => {
    // For now, return empty array since we don't have a users search index
    return [];
  },

  searchStatuses: (query: string, _: any = {}) => {
    // For now, return empty array since we don't have a statuses search index
    return [];
  },

  searchPriorities: (query: string, _: any = {}) => {
    // For now, return empty array since we don't have a priorities search index
    return [];
  },

  searchAllTasks: (query: string, options: any = {}) => {
    // Delegate to searchTasks for now
    return get().searchTasks(query, options.maxResults || 20);
  },

  searchGlobal: (query: string, options: any = {}) => {
    const state = get();
    const maxResults = options.maxResults || 20;

    return {
      tasks: state.searchTasks(query, maxResults),
      tags: state.searchTags(query, maxResults),
      labels: state.searchLabels(query, options),
      users: state.searchUsers(query, options),
      statuses: state.searchStatuses(query, options),
      priorities: state.searchPriorities(query, options),
      allTasks: state.searchAllTasks(query, options),
    };
  },

  rebuildIndex: async () => {
    const state = get();
    state.rebuildAllIndices();
  },

  getIndexStats: () => {
    const dataStore = useDataStore.getState();
    const { tasksFuse, tagsFuse, lastTasksUpdate } = get();

    return {
      tasks: tasksFuse ? dataStore.allTasks.length : 0,
      tags: tagsFuse ? dataStore.tagIds.length : 0,
      labels: 0, // Not implemented yet
      users: 0, // Not implemented yet
      statuses: 0, // Not implemented yet
      priorities: 0, // Not implemented yet
      allTasks: tasksFuse ? dataStore.allTasks.length : 0,
      lastUpdate: Math.max(lastTasksUpdate, get().lastTagsUpdate),
    };
  },
}));

// Auto-sync with data store
if (typeof window !== 'undefined') {
  let isAutoInitialized = false;

  const initializeSearch = async () => {
    if (isAutoInitialized) return;
    isAutoInitialized = true;

    console.log('[SimpleSearch] Setting up auto-sync...');

    // Wait for data store to be ready
    const dataStore = useDataStore.getState();
    if (!dataStore.isInitialized) {
      await dataStore.initialize();
    }

    // Build initial indices
    const searchStore = useFuzzySearchStore.getState();
    searchStore.rebuildAllIndices();

    // Set up periodic sync (every 30 seconds)
    setInterval(() => {
      searchStore.syncWithDataStore();
    }, 30000);

    console.log('[FuzzySearch] Auto-sync initialized');
  };

  // Start initialization after a short delay
  setTimeout(() => {
    initializeSearch().catch((error) => {
      console.error('[SimpleSearch] Auto-initialization failed:', error);
    });
  }, 500);
}
