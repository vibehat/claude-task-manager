#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script to fix import statements based on changelog.json
 * Reads changelog.json and applies all importUpdates to fix incorrect imports
 */

const CHANGELOG_PATH = path.join(__dirname, '..', 'changelog.json');

function readChangelog() {
  try {
    const content = fs.readFileSync(CHANGELOG_PATH, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error reading changelog.json:', error.message);
    process.exit(1);
  }
}

function updateImportInFile(filePath, oldImport, newImport, lineNumber) {
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  File not found: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Find and update the import
    let updated = false;
    
    // First try to find the exact line if lineNumber is provided
    if (lineNumber && lineNumber > 0 && lineNumber <= lines.length) {
      const line = lines[lineNumber - 1]; // Convert 1-based to 0-based index
      if (line.includes(oldImport)) {
        const updatedLine = line.replace(new RegExp(oldImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newImport);
        if (updatedLine !== line) {
          lines[lineNumber - 1] = updatedLine;
          updated = true;
          console.log(`✅ Updated import in ${path.relative(process.cwd(), filePath)}:${lineNumber}`);
          console.log(`   Old: ${line.trim()}`);
          console.log(`   New: ${updatedLine.trim()}`);
        }
      }
    }
    
    // If not found at the specific line, search through all lines
    if (!updated) {
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if this line contains the old import
        if (line.includes(oldImport)) {
          // Use regex to replace with proper escaping
          const updatedLine = line.replace(new RegExp(oldImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newImport);
          if (updatedLine !== line) {
            lines[i] = updatedLine;
            updated = true;
            console.log(`✅ Updated import in ${path.relative(process.cwd(), filePath)}:${i + 1}`);
            console.log(`   Old: ${line.trim()}`);
            console.log(`   New: ${updatedLine.trim()}`);
            break; // Only update the first occurrence
          }
        }
      }
    }
    
    if (updated) {
      fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
      return true;
    } else {
      // console.log(`   ⚠️  Import "${oldImport}" not found in ${path.relative(process.cwd(), filePath)}`);
    }
    
    return updated;
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔧 Starting import fixes based on changelog.json...\n');
  
  const changelog = readChangelog();
  
  if (!changelog.changes || !Array.isArray(changelog.changes)) {
    console.error('❌ Invalid changelog format');
    process.exit(1);
  }
  
  let totalUpdates = 0;
  let successfulUpdates = 0;
  
  // Process each change that has importUpdates
  changelog.changes.forEach((change, changeIndex) => {
    if (change.importUpdates && Array.isArray(change.importUpdates)) {
      console.log(`\n📝 Processing change ${changeIndex + 1}: ${change.type} - ${change.oldPath} → ${change.newPath}`);
      
      change.importUpdates.forEach((update, updateIndex) => {
        totalUpdates++;
        // console.log(`\n  Import update ${updateIndex + 1}:`);
        
        const success = updateImportInFile(
          update.file,
          update.oldImport,
          update.newImport,
          update.line
        );
        
        if (success) {
          successfulUpdates++;
        }
      });
    }
  });
  
  console.log('\n' + '='.repeat(60));
  console.log(`📊 Import fixing completed!`);
  console.log(`   Total import updates processed: ${totalUpdates}`);
  console.log(`   Successful updates: ${successfulUpdates}`);
  console.log(`   Failed updates: ${totalUpdates - successfulUpdates}`);
  
  if (successfulUpdates === totalUpdates) {
    console.log('🎉 All imports fixed successfully!');
  } else if (successfulUpdates > 0) {
    console.log('✨ Some imports were fixed successfully!');
    console.log('   Run `git diff` to see the changes made.');
  } else {
    console.log('ℹ️  No imports needed to be updated (they may already be correct).');
  }
  
  console.log('\n💡 To see what files were changed, run: git status');
  console.log('💡 To see the specific changes made, run: git diff');
}

if (require.main === module) {
  main();
}

module.exports = { updateImportInFile, readChangelog };