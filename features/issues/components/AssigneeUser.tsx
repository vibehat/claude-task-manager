'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import type { User } from '@/libs/client/graphql-client/generated';
import { CheckIcon, CircleUserRound, Send, UserIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { DEFAULT_CONFIG } from '@/libs/config/defaults';

interface AssigneeUserProps {
   user: Pick<User, 'id' | 'name' | 'email' | 'avatarUrl'> | null | undefined;
}

export function AssigneeUser({ user }: AssigneeUserProps): React.JSX.Element {
   const [open, setOpen] = useState(false);
   const [currentAssignee, setCurrentAssignee] = useState<
      Pick<User, 'id' | 'name' | 'email' | 'avatarUrl'> | null | undefined
   >(user);

   useEffect(() => {
      setCurrentAssignee(user);
   }, [user]);

   const renderAvatar = (): React.JSX.Element => {
      if (currentAssignee) {
         return (
            <Avatar className="size-6 shrink-0">
               <AvatarImage
                  src={currentAssignee.avatarUrl || undefined}
                  alt={currentAssignee.name}
               />
               <AvatarFallback>{currentAssignee.name[0]}</AvatarFallback>
            </Avatar>
         );
      } else {
         return (
            <div className="size-6 flex items-center justify-center">
               <CircleUserRound className="size-5 text-zinc-600" />
            </div>
         );
      }
   };

   return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
         <DropdownMenuTrigger asChild>
            <button className="relative w-fit focus:outline-none">
               {renderAvatar()}
               {currentAssignee && (
                  <span className="border-background absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full border-2 bg-green-500">
                     <span className="sr-only">online</span>
                  </span>
               )}
            </button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="start" className="w-[206px]">
            <DropdownMenuLabel>Assign to...</DropdownMenuLabel>
            <DropdownMenuItem
               onClick={(e) => {
                  e.stopPropagation();
                  setCurrentAssignee(null);
                  setOpen(false);
               }}
            >
               <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>No assignee</span>
               </div>
               {!currentAssignee && <CheckIcon className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* TODO: Load users from GraphQL query */}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>New user</DropdownMenuLabel>
            <DropdownMenuItem>
               <div className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  <span>Invite and assign...</span>
               </div>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
