/**
 * Claude Analytics API Endpoint
 * GET /api/claude/analytics - Get usage statistics and insights
 */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ClaudeAnalyticsService } from '@/libs/client/services/claudeAnalyticsService';
import type { APIErrorResponse } from '@/libs/client/types/claude-history';

const analyticsService = new ClaudeAnalyticsService();

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);

    // Parse query parameters
    const projectId = searchParams.get('project') || undefined;
    const days = searchParams.get('days') ? parseInt(searchParams.get('days')!) : 30;
    const includeCode = searchParams.get('includeCode') === 'true';
    const type = searchParams.get('type') || 'general'; // general, code

    // Validate parameters
    if (days < 1 || days > 365) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_DAYS',
          message: 'Days parameter must be between 1 and 365',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'GET',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    let analytics: any;

    if (type === 'code' || includeCode) {
      // Get code-specific analytics
      const [generalAnalytics, codeAnalytics] = await Promise.all([
        analyticsService.generateAnalytics(projectId, days),
        analyticsService.getCodeAnalytics(projectId, days),
      ]);

      analytics = {
        ...generalAnalytics,
        codeAnalytics,
        generatedAt: new Date().toISOString(),
        timeframe: `${days} days`,
        projectScope: projectId || 'all projects',
      };
    } else {
      // Get general analytics only
      analytics = await analyticsService.generateAnalytics(projectId, days);
      analytics.generatedAt = new Date().toISOString();
      analytics.timeframe = `${days} days`;
      analytics.projectScope = projectId || 'all projects';
    }

    return NextResponse.json(analytics);
  } catch (error) {
    console.error('Error in GET /api/claude/analytics:', error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'ANALYTICS_ERROR',
        message: 'Failed to generate analytics',
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
 * POST /api/claude/analytics - Generate custom analytics with advanced filters
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();

    const { projectId, days = 30, includeCode = false, filters = {}, metrics = ['all'] } = body;

    // Validate parameters
    if (days < 1 || days > 365) {
      const errorResponse: APIErrorResponse = {
        error: {
          code: 'INVALID_DAYS',
          message: 'Days parameter must be between 1 and 365',
        },
        timestamp: new Date().toISOString(),
        path: request.url,
        method: 'POST',
      };

      return NextResponse.json(errorResponse, { status: 400 });
    }

    // Generate analytics based on requested metrics
    let analytics: any = {
      generatedAt: new Date().toISOString(),
      timeframe: `${days} days`,
      projectScope: projectId || 'all projects',
      appliedFilters: filters,
      requestedMetrics: metrics,
    };

    const includeAll = metrics.includes('all');

    // General analytics
    if (includeAll || metrics.includes('general')) {
      const generalAnalytics = await analyticsService.generateAnalytics(projectId, days);
      analytics = { ...analytics, ...generalAnalytics };
    }

    // Code analytics
    if (includeCode || includeAll || metrics.includes('code')) {
      const codeAnalytics = await analyticsService.getCodeAnalytics(projectId, days);
      analytics.codeAnalytics = codeAnalytics;
    }

    return NextResponse.json(analytics);
  } catch (error) {
    console.error('Error in POST /api/claude/analytics:', error);

    const errorResponse: APIErrorResponse = {
      error: {
        code: 'ANALYTICS_ERROR',
        message: 'Failed to generate custom analytics',
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
