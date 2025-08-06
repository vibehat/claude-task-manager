/**
 * Claude Sessions API Endpoints
 * GET /api/claude/sessions - List all Claude Code sessions with filtering and pagination
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

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);

    // Parse query parameters
    const query: SessionListQuery = {
      project: searchParams.get('project') || undefined,
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

    // Get sessions from Claude Log Service without pagination (we'll handle pagination here)
    const queryWithoutPagination = { ...query };
    delete queryWithoutPagination.offset;
    delete queryWithoutPagination.limit;

    const allSessions = query.project
      ? await claudeLogService.getProjectSessions(query.project, queryWithoutPagination)
      : await claudeLogService.getAllSessions(queryWithoutPagination);

    // Apply pagination
    const sessions = allSessions.slice(query.offset, query.offset + query.limit);

    // Check if there are more results
    const nextBatch = allSessions.slice(query.offset + query.limit, query.offset + query.limit * 2);

    const response: SessionListResponse = {
      sessions,
      total: allSessions.length,
      hasMore: nextBatch.length > 0,
      nextOffset: nextBatch.length > 0 ? query.offset + query.limit : undefined,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in GET /api/claude/sessions:', error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'SESSIONS_FETCH_ERROR',
        message: 'Failed to fetch Claude sessions',
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
 * POST /api/claude/sessions - Create or import a new session
 * This endpoint is for future use when we want to manually create sessions
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // For now, return method not allowed
    const errorResponse: APIErrorResponse = {
      error: {
        code: 'METHOD_NOT_IMPLEMENTED',
        message: 'Session creation not yet implemented',
        details: { method: 'POST' },
      },
      timestamp: new Date().toISOString(),
      path: request.url,
      method: 'POST',
    };

    return NextResponse.json(errorResponse, { status: 501 });
  } catch (error) {
    console.error('Error in POST /api/claude/sessions:', error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'SESSIONS_CREATE_ERROR',
        message: 'Failed to create Claude session',
        details: { error: String(error) },
      },
      timestamp: new Date().toISOString(),
      path: request.url,
      method: 'POST',
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
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
