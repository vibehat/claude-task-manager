'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MDEditor from '@uiw/react-md-editor';
import { ArrowLeft } from 'lucide-react';
// import '@uiw/react-md-editor/markdown-editor.css';
// import '@uiw/react-md-editor/markdown.css';
import { useTheme } from 'next-themes';

const initialMarkdown = `# Welcome to the Markdown Editor Demo!

This is a demo page for the **@uiw/react-md-editor** component.

## Features

- ✨ Real-time preview
- 🎨 Syntax highlighting
- 📝 GitHub flavored markdown
- 🌙 Dark mode support
- ⌨️ Keyboard shortcuts

## Code Example

\`\`\`javascript
function hello() {
  console.log("Hello, Markdown!");
}
\`\`\`

## Lists

### Unordered List
- Item 1
- Item 2
  - Nested item
  - Another nested item
- Item 3

### Ordered List
1. First item
2. Second item
3. Third item

## Tables

| Feature | Status |
|---------|---------|
| Preview | ✅ |
| Syntax Highlighting | ✅ |
| Dark Mode | ✅ |

## Links

Visit the [official documentation](https://github.com/uiwjs/react-md-editor) for more information.

## Images

![Placeholder Image](https://via.placeholder.com/300x200)

## Blockquotes

> This is a blockquote.
> It can span multiple lines.

## Task Lists

- [x] Create demo page
- [x] Add sample content
- [ ] Customize toolbar
- [ ] Add more features

---

**Happy editing!** 🚀
`;

export default function MarkdownEditorDemo() {
  const [value, setValue] = useState<string>(initialMarkdown);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-2">
          <Link
            href="/debug/index"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Debug & Demo Tools
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">Markdown Editor Demo</h1>
          <p className="text-muted-foreground">
            A powerful markdown editor with real-time preview, powered by @uiw/react-md-editor
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-2xl font-semibold">Editor Features</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Full markdown syntax support</li>
                <li>• Live preview as you type</li>
                <li>• Customizable toolbar</li>
                <li>• Keyboard shortcuts (Ctrl/Cmd + B for bold, etc.)</li>
                <li>• Tab key support for indentation</li>
                <li>• Auto-list continuation</li>
                <li>• Code syntax highlighting</li>
                <li>• Dark mode compatible</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-2xl font-semibold">Keyboard Shortcuts</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bold</span>
                  <kbd className="rounded bg-muted px-2 py-1 text-xs">Ctrl/Cmd + B</kbd>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Italic</span>
                  <kbd className="rounded bg-muted px-2 py-1 text-xs">Ctrl/Cmd + I</kbd>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Link</span>
                  <kbd className="rounded bg-muted px-2 py-1 text-xs">Ctrl/Cmd + K</kbd>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Code</span>
                  <kbd className="rounded bg-muted px-2 py-1 text-xs">Ctrl/Cmd + E</kbd>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Save</span>
                  <kbd className="rounded bg-muted px-2 py-1 text-xs">Ctrl/Cmd + S</kbd>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-2xl font-semibold">Statistics</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Characters:</span>
                  <span className="ml-2 font-semibold">{value.length}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Words:</span>
                  <span className="ml-2 font-semibold">
                    {value.trim().split(/\s+/).filter(Boolean).length}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Lines:</span>
                  <span className="ml-2 font-semibold">{value.split('\n').length}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Paragraphs:</span>
                  <span className="ml-2 font-semibold">
                    {value.split('\n\n').filter(Boolean).length}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-2xl font-semibold">Preview Options</h2>
              <div className="space-y-3">
                <button
                  onClick={() => setValue('')}
                  className="w-full rounded bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground hover:bg-destructive/90"
                >
                  Clear Editor
                </button>
                <button
                  onClick={() => setValue(initialMarkdown)}
                  className="w-full rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Reset to Default
                </button>
                <button
                  onClick={() => {
                    const blob = new Blob([value], { type: 'text/markdown' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'document.md';
                    a.click();
                    URL.revokeObjectURL(url);
                  }}
                  className="w-full rounded bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
                >
                  Download as Markdown
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Markdown Editor</h2>
          <div className="overflow-hidden rounded-lg border">
            {mounted && (
              <div data-color-mode={isDark ? 'dark' : 'light'}>
                <div className="wmde-markdown-var">
                  <MDEditor
                    value={value}
                    onChange={(val) => setValue(val || '')}
                    height={500}
                    preview="live"
                    visibleDragbar
                    textareaProps={{
                      placeholder: 'Start typing your markdown here...',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-2xl font-semibold">Preview Only Mode</h2>
          {mounted && (
            <div data-color-mode={isDark ? 'dark' : 'light'}>
              <div className="wmde-markdown-var">
                <MDEditor.Markdown source={value} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
