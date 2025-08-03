'use client';

import { Button } from '@/components/ui/button';
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
   CommandSeparator,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { useIssuesStore } from '@/store/issues-store';
import { useFilterStore } from '@/store/filterStore';
import { status as allStatus } from '@/mock-data/StatusIcon';
import { priorities } from '@/mock-data/priorities';
import { labels } from '@/mock-data/labels';
import { tags } from '@/mock-data/tags';
import { users } from '@/mock-data/users';
import {
   CheckIcon,
   ChevronRight,
   ListFilter,
   User,
   CircleCheck,
   BarChart3,
   Tag,
   Folder,
} from 'lucide-react';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Define filter types
type FilterType = 'status' | 'priority' | 'labels' | 'tag';

export function Filter(): React.JSX.Element {
   const [open, setOpen] = useState<boolean>(false);
   const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);

   const { filters, toggleFilter, clearFilters, getActiveFiltersCount } = useFilterStore();

   // TODO: Now using local data
   // const { filterByStatus, filterByAssignee, filterByPriority, filterByLabel, filterByProject } =
   //    useIssuesStore();

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild>
            <Button size="xs" variant="ghost" className="relative">
               <ListFilter className="size-4 mr-1" />
               Filter
               {getActiveFiltersCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] rounded-full size-4 flex items-center justify-center">
                     {getActiveFiltersCount()}
                  </span>
               )}
            </Button>
         </PopoverTrigger>
         <PopoverContent className="p-0 w-60" align="start">
            {activeFilter === null ? (
               <Command>
                  <CommandList>
                     <CommandGroup>
                        <CommandItem
                           onSelect={() => setActiveFilter('status')}
                           className="flex items-center justify-between cursor-pointer"
                        >
                           <span className="flex items-center gap-2">
                              <CircleCheck className="size-4 text-muted-foreground" />
                              Status
                           </span>
                           <div className="flex items-center">
                              {filters.status.length > 0 && (
                                 <span className="text-xs text-muted-foreground mr-1">
                                    {filters.status.length}
                                 </span>
                              )}
                              <ChevronRight className="size-4" />
                           </div>
                        </CommandItem>
                        <CommandItem
                           onSelect={() => setActiveFilter('priority')}
                           className="flex items-center justify-between cursor-pointer"
                        >
                           <span className="flex items-center gap-2">
                              <BarChart3 className="size-4 text-muted-foreground" />
                              Priority
                           </span>
                           <div className="flex items-center">
                              {filters.priority.length > 0 && (
                                 <span className="text-xs text-muted-foreground mr-1">
                                    {filters.priority.length}
                                 </span>
                              )}
                              <ChevronRight className="size-4" />
                           </div>
                        </CommandItem>
                        <CommandItem
                           onSelect={() => setActiveFilter('labels')}
                           className="flex items-center justify-between cursor-pointer"
                        >
                           <span className="flex items-center gap-2">
                              <Tag className="size-4 text-muted-foreground" />
                              Labels
                           </span>
                           <div className="flex items-center">
                              {filters.labels.length > 0 && (
                                 <span className="text-xs text-muted-foreground mr-1">
                                    {filters.labels.length}
                                 </span>
                              )}
                              <ChevronRight className="size-4" />
                           </div>
                        </CommandItem>
                        <CommandItem
                           onSelect={() => setActiveFilter('tag')}
                           className="flex items-center justify-between cursor-pointer"
                        >
                           <span className="flex items-center gap-2">
                              <Folder className="size-4 text-muted-foreground" />
                              Tag
                           </span>
                           <div className="flex items-center">
                              {filters.tag.length > 0 && (
                                 <span className="text-xs text-muted-foreground mr-1">
                                    {filters.tag.length}
                                 </span>
                              )}
                              <ChevronRight className="size-4" />
                           </div>
                        </CommandItem>
                     </CommandGroup>
                     {getActiveFiltersCount() > 0 && (
                        <>
                           <CommandSeparator />
                           <CommandGroup>
                              <CommandItem
                                 onSelect={() => clearFilters()}
                                 className="text-destructive"
                              >
                                 Clear all filters
                              </CommandItem>
                           </CommandGroup>
                        </>
                     )}
                  </CommandList>
               </Command>
            ) : activeFilter === 'status' ? (
               <Command>
                  <div className="flex items-center border-b p-2">
                     <Button
                        variant="ghost"
                        size="icon"
                        className="size-6"
                        onClick={() => setActiveFilter(null)}
                     >
                        <ChevronRight className="size-4 rotate-180" />
                     </Button>
                     <span className="ml-2 font-medium">Status</span>
                  </div>
                  <CommandInput placeholder="Search status..." />
                  <CommandList>
                     <CommandEmpty>No status found.</CommandEmpty>
                     <CommandGroup>
                        {allStatus.map((item) => (
                           <CommandItem
                              key={item.id}
                              value={item.id}
                              onSelect={() => toggleFilter('status', item.id)}
                              className="flex items-center justify-between"
                           >
                              <div className="flex items-center gap-2">
                                 <item.icon />
                                 {item.name}
                              </div>
                              {filters.status.includes(item.id) && (
                                 <CheckIcon size={16} className="ml-auto" />
                              )}
                              <span className="text-muted-foreground text-xs">
                                 {0 /* TODO: Now using local data*/}
                              </span>
                           </CommandItem>
                        ))}
                     </CommandGroup>
                  </CommandList>
               </Command>
            ) : activeFilter === 'priority' ? (
               <Command>
                  <div className="flex items-center border-b p-2">
                     <Button
                        variant="ghost"
                        size="icon"
                        className="size-6"
                        onClick={() => setActiveFilter(null)}
                     >
                        <ChevronRight className="size-4 rotate-180" />
                     </Button>
                     <span className="ml-2 font-medium">Priority</span>
                  </div>
                  <CommandInput placeholder="Search priority..." />
                  <CommandList>
                     <CommandEmpty>No priorities found.</CommandEmpty>
                     <CommandGroup>
                        {priorities.map((item) => (
                           <CommandItem
                              key={item.id}
                              value={item.id}
                              onSelect={() => toggleFilter('priority', item.id)}
                              className="flex items-center justify-between"
                           >
                              <div className="flex items-center gap-2">
                                 <item.icon className="text-muted-foreground size-4" />
                                 {item.name}
                              </div>
                              {filters.priority.includes(item.id) && (
                                 <CheckIcon size={16} className="ml-auto" />
                              )}
                              <span className="text-muted-foreground text-xs">
                                 {0 /* TODO: Now using local data*/}
                              </span>
                           </CommandItem>
                        ))}
                     </CommandGroup>
                  </CommandList>
               </Command>
            ) : activeFilter === 'labels' ? (
               <Command>
                  <div className="flex items-center border-b p-2">
                     <Button
                        variant="ghost"
                        size="icon"
                        className="size-6"
                        onClick={() => setActiveFilter(null)}
                     >
                        <ChevronRight className="size-4 rotate-180" />
                     </Button>
                     <span className="ml-2 font-medium">Labels</span>
                  </div>
                  <CommandInput placeholder="Search labels..." />
                  <CommandList>
                     <CommandEmpty>No labels found.</CommandEmpty>
                     <CommandGroup>
                        {labels.map((label) => (
                           <CommandItem
                              key={label.id}
                              value={label.id}
                              onSelect={() => toggleFilter('labels', label.id)}
                              className="flex items-center justify-between"
                           >
                              <div className="flex items-center gap-2">
                                 <span
                                    className="size-3 rounded-full"
                                    style={{ backgroundColor: label.color }}
                                 ></span>
                                 {label.name}
                              </div>
                              {filters.labels.includes(label.id) && (
                                 <CheckIcon size={16} className="ml-auto" />
                              )}
                              <span className="text-muted-foreground text-xs">
                                 {0 /* TODO: Now using local data*/}
                              </span>
                           </CommandItem>
                        ))}
                     </CommandGroup>
                  </CommandList>
               </Command>
            ) : activeFilter === 'tag' ? (
               <Command>
                  <div className="flex items-center border-b p-2">
                     <Button
                        variant="ghost"
                        size="icon"
                        className="size-6"
                        onClick={() => setActiveFilter(null)}
                     >
                        <ChevronRight className="size-4 rotate-180" />
                     </Button>
                     <span className="ml-2 font-medium">Tag</span>
                  </div>
                  <CommandInput placeholder="Search tags..." />
                  <CommandList>
                     <CommandEmpty>No tags found.</CommandEmpty>
                     <CommandGroup>
                        {tags.map((tag) => (
                           <CommandItem
                              key={tag.id}
                              value={tag.id}
                              onSelect={() => toggleFilter('tag', tag.id)}
                              className="flex items-center justify-between"
                           >
                              <div className="flex items-center gap-2">
                                 <tag.icon className="size-4" />
                                 {tag.name}
                              </div>
                              {filters.tag.includes(tag.id) && (
                                 <CheckIcon size={16} className="ml-auto" />
                              )}
                              <span className="text-muted-foreground text-xs">
                                 {0 /* TODO: Now using local data*/}
                              </span>
                           </CommandItem>
                        ))}
                     </CommandGroup>
                  </CommandList>
               </Command>
            ) : null}
         </PopoverContent>
      </Popover>
   );
}
