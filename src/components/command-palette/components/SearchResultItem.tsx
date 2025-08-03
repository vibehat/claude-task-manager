'use client';

import React from 'react';
import { cn } from '@/libs/client/utils';
import type { Command } from '../types';

interface SearchResultItemProps {
   command: Command;
   isActive: boolean;
   onSelect: () => void;
   customRenderer?: (command: Command, isActive: boolean, onSelect: () => void) => React.ReactNode;
   layout?: 'list' | 'grid' | 'table' | 'custom';
   className?: string;
   showMetadata?: boolean;
}

export function SearchResultItem({
   command,
   isActive,
   onSelect,
   customRenderer,
   layout = 'list',
   className,
   showMetadata = false,
}: SearchResultItemProps) {
   // Use custom renderer if provided
   if (customRenderer) {
      return <>{customRenderer(command, isActive, onSelect)}</>;
   }

   // Default renderers based on layout
   const title = typeof command.title === 'string' ? command.title : 'Command';
   const description = typeof command.description === 'string' ? command.description : '';
   const icon = command.icon;

   const baseClasses = cn(
      'cursor-pointer transition-colors border rounded-lg',
      isActive
         ? 'bg-accent text-accent-foreground border-accent'
         : 'hover:bg-accent/50 border-border',
      className
   );

   if (layout === 'grid') {
      return (
         <div className={cn(baseClasses, 'p-4 text-center')} onClick={onSelect}>
            {icon && <div className="mb-2 flex justify-center">{icon}</div>}
            <div className="font-medium text-sm">{title}</div>
            {description && (
               <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{description}</div>
            )}
            {showMetadata && (
               <div className="text-xs text-muted-foreground mt-2 space-y-1">
                  <div>ID: {command.id}</div>
                  {command.group && <div>Group: {command.group}</div>}
               </div>
            )}
         </div>
      );
   }

   if (layout === 'table') {
      return (
         <tr
            className={cn(
               'cursor-pointer transition-colors',
               isActive ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'
            )}
            onClick={onSelect}
         >
            <td className="px-3 py-2">
               <div className="flex items-center gap-2">
                  {icon && <span className="flex-shrink-0">{icon}</span>}
                  <span className="font-medium">{title}</span>
               </div>
            </td>
            <td className="px-3 py-2 text-sm text-muted-foreground">{description}</td>
            {showMetadata && (
               <>
                  <td className="px-3 py-2 text-xs text-muted-foreground">{command.group}</td>
                  <td className="px-3 py-2 text-xs font-mono text-muted-foreground">
                     {command.id}
                  </td>
               </>
            )}
         </tr>
      );
   }

   // Default list layout
   return (
      <div className={cn(baseClasses, 'p-3 flex items-center gap-3')} onClick={onSelect}>
         {icon && <span className="flex-shrink-0">{icon}</span>}
         <div className="flex-1 min-w-0">
            <div className="font-medium text-sm">{title}</div>
            {description && (
               <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                  {description}
               </div>
            )}
            {showMetadata && (
               <div className="flex gap-4 text-xs text-muted-foreground mt-1">
                  <span>ID: {command.id}</span>
                  {command.group && <span>Group: {command.group}</span>}
               </div>
            )}
         </div>
      </div>
   );
}
