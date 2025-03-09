'use client';

import { RiGithubLine, RiPresentationLine } from '@remixicon/react';
import { Box, FolderKanban, Inbox, Layers } from 'lucide-react';
import * as React from 'react';

import { HelpButton } from '@/components/layout/sidebar/help-button';
import { NavInbox } from '@/components/layout/sidebar/nav-inbox';
import { NavTeams } from '@/components/layout/sidebar/nav-teams';
import { NavWorkspace } from '@/components/layout/sidebar/nav-workspace';
import { OrgSwitcher } from '@/components/layout/sidebar/org-switcher';
import { Button } from '@/components/ui/button';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { teams } from '@/mock-data/teams';
import Link from 'next/link';
import { X } from 'lucide-react';

const data = {
   inbox: [
      {
         name: 'Inbox',
         url: '#',
         icon: Inbox,
      },
      {
         name: 'My issues',
         url: '#',
         icon: FolderKanban,
      },
   ],
   workspace: [
      {
         name: 'Initiatives',
         url: '#',
         icon: RiPresentationLine,
      },
      {
         name: 'Projects',
         url: '/lndev-ui/team/CORE/projects/all',
         icon: Box,
      },
      {
         name: 'Views',
         url: '#',
         icon: Layers,
      },
   ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   const [open, setOpen] = React.useState(true);
   return (
      <Sidebar collapsible="offcanvas" {...props}>
         <SidebarHeader>
            <OrgSwitcher />
         </SidebarHeader>
         <SidebarContent>
            <NavInbox inbox={data.inbox} />
            <NavWorkspace workspace={data.workspace} />
            <NavTeams items={teams.filter((t) => t.joined)} />
         </SidebarContent>
         <SidebarFooter>
            <div className="w-full flex flex-col gap-2">
               {open && (
                  <div className="group relative flex flex-col gap-2 rounded-lg border p-4 text-sm mt-6 w-full">
                     <div
                        className="absolute top-2.5 right-2 z-10 cursor-pointer"
                        onClick={() => setOpen(!open)}
                        role="button"
                     >
                        <X className="size-4" />
                     </div>
                     <div className="text-balance text-lg font-semibold leading-tight group-hover:underline">
                        Fine components coded by lndev.
                     </div>
                     <div>
                        A fun collection of small, well-coded components to streamline your
                        development process.
                     </div>
                     <Link
                        target="_blank"
                        rel="noreferrer"
                        className="absolute inset-0"
                        href="https://ui.lndev.me"
                     >
                        <span className="sr-only">Deploy to Vercel</span>
                     </Link>
                     <Button size="sm" className="w-full">
                        <Link href="https://ui.lndev.me" target="_blank" rel="noopener noreferrer">
                           ui.lndev.me
                        </Link>
                     </Button>
                  </div>
               )}
               <div className="w-full flex items-center justify-between">
                  <HelpButton />
                  <Button size="icon" variant="secondary" asChild>
                     <Link
                        href="https://github.com/lndev-ui/circle"
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
