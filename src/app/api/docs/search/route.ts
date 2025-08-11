import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { promises as fsp } from 'fs';
import path from 'path';

const PROJECT_ROOT = process.cwd();

async function listMarkdownFiles(root: string): Promise<string[]> {
  const result: string[] = [];
  const IGNORE = new Set(['node_modules', '.next', 'dist', 'build', '.git', '.turbo', 'coverage']);
  const exts = new Set(['.md', '.mdx']);

  async function traverse(dir: string) {
    let entries: any[] = [];
    try {
      entries = (await fsp.readdir(dir, { withFileTypes: true })) as any[];
    } catch {
      return;
    }

    for (const entry of entries) {
      const abs = path.join(dir, entry.name);
      const rel = path.relative(root, abs);
      if (entry.isDirectory()) {
        if (!IGNORE.has(entry.name)) {
          await traverse(abs);
        }
      } else if (entry.isFile()) {
        if (exts.has(path.extname(entry.name).toLowerCase())) {
          result.push(rel);
        }
      }
    }
  }

  await traverse(root);
  return result;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get('q') || '').trim();
    if (!q) {
      return NextResponse.json({ query: q, results: [] });
    }

    const paths = await listMarkdownFiles(PROJECT_ROOT);

    const results: Array<{ path: string; title?: string; match?: string }> = [];
    const qLower = q.toLowerCase();

    for (const rel of paths) {
      try {
        const abs = path.join(PROJECT_ROOT, rel);
        const content = await fsp.readFile(abs, 'utf-8');
        const contentLower = content.toLowerCase();
        if (contentLower.includes(qLower) || rel.toLowerCase().includes(qLower)) {
          const titleLine = content.split('\n').find((l) => /^\s*#\s+/.test(l)) || undefined;
          const title = titleLine
            ? titleLine
                .replace(/^\s*#\s+/, '')
                .trim()
                .slice(0, 200)
            : undefined;
          const idx = contentLower.indexOf(qLower);
          const start = Math.max(0, idx - 50);
          const end = Math.min(content.length, idx + q.length + 50);
          const excerpt = content.slice(start, end).replace(/\n/g, ' ');
          results.push({ path: rel, title, match: excerpt });
        }
      } catch {
        // skip
      }
    }

    return NextResponse.json({ query: q, results });
  } catch {
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}
