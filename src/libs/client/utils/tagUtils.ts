import type { Tag } from '../types/dataModels';
import type { TagExtra } from '../services/types';

/**
 * Get the color for a tag from TagExtra data
 */
export function getTagColor(tag: Tag, tagExtra: Record<string, TagExtra> | null): string {
  if (!tagExtra) {
    return '#6b7280'; // Default gray color when no tagExtra provided
  }
  const extra = tagExtra[tag.id];
  return extra?.color || '#6b7280'; // Default gray color
}

/**
 * Create a mock tag object with color for temporary use
 */
export function createMockTagWithColor(id: string, name: string, color: string) {
  return {
    id,
    name,
    color,
    description: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}
