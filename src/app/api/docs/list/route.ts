import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { promises as fsp } from 'fs';
import type { Dirent } from 'fs';
import path from 'path';

// Basic config
const PROJECT_ROOT = process.cwd();
const ALLOWED_EXTENSIONS = new Set(['.md', '.mdx']);
const IGNORE_DIRS = new Set([
  'node_modules',
  '.next',
  'dist',
  'build',
  '.git',
  '.turbo',
  'coverage',
]);

interface DocFileInfo {
  path: string; // relative to project root
  name: string;
  directory: string;
  size: number;
  lastModified: string;
  title?: string;
  snippet?: string;
  tags?: string[];
  category: {
    type: 'auto' | 'manual' | 'uncategorized';
    name?: string;
  };
}

interface CategoriesConfig {
  assignments?: Record<string, string>; // exact relative path -> category name
  tags?: Record<string, string[]>; // exact relative path -> tags
  categories?: string[]; // known categories
}

const CATEGORIES_FILE = path.join(PROJECT_ROOT, '.notes-categories.json');

function isIgnoredDir(dirName: string): boolean {
  return IGNORE_DIRS.has(dirName);
}

function isMarkdownFile(fileName: string): boolean {
  const ext = path.extname(fileName).toLowerCase();
  return ALLOWED_EXTENSIONS.has(ext);
}

async function readCategoriesConfig(): Promise<CategoriesConfig> {
  try {
    const raw = await fsp.readFile(CATEGORIES_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {
      assignments: {},
      tags: {},
      categories: ['Documentation', 'Implementation Notes', 'Configuration', 'Uncategorized'],
    };
  }
}

function autoDetectCategory(relativeFilePath: string, fileName: string): string | undefined {
  // Simple auto rules inspired by wireframes
  if (fileName === 'README.md' || relativeFilePath.startsWith('docs/')) return 'Documentation';
  if (/^CHANGELOG\.md$/i.test(fileName) || /license/i.test(fileName)) return 'Documentation';
  if (/setup|install|config/i.test(fileName) || relativeFilePath.startsWith('scripts/'))
    return 'Configuration';
  if (/notes|decision|adr|pattern/i.test(fileName) || relativeFilePath.startsWith('src/'))
    return 'Implementation Notes';
  return undefined;
}

async function extractTitleAndSnippet(
  absPath: string
): Promise<{ title?: string; snippet?: string }> {
  try {
    const content = await fsp.readFile(absPath, 'utf-8');
    const lines = content.split('\n');
    // Title = first markdown header or first non-empty line
    const titleLine =
      lines.find((l) => /^\s*#\s+/.test(l)) || lines.find((l) => l.trim().length > 0);
    let title: string | undefined = undefined;
    if (titleLine) {
      title = titleLine
        .replace(/^\s*#\s+/, '')
        .trim()
        .slice(0, 200);
    }
    // Snippet = next few non-empty lines
    const snippet = lines
      .filter((l) => l.trim().length > 0)
      .slice(1, 6)
      .join(' ')
      .slice(0, 300);
    return { title, snippet };
  } catch {
    return {};
  }
}

async function scanMarkdownFiles(startDir: string, baseDir: string): Promise<string[]> {
  const found: string[] = [];

  async function traverse(current: string) {
    let entries: Dirent[] = [];
    try {
      entries = (await fsp.readdir(current, { withFileTypes: true })) as unknown as Dirent[];
    } catch {
      return;
    }

    for (const entry of entries) {
      const abs = path.join(current, entry.name);
      const rel = path.relative(baseDir, abs);
      if (entry.isDirectory()) {
        if (!isIgnoredDir(entry.name)) {
          await traverse(abs);
        }
      } else if (entry.isFile()) {
        if (isMarkdownFile(entry.name)) {
          found.push(rel);
        }
      }
    }
  }

  await traverse(startDir);
  return found.sort((a, b) => a.localeCompare(b));
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get('limit');
    const limit = limitParam ? Math.max(1, Math.min(2000, Number(limitParam))) : undefined;

    const categoriesConfig = await readCategoriesConfig();

    const mdFiles = await scanMarkdownFiles(PROJECT_ROOT, PROJECT_ROOT);
    const limitedFiles = limit ? mdFiles.slice(0, limit) : mdFiles;

    const results: DocFileInfo[] = [];

    for (const relPath of limitedFiles) {
      const absPath = path.join(PROJECT_ROOT, relPath);
      try {
        const stats = await fsp.stat(absPath);
        const { title, snippet } = await extractTitleAndSnippet(absPath);

        const manualCategory = categoriesConfig.assignments?.[relPath];
        const autoCategory = autoDetectCategory(relPath, path.basename(relPath));

        const category = manualCategory
          ? { type: 'manual' as const, name: manualCategory }
          : autoCategory
            ? { type: 'auto' as const, name: autoCategory }
            : { type: 'uncategorized' as const };

        results.push({
          path: relPath,
          name: path.basename(relPath),
          directory: path.dirname(relPath),
          size: stats.size,
          lastModified: stats.mtime.toISOString(),
          title,
          snippet,
          tags: categoriesConfig.tags?.[relPath] ?? [],
          category,
        });
      } catch {
        // skip unreadable file
      }
    }

    const categories = Array.from(
      new Set([
        ...(categoriesConfig.categories ?? []),
        ...results.map((r) => r.category.name).filter((v): v is string => typeof v === 'string'),
        'Uncategorized',
      ])
    );

    return NextResponse.json({ files: results, categories });
  } catch (error) {
    console.error('Docs list error', error);
    return NextResponse.json({ error: 'Failed to list docs' }, { status: 500 });
  }
}
