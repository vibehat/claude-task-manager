const fs = require('fs');
const path = require('path');
const {
  syncLabeler,
  checkSyncStatus,
  readFeaturesConfig,
  generateStaticLabels,
  generateLabelerYAML,
  validateLabelerConfig
} = require('./sync-labeler');

// Mock fs module
jest.mock('fs');

describe('sync-labeler.js', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset console methods
    jest.spyOn(console, 'log').mockImplementation(() => { });
    jest.spyOn(console, 'warn').mockImplementation(() => { });
    jest.spyOn(console, 'error').mockImplementation(() => { });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('readFeaturesConfig', () => {
    it('should read and parse valid JSON configuration', () => {
      const mockConfig = {
        labels: {
          scopes: {
            'API': {
              'changed-files': ['apps/api/**']
            }
          },
          features: {
            'Payment': {
              'changed-files': ['apps/api/src/domains/payment/**']
            }
          }
        }
      };

      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));

      const result = readFeaturesConfig('test.json');

      expect(fs.existsSync).toHaveBeenCalledWith(path.join(__dirname, '..', 'test.json'));
      expect(fs.readFileSync).toHaveBeenCalledWith(path.join(__dirname, '..', 'test.json'), 'utf8');
      expect(result).toEqual(mockConfig);
    });

    it('should throw error when config file does not exist', () => {
      fs.existsSync.mockReturnValue(false);

      expect(() => readFeaturesConfig('missing.json')).toThrow('missing.json not found');
    });

    it('should throw error when config file contains invalid JSON', () => {
      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue('invalid json');

      expect(() => readFeaturesConfig('invalid.json')).toThrow(/Failed to parse invalid.json/);
    });

    it('should use default config path when none provided', () => {
      const mockConfig = { labels: {} };
      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));

      readFeaturesConfig();

      expect(fs.existsSync).toHaveBeenCalledWith(path.join(__dirname, '..', 'release.json'));
    });
  });

  describe('generateStaticLabels', () => {
    it('should generate static labels from nested label configuration', () => {
      const labels = {
        scopes: {
          'API': {
            'changed-files': ['apps/api/**']
          },
          'Gateway': {
            'changed-files': ['apps/gateway/**']
          }
        },
        features: {
          'Payment': {
            'changed-files': ['apps/api/src/domains/payment/**']
          },
          'User': {
            'changed-files': ['apps/api/src/domains/user/**']
          }
        },
        types: {
          'Feature': {
            'head-branch': ['^feat']
          }
        }
      };

      const result = generateStaticLabels(labels);

      expect(result).toEqual({
        'API': {
          'changed-files': ['apps/api/**']
        },
        'Gateway': {
          'changed-files': ['apps/gateway/**']
        },
        'Payment': {
          'changed-files': ['apps/api/src/domains/payment/**']
        },
        'User': {
          'changed-files': ['apps/api/src/domains/user/**']
        },
        'Feature': {
          'head-branch': ['^feat']
        }
      });
    });

    it('should handle empty label configuration', () => {
      const result = generateStaticLabels({});
      expect(result).toEqual({});
    });

    it('should handle configuration with empty categories', () => {
      const labels = {
        scopes: {},
        features: {
          'Payment': {
            'changed-files': ['apps/api/src/domains/payment/**']
          }
        }
      };

      const result = generateStaticLabels(labels);

      expect(result).toEqual({
        'Payment': {
          'changed-files': ['apps/api/src/domains/payment/**']
        }
      });
    });
  });

  describe('generateLabelerYAML', () => {
    it('should generate valid YAML for GitHub Actions labeler v5 format', () => {
      const labelConfig = {
        'API': {
          'changed-files': ['apps/api/**']
        },
        'Feature': {
          'head-branch': ['^feat', '.*feature.*']
        },
        'Migration': {
          'changed-files': ['**/migrations/**'],
          'head-branch': ['.*breaking.*']
        },
        'MergeBack': {
          'head-branch': ['^sync'],
          'base-branch': ['^main$']
        },
        'AnyChange': {
          'changed-files': ['**']
        }
      };

      const result = generateLabelerYAML(labelConfig);

      // Check that it contains the proper v5 format with changed-files using any-glob-to-any-file
      expect(result).toContain('API:');
      expect(result).toContain('- changed-files:');
      expect(result).toContain('- any-glob-to-any-file:');
      expect(result).toContain("- 'apps/api/**'");

      // Check head-branch format
      expect(result).toContain('Feature:');
      expect(result).toContain('- head-branch:');
      expect(result).toContain("- '^feat'");
      expect(result).toContain("- '.*feature.*'");

      // Check mixed conditions
      expect(result).toContain('Migration:');
      expect(result).toContain("- '**/migrations/**'");
      expect(result).toContain("- '.*breaking.*'");

      // Check base-branch format
      expect(result).toContain('MergeBack:');
      expect(result).toContain('- base-branch:');
      expect(result).toContain("- '^main$'");

      // Check section headers
      expect(result).toContain('# 📍 Scope Labels');
      expect(result).toContain('# 🎯 Change Type Labels');
      expect(result).toContain('# 🚨 Risk / Deployment Labels');
      expect(result).toContain('# ⭐ Feature Labels');
      expect(result).toContain('# 🔁 Git Flow Labels');
      expect(result).toContain('# 🧪 Catch-All');
    });

    it('should handle empty label configuration', () => {
      const result = generateLabelerYAML({});

      expect(result).toContain('# 📍 Scope Labels');
      expect(result).toContain('# 🧪 Catch-All');
      expect(result.trim()).not.toBe('');
    });

    it('should properly categorize labels', () => {
      const labelConfig = {
        'API': { 'changed-files': ['apps/api/**'] },
        'Feature': { 'head-branch': ['^feat'] },
        'Migration': { 'changed-files': ['**/migrations/**'] },
        'Payment': { 'changed-files': ['apps/api/src/domains/payment/**'] },
        'MergeBack': { 'head-branch': ['^sync'] },
        'AnyChange': { 'changed-files': ['**'] }
      };

      const result = generateLabelerYAML(labelConfig);

      // Check that labels appear in correct sections
      const apiIndex = result.indexOf('API:');
      const featureIndex = result.indexOf('Feature:');
      const migrationIndex = result.indexOf('Migration:');
      const paymentIndex = result.indexOf('Payment:');
      const mergeBackIndex = result.indexOf('MergeBack:');
      const anyChangeIndex = result.indexOf('AnyChange:');

      const scopeHeaderIndex = result.indexOf('# 📍 Scope Labels');
      const changeTypeHeaderIndex = result.indexOf('# 🎯 Change Type Labels');
      const riskHeaderIndex = result.indexOf('# 🚨 Risk / Deployment Labels');
      const featureHeaderIndex = result.indexOf('# ⭐ Feature Labels');
      const gitFlowHeaderIndex = result.indexOf('# 🔁 Git Flow Labels');
      const catchAllHeaderIndex = result.indexOf('# 🧪 Catch-All');

      expect(scopeHeaderIndex < apiIndex).toBe(true);
      expect(changeTypeHeaderIndex < featureIndex).toBe(true);
      expect(riskHeaderIndex < migrationIndex).toBe(true);
      expect(featureHeaderIndex < paymentIndex).toBe(true);
      expect(gitFlowHeaderIndex < mergeBackIndex).toBe(true);
      expect(catchAllHeaderIndex < anyChangeIndex).toBe(true);
    });
  });

  describe('validateLabelerConfig', () => {
    it('should pass validation for valid configuration', () => {
      const validConfig = {
        'API': {
          'changed-files': ['apps/api/**']
        },
        'Feature': {
          'head-branch': ['^feat']
        },
        'Mixed': {
          'changed-files': ['src/**'],
          'head-branch': ['feature']
        }
      };

      expect(() => validateLabelerConfig(validConfig)).not.toThrow();
      expect(console.log).toHaveBeenCalledWith('✅ Labeler configuration validation passed');
    });

    it('should throw error for labels with no valid configuration', () => {
      const invalidConfig = {
        'ValidLabel': {
          'changed-files': ['apps/api/**']
        },
        'InvalidLabel': {
          'invalid-key': ['some-value']
        },
        'EmptyLabel': {}
      };

      expect(() => validateLabelerConfig(invalidConfig)).toThrow(/Validation errors:/);
    });

    it('should handle empty configuration', () => {
      expect(() => validateLabelerConfig({})).not.toThrow();
    });
  });

  describe('checkSyncStatus', () => {
    it('should return true when labeler.yml does not exist', () => {
      const mockConfig = {
        labels: {
          scopes: {
            'API': { 'changed-files': ['apps/api/**'] }
          }
        }
      };

      fs.existsSync.mockImplementation((filePath) => {
        if (filePath.includes('release.json')) return true;
        if (filePath.includes('labeler.yml')) return false;
        return false;
      });
      fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));

      const result = checkSyncStatus();

      expect(result).toBe(true);
      expect(console.log).toHaveBeenCalledWith('📝 labeler.yml does not exist - sync needed');
    });

    it('should return true when labeler.yml is out of sync', () => {
      const mockConfig = {
        labels: {
          scopes: {
            'API': { 'changed-files': ['apps/api/**'] }
          }
        }
      };

      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockImplementation((filePath) => {
        if (filePath.includes('release.json')) return JSON.stringify(mockConfig);
        if (filePath.includes('labeler.yml')) return 'old content';
        return '';
      });

      const result = checkSyncStatus();

      expect(result).toBe(true);
      expect(console.log).toHaveBeenCalledWith('🔄 labeler.yml is out of sync - sync needed');
    });

    it('should return false when labeler.yml is up to date', () => {
      const mockConfig = {
        labels: {
          scopes: {
            'API': { 'changed-files': ['apps/api/**'] }
          }
        }
      };

      const generatedYaml = generateLabelerYAML(generateStaticLabels(mockConfig.labels));

      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockImplementation((filePath) => {
        if (filePath.includes('release.json')) return JSON.stringify(mockConfig);
        if (filePath.includes('labeler.yml')) return generatedYaml;
        return '';
      });

      const result = checkSyncStatus();

      expect(result).toBe(false);
      expect(console.log).toHaveBeenCalledWith('✅ labeler.yml is up to date');
    });

    it('should return true on error and log error message', () => {
      fs.existsSync.mockImplementation(() => {
        throw new Error('Filesystem error');
      });

      const result = checkSyncStatus();

      expect(result).toBe(true);
      expect(console.error).toHaveBeenCalledWith('❌ Error checking sync status:', 'Filesystem error');
    });
  });

  describe('syncLabeler', () => {
    it('should successfully sync labeler configuration', () => {
      const mockConfig = {
        labels: {
          scopes: {
            'API': { 'changed-files': ['apps/api/**'] }
          },
          features: {
            'Payment': { 'changed-files': ['apps/api/src/domains/payment/**'] }
          }
        }
      };

      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));
      fs.writeFileSync.mockImplementation(() => { });

      expect(() => syncLabeler('test.json')).not.toThrow();

      expect(console.log).toHaveBeenCalledWith('🔍 Reading test.json configuration...');
      expect(console.log).toHaveBeenCalledWith('🏷️  Generating labels from configuration...');
      expect(console.log).toHaveBeenCalledWith('📋 Generated 2 total labels');
      expect(console.log).toHaveBeenCalledWith('✅ Validating labeler configuration...');
      expect(console.log).toHaveBeenCalledWith('📝 Generating YAML content...');
      expect(console.log).toHaveBeenCalledWith('💾 Writing .github/labeler.yml...');
      expect(console.log).toHaveBeenCalledWith('🎉 Labeler sync completed!');

      expect(fs.writeFileSync).toHaveBeenCalledWith(
        path.join(__dirname, '../.github/labeler.yml'),
        expect.stringContaining('API:')
      );
    });

    it('should use default config path when none provided', () => {
      const mockConfig = { labels: { scopes: {} } };

      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));
      fs.writeFileSync.mockImplementation(() => { });

      syncLabeler();

      expect(fs.readFileSync).toHaveBeenCalledWith(
        path.join(__dirname, '..', 'release.json'),
        'utf8'
      );
    });
  });

  describe('CLI interface', () => {
    let originalArgv;

    beforeEach(() => {
      originalArgv = process.argv;
      jest.spyOn(process, 'exit').mockImplementation(() => { });
    });

    afterEach(() => {
      process.argv = originalArgv;
      process.exit.mockRestore();
    });

    it('should handle sync command successfully', () => {
      const mockConfig = { labels: { scopes: { 'API': { 'changed-files': ['apps/api/**'] } } } };
      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));
      fs.writeFileSync.mockImplementation(() => { });

      expect(() => syncLabeler('test.json')).not.toThrow();
      expect(console.log).toHaveBeenCalledWith('🎉 Labeler sync completed!');
    });

    it('should handle check command when sync is needed', () => {
      const mockConfig = { labels: { scopes: { 'API': { 'changed-files': ['apps/api/**'] } } } };
      fs.existsSync.mockReturnValue(false); // labeler.yml doesn't exist
      fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));

      const result = checkSyncStatus('test.json');
      expect(result).toBe(true);
    });

    it('should handle check command when sync is not needed', () => {
      const mockConfig = { labels: { scopes: { 'API': { 'changed-files': ['apps/api/**'] } } } };
      const generatedYaml = generateLabelerYAML(generateStaticLabels(mockConfig.labels));

      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockImplementation((filePath) => {
        if (filePath.includes('test.json')) return JSON.stringify(mockConfig);
        if (filePath.includes('labeler.yml')) return generatedYaml;
        return '';
      });

      const result = checkSyncStatus('test.json');
      expect(result).toBe(false);
    });

    it('should handle errors during sync', () => {
      fs.existsSync.mockReturnValue(false); // Config file doesn't exist

      expect(() => syncLabeler('missing.json')).toThrow('missing.json not found');
    });

    it('should handle errors during check', () => {
      fs.existsSync.mockImplementation(() => {
        throw new Error('Permission denied');
      });

      const result = checkSyncStatus('test.json');
      expect(result).toBe(true);
      expect(console.error).toHaveBeenCalledWith('❌ Error checking sync status:', 'Permission denied');
    });
  });

  describe('Edge cases and error handling', () => {
    it('should handle malformed label configuration gracefully', () => {
      const malformedConfig = {
        labels: {
          scopes: {
            'API': null // Invalid configuration
          }
        }
      };

      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue(JSON.stringify(malformedConfig));

      expect(() => generateStaticLabels(malformedConfig.labels)).not.toThrow();
    });

    it('should handle file write errors', () => {
      const mockConfig = { labels: { scopes: { 'API': { 'changed-files': ['apps/api/**'] } } } };

      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));
      fs.writeFileSync.mockImplementation(() => {
        throw new Error('Permission denied');
      });

      expect(() => syncLabeler()).toThrow('Permission denied');
    });

    it('should handle complex label configurations with special characters', () => {
      const complexConfig = {
        'Complex-Label_123': {
          'changed-files': ['**/*.{js,ts}', '!node_modules/**']
        },
        'Unicode-🏷️': {
          'head-branch': ['^feat/.*', '^feature-.*']
        }
      };

      const result = generateLabelerYAML(complexConfig);

      expect(result).toContain('Complex-Label_123:');
      expect(result).toContain('Unicode-🏷️:');
      expect(result).toContain("- '**/*.{js,ts}'");
      expect(result).toContain("- '!node_modules/**'");
    });
  });

  describe('YAML format validation', () => {
    it('should generate YAML compatible with GitHub Actions labeler v5', () => {
      const labelConfig = {
        'Documentation': {
          'changed-files': ['docs/**', '**/*.md']
        }
      };

      const result = generateLabelerYAML(labelConfig);

      // Should use the new v5 format
      expect(result).toContain('Documentation:');
      expect(result).toContain('- changed-files:');
      expect(result).toContain('- any-glob-to-any-file:');
      expect(result).toContain("- 'docs/**'");
      expect(result).toContain("- '**/*.md'");

      // Should not contain the old v4 format
      expect(result).not.toContain('Documentation:\n  changed-files:');
    });

    it('should properly quote YAML values to avoid syntax errors', () => {
      const labelConfig = {
        'Test': {
          'changed-files': ['**', '*'],
          'head-branch': ['^feat.*', '.*feature.*']
        }
      };

      const result = generateLabelerYAML(labelConfig);

      // All glob patterns and regex should be quoted
      expect(result).toContain("- '**'");
      expect(result).toContain("- '*'");
      expect(result).toContain("- '^feat.*'");
      expect(result).toContain("- '.*feature.*'");
    });
  });
});
