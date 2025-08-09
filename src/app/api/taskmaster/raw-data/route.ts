import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { taskMasterCLI } from '@/libs/server/taskmaster';

export async function GET(_request: NextRequest) {
  try {
    const initialized = await taskMasterCLI.isInitialized();
    if (!initialized) {
      return NextResponse.json({ tasks: [], metadata: { initialized: false } });
    }

    const data = await taskMasterCLI.readTasksFile();
    const tasks = data?.master?.tasks ?? [];
    const metadata = data?.master?.metadata ?? { created: '', updated: '', description: '' };
    return NextResponse.json({ tasks, metadata });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
