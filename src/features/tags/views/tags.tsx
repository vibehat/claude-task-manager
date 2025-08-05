'use client';

import { tags } from '@/mock-data/tags';

export default function Tags(): React.JSX.Element {
  return (
    <div className="w-full">
      <div className="bg-container px-6 py-1.5 text-sm flex items-center text-muted-foreground border-b sticky top-0 z-10">
        <div className="w-[60%] sm:w-[70%] xl:w-[46%]">Title</div>
        <div className="w-[20%] sm:w-[10%] xl:w-[13%] pl-2.5">Health</div>
        <div className="hidden w-[10%] sm:block pl-2">Priority</div>
        <div className="hidden xl:block xl:w-[13%] pl-2">Lead</div>
        <div className="hidden xl:block xl:w-[13%] pl-2.5">Target date</div>
        <div className="w-[20%] sm:w-[10%] pl-2">Status</div>
      </div>

      <div className="w-full">
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="w-full flex items-center py-3 px-6 border-b hover:bg-sidebar/50 border-muted-foreground/5 text-sm"
          >
            <div className="w-[60%] sm:w-[70%] xl:w-[46%] flex items-center gap-2">
              <div className="relative">
                <div className="inline-flex size-6 bg-muted/50 items-center justify-center rounded shrink-0">
                  <tag.icon className="size-4" />
                </div>
              </div>
              <div className="flex flex-col items-start overflow-hidden">
                <span className="font-medium truncate w-full">{tag.name}</span>
              </div>
            </div>
            <div className="w-[20%] sm:w-[10%] xl:w-[13%]">
              <span className="text-xs">{tag.health.name}</span>
            </div>
            <div className="hidden w-[10%] sm:block">
              <span className="text-xs">{tag.priority.name}</span>
            </div>
            <div className="hidden xl:block xl:w-[13%]">
              <span className="text-xs">{tag.lead.name}</span>
            </div>
            <div className="hidden xl:block xl:w-[13%]">
              <span className="text-xs">{new Date(tag.startDate).toLocaleDateString()}</span>
            </div>
            <div className="w-[20%] sm:w-[10%]">
              <span className="text-xs">
                {tag.status.name} ({tag.percentComplete}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
