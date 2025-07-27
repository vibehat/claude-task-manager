/**
 * Security Middleware
 *
 * Common validation schemas and security utilities for the application
 */

import { z } from 'zod';

// Common validation schemas used across the application
export const commonValidationSchemas = {
   // Task ID validation
   taskId: z
      .string()
      .min(1, 'Task ID cannot be empty')
      .max(20, 'Task ID too long')
      .regex(/^[\d.]+$/, 'Invalid task ID format'),

   // Status validation
   status: z.enum(['pending', 'in-progress', 'done', 'blocked', 'deferred', 'cancelled']),

   // Priority validation
   priority: z.enum(['low', 'medium', 'high']),

   // Email validation
   email: z.string().email('Invalid email format'),

   // URL validation
   url: z.string().url('Invalid URL format'),

   // File path validation
   filePath: z
      .string()
      .min(1, 'File path cannot be empty')
      .max(500, 'File path too long')
      .refine((path) => !path.includes('..') && !path.startsWith('/'), 'Invalid file path format'),

   // Command validation
   command: z
      .string()
      .min(1, 'Command cannot be empty')
      .max(50, 'Command too long')
      .regex(/^[a-z0-9-]+$/, 'Command contains invalid characters'),

   // Text content validation
   textContent: z.string().max(10000, 'Content too long').optional(),

   // Date validation
   dateTime: z.string().datetime('Invalid datetime format'),

   // Positive integer validation
   positiveInt: z.number().int().positive('Must be a positive integer'),

   // Non-negative integer validation
   nonNegativeInt: z.number().int().min(0, 'Must be non-negative'),
};

// Security utility functions
export const securityUtils = {
   /**
    * Sanitize string input to prevent XSS
    */
   sanitizeString(input: string): string {
      return input
         .replace(/[<>\"'&]/g, (match) => {
            const escapeMap: Record<string, string> = {
               '<': '&lt;',
               '>': '&gt;',
               '"': '&quot;',
               "'": '&#x27;',
               '&': '&amp;',
            };
            return escapeMap[match];
         })
         .trim();
   },

   /**
    * Validate and sanitize file path
    */
   sanitizeFilePath(path: string): string {
      return path
         .replace(/[^a-zA-Z0-9._/-]/g, '')
         .replace(/\.{2,}/g, '.')
         .replace(/\/{2,}/g, '/')
         .trim();
   },

   /**
    * Check if string contains suspicious patterns
    */
   containsSuspiciousPatterns(input: string): boolean {
      const suspiciousPatterns = [
         /<script/i,
         /javascript:/i,
         /vbscript:/i,
         /on\w+\s*=/i,
         /eval\s*\(/i,
         /expression\s*\(/i,
      ];

      return suspiciousPatterns.some((pattern) => pattern.test(input));
   },

   /**
    * Generate secure random string
    */
   generateSecureId(length = 16): string {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
         result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return result;
   },
};
