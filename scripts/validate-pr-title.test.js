const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Import the functions we want to test
const configPath = path.resolve('release.json');
const config = JSON.parse(fs.readFileSync(configPath));

// Copy the functions from validate-pr-title.js for testing
function getAllowedTypes(config) {
  return Object.keys(config.types || {});
}

function getAllowedScopes(config) {
  // Combine both scopes and features for validation
  const scopes = Object.keys(config.scopes || {});
  const features = Object.keys(config.labels?.features || {});
  return [...scopes, ...features.map(f => f.toLowerCase())];
}

function extractTickets(summary, refs) {
  const ticketPatterns = refs.map(ref => `${ref.prefix}\\d+`);
  const ticketRegex = new RegExp(`\\b(${ticketPatterns.join('|')})\\b`, 'gi');
  return [...summary.matchAll(ticketRegex)].map(match => match[1]);
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
      error: `Invalid type: "${type}". Allowed types: ${allowedTypes.join(', ')}`
    };
  }

  if (!allowedScopes.includes(scope)) {
    return {
      valid: false,
      error: `Invalid scope: "${scope}". Allowed scopes: ${allowedScopes.join(', ')}`
    };
  }

  const tickets = extractTickets(summary, config.refs || []);

  return {
    valid: true,
    parsed,
    tickets
  };
}

// Helper function to run CLI tests
function runCLI(title) {
  try {
    const result = execSync(`node scripts/validate-pr-title.js "${title}"`, {
      encoding: 'utf8',
      timeout: 5000,
      stdio: 'pipe'
    });
    return { success: true, output: result };
  } catch (error) {
    // Combine stdout and stderr for complete output
    const output = [error.stdout, error.stderr].filter(Boolean).join('\n');
    return { success: false, output: output || error.message, exitCode: error.status };
  }
}

// Test Suite
describe('PR Title Validation', () => {

  describe('Unit Tests - Type Validation', () => {
    const validTypes = ['feat', 'bug', 'fix', 'hotfix', 'enhance', 'docs', 'refactor', 'style', 'test', 'perf', 'build', 'chore', 'revert', 'other'];

    test('should accept all valid types', () => {
      validTypes.forEach(type => {
        const title = `${type}(api): Add new feature`;
        const result = validatePRTitle(title, config);
        expect(result.valid).toBe(true);
        expect(result.parsed.type).toBe(type);
      });
    });

    test('should reject invalid types', () => {
      const invalidTypes = ['invalid', 'feature', 'bugfix', 'improvement'];

      invalidTypes.forEach(type => {
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
    const validScopes = ['api', 'auth', 'ci', 'core', 'database', 'docs', 'general', 'graphql', 'integration', 'maintenance', 'release', 'security', 'styles', 'ui', 'ux'];

    test('should accept all valid scopes', () => {
      validScopes.forEach(scope => {
        const title = `feat(${scope}): Add new feature`;
        const result = validatePRTitle(title, config);
        expect(result.valid).toBe(true);
        expect(result.parsed.scope).toBe(scope);
      });
    });

    test('should reject invalid scopes', () => {
      const invalidScopes = ['invalid', 'backend', 'frontend', 'server'];

      invalidScopes.forEach(scope => {
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
    const validFeatures = ['admin', 'alert', 'commercialmatrix', 'customer', 'dashboards', 'datasync', 'emailwa', 'finance', 'maintenance', 'manager', 'meetingnotes', 'payment', 'piqauditreports', 'psp', 'qareports', 'user'];

    test('should accept features as valid scopes', () => {
      validFeatures.forEach(feature => {
        const title = `feat(${feature}): Add new feature`;
        const result = validatePRTitle(title, config);
        expect(result.valid).toBe(true);
        expect(result.parsed.scope).toBe(feature);
      });
    });

    test('should handle mixed case feature names', () => {
      const mixedCaseFeatures = [
        { input: 'Admin', expected: 'admin' },
        { input: 'CommercialMatrix', expected: 'commercialmatrix' },
        { input: 'DataSync', expected: 'datasync' },
        { input: 'EmailWa', expected: 'emailwa' },
        { input: 'MeetingNotes', expected: 'meetingnotes' },
        { input: 'PiqAuditReports', expected: 'piqauditreports' },
        { input: 'QaReports', expected: 'qareports' }
      ];

      mixedCaseFeatures.forEach(({ input, expected }) => {
        const title = `feat(${input}): Add new feature`;
        const result = validatePRTitle(title, config);
        expect(result.valid).toBe(true);
        expect(result.parsed.scope).toBe(expected);
      });
    });

    test('should reject invalid feature names', () => {
      const invalidFeatures = ['invalidfeature', 'nonexistent', 'wrongname'];

      invalidFeatures.forEach(feature => {
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
        ''
      ];

      malformedTitles.forEach(title => {
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
        'refactor(user): Restructure user service',
        'test(payment): Add unit tests for payment processing'
      ];

      wellFormedTitles.forEach(title => {
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
      expect(types).toEqual(['feat', 'bug', 'fix', 'hotfix', 'enhance', 'docs', 'refactor', 'style', 'test', 'perf', 'build', 'chore', 'revert', 'other']);
    });

    test('getAllowedTypes should handle empty config', () => {
      const emptyConfig = {};
      const types = getAllowedTypes(emptyConfig);
      expect(types).toEqual([]);
    });

    test('getAllowedScopes should return both scopes and features', () => {
      const scopes = getAllowedScopes(config);

      // Should include regular scopes
      expect(scopes).toContain('api');
      expect(scopes).toContain('auth');
      expect(scopes).toContain('general');

      // Should include features (converted to lowercase)
      expect(scopes).toContain('admin');
      expect(scopes).toContain('user');
      expect(scopes).toContain('payment');
    });

    test('getAllowedScopes should handle config without features', () => {
      const configWithoutFeatures = {
        scopes: { api: { label: 'API' }, auth: { label: 'Auth' } }
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
        'fix(user): Fix user profile validation PIW-456',
        'enhance(payment): Improve payment processing speed',
        'docs(general): Update API documentation'
      ];

      validTitles.forEach(title => {
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
        'feat(admin): Add admin dashboard',
        'fix(customer): Fix customer profile bug',
        'enhance(payment): Optimize payment flow'
      ];

      featureTests.forEach(title => {
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
        'feat(user): Add user profile management PD-123',
        'fix(payment): Fix payment processing timeout issue PIW-456',
        'enhance(auth): Improve login performance',
        'refactor(api): Restructure endpoint handlers',
        'docs(general): Update deployment documentation',
        'test(customer): Add integration tests for customer service',
        'hotfix(security): Patch critical security vulnerability PD-789',
        'chore(maintenance): Update dependencies',
        'perf(dashboards): Optimize dashboard loading time',
        'style(ui): Fix code formatting issues'
      ];

      realTitles.forEach(title => {
        const result = validatePRTitle(title, config);
        expect(result.valid).toBe(true);
      });
    });
  });
});
