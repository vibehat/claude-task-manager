'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useCommandPalette } from './CommandPaletteProvider';
import { CheckIcon, KeyboardIcon } from 'lucide-react';

/**
 * Demonstration component showing the simplified nested command flow
 * Each step now feels like a natural command selection using basic cmdk UI
 */
export function NestedCommandDemo() {
   const { actions } = useCommandPalette();

   const handleOpenTaskStatus = () => {
      actions.openPalette();
      // Auto-search for the task status command after a brief delay
      setTimeout(() => {
         actions.setSearchValue('Update Task Status');
      }, 100);
   };

   return (
      <Card className="w-full max-w-2xl">
         <CardHeader>
            <CardTitle className="flex items-center gap-2">
               <CheckIcon className="w-5 h-5" />
               Simplified Command Chain
            </CardTitle>
            <CardDescription>
               Experience command chaining that feels natural - each step is just another command
               selection
            </CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
            <div className="grid gap-4">
               <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-medium mb-2">🔗 Simplified Approach</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                     <li>• Each step uses the same familiar command interface</li>
                     <li>• Tasks and statuses appear as searchable commands</li>
                     <li>• Breadcrumb navigation shows your progress</li>
                     <li>• Execute/Cancel options in the final step</li>
                     <li>• Consistent UX throughout the entire flow</li>
                  </ul>
               </div>

               <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">🎯 Try the Command Chain</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                     Click below to experience the streamlined "Update Task Status" flow:
                  </p>
                  <Button onClick={handleOpenTaskStatus} className="gap-2">
                     <KeyboardIcon className="w-4 h-4" />
                     Start Command Chain
                  </Button>
               </div>

               <div className="p-4 bg-green-50 dark:bg-green-950/50 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-medium mb-2 text-green-900 dark:text-green-100">
                     ⚡ Flow Steps
                  </h3>
                  <ol className="text-sm text-green-800 dark:text-green-200 space-y-1 list-decimal list-inside">
                     <li>Command Palette opens → Search "Update Task Status"</li>
                     <li>Select command → Now shows list of tasks as commands</li>
                     <li>Select a task → Now shows status options as commands</li>
                     <li>Select status → Shows Execute/Cancel commands</li>
                     <li>Select Execute → Command runs, palette closes</li>
                  </ol>
               </div>

               <div className="text-xs text-muted-foreground p-3 bg-muted/30 rounded">
                  <strong>Navigation:</strong> Each step feels like browsing commands. Use ↑↓ to
                  navigate, Enter to select, and Escape to go back to the previous step.
               </div>
            </div>
         </CardContent>
      </Card>
   );
}
