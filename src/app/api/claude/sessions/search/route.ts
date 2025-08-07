/**
 * Claude Sessions Search API Endpoint
 * GET /api/claude/sessions/search - Search through Claude Code sessions and messages
 */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ClaudeSearchService } from '@/libs/client/services/claudeSearchService';
import type { SessionSearchQuery, APIErrorResponse } from '@/libs/client/types/claude-history';

const searchService = new ClaudeSearchService();

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);

    // Get the search query
    const query = searchParams.get('q') || searchParams.get('query');

    if (!query || query.trim().length === 0) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'MISSING_QUERY',
          message: 'Search query is required. Use ?q=your-search-term or ?query=your-search-term',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'GET',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Parse search parameters
    const searchQuery: SessionSearchQuery = {
      query: query.trim(),
      project: searchParams.get('project') || undefined,
      limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 20,
      offset: searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0,
      dateFrom: searchParams.get('dateFrom') || undefined,
      dateTo: searchParams.get('dateTo') || undefined,
    };

    // Parse searchIn parameter
    const searchInParam = searchParams.get('searchIn');
    if (searchInParam) {
      const searchInValues = searchInParam.split(',').map((s) => s.trim());
      const validSearchIn = searchInValues.filter((s) =>
        ['content', 'code', 'filenames', 'metadata'].includes(s)
      );

      if (validSearchIn.length > 0) {
        searchQuery.searchIn = validSearchIn as any;
      }
    }

    // Validate parameters
    if (searchQuery.limit && (searchQuery.limit < 1 || searchQuery.limit > 100)) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_LIMIT',
          message: 'Limit must be between 1 and 100',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'GET',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (searchQuery.offset && searchQuery.offset < 0) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_OFFSET',
          message: 'Offset must be 0 or greater',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'GET',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Validate date parameters
    if (searchQuery.dateFrom && isNaN(Date.parse(searchQuery.dateFrom))) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_DATE_FROM',
          message: 'dateFrom must be a valid ISO date string',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'GET',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    if (searchQuery.dateTo && isNaN(Date.parse(searchQuery.dateTo))) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_DATE_TO',
          message: 'dateTo must be a valid ISO date string',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'GET',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Perform the search
    const searchResults = await searchService.search(searchQuery);

    return NextResponse.json(searchResults);
  } catch (error) {
    console.error('Error in GET /api/claude/sessions/search:', error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'SEARCH_ERROR',
        message: 'Failed to search Claude sessions',
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
 * POST /api/claude/sessions/search - Advanced search with complex filters
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();

    if (!body.query || body.query.trim().length === 0) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'MISSING_QUERY',
          message: 'Search query is required in request body',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'POST',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    const searchQuery: SessionSearchQuery = {
      query: body.query.trim(),
      project: body.project || undefined,
      limit: body.limit || 20,
      offset: body.offset || 0,
      searchIn: body.searchIn || undefined,
      dateFrom: body.dateFrom || undefined,
      dateTo: body.dateTo || undefined,
    };

    // Validate parameters
    if (searchQuery.limit < 1 || searchQuery.limit > 100) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_LIMIT',
          message: 'Limit must be between 1 and 100',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'POST',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Perform the search
    const searchResults = await searchService.search(searchQuery);

    return NextResponse.json(searchResults);
  } catch (error) {
    console.error('Error in POST /api/claude/sessions/search:', error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'SEARCH_ERROR',
        message: 'Failed to search Claude sessions',
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
