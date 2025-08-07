/**
 * Session Bookmark API Endpoints
 * POST/DELETE /api/claude/sessions/[id]/bookmark - Manage session bookmarks
 */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import type { SessionBookmarkRequest, APIErrorResponse } from '@/libs/client/types/claude-history';
import { ClaudeBookmarkService } from '@/libs/client/services/claudeBookmarkService';

const bookmarkService = new ClaudeBookmarkService();

interface RouteParams {
  params: { id: string };
}

export async function POST(request: NextRequest, { params }: RouteParams): Promise<NextResponse> {
  try {
    const sessionId = params.id;

    if (!sessionId) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_SESSION_ID',
          message: 'Session ID is required',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'POST',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    const body: SessionBookmarkRequest = await request.json();

    // Set bookmark status
    await bookmarkService.setBookmark(sessionId, body.isBookmarked, body.tags);

    const response = {
      success: true,
      sessionId,
      isBookmarked: body.isBookmarked,
      tags: body.tags || [],
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error(`Error in POST /api/claude/sessions/${params.id}/bookmark:`, error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'BOOKMARK_ERROR',
        message: 'Failed to update session bookmark',
        details: { sessionId: params.id, error: String(error) },
      },
      timestamp: new Date().toISOString(),
      path: request.url,
      method: 'POST',
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams): Promise<NextResponse> {
  try {
    const sessionId = params.id;

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

    // Remove bookmark
    await bookmarkService.setBookmark(sessionId, false);

    const response = {
      success: true,
      sessionId,
      isBookmarked: false,
      tags: [],
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error(`Error in DELETE /api/claude/sessions/${params.id}/bookmark:`, error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'BOOKMARK_REMOVE_ERROR',
        message: 'Failed to remove session bookmark',
        details: { sessionId: params.id, error: String(error) },
      },
      timestamp: new Date().toISOString(),
      path: request.url,
      method: 'DELETE',
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

export async function GET(request: NextRequest, { params }: RouteParams): Promise<NextResponse> {
  try {
    const sessionId = params.id;

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

    const bookmark = await bookmarkService.getBookmark(sessionId);

    const response = {
      sessionId,
      isBookmarked: bookmark?.isBookmarked || false,
      tags: bookmark?.tags || [],
      createdAt: bookmark?.createdAt,
      updatedAt: bookmark?.updatedAt,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error(`Error in GET /api/claude/sessions/${params.id}/bookmark:`, error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'BOOKMARK_GET_ERROR',
        message: 'Failed to get session bookmark',
        details: { sessionId: params.id, error: String(error) },
      },
      timestamp: new Date().toISOString(),
      path: request.url,
      method: 'GET',
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
