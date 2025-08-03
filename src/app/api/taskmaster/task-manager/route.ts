import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(_request: NextRequest) {
   try {
      // Read the manager data
      const taskManagerPath = join(process.cwd(), '.taskmaster', 'manager', 'manager.json');
      const data = await readFile(taskManagerPath, 'utf-8');
      const taskManagerData = JSON.parse(data);

      // Read the state data and add it to the response
      try {
         const statePath = join(process.cwd(), '.taskmaster', 'state.json');
         const stateData = await readFile(statePath, 'utf-8');
         const taskMasterState = JSON.parse(stateData);
         taskManagerData.taskMasterState = taskMasterState;
      } catch (stateError) {
         console.warn('Could not read TaskMaster state:', stateError);
         // Continue without state data
      }

      return NextResponse.json(taskManagerData);
   } catch (error) {
      console.error('Error reading TaskManager data:', error);
      return NextResponse.json({ error: 'Failed to load TaskManager data' }, { status: 404 });
   }
}
