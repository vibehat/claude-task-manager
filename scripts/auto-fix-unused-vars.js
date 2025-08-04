#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes for output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runEslint(targetFiles = '.') {
  try {
    log('Running ESLint...', 'blue');
    // Run ESLint and capture output (it exits with error code if there are linting errors)
    execSync(`pnpm eslint ${targetFiles}`, { 
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe']
    });
    return '';
  } catch (error) {
    // ESLint exits with non-zero code when there are errors, but that's expected
    if (error.stdout) {
      return error.stdout;
    }
    log('Error running ESLint', 'red');
    console.error(error.message);
    process.exit(1);
  }
}

function parseUnusedVars(eslintOutput) {
  const unusedItems = [];
  const lines = eslintOutput.split('\n');
  let currentFile = null;
  
  for (const line of lines) {
    // Match file path line
    if (line && !line.startsWith(' ') && line.includes('/')) {
      currentFile = line.trim();
      continue;
    }
    
    // Match error lines with unused vars (both typescript-eslint and unused-imports)
    const errorMatch = line.match(/^\s*(\d+):(\d+)\s+error\s+('[^']+' is defined but never used.*(?:@typescript-eslint\/no-unused-vars|unused-imports\/no-unused-vars))$/) ||
                      line.match(/^\s*(\d+):(\d+)\s+error\s+(.*unused-imports\/no-unused-imports)$/);
    
    if (errorMatch && currentFile) {
      const [, lineNum, colNum, message] = errorMatch;
      
      // Handle both unused-imports messages and typescript-eslint messages
      let varName = null;
      
      if (message.includes('unused-imports/no-unused-imports')) {
        // For unused import messages like: 'React' is defined but never used  unused-imports/no-unused-imports
        const importMatch = message.match(/'([^']+)' is defined but never used/);
        if (importMatch) {
          varName = importMatch[1];
        }
      } else {
        // For unused variable messages
        const varMatch = message.match(/'([^']+)' is defined but never used/);
        if (varMatch) {
          varName = varMatch[1];
        }
      }
      
      if (varName) {
        // We'll determine the actual type later by reading the file line
        let itemType = 'unknown';
        
        unusedItems.push({
          file: currentFile,
          line: parseInt(lineNum, 10),
          column: parseInt(colNum, 10),
          varName,
          type: itemType,
          fullMessage: message
        });
      }
    }
  }
  
  return unusedItems;
}

function fixUnusedItem(filePath, item) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Get the specific line (arrays are 0-indexed, line numbers are 1-indexed)
    const lineIndex = item.line - 1;
    const targetLine = lines[lineIndex];
    
    // Determine the actual type by looking at the line content
    let actualType = 'variable';
    if (targetLine.includes('import ') && targetLine.includes('from ')) {
      actualType = targetLine.includes('import type') ? 'typeImport' : 'import';
    }
    
    if (actualType === 'import' || actualType === 'typeImport') {
      return fixUnusedImport(lines, lineIndex, targetLine, { ...item, type: actualType }, filePath);
    } else {
      return fixUnusedVariable(lines, lineIndex, targetLine, item, filePath);
    }
  } catch (error) {
    log(`  ✗ Error fixing ${item.varName}: ${error.message}`, 'red');
    return false;
  }
}

function fixUnusedImport(lines, lineIndex, targetLine, item, filePath) {
  const { varName } = item;
  
  // Handle different import patterns
  if (targetLine.includes('import type')) {
    // Type imports: import type { A, B } from 'module'
    return removeFromImportStatement(lines, lineIndex, targetLine, varName, filePath, 'type import');
  } else if (targetLine.includes('import {')) {
    // Named imports: import { A, B } from 'module'
    return removeFromImportStatement(lines, lineIndex, targetLine, varName, filePath, 'named import');
  } else if (targetLine.includes('import ') && targetLine.includes(' from ')) {
    // Handle namespace imports: import * as name from 'module'
    const namespaceMatch = targetLine.match(/import\s+\*\s+as\s+([^\s]+)\s+from/);
    if (namespaceMatch && namespaceMatch[1] === varName) {
      // Remove entire namespace import line
      lines.splice(lineIndex, 1);
      fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
      log(`  ✓ Removed unused namespace import: ${varName}`, 'green');
      return true;
    }
    
    // Handle complex import patterns like: import React, { useContext, useState, useRef } from 'react'
    const complexImportMatch = targetLine.match(/import\s+([^,{]+),?\s*(?:{([^}]*)})?/);
    if (complexImportMatch) {
      const [, defaultImport, namedImports] = complexImportMatch;
      
      // Check if it's the default import
      if (defaultImport && defaultImport.trim() === varName) {
        // Remove default import
        const newLine = targetLine.replace(new RegExp(`import\\s+${varName},?\\s*`), 'import ');
        lines[lineIndex] = newLine.replace('import  {', 'import {');
        fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
        log(`  ✓ Removed unused default import: ${varName}`, 'green');
        return true;
      }
      
      // Check if it's in the named imports
      if (namedImports && namedImports.includes(varName)) {
        return removeFromImportStatement(lines, lineIndex, targetLine, varName, filePath, 'complex import');
      }
    }
    
    // Fallback for simple default import: import A from 'module'
    if (targetLine.trim().startsWith(`import ${varName}`)) {
      // Remove entire import line
      lines.splice(lineIndex, 1);
      fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
      log(`  ✓ Removed unused default import: ${varName}`, 'green');
      return true;
    }
  }
  
  log(`  ⚠️  Could not handle import pattern for '${varName}' in: ${targetLine.trim()}`, 'yellow');
  return false;
}

function removeFromImportStatement(lines, lineIndex, targetLine, varName, filePath, importType) {
  // Handle multi-line import statements
  let importLines = [targetLine];
  let startLine = lineIndex;
  let endLine = lineIndex;
  
  // If import statement spans multiple lines, collect all lines
  if (!targetLine.includes('}')) {
    for (let i = lineIndex + 1; i < lines.length; i++) {
      importLines.push(lines[i]);
      endLine = i;
      if (lines[i].includes('}')) break;
    }
  }
  
  const fullImport = importLines.join('\n');
  let importRegex;
  
  if (importType === 'type import') {
    importRegex = /import type\s*{\s*([^}]+)\s*}\s*from/;
  } else if (importType === 'complex import') {
    // Handle: import React, { useContext, useState, useRef } from 'react'
    importRegex = /import\s+[^,{]+,?\s*{\s*([^}]+)\s*}\s*from/;
  } else {
    importRegex = /import\s*{\s*([^}]+)\s*}\s*from/;
  }
  
  const match = fullImport.match(importRegex);
  if (!match) {
    log(`  ⚠️  Could not parse ${importType} statement`, 'yellow');
    return false;
  }
  
  const imports = match[1].split(',').map(s => s.trim()).filter(s => s);
  const filteredImports = imports.filter(imp => {
    // Handle "as" imports like "A as B"
    const cleanName = imp.split(' as ')[0].trim();
    return cleanName !== varName;
  });
  
  if (filteredImports.length === 0) {
    // Remove entire import statement
    lines.splice(startLine, endLine - startLine + 1);
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    log(`  ✓ Removed entire ${importType} statement containing only '${varName}'`, 'green');
    return true;
  } else if (filteredImports.length < imports.length) {
    // Update import statement with remaining imports
    let prefix;
    if (importType === 'type import') {
      prefix = 'import type { ';
    } else if (importType === 'complex import') {
      // Keep the default import part
      const defaultMatch = fullImport.match(/import\s+([^,{]+),?\s*{/);
      prefix = defaultMatch ? `import ${defaultMatch[1]}, { ` : 'import { ';
    } else {
      prefix = 'import { ';
    }
    
    const newImportLine = fullImport.replace(importRegex, `${prefix}${filteredImports.join(', ')} } from`);
    
    // Replace the import lines with the new single line
    lines.splice(startLine, endLine - startLine + 1, newImportLine);
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    log(`  ✓ Removed '${varName}' from ${importType} statement`, 'green');
    return true;
  }
  
  return false;
}

function fixUnusedVariable(lines, lineIndex, targetLine, item, filePath) {
  const { varName } = item;
  
  // Check if it's a catch block parameter
  const catchMatch = targetLine.match(/} catch \(([^)]+)\) {/);
  if (catchMatch && catchMatch[1].includes(varName)) {
    // For catch blocks with unused error, remove the parameter entirely
    const newLine = targetLine.replace(/} catch \([^)]+\) {/, '} catch {');
    lines[lineIndex] = newLine;
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    log(`  ✓ Fixed catch block: removed unused parameter '${varName}'`, 'green');
    return true;
  }
  
  // Find the exact position of the variable name
  const varIndex = targetLine.indexOf(varName, item.column - 1);
  
  if (varIndex === -1) {
    log(`  ⚠️  Could not find '${varName}' at expected position in line ${item.line}`, 'yellow');
    return false;
  }
  
  // Check if it's already prefixed with underscore
  if (varIndex > 0 && targetLine[varIndex - 1] === '_') {
    log(`  ℹ️  Variable '${varName}' already prefixed with underscore`, 'blue');
    return false;
  }
  
  // Replace the variable name with underscore prefix
  const newLine = targetLine.substring(0, varIndex) + '_' + varName + targetLine.substring(varIndex + varName.length);
  lines[lineIndex] = newLine;
  
  // Write the fixed content back
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  log(`  ✓ Fixed: ${varName} → _${varName}`, 'green');
  return true;
}

function main() {
  // Get target files from command line arguments or use default
  const args = process.argv.slice(2);
  const targetFiles = args.length > 0 ? args.join(' ') : '.';
  
  log('🔧 Auto-fixing unused variables by prefixing with underscore...', 'blue');
  log('================================================', 'blue');
  if (args.length > 0) {
    log(`Target files: ${targetFiles}`, 'blue');
  }
  
  // Run ESLint and get results
  const eslintOutput = runEslint(targetFiles);
  
  // Parse unused items (variables, imports, etc.)
  const unusedItems = parseUnusedVars(eslintOutput);
  
  if (unusedItems.length === 0) {
    log('\n✨ No unused variables or imports found!', 'green');
    return;
  }
  
  log(`\nFound ${unusedItems.length} unused item(s) to fix:`, 'yellow');
  
  // Group by file for better output
  const itemsByFile = unusedItems.reduce((acc, item) => {
    if (!acc[item.file]) acc[item.file] = [];
    acc[item.file].push(item);
    return acc;
  }, {});
  
  let fixedCount = 0;
  
  // Fix each unused item
  for (const [file, items] of Object.entries(itemsByFile)) {
    const relativePath = path.relative(process.cwd(), file);
    log(`\n📄 ${relativePath}:`, 'blue');
    
    // Sort by line number in reverse order to avoid position shifts
    items.sort((a, b) => b.line - a.line);
    
    for (const item of items) {
      if (fixUnusedItem(file, item)) {
        fixedCount++;
      }
    }
  }
  
  log(`\n🎉 Fixed ${fixedCount} out of ${unusedItems.length} unused item(s)!`, 'green');
  
  // Run ESLint again to verify fixes
  log('\nVerifying fixes...', 'blue');
  const verifyOutput = runEslint(targetFiles);
  const remainingUnused = parseUnusedVars(verifyOutput);
  
  if (remainingUnused.length === 0) {
    log('✅ All unused variable/import errors resolved!', 'green');
  } else {
    log(`⚠️  ${remainingUnused.length} unused item error(s) remain`, 'yellow');
    for (const remaining of remainingUnused) {
      const relativePath = path.relative(process.cwd(), remaining.file);
      log(`   - ${relativePath}:${remaining.line}:${remaining.column} - ${remaining.varName} (${remaining.type})`, 'yellow');
    }
  }
}

// Run the script
main();