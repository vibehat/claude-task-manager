import { jest } from '@jest/globals';
import { CLICommandValidator } from './cli-command-validator';
import type { CLICommandRule, CommandValidationResult } from './cli-command-validator';

describe('CLICommandValidator', () => {
   let validator: CLICommandValidator;

   beforeEach(() => {
      validator = new CLICommandValidator();
   });

   describe('Command Validation', () => {
      test('should validate allowed commands', async () => {
         const result = await validator.validateCommand('list', []);
         expect(result.valid).toBe(true);
         expect(result.riskLevel).toBe('low');
      });

      test('should reject unknown commands', async () => {
         const result = await validator.validateCommand('unknown-command', []);
         expect(result.valid).toBe(false);
         expect(result.errors?.[0]).toContain('not in the allowed list');
      });

      test('should validate required arguments', async () => {
         const result = await validator.validateCommand('show', []);
         expect(result.valid).toBe(false);
         expect(result.errors?.[0]).toContain('Required argument');
      });

      test('should validate argument formats', async () => {
         const result = await validator.validateCommand('list', ['--status=invalid']);
         expect(result.valid).toBe(false);
         expect(result.errors?.length).toBeGreaterThan(0);
      });
   });

   describe('Security Validation', () => {
      test('should detect dangerous patterns', async () => {
         const result = await validator.validateCommand('list', ['--status=pending; rm -rf /']);
         expect(result.valid).toBe(false);
         expect(result.errors?.[0]).toContain('not allowed');
      });

      test('should detect path traversal attempts', async () => {
         const result = await validator.validateCommand('show', ['--id=../../../etc/passwd']);
         expect(result.valid).toBe(false);
         expect(result.errors?.[0]).toContain('Dangerous pattern detected');
      });

      test('should sanitize input arguments', async () => {
         const result = await validator.validateCommand('list', ['--status', 'pending']);
         expect(result.valid).toBe(true);
         expect(result.normalizedArgs).toEqual(['--status', 'pending']);
      });
   });

   describe('Rate Limiting Groups', () => {
      test('should assign correct rate limit groups', async () => {
         const readResult = await validator.validateCommand('list', []);
         expect(readResult.valid).toBe(true);

         const writeResult = await validator.validateCommand('add-task', [
            '--prompt',
            'test task description',
         ]);
         expect(writeResult.valid).toBe(true);
      });
   });

   describe('Argument Limits', () => {
      test('should enforce maximum argument limits', async () => {
         const manyArgs = Array(20)
            .fill()
            .flatMap(() => ['--status', 'pending']);
         const result = await validator.validateCommand('list', manyArgs);
         expect(result.valid).toBe(false);
         expect(result.errors?.[0]).toContain('Too many arguments');
      });

      test('should accept valid argument counts', async () => {
         const result = await validator.validateCommand('list', [
            '--status',
            'pending',
            '--priority',
            'high',
         ]);
         expect(result.valid).toBe(true);
      });
   });

   describe('Error Handling', () => {
      test('should handle malformed arguments gracefully', async () => {
         const result = await validator.validateCommand('list', ['--invalid-format', '']);
         expect(result.valid).toBe(false);
         expect(result.errors).toBeDefined();
      });

      test('should provide helpful error messages', async () => {
         const result = await validator.validateCommand('show', []);
         expect(result.valid).toBe(false);
         expect(result.errors?.[0]).toContain('Required argument');
      });
   });
});
