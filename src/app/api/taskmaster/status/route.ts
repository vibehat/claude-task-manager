import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { taskMasterCLI } from '@/libs/server';

export async function GET(_request: NextRequest) {
   try {
      // Check if Task Master is initialized
      const isInitialized = await taskMasterCLI.isInitialized();

      if (!isInitialized) {
         return NextResponse.json(
            {
               available: false,
               error: 'TaskMaster tasks.json file not found',
            },
            { status: 404 }
         );
      }

      // Get additional info
      let version: string | undefined;
      let lastModified: string | undefined;
      let path: string | undefined;

      try {
         // Get Task Master version
         version = await taskMasterCLI.getVersion();
      } catch (error) {
         console.warn('Could not get Task Master version:', error);
      }

      try {
         // Get file stats
         const tasksData = await taskMasterCLI.readTasksFile();
         if (tasksData?.master?.metadata?.updated) {
            lastModified = tasksData.master.metadata.updated;
         }
         path = process.cwd() + '/.taskmaster/tasks/tasks.json';
      } catch (error) {
         console.warn('Could not get file stats:', error);
      }

      return NextResponse.json({
         available: true,
         initialized: true,
         version,
         lastModified,
         path,
      });
   } catch (error) {
      console.error('Error checking TaskMaster status:', error);
      return NextResponse.json(
         {
            available: false,
            error: 'Failed to check TaskMaster status',
         },
         { status: 500 }
      );
   }
}
