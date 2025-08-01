'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { useTasksList } from '@/hooks/useTaskMasterCLI';
import type { CommandArg, TaskMasterTask } from './types';
import {
   ArrowRightIcon,
   ArrowLeftIcon,
   PlayIcon,
   KeyboardIcon,
   AlertCircleIcon,
} from 'lucide-react';

interface InlineParameterInputProps {
   arg: CommandArg;
   value: any;
   error?: string;
   isCurrentArg: boolean;
   argIndex: number;
   totalArgs: number;
   canGoNext: boolean;
   canGoPrevious: boolean;
   onValueChange: (value: any) => void;
   onNext: () => void;
   onPrevious: () => void;
   onExecute: () => void;
}

const STATUS_OPTIONS = [
   { label: 'Pending', value: 'pending' },
   { label: 'In Progress', value: 'in-progress' },
   { label: 'Done', value: 'done' },
   { label: 'Deferred', value: 'deferred' },
   { label: 'Cancelled', value: 'cancelled' },
   { label: 'Blocked', value: 'blocked' },
];

const PRIORITY_OPTIONS = [
   { label: 'High', value: 'high' },
   { label: 'Medium', value: 'medium' },
   { label: 'Low', value: 'low' },
];

export function InlineParameterInput({
   arg,
   value,
   error,
   isCurrentArg,
   argIndex,
   totalArgs,
   canGoNext,
   canGoPrevious,
   onValueChange,
   onNext,
   onPrevious,
   onExecute,
}: InlineParameterInputProps) {
   const inputRef = useRef<HTMLInputElement>(null);
   const selectTriggerRef = useRef<HTMLButtonElement>(null);
   const [selectOpen, setSelectOpen] = useState(false);

   // Load tasks for task selection
   const { tasks, isLoading: isLoadingTasks } = useTasksList(false);

   // Focus input when this becomes the current arg
   useEffect(() => {
      if (isCurrentArg && !selectOpen) {
         if (arg.type === 'select' || arg.type === 'task-select' || arg.type === 'status-select') {
            selectTriggerRef.current?.focus();
         } else if (arg.type !== 'boolean') {
            inputRef.current?.focus();
         }
      }
   }, [isCurrentArg, arg.type, selectOpen]);

   const handleKeyDown = useCallback(
      (event: KeyboardEvent) => {
         if (!isCurrentArg) return;

         switch (event.key) {
            case 'Tab':
               event.preventDefault();
               if (event.shiftKey && canGoPrevious) {
                  onPrevious();
               } else if (!event.shiftKey && canGoNext) {
                  onNext();
               }
               break;
            case 'Enter':
               event.preventDefault();
               if (argIndex === totalArgs - 1 && value && !error) {
                  onExecute();
               } else if (canGoNext) {
                  onNext();
               }
               break;
            case 'ArrowUp':
               if (!selectOpen && canGoPrevious) {
                  event.preventDefault();
                  onPrevious();
               }
               break;
            case 'ArrowDown':
               if (!selectOpen && canGoNext) {
                  event.preventDefault();
                  onNext();
               }
               break;
         }
      },
      [
         isCurrentArg,
         canGoNext,
         canGoPrevious,
         onNext,
         onPrevious,
         onExecute,
         argIndex,
         totalArgs,
         value,
         error,
         selectOpen,
      ]
   );

   useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
   }, [handleKeyDown]);

   const renderInput = () => {
      switch (arg.type) {
         case 'task-select':
            return (
               <Select
                  value={value || ''}
                  onValueChange={onValueChange}
                  onOpenChange={setSelectOpen}
               >
                  <SelectTrigger
                     ref={selectTriggerRef}
                     className={`h-10 ${isCurrentArg ? 'ring-2 ring-blue-500' : ''}`}
                  >
                     <SelectValue placeholder={arg.placeholder || 'Select a task...'} />
                  </SelectTrigger>
                  <SelectContent>
                     {isLoadingTasks ? (
                        <SelectItem value="loading" disabled>
                           Loading tasks...
                        </SelectItem>
                     ) : tasks.length === 0 ? (
                        <SelectItem value="empty" disabled>
                           No tasks available
                        </SelectItem>
                     ) : (
                        tasks.map((task: TaskMasterTask) => (
                           <SelectItem key={task.id} value={task.id}>
                              <div className="flex items-center justify-between w-full">
                                 <span className="truncate">{task.title}</span>
                                 <Badge variant="outline" className="ml-2 text-xs">
                                    {task.status}
                                 </Badge>
                              </div>
                           </SelectItem>
                        ))
                     )}
                  </SelectContent>
               </Select>
            );

         case 'status-select':
            return (
               <Select
                  value={value || ''}
                  onValueChange={onValueChange}
                  onOpenChange={setSelectOpen}
               >
                  <SelectTrigger
                     ref={selectTriggerRef}
                     className={`h-10 ${isCurrentArg ? 'ring-2 ring-blue-500' : ''}`}
                  >
                     <SelectValue placeholder={arg.placeholder || 'Select status...'} />
                  </SelectTrigger>
                  <SelectContent>
                     {STATUS_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                           {option.label}
                        </SelectItem>
                     ))}
                  </SelectContent>
               </Select>
            );

         case 'select':
            const options = arg.options || [];
            if (arg.name === 'priority') {
               options.push(...PRIORITY_OPTIONS);
            }

            return (
               <Select
                  value={value || ''}
                  onValueChange={onValueChange}
                  onOpenChange={setSelectOpen}
               >
                  <SelectTrigger
                     ref={selectTriggerRef}
                     className={`h-10 ${isCurrentArg ? 'ring-2 ring-blue-500' : ''}`}
                  >
                     <SelectValue placeholder={arg.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                     {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                           {option.label}
                        </SelectItem>
                     ))}
                  </SelectContent>
               </Select>
            );

         case 'boolean':
            return (
               <div className="flex items-center space-x-2">
                  <Checkbox
                     id={`arg-${arg.name}`}
                     checked={value || false}
                     onCheckedChange={onValueChange}
                     className={isCurrentArg ? 'ring-2 ring-blue-500' : ''}
                  />
                  <Label htmlFor={`arg-${arg.name}`} className="text-sm font-medium cursor-pointer">
                     {arg.label}
                  </Label>
               </div>
            );

         case 'number':
            return (
               <Input
                  ref={inputRef}
                  type="number"
                  value={value || ''}
                  placeholder={arg.placeholder}
                  onChange={(e) => onValueChange(e.target.value ? Number(e.target.value) : '')}
                  className={`h-10 ${isCurrentArg ? 'ring-2 ring-blue-500' : ''}`}
               />
            );

         default: // string
            return (
               <Input
                  ref={inputRef}
                  type="text"
                  value={value || ''}
                  placeholder={arg.placeholder}
                  onChange={(e) => onValueChange(e.target.value)}
                  className={`h-10 ${isCurrentArg ? 'ring-2 ring-blue-500' : ''}`}
               />
            );
      }
   };

   const getKeyboardHints = () => {
      const hints = [];

      if (canGoPrevious) hints.push('↑/Shift+Tab: Previous');
      if (canGoNext) hints.push('↓/Tab: Next');
      if (argIndex === totalArgs - 1 && value && !error) {
         hints.push('Enter: Execute');
      } else {
         hints.push('Enter: Next');
      }

      return hints;
   };

   return (
      <motion.div
         className={`p-4 border rounded-lg transition-all duration-200 ${
            isCurrentArg
               ? 'border-blue-500 bg-blue-50/50 shadow-md'
               : 'border-gray-200 bg-gray-50/30'
         }`}
         initial={{ opacity: 0.7, scale: 0.98 }}
         animate={{
            opacity: isCurrentArg ? 1 : 0.8,
            scale: isCurrentArg ? 1 : 0.98,
            borderColor: isCurrentArg ? '#3b82f6' : '#e5e7eb',
         }}
         transition={{ duration: 0.2 }}
      >
         <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between">
               <div className="flex items-center space-x-2">
                  <Badge variant={isCurrentArg ? 'default' : 'outline'} className="text-xs">
                     {argIndex + 1} / {totalArgs}
                  </Badge>
                  <Label className="text-sm font-medium">
                     {arg.label}
                     {arg.required && <span className="text-red-500 ml-1">*</span>}
                  </Label>
               </div>

               {/* Action buttons - only show for current arg */}
               {isCurrentArg && (
                  <div className="flex items-center space-x-1">
                     {canGoPrevious && (
                        <button
                           onClick={onPrevious}
                           className="p-1 hover:bg-gray-200 rounded transition-colors"
                           title="Previous parameter"
                        >
                           <ArrowLeftIcon className="w-4 h-4" />
                        </button>
                     )}

                     {argIndex === totalArgs - 1 && value && !error ? (
                        <button
                           onClick={onExecute}
                           className="p-1 hover:bg-green-200 rounded transition-colors text-green-600"
                           title="Execute command"
                        >
                           <PlayIcon className="w-4 h-4" />
                        </button>
                     ) : canGoNext ? (
                        <button
                           onClick={onNext}
                           className="p-1 hover:bg-gray-200 rounded transition-colors"
                           title="Next parameter"
                        >
                           <ArrowRightIcon className="w-4 h-4" />
                        </button>
                     ) : null}
                  </div>
               )}
            </div>

            {/* Description */}
            {arg.description && <p className="text-xs text-muted-foreground">{arg.description}</p>}

            {/* Input */}
            <div className="space-y-2">
               {arg.type !== 'boolean' && (
                  <Label htmlFor={`arg-${arg.name}`} className="sr-only">
                     {arg.label}
                  </Label>
               )}
               {renderInput()}
            </div>

            {/* Error */}
            {error && (
               <div className="flex items-center space-x-2 text-red-600 text-sm">
                  <AlertCircleIcon className="w-4 h-4" />
                  <span>{error}</span>
               </div>
            )}

            {/* Keyboard hints - only show for current arg */}
            {isCurrentArg && (
               <div className="flex items-center space-x-2 text-xs text-muted-foreground border-t pt-2">
                  <KeyboardIcon className="w-3 h-3" />
                  <span>{getKeyboardHints().join(' • ')}</span>
               </div>
            )}
         </div>
      </motion.div>
   );
}
