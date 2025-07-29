import { EventEmitter } from 'events';
import { getGlobalErrorHandler, ErrorType } from './errorHandler';

// Memory management configuration
export interface MemoryManagerConfig {
   enableAutoGC: boolean; // Enable automatic garbage collection
   gcThreshold: number; // Memory threshold to trigger GC (percentage)
   gcInterval: number; // GC check interval in milliseconds
   enableHeapProfiling: boolean; // Enable heap profiling
   enableMemoryLeakDetection: boolean; // Enable memory leak detection
   leakDetectionInterval: number; // Leak detection interval in milliseconds
   maxHeapSize: number; // Maximum heap size in bytes
   enableObjectPooling: boolean; // Enable object pooling
   pooledObjectTypes: string[]; // Types of objects to pool
   enableWeakReferences: boolean; // Enable weak reference cleanup
   pressureThresholds: PressureThresholds; // Memory pressure thresholds
}

export interface PressureThresholds {
   low: number; // Low pressure threshold (%)
   medium: number; // Medium pressure threshold (%)
   high: number; // High pressure threshold (%)
   critical: number; // Critical pressure threshold (%)
}

// Memory usage statistics
export interface MemoryStats {
   timestamp: number;
   heap: {
      used: number;
      total: number;
      limit: number;
      usage: number;
   };
   external: number;
   rss: number;
   arrayBuffers: number;
   pressure: MemoryPressureLevel;
   gc: {
      count: number;
      totalTime: number;
      averageTime: number;
      lastGC: number;
   };
   objectPools: PoolStats[];
   leaks: MemoryLeak[];
}

export enum MemoryPressureLevel {
   NORMAL = 'normal',
   LOW = 'low',
   MEDIUM = 'medium',
   HIGH = 'high',
   CRITICAL = 'critical',
}

// Object pool interface
export interface ObjectPool<T> {
   name: string;
   factory: () => T;
   reset?: (obj: T) => void;
   maxSize: number;
   currentSize: number;
   available: T[];
   totalCreated: number;
   totalReused: number;
   totalDestroyed: number;
}

export interface PoolStats {
   name: string;
   maxSize: number;
   currentSize: number;
   available: number;
   totalCreated: number;
   totalReused: number;
   totalDestroyed: number;
   hitRate: number;
   memoryUsage: number;
}

// Memory leak detection
export interface MemoryLeak {
   id: string;
   type: 'heap-growth' | 'object-retention' | 'event-listener' | 'timer' | 'cache';
   severity: 'low' | 'medium' | 'high' | 'critical';
   description: string;
   detectedAt: number;
   growthRate: number; // bytes per second
   affectedObjects?: string[];
   stackTrace?: string;
   mitigation?: string[];
}

// Weak reference tracker
export interface WeakRefTracker<T extends WeakKey> {
   ref: WeakRef<T>;
   id: string;
   type: string;
   createdAt: number;
   lastAccessed: number;
}

// GC statistics
export interface GCStats {
   type: string;
   timestamp: number;
   duration: number;
   heapBefore: number;
   heapAfter: number;
   freedMemory: number;
   efficiency: number;
}

// Default configuration
const DEFAULT_CONFIG: MemoryManagerConfig = {
   enableAutoGC: true,
   gcThreshold: 85, // 85% memory usage
   gcInterval: 30000, // 30 seconds
   enableHeapProfiling: true,
   enableMemoryLeakDetection: true,
   leakDetectionInterval: 60000, // 1 minute
   maxHeapSize: 1024 * 1024 * 1024, // 1GB
   enableObjectPooling: true,
   pooledObjectTypes: ['array', 'object', 'buffer'],
   enableWeakReferences: true,
   pressureThresholds: {
      low: 60, // 60%
      medium: 75, // 75%
      high: 85, // 85%
      critical: 95, // 95%
   },
};

// Main memory manager class
export class MemoryManager extends EventEmitter {
   private config: MemoryManagerConfig;
   private errorHandler = getGlobalErrorHandler();

   // Monitoring intervals
   private gcMonitorInterval: NodeJS.Timeout | null = null;
   private leakDetectionInterval: NodeJS.Timeout | null = null;
   private pressureMonitorInterval: NodeJS.Timeout | null = null;

   // Object pools
   private objectPools = new Map<string, ObjectPool<any>>();

   // Weak reference tracking
   private weakRefs = new Map<string, WeakRefTracker<any>>();
   private finalizers = new Map<string, FinalizationRegistry<string>>();

   // Memory statistics
   private memoryHistory: MemoryStats[] = [];
   private gcHistory: GCStats[] = [];
   private detectedLeaks: MemoryLeak[] = [];
   private lastMemoryUsage = 0;
   private gcCount = 0;
   private gcTotalTime = 0;

   // Memory pressure state
   private currentPressure = MemoryPressureLevel.NORMAL;
   private pressureCallbacks = new Map<MemoryPressureLevel, (() => void)[]>();

   constructor(config: Partial<MemoryManagerConfig> = {}) {
      super();
      this.config = { ...DEFAULT_CONFIG, ...config };

      this.initializeObjectPools();
      this.startMonitoring();
      this.setupGCObserver();
      this.setupPressureHandlers();
   }

   // Initialize object pools
   private initializeObjectPools(): void {
      if (!this.config.enableObjectPooling) return;

      // Array pool
      this.createObjectPool('array', {
         factory: () => [],
         reset: (arr: any[]) => {
            arr.length = 0;
            return arr;
         },
         maxSize: 100,
      });

      // Object pool
      this.createObjectPool('object', {
         factory: () => ({}),
         reset: (obj: any) => {
            for (const key in obj) {
               delete obj[key];
            }
            return obj;
         },
         maxSize: 100,
      });

      // Buffer pool
      this.createObjectPool('buffer', {
         factory: () => Buffer.alloc(1024),
         reset: (buffer: Buffer) => {
            buffer.fill(0);
            return buffer;
         },
         maxSize: 50,
      });
   }

   // Create object pool
   createObjectPool<T>(
      name: string,
      options: {
         factory: () => T;
         reset?: (obj: T) => T;
         maxSize?: number;
      }
   ): void {
      const pool: ObjectPool<T> = {
         name,
         factory: options.factory,
         reset: options.reset,
         maxSize: options.maxSize || 100,
         currentSize: 0,
         available: [],
         totalCreated: 0,
         totalReused: 0,
         totalDestroyed: 0,
      };

      this.objectPools.set(name, pool);
      this.emit('pool:created', { name, maxSize: pool.maxSize });
   }

   // Get object from pool
   getFromPool<T>(name: string): T | null {
      const pool = this.objectPools.get(name) as ObjectPool<T>;
      if (!pool) return null;

      if (pool.available.length > 0) {
         const obj = pool.available.pop()!;
         pool.totalReused++;
         this.emit('pool:reused', { name, available: pool.available.length });
         return obj;
      }

      // Create new object if under limit
      if (pool.currentSize < pool.maxSize) {
         const obj = pool.factory();
         pool.currentSize++;
         pool.totalCreated++;
         this.emit('pool:created', { name, currentSize: pool.currentSize });
         return obj;
      }

      return null; // Pool exhausted
   }

   // Return object to pool
   returnToPool<T>(name: string, obj: T): boolean {
      const pool = this.objectPools.get(name) as ObjectPool<T>;
      if (!pool) return false;

      try {
         // Reset object if reset function provided
         if (pool.reset) {
            pool.reset(obj);
         }

         pool.available.push(obj);
         this.emit('pool:returned', { name, available: pool.available.length });
         return true;
      } catch (error) {
         console.warn(`Failed to return object to pool ${name}:`, error);
         return false;
      }
   }

   // Start memory monitoring
   private startMonitoring(): void {
      // GC monitoring
      if (this.config.enableAutoGC) {
         this.gcMonitorInterval = setInterval(() => {
            this.checkGCNeeded();
         }, this.config.gcInterval);
      }

      // Leak detection
      if (this.config.enableMemoryLeakDetection) {
         this.leakDetectionInterval = setInterval(() => {
            this.detectMemoryLeaks();
         }, this.config.leakDetectionInterval);
      }

      // Pressure monitoring
      this.pressureMonitorInterval = setInterval(() => {
         this.checkMemoryPressure();
      }, 5000); // Check every 5 seconds
   }

   // Check if GC is needed
   private checkGCNeeded(): void {
      const memUsage = process.memoryUsage();
      const heapUsage = (memUsage.heapUsed / memUsage.heapTotal) * 100;

      if (heapUsage > this.config.gcThreshold) {
         this.performGC();
      }
   }

   // Perform garbage collection
   private performGC(): void {
      if (!global.gc) {
         console.warn('Garbage collection is not exposed. Run with --expose-gc flag.');
         return;
      }

      const beforeGC = process.memoryUsage();
      const startTime = Date.now();

      try {
         global.gc();

         const afterGC = process.memoryUsage();
         const duration = Date.now() - startTime;
         const freedMemory = beforeGC.heapUsed - afterGC.heapUsed;

         this.gcCount++;
         this.gcTotalTime += duration;

         const gcStats: GCStats = {
            type: 'manual',
            timestamp: Date.now(),
            duration,
            heapBefore: beforeGC.heapUsed,
            heapAfter: afterGC.heapUsed,
            freedMemory,
            efficiency: freedMemory > 0 ? (freedMemory / beforeGC.heapUsed) * 100 : 0,
         };

         this.gcHistory.push(gcStats);
         this.emit('gc:performed', gcStats);

         // Trim GC history
         if (this.gcHistory.length > 100) {
            this.gcHistory = this.gcHistory.slice(-100);
         }
      } catch (error) {
         const errorMessage = error instanceof Error ? error.message : String(error);
         const gcError = this.errorHandler.createError(
            ErrorType.UNKNOWN_ERROR,
            `Garbage collection failed: ${errorMessage}`,
            { component: 'MemoryManager' },
            error as Error
         );

         this.errorHandler.handleError(gcError, true);
      }
   }

   // Setup GC observer (if available)
   private setupGCObserver(): void {
      // Note: This is a simplified version. In a real implementation,
      // you might use performance hooks or other Node.js APIs to observe GC
      if (typeof process.on === 'function') {
         process.on('exit', () => {
            this.emit('process:exit', this.getMemoryStats());
         });
      }
   }

   // Detect memory leaks
   private detectMemoryLeaks(): void {
      try {
         const currentMemory = process.memoryUsage();
         const currentTime = Date.now();
         const timeDiff =
            currentTime -
            (this.memoryHistory[this.memoryHistory.length - 1]?.timestamp || currentTime);
         const memoryDiff = currentMemory.heapUsed - this.lastMemoryUsage;

         if (timeDiff > 0 && memoryDiff > 0) {
            const growthRate = memoryDiff / (timeDiff / 1000); // bytes per second

            // Detect heap growth leak
            if (growthRate > 1024 * 1024) {
               // > 1MB/s growth
               const leak: MemoryLeak = {
                  id: `heap-growth-${Date.now()}`,
                  type: 'heap-growth',
                  severity: growthRate > 10 * 1024 * 1024 ? 'critical' : 'high',
                  description: `Rapid heap growth detected: ${Math.round(growthRate / 1024)} KB/s`,
                  detectedAt: currentTime,
                  growthRate,
                  mitigation: [
                     'Check for memory leaks in recent code changes',
                     'Review object creation and retention patterns',
                     'Monitor for unclosed resources or event listeners',
                  ],
               };

               this.detectedLeaks.push(leak);
               this.emit('leak:detected', leak);
            }
         }

         // Check for object retention patterns
         this.checkObjectRetention();

         // Check for timer leaks
         this.checkTimerLeaks();

         // Update last memory usage
         this.lastMemoryUsage = currentMemory.heapUsed;
      } catch (error) {
         console.warn('Memory leak detection failed:', error);
      }
   }

   // Check for object retention patterns
   private checkObjectRetention(): void {
      // This is a simplified implementation
      // In a real scenario, you'd use heap snapshots or profiling tools

      const objectPoolsOversize = Array.from(this.objectPools.values()).filter(
         (pool) => pool.currentSize > pool.maxSize * 1.5
      );

      for (const pool of objectPoolsOversize) {
         const leak: MemoryLeak = {
            id: `object-retention-${pool.name}-${Date.now()}`,
            type: 'object-retention',
            severity: 'medium',
            description: `Object pool '${pool.name}' has grown beyond expected size`,
            detectedAt: Date.now(),
            growthRate: 0,
            affectedObjects: [pool.name],
            mitigation: [
               `Review usage patterns for ${pool.name} pool`,
               'Check if objects are being properly returned to pool',
               'Consider increasing pool size or improving cleanup',
            ],
         };

         this.detectedLeaks.push(leak);
         this.emit('leak:detected', leak);
      }
   }

   // Check for timer leaks
   private checkTimerLeaks(): void {
      // Note: This is a simplified implementation
      // In a real scenario, you'd track timer creation/cleanup

      const activeHandles = (process as any)._getActiveHandles();
      const activeRequests = (process as any)._getActiveRequests();

      if (activeHandles.length > 100 || activeRequests.length > 50) {
         const leak: MemoryLeak = {
            id: `timer-leak-${Date.now()}`,
            type: 'timer',
            severity: 'medium',
            description: `High number of active handles (${activeHandles.length}) or requests (${activeRequests.length})`,
            detectedAt: Date.now(),
            growthRate: 0,
            mitigation: [
               'Review timer and interval usage',
               'Ensure proper cleanup of async operations',
               'Check for unclosed connections or streams',
            ],
         };

         this.detectedLeaks.push(leak);
         this.emit('leak:detected', leak);
      }
   }

   // Check memory pressure
   private checkMemoryPressure(): void {
      const memUsage = process.memoryUsage();
      const heapUsage = (memUsage.heapUsed / memUsage.heapTotal) * 100;

      let newPressure: MemoryPressureLevel;

      if (heapUsage >= this.config.pressureThresholds.critical) {
         newPressure = MemoryPressureLevel.CRITICAL;
      } else if (heapUsage >= this.config.pressureThresholds.high) {
         newPressure = MemoryPressureLevel.HIGH;
      } else if (heapUsage >= this.config.pressureThresholds.medium) {
         newPressure = MemoryPressureLevel.MEDIUM;
      } else if (heapUsage >= this.config.pressureThresholds.low) {
         newPressure = MemoryPressureLevel.LOW;
      } else {
         newPressure = MemoryPressureLevel.NORMAL;
      }

      if (newPressure !== this.currentPressure) {
         const oldPressure = this.currentPressure;
         this.currentPressure = newPressure;

         this.emit('pressure:changed', {
            from: oldPressure,
            to: newPressure,
            heapUsage,
         });

         // Execute pressure-specific callbacks
         const callbacks = this.pressureCallbacks.get(newPressure);
         if (callbacks) {
            callbacks.forEach((callback) => {
               try {
                  callback();
               } catch (error) {
                  console.warn('Pressure callback failed:', error);
               }
            });
         }

         // Auto-mitigation for high pressure
         if (
            newPressure === MemoryPressureLevel.HIGH ||
            newPressure === MemoryPressureLevel.CRITICAL
         ) {
            this.handleHighMemoryPressure();
         }
      }
   }

   // Handle high memory pressure
   private handleHighMemoryPressure(): void {
      const actions: string[] = [];

      // Force garbage collection
      if (global.gc) {
         global.gc();
         actions.push('forced-gc');
      }

      // Clear object pools
      for (const [name, pool] of this.objectPools.entries()) {
         const clearedCount = pool.available.length;
         pool.available = [];
         pool.currentSize = Math.max(0, pool.currentSize - clearedCount);
         actions.push(`cleared-pool-${name}`);
      }

      // Clear weak references
      this.cleanupWeakReferences();
      actions.push('cleanup-weak-refs');

      this.emit('pressure:mitigated', { actions, pressure: this.currentPressure });
   }

   // Setup pressure handlers
   private setupPressureHandlers(): void {
      // Register default handlers for different pressure levels
      this.onPressure(MemoryPressureLevel.HIGH, () => {
         console.warn('High memory pressure detected, performing cleanup...');
      });

      this.onPressure(MemoryPressureLevel.CRITICAL, () => {
         console.error('Critical memory pressure detected, emergency cleanup...');
      });
   }

   // Register weak reference
   registerWeakRef<T extends WeakKey>(obj: T, id: string, type = 'unknown'): WeakRef<T> {
      if (!this.config.enableWeakReferences) {
         return new WeakRef(obj);
      }

      const weakRef = new WeakRef(obj);

      const tracker: WeakRefTracker<T> = {
         ref: weakRef,
         id,
         type,
         createdAt: Date.now(),
         lastAccessed: Date.now(),
      };

      this.weakRefs.set(id, tracker);

      // Create finalizer
      const finalizer = new FinalizationRegistry<string>((heldValue) => {
         this.weakRefs.delete(heldValue);
         this.emit('weakref:finalized', { id: heldValue, type });
      });

      finalizer.register(obj, id);
      this.finalizers.set(id, finalizer);

      return weakRef;
   }

   // Cleanup weak references
   private cleanupWeakReferences(): void {
      let cleanedCount = 0;

      for (const [id, tracker] of this.weakRefs.entries()) {
         if (!tracker.ref.deref()) {
            this.weakRefs.delete(id);
            this.finalizers.delete(id);
            cleanedCount++;
         }
      }

      if (cleanedCount > 0) {
         this.emit('weakref:cleanup', { cleanedCount });
      }
   }

   // Public API methods

   // Get current memory statistics
   getMemoryStats(): MemoryStats {
      const memUsage = process.memoryUsage();

      return {
         timestamp: Date.now(),
         heap: {
            used: memUsage.heapUsed,
            total: memUsage.heapTotal,
            limit: this.config.maxHeapSize,
            usage: (memUsage.heapUsed / memUsage.heapTotal) * 100,
         },
         external: memUsage.external,
         rss: memUsage.rss,
         arrayBuffers: memUsage.arrayBuffers || 0,
         pressure: this.currentPressure,
         gc: {
            count: this.gcCount,
            totalTime: this.gcTotalTime,
            averageTime: this.gcCount > 0 ? this.gcTotalTime / this.gcCount : 0,
            lastGC:
               this.gcHistory.length > 0
                  ? this.gcHistory[this.gcHistory.length - 1]?.timestamp || 0
                  : 0,
         },
         objectPools: this.getPoolStats(),
         leaks: [...this.detectedLeaks],
      };
   }

   // Get object pool statistics
   getPoolStats(): PoolStats[] {
      return Array.from(this.objectPools.values()).map((pool) => ({
         name: pool.name,
         maxSize: pool.maxSize,
         currentSize: pool.currentSize,
         available: pool.available.length,
         totalCreated: pool.totalCreated,
         totalReused: pool.totalReused,
         totalDestroyed: pool.totalDestroyed,
         hitRate: pool.totalCreated > 0 ? (pool.totalReused / pool.totalCreated) * 100 : 0,
         memoryUsage: pool.available.length * 64, // Rough estimate
      }));
   }

   // Get GC history
   getGCHistory(): GCStats[] {
      return [...this.gcHistory];
   }

   // Get detected memory leaks
   getMemoryLeaks(): MemoryLeak[] {
      return [...this.detectedLeaks];
   }

   // Clear resolved memory leaks
   clearResolvedLeaks(): number {
      const initialCount = this.detectedLeaks.length;
      // In a real implementation, you'd mark leaks as resolved
      // For now, we'll clear old leaks (> 1 hour)
      const oneHourAgo = Date.now() - 60 * 60 * 1000;
      this.detectedLeaks = this.detectedLeaks.filter((leak) => leak.detectedAt > oneHourAgo);
      return initialCount - this.detectedLeaks.length;
   }

   // Register pressure callback
   onPressure(level: MemoryPressureLevel, callback: () => void): void {
      if (!this.pressureCallbacks.has(level)) {
         this.pressureCallbacks.set(level, []);
      }
      this.pressureCallbacks.get(level)!.push(callback);
   }

   // Get current memory pressure
   getCurrentPressure(): MemoryPressureLevel {
      return this.currentPressure;
   }

   // Force memory cleanup
   async forceCleanup(): Promise<void> {
      const startTime = Date.now();
      const beforeMemory = process.memoryUsage();

      // Perform garbage collection
      this.performGC();

      // Clean object pools
      let poolsCleared = 0;
      for (const [name, pool] of this.objectPools.entries()) {
         const before = pool.available.length;
         pool.available = pool.available.slice(0, Math.floor(pool.maxSize / 2));
         pool.currentSize = pool.available.length;
         poolsCleared += before - pool.available.length;
      }

      // Cleanup weak references
      this.cleanupWeakReferences();

      const afterMemory = process.memoryUsage();
      const duration = Date.now() - startTime;
      const freedMemory = beforeMemory.heapUsed - afterMemory.heapUsed;

      this.emit('cleanup:forced', {
         duration,
         freedMemory,
         poolsCleared,
         beforeMemory,
         afterMemory,
      });
   }

   // Update configuration
   updateConfig(newConfig: Partial<MemoryManagerConfig>): void {
      const oldConfig = { ...this.config };
      this.config = { ...this.config, ...newConfig };

      // Restart monitoring if intervals changed
      if (
         oldConfig.gcInterval !== this.config.gcInterval ||
         oldConfig.leakDetectionInterval !== this.config.leakDetectionInterval
      ) {
         this.stopMonitoring();
         this.startMonitoring();
      }

      this.emit('config:updated', { oldConfig, newConfig: this.config });
   }

   // Stop monitoring
   private stopMonitoring(): void {
      if (this.gcMonitorInterval) {
         clearInterval(this.gcMonitorInterval);
         this.gcMonitorInterval = null;
      }

      if (this.leakDetectionInterval) {
         clearInterval(this.leakDetectionInterval);
         this.leakDetectionInterval = null;
      }

      if (this.pressureMonitorInterval) {
         clearInterval(this.pressureMonitorInterval);
         this.pressureMonitorInterval = null;
      }
   }

   // Cleanup resources
   async cleanup(): Promise<void> {
      this.stopMonitoring();

      // Clear all object pools
      for (const pool of this.objectPools.values()) {
         pool.available = [];
         pool.currentSize = 0;
      }

      // Clear weak references
      this.weakRefs.clear();
      this.finalizers.clear();

      // Clear history
      this.memoryHistory = [];
      this.gcHistory = [];
      this.detectedLeaks = [];

      this.removeAllListeners();
   }
}

// Memory utilities
export const MemoryUtils = {
   // Format memory size
   formatMemorySize: (bytes: number): string => {
      const units = ['B', 'KB', 'MB', 'GB', 'TB'];
      let size = bytes;
      let unitIndex = 0;

      while (size >= 1024 && unitIndex < units.length - 1) {
         size /= 1024;
         unitIndex++;
      }

      return `${size.toFixed(2)} ${units[unitIndex]}`;
   },

   // Calculate memory pressure
   calculatePressure: (used: number, total: number): number => {
      return (used / total) * 100;
   },

   // Estimate object size
   estimateObjectSize: (obj: any): number => {
      let size = 0;

      const traverse = (value: any, visited = new Set()): void => {
         if (value === null || value === undefined) return;
         if (visited.has(value)) return;

         if (typeof value === 'object') {
            visited.add(value);

            if (Buffer.isBuffer(value)) {
               size += value.length;
            } else if (Array.isArray(value)) {
               size += value.length * 8; // Rough estimate for array overhead
               value.forEach((item) => traverse(item, visited));
            } else {
               size += Object.keys(value).length * 8; // Rough estimate for object overhead
               Object.values(value).forEach((item) => traverse(item, visited));
            }
         } else if (typeof value === 'string') {
            size += value.length * 2; // UTF-16 encoding
         } else {
            size += 8; // Rough estimate for primitives
         }
      };

      traverse(obj);
      return size;
   },

   // Create memory-efficient array
   createEfficientArray: <T>(initialCapacity = 0): T[] => {
      const array: T[] = [];
      if (initialCapacity > 0) {
         array.length = initialCapacity;
         array.length = 0; // Reset length but keep capacity
      }
      return array;
   },

   // Memory profiling decorator
   profile: (name: string) => {
      return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
         const method = descriptor.value;
         descriptor.value = async function (...args: any[]) {
            const beforeMemory = process.memoryUsage();
            const startTime = Date.now();

            try {
               const result = await method.apply(this, args);
               const afterMemory = process.memoryUsage();
               const duration = Date.now() - startTime;
               const memoryDelta = afterMemory.heapUsed - beforeMemory.heapUsed;

               getGlobalMemoryManager().emit('profile:recorded', {
                  name,
                  duration,
                  memoryDelta,
                  beforeMemory,
                  afterMemory,
               });

               return result;
            } catch (error) {
               const afterMemory = process.memoryUsage();
               const duration = Date.now() - startTime;
               const memoryDelta = afterMemory.heapUsed - beforeMemory.heapUsed;

               getGlobalMemoryManager().emit('profile:error', {
                  name,
                  duration,
                  memoryDelta,
                  error,
               });

               throw error;
            }
         };
      };
   },
};

// Export singleton instance
let globalMemoryManager: MemoryManager | null = null;

export function getGlobalMemoryManager(): MemoryManager {
   if (!globalMemoryManager) {
      globalMemoryManager = new MemoryManager();
   }
   return globalMemoryManager;
}
