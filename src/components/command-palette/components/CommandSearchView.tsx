'use client';

import React, { useMemo } from 'react';
import { CommandGroup, CommandItem } from '@/components/ui/command';
import { ChevronRightIcon } from 'lucide-react';
import type { Command } from '../types';

interface CommandSearchViewProps {
   commands: Command[];
   onSelectCommand: (command: Command) => void;
   isCommandEnabled: (command: Command) => boolean;
}

export function CommandSearchView({
   commands,
   onSelectCommand,
   isCommandEnabled,
}: CommandSearchViewProps) {
   // Group commands by their group property
   const groupedCommands = useMemo(() => {
      return commands.reduce(
         (groups, command) => {
            const group = command.group || 'Commands';
            if (!groups[group]) groups[group] = [];
            groups[group].push(command);
            return groups;
         },
         {} as Record<string, Command[]>
      );
   }, [commands]);

   if (commands.length === 0) {
      return null;
   }

   const renderCommandIcon = (command: Command) => {
      if (!command.icon) return null;

      return (
         <span className="mr-2 flex-shrink-0">
            {typeof command.icon === 'function'
               ? command.icon({} as any) // Context would be passed from parent
               : command.icon}
         </span>
      );
   };

   const renderCommandTitle = (command: Command) => {
      return typeof command.title === 'string' ? command.title : 'Command';
   };

   const renderCommandDescription = (command: Command) => {
      if (!command.description) return null;

      const description = typeof command.description === 'string' ? command.description : '';

      return <div className="text-xs text-muted-foreground truncate">{description}</div>;
   };

   return (
      <>
         {Object.entries(groupedCommands).map(([group, groupCommands]) => (
            <CommandGroup key={group} heading={group}>
               {groupCommands.map((command) => (
                  <CommandItem
                     key={command.id}
                     value={`${command.id} ${renderCommandTitle(command)}`}
                     onSelect={() => onSelectCommand(command)}
                     disabled={!isCommandEnabled(command)}
                     className="cursor-pointer"
                  >
                     {renderCommandIcon(command)}
                     <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">
                           {renderCommandTitle(command)}
                        </div>
                        {renderCommandDescription(command)}
                     </div>
                     {(command.type === 'select' || command.type === 'input') && (
                        <ChevronRightIcon className="w-4 h-4 ml-2 text-muted-foreground flex-shrink-0" />
                     )}
                  </CommandItem>
               ))}
            </CommandGroup>
         ))}
      </>
   );
}
