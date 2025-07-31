import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import { join } from 'path';

export async function GET(request: NextRequest) {
   try {
      const taskManagerJsonPath = join(process.cwd(), '.taskmaster', 'tasks', 'taskmanager.json');

      // Check if file exists
      try {
         await fs.access(taskManagerJsonPath);
      } catch {
         return NextResponse.json({ error: 'TaskManager data file not found' }, { status: 404 });
      }

      // Read and parse the file
      const taskManagerContent = await fs.readFile(taskManagerJsonPath, 'utf-8');
      const taskManagerData = JSON.parse(taskManagerContent);

      return NextResponse.json(taskManagerData);
   } catch (error) {
      console.error('Error reading TaskManager data:', error);
      return NextResponse.json({ error: 'Failed to read TaskManager data' }, { status: 500 });
   }
}

export async function POST(request: NextRequest) {
   try {
      const taskManagerJsonPath = join(process.cwd(), '.taskmaster', 'tasks', 'taskmanager.json');
      const data = await request.json();

      // Update timestamp
      data.metadata = {
         ...data.metadata,
         updated: new Date().toISOString(),
      };

      // Write the updated data back to file
      await fs.writeFile(taskManagerJsonPath, JSON.stringify(data, null, 2), 'utf-8');

      return NextResponse.json({ success: true, message: 'TaskManager data updated' });
   } catch (error) {
      console.error('Error updating TaskManager data:', error);
      return NextResponse.json({ error: 'Failed to update TaskManager data' }, { status: 500 });
   }
}
