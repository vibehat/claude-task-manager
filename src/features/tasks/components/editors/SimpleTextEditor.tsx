'use client';

import { Textarea } from '@/components/ui/textarea';

interface SimpleTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function SimpleTextEditor({
  value,
  onChange,
  placeholder = 'Add a description...',
  disabled = false,
  className = 'min-h-[200px] w-full',
}: SimpleTextEditorProps): React.JSX.Element {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
    />
  );
}

export default SimpleTextEditor;
