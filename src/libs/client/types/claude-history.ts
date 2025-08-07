/**
 * Types for Claude Code History Management System
 */

export interface ToolCall {
  name: string;
  parameters: Record<string, unknown>;
  result?: unknown;
  timestamp: string;
}

export interface CodeBlock {
  language: string;
  code: string;
  filename?: string;
  lineStart?: number;
  lineEnd?: number;
}

export interface SessionMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  toolCalls?: ToolCall[];
  codeBlocks?: CodeBlock[];
  tokenCount?: number;
  model?: string;
}

export interface ClaudeSession {
  id: string;
  projectPath: string;
  projectName: string;
  startTime: string;
  endTime?: string;
  duration?: number; // in seconds
  messageCount: number;
  codeBlockCount: number;
  toolCallCount: number;
  fileChanges: string[];
  isBookmarked: boolean;
  isArchived: boolean;
  tags: string[];
  summary?: string;
  metadata: SessionMetadata;
  messages?: SessionMessage[]; // Only included in detailed view
}

export interface SessionMetadata {
  claudeVersion?: string;
  model?: string;
  totalTokens?: number;
  inputTokens?: number;
  outputTokens?: number;
  firstMessageTime: string;
  lastMessageTime: string;
  workingDirectory?: string;
  gitBranch?: string;
  gitCommit?: string;
}

export interface ClaudeProject {
  id: string;
  name: string;
  path: string;
  sessionCount: number;
  totalMessages: number;
  lastActivity: string;
  firstActivity: string;
  isActive: boolean;
  sessionIds: string[];
}

// API Request/Response Types
export interface SessionListQuery {
  project?: string;
  limit?: number;
  offset?: number;
  sortBy?: 'startTime' | 'endTime' | 'messageCount' | 'duration';
  sortOrder?: 'asc' | 'desc';
  isBookmarked?: boolean;
  isArchived?: boolean;
  tags?: string[];
  dateFrom?: string;
  dateTo?: string;
}

export interface SessionSearchQuery {
  query: string;
  project?: string;
  limit?: number;
  offset?: number;
  searchIn?: ('content' | 'code' | 'filenames' | 'metadata')[];
  dateFrom?: string;
  dateTo?: string;
}

export interface SessionListResponse {
  sessions: ClaudeSession[];
  total: number;
  hasMore: boolean;
  nextOffset?: number;
}

export interface SessionDetailResponse {
  session: ClaudeSession;
  messages: SessionMessage[];
}

export interface ProjectListResponse {
  projects: ClaudeProject[];
  total: number;
}

export interface SessionBookmarkRequest {
  isBookmarked: boolean;
  tags?: string[];
}

export interface SessionArchiveRequest {
  isArchived: boolean;
  reason?: string;
}

export interface SessionExportOptions {
  format: 'markdown' | 'json' | 'html' | 'pdf';
  includeMetadata?: boolean;
  includeCodeOnly?: boolean;
  includeToolCalls?: boolean;
  dateFormat?: 'iso' | 'relative' | 'local';
}

// Analytics Types
export interface SessionAnalytics {
  totalSessions: number;
  totalMessages: number;
  totalCodeBlocks: number;
  averageSessionDuration: number;
  mostActiveProject: string;
  dailyActivity: DailyStat[];
  topTools: ToolUsageStat[];
  languageDistribution: LanguageStat[];
  sessionDurationDistribution: DurationStat[];
}

export interface DailyStat {
  date: string;
  sessionCount: number;
  messageCount: number;
  codeBlockCount: number;
}

export interface ToolUsageStat {
  name: string;
  count: number;
  percentage: number;
}

export interface LanguageStat {
  language: string;
  count: number;
  percentage: number;
}

export interface DurationStat {
  range: string; // e.g., "0-5min", "5-15min", etc.
  count: number;
  percentage: number;
}

// Search Result Types
export interface SearchResult {
  sessionId: string;
  messageId?: string;
  type: 'session' | 'message' | 'code' | 'file';
  title: string;
  excerpt: string;
  score: number;
  highlights: SearchHighlight[];
  context: SearchContext;
}

export interface SearchHighlight {
  field: string;
  fragments: string[];
}

export interface SearchContext {
  projectName: string;
  sessionStartTime: string;
  messageIndex?: number;
  surroundingMessages?: SessionMessage[];
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  took: number; // ms
  query: string;
  filters: Record<string, unknown>;
}

// Error Types
export interface ClaudeHistoryError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface APIErrorResponse {
  error: ClaudeHistoryError;
  timestamp: string;
  path: string;
  method: string;
}

// Configuration Types
export interface ClaudeHistoryConfig {
  claudeProjectsPath: string;
  cacheEnabled: boolean;
  cacheTTL: number;
  maxSessionsPerProject: number;
  autoArchiveAfterDays: number;
  searchIndexEnabled: boolean;
  exportFormats: SessionExportOptions['format'][];
  dataRetentionDays?: number;
}

// Processing Types (for internal use)
export interface RawClaudeLogEntry {
  timestamp: string;
  type: 'user_message' | 'assistant_message' | 'tool_call' | 'tool_result' | 'error';
  data: Record<string, unknown>;
}

export interface ProcessedSessionData {
  rawPath: string;
  session: ClaudeSession;
  messages: SessionMessage[];
  processingTime: number;
  errors: string[];
}

// Task Master Integration Types
export interface SessionTaskLink {
  sessionId: string;
  taskId: string;
  linkType: 'mentioned' | 'worked_on' | 'created' | 'updated';
  confidence: number;
  extractedText?: string;
}

export interface TaskMasterIntegration {
  linkedTasks: SessionTaskLink[];
  suggestedTasks: {
    title: string;
    description: string;
    extractedFrom: string;
    confidence: number;
  }[];
}
