// CLI command execution result interface
export interface CLIExecutionResult {
   success: boolean;
   command: string;
   output: {
      stdout: string;
      stderr: string;
      parsed?: any;
      summary?: string;
   };
   exitCode: number;
   executionTime: number;
   timestamp: string;
   metadata?: {
      pid?: number;
      signal?: string;
      killed?: boolean;
      timedOut?: boolean;
   };
}

// CLI command configuration
export interface CLICommandConfig {
   command: string;
   args: string[];
   timeout?: number;
   workingDirectory?: string;
   env?: Record<string, string>;
   parseOutput?: boolean;
   captureProgress?: boolean;
}

// CLI execution error types
export class CLIExecutionError extends Error {
   constructor(
      message: string,
      public command: string,
      public exitCode: number,
      public output: { stdout: string; stderr: string }
   ) {
      super(message);
      this.name = 'CLIExecutionError';
   }
}

export class CLITimeoutError extends Error {
   constructor(
      message: string,
      public command: string,
      public timeout: number
   ) {
      super(message);
      this.name = 'CLITimeoutError';
   }
}

export class CLIValidationError extends Error {
   constructor(
      message: string,
      public command: string,
      public args: string[]
   ) {
      super(message);
      this.name = 'CLIValidationError';
   }
}
