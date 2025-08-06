/**
 * Session Export API Endpoint
 * GET /api/claude/sessions/[id]/export - Export session in various formats
 */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ClaudeLogService } from '@/libs/client/services/claudeLogService';
import { ClaudeExportService } from '@/libs/client/services/claudeExportService';
import type { SessionExportOptions, APIErrorResponse } from '@/libs/client/types/claude-history';

const logService = new ClaudeLogService();
const exportService = new ClaudeExportService();

interface RouteParams {
  params: { id: string };
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

    const { searchParams } = new URL(request.url);

    // Parse export options
    const exportOptions: SessionExportOptions = {
      format: (searchParams.get('format') as SessionExportOptions['format']) || 'markdown',
      includeMetadata: searchParams.get('includeMetadata') !== 'false',
      includeCodeOnly: searchParams.get('includeCodeOnly') === 'true',
      includeToolCalls: searchParams.get('includeToolCalls') !== 'false',
      dateFormat: (searchParams.get('dateFormat') as SessionExportOptions['dateFormat']) || 'local',
    };

    // Validate format
    if (!['markdown', 'json', 'html', 'pdf'].includes(exportOptions.format)) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_FORMAT',
          message: 'Invalid export format. Supported formats: markdown, json, html, pdf',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'GET',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Get session details
    const sessionDetail = await logService.getSessionDetail(sessionId);

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

    // Export session
    const exportResult = await exportService.exportSession(
      sessionDetail.session,
      sessionDetail.messages,
      exportOptions
    );

    // Set appropriate headers based on format
    const headers: HeadersInit = {
      'Content-Type': exportResult.mimeType,
      'Content-Disposition': `attachment; filename="${exportResult.filename}"`,
    };

    // For JSON exports, return as JSON response
    if (exportOptions.format === 'json') {
      return NextResponse.json(JSON.parse(exportResult.content), { headers });
    }

    // For other formats, return as text/blob
    return new NextResponse(exportResult.content, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error(`Error in GET /api/claude/sessions/${params.id}/export:`, error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'EXPORT_ERROR',
        message: 'Failed to export session',
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
 * POST /api/claude/sessions/[id]/export - Export with custom options in body
 */
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

    const body = await request.json();
    const exportOptions: SessionExportOptions = {
      format: body.format || 'markdown',
      includeMetadata: body.includeMetadata !== false,
      includeCodeOnly: body.includeCodeOnly === true,
      includeToolCalls: body.includeToolCalls !== false,
      dateFormat: body.dateFormat || 'local',
    };

    // Validate format
    if (!['markdown', 'json', 'html', 'pdf'].includes(exportOptions.format)) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_FORMAT',
          message: 'Invalid export format. Supported formats: markdown, json, html, pdf',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'POST',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Get session details
    const sessionDetail = await logService.getSessionDetail(sessionId);

    if (!sessionDetail) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'SESSION_NOT_FOUND',
          message: `Session with ID ${sessionId} not found`,
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'POST',
      };

      return NextResponse.json(errorResponse, { status: 404 });
    }

    // Export session
    const exportResult = await exportService.exportSession(
      sessionDetail.session,
      sessionDetail.messages,
      exportOptions
    );

    // Return export metadata and download URL
    const response = {
      success: true,
      sessionId,
      export: {
        format: exportOptions.format,
        filename: exportResult.filename,
        size: exportResult.content.length,
        mimeType: exportResult.mimeType,
        createdAt: new Date().toISOString(),
      },
      downloadUrl: `/api/claude/sessions/${sessionId}/export?format=${exportOptions.format}${exportOptions.includeCodeOnly ? '&includeCodeOnly=true' : ''}`,
      content: exportOptions.format === 'json' ? JSON.parse(exportResult.content) : undefined,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error(`Error in POST /api/claude/sessions/${params.id}/export:`, error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'EXPORT_ERROR',
        message: 'Failed to export session',
        details: { sessionId: params.id, error: String(error) },
      },
      timestamp: new Date().toISOString(),
      path: request.url,
      method: 'POST',
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

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
