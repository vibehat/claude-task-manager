'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import type { Command, CommandArg } from './types';
import { ChevronRightIcon, TerminalIcon, CheckIcon, CircleIcon, PlayIcon } from 'lucide-react';

interface CommandBreadcrumbProps {
   command: Command;
   currentArgIndex: number;
   args: Record<string, any>;
   argValidationErrors: Record<string, string>;
   onArgClick?: (index: number) => void;
}

export function CommandBreadcrumb({
   command,
   currentArgIndex,
   args,
   argValidationErrors,
   onArgClick,
}: CommandBreadcrumbProps) {
   const commandArgs = command.args || [];
   const totalArgs = commandArgs.length;

   const getArgStatus = (arg: CommandArg, index: number) => {
      const value = args[arg.name];
      const hasError = argValidationErrors[arg.name];

      if (hasError) return 'error';
      if (index < currentArgIndex && value !== undefined && value !== '') return 'completed';
      if (index === currentArgIndex) return 'current';
      return 'pending';
   };

   const getArgIcon = (status: string) => {
      switch (status) {
         case 'completed':
            return <CheckIcon className="w-3 h-3 text-green-600" />;
         case 'current':
            return <PlayIcon className="w-3 h-3 text-blue-600" />;
         case 'error':
            return <CircleIcon className="w-3 h-3 text-red-600 fill-current" />;
         default:
            return <CircleIcon className="w-3 h-3 text-gray-400" />;
      }
   };

   const getArgBadgeVariant = (status: string) => {
      switch (status) {
         case 'completed':
            return 'default' as const;
         case 'current':
            return 'default' as const;
         case 'error':
            return 'destructive' as const;
         default:
            return 'outline' as const;
      }
   };

   return (
      <motion.div
         className="flex items-center space-x-2 p-3 bg-gray-50 border-b border-gray-200"
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.2 }}
      >
         {/* Command Icon and Name */}
         <div className="flex items-center space-x-2 text-sm">
            <div className="flex items-center space-x-1">
               {command.icon || <TerminalIcon className="w-4 h-4" />}
               <span className="font-medium text-gray-900">{command.title}</span>
            </div>
         </div>

         {/* Separator */}
         {totalArgs > 0 && <ChevronRightIcon className="w-4 h-4 text-gray-400" />}

         {/* Arguments Progress */}
         <div className="flex items-center space-x-2 flex-1">
            {commandArgs.map((arg, index) => {
               const status = getArgStatus(arg, index);
               const isClickable = onArgClick && index <= currentArgIndex;

               return (
                  <React.Fragment key={arg.name}>
                     <motion.div
                        className={`flex items-center space-x-1 ${
                           isClickable ? 'cursor-pointer hover:bg-gray-100 rounded px-2 py-1' : ''
                        }`}
                        onClick={isClickable ? () => onArgClick(index) : undefined}
                        whileHover={isClickable ? { scale: 1.02 } : {}}
                        whileTap={isClickable ? { scale: 0.98 } : {}}
                     >
                        {getArgIcon(status)}
                        <Badge variant={getArgBadgeVariant(status)} className="text-xs">
                           {arg.label}
                        </Badge>

                        {/* Show current value if exists */}
                        {args[arg.name] && status !== 'error' && (
                           <span className="text-xs text-gray-600 max-w-20 truncate">
                              {typeof args[arg.name] === 'boolean'
                                 ? args[arg.name]
                                    ? 'Yes'
                                    : 'No'
                                 : String(args[arg.name])}
                           </span>
                        )}

                        {/* Show error indicator */}
                        {status === 'error' && <span className="text-xs text-red-600">!</span>}
                     </motion.div>

                     {/* Separator between args */}
                     {index < commandArgs.length - 1 && (
                        <ChevronRightIcon className="w-3 h-3 text-gray-300" />
                     )}
                  </React.Fragment>
               );
            })}
         </div>

         {/* Progress indicator */}
         <div className="flex items-center space-x-2 text-xs text-gray-500">
            <span>
               {Math.min(currentArgIndex + 1, totalArgs)} / {totalArgs}
            </span>
            <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
               <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentArgIndex + 1) / totalArgs) * 100}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
               />
            </div>
         </div>
      </motion.div>
   );
}
