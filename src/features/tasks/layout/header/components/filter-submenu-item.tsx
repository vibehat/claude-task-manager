'use client';

import { CommandItem } from '@/components/ui/command';
import { CheckIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface FilterSubMenuItemProps {
   value: string;
   isSelected: boolean;
   onSelect: () => void;
   children: ReactNode;
   count?: number;
}

export function FilterSubMenuItem({
   value,
   isSelected,
   onSelect,
   children,
   count = 0,
}: FilterSubMenuItemProps): React.JSX.Element {
   return (
      <CommandItem
         key={value}
         value={value}
         onSelect={onSelect}
         className="flex items-center justify-between"
      >
         {children}
         {isSelected && <CheckIcon size={16} className="ml-auto" />}
         <span className="text-muted-foreground text-xs">{count}</span>
      </CommandItem>
   );
}
