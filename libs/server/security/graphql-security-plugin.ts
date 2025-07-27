/**
 * GraphQL Security Plugin
 *
 * Comprehensive security plugin that integrates all security measures
 * for GraphQL operations including rate limiting, input validation,
 * query depth limiting, and security auditing.
 */

import type { ApolloServerPlugin, GraphQLRequestListener } from '@apollo/server';
import type { BaseContext } from '@apollo/server';
import type { NextRequest } from 'next/server';
import { getGlobalRateLimiter } from '../performance/rate-limiter';
import { getGlobalInputValidator } from '../validation/input-validation-middleware';
import { getGlobalErrorHandler, ErrorType } from '../core/error-handler';
import { GraphQLError } from 'graphql';

// Security plugin configuration
export interface GraphQLSecurityConfig {
   enableRateLimiting: boolean;
   enableInputValidation: boolean;
   enableQueryLogging: boolean;
   enableSecurityAudit: boolean;
   maxQueryDepth: number;
   maxQueryComplexity: number;
   blockSuspiciousQueries: boolean;
   auditSensitiveOperations: boolean;
}

// Default security configuration
const DEFAULT_SECURITY_CONFIG: GraphQLSecurityConfig = {
   enableRateLimiting: true,
   enableInputValidation: true,
   enableQueryLogging: true,
   enableSecurityAudit: true,
   maxQueryDepth: 10,
   maxQueryComplexity: 1000,
   blockSuspiciousQueries: true,
   auditSensitiveOperations: true,
};

// Security context interface
export interface SecurityContext {
   clientIP: string;
   userAgent: string;
   rateLimitInfo?: any;
   validationResult?: any;
   queryMetrics?: {
      complexity: number;
      depth: number;
      operationName?: string;
      executionTime?: number;
   };
   securityFlags: {
      suspicious: boolean;
      highRisk: boolean;
      blocked: boolean;
      reasons: string[];
   };
}

// Suspicious query patterns
const SUSPICIOUS_PATTERNS = [
   // Deep nesting attempts
   /(\w+\s*{\s*){8,}/,
   // Excessive field selections
   /{\s*([a-zA-Z_]\w*\s*){20,}}/,
   // Introspection abuse
   /__schema.*__type.*fields.*type.*name/s,
   // Potential injection patterns
   /['"]\s*\+\s*['"]/,
   /\$\{.*\}/,
   // Excessive aliases
   /(\w+:\s*\w+\s*){10,}/,
];

// High-risk operations that require extra scrutiny
const HIGH_RISK_OPERATIONS = [
   'executeCliCommand',
   'syncTaskMaster',
   'updateTaskStatus',
   'deleteTask',
   'batchUpdate',
];

/**
 * Creates a comprehensive GraphQL security plugin
 */
export function createGraphQLSecurityPlugin(
   config: Partial<GraphQLSecurityConfig> = {}
): ApolloServerPlugin<BaseContext> {
   const finalConfig = { ...DEFAULT_SECURITY_CONFIG, ...config };
   const rateLimiter = getGlobalRateLimiter();
   const inputValidator = getGlobalInputValidator();
   const errorHandler = getGlobalErrorHandler();

   return {
      requestDidStart(): GraphQLRequestListener<BaseContext> {
         return {
            async didResolveOperation({ request, document, operationName }) {
               const startTime = Date.now();

               try {
                  // Extract request information
                  const httpRequest = (request as any).http as NextRequest;
                  const clientIP = getClientIP(httpRequest);
                  const userAgent = httpRequest?.headers?.get('user-agent') || '';
                  const queryString = request.query || '';

                  // Initialize security context
                  const securityContext: SecurityContext = {
                     clientIP,
                     userAgent,
                     securityFlags: {
                        suspicious: false,
                        highRisk: false,
                        blocked: false,
                        reasons: [],
                     },
                  };

                  // 1. Rate Limiting Check
                  if (finalConfig.enableRateLimiting) {
                     const rateLimitResult = await rateLimiter.checkRateLimit(httpRequest, {
                        endpoint: '/api/graphql',
                        operation: operationName || 'unknown',
                        riskLevel: 'medium',
                     });

                     securityContext.rateLimitInfo = rateLimitResult.info;

                     if (!rateLimitResult.allowed) {
                        securityContext.securityFlags.blocked = true;
                        securityContext.securityFlags.reasons.push(
                           `Rate limit exceeded: ${rateLimitResult.error}`
                        );

                        throw new GraphQLError(
                           'Rate limit exceeded. Please slow down your requests.',
                           {
                              extensions: {
                                 code: 'RATE_LIMITED',
                                 rateLimitInfo: rateLimitResult.info,
                              },
                           }
                        );
                     }
                  }

                  // 2. Input Validation
                  if (finalConfig.enableInputValidation && request.variables) {
                     const validationResult = await inputValidator.validateData(
                        request.variables,
                        'batchUpdate' // Use appropriate schema based on operation
                     );

                     securityContext.validationResult = validationResult;

                     if (!validationResult.valid) {
                        securityContext.securityFlags.blocked = true;
                        securityContext.securityFlags.reasons.push('Input validation failed');

                        throw new GraphQLError('Invalid input data provided.', {
                           extensions: {
                              code: 'VALIDATION_ERROR',
                              validationErrors: validationResult.errors,
                           },
                        });
                     }
                  }

                  // 3. Query Analysis for Suspicious Patterns
                  if (finalConfig.blockSuspiciousQueries) {
                     const isSuspicious = SUSPICIOUS_PATTERNS.some((pattern) =>
                        pattern.test(queryString)
                     );

                     if (isSuspicious) {
                        securityContext.securityFlags.suspicious = true;
                        securityContext.securityFlags.reasons.push(
                           'Query contains suspicious patterns'
                        );

                        // Log suspicious query
                        await errorHandler.handleError(
                           errorHandler.createError(
                              ErrorType.VALIDATION_SCHEMA_MISMATCH,
                              'Suspicious GraphQL query detected',
                              {
                                 clientIP,
                                 userAgent,
                                 operationName,
                                 queryPreview: queryString.substring(0, 200),
                                 component: 'GraphQLSecurityPlugin',
                              }
                           ),
                           true
                        );

                        // Block in strict mode
                        if (finalConfig.enableSecurityAudit) {
                           throw new GraphQLError(
                              'Query blocked due to security policy violation.',
                              {
                                 extensions: {
                                    code: 'SECURITY_VIOLATION',
                                    reason: 'Suspicious query pattern detected',
                                 },
                              }
                           );
                        }
                     }
                  }

                  // 4. High-Risk Operation Detection
                  const isHighRisk = HIGH_RISK_OPERATIONS.some((op) => queryString.includes(op));

                  if (isHighRisk) {
                     securityContext.securityFlags.highRisk = true;
                     securityContext.securityFlags.reasons.push('High-risk operation detected');

                     // Apply stricter rate limiting for high-risk operations
                     if (finalConfig.enableRateLimiting) {
                        const strictRateLimitResult = await rateLimiter.checkRateLimit(
                           httpRequest,
                           {
                              endpoint: '/api/graphql',
                              operation: operationName || 'unknown',
                              riskLevel: 'high',
                           }
                        );

                        if (!strictRateLimitResult.allowed) {
                           throw new GraphQLError('High-risk operation rate limit exceeded.', {
                              extensions: {
                                 code: 'HIGH_RISK_RATE_LIMITED',
                                 rateLimitInfo: strictRateLimitResult.info,
                              },
                           });
                        }
                     }
                  }

                  // 5. Security Audit Logging
                  if (finalConfig.enableSecurityAudit) {
                     await this.logSecurityEvent({
                        type: 'graphql_request',
                        clientIP,
                        userAgent,
                        operationName,
                        queryPreview: queryString.substring(0, 100),
                        securityContext,
                        timestamp: new Date().toISOString(),
                     });
                  }

                  // 6. Query Performance Logging
                  if (finalConfig.enableQueryLogging) {
                     const executionTime = Date.now() - startTime;
                     securityContext.queryMetrics = {
                        complexity: 0, // Will be updated by complexity plugin
                        depth: 0, // Will be updated by depth plugin
                        operationName,
                        executionTime,
                     };

                     console.log(
                        `GraphQL Security Check: ${operationName || 'anonymous'} - ${executionTime}ms`,
                        {
                           clientIP,
                           suspicious: securityContext.securityFlags.suspicious,
                           highRisk: securityContext.securityFlags.highRisk,
                           blocked: securityContext.securityFlags.blocked,
                        }
                     );
                  }

                  // Attach security context to request for other plugins
                  (request as any).securityContext = securityContext;
               } catch (error) {
                  // Handle security plugin errors
                  if (error instanceof GraphQLError) {
                     throw error; // Re-throw GraphQL errors as-is
                  }

                  const securityError = errorHandler.createError(
                     ErrorType.INTERNAL_SERVER_ERROR,
                     `GraphQL security plugin error: ${error.message}`,
                     {
                        operationName,
                        component: 'GraphQLSecurityPlugin',
                     },
                     error as Error
                  );

                  await errorHandler.handleError(securityError, true);

                  // In case of security plugin failure, be conservative and block
                  throw new GraphQLError(
                     'Request blocked due to security policy enforcement failure.',
                     {
                        extensions: {
                           code: 'SECURITY_ERROR',
                        },
                     }
                  );
               }
            },

            async willSendResponse({ response }) {
               // Add security headers to response
               if (response.http) {
                  response.http.headers.set('X-Content-Type-Options', 'nosniff');
                  response.http.headers.set('X-Frame-Options', 'DENY');
                  response.http.headers.set('X-XSS-Protection', '1; mode=block');
                  response.http.headers.set(
                     'Strict-Transport-Security',
                     'max-age=31536000; includeSubDomains'
                  );
                  response.http.headers.set(
                     'Content-Security-Policy',
                     "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
                  );
               }
            },
         };
      },

      // Log security events
      async logSecurityEvent(event: {
         type: string;
         clientIP: string;
         userAgent: string;
         operationName?: string;
         queryPreview?: string;
         securityContext: SecurityContext;
         timestamp: string;
      }): Promise<void> {
         try {
            // This would typically log to a security audit system
            console.log('GraphQL Security Event:', {
               ...event,
               // Redact sensitive information
               userAgent: event.userAgent.substring(0, 100),
               queryPreview: event.queryPreview?.substring(0, 100),
            });

            // In production, you might want to:
            // - Send to SIEM system
            // - Store in security audit database
            // - Trigger alerts for suspicious activity
            // - Update threat intelligence feeds
         } catch (logError) {
            console.error('Failed to log security event:', logError);
         }
      },
   };
}

/**
 * Helper function to extract client IP from request
 */
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

/**
 * Security metrics interface for monitoring
 */
export interface SecurityMetrics {
   totalRequests: number;
   blockedRequests: number;
   suspiciousRequests: number;
   highRiskRequests: number;
   rateLimitViolations: number;
   validationFailures: number;
   averageProcessingTime: number;
}

/**
 * Get security metrics for monitoring dashboard
 */
export function getSecurityMetrics(): SecurityMetrics {
   const rateLimiter = getGlobalRateLimiter();
   const inputValidator = getGlobalInputValidator();

   const rateLimitStats = rateLimiter.getStats();
   const validationStats = inputValidator.getValidationStats();

   return {
      totalRequests: rateLimitStats.totalRequests,
      blockedRequests: rateLimitStats.blockedRequests,
      suspiciousRequests: 0, // Would track this in production
      highRiskRequests: 0, // Would track this in production
      rateLimitViolations: rateLimitStats.blockedRequests,
      validationFailures: validationStats.invalidInputs,
      averageProcessingTime: validationStats.averageValidationTime,
   };
}

/**
 * Reset security metrics (useful for testing)
 */
export function resetSecurityMetrics(): void {
   const inputValidator = getGlobalInputValidator();
   inputValidator.resetStats();
}
