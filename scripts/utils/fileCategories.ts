import * as path from 'path';
import * as fs from 'fs';

export type FileCategory = 'component' | 'hook' | 'type' | 'util' | 'constant' | 'store' | 'other';

export interface FileInfo {
  absolutePath: string;
  relativePath: string;
  fileName: string;
  extension: string;
  category: FileCategory;
  content?: string;
}

export function categorizeFile(filePath: string): FileCategory {
  const fileName = path.basename(filePath);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Skip index files
  if (fileName.startsWith('index.')) {
    return 'other';
  }
  
  // Check for React hooks
  if (fileName.includes('use') && (fileName.includes('.ts') || fileName.includes('.tsx'))) {
    // Verify it's actually a hook by checking the content
    if (content.includes('export function use') || 
        content.includes('export const use') ||
        content.includes('export default function use') ||
        content.includes('function use')) {
      return 'hook';
    }
  }
  
  // Check for React components (TSX files that export components)
  if (filePath.endsWith('.tsx')) {
    // Check if it exports a component
    if (content.includes('export function') || 
        content.includes('export const') ||
        content.includes('export default function') ||
        content.includes('React.FC') ||
        content.includes('React.Component') ||
        content.includes('JSX.Element')) {
      return 'component';
    }
  }
  
  // Check for type definition files
  if (fileName.includes('.types.') || fileName.includes('.type.') || 
      fileName.includes('types/') || content.includes('export type') ||
      content.includes('export interface')) {
    return 'type';
  }
  
  // Check for utility files
  if (fileName.includes('utils') || fileName.includes('helpers') || 
      filePath.includes('/utils/') || filePath.includes('/helpers/')) {
    return 'util';
  }
  
  // Check for constants
  if (fileName.includes('constants') || fileName.includes('const') ||
      filePath.includes('/constants/')) {
    return 'constant';
  }
  
  // Check for store files (Redux, Zustand, etc.)
  if (fileName.includes('store') || filePath.includes('/store/')) {
    return 'store';
  }
  
  return 'other';
}

export function getNewFileName(fileInfo: FileInfo): string {
  const { fileName, extension, category, content } = fileInfo;
  const nameWithoutExt = fileName.replace(extension, '');
  
  // Skip index files
  if (fileName.startsWith('index.')) {
    return fileName;
  }
  
  switch (category) {
    case 'component': {
      // Extract component name from file content
      const componentMatch = content?.match(
        /(?:export\s+(?:default\s+)?(?:function|const)\s+|function\s+)([A-Z][A-Za-z0-9]*)/
      );
      if (componentMatch) {
        return `${componentMatch[1]}${extension}`;
      }
      // Fallback: Convert kebab-case to PascalCase
      return toPascalCase(nameWithoutExt) + extension;
    }
    
    case 'hook': {
      // Extract hook name from file content
      const hookMatch = content?.match(
        /(?:export\s+(?:default\s+)?(?:function|const)\s+|function\s+)(use[A-Z][A-Za-z0-9]*)/
      );
      if (hookMatch) {
        return `${hookMatch[1]}${extension}`;
      }
      // Fallback: Convert to camelCase starting with 'use'
      return toCamelCase(nameWithoutExt) + extension;
    }
    
    case 'type':
    case 'util':
    case 'constant':
    case 'store':
    case 'other':
      // Convert to camelCase
      return toCamelCase(nameWithoutExt) + extension;
    
    default:
      return fileName;
  }
}

function toPascalCase(str: string): string {
  return str
    .split(/[-_.]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

function toCamelCase(str: string): string {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

export function shouldSkipFile(filePath: string): boolean {
  // Skip node_modules, build directories, etc.
  const skipPatterns = [
    'node_modules',
    '.next',
    'dist',
    'build',
    '.git',
    'coverage',
    '.turbo',
    '.taskmaster',
    '/app/',
    '/scripts/',
    '/generated/',
  ];
  
  return skipPatterns.some(pattern => filePath.includes(pattern));
}