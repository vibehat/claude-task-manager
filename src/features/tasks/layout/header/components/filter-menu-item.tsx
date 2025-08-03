'use client';

import { CommandItem } from '@/components/ui/command';
import { ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FilterMenuItemProps {
   icon: LucideIcon;
   label: string;
   count: number;
   onClick: () => void;
}

export function FilterMenuItem({
   icon: Icon,
   label,
   count,
   onClick,
}: FilterMenuItemProps): React.JSX.Element {
   return (
      <CommandItem onSelect={onClick} className="flex items-center justify-between cursor-pointer">
         <span className="flex items-center gap-2">
            <Icon className="size-4 text-muted-foreground" />
            {label}
         </span>
         <div className="flex items-center">
            {count > 0 && <span className="text-xs text-muted-foreground mr-1">{count}</span>}
            <ChevronRight className="size-4" />
         </div>
      </CommandItem>
   );
}
