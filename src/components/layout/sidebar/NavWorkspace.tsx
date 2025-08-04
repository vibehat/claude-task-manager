'use client';

import { Layers, LayoutList, MoreHorizontal } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/SidebarProvider';
import Link from 'next/link';
import { workspaceItems } from '@/mock-data/sideBarNav';
import { RiPresentationLine } from '@remixicon/react';

export function NavWorkspace(): React.JSX.Element {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Workspace</SidebarGroupLabel>
      <SidebarMenu>
        {workspaceItems.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton asChild>
                <span>
                  <MoreHorizontal />
                  <span>More</span>
                </span>
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 rounded-lg" side="bottom" align="start">
              <DropdownMenuItem>
                <RiPresentationLine className="text-muted-foreground" />
                <span>Initiatives</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Layers className="text-muted-foreground" />
                <span>Views</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LayoutList className="text-muted-foreground" />
                <span>Customize sidebar</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
