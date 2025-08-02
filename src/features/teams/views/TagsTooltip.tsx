'use client';

import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from '@/components/ui/TooltipProvider';
import type { Tag } from '@/mock-data/tags';
import { TagIcon } from 'lucide-react';

interface TagsTooltipProps {
   tags: Tag[];
}

export function TagsTooltip({ tags }: TagsTooltipProps): React.JSX.Element {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <div className="flex items-center gap-2 cursor-pointer">
                  <TagIcon className="size-4" />
                  <span>{tags.length}</span>
               </div>
            </TooltipTrigger>
            <TooltipContent className="p-2">
               <div className="flex flex-col gap-1">
                  {tags.map((tag, index) => (
                     <div key={index} className="flex items-center gap-1.5">
                        <tag.icon className="size-4 shrink-0" />
                        <span className="text-sm w-full text-left">{tag?.name}</span>
                        <div className="shrink-0">
                           <tag.status.icon />
                        </div>
                     </div>
                  ))}
               </div>
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
}
