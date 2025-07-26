#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Default features roots configuration
 */
const DEFAULT_FEATURES_ROOTS = ['apps/api/src/domains'];

/**
 * Parse command line arguments
 * @returns {object} - Parsed arguments
 */
function parseArguments() {
   const args = process.argv.slice(2);
   const parsed = {
      config: 'release.json', // Default to release.json
      command: null,
   };

   for (let i = 0; i < args.length; i++) {
      const arg = args[i];

      if (arg === '--config' && i + 1 < args.length) {
         parsed.config = args[i + 1];
         i++; // Skip next argument as it's the config value
      } else if (arg.startsWith('--config=')) {
         parsed.config = arg.split('=')[1];
      } else if (!arg.startsWith('--')) {
         parsed.command = arg;
      }
   }

   return parsed;
}

/**
 * Converts a kebab-case folder name to PascalCase
 * @param {string} kebabCase - The kebab-case string
 * @returns {string} - The PascalCase string
 */
function kebabToPascalCase(kebabCase) {
   return kebabCase
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
}

/**
 * Reads existing configuration file
 * @param {string} configPath - Path to configuration file
 * @returns {object} - Existing features configuration or default structure
 */
function getExistingFeaturesConfig(configPath) {
   const fullConfigPath = path.join(__dirname, '..', configPath);

   if (fs.existsSync(fullConfigPath)) {
      try {
         const existingData = JSON.parse(fs.readFileSync(fullConfigPath, 'utf8'));
         return {
            fullConfig: existingData,
            featuresRoots: existingData.featuresRoots || DEFAULT_FEATURES_ROOTS,
            features: existingData.labels?.features || {},
            labels: existingData.labels || {},
         };
      } catch (error) {
         console.warn(`⚠️  Could not parse existing ${configPath}, using defaults`);
      }
   }

   return {
      fullConfig: {},
      featuresRoots: DEFAULT_FEATURES_ROOTS,
      features: {},
      labels: {},
   };
}

/**
 * Scans the features root directories and returns an array of domain folder names
 * @param {string[]} featuresRoots - Array of root paths to scan
 * @returns {string[]} - Array of domain folder names
 */
function scanDomainsDirectories(featuresRoots) {
   const allDomains = new Set();

   featuresRoots.forEach((rootPath) => {
      const fullPath = path.join(__dirname, '..', rootPath);

      if (!fs.existsSync(fullPath)) {
         console.warn(`⚠️  Features root directory not found: ${fullPath}`);
         return;
      }

      console.log(`📂 Scanning: ${rootPath}`);
      const items = fs.readdirSync(fullPath, { withFileTypes: true });
      const domains = items
         .filter((item) => item.isDirectory())
         .map((item) => ({ name: item.name, rootPath }));

      domains.forEach((domain) => {
         if (allDomains.has(domain.name)) {
            console.warn(`⚠️  Duplicate domain found: ${domain.name} in ${domain.rootPath}`);
         }
         allDomains.add(domain.name);
      });
   });

   return Array.from(allDomains).sort();
}

/**
 * Merges existing features with newly discovered domains
 * @param {object} existingFeatures - Existing features configuration
 * @param {string[]} discoveredDomains - Array of discovered domain folder names
 * @param {string[]} featuresRoots - Array of features root paths
 * @param {object} existingLabels - Existing labels configuration
 * @returns {object} - Merged features configuration
 */
function mergeFeatures(existingFeatures, discoveredDomains, featuresRoots, existingLabels) {
   const mergedFeatures = { ...existingFeatures };
   let addedCount = 0;
   let skippedCount = 0;

   discoveredDomains.forEach((domain) => {
      const labelName = domain; // Use raw folder name instead of kebabToPascalCase(domain)

      if (mergedFeatures[labelName]) {
         console.log(`⏭️  Skipping existing feature: ${domain} (${labelName})`);
         skippedCount++;
      } else {
         console.log(`➕ Adding new feature: ${domain} (${labelName})`);
         const changedFiles = featuresRoots.map((rootPath) => `${rootPath}/${domain}/**`);

         mergedFeatures[labelName] = {
            'changed-files': changedFiles,
         };
         addedCount++;
      }
   });

   console.log(
      `📊 Summary: ${addedCount} new features added, ${skippedCount} existing features preserved`
   );

   // Merge the updated features back into the labels structure
   const updatedLabels = { ...existingLabels };
   updatedLabels.features = mergedFeatures;

   return {
      featuresRoots,
      labels: updatedLabels,
   };
}

/**
 * Writes the features object to configuration file
 * @param {object} featuresData - The features data to write
 * @param {string} configPath - Path to configuration file
 */
function writeFeaturesFile(featuresData, configPath) {
   const fullConfigPath = path.join(__dirname, '..', configPath);
   const jsonString = JSON.stringify(featuresData, null, 2);

   fs.writeFileSync(fullConfigPath, jsonString + '\n');
   console.log(`✅ ${configPath} has been updated successfully!`);
}

/**
 * Main function to sync features
 * @param {string} configPath - Path to configuration file
 */
function syncFeatures(configPath = 'release.json') {
   console.log(`🔍 Reading existing features configuration from ${configPath}...`);
   const existingConfig = getExistingFeaturesConfig(configPath);
   console.log('📍 Features roots:', existingConfig.featuresRoots);
   console.log('📋 Existing features:', Object.keys(existingConfig.features).length);

   console.log('🔍 Scanning features root directories...');
   const discoveredDomains = scanDomainsDirectories(existingConfig.featuresRoots);
   console.log(`📁 Found ${discoveredDomains.length} domain folders:`, discoveredDomains);

   console.log('🔄 Merging features configuration...');
   const mergedData = mergeFeatures(
      existingConfig.features,
      discoveredDomains,
      existingConfig.featuresRoots,
      existingConfig.labels
   );

   // Preserve the full original configuration and only update specific parts
   const finalConfig = {
      ...existingConfig.fullConfig,
      featuresRoots: mergedData.featuresRoots,
      labels: mergedData.labels,
   };

   console.log(`💾 Writing ${configPath}...`);
   writeFeaturesFile(finalConfig, configPath);

   console.log('🎉 Feature sync completed!');
}

/**
 * Check if sync is needed (diff command)
 * @param {string} configPath - Path to configuration file
 * @returns {boolean} - True if sync is needed
 */
function checkSyncStatus(configPath = 'release.json') {
   try {
      console.log(`🔍 Checking sync status for ${configPath}...`);
      const existingConfig = getExistingFeaturesConfig(configPath);
      const discoveredDomains = scanDomainsDirectories(existingConfig.featuresRoots);
      const mergedData = mergeFeatures(
         existingConfig.features,
         discoveredDomains,
         existingConfig.featuresRoots,
         existingConfig.labels
      );

      // Compare current config with what would be generated
      const currentConfig = JSON.stringify(existingConfig.labels, null, 2);
      const newConfig = JSON.stringify(mergedData.labels, null, 2);

      if (currentConfig !== newConfig) {
         console.log('🔄 Configuration is out of sync - sync needed');
         return true;
      }

      console.log('✅ Configuration is up to date');
      return false;
   } catch (error) {
      console.error('❌ Error checking sync status:', error.message);
      return true;
   }
}

// Command line interface
if (require.main === module) {
   const args = parseArguments();

   if (args.command === 'diff' || args.command === 'check') {
      const needsSync = checkSyncStatus(args.config);
      process.exit(needsSync ? 1 : 0);
   } else if (args.command === 'sync' || !args.command) {
      try {
         syncFeatures(args.config);
      } catch (error) {
         console.error('❌ Sync failed:', error.message);
         process.exit(1);
      }
   } else {
      console.log('Usage: node sync-features.js [--config=file.json] [diff|check|sync]');
      process.exit(1);
   }
}

module.exports = {
   syncFeatures,
   checkSyncStatus,
   kebabToPascalCase,
   scanDomainsDirectories,
   mergeFeatures,
   getExistingFeaturesConfig,
   DEFAULT_FEATURES_ROOTS,
};
