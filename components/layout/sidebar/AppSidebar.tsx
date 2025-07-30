'use client';

import { RiGithubLine } from '@remixicon/react';
import * as React from 'react';
import Image from 'next/image';

import { HelpButton } from '@/components/layout/sidebar/HelpButton';
import { NavInbox } from '@/components/layout/sidebar/NavInbox';
import { NavTeams } from '@/components/layout/sidebar/NavTeams';
import { NavWorkspace } from '@/components/layout/sidebar/NavWorkspace';
import { NavAccount } from '@/components/layout/sidebar/NavAccount';
import { NavFeatures } from '@/components/layout/sidebar/NavFeatures';
import { NavTeamsSettings } from '@/components/layout/sidebar/NavTeamsSettings';
import { OrgSwitcher } from '@/components/layout/sidebar/OrgSwitcher';
import { Button } from '@/components/ui/button';
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
} from '@/components/ui/SidebarProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BackToApp } from '@/components/layout/sidebar/BackToApp';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>): React.JSX.Element {
   const pathname = usePathname();
   const isSettings = pathname.includes('/settings');
   return (
      <Sidebar collapsible="offcanvas" {...props}>
         <SidebarHeader>{isSettings ? <BackToApp /> : <OrgSwitcher />}</SidebarHeader>
         <SidebarContent>
            {isSettings ? (
               <>
                  <NavAccount />
                  <NavFeatures />
                  <NavTeamsSettings />
               </>
            ) : (
               <>
                  <NavInbox />
                  <NavWorkspace />
                  <NavTeams />
               </>
            )}
         </SidebarContent>
         <SidebarFooter>
            <div className="w-full flex flex-col gap-2">
               <a className="my-1.5" href="https://vercel.com/oss">
                  <Image
                     alt="Vercel OSS Program"
                     src="https://vercel.com/oss/program-badge.svg"
                     width={120}
                     height={32}
                  />
               </a>
               <div className="w-full flex items-center justify-between">
                  <HelpButton />
                  <Button size="icon" variant="secondary" asChild>
                     <Link
                        href="https://github.com/ln-dev7/circle"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <RiGithubLine className="size-4" />
                     </Link>
                  </Button>
               </div>
            </div>
         </SidebarFooter>
      </Sidebar>
   );
}
