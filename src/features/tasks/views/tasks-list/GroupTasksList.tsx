'use client';

import type { Tag, Task } from '@/libs/client/types/dataModels';
import type { FC } from 'react';
import { cn } from '@/libs/client/utils';
import { Plus, Tag as TagIcon } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { useCreateTaskStore } from '@/store/createTaskStore';
import { useSortTasksByPriority } from '@/features/tasks/hooks/useSortTasksByPriority';
import { TaskLine } from '../../components/items/TaskLine';
import { useDataStore } from '@/libs/client/stores';
import { getTagColor } from '@/libs/client/utils/tagUtils';

interface GroupTasksListProps {
   tag: Tag;
   tasks: Task[];
   groupIcon?: FC<React.SVGProps<SVGSVGElement>>;
}

function GroupTasksList({ tag, tasks, groupIcon }: GroupTasksListProps): React.JSX.Element {
   const { openModal } = useCreateTaskStore();
   const tagExtra = useDataStore((state) => state.tagExtra);

   // Sort the pre-filtered tasks by priority
   const sortedTasks = useSortTasksByPriority(tasks);
   const count = tasks.length;

   const tagColor = getTagColor(tag, tagExtra);
   const IconComponent = groupIcon || TagIcon;

   return (
      <div className="bg-container">
         <div className="sticky top-0 z-10 bg-container w-full h-10">
            <div
               className="w-full h-full flex items-center justify-between px-6"
               style={{
                  backgroundColor: `${tagColor}08`,
               }}
            >
               <div className="flex items-center gap-2">
                  <IconComponent className="size-4" />
                  <span className="text-sm font-medium">{tag.name}</span>
                  <span className="text-sm text-muted-foreground">{count}</span>
               </div>

               <Button
                  className="size-6"
                  size="icon"
                  variant="ghost"
                  onClick={(e) => {
                     e.stopPropagation();
                     openModal(undefined, tag);
                  }}
               >
                  <Plus className="size-4" />
               </Button>
            </div>
         </div>

         <div className="space-y-0">
            {sortedTasks.length > 0 ? (
               sortedTasks.map((task) => <TaskLine key={task.id} task={task} layoutId={true} />)
            ) : (
               <div className="flex items-center justify-center h-32">
                  <span className="text-sm text-muted-foreground">No tasks in this tag</span>
               </div>
            )}
         </div>
      </div>
   );
}

export default GroupTasksList;
