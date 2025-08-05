#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script to remove reverted renames from changelog.json
 */

// Files that were reverted and should be removed from changelog
const REVERTED_RENAMES = [
  'jest.config.js',
  'next.config.ts', 
  'next-env.d.ts',
  '__tests__/setup/setupTests-simple.ts',
  'libs/server/core/error-handler.test.ts',
  'libs/server/validation/file-path-validator.test.ts',
  'libs/server/core/file-watcher.test.ts',
  'libs/server/core/utils.test.ts',
  'libs/server/security/api-key-manager.test.ts',
  'libs/server/cli/cli-executor.test.ts',
  'libs/server/cli/cli-command-validator.test.ts'
];

function cleanChangelog() {
  try {
    const changelogPath = path.join(process.cwd(), 'changelog.json');
    const changelog = JSON.parse(fs.readFileSync(changelogPath, 'utf8'));
    
    console.log('🧹 Cleaning changelog.json...\n');
    console.log(`Original entries: ${changelog.changes.length}`);
    
    // Filter out reverted renames
    const originalLength = changelog.changes.length;
    changelog.changes = changelog.changes.filter(change => {
      const shouldRemove = REVERTED_RENAMES.includes(change.oldPath);
      if (shouldRemove) {
        console.log(`   ❌ Removing: ${change.oldPath} → ${change.newPath}`);
      }
      return !shouldRemove;
    });
    
    const removedCount = originalLength - changelog.changes.length;
    
    // Write back the cleaned changelog
    fs.writeFileSync(changelogPath, JSON.stringify(changelog, null, 3), 'utf8');
    
    console.log(`\n✅ Cleaned changelog.json:`);
    console.log(`   Entries removed: ${removedCount}`);
    console.log(`   Entries remaining: ${changelog.changes.length}`);
    
  } catch (error) {
    console.error('❌ Error cleaning changelog:', error.message);
  }
}

function main() {
  console.log('='.repeat(50));
  console.log('🧹 CHANGELOG CLEANUP');
  console.log('='.repeat(50));
  
  cleanChangelog();
  
  console.log('\n💡 Changelog has been updated to reflect reverted files');
  console.log('='.repeat(50));
}

if (require.main === module) {
  main();
}

module.exports = { cleanChangelog, REVERTED_RENAMES };