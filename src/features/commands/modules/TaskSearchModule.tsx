import { createActionCommand, createSearchCommand } from '../types';
import { toast } from 'sonner';
import { Search, MessageSquare, ExternalLink, Plus } from 'lucide-react';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { useFuzzySearchStore } from '@/libs/client/stores/fuzzySearchStore';
import type { CommandModule } from '@/components/command-palette/types/context.types';

export const taskSearchModule: CommandModule = {
  id: 'task-search',
  name: 'Task Search',
  version: '1.0.0',
  description: 'Search through tasks and interact with them',

  commands: (_context) => [
    createSearchCommand({
      id: 'task-search:search-tasks',
      title: 'Search Tasks',
      description: 'Search through all tasks in the system',
      icon: <Search className="w-4 h-4" />,
      group: 'Tasks',
      searchConfig: {
        placeholder: 'Search by title, ID, or description...',
        debounceMs: 150, // Reduced for faster response
        minQueryLength: 1,
        maxResults: 10,
        emptyStateMessage: 'No tasks found - you can create a new one!',
      },
      searchResultConfig: {
        layout: 'list',
        showMetadata: false,
        containerClassName: 'max-w-full overflow-hidden',
        itemClassName: 'max-w-full overflow-hidden',
      },
      searchHandler: async (query, _context) => {
        // Show loading indicator while searching (minimal logging for performance)
        if (query.length > 3) {
          console.log(`🔍 [TaskSearchModule] Searching for "${query}"...`);
        }

        // Use fuzzy search store
        const fuzzySearchStore = useFuzzySearchStore.getState();
        const dataStore = useDataStore.getState();
        const searchStartTime = Date.now();
        const searchResults = fuzzySearchStore.searchTasks(query, 10);
        const searchTime = Date.now() - searchStartTime;

        const tasks = searchResults.map((result) => result.item);

        // Minimal logging for performance
        if (query.length > 3 || tasks.length === 0) {
          console.log(
            `⚡ Indexed search found ${tasks.length} tasks for "${query}" in ${searchTime}ms`
          );
          if (searchResults.length > 0 && searchResults.length <= 3) {
            console.log(
              'Top matches:',
              searchResults.map((r) => `${r.item.title} (${r.score?.toFixed(2) || 'No score'})`)
            );
          }
        }

        // Convert tasks to command results with match information
        const results = tasks.map((task, index) => {
          const matchInfo = searchResults[index];
          const matchScore = matchInfo ? matchInfo.score || 0 : 0;
          // Get status and priority information for display
          const status = dataStore.statusesById[task.status];
          const priority = task.priority ? dataStore.prioritiesById[task.priority] : null;

          // Create concise description with truncation
          const maxDescLength = 60; // Limit description length
          const taskDesc = String(task.description || 'No description');
          const truncatedDesc =
            taskDesc.length > maxDescLength
              ? taskDesc.substring(0, maxDescLength) + '...'
              : taskDesc;

          // Determine what matched for better user feedback
          const queryLower = query.toLowerCase();
          let matchType = '';

          if (task.id && String(task.id).toLowerCase().includes(queryLower)) {
            matchType = '🆔 ID match';
          } else if (task.id && String(task.id).includes(query)) {
            matchType = '🔢 Task #' + task.id;
          } else if (task.id && String(task.id).toLowerCase().includes(queryLower)) {
            matchType = '📋 Subtask ID';
          } else if (task.title && String(task.title).toLowerCase().includes(queryLower)) {
            matchType = '📝 Title match';
          } else if (
            task.description &&
            String(task.description).toLowerCase().includes(queryLower)
          ) {
            matchType = '📄 Description match';
          } else if (matchScore > 0.5) {
            matchType = '🔍 Fuzzy match';
          }

          // Build status info separately
          const statusInfo = [];
          if (matchType) statusInfo.push(matchType);
          if (status) statusInfo.push(status.name);
          if (priority) statusInfo.push(`${priority.name} priority`);

          const description =
            statusInfo.length > 0 ? `${statusInfo.join(' • ')} • ${truncatedDesc}` : truncatedDesc;

          // Truncate title if too long
          const maxTitleLength = 80;
          const taskTitle = String(task.title || 'Untitled Task');
          const truncatedTitle =
            taskTitle.length > maxTitleLength
              ? taskTitle.substring(0, maxTitleLength) + '...'
              : taskTitle;

          return createActionCommand({
            id: `task:${task.id}`,
            title: truncatedTitle,
            description: description,
            icon: getTaskIcon(status?.name || 'pending'),
            group: 'Search Results',
            execute: async () => {
              // Show task options when selected
              return {
                success: true,
                nextCommand: createSearchCommand({
                  id: `task-actions:${task.id}`,
                  title: `Actions for: ${task.title}`,
                  searchConfig: {
                    placeholder: 'Choose an action...',
                    debounceMs: 0,
                    minQueryLength: 0,
                    maxResults: 2,
                  },
                  searchHandler: async () => {
                    // Instant response for better UX
                    return [
                      createActionCommand({
                        id: `ask-ai:${task.id}`,
                        title: 'Ask AI',
                        description: 'Get AI assistance with this task',
                        icon: <MessageSquare className="w-4 h-4" />,
                        execute: async () => {
                          toast.info(`Ask AI about: ${task.title}`, {
                            description: 'AI assistance feature coming soon...',
                          });
                          return { success: true };
                        },
                      }),
                      createActionCommand({
                        id: `goto-task:${task.id}`,
                        title: 'Go to Task',
                        description: 'Navigate to task details',
                        icon: <ExternalLink className="w-4 h-4" />,
                        execute: async () => {
                          toast.info(`Navigate to: ${task.title}`, {
                            description: 'Navigation feature coming soon...',
                          });
                          return { success: true };
                        },
                      }),
                    ];
                  },
                }),
              };
            },
          });
        });

        // If no results found, offer to create a new task with the search query
        if (results.length === 0 && query.trim().length > 0) {
          const taskTitle = query.trim();
          const displayTitle =
            taskTitle.length > 50 ? taskTitle.substring(0, 50) + '...' : taskTitle;

          return [
            createActionCommand({
              id: `create-task:${query}`,
              title: `Create New Task: "${displayTitle}"`,
              description: 'Create a new task with this title',
              icon: <Plus className="w-4 h-4" />,
              group: 'Create New',
              execute: async () => {
                toast.success(`Creating new task: "${taskTitle}"`, {
                  description: 'Task creation feature coming soon...',
                });
                return { success: true };
              },
            }),
          ];
        }

        return results;
      },
    }),
  ],

  // Context extensions
  contextExtensions: {
    data: {
      taskSearchData: 'Task search module loaded',
    },
    methods: {
      refreshTasks: async () => {
        const dataStore = useDataStore.getState();
        const fuzzySearchStore = useFuzzySearchStore.getState();

        // Force initialization if not already done
        if (!dataStore.isInitialized) {
          console.log('[TaskSearchModule] Initializing data store...');
          await dataStore.initialize();
        }

        // Force sync with TaskMaster
        dataStore.forceSyncTaskMaster().catch(console.warn);

        // Rebuild search indices
        fuzzySearchStore.rebuildAllIndices();
      },
    },
  },

  // Initialize data store when module loads
  initialize: async (_context) => {
    const dataStore = useDataStore.getState();
    const fuzzySearchStore = useFuzzySearchStore.getState();

    if (!dataStore.isInitialized) {
      console.log('[TaskSearchModule] Auto-initializing data store...');
      await dataStore.initialize();
    }

    // Initialize fuzzy search indices
    fuzzySearchStore.rebuildAllIndices();

    console.log(`[TaskSearchModule] Module initialized with fuzzy search capability`);
  },

  // Event handlers
  onCommandExecute: (command, result) => {
    if (command.id.startsWith('task-search:')) {
      console.log('Task search executed:', command.id, result);
    }
  },
};

/**
 * Get an appropriate icon for a task based on its status
 */
function getTaskIcon(status: string): string {
  switch (status.toLowerCase()) {
    case 'done':
    case 'completed':
      return '✅';
    case 'in_progress':
    case 'in-progress':
      return '🔄';
    case 'todo':
    case 'pending':
      return '📋';
    case 'blocked':
      return '🚫';
    case 'cancelled':
      return '❌';
    case 'backlog':
      return '📝';
    default:
      return '📋';
  }
}
