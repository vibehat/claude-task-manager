'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit3, Eye, Save, X, FileText, AlertCircle, Loader2 } from 'lucide-react';
import {
  RichMarkdownEditor,
  MarkdownViewer,
} from '@/features/tasks/components/editors/RichMarkdownEditor';
import { useDocument } from '../../hooks/useDocument';
import { useRouter } from 'next/navigation';

interface DocumentViewEditProps {
  documentPath: string;
}

type ViewMode = 'view' | 'edit';

export function DocumentViewEdit({ documentPath }: DocumentViewEditProps): React.JSX.Element {
  const [mode, setMode] = useState<ViewMode>('view');
  const router = useRouter();

  const {
    document,
    content,
    loading,
    saving,
    error,
    hasChanges,
    updateContent,
    saveDocument,
    resetContent,
    clearError,
  } = useDocument({ documentPath });

  const handleSave = async () => {
    try {
      await saveDocument();
      setMode('view');
    } catch (err) {
      // Error is already handled by the hook
    }
  };

  const handleCancel = () => {
    resetContent();
    setMode('view');
    clearError();
  };

  const handleBackToBrowse = () => {
    if (hasChanges && mode === 'edit') {
      const confirmed = confirm('You have unsaved changes. Are you sure you want to leave?');
      if (!confirmed) return;
    }
    router.push('/workspace/browse-files');
  };

  const getFileName = (path: string) => {
    return path.split('/').pop() || path;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="space-y-6 h-full">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackToBrowse}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Browse
          </Button>
        </div>

        <div className="flex items-center justify-center py-12">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Loading document...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error && !document) {
    return (
      <div className="space-y-6 h-full">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackToBrowse}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Browse
          </Button>
        </div>

        <div className="flex items-center justify-center py-12">
          <div className="flex items-center gap-3 text-destructive">
            <AlertCircle className="h-5 w-5" />
            <span>{error}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 h-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackToBrowse}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Browse
          </Button>
          <div className="h-6 w-px bg-border" />
          <div className="flex items-center gap-2 text-muted-foreground">
            <FileText className="h-4 w-4" />
            <span className="text-sm font-medium">{getFileName(documentPath)}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {mode === 'view' ? (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setMode('edit')}
              className="flex items-center gap-2"
            >
              <Edit3 className="h-4 w-4" />
              Edit
            </Button>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCancel}
                disabled={saving}
                className="flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Cancel
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleSave}
                disabled={!hasChanges || saving}
                className="flex items-center gap-2"
              >
                {saving ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save className="h-4 w-4" />
                )}
                {saving ? 'Saving...' : 'Save'}
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Document metadata */}
      {document && (
        <div className="bg-muted/30 px-4 py-3 rounded-lg text-sm text-muted-foreground">
          <div className="flex items-center justify-between">
            <span className="font-mono">{documentPath}</span>
            <span>Last modified: {formatDate(document.lastModified)}</span>
          </div>
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 px-4 py-3 rounded-lg">
          <div className="flex items-center gap-2 text-destructive text-sm">
            <AlertCircle className="h-4 w-4" />
            {error}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-h-0">
        {mode === 'view' ? (
          <div className="border rounded-lg bg-card">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Document View
                </h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMode('edit')}
                  className="flex items-center gap-2"
                >
                  <Edit3 className="h-4 w-4" />
                  Switch to Edit
                </Button>
              </div>

              <div className="prose prose-sm max-w-none dark:prose-invert">
                <MarkdownViewer source={content} className="min-h-[400px]" />
              </div>
            </div>
          </div>
        ) : (
          <div className="border rounded-lg bg-card">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Edit3 className="h-5 w-5" />
                  Edit Document
                  {hasChanges && (
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-normal">
                      (unsaved changes)
                    </span>
                  )}
                </h2>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setMode('view')}
                    disabled={saving}
                    className="flex items-center gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    Preview
                  </Button>
                </div>
              </div>

              <RichMarkdownEditor
                value={content}
                onChange={updateContent}
                placeholder="Edit your document content here..."
                height={600}
                preview="live"
                visibleDragBar={true}
                className="border-0"
                disabled={saving}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
