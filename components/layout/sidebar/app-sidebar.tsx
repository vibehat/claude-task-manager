'use client';

import * as React from 'react';
import { Box, FolderKanban, Inbox, Layers } from 'lucide-react';
import { RiPresentationLine, RiGithubLine } from '@remixicon/react';

import { NavTeams } from '@/components/layout/sidebar/nav-teams';
import { NavWorkspace } from '@/components/layout/sidebar/nav-workspace';
import { NavInbox } from '@/components/layout/sidebar/nav-inbox';
import { HelpButton } from '@/components/layout/sidebar/help-button';
import { OrgSwitcher } from '@/components/layout/sidebar/org-switcher';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { teams } from '@/lib/mock-data/teams';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
   return (
      <Sidebar collapsible="offcanvas" {...props}>
         <SidebarHeader>
            <OrgSwitcher />
         </SidebarHeader>
         <SidebarContent>
            <NavInbox inbox={data.inbox} />
            <NavWorkspace workspace={data.workspace} />
            <NavTeams items={teams} />
         </SidebarContent>
         <SidebarFooter>
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
         </SidebarFooter>
      </Sidebar>
   );
}
