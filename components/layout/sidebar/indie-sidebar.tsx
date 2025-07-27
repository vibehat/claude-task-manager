'use client';

import { RiGithubLine } from '@remixicon/react';
import * as React from 'react';
import Image from 'next/image';

import { HelpButton } from '@/components/layout/sidebar/help-button';
import { ModeSwitcher } from '@/components/layout/sidebar/mode-switcher';
import { Button } from '@/components/ui/button';
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar';
import { indieNavigationSections } from '@/mock-data/indie-sidebar-nav';
import Link from 'next/link';

interface IndieSidebarProps extends React.ComponentProps<typeof Sidebar> {
   className?: string;
}

export function IndieSidebar({ className, ...props }: IndieSidebarProps): JSX.Element {
   return (
      <Sidebar collapsible="offcanvas" className={className} {...props}>
         <SidebarHeader>
            <div className="px-2 py-1">
               <ModeSwitcher />
            </div>
         </SidebarHeader>

         <SidebarContent>
            {indieNavigationSections.map((section) => (
               <SidebarGroup key={section.label}>
                  <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
                  <SidebarMenu>
                     {section.items.map((item) => (
                        <SidebarMenuItem key={item.name}>
                           <SidebarMenuButton asChild>
                              <Link href={item.url}>
                                 <item.icon className="h-4 w-4" />
                                 <span>{item.name}</span>
                              </Link>
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                     ))}
                  </SidebarMenu>
               </SidebarGroup>
            ))}
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

export default IndieSidebar;
