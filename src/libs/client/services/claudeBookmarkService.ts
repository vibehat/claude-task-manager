/**
 * Claude Bookmark Service - Manages session bookmarks and tags
 * Stores bookmark data locally in JSON files
 */

import fs from 'fs';
import path from 'path';
import os from 'os';

interface BookmarkData {
  sessionId: string;
  isBookmarked: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

interface BookmarkStorage {
  bookmarks: Record<string, BookmarkData>;
  version: string;
  lastUpdated: string;
}

export class ClaudeBookmarkService {
  private bookmarksFilePath: string;
  private cache: BookmarkStorage | null = null;

  constructor() {
    const claudeDataDir = path.join(os.homedir(), '.claude', 'data');

    // Ensure the directory exists
    if (!fs.existsSync(claudeDataDir)) {
      fs.mkdirSync(claudeDataDir, { recursive: true });
    }

    this.bookmarksFilePath = path.join(claudeDataDir, 'bookmarks.json');
  }

  /**
   * Set bookmark status for a session
   */
  async setBookmark(sessionId: string, isBookmarked: boolean, tags: string[] = []): Promise<void> {
    const storage = await this.loadBookmarks();
    const now = new Date().toISOString();

    if (isBookmarked) {
      storage.bookmarks[sessionId] = {
        sessionId,
        isBookmarked: true,
        tags: [...new Set(tags)], // Remove duplicates
        createdAt: storage.bookmarks[sessionId]?.createdAt || now,
        updatedAt: now,
      };
    } else {
      // Remove bookmark
      delete storage.bookmarks[sessionId];
    }

    storage.lastUpdated = now;
    await this.saveBookmarks(storage);
  }

  /**
   * Get bookmark data for a session
   */
  async getBookmark(sessionId: string): Promise<BookmarkData | null> {
    const storage = await this.loadBookmarks();
    return storage.bookmarks[sessionId] || null;
  }

  /**
   * Get all bookmarked sessions
   */
  async getAllBookmarks(): Promise<BookmarkData[]> {
    const storage = await this.loadBookmarks();
    return Object.values(storage.bookmarks).sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  }

  /**
   * Get bookmarks filtered by tags
   */
  async getBookmarksByTags(tags: string[]): Promise<BookmarkData[]> {
    const allBookmarks = await this.getAllBookmarks();

    if (tags.length === 0) {
      return allBookmarks;
    }

    return allBookmarks.filter((bookmark) => tags.some((tag) => bookmark.tags.includes(tag)));
  }

  /**
   * Get all unique tags used in bookmarks
   */
  async getAllTags(): Promise<string[]> {
    const bookmarks = await this.getAllBookmarks();
    const tagSet = new Set<string>();

    bookmarks.forEach((bookmark) => {
      bookmark.tags.forEach((tag) => tagSet.add(tag));
    });

    return Array.from(tagSet).sort();
  }

  /**
   * Add tags to an existing bookmark
   */
  async addTags(sessionId: string, newTags: string[]): Promise<void> {
    const bookmark = await this.getBookmark(sessionId);

    if (!bookmark) {
      throw new Error(`Bookmark for session ${sessionId} not found`);
    }

    const updatedTags = [...new Set([...bookmark.tags, ...newTags])];
    await this.setBookmark(sessionId, true, updatedTags);
  }

  /**
   * Remove tags from an existing bookmark
   */
  async removeTags(sessionId: string, tagsToRemove: string[]): Promise<void> {
    const bookmark = await this.getBookmark(sessionId);

    if (!bookmark) {
      throw new Error(`Bookmark for session ${sessionId} not found`);
    }

    const updatedTags = bookmark.tags.filter((tag) => !tagsToRemove.includes(tag));
    await this.setBookmark(sessionId, true, updatedTags);
  }

  /**
   * Check if a session is bookmarked
   */
  async isBookmarked(sessionId: string): Promise<boolean> {
    const bookmark = await this.getBookmark(sessionId);
    return bookmark?.isBookmarked || false;
  }

  /**
   * Get bookmark statistics
   */
  async getBookmarkStats(): Promise<{
    totalBookmarks: number;
    totalTags: number;
    mostUsedTags: Array<{ tag: string; count: number }>;
    recentBookmarks: number; // bookmarks from last 7 days
  }> {
    const bookmarks = await this.getAllBookmarks();
    const allTags = await this.getAllTags();

    // Count tag usage
    const tagCounts = new Map<string, number>();
    bookmarks.forEach((bookmark) => {
      bookmark.tags.forEach((tag) => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });

    const mostUsedTags = Array.from(tagCounts.entries())
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Count recent bookmarks (last 7 days)
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const recentBookmarks = bookmarks.filter(
      (bookmark) => new Date(bookmark.updatedAt) > sevenDaysAgo
    ).length;

    return {
      totalBookmarks: bookmarks.length,
      totalTags: allTags.length,
      mostUsedTags,
      recentBookmarks,
    };
  }

  /**
   * Export bookmarks to JSON
   */
  async exportBookmarks(): Promise<BookmarkStorage> {
    return await this.loadBookmarks();
  }

  /**
   * Import bookmarks from JSON
   */
  async importBookmarks(data: Partial<BookmarkStorage>, merge = true): Promise<void> {
    if (!data.bookmarks) {
      throw new Error('Invalid bookmark data: missing bookmarks object');
    }

    let storage: BookmarkStorage;

    if (merge) {
      storage = await this.loadBookmarks();
      // Merge bookmarks, keeping newer ones in case of conflicts
      Object.entries(data.bookmarks).forEach(([sessionId, bookmark]) => {
        const existing = storage.bookmarks[sessionId];
        if (!existing || new Date(bookmark.updatedAt) > new Date(existing.updatedAt)) {
          storage.bookmarks[sessionId] = bookmark;
        }
      });
    } else {
      storage = {
        bookmarks: data.bookmarks,
        version: data.version || '1.0.0',
        lastUpdated: new Date().toISOString(),
      };
    }

    await this.saveBookmarks(storage);
  }

  /**
   * Clear all bookmarks
   */
  async clearBookmarks(): Promise<void> {
    const storage: BookmarkStorage = {
      bookmarks: {},
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
    };

    await this.saveBookmarks(storage);
  }

  /**
   * Load bookmarks from file
   */
  private async loadBookmarks(): Promise<BookmarkStorage> {
    if (this.cache) {
      return this.cache;
    }

    try {
      if (fs.existsSync(this.bookmarksFilePath)) {
        const content = fs.readFileSync(this.bookmarksFilePath, 'utf-8');
        this.cache = JSON.parse(content);

        // Validate and migrate if necessary
        this.cache = this.validateAndMigrateStorage(this.cache!);
      } else {
        // Create initial empty storage
        this.cache = {
          bookmarks: {},
          version: '1.0.0',
          lastUpdated: new Date().toISOString(),
        };
      }
    } catch (error) {
      console.warn('Failed to load bookmarks, using empty storage:', error);
      this.cache = {
        bookmarks: {},
        version: '1.0.0',
        lastUpdated: new Date().toISOString(),
      };
    }

    return this.cache;
  }

  /**
   * Save bookmarks to file
   */
  private async saveBookmarks(storage: BookmarkStorage): Promise<void> {
    try {
      const content = JSON.stringify(storage, null, 2);
      fs.writeFileSync(this.bookmarksFilePath, content, 'utf-8');
      this.cache = storage;
    } catch (error) {
      console.error('Failed to save bookmarks:', error);
      throw new Error(`Failed to save bookmarks: ${error}`);
    }
  }

  /**
   * Validate and migrate storage format if necessary
   */
  private validateAndMigrateStorage(storage: any): BookmarkStorage {
    // Ensure required fields exist
    if (!storage.version) storage.version = '1.0.0';
    if (!storage.lastUpdated) storage.lastUpdated = new Date().toISOString();
    if (!storage.bookmarks) storage.bookmarks = {};

    // Validate each bookmark
    Object.keys(storage.bookmarks).forEach((sessionId) => {
      const bookmark = storage.bookmarks[sessionId];

      if (!bookmark.sessionId) bookmark.sessionId = sessionId;
      if (typeof bookmark.isBookmarked !== 'boolean') bookmark.isBookmarked = true;
      if (!Array.isArray(bookmark.tags)) bookmark.tags = [];
      if (!bookmark.createdAt) bookmark.createdAt = new Date().toISOString();
      if (!bookmark.updatedAt) bookmark.updatedAt = bookmark.createdAt;
    });

    return storage as BookmarkStorage;
  }

  /**
   * Clear cache (useful for testing)
   */
  clearCache(): void {
    this.cache = null;
  }

  /**
   * Get storage file path (useful for backup/debugging)
   */
  getStoragePath(): string {
    return this.bookmarksFilePath;
  }
}
