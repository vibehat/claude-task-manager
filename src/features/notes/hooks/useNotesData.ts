import { useEffect, useMemo, useState } from 'react';
import type { NoteFileSummary, NotesListResponse } from '../types/note.types';
import { fetchNotesList, searchNotes } from '../services/docsClient';

export interface UseNotesOptions {
  category?: string;
  query?: string;
}

export function useNotesData(options: UseNotesOptions = {}) {
  const { category, query } = options;
  const [data, setData] = useState<NotesListResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<Array<{
    path: string;
    title?: string;
    match?: string;
  }> | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchNotesList()
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        setError(e?.message ?? 'Failed to load notes');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!query || query.trim().length === 0) {
      setSearchResults(null);
      return;
    }

    const controller = new AbortController();
    const id = setTimeout(() => {
      searchNotes(query, controller.signal)
        .then((res) => {
          if (!controller.signal.aborted) {
            setSearchResults(res.results);
          }
        })
        .catch(() => {
          if (!controller.signal.aborted) {
            setSearchResults([]);
          }
        });
    }, 200);

    return () => {
      controller.abort();
      clearTimeout(id);
    };
  }, [query]);

  const filteredFiles: NoteFileSummary[] = useMemo(() => {
    const files = data?.files ?? [];
    if (!category || category === 'All') return files;
    return files.filter(
      (f) =>
        (f.category.name ?? (f.category.type === 'uncategorized' ? 'Uncategorized' : '')) ===
        category
    );
  }, [data, category]);

  return {
    loading,
    error,
    categories: data?.categories ?? [],
    files: filteredFiles,
    searchResults,
  };
}
