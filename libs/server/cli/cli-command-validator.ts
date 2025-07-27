import { z } from 'zod';
import { getGlobalErrorHandler, ErrorType } from '../core/error-handler';

// CLI command validation interfaces
export interface CLICommandRule {
   command: string;
   description: string;
   allowedArgs: string[];
   requiredArgs?: string[];
   maxArgs?: number;
   validationSchema?: z.ZodSchema;
   riskLevel: 'low' | 'medium' | 'high';
   requiresAuth?: boolean;
   rateLimitGroup?: string;
}

export interface CommandValidationResult {
   valid: boolean;
   command?: string;
   normalizedArgs?: string[];
   errors?: string[];
   warnings?: string[];
   riskLevel?: 'low' | 'medium' | 'high';
   metadata?: {
      sanitized: boolean;
      filtered: boolean;
      originalCommand: string;
      originalArgs: string[];
   };
}

// Comprehensive Task Master CLI command allowlist
const TASK_MASTER_COMMAND_ALLOWLIST: Record<string, CLICommandRule> = {
   // Core task operations
   'list': {
      command: 'list',
      description: 'List all tasks with optional filtering',
      allowedArgs: ['--status', '--priority', '--tag', '--format', '--limit', '--offset'],
      maxArgs: 10,
      riskLevel: 'low',
      rateLimitGroup: 'read',
      validationSchema: z
         .object({
            status: z.enum(['pending', 'in-progress', 'done', 'deferred', 'cancelled']).optional(),
            priority: z.enum(['high', 'medium', 'low']).optional(),
            tag: z.string().optional(),
            format: z.enum(['table', 'json', 'csv']).optional(),
            limit: z.number().min(1).max(1000).optional(),
            offset: z.number().min(0).optional(),
         })
         .optional(),
   },

   'next': {
      command: 'next',
      description: 'Get the next available task to work on',
      allowedArgs: ['--priority', '--tag'],
      maxArgs: 4,
      riskLevel: 'low',
      rateLimitGroup: 'read',
   },

   'show': {
      command: 'show',
      description: 'Show detailed information about a specific task',
      allowedArgs: ['--id'],
      requiredArgs: ['--id'],
      maxArgs: 2,
      riskLevel: 'low',
      rateLimitGroup: 'read',
      validationSchema: z.object({
         id: z.string().regex(/^[\d\.]+$/, 'Invalid task ID format'),
      }),
   },

   'set-status': {
      command: 'set-status',
      description: 'Update task status',
      allowedArgs: ['--id', '--status'],
      requiredArgs: ['--id', '--status'],
      maxArgs: 4,
      riskLevel: 'medium',
      requiresAuth: true,
      rateLimitGroup: 'write',
      validationSchema: z.object({
         id: z.string().regex(/^[\d\.]+$/, 'Invalid task ID format'),
         status: z.enum(['pending', 'in-progress', 'done', 'deferred', 'cancelled']),
      }),
   },

   'add-task': {
      command: 'add-task',
      description: 'Add a new task',
      allowedArgs: ['--prompt', '--research', '--priority', '--dependencies', '--parent'],
      requiredArgs: ['--prompt'],
      maxArgs: 10,
      riskLevel: 'high',
      requiresAuth: true,
      rateLimitGroup: 'write',
      validationSchema: z.object({
         prompt: z.string().min(5).max(2000),
         research: z.boolean().optional(),
         priority: z.enum(['high', 'medium', 'low']).optional(),
         dependencies: z.string().optional(),
         parent: z
            .string()
            .regex(/^[\d\.]+$/)
            .optional(),
      }),
   },

   'expand': {
      command: 'expand',
      description: 'Expand a task into subtasks',
      allowedArgs: ['--id', '--research', '--force', '--all', '--complexity'],
      maxArgs: 10,
      riskLevel: 'high',
      requiresAuth: true,
      rateLimitGroup: 'ai',
      validationSchema: z.object({
         id: z
            .string()
            .regex(/^[\d\.]+$/)
            .optional(),
         research: z.boolean().optional(),
         force: z.boolean().optional(),
         all: z.boolean().optional(),
         complexity: z.number().min(1).max(10).optional(),
      }),
   },

   'update-task': {
      command: 'update-task',
      description: 'Update task information',
      allowedArgs: ['--id', '--prompt', '--title', '--description', '--priority'],
      requiredArgs: ['--id'],
      maxArgs: 10,
      riskLevel: 'medium',
      requiresAuth: true,
      rateLimitGroup: 'write',
      validationSchema: z.object({
         id: z.string().regex(/^[\d\.]+$/, 'Invalid task ID format'),
         prompt: z.string().min(5).max(2000).optional(),
         title: z.string().min(3).max(200).optional(),
         description: z.string().max(5000).optional(),
         priority: z.enum(['high', 'medium', 'low']).optional(),
      }),
   },

   'update-subtask': {
      command: 'update-subtask',
      description: 'Update subtask information',
      allowedArgs: ['--id', '--prompt', '--notes', '--status'],
      requiredArgs: ['--id', '--prompt'],
      maxArgs: 8,
      riskLevel: 'medium',
      requiresAuth: true,
      rateLimitGroup: 'write',
      validationSchema: z.object({
         id: z.string().regex(/^[\d\.]+$/, 'Invalid task ID format'),
         prompt: z.string().min(5).max(2000),
         notes: z.string().max(1000).optional(),
         status: z.enum(['pending', 'in-progress', 'done', 'deferred', 'cancelled']).optional(),
      }),
   },

   'update': {
      command: 'update',
      description: 'Update multiple tasks from a starting ID',
      allowedArgs: ['--from', '--to', '--prompt', '--research'],
      requiredArgs: ['--from', '--prompt'],
      maxArgs: 8,
      riskLevel: 'high',
      requiresAuth: true,
      rateLimitGroup: 'ai',
      validationSchema: z.object({
         from: z.string().regex(/^[\d\.]+$/, 'Invalid task ID format'),
         to: z
            .string()
            .regex(/^[\d\.]+$/, 'Invalid task ID format')
            .optional(),
         prompt: z.string().min(5).max(2000),
         research: z.boolean().optional(),
      }),
   },

   // Analysis operations
   'analyze-complexity': {
      command: 'analyze-complexity',
      description: 'Analyze project complexity',
      allowedArgs: ['--research', '--from', '--to', '--model'],
      maxArgs: 8,
      riskLevel: 'medium',
      rateLimitGroup: 'ai',
      validationSchema: z.object({
         research: z.boolean().optional(),
         from: z
            .string()
            .regex(/^[\d\.]+$/)
            .optional(),
         to: z
            .string()
            .regex(/^[\d\.]+$/)
            .optional(),
         model: z.string().optional(),
      }),
   },

   'complexity-report': {
      command: 'complexity-report',
      description: 'Generate complexity analysis report',
      allowedArgs: ['--format', '--output'],
      maxArgs: 4,
      riskLevel: 'low',
      rateLimitGroup: 'read',
   },

   // Project operations (restricted)
   'init': {
      command: 'init',
      description: 'Initialize Task Master in current project',
      allowedArgs: ['--force', '--template'],
      maxArgs: 4,
      riskLevel: 'high',
      requiresAuth: true,
      rateLimitGroup: 'admin',
   },

   'parse-prd': {
      command: 'parse-prd',
      description: 'Parse PRD document and generate tasks',
      allowedArgs: ['--append', '--research', '--model', '--file'],
      maxArgs: 8,
      riskLevel: 'high',
      requiresAuth: true,
      rateLimitGroup: 'ai',
      validationSchema: z.object({
         append: z.boolean().optional(),
         research: z.boolean().optional(),
         model: z.string().optional(),
         file: z.string().optional(),
      }),
   },

   'generate': {
      command: 'generate',
      description: 'Generate task markdown files',
      allowedArgs: ['--force', '--template'],
      maxArgs: 4,
      riskLevel: 'medium',
      requiresAuth: true,
      rateLimitGroup: 'write',
   },

   // Configuration operations (high security)
   'models': {
      command: 'models',
      description: 'Configure AI models',
      allowedArgs: ['--setup', '--set-main', '--set-research', '--set-fallback', '--list'],
      maxArgs: 6,
      riskLevel: 'high',
      requiresAuth: true,
      rateLimitGroup: 'admin',
   },

   // Dependency operations
   'add-dependency': {
      command: 'add-dependency',
      description: 'Add task dependency',
      allowedArgs: ['--id', '--depends-on'],
      requiredArgs: ['--id', '--depends-on'],
      maxArgs: 4,
      riskLevel: 'medium',
      requiresAuth: true,
      rateLimitGroup: 'write',
      validationSchema: z.object({
         'id': z.string().regex(/^[\d\.]+$/, 'Invalid task ID format'),
         'depends-on': z.string().regex(/^[\d\.]+$/, 'Invalid dependency ID format'),
      }),
   },

   'validate-dependencies': {
      command: 'validate-dependencies',
      description: 'Validate task dependencies',
      allowedArgs: ['--fix', '--report'],
      maxArgs: 4,
      riskLevel: 'low',
      rateLimitGroup: 'read',
   },

   'move': {
      command: 'move',
      description: 'Move task in hierarchy',
      allowedArgs: ['--from', '--to', '--force'],
      requiredArgs: ['--from', '--to'],
      maxArgs: 6,
      riskLevel: 'high',
      requiresAuth: true,
      rateLimitGroup: 'write',
      validationSchema: z.object({
         from: z.string().regex(/^[\d\.]+$/, 'Invalid source task ID format'),
         to: z.string().regex(/^[\d\.]+$/, 'Invalid target task ID format'),
         force: z.boolean().optional(),
      }),
   },
};

// Dangerous patterns that should never be allowed
const DANGEROUS_PATTERNS = [
   // Shell injection attempts
   /[;&|`$()]/,
   /\.\./,
   /\/etc\/passwd/,
   /\/proc\//,
   /rm\s+/,
   /del\s+/,
   /format\s+/,

   // Command injection
   /&&/,
   /\|\|/,
   />>/,
   />/,
   /</,

   // Script execution
   /eval\(/,
   /exec\(/,
   /system\(/,
   /spawn\(/,

   // File system manipulation
   /chmod/,
   /chown/,
   /sudo/,
   /su\s/,

   // Network operations
   /curl/,
   /wget/,
   /nc\s/,
   /netcat/,
];

// CLI Command Validator class
export class CLICommandValidator {
   private errorHandler = getGlobalErrorHandler();
   private validationStats = {
      totalValidations: 0,
      validCommands: 0,
      blockedCommands: 0,
      sanitizedCommands: 0,
   };

   // Main validation method
   async validateCommand(command: string, args: string[] = []): Promise<CommandValidationResult> {
      this.validationStats.totalValidations++;

      const originalCommand = command;
      const originalArgs = [...args];

      try {
         // 1. Basic sanitization
         const sanitized = this.sanitizeInput(command, args);
         command = sanitized.command;
         args = sanitized.args;

         // 2. Check for dangerous patterns
         const dangerCheck = this.checkDangerousPatterns(command, args);
         if (!dangerCheck.safe) {
            this.validationStats.blockedCommands++;
            return {
               valid: false,
               errors: [`Dangerous pattern detected: ${dangerCheck.pattern}`],
               riskLevel: 'high',
               metadata: {
                  sanitized: sanitized.wasSanitized,
                  filtered: false,
                  originalCommand,
                  originalArgs,
               },
            };
         }

         // 3. Check allowlist
         const allowlistCheck = this.checkAllowlist(command);
         if (!allowlistCheck.allowed) {
            this.validationStats.blockedCommands++;
            return {
               valid: false,
               errors: [`Command '${command}' is not in the allowed list`],
               riskLevel: 'high',
               metadata: {
                  sanitized: sanitized.wasSanitized,
                  filtered: false,
                  originalCommand,
                  originalArgs,
               },
            };
         }

         const commandRule = allowlistCheck.rule!;

         // 4. Validate arguments
         const argValidation = this.validateArguments(args, commandRule);
         if (!argValidation.valid) {
            this.validationStats.blockedCommands++;
            return {
               valid: false,
               errors: argValidation.errors,
               warnings: argValidation.warnings,
               riskLevel: commandRule.riskLevel,
               metadata: {
                  sanitized: sanitized.wasSanitized,
                  filtered: argValidation.filtered || false,
                  originalCommand,
                  originalArgs,
               },
            };
         }

         // 5. Schema validation (if provided)
         if (commandRule.validationSchema) {
            const schemaValidation = this.validateSchema(args, commandRule);
            if (!schemaValidation.valid) {
               this.validationStats.blockedCommands++;
               return {
                  valid: false,
                  errors: schemaValidation.errors,
                  riskLevel: commandRule.riskLevel,
                  metadata: {
                     sanitized: sanitized.wasSanitized,
                     filtered: false,
                     originalCommand,
                     originalArgs,
                  },
               };
            }
         }

         // All validations passed
         this.validationStats.validCommands++;

         return {
            valid: true,
            command,
            normalizedArgs: argValidation.normalizedArgs || args,
            riskLevel: commandRule.riskLevel,
            metadata: {
               sanitized: sanitized.wasSanitized,
               filtered: argValidation.filtered || false,
               originalCommand,
               originalArgs,
            },
         };
      } catch (error) {
         // Handle validation errors
         const errorMessage = error instanceof Error ? error.message : String(error);
         const validationError = this.errorHandler.createError(
            ErrorType.VALIDATION_SCHEMA_MISMATCH,
            `CLI command validation error: ${errorMessage}`,
            {
               command: originalCommand,
               args: originalArgs,
               operation: 'cli_command_validation',
            },
            error as Error
         );

         await this.errorHandler.handleError(validationError, true);

         this.validationStats.blockedCommands++;

         return {
            valid: false,
            errors: [`Validation error: ${errorMessage}`],
            riskLevel: 'high',
            metadata: {
               sanitized: false,
               filtered: false,
               originalCommand,
               originalArgs,
            },
         };
      }
   }

   // Sanitize command and arguments
   private sanitizeInput(
      command: string,
      args: string[]
   ): {
      command: string;
      args: string[];
      wasSanitized: boolean;
   } {
      let wasSanitized = false;

      // Sanitize command
      const originalCommand = command;
      command = command
         .trim()
         .toLowerCase()
         .replace(/[^a-z0-9-]/g, '');

      if (command !== originalCommand.trim().toLowerCase()) {
         wasSanitized = true;
      }

      // Sanitize arguments
      const sanitizedArgs = args
         .map((arg) => {
            const original = arg;
            // Remove dangerous characters but preserve necessary ones for arguments
            let sanitized = arg.trim().replace(/[;&|`$()]/g, '');

            // Handle special argument formats
            if (sanitized.startsWith('--')) {
               // Keep argument flags as-is (mostly)
               sanitized = sanitized.replace(/[^a-zA-Z0-9-=._]/g, '');
            } else {
               // Regular argument - more restrictive
               sanitized = sanitized.replace(/[^a-zA-Z0-9-=._\s]/g, '');
            }

            if (sanitized !== original) {
               wasSanitized = true;
            }

            return sanitized;
         })
         .filter((arg) => arg.length > 0); // Remove empty args

      if (sanitizedArgs.length !== args.length) {
         wasSanitized = true;
      }

      if (wasSanitized) {
         this.validationStats.sanitizedCommands++;
      }

      return {
         command,
         args: sanitizedArgs,
         wasSanitized,
      };
   }

   // Check for dangerous patterns
   private checkDangerousPatterns(
      command: string,
      args: string[]
   ): {
      safe: boolean;
      pattern?: string;
   } {
      const fullInput = `${command} ${args.join(' ')}`;

      for (const pattern of DANGEROUS_PATTERNS) {
         if (pattern.test(fullInput)) {
            return {
               safe: false,
               pattern: pattern.toString(),
            };
         }
      }

      return { safe: true };
   }

   // Check command against allowlist
   private checkAllowlist(command: string): {
      allowed: boolean;
      rule?: CLICommandRule;
   } {
      const rule = TASK_MASTER_COMMAND_ALLOWLIST[command];

      if (!rule) {
         return { allowed: false };
      }

      return {
         allowed: true,
         rule,
      };
   }

   // Validate command arguments
   private validateArguments(
      args: string[],
      rule: CLICommandRule
   ): {
      valid: boolean;
      errors?: string[];
      warnings?: string[];
      normalizedArgs?: string[];
      filtered?: boolean;
   } {
      const errors: string[] = [];
      const warnings: string[] = [];
      let filtered = false;

      // Check argument count
      if (rule.maxArgs && args.length > rule.maxArgs) {
         errors.push(`Too many arguments: ${args.length}, maximum allowed: ${rule.maxArgs}`);
      }

      // Parse arguments into key-value pairs
      const parsedArgs: Record<string, string | boolean> = {};
      const normalizedArgs: string[] = [];

      for (let i = 0; i < args.length; i++) {
         const arg = args[i];

         if (arg && arg.startsWith('--')) {
            const key = arg.substring(2);

            // Check if argument is allowed
            if (!rule.allowedArgs.includes(arg)) {
               errors.push(`Argument '${arg}' is not allowed for command '${rule.command}'`);
               filtered = true;
               continue;
            }

            // Handle boolean flags
            const nextArg = args[i + 1];
            if (i + 1 < args.length && nextArg && !nextArg.startsWith('--')) {
               const value = nextArg;
               parsedArgs[key] = value;
               normalizedArgs.push(arg, value);
               i++; // Skip the value in next iteration
            } else {
               parsedArgs[key] = true;
               normalizedArgs.push(arg);
            }
         } else {
            errors.push(`Invalid argument format: '${arg}'. Arguments must start with '--'`);
            filtered = true;
         }
      }

      // Check required arguments
      if (rule.requiredArgs) {
         for (const requiredArg of rule.requiredArgs) {
            const key = requiredArg.substring(2); // Remove '--'
            if (!(key in parsedArgs)) {
               errors.push(`Required argument '${requiredArg}' is missing`);
            }
         }
      }

      return {
         valid: errors.length === 0,
         errors: errors.length > 0 ? errors : undefined,
         warnings: warnings.length > 0 ? warnings : undefined,
         normalizedArgs,
         filtered,
      };
   }

   // Validate using Zod schema
   private validateSchema(
      args: string[],
      rule: CLICommandRule
   ): {
      valid: boolean;
      errors?: string[];
   } {
      if (!rule.validationSchema) {
         return { valid: true };
      }

      try {
         // Parse arguments into object
         const argsObject: Record<string, any> = {};

         for (let i = 0; i < args.length; i++) {
            const arg = args[i];

            if (arg && arg.startsWith('--')) {
               const key = arg.substring(2);

               const nextArg2 = args[i + 1];
               if (i + 1 < args.length && nextArg2 && !nextArg2.startsWith('--')) {
                  let value: any = nextArg2;

                  // Try to parse as number or boolean
                  if (value === 'true') value = true;
                  else if (value === 'false') value = false;
                  else if (!isNaN(Number(value)) && value !== '') value = Number(value);

                  argsObject[key] = value;
                  i++; // Skip the value
               } else {
                  argsObject[key] = true;
               }
            }
         }

         const result = rule.validationSchema.safeParse(argsObject);

         if (!result.success) {
            return {
               valid: false,
               errors: result.error.errors.map((err) => `${err.path.join('.')}: ${err.message}`),
            };
         }

         return { valid: true };
      } catch (error) {
         const errorMessage = error instanceof Error ? error.message : String(error);
         return {
            valid: false,
            errors: [`Schema validation error: ${errorMessage}`],
         };
      }
   }

   // Get command rule by name
   getCommandRule(command: string): CLICommandRule | null {
      return TASK_MASTER_COMMAND_ALLOWLIST[command] || null;
   }

   // Get all allowed commands
   getAllowedCommands(): CLICommandRule[] {
      return Object.values(TASK_MASTER_COMMAND_ALLOWLIST);
   }

   // Get validation statistics
   getValidationStats() {
      return {
         ...this.validationStats,
         successRate:
            this.validationStats.totalValidations > 0
               ? (this.validationStats.validCommands / this.validationStats.totalValidations) * 100
               : 0,
      };
   }

   // Check if command requires authentication
   requiresAuth(command: string): boolean {
      const rule = TASK_MASTER_COMMAND_ALLOWLIST[command];
      return rule?.requiresAuth || false;
   }

   // Get rate limit group for command
   getRateLimitGroup(command: string): string {
      const rule = TASK_MASTER_COMMAND_ALLOWLIST[command];
      return rule?.rateLimitGroup || 'default';
   }

   // Reset validation statistics
   resetStats(): void {
      this.validationStats = {
         totalValidations: 0,
         validCommands: 0,
         blockedCommands: 0,
         sanitizedCommands: 0,
      };
   }
}

// Export singleton instance
let globalCLIValidator: CLICommandValidator | null = null;

export function getGlobalCLIValidator(): CLICommandValidator {
   if (!globalCLIValidator) {
      globalCLIValidator = new CLICommandValidator();
   }
   return globalCLIValidator;
}

// Export command allowlist for reference
export { TASK_MASTER_COMMAND_ALLOWLIST };
