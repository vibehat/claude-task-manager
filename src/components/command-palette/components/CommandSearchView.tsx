'use client';

import React, { useMemo } from 'react';
import { SearchResultsContainer } from './SearchResultsContainer';
import type { Command } from '../types';

interface CommandSearchViewProps {
  commands: Command[];
  onSelectCommand: (command: Command) => void;
  isCommandEnabled: (command: Command) => boolean;
  activeIndex: number;
  searchResultConfig?: Command['searchResultConfig'];
}

export function CommandSearchView({
  commands,
  onSelectCommand,
  isCommandEnabled,
  activeIndex,
  searchResultConfig,
}: CommandSearchViewProps) {
  // Filter enabled commands
  const enabledCommands = useMemo(() => {
    return commands.filter((command) => isCommandEnabled(command));
  }, [commands, isCommandEnabled]);

  // Always compute grouped commands to avoid conditional hooks
  const groupedCommands = useMemo(() => {
    return enabledCommands.reduce(
      (groups, command) => {
        const group = command.group || 'Commands';
        if (!groups[group]) groups[group] = [];
        groups[group].push(command);
        return groups;
      },
      {} as Record<string, Command[]>
    );
  }, [enabledCommands]);

  const renderCommandIcon = (command: Command) => {
    if (!command.icon) {
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
          />
          <path
            d="M2.44446 10.4443H12.6667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.78491 2.44434L4.70135 13.5554"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.2987 2.44434L9.21515 13.5554"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    return (
      <div className="text-gray-500 dark:text-gray-400 h-4 w-4 shrink-0">
        {typeof command.icon === 'function' ? command.icon({} as any) : command.icon}
      </div>
    );
  };

  const renderCommandTitle = (command: Command) => {
    return typeof command.title === 'string' ? command.title : 'Command';
  };

  const renderCommandDescription = (command: Command) => {
    if (!command.description) return null;
    return typeof command.description === 'string' ? command.description : '';
  };

  // Early returns after all hooks are called
  if (enabledCommands.length === 0) {
    return null;
  }

  // Use custom display if searchResultConfig is provided
  if (searchResultConfig) {
    return (
      <SearchResultsContainer
        commands={enabledCommands}
        onSelectCommand={onSelectCommand}
        activeIndex={activeIndex}
        searchResultConfig={searchResultConfig}
      />
    );
  }

  // Fallback to default grouped display
  return (
    <>
      {Object.entries(groupedCommands).map(([group, groupCommands]) => {
        let currentIndex = 0;
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
                      isActive
                        ? 'bg-gray-50 dark:bg-gray-800/50'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                    onClick={() => onSelectCommand(command)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
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
                            <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                              {group}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-1 items-center text-gray-800 dark:text-gray-200">
                        <div className="truncate text-sm leading-[18px] text-gray-800 dark:text-gray-200 font-medium">
                          {renderCommandTitle(command)}
                        </div>
                      </div>

                      {renderCommandDescription(command) && (
                        <p className="text-xs truncate w-full text-gray-500">
                          {renderCommandDescription(command)}
                        </p>
                      )}
                    </div>
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
