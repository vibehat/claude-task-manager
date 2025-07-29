'use client';

import { Button } from '@/components/ui/button';
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import type { IssuePriority } from '@/libs/client/graphql-client/generated';
import {
   useGetPrioritiesQuery,
   useUpdateIssuePriorityMutation,
   SortOrder,
} from '@/libs/client/graphql-client/generated';
import { getPriorityIcon } from '@/features/issues/constants/priority-icons';
import { CheckIcon } from 'lucide-react';
import { useEffect, useId, useState } from 'react';

interface PrioritySelectorProps {
   priority: Pick<IssuePriority, 'id' | 'iconName' | 'name'> | string | null | undefined;
   issueId?: string;
}

export function PrioritySelector({ priority, issueId }: PrioritySelectorProps): React.JSX.Element {
   const id = useId();
   const [open, setOpen] = useState<boolean>(false);
   const priorityId = typeof priority === 'string' ? priority : priority?.id;
   const [value, setValue] = useState<string>(priorityId || 'no-priority');

   const [updatePriority] = useUpdateIssuePriorityMutation();
   const { data: prioritiesData } = useGetPrioritiesQuery({
      variables: {
         orderBy: [{ order: SortOrder.Asc }],
      },
   });

   const priorities = prioritiesData?.issuePriorities || [];

   useEffect(() => {
      setValue(priorityId || 'no-priority');
   }, [priorityId]);

   const handlePriorityChange = (priorityId: string): void => {
      setValue(priorityId);
      setOpen(false);

      if (issueId) {
         updatePriority({
            variables: {
               id: issueId,
               priorityId: priorityId,
            },
         });
      }
   };

   return (
      <div className="*:not-first:mt-2">
         <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
               <Button
                  id={id}
                  className="size-7 flex items-center justify-center"
                  size="icon"
                  variant="ghost"
                  role="combobox"
                  aria-expanded={open}
               >
                  {((): React.JSX.Element => {
                     const selectedItem = priorities.find((item) => item.id === value);
                     if (selectedItem) {
                        const Icon = getPriorityIcon(selectedItem.iconName);
                        return <Icon className="text-muted-foreground size-4" />;
                     }
                     return <></>;
                  })()}
               </Button>
            </PopoverTrigger>
            <PopoverContent
               className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
               align="start"
            >
               <Command>
                  <CommandInput placeholder="Set priority..." />
                  <CommandList>
                     <CommandEmpty>No priority found.</CommandEmpty>
                     <CommandGroup>
                        {priorities.map((item) => {
                           const Icon = getPriorityIcon(item.iconName);
                           return (
                              <CommandItem
                                 key={item.id}
                                 value={item.id}
                                 onSelect={handlePriorityChange}
                                 className="flex items-center justify-between"
                              >
                                 <div className="flex items-center gap-2">
                                    <Icon className="text-muted-foreground size-4" />
                                    {item.name}
                                 </div>
                                 {value === item.id && <CheckIcon size={16} className="ml-auto" />}
                                 <span className="text-muted-foreground text-xs">{0}</span>
                              </CommandItem>
                           );
                        })}
                     </CommandGroup>
                  </CommandList>
               </Command>
            </PopoverContent>
         </Popover>
      </div>
   );
}

export default PrioritySelector;
