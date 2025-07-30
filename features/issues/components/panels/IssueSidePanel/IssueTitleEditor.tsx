'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';

interface IssueTitleEditorProps {
   initialValue: string;
   onBlur: (value: string) => void;
   disabled?: boolean;
}

export function IssueTitleEditor({
   initialValue,
   onBlur,
   disabled = false,
}: IssueTitleEditorProps): React.JSX.Element {
   const [title, setTitle] = useState(initialValue);

   useEffect(() => {
      setTitle(initialValue);
   }, [initialValue]);

   const handleBlur = (): void => {
      if (title !== initialValue && title.trim()) {
         onBlur(title);
      }
   };

   return (
      <div className="space-y-2">
         <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleBlur}
            className="text-xl font-semibold border-none px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 dark:text-white dark:placeholder:text-gray-400 dark:bg-transparent"
            placeholder="Issue title"
            disabled={disabled}
         />
      </div>
   );
}

export default IssueTitleEditor;
