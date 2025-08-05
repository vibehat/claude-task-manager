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
import type { Tag } from '@/mock-data/tags';
import { tags } from '@/mock-data/tags';
import { Box, CheckIcon, TagIcon, Hash } from 'lucide-react';
import { useEffect, useId, useState } from 'react';

interface TagSelectorProps {
  tag: Tag | undefined;
  onChange: (tag: Tag | undefined) => void;
}

export function TagSelector({ tag, onChange }: TagSelectorProps): React.JSX.Element {
  const id = useId();
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | undefined>(tag?.id);
  // const tags = useAllTags(); // Using mock data for now

  useEffect(() => {
    setValue(tag?.id);
  }, [tag]);

  const handleTagChange = (tagId: string): void => {
    if (tagId === 'no-tag') {
      setValue(undefined);
      onChange(undefined);
    } else {
      setValue(tagId);
      const newTag = tags.find((t) => t.id === tagId);
      if (newTag) {
        onChange(newTag);
      }
    }
    setOpen(false);
  };

  return (
    <div className="*:not-first:mt-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            className="flex items-center justify-center"
            size="xs"
            variant="secondary"
            role="combobox"
            aria-expanded={open}
          >
            {value ? <Hash className="size-4" /> : <Box className="size-4" />}
            <span>{value ? tags.find((t) => t.id === value)?.name : 'No tag'}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Set tag..." />
            <CommandList>
              <CommandEmpty>No tags found.</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  value="no-tag"
                  onSelect={() => handleTagChange('no-tag')}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <TagIcon className="size-4" />
                    No Tag
                  </div>
                  {value === undefined && <CheckIcon size={16} className="ml-auto" />}
                </CommandItem>
                {tags.map((tag) => (
                  <CommandItem
                    key={tag.id}
                    value={tag.id}
                    onSelect={() => handleTagChange(tag.id)}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Hash className="size-4" />
                      {tag.name}
                    </div>
                    {value === tag.id && <CheckIcon size={16} className="ml-auto" />}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
