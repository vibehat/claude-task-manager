'use client';

import React from 'react';
import type { CommandOption } from '../types';

interface CommandSelectViewProps {
  options: CommandOption[];
  isLoading: boolean;
  onSelectOption: (option: CommandOption) => void;
  activeIndex: number;
}

export function CommandSelectView({
  options,
  isLoading,
  onSelectOption,
  activeIndex,
}: CommandSelectViewProps) {
  if (isLoading || options.length === 0) {
    return null;
  }

  return (
    <>
      {options.map((option, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={option.id}
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
              onClick={() => onSelectOption(option)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectOption(option);
                }
              }}
            >
              {option.icon && (
                <div className="text-gray-500 dark:text-gray-400 h-4 w-4 shrink-0">
                  {option.icon}
                </div>
              )}

              <div className="flex flex-col flex-1 min-w-0 gap-1">
                <div className="flex gap-1 items-center">
                  <div className="flex items-center min-w-0 flex-1">
                    <div className="flex items-center min-w-0 flex-shrink">
                      <div className="[&_mark]:bg-transparent [&_mark_b]:font-medium [&_mark_b]:text-md [&_mark_b]:text-primary dark:[&_mark_b]:text-primary-light [&_span.font-medium]:text-primary dark:[&_span.font-medium]:text-primary-light text-xs text-gray-500 dark:text-gray-400 truncate">
                        {option.category || 'Option'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 items-center text-gray-800 dark:text-gray-200">
                  <div className="truncate text-sm leading-[18px] text-gray-800 dark:text-gray-200 [&_mark]:bg-transparent [&_mark_b]:font-medium [&_mark_b]:text-md [&_mark_b]:text-primary dark:[&_mark_b]:text-primary-light [&_span.font-medium]:text-primary dark:[&_span.font-medium]:text-primary-light font-medium">
                    {option.title}
                  </div>
                </div>

                {option.description && (
                  <p className="text-xs truncate w-full text-gray-500 [&_mark]:text-gray-500 [&_mark]:bg-transparent [&_mark_b]:font-normal [&_mark_b]:text-primary dark:[&_mark_b]:text-primary-light [&_b_mark]:font-normal [&_b_mark]:text-primary dark:[&_b_mark]:text-primary-light [&_span.font-medium]:text-primary dark:[&_span.font-medium]:text-primary-light">
                    {option.description}
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
    </>
  );
}
