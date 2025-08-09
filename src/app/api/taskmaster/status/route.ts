import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { taskMasterCLI } from '@/libs/server/taskmaster';

export async function GET(_request: NextRequest) {
  try {
    const initialized = await taskMasterCLI.isInitialized();
    const version = await taskMasterCLI.getVersion().catch(() => null);

    return NextResponse.json({
      initialized,
      version,
      cwd: process.cwd(),
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
