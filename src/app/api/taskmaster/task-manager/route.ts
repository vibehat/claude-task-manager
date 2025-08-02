import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(_request: NextRequest) {
   try {
      const taskManagerPath = join(process.cwd(), '.taskmaster', 'manager', 'manager.json');
      const data = await readFile(taskManagerPath, 'utf-8');
      const taskManagerData = JSON.parse(data);

      return NextResponse.json(taskManagerData);
   } catch (error) {
      console.error('Error reading TaskManager data:', error);
      return NextResponse.json({ error: 'Failed to load TaskManager data' }, { status: 404 });
   }
}
