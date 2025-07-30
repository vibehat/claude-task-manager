import * as fs from 'fs';
import * as path from 'path';

export interface ImportUpdate {
  file: string;
  oldImport: string;
  newImport: string;
  line: number;
}

export interface FileRename {
  oldPath: string;
  newPath: string;
}

export function updateImportsInFile(
  filePath: string,
  renames: FileRename[],
  projectRoot: string
): ImportUpdate[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const updates: ImportUpdate[] = [];
  let modified = false;
  
  const updatedLines = lines.map((line, index) => {
    let updatedLine = line;
    
    // Check for import/export statements
    const importMatch = line.match(/^(\s*(?:import|export)\s+.*?from\s+['"])([^'"]+)(['"].*)/);
    const requireMatch = line.match(/^(\s*(?:const|let|var)\s+.*?=\s*require\s*\(\s*['"])([^'"]+)(['"].*)/);
    const dynamicImportMatch = line.match(/(import\s*\(\s*['"])([^'"]+)(['"].*)/);
    
    const match = importMatch || requireMatch || dynamicImportMatch;
    
    if (match) {
      const [, prefix, importPath, suffix] = match;
      const resolvedPath = resolveImportPath(filePath, importPath, projectRoot);
      
      // Check if this import needs to be updated
      for (const rename of renames) {
        if (shouldUpdateImport(resolvedPath, rename, projectRoot)) {
          const newImportPath = getNewImportPath(filePath, rename, importPath, projectRoot);
          updatedLine = prefix + newImportPath + suffix;
          
          updates.push({
            file: filePath,
            oldImport: importPath,
            newImport: newImportPath,
            line: index + 1
          });
          
          modified = true;
          break;
        }
      }
    }
    
    return updatedLine;
  });
  
  if (modified) {
    fs.writeFileSync(filePath, updatedLines.join('\n'), 'utf-8');
  }
  
  return updates;
}

function resolveImportPath(
  currentFile: string,
  importPath: string,
  projectRoot: string
): string {
  // Handle different import path types
  if (importPath.startsWith('.')) {
    // Relative import
    const currentDir = path.dirname(currentFile);
    return path.resolve(currentDir, importPath);
  } else if (importPath.startsWith('@/')) {
    // Alias import (assuming @/ maps to project root)
    return path.resolve(projectRoot, importPath.replace('@/', ''));
  } else {
    // Node module or absolute import
    return importPath;
  }
}

function shouldUpdateImport(
  resolvedImportPath: string,
  rename: FileRename,
  projectRoot: string
): boolean {
  const oldPathWithoutExt = removeExtension(rename.oldPath);
  const resolvedWithoutExt = removeExtension(resolvedImportPath);
  
  // Check if the import path matches the renamed file
  return resolvedWithoutExt === oldPathWithoutExt ||
         resolvedWithoutExt === path.resolve(projectRoot, oldPathWithoutExt);
}

function getNewImportPath(
  currentFile: string,
  rename: FileRename,
  originalImportPath: string,
  projectRoot: string
): string {
  const { oldPath, newPath } = rename;
  
  // Preserve the import style (relative, alias, etc.)
  if (originalImportPath.startsWith('.')) {
    // Relative import - calculate new relative path
    const currentDir = path.dirname(currentFile);
    const newRelativePath = path.relative(currentDir, newPath);
    
    // Ensure it starts with ./ or ../
    if (!newRelativePath.startsWith('.')) {
      return './' + removeExtension(newRelativePath);
    }
    return removeExtension(newRelativePath);
  } else if (originalImportPath.startsWith('@/')) {
    // Alias import
    const newAliasPath = '@/' + path.relative(projectRoot, newPath);
    return removeExtension(newAliasPath);
  } else {
    // Absolute import (rare in this codebase)
    return removeExtension(newPath);
  }
}

function removeExtension(filePath: string): string {
  const extensions = ['.tsx', '.ts', '.jsx', '.js'];
  for (const ext of extensions) {
    if (filePath.endsWith(ext)) {
      return filePath.slice(0, -ext.length);
    }
  }
  return filePath;
}

export function findAllTypeScriptFiles(directory: string): string[] {
  const files: string[] = [];
  
  function traverse(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', '.next', 'dist', 'build', '.git'].includes(entry.name)) {
          traverse(fullPath);
        }
      } else if (entry.isFile()) {
        if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(directory);
  return files;
}

export function createImportMap(projectRoot: string): Map<string, string[]> {
  const importMap = new Map<string, string[]>();
  const files = findAllTypeScriptFiles(projectRoot);
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const imports = extractImports(content);
    
    for (const imp of imports) {
      const resolvedPath = resolveImportPath(file, imp, projectRoot);
      const normalizedPath = removeExtension(resolvedPath);
      
      if (!importMap.has(normalizedPath)) {
        importMap.set(normalizedPath, []);
      }
      importMap.get(normalizedPath)!.push(file);
    }
  }
  
  return importMap;
}

function extractImports(content: string): string[] {
  const imports: string[] = [];
  const lines = content.split('\n');
  
  for (const line of lines) {
    const importMatch = line.match(/(?:import|export)\s+.*?from\s+['"]([^'"]+)['"]/);
    const requireMatch = line.match(/require\s*\(\s*['"]([^'"]+)['"]\s*\)/);
    const dynamicImportMatch = line.match(/import\s*\(\s*['"]([^'"]+)['"]\s*\)/);
    
    const match = importMatch || requireMatch || dynamicImportMatch;
    if (match) {
      imports.push(match[1]);
    }
  }
  
  return imports;
}