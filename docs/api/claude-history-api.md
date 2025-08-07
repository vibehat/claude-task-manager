# Claude Code History API Documentation

## Overview

The Claude Code History API provides comprehensive access to Claude Code conversation history and session details. It automatically parses JSONL files from `~/.claude/projects/` and converts them into structured, searchable data accessible via REST API endpoints.

## Features

- **Session Management**: List, filter, and retrieve detailed session information
- **Full-text Search**: Search across messages, code blocks, and file names
- **Project Organization**: Group sessions by Claude Code projects
- **Bookmarking & Tagging**: Bookmark important sessions with custom tags
- **Export Functionality**: Export sessions in Markdown, JSON, HTML, and PDF formats
- **Analytics & Insights**: Usage statistics, code patterns, and activity metrics
- **Real-time Processing**: Automatic parsing of new session files

## API Endpoints

### Sessions

#### List All Sessions

```http
GET /api/claude/sessions
```

**Query Parameters:**

- `project` - Filter by specific project
- `limit` - Number of sessions to return (default: 20, max: 100)
- `offset` - Pagination offset (default: 0)
- `sortBy` - Sort field: `startTime`, `endTime`, `messageCount`, `duration` (default: `startTime`)
- `sortOrder` - Sort direction: `asc`, `desc` (default: `desc`)
- `isBookmarked` - Filter by bookmark status: `true`, `false`
- `isArchived` - Filter by archive status: `true`, `false`
- `tags` - Comma-separated list of tags to filter by
- `dateFrom` - ISO date string for start date filter
- `dateTo` - ISO date string for end date filter

**Example:**

```bash
curl "http://localhost:3000/api/claude/sessions?limit=10&sortBy=messageCount&sortOrder=desc&isBookmarked=true"
```

**Response:**

```json
{
  "sessions": [
    {
      "id": "03cec800-54b0-4b06-8967-6e31c859133b",
      "projectName": "home/user/Code/project",
      "projectPath": "/Users/user/.claude/projects/home-user-Code-project",
      "startTime": "2025-01-15T10:30:00.000Z",
      "endTime": "2025-01-15T11:45:00.000Z",
      "duration": 4500,
      "messageCount": 42,
      "codeBlockCount": 12,
      "toolCallCount": 8,
      "fileChanges": ["src/api.js", "package.json"],
      "isBookmarked": true,
      "isArchived": false,
      "tags": ["api", "refactoring"]
    }
  ],
  "total": 1,
  "hasMore": false
}
```

#### Get Session Details

```http
GET /api/claude/sessions/{sessionId}
```

**Response:**

```json
{
  "session": {
    "id": "03cec800-54b0-4b06-8967-6e31c859133b",
    "projectName": "home/user/Code/project",
    "startTime": "2025-01-15T10:30:00.000Z",
    "messageCount": 42,
    "metadata": {
      "model": "claude-3-5-sonnet-20241022",
      "totalTokens": 15420
    }
  },
  "messages": [
    {
      "id": "0",
      "role": "user",
      "content": "Help me refactor this API endpoint",
      "timestamp": "2025-01-15T10:30:00.000Z",
      "codeBlocks": [
        {
          "language": "javascript",
          "code": "function handleRequest(req, res) {\n  // implementation\n}"
        }
      ],
      "toolCalls": [
        {
          "name": "Edit",
          "parameters": {
            "file_path": "src/api.js"
          }
        }
      ]
    }
  ]
}
```

### Search

#### Search Sessions and Messages

```http
GET /api/claude/sessions/search?q={query}
POST /api/claude/sessions/search
```

**Query Parameters (GET):**

- `q` or `query` - Search terms (required)
- `project` - Filter by specific project
- `limit` - Number of results (default: 20, max: 100)
- `offset` - Pagination offset
- `searchIn` - Comma-separated: `content`, `code`, `filenames`, `metadata`
- `dateFrom`, `dateTo` - Date range filters

**POST Body:**

```json
{
  "query": "authentication JWT",
  "project": "my-app",
  "limit": 10,
  "searchIn": ["content", "code"],
  "dateFrom": "2025-01-01T00:00:00.000Z"
}
```

**Response:**

```json
{
  "results": [
    {
      "sessionId": "03cec800-54b0-4b06-8967-6e31c859133b",
      "messageId": "5",
      "type": "message",
      "title": "Message from my-app",
      "excerpt": "Implementing JWT authentication with bcrypt...",
      "score": 0.95,
      "highlights": [
        {
          "field": "content",
          "fragments": ["...JWT authentication with bcrypt..."]
        }
      ],
      "context": {
        "projectName": "my-app",
        "sessionStartTime": "2025-01-15T10:30:00.000Z"
      }
    }
  ],
  "total": 1,
  "took": 45,
  "query": "authentication JWT"
}
```

### Projects

#### List All Projects

```http
GET /api/claude/projects
```

**Query Parameters:**

- `includeInactive` - Include projects with no recent activity (default: false)
- `sortBy` - Sort field: `lastActivity`, `sessionCount`, `name` (default: `lastActivity`)
- `sortOrder` - Sort direction: `asc`, `desc` (default: `desc`)

**Response:**

```json
{
  "projects": [
    {
      "id": "home-user-Code-project",
      "name": "home/user/Code/project",
      "path": "/Users/user/.claude/projects/home-user-Code-project",
      "sessionCount": 15,
      "totalMessages": 320,
      "lastActivity": "2025-01-15T11:45:00.000Z",
      "firstActivity": "2025-01-10T09:00:00.000Z",
      "isActive": true,
      "sessionIds": ["03cec800-54b0-4b06-8967-6e31c859133b", "..."]
    }
  ],
  "total": 1
}
```

#### List Project Sessions

```http
GET /api/claude/projects/{projectId}/sessions
```

Same parameters and response format as `/api/claude/sessions`, but filtered to the specific project.

### Session Management

#### Manage Bookmarks

```http
POST /api/claude/sessions/{sessionId}/bookmark
GET /api/claude/sessions/{sessionId}/bookmark
DELETE /api/claude/sessions/{sessionId}/bookmark
```

**POST Body:**

```json
{
  "isBookmarked": true,
  "tags": ["important", "reference"]
}
```

**Response:**

```json
{
  "success": true,
  "sessionId": "03cec800-54b0-4b06-8967-6e31c859133b",
  "isBookmarked": true,
  "tags": ["important", "reference"],
  "timestamp": "2025-01-15T12:00:00.000Z"
}
```

#### Export Sessions

```http
GET /api/claude/sessions/{sessionId}/export
POST /api/claude/sessions/{sessionId}/export
```

**Query Parameters (GET):**

- `format` - Export format: `markdown`, `json`, `html`, `pdf` (default: `markdown`)
- `includeMetadata` - Include session metadata (default: true)
- `includeCodeOnly` - Export only code blocks (default: false)
- `includeToolCalls` - Include tool call information (default: true)
- `dateFormat` - Date format: `iso`, `relative`, `local` (default: `local`)

**POST Body:**

```json
{
  "format": "markdown",
  "includeMetadata": true,
  "includeCodeOnly": false,
  "includeToolCalls": true,
  "dateFormat": "local"
}
```

**Response Headers:**

```
Content-Type: text/markdown
Content-Disposition: attachment; filename="claude-session-my-project-2025-01-15-03cec800.md"
```

### Analytics

#### Get Usage Analytics

```http
GET /api/claude/analytics
POST /api/claude/analytics
```

**Query Parameters (GET):**

- `project` - Filter by specific project
- `days` - Analysis timeframe in days (default: 30, max: 365)
- `includeCode` - Include code-specific analytics (default: false)
- `type` - Analytics type: `general`, `code` (default: `general`)

**POST Body:**

```json
{
  "projectId": "my-project",
  "days": 30,
  "includeCode": true,
  "filters": {
    "minMessageCount": 5
  },
  "metrics": ["general", "code"]
}
```

**Response:**

```json
{
  "totalSessions": 42,
  "totalMessages": 1250,
  "totalCodeBlocks": 180,
  "averageSessionDuration": 1847,
  "mostActiveProject": "my-main-project",
  "dailyActivity": [
    {
      "date": "2025-01-15",
      "sessionCount": 3,
      "messageCount": 45,
      "codeBlockCount": 12
    }
  ],
  "topTools": [
    {
      "name": "Edit",
      "count": 125,
      "percentage": 62.5
    }
  ],
  "languageDistribution": [
    {
      "language": "javascript",
      "count": 95,
      "percentage": 52.8
    }
  ],
  "sessionDurationDistribution": [
    {
      "range": "15-30min",
      "count": 18,
      "percentage": 42.9
    }
  ],
  "codeAnalytics": {
    "totalCodeBlocks": 180,
    "averageCodeBlockSize": 245,
    "mostModifiedFiles": [
      {
        "file": "src/api.js",
        "count": 8
      }
    ],
    "codePatterns": [
      {
        "pattern": "function",
        "count": 67,
        "description": "Function definitions"
      }
    ]
  },
  "generatedAt": "2025-01-15T12:00:00.000Z",
  "timeframe": "30 days",
  "projectScope": "all projects"
}
```

## Data Models

### ClaudeSession

```typescript
interface ClaudeSession {
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
}
```

### SessionMessage

```typescript
interface SessionMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  toolCalls?: ToolCall[];
  codeBlocks?: CodeBlock[];
  tokenCount?: number;
  model?: string;
}
```

## Error Responses

All endpoints return consistent error responses:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {
      "additional": "context"
    }
  },
  "timestamp": "2025-01-15T12:00:00.000Z",
  "path": "/api/claude/sessions",
  "method": "GET"
}
```

**Common Error Codes:**

- `SESSION_NOT_FOUND` - Session ID not found
- `INVALID_SESSION_ID` - Invalid session ID format
- `MISSING_QUERY` - Search query is required
- `INVALID_LIMIT` - Limit parameter out of range
- `SESSIONS_FETCH_ERROR` - General error fetching sessions
- `SEARCH_ERROR` - Error during search operation
- `EXPORT_ERROR` - Error during export operation

## Usage Examples

### Get Recent Sessions

```javascript
const response = await fetch('/api/claude/sessions?limit=10&sortBy=startTime&sortOrder=desc');
const data = await response.json();
console.log(data.sessions);
```

### Search for Code Examples

```javascript
const searchQuery = {
  query: 'React useEffect',
  searchIn: ['content', 'code'],
  limit: 5,
};

const response = await fetch('/api/claude/sessions/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(searchQuery),
});

const results = await response.json();
console.log(results.results);
```

### Export Session as Markdown

```javascript
const sessionId = '03cec800-54b0-4b06-8967-6e31c859133b';
const response = await fetch(
  `/api/claude/sessions/${sessionId}/export?format=markdown&includeCodeOnly=true`
);

const markdown = await response.text();
console.log(markdown);
```

### Get Usage Analytics

```javascript
const response = await fetch('/api/claude/analytics?days=7&includeCode=true');
const analytics = await response.json();

console.log(`Total sessions: ${analytics.totalSessions}`);
console.log(`Most used language: ${analytics.languageDistribution[0]?.language}`);
```

## Local Storage

The API uses local storage for:

- **Bookmarks**: `~/.claude/data/bookmarks.json`
- **Archives**: `~/.claude/data/archives.json` (future feature)
- **Cache**: In-memory caching for performance

## Performance Considerations

- **Caching**: Session data is cached in memory for 5 minutes
- **Search Indexing**: Full-text search indexes are rebuilt hourly
- **Pagination**: Use `limit` and `offset` for large datasets
- **Date Filtering**: Use date ranges to limit processing scope

## Integration with Task Master UI

The Claude History API integrates seamlessly with the existing Task Master UI:

- Session data can be linked to Task Master tasks
- Code snippets can be extracted and added to task documentation
- Analytics can inform project planning and resource allocation

This API provides a robust foundation for accessing and analyzing Claude Code conversation history, enabling powerful workflows for developers working with AI-assisted development tools.
