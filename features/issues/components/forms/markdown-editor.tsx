'use client';

import { useEffect, useRef } from 'react';
import { Crepe } from '@milkdown/crepe';
import '@/styles/milkdown-crepe.css';
import '@milkdown/crepe/theme/common/style.css';
import '@milkdown/crepe/theme/frame.css';

interface MarkdownEditorProps {
   value: string;
   onChange: (value: string) => void;
   placeholder?: string;
   disabled?: boolean;
   className?: string;
}

export function MarkdownEditor({
   value,
   onChange,
   placeholder = 'Add a description...',
   disabled = false,
   className = 'min-h-[200px] w-full',
}: MarkdownEditorProps): React.JSX.Element {
   const editorRef = useRef<HTMLDivElement>(null);
   const crepeRef = useRef<Crepe | null>(null);

   useEffect(() => {
      if (!editorRef.current || disabled) return;

      // Clean up previous editor if it exists
      if (crepeRef.current) {
         crepeRef.current.destroy();
      }

      // Create new Crepe instance
      const crepe = new Crepe({
         root: editorRef.current,
         defaultValue: value || placeholder,
      });

      crepe
         .on((listener) => {
            listener.markdownUpdated((ctx, markdown) => {
               onChange(markdown);
            });
         })
         .create()
         .then(() => {
            console.log('Milkdown editor created');
            crepeRef.current = crepe;
         })
         .catch((error) => {
            console.error('Failed to create Milkdown editor:', error);
         });

      // Cleanup on unmount
      return () => {
         if (crepeRef.current) {
            crepeRef.current.destroy();
            crepeRef.current = null;
         }
      };
   }, [value, placeholder, disabled, onChange]);

   // Clean up editor when disabled
   useEffect(() => {
      if (disabled && crepeRef.current) {
         crepeRef.current.destroy();
         crepeRef.current = null;
      }
   }, [disabled]);

   const getMarkdown = (): string => {
      if (crepeRef.current) {
         return crepeRef.current.getMarkdown();
      }
      return value;
   };

   // Expose getMarkdown method through ref
   useEffect(() => {
      (editorRef.current as any)?.setAttribute('data-get-markdown', getMarkdown);
   });

   return <div ref={editorRef} className={className} />;
}

export default MarkdownEditor;
