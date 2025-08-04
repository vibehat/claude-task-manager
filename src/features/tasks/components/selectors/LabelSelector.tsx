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
import { useAllLabels } from '@/libs/client/stores';
import { CheckIcon, Plus } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/libs/client/utils';

interface LabelSelectorProps {
  selectedLabels: Array<{
    id: string;
    label: {
      id: string;
      name: string;
      color: string;
    };
  }>;
  onChange: (labelIds: string[]) => void;
  disabled?: boolean;
}

export function LabelSelector({
  selectedLabels,
  onChange,
  disabled,
}: LabelSelectorProps): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const labels = useAllLabels();
  const labelsLoading = false;
  const createLoading = false;

  const _generateRandomColor = (): string => {
    const colors = [
      '#ef4444',
      '#f97316',
      '#f59e0b',
      '#eab308',
      '#84cc16',
      '#22c55e',
      '#10b981',
      '#14b8a6',
      '#06b6d4',
      '#0ea5e9',
      '#3b82f6',
      '#6366f1',
      '#8b5cf6',
      '#a855f7',
      '#d946ef',
      '#ec4899',
      '#f43f5e',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleLabelToggle = (label: { id: string; name: string; color: string }): void => {
    const isSelected = selectedLabels.some((l) => l.label.id === label.id);
    let newLabelIds: string[];

    if (isSelected) {
      newLabelIds = selectedLabels.filter((l) => l.label.id !== label.id).map((l) => l.label.id);
    } else {
      newLabelIds = [...selectedLabels.map((l) => l.label.id), label.id];
    }

    onChange(newLabelIds);
  };

  const handleCreateLabel = async (_name: string): Promise<void> => {
    try {
      // Label creation not implemented in local-only mode
      console.warn('Label creation not implemented in local-only mode');
    } catch (error) {
      console.error('Failed to create label:', error);
    }
  };

  const hasLabels = selectedLabels.length > 0;

  // Filter labels based on search value
  const filteredLabels = labels.filter((label) =>
    label.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Check if we should show "Create new label" option
  const shouldShowCreateOption =
    searchValue.trim() &&
    !filteredLabels.some((label) => label.name.toLowerCase() === searchValue.toLowerCase());

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            'h-auto min-h-[28px] justify-start gap-2 px-0 py-1 font-normal text-sm',
            !hasLabels && 'text-muted-foreground hover:text-foreground'
          )}
          disabled={disabled}
        >
          {hasLabels ? (
            <div className="flex flex-wrap gap-1">
              {selectedLabels.map((issueLabel) => (
                <div
                  key={issueLabel.id}
                  className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs"
                >
                  <span
                    className="size-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: issueLabel.label.color }}
                    aria-hidden="true"
                  />
                  <span className="truncate max-w-[80px]">{issueLabel.label.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <>
              <Plus className="h-3 w-3" />
              <span>Add labels</span>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0" align="start">
        <Command>
          <CommandInput
            placeholder="Search labels..."
            value={searchValue}
            onValueChange={setSearchValue}
          />
          <CommandList>
            {labelsLoading && (
              <div className="p-2 text-sm text-muted-foreground">Loading labels...</div>
            )}
            {!labelsLoading && filteredLabels.length === 0 && !shouldShowCreateOption && (
              <CommandEmpty>No labels found.</CommandEmpty>
            )}
            <CommandGroup>
              {filteredLabels.map((label) => {
                const isSelected = selectedLabels.some((l) => l.label.id === label.id);
                return (
                  <CommandItem
                    key={label.id}
                    value={label.name}
                    onSelect={() => handleLabelToggle(label)}
                    className="flex items-center gap-2"
                  >
                    <div className="size-3 rounded-full" style={{ backgroundColor: label.color }} />
                    <span className="flex-1">{label.name}</span>
                    {isSelected && <CheckIcon className="h-4 w-4" />}
                  </CommandItem>
                );
              })}
              {shouldShowCreateOption && (
                <CommandItem
                  value={`create-${searchValue}`}
                  onSelect={() => handleCreateLabel(searchValue)}
                  className="flex items-center gap-2"
                  disabled={createLoading}
                >
                  <Plus className="h-4 w-4" />
                  <span>Create &quot;{searchValue.trim()}&quot;</span>
                  {createLoading && (
                    <span className="text-xs text-muted-foreground">Creating...</span>
                  )}
                </CommandItem>
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
