// Utility functions for the file serving API

export interface FileContent {
  path: string;
  content: string;
  size: number;
  lastModified: string;
  contentType: string;
  lines: number;
}

export interface FileError {
  path: string;
  error: string;
}

export interface BulkFileResponse {
  files: Array<FileContent | FileError>;
}

/**
 * Read a single file's content
 */
export async function readFile(filePath: string): Promise<FileContent> {
  const response = await fetch(`/api/files?path=${encodeURIComponent(filePath)}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || `Failed to read file: ${filePath}`);
  }

  return response.json();
}

/**
 * Read multiple files' content in a single request
 */
export async function readFiles(filePaths: string[]): Promise<BulkFileResponse> {
  const response = await fetch('/api/files', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ paths: filePaths }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to read files');
  }

  return response.json();
}

/**
 * Check if a file content result has an error
 */
export function isFileError(file: FileContent | FileError): file is FileError {
  return 'error' in file;
}

/**
 * Get successful file reads from bulk response
 */
export function getSuccessfulReads(response: BulkFileResponse): FileContent[] {
  return response.files.filter((file): file is FileContent => !isFileError(file));
}

/**
 * Get failed file reads from bulk response
 */
export function getFailedReads(response: BulkFileResponse): FileError[] {
  return response.files.filter((file): file is FileError => isFileError(file));
}

/**
 * Common file paths for quick access
 */
export const COMMON_FILES = {
  packageJson: 'package.json',
  tsconfig: 'tsconfig.json',
  readme: 'README.md',
  gitignore: '.gitignore',
  eslintrc: '.eslintrc.json',
  prettierrc: '.prettierrc',
  tailwindConfig: 'tailwind.config.ts',
  nextConfig: 'next.config.js',
  claudeMd: 'CLAUDE.md',
  taskMasterTasks: '.taskmaster/tasks/tasks.json',
  taskMasterState: '.taskmaster/state.json',
  taskMasterManager: '.taskmaster/manager/manager.json',
} as const;

/**
 * Read common project files
 */
export async function readCommonFiles(
  fileKeys: Array<keyof typeof COMMON_FILES>
): Promise<BulkFileResponse> {
  const filePaths = fileKeys.map((key) => COMMON_FILES[key]);
  return readFiles(filePaths);
}

/**
 * Simple file search by checking if content includes search term
 */
export async function searchInFiles(
  filePaths: string[],
  searchTerm: string
): Promise<
  Array<{
    path: string;
    matches: number;
    content?: string;
    error?: string;
  }>
> {
  const response = await readFiles(filePaths);

  return response.files
    .map((file) => {
      if (isFileError(file)) {
        return {
          path: file.path,
          matches: 0,
          error: file.error,
        };
      }

      const matches = (file.content.match(new RegExp(searchTerm, 'gi')) || []).length;
      return {
        path: file.path,
        matches,
        content: matches > 0 ? file.content : undefined,
      };
    })
    .filter((result) => result.matches > 0 || result.error);
}
