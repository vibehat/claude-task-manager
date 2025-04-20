import {
   ContextMenuContent,
   ContextMenuGroup,
   ContextMenuItem,
   ContextMenuSeparator,
   ContextMenuShortcut,
} from '@/components/ui/context-menu';
import {
   CircleCheck,
   User,
   BarChart3,
   Tag,
   Folder,
   CalendarClock,
   Pencil,
   Link as LinkIcon,
   Repeat2,
   Copy as CopyIcon,
   PlusSquare,
   Flag,
   ArrowRightLeft,
   Bell,
   Star,
   AlarmClock,
   Trash2,
} from 'lucide-react';
import React from 'react';

export function IssueContextMenu() {
   return (
      <ContextMenuContent className="w-64">
         <ContextMenuGroup>
            <ContextMenuItem>
               <CircleCheck className="mr-2 size-4" /> Status
               <ContextMenuShortcut>S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
               <User className="mr-2 size-4" /> Assignee
               <ContextMenuShortcut>A</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
               <BarChart3 className="mr-2 size-4" /> Priority
               <ContextMenuShortcut>P</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
               <Tag className="mr-2 size-4" /> Labels
               <ContextMenuShortcut>L</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
               <Folder className="mr-2 size-4" /> Project
               <ContextMenuShortcut>⇧P</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
               <CalendarClock className="mr-2 size-4" /> Set due date...
               <ContextMenuShortcut>D</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
               <Pencil className="mr-2 size-4" /> Rename...
               <ContextMenuShortcut>R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
               <LinkIcon className="mr-2 size-4" /> Add link...
               <ContextMenuShortcut>Ctrl L</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
               <Repeat2 className="mr-2 size-4" /> Convert into
            </ContextMenuItem>
            <ContextMenuItem>
               <CopyIcon className="mr-2 size-4" /> Make a copy...
            </ContextMenuItem>
         </ContextMenuGroup>
         <ContextMenuSeparator />
         <ContextMenuItem>
            <PlusSquare className="mr-2 size-4" /> Create related
         </ContextMenuItem>
         <ContextMenuItem>
            <Flag className="mr-2 size-4" /> Mark as
         </ContextMenuItem>
         <ContextMenuItem>
            <ArrowRightLeft className="mr-2 size-4" /> Move
         </ContextMenuItem>
         <ContextMenuSeparator />
         <ContextMenuItem>
            <Bell className="mr-2 size-4" /> Subscribe
            <ContextMenuShortcut>S</ContextMenuShortcut>
         </ContextMenuItem>
         <ContextMenuItem>
            <Star className="mr-2 size-4" /> Favorite
            <ContextMenuShortcut>F</ContextMenuShortcut>
         </ContextMenuItem>
         <ContextMenuItem>
            <CopyIcon className="mr-2 size-4" /> Copy
         </ContextMenuItem>
         <ContextMenuItem>
            <AlarmClock className="mr-2 size-4" /> Remind me
            <ContextMenuShortcut>H</ContextMenuShortcut>
         </ContextMenuItem>
         <ContextMenuSeparator />
         <ContextMenuItem variant="destructive">
            <Trash2 className="mr-2 size-4" /> Delete...
            <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
         </ContextMenuItem>
      </ContextMenuContent>
   );
}
