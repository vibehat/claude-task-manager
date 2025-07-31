import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { taskMasterCLI } from '@/libs/server';

export async function GET(_request: NextRequest) {
   try {
      // Check if Task Master is initialized
      const isInitialized = await taskMasterCLI.isInitialized();
      if (!isInitialized) {
         return NextResponse.json(
            { error: 'TaskMaster tasks.json file not found' },
            { status: 404 }
         );
      }

      // Read the tasks data directly for compatibility with existing client code
      const tasksData = await taskMasterCLI.readTasksFile();

      if (!tasksData) {
         return NextResponse.json({ error: 'Failed to read TaskMaster tasks' }, { status: 500 });
      }

      return NextResponse.json(tasksData);
   } catch (error) {
      console.error('Error reading TaskMaster tasks:', error);
      return NextResponse.json({ error: 'Failed to read TaskMaster tasks' }, { status: 500 });
   }
}
