import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(_request: NextRequest) {
   try {
      const statePath = join(process.cwd(), '.taskmaster', 'state.json');
      const data = await readFile(statePath, 'utf-8');
      const stateData = JSON.parse(data);

      return NextResponse.json(stateData);
   } catch (error) {
      console.error('Error reading TaskMaster state:', error);
      return NextResponse.json({ error: 'Failed to load TaskMaster state' }, { status: 404 });
   }
}
