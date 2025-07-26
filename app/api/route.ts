import { NextResponse } from 'next/server';

// Main API information endpoint
export async function GET() {
  return NextResponse.json({
    name: 'Task Master UI API',
    version: '1.0.0',
    description: 'RESTful API for Task Master CLI integration',
    endpoints: {
      '/api/tasks': {
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        description: 'Task management operations',
        features: [
          'List all tasks with filtering',
          'Create new tasks',
          'Update existing tasks',
          'Cancel tasks (mark as cancelled)',
        ],
      },
      '/api/cli-execute': {
        methods: ['GET', 'POST'],
        description: 'Execute Task Master CLI commands',
        features: [
          'Secure command execution',
          'Real-time command output',
          'Command validation and sanitization',
        ],
      },
      '/api/file-watch': {
        methods: ['GET', 'POST', 'DELETE'],
        description: 'Real-time file monitoring via Server-Sent Events',
        features: [
          'Watch .taskmaster directory changes',
          'Real-time notifications',
          'SSE connection management',
        ],
      },
    },
    security: {
      commandValidation: 'Only allowed CLI commands can be executed',
      inputSanitization: 'All inputs are validated and sanitized',
      pathRestriction: 'File operations restricted to .taskmaster directory',
    },
    status: 'operational',
    timestamp: new Date().toISOString(),
  });
}