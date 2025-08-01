import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(_request: NextRequest) {
   try {
      const tasksPath = join(process.cwd(), '.taskmaster', 'tasks', 'tasks.json');
      const data = await readFile(tasksPath, 'utf-8');
      const tasksData = JSON.parse(data);

      return NextResponse.json(tasksData);
   } catch (error) {
      console.error('Error reading TaskMaster tasks:', error);
      return NextResponse.json({ error: 'Failed to load TaskMaster tasks' }, { status: 404 });
   }
}
