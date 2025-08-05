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
import type { TaskPriority } from '@/libs/client/types';
import { useDataStore, useAllPriorities } from '@/libs/client/stores';
import { getPriorityIcon } from '@/features/tasks/constants/NoPriorityIcon';

const getPriorityIconName = (name: string): string => {
  switch (name.toLowerCase()) {
    case 'urgent':
      return 'UrgentPriorityIcon';
    case 'high':
      return 'HighPriorityIcon';
    case 'medium':
      return 'MediumPriorityIcon';
    case 'low':
      return 'LowPriorityIcon';
    default:
      return 'NoPriorityIcon';
  }
};
import { CheckIcon } from 'lucide-react';
import { useEffect, useId, useState } from 'react';

interface PrioritySelectorProps {
  priority: string | null | undefined;
  taskId?: string;
}

export function PrioritySelector({ priority, taskId }: PrioritySelectorProps): React.JSX.Element {
  const id = useId();
  const [open, setOpen] = useState<boolean>(false);
  // Priority is now always a string or null/undefined
  const [value, setValue] = useState<string>(priority || 'no-priority');

  const updateTask = useDataStore((state) => state.updateTask);
  const priorities = useAllPriorities();

  useEffect(() => {
    setValue(priority || 'no-priority');
  }, [priority]);

  const handlePriorityChange = async (priorityName: string): Promise<void> => {
    setValue(priorityName);
    setOpen(false);

    if (taskId) {
      try {
        await updateTask(taskId, { priority: priorityName });
      } catch (error) {
        console.error('Failed to update task priority:', error);
      }
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
              const selectedItem = priorities.find(
                (item) => item.name.toLowerCase() === value.toLowerCase()
              );
              if (selectedItem) {
                const Icon = getPriorityIcon(getPriorityIconName(selectedItem.name));
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
                  const Icon = getPriorityIcon(getPriorityIconName(item.name));
                  return (
                    <CommandItem
                      key={item.id}
                      value={item.name}
                      onSelect={handlePriorityChange}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="text-muted-foreground size-4" />
                        {item.name}
                      </div>
                      {value.toLowerCase() === item.name.toLowerCase() && (
                        <CheckIcon size={16} className="ml-auto" />
                      )}
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
