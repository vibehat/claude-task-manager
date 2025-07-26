import { NextRequest } from 'next/server';
import { getGlobalErrorHandler, ErrorType } from '../core/error-handler';
import { getGlobalCLIValidator } from '../cli/cli-command-validator';

// Rate limiting configuration interfaces
export interface RateLimitRule {
   name: string;
   description: string;
   windowMs: number; // Time window in milliseconds
   maxRequests: number; // Maximum requests per window
   keyGenerator?: (req: NextRequest) => string;
   skipIf?: (req: NextRequest) => boolean;
   onLimitReached?: (req: NextRequest, rateLimitInfo: RateLimitInfo) => void;
   blockDuration?: number; // How long to block after limit reached (ms)
   strictMode?: boolean; // If true, block immediately on limit
   priority: number; // Higher priority rules are checked first
}

export interface RateLimitInfo {
   rule: string;
   key: string;
   windowMs: number;
   maxRequests: number;
   currentRequests: number;
   remainingRequests: number;
   resetTime: number;
   blocked: boolean;
   blockDuration?: number;
}

export interface RateLimitResult {
   allowed: boolean;
   info: RateLimitInfo;
   headers: Record<string, string>;
   error?: string;
}

// Rate limit store entry
interface RateLimitEntry {
   count: number;
   resetTime: number;
   firstRequestTime: number;
   blocked: boolean;
   blockUntil?: number;
   violations: number;
}

// Comprehensive rate limiting rules for Task Master
const DEFAULT_RATE_LIMIT_RULES: Record<string, RateLimitRule> = {
   // Global rate limiting (per IP)
   global_per_ip: {
      name: 'Global Per IP',
      description: 'Global rate limit per IP address',
      windowMs: 15 * 60 * 1000, // 15 minutes
      maxRequests: 200, // 200 requests per 15 minutes
      keyGenerator: (req) => `global:${getClientIP(req)}`,
      priority: 1,
      strictMode: false,
   },

   // API endpoint specific limits
   api_cli_execute: {
      name: 'CLI Execute API',
      description: 'Rate limit for CLI command execution',
      windowMs: 5 * 60 * 1000, // 5 minutes
      maxRequests: 20, // 20 CLI commands per 5 minutes
      keyGenerator: (req) => `cli:${getClientIP(req)}`,
      priority: 10,
      strictMode: true,
      blockDuration: 2 * 60 * 1000, // Block for 2 minutes on violation
   },

   api_tasks_write: {
      name: 'Tasks Write API',
      description: 'Rate limit for task modification operations',
      windowMs: 1 * 60 * 1000, // 1 minute
      maxRequests: 30, // 30 task operations per minute
      keyGenerator: (req) => `tasks_write:${getClientIP(req)}`,
      priority: 8,
      strictMode: false,
   },

   api_tasks_read: {
      name: 'Tasks Read API',
      description: 'Rate limit for task read operations',
      windowMs: 1 * 60 * 1000, // 1 minute
      maxRequests: 100, // 100 read operations per minute
      keyGenerator: (req) => `tasks_read:${getClientIP(req)}`,
      priority: 5,
      strictMode: false,
   },

   api_file_operations: {
      name: 'File Operations API',
      description: 'Rate limit for file system operations',
      windowMs: 5 * 60 * 1000, // 5 minutes
      maxRequests: 50, // 50 file operations per 5 minutes
      keyGenerator: (req) => `files:${getClientIP(req)}`,
      priority: 9,
      strictMode: true,
      blockDuration: 5 * 60 * 1000, // Block for 5 minutes on violation
   },

   // AI-powered operations (more restrictive)
   ai_operations: {
      name: 'AI Operations',
      description: 'Rate limit for AI-powered operations',
      windowMs: 15 * 60 * 1000, // 15 minutes
      maxRequests: 10, // 10 AI operations per 15 minutes
      keyGenerator: (req) => `ai:${getClientIP(req)}`,
      priority: 15,
      strictMode: true,
      blockDuration: 10 * 60 * 1000, // Block for 10 minutes on violation
   },

   // WebSocket connections
   websocket_connections: {
      name: 'WebSocket Connections',
      description: 'Rate limit for WebSocket connection attempts',
      windowMs: 5 * 60 * 1000, // 5 minutes
      maxRequests: 20, // 20 connection attempts per 5 minutes
      keyGenerator: (req) => `ws:${getClientIP(req)}`,
      priority: 7,
      strictMode: false,
   },

   // Burst protection (very short window)
   burst_protection: {
      name: 'Burst Protection',
      description: 'Protect against request bursts',
      windowMs: 10 * 1000, // 10 seconds
      maxRequests: 50, // 50 requests per 10 seconds
      keyGenerator: (req) => `burst:${getClientIP(req)}`,
      priority: 20,
      strictMode: true,
      blockDuration: 30 * 1000, // Block for 30 seconds on violation
   },

   // Suspicious activity detection
   suspicious_activity: {
      name: 'Suspicious Activity',
      description: 'Detect and limit suspicious request patterns',
      windowMs: 1 * 60 * 1000, // 1 minute
      maxRequests: 5, // 5 failed requests per minute
      keyGenerator: (req) => `suspicious:${getClientIP(req)}`,
      priority: 25,
      strictMode: true,
      blockDuration: 15 * 60 * 1000, // Block for 15 minutes on violation
   },
};

// Rate limiter class
export class TaskMasterRateLimiter {
   private store = new Map<string, RateLimitEntry>();
   private rules: Record<string, RateLimitRule>;
   private errorHandler = getGlobalErrorHandler();
   private cliValidator = getGlobalCLIValidator();
   private cleanupInterval: NodeJS.Timeout;
   private stats = {
      totalRequests: 0,
      allowedRequests: 0,
      blockedRequests: 0,
      activeBlocks: 0,
      ruleViolations: new Map<string, number>(),
   };

   constructor(customRules: Record<string, RateLimitRule> = {}) {
      this.rules = { ...DEFAULT_RATE_LIMIT_RULES, ...customRules };

      // Set up cleanup interval (every 2 minutes)
      this.cleanupInterval = setInterval(
         () => {
            this.cleanupExpiredEntries();
         },
         2 * 60 * 1000
      );
   }

   // Main rate limiting check
   async checkRateLimit(
      request: NextRequest,
      context?: {
         endpoint?: string;
         operation?: string;
         riskLevel?: 'low' | 'medium' | 'high';
      }
   ): Promise<RateLimitResult> {
      this.stats.totalRequests++;

      try {
         // Get applicable rules for this request
         const applicableRules = this.getApplicableRules(request, context);

         // Check each rule in priority order
         for (const rule of applicableRules) {
            const result = await this.checkRule(request, rule);

            if (!result.allowed) {
               this.stats.blockedRequests++;
               this.updateRuleViolations(rule.name);

               // Log rate limit violation
               await this.logRateLimitViolation(request, rule, result.info);

               return result;
            }
         }

         // All rules passed
         this.stats.allowedRequests++;

         // Return success with the most restrictive rule's info
         const mostRestrictiveRule = applicableRules[0];
         if (mostRestrictiveRule) {
            const info = await this.getRateLimitInfo(request, mostRestrictiveRule);
            return {
               allowed: true,
               info,
               headers: this.generateHeaders(info),
            };
         }

         // No applicable rules - allow by default
         return {
            allowed: true,
            info: {
               rule: 'none',
               key: 'default',
               windowMs: 0,
               maxRequests: Infinity,
               currentRequests: 0,
               remainingRequests: Infinity,
               resetTime: Date.now(),
               blocked: false,
            },
            headers: {},
         };
      } catch (error) {
         // Handle rate limiter errors
         const rateLimitError = this.errorHandler.createError(
            ErrorType.VALIDATION_SCHEMA_MISMATCH,
            `Rate limiter error: ${error.message}`,
            {
               endpoint: context?.endpoint,
               operation: context?.operation,
               component: 'RateLimiter',
            },
            error as Error
         );

         await this.errorHandler.handleError(rateLimitError, true);

         // On error, be conservative and block
         return {
            allowed: false,
            info: {
               rule: 'error',
               key: 'error',
               windowMs: 0,
               maxRequests: 0,
               currentRequests: 1,
               remainingRequests: 0,
               resetTime: Date.now(),
               blocked: true,
            },
            headers: {},
            error: error.message,
         };
      }
   }

   // Check a specific rule
   private async checkRule(request: NextRequest, rule: RateLimitRule): Promise<RateLimitResult> {
      // Skip if rule has skip condition
      if (rule.skipIf && rule.skipIf(request)) {
         return {
            allowed: true,
            info: {
               rule: rule.name,
               key: 'skipped',
               windowMs: rule.windowMs,
               maxRequests: rule.maxRequests,
               currentRequests: 0,
               remainingRequests: rule.maxRequests,
               resetTime: Date.now() + rule.windowMs,
               blocked: false,
            },
            headers: {},
         };
      }

      const key = rule.keyGenerator
         ? rule.keyGenerator(request)
         : `default:${getClientIP(request)}`;
      const now = Date.now();
      let entry = this.store.get(key);

      // Initialize entry if it doesn't exist
      if (!entry) {
         entry = {
            count: 0,
            resetTime: now + rule.windowMs,
            firstRequestTime: now,
            blocked: false,
            violations: 0,
         };
         this.store.set(key, entry);
      }

      // Check if currently blocked
      if (entry.blocked && entry.blockUntil && now < entry.blockUntil) {
         const info: RateLimitInfo = {
            rule: rule.name,
            key,
            windowMs: rule.windowMs,
            maxRequests: rule.maxRequests,
            currentRequests: entry.count,
            remainingRequests: 0,
            resetTime: entry.blockUntil,
            blocked: true,
            blockDuration: entry.blockUntil - now,
         };

         return {
            allowed: false,
            info,
            headers: this.generateHeaders(info),
            error: `Blocked due to rate limit violation. Unblocked at ${new Date(entry.blockUntil).toISOString()}`,
         };
      }

      // Reset window if expired
      if (now >= entry.resetTime) {
         entry.count = 0;
         entry.resetTime = now + rule.windowMs;
         entry.firstRequestTime = now;
         entry.blocked = false;
         delete entry.blockUntil;
      }

      // Increment request count
      entry.count++;

      // Check if limit exceeded
      if (entry.count > rule.maxRequests) {
         entry.violations++;

         // Apply block if configured
         if (rule.blockDuration && rule.strictMode) {
            entry.blocked = true;
            entry.blockUntil = now + rule.blockDuration;
            this.stats.activeBlocks++;
         }

         // Call onLimitReached callback if provided
         if (rule.onLimitReached) {
            const info: RateLimitInfo = {
               rule: rule.name,
               key,
               windowMs: rule.windowMs,
               maxRequests: rule.maxRequests,
               currentRequests: entry.count,
               remainingRequests: 0,
               resetTime: entry.resetTime,
               blocked: entry.blocked || false,
               blockDuration: rule.blockDuration,
            };

            try {
               rule.onLimitReached(request, info);
            } catch (callbackError) {
               console.error('Rate limit callback error:', callbackError);
            }
         }

         const info: RateLimitInfo = {
            rule: rule.name,
            key,
            windowMs: rule.windowMs,
            maxRequests: rule.maxRequests,
            currentRequests: entry.count,
            remainingRequests: 0,
            resetTime: entry.resetTime,
            blocked: entry.blocked || false,
            blockDuration: rule.blockDuration,
         };

         return {
            allowed: false,
            info,
            headers: this.generateHeaders(info),
            error: `Rate limit exceeded for ${rule.name}`,
         };
      }

      // Request allowed
      const info: RateLimitInfo = {
         rule: rule.name,
         key,
         windowMs: rule.windowMs,
         maxRequests: rule.maxRequests,
         currentRequests: entry.count,
         remainingRequests: rule.maxRequests - entry.count,
         resetTime: entry.resetTime,
         blocked: false,
      };

      return {
         allowed: true,
         info,
         headers: this.generateHeaders(info),
      };
   }

   // Get applicable rules for a request
   private getApplicableRules(
      request: NextRequest,
      context?: {
         endpoint?: string;
         operation?: string;
         riskLevel?: 'low' | 'medium' | 'high';
      }
   ): RateLimitRule[] {
      const endpoint = context?.endpoint || request.nextUrl.pathname;
      const operation = context?.operation;
      const riskLevel = context?.riskLevel;

      const applicableRules: RateLimitRule[] = [];

      // Always apply global and burst protection
      applicableRules.push(this.rules['global_per_ip']);
      applicableRules.push(this.rules['burst_protection']);

      // Apply endpoint-specific rules
      if (endpoint.includes('/api/cli-execute')) {
         applicableRules.push(this.rules['api_cli_execute']);

         // Check if this is an AI-powered command
         if (this.isAIPoweredEndpoint(request)) {
            applicableRules.push(this.rules['ai_operations']);
         }
      } else if (endpoint.includes('/api/tasks')) {
         if (request.method === 'GET') {
            applicableRules.push(this.rules['api_tasks_read']);
         } else {
            applicableRules.push(this.rules['api_tasks_write']);
         }
      } else if (endpoint.includes('/api/fs-operations') || endpoint.includes('/api/file-watch')) {
         applicableRules.push(this.rules['api_file_operations']);
      } else if (endpoint.includes('/api/websocket')) {
         applicableRules.push(this.rules['websocket_connections']);
      }

      // Apply risk-based rules
      if (riskLevel === 'high') {
         applicableRules.push(this.rules['suspicious_activity']);
      }

      // Sort by priority (higher priority first)
      return applicableRules
         .filter((rule) => rule !== undefined)
         .sort((a, b) => b.priority - a.priority);
   }

   // Check if request is for AI-powered operation
   private isAIPoweredEndpoint(request: NextRequest): boolean {
      try {
         const url = request.nextUrl;
         const command = url.searchParams.get('command');

         if (command) {
            const rateLimitGroup = this.cliValidator.getRateLimitGroup(command);
            return rateLimitGroup === 'ai';
         }

         return false;
      } catch {
         return false;
      }
   }

   // Get rate limit info for a rule
   private async getRateLimitInfo(
      request: NextRequest,
      rule: RateLimitRule
   ): Promise<RateLimitInfo> {
      const key = rule.keyGenerator
         ? rule.keyGenerator(request)
         : `default:${getClientIP(request)}`;
      const entry = this.store.get(key);

      if (!entry) {
         return {
            rule: rule.name,
            key,
            windowMs: rule.windowMs,
            maxRequests: rule.maxRequests,
            currentRequests: 0,
            remainingRequests: rule.maxRequests,
            resetTime: Date.now() + rule.windowMs,
            blocked: false,
         };
      }

      return {
         rule: rule.name,
         key,
         windowMs: rule.windowMs,
         maxRequests: rule.maxRequests,
         currentRequests: entry.count,
         remainingRequests: Math.max(0, rule.maxRequests - entry.count),
         resetTime: entry.resetTime,
         blocked: entry.blocked || false,
         blockDuration: entry.blockUntil ? entry.blockUntil - Date.now() : undefined,
      };
   }

   // Generate rate limit headers
   private generateHeaders(info: RateLimitInfo): Record<string, string> {
      const headers: Record<string, string> = {
         'X-RateLimit-Limit': info.maxRequests.toString(),
         'X-RateLimit-Remaining': info.remainingRequests.toString(),
         'X-RateLimit-Reset': Math.ceil(info.resetTime / 1000).toString(),
         'X-RateLimit-Window': Math.ceil(info.windowMs / 1000).toString(),
      };

      if (info.blocked && info.blockDuration) {
         headers['Retry-After'] = Math.ceil(info.blockDuration / 1000).toString();
      }

      return headers;
   }

   // Log rate limit violation
   private async logRateLimitViolation(
      request: NextRequest,
      rule: RateLimitRule,
      info: RateLimitInfo
   ): Promise<void> {
      const rateLimitError = this.errorHandler.createError(
         ErrorType.VALIDATION_RANGE_ERROR,
         `Rate limit exceeded: ${rule.name}`,
         {
            rule: rule.name,
            endpoint: request.nextUrl.pathname,
            method: request.method,
            clientIP: getClientIP(request),
            userAgent: request.headers.get('user-agent'),
            currentRequests: info.currentRequests,
            maxRequests: info.maxRequests,
            windowMs: info.windowMs,
            blocked: info.blocked,
            component: 'RateLimiter',
         }
      );

      await this.errorHandler.handleError(rateLimitError, true);
   }

   // Update rule violation statistics
   private updateRuleViolations(ruleName: string): void {
      const current = this.stats.ruleViolations.get(ruleName) || 0;
      this.stats.ruleViolations.set(ruleName, current + 1);
   }

   // Clean up expired entries
   private cleanupExpiredEntries(): void {
      const now = Date.now();
      let cleanedCount = 0;

      for (const [key, entry] of this.store.entries()) {
         // Remove entries that are expired and not blocked
         if (
            now >= entry.resetTime &&
            (!entry.blocked || (entry.blockUntil && now >= entry.blockUntil))
         ) {
            this.store.delete(key);
            cleanedCount++;

            if (entry.blocked) {
               this.stats.activeBlocks = Math.max(0, this.stats.activeBlocks - 1);
            }
         }
      }

      if (cleanedCount > 0) {
         console.log(`Rate limiter cleaned up ${cleanedCount} expired entries`);
      }
   }

   // Public API methods

   // Get current rate limit status for a request
   async getRateLimitStatus(request: NextRequest): Promise<RateLimitInfo[]> {
      const applicableRules = this.getApplicableRules(request);
      const statuses: RateLimitInfo[] = [];

      for (const rule of applicableRules) {
         const info = await this.getRateLimitInfo(request, rule);
         statuses.push(info);
      }

      return statuses;
   }

   // Reset rate limits for a specific key or IP
   resetRateLimit(key: string): boolean {
      if (this.store.has(key)) {
         const entry = this.store.get(key)!;
         if (entry.blocked) {
            this.stats.activeBlocks = Math.max(0, this.stats.activeBlocks - 1);
         }
         this.store.delete(key);
         return true;
      }
      return false;
   }

   // Reset rate limits for an IP across all rules
   resetRateLimitForIP(ip: string): number {
      let resetCount = 0;

      for (const [key, entry] of this.store.entries()) {
         if (key.includes(ip)) {
            if (entry.blocked) {
               this.stats.activeBlocks = Math.max(0, this.stats.activeBlocks - 1);
            }
            this.store.delete(key);
            resetCount++;
         }
      }

      return resetCount;
   }

   // Get rate limiter statistics
   getStats() {
      return {
         ...this.stats,
         activeEntries: this.store.size,
         ruleViolations: Object.fromEntries(this.stats.ruleViolations),
         successRate:
            this.stats.totalRequests > 0
               ? (this.stats.allowedRequests / this.stats.totalRequests) * 100
               : 100,
      };
   }

   // Add or update a rate limit rule
   addRule(name: string, rule: RateLimitRule): void {
      this.rules[name] = rule;
   }

   // Remove a rate limit rule
   removeRule(name: string): boolean {
      if (this.rules[name]) {
         delete this.rules[name];
         return true;
      }
      return false;
   }

   // Get all rules
   getRules(): Record<string, RateLimitRule> {
      return { ...this.rules };
   }

   // Update rule configuration
   updateRule(name: string, updates: Partial<RateLimitRule>): boolean {
      if (this.rules[name]) {
         this.rules[name] = { ...this.rules[name], ...updates };
         return true;
      }
      return false;
   }

   // Clean up resources
   cleanup(): void {
      if (this.cleanupInterval) {
         clearInterval(this.cleanupInterval);
      }
      this.store.clear();
      this.stats.activeBlocks = 0;
   }
}

// Helper function to get client IP
function getClientIP(request: NextRequest): string {
   const forwarded = request.headers.get('x-forwarded-for');
   const realIP = request.headers.get('x-real-ip');
   const remoteAddress = request.ip;

   if (forwarded) {
      return forwarded.split(',')[0].trim();
   }
   if (realIP) {
      return realIP;
   }
   return remoteAddress || '127.0.0.1';
}

// Export singleton instance
let globalRateLimiter: TaskMasterRateLimiter | null = null;

export function getGlobalRateLimiter(): TaskMasterRateLimiter {
   if (!globalRateLimiter) {
      globalRateLimiter = new TaskMasterRateLimiter();
   }
   return globalRateLimiter;
}

// Export types and constants
export { DEFAULT_RATE_LIMIT_RULES };
