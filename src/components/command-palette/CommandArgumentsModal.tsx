'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
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
import { Separator } from '@/components/ui/separator';
import { useTasksList } from '@/hooks/useTaskMasterCLI';
import type { Command, CommandArg, TaskMasterTask } from './types';
import { ArrowLeftIcon, PlayIcon, XIcon } from 'lucide-react';

interface CommandArgumentsModalProps {
   command: Command;
   initialArgs?: Record<string, any>;
   onExecute: (args: Record<string, any>) => void;
   onCancel: () => void;
   onBack?: () => void;
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

export function CommandArgumentsModal({
   command,
   initialArgs = {},
   onExecute,
   onCancel,
   onBack,
}: CommandArgumentsModalProps) {
   const [args, setArgs] = useState<Record<string, any>>(initialArgs);
   const [errors, setErrors] = useState<Record<string, string>>({});
   const [isSubmitting, setIsSubmitting] = useState(false);

   // Load tasks for task selection
   const { tasks, isLoading: isLoadingTasks } = useTasksList(false);

   // Initialize args with default values
   useEffect(() => {
      if (command.args) {
         const defaultArgs: Record<string, any> = {};
         command.args.forEach((arg) => {
            if (args[arg.name] === undefined) {
               if (arg.type === 'boolean') {
                  defaultArgs[arg.name] = false;
               } else if (arg.options && arg.options.length > 0) {
                  defaultArgs[arg.name] = arg.options[0].value;
               }
            }
         });
         if (Object.keys(defaultArgs).length > 0) {
            setArgs((prev) => ({ ...prev, ...defaultArgs }));
         }
      }
   }, [command.args, args]);

   const updateArg = useCallback(
      (name: string, value: any) => {
         setArgs((prev) => ({ ...prev, [name]: value }));
         // Clear error when user starts typing
         if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
         }
      },
      [errors]
   );

   const validateArgs = useCallback(() => {
      const newErrors: Record<string, string> = {};

      command.args?.forEach((arg) => {
         const value = args[arg.name];

         // Required validation
         if (arg.required && (value === undefined || value === '' || value === null)) {
            newErrors[arg.name] = `${arg.label} is required`;
            return;
         }

         // Custom validation
         if (value !== undefined && value !== '' && arg.validation) {
            const error = arg.validation(value);
            if (error) {
               newErrors[arg.name] = error;
            }
         }

         // Type-specific validation
         if (arg.type === 'number' && value && isNaN(Number(value))) {
            newErrors[arg.name] = `${arg.label} must be a valid number`;
         }
      });

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   }, [command.args, args]);

   const handleSubmit = useCallback(
      async (e: React.FormEvent) => {
         e.preventDefault();
         if (!validateArgs()) return;

         setIsSubmitting(true);
         try {
            await onExecute(args);
         } finally {
            setIsSubmitting(false);
         }
      },
      [args, validateArgs, onExecute]
   );

   const renderArgInput = useCallback(
      (arg: CommandArg) => {
         const value = args[arg.name] ?? '';
         const error = errors[arg.name];

         switch (arg.type) {
            case 'task-select':
               return (
                  <div key={arg.name} className="space-y-2">
                     <Label htmlFor={arg.name}>{arg.label}</Label>
                     {arg.description && (
                        <p className="text-sm text-muted-foreground">{arg.description}</p>
                     )}
                     <Select value={value} onValueChange={(value) => updateArg(arg.name, value)}>
                        <SelectTrigger id={arg.name}>
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
                     {error && <p className="text-sm text-red-500">{error}</p>}
                  </div>
               );

            case 'status-select':
               return (
                  <div key={arg.name} className="space-y-2">
                     <Label htmlFor={arg.name}>{arg.label}</Label>
                     {arg.description && (
                        <p className="text-sm text-muted-foreground">{arg.description}</p>
                     )}
                     <Select value={value} onValueChange={(value) => updateArg(arg.name, value)}>
                        <SelectTrigger id={arg.name}>
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
                     {error && <p className="text-sm text-red-500">{error}</p>}
                  </div>
               );

            case 'select':
               const options = arg.options || [];
               if (arg.name === 'priority') {
                  options.push(...PRIORITY_OPTIONS);
               }

               return (
                  <div key={arg.name} className="space-y-2">
                     <Label htmlFor={arg.name}>{arg.label}</Label>
                     {arg.description && (
                        <p className="text-sm text-muted-foreground">{arg.description}</p>
                     )}
                     <Select value={value} onValueChange={(value) => updateArg(arg.name, value)}>
                        <SelectTrigger id={arg.name}>
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
                     {error && <p className="text-sm text-red-500">{error}</p>}
                  </div>
               );

            case 'boolean':
               return (
                  <div key={arg.name} className="space-y-2">
                     <div className="flex items-center space-x-2">
                        <Checkbox
                           id={arg.name}
                           checked={value}
                           onCheckedChange={(checked) => updateArg(arg.name, checked)}
                        />
                        <Label htmlFor={arg.name}>{arg.label}</Label>
                     </div>
                     {arg.description && (
                        <p className="text-sm text-muted-foreground ml-6">{arg.description}</p>
                     )}
                     {error && <p className="text-sm text-red-500 ml-6">{error}</p>}
                  </div>
               );

            case 'number':
               return (
                  <div key={arg.name} className="space-y-2">
                     <Label htmlFor={arg.name}>{arg.label}</Label>
                     {arg.description && (
                        <p className="text-sm text-muted-foreground">{arg.description}</p>
                     )}
                     <Input
                        id={arg.name}
                        type="number"
                        value={value}
                        placeholder={arg.placeholder}
                        onChange={(e) =>
                           updateArg(arg.name, e.target.value ? Number(e.target.value) : '')
                        }
                     />
                     {error && <p className="text-sm text-red-500">{error}</p>}
                  </div>
               );

            default: // string
               return (
                  <div key={arg.name} className="space-y-2">
                     <Label htmlFor={arg.name}>{arg.label}</Label>
                     {arg.description && (
                        <p className="text-sm text-muted-foreground">{arg.description}</p>
                     )}
                     <Input
                        id={arg.name}
                        type="text"
                        value={value}
                        placeholder={arg.placeholder}
                        onChange={(e) => updateArg(arg.name, e.target.value)}
                     />
                     {error && <p className="text-sm text-red-500">{error}</p>}
                  </div>
               );
         }
      },
      [args, errors, updateArg, tasks, isLoadingTasks]
   );

   if (!command.args || command.args.length === 0) {
      return null;
   }

   return (
      <motion.div
         className="p-4 max-w-lg mx-auto"
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.95 }}
         transition={{ duration: 0.2 }}
      >
         {/* Header */}
         <motion.div
            className="flex items-center justify-between mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
         >
            <div className="flex items-center space-x-2">
               {onBack && (
                  <Button variant="ghost" size="sm" onClick={onBack}>
                     <ArrowLeftIcon className="w-4 h-4" />
                  </Button>
               )}
               <div>
                  <h3 className="text-lg font-semibold">{command.title}</h3>
                  {command.description && (
                     <p className="text-sm text-muted-foreground">{command.description}</p>
                  )}
               </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onCancel}>
               <XIcon className="w-4 h-4" />
            </Button>
         </motion.div>

         <Separator className="mb-6" />

         {/* Form */}
         <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
         >
            {command.args?.map(renderArgInput)}

            <div className="flex justify-end space-x-2 pt-4">
               <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
               </Button>
               <Button
                  type="submit"
                  disabled={isSubmitting || command.loading}
                  className="min-w-[100px]"
               >
                  {isSubmitting || command.loading ? (
                     <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border border-current border-t-transparent rounded-full animate-spin" />
                        <span>Executing...</span>
                     </div>
                  ) : (
                     <div className="flex items-center space-x-2">
                        <PlayIcon className="w-4 h-4" />
                        <span>Execute</span>
                     </div>
                  )}
               </Button>
            </div>
         </motion.form>
      </motion.div>
   );
}
