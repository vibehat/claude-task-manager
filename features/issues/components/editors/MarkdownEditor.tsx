'use client';

import { Editor, rootCtx } from '@milkdown/kit/core';
import { commonmark } from '@milkdown/kit/preset/commonmark';
import { Milkdown, MilkdownProvider, useEditor } from '@milkdown/react';

interface MarkdownEditorProps {
   value: string;
   onChange: (value: string) => void;
   placeholder?: string;
   disabled?: boolean;
   className?: string;
}

const MilkdownEditor: React.FC<MarkdownEditorProps> = ({
   value,
   onChange,
   placeholder = 'Add a description...',
   disabled = false,
   className = 'min-h-[200px] w-full',
}) => {
   const { get } = useEditor((root) =>
      Editor.make()
         .config((ctx) => {
            ctx.set(rootCtx, root);
         })
         .use(commonmark)
   );

   return <Milkdown />;
};

export function MarkdownEditor(props: MarkdownEditorProps): React.JSX.Element {
   return (
      <MilkdownProvider>
         <MilkdownEditor {...props} />
      </MilkdownProvider>
   );
}

export default MarkdownEditor;
