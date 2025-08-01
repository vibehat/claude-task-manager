import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(_request: NextRequest) {
   try {
      const complexityReportPath = join(
         process.cwd(),
         '.taskmaster',
         'reports',
         'task-complexity-report.json'
      );
      const data = await readFile(complexityReportPath, 'utf-8');
      const complexityReport = JSON.parse(data);

      return NextResponse.json(complexityReport);
   } catch (error) {
      console.error('Error reading complexity report:', error);
      return NextResponse.json({ error: 'Failed to load complexity report' }, { status: 404 });
   }
}
