import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { getGlobalErrorHandler, ErrorType } from '../core/error-handler';
import { commonValidationSchemas } from '../security/security-middleware';

// Input validation configuration
export interface ValidationConfig {
   enableStrictMode: boolean;
   maxRequestSize: number;
   maxArrayLength: number;
   maxObjectDepth: number;
   allowUnknownFields: boolean;
   sanitizeInputs: boolean;
   logValidationErrors: boolean;
}

// Default validation configuration
const DEFAULT_VALIDATION_CONFIG: ValidationConfig = {
   enableStrictMode: true,
   maxRequestSize: 10 * 1024 * 1024, // 10MB
   maxArrayLength: 1000,
   maxObjectDepth: 10,
   allowUnknownFields: false,
   sanitizeInputs: true,
   logValidationErrors: true,
};

// Validation result interface
export interface ValidationResult {
   valid: boolean;
   data?: any;
   errors?: ValidationError[];
   warnings?: string[];
   sanitized?: boolean;
   metadata?: {
      originalSize: number;
      sanitizedSize: number;
      validationTime: number;
      schemaUsed: string;
   };
}

// Validation error interface
export interface ValidationError {
   field: string;
   message: string;
   code: string;
   value?: any;
   expected?: string;
}

// Enhanced validation schemas for all API endpoints
const API_VALIDATION_SCHEMAS = {
   // CLI Execute API
   '/api/cli-execute': {
      POST: z.object({
         command: z
            .string()
            .min(1, 'Command cannot be empty')
            .max(50, 'Command too long')
            .regex(/^[a-z0-9-]+$/, 'Command contains invalid characters'),
         args: z
            .array(z.string().max(500, 'Argument too long'))
            .max(20, 'Too many arguments')
            .optional()
            .default([]),
         timeout: z
            .number()
            .min(1000, 'Timeout too short')
            .max(300000, 'Timeout too long')
            .optional()
            .default(30000),
         parseOutput: z.boolean().optional().default(true),
         captureProgress: z.boolean().optional().default(false),
         workingDirectory: z
            .string()
            .max(500, 'Working directory path too long')
            .regex(/^[^<>:"|?*\x00-\x1f]*$/, 'Invalid characters in working directory')
            .optional(),
         env: z.record(z.string(), z.string().max(1000)).optional(),
      }),
   },

   // Tasks API
   '/api/tasks': {
      GET: z.object({
         id: commonValidationSchemas.taskId.optional(),
         status: commonValidationSchemas.status.optional(),
         priority: commonValidationSchemas.priority.optional(),
         limit: z.number().min(1).max(1000).optional(),
         offset: z.number().min(0).optional(),
         search: z.string().max(200).optional(),
         tags: z.array(z.string().max(50)).max(10).optional(),
      }),

      POST: z.object({
         title: z.string().min(3, 'Title too short').max(200, 'Title too long').trim(),
         description: z.string().max(5000, 'Description too long').optional(),
         priority: commonValidationSchemas.priority.optional().default('medium'),
         status: commonValidationSchemas.status.optional().default('pending'),
         dependencies: z
            .array(commonValidationSchemas.taskId)
            .max(20, 'Too many dependencies')
            .optional(),
         tags: z.array(z.string().max(50)).max(10, 'Too many tags').optional(),
         dueDate: z.string().datetime().optional(),
         assignee: z.string().max(100).optional(),
      }),

      PUT: z.object({
         id: commonValidationSchemas.taskId,
         title: z.string().min(3, 'Title too short').max(200, 'Title too long').trim().optional(),
         description: z.string().max(5000, 'Description too long').optional(),
         priority: commonValidationSchemas.priority.optional(),
         status: commonValidationSchemas.status.optional(),
         dependencies: z
            .array(commonValidationSchemas.taskId)
            .max(20, 'Too many dependencies')
            .optional(),
         tags: z.array(z.string().max(50)).max(10, 'Too many tags').optional(),
      }),

      DELETE: z.object({
         id: commonValidationSchemas.taskId,
         force: z.boolean().optional().default(false),
      }),
   },

   // File System Operations API
   '/api/fs-operations': {
      POST: z.object({
         operation: z.enum(['read', 'write', 'list', 'delete', 'copy', 'move']),
         path: z
            .string()
            .min(1, 'Path cannot be empty')
            .max(500, 'Path too long')
            .refine((path) => !path.includes('..') && !path.startsWith('/'), 'Invalid path format'),
         data: z.any().optional(),
         encoding: z.enum(['utf8', 'base64', 'binary']).optional().default('utf8'),
         backup: z.boolean().optional().default(false),
         overwrite: z.boolean().optional().default(false),
      }),
   },

   // WebSocket API
   '/api/websocket': {
      POST: z.object({
         action: z.enum(['connect', 'disconnect', 'join', 'leave', 'broadcast']),
         room: z
            .string()
            .min(1, 'Room name cannot be empty')
            .max(50, 'Room name too long')
            .regex(/^[a-zA-Z0-9_-]+$/, 'Invalid room name format')
            .optional(),
         message: z
            .object({
               type: z.string().max(50),
               data: z.any(),
               timestamp: z.string().datetime().optional(),
            })
            .optional(),
         clientId: z.string().max(100).optional(),
      }),
   },

   // Sync API
   '/api/sync': {
      GET: z.object({
         status: z.boolean().optional(),
         operations: z.boolean().optional(),
         conflicts: z.boolean().optional(),
         health: z.boolean().optional(),
      }),

      POST: z.object({
         action: z.enum([
            'update-task-status',
            'update-task',
            'batch-update',
            'force-sync',
            'resolve-conflict',
         ]),
         data: z.any(), // Will be validated based on action
         operationId: z.string().optional(),
      }),

      PUT: z.object({
         operationId: z.string().min(1, 'Operation ID required'),
         action: z.enum(['retry', 'cancel']),
      }),

      DELETE: z.object({
         reset: z.boolean().optional().default(false),
         clearCompleted: z.boolean().optional().default(false),
      }),
   },

   // File Watch API
   '/api/file-watch': {
      POST: z.object({
         action: z.enum(['start', 'stop', 'status']),
         paths: z.array(z.string().max(500)).max(10, 'Too many paths to watch').optional(),
         options: z
            .object({
               recursive: z.boolean().optional().default(true),
               ignoreInitial: z.boolean().optional().default(true),
               ignored: z.array(z.string()).optional(),
            })
            .optional(),
      }),
   },
};

// Special validation schemas for complex operations
const COMPLEX_VALIDATION_SCHEMAS = {
   // Batch operations
   batchUpdate: z.object({
      operations: z
         .array(
            z.object({
               type: z.enum(['task_update', 'status_change', 'task_create']),
               taskId: commonValidationSchemas.taskId.optional(),
               data: z.any(),
            })
         )
         .min(1, 'At least one operation required')
         .max(50, 'Too many operations'),
      atomicity: z.boolean().optional().default(false),
      maxConcurrency: z.number().min(1).max(10).optional().default(3),
   }),

   // Conflict resolution
   conflictResolution: z.object({
      conflictId: z.string().min(1, 'Conflict ID required'),
      resolution: z.enum(['ui_wins', 'cli_wins', 'last_write_wins', 'merge', 'user_resolve']),
      mergeData: z.any().optional(),
   }),

   // Task expansion
   taskExpansion: z.object({
      taskId: commonValidationSchemas.taskId,
      complexity: z.number().min(1).max(10).optional(),
      research: z.boolean().optional().default(false),
      force: z.boolean().optional().default(false),
   }),
};

// Input sanitization utilities
class InputSanitizer {
   // Sanitize string inputs
   static sanitizeString(
      input: string,
      options: {
         maxLength?: number;
         allowHtml?: boolean;
         allowSpecialChars?: boolean;
      } = {}
   ): string {
      if (typeof input !== 'string') {
         return String(input);
      }

      let sanitized = input;

      // Remove null bytes and control characters
      sanitized = sanitized.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

      // Remove HTML if not allowed
      if (!options.allowHtml) {
         sanitized = sanitized.replace(/<[^>]*>/g, '');
      }

      // Remove special characters if not allowed
      if (!options.allowSpecialChars) {
         sanitized = sanitized.replace(/[<>\"'&]/g, '');
      }

      // Trim whitespace
      sanitized = sanitized.trim();

      // Truncate if too long
      if (options.maxLength && sanitized.length > options.maxLength) {
         sanitized = sanitized.substring(0, options.maxLength);
      }

      return sanitized;
   }

   // Sanitize object recursively
   static sanitizeObject(obj: any, depth = 0, maxDepth = 10): any {
      if (depth > maxDepth) {
         throw new Error('Object depth exceeds maximum allowed');
      }

      if (obj === null || obj === undefined) {
         return obj;
      }

      if (typeof obj === 'string') {
         return this.sanitizeString(obj, { allowSpecialChars: true });
      }

      if (typeof obj === 'number' || typeof obj === 'boolean') {
         return obj;
      }

      if (Array.isArray(obj)) {
         return obj.map((item) => this.sanitizeObject(item, depth + 1, maxDepth));
      }

      if (typeof obj === 'object') {
         const sanitized: any = {};

         for (const [key, value] of Object.entries(obj)) {
            const sanitizedKey = this.sanitizeString(key, {
               maxLength: 100,
               allowSpecialChars: false,
            });

            if (sanitizedKey) {
               sanitized[sanitizedKey] = this.sanitizeObject(value, depth + 1, maxDepth);
            }
         }

         return sanitized;
      }

      return obj;
   }

   // Validate object size
   static validateObjectSize(obj: any, maxSize: number): boolean {
      const jsonString = JSON.stringify(obj);
      return Buffer.byteLength(jsonString, 'utf8') <= maxSize;
   }
}

// Main input validation middleware class
export class InputValidationMiddleware {
   private config: ValidationConfig;
   private errorHandler = getGlobalErrorHandler();
   private validationStats = {
      totalValidations: 0,
      validInputs: 0,
      invalidInputs: 0,
      sanitizedInputs: 0,
      validationTime: 0,
   };

   constructor(config: Partial<ValidationConfig> = {}) {
      this.config = { ...DEFAULT_VALIDATION_CONFIG, ...config };
   }

   // Main validation method
   async validateRequest(request: NextRequest): Promise<ValidationResult> {
      const startTime = Date.now();
      this.validationStats.totalValidations++;

      try {
         const endpoint = request.nextUrl.pathname;
         const method = request.method;

         // Get request body
         let body: any = null;
         let originalSize = 0;

         if (['POST', 'PUT', 'PATCH'].includes(method)) {
            try {
               const text = await request.text();
               originalSize = Buffer.byteLength(text, 'utf8');

               // Check request size
               if (originalSize > this.config.maxRequestSize) {
                  return {
                     valid: false,
                     errors: [
                        {
                           field: 'request',
                           message: `Request size ${originalSize} exceeds maximum ${this.config.maxRequestSize}`,
                           code: 'REQUEST_TOO_LARGE',
                        },
                     ],
                  };
               }

               if (text) {
                  body = JSON.parse(text);
               }
            } catch (parseError) {
               return {
                  valid: false,
                  errors: [
                     {
                        field: 'body',
                        message: 'Invalid JSON in request body',
                        code: 'INVALID_JSON',
                     },
                  ],
               };
            }
         } else {
            // For GET requests, validate query parameters
            body = this.parseQueryParams(request);
         }

         // Get validation schema
         const schema = this.getValidationSchema(endpoint, method);
         if (!schema) {
            // No schema defined - allow but warn
            this.validationStats.validInputs++;
            return {
               valid: true,
               data: body,
               warnings: [`No validation schema defined for ${method} ${endpoint}`],
               metadata: {
                  originalSize,
                  sanitizedSize: originalSize,
                  validationTime: Date.now() - startTime,
                  schemaUsed: 'none',
               },
            };
         }

         // Sanitize input if enabled
         let sanitizedData = body;
         let wasSanitized = false;

         if (this.config.sanitizeInputs && body) {
            try {
               const sanitized = InputSanitizer.sanitizeObject(body, 0, this.config.maxObjectDepth);

               if (JSON.stringify(sanitized) !== JSON.stringify(body)) {
                  sanitizedData = sanitized;
                  wasSanitized = true;
                  this.validationStats.sanitizedInputs++;
               }
            } catch (sanitizeError) {
               return {
                  valid: false,
                  errors: [
                     {
                        field: 'body',
                        message: `Input sanitization failed: ${sanitizeError.message}`,
                        code: 'SANITIZATION_ERROR',
                     },
                  ],
               };
            }
         }

         // Validate against schema
         const validationResult = await this.validateWithSchema(sanitizedData, schema, endpoint);

         if (!validationResult.valid) {
            this.validationStats.invalidInputs++;

            if (this.config.logValidationErrors) {
               await this.logValidationError(request, validationResult.errors!);
            }

            return validationResult;
         }

         // Validation successful
         this.validationStats.validInputs++;
         const validationTime = Date.now() - startTime;
         this.validationStats.validationTime += validationTime;

         return {
            valid: true,
            data: validationResult.data,
            sanitized: wasSanitized,
            metadata: {
               originalSize,
               sanitizedSize: sanitizedData
                  ? Buffer.byteLength(JSON.stringify(sanitizedData), 'utf8')
                  : 0,
               validationTime,
               schemaUsed: `${method} ${endpoint}`,
            },
         };
      } catch (error) {
         // Handle validation middleware errors
         const validationError = this.errorHandler.createError(
            ErrorType.VALIDATION_SCHEMA_MISMATCH,
            `Input validation middleware error: ${error.message}`,
            {
               endpoint: request.nextUrl.pathname,
               method: request.method,
               component: 'InputValidationMiddleware',
            },
            error as Error
         );

         await this.errorHandler.handleError(validationError, true);

         this.validationStats.invalidInputs++;

         return {
            valid: false,
            errors: [
               {
                  field: 'validation',
                  message: 'Internal validation error',
                  code: 'VALIDATION_ERROR',
               },
            ],
         };
      }
   }

   // Get validation schema for endpoint and method
   private getValidationSchema(endpoint: string, method: string): z.ZodSchema | null {
      // First check exact endpoint match
      const endpointSchemas =
         API_VALIDATION_SCHEMAS[endpoint as keyof typeof API_VALIDATION_SCHEMAS];
      if (endpointSchemas && endpointSchemas[method as keyof typeof endpointSchemas]) {
         return endpointSchemas[method as keyof typeof endpointSchemas] as z.ZodSchema;
      }

      // Check for partial matches (for dynamic routes)
      for (const [schemaEndpoint, schemas] of Object.entries(API_VALIDATION_SCHEMAS)) {
         if (endpoint.startsWith(schemaEndpoint) && schemas[method as keyof typeof schemas]) {
            return schemas[method as keyof typeof schemas] as z.ZodSchema;
         }
      }

      return null;
   }

   // Validate data against Zod schema
   private async validateWithSchema(
      data: any,
      schema: z.ZodSchema,
      endpoint: string
   ): Promise<ValidationResult> {
      try {
         const result = schema.safeParse(data);

         if (!result.success) {
            return {
               valid: false,
               errors: result.error.errors.map((err) => ({
                  field: err.path.join('.') || 'root',
                  message: err.message,
                  code: err.code,
                  value: err.received,
                  expected: err.expected,
               })),
            };
         }

         return {
            valid: true,
            data: result.data,
         };
      } catch (error) {
         return {
            valid: false,
            errors: [
               {
                  field: 'schema',
                  message: `Schema validation error: ${error.message}`,
                  code: 'SCHEMA_ERROR',
               },
            ],
         };
      }
   }

   // Parse query parameters into object
   private parseQueryParams(request: NextRequest): any {
      const params: any = {};
      const url = request.nextUrl;

      for (const [key, value] of url.searchParams.entries()) {
         // Handle array parameters (key[])
         if (key.endsWith('[]')) {
            const baseKey = key.slice(0, -2);
            if (!params[baseKey]) {
               params[baseKey] = [];
            }
            params[baseKey].push(value);
         } else {
            // Try to parse as number or boolean
            if (value === 'true') {
               params[key] = true;
            } else if (value === 'false') {
               params[key] = false;
            } else if (!isNaN(Number(value)) && value !== '') {
               params[key] = Number(value);
            } else {
               params[key] = value;
            }
         }
      }

      return params;
   }

   // Log validation errors
   private async logValidationError(
      request: NextRequest,
      errors: ValidationError[]
   ): Promise<void> {
      const validationError = this.errorHandler.createError(
         ErrorType.VALIDATION_SCHEMA_MISMATCH,
         'Input validation failed',
         {
            endpoint: request.nextUrl.pathname,
            method: request.method,
            errors: errors.map((err) => ({
               field: err.field,
               message: err.message,
               code: err.code,
            })),
            component: 'InputValidationMiddleware',
         }
      );

      await this.errorHandler.handleError(validationError, true);
   }

   // Public API methods

   // Get validation statistics
   getValidationStats() {
      return {
         ...this.validationStats,
         successRate:
            this.validationStats.totalValidations > 0
               ? (this.validationStats.validInputs / this.validationStats.totalValidations) * 100
               : 100,
         averageValidationTime:
            this.validationStats.totalValidations > 0
               ? this.validationStats.validationTime / this.validationStats.totalValidations
               : 0,
      };
   }

   // Update configuration
   updateConfig(newConfig: Partial<ValidationConfig>): void {
      this.config = { ...this.config, ...newConfig };
   }

   // Get current configuration
   getConfig(): ValidationConfig {
      return { ...this.config };
   }

   // Reset statistics
   resetStats(): void {
      this.validationStats = {
         totalValidations: 0,
         validInputs: 0,
         invalidInputs: 0,
         sanitizedInputs: 0,
         validationTime: 0,
      };
   }

   // Add custom validation schema
   addValidationSchema(endpoint: string, method: string, schema: z.ZodSchema): void {
      if (!API_VALIDATION_SCHEMAS[endpoint as keyof typeof API_VALIDATION_SCHEMAS]) {
         (API_VALIDATION_SCHEMAS as any)[endpoint] = {};
      }
      (API_VALIDATION_SCHEMAS as any)[endpoint][method] = schema;
   }

   // Validate specific data against a schema
   async validateData(
      data: any,
      schemaName: keyof typeof COMPLEX_VALIDATION_SCHEMAS
   ): Promise<ValidationResult> {
      const schema = COMPLEX_VALIDATION_SCHEMAS[schemaName];
      if (!schema) {
         return {
            valid: false,
            errors: [
               {
                  field: 'schema',
                  message: `Unknown validation schema: ${schemaName}`,
                  code: 'UNKNOWN_SCHEMA',
               },
            ],
         };
      }

      return this.validateWithSchema(data, schema, schemaName);
   }
}

// Export singleton instance
let globalInputValidator: InputValidationMiddleware | null = null;

export function getGlobalInputValidator(): InputValidationMiddleware {
   if (!globalInputValidator) {
      globalInputValidator = new InputValidationMiddleware();
   }
   return globalInputValidator;
}

// Export schemas and utilities
export { API_VALIDATION_SCHEMAS, COMPLEX_VALIDATION_SCHEMAS, InputSanitizer };
