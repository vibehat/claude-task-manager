import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { statusUserColors, User } from '@/mock-data/users';
import { format } from 'date-fns';
import { ContactRound } from 'lucide-react';

interface MemberLineProps {
   user: User;
}

export default function MemberLine({ user }: MemberLineProps) {
   return (
      <div className="w-full flex items-center py-3 px-6 border-b hover:bg-sidebar/50 border-muted-foreground/5 text-sm last:border-b-0">
         <div className="flex items-center gap-2">
            <div className="relative">
               <Avatar className="size-8 shrink-0">
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
               </Avatar>
               <span
                  className="border-background absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full border-2"
                  style={{ backgroundColor: statusUserColors[user.status] }}
               >
                  <span className="sr-only">{user.status}</span>
               </span>
            </div>
            <div className="flex flex-col items-start">
               <span className="font-medium">{user.name}</span>
               <span className="text-xs text-muted-foreground">{user.email}</span>
            </div>
         </div>
         <div className="text-xs text-muted-foreground">{user.role}</div>
         <div className="text-xs text-muted-foreground">
            {format(new Date(user.joinedDate), 'MMM yyyy')}
         </div>
         <div className="flex items-center gap-0.5">
            <ContactRound className="text-muted-foreground size-4 mr-1" />
            {user.teamIds.slice(0, 2).map((teamId, index) => (
               <span key={teamId} className="text-xs text-muted-foreground mt-0.5">
                  {teamId}
                  {index < user.teamIds.length - 1 && ', '}
               </span>
            ))}
            {user.teamIds.length > 2 && (
               <span className="text-xs text-muted-foreground mt-0.5">
                  + {user.teamIds.length - 2}
               </span>
            )}
         </div>
      </div>
   );
}
