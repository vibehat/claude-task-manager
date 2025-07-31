'use client';

import type { Task } from '@/libs/client/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { StatusSelector } from '../../selectors/StatusSelector';
import { PrioritySelector } from '../../selectors/PrioritySelector';
import { useDataStore } from '@/libs/client/stores/dataStore';

interface TaskHeaderProps {
   task: Task;
   onClose: () => void;
}

export function TaskHeader({ task, onClose }: TaskHeaderProps): React.JSX.Element {
   const { getStatusById, getPriorityById } = useDataStore();
   const status = getStatusById(issue.statusId);
   const priority = issue.priorityId ? getPriorityById(issue.priorityId) : null;

   return (
      <div className="p-6 pb-4 border-b">
         <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
               <Badge variant="secondary" className="font-mono text-xs">
                  {issue.id}
               </Badge>
               <div className="flex items-center gap-2">
                  <StatusSelector status={status} issueId={issue.id} />
                  <PrioritySelector priority={priority} issueId={issue.id} />
               </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6">
               <X className="h-4 w-4" />
            </Button>
         </div>
      </div>
   );
}

export default TaskHeader;
