import type { Task, AIActivity } from '../types/workingOnTypes';

/**
 * Format duration string to human-readable format
 */
export function formatDuration(duration: string): string {
  // Handle different duration formats
  if (duration.includes('m') && duration.includes('s')) {
    return duration; // Already formatted like "8m 23s"
  }

  // Convert milliseconds to readable format
  const ms = parseInt(duration, 10);
  if (!isNaN(ms)) {
    const minutes = Math.floor(ms / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${minutes}m ${seconds}s`;
  }

  return duration;
}

/**
 * Calculate time ago from timestamp
 */
export function formatTimeAgo(timestamp: string): string {
  const now = new Date();
  const time = new Date(timestamp);
  const diffMs = now.getTime() - time.getTime();

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  if (diffMinutes < 1) return 'just now';
  if (diffMinutes < 60) return `${diffMinutes}m ago`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d ago`;

  return time.toLocaleDateString();
}

/**
 * Format relative time for display
 */
export function formatRelativeTime(timestamp: string): string {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

/**
 * Get progress color based on percentage and status
 */
export function getProgressColor(progress: number, hasAISession?: boolean): string {
  if (hasAISession && progress > 0) {
    return 'bg-gradient-to-r from-green-400 to-blue-500';
  }
  if (progress >= 80) return 'bg-green-500';
  if (progress >= 50) return 'bg-yellow-500';
  if (progress >= 20) return 'bg-orange-500';
  return 'bg-gray-400';
}

/**
 * Get status icon for task status
 */
export function getStatusIcon(status: string, hasAISession?: boolean): string {
  if (hasAISession) return '🤖';

  switch (status) {
    case 'in-progress':
      return '🔄';
    case 'pending':
      return '📋';
    case 'blocked':
      return '🚫';
    case 'done':
      return '✅';
    case 'cancelled':
      return '❌';
    default:
      return '📋';
  }
}

/**
 * Get priority icon and color
 */
export function getPriorityDisplay(priority: string): { icon: string; color: string } {
  switch (priority) {
    case 'high':
      return {
        icon: '🔴',
        color: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300',
      };
    case 'medium':
      return {
        icon: '🟡',
        color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300',
      };
    case 'low':
      return {
        icon: '🟢',
        color: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
      };
    default:
      return {
        icon: '🟡',
        color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300',
      };
  }
}

/**
 * Filter tasks by status
 */
export function filterTasksByStatus(tasks: Task[], status: string | string[]): Task[] {
  const statuses = Array.isArray(status) ? status : [status];
  return tasks.filter((task) => statuses.includes(task.status));
}

/**
 * Filter tasks by priority
 */
export function filterTasksByPriority(tasks: Task[], priority: string | string[]): Task[] {
  const priorities = Array.isArray(priority) ? priority : [priority];
  return tasks.filter((task) => priorities.includes(task.priority));
}

/**
 * Sort tasks by priority (high -> medium -> low)
 */
export function sortTasksByPriority(tasks: Task[]): Task[] {
  const priorityOrder = { high: 3, medium: 2, low: 1 };
  return [...tasks].sort((a, b) => {
    const aPriority = priorityOrder[a.priority as keyof typeof priorityOrder] || 0;
    const bPriority = priorityOrder[b.priority as keyof typeof priorityOrder] || 0;
    return bPriority - aPriority;
  });
}

/**
 * Sort tasks by progress (descending)
 */
export function sortTasksByProgress(tasks: Task[]): Task[] {
  return [...tasks].sort((a, b) => b.progress - a.progress);
}

/**
 * Get task dependencies status
 */
export function getDependenciesStatus(
  task: Task,
  allTasks: Task[]
): {
  completed: string[];
  pending: string[];
  blocked: string[];
} {
  const completed: string[] = [];
  const pending: string[] = [];
  const blocked: string[] = [];

  task.dependencies.forEach((depId) => {
    const depTask = allTasks.find((t) => t.id === depId);
    if (depTask) {
      if (depTask.status === 'done') {
        completed.push(depId);
      } else if (depTask.status === 'blocked') {
        blocked.push(depId);
      } else {
        pending.push(depId);
      }
    }
  });

  return { completed, pending, blocked };
}

/**
 * Check if task is ready to start (all dependencies completed)
 */
export function isTaskReadyToStart(task: Task, allTasks: Task[]): boolean {
  if (task.dependencies.length === 0) return true;

  const { completed } = getDependenciesStatus(task, allTasks);
  return completed.length === task.dependencies.length;
}

/**
 * Get context quality display
 */
export function getContextQualityDisplay(quality: number): {
  stars: string;
  percentage: number;
  status: 'excellent' | 'good' | 'fair' | 'poor';
} {
  const stars = '★'.repeat(quality) + '☆'.repeat(5 - quality);
  const percentage = (quality / 5) * 100;

  let status: 'excellent' | 'good' | 'fair' | 'poor';
  if (quality >= 4) status = 'excellent';
  else if (quality >= 3) status = 'good';
  else if (quality >= 2) status = 'fair';
  else status = 'poor';

  return { stars, percentage, status };
}

/**
 * Generate task summary for AI handoff
 */
export function generateTaskSummary(task: Task): string {
  const priorityText = task.priority === 'high' ? 'HIGH PRIORITY' : task.priority.toUpperCase();
  const progressText = task.progress > 0 ? `${task.progress}% complete` : 'Not started';
  const dependsText =
    task.dependencies.length > 0
      ? `Depends on: ${task.dependencies.join(', ')}`
      : 'No dependencies';

  return `Task ${task.id}: ${task.title}
Priority: ${priorityText}
Status: ${task.status} (${progressText})
${dependsText}
Estimated Time: ${task.estimatedTime}

Description: ${task.description}

Context Quality: ${task.contextQuality}/5 stars`;
}

/**
 * Estimate completion time based on progress and estimated time
 */
export function estimateCompletionTime(task: Task): string {
  if (task.progress >= 100) return 'Complete';
  if (task.progress === 0) return task.estimatedTime;

  // Extract hours/minutes from estimated time
  const timeMatch = task.estimatedTime.match(/(\d+)(?:-(\d+))?\s*(minutes?|hours?|mins?|hrs?)/i);
  if (!timeMatch) return 'Unknown';

  const [, min, max, unit] = timeMatch;
  const avgTime = max ? (parseInt(min) + parseInt(max)) / 2 : parseInt(min);
  const isHours = unit.toLowerCase().startsWith('h');
  const totalMinutes = isHours ? avgTime * 60 : avgTime;

  // Calculate remaining time based on progress
  const remainingMinutes = Math.round(totalMinutes * (1 - task.progress / 100));

  if (remainingMinutes < 60) {
    return `~${remainingMinutes}m remaining`;
  } else {
    const hours = Math.floor(remainingMinutes / 60);
    const mins = remainingMinutes % 60;
    return `~${hours}h ${mins}m remaining`;
  }
}

/**
 * Get AI activity summary
 */
export function getActivitySummary(activities: AIActivity[]): {
  total: number;
  byType: Record<string, number>;
  lastActivity?: AIActivity;
} {
  const byType: Record<string, number> = {};

  activities.forEach((activity) => {
    byType[activity.type] = (byType[activity.type] || 0) + 1;
  });

  const sortedActivities = [...activities].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return {
    total: activities.length,
    byType,
    lastActivity: sortedActivities[0],
  };
}
