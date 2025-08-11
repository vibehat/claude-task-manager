import type {
  NoteContentResponse,
  NotesCategoriesConfig,
  NotesListResponse,
} from '../types/note.types';

export async function fetchNotesList(signal?: AbortSignal): Promise<NotesListResponse> {
  const res = await fetch('/api/docs/list', { signal, cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to fetch docs list: ${res.status}`);
  return res.json();
}

export async function fetchNoteContent(
  pathParam: string,
  signal?: AbortSignal
): Promise<NoteContentResponse> {
  const url = new URL('/api/docs/content', window.location.origin);
  url.searchParams.set('path', pathParam);
  const res = await fetch(url.toString(), { signal, cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to read doc: ${res.status}`);
  return res.json();
}

export async function fetchCategories(signal?: AbortSignal): Promise<NotesCategoriesConfig> {
  const res = await fetch('/api/docs/categories', { signal, cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to fetch categories: ${res.status}`);
  return res.json();
}

export async function updateCategories(
  config: NotesCategoriesConfig
): Promise<{ success: boolean } & { config?: NotesCategoriesConfig; error?: string }> {
  const res = await fetch('/api/docs/categories', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(config),
  });
  return res.json();
}

export async function searchNotes(
  query: string,
  signal?: AbortSignal
): Promise<{ query: string; results: Array<{ path: string; title?: string; match?: string }> }> {
  const url = new URL('/api/docs/search', window.location.origin);
  url.searchParams.set('q', query);
  const res = await fetch(url.toString(), { signal, cache: 'no-store' });
  if (!res.ok) throw new Error('Search failed');
  return res.json();
}

export async function saveNoteContent(
  pathParam: string,
  content: string,
  signal?: AbortSignal
): Promise<{ success: boolean; path: string }> {
  const res = await fetch('/api/docs/content', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ path: pathParam, content }),
    signal,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({ error: 'Failed to save document' }));
    throw new Error(errorData.error || `Failed to save document: ${res.status}`);
  }

  return res.json();
}
