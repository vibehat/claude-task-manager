'use client';

import {
   Command,
   CommandGroup,
   CommandItem,
   CommandList,
   CommandSeparator,
} from '@/components/ui/command';
import { Popover, PopoverContent } from '@/components/ui/popover';
import { useFilterStore } from '@/store/filterStore';
import { status as allStatus } from '@/mock-data/StatusIcon';
import { priorities } from '@/mock-data/priorities';
import { labels } from '@/mock-data/labels';
import { useAllTags, useTagCounts, useCurrentTag } from '@/libs/client/stores';
import { CircleCheck, BarChart3, Tag, Hash } from 'lucide-react';
import { useState } from 'react';
import { FilterMenuTrigger, FilterMenuItem, FilterSubMenu } from './components';

// Define filter types
type FilterType = 'status' | 'priority' | 'labels' | 'tag';

export function Filter(): React.JSX.Element {
   const [open, setOpen] = useState<boolean>(false);
   const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);

   const { filters, toggleFilter, clearFilters, getActiveFiltersCount } = useFilterStore();
   const tags = useAllTags();
   const tagCounts = useTagCounts();
   const currentTagId = useCurrentTag();

   const handleBackToMain = () => setActiveFilter(null);

   const renderSubMenu = () => {
      switch (activeFilter) {
         case 'status':
            return (
               <FilterSubMenu
                  title="Status"
                  placeholder="Search status..."
                  options={allStatus}
                  selectedValues={filters.status}
                  onBack={handleBackToMain}
                  onToggle={(value) => toggleFilter('status', value)}
               />
            );
         case 'priority':
            return (
               <FilterSubMenu
                  title="Priority"
                  placeholder="Search priority..."
                  options={priorities}
                  selectedValues={filters.priority}
                  onBack={handleBackToMain}
                  onToggle={(value) => toggleFilter('priority', value)}
               />
            );
         case 'labels':
            return (
               <FilterSubMenu
                  title="Labels"
                  placeholder="Search labels..."
                  options={labels}
                  selectedValues={filters.labels}
                  onBack={handleBackToMain}
                  onToggle={(value) => toggleFilter('labels', value)}
               />
            );
         case 'tag':
            return (
               <FilterSubMenu
                  title="Tag"
                  placeholder="Search tags..."
                  options={tags}
                  selectedValues={filters.tag}
                  currentTagId={currentTagId}
                  tagCounts={tagCounts}
                  onBack={handleBackToMain}
                  onToggle={(value) => toggleFilter('tag', value)}
               />
            );
         default:
            return null;
      }
   };

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <FilterMenuTrigger activeFiltersCount={getActiveFiltersCount()} />
         <PopoverContent className="p-0 w-60" align="start">
            {activeFilter === null ? (
               <Command>
                  <CommandList>
                     <CommandGroup>
                        <FilterMenuItem
                           icon={CircleCheck}
                           label="Status"
                           count={filters.status.length}
                           onClick={() => setActiveFilter('status')}
                        />
                        <FilterMenuItem
                           icon={BarChart3}
                           label="Priority"
                           count={filters.priority.length}
                           onClick={() => setActiveFilter('priority')}
                        />
                        <FilterMenuItem
                           icon={Tag}
                           label="Labels"
                           count={filters.labels.length}
                           onClick={() => setActiveFilter('labels')}
                        />
                        <FilterMenuItem
                           icon={Hash}
                           label="Tag"
                           count={filters.tag.length}
                           onClick={() => setActiveFilter('tag')}
                        />
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
            ) : (
               renderSubMenu()
            )}
         </PopoverContent>
      </Popover>
   );
}
