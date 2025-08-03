'use client';

import React from 'react';

// CommandMode type moved to main types file
export type CommandMode = 'search' | 'select' | 'input' | 'input-with-actions';

interface CommandSearchInputProps {
   mode: CommandMode;
   value: string;
   onValueChange: (value: string) => void;
   inputPlaceholder?: string;
}

export function CommandSearchInput({
   mode,
   value,
   onValueChange,
   inputPlaceholder,
}: CommandSearchInputProps) {
   const getPlaceholder = () => {
      switch (mode) {
         case 'input':
            return inputPlaceholder || 'Type here...';
         case 'select':
            return 'Search options...';
         case 'search':
         default:
            return 'Search...';
      }
   };

   return (
      <div className="p-1.5 relative z-10 border-b border-transparent h-14 transition">
         <input
            className="peer rounded-xl border border-gray-200 dark:border-white/10 bg-background-light dark:bg-background-dark h-full w-full outline-none text-gray-950 dark:text-white placeholder:text-gray-400 placeholder:dark:text-white/50 tracking-tight pl-11 pr-14 focus:border-slate-950 dark:focus:border-white transition shadow-search"
            placeholder={getPlaceholder()}
            autoComplete="off"
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            autoFocus
         />
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search absolute left-5 top-1/2 -translate-y-1/2 text-gray-950 dark:text-white opacity-50 peer-focus:opacity-100 peer-disabled:opacity-30"
         >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
         </svg>
         <div className="top-1/2 -translate-y-1/2 absolute right-6 flex items-center justify-center rounded-md gap-1 px-1.5 py-1.5 bg-gray-950/5 dark:bg-white/5 text-zinc-950/70 dark:text-white/70 font-medium text-xs leading-[9px]">
            ESC
         </div>
      </div>
   );
}
