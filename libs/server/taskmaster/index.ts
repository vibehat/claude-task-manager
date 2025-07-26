/**
 * Task Master API Library
 *
 * A focused TypeScript library for Task Master operations with one-way
 * synchronization from tasks.json to SQLite database using Prisma.
 *
 * This module provides:
 * 1. One-way sync from tasks.json to SQLite database
 * 2. Database operations using Prisma client
 * 3. Type-safe interfaces for Task Master data
 */

export { TaskMasterSync } from './sync';
export { TaskMasterDB } from './database';
export * from './types';
