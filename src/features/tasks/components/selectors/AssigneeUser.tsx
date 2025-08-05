'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import type { User } from '@/mock-data/users';

interface AssigneeUserProps {
  user: User | null;
  size?: 'sm' | 'md' | 'lg';
}

export function AssigneeUser({ user, size = 'sm' }: AssigneeUserProps): React.JSX.Element {
  if (!user) {
    return (
      <Avatar className={size === 'sm' ? 'size-6' : size === 'md' ? 'size-8' : 'size-10'}>
        <AvatarFallback className="text-xs">?</AvatarFallback>
      </Avatar>
    );
  }

  const sizeClass = size === 'sm' ? 'size-6' : size === 'md' ? 'size-8' : 'size-10';
  const initials = user.name
    .split('.')
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);

  return (
    <Avatar className={sizeClass}>
      <AvatarImage src={user.avatarUrl} alt={user.name} />
      <AvatarFallback className="text-xs">{initials}</AvatarFallback>
    </Avatar>
  );
}
