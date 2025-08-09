import type {
  AgentsListResponse,
  AgentContentResponse,
  SaveAgentContentRequest,
  CreateAgentRequest,
  AgentSearchResponse,
  ApiSuccessResponse,
} from '../types/agent.types';

export async function fetchAgentsList(signal?: AbortSignal): Promise<AgentsListResponse> {
  const res = await fetch('/api/claude/agents/list', { signal, cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to fetch agents list: ${res.status}`);
  return res.json();
}

export async function fetchAgentContent(
  pathParam: string,
  signal?: AbortSignal
): Promise<AgentContentResponse> {
  const url = new URL('/api/claude/agents/content', window.location.origin);
  url.searchParams.set('path', pathParam);
  const res = await fetch(url.toString(), { signal, cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to read agent: ${res.status}`);
  return res.json();
}

export async function saveAgentContent(
  pathParam: string,
  content: string,
  signal?: AbortSignal
): Promise<ApiSuccessResponse> {
  const res = await fetch('/api/claude/agents/content', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: pathParam, content } as SaveAgentContentRequest),
    signal,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({ error: 'Failed to save agent' }));
    throw new Error(errorData.error || `Failed to save agent: ${res.status}`);
  }

  return res.json();
}

export async function createAgent(
  pathParam: string,
  content?: string,
  signal?: AbortSignal
): Promise<ApiSuccessResponse> {
  const res = await fetch('/api/claude/agents/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: pathParam, content } as CreateAgentRequest),
    signal,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({ error: 'Failed to create agent' }));
    throw new Error(errorData.error || `Failed to create agent: ${res.status}`);
  }

  return res.json();
}

export async function deleteAgent(
  pathParam: string,
  signal?: AbortSignal
): Promise<ApiSuccessResponse> {
  const url = new URL('/api/claude/agents/content', window.location.origin);
  url.searchParams.set('path', pathParam);
  const res = await fetch(url.toString(), {
    method: 'DELETE',
    signal,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({ error: 'Failed to delete agent' }));
    throw new Error(errorData.error || `Failed to delete agent: ${res.status}`);
  }

  return res.json();
}

export async function searchAgents(
  query: string,
  signal?: AbortSignal
): Promise<AgentSearchResponse> {
  const url = new URL('/api/claude/agents/search', window.location.origin);
  url.searchParams.set('q', query);
  const res = await fetch(url.toString(), { signal, cache: 'no-store' });
  if (!res.ok) throw new Error('Agent search failed');
  return res.json();
}
