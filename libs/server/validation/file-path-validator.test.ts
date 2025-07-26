import { jest } from '@jest/globals';
import {
   FilePathValidator,
   sanitizePath,
   isPathTraversal,
   isPathSafe,
   normalizePath,
} from './file-path-validator';
import type { PathValidationRule, PathValidationResult } from './file-path-validator';

describe('FilePathValidator', () => {
   let validator: FilePathValidator;

   beforeEach(() => {
      validator = new FilePathValidator();
   });

   describe('Basic Path Validation', () => {
      test('should validate safe paths', () => {
         const safePaths = [
            '.taskmaster/tasks/task-1.md',
            '.taskmaster/config.json',
            '.taskmaster/docs/prd.txt',
            'project-files/readme.md',
         ];

         safePaths.forEach((path) => {
            const result = validator.validatePath(path);
            expect(result.valid).toBe(true);
            expect(result.errors).toBeUndefined();
         });
      });

      test('should reject dangerous paths', () => {
         const dangerousPaths = [
            '../../../etc/passwd',
            '/etc/shadow',
            'C:\\Windows\\System32\\config\\SAM',
            '..\\..\\windows\\system32',
            '/root/.ssh/id_rsa',
         ];

         dangerousPaths.forEach((path) => {
            const result = validator.validatePath(path);
            expect(result.valid).toBe(false);
            expect(result.errors).toBeDefined();
            expect(result.errors!.length).toBeGreaterThan(0);
         });
      });

      test('should detect path traversal attempts', () => {
         const traversalPaths = [
            '../outside-project',
            '../../system-files',
            '.././../etc',
            'normal/../../../dangerous',
            'file.txt/../../../etc/passwd',
         ];

         traversalPaths.forEach((path) => {
            const result = validator.validatePath(path);
            expect(result.valid).toBe(false);
            expect(result.metadata?.containsTraversal).toBe(true);
         });
      });
   });

   describe('Path Sanitization', () => {
      test('should sanitize dangerous characters', () => {
         const testCases = [
            { input: 'file<script>.txt', expected: 'file.txt' },
            { input: 'file>redirect.txt', expected: 'fileredirect.txt' },
            { input: 'file|pipe.txt', expected: 'filepipe.txt' },
            { input: 'file&command.txt', expected: 'filecommand.txt' },
            { input: 'file;command.txt', expected: 'filecommand.txt' },
         ];

         testCases.forEach(({ input, expected }) => {
            const sanitized = sanitizePath(input);
            expect(sanitized).toBe(expected);
         });
      });

      test('should preserve valid characters', () => {
         const validPaths = [
            'normal-file.txt',
            'file_with_underscores.md',
            'file.with.dots.json',
            'folder/subfolder/file.txt',
            'UPPERCASE_file.TXT',
         ];

         validPaths.forEach((path) => {
            const sanitized = sanitizePath(path);
            expect(sanitized).toBe(path);
         });
      });

      test('should handle empty and null inputs', () => {
         expect(sanitizePath('')).toBe('');
         expect(sanitizePath(null as any)).toBe('');
         expect(sanitizePath(undefined as any)).toBe('');
      });
   });

   describe('Path Normalization', () => {
      test('should normalize path separators', () => {
         const testCases = [
            { input: 'folder\\file.txt', expected: 'folder/file.txt' },
            { input: 'folder\\\\subfolder\\file.txt', expected: 'folder/subfolder/file.txt' },
            { input: 'folder/subfolder\\file.txt', expected: 'folder/subfolder/file.txt' },
         ];

         testCases.forEach(({ input, expected }) => {
            const normalized = normalizePath(input);
            expect(normalized.includes('\\')).toBe(false);
            expect(normalized).toBe(expected);
         });
      });

      test('should resolve relative path components', () => {
         const testCases = [
            { input: './file.txt', expected: 'file.txt' },
            { input: 'folder/./file.txt', expected: 'folder/file.txt' },
            { input: 'folder/subfolder/../file.txt', expected: 'folder/file.txt' },
         ];

         testCases.forEach(({ input, expected }) => {
            const normalized = normalizePath(input);
            expect(normalized).toBe(expected);
         });
      });
   });

   describe('Path Traversal Detection', () => {
      test('should detect various traversal patterns', () => {
         const traversalPaths = [
            '../',
            '..\\',
            '../../',
            '..\\..\\',
            'file/../../../etc',
            'file\\..\\..\\system32',
            '%2e%2e%2f', // URL encoded ../
            '%2e%2e\\', // URL encoded ..\
         ];

         traversalPaths.forEach((path) => {
            expect(isPathTraversal(path)).toBe(true);
         });
      });

      test('should not flag legitimate relative paths', () => {
         const safePaths = [
            'folder/file.txt',
            './current/file.txt',
            'file.txt',
            'a..b.txt', // Dots that are not traversal
            'file.with..dots.txt',
         ];

         safePaths.forEach((path) => {
            expect(isPathTraversal(path)).toBe(false);
         });
      });
   });

   describe('Custom Validation Rules', () => {
      test('should apply custom extension rules', () => {
         const rule: PathValidationRule = {
            name: 'markdown-only',
            description: 'Only allow markdown files',
            allowedExtensions: ['.md', '.markdown'],
            riskLevel: 'low',
         };

         expect(validator.validatePath('file.md', rule).valid).toBe(true);
         expect(validator.validatePath('file.txt', rule).valid).toBe(false);
         expect(validator.validatePath('file.markdown', rule).valid).toBe(true);
      });

      test('should enforce maximum depth limits', () => {
         const rule: PathValidationRule = {
            name: 'shallow-only',
            description: 'Maximum 2 levels deep',
            maxDepth: 2,
            riskLevel: 'medium',
         };

         expect(validator.validatePath('file.txt', rule).valid).toBe(true);
         expect(validator.validatePath('folder/file.txt', rule).valid).toBe(true);
         expect(validator.validatePath('folder/subfolder/file.txt', rule).valid).toBe(true);
         expect(validator.validatePath('a/b/c/d/file.txt', rule).valid).toBe(false);
      });

      test('should enforce path length limits', () => {
         const rule: PathValidationRule = {
            name: 'short-paths',
            description: 'Maximum 20 characters',
            maxLength: 20,
            riskLevel: 'low',
         };

         expect(validator.validatePath('short.txt', rule).valid).toBe(true);
         expect(validator.validatePath('this-is-a-very-long-filename.txt', rule).valid).toBe(false);
      });

      test('should respect allowed directories', () => {
         const rule: PathValidationRule = {
            name: 'docs-only',
            description: 'Only allow docs directory',
            allowedDirectories: ['docs', '.taskmaster/docs'],
            riskLevel: 'medium',
         };

         expect(validator.validatePath('docs/file.txt', rule).valid).toBe(true);
         expect(validator.validatePath('.taskmaster/docs/file.txt', rule).valid).toBe(true);
         expect(validator.validatePath('src/file.txt', rule).valid).toBe(false);
      });
   });

   describe('Risk Assessment', () => {
      test('should assign risk levels based on path characteristics', () => {
         const highRiskPaths = ['/etc/passwd', 'C:\\Windows\\System32', '../../../system'];

         const lowRiskPaths = ['.taskmaster/tasks/task.md', 'docs/readme.txt', 'project/file.json'];

         highRiskPaths.forEach((path) => {
            const result = validator.validatePath(path);
            if (!result.valid) {
               expect(['high', 'critical']).toContain(result.riskLevel);
            }
         });

         lowRiskPaths.forEach((path) => {
            const result = validator.validatePath(path);
            if (result.valid) {
               expect(['low', 'medium']).toContain(result.riskLevel);
            }
         });
      });
   });

   describe('Metadata Generation', () => {
      test('should provide comprehensive metadata', () => {
         const result = validator.validatePath('.taskmaster/tasks/../config.json');

         expect(result.metadata).toBeDefined();
         expect(result.metadata!.originalPath).toBe('.taskmaster/tasks/../config.json');
         expect(result.metadata!.wasModified).toBe(true);
         expect(result.metadata!.extension).toBe('.json');
         expect(typeof result.metadata!.depth).toBe('number');
         expect(typeof result.metadata!.isAbsolute).toBe('boolean');
         expect(typeof result.metadata!.containsTraversal).toBe('boolean');
      });

      test('should detect file extensions correctly', () => {
         const testCases = [
            { path: 'file.txt', extension: '.txt' },
            { path: 'file.backup.json', extension: '.json' },
            { path: 'file', extension: undefined },
            { path: 'file.', extension: '.' },
            { path: '.hidden', extension: undefined },
         ];

         testCases.forEach(({ path, extension }) => {
            const result = validator.validatePath(path);
            expect(result.metadata!.extension).toBe(extension);
         });
      });
   });

   describe('Utility Functions', () => {
      test('isPathSafe should identify safe paths', () => {
         expect(isPathSafe('.taskmaster/tasks/task.md')).toBe(true);
         expect(isPathSafe('docs/readme.txt')).toBe(true);
         expect(isPathSafe('../../../etc/passwd')).toBe(false);
         expect(isPathSafe('/etc/shadow')).toBe(false);
      });

      test('should handle edge cases', () => {
         expect(isPathSafe('')).toBe(false);
         expect(isPathSafe('.')).toBe(true);
         expect(isPathSafe('..')).toBe(false);
         expect(isPathSafe('/')).toBe(false);
      });
   });

   describe('Error Handling', () => {
      test('should handle invalid input gracefully', () => {
         const invalidInputs = [null, undefined, '', '   '];

         invalidInputs.forEach((input) => {
            const result = validator.validatePath(input as any);
            expect(result.valid).toBe(false);
            expect(result.errors).toBeDefined();
         });
      });

      test('should provide helpful error messages', () => {
         const result = validator.validatePath('../../../etc/passwd');
         expect(result.errors).toBeDefined();
         expect(result.errors![0]).toContain('path traversal');
      });
   });

   describe('Performance', () => {
      test('should handle large numbers of validations efficiently', () => {
         const startTime = Date.now();

         for (let i = 0; i < 1000; i++) {
            validator.validatePath(`test-file-${i}.txt`);
         }

         const endTime = Date.now();
         const duration = endTime - startTime;

         // Should complete 1000 validations in reasonable time (< 1 second)
         expect(duration).toBeLessThan(1000);
      });
   });

   describe('Configuration', () => {
      test('should accept custom configuration', () => {
         const customValidator = new FilePathValidator({
            allowedExtensions: ['.custom'],
            maxPathLength: 50,
            enableSanitization: false,
         });

         expect(customValidator).toBeDefined();

         const result = customValidator.validatePath('test.custom');
         expect(result.valid).toBe(true);
      });
   });
});
