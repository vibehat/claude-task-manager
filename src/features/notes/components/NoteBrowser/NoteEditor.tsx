'use client';

import dynamic from 'next/dynamic';

const MDEditor = dynamic(() => import('@uiw/react-md-editor').then((m) => m.default), {
  ssr: false,
});

interface NoteEditorProps {
  content: string;
  onChange: (content: string) => void;
  height: number | string;
}

export function NoteEditor({ content, onChange, height }: NoteEditorProps): React.JSX.Element {
  return (
    <div className="w-full">
      <MDEditor
        value={content}
        onChange={(value) => onChange(value || '')}
        preview="edit"
        hideToolbar={false}
        height={height}
        data-color-mode="dark"
      />
    </div>
  );
}
