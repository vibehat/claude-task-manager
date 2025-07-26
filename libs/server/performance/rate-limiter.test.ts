import { jest } from '@jest/globals';
import { NextRequest } from 'next/server';
import { TaskMasterRateLimiter } from './rate-limiter';
import type { RateLimitRule, RateLimitResult } from './rate-limiter';

const createMockRequest = (url: string, options: any = {}) => {
   return new NextRequest(url, {
      method: options.method || 'GET',
      headers: {
         'x-forwarded-for': options.ip || '192.168.1.1',
         'user-agent': options.userAgent || 'test-agent',
         ...options.headers,
      },
   });
};

describe('TaskMasterRateLimiter', () => {
   let rateLimiter: TaskMasterRateLimiter;

   beforeEach(() => {
      rateLimiter = new TaskMasterRateLimiter();
   });

   afterEach(() => {
      rateLimiter.clear();
   });

   describe('Basic Rate Limiting', () => {
      test('should allow requests within limit', () => {
         const rule: RateLimitRule = {
            name: 'test-rule',
            description: 'Test rule',
            windowMs: 60000,
            maxRequests: 5,
            priority: 1,
         };

         const request = createMockRequest('http://localhost:3000/api/test');

         for (let i = 0; i < 5; i++) {
            const result = rateLimiter.checkRateLimit(request, rule);
            expect(result.allowed).toBe(true);
            expect(result.info.remainingRequests).toBe(4 - i);
         }
      });

      test('should block requests exceeding limit', () => {
         const rule: RateLimitRule = {
            name: 'test-rule',
            description: 'Test rule',
            windowMs: 60000,
            maxRequests: 3,
            priority: 1,
         };

         const request = createMockRequest('http://localhost:3000/api/test');

         // Use up the limit
         for (let i = 0; i < 3; i++) {
            const result = rateLimiter.checkRateLimit(request, rule);
            expect(result.allowed).toBe(true);
         }

         // Next request should be blocked
         const result = rateLimiter.checkRateLimit(request, rule);
         expect(result.allowed).toBe(false);
         expect(result.info.blocked).toBe(true);
      });

      test('should reset counter after window expires', () => {
         jest.useFakeTimers();

         const rule: RateLimitRule = {
            name: 'test-rule',
            description: 'Test rule',
            windowMs: 60000,
            maxRequests: 2,
            priority: 1,
         };

         const request = createMockRequest('http://localhost:3000/api/test');

         // Use up the limit
         rateLimiter.checkRateLimit(request, rule);
         rateLimiter.checkRateLimit(request, rule);

         // Should be blocked
         let result = rateLimiter.checkRateLimit(request, rule);
         expect(result.allowed).toBe(false);

         // Fast forward past window
         jest.advanceTimersByTime(61000);

         // Should be allowed again
         result = rateLimiter.checkRateLimit(request, rule);
         expect(result.allowed).toBe(true);
         expect(result.info.currentRequests).toBe(1);

         jest.useRealTimers();
      });
   });

   describe('Custom Key Generation', () => {
      test('should use custom key generator', () => {
         const rule: RateLimitRule = {
            name: 'user-rule',
            description: 'Per-user rule',
            windowMs: 60000,
            maxRequests: 3,
            priority: 1,
            keyGenerator: (req) => `user:${req.headers.get('user-id') || 'anonymous'}`,
         };

         const user1Request = createMockRequest('http://localhost:3000/api/test', {
            headers: { 'user-id': 'user1' },
         });

         const user2Request = createMockRequest('http://localhost:3000/api/test', {
            headers: { 'user-id': 'user2' },
         });

         // Both users should have separate limits
         for (let i = 0; i < 3; i++) {
            expect(rateLimiter.checkRateLimit(user1Request, rule).allowed).toBe(true);
            expect(rateLimiter.checkRateLimit(user2Request, rule).allowed).toBe(true);
         }

         // Both should be blocked after reaching their individual limits
         expect(rateLimiter.checkRateLimit(user1Request, rule).allowed).toBe(false);
         expect(rateLimiter.checkRateLimit(user2Request, rule).allowed).toBe(false);
      });
   });

   describe('Skip Conditions', () => {
      test('should skip rate limiting when condition is met', () => {
         const rule: RateLimitRule = {
            name: 'skip-rule',
            description: 'Rule with skip condition',
            windowMs: 60000,
            maxRequests: 1,
            priority: 1,
            skipIf: (req) => req.headers.get('x-admin-token') === 'admin-secret',
         };

         const adminRequest = createMockRequest('http://localhost:3000/api/test', {
            headers: { 'x-admin-token': 'admin-secret' },
         });

         const regularRequest = createMockRequest('http://localhost:3000/api/test');

         // Admin request should always be allowed
         for (let i = 0; i < 5; i++) {
            const result = rateLimiter.checkRateLimit(adminRequest, rule);
            expect(result.allowed).toBe(true);
         }

         // Regular request should be limited
         expect(rateLimiter.checkRateLimit(regularRequest, rule).allowed).toBe(true);
         expect(rateLimiter.checkRateLimit(regularRequest, rule).allowed).toBe(false);
      });
   });

   describe('Block Duration', () => {
      test('should respect block duration', () => {
         jest.useFakeTimers();

         const rule: RateLimitRule = {
            name: 'block-rule',
            description: 'Rule with block duration',
            windowMs: 60000,
            maxRequests: 2,
            blockDuration: 30000, // 30 seconds
            priority: 1,
         };

         const request = createMockRequest('http://localhost:3000/api/test');

         // Use up the limit
         rateLimiter.checkRateLimit(request, rule);
         rateLimiter.checkRateLimit(request, rule);

         // Should be blocked
         let result = rateLimiter.checkRateLimit(request, rule);
         expect(result.allowed).toBe(false);

         // Fast forward past window but within block duration
         jest.advanceTimersByTime(61000);
         result = rateLimiter.checkRateLimit(request, rule);
         expect(result.allowed).toBe(false); // Still blocked

         // Fast forward past block duration
         jest.advanceTimersByTime(30000);
         result = rateLimiter.checkRateLimit(request, rule);
         expect(result.allowed).toBe(true); // Now allowed

         jest.useRealTimers();
      });
   });

   describe('Multiple Rules', () => {
      test('should apply multiple rules in priority order', () => {
         const highPriorityRule: RateLimitRule = {
            name: 'high-priority',
            description: 'High priority rule',
            windowMs: 60000,
            maxRequests: 2,
            priority: 10,
         };

         const lowPriorityRule: RateLimitRule = {
            name: 'low-priority',
            description: 'Low priority rule',
            windowMs: 60000,
            maxRequests: 5,
            priority: 1,
         };

         const request = createMockRequest('http://localhost:3000/api/test');

         // Add rules (order shouldn't matter due to priority)
         rateLimiter.addRule(lowPriorityRule);
         rateLimiter.addRule(highPriorityRule);

         // Should be limited by high priority rule (2 requests)
         expect(rateLimiter.checkRequest(request).allowed).toBe(true);
         expect(rateLimiter.checkRequest(request).allowed).toBe(true);
         expect(rateLimiter.checkRequest(request).allowed).toBe(false);
      });
   });

   describe('Statistics and Monitoring', () => {
      test('should provide rate limit statistics', () => {
         const rule: RateLimitRule = {
            name: 'stats-rule',
            description: 'Rule for testing stats',
            windowMs: 60000,
            maxRequests: 3,
            priority: 1,
         };

         const request = createMockRequest('http://localhost:3000/api/test');

         // Generate some activity
         rateLimiter.checkRateLimit(request, rule);
         rateLimiter.checkRateLimit(request, rule);
         rateLimiter.checkRateLimit(request, rule);
         rateLimiter.checkRateLimit(request, rule); // This should be blocked

         const stats = rateLimiter.getStatistics();

         expect(stats.totalRequests).toBe(4);
         expect(stats.blockedRequests).toBe(1);
         expect(stats.allowedRequests).toBe(3);
         expect(stats.ruleStats).toHaveProperty('stats-rule');
      });

      test('should track violations and patterns', () => {
         const rule: RateLimitRule = {
            name: 'violation-rule',
            description: 'Rule for testing violations',
            windowMs: 60000,
            maxRequests: 1,
            priority: 1,
         };

         const request = createMockRequest('http://localhost:3000/api/test');

         // Generate violations
         rateLimiter.checkRateLimit(request, rule);
         rateLimiter.checkRateLimit(request, rule); // Violation
         rateLimiter.checkRateLimit(request, rule); // Violation

         const stats = rateLimiter.getStatistics();
         expect(stats.topViolators.length).toBeGreaterThan(0);
      });
   });

   describe('Headers', () => {
      test('should return appropriate rate limit headers', () => {
         const rule: RateLimitRule = {
            name: 'header-rule',
            description: 'Rule for testing headers',
            windowMs: 60000,
            maxRequests: 5,
            priority: 1,
         };

         const request = createMockRequest('http://localhost:3000/api/test');
         const result = rateLimiter.checkRateLimit(request, rule);

         expect(result.headers).toHaveProperty('X-RateLimit-Limit');
         expect(result.headers).toHaveProperty('X-RateLimit-Remaining');
         expect(result.headers).toHaveProperty('X-RateLimit-Reset');
         expect(result.headers['X-RateLimit-Limit']).toBe('5');
         expect(result.headers['X-RateLimit-Remaining']).toBe('4');
      });

      test('should include retry-after header when blocked', () => {
         const rule: RateLimitRule = {
            name: 'retry-rule',
            description: 'Rule for testing retry header',
            windowMs: 60000,
            maxRequests: 1,
            priority: 1,
         };

         const request = createMockRequest('http://localhost:3000/api/test');

         // Use up limit
         rateLimiter.checkRateLimit(request, rule);

         // Should be blocked with retry-after header
         const result = rateLimiter.checkRateLimit(request, rule);
         expect(result.allowed).toBe(false);
         expect(result.headers).toHaveProperty('Retry-After');
      });
   });

   describe('Cleanup and Memory Management', () => {
      test('should clean up expired entries', () => {
         jest.useFakeTimers();

         const rule: RateLimitRule = {
            name: 'cleanup-rule',
            description: 'Rule for testing cleanup',
            windowMs: 60000,
            maxRequests: 5,
            priority: 1,
         };

         const request = createMockRequest('http://localhost:3000/api/test');

         // Generate some entries
         rateLimiter.checkRateLimit(request, rule);

         // Fast forward to trigger cleanup
         jest.advanceTimersByTime(120000); // 2 minutes

         // Cleanup should have been triggered
         rateLimiter.cleanup();

         const stats = rateLimiter.getStatistics();
         expect(stats.activeEntries).toBe(0);

         jest.useRealTimers();
      });

      test('should clear all data', () => {
         const rule: RateLimitRule = {
            name: 'clear-rule',
            description: 'Rule for testing clear',
            windowMs: 60000,
            maxRequests: 5,
            priority: 1,
         };

         const request = createMockRequest('http://localhost:3000/api/test');

         rateLimiter.checkRateLimit(request, rule);
         rateLimiter.clear();

         const stats = rateLimiter.getStatistics();
         expect(stats.totalRequests).toBe(0);
         expect(stats.activeEntries).toBe(0);
      });
   });
});
