'use client';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CircleCheck, CircleX, AlertCircle, HelpCircle, Bell } from 'lucide-react';
import type { Tag } from '@/mock-data/tags';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/useIsMobile';
import { cn } from '@/libs/client/utils';

interface HealthPopoverProps {
  tag: Tag;
}

export function HealthPopover({ tag }: HealthPopoverProps): React.JSX.Element {
  const getHealthIcon = (healthId: string): React.JSX.Element => {
    switch (healthId) {
      case 'on-track':
        return <CircleCheck className="size-4 text-green-500" />;
      case 'off-track':
        return <CircleX className="size-4 text-red-500" />;
      case 'at-risk':
        return <AlertCircle className="size-4 text-amber-500" />;
      case 'no-update':
      default:
        return <HelpCircle className="size-4 text-muted-foreground" />;
    }
  };

  const isMobile = useIsMobile();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="flex items-center justify-center gap-1 h-7 px-2"
          size="sm"
          variant="ghost"
        >
          {getHealthIcon(tag.health.id)}
          <span className="text-xs mt-[1px] ml-0.5 hidden xl:inline">{tag.health.name}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side={isMobile ? 'bottom' : 'left'}
        className={cn('p-0 w-[480px]', isMobile ? 'w-full' : '')}
      >
        <div className="flex items-center justify-between border-b p-3">
          <div className="flex items-center gap-2">
            {tag.icon && <tag.icon className="size-4 shrink-0 text-muted-foreground" />}
            <h4 className="font-medium text-sm">{tag.name}</h4>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
              Subscribe
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-7 px-2 text-xs flex items-center gap-1"
            >
              <Bell className="size-3" />
              New update
            </Button>
          </div>
        </div>
        <div className="p-3 space-y-3">
          <div className="flex items-center justify-start gap-3">
            <div className="flex items-center gap-2">
              {getHealthIcon(tag.health.id)}
              <span className="text-sm">{tag.health.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="size-5">
                <AvatarImage src={tag.lead.avatarUrl} alt={tag.lead.name} />
                <AvatarFallback>{tag.lead.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">{tag.lead.name}</span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">
                {new Date(tag.startDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">{tag.health.description}</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
