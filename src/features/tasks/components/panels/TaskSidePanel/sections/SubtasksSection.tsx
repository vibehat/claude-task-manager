'use client';

import { SubtaskItem } from '../../../forms/SubtaskItem';
import type { Issue } from '@/libs/client/types';

interface SubtasksSectionProps {
   issue: Issue;
   onSubtaskUpdate?: (subtaskId: string, description: string) => void;
   disabled?: boolean;
}

export function SubtasksSection({
   issue,
   onSubtaskUpdate,
   disabled = false,
}: SubtasksSectionProps): React.JSX.Element | null {
   // If the issue doesn't have a subtask, don't render anything
   if (!issue.subtaskId) {
      return null;
   }

   return (
      <div className="space-y-4">
         <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Subtask</h3>
            <span className="text-xs text-muted-foreground">Task Master Integration</span>
         </div>

         <div className="space-y-2">
            <SubtaskItem
               subtask={issue}
               onDescriptionUpdate={onSubtaskUpdate}
               disabled={disabled}
            />
         </div>
      </div>
   );
}

export default SubtasksSection;
