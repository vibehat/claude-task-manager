import { EventEmitter } from 'events';
import { getGlobalErrorHandler, ErrorType } from './error-handler';
import { getGlobalPerformanceMonitor } from './performance-monitor';
import { getGlobalMemoryManager } from './memory-manager';

// Benchmark configuration
export interface BenchmarkConfig {
   iterations: number; // Number of iterations to run
   warmupIterations: number; // Warmup iterations before measurement
   timeout: number; // Timeout per test in milliseconds
   enableMemoryProfiling: boolean; // Track memory usage during tests
   enableTimingProfiling: boolean; // Detailed timing measurements
   enableConcurrency: boolean; // Test concurrent execution
   maxConcurrency: number; // Maximum concurrent operations
   enableDataCollection: boolean; // Collect detailed performance data
   enableComparison: boolean; // Enable benchmark comparison
   outputFormat: 'json' | 'table' | 'csv'; // Output format
   enableRealTimeUpdates: boolean; // Real-time progress updates
}

// Benchmark test interface
export interface BenchmarkTest {
   name: string;
   description?: string;
   category: string;
   setup?: () => Promise<void> | void;
   teardown?: () => Promise<void> | void;
   test: () => Promise<any> | any;
   expectedResultValidator?: (result: any) => boolean;
   tags?: string[];
   skip?: boolean;
   timeout?: number;
}

// Benchmark result
export interface BenchmarkResult {
   testName: string;
   category: string;
   iterations: number;
   timing: {
      min: number;
      max: number;
      avg: number;
      median: number;
      p95: number;
      p99: number;
      total: number;
      stdDev: number;
   };
   memory: {
      start: number;
      end: number;
      peak: number;
      average: number;
      delta: number;
      gcCount: number;
   };
   throughput: {
      operationsPerSecond: number;
      operationsPerMinute: number;
      mbPerSecond?: number;
   };
   errors: BenchmarkError[];
   metadata: {
      timestamp: number;
      nodeVersion: string;
      platform: string;
      cpuCores: number;
      memoryLimit: number;
      tags: string[];
   };
}

export interface BenchmarkError {
   iteration: number;
   error: string;
   stackTrace?: string;
   timestamp: number;
}

// Benchmark suite
export interface BenchmarkSuite {
   name: string;
   description?: string;
   tests: BenchmarkTest[];
   config: BenchmarkConfig;
   beforeAll?: () => Promise<void> | void;
   afterAll?: () => Promise<void> | void;
   beforeEach?: () => Promise<void> | void;
   afterEach?: () => Promise<void> | void;
}

// Comparison result
export interface BenchmarkComparison {
   testName: string;
   baseline: BenchmarkResult;
   comparison: BenchmarkResult;
   differences: {
      timing: {
         avgChange: number; // Percentage change
         medianChange: number;
         p95Change: number;
      };
      memory: {
         peakChange: number;
         deltaChange: number;
      };
      throughput: {
         opsChange: number;
      };
      significance: 'significant' | 'moderate' | 'minimal' | 'negligible';
      improved: boolean;
   };
}

// Load test configuration
export interface LoadTestConfig {
   duration: number; // Test duration in milliseconds
   rampUpTime: number; // Ramp up time in milliseconds
   rampDownTime: number; // Ramp down time in milliseconds
   targetRPS: number; // Target requests per second
   maxConcurrency: number; // Maximum concurrent operations
   enableThrottling: boolean; // Enable request throttling
   enableCircuitBreaker: boolean; // Enable circuit breaker pattern
   circuitBreakerThreshold: number; // Error threshold for circuit breaker
}

export interface LoadTestResult {
   testName: string;
   config: LoadTestConfig;
   duration: number;
   totalOperations: number;
   successfulOperations: number;
   failedOperations: number;
   averageResponseTime: number;
   throughput: number;
   errorRate: number;
   latencyDistribution: {
      p50: number;
      p90: number;
      p95: number;
      p99: number;
      p999: number;
   };
   memoryUsage: {
      start: number;
      end: number;
      peak: number;
      average: number;
   };
   timeline: LoadTestDataPoint[];
}

export interface LoadTestDataPoint {
   timestamp: number;
   activeOperations: number;
   operationsPerSecond: number;
   responseTime: number;
   errorRate: number;
   memoryUsage: number;
}

// Default configuration
const DEFAULT_CONFIG: BenchmarkConfig = {
   iterations: 1000,
   warmupIterations: 100,
   timeout: 30000, // 30 seconds
   enableMemoryProfiling: true,
   enableTimingProfiling: true,
   enableConcurrency: false,
   maxConcurrency: 10,
   enableDataCollection: true,
   enableComparison: false,
   outputFormat: 'json',
   enableRealTimeUpdates: true,
};

// Main benchmark runner class
export class PerformanceBenchmark extends EventEmitter {
   private config: BenchmarkConfig;
   private errorHandler = getGlobalErrorHandler();
   private performanceMonitor = getGlobalPerformanceMonitor();
   private memoryManager = getGlobalMemoryManager();

   // Benchmark state
   private isRunning = false;
   private currentSuite: BenchmarkSuite | null = null;
   private results = new Map<string, BenchmarkResult[]>();
   private comparisons = new Map<string, BenchmarkComparison[]>();

   constructor(config: Partial<BenchmarkConfig> = {}) {
      super();
      this.config = { ...DEFAULT_CONFIG, ...config };
   }

   // Run a single benchmark test
   async runTest(test: BenchmarkTest): Promise<BenchmarkResult> {
      const startTime = Date.now();
      const timings: number[] = [];
      const memoryReadings: number[] = [];
      const errors: BenchmarkError[] = [];

      let initialMemory = 0;
      let peakMemory = 0;
      let gcCountStart = 0;

      try {
         // Setup phase
         if (test.setup) {
            await test.setup();
         }

         // Get initial memory state
         if (this.config.enableMemoryProfiling) {
            const memStats = this.memoryManager.getMemoryStats();
            initialMemory = memStats.heap.used;
            gcCountStart = memStats.gc.count;
         }

         // Warmup iterations
         this.emit('warmup:start', {
            testName: test.name,
            iterations: this.config.warmupIterations,
         });

         for (let i = 0; i < this.config.warmupIterations; i++) {
            try {
               await this.runSingleIteration(test);
            } catch (error) {
               console.warn(`Warmup iteration ${i} failed:`, error);
            }
         }

         this.emit('warmup:complete', { testName: test.name });

         // Force GC before actual test
         if (global.gc && this.config.enableMemoryProfiling) {
            global.gc();
         }

         // Main benchmark iterations
         this.emit('test:start', { testName: test.name, iterations: this.config.iterations });

         for (let i = 0; i < this.config.iterations; i++) {
            const iterationStart = process.hrtime.bigint();
            let iterationMemoryStart = 0;

            try {
               if (this.config.enableMemoryProfiling) {
                  iterationMemoryStart = process.memoryUsage().heapUsed;
               }

               // Run test iteration
               const result = await this.runSingleIteration(test);

               // Validate result if validator provided
               if (test.expectedResultValidator && !test.expectedResultValidator(result)) {
                  throw new Error('Result validation failed');
               }

               const iterationEnd = process.hrtime.bigint();
               const duration = Number(iterationEnd - iterationStart) / 1000000; // Convert to milliseconds
               timings.push(duration);

               if (this.config.enableMemoryProfiling) {
                  const currentMemory = process.memoryUsage().heapUsed;
                  memoryReadings.push(currentMemory);
                  peakMemory = Math.max(peakMemory, currentMemory);
               }

               // Progress update
               if (
                  this.config.enableRealTimeUpdates &&
                  (i + 1) % Math.max(1, Math.floor(this.config.iterations / 20)) === 0
               ) {
                  this.emit('test:progress', {
                     testName: test.name,
                     iteration: i + 1,
                     total: this.config.iterations,
                     currentTiming: duration,
                     averageTiming: timings.reduce((sum, t) => sum + t, 0) / timings.length,
                  });
               }
            } catch (error) {
               errors.push({
                  iteration: i,
                  error: error.message,
                  stackTrace: error.stack,
                  timestamp: Date.now(),
               });

               // Stop test if too many errors
               if (errors.length > this.config.iterations * 0.1) {
                  // More than 10% failures
                  throw new Error(`Test failed due to excessive errors: ${errors.length}`);
               }
            }
         }

         // Get final memory state
         let finalMemory = 0;
         let gcCountEnd = 0;

         if (this.config.enableMemoryProfiling) {
            const memStats = this.memoryManager.getMemoryStats();
            finalMemory = memStats.heap.used;
            gcCountEnd = memStats.gc.count;
         }

         // Calculate statistics
         const result = this.calculateBenchmarkResult(test, timings, memoryReadings, errors, {
            initialMemory,
            finalMemory,
            peakMemory,
            gcCount: gcCountEnd - gcCountStart,
         });

         // Teardown phase
         if (test.teardown) {
            await test.teardown();
         }

         this.emit('test:complete', { testName: test.name, result });
         return result;
      } catch (error) {
         const benchmarkError = this.errorHandler.createError(
            ErrorType.SYSTEM_ERROR,
            `Benchmark test failed: ${error.message}`,
            {
               testName: test.name,
               category: test.category,
               component: 'PerformanceBenchmark',
            },
            error as Error
         );

         await this.errorHandler.handleError(benchmarkError, true);
         throw error;
      }
   }

   // Run single test iteration
   private async runSingleIteration(test: BenchmarkTest): Promise<any> {
      const timeout = test.timeout || this.config.timeout;

      return new Promise(async (resolve, reject) => {
         const timer = setTimeout(() => {
            reject(new Error(`Test iteration timed out after ${timeout}ms`));
         }, timeout);

         try {
            const result = await test.test();
            clearTimeout(timer);
            resolve(result);
         } catch (error) {
            clearTimeout(timer);
            reject(error);
         }
      });
   }

   // Calculate benchmark result statistics
   private calculateBenchmarkResult(
      test: BenchmarkTest,
      timings: number[],
      memoryReadings: number[],
      errors: BenchmarkError[],
      memoryInfo: {
         initialMemory: number;
         finalMemory: number;
         peakMemory: number;
         gcCount: number;
      }
   ): BenchmarkResult {
      // Sort timings for percentile calculations
      const sortedTimings = [...timings].sort((a, b) => a - b);

      // Calculate timing statistics
      const min = sortedTimings[0] || 0;
      const max = sortedTimings[sortedTimings.length - 1] || 0;
      const avg = timings.reduce((sum, t) => sum + t, 0) / timings.length || 0;
      const median = this.calculatePercentile(sortedTimings, 50);
      const p95 = this.calculatePercentile(sortedTimings, 95);
      const p99 = this.calculatePercentile(sortedTimings, 99);
      const total = timings.reduce((sum, t) => sum + t, 0);

      // Calculate standard deviation
      const variance = timings.reduce((sum, t) => sum + Math.pow(t - avg, 2), 0) / timings.length;
      const stdDev = Math.sqrt(variance);

      // Calculate memory statistics
      const avgMemory = memoryReadings.reduce((sum, m) => sum + m, 0) / memoryReadings.length || 0;
      const memoryDelta = memoryInfo.finalMemory - memoryInfo.initialMemory;

      // Calculate throughput
      const totalTimeSeconds = total / 1000;
      const operationsPerSecond =
         totalTimeSeconds > 0 ? this.config.iterations / totalTimeSeconds : 0;
      const operationsPerMinute = operationsPerSecond * 60;

      return {
         testName: test.name,
         category: test.category,
         iterations: this.config.iterations,
         timing: {
            min,
            max,
            avg,
            median,
            p95,
            p99,
            total,
            stdDev,
         },
         memory: {
            start: memoryInfo.initialMemory,
            end: memoryInfo.finalMemory,
            peak: memoryInfo.peakMemory,
            average: avgMemory,
            delta: memoryDelta,
            gcCount: memoryInfo.gcCount,
         },
         throughput: {
            operationsPerSecond,
            operationsPerMinute,
         },
         errors,
         metadata: {
            timestamp: Date.now(),
            nodeVersion: process.version,
            platform: process.platform,
            cpuCores: require('os').cpus().length,
            memoryLimit: this.memoryManager.getMemoryStats().heap.limit,
            tags: test.tags || [],
         },
      };
   }

   // Calculate percentile from sorted array
   private calculatePercentile(sortedArray: number[], percentile: number): number {
      if (sortedArray.length === 0) return 0;

      const index = Math.ceil((percentile / 100) * sortedArray.length) - 1;
      return sortedArray[Math.max(0, Math.min(index, sortedArray.length - 1))];
   }

   // Run benchmark suite
   async runSuite(suite: BenchmarkSuite): Promise<Map<string, BenchmarkResult>> {
      if (this.isRunning) {
         throw new Error('Another benchmark is already running');
      }

      this.isRunning = true;
      this.currentSuite = suite;
      const suiteResults = new Map<string, BenchmarkResult>();

      try {
         this.emit('suite:start', { suiteName: suite.name, testCount: suite.tests.length });

         // Run beforeAll hook
         if (suite.beforeAll) {
            await suite.beforeAll();
         }

         // Run each test
         for (const test of suite.tests) {
            if (test.skip) {
               this.emit('test:skipped', { testName: test.name });
               continue;
            }

            // Run beforeEach hook
            if (suite.beforeEach) {
               await suite.beforeEach();
            }

            try {
               const result = await this.runTest(test);
               suiteResults.set(test.name, result);

               // Store result for comparison
               if (!this.results.has(test.name)) {
                  this.results.set(test.name, []);
               }
               this.results.get(test.name)!.push(result);
            } catch (error) {
               this.emit('test:error', { testName: test.name, error: error.message });
               console.error(`Test ${test.name} failed:`, error);
            }

            // Run afterEach hook
            if (suite.afterEach) {
               await suite.afterEach();
            }
         }

         // Run afterAll hook
         if (suite.afterAll) {
            await suite.afterAll();
         }

         this.emit('suite:complete', {
            suiteName: suite.name,
            results: suiteResults,
            summary: this.generateSuiteSummary(suiteResults),
         });

         return suiteResults;
      } finally {
         this.isRunning = false;
         this.currentSuite = null;
      }
   }

   // Generate suite summary
   private generateSuiteSummary(results: Map<string, BenchmarkResult>) {
      const resultArray = Array.from(results.values());

      return {
         totalTests: resultArray.length,
         totalIterations: resultArray.reduce((sum, r) => sum + r.iterations, 0),
         averageResponseTime:
            resultArray.reduce((sum, r) => sum + r.timing.avg, 0) / resultArray.length,
         totalErrors: resultArray.reduce((sum, r) => sum + r.errors.length, 0),
         fastestTest: resultArray.reduce((fastest, current) =>
            current.timing.avg < fastest.timing.avg ? current : fastest
         ).testName,
         slowestTest: resultArray.reduce((slowest, current) =>
            current.timing.avg > slowest.timing.avg ? current : slowest
         ).testName,
      };
   }

   // Run concurrent load test
   async runLoadTest(
      testFunction: () => Promise<any>,
      config: LoadTestConfig
   ): Promise<LoadTestResult> {
      const startTime = Date.now();
      const timeline: LoadTestDataPoint[] = [];
      const responseTimes: number[] = [];
      const errors: string[] = [];

      let totalOperations = 0;
      let successfulOperations = 0;
      let activeOperations = 0;
      let isRampingUp = true;
      let isRampingDown = false;

      const initialMemory = process.memoryUsage().heapUsed;
      let peakMemory = initialMemory;
      let totalMemoryReadings = 0;
      let totalMemorySum = 0;

      this.emit('loadtest:start', { config });

      return new Promise((resolve, reject) => {
         const testEndTime = startTime + config.duration;
         const rampUpEndTime = startTime + config.rampUpTime;
         const rampDownStartTime = testEndTime - config.rampDownTime;

         // Data collection interval
         const dataCollectionInterval = setInterval(() => {
            const now = Date.now();
            const currentMemory = process.memoryUsage().heapUsed;
            peakMemory = Math.max(peakMemory, currentMemory);
            totalMemorySum += currentMemory;
            totalMemoryReadings++;

            const currentRPS = responseTimes.filter((t) => now - t < 1000).length;
            const currentErrorRate =
               errors.filter((e) => now - Date.parse(e) < 1000).length / Math.max(1, currentRPS);

            const dataPoint: LoadTestDataPoint = {
               timestamp: now,
               activeOperations,
               operationsPerSecond: currentRPS,
               responseTime:
                  responseTimes.length > 0
                     ? responseTimes.slice(-100).reduce((sum, t) => sum + t, 0) /
                       Math.min(100, responseTimes.length)
                     : 0,
               errorRate: currentErrorRate * 100,
               memoryUsage: currentMemory,
            };

            timeline.push(dataPoint);
            this.emit('loadtest:datapoint', dataPoint);
         }, 1000);

         // Test execution function
         const executeTest = async () => {
            if (Date.now() >= testEndTime) return;

            activeOperations++;
            totalOperations++;
            const operationStart = Date.now();

            try {
               await testFunction();
               const responseTime = Date.now() - operationStart;
               responseTimes.push(responseTime);
               successfulOperations++;
            } catch (error) {
               errors.push(new Date().toISOString());
            } finally {
               activeOperations--;
            }

            // Schedule next operation based on current phase
            const now = Date.now();
            let delay = 0;

            if (now < rampUpEndTime) {
               // Ramp up phase
               const rampProgress = (now - startTime) / config.rampUpTime;
               const currentRPS = config.targetRPS * rampProgress;
               delay = currentRPS > 0 ? 1000 / currentRPS : 1000;
            } else if (now < rampDownStartTime) {
               // Steady state phase
               delay = 1000 / config.targetRPS;
            } else {
               // Ramp down phase
               const rampProgress = (testEndTime - now) / config.rampDownTime;
               const currentRPS = config.targetRPS * rampProgress;
               delay = currentRPS > 0 ? 1000 / currentRPS : 1000;
            }

            // Respect concurrency limits
            if (activeOperations < config.maxConcurrency && Date.now() < testEndTime) {
               setTimeout(executeTest, Math.max(10, delay));
            }
         };

         // Start initial operations
         for (let i = 0; i < Math.min(config.maxConcurrency, config.targetRPS); i++) {
            setTimeout(executeTest, i * 100); // Stagger initial operations
         }

         // End test when duration is reached
         setTimeout(() => {
            clearInterval(dataCollectionInterval);

            // Wait for active operations to complete
            const waitForCompletion = () => {
               if (activeOperations === 0) {
                  const finalMemory = process.memoryUsage().heapUsed;
                  const averageMemory =
                     totalMemoryReadings > 0 ? totalMemorySum / totalMemoryReadings : initialMemory;

                  const result: LoadTestResult = {
                     testName: 'Load Test',
                     config,
                     duration: Date.now() - startTime,
                     totalOperations,
                     successfulOperations,
                     failedOperations: totalOperations - successfulOperations,
                     averageResponseTime:
                        responseTimes.reduce((sum, t) => sum + t, 0) / responseTimes.length || 0,
                     throughput: successfulOperations / ((Date.now() - startTime) / 1000),
                     errorRate: ((totalOperations - successfulOperations) / totalOperations) * 100,
                     latencyDistribution: {
                        p50: this.calculatePercentile(
                           [...responseTimes].sort((a, b) => a - b),
                           50
                        ),
                        p90: this.calculatePercentile(
                           [...responseTimes].sort((a, b) => a - b),
                           90
                        ),
                        p95: this.calculatePercentile(
                           [...responseTimes].sort((a, b) => a - b),
                           95
                        ),
                        p99: this.calculatePercentile(
                           [...responseTimes].sort((a, b) => a - b),
                           99
                        ),
                        p999: this.calculatePercentile(
                           [...responseTimes].sort((a, b) => a - b),
                           99.9
                        ),
                     },
                     memoryUsage: {
                        start: initialMemory,
                        end: finalMemory,
                        peak: peakMemory,
                        average: averageMemory,
                     },
                     timeline,
                  };

                  this.emit('loadtest:complete', result);
                  resolve(result);
               } else {
                  setTimeout(waitForCompletion, 100);
               }
            };

            waitForCompletion();
         }, config.duration);
      });
   }

   // Compare benchmark results
   compareBenchmarks(
      testName: string,
      baselineIndex: number = -2,
      comparisonIndex: number = -1
   ): BenchmarkComparison | null {
      const testResults = this.results.get(testName);
      if (!testResults || testResults.length < 2) {
         return null;
      }

      const baseline = testResults[testResults.length + baselineIndex];
      const comparison = testResults[testResults.length + comparisonIndex];

      if (!baseline || !comparison) {
         return null;
      }

      const avgChange = ((comparison.timing.avg - baseline.timing.avg) / baseline.timing.avg) * 100;
      const medianChange =
         ((comparison.timing.median - baseline.timing.median) / baseline.timing.median) * 100;
      const p95Change = ((comparison.timing.p95 - baseline.timing.p95) / baseline.timing.p95) * 100;
      const peakMemoryChange =
         ((comparison.memory.peak - baseline.memory.peak) / baseline.memory.peak) * 100;
      const memoryDeltaChange =
         ((comparison.memory.delta - baseline.memory.delta) /
            Math.abs(baseline.memory.delta || 1)) *
         100;
      const throughputChange =
         ((comparison.throughput.operationsPerSecond - baseline.throughput.operationsPerSecond) /
            baseline.throughput.operationsPerSecond) *
         100;

      // Determine significance
      let significance: BenchmarkComparison['differences']['significance'];
      const avgChangeAbs = Math.abs(avgChange);

      if (avgChangeAbs > 20) {
         significance = 'significant';
      } else if (avgChangeAbs > 10) {
         significance = 'moderate';
      } else if (avgChangeAbs > 5) {
         significance = 'minimal';
      } else {
         significance = 'negligible';
      }

      const improved = avgChange < 0; // Lower timing is better

      const comparisonResult: BenchmarkComparison = {
         testName,
         baseline,
         comparison,
         differences: {
            timing: {
               avgChange,
               medianChange,
               p95Change,
            },
            memory: {
               peakChange: peakMemoryChange,
               deltaChange: memoryDeltaChange,
            },
            throughput: {
               opsChange: throughputChange,
            },
            significance,
            improved,
         },
      };

      // Store comparison
      if (!this.comparisons.has(testName)) {
         this.comparisons.set(testName, []);
      }
      this.comparisons.get(testName)!.push(comparisonResult);

      return comparisonResult;
   }

   // Export results
   exportResults(format: 'json' | 'csv' | 'table' = 'json'): string {
      const allResults = Array.from(this.results.entries()).map(([testName, results]) => ({
         testName,
         results: results[results.length - 1], // Latest result
      }));

      switch (format) {
         case 'json':
            return JSON.stringify(allResults, null, 2);

         case 'csv':
            return this.generateCSV(allResults);

         case 'table':
            return this.generateTable(allResults);

         default:
            return JSON.stringify(allResults, null, 2);
      }
   }

   // Generate CSV format
   private generateCSV(results: any[]): string {
      if (results.length === 0) return '';

      const headers = [
         'Test Name',
         'Category',
         'Iterations',
         'Avg Time (ms)',
         'Min Time (ms)',
         'Max Time (ms)',
         'P95 (ms)',
         'P99 (ms)',
         'Ops/sec',
         'Memory Delta (bytes)',
         'Errors',
         'Timestamp',
      ];

      const rows = results.map(({ testName, results: r }) => [
         testName,
         r.category,
         r.iterations,
         r.timing.avg.toFixed(3),
         r.timing.min.toFixed(3),
         r.timing.max.toFixed(3),
         r.timing.p95.toFixed(3),
         r.timing.p99.toFixed(3),
         r.throughput.operationsPerSecond.toFixed(2),
         r.memory.delta,
         r.errors.length,
         new Date(r.metadata.timestamp).toISOString(),
      ]);

      return [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
   }

   // Generate table format
   private generateTable(results: any[]): string {
      if (results.length === 0) return 'No results available';

      const table = [
         '┌─────────────────────────────────────────────────────────────────────────────────────────┐',
         '│                                   Benchmark Results                                     │',
         '├─────────────────────────────────────────────────────────────────────────────────────────┤',
      ];

      for (const { testName, results: r } of results) {
         table.push(`│ Test: ${testName.padEnd(80)} │`);
         table.push(`│   Category: ${r.category.padEnd(72)} │`);
         table.push(`│   Iterations: ${r.iterations.toString().padEnd(68)} │`);
         table.push(`│   Avg Time: ${r.timing.avg.toFixed(3).padEnd(68)} ms │`);
         table.push(`│   P95: ${r.timing.p95.toFixed(3).padEnd(73)} ms │`);
         table.push(
            `│   Throughput: ${r.throughput.operationsPerSecond.toFixed(2).padEnd(64)} ops/sec │`
         );
         table.push(`│   Errors: ${r.errors.length.toString().padEnd(72)} │`);
         table.push(
            '├─────────────────────────────────────────────────────────────────────────────────────────┤'
         );
      }

      table.push(
         '└─────────────────────────────────────────────────────────────────────────────────────────┘'
      );
      return table.join('\n');
   }

   // Get benchmark history
   getHistory(testName?: string): Map<string, BenchmarkResult[]> {
      if (testName) {
         const results = this.results.get(testName);
         if (results) {
            const history = new Map<string, BenchmarkResult[]>();
            history.set(testName, results);
            return history;
         }
         return new Map();
      }

      return new Map(this.results);
   }

   // Clear benchmark results
   clearResults(testName?: string): void {
      if (testName) {
         this.results.delete(testName);
         this.comparisons.delete(testName);
      } else {
         this.results.clear();
         this.comparisons.clear();
      }
   }

   // Get current status
   getStatus() {
      return {
         isRunning: this.isRunning,
         currentSuite: this.currentSuite?.name || null,
         totalTests: this.results.size,
         totalResults: Array.from(this.results.values()).reduce(
            (sum, results) => sum + results.length,
            0
         ),
         config: this.config,
      };
   }

   // Update configuration
   updateConfig(newConfig: Partial<BenchmarkConfig>): void {
      this.config = { ...this.config, ...newConfig };
      this.emit('config:updated', this.config);
   }
}

// Utility functions for creating benchmark tests
export const BenchmarkUtils = {
   // Create a simple performance test
   createPerformanceTest: (
      name: string,
      testFunction: () => Promise<any> | any,
      options: Partial<BenchmarkTest> = {}
   ): BenchmarkTest => ({
      name,
      category: 'performance',
      test: testFunction,
      ...options,
   }),

   // Create a memory test
   createMemoryTest: (
      name: string,
      testFunction: () => Promise<any> | any,
      options: Partial<BenchmarkTest> = {}
   ): BenchmarkTest => ({
      name,
      category: 'memory',
      test: testFunction,
      ...options,
   }),

   // Create a throughput test
   createThroughputTest: (
      name: string,
      testFunction: () => Promise<any> | any,
      options: Partial<BenchmarkTest> = {}
   ): BenchmarkTest => ({
      name,
      category: 'throughput',
      test: testFunction,
      ...options,
   }),

   // Create test data
   createTestData: (size: number): any[] => {
      return Array.from({ length: size }, (_, i) => ({
         id: i,
         name: `Test Item ${i}`,
         value: Math.random() * 1000,
         timestamp: Date.now() + i,
         data: 'x'.repeat(100), // Add some bulk
      }));
   },

   // Measure function execution time
   measureTime: async <T>(fn: () => Promise<T> | T): Promise<{ result: T; time: number }> => {
      const start = process.hrtime.bigint();
      const result = await fn();
      const end = process.hrtime.bigint();
      const time = Number(end - start) / 1000000; // Convert to milliseconds
      return { result, time };
   },

   // Measure memory usage
   measureMemory: async <T>(
      fn: () => Promise<T> | T
   ): Promise<{ result: T; memoryDelta: number }> => {
      const memBefore = process.memoryUsage().heapUsed;
      const result = await fn();
      const memAfter = process.memoryUsage().heapUsed;
      return { result, memoryDelta: memAfter - memBefore };
   },
};

// Export singleton instance
export function createBenchmark(config?: Partial<BenchmarkConfig>): PerformanceBenchmark {
   return new PerformanceBenchmark(config);
}
