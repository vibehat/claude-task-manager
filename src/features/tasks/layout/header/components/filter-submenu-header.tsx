'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface FilterSubMenuHeaderProps {
   title: string;
   onBack: () => void;
}

export function FilterSubMenuHeader({
   title,
   onBack,
}: FilterSubMenuHeaderProps): React.JSX.Element {
   return (
      <div className="flex items-center border-b p-2">
         <Button variant="ghost" size="icon" className="size-6" onClick={onBack}>
            <ChevronRight className="size-4 rotate-180" />
         </Button>
         <span className="ml-2 font-medium">{title}</span>
      </div>
   );
}
