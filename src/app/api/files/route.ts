import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { readFile, stat } from 'fs/promises';
import { join, resolve, relative } from 'path';
import { extname } from 'path';

// Allowed file extensions for security
const ALLOWED_EXTENSIONS = [
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.json',
  '.md',
  '.txt',
  '.yaml',
  '.yml',
  '.css',
  '.scss',
  '.html',
  '.xml',
  '.env.example',
  '.gitignore',
  '.gitattributes',
  '.eslintrc',
  '.prettierrc',
  '.editorconfig',
];

// Content type mapping
const CONTENT_TYPES: Record<string, string> = {
  '.ts': 'text/typescript',
  '.tsx': 'text/typescript',
  '.js': 'application/javascript',
  '.jsx': 'application/javascript',
  '.json': 'application/json',
  '.md': 'text/markdown',
  '.txt': 'text/plain',
  '.yaml': 'text/yaml',
  '.yml': 'text/yaml',
  '.css': 'text/css',
  '.scss': 'text/scss',
  '.html': 'text/html',
  '.xml': 'application/xml',
  '.env.example': 'text/plain',
  '.gitignore': 'text/plain',
  '.gitattributes': 'text/plain',
  '.eslintrc': 'application/json',
  '.prettierrc': 'application/json',
  '.editorconfig': 'text/plain',
};

function getContentType(filePath: string): string {
  const ext = extname(filePath).toLowerCase();
  return CONTENT_TYPES[ext] || 'text/plain';
}

function isAllowedFile(filePath: string): boolean {
  const ext = extname(filePath).toLowerCase();
  const fileName = filePath.split('/').pop() || '';

  // Check extension
  if (ALLOWED_EXTENSIONS.includes(ext)) {
    return true;
  }

  // Check specific filenames without extensions
  const allowedFiles = [
    '.gitignore',
    '.gitattributes',
    '.eslintrc',
    '.prettierrc',
    '.editorconfig',
  ];
  if (allowedFiles.includes(fileName)) {
    return true;
  }

  return false;
}

function isSecurePath(requestedPath: string, projectRoot: string): boolean {
  try {
    const resolvedPath = resolve(projectRoot, requestedPath);
    const relativePath = relative(projectRoot, resolvedPath);

    // Prevent directory traversal attacks
    if (relativePath.startsWith('../') || relativePath.includes('/../')) {
      return false;
    }

    // Block access to sensitive directories
    const blockedPaths = [
      'node_modules',
      '.git',
      '.next',
      'dist',
      'build',
      '.env',
      '.env.local',
      '.env.production',
    ];

    return !blockedPaths.some(
      (blocked) => relativePath.startsWith(blocked + '/') || relativePath === blocked
    );
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filePath = searchParams.get('path');

    if (!filePath) {
      return NextResponse.json(
        {
          error: 'Missing file path parameter',
        },
        { status: 400 }
      );
    }

    const projectRoot = process.cwd();

    // Security checks
    if (!isSecurePath(filePath, projectRoot)) {
      return NextResponse.json(
        {
          error: 'Access denied: Invalid or blocked file path',
        },
        { status: 403 }
      );
    }

    if (!isAllowedFile(filePath)) {
      return NextResponse.json(
        {
          error: 'Access denied: File type not allowed',
        },
        { status: 403 }
      );
    }

    const fullPath = join(projectRoot, filePath);

    try {
      // Check if file exists and is readable
      const fileStats = await stat(fullPath);

      if (!fileStats.isFile()) {
        return NextResponse.json(
          {
            error: 'Path is not a file',
          },
          { status: 400 }
        );
      }

      // Read file content
      const content = await readFile(fullPath, 'utf-8');
      const contentType = getContentType(filePath);

      // Return file content with metadata
      return NextResponse.json(
        {
          path: filePath,
          content,
          size: fileStats.size,
          lastModified: fileStats.mtime.toISOString(),
          contentType,
          lines: content.split('\n').length,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
          },
        }
      );
    } catch (fileError: any) {
      if (fileError.code === 'ENOENT') {
        return NextResponse.json(
          {
            error: 'File not found',
          },
          { status: 404 }
        );
      }

      if (fileError.code === 'EACCES') {
        return NextResponse.json(
          {
            error: 'Permission denied',
          },
          { status: 403 }
        );
      }

      throw fileError;
    }
  } catch (error) {
    console.error('File serving error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}

// Also support POST for longer file paths or multiple files
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { paths } = body;

    if (!paths || !Array.isArray(paths)) {
      return NextResponse.json(
        {
          error: 'Missing or invalid paths array',
        },
        { status: 400 }
      );
    }

    if (paths.length > 50) {
      return NextResponse.json(
        {
          error: 'Too many files requested (max 50)',
        },
        { status: 400 }
      );
    }

    const projectRoot = process.cwd();
    const results: Array<{
      path: string;
      content?: string;
      error?: string;
      size?: number;
      lastModified?: string;
      contentType?: string;
      lines?: number;
    }> = [];

    for (const filePath of paths) {
      try {
        // Security checks
        if (!isSecurePath(filePath, projectRoot) || !isAllowedFile(filePath)) {
          results.push({
            path: filePath,
            error: 'Access denied',
          });
          continue;
        }

        const fullPath = join(projectRoot, filePath);
        const fileStats = await stat(fullPath);

        if (!fileStats.isFile()) {
          results.push({
            path: filePath,
            error: 'Not a file',
          });
          continue;
        }

        const content = await readFile(fullPath, 'utf-8');
        const contentType = getContentType(filePath);

        results.push({
          path: filePath,
          content,
          size: fileStats.size,
          lastModified: fileStats.mtime.toISOString(),
          contentType,
          lines: content.split('\n').length,
        });
      } catch (fileError: any) {
        results.push({
          path: filePath,
          error: fileError.code === 'ENOENT' ? 'File not found' : 'Read error',
        });
      }
    }

    return NextResponse.json(
      {
        files: results,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
      }
    );
  } catch (error) {
    console.error('Bulk file serving error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
