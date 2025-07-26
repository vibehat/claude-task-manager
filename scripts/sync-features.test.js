// Mock fs module before importing
jest.mock('fs', () => ({
   existsSync: jest.fn(),
   readdirSync: jest.fn(),
   readFileSync: jest.fn(),
   writeFileSync: jest.fn(),
   promises: {
      readFile: jest.fn(),
      writeFile: jest.fn(),
   },
}));

// Mock path module
jest.mock('path', () => ({
   join: (...args) => args.filter(Boolean).join('/'),
   dirname: jest.fn(),
   basename: jest.fn(),
   extname: jest.fn(),
}));

const fs = require('fs');
const path = require('path');
const {
   syncFeatures,
   checkSyncStatus,
   kebabToPascalCase,
   scanDomainsDirectories,
   mergeFeatures,
   getExistingFeaturesConfig,
   DEFAULT_FEATURES_ROOTS,
} = require('./sync-features');

describe('sync-features.js', () => {
   beforeEach(() => {
      jest.clearAllMocks();
      // Reset console methods
      jest.spyOn(console, 'log').mockImplementation(() => {});
      jest.spyOn(console, 'warn').mockImplementation(() => {});
      jest.spyOn(console, 'error').mockImplementation(() => {});
   });

   afterEach(() => {
      jest.restoreAllMocks();
   });

   describe('kebabToPascalCase', () => {
      it('should convert single word kebab case to PascalCase', () => {
         expect(kebabToPascalCase('auth')).toBe('Auth');
      });

      it('should convert multi-word kebab case to PascalCase', () => {
         expect(kebabToPascalCase('user-management')).toBe('UserManagement');
      });

      it('should handle multiple hyphens', () => {
         expect(kebabToPascalCase('payment-gateway-service')).toBe('PaymentGatewayService');
      });

      it('should handle single character words', () => {
         expect(kebabToPascalCase('a-b-c')).toBe('ABC');
      });

      it('should handle already capitalized words', () => {
         expect(kebabToPascalCase('API-service')).toBe('APIService');
      });
   });

   describe('getExistingFeaturesConfig', () => {
      it('should return default config when file does not exist', () => {
         fs.existsSync.mockReturnValue(false);

         const result = getExistingFeaturesConfig('release.json');

         expect(result).toEqual({
            fullConfig: {},
            featuresRoots: DEFAULT_FEATURES_ROOTS,
            features: {},
            labels: {},
         });
      });

      it('should parse and return existing config when file exists', () => {
         const mockConfig = {
            featuresRoots: ['custom/path'],
            authorBaseURL: 'https://github.com/',
            refs: [{ name: 'JIRA', prefix: 'ABC-' }],
            labels: {
               features: {
                  auth: { 'changed-files': ['apps/api/src/domains/auth/**'] },
               },
            },
         };

         fs.existsSync.mockReturnValue(true);
         fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));

         const result = getExistingFeaturesConfig('release.json');

         expect(result).toEqual({
            fullConfig: mockConfig,
            featuresRoots: ['custom/path'],
            features: {
               auth: { 'changed-files': ['apps/api/src/domains/auth/**'] },
            },
            labels: {
               features: {
                  auth: { 'changed-files': ['apps/api/src/domains/auth/**'] },
               },
            },
         });
      });

      it('should use default featuresRoots when not provided in config', () => {
         const mockConfig = {
            authorBaseURL: 'https://github.com/',
            labels: {
               features: {
                  auth: { 'changed-files': ['apps/api/src/domains/auth/**'] },
               },
            },
         };

         fs.existsSync.mockReturnValue(true);
         fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));

         const result = getExistingFeaturesConfig('release.json');

         expect(result.featuresRoots).toEqual(DEFAULT_FEATURES_ROOTS);
         expect(result.fullConfig).toEqual(mockConfig);
      });

      it('should handle invalid JSON and return defaults', () => {
         fs.existsSync.mockReturnValue(true);
         fs.readFileSync.mockReturnValue('invalid json');

         const result = getExistingFeaturesConfig('release.json');

         expect(result).toEqual({
            fullConfig: {},
            featuresRoots: DEFAULT_FEATURES_ROOTS,
            features: {},
            labels: {},
         });
         expect(console.warn).toHaveBeenCalledWith(
            '⚠️  Could not parse existing release.json, using defaults'
         );
      });
   });

   describe('scanDomainsDirectories', () => {
      it('should scan and return domain directories', () => {
         const mockDirents = [
            { name: 'auth', isDirectory: () => true },
            { name: 'payment', isDirectory: () => true },
            { name: 'file.txt', isDirectory: () => false },
         ];

         fs.existsSync.mockReturnValue(true);
         fs.readdirSync.mockReturnValue(mockDirents);

         const result = scanDomainsDirectories(['apps/api/src/domains']);

         expect(result).toEqual(['auth', 'payment']);
         expect(fs.readdirSync).toHaveBeenCalledTimes(1);
      });

      it('should handle multiple feature roots', () => {
         const mockDirents1 = [{ name: 'auth', isDirectory: () => true }];
         const mockDirents2 = [{ name: 'payment', isDirectory: () => true }];

         fs.existsSync.mockReturnValue(true);
         fs.readdirSync.mockReturnValueOnce(mockDirents1).mockReturnValueOnce(mockDirents2);

         const result = scanDomainsDirectories(['path1', 'path2']);

         expect(result).toEqual(['auth', 'payment']);
      });

      it('should warn about duplicate domains', () => {
         const mockDirents = [{ name: 'auth', isDirectory: () => true }];

         fs.existsSync.mockReturnValue(true);
         fs.readdirSync.mockReturnValue(mockDirents);

         scanDomainsDirectories(['path1', 'path2']);

         expect(console.warn).toHaveBeenCalledWith('⚠️  Duplicate domain found: auth in path2');
      });

      it('should warn about non-existent directories', () => {
         fs.existsSync.mockReturnValue(false);

         const result = scanDomainsDirectories(['non-existent-path']);

         expect(result).toEqual([]);
         expect(console.warn).toHaveBeenCalledWith(
            expect.stringContaining('⚠️  Features root directory not found:')
         );
      });

      it('should return sorted results', () => {
         const mockDirents = [
            { name: 'zebra', isDirectory: () => true },
            { name: 'alpha', isDirectory: () => true },
            { name: 'beta', isDirectory: () => true },
         ];

         fs.existsSync.mockReturnValue(true);
         fs.readdirSync.mockReturnValue(mockDirents);

         const result = scanDomainsDirectories(['apps/api/src/domains']);

         expect(result).toEqual(['alpha', 'beta', 'zebra']);
      });
   });

   describe('mergeFeatures', () => {
      it('should add new features and preserve existing ones', () => {
         const existingFeatures = {
            auth: { 'changed-files': ['apps/api/src/domains/auth/**'] },
         };
         const discoveredDomains = ['auth', 'payment'];
         const featuresRoots = ['apps/api/src/domains'];
         const existingLabels = { features: existingFeatures };

         const result = mergeFeatures(
            existingFeatures,
            discoveredDomains,
            featuresRoots,
            existingLabels
         );

         expect(result.labels.features).toEqual({
            auth: { 'changed-files': ['apps/api/src/domains/auth/**'] },
            payment: { 'changed-files': ['apps/api/src/domains/payment/**'] },
         });
         expect(result.featuresRoots).toEqual(featuresRoots);
      });

      it('should handle multiple feature roots in changed-files', () => {
         const existingFeatures = {};
         const discoveredDomains = ['auth'];
         const featuresRoots = ['apps/api/src/domains', 'apps/web/src/features'];
         const existingLabels = {};

         const result = mergeFeatures(
            existingFeatures,
            discoveredDomains,
            featuresRoots,
            existingLabels
         );

         expect(result.labels.features.auth['changed-files']).toEqual([
            'apps/api/src/domains/auth/**',
            'apps/web/src/features/auth/**',
         ]);
      });

      it('should preserve existing labels structure', () => {
         const existingFeatures = {};
         const discoveredDomains = ['auth'];
         const featuresRoots = ['apps/api/src/domains'];
         const existingLabels = {
            features: {},
            otherProperty: 'should be preserved',
         };

         const result = mergeFeatures(
            existingFeatures,
            discoveredDomains,
            featuresRoots,
            existingLabels
         );

         expect(result.labels.otherProperty).toBe('should be preserved');
         expect(result.labels.features).toBeDefined();
      });

      it('should log skipped and added features', () => {
         const existingFeatures = {
            auth: { 'changed-files': ['apps/api/src/domains/auth/**'] },
         };
         const discoveredDomains = ['auth', 'payment'];
         const featuresRoots = ['apps/api/src/domains'];
         const existingLabels = { features: existingFeatures };

         mergeFeatures(existingFeatures, discoveredDomains, featuresRoots, existingLabels);

         expect(console.log).toHaveBeenCalledWith('⏭️  Skipping existing feature: auth (auth)');
         expect(console.log).toHaveBeenCalledWith('➕ Adding new feature: payment (payment)');
         expect(console.log).toHaveBeenCalledWith(
            '📊 Summary: 1 new features added, 1 existing features preserved'
         );
      });

      it('should preserve other properties like refs and scopes when merging features', () => {
         const existingFeatures = {
            auth: { 'changed-files': ['apps/api/src/domains/auth/**'] },
         };
         const discoveredDomains = ['auth', 'payment'];
         const featuresRoots = ['apps/api/src/domains'];
         const existingLabels = {
            features: existingFeatures,
            refs: [
               {
                  name: 'JIRA',
                  prefix: 'PAY-',
                  pattern: 'PAY-\\d+',
                  url: 'https://mycompany.atlassian.net/browse/{{ticket}}',
               },
            ],
            scopes: {
               api: { label: 'API Backend' },
               web: { label: 'Web Frontend' },
               mobile: { label: 'Mobile App' },
            },
            types: {
               feat: { label: 'Features', icon: '✨' },
               fix: { label: 'Bug Fixes', icon: '🐛' },
            },
         };

         const result = mergeFeatures(
            existingFeatures,
            discoveredDomains,
            featuresRoots,
            existingLabels
         );

         // Ensure refs are preserved
         expect(result.labels.refs).toEqual([
            {
               name: 'JIRA',
               prefix: 'PAY-',
               pattern: 'PAY-\\d+',
               url: 'https://mycompany.atlassian.net/browse/{{ticket}}',
            },
         ]);

         // Ensure scopes are preserved
         expect(result.labels.scopes).toEqual({
            api: { label: 'API Backend' },
            web: { label: 'Web Frontend' },
            mobile: { label: 'Mobile App' },
         });

         // Ensure types are preserved
         expect(result.labels.types).toEqual({
            feat: { label: 'Features', icon: '✨' },
            fix: { label: 'Bug Fixes', icon: '🐛' },
         });

         // Ensure features are still correctly merged
         expect(result.labels.features).toEqual({
            auth: { 'changed-files': ['apps/api/src/domains/auth/**'] },
            payment: { 'changed-files': ['apps/api/src/domains/payment/**'] },
         });

         // Ensure featuresRoots is preserved
         expect(result.featuresRoots).toEqual(featuresRoots);
      });
   });

   describe('syncFeatures', () => {
      beforeEach(() => {
         // Mock the file system operations
         fs.existsSync.mockReturnValue(true);
         fs.readFileSync.mockReturnValue(
            JSON.stringify({
               featuresRoots: ['apps/api/src/domains'],
               authorBaseURL: 'https://github.com/',
               refs: [{ name: 'JIRA', prefix: 'ABC-' }],
               labels: { features: {} },
            })
         );
         fs.readdirSync.mockReturnValue([{ name: 'auth', isDirectory: () => true }]);
         fs.writeFileSync.mockImplementation(() => {});
      });

      it('should complete the sync process successfully', () => {
         expect(() => syncFeatures('release.json')).not.toThrow();
         expect(fs.writeFileSync).toHaveBeenCalled();
         expect(console.log).toHaveBeenCalledWith('🎉 Feature sync completed!');
      });

      it('should use default config path when none provided', () => {
         expect(() => syncFeatures()).not.toThrow();
         // Should still work with default 'release.json'
      });

      it('should preserve original config properties when syncing', () => {
         const originalConfig = {
            featuresRoots: ['apps/api/src/domains'],
            authorBaseURL: 'https://github.com/',
            repoBaseURL: 'https://github.com/repo/',
            refs: [{ name: 'JIRA', prefix: 'ABC-' }],
            types: { feat: { label: 'Feature' } },
            scopes: { api: { label: 'API' } },
            labels: { features: {} },
         };

         fs.readFileSync.mockReturnValue(JSON.stringify(originalConfig));

         syncFeatures('release.json');

         // Check that writeFileSync was called with preserved properties
         expect(fs.writeFileSync).toHaveBeenCalled();
         const writtenData = JSON.parse(fs.writeFileSync.mock.calls[0][1]);

         expect(writtenData.authorBaseURL).toBe('https://github.com/');
         expect(writtenData.repoBaseURL).toBe('https://github.com/repo/');
         expect(writtenData.refs).toEqual([{ name: 'JIRA', prefix: 'ABC-' }]);
         expect(writtenData.types).toEqual({ feat: { label: 'Feature' } });
         expect(writtenData.scopes).toEqual({ api: { label: 'API' } });
      });
   });

   describe('checkSyncStatus', () => {
      it('should return false when configuration is up to date', () => {
         const mockConfig = {
            featuresRoots: ['apps/api/src/domains'],
            labels: {
               features: {
                  auth: { 'changed-files': ['apps/api/src/domains/auth/**'] },
               },
            },
         };

         fs.existsSync.mockReturnValue(true);
         fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));
         fs.readdirSync.mockReturnValue([{ name: 'auth', isDirectory: () => true }]);

         const result = checkSyncStatus('release.json');

         expect(result).toBe(false);
         expect(console.log).toHaveBeenCalledWith('✅ Configuration is up to date');
      });

      it('should return true when configuration is out of sync', () => {
         const mockConfig = {
            featuresRoots: ['apps/api/src/domains'],
            labels: { features: {} },
         };

         fs.existsSync.mockReturnValue(true);
         fs.readFileSync.mockReturnValue(JSON.stringify(mockConfig));
         fs.readdirSync.mockReturnValue([{ name: 'auth', isDirectory: () => true }]);

         const result = checkSyncStatus('release.json');

         expect(result).toBe(true);
         expect(console.log).toHaveBeenCalledWith('🔄 Configuration is out of sync - sync needed');
      });

      it('should return true and log error when an exception occurs', () => {
         fs.existsSync.mockImplementation(() => {
            throw new Error('File system error');
         });

         const result = checkSyncStatus('release.json');

         expect(result).toBe(true);
         expect(console.error).toHaveBeenCalledWith(
            '❌ Error checking sync status:',
            'File system error'
         );
      });

      it('should use default config path when none provided', () => {
         fs.existsSync.mockReturnValue(false);
         fs.readdirSync.mockReturnValue([]); // No domains discovered

         const result = checkSyncStatus();

         expect(result).toBe(true); // Default config structure needs to be created
      });
   });

   describe('DEFAULT_FEATURES_ROOTS', () => {
      it('should export the default features roots constant', () => {
         expect(DEFAULT_FEATURES_ROOTS).toEqual(['apps/api/src/domains']);
      });
   });

   describe('integration scenarios', () => {
      it('should handle empty domains directory', () => {
         fs.existsSync.mockReturnValue(true);
         fs.readdirSync.mockReturnValue([]);

         const result = scanDomainsDirectories(['apps/api/src/domains']);

         expect(result).toEqual([]);
      });

      it('should handle domains with complex names', () => {
         const mockDirents = [
            { name: 'user-account-management', isDirectory: () => true },
            { name: 'api-gateway-service', isDirectory: () => true },
         ];

         fs.existsSync.mockReturnValue(true);
         fs.readdirSync.mockReturnValue(mockDirents);

         const domains = scanDomainsDirectories(['apps/api/src/domains']);
         const existingFeatures = {};
         const featuresRoots = ['apps/api/src/domains'];
         const existingLabels = {};

         const result = mergeFeatures(existingFeatures, domains, featuresRoots, existingLabels);

         expect(result.labels.features).toHaveProperty('user-account-management');
         expect(result.labels.features).toHaveProperty('api-gateway-service');
      });
   });
});
