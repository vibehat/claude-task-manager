import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  RichMarkdownEditor,
  MarkdownViewer,
} from '@/features/tasks/components/editors/RichMarkdownEditor';

interface ContextPackageCardProps {
  initialValue?: string;
  onGenerate?: () => Promise<string> | string;
}

const DEFAULT_TEMPLATE = `# Problem\n\n# Requirements\n\n# Constraints\n\n# Patterns to follow\n\n# Dependencies\n\n# Validation criteria`;

export function ContextPackageCard({
  initialValue = DEFAULT_TEMPLATE,
  onGenerate,
}: ContextPackageCardProps): React.JSX.Element {
  const [value, setValue] = useState<string>(initialValue);
  const [mode, setMode] = useState<'edit' | 'preview' | 'live'>('live');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCopy = async (): Promise<void> => {
    await navigator.clipboard.writeText(value);
  };

  const handleGenerate = async (): Promise<void> => {
    if (!onGenerate) return;
    setIsGenerating(true);
    try {
      const generated = await onGenerate();
      setValue(generated);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Context Package</CardTitle>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setMode(mode === 'live' ? 'preview' : 'live')}
            >
              {mode === 'preview' ? 'Edit' : 'Preview'}
            </Button>
            <Button size="sm" variant="secondary" onClick={handleCopy}>
              Copy
            </Button>
            {onGenerate && (
              <Button size="sm" onClick={handleGenerate} disabled={isGenerating}>
                {isGenerating ? 'Generating...' : 'Generate'}
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {mode === 'preview' ? (
          <MarkdownViewer source={value} className="prose dark:prose-invert max-w-none" />
        ) : (
          <RichMarkdownEditor value={value} onChange={setValue} height={360} preview={mode} />
        )}
      </CardContent>
    </Card>
  );
}
