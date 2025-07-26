import { NextRequest, NextResponse } from 'next/server';
import {
   cliExecutor,
   CLIExecutionError,
   CLITimeoutError,
   CLIValidationError,
   type CLICommandConfig,
} from '@/lib/cli-executor';

// POST /api/cli-execute - Execute Task Master CLI commands
export async function POST(request: NextRequest) {
   try {
      const body = await request.json();
      const { command, args = [], timeout, parseOutput = true, captureProgress = false } = body;

      // Validation
      if (!command || typeof command !== 'string') {
         return NextResponse.json(
            { error: 'Command is required and must be a string' },
            { status: 400 }
         );
      }

      if (!Array.isArray(args)) {
         return NextResponse.json({ error: 'Arguments must be an array' }, { status: 400 });
      }

      // Prepare command configuration
      const config: CLICommandConfig = {
         command,
         args,
         timeout,
         parseOutput,
         captureProgress,
      };

      // Execute command using the robust CLI executor
      const result = await cliExecutor.executeCommand(config);

      // Return successful response
      return NextResponse.json(result);
   } catch (error) {
      console.error('CLI execute error:', error);

      // Handle specific error types
      if (error instanceof CLIValidationError) {
         return NextResponse.json(
            {
               error: 'Command validation failed',
               details: error.message,
               command: error.command,
               args: error.args,
            },
            { status: 400 }
         );
      }

      if (error instanceof CLITimeoutError) {
         return NextResponse.json(
            {
               error: 'Command execution timed out',
               details: error.message,
               command: error.command,
               timeout: error.timeout,
            },
            { status: 408 }
         );
      }

      if (error instanceof CLIExecutionError) {
         return NextResponse.json(
            {
               error: 'Command execution failed',
               details: error.message,
               command: error.command,
               exitCode: error.exitCode,
               output: error.output,
            },
            { status: 422 }
         );
      }

      // Generic error
      return NextResponse.json(
         {
            error: 'Failed to execute command',
            details: error.message,
         },
         { status: 500 }
      );
   }
}

// GET /api/cli-execute - Get available commands, usage, and system status
export async function GET(request: NextRequest) {
   const { searchParams } = new URL(request.url);
   const action = searchParams.get('action');

   try {
      switch (action) {
         case 'status':
            return NextResponse.json({
               activeProcesses: cliExecutor.getActiveProcesses(),
               recentHistory: cliExecutor.getHistory(10),
               systemInfo: {
                  nodejs: process.version,
                  platform: process.platform,
                  memory: process.memoryUsage(),
                  uptime: process.uptime(),
               },
            });

         case 'history':
            const limit = parseInt(searchParams.get('limit') || '50');
            return NextResponse.json({
               history: cliExecutor.getHistory(limit),
               total: cliExecutor.getHistory().length,
            });

         case 'commands':
            return NextResponse.json({
               availableCommands: cliExecutor.getAvailableCommands(),
            });

         case 'stats':
            return NextResponse.json({
               statistics: cliExecutor.getExecutionStats(),
               timestamp: new Date().toISOString(),
            });

         default:
            return NextResponse.json({
               message: 'Enhanced Task Master CLI Execute API',
               version: '2.0.0',
               features: [
                  'Robust command validation and sanitization',
                  'Advanced timeout handling with graceful shutdown',
                  'Intelligent output parsing and structuring',
                  'Process monitoring and history tracking',
                  'Real-time progress capture',
                  'Comprehensive error handling and classification',
               ],
               usage: {
                  method: 'POST',
                  body: {
                     command: 'string (required) - Task Master command to execute',
                     args: 'array of strings (optional) - Command arguments',
                     timeout: 'number (optional) - Custom timeout in milliseconds',
                     parseOutput: 'boolean (optional) - Parse command output (default: true)',
                     captureProgress:
                        'boolean (optional) - Capture real-time progress (default: false)',
                  },
                  examples: [
                     {
                        description: 'List all pending tasks',
                        body: {
                           command: 'list',
                           args: ['--status=pending'],
                        },
                     },
                     {
                        description: 'Show specific task details',
                        body: {
                           command: 'show',
                           args: ['--id=2.4'],
                        },
                     },
                     {
                        description: 'Update task status with custom timeout',
                        body: {
                           command: 'set-status',
                           args: ['--id=2.4', '--status=done'],
                           timeout: 15000,
                        },
                     },
                  ],
               },
               queryParameters: {
                  '?action=status': 'Get system status and active processes',
                  '?action=history&limit=N': 'Get execution history (default limit: 50)',
                  '?action=commands': 'Get available commands with descriptions',
                  '?action=stats': 'Get execution statistics and metrics',
               },
               security: {
                  validation: 'Multi-layer command and argument validation',
                  sanitization: 'Input sanitization against injection attacks',
                  timeout: 'Configurable timeouts with forced termination',
                  isolation: 'Process isolation and cleanup',
                  monitoring: 'Real-time process monitoring',
               },
            });
      }
   } catch (error) {
      console.error('CLI execute GET error:', error);
      return NextResponse.json(
         { error: 'Failed to get CLI executor information' },
         { status: 500 }
      );
   }
}

// DELETE /api/cli-execute - Kill active processes or clear history
export async function DELETE(request: NextRequest) {
   try {
      const { searchParams } = new URL(request.url);
      const action = searchParams.get('action');
      const processId = searchParams.get('processId');

      switch (action) {
         case 'kill-process':
            if (!processId) {
               return NextResponse.json(
                  { error: 'processId is required when action=kill-process' },
                  { status: 400 }
               );
            }

            const killed = cliExecutor.killProcess(processId);
            return NextResponse.json({
               success: killed,
               message: killed
                  ? `Process ${processId} terminated successfully`
                  : `Process ${processId} not found or already terminated`,
               processId,
               timestamp: new Date().toISOString(),
            });

         case 'clear-history':
            cliExecutor.clearHistory();
            return NextResponse.json({
               success: true,
               message: 'History cleared successfully',
               timestamp: new Date().toISOString(),
            });

         default:
            return NextResponse.json(
               { error: 'Invalid action. Supported actions: kill-process, clear-history' },
               { status: 400 }
            );
      }
   } catch (error) {
      console.error('CLI execute DELETE error:', error);
      return NextResponse.json({ error: 'Failed to perform delete operation' }, { status: 500 });
   }
}
