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
import type { IssueStatus } from '@/libs/client/graphql-client/generated';
import {
   useGetIssueStatusesQuery,
   useUpdateIssueStatusMutation,
} from '@/libs/client/graphql-client/generated';
import { getStatusIcon } from '@/features/issues/constants/status-icons';
import { CheckIcon } from 'lucide-react';
import { useEffect, useId, useState } from 'react';

interface StatusSelectorProps {
   status: Pick<IssueStatus, 'id' | 'iconName' | 'name' | 'color'> | string | null | undefined;
   issueId: string;
}

export function StatusSelector({ status, issueId }: StatusSelectorProps): React.JSX.Element {
   const id = useId();
   const [open, setOpen] = useState<boolean>(false);
   const statusId = typeof status === 'string' ? status : status?.id;
   const [value, setValue] = useState<string>(statusId || 'to-do');

   const [updateStatus] = useUpdateIssueStatusMutation();
   const { data: statusesData } = useGetIssueStatusesQuery();

   const statuses = statusesData?.issueStatuses || [];

   useEffect(() => {
      setValue(statusId || 'to-do');
   }, [statusId]);

   const handleStatusChange = (statusId: string): void => {
      setValue(statusId);
      setOpen(false);

      if (issueId) {
         updateStatus({
            variables: {
               id: issueId,
               status: statusId,
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
                     const selectedItem = statuses.find((item) => item.id === value);
                     if (selectedItem) {
                        const Icon = getStatusIcon(selectedItem.iconName);
                        return <Icon />;
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
                  <CommandInput placeholder="Set status..." />
                  <CommandList>
                     <CommandEmpty>No status found.</CommandEmpty>
                     <CommandGroup>
                        {statuses.map((item) => {
                           const Icon = getStatusIcon(item.iconName);
                           return (
                              <CommandItem
                                 key={item.id}
                                 value={item.id}
                                 onSelect={handleStatusChange}
                                 className="flex items-center justify-between"
                              >
                                 <div className="flex items-center gap-2">
                                    <Icon />
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

export default StatusSelector;
