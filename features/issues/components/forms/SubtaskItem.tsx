'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { MarkdownEditor } from './MarkdownEditor';
import type { GetIssuesQuery } from '@/libs/client/graphql-client/generated';

type Subtask = NonNullable<GetIssuesQuery['issues'][0]['subtask']>;

interface SubtaskItemProps {
   subtask: Subtask;
   onDescriptionUpdate?: (subtaskId: string, description: string) => void;
   disabled?: boolean;
}

export function SubtaskItem({
   subtask,
   onDescriptionUpdate,
   disabled = false,
}: SubtaskItemProps): React.JSX.Element {
   const [isOpen, setIsOpen] = useState(false);

   const getStatusColor = (status: string): string => {
      switch (status.toLowerCase()) {
         case 'completed':
         case 'done':
            return 'bg-green-100 text-green-800 border-green-200';
         case 'in-progress':
         case 'in_progress':
            return 'bg-blue-100 text-blue-800 border-blue-200';
         case 'pending':
            return 'bg-yellow-100 text-yellow-800 border-yellow-200';
         case 'blocked':
            return 'bg-red-100 text-red-800 border-red-200';
         default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
      }
   };

   const handleDescriptionSave = (description: string): void => {
      if (onDescriptionUpdate) {
         onDescriptionUpdate(subtask.id, description);
      }
   };

   return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
         <Card className="border-l-4 border-l-blue-200">
            <CollapsibleTrigger className="w-full p-4 text-left hover:bg-muted/50 transition-colors">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     {isOpen ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                     ) : (
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                     )}
                     <div className="flex flex-col gap-1">
                        <h4 className="font-medium text-sm">{subtask.title}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                           {subtask.description}
                        </p>
                     </div>
                  </div>
                  <div className="flex items-center gap-2">
                     <Badge
                        variant="outline"
                        className={`text-xs ${getStatusColor(subtask.status)}`}
                     >
                        {subtask.status}
                     </Badge>
                     <span className="text-xs text-muted-foreground">
                        {format(new Date(subtask.updatedAt), 'MMM dd')}
                     </span>
                  </div>
               </div>
            </CollapsibleTrigger>

            <CollapsibleContent>
               <div className="px-4 pb-4 space-y-4">
                  <div className="pl-7">
                     <div className="space-y-3">
                        <div>
                           <h5 className="text-sm font-medium mb-2">Description</h5>
                           <MarkdownEditor
                              value={subtask.description}
                              onChange={() => {}} // Read-only for now, could be made editable
                              disabled={true}
                              className="min-h-[100px] w-full border rounded-md"
                           />
                        </div>

                        {subtask.details && (
                           <div>
                              <h5 className="text-sm font-medium mb-2">Details</h5>
                              <MarkdownEditor
                                 value={subtask.details}
                                 onChange={(value) => handleDescriptionSave(value)}
                                 disabled={disabled}
                                 placeholder="Add implementation details..."
                                 className="min-h-[120px] w-full"
                              />
                           </div>
                        )}

                        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t">
                           <span>
                              Created: {format(new Date(subtask.createdAt), 'MMM dd, yyyy')}
                           </span>
                           <span>
                              Updated: {format(new Date(subtask.updatedAt), 'MMM dd, yyyy')}
                           </span>
                           <span>ID: {subtask.id}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </CollapsibleContent>
         </Card>
      </Collapsible>
   );
}

export default SubtaskItem;
