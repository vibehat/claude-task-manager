import { NextRequest, NextResponse } from 'next/server';
import { getGlobalErrorHandler, ErrorType } from './error-handler';
import { rateLimit } from 'express-rate-limit';
import { z } from 'zod';
import crypto from 'crypto';

// Security configuration
export interface SecurityConfig {
   enableRateLimit: boolean;
   rateLimitRequests: number;
   rateLimitWindow: number; // in milliseconds
   enableCSRF: boolean;
   enableInputValidation: boolean;
   allowedOrigins: string[];
   maxRequestSize: number; // in bytes
   enableSecurityHeaders: boolean;
   enableAuditLogging: boolean;
   sessionTimeout: number; // in milliseconds
}

// Default security configuration
const DEFAULT_SECURITY_CONFIG: SecurityConfig = {
   enableRateLimit: true,
   rateLimitRequests: 100, // requests per window
   rateLimitWindow: 15 * 60 * 1000, // 15 minutes
   enableCSRF: true,
   enableInputValidation: true,
   allowedOrigins: ['http://localhost:3000', 'https://localhost:3000'],
   maxRequestSize: 10 * 1024 * 1024, // 10MB
   enableSecurityHeaders: true,
   enableAuditLogging: true,
   sessionTimeout: 60 * 60 * 1000, // 1 hour
};

// Rate limiting store
class RateLimitStore {
   private store = new Map<string, { count: number; resetTime: number }>();
   private cleanupInterval: NodeJS.Timeout;

   constructor() {
      // Clean up expired entries every 5 minutes
      this.cleanupInterval = setInterval(
         () => {
            const now = Date.now();
            for (const [key, value] of this.store.entries()) {
               if (now > value.resetTime) {
                  this.store.delete(key);
               }
            }
         },
         5 * 60 * 1000
      );
   }

   increment(key: string, windowMs: number): { count: number; resetTime: number } {
      const now = Date.now();
      const existing = this.store.get(key);

      if (!existing || now > existing.resetTime) {
         const entry = { count: 1, resetTime: now + windowMs };
         this.store.set(key, entry);
         return entry;
      }

      existing.count++;
      this.store.set(key, existing);
      return existing;
   }

   reset(key: string): void {
      this.store.delete(key);
   }

   cleanup(): void {
      if (this.cleanupInterval) {
         clearInterval(this.cleanupInterval);
      }
      this.store.clear();
   }
}

// Global rate limit store
const rateLimitStore = new RateLimitStore();

// Security audit logging
interface SecurityAuditLog {
   timestamp: string;
   event: string;
   severity: 'low' | 'medium' | 'high' | 'critical';
   clientId: string;
   ipAddress: string;
   userAgent: string;
   endpoint: string;
   method: string;
   details: Record<string, any>;
   blocked: boolean;
}

class SecurityAuditor {
   private logs: SecurityAuditLog[] = [];
   private maxLogs = 10000;
   private errorHandler = getGlobalErrorHandler();

   log(event: SecurityAuditLog): void {
      // Add to in-memory logs
      this.logs.unshift(event);

      // Keep only the most recent logs
      if (this.logs.length > this.maxLogs) {
         this.logs = this.logs.slice(0, this.maxLogs);
      }

      // Log to console with appropriate level
      const logLevel = this.getLogLevel(event.severity);
      const logMessage = `[SECURITY] ${event.event} - ${event.endpoint} (${event.clientId})`;

      switch (logLevel) {
         case 'error':
            console.error(logMessage, { details: event.details });
            break;
         case 'warn':
            console.warn(logMessage, { details: event.details });
            break;
         case 'info':
            console.info(logMessage, { details: event.details });
            break;
         default:
            console.log(logMessage, { details: event.details });
      }

      // For critical events, create error handler entry
      if (event.severity === 'critical') {
         const securityError = this.errorHandler.createError(
            ErrorType.VALIDATION_SCHEMA_MISMATCH,
            `Critical security event: ${event.event}`,
            {
               securityEvent: event.event,
               endpoint: event.endpoint,
               clientId: event.clientId,
               blocked: event.blocked,
            }
         );

         this.errorHandler.handleError(securityError, false);
      }
   }

   private getLogLevel(severity: string): string {
      switch (severity) {
         case 'critical':
         case 'high':
            return 'error';
         case 'medium':
            return 'warn';
         case 'low':
            return 'info';
         default:
            return 'debug';
      }
   }

   getRecentLogs(limit = 100): SecurityAuditLog[] {
      return this.logs.slice(0, limit);
   }

   getLogsByEvent(event: string, limit = 50): SecurityAuditLog[] {
      return this.logs.filter((log) => log.event === event).slice(0, limit);
   }

   getSecurityStats(): {
      totalLogs: number;
      criticalEvents: number;
      blockedRequests: number;
      recentActivity: SecurityAuditLog[];
   } {
      const critical = this.logs.filter((log) => log.severity === 'critical').length;
      const blocked = this.logs.filter((log) => log.blocked).length;

      return {
         totalLogs: this.logs.length,
         criticalEvents: critical,
         blockedRequests: blocked,
         recentActivity: this.logs.slice(0, 10),
      };
   }
}

// Global security auditor
const securityAuditor = new SecurityAuditor();

// Input validation schemas
const commonValidationSchemas = {
   taskId: z.string().regex(/^[\d\.]+$/, 'Invalid task ID format'),
   status: z.enum(['pending', 'in-progress', 'done', 'deferred', 'cancelled']),
   priority: z.enum(['high', 'medium', 'low']),
   command: z
      .string()
      .min(1)
      .max(50)
      .regex(/^[a-z-]+$/, 'Invalid command format'),
   filePath: z
      .string()
      .min(1)
      .max(500)
      .refine(
         (path) => !path.includes('..') && !path.startsWith('/') && !path.includes('~'),
         'Invalid file path'
      ),
};

// Security middleware class
export class TaskMasterSecurityMiddleware {
   private config: SecurityConfig;
   private auditor: SecurityAuditor;
   private errorHandler = getGlobalErrorHandler();

   constructor(config: Partial<SecurityConfig> = {}) {
      this.config = { ...DEFAULT_SECURITY_CONFIG, ...config };
      this.auditor = securityAuditor;
   }

   // Main middleware function
   async protect(request: NextRequest): Promise<NextResponse | null> {
      const startTime = Date.now();
      const clientId = this.generateClientId(request);
      const endpoint = request.nextUrl.pathname;
      const method = request.method;

      try {
         // 1. Security headers check
         if (this.config.enableSecurityHeaders) {
            const headerCheck = await this.validateSecurityHeaders(request);
            if (!headerCheck.valid) {
               return this.blockRequest(request, 'invalid_security_headers', headerCheck.reason, {
                  clientId,
                  endpoint,
                  method,
                  details: headerCheck.details,
               });
            }
         }

         // 2. Rate limiting
         if (this.config.enableRateLimit) {
            const rateLimitResult = await this.checkRateLimit(request, clientId);
            if (!rateLimitResult.allowed) {
               return this.blockRequest(request, 'rate_limit_exceeded', 'Too many requests', {
                  clientId,
                  endpoint,
                  method,
                  details: rateLimitResult,
               });
            }
         }

         // 3. CSRF protection
         if (this.config.enableCSRF && ['POST', 'PUT', 'DELETE'].includes(method)) {
            const csrfResult = await this.validateCSRF(request);
            if (!csrfResult.valid) {
               return this.blockRequest(request, 'csrf_validation_failed', csrfResult.reason, {
                  clientId,
                  endpoint,
                  method,
               });
            }
         }

         // 4. Origin validation
         const originResult = await this.validateOrigin(request);
         if (!originResult.valid) {
            return this.blockRequest(request, 'invalid_origin', originResult.reason, {
               clientId,
               endpoint,
               method,
               origin: request.headers.get('origin'),
            });
         }

         // 5. Request size validation
         const sizeResult = await this.validateRequestSize(request);
         if (!sizeResult.valid) {
            return this.blockRequest(request, 'request_too_large', sizeResult.reason, {
               clientId,
               endpoint,
               method,
               size: sizeResult.size,
            });
         }

         // 6. Input validation (if request has body)
         if (this.config.enableInputValidation && request.body) {
            const inputResult = await this.validateInput(request, endpoint);
            if (!inputResult.valid) {
               return this.blockRequest(request, 'input_validation_failed', inputResult.reason, {
                  clientId,
                  endpoint,
                  method,
                  errors: inputResult.errors,
               });
            }
         }

         // 7. Log successful validation
         if (this.config.enableAuditLogging) {
            this.auditor.log({
               timestamp: new Date().toISOString(),
               event: 'request_validated',
               severity: 'low',
               clientId,
               ipAddress: this.getClientIP(request),
               userAgent: request.headers.get('user-agent') || 'unknown',
               endpoint,
               method,
               details: {
                  processingTime: Date.now() - startTime,
                  checks: ['headers', 'rate_limit', 'csrf', 'origin', 'size', 'input'],
               },
               blocked: false,
            });
         }

         // All checks passed - request is allowed
         return null;
      } catch (error) {
         // Handle unexpected errors in security middleware
         const securityError = this.errorHandler.createError(
            ErrorType.VALIDATION_SCHEMA_MISMATCH,
            `Security middleware error: ${error.message}`,
            {
               clientId,
               endpoint,
               method,
               operation: 'security_middleware',
            },
            error as Error
         );

         await this.errorHandler.handleError(securityError, true);

         return this.blockRequest(request, 'security_middleware_error', 'Internal security error', {
            clientId,
            endpoint,
            method,
            error: error.message,
         });
      }
   }

   // Generate unique client identifier
   private generateClientId(request: NextRequest): string {
      const ip = this.getClientIP(request);
      const userAgent = request.headers.get('user-agent') || 'unknown';
      const hash = crypto.createHash('sha256');
      hash.update(`${ip}-${userAgent}-${Date.now()}`);
      return hash.digest('hex').substring(0, 16);
   }

   // Get client IP address
   private getClientIP(request: NextRequest): string {
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

   // Validate security headers
   private async validateSecurityHeaders(request: NextRequest): Promise<{
      valid: boolean;
      reason?: string;
      details?: any;
   }> {
      const requiredHeaders = {
         'content-type': request.headers.get('content-type'),
         'user-agent': request.headers.get('user-agent'),
      };

      // Check for suspicious or missing headers
      if (!requiredHeaders['user-agent']) {
         return {
            valid: false,
            reason: 'Missing User-Agent header',
            details: { missingHeader: 'user-agent' },
         };
      }

      // Check for suspicious user agents
      const userAgent = requiredHeaders['user-agent'].toLowerCase();
      const suspiciousPatterns = [
         /bot/i,
         /crawler/i,
         /scanner/i,
         /curl/i,
         /wget/i,
         /python/i,
         /postman/i,
      ];

      const isSuspicious = suspiciousPatterns.some((pattern) => pattern.test(userAgent));
      if (isSuspicious) {
         return {
            valid: false,
            reason: 'Suspicious User-Agent detected',
            details: { userAgent, pattern: 'automated_tool' },
         };
      }

      return { valid: true };
   }

   // Rate limiting check
   private async checkRateLimit(
      request: NextRequest,
      clientId: string
   ): Promise<{
      allowed: boolean;
      count?: number;
      resetTime?: number;
      remaining?: number;
   }> {
      const key = `${clientId}-${request.nextUrl.pathname}`;
      const result = rateLimitStore.increment(key, this.config.rateLimitWindow);

      const allowed = result.count <= this.config.rateLimitRequests;
      const remaining = Math.max(0, this.config.rateLimitRequests - result.count);

      return {
         allowed,
         count: result.count,
         resetTime: result.resetTime,
         remaining,
      };
   }

   // CSRF validation
   private async validateCSRF(request: NextRequest): Promise<{
      valid: boolean;
      reason?: string;
   }> {
      const csrfToken = request.headers.get('x-csrf-token') || request.headers.get('csrf-token');

      // For now, we'll implement a simple origin-based CSRF protection
      // In production, you would use proper CSRF tokens
      const origin = request.headers.get('origin');
      const referer = request.headers.get('referer');

      if (!origin && !referer) {
         return {
            valid: false,
            reason: 'Missing origin and referer headers',
         };
      }

      // Validate that origin matches allowed origins
      if (origin && !this.config.allowedOrigins.includes(origin)) {
         return {
            valid: false,
            reason: 'Invalid origin',
         };
      }

      return { valid: true };
   }

   // Origin validation
   private async validateOrigin(request: NextRequest): Promise<{
      valid: boolean;
      reason?: string;
   }> {
      const origin = request.headers.get('origin');

      // Allow requests with no origin (same-origin requests)
      if (!origin) {
         return { valid: true };
      }

      // Check if origin is in allowed list
      if (!this.config.allowedOrigins.includes(origin)) {
         return {
            valid: false,
            reason: `Origin ${origin} not in allowed list`,
         };
      }

      return { valid: true };
   }

   // Request size validation
   private async validateRequestSize(request: NextRequest): Promise<{
      valid: boolean;
      reason?: string;
      size?: number;
   }> {
      const contentLength = request.headers.get('content-length');

      if (contentLength) {
         const size = parseInt(contentLength, 10);

         if (size > this.config.maxRequestSize) {
            return {
               valid: false,
               reason: `Request size ${size} exceeds maximum ${this.config.maxRequestSize}`,
               size,
            };
         }
      }

      return { valid: true };
   }

   // Input validation based on endpoint
   private async validateInput(
      request: NextRequest,
      endpoint: string
   ): Promise<{
      valid: boolean;
      reason?: string;
      errors?: any[];
   }> {
      try {
         let body: any;

         try {
            const text = await request.text();
            if (text) {
               body = JSON.parse(text);
            }
         } catch (parseError) {
            return {
               valid: false,
               reason: 'Invalid JSON in request body',
               errors: [parseError.message],
            };
         }

         if (!body) {
            return { valid: true };
         }

         // Define validation schemas per endpoint
         const validationSchemas: Record<string, z.ZodSchema> = {
            '/api/cli-execute': z.object({
               command: commonValidationSchemas.command,
               args: z.array(z.string()).optional(),
               timeout: z.number().min(1000).max(300000).optional(),
            }),
            '/api/tasks': z.object({
               taskId: commonValidationSchemas.taskId.optional(),
               status: commonValidationSchemas.status.optional(),
               priority: commonValidationSchemas.priority.optional(),
               title: z.string().min(1).max(200).optional(),
               description: z.string().max(1000).optional(),
            }),
            '/api/fs-operations': z.object({
               operation: z.enum(['read', 'write', 'list']),
               path: commonValidationSchemas.filePath,
               data: z.any().optional(),
            }),
         };

         const schema = validationSchemas[endpoint];
         if (schema) {
            const result = schema.safeParse(body);
            if (!result.success) {
               return {
                  valid: false,
                  reason: 'Input validation failed',
                  errors: result.error.errors,
               };
            }
         }

         return { valid: true };
      } catch (error) {
         return {
            valid: false,
            reason: 'Input validation error',
            errors: [error.message],
         };
      }
   }

   // Block request and return error response
   private blockRequest(
      request: NextRequest,
      event: string,
      reason: string,
      details: any
   ): NextResponse {
      // Log security event
      if (this.config.enableAuditLogging) {
         this.auditor.log({
            timestamp: new Date().toISOString(),
            event,
            severity: this.getEventSeverity(event),
            clientId: details.clientId,
            ipAddress: this.getClientIP(request),
            userAgent: request.headers.get('user-agent') || 'unknown',
            endpoint: details.endpoint,
            method: details.method,
            details,
            blocked: true,
         });
      }

      // Return appropriate error response
      const statusCode = this.getStatusCodeForEvent(event);
      const response = {
         error: 'Security validation failed',
         reason,
         timestamp: new Date().toISOString(),
         requestId: details.clientId,
      };

      return NextResponse.json(response, { status: statusCode });
   }

   // Get severity level for security events
   private getEventSeverity(event: string): 'low' | 'medium' | 'high' | 'critical' {
      const severityMap: Record<string, 'low' | 'medium' | 'high' | 'critical'> = {
         invalid_security_headers: 'medium',
         rate_limit_exceeded: 'medium',
         csrf_validation_failed: 'high',
         invalid_origin: 'high',
         request_too_large: 'medium',
         input_validation_failed: 'medium',
         security_middleware_error: 'critical',
      };

      return severityMap[event] || 'medium';
   }

   // Get HTTP status code for security events
   private getStatusCodeForEvent(event: string): number {
      const statusMap: Record<string, number> = {
         invalid_security_headers: 400,
         rate_limit_exceeded: 429,
         csrf_validation_failed: 403,
         invalid_origin: 403,
         request_too_large: 413,
         input_validation_failed: 400,
         security_middleware_error: 500,
      };

      return statusMap[event] || 400;
   }

   // Get security statistics
   getSecurityStats() {
      return this.auditor.getSecurityStats();
   }

   // Get recent security logs
   getRecentLogs(limit = 100) {
      return this.auditor.getRecentLogs(limit);
   }

   // Reset rate limits for a client (admin function)
   resetRateLimit(clientId: string, endpoint?: string): void {
      const key = endpoint ? `${clientId}-${endpoint}` : clientId;
      rateLimitStore.reset(key);
   }

   // Update security configuration
   updateConfig(newConfig: Partial<SecurityConfig>): void {
      this.config = { ...this.config, ...newConfig };
   }

   // Clean up resources
   cleanup(): void {
      rateLimitStore.cleanup();
   }
}

// Export singleton instance
let globalSecurityMiddleware: TaskMasterSecurityMiddleware | null = null;

export function getGlobalSecurityMiddleware(): TaskMasterSecurityMiddleware {
   if (!globalSecurityMiddleware) {
      globalSecurityMiddleware = new TaskMasterSecurityMiddleware();
   }
   return globalSecurityMiddleware;
}

// Export validation schemas for reuse
export { commonValidationSchemas };

// Export types
export type { SecurityAuditLog, SecurityConfig };
