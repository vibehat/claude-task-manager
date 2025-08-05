'use client';

import React, { useMemo } from 'react';
import { cn } from '@/libs/client/utils';
import { SearchResultItem } from './SearchResultItem';
import type { Command } from '../types';

interface SearchResultsContainerProps {
  commands: Command[];
  onSelectCommand: (command: Command) => void;
  activeIndex: number;
  searchResultConfig?: Command['searchResultConfig'];
}

export function SearchResultsContainer({
  commands,
  onSelectCommand,
  activeIndex,
  searchResultConfig,
}: SearchResultsContainerProps) {
  const {
    layout = 'list',
    gridConfig,
    tableConfig,
    containerClassName,
    itemClassName,
    showMetadata = false,
    groupBy,
    groupRenderer,
    customRenderer,
  } = searchResultConfig || {};

  // Group commands if groupBy function is provided
  const groupedCommands = useMemo(() => {
    if (!groupBy) {
      return { '': commands };
    }

    return commands.reduce(
      (groups, command) => {
        const groupName = groupBy(command);
        if (!groups[groupName]) {
          groups[groupName] = [];
        }
        groups[groupName].push(command);
        return groups;
      },
      {} as Record<string, Command[]>
    );
  }, [commands, groupBy]);

  const renderCommand = (command: Command, index: number) => {
    const isActive = index === activeIndex;
    const onSelect = () => onSelectCommand(command);

    return (
      <SearchResultItem
        key={command.id}
        command={command}
        isActive={isActive}
        onSelect={onSelect}
        customRenderer={customRenderer}
        layout={layout}
        className={itemClassName}
        showMetadata={showMetadata}
      />
    );
  };

  if (layout === 'table') {
    const columns = tableConfig?.columns || [
      { key: 'title', header: 'Command', width: '40%' },
      { key: 'description', header: 'Description', width: '60%' },
    ];

    return (
      <div className={cn('overflow-auto', containerClassName)}>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-3 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                  style={{ width: column.width }}
                >
                  {column.header}
                </th>
              ))}
              {showMetadata && (
                <>
                  <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Group
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    ID
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>{commands.map((command, index) => renderCommand(command, index))}</tbody>
        </table>
      </div>
    );
  }

  if (layout === 'grid') {
    const gridStyles = {
      display: 'grid',
      gridTemplateColumns: gridConfig?.columns
        ? `repeat(${gridConfig.columns}, 1fr)`
        : `repeat(auto-fill, minmax(${gridConfig?.minItemWidth || '200px'}, 1fr))`,
      gap: gridConfig?.gap || '0.75rem',
    };

    return (
      <div className={cn('p-2', containerClassName)} style={gridStyles}>
        {commands.map((command, index) => renderCommand(command, index))}
      </div>
    );
  }

  if (layout === 'custom' && customRenderer) {
    return (
      <div className={cn('space-y-1', containerClassName)}>
        {commands.map((command, index) => {
          const isActive = index === activeIndex;
          const onSelect = () => onSelectCommand(command);
          return <div key={command.id}>{customRenderer(command, isActive, onSelect)}</div>;
        })}
      </div>
    );
  }

  // Handle grouped display
  if (groupBy && Object.keys(groupedCommands).length > 1) {
    let commandIndex = 0;
    return (
      <div className={cn('space-y-4', containerClassName)}>
        {Object.entries(groupedCommands).map(([groupName, groupCommands]) => (
          <div key={groupName}>
            {groupRenderer ? (
              groupRenderer(groupName, groupCommands)
            ) : (
              <div className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider border-b border-border">
                {groupName || 'Other'}
              </div>
            )}
            <div className="space-y-1 mt-2">
              {groupCommands.map((command) => {
                const element = renderCommand(command, commandIndex);
                commandIndex++;
                return element;
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default list layout
  return (
    <div className={cn('space-y-1', containerClassName)}>
      {commands.map((command, index) => renderCommand(command, index))}
    </div>
  );
}
