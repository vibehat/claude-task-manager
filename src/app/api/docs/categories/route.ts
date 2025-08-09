import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { promises as fsp } from 'fs';
import path from 'path';

const PROJECT_ROOT = process.cwd();
const CONFIG_PATH = path.join(PROJECT_ROOT, '.notes-categories.json');

export async function GET() {
  try {
    const raw = await fsp.readFile(CONFIG_PATH, 'utf-8');
    const json = JSON.parse(raw);
    return NextResponse.json(json);
  } catch {
    return NextResponse.json({
      assignments: {},
      tags: {},
      categories: ['Documentation', 'Implementation Notes', 'Configuration', 'Uncategorized'],
    });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    // Basic validation
    const payload = {
      assignments: body.assignments && typeof body.assignments === 'object' ? body.assignments : {},
      tags: body.tags && typeof body.tags === 'object' ? body.tags : {},
      categories: Array.isArray(body.categories)
        ? body.categories
        : ['Documentation', 'Implementation Notes', 'Configuration', 'Uncategorized'],
    };

    await fsp.writeFile(CONFIG_PATH, JSON.stringify(payload, null, 2), 'utf-8');
    return NextResponse.json({ success: true, config: payload });
  } catch {
    return NextResponse.json({ error: 'Failed to update categories' }, { status: 400 });
  }
}
