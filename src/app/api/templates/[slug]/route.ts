import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type {
  Template,
  TemplateContentResponse,
  UpdateTemplateRequest,
} from '@/types/template.types';

const PROJECT_ROOT = process.cwd();
const TEMPLATES_DIR = path.join(PROJECT_ROOT, 'templates');

// Parse template frontmatter and content
function parseTemplate(content: string): {
  metadata: Partial<Template>;
  body: string;
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return {
      metadata: {},
      body: content,
    };
  }

  const frontmatter = match[1];
  const body = match[2];

  const metadata: Partial<Template> = {};

  // Parse simple key-value pairs
  const lines = frontmatter.split('\n');
  for (const line of lines) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      const cleanKey = key.trim();

      if (cleanKey === 'tags') {
        metadata.tags = value
          .split(',')
          .map((tag) => tag.trim())
          .filter(Boolean);
      } else if (cleanKey === 'variables') {
        try {
          metadata.variables = JSON.parse(value);
        } catch {
          // Skip invalid JSON
        }
      } else {
        (metadata as any)[cleanKey] = value;
      }
    }
  }

  return { metadata, body };
}

// Generate template frontmatter
function generateFrontmatter(template: Partial<Template>): string {
  const lines: string[] = ['---'];

  if (template.title) lines.push(`title: ${template.title}`);
  if (template.description) lines.push(`description: ${template.description}`);
  if (template.category) lines.push(`category: ${template.category}`);
  if (template.tags && template.tags.length > 0) {
    lines.push(`tags: ${template.tags.join(', ')}`);
  }
  if (template.variables && template.variables.length > 0) {
    lines.push(`variables: ${JSON.stringify(template.variables)}`);
  }

  lines.push('---', '');
  return lines.join('\n');
}

// Get template file path from slug
function getTemplateFilePath(slug: string): string {
  const safeName = slug.replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();
  return path.join(TEMPLATES_DIR, `${safeName}.md`);
}

// Extract variables from template content
function extractVariables(
  content: string
): Array<{ name: string; type: 'text' | 'date' | 'select' | 'textarea'; label: string }> {
  const variableRegex = /\{\{(\w+)\}\}/g;
  const variables = new Set<string>();
  let match;

  while ((match = variableRegex.exec(content)) !== null) {
    variables.add(match[1]);
  }

  return Array.from(variables).map((name) => ({
    name,
    type: 'text' as const, // Default type
    label: name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, ' '),
  }));
}

export async function GET(
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

    const content = await fs.readFile(filePath, 'utf-8');
    const stats = await fs.stat(filePath);
    const { metadata, body } = parseTemplate(content);

    const template: Template = {
      id: slug,
      name: slug,
      title: metadata.title || slug,
      description: metadata.description,
      category: metadata.category || 'General',
      content: body,
      variables: metadata.variables || extractVariables(body),
      tags: metadata.tags || [],
      createdAt: stats.birthtime.toISOString(),
      updatedAt: stats.mtime.toISOString(),
    };

    const response: TemplateContentResponse = {
      template,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error getting template:', error);
    return NextResponse.json({ error: 'Failed to get template' }, { status: 500 });
  }
}

export async function PUT(
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

    const body: UpdateTemplateRequest = await request.json();

    // Read current template
    const currentContent = await fs.readFile(filePath, 'utf-8');
    const { metadata: currentMetadata, body: currentBody } = parseTemplate(currentContent);

    // Merge updates with current data
    const updatedMetadata: Partial<Template> = {
      ...currentMetadata,
      title: body.title ?? currentMetadata.title,
      description: body.description ?? currentMetadata.description,
      category: body.category ?? currentMetadata.category,
      tags: body.tags ?? currentMetadata.tags,
    };

    const updatedContent = body.content ?? currentBody;

    // Extract variables from updated content
    if (body.content) {
      updatedMetadata.variables = extractVariables(updatedContent);
    }

    const frontmatter = generateFrontmatter(updatedMetadata);
    const fileContent = frontmatter + updatedContent;

    await fs.writeFile(filePath, fileContent, 'utf-8');

    const stats = await fs.stat(filePath);
    const template: Template = {
      id: slug,
      name: slug,
      title: updatedMetadata.title || slug,
      description: updatedMetadata.description,
      category: updatedMetadata.category || 'General',
      content: updatedContent,
      variables: updatedMetadata.variables || [],
      tags: updatedMetadata.tags || [],
      createdAt: stats.birthtime.toISOString(),
      updatedAt: stats.mtime.toISOString(),
    };

    const response: TemplateContentResponse = {
      template,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error updating template:', error);
    return NextResponse.json({ error: 'Failed to update template' }, { status: 500 });
  }
}

export async function DELETE(
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

    await fs.unlink(filePath);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting template:', error);
    return NextResponse.json({ error: 'Failed to delete template' }, { status: 500 });
  }
}
