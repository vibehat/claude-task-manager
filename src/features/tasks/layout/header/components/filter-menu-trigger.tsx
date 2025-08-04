'use client';

import { Button } from '@/components/ui/button';
import { PopoverTrigger } from '@/components/ui/popover';
import { ListFilter } from 'lucide-react';

interface FilterMenuTriggerProps {
  activeFiltersCount: number;
}

export function FilterMenuTrigger({
  activeFiltersCount,
}: FilterMenuTriggerProps): React.JSX.Element {
  return (
    <PopoverTrigger asChild>
      <Button size="xs" variant="ghost" className="relative">
        <ListFilter className="size-4 mr-1" />
        Filter
        {activeFiltersCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full size-4 flex items-center justify-center">
            {activeFiltersCount}
          </span>
        )}
      </Button>
    </PopoverTrigger>
  );
}
