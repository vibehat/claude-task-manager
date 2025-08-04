/**
 * Health Check API Endpoint
 *
 * Provides health check and basic system status information.
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format') ?? 'basic';

    switch (format) {
      case 'basic':
        // Simple health check
        const basicHealth = {
          status: 'healthy',
          timestamp: Date.now(),
          uptime: process.uptime(),
        };
        return NextResponse.json(basicHealth);

      case 'detailed':
        // Detailed health information
        const detailedHealth = {
          status: 'healthy',
          timestamp: Date.now(),
          uptime: process.uptime(),
          memory: process.memoryUsage(),
          version: process.version,
          platform: process.platform,
          arch: process.arch,
          env: process.env.NODE_ENV || 'development',
          pid: process.pid,
        };
        return NextResponse.json(detailedHealth);

      case 'readiness':
        // Readiness probe for Kubernetes/Docker
        try {
          // Add any service dependency checks here
          // For now, just check basic functionality
          const ready = {
            status: 'ready',
            timestamp: Date.now(),
            checks: {
              database: 'ok', // Could add actual DB ping
              filesystem: 'ok', // Could add file access check
              memory: process.memoryUsage().heapUsed < 1024 * 1024 * 1024 ? 'ok' : 'warning', // 1GB threshold
            },
          };
          return NextResponse.json(ready);
        } catch {
          return NextResponse.json(
            { status: 'not_ready', error: 'Service dependencies unavailable' },
            { status: 503 }
          );
        }

      case 'liveness':
        // Liveness probe for Kubernetes/Docker
        const liveness = {
          status: 'alive',
          timestamp: Date.now(),
          uptime: process.uptime(),
        };
        return NextResponse.json(liveness);

      default:
        return NextResponse.json(
          {
            error: 'Invalid format. Available: basic, detailed, readiness, liveness',
            available_formats: ['basic', 'detailed', 'readiness', 'liveness'],
          },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Health check error:', error);
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: 'Health check failed',
        timestamp: Date.now(),
      },
      { status: 500 }
    );
  }
}

/**
 * HEAD endpoint for lightweight health checks
 * Returns only HTTP status codes without response body
 */
export async function HEAD(): Promise<NextResponse> {
  try {
    // Simple health check - return 200 if service is responsive
    return new NextResponse(null, { status: 200 });
  } catch {
    // Return 503 Service Unavailable if there's any issue
    return new NextResponse(null, { status: 503 });
  }
}

/**
 * POST endpoint for health check with custom parameters
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { checks = [] } = body;

    const results = {
      status: 'healthy',
      timestamp: Date.now(),
      requestedChecks: checks,
      results: {} as Record<string, unknown>,
    };

    // Perform requested health checks
    for (const check of checks) {
      switch (check) {
        case 'memory':
          const memUsage = process.memoryUsage();
          results.results.memory = {
            status: memUsage.heapUsed < 1024 * 1024 * 1024 ? 'ok' : 'warning',
            heapUsed: memUsage.heapUsed,
            heapTotal: memUsage.heapTotal,
            rss: memUsage.rss,
          };
          break;

        case 'uptime':
          results.results.uptime = {
            status: 'ok',
            seconds: process.uptime(),
            formatted: formatUptime(process.uptime()),
          };
          break;

        case 'version':
          results.results.version = {
            status: 'ok',
            node: process.version,
            platform: process.platform,
            arch: process.arch,
          };
          break;

        default:
          results.results[check] = {
            status: 'unknown',
            error: `Check '${check}' not implemented`,
          };
      }
    }

    return NextResponse.json(results);
  } catch (error) {
    console.error('Health check POST error:', error);
    return NextResponse.json(
      {
        status: 'error',
        error: 'Invalid request body or health check failed',
        timestamp: Date.now(),
      },
      { status: 400 }
    );
  }
}

/**
 * Helper function to format uptime in human-readable format
 */
function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / (24 * 60 * 60));
  const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (remainingSeconds > 0) parts.push(`${remainingSeconds}s`);

  return parts.length > 0 ? parts.join(' ') : '0s';
}
