'use client';

import React, { useMemo } from 'react';
import type { Command } from '../types';

interface CommandSearchViewProps {
   commands: Command[];
   onSelectCommand: (command: Command) => void;
   isCommandEnabled: (command: Command) => boolean;
   activeIndex: number;
}

export function CommandSearchView({
   commands,
   onSelectCommand,
   isCommandEnabled,
   activeIndex,
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
      if (!command.icon) {
         // Default icon for commands without specific icon
         return (
            <svg
               width="16"
               height="16"
               viewBox="0 0 16 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="text-gray-500 dark:text-gray-400 h-4 w-4 shrink-0"
            >
               <path
                  d="M3.33337 5.55542H13.5556"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               ></path>
               <path
                  d="M2.44446 10.4443H12.6667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               ></path>
               <path
                  d="M6.78491 2.44434L4.70135 13.5554"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               ></path>
               <path
                  d="M11.2987 2.44434L9.21515 13.5554"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               ></path>
            </svg>
         );
      }

      return (
         <div className="text-gray-500 dark:text-gray-400 h-4 w-4 shrink-0">
            {typeof command.icon === 'function'
               ? command.icon({} as any) // Context would be passed from parent
               : command.icon}
         </div>
      );
   };

   const renderCommandTitle = (command: Command) => {
      return typeof command.title === 'string' ? command.title : 'Command';
   };

   const renderCommandDescription = (command: Command) => {
      if (!command.description) return null;

      const description = typeof command.description === 'string' ? command.description : '';
      return description;
   };

   return (
      <>
         {Object.entries(groupedCommands).map(([group, groupCommands]) => {
            let currentIndex = 0;
            // Calculate the starting index for this group
            for (const [prevGroup, prevCommands] of Object.entries(groupedCommands)) {
               if (prevGroup === group) break;
               currentIndex += prevCommands.length;
            }

            return (
               <div key={group}>
                  {groupCommands.map((command, commandIndex) => {
                     const globalIndex = currentIndex + commandIndex;
                     const isActive = globalIndex === activeIndex;

                     return (
                        <div
                           key={command.id}
                           className="last:mb-2"
                           role="option"
                           tabIndex={-1}
                           aria-selected={isActive}
                        >
                           <div
                              className={`cursor-pointer relative rounded-xl flex gap-3 px-2.5 py-2 items-center transition-colors ${
                                 !isCommandEnabled(command)
                                    ? 'opacity-50 cursor-not-allowed'
                                    : isActive
                                      ? 'bg-gray-50 dark:bg-gray-800/50'
                                      : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                              }`}
                              onClick={() => isCommandEnabled(command) && onSelectCommand(command)}
                              onKeyDown={(e) => {
                                 if (
                                    (e.key === 'Enter' || e.key === ' ') &&
                                    isCommandEnabled(command)
                                 ) {
                                    e.preventDefault();
                                    onSelectCommand(command);
                                 }
                              }}
                           >
                              {renderCommandIcon(command)}

                              <div className="flex flex-col flex-1 min-w-0 gap-1">
                                 <div className="flex gap-1 items-center">
                                    <div className="flex items-center min-w-0 flex-1">
                                       <div className="flex items-center min-w-0 flex-shrink">
                                          <div className="[&_mark]:bg-transparent [&_mark_b]:font-medium [&_mark_b]:text-md [&_mark_b]:text-primary dark:[&_mark_b]:text-primary-light [&_span.font-medium]:text-primary dark:[&_span.font-medium]:text-primary-light text-xs text-gray-500 dark:text-gray-400 truncate">
                                             {group}
                                          </div>
                                       </div>
                                       {command.type === 'select' || command.type === 'input' ? (
                                          <div className="flex items-center min-w-0 flex-shrink">
                                             <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="mx-0.5 flex-shrink-0 size-3 text-gray-500 dark:text-gray-400"
                                             >
                                                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
                                             </svg>
                                             <div className="[&_mark]:bg-transparent [&_mark_b]:font-medium [&_mark_b]:text-md [&_mark_b]:text-primary dark:[&_mark_b]:text-primary-light [&_span.font-medium]:text-primary dark:[&_span.font-medium]:text-primary-light text-xs text-gray-500 dark:text-gray-400 truncate">
                                                {renderCommandTitle(command)}
                                             </div>
                                          </div>
                                       ) : null}
                                    </div>
                                 </div>

                                 <div className="flex gap-1 items-center text-gray-800 dark:text-gray-200">
                                    <div className="truncate text-sm leading-[18px] text-gray-800 dark:text-gray-200 [&_mark]:bg-transparent [&_mark_b]:font-medium [&_mark_b]:text-md [&_mark_b]:text-primary dark:[&_mark_b]:text-primary-light [&_span.font-medium]:text-primary dark:[&_span.font-medium]:text-primary-light font-medium">
                                       {renderCommandTitle(command)}
                                    </div>
                                 </div>

                                 {renderCommandDescription(command) && (
                                    <p className="text-xs truncate w-full text-gray-500 [&_mark]:text-gray-500 [&_mark]:bg-transparent [&_mark_b]:font-normal [&_mark_b]:text-primary dark:[&_mark_b]:text-primary-light [&_b_mark]:font-normal [&_b_mark]:text-primary dark:[&_b_mark]:text-primary-light [&_span.font-medium]:text-primary dark:[&_span.font-medium]:text-primary-light">
                                       {renderCommandDescription(command)}
                                    </p>
                                 )}
                              </div>

                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="20"
                                 height="20"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="lucide lucide-chevron-right text-transparent"
                              >
                                 <path d="m9 18 6-6-6-6"></path>
                              </svg>
                           </div>
                        </div>
                     );
                  })}
               </div>
            );
         })}
      </>
   );
}
