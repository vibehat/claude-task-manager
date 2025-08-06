/**
 * Project-specific Claude Sessions API Endpoints
 * GET /api/claude/projects/[project]/sessions - List sessions for a specific project
 */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ClaudeLogService } from '@/libs/client/services/claudeLogService';
import type {
  SessionListQuery,
  SessionListResponse,
  APIErrorResponse,
} from '@/libs/client/types/claude-history';

const claudeLogService = new ClaudeLogService();

interface RouteParams {
  params: { project: string };
}

export async function GET(request: NextRequest, { params }: RouteParams): Promise<NextResponse> {
  try {
    const projectId = decodeURIComponent(params.project);

    if (!projectId) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_PROJECT_ID',
          message: 'Project ID is required',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'GET',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    const { searchParams } = new URL(request.url);

    // Parse query parameters
    const query: SessionListQuery = {
      project: projectId,
      limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 20,
      offset: searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0,
      sortBy: (searchParams.get('sortBy') as SessionListQuery['sortBy']) || 'startTime',
      sortOrder: (searchParams.get('sortOrder') as SessionListQuery['sortOrder']) || 'desc',
      isBookmarked: searchParams.get('isBookmarked')
        ? searchParams.get('isBookmarked') === 'true'
        : undefined,
      isArchived: searchParams.get('isArchived')
        ? searchParams.get('isArchived') === 'true'
        : undefined,
      dateFrom: searchParams.get('dateFrom') || undefined,
      dateTo: searchParams.get('dateTo') || undefined,
    };

    // Parse tags if provided
    const tagsParam = searchParams.get('tags');
    if (tagsParam) {
      query.tags = tagsParam.split(',').filter((tag) => tag.trim());
    }

    // Get sessions for the specific project
    const sessions = await claudeLogService.getProjectSessions(projectId, query);

    // Check if there are more results for pagination
    const nextQuery = { ...query, offset: (query.offset || 0) + (query.limit || 20) };
    const nextBatch = await claudeLogService.getProjectSessions(projectId, {
      ...nextQuery,
      limit: 1,
    });

    const response: SessionListResponse = {
      sessions,
      total: sessions.length,
      hasMore: nextBatch.length > 0,
      nextOffset: nextBatch.length > 0 ? nextQuery.offset : undefined,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error(`Error in GET /api/claude/projects/${params.project}/sessions:`, error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'PROJECT_SESSIONS_FETCH_ERROR',
        message: 'Failed to fetch project sessions',
        details: { projectId: params.project, error: String(error) },
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
