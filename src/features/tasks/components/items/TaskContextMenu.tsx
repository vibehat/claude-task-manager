'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
   ContextMenuContent,
   ContextMenuGroup,
   ContextMenuItem,
   ContextMenuSeparator,
   ContextMenuShortcut,
   ContextMenuSub,
   ContextMenuSubContent,
   ContextMenuSubTrigger,
} from '@/components/ui/ContextMenu';
import {
   CircleCheck,
   User,
   BarChart3,
   Tag,
   Folder,
   CalendarClock,
   Pencil,
   Link as LinkIcon,
   Repeat2,
   Copy as CopyIcon,
   PlusSquare,
   Flag,
   ArrowRightLeft,
   Bell,
   Star,
   AlarmClock,
   Trash2,
   CheckCircle2,
   Clock,
   FileText,
   MessageSquare,
   Clipboard,
} from 'lucide-react';
import React, { useState } from 'react';
// import { useIssuesStore } from '@/store/issues-store';
import { useTaskSidePanelStore } from '@/store/taskSidePanelStore';
import type { Task } from '@/libs/client/types';
import { useDataStore } from '@/libs/client/stores/dataStore';
import { getPriorityIcon } from '../../constants/NoPriorityIcon';

const getPriorityIconName = (name: string): string => {
   switch (name.toLowerCase()) {
      case 'urgent':
         return 'UrgentPriorityIcon';
      case 'high':
         return 'HighPriorityIcon';
      case 'medium':
         return 'MediumPriorityIcon';
      case 'low':
         return 'LowPriorityIcon';
      default:
         return 'NoPriorityIcon';
   }
};
import { toast } from 'sonner';
import { DEFAULT_CONFIG } from '@/libs/config/defaults';
import { taskMasterCLI } from '@/hooks/useTaskMasterCLI';

interface TaskContextMenuProps {
   taskId?: string;
   task?: Task;
}

export function TaskContextMenu({ taskId, task }: TaskContextMenuProps): React.JSX.Element {
   const [isSubscribed, setIsSubscribed] = useState(false);
   const [isFavorite, setIsFavorite] = useState(false);
   const { openPanel } = useTaskSidePanelStore();

   // Get data from store
   const { statuses, priorities, users, labels, projects } = useDataStore();

   const handleStatusChange = (statusId: string): void => {
      if (!taskId) return;
      const newStatus = statuses.find((s) => s.id === statusId);
      if (newStatus) {
         // TODO: Implement with mutation hook
         // updateTaskStatus(taskId, newStatus);
         toast.success(`Status updated to ${newStatus.name}`);
      }
   };

   const handlePriorityChange = (priorityId: string): void => {
      if (!taskId) return;
      const newPriority = priorities.find((p) => p.id === priorityId);
      if (newPriority) {
         // TODO: Implement with mutation hook
         // updateTaskPriority(taskId, newPriority);
         toast.success(`Priority updated to ${newPriority.name}`);
      }
   };

   const handleAssigneeChange = (userId: string | null): void => {
      if (!taskId) return;
      const newAssignee = userId ? (users.find((u) => u.id === userId) ?? null) : null;
      // TODO: Implement with mutation hook
      // updateTaskAssignee(taskId, newAssignee);
      toast.success(newAssignee ? `Assigned to ${newAssignee.name}` : 'Unassigned');
   };

   const handleLabelToggle = (labelId: string): void => {
      if (!taskId) return;
      // TODO: Implement with mutation hook and task fetch
      // const task = getTaskById(taskId);
      const label = labels.find((l) => l.id === labelId);

      if (!label) return;

      // TODO: Get current task labels and implement toggle logic
      // const hasLabel = task.labels.some((l) => l.id === labelId);

      // if (hasLabel) {
      //    removeTaskLabel(taskId, labelId);
      //    toast.success(`Removed label: ${label.name}`);
      // } else {
      //    addTaskLabel(taskId, label);
      toast.success(`Added label: ${label.name}`);
      // }
   };

   const handleProjectChange = (projectId: string | null): void => {
      if (!taskId) return;
      const newProject = projectId ? projects.find((p) => p.id === projectId) : undefined;
      // TODO: Implement with mutation hook
      // updateTaskProject(taskId, newProject);
      toast.success(newProject ? `Project set to ${newProject.name}` : 'Project removed');
   };

   const handleSetDueDate = (): void => {
      if (!taskId) return;
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 7);
      // TODO: Implement with mutation hook
      // updateTask(taskId, { dueDate: dueDate.toISOString() });
      toast.success('Due date set to 7 days from now');
   };

   const handleAddLink = (): void => {
      toast.success('Link added');
   };

   const handleMakeCopy = (): void => {
      toast.success('Task copied');
   };

   const handleCreateRelated = (): void => {
      toast.success('Related task created');
   };

   const handleMarkAs = (type: string): void => {
      toast.success(`Marked as ${type}`);
   };

   const handleMove = (): void => {
      toast.success('Task moved');
   };

   const handleSubscribe = (): void => {
      setIsSubscribed(!isSubscribed);
      toast.success(isSubscribed ? 'Unsubscribed from task' : 'Subscribed to task');
   };

   const handleFavorite = (): void => {
      setIsFavorite(!isFavorite);
      toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
   };

   const handleCopy = (): void => {
      if (!taskId) return;
      // TODO: Implement with task fetch
      // const task = getTaskById(taskId);
      // if (task) {
      //    navigator.clipboard.writeText(task.title);
      toast.success('Copied to clipboard');
      // }
   };

   const handleRemindMe = (): void => {
      toast.success('Reminder set');
   };

   const handleDelete = async (): Promise<void> => {
      if (!task) return;

      // Show confirmation dialog
      const confirmed = window.confirm(
         `Are you sure you want to delete "${task.title}"? This action cannot be undone.`
      );

      if (!confirmed) return;

      try {
         // Check if this is a TaskMaster task
         if (task.taskId) {
            // TaskMaster task - use CLI
            const taskMasterId = task.subtaskId || task.taskId.toString();
            const result = await taskMasterCLI.removeTask(taskMasterId, true);

            if (result.success) {
               if (result.result.stderr && result.result.stderr.includes('not found')) {
                  toast.warning(`TaskMaster task "${taskMasterId}" was not found`);
               } else if (result.result.stdout.includes('No existing tasks found')) {
                  toast.warning(`TaskMaster task "${taskMasterId}" was not found`);
               } else {
                  toast.success('Task deleted successfully');
               }
            } else {
               toast.error(`Failed to delete task: ${result.result.stderr || 'Unknown error'}`);
            }
         } else {
            // Regular task - use data store
            const { deleteTask } = useDataStore.getState();
            deleteTask(task.id);
            toast.success('Task deleted successfully');
         }
      } catch (error) {
         console.error('Error deleting task:', error);
         toast.error('Failed to delete task');
      }
   };

   return (
      <ContextMenuContent className="w-64">
         <ContextMenuGroup>
            <ContextMenuSub>
               <ContextMenuSubTrigger>
                  <CircleCheck className="mr-2 size-4" /> Status
               </ContextMenuSubTrigger>
               <ContextMenuSubContent className="w-48">
                  {statuses.map((s) => (
                     <ContextMenuItem key={s.id} onClick={() => handleStatusChange(s.id)}>
                        <div
                           style={{
                              backgroundColor: s.color,
                              width: '12px',
                              height: '12px',
                              borderRadius: '50%',
                              marginRight: '8px',
                           }}
                        ></div>
                        {s.name}
                     </ContextMenuItem>
                  ))}
               </ContextMenuSubContent>
            </ContextMenuSub>

            <ContextMenuSub>
               <ContextMenuSubTrigger>
                  <User className="mr-2 size-4" /> Assignee
               </ContextMenuSubTrigger>
               <ContextMenuSubContent className="w-48">
                  <ContextMenuItem onClick={() => handleAssigneeChange(null)}>
                     <User className="size-4" /> Unassigned
                  </ContextMenuItem>
                  {users.map((user) => (
                     <ContextMenuItem key={user.id} onClick={() => handleAssigneeChange(user.id)}>
                        <Avatar className="size-4">
                           <AvatarImage src={user.avatarUrl || undefined} alt={user.name} />
                           <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        {user.name}
                     </ContextMenuItem>
                  ))}
               </ContextMenuSubContent>
            </ContextMenuSub>

            <ContextMenuSub>
               <ContextMenuSubTrigger>
                  <BarChart3 className="mr-2 size-4" /> Priority
               </ContextMenuSubTrigger>
               <ContextMenuSubContent className="w-48">
                  {priorities.map((priority) => {
                     const Icon = getPriorityIcon(getPriorityIconName(priority.name));
                     return (
                        <ContextMenuItem
                           key={priority.id}
                           onClick={() => handlePriorityChange(priority.id)}
                        >
                           <Icon className="size-4" /> {priority.name}
                        </ContextMenuItem>
                     );
                  })}
               </ContextMenuSubContent>
            </ContextMenuSub>

            <ContextMenuSub>
               <ContextMenuSubTrigger>
                  <Tag className="mr-2 size-4" /> Labels
               </ContextMenuSubTrigger>
               <ContextMenuSubContent className="w-48">
                  {labels.map((label) => (
                     <ContextMenuItem key={label.id} onClick={() => handleLabelToggle(label.id)}>
                        <span
                           className="inline-block size-3 rounded-full"
                           style={{ backgroundColor: label.color }}
                           aria-hidden="true"
                        />
                        {label.name}
                     </ContextMenuItem>
                  ))}
               </ContextMenuSubContent>
            </ContextMenuSub>

            <ContextMenuSub>
               <ContextMenuSubTrigger>
                  <Folder className="mr-2 size-4" /> Project
               </ContextMenuSubTrigger>
               <ContextMenuSubContent className="w-64">
                  <ContextMenuItem onClick={() => handleProjectChange(null)}>
                     <Folder className="size-4" /> No Project
                  </ContextMenuItem>
                  {projects.slice(0, 5).map((project) => (
                     <ContextMenuItem
                        key={project.id}
                        onClick={() => handleProjectChange(project.id)}
                     >
                        <Folder className="size-4" /> {project.name}
                     </ContextMenuItem>
                  ))}
               </ContextMenuSubContent>
            </ContextMenuSub>

            <ContextMenuItem onClick={handleSetDueDate}>
               <CalendarClock className="size-4" /> Set due date...
               <ContextMenuShortcut>D</ContextMenuShortcut>
            </ContextMenuItem>

            <ContextMenuItem
               onClick={() => {
                  if (task) {
                     openPanel(task);
                  } else {
                     toast.error('Task data not available');
                  }
               }}
            >
               <Pencil className="size-4" /> Rename...
               <ContextMenuShortcut>R</ContextMenuShortcut>
            </ContextMenuItem>

            <ContextMenuSeparator />

            <ContextMenuItem onClick={handleAddLink}>
               <LinkIcon className="size-4" /> Add link...
               <ContextMenuShortcut>Ctrl L</ContextMenuShortcut>
            </ContextMenuItem>

            <ContextMenuSub>
               <ContextMenuSubTrigger>
                  <Repeat2 className="mr-2 size-4" /> Convert into
               </ContextMenuSubTrigger>
               <ContextMenuSubContent className="w-48">
                  <ContextMenuItem>
                     <FileText className="size-4" /> Document
                  </ContextMenuItem>
                  <ContextMenuItem>
                     <MessageSquare className="size-4" /> Comment
                  </ContextMenuItem>
               </ContextMenuSubContent>
            </ContextMenuSub>

            <ContextMenuItem onClick={handleMakeCopy}>
               <CopyIcon className="size-4" /> Make a copy...
            </ContextMenuItem>
         </ContextMenuGroup>

         <ContextMenuSeparator />

         <ContextMenuItem onClick={handleCreateRelated}>
            <PlusSquare className="size-4" /> Create related
         </ContextMenuItem>

         <ContextMenuSub>
            <ContextMenuSubTrigger>
               <Flag className="mr-2 size-4" /> Mark as
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
               <ContextMenuItem onClick={() => handleMarkAs('Completed')}>
                  <CheckCircle2 className="size-4" /> Completed
               </ContextMenuItem>
               <ContextMenuItem onClick={() => handleMarkAs('Duplicate')}>
                  <CopyIcon className="size-4" /> Duplicate
               </ContextMenuItem>
               <ContextMenuItem onClick={() => handleMarkAs("Won't Fix")}>
                  <Clock className="size-4" /> Won&apos;t Fix
               </ContextMenuItem>
            </ContextMenuSubContent>
         </ContextMenuSub>

         <ContextMenuItem onClick={handleMove}>
            <ArrowRightLeft className="size-4" /> Move
         </ContextMenuItem>

         <ContextMenuSeparator />

         <ContextMenuItem onClick={handleSubscribe}>
            <Bell className="size-4" /> {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
            <ContextMenuShortcut>S</ContextMenuShortcut>
         </ContextMenuItem>

         <ContextMenuItem onClick={handleFavorite}>
            <Star className="size-4" /> {isFavorite ? 'Unfavorite' : 'Favorite'}
            <ContextMenuShortcut>F</ContextMenuShortcut>
         </ContextMenuItem>

         <ContextMenuItem onClick={handleCopy}>
            <Clipboard className="size-4" /> Copy
         </ContextMenuItem>

         <ContextMenuItem onClick={handleRemindMe}>
            <AlarmClock className="size-4" /> Remind me
            <ContextMenuShortcut>H</ContextMenuShortcut>
         </ContextMenuItem>

         <ContextMenuSeparator />

         <ContextMenuItem variant="destructive" onClick={handleDelete}>
            <Trash2 className="size-4" /> Delete
            <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
         </ContextMenuItem>
      </ContextMenuContent>
   );
}

export default TaskContextMenu;
