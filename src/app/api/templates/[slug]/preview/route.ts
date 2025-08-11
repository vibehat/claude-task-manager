import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { TemplatePreviewRequest, TemplatePreviewResponse } from '@/types/template.types';

const PROJECT_ROOT = process.cwd();
const TEMPLATES_DIR = path.join(PROJECT_ROOT, 'templates');

// Get template file path from slug
function getTemplateFilePath(slug: string): string {
  const safeName = slug.replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();
  return path.join(TEMPLATES_DIR, `${safeName}.md`);
}

// Replace template variables with provided values
function replaceVariables(content: string, variables: Record<string, string>): string {
  let result = content;

  // Replace all {{variable}} patterns
  for (const [key, value] of Object.entries(variables)) {
    const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
    result = result.replace(regex, value || `{{${key}}}`);
  }

  return result;
}

// Extract title from content (first heading or use default)
function extractTitle(content: string, defaultTitle: string): string {
  const lines = content.split('\n');
  const titleLine = lines.find((line) => /^\s*#\s+/.test(line));

  if (titleLine) {
    return titleLine.replace(/^\s*#\s+/, '').trim();
  }

  // Look for non-empty first line as fallback
  const firstLine = lines.find((line) => line.trim().length > 0);
  if (firstLine && !firstLine.startsWith('---')) {
    return firstLine.trim().slice(0, 100);
  }

  return defaultTitle;
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
): Promise<NextResponse> {
  try {
    const { slug } = await params;
    const filePath = getTemplateFilePath(slug);

    // Check if template exists
    try {
      await fs.access(filePath);
    } catch {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }

    const body: TemplatePreviewRequest = await request.json();

    // Read template content
    const fileContent = await fs.readFile(filePath, 'utf-8');

    // Extract content after frontmatter
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = fileContent.match(frontmatterRegex);
    const templateContent = match ? match[2] : fileContent;

    // Replace variables in content
    const processedContent = replaceVariables(templateContent, body.variables);

    // Extract title from processed content
    const title = extractTitle(processedContent, slug);

    const response: TemplatePreviewResponse = {
      preview: processedContent,
      title,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error generating template preview:', error);
    return NextResponse.json({ error: 'Failed to generate template preview' }, { status: 500 });
  }
}
