import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { promises as fsp } from 'fs';
import type { Dirent } from 'fs';
import path from 'path';
import type { AgentSearchResponse } from '@/features/agents/types/agent.types';

const PROJECT_ROOT = process.cwd();
const AGENTS_DIR = path.join(PROJECT_ROOT, '.claude', 'agents');

interface SearchResult {
  path: string;
  title?: string;
  match?: string;
}

/**
 * Simple frontmatter and content search
 */
function searchInContent(
  content: string,
  query: string
): { title?: string; match?: string } | null {
  const lowerQuery = query.toLowerCase();
  const lowerContent = content.toLowerCase();

  if (!lowerContent.includes(lowerQuery)) {
    return null;
  }

  // Extract title from frontmatter or first heading
  let title: string | undefined;
  const lines = content.split('\n');

  // Look for name in frontmatter
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('name:')) {
      title = trimmed
        .substring(5)
        .trim()
        .replace(/^['"]|['"]$/g, '');
      break;
    }
    if (trimmed === '---' && title) break;
  }

  // If no name in frontmatter, look for first heading
  if (!title) {
    const headingLine = lines.find((line) => line.trim().startsWith('#'));
    if (headingLine) {
      title = headingLine.replace(/^#+\s*/, '').trim();
    }
  }

  // Find match context (50 chars before and after)
  const matchIndex = lowerContent.indexOf(lowerQuery);
  if (matchIndex !== -1) {
    const start = Math.max(0, matchIndex - 50);
    const end = Math.min(content.length, matchIndex + query.length + 50);
    const match = content.substring(start, end);

    return { title, match: match.trim() };
  }

  return { title };
}

/**
 * Check if path is safely within the agents directory
 */
function isPathSafe(resolvedPath: string): boolean {
  return resolvedPath.startsWith(AGENTS_DIR);
}

/**
 * Recursively scan and search agent files
 */
async function searchAgentFiles(
  startDir: string,
  baseDir: string,
  query: string
): Promise<SearchResult[]> {
  const results: SearchResult[] = [];
  const maxResults = 20; // Limit results

  async function traverse(current: string) {
    if (results.length >= maxResults) return;

    let entries: Dirent[] = [];
    try {
      entries = (await fsp.readdir(current, { withFileTypes: true })) as unknown as Dirent[];
    } catch {
      return;
    }

    for (const entry of entries) {
      if (results.length >= maxResults) break;

      const absPath = path.join(current, entry.name);
      const relPath = path.relative(baseDir, absPath);

      // Security check
      if (!isPathSafe(absPath)) continue;

      if (entry.isDirectory()) {
        // Skip hidden directories except .claude itself
        if (!entry.name.startsWith('.') || entry.name === '.claude') {
          await traverse(absPath);
        }
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        try {
          const content = await fsp.readFile(absPath, 'utf-8');
          const searchResult = searchInContent(content, query);

          if (searchResult) {
            results.push({
              path: relPath,
              title: searchResult.title,
              match: searchResult.match,
            });
          }
        } catch {
          // Skip unreadable files
          continue;
        }
      }
    }
  }

  await traverse(startDir);
  return results;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query || query.trim().length === 0) {
      return NextResponse.json({ error: 'Missing search query' }, { status: 400 });
    }

    if (query.length < 2) {
      return NextResponse.json(
        { error: 'Query too short (minimum 2 characters)' },
        { status: 400 }
      );
    }

    // Ensure agents directory exists
    try {
      await fsp.access(AGENTS_DIR);
    } catch {
      // Directory doesn't exist, return empty results
      return NextResponse.json({
        query,
        results: [],
      } as AgentSearchResponse);
    }

    // Search agent files
    const results = await searchAgentFiles(AGENTS_DIR, AGENTS_DIR, query.trim());

    return NextResponse.json({
      query,
      results,
    } as AgentSearchResponse);
  } catch (error) {
    console.error('Agent search error:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}
