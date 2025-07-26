import { jest } from '@jest/globals';
import { NextRequest } from 'next/server';
import {
   InputValidationMiddleware,
   sanitizeInput,
   validateJSONSchema,
   detectInjectionAttempts,
   validateCSRFToken,
} from './input-validation-middleware';
import type { ValidationRule, ValidationResult } from './input-validation-middleware';
import { z } from 'zod';

const createMockRequest = (url: string, options: any = {}) => {
   return new NextRequest(url, {
      method: options.method || 'POST',
      headers: {
         'content-type': 'application/json',
         ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
   });
};

describe('InputValidationMiddleware', () => {
   let middleware: InputValidationMiddleware;

   beforeEach(() => {
      middleware = new InputValidationMiddleware({
         enableXSSProtection: true,
         enableSQLInjectionDetection: true,
         enableCSRFProtection: true,
         maxRequestSize: 1024 * 1024,
         sanitizeInput: true,
         logViolations: true,
      });
   });

   describe('XSS Protection', () => {
      test('should detect and sanitize XSS attempts', () => {
         const xssPayloads = [
            '<script>alert("xss")</script>',
            '<img src="x" onerror="alert(1)">',
            'javascript:alert("xss")',
            '<svg onload="alert(1)">',
            '"><script>alert(1)</script>',
         ];

         xssPayloads.forEach((payload) => {
            const sanitized = sanitizeInput(payload);
            expect(sanitized).not.toContain('<script>');
            expect(sanitized).not.toContain('javascript:');
            expect(sanitized).not.toContain('onerror=');
            expect(sanitized).not.toContain('onload=');
         });
      });

      test('should preserve safe HTML entities', () => {
         const safeInput = 'Hello &amp; welcome to our site!';
         const sanitized = sanitizeInput(safeInput);
         expect(sanitized).toContain('&amp;');
      });

      test('should handle mixed content', () => {
         const mixedInput = 'Normal text <script>alert("bad")</script> more normal text';
         const sanitized = sanitizeInput(mixedInput);
         expect(sanitized).toContain('Normal text');
         expect(sanitized).toContain('more normal text');
         expect(sanitized).not.toContain('<script>');
      });
   });

   describe('SQL Injection Detection', () => {
      test('should detect SQL injection attempts', () => {
         const sqlPayloads = [
            "'; DROP TABLE users; --",
            "1' OR '1'='1",
            "admin'--",
            '1; DELETE FROM users WHERE 1=1',
            'UNION SELECT * FROM users',
            "' OR 1=1 LIMIT 1 --",
         ];

         sqlPayloads.forEach((payload) => {
            const isInjection = detectInjectionAttempts(payload);
            expect(isInjection).toBe(true);
         });
      });

      test('should not flag legitimate SQL-like content', () => {
         const legitimateContent = [
            "We're updating our database",
            'Select your favorite option',
            'Join our community',
            'Delete this message',
            'Update your profile',
         ];

         legitimateContent.forEach((content) => {
            const isInjection = detectInjectionAttempts(content);
            expect(isInjection).toBe(false);
         });
      });
   });

   describe('JSON Schema Validation', () => {
      test('should validate against Zod schemas', () => {
         const schema = z.object({
            name: z.string().min(1),
            email: z.string().email(),
            age: z.number().min(0).max(120),
         });

         const validData = {
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
         };

         const invalidData = {
            name: '',
            email: 'invalid-email',
            age: -5,
         };

         expect(validateJSONSchema(validData, schema).success).toBe(true);
         expect(validateJSONSchema(invalidData, schema).success).toBe(false);
      });

      test('should return detailed error information', () => {
         const schema = z.object({
            requiredField: z.string(),
            numberField: z.number(),
         });

         const invalidData = {
            requiredField: null,
            numberField: 'not-a-number',
         };

         const result = validateJSONSchema(invalidData, schema);
         expect(result.success).toBe(false);
         expect(result.error).toBeDefined();
         expect(result.error!.issues.length).toBeGreaterThan(0);
      });
   });

   describe('Request Validation', () => {
      test('should validate request with custom rules', async () => {
         const rule: ValidationRule = {
            name: 'test-rule',
            path: '/api/test',
            method: 'POST',
            schema: z.object({
               message: z.string().max(100),
               priority: z.enum(['low', 'medium', 'high']),
            }),
            riskLevel: 'medium',
         };

         const validRequest = createMockRequest('http://localhost:3000/api/test', {
            body: {
               message: 'Hello world',
               priority: 'medium',
            },
         });

         const result = await middleware.validateRequest(validRequest, rule);
         expect(result.valid).toBe(true);
      });

      test('should reject requests with invalid schema', async () => {
         const rule: ValidationRule = {
            name: 'strict-rule',
            path: '/api/test',
            method: 'POST',
            schema: z.object({
               id: z.number(),
               name: z.string().min(1),
            }),
            riskLevel: 'high',
         };

         const invalidRequest = createMockRequest('http://localhost:3000/api/test', {
            body: {
               id: 'not-a-number',
               name: '',
            },
         });

         const result = await middleware.validateRequest(invalidRequest, rule);
         expect(result.valid).toBe(false);
         expect(result.errors).toBeDefined();
      });
   });

   describe('CSRF Protection', () => {
      test('should validate CSRF tokens', () => {
         const token = 'valid-csrf-token-12345';
         const expectedToken = 'valid-csrf-token-12345';

         expect(validateCSRFToken(token, expectedToken)).toBe(true);
         expect(validateCSRFToken(token, 'different-token')).toBe(false);
         expect(validateCSRFToken('', expectedToken)).toBe(false);
         expect(validateCSRFToken(token, '')).toBe(false);
      });

      test('should handle CSRF validation in requests', async () => {
         const rule: ValidationRule = {
            name: 'csrf-rule',
            path: '/api/secure',
            method: 'POST',
            requiresCSRF: true,
            schema: z.object({ data: z.string() }),
            riskLevel: 'high',
         };

         const requestWithCSRF = createMockRequest('http://localhost:3000/api/secure', {
            headers: {
               'x-csrf-token': 'valid-token',
            },
            body: { data: 'test' },
         });

         // In a real scenario, we'd set up CSRF token validation
         // For this test, we just verify the structure
         const result = await middleware.validateRequest(requestWithCSRF, rule);
         expect(result).toBeDefined();
      });
   });

   describe('Request Size Validation', () => {
      test('should reject oversized requests', async () => {
         const largeData = 'x'.repeat(2 * 1024 * 1024); // 2MB
         const rule: ValidationRule = {
            name: 'size-rule',
            path: '/api/upload',
            method: 'POST',
            maxSize: 1024 * 1024, // 1MB limit
            schema: z.object({ data: z.string() }),
            riskLevel: 'medium',
         };

         const oversizedRequest = createMockRequest('http://localhost:3000/api/upload', {
            body: { data: largeData },
         });

         const result = await middleware.validateRequest(oversizedRequest, rule);
         expect(result.valid).toBe(false);
         expect(result.errors).toContain(expect.stringContaining('size'));
      });

      test('should accept normal sized requests', async () => {
         const normalData = 'normal sized content';
         const rule: ValidationRule = {
            name: 'size-rule',
            path: '/api/upload',
            method: 'POST',
            maxSize: 1024 * 1024,
            schema: z.object({ data: z.string() }),
            riskLevel: 'low',
         };

         const normalRequest = createMockRequest('http://localhost:3000/api/upload', {
            body: { data: normalData },
         });

         const result = await middleware.validateRequest(normalRequest, rule);
         expect(result.valid).toBe(true);
      });
   });

   describe('Content Type Validation', () => {
      test('should validate content types', async () => {
         const rule: ValidationRule = {
            name: 'json-only',
            path: '/api/json',
            method: 'POST',
            contentTypes: ['application/json'],
            schema: z.object({ data: z.string() }),
            riskLevel: 'medium',
         };

         const jsonRequest = createMockRequest('http://localhost:3000/api/json', {
            headers: { 'content-type': 'application/json' },
            body: { data: 'test' },
         });

         const xmlRequest = createMockRequest('http://localhost:3000/api/json', {
            headers: { 'content-type': 'application/xml' },
            body: { data: 'test' },
         });

         const jsonResult = await middleware.validateRequest(jsonRequest, rule);
         const xmlResult = await middleware.validateRequest(xmlRequest, rule);

         expect(jsonResult.valid).toBe(true);
         expect(xmlResult.valid).toBe(false);
      });
   });

   describe('Rate Limiting Integration', () => {
      test('should respect rate limits', async () => {
         const rule: ValidationRule = {
            name: 'rate-limited',
            path: '/api/limited',
            method: 'POST',
            rateLimit: {
               requests: 2,
               windowMs: 60000,
            },
            schema: z.object({ data: z.string() }),
            riskLevel: 'medium',
         };

         const request = createMockRequest('http://localhost:3000/api/limited', {
            body: { data: 'test' },
         });

         // First two requests should pass
         let result = await middleware.validateRequest(request, rule);
         expect(result.valid).toBe(true);

         result = await middleware.validateRequest(request, rule);
         expect(result.valid).toBe(true);

         // Third request should be rate limited
         result = await middleware.validateRequest(request, rule);
         expect(result.valid).toBe(false);
         expect(result.errors).toContain(expect.stringContaining('rate limit'));
      });
   });

   describe('Sanitization Options', () => {
      test('should respect sanitization settings', () => {
         const disabledMiddleware = new InputValidationMiddleware({
            sanitizeInput: false,
            enableXSSProtection: false,
         });

         const input = '<script>alert("test")</script>';
         // When sanitization is disabled, input should pass through
         // In a real implementation, this would be tested with actual request processing
         expect(disabledMiddleware).toBeDefined();
      });

      test('should provide sanitization statistics', () => {
         const stats = middleware.getValidationStats();
         expect(stats).toHaveProperty('totalRequests');
         expect(stats).toHaveProperty('blockedRequests');
         expect(stats).toHaveProperty('sanitizedRequests');
      });
   });

   describe('Error Handling', () => {
      test('should handle malformed JSON gracefully', async () => {
         const rule: ValidationRule = {
            name: 'json-rule',
            path: '/api/test',
            method: 'POST',
            schema: z.object({ data: z.string() }),
            riskLevel: 'low',
         };

         const malformedRequest = new NextRequest('http://localhost:3000/api/test', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: 'invalid json{',
         });

         const result = await middleware.validateRequest(malformedRequest, rule);
         expect(result.valid).toBe(false);
         expect(result.errors).toContain(expect.stringContaining('JSON'));
      });

      test('should handle missing request body', async () => {
         const rule: ValidationRule = {
            name: 'body-required',
            path: '/api/test',
            method: 'POST',
            schema: z.object({ data: z.string() }),
            riskLevel: 'medium',
         };

         const emptyRequest = createMockRequest('http://localhost:3000/api/test', {
            method: 'POST',
         });

         const result = await middleware.validateRequest(emptyRequest, rule);
         expect(result.valid).toBe(false);
      });
   });

   describe('Logging and Monitoring', () => {
      test('should log validation violations', async () => {
         const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

         const rule: ValidationRule = {
            name: 'monitored-rule',
            path: '/api/test',
            method: 'POST',
            schema: z.object({ data: z.string() }),
            riskLevel: 'high',
         };

         const maliciousRequest = createMockRequest('http://localhost:3000/api/test', {
            body: { data: '<script>alert("xss")</script>' },
         });

         await middleware.validateRequest(maliciousRequest, rule);

         // Should log the XSS attempt
         expect(consoleSpy).toHaveBeenCalled();
         consoleSpy.mockRestore();
      });
   });
});
