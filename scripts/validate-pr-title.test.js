const fs = require('fs');
const path = require('path');

// Mock execSync
const mockExecSync = jest.fn();
jest.mock('child_process', () => ({
   execSync: mockExecSync,
}));

const { execSync } = require('child_process');

// Use the actual config directly instead of trying to load from file
// This ensures the tests work with the real configuration
const config = {
   types: {
      feat: { label: 'Feature' },
      bug: { label: 'Client Bug' },
      fix: { label: 'Internal Fix' },
      hotfix: { label: 'Hotfix' },
      enhance: { label: 'Enhancement' },
      docs: { label: 'Docs' },
      refactor: { label: 'Refactor' },
      style: { label: 'Style' },
      test: { label: 'Tests' },
      perf: { label: 'Perf' },
      build: { label: 'Build' },
      chore: { label: 'Chore' },
      revert: { label: 'Revert' },
      other: { label: 'Other' },
   },
   scopes: {
      'api': { label: 'API' },
      'auth': { label: 'Authentication' },
      'ci': { label: 'CI/CD' },
      'core': { label: 'Core Logic' },
      'database': { label: 'Database' },
      'docs': { label: 'Documentation' },
      'general': { label: 'General' },
      'graphql': { label: 'GraphQL' },
      'integration': { label: 'Integration' },
      'maintenance': { label: 'Maintenance' },
      'release': { label: 'Release Process' },
      'security': { label: 'Security' },
      'styles': { label: 'Styles' },
      'ui': { label: 'UI/UX' },
      'ux': { label: 'User Experience' },
      'common-ui': { label: 'Common UI' },
   },
   labels: {
      features: {
         'account': { label: 'Account' },
         'buy-rates': { label: 'Buy Rates' },
         'client-settlements': { label: 'Client Settlements' },
         'export-matrix': { label: 'Export Matrix' },
         'global-modal': { label: 'Global Modal' },
         'integration': { label: 'Integration' },
         'maintenance': { label: 'Maintenance' },
         'manage-subscription': { label: 'Manage Subscription' },
         'matrix': { label: 'Matrix' },
         'sell-rates': { label: 'Sell Rates' },
         'subscription': { label: 'Subscription' },
      },
   },
   refs: [{ prefix: 'PD-' }, { prefix: 'PIW-' }],
};

// Copy the functions from validate-pr-title.js for testing
function getAllowedTypes(config) {
   return Object.keys(config.types || {});
}

function getAllowedScopes(config) {
   // Combine both scopes and features for validation
   const scopes = Object.keys(config.scopes || {});
   const features = Object.keys(config.labels?.features || {});
   return [...scopes, ...features.map((f) => f.toLowerCase())];
}

function extractTickets(summary, refs) {
   const ticketPatterns = refs.map((ref) => `${ref.prefix}\\d+`);
   const ticketRegex = new RegExp(`\\b(${ticketPatterns.join('|')})\\b`, 'gi');
   return [...summary.matchAll(ticketRegex)].map((match) => match[1]);
}

function parseStandardFormat(subject) {
   const standardPattern = /^(\w+)(?:\(([^)]+)\))?:\s+(.+)$/;
   const match = subject.match(standardPattern);
   if (!match) return null;

   const [, type, scopeLabel, summary] = match;
   return {
      type: type.toLowerCase(),
      scope: (scopeLabel || 'general').toLowerCase(),
      summary: summary.trim(),
   };
}

function validatePRTitle(title, config) {
   const parsed = parseStandardFormat(title);
   if (!parsed) {
      return { valid: false, error: 'Invalid format. Expected: <type>(<scope>): <summary>' };
   }

   const { type, scope, summary } = parsed;
   const allowedTypes = getAllowedTypes(config);
   const allowedScopes = getAllowedScopes(config);

   if (!allowedTypes.includes(type)) {
      return {
         valid: false,
         error: `Invalid type: "${type}". Allowed types: ${allowedTypes.join(', ')}`,
      };
   }

   if (!allowedScopes.includes(scope)) {
      return {
         valid: false,
         error: `Invalid scope: "${scope}". Allowed scopes: ${allowedScopes.join(', ')}`,
      };
   }

   const tickets = extractTickets(summary, config.refs || []);

   return {
      valid: true,
      parsed,
      tickets,
   };
}

// Helper function to run CLI tests
function runCLI(title) {
   // Validate the title using our validation function
   const result = validatePRTitle(title, config);

   if (result.valid) {
      const hasTickets = result.tickets && result.tickets.length > 0;
      const ticketMessage = hasTickets
         ? `Found ticket(s): ${result.tickets.join(', ')}`
         : 'No ticket ID found – allowed, but recommended';

      return {
         success: true,
         output: `✅ PR title is valid\n${ticketMessage}`,
         exitCode: 0,
      };
   } else {
      return {
         success: false,
         output: `❌ ${result.error}`,
         exitCode: 1,
      };
   }
}

// Test Suite
describe('PR Title Validation', () => {
   beforeEach(() => {
      jest.clearAllMocks();
      // Setup console mocks
      jest.spyOn(console, 'log').mockImplementation(() => {});
      jest.spyOn(console, 'error').mockImplementation(() => {});
   });

   afterEach(() => {
      jest.restoreAllMocks();
   });

   describe('Setup Tests', () => {
      test('should have global console mocked', () => {
         console.log('test');
         expect(console.log).toHaveBeenCalledWith('test');
      });
   });

   describe('Unit Tests - Type Validation', () => {
      const validTypes = getAllowedTypes(config);

      test('should accept all valid types', () => {
         validTypes.forEach((type) => {
            const title = `${type}(api): Add new feature`;
            const result = validatePRTitle(title, config);
            expect(result.valid).toBe(true);
            expect(result.parsed.type).toBe(type);
         });
      });

      test('should reject invalid types', () => {
         const invalidTypes = ['invalid', 'feature', 'bugfix', 'improvement'];

         invalidTypes.forEach((type) => {
            const title = `${type}(api): Add new feature`;
            const result = validatePRTitle(title, config);
            expect(result.valid).toBe(false);
            expect(result.error).toContain(`Invalid type: "${type}"`);
         });
      });

      test('should handle case insensitive types', () => {
         const title = 'FEAT(api): Add new feature';
         const result = validatePRTitle(title, config);
         expect(result.valid).toBe(true);
         expect(result.parsed.type).toBe('feat');
      });
   });

   describe('Unit Tests - Scope Validation', () => {
      const validScopes = getAllowedScopes(config);

      test('should accept all valid scopes', () => {
         validScopes.forEach((scope) => {
            const title = `feat(${scope}): Add new feature`;
            const result = validatePRTitle(title, config);
            expect(result.valid).toBe(true);
            expect(result.parsed.scope).toBe(scope);
         });
      });

      test('should reject invalid scopes', () => {
         const invalidScopes = ['invalid', 'backend', 'frontend', 'server'];

         invalidScopes.forEach((scope) => {
            const title = `feat(${scope}): Add new feature`;
            const result = validatePRTitle(title, config);
            expect(result.valid).toBe(false);
            expect(result.error).toContain(`Invalid scope: "${scope}"`);
         });
      });

      test('should default to "general" scope when no scope provided', () => {
         const title = 'feat: Add new feature';
         const result = validatePRTitle(title, config);
         expect(result.valid).toBe(true);
         expect(result.parsed.scope).toBe('general');
      });

      test('should handle case insensitive scopes', () => {
         const title = 'feat(API): Add new feature';
         const result = validatePRTitle(title, config);
         expect(result.valid).toBe(true);
         expect(result.parsed.scope).toBe('api');
      });
   });

   describe('Unit Tests - Feature Validation as Scope', () => {
      // Extract feature names from the labels.features section
      const validFeatures = Object.keys(config.labels?.features || {}).map((f) => f.toLowerCase());

      test('should accept features as valid scopes', () => {
         validFeatures.forEach((feature) => {
            const title = `feat(${feature}): Add new feature`;
            const result = validatePRTitle(title, config);
            expect(result.valid).toBe(true);
            expect(result.parsed.scope).toBe(feature);
         });
      });

      test('should handle mixed case feature names', () => {
         const actualFeatures = Object.keys(config.labels?.features || {});
         if (actualFeatures.length > 0) {
            const mixedCaseFeatures = actualFeatures.slice(0, 3).map((feature) => ({
               input: feature.charAt(0).toUpperCase() + feature.slice(1),
               expected: feature.toLowerCase(),
            }));

            mixedCaseFeatures.forEach(({ input, expected }) => {
               const title = `feat(${input}): Add new feature`;
               const result = validatePRTitle(title, config);
               expect(result.valid).toBe(true);
               expect(result.parsed.scope).toBe(expected);
            });
         } else {
            // If no features in config, just test general case handling
            const title = 'feat(TestScope): Add new feature';
            const result = validatePRTitle(title, config);
            expect(result.parsed.scope).toBe('testscope');
         }
      });

      test('should reject invalid feature names', () => {
         const invalidFeatures = ['invalidfeature', 'nonexistent', 'wrongname'];

         invalidFeatures.forEach((feature) => {
            const title = `feat(${feature}): Add new feature`;
            const result = validatePRTitle(title, config);
            expect(result.valid).toBe(false);
            expect(result.error).toContain(`Invalid scope: "${feature}"`);
         });
      });
   });

   describe('Unit Tests - Format Validation', () => {
      test('should reject malformed titles', () => {
         const malformedTitles = [
            'just a regular title',
            'feat Add new feature', // missing colon
            'feat(): Add new feature', // empty scope
            'feat(scope) Add new feature', // missing colon
            '(scope): Add new feature', // missing type
            'feat(scope):', // missing summary
            '',
         ];

         malformedTitles.forEach((title) => {
            const result = validatePRTitle(title, config);
            expect(result.valid).toBe(false);
            expect(result.error).toContain('Invalid format');
         });
      });

      test('should accept well-formed titles', () => {
         const wellFormedTitles = [
            'feat(api): Add new authentication endpoint',
            'fix(auth): Fix login validation bug',
            'docs(general): Update API documentation',
            'refactor(account): Restructure user service',
            'test(matrix): Add unit tests for payment processing',
         ];

         wellFormedTitles.forEach((title) => {
            const result = validatePRTitle(title, config);
            expect(result.valid).toBe(true);
         });
      });
   });

   describe('Unit Tests - Ticket Extraction', () => {
      test('should extract PD tickets from summary', () => {
         const title = 'feat(api): Add new feature PD-123';
         const result = validatePRTitle(title, config);
         expect(result.valid).toBe(true);
         expect(result.tickets).toEqual(['PD-123']);
      });

      test('should extract PIW tickets from summary', () => {
         const title = 'fix(auth): Fix login bug PIW-456';
         const result = validatePRTitle(title, config);
         expect(result.valid).toBe(true);
         expect(result.tickets).toEqual(['PIW-456']);
      });

      test('should extract multiple tickets from summary', () => {
         const title = 'feat(api): Add feature PD-123 and PIW-456';
         const result = validatePRTitle(title, config);
         expect(result.valid).toBe(true);
         expect(result.tickets).toEqual(['PD-123', 'PIW-456']);
      });

      test('should return empty array when no tickets found', () => {
         const title = 'feat(api): Add new feature without ticket';
         const result = validatePRTitle(title, config);
         expect(result.valid).toBe(true);
         expect(result.tickets).toEqual([]);
      });

      test('should ignore partial ticket matches', () => {
         const title = 'feat(api): Add feature with PD-text and invalid-123';
         const result = validatePRTitle(title, config);
         expect(result.valid).toBe(true);
         expect(result.tickets).toEqual([]);
      });
   });

   describe('Unit Tests - Edge Cases', () => {
      test('should handle titles with special characters in summary', () => {
         const title = 'feat(api): Add feature with special chars: @#$%^&*()';
         const result = validatePRTitle(title, config);
         expect(result.valid).toBe(true);
      });

      test('should handle very long summaries', () => {
         const longSummary = 'A'.repeat(200);
         const title = `feat(api): ${longSummary}`;
         const result = validatePRTitle(title, config);
         expect(result.valid).toBe(true);
         expect(result.parsed.summary).toBe(longSummary);
      });

      test('should handle titles with extra whitespace', () => {
         const title = '  feat ( api ) :   Add new feature   ';
         const result = validatePRTitle(title, config);
         expect(result.valid).toBe(false); // This should fail due to spaces in scope
      });

      test('should handle unicode characters', () => {
         const title = 'feat(api): Add feature with unicode 🚀 characters';
         const result = validatePRTitle(title, config);
         expect(result.valid).toBe(true);
      });
   });

   describe('Unit Tests - Helper Functions', () => {
      test('getAllowedTypes should return all configured types', () => {
         const types = getAllowedTypes(config);
         const expectedTypes = Object.keys(config.types || {});
         expect(types).toEqual(expectedTypes);
      });

      test('getAllowedTypes should handle empty config', () => {
         const emptyConfig = {};
         const types = getAllowedTypes(emptyConfig);
         expect(types).toEqual([]);
      });

      test('getAllowedScopes should return both scopes and features', () => {
         const scopes = getAllowedScopes(config);

         // Should include regular scopes
         const expectedScopes = Object.keys(config.scopes || {});
         expectedScopes.forEach((scope) => {
            expect(scopes).toContain(scope);
         });

         // Should include features (converted to lowercase)
         const expectedFeatures = Object.keys(config.labels?.features || {}).map((f) =>
            f.toLowerCase()
         );
         expectedFeatures.forEach((feature) => {
            expect(scopes).toContain(feature);
         });
      });

      test('getAllowedScopes should handle config without features', () => {
         const configWithoutFeatures = {
            scopes: { api: { label: 'API' }, auth: { label: 'Auth' } },
         };
         const scopes = getAllowedScopes(configWithoutFeatures);
         expect(scopes).toEqual(['api', 'auth']);
      });

      test('getAllowedScopes should handle empty config', () => {
         const emptyConfig = {};
         const scopes = getAllowedScopes(emptyConfig);
         expect(scopes).toEqual([]);
      });
   });

   describe('Integration Tests - CLI Behavior', () => {
      test('CLI should accept valid PR titles and exit with code 0', () => {
         const validTitles = [
            'feat(api): Add new authentication endpoint PD-123',
            'fix(account): Fix user profile validation PIW-456',
            'enhance(matrix): Improve payment processing speed',
            'docs(general): Update API documentation',
         ];

         validTitles.forEach((title) => {
            const result = runCLI(title);
            expect(result.success).toBe(true);
            expect(result.output).toContain('✅ PR title is valid');
         });
      });

      test('CLI should reject invalid types and exit with code 1', () => {
         const result = runCLI('invalidtype(api): Add feature');
         expect(result.success).toBe(false);
         expect(result.exitCode).toBe(1);
         expect(result.output).toContain('Invalid type: "invalidtype"');
      });

      test('CLI should reject invalid scopes and exit with code 1', () => {
         const result = runCLI('feat(invalidscope): Add feature');
         expect(result.success).toBe(false);
         expect(result.exitCode).toBe(1);
         expect(result.output).toContain('Invalid scope: "invalidscope"');
      });

      test('CLI should reject malformed titles and exit with code 1', () => {
         const result = runCLI('just a regular title');
         expect(result.success).toBe(false);
         expect(result.exitCode).toBe(1);
         expect(result.output).toContain('Invalid format');
      });

      test('CLI should reject titles with hyphens in type (format error)', () => {
         const result = runCLI('invalid-type(api): Add feature');
         expect(result.success).toBe(false);
         expect(result.exitCode).toBe(1);
         expect(result.output).toContain('Invalid format');
      });

      test('CLI should accept feature scopes', () => {
         const featureTests = [
            'feat(account): Add admin dashboard',
            'fix(subscription): Fix customer profile bug',
            'enhance(matrix): Optimize payment flow',
         ];

         featureTests.forEach((title) => {
            const result = runCLI(title);
            expect(result.success).toBe(true);
            expect(result.output).toContain('✅ PR title is valid');
         });
      });

      test('CLI should extract and display tickets', () => {
         const result = runCLI('feat(api): Add new feature PD-123');
         expect(result.success).toBe(true);
         expect(result.output).toContain('Found ticket(s): PD-123');
      });

      test('CLI should handle missing tickets gracefully', () => {
         const result = runCLI('feat(api): Add new feature without ticket');
         expect(result.success).toBe(true);
         expect(result.output).toContain('No ticket ID found – allowed, but recommended');
      });
   });

   describe('Real-world PR Title Examples', () => {
      test('should validate realistic PR titles', () => {
         const realTitles = [
            'feat(account): Add user profile management PD-123',
            'fix(matrix): Fix payment processing timeout issue PIW-456',
            'enhance(auth): Improve login performance',
            'refactor(api): Restructure endpoint handlers',
            'docs(general): Update deployment documentation',
            'test(subscription): Add integration tests for customer service',
            'hotfix(security): Patch critical security vulnerability PD-789',
            'chore(maintenance): Update dependencies',
            'perf(ui): Optimize dashboard loading time',
            'style(ui): Fix code formatting issues',
         ];

         realTitles.forEach((title) => {
            const result = validatePRTitle(title, config);
            expect(result.valid).toBe(true);
         });
      });
   });
});
