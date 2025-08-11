import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { promises as fsp } from 'fs';
import type { Dirent } from 'fs';
import path from 'path';
import type { AgentFileSummary, AgentsListResponse } from '@/features/agents/types/agent.types';

// Basic config
const PROJECT_ROOT = process.cwd();
const AGENTS_DIR = path.join(PROJECT_ROOT, '.claude', 'agents');

interface ParsedFrontmatter {
  name?: string;
  description?: string;
  model?: string;
  role?: string;
  tags?: string[];
}

/**
 * Simple frontmatter parser - extracts YAML between --- blocks
 */
function parseFrontmatter(content: string): ParsedFrontmatter | null {
  const lines = content.split('\n');

  // Find frontmatter boundaries
  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === '---') {
      if (startIndex === -1) {
        startIndex = i;
      } else if (endIndex === -1) {
        endIndex = i;
        break;
      }
    }
  }

  if (startIndex === -1 || endIndex === -1 || endIndex <= startIndex + 1) {
    return null;
  }

  // Extract frontmatter content
  const frontmatterLines = lines.slice(startIndex + 1, endIndex);
  const frontmatterContent = frontmatterLines.join('\n');

  try {
    // Simple YAML parsing for key: value pairs
    const result: ParsedFrontmatter = {};
    const yamlLines = frontmatterContent.split('\n');

    for (const line of yamlLines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;

      const colonIndex = trimmed.indexOf(':');
      if (colonIndex === -1) continue;

      const key = trimmed.substring(0, colonIndex).trim();
      const value = trimmed.substring(colonIndex + 1).trim();

      if (!value) continue;

      // Handle different value types
      if (key === 'tags' && value.startsWith('[') && value.endsWith(']')) {
        // Parse array syntax: [item1, item2, item3]
        const arrayContent = value.slice(1, -1);
        const tags = arrayContent
          .split(',')
          .map((tag) => tag.trim().replace(/^['"]|['"]$/g, ''))
          .filter((tag) => tag.length > 0);
        result.tags = tags;
      } else {
        // Remove quotes if present
        const cleanValue = value.replace(/^['"]|['"]$/g, '');
        (result as any)[key] = cleanValue;
      }
    }

    return result;
  } catch {
    return null;
  }
}

/**
 * Check if path is safely within the agents directory
 */
function isPathSafe(resolvedPath: string): boolean {
  return resolvedPath.startsWith(AGENTS_DIR);
}

/**
 * Recursively scan for .md files in agents directory
 */
async function scanAgentFiles(startDir: string, baseDir: string): Promise<string[]> {
  const found: string[] = [];

  async function traverse(current: string) {
    let entries: Dirent[] = [];
    try {
      entries = (await fsp.readdir(current, { withFileTypes: true })) as unknown as Dirent[];
    } catch {
      return;
    }

    for (const entry of entries) {
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
        found.push(relPath);
      }
    }
  }

  await traverse(startDir);
  return found.sort((a, b) => a.localeCompare(b));
}

export async function GET(request: NextRequest) {
  try {
    // Ensure agents directory exists
    try {
      await fsp.access(AGENTS_DIR);
    } catch {
      // Directory doesn't exist, return empty list
      return NextResponse.json({ items: [] } as AgentsListResponse);
    }

    // Scan for agent files
    const agentFiles = await scanAgentFiles(AGENTS_DIR, AGENTS_DIR);
    const results: AgentFileSummary[] = [];

    for (const relPath of agentFiles) {
      const absPath = path.join(AGENTS_DIR, relPath);

      try {
        const stats = await fsp.stat(absPath);
        const content = await fsp.readFile(absPath, 'utf-8');

        // Parse frontmatter to extract metadata
        const frontmatter = parseFrontmatter(content);

        results.push({
          path: relPath,
          name: frontmatter?.name,
          description: frontmatter?.description,
          tags: frontmatter?.tags,
          model: frontmatter?.model,
          role: frontmatter?.role,
          lastModified: stats.mtime.toISOString(),
        });
      } catch {
        // Skip unreadable files
        continue;
      }
    }

    // Sort by last modified (newest first)
    results.sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime());

    return NextResponse.json({ items: results } as AgentsListResponse);
  } catch (error) {
    console.error('Agents list error:', error);
    return NextResponse.json({ error: 'Failed to list agents' }, { status: 500 });
  }
}
