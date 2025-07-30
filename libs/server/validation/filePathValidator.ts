import path from 'path';
import { z } from 'zod';
import { getGlobalErrorHandler, ErrorType } from '../core/errorHandler';

// File path validation interfaces
export interface PathValidationRule {
   name: string;
   description: string;
   allowedExtensions?: string[];
   maxDepth?: number;
   maxLength?: number;
   allowedDirectories?: string[];
   blockedDirectories?: string[];
   requiresAuth?: boolean;
   readOnly?: boolean;
   riskLevel: 'low' | 'medium' | 'high';
}

export interface PathValidationResult {
   valid: boolean;
   sanitizedPath?: string;
   normalizedPath?: string;
   errors?: string[];
   warnings?: string[];
   riskLevel?: 'low' | 'medium' | 'high';
   metadata?: {
      originalPath: string;
      wasModified: boolean;
      extension?: string;
      depth: number;
      isAbsolute: boolean;
      containsTraversal: boolean;
   };
}

// Safe base directories for Task Master operations
const SAFE_BASE_DIRECTORIES = [
   '.taskmaster',
   '.taskmaster/tasks',
   '.taskmaster/docs',
   '.taskmaster/reports',
   '.taskmaster/templates',
   '.taskmaster/config',
   'node_modules/task-master-ai', // Allow access to task-master package
];

// Explicitly blocked directories (security-critical)
const BLOCKED_DIRECTORIES = [
   // System directories
   '/etc',
   '/bin',
   '/sbin',
   '/usr/bin',
   '/usr/sbin',
   '/system',
   '/proc',
   '/dev',
   '/sys',

   // User sensitive directories
   '/.ssh',
   '/.gnupg',
   '/.aws',
   '/.config',

   // Application sensitive directories
   '/node_modules/.bin',
   '/.git',
   '/.svn',
   '/.env',
   '/logs',
   '/tmp',
   '/var',

   // Windows system directories
   'C:\\Windows',
   'C:\\System32',
   'C:\\Program Files',
   'C:\\ProgramData',

   // Common sensitive files
   '/etc/passwd',
   '/etc/shadow',
   '/etc/hosts',
   'id_rsa',
   'id_dsa',
   '.htpasswd',
   '.htaccess',
];

// Dangerous file extensions
const DANGEROUS_EXTENSIONS = [
   // Executable files
   '.exe',
   '.bat',
   '.cmd',
   '.com',
   '.scr',
   '.pif',
   '.app',
   '.deb',
   '.rpm',
   '.dmg',
   '.pkg',

   // Script files
   '.sh',
   '.bash',
   '.zsh',
   '.fish',
   '.ps1',
   '.vbs',
   '.py',
   '.rb',
   '.pl',
   '.php',
   '.asp',
   '.jsp',

   // Configuration files that might contain secrets
   '.key',
   '.pem',
   '.p12',
   '.pfx',
   '.crt',
   '.cer',
   '.env',
   '.secrets',
   '.passwd',

   // Database files
   '.db',
   '.sqlite',
   '.sqlite3',
   '.mdb',

   // Archive files (could contain malicious content)
   '.zip',
   '.rar',
   '.7z',
   '.tar',
   '.gz',
   '.bz2',
];

// Allowed file extensions for Task Master operations
const ALLOWED_EXTENSIONS = [
   // Task Master specific files
   '.json',
   '.md',
   '.txt',
   '.yaml',
   '.yml',

   // Documentation files
   '.pdf',
   '.doc',
   '.docx',

   // Configuration files (safe ones)
   '.config',
   '.conf',
   '.ini',

   // Templates
   '.template',
   '.tmpl',
];

// File path validation rules by operation type
const PATH_VALIDATION_RULES: Record<string, PathValidationRule> = {
   taskmaster_read: {
      name: 'Task Master Read Operations',
      description: 'Read access to Task Master files',
      allowedExtensions: ALLOWED_EXTENSIONS,
      maxDepth: 5,
      maxLength: 500,
      allowedDirectories: SAFE_BASE_DIRECTORIES,
      riskLevel: 'low',
      readOnly: true,
   },

   taskmaster_write: {
      name: 'Task Master Write Operations',
      description: 'Write access to Task Master files',
      allowedExtensions: ['.json', '.md', '.txt', '.yaml', '.yml'],
      maxDepth: 3,
      maxLength: 300,
      allowedDirectories: ['.taskmaster/tasks', '.taskmaster/docs', '.taskmaster/reports'],
      requiresAuth: true,
      riskLevel: 'medium',
      readOnly: false,
   },

   config_read: {
      name: 'Configuration Read',
      description: 'Read configuration files',
      allowedExtensions: ['.json', '.yaml', '.yml', '.config', '.conf'],
      maxDepth: 2,
      maxLength: 200,
      allowedDirectories: ['.taskmaster/config', '.taskmaster'],
      riskLevel: 'medium',
      readOnly: true,
   },

   config_write: {
      name: 'Configuration Write',
      description: 'Write configuration files',
      allowedExtensions: ['.json', '.yaml', '.yml'],
      maxDepth: 2,
      maxLength: 200,
      allowedDirectories: ['.taskmaster/config'],
      requiresAuth: true,
      riskLevel: 'high',
      readOnly: false,
   },

   docs_read: {
      name: 'Documentation Read',
      description: 'Read documentation files',
      allowedExtensions: ['.md', '.txt', '.pdf', '.doc', '.docx'],
      maxDepth: 4,
      maxLength: 400,
      allowedDirectories: ['.taskmaster/docs', '.taskmaster/templates'],
      riskLevel: 'low',
      readOnly: true,
   },

   temp_write: {
      name: 'Temporary File Write',
      description: 'Write temporary files during operations',
      allowedExtensions: ['.tmp', '.temp', '.json', '.txt'],
      maxDepth: 2,
      maxLength: 300,
      allowedDirectories: ['.taskmaster/temp', '.taskmaster/cache'],
      requiresAuth: true,
      riskLevel: 'medium',
      readOnly: false,
   },
};

// Validation schema for path parameters
const pathValidationSchema = z.object({
   path: z
      .string()
      .min(1, 'Path cannot be empty')
      .max(1000, 'Path too long')
      .refine((path) => !path.includes('\0'), 'Path contains null byte')
      .refine((path) => !/[\x00-\x1f\x7f-\x9f]/.test(path), 'Path contains control characters'),
   operation: z.enum(['read', 'write', 'list', 'delete']).optional(),
   ruleType: z.string().optional(),
});

// File path validator class
export class FilePathValidator {
   private errorHandler = getGlobalErrorHandler();
   private validationStats = {
      totalValidations: 0,
      validPaths: 0,
      blockedPaths: 0,
      sanitizedPaths: 0,
      traversalAttempts: 0,
   };

   // Main path validation method
   async validatePath(
      inputPath: string,
      operation: 'read' | 'write' | 'list' | 'delete' = 'read',
      ruleType = 'taskmaster_read'
   ): Promise<PathValidationResult> {
      this.validationStats.totalValidations++;

      const originalPath = inputPath;

      try {
         // 1. Schema validation
         const schemaResult = pathValidationSchema.safeParse({
            path: inputPath,
            operation,
            ruleType,
         });

         if (!schemaResult.success) {
            this.validationStats.blockedPaths++;
            return {
               valid: false,
               errors: schemaResult.error.errors.map((err) => err.message),
               riskLevel: 'high',
               metadata: {
                  originalPath,
                  wasModified: false,
                  depth: 0,
                  isAbsolute: path.isAbsolute(inputPath),
                  containsTraversal: this.containsTraversal(inputPath),
               },
            };
         }

         // 2. Get validation rule
         const rule = PATH_VALIDATION_RULES[ruleType];
         if (!rule) {
            this.validationStats.blockedPaths++;
            return {
               valid: false,
               errors: [`Unknown validation rule: ${ruleType}`],
               riskLevel: 'high',
               metadata: {
                  originalPath,
                  wasModified: false,
                  depth: 0,
                  isAbsolute: path.isAbsolute(inputPath),
                  containsTraversal: this.containsTraversal(inputPath),
               },
            };
         }

         // 3. Sanitize and normalize path
         const sanitized = this.sanitizePath(inputPath);
         inputPath = sanitized.path;

         // 4. Check for directory traversal
         const traversalCheck = this.checkDirectoryTraversal(inputPath);
         if (!traversalCheck.safe) {
            this.validationStats.blockedPaths++;
            this.validationStats.traversalAttempts++;

            return {
               valid: false,
               errors: [`Directory traversal attempt detected: ${traversalCheck.reason}`],
               riskLevel: 'high',
               metadata: {
                  originalPath,
                  wasModified: sanitized.wasModified,
                  depth: this.getPathDepth(inputPath),
                  isAbsolute: path.isAbsolute(inputPath),
                  containsTraversal: true,
               },
            };
         }

         // 5. Validate against blocked directories
         const blockedCheck = this.checkBlockedDirectories(inputPath);
         if (!blockedCheck.allowed) {
            this.validationStats.blockedPaths++;
            return {
               valid: false,
               errors: [`Access to blocked directory: ${blockedCheck.blockedDir}`],
               riskLevel: 'high',
               metadata: {
                  originalPath,
                  wasModified: sanitized.wasModified,
                  depth: this.getPathDepth(inputPath),
                  isAbsolute: path.isAbsolute(inputPath),
                  containsTraversal: false,
               },
            };
         }

         // 6. Validate against allowed directories
         const allowedCheck = this.checkAllowedDirectories(inputPath, rule);
         if (!allowedCheck.allowed) {
            this.validationStats.blockedPaths++;
            return {
               valid: false,
               errors: [`Path not in allowed directories: ${inputPath}`],
               warnings: [`Allowed directories: ${rule.allowedDirectories?.join(', ') || 'none'}`],
               riskLevel: rule.riskLevel,
               metadata: {
                  originalPath,
                  wasModified: sanitized.wasModified,
                  depth: this.getPathDepth(inputPath),
                  isAbsolute: path.isAbsolute(inputPath),
                  containsTraversal: false,
               },
            };
         }

         // 7. Validate file extension
         const extensionCheck = this.validateFileExtension(inputPath, rule);
         if (!extensionCheck.valid) {
            this.validationStats.blockedPaths++;
            return {
               valid: false,
               errors: extensionCheck.errors,
               riskLevel: rule.riskLevel,
               metadata: {
                  originalPath,
                  wasModified: sanitized.wasModified,
                  extension: extensionCheck.extension,
                  depth: this.getPathDepth(inputPath),
                  isAbsolute: path.isAbsolute(inputPath),
                  containsTraversal: false,
               },
            };
         }

         // 8. Validate path constraints
         const constraintCheck = this.validatePathConstraints(inputPath, rule);
         if (!constraintCheck.valid) {
            this.validationStats.blockedPaths++;
            return {
               valid: false,
               errors: constraintCheck.errors,
               warnings: constraintCheck.warnings,
               riskLevel: rule.riskLevel,
               metadata: {
                  originalPath,
                  wasModified: sanitized.wasModified,
                  extension: extensionCheck.extension,
                  depth: this.getPathDepth(inputPath),
                  isAbsolute: path.isAbsolute(inputPath),
                  containsTraversal: false,
               },
            };
         }

         // 9. Final normalization
         const normalizedPath = path.normalize(inputPath);

         // All validations passed
         this.validationStats.validPaths++;

         return {
            valid: true,
            sanitizedPath: inputPath,
            normalizedPath,
            riskLevel: rule.riskLevel,
            metadata: {
               originalPath,
               wasModified: sanitized.wasModified,
               extension: extensionCheck.extension,
               depth: this.getPathDepth(inputPath),
               isAbsolute: path.isAbsolute(inputPath),
               containsTraversal: false,
            },
         };
      } catch (error) {
         // Handle validation errors
         const validationError = this.errorHandler.createError(
            ErrorType.FILE_NOT_FOUND,
            `File path validation error: ${error.message}`,
            {
               path: originalPath,
               operation,
               ruleType,
               validationStep: 'file_path_validation',
            },
            error as Error
         );

         await this.errorHandler.handleError(validationError, true);

         this.validationStats.blockedPaths++;

         return {
            valid: false,
            errors: [`Validation error: ${error.message}`],
            riskLevel: 'high',
            metadata: {
               originalPath,
               wasModified: false,
               depth: 0,
               isAbsolute: path.isAbsolute(originalPath),
               containsTraversal: this.containsTraversal(originalPath),
            },
         };
      }
   }

   // Sanitize file path
   private sanitizePath(inputPath: string): {
      path: string;
      wasModified: boolean;
   } {
      const originalPath = inputPath;
      let wasModified = false;

      // Remove null bytes and control characters
      inputPath = inputPath.replace(/[\x00-\x1f\x7f-\x9f]/g, '');

      // Remove multiple consecutive slashes
      inputPath = inputPath.replace(/\/+/g, '/');

      // Remove trailing slashes (except for root)
      if (inputPath.length > 1 && inputPath.endsWith('/')) {
         inputPath = inputPath.slice(0, -1);
         wasModified = true;
      }

      // Remove leading slash if present (force relative paths)
      if (inputPath.startsWith('/')) {
         inputPath = inputPath.substring(1);
         wasModified = true;
      }

      // Remove Windows drive letters
      inputPath = inputPath.replace(/^[A-Za-z]:[\\/]/, '');

      // Normalize Windows path separators
      inputPath = inputPath.replace(/\\/g, '/');

      if (inputPath !== originalPath) {
         wasModified = true;
         this.validationStats.sanitizedPaths++;
      }

      return {
         path: inputPath,
         wasModified,
      };
   }

   // Check for directory traversal patterns
   private checkDirectoryTraversal(inputPath: string): {
      safe: boolean;
      reason?: string;
   } {
      // Check for obvious traversal patterns
      const dangerousPatterns = [
         /\.\./, // Parent directory
         /\.\/\.\./, // Current then parent
         /~\//, // Home directory
         /\/\.\./, // Leading parent directory
         /\.\.\/$/, // Ending parent directory
         /\.\.$/, // Ending parent directory
      ];

      for (const pattern of dangerousPatterns) {
         if (pattern.test(inputPath)) {
            return {
               safe: false,
               reason: `Path contains traversal pattern: ${pattern}`,
            };
         }
      }

      // Check if normalized path would escape base directory
      const normalized = path.normalize(inputPath);
      if (normalized.startsWith('../') || normalized === '..') {
         return {
            safe: false,
            reason: 'Normalized path would escape base directory',
         };
      }

      return { safe: true };
   }

   // Check if path is in blocked directories
   private checkBlockedDirectories(inputPath: string): {
      allowed: boolean;
      blockedDir?: string;
   } {
      const normalizedPath = path.normalize(inputPath).toLowerCase();

      for (const blockedDir of BLOCKED_DIRECTORIES) {
         const normalizedBlocked = blockedDir.toLowerCase();

         if (
            normalizedPath.startsWith(normalizedBlocked) ||
            normalizedPath === normalizedBlocked ||
            normalizedPath.includes(normalizedBlocked)
         ) {
            return {
               allowed: false,
               blockedDir,
            };
         }
      }

      return { allowed: true };
   }

   // Check if path is in allowed directories
   private checkAllowedDirectories(
      inputPath: string,
      rule: PathValidationRule
   ): {
      allowed: boolean;
   } {
      if (!rule.allowedDirectories || rule.allowedDirectories.length === 0) {
         return { allowed: true };
      }

      const normalizedPath = path.normalize(inputPath).toLowerCase();

      for (const allowedDir of rule.allowedDirectories) {
         const normalizedAllowed = allowedDir.toLowerCase();

         if (
            normalizedPath.startsWith(normalizedAllowed + '/') ||
            normalizedPath === normalizedAllowed ||
            normalizedPath.startsWith(normalizedAllowed + '\\')
         ) {
            return { allowed: true };
         }
      }

      return { allowed: false };
   }

   // Validate file extension
   private validateFileExtension(
      inputPath: string,
      rule: PathValidationRule
   ): {
      valid: boolean;
      extension?: string;
      errors?: string[];
   } {
      const extension = path.extname(inputPath).toLowerCase();

      // Check for dangerous extensions
      if (DANGEROUS_EXTENSIONS.includes(extension)) {
         return {
            valid: false,
            extension,
            errors: [`Dangerous file extension not allowed: ${extension}`],
         };
      }

      // Check against rule's allowed extensions
      if (rule.allowedExtensions && rule.allowedExtensions.length > 0) {
         if (extension && !rule.allowedExtensions.includes(extension)) {
            return {
               valid: false,
               extension,
               errors: [
                  `File extension '${extension}' not in allowed list: ${rule.allowedExtensions.join(', ')}`,
               ],
            };
         }
      }

      return {
         valid: true,
         extension: extension || undefined,
      };
   }

   // Validate path constraints
   private validatePathConstraints(
      inputPath: string,
      rule: PathValidationRule
   ): {
      valid: boolean;
      errors?: string[];
      warnings?: string[];
   } {
      const errors: string[] = [];
      const warnings: string[] = [];

      // Check path length
      if (rule.maxLength && inputPath.length > rule.maxLength) {
         errors.push(`Path length ${inputPath.length} exceeds maximum ${rule.maxLength}`);
      }

      // Check path depth
      const depth = this.getPathDepth(inputPath);
      if (rule.maxDepth && depth > rule.maxDepth) {
         errors.push(`Path depth ${depth} exceeds maximum ${rule.maxDepth}`);
      }

      // Check for long filename
      const filename = path.basename(inputPath);
      if (filename.length > 255) {
         errors.push(`Filename too long: ${filename.length} characters (max 255)`);
      }

      // Check for suspicious patterns in filename
      if (filename.includes('..') || filename.includes('/')) {
         errors.push(`Filename contains invalid characters: ${filename}`);
      }

      return {
         valid: errors.length === 0,
         errors: errors.length > 0 ? errors : undefined,
         warnings: warnings.length > 0 ? warnings : undefined,
      };
   }

   // Helper method to check if path contains traversal
   private containsTraversal(inputPath: string): boolean {
      return inputPath.includes('..') || inputPath.includes('~');
   }

   // Get path depth (number of directory levels)
   private getPathDepth(inputPath: string): number {
      const normalized = path.normalize(inputPath);
      if (normalized === '.' || normalized === '') return 0;
      return normalized.split(path.sep).filter((part) => part !== '').length;
   }

   // Get validation rule by name
   getValidationRule(ruleType: string): PathValidationRule | null {
      return PATH_VALIDATION_RULES[ruleType] || null;
   }

   // Get all validation rules
   getAllValidationRules(): Record<string, PathValidationRule> {
      return { ...PATH_VALIDATION_RULES };
   }

   // Check if operation is allowed for path
   async isOperationAllowed(
      inputPath: string,
      operation: 'read' | 'write' | 'list' | 'delete',
      ruleType = 'taskmaster_read'
   ): Promise<boolean> {
      const result = await this.validatePath(inputPath, operation, ruleType);

      if (!result.valid) {
         return false;
      }

      const rule = PATH_VALIDATION_RULES[ruleType];
      if (!rule) {
         return false;
      }

      // Check if operation is allowed by rule
      if (rule.readOnly && ['write', 'delete'].includes(operation)) {
         return false;
      }

      return true;
   }

   // Get safe base directory for operation
   getSafeBasePath(operation: 'read' | 'write' = 'read'): string {
      if (operation === 'write') {
         return '.taskmaster/tasks';
      }
      return '.taskmaster';
   }

   // Get validation statistics
   getValidationStats() {
      return {
         ...this.validationStats,
         successRate:
            this.validationStats.totalValidations > 0
               ? (this.validationStats.validPaths / this.validationStats.totalValidations) * 100
               : 0,
         traversalAttemptRate:
            this.validationStats.totalValidations > 0
               ? (this.validationStats.traversalAttempts / this.validationStats.totalValidations) *
                 100
               : 0,
      };
   }

   // Reset validation statistics
   resetStats(): void {
      this.validationStats = {
         totalValidations: 0,
         validPaths: 0,
         blockedPaths: 0,
         sanitizedPaths: 0,
         traversalAttempts: 0,
      };
   }

   // Add custom validation rule
   addValidationRule(name: string, rule: PathValidationRule): void {
      PATH_VALIDATION_RULES[name] = rule;
   }

   // Remove validation rule
   removeValidationRule(name: string): boolean {
      if (PATH_VALIDATION_RULES[name]) {
         delete PATH_VALIDATION_RULES[name];
         return true;
      }
      return false;
   }
}

// Export singleton instance
let globalPathValidator: FilePathValidator | null = null;

export function getGlobalPathValidator(): FilePathValidator {
   if (!globalPathValidator) {
      globalPathValidator = new FilePathValidator();
   }
   return globalPathValidator;
}

// Export constants for reference
export {
   SAFE_BASE_DIRECTORIES,
   BLOCKED_DIRECTORIES,
   DANGEROUS_EXTENSIONS,
   ALLOWED_EXTENSIONS,
   PATH_VALIDATION_RULES,
};
