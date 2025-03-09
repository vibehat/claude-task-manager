'use client';

import { users } from '@/mock-data/users';
import MemberLine from './member-line';

export default function Members() {
   return (
      <div className="">
         <div className="bg-container px-6 py-1.5 text-sm flex items-center text-muted-foreground border-b sticky top-0 z-10">
            <div className="w-[30%]">Name</div>
            <div className="w-[20%]">Status</div>
            <div className="w-[20%]">Joined</div>
            <div className="w-[30%]">Teams</div>
         </div>

         <div className="w-full flex flex-col items-center">
            {users.map((user) => (
               <MemberLine key={user.id} user={user} />
            ))}
         </div>
      </div>
   );
}
