import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { taskMasterCLI } from '@/libs/server';

export async function PUT(request: NextRequest): Promise<NextResponse> {
   try {
      const body = await request.json();
      const { taskId, subtaskId, status } = body;

      if (!taskId || !status) {
         return NextResponse.json({ error: 'taskId and status are required' }, { status: 400 });
      }

      // Check if Task Master is initialized
      const isInitialized = await taskMasterCLI.isInitialized();
      if (!isInitialized) {
         return NextResponse.json({ error: 'Task Master not initialized' }, { status: 503 });
      }

      // Map UI status to TaskMaster status
      const taskMasterStatus = mapUIStatusToTaskMasterStatus(status);
      if (!taskMasterStatus) {
         return NextResponse.json({ error: `Unsupported status: ${status}` }, { status: 400 });
      }

      // Determine the ID to update (subtask or main task)
      const targetId = subtaskId || taskId.toString();

      // Update the task status in Task Master
      const result = await taskMasterCLI.setTaskStatus(targetId, taskMasterStatus);

      if (result.exitCode !== 0) {
         console.error('TaskMaster status update failed:', result.stderr);
         return NextResponse.json(
            {
               error: 'Failed to update TaskMaster status',
               details: result.stderr,
            },
            { status: 500 }
         );
      }

      // Log the successful update for implementation tracking
      if (subtaskId) {
         await taskMasterCLI.updateSubtask(
            subtaskId,
            `Status updated to '${taskMasterStatus}' via UI at ${new Date().toISOString()}`
         );
      }

      return NextResponse.json({
         success: true,
         taskId,
         subtaskId,
         status: taskMasterStatus,
         message: 'TaskMaster status updated successfully',
         timestamp: new Date().toISOString(),
      });
   } catch (error) {
      console.error('TaskMaster status update error:', error);
      return NextResponse.json(
         {
            error: 'Internal server error',
            message: error instanceof Error ? error.message : 'Unknown error',
         },
         { status: 500 }
      );
   }
}

/**
 * Map UI status IDs to TaskMaster status values
 */
function mapUIStatusToTaskMasterStatus(uiStatus: string): string | null {
   const statusMap: Record<string, string> = {
      // UI Status ID -> TaskMaster Status
      'status-1': 'pending', // backlog -> pending
      'status-2': 'pending', // todo -> pending
      'status-3': 'in-progress', // in_progress -> in-progress
      'status-4': 'done', // done -> done
      'status-5': 'cancelled', // cancelled -> cancelled

      // Additional mappings for common status names
      'backlog': 'pending',
      'todo': 'pending',
      'to-do': 'pending',
      'in_progress': 'in-progress',
      'in-progress': 'in-progress',
      'done': 'done',
      'completed': 'done',
      'cancelled': 'cancelled',
      'canceled': 'cancelled',
      'deferred': 'deferred',
      'blocked': 'blocked',
   };

   return statusMap[uiStatus.toLowerCase()] || null;
}

/**
 * Get supported status mappings
 */
export async function GET(): Promise<NextResponse> {
   return NextResponse.json({
      success: true,
      statusMappings: {
         'status-1': 'pending', // backlog
         'status-2': 'pending', // todo
         'status-3': 'in-progress', // in_progress
         'status-4': 'done', // done
         'status-5': 'cancelled', // cancelled
      },
      taskMasterStatuses: ['pending', 'in-progress', 'done', 'deferred', 'cancelled', 'blocked'],
      description: 'TaskMaster status update endpoint mappings',
   });
}
