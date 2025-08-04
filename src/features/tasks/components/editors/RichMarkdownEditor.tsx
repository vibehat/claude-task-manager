'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

// Dynamically import MDEditor to avoid SSR issues
const MDEditor = dynamic(() => import('@uiw/react-md-editor').then((mod) => mod.default), {
  ssr: false,
});

const MDEditorMarkdown = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default.Markdown),
  { ssr: false }
);

interface RichMarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  height?: number;
  preview?: 'edit' | 'live' | 'preview';
  visibleDragBar?: boolean;
}

export function RichMarkdownEditor({
  value,
  onChange,
  placeholder = 'Start typing your markdown here...',
  disabled = false,
  className = '',
  height = 300,
  preview = 'live',
  visibleDragBar = true,
}: RichMarkdownEditorProps): React.JSX.Element {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  if (!mounted) {
    return (
      <div className={`border rounded-md bg-background ${className}`} style={{ height }}>
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Loading editor...
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-lg border ${className}`}>
      <div data-color-mode={isDark ? 'dark' : 'light'}>
        <div className="wmde-markdown-var">
          <MDEditor
            value={value}
            onChange={(val) => onChange(val || '')}
            height={height}
            preview={preview}
            visibleDragbar={visibleDragBar}
            textareaProps={{
              placeholder,
              disabled,
            }}
          />
        </div>
      </div>
    </div>
  );
}

interface MarkdownViewerProps {
  source: string;
  className?: string;
}

export function MarkdownViewer({ source, className = '' }: MarkdownViewerProps): React.JSX.Element {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  if (!mounted) {
    return (
      <div className={`text-sm text-foreground/80 leading-relaxed ${className}`}>
        {source || <span className="text-muted-foreground italic">Loading...</span>}
      </div>
    );
  }

  if (!source) {
    return (
      <div className={`text-sm text-muted-foreground italic ${className}`}>No content provided</div>
    );
  }

  return (
    <div className={className}>
      <div data-color-mode={isDark ? 'dark' : 'light'}>
        <div className="wmde-markdown-var">
          <MDEditorMarkdown source={source} />
        </div>
      </div>
    </div>
  );
}

export default RichMarkdownEditor;
