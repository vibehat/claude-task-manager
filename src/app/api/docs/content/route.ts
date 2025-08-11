import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { promises as fsp } from 'fs';
import path from 'path';

const PROJECT_ROOT = process.cwd();
const ALLOWED_EXTENSIONS = new Set(['.md', '.mdx']);

function isAllowedPath(relPath: string): boolean {
  const normalized = path.normalize(relPath);
  if (normalized.startsWith('..')) return false;
  const ext = path.extname(normalized).toLowerCase();
  return ALLOWED_EXTENSIONS.has(ext);
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const relPath = searchParams.get('path');
    if (!relPath) {
      return NextResponse.json({ error: 'Missing path' }, { status: 400 });
    }

    if (!isAllowedPath(relPath)) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    const absPath = path.join(PROJECT_ROOT, relPath);
    const stat = await fsp.stat(absPath);
    if (!stat.isFile()) {
      return NextResponse.json({ error: 'Not a file' }, { status: 400 });
    }

    const content = await fsp.readFile(absPath, 'utf-8');
    return NextResponse.json({
      path: relPath,
      size: stat.size,
      lastModified: stat.mtime.toISOString(),
      content,
    });
  } catch (error: any) {
    if (error?.code === 'ENOENT') {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Failed to read file' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { path: relPath, content } = body;

    if (!relPath || typeof relPath !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid path' }, { status: 400 });
    }

    if (typeof content !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid content' }, { status: 400 });
    }

    if (!isAllowedPath(relPath)) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 });
    }

    const absPath = path.join(PROJECT_ROOT, relPath);

    // Ensure the directory exists
    const dir = path.dirname(absPath);
    await fsp.mkdir(dir, { recursive: true });

    // Write the content to the file
    await fsp.writeFile(absPath, content, 'utf-8');

    return NextResponse.json({ success: true, path: relPath });
  } catch {
    return NextResponse.json({ error: 'Failed to save file' }, { status: 500 });
  }
}
