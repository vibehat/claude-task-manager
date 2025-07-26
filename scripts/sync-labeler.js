#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

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
 * Simple YAML generator for labeler configuration
 * We'll use a basic implementation to avoid dependencies
 */
class SimpleYAML {
   static stringify(obj) {
      let yaml = '';

      for (const [key, value] of Object.entries(obj)) {
         yaml += `${key}:\n`;

         if (value['changed-files']) {
            yaml += `  changed-files:\n`;
            for (const file of value['changed-files']) {
               yaml += `    - '${file}'\n`;
            }
         }

         if (value['head-branch']) {
            yaml += `  head-branch:\n`;
            for (const branch of value['head-branch']) {
               yaml += `    - '${branch}'\n`;
            }
         }

         if (value['base-branch']) {
            yaml += `  base-branch:\n`;
            for (const branch of value['base-branch']) {
               yaml += `    - '${branch}'\n`;
            }
         }
      }

      return yaml;
   }
}

/**
 * Reads and validates configuration file
 * @param {string} configPath - Path to configuration file
 * @returns {object} - Features configuration object
 */
function readFeaturesConfig(configPath = 'release.json') {
   const fullConfigPath = path.join(__dirname, '..', configPath);

   if (!fs.existsSync(fullConfigPath)) {
      throw new Error(`${configPath} not found`);
   }

   try {
      const data = JSON.parse(fs.readFileSync(fullConfigPath, 'utf8'));
      return data;
   } catch (error) {
      throw new Error(`Failed to parse ${configPath}: ${error.message}`);
   }
}

/**
 * Generates static labels from labels configuration
 * @param {object} labels - Labels object from release.json
 * @returns {object} - Label configuration for static labels
 */
function generateStaticLabels(labels) {
   const staticLabels = {};

   for (const category of Object.values(labels)) {
      for (const [labelName, labelConfig] of Object.entries(category)) {
         staticLabels[labelName] = labelConfig;
      }
   }

   return staticLabels;
}

/**
 * Generates YAML content with proper formatting and comments for GitHub Actions labeler v5
 * @param {object} labelConfig - Complete label configuration
 * @returns {string} - Formatted YAML content
 */
function generateLabelerYAML(labelConfig) {
   let yaml = `# =====================
# 📍 Scope Labels
# =====================

`;

   // Scope labels
   const scopeLabels = [
      'API',
      'Gateway',
      'Packages',
      'Infrastructure',
      'Config',
      'Docs',
      'Tests',
      'Dependencies',
   ];
   for (const label of scopeLabels) {
      if (labelConfig[label]) {
         yaml += `${label}:\n`;
         const config = labelConfig[label];

         if (config['changed-files']) {
            yaml += `- changed-files:\n`;
            yaml += `  - any-glob-to-any-file:\n`;
            for (const file of config['changed-files']) {
               yaml += `    - '${file}'\n`;
            }
         }

         if (config['head-branch']) {
            yaml += `- head-branch:\n`;
            for (const branch of config['head-branch']) {
               yaml += `  - '${branch}'\n`;
            }
         }

         if (config['base-branch']) {
            yaml += `- base-branch:\n`;
            for (const branch of config['base-branch']) {
               yaml += `  - '${branch}'\n`;
            }
         }

         yaml += `\n`;
      }
   }

   yaml += `# =====================
# 🎯 Change Type Labels
# =====================

`;

   // Change type labels
   const changeTypeLabels = ['Feature', 'Fix', 'Refactor', 'Chore'];
   for (const label of changeTypeLabels) {
      if (labelConfig[label]) {
         yaml += `${label}:\n`;
         const config = labelConfig[label];

         if (config['changed-files']) {
            yaml += `- changed-files:\n`;
            yaml += `  - any-glob-to-any-file:\n`;
            for (const file of config['changed-files']) {
               yaml += `    - '${file}'\n`;
            }
         }

         if (config['head-branch']) {
            yaml += `- head-branch:\n`;
            for (const branch of config['head-branch']) {
               yaml += `  - '${branch}'\n`;
            }
         }

         if (config['base-branch']) {
            yaml += `- base-branch:\n`;
            for (const branch of config['base-branch']) {
               yaml += `  - '${branch}'\n`;
            }
         }

         yaml += `\n`;
      }
   }

   yaml += `# =====================
# 🚨 Risk / Deployment Labels
# =====================

`;

   // Risk labels
   const riskLabels = [
      'Migration',
      'Event',
      'Scheduler',
      'Subscriber',
      'Schema',
      'Security',
      'Breaking',
   ];
   for (const label of riskLabels) {
      if (labelConfig[label]) {
         yaml += `${label}:\n`;
         const config = labelConfig[label];

         if (config['changed-files']) {
            yaml += `- changed-files:\n`;
            yaml += `  - any-glob-to-any-file:\n`;
            for (const file of config['changed-files']) {
               yaml += `    - '${file}'\n`;
            }
         }

         if (config['head-branch']) {
            yaml += `- head-branch:\n`;
            for (const branch of config['head-branch']) {
               yaml += `  - '${branch}'\n`;
            }
         }

         if (config['base-branch']) {
            yaml += `- base-branch:\n`;
            for (const branch of config['base-branch']) {
               yaml += `  - '${branch}'\n`;
            }
         }

         yaml += `\n`;
      }
   }

   yaml += `# =====================
# ⭐ Feature Labels
# =====================

`;

   // Feature labels (all remaining labels)
   const processedLabels = new Set([
      ...scopeLabels,
      ...changeTypeLabels,
      ...riskLabels,
      'MergeBack',
      'Release',
      'WIP',
      'Beta',
      'AnyChange',
   ]);
   for (const [label, config] of Object.entries(labelConfig)) {
      if (!processedLabels.has(label)) {
         yaml += `${label}:\n`;

         if (config['changed-files']) {
            yaml += `- changed-files:\n`;
            yaml += `  - any-glob-to-any-file:\n`;
            for (const file of config['changed-files']) {
               yaml += `    - '${file}'\n`;
            }
         }

         if (config['head-branch']) {
            yaml += `- head-branch:\n`;
            for (const branch of config['head-branch']) {
               yaml += `  - '${branch}'\n`;
            }
         }

         if (config['base-branch']) {
            yaml += `- base-branch:\n`;
            for (const branch of config['base-branch']) {
               yaml += `  - '${branch}'\n`;
            }
         }

         yaml += `\n`;
      }
   }

   yaml += `# =====================
# 🔁 Git Flow Labels
# =====================

`;

   // Git flow labels
   const gitFlowLabels = ['MergeBack', 'Release', 'WIP', 'Beta'];
   for (const label of gitFlowLabels) {
      if (labelConfig[label]) {
         yaml += `${label}:\n`;
         const config = labelConfig[label];

         if (config['changed-files']) {
            yaml += `- changed-files:\n`;
            yaml += `  - any-glob-to-any-file:\n`;
            for (const file of config['changed-files']) {
               yaml += `    - '${file}'\n`;
            }
         }

         if (config['head-branch']) {
            yaml += `- head-branch:\n`;
            for (const branch of config['head-branch']) {
               yaml += `  - '${branch}'\n`;
            }
         }

         if (config['base-branch']) {
            yaml += `- base-branch:\n`;
            for (const branch of config['base-branch']) {
               yaml += `  - '${branch}'\n`;
            }
         }

         yaml += `\n`;
      }
   }

   yaml += `# =====================
# 🧪 Catch-All
# =====================

`;

   // Catch-all labels
   if (labelConfig['AnyChange']) {
      yaml += `AnyChange:\n`;
      const config = labelConfig['AnyChange'];

      if (config['changed-files']) {
         yaml += `- changed-files:\n`;
         yaml += `  - any-glob-to-any-file:\n`;
         for (const file of config['changed-files']) {
            yaml += `    - '${file}'\n`;
         }
      }

      if (config['head-branch']) {
         yaml += `- head-branch:\n`;
         for (const branch of config['head-branch']) {
            yaml += `  - '${branch}'\n`;
         }
      }

      if (config['base-branch']) {
         yaml += `- base-branch:\n`;
         for (const branch of config['base-branch']) {
            yaml += `  - '${branch}'\n`;
         }
      }

      yaml += `\n`;
   }

   return yaml;
}

/**
 * Writes the labeler YAML configuration to file
 * @param {string} yamlContent - YAML content to write
 */
function writeLabelerYML(yamlContent) {
   const labelerPath = path.join(__dirname, '../.github/labeler.yml');
   fs.writeFileSync(labelerPath, yamlContent);
   console.log('✅ .github/labeler.yml has been updated successfully!');
}

/**
 * Validates the generated labeler configuration
 * @param {object} labelConfig - Label configuration to validate
 */
function validateLabelerConfig(labelConfig) {
   const errors = [];

   for (const [label, config] of Object.entries(labelConfig)) {
      if (!config['changed-files'] && !config['head-branch'] && !config['base-branch']) {
         errors.push(`Label "${label}" has no valid configuration`);
      }
   }

   if (errors.length > 0) {
      throw new Error(`Validation errors:\n${errors.join('\n')}`);
   }

   console.log('✅ Labeler configuration validation passed');
}

/**
 * Main function to sync labeler configuration
 * @param {string} configPath - Path to configuration file
 */
function syncLabeler(configPath = 'release.json') {
   console.log(`🔍 Reading ${configPath} configuration...`);
   const config = readFeaturesConfig(configPath);

   console.log('🏷️  Generating labels from configuration...');
   const allLabels = generateStaticLabels(config.labels);
   console.log(`📋 Generated ${Object.keys(allLabels).length} total labels`);

   console.log('✅ Validating labeler configuration...');
   validateLabelerConfig(allLabels);

   console.log('📝 Generating YAML content...');
   const yamlContent = generateLabelerYAML(allLabels);

   console.log('💾 Writing .github/labeler.yml...');
   writeLabelerYML(yamlContent);

   console.log('🎉 Labeler sync completed!');
}

/**
 * Compares current labeler.yml with what would be generated
 * @param {string} configPath - Path to configuration file
 * @returns {boolean} - True if sync is needed
 */
function checkSyncStatus(configPath = 'release.json') {
   try {
      const config = readFeaturesConfig(configPath);
      const allLabels = generateStaticLabels(config.labels);
      const newYamlContent = generateLabelerYAML(allLabels);

      const labelerPath = path.join(__dirname, '../.github/labeler.yml');

      if (!fs.existsSync(labelerPath)) {
         console.log('📝 labeler.yml does not exist - sync needed');
         return true;
      }

      const currentContent = fs.readFileSync(labelerPath, 'utf8');

      if (currentContent.trim() !== newYamlContent.trim()) {
         console.log('🔄 labeler.yml is out of sync - sync needed');
         return true;
      }

      console.log('✅ labeler.yml is up to date');
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
         syncLabeler(args.config);
      } catch (error) {
         console.error('❌ Sync failed:', error.message);
         process.exit(1);
      }
   } else {
      console.log('Usage: node sync-labeler.js [--config=file.json] [diff|check|sync]');
      process.exit(1);
   }
}

module.exports = {
   syncLabeler,
   checkSyncStatus,
   readFeaturesConfig,
   generateStaticLabels,
   generateLabelerYAML,
   validateLabelerConfig,
};
