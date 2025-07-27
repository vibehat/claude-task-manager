'use client';

import * as React from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { CreateIssueModalProvider } from '@/components/common/issues/create-issue-modal-provider';
import { IndieProjectProvider } from '@/libs/client/contexts/indie-project-context';
import { IndieSidebar } from '@/components/layout/sidebar/indie-sidebar';
import { cn } from '@/libs/client/utils';

interface IndieLayoutProps {
   children: React.ReactNode;
   header?: React.ReactNode;
   headersNumber?: 1 | 2;
   className?: string;
}

export function IndieLayout({
   children,
   header,
   headersNumber = 2,
   className,
}: IndieLayoutProps): React.JSX.Element {
   const height = {
      1: 'h-[calc(100svh-40px)] lg:h-[calc(100svh-56px)]',
      2: 'h-[calc(100svh-80px)] lg:h-[calc(100svh-96px)]',
   };

   return (
      <IndieProjectProvider>
         <SidebarProvider>
            <CreateIssueModalProvider />
            <IndieSidebar />
            <SidebarInset>
               <div className={cn('h-svh overflow-hidden lg:p-2 w-full', className)}>
                  <div className="lg:border lg:rounded-md overflow-hidden flex flex-col items-center justify-start bg-container h-full w-full">
                     {header}
                     <div className={cn('overflow-auto w-full', height[headersNumber])}>
                        {children}
                     </div>
                  </div>
               </div>
            </SidebarInset>
         </SidebarProvider>
      </IndieProjectProvider>
   );
}

export default IndieLayout;
