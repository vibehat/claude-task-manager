#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Script to identify and revert incorrect file renames
 * Some files should keep their original names (config files, etc.)
 */

// Files that should NOT be renamed - they have specific naming conventions
const INCORRECT_RENAMES = [
  {
    oldPath: 'jest.config.js',
    incorrectNewPath: 'jestConfig.js',
    reason: 'Jest requires jest.config.js naming convention'
  },
  {
    oldPath: 'next.config.ts', 
    incorrectNewPath: 'nextConfig.ts',
    reason: 'Next.js requires next.config.ts naming convention'
  },
  {
    oldPath: 'next-env.d.ts',
    incorrectNewPath: 'nextEnvD.ts', 
    reason: 'Next.js auto-generated file with specific naming'
  },
  {
    oldPath: '__tests__/setup/setupTests-simple.ts',
    incorrectNewPath: '__tests__/setup/setuptestsSimple.ts',
    reason: 'Test file naming should be consistent with kebab-case'
  },
  // Add more incorrect renames as needed
];

function checkIfFileExists(filePath) {
  return fs.existsSync(filePath);
}

function revertRename(oldPath, incorrectNewPath, reason) {
  console.log(`\n🔄 Checking rename: ${oldPath} → ${incorrectNewPath}`);
  console.log(`   Reason: ${reason}`);
  
  const oldExists = checkIfFileExists(oldPath);
  const newExists = checkIfFileExists(incorrectNewPath);
  
  if (newExists && !oldExists) {
    // The incorrect rename happened, revert it
    try {
      execSync(`git mv "${incorrectNewPath}" "${oldPath}"`, { stdio: 'inherit' });
      console.log(`   ✅ Reverted: ${incorrectNewPath} → ${oldPath}`);
      return true;
    } catch (error) {
      console.log(`   ❌ Failed to revert: ${error.message}`);
      return false;
    }
  } else if (oldExists && !newExists) {
    console.log(`   ℹ️  Already correct: ${oldPath} exists`);
    return false;
  } else if (oldExists && newExists) {
    console.log(`   ⚠️  Both files exist - manual intervention needed`);
    return false;
  } else {
    console.log(`   ⚠️  Neither file exists - may have been handled already`);
    return false;
  }
}

function scanChangelogForProblematicRenames() {
  try {
    const changelogPath = path.join(process.cwd(), 'changelog.json');
    const changelog = JSON.parse(fs.readFileSync(changelogPath, 'utf8'));
    
    console.log('🔍 Scanning changelog for potentially problematic renames...\n');
    
    const problematicPatterns = [
      /^[a-z-]+\.config\.[jt]s$/, // Config files
      /^[a-z-]+\.d\.ts$/, // Type declaration files  
      /\.test\.[jt]s$/, // Test files
      /\.spec\.[jt]s$/, // Spec files
      /^__tests__/, // Test directories
    ];
    
    const potentialProblems = [];
    
    changelog.changes.forEach((change, index) => {
      if (change.type === 'rename') {
        const basename = path.basename(change.oldPath);
        
        // Check if this looks like a config/special file
        const isProblematic = problematicPatterns.some(pattern => pattern.test(basename));
        
        if (isProblematic) {
          potentialProblems.push({
            index: index + 1,
            oldPath: change.oldPath,
            newPath: change.newPath,
            reason: 'Potential config/special file'
          });
        }
      }
    });
    
    if (potentialProblems.length > 0) {
      console.log('⚠️  Found potentially problematic renames:');
      potentialProblems.forEach(problem => {
        console.log(`   ${problem.index}. ${problem.oldPath} → ${problem.newPath} (${problem.reason})`);
      });
      console.log('');
    }
    
    return potentialProblems;
    
  } catch (error) {
    console.error('Error reading changelog:', error.message);
    return [];
  }
}

function main() {
  console.log('🔧 Checking for incorrect file renames...\n');
  
  // First scan changelog for potential issues
  const potentialProblems = scanChangelogForProblematicRenames();
  
  console.log('🔄 Reverting known incorrect renames...\n');
  
  let revertedCount = 0;
  
  INCORRECT_RENAMES.forEach(rename => {
    const success = revertRename(rename.oldPath, rename.incorrectNewPath, rename.reason);
    if (success) {
      revertedCount++;
    }
  });
  
  console.log('\n' + '='.repeat(60));
  console.log(`📊 Revert Summary:`);
  console.log(`   Files reverted: ${revertedCount}`);
  console.log(`   Total checked: ${INCORRECT_RENAMES.length}`);
  
  if (potentialProblems.length > 0) {
    console.log(`   Potential issues found: ${potentialProblems.length}`);
    console.log('\n💡 Please manually review the potential issues listed above');
  }
  
  if (revertedCount > 0) {
    console.log('\n✅ Some files were reverted to their correct names');
    console.log('💡 Run `git status` to see the changes');
  } else {
    console.log('\nℹ️  No files needed to be reverted');
  }
  
  console.log('='.repeat(60));
}

if (require.main === module) {
  main();
}

module.exports = { INCORRECT_RENAMES, revertRename, scanChangelogForProblematicRenames };