/**
 * Performance Monitoring API Endpoint
 *
 * Provides REST API access to performance metrics and monitoring data.
 */

import { NextRequest, NextResponse } from 'next/server';
import { defaultPerformanceDashboard } from '@/libs/server/performance/performance-metrics';

export async function GET(request: NextRequest) {
   try {
      const { searchParams } = new URL(request.url);
      const endpoint = searchParams.get('endpoint') || 'overview';
      const timeWindow = parseInt(searchParams.get('timeWindow') || '3600000'); // 1 hour default

      switch (endpoint) {
         case 'overview':
            const overview = await defaultPerformanceDashboard.getPerformanceOverview(timeWindow);
            return NextResponse.json(overview);

         case 'alerts':
            const limit = parseInt(searchParams.get('limit') || '50');
            const alerts = await defaultPerformanceDashboard.getRecentAlerts(limit);
            return NextResponse.json({ alerts });

         case 'historical':
            const hours = parseInt(searchParams.get('hours') || '24');
            const historical = await defaultPerformanceDashboard.getHistoricalMetrics(hours);
            return NextResponse.json({ metrics: historical });

         case 'health':
            // Simple health check endpoint
            const health = {
               status: 'healthy',
               timestamp: Date.now(),
               uptime: process.uptime(),
               memory: process.memoryUsage(),
               version: process.version,
            };
            return NextResponse.json(health);

         default:
            return NextResponse.json(
               { error: 'Invalid endpoint. Available: overview, alerts, historical, health' },
               { status: 400 }
            );
      }
   } catch (error) {
      console.error('Performance API error:', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
   }
}

/**
 * Health check endpoint for monitoring systems
 */
export async function HEAD(request: NextRequest) {
   try {
      // Simple health check - return 200 if service is responsive
      return new NextResponse(null, { status: 200 });
   } catch (error) {
      return new NextResponse(null, { status: 503 });
   }
}
