import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RichMarkdownEditor } from '@/features/tasks/components/editors/RichMarkdownEditor';
import { Bold, Italic, Hash, Link2, Image, Code2, Table, CheckSquare, Eye } from 'lucide-react';

interface ContentEditorSectionProps {
  content: string;
  onChange: (content: string) => void;
}

export function ContentEditorSection({
  content,
  onChange,
}: ContentEditorSectionProps): React.JSX.Element {
  const [previewMode, setPreviewMode] = useState<'edit' | 'live' | 'preview'>('live');

  // Sample content for demonstration
  const sampleContent = `# JWT Token Implementation Research

## Key Findings

- **Security**: Use RS256 for production environments
- **Token Lifespan**: Short access tokens (15min), longer refresh
- **Secret Management**: Store in environment variables, rotate

## Implementation Notes

\`\`\`javascript
const token = jwt.sign(payload, secret, {
  expiresIn: '15m',
  algorithm: 'RS256'
});
\`\`\`

## Next Steps
- [ ] Implement token generation function
- [ ] Add error handling for expired tokens
- [ ] Create refresh token logic`;

  const handleInsertSample = () => {
    onChange(sampleContent);
  };

  const toolbarButtons = [
    { icon: Bold, label: 'Bold', shortcut: 'Ctrl+B' },
    { icon: Italic, label: 'Italic', shortcut: 'Ctrl+I' },
    { icon: Hash, label: 'Headers', shortcut: 'Ctrl+H' },
    { icon: Link2, label: 'Links', shortcut: 'Ctrl+L' },
    { icon: Image, label: 'Images', shortcut: 'Ctrl+G' },
    { icon: Code2, label: 'Code', shortcut: 'Ctrl+`' },
    { icon: Table, label: 'Tables', shortcut: 'Ctrl+T' },
    { icon: CheckSquare, label: 'Checklists', shortcut: 'Ctrl+Shift+C' },
  ];

  return (
    <div className="border rounded-lg bg-card">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span>✏️</span>
            Content Editor
          </h2>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleInsertSample}
              disabled={content !== ''}
            >
              Insert Sample Content
            </Button>
            <Button
              type="button"
              variant={previewMode === 'preview' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setPreviewMode(previewMode === 'preview' ? 'live' : 'preview')}
              className="flex items-center gap-2"
            >
              <Eye className="h-4 w-4" />
              Preview
            </Button>
          </div>
        </div>

        {/* Custom Toolbar */}
        <div className="flex items-center gap-1 p-3 bg-muted/50 rounded-t-md border-b">
          {toolbarButtons.map((button) => {
            const Icon = button.icon;
            return (
              <Button
                key={button.label}
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                title={`${button.label} (${button.shortcut})`}
              >
                <Icon className="h-4 w-4" />
              </Button>
            );
          })}
        </div>

        {/* Rich Markdown Editor */}
        <div className="border-t-0">
          <RichMarkdownEditor
            value={content}
            onChange={onChange}
            placeholder="Start typing your markdown here...\n\n## Example:\n\n# Your Note Title\n\n- Point 1\n- Point 2\n\n```javascript\ncode here\n```"
            height={400}
            preview={previewMode}
            visibleDragBar={true}
            className="border-t-0 rounded-t-none"
          />
        </div>
      </div>
    </div>
  );
}
