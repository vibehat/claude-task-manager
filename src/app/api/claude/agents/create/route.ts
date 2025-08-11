import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { promises as fsp } from 'fs';
import path from 'path';
import type { CreateAgentRequest, ApiSuccessResponse } from '@/features/agents/types/agent.types';

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

/**
 * Generate default agent template content
 */
function generateDefaultTemplate(fileName: string): string {
  const baseName = path.basename(fileName, '.md');
  const agentName = baseName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return `---
name: ${agentName}
description: A helpful AI assistant for specific tasks
model: claude-3-5-sonnet-20241022
role: system
temperature: 0.7
tools: []
memory:
  scope: project
  paths: []
tags: []
visibility: team
version: 1
---

# ${agentName}

## Purpose
Describe what this agent is designed to help with.

## Guidelines
- Be helpful and accurate
- Follow best practices
- Ask clarifying questions when needed

## Examples
Provide examples of how to interact with this agent.
`;
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateAgentRequest = await request.json();
    const { path: relPath, content } = body;

    if (!relPath || typeof relPath !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid path' }, { status: 400 });
    }

    if (!isPathSafe(relPath)) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 403 });
    }

    const absPath = path.join(AGENTS_DIR, relPath);

    // Check if file already exists
    try {
      await fsp.access(absPath);
      return NextResponse.json({ error: 'Agent already exists' }, { status: 409 });
    } catch {
      // File doesn't exist, which is what we want
    }

    // Ensure the directory exists
    const dir = path.dirname(absPath);
    await fsp.mkdir(dir, { recursive: true });

    // Use provided content or generate default template
    const fileContent = content || generateDefaultTemplate(relPath);

    // Write the file
    await fsp.writeFile(absPath, fileContent, 'utf-8');

    return NextResponse.json({
      success: true,
      path: relPath,
    } as ApiSuccessResponse);
  } catch (error) {
    console.error('Agent create error:', error);
    return NextResponse.json({ error: 'Failed to create agent' }, { status: 500 });
  }
}
