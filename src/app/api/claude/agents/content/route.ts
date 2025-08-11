import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { promises as fsp } from 'fs';
import path from 'path';
import type {
  AgentContentResponse,
  ApiSuccessResponse,
  SaveAgentContentRequest,
} from '@/features/agents/types/agent.types';

const PROJECT_ROOT = process.cwd();
const AGENTS_DIR = path.join(PROJECT_ROOT, '.claude', 'agents');

/**
 * Check if the path is safely within the agents directory
 */
function isPathSafe(relPath: string): boolean {
  const normalized = path.normalize(relPath);
  if (normalized.startsWith('..') || normalized.includes('../')) return false;

  const absPath = path.join(AGENTS_DIR, normalized);
  const resolvedPath = path.resolve(absPath);

  return resolvedPath.startsWith(AGENTS_DIR) && normalized.endsWith('.md');
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const relPath = searchParams.get('path');

    if (!relPath) {
      return NextResponse.json({ error: 'Missing path parameter' }, { status: 400 });
    }

    if (!isPathSafe(relPath)) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 403 });
    }

    const absPath = path.join(AGENTS_DIR, relPath);

    try {
      const stat = await fsp.stat(absPath);
      if (!stat.isFile()) {
        return NextResponse.json({ error: 'Not a file' }, { status: 400 });
      }

      const content = await fsp.readFile(absPath, 'utf-8');

      return NextResponse.json({
        path: relPath,
        content,
      } as AgentContentResponse);
    } catch (error: any) {
      if (error?.code === 'ENOENT') {
        return NextResponse.json({ error: 'Agent file not found' }, { status: 404 });
      }
      throw error;
    }
  } catch (error) {
    console.error('Agent content GET error:', error);
    return NextResponse.json({ error: 'Failed to read agent' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body: SaveAgentContentRequest = await request.json();
    const { path: relPath, content } = body;

    if (!relPath || typeof relPath !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid path' }, { status: 400 });
    }

    if (typeof content !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid content' }, { status: 400 });
    }

    if (!isPathSafe(relPath)) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 403 });
    }

    const absPath = path.join(AGENTS_DIR, relPath);

    // Ensure the directory exists
    const dir = path.dirname(absPath);
    await fsp.mkdir(dir, { recursive: true });

    // Write the content to the file
    await fsp.writeFile(absPath, content, 'utf-8');

    return NextResponse.json({
      success: true,
      path: relPath,
    } as ApiSuccessResponse);
  } catch (error) {
    console.error('Agent content PUT error:', error);
    return NextResponse.json({ error: 'Failed to save agent' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const relPath = searchParams.get('path');

    if (!relPath) {
      return NextResponse.json({ error: 'Missing path parameter' }, { status: 400 });
    }

    if (!isPathSafe(relPath)) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 403 });
    }

    const absPath = path.join(AGENTS_DIR, relPath);

    try {
      await fsp.unlink(absPath);
    } catch (error: any) {
      if (error?.code === 'ENOENT') {
        // File doesn't exist, but that's fine - return success
        return NextResponse.json({ success: true } as ApiSuccessResponse);
      }
      throw error;
    }

    return NextResponse.json({ success: true } as ApiSuccessResponse);
  } catch (error) {
    console.error('Agent content DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete agent' }, { status: 500 });
  }
}
