'use client';

import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/SidebarProvider';
import { tags } from '@/mock-data/tags';
import { Plus } from 'lucide-react';

export default function HeaderNav(): React.JSX.Element {
   return (
      <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
         <div className="flex items-center gap-2">
            <SidebarTrigger className="" />
            <div className="flex items-center gap-1">
               <span className="text-sm font-medium">Tags</span>
               <span className="text-xs bg-accent rounded-md px-1.5 py-1">{tags.length}</span>
            </div>
         </div>
         <div className="flex items-center gap-2">
            <Button className="relative" size="xs" variant="secondary">
               <Plus className="size-4" />
               <span className="hidden sm:inline ml-1">Create tag</span>
            </Button>
         </div>
      </div>
   );
}
