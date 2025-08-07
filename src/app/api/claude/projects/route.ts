/**
 * Claude Projects API Endpoints
 * GET /api/claude/projects - List all Claude Code projects
 */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ClaudeLogService } from '@/libs/client/services/claudeLogService';
import type { ProjectListResponse, APIErrorResponse } from '@/libs/client/types/claude-history';

const claudeLogService = new ClaudeLogService();

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);

    // Parse query parameters for future filtering
    const includeInactive = searchParams.get('includeInactive') === 'true';
    const sortBy = searchParams.get('sortBy') || 'lastActivity'; // lastActivity, sessionCount, name
    const sortOrder = searchParams.get('sortOrder') || 'desc'; // asc, desc

    // Get all projects from Claude Log Service
    let projects = await claudeLogService.getProjects();

    // Apply filters
    if (!includeInactive) {
      projects = projects.filter((project) => project.isActive);
    }

    // Apply sorting
    projects.sort((a, b) => {
      let aVal: any, bVal: any;

      switch (sortBy) {
        case 'lastActivity':
          aVal = new Date(a.lastActivity).getTime();
          bVal = new Date(b.lastActivity).getTime();
          break;
        case 'sessionCount':
          aVal = a.sessionCount;
          bVal = b.sessionCount;
          break;
        case 'name':
          aVal = a.name.toLowerCase();
          bVal = b.name.toLowerCase();
          break;
        case 'firstActivity':
          aVal = new Date(a.firstActivity).getTime();
          bVal = new Date(b.firstActivity).getTime();
          break;
        default:
          aVal = new Date(a.lastActivity).getTime();
          bVal = new Date(b.lastActivity).getTime();
      }

      const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    const response: ProjectListResponse = {
      projects,
      total: projects.length,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in GET /api/claude/projects:', error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'PROJECTS_FETCH_ERROR',
        message: 'Failed to fetch Claude projects',
        details: { error: String(error) },
      },
      timestamp: new Date().toISOString(),
      path: request.url,
      method: 'GET',
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

/**
 * OPTIONS - Handle CORS preflight requests
 */
export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
