import type { Tag } from '../types/dataModels';
import type { TaskMasterResponse } from './types';

/**
 * Extracts tags from TaskMaster JSON structure
 */
export class TagExtractor {
   /**
    * Extracts tags from the top-level keys in tasks.json
    * The structure is { "tagName": { "tasks": [...] }, ... }
    */
   static extractTagsFromTaskMasterData(taskMasterData: TaskMasterResponse): Tag[] {
      const now = new Date();
      const extractedTags: Tag[] = [];

      // Extract tags from top-level keys
      Object.keys(taskMasterData).forEach((tagKey) => {
         const tagId = `taskmaster-${tagKey}`;
         const tagName = tagKey; // Keep original tag name
         const taskCount = taskMasterData[tagKey]?.tasks?.length || 0;
         const description = `TaskMaster tag: ${tagName} (${taskCount} tasks)`;

         const tag: Tag = {
            id: tagId,
            name: tagName,
            description,
            teamId: 'taskmaster-context',
            createdAt: now,
            updatedAt: now,
         };

         extractedTags.push(tag);
      });

      console.log(
         `[TagExtractor] Extracted ${extractedTags.length} tags from TaskMaster:`,
         extractedTags.map((t) => `${t.name} (${t.id})`)
      );

      return extractedTags;
   }

   /**
    * Formats tag key into a readable name
    */
   private static formatTagName(tagKey: string): string {
      // Special handling for common tag names
      const specialCases: Record<string, string> = {
         master: 'Master',
         main: 'Main',
         ui: 'UI',
         api: 'API',
      };

      if (specialCases[tagKey.toLowerCase()]) {
         return specialCases[tagKey.toLowerCase()];
      }

      // Convert kebab-case, camelCase, or snake_case to Title Case
      return tagKey
         .replace(/-/g, ' ') // Replace hyphens with spaces
         .replace(/_/g, ' ') // Replace underscores with spaces
         .replace(/([A-Z])/g, ' $1') // Add space before capital letters
         .replace(/\s+/g, ' ') // Remove multiple spaces
         .trim()
         .split(' ')
         .map((word) => {
            // Keep acronyms uppercase
            if (word.length <= 3 && word === word.toUpperCase()) {
               return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
         })
         .join(' ');
   }

   /**
    * Gets the appropriate tag ID for a task based on which tag context it belongs to
    */
   static getTaskTagId(tagContext: string): string {
      return `taskmaster-${tagContext}`;
   }
}
