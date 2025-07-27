'use client';

import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function HeaderNav(): React.JSX.Element {
   return (
      <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
         <SidebarTrigger className="" />
         <div className="flex items-center gap-2">
            <h2 className="text-sm font-medium">Dashboard</h2>
         </div>
      </div>
   );
}
