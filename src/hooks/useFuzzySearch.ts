import { useState, useCallback, useMemo } from 'react';
import { useFuzzySearchStore, type SearchResult } from '@/libs/client/stores/fuzzySearchStore';
import type {
  TaskMasterTask,
  Tag,
  Status,
  Priority,
  User,
  Label,
  Task,
} from '@/libs/client/stores/types';

interface SearchMatch {
  indices: [number, number][];
  value: string;
  key: string;
}

interface UseFuzzySearchOptions {
  threshold?: number;
  maxResults?: number;
  debounceMs?: number;
  autoSearch?: boolean;
}

interface UseFuzzySearchReturn {
  // Search state
  query: string;
  isSearching: boolean;

  // Search results
  results: {
    tasks: SearchResult<TaskMasterTask>[];
    tags: SearchResult<Tag>[];
    statuses: SearchResult<Status>[];
    priorities: SearchResult<Priority>[];
    users: SearchResult<User>[];
    labels: SearchResult<Label>[];
    allTasks: SearchResult<Task>[];
  };

  // Search actions
  setQuery: (query: string) => void;
  search: (query: string) => void;
  clearSearch: () => void;

  // Entity-specific searches
  searchTasks: (query: string) => SearchResult<TaskMasterTask>[];
  searchTags: (query: string) => SearchResult<Tag>[];
  searchStatuses: (query: string) => SearchResult<Status>[];
  searchPriorities: (query: string) => SearchResult<Priority>[];
  searchUsers: (query: string) => SearchResult<User>[];
  searchLabels: (query: string) => SearchResult<Label>[];
  searchAllTasks: (query: string) => SearchResult<Task>[];

  // Index info
  indexStats: {
    tasks: number;
    tags: number;
    statuses: number;
    priorities: number;
    users: number;
    labels: number;
    allTasks: number;
    lastUpdate: number;
  };

  // Index management
  rebuildIndex: () => Promise<void>;
  syncIndex: () => Promise<void>;
}

/**
 * Hook for using fuzzy search functionality
 * Provides a convenient interface for searching across all data types
 */
export function useFuzzySearch(options: UseFuzzySearchOptions = {}): UseFuzzySearchReturn {
  const { threshold = 0.3, maxResults = 20, debounceMs = 300, autoSearch = true } = options;

  const [query, setQueryState] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState({
    tasks: [] as SearchResult<TaskMasterTask>[],
    tags: [] as SearchResult<Tag>[],
    statuses: [] as SearchResult<Status>[],
    priorities: [] as SearchResult<Priority>[],
    users: [] as SearchResult<User>[],
    labels: [] as SearchResult<Label>[],
    allTasks: [] as SearchResult<Task>[],
  });

  const fuzzySearchStore = useFuzzySearchStore();

  // Debounced search function
  const performSearch = useCallback(
    async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults({
          tasks: [],
          tags: [],
          statuses: [],
          priorities: [],
          users: [],
          labels: [],
          allTasks: [],
        });
        return;
      }

      setIsSearching(true);

      try {
        const searchOptions = {
          threshold,
          maxResults,
          includeScore: true,
        };

        const globalResults = fuzzySearchStore.searchGlobal(searchQuery, searchOptions);
        setResults(globalResults);
      } catch (error) {
        console.error('[useFuzzySearch] Search failed:', error);
        setResults({
          tasks: [],
          tags: [],
          statuses: [],
          priorities: [],
          users: [],
          labels: [],
          allTasks: [],
        });
      } finally {
        setIsSearching(false);
      }
    },
    [threshold, maxResults, fuzzySearchStore]
  );

  // Debounced search with timeout
  const debouncedSearch = useMemo(() => {
    let timeoutId: NodeJS.Timeout;

    return (searchQuery: string) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        performSearch(searchQuery);
      }, debounceMs);
    };
  }, [performSearch, debounceMs]);

  // Set query and optionally trigger search
  const setQuery = useCallback(
    (newQuery: string) => {
      setQueryState(newQuery);

      if (autoSearch) {
        debouncedSearch(newQuery);
      }
    },
    [autoSearch, debouncedSearch]
  );

  // Manual search trigger
  const search = useCallback(
    (searchQuery: string) => {
      setQueryState(searchQuery);
      performSearch(searchQuery);
    },
    [performSearch]
  );

  // Clear search
  const clearSearch = useCallback(() => {
    setQueryState('');
    setResults({
      tasks: [],
      tags: [],
      statuses: [],
      priorities: [],
      users: [],
      labels: [],
      allTasks: [],
    });
  }, []);

  // Entity-specific search functions
  const searchTasks = useCallback(
    (searchQuery: string) => {
      return fuzzySearchStore.searchTasks(searchQuery, { threshold, maxResults });
    },
    [fuzzySearchStore, threshold, maxResults]
  );

  const searchTags = useCallback(
    (searchQuery: string) => {
      return fuzzySearchStore.searchTags(searchQuery, { threshold, maxResults });
    },
    [fuzzySearchStore, threshold, maxResults]
  );

  const searchStatuses = useCallback(
    (searchQuery: string) => {
      return fuzzySearchStore.searchStatuses(searchQuery, { threshold, maxResults });
    },
    [fuzzySearchStore, threshold, maxResults]
  );

  const searchPriorities = useCallback(
    (searchQuery: string) => {
      return fuzzySearchStore.searchPriorities(searchQuery, { threshold, maxResults });
    },
    [fuzzySearchStore, threshold, maxResults]
  );

  const searchUsers = useCallback(
    (searchQuery: string) => {
      return fuzzySearchStore.searchUsers(searchQuery, { threshold, maxResults });
    },
    [fuzzySearchStore, threshold, maxResults]
  );

  const searchLabels = useCallback(
    (searchQuery: string) => {
      return fuzzySearchStore.searchLabels(searchQuery, { threshold, maxResults });
    },
    [fuzzySearchStore, threshold, maxResults]
  );

  const searchAllTasks = useCallback(
    (searchQuery: string) => {
      return fuzzySearchStore.searchAllTasks(searchQuery, { threshold, maxResults });
    },
    [fuzzySearchStore, threshold, maxResults]
  );

  // Index management
  const rebuildIndex = useCallback(async () => {
    await fuzzySearchStore.rebuildIndex();
  }, [fuzzySearchStore]);

  const syncIndex = useCallback(async () => {
    await fuzzySearchStore.syncWithDataStore();
  }, [fuzzySearchStore]);

  // Index statistics
  const indexStats = useMemo(() => {
    return fuzzySearchStore.getIndexStats();
  }, [fuzzySearchStore.lastIndexUpdate]); // Re-compute when index updates

  return {
    // Search state
    query,
    isSearching,
    results,

    // Search actions
    setQuery,
    search,
    clearSearch,

    // Entity-specific searches
    searchTasks,
    searchTags,
    searchStatuses,
    searchPriorities,
    searchUsers,
    searchLabels,
    searchAllTasks,

    // Index info
    indexStats,

    // Index management
    rebuildIndex,
    syncIndex,
  };
}

/**
 * Specialized hook for task-only search
 * Optimized for task search scenarios
 */
export function useTaskSearch(options: UseFuzzySearchOptions = {}) {
  const {
    threshold = 0.2, // More lenient for tasks
    maxResults = 20,
    debounceMs = 200, // Faster for task search
    autoSearch = true,
  } = options;

  const [query, setQueryState] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult<TaskMasterTask>[]>([]);

  const fuzzySearchStore = useFuzzySearchStore();

  const performSearch = useCallback(
    async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setIsSearching(true);

      try {
        const searchResults = fuzzySearchStore.searchTasks(searchQuery, {
          threshold,
          maxResults,
          includeScore: true,
          keys: ['title', 'description', 'details', 'status', 'priority'],
        });

        setResults(searchResults);
      } catch (error) {
        console.error('[useTaskSearch] Search failed:', error);
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    },
    [threshold, maxResults, fuzzySearchStore]
  );

  const debouncedSearch = useMemo(() => {
    let timeoutId: NodeJS.Timeout;

    return (searchQuery: string) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        performSearch(searchQuery);
      }, debounceMs);
    };
  }, [performSearch, debounceMs]);

  const setQuery = useCallback(
    (newQuery: string) => {
      setQueryState(newQuery);

      if (autoSearch) {
        debouncedSearch(newQuery);
      }
    },
    [autoSearch, debouncedSearch]
  );

  const search = useCallback(
    (searchQuery: string) => {
      setQueryState(searchQuery);
      performSearch(searchQuery);
    },
    [performSearch]
  );

  const clearSearch = useCallback(() => {
    setQueryState('');
    setResults([]);
  }, []);

  return {
    query,
    isSearching,
    results,
    setQuery,
    search,
    clearSearch,
  };
}

/**
 * Utility function to highlight search matches in text
 */
export function highlightMatches(
  text: string,
  matches: SearchMatch[] = [],
  className = 'bg-yellow-200'
): string {
  if (!matches.length) return text;

  let highlightedText = text;
  const sortedMatches = matches.flatMap((match) => match.indices).sort((a, b) => b[0] - a[0]); // Sort in reverse order to avoid index shifting

  for (const [start, end] of sortedMatches) {
    const before = highlightedText.slice(0, start);
    const match = highlightedText.slice(start, end + 1);
    const after = highlightedText.slice(end + 1);
    highlightedText = `${before}<span class="${className}">${match}</span>${after}`;
  }

  return highlightedText;
}
