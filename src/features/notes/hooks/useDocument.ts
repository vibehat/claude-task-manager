import { useEffect, useState, useCallback } from 'react';
import { fetchNoteContent, saveNoteContent } from '../services/docsClient';
import type { NoteContentResponse } from '../types/note.types';

interface UseDocumentOptions {
  documentPath: string;
}

interface UseDocumentState {
  document: NoteContentResponse | null;
  content: string;
  originalContent: string;
  loading: boolean;
  saving: boolean;
  error: string | null;
  hasChanges: boolean;
}

interface UseDocumentActions {
  loadDocument: () => Promise<void>;
  saveDocument: () => Promise<void>;
  updateContent: (newContent: string) => void;
  resetContent: () => void;
  clearError: () => void;
}

export function useDocument({
  documentPath,
}: UseDocumentOptions): UseDocumentState & UseDocumentActions {
  const [document, setDocument] = useState<NoteContentResponse | null>(null);
  const [content, setContent] = useState<string>('');
  const [originalContent, setOriginalContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasChanges, setHasChanges] = useState(false);

  // Update hasChanges when content changes
  useEffect(() => {
    setHasChanges(content !== originalContent);
  }, [content, originalContent]);

  // Load document when path changes
  useEffect(() => {
    if (documentPath) {
      loadDocument();
    }
  }, [documentPath]);

  const loadDocument = useCallback(async () => {
    if (!documentPath) return;

    try {
      setLoading(true);
      setError(null);

      const response = await fetchNoteContent(documentPath);

      setDocument(response);
      setContent(response.content);
      setOriginalContent(response.content);
    } catch (err: any) {
      setError(err.message || 'Failed to load document');
      setDocument(null);
      setContent('');
      setOriginalContent('');
    } finally {
      setLoading(false);
    }
  }, [documentPath]);

  const saveDocument = useCallback(async () => {
    if (!documentPath || !hasChanges) return;

    try {
      setSaving(true);
      setError(null);

      await saveNoteContent(documentPath, content);

      // Update original content to reflect saved state
      setOriginalContent(content);

      // Update document metadata
      if (document) {
        setDocument({
          ...document,
          content,
          lastModified: new Date().toISOString(),
        });
      }
    } catch (err: any) {
      setError(err.message || 'Failed to save document');
      throw err; // Re-throw so calling code can handle it
    } finally {
      setSaving(false);
    }
  }, [documentPath, content, hasChanges, document]);

  const updateContent = useCallback((newContent: string) => {
    setContent(newContent);
    setError(null); // Clear errors when user makes changes
  }, []);

  const resetContent = useCallback(() => {
    setContent(originalContent);
    setError(null);
  }, [originalContent]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    // State
    document,
    content,
    originalContent,
    loading,
    saving,
    error,
    hasChanges,

    // Actions
    loadDocument,
    saveDocument,
    updateContent,
    resetContent,
    clearError,
  };
}
