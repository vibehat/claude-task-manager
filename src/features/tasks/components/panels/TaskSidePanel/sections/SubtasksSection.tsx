'use client';

import { SubtaskItem } from '../../../forms/SubtaskItem';
import type { Task } from '@/libs/client/types';

interface SubtasksSectionProps {
   task: Task;
   onSubtaskUpdate?: (subtaskId: string, description: string) => void;
   disabled?: boolean;
}

export function SubtasksSection({
   task,
   onSubtaskUpdate,
   disabled = false,
}: SubtasksSectionProps): React.JSX.Element | null {
   // If the task doesn't have a subtask, don't render anything
   if (!task.subtaskId) {
      return null;
   }

   return (
      <div className="space-y-4">
         <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Subtask</h3>
            <span className="text-xs text-muted-foreground">Task Master Integration</span>
         </div>

         <div className="space-y-2">
            <SubtaskItem subtask={task} onDescriptionUpdate={onSubtaskUpdate} disabled={disabled} />
         </div>
      </div>
   );
}

export default SubtasksSection;
