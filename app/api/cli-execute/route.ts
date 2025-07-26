import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';
import { join } from 'path';

// Allowed Task Master CLI commands for security
const ALLOWED_COMMANDS = [
  'list',
  'next',
  'show',
  'set-status',
  'add-task',
  'expand',
  'analyze-complexity',
  'complexity-report',
  'update-task',
  'update-subtask',
  'generate',
  'sync-readme',
  'models',
  'init',
  'parse-prd',
];

// Command validation and sanitization
function validateCommand(command: string, args: string[]): boolean {
  // Check if command is in allowed list
  if (!ALLOWED_COMMANDS.includes(command)) {
    return false;
  }

  // Basic argument validation - prevent dangerous characters
  const dangerousPatterns = [
    /[;&|`$()]/,  // Shell injection characters
    /\.\./,       // Path traversal
    /^-/,         // Prevent flag injection in first argument
  ];

  return !args.some(arg => 
    dangerousPatterns.some(pattern => pattern.test(arg))
  );
}

// Execute Task Master CLI command
function executeCommand(command: string, args: string[]): Promise<{
  stdout: string;
  stderr: string;
  exitCode: number;
}> {
  return new Promise((resolve) => {
    const projectRoot = process.cwd();
    const child = spawn('task-master', [command, ...args], {
      cwd: projectRoot,
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: 30000, // 30 second timeout
    });

    let stdout = '';
    let stderr = '';

    child.stdout?.on('data', (data) => {
      stdout += data.toString();
    });

    child.stderr?.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('close', (code) => {
      resolve({
        stdout,
        stderr,
        exitCode: code || 0,
      });
    });

    child.on('error', (error) => {
      resolve({
        stdout: '',
        stderr: error.message,
        exitCode: 1,
      });
    });
  });
}

// POST /api/cli-execute - Execute Task Master CLI commands
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { command, args = [] } = body;

    // Validation
    if (!command || typeof command !== 'string') {
      return NextResponse.json(
        { error: 'Command is required and must be a string' },
        { status: 400 }
      );
    }

    if (!Array.isArray(args)) {
      return NextResponse.json(
        { error: 'Arguments must be an array' },
        { status: 400 }
      );
    }

    // Security validation
    if (!validateCommand(command, args)) {
      return NextResponse.json(
        { error: 'Command not allowed or contains invalid arguments' },
        { status: 403 }
      );
    }

    // Execute command
    const result = await executeCommand(command, args);

    // Parse output for structured responses
    let parsedOutput;
    try {
      // Try to parse JSON output if available
      const jsonMatch = result.stdout.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedOutput = JSON.parse(jsonMatch[0]);
      }
    } catch {
      // If not JSON, keep raw output
      parsedOutput = null;
    }

    return NextResponse.json({
      success: result.exitCode === 0,
      command: `task-master ${command} ${args.join(' ')}`,
      output: {
        stdout: result.stdout,
        stderr: result.stderr,
        parsed: parsedOutput,
      },
      exitCode: result.exitCode,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('CLI execute error:', error);
    return NextResponse.json(
      { error: 'Failed to execute command' },
      { status: 500 }
    );
  }
}

// GET /api/cli-execute - Get available commands and usage
export async function GET() {
  return NextResponse.json({
    message: 'Task Master CLI Execute API',
    allowedCommands: ALLOWED_COMMANDS,
    usage: {
      method: 'POST',
      body: {
        command: 'string (required)',
        args: 'array of strings (optional)',
      },
      example: {
        command: 'list',
        args: ['--status=pending'],
      },
    },
    security: {
      allowedCommands: 'Only predefined Task Master commands are allowed',
      argumentValidation: 'Arguments are validated for security',
      timeout: '30 second execution timeout',
    },
  });
}