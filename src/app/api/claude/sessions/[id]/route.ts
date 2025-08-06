/**
 * Claude Session Detail API Endpoints
 * GET /api/claude/sessions/[id] - Get detailed information about a specific session
 */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ClaudeLogService } from '@/libs/client/services/claudeLogService';
import type { SessionDetailResponse, APIErrorResponse } from '@/libs/client/types/claude-history';

const claudeLogService = new ClaudeLogService();

interface RouteParams {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: RouteParams): Promise<NextResponse> {
  try {
    const { id: sessionId } = await params;

    if (!sessionId) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_SESSION_ID',
          message: 'Session ID is required',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'GET',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Get detailed session data with real messages
    const sessionDetail = await claudeLogService.getSessionDetail(sessionId);

    if (!sessionDetail) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'SESSION_NOT_FOUND',
          message: `Session with ID ${sessionId} not found`,
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'GET',
      };

      return NextResponse.json(errorResponse, { status: 404 });
    }

    const response: SessionDetailResponse = {
      session: sessionDetail.session,
      messages: sessionDetail.messages,
    };

    // Add cache headers
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=600', // 10 minutes (session details are stable)
    });

    return new NextResponse(JSON.stringify(response), { headers });
  } catch (error) {
    console.error(`Error in GET /api/claude/sessions/${params.id}:`, error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'SESSION_FETCH_ERROR',
        message: 'Failed to fetch session details',
        details: { sessionId: params.id, error: String(error) },
      },
      timestamp: new Date().toISOString(),
      path: request.url,
      method: 'GET',
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

/**
 * PUT /api/claude/sessions/[id] - Update session metadata
 */
export async function PUT(request: NextRequest, { params }: RouteParams): Promise<NextResponse> {
  try {
    const { id: sessionId } = await params;

    if (!sessionId) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_SESSION_ID',
          message: 'Session ID is required',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'PUT',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Parse request body
    const body = await request.json();

    // For now, return method not implemented
    // In the future, this would update session metadata like bookmarks, tags, etc.
    const errorResponse: APIErrorResponse = {
      error: {
        code: 'METHOD_NOT_IMPLEMENTED',
        message: 'Session update not yet implemented',
        details: { sessionId, updates: body },
      },
      timestamp: new Date().toISOString(),
      path: request.url,
      method: 'PUT',
    };

    return NextResponse.json(errorResponse, { status: 501 });
  } catch (error) {
    console.error(`Error in PUT /api/claude/sessions/${params.id}:`, error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'SESSION_UPDATE_ERROR',
        message: 'Failed to update session',
        details: { sessionId: params.id, error: String(error) },
      },
      timestamp: new Date().toISOString(),
      path: request.url,
      method: 'PUT',
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

/**
 * DELETE /api/claude/sessions/[id] - Delete or archive session
 */
export async function DELETE(request: NextRequest, { params }: RouteParams): Promise<NextResponse> {
  try {
    const { id: sessionId } = await params;

    if (!sessionId) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_SESSION_ID',
          message: 'Session ID is required',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'DELETE',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    // For now, return method not implemented
    // In the future, this would archive or delete sessions
    const errorResponse: APIErrorResponse = {
      error: {
        code: 'METHOD_NOT_IMPLEMENTED',
        message: 'Session deletion not yet implemented',
        details: { sessionId },
      },
      timestamp: new Date().toISOString(),
      path: request.url,
      method: 'DELETE',
    };

    return NextResponse.json(errorResponse, { status: 501 });
  } catch (error) {
    console.error(`Error in DELETE /api/claude/sessions/${params.id}:`, error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'SESSION_DELETE_ERROR',
        message: 'Failed to delete session',
        details: { sessionId: params.id, error: String(error) },
      },
      timestamp: new Date().toISOString(),
      path: request.url,
      method: 'DELETE',
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
      'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
