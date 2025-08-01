'use client';

import React from 'react';
import { CommandGroup, CommandItem } from '@/components/ui/command';
import type { CommandOption } from '../types';

interface CommandSelectViewProps {
   options: CommandOption[];
   isLoading: boolean;
   onSelectOption: (option: CommandOption) => void;
}

export function CommandSelectView({ options, isLoading, onSelectOption }: CommandSelectViewProps) {
   if (isLoading || options.length === 0) {
      return null;
   }

   return (
      <CommandGroup>
         {options.map((option) => (
            <CommandItem
               key={option.id}
               value={`${option.id} ${option.title}`}
               onSelect={() => onSelectOption(option)}
               disabled={option.disabled}
               className="cursor-pointer"
            >
               {option.icon && <span className="mr-2 flex-shrink-0">{option.icon}</span>}
               <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{option.title}</div>
                  {option.description && (
                     <div className="text-xs text-muted-foreground truncate">
                        {option.description}
                     </div>
                  )}
               </div>
            </CommandItem>
         ))}
      </CommandGroup>
   );
}
