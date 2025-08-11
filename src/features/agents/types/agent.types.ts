// Agent frontmatter schema based on the execution plan
export interface AgentFrontmatter {
  name: string;
  description: string;
  model: string;
  role: string;
  temperature?: number;
  tools?: string[];
  memory?: {
    scope: 'project' | 'team' | 'personal';
    paths?: string[];
  };
  tags?: string[];
  visibility?: 'team' | 'project' | 'personal';
  version?: number;
}

// Agent file summary for listing
export interface AgentFileSummary {
  path: string;
  name?: string;
  description?: string;
  tags?: string[];
  lastModified: string;
  model?: string;
  role?: string;
}

// API response types following Notes pattern
export interface AgentsListResponse {
  items: AgentFileSummary[];
}

export interface AgentContentResponse {
  path: string;
  content: string;
}

// API request types
export interface SaveAgentContentRequest {
  path: string;
  content: string;
}

export interface CreateAgentRequest {
  path: string;
  content?: string;
}

// Search response
export interface AgentSearchResponse {
  query: string;
  results: Array<{
    path: string;
    title?: string;
    match?: string;
  }>;
}

// Common API error response
export interface ApiErrorResponse {
  error: string;
}

// Success response
export interface ApiSuccessResponse {
  success: boolean;
  path?: string;
}
