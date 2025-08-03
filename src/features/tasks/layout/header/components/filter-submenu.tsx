'use client';

import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandList,
} from '@/components/ui/command';
import { FilterSubMenuHeader } from './filter-submenu-header';
import { FilterSubMenuItem } from './filter-submenu-item';
import { Hash, Star } from 'lucide-react';
import type { ReactNode } from 'react';

interface FilterOption {
   id: string;
   name: string;
   icon?: any;
   color?: string;
}

interface FilterSubMenuProps {
   title: string;
   placeholder: string;
   options: FilterOption[];
   selectedValues: string[];
   currentTagId?: string;
   tagCounts?: Record<string, number>;
   onBack: () => void;
   onToggle: (value: string) => void;
   renderOptionContent?: (option: FilterOption) => ReactNode;
}

export function FilterSubMenu({
   title,
   placeholder,
   options,
   selectedValues,
   currentTagId,
   tagCounts,
   onBack,
   onToggle,
   renderOptionContent,
}: FilterSubMenuProps): React.JSX.Element {
   const defaultRenderContent = (option: FilterOption) => {
      if (title === 'Tag') {
         const isCurrentTag = currentTagId && option.id === currentTagId;
         return (
            <div className="flex items-center gap-2">
               <Hash className={`size-4 ${isCurrentTag ? 'text-primary' : ''}`} />
               <div className="flex items-center gap-1">
                  <span className={isCurrentTag ? 'text-primary font-medium' : ''}>
                     {option.name}
                  </span>
                  {isCurrentTag && (
                     <Star
                        className="size-3 flex-shrink-0"
                        style={{
                           color: 'var(--description-header)',
                           fill: 'var(--description-header)',
                        }}
                     />
                  )}
               </div>
            </div>
         );
      }

      if (title === 'Labels') {
         return (
            <div className="flex items-center gap-2">
               <span className="size-3 rounded-full" style={{ backgroundColor: option.color }} />
               {option.name}
            </div>
         );
      }

      return (
         <div className="flex items-center gap-2">
            {option.icon && <option.icon className="text-muted-foreground size-4" />}
            {option.name}
         </div>
      );
   };

   return (
      <Command>
         <FilterSubMenuHeader title={title} onBack={onBack} />
         <CommandInput placeholder={placeholder} />
         <CommandList>
            <CommandEmpty>No {title.toLowerCase()} found.</CommandEmpty>
            <CommandGroup>
               {options.map((option) => {
                  const count = title === 'Tag' && tagCounts ? tagCounts[option.id] || 0 : 0;
                  return (
                     <FilterSubMenuItem
                        key={option.id}
                        value={option.id}
                        isSelected={selectedValues.includes(option.id)}
                        onSelect={() => onToggle(option.id)}
                        count={count}
                     >
                        {renderOptionContent
                           ? renderOptionContent(option)
                           : defaultRenderContent(option)}
                     </FilterSubMenuItem>
                  );
               })}
            </CommandGroup>
         </CommandList>
      </Command>
   );
}
