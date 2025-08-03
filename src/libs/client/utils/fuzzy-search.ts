/**
 * Fuzzy search utilities for fast task searching with n-gram indexing
 */

/**
 * Fuzzy search index entry
 */
export interface FuzzyIndexEntry {
   taskId: string;
   task: any;
   searchFields: {
      id: string;
      taskMasterId: string;
      subtaskId: string;
      title: string;
      titleLower: string;
      description: string;
      descriptionLower: string;
      combined: string; // All searchable text combined
   };
   // Pre-computed n-grams for faster fuzzy matching
   titleNgrams: Set<string>;
   descNgrams: Set<string>;
}

/**
 * Search result with score
 */
export interface FuzzySearchResult {
   task: any;
   score: number;
}

/**
 * Fuzzy search index for fast task searching
 */
export class FuzzySearchIndex {
   private index: Map<string, FuzzyIndexEntry> = new Map();
   private lastUpdate = 0;

   /**
    * Generate n-grams from text for faster fuzzy matching
    */
   private generateNgrams(text: string, n = 2): Set<string> {
      const ngrams = new Set<string>();
      const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');

      for (let i = 0; i <= cleaned.length - n; i++) {
         ngrams.add(cleaned.substring(i, i + n));
      }

      return ngrams;
   }

   /**
    * Build search index from task data
    */
   buildIndex(tasks: any[]): void {
      const startTime = Date.now();
      this.index.clear();

      for (const task of tasks) {
         const entry: FuzzyIndexEntry = {
            taskId: String(task.id || ''),
            task,
            searchFields: {
               id: String(task.id || ''),
               taskMasterId: task.taskId ? String(task.taskId) : '',
               subtaskId: String(task.subtaskId || ''),
               title: String(task.title || ''),
               titleLower: String(task.title || '').toLowerCase(),
               description: String(task.description || ''),
               descriptionLower: String(task.description || '').toLowerCase(),
               combined:
                  `${task.id || ''} ${task.taskId || ''} ${task.subtaskId || ''} ${task.title || ''} ${task.description || ''}`.toLowerCase(),
            },
            titleNgrams: this.generateNgrams(String(task.title || '')),
            descNgrams: this.generateNgrams(String(task.description || '')),
         };

         this.index.set(String(task.id), entry);
      }

      this.lastUpdate = Date.now();
      const buildTime = Date.now() - startTime;

      if (tasks.length > 10) {
         console.log(`🗂️ Built fuzzy index for ${tasks.length} tasks in ${buildTime}ms`);
      }
   }

   /**
    * Fast fuzzy search using the index
    */
   search(query: string, maxResults = 10): FuzzySearchResult[] {
      const queryLower = query.toLowerCase();
      const queryNgrams = this.generateNgrams(query);
      const results: FuzzySearchResult[] = [];

      for (const entry of this.index.values()) {
         let maxScore = 0;
         const fields = entry.searchFields;

         // Fast exact/partial ID matches (highest priority)
         if (fields.id && fields.id.includes(queryLower)) {
            maxScore = Math.max(maxScore, fields.id === queryLower ? 1.0 : 0.95);
         }

         if (fields.taskMasterId && fields.taskMasterId.includes(query)) {
            maxScore = Math.max(maxScore, fields.taskMasterId === query ? 1.0 : 0.9);
         }

         if (fields.subtaskId && fields.subtaskId.includes(queryLower)) {
            maxScore = Math.max(maxScore, fields.subtaskId === queryLower ? 1.0 : 0.9);
         }

         // Fast title matching
         if (fields.titleLower) {
            if (fields.titleLower === queryLower) {
               maxScore = Math.max(maxScore, 1.0);
            } else if (fields.titleLower.startsWith(queryLower)) {
               maxScore = Math.max(maxScore, 0.95);
            } else if (fields.titleLower.includes(queryLower)) {
               maxScore = Math.max(maxScore, 0.8);
            } else if (queryNgrams.size > 0) {
               // Fast n-gram based fuzzy matching
               const intersection = this.intersectionSize(queryNgrams, entry.titleNgrams);
               if (intersection > 0) {
                  const similarity =
                     intersection / Math.max(queryNgrams.size, entry.titleNgrams.size);
                  maxScore = Math.max(maxScore, similarity * 0.7);
               }
            }
         }

         // Fast description matching (lower weight)
         if (fields.descriptionLower && maxScore < 0.8) {
            if (fields.descriptionLower.includes(queryLower)) {
               maxScore = Math.max(maxScore, 0.6);
            } else if (queryNgrams.size > 0) {
               const intersection = this.intersectionSize(queryNgrams, entry.descNgrams);
               if (intersection > 0) {
                  const similarity =
                     intersection / Math.max(queryNgrams.size, entry.descNgrams.size);
                  maxScore = Math.max(maxScore, similarity * 0.4);
               }
            }
         }

         // Only include meaningful matches
         if (maxScore > 0.1) {
            results.push({ task: entry.task, score: maxScore });
         }
      }

      // Sort by score and limit results
      return results
         .sort((a, b) => {
            if (Math.abs(a.score - b.score) < 0.01) {
               return String(a.task.title || '').localeCompare(String(b.task.title || ''));
            }
            return b.score - a.score;
         })
         .slice(0, maxResults);
   }

   /**
    * Fast set intersection size calculation
    */
   private intersectionSize(set1: Set<string>, set2: Set<string>): number {
      let count = 0;
      const smaller = set1.size < set2.size ? set1 : set2;
      const larger = set1.size < set2.size ? set2 : set1;

      for (const item of smaller) {
         if (larger.has(item)) count++;
      }

      return count;
   }

   /**
    * Update single task in index
    */
   updateTask(task: any): void {
      if (!task || !task.id) return;

      const entry: FuzzyIndexEntry = {
         taskId: String(task.id),
         task,
         searchFields: {
            id: String(task.id || ''),
            taskMasterId: task.taskId ? String(task.taskId) : '',
            subtaskId: String(task.subtaskId || ''),
            title: String(task.title || ''),
            titleLower: String(task.title || '').toLowerCase(),
            description: String(task.description || ''),
            descriptionLower: String(task.description || '').toLowerCase(),
            combined:
               `${task.id || ''} ${task.taskId || ''} ${task.subtaskId || ''} ${task.title || ''} ${task.description || ''}`.toLowerCase(),
         },
         titleNgrams: this.generateNgrams(String(task.title || '')),
         descNgrams: this.generateNgrams(String(task.description || '')),
      };

      this.index.set(String(task.id), entry);
   }

   /**
    * Remove task from index
    */
   removeTask(taskId: string): void {
      this.index.delete(String(taskId));
   }

   /**
    * Get index size
    */
   size(): number {
      return this.index.size;
   }

   /**
    * Check if index needs rebuilding
    */
   needsRebuild(taskCount: number): boolean {
      return this.index.size !== taskCount || Date.now() - this.lastUpdate > 300000; // 5 minutes
   }

   /**
    * Clear the index
    */
   clear(): void {
      this.index.clear();
      this.lastUpdate = 0;
   }
}

/**
 * Create a new fuzzy search index instance
 */
export function createFuzzySearchIndex(): FuzzySearchIndex {
   return new FuzzySearchIndex();
}
