import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type {
  Template,
  TemplateMetadata,
  TemplateListResponse,
  CreateTemplateRequest,
} from '@/types/template.types';

const PROJECT_ROOT = process.cwd();
const TEMPLATES_DIR = path.join(PROJECT_ROOT, 'templates');

// Ensure templates directory exists
async function ensureTemplatesDir(): Promise<void> {
  try {
    await fs.access(TEMPLATES_DIR);
  } catch {
    await fs.mkdir(TEMPLATES_DIR, { recursive: true });
  }
}

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
        // Parse tags as array
        metadata.tags = value
          .split(',')
          .map((tag) => tag.trim())
          .filter(Boolean);
      } else if (cleanKey === 'variables') {
        // Parse variables (simplified for now)
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

// Get template file path from name
function getTemplateFilePath(name: string): string {
  const safeName = name.replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();
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

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    await ensureTemplatesDir();

    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
    const category = searchParams.get('category');

    const files = await fs.readdir(TEMPLATES_DIR);
    const templateFiles = files.filter((file) => file.endsWith('.md'));

    const templates: TemplateMetadata[] = [];
    const categories = new Set<string>();

    for (const file of templateFiles) {
      const filePath = path.join(TEMPLATES_DIR, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const stats = await fs.stat(filePath);
      const { metadata } = parseTemplate(content);

      const name = path.basename(file, '.md');
      const template: TemplateMetadata = {
        id: name,
        name,
        title: metadata.title || name,
        description: metadata.description,
        category: metadata.category || 'General',
        tags: metadata.tags || [],
        createdAt: stats.birthtime.toISOString(),
        updatedAt: stats.mtime.toISOString(),
        variableCount: metadata.variables?.length || 0,
      };

      // Filter by category if specified
      if (!category || template.category === category) {
        templates.push(template);
      }

      if (template.category) {
        categories.add(template.category);
      }
    }

    // Sort by updated date (newest first)
    templates.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

    // Apply limit if specified
    const limitedTemplates = limit ? templates.slice(0, limit) : templates;

    const response: TemplateListResponse = {
      templates: limitedTemplates,
      categories: Array.from(categories).sort(),
      totalCount: templates.length,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error listing templates:', error);
    return NextResponse.json({ error: 'Failed to list templates' }, { status: 500 });
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    await ensureTemplatesDir();

    const body: CreateTemplateRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.title || !body.content) {
      return NextResponse.json(
        { error: 'Missing required fields: name, title, content' },
        { status: 400 }
      );
    }

    const filePath = getTemplateFilePath(body.name);

    // Check if template already exists
    try {
      await fs.access(filePath);
      return NextResponse.json(
        { error: 'Template with this name already exists' },
        { status: 409 }
      );
    } catch {
      // File doesn't exist, which is what we want
    }

    // Extract variables from content
    const detectedVariables = extractVariables(body.content);

    const template: Partial<Template> = {
      title: body.title,
      description: body.description,
      category: body.category || 'General',
      tags: body.tags || [],
      variables: detectedVariables,
    };

    const frontmatter = generateFrontmatter(template);
    const fileContent = frontmatter + body.content;

    await fs.writeFile(filePath, fileContent, 'utf-8');

    const stats = await fs.stat(filePath);
    const createdTemplate: TemplateMetadata = {
      id: body.name,
      name: body.name,
      title: body.title,
      description: body.description,
      category: body.category || 'General',
      tags: body.tags || [],
      createdAt: stats.birthtime.toISOString(),
      updatedAt: stats.mtime.toISOString(),
      variableCount: detectedVariables.length,
    };

    return NextResponse.json({ template: createdTemplate }, { status: 201 });
  } catch (error) {
    console.error('Error creating template:', error);
    return NextResponse.json({ error: 'Failed to create template' }, { status: 500 });
  }
}
