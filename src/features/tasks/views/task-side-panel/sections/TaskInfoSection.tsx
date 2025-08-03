'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { FileText, TestTube, Edit2 } from 'lucide-react';
import { RichMarkdownEditor, MarkdownViewer } from '../../../components/editors/RichMarkdownEditor';
import type { Task } from '@/libs/client/types';

interface TaskInfoSectionProps {
   task: Task;
   onDescriptionSave?: (value: string) => void;
   onDetailsSave?: (value: string) => void;
   onTestStrategySave?: (value: string) => void;
   disabled?: boolean;
}

// Safe MarkdownViewer wrapper with layout shift prevention
function SafeMarkdownViewer({
   source,
   fallbackLines = 2,
}: {
   source: string;
   fallbackLines?: number;
}): React.JSX.Element {
   const [isReady, setIsReady] = useState(false);

   useEffect(() => {
      // Small delay to ensure component is fully mounted
      const timer = setTimeout(() => setIsReady(true), 100);
      return () => clearTimeout(timer);
   }, []);

   if (!isReady) {
      return (
         <div className="space-y-2">
            {Array.from({ length: fallbackLines }, (_, i) => (
               <Skeleton key={i} className="h-4 w-full" />
            ))}
         </div>
      );
   }

   return <MarkdownViewer source={source} />;
}

export function TaskInfoSection({
   task,
   onDescriptionSave,
   onDetailsSave,
   onTestStrategySave,
   disabled = false,
}: TaskInfoSectionProps): React.JSX.Element {
   const [combinedContent, setCombinedContent] = useState('');
   const [isEditing, setIsEditing] = useState(false);

   // Combine all fields into a single markdown document
   const combineFields = (): string => {
      const sections = [];

      if (task.description) {
         sections.push(`## Description\n\n${task.description}`);
      } else {
         sections.push(`## Description\n\n_No description provided_`);
      }

      if (task.details || isEditing) {
         sections.push(
            `## Implementation Details\n\n${task.details || '_No implementation details provided_'}`
         );
      }

      if (task.testStrategy || isEditing) {
         sections.push(`## Test Strategy\n\n${task.testStrategy || '_No test strategy provided_'}`);
      }

      return sections.join('\n\n');
   };

   // Split combined content back into individual fields
   const splitContent = (
      content: string
   ): { description: string; details: string; testStrategy: string } => {
      const sections = content.split(/^## /gm).filter(Boolean);
      let description = '';
      let details = '';
      let testStrategy = '';

      sections.forEach((section) => {
         const lines = section.split('\n');
         const header = lines[0].toLowerCase();
         const body = lines.slice(2).join('\n').trim(); // Skip header and empty line

         if (header.includes('description')) {
            description = body === '_No description provided_' ? '' : body;
         } else if (header.includes('implementation') || header.includes('details')) {
            details = body === '_No implementation details provided_' ? '' : body;
         } else if (header.includes('test') || header.includes('strategy')) {
            testStrategy = body === '_No test strategy provided_' ? '' : body;
         }
      });

      return { description, details, testStrategy };
   };

   useEffect(() => {
      setCombinedContent(combineFields());
   }, [task.description, task.details, task.testStrategy]);

   const handleSave = (): void => {
      const { description, details, testStrategy } = splitContent(combinedContent);

      // Call the respective save handlers
      if (description !== task.description && onDescriptionSave) {
         onDescriptionSave(description);
      }
      if (details !== task.details && onDetailsSave) {
         onDetailsSave(details);
      }
      if (testStrategy !== task.testStrategy && onTestStrategySave) {
         onTestStrategySave(testStrategy);
      }

      setIsEditing(false);
   };

   const handleCancel = (): void => {
      setCombinedContent(combineFields());
      setIsEditing(false);
   };

   const handleEdit = (): void => {
      setCombinedContent(combineFields());
      setIsEditing(true);
   };

   return (
      <div className="space-y-4">
         {/* Header with Edit/Save/Cancel controls */}
         <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Task Details</Label>
            {isEditing ? (
               <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleCancel} className="h-7">
                     Cancel
                  </Button>
                  <Button size="sm" onClick={handleSave} className="h-7">
                     Save
                  </Button>
               </div>
            ) : (
               <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleEdit}
                  disabled={disabled}
                  className="h-7 px-2"
               >
                  <Edit2 className="h-3 w-3 mr-1" />
                  Edit
               </Button>
            )}
         </div>

         {/* Content Area */}
         {isEditing ? (
            <div className="space-y-3">
               <RichMarkdownEditor
                  value={combinedContent}
                  onChange={setCombinedContent}
                  placeholder="## Description

Add a description...

## Implementation Details

Add implementation details...

## Test Strategy

Add test strategy..."
                  disabled={disabled}
                  height={400}
                  preview="edit"
                  visibleDragBar={false}
               />
            </div>
         ) : (
            <div className="space-y-6">
               {/* Description Section */}
               <div className="space-y-2">
                  <div className="flex items-center gap-2">
                     <FileText className="h-4 w-4" style={{ color: 'var(--description-header)' }} />
                     <Label
                        className="text-sm font-medium"
                        style={{ color: 'var(--description-header)' }}
                     >
                        Description
                     </Label>
                  </div>
                  <div
                     className="text-sm cursor-pointer rounded p-2 hover:bg-muted/50 transition-colors"
                     onDoubleClick={handleEdit}
                     title="Double-click to edit"
                  >
                     {task.description ? (
                        <SafeMarkdownViewer
                           source={task.description}
                           fallbackLines={Math.max(1, Math.ceil(task.description.length / 80))}
                        />
                     ) : (
                        <span className="text-muted-foreground italic">
                           No description provided
                        </span>
                     )}
                  </div>
               </div>

               {/* Implementation Details Section */}
               {task.details && (
                  <div className="space-y-2">
                     <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-500" />
                        <Label className="text-sm font-medium text-blue-600">
                           Implementation Details
                        </Label>
                     </div>
                     <div
                        className="text-sm cursor-pointer rounded p-2 hover:bg-muted/50 transition-colors"
                        onDoubleClick={handleEdit}
                        title="Double-click to edit"
                     >
                        <SafeMarkdownViewer
                           source={task.details}
                           fallbackLines={Math.max(2, Math.ceil(task.details.length / 80))}
                        />
                     </div>
                  </div>
               )}

               {/* Test Strategy Section */}
               {task.testStrategy && (
                  <div className="space-y-2">
                     <div className="flex items-center gap-2">
                        <TestTube className="h-4 w-4 text-green-500" />
                        <Label className="text-sm font-medium text-green-600">Test Strategy</Label>
                     </div>
                     <div
                        className="text-sm cursor-pointer rounded p-2 hover:bg-muted/50 transition-colors"
                        onDoubleClick={handleEdit}
                        title="Double-click to edit"
                     >
                        <SafeMarkdownViewer
                           source={task.testStrategy}
                           fallbackLines={Math.max(2, Math.ceil(task.testStrategy.length / 80))}
                        />
                     </div>
                  </div>
               )}
            </div>
         )}
      </div>
   );
}
