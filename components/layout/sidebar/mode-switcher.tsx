'use client';

import * as React from 'react';
import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown, Users, User } from 'lucide-react';
import { cn } from '@/libs/client/utils';

type Mode = 'team' | 'individual';

interface ModeSwitcherProps {
   value?: Mode;
   onValueChange?: (value: Mode) => void;
   className?: string;
}

const STORAGE_KEY = 'app-mode-preference';

export function ModeSwitcher({ value, onValueChange, className }: ModeSwitcherProps): JSX.Element {
   const [mode, setMode] = React.useState<Mode>('individual');

   React.useEffect(() => {
      // Load mode preference from localStorage on mount
      try {
         const savedMode = localStorage.getItem(STORAGE_KEY) as Mode;
         if (savedMode && (savedMode === 'team' || savedMode === 'individual')) {
            setMode(savedMode);
         }
      } catch (error) {
         console.warn('Failed to load mode preference from localStorage:', error);
      }
   }, []);

   const handleValueChange = React.useCallback(
      (newMode: Mode) => {
         setMode(newMode);

         // Save to localStorage
         try {
            localStorage.setItem(STORAGE_KEY, newMode);
         } catch (error) {
            console.warn('Failed to save mode preference to localStorage:', error);
         }

         // Call external handler if provided
         onValueChange?.(newMode);
      },
      [onValueChange]
   );

   const currentMode = value ?? mode;

   return (
      <Select.Root value={currentMode} onValueChange={handleValueChange}>
         <Select.Trigger
            className={cn(
               'flex h-8 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
               className
            )}
         >
            <div className="flex items-center gap-2">
               {currentMode === 'team' ? (
                  <Users className="h-4 w-4" />
               ) : (
                  <User className="h-4 w-4" />
               )}
               <Select.Value />
            </div>
            <Select.Icon>
               <ChevronDown className="h-4 w-4 opacity-50" />
            </Select.Icon>
         </Select.Trigger>

         <Select.Portal>
            <Select.Content className="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md">
               <Select.Viewport className="p-1">
                  <Select.Item
                     value="individual"
                     className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  >
                     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                        <Select.ItemIndicator>
                           <Check className="h-4 w-4" />
                        </Select.ItemIndicator>
                     </span>
                     <User className="mr-2 h-4 w-4" />
                     <Select.ItemText>Individual</Select.ItemText>
                  </Select.Item>

                  <Select.Item
                     value="team"
                     className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  >
                     <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                        <Select.ItemIndicator>
                           <Check className="h-4 w-4" />
                        </Select.ItemIndicator>
                     </span>
                     <Users className="mr-2 h-4 w-4" />
                     <Select.ItemText>Team</Select.ItemText>
                  </Select.Item>
               </Select.Viewport>
            </Select.Content>
         </Select.Portal>
      </Select.Root>
   );
}

export default ModeSwitcher;
