'use client';

import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/SidebarProvider';
import { useCommandPaletteStore } from '@/store/commandPaletteStore';
import { SearchIcon } from 'lucide-react';
import { TerminalToggle } from '@/features/terminal';

export default function HeaderNav(): React.JSX.Element {
   const { openCommandPalette } = useCommandPaletteStore();

   const handleSearchClick = () => {
      // Open command palette with task search command preselected
      openCommandPalette({
         commandId: 'task-search:search-tasks',
         autoExecute: true,
      });
   };

   return (
      <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
         <SidebarTrigger className="" />

         <div className="flex items-center gap-2">
            <Button
               variant="ghost"
               size="icon"
               onClick={handleSearchClick}
               className="h-8 w-8"
               aria-label="Search"
            >
               <SearchIcon className="h-4 w-4" />
            </Button>
            <TerminalToggle />
         </div>
      </div>
   );
}
