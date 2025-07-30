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
import { useIssueSidePanelStore } from '@/store/issueSidePanelStore';
import type { GetIssuesQuery } from '@/libs/client/graphql-client/generated';
import {
   useGetIssueStatusesQuery,
   useGetPrioritiesQuery,
   useGetUsersQuery,
   useGetLabelsQuery,
   useGetProjectsQuery,
   SortOrder,
} from '@/libs/client/graphql-client/generated';
import { getPriorityIcon } from '../../constants/NoPriorityIcon';
import { toast } from 'sonner';
import { DEFAULT_CONFIG } from '@/libs/config/defaults';

type IssueFromQuery = GetIssuesQuery['issues'][0];

interface IssueContextMenuProps {
   issueId?: string;
   issue?: IssueFromQuery;
}

export function IssueContextMenu({ issueId, issue }: IssueContextMenuProps): React.JSX.Element {
   const [isSubscribed, setIsSubscribed] = useState(false);
   const [isFavorite, setIsFavorite] = useState(false);
   const { openPanel } = useIssueSidePanelStore();

   // Fetch data from GraphQL
   const { data: statusesData } = useGetIssueStatusesQuery();
   const { data: prioritiesData } = useGetPrioritiesQuery({
      variables: { orderBy: [{ order: SortOrder.Asc }] },
   });
   const { data: usersData } = useGetUsersQuery();
   const { data: labelsData } = useGetLabelsQuery();
   const { data: projectsData } = useGetProjectsQuery();

   const statuses = statusesData?.issueStatuses || [];
   const priorities = prioritiesData?.issuePriorities || [];
   const users = usersData?.users || [];
   const labels = labelsData?.labels || [];
   const projects = projectsData?.projects || [];

   const handleStatusChange = (statusId: string): void => {
      if (!issueId) return;
      const newStatus = statuses.find((s) => s.id === statusId);
      if (newStatus) {
         // TODO: Implement with mutation hook
         // updateIssueStatus(issueId, newStatus);
         toast.success(`Status updated to ${newStatus.name}`);
      }
   };

   const handlePriorityChange = (priorityId: string): void => {
      if (!issueId) return;
      const newPriority = priorities.find((p) => p.id === priorityId);
      if (newPriority) {
         // TODO: Implement with mutation hook
         // updateIssuePriority(issueId, newPriority);
         toast.success(`Priority updated to ${newPriority.name}`);
      }
   };

   const handleAssigneeChange = (userId: string | null): void => {
      if (!issueId) return;
      const newAssignee = userId ? (users.find((u) => u.id === userId) ?? null) : null;
      // TODO: Implement with mutation hook
      // updateIssueAssignee(issueId, newAssignee);
      toast.success(newAssignee ? `Assigned to ${newAssignee.name}` : 'Unassigned');
   };

   const handleLabelToggle = (labelId: string): void => {
      if (!issueId) return;
      // TODO: Implement with mutation hook and issue fetch
      // const issue = getIssueById(issueId);
      const label = labels.find((l) => l.id === labelId);

      if (!label) return;

      // TODO: Get current issue labels and implement toggle logic
      // const hasLabel = issue.labels.some((l) => l.id === labelId);

      // if (hasLabel) {
      //    removeIssueLabel(issueId, labelId);
      //    toast.success(`Removed label: ${label.name}`);
      // } else {
      //    addIssueLabel(issueId, label);
      toast.success(`Added label: ${label.name}`);
      // }
   };

   const handleProjectChange = (projectId: string | null): void => {
      if (!issueId) return;
      const newProject = projectId ? projects.find((p) => p.id === projectId) : undefined;
      // TODO: Implement with mutation hook
      // updateIssueProject(issueId, newProject);
      toast.success(newProject ? `Project set to ${newProject.name}` : 'Project removed');
   };

   const handleSetDueDate = (): void => {
      if (!issueId) return;
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 7);
      // TODO: Implement with mutation hook
      // updateIssue(issueId, { dueDate: dueDate.toISOString() });
      toast.success('Due date set to 7 days from now');
   };

   const handleAddLink = (): void => {
      toast.success('Link added');
   };

   const handleMakeCopy = (): void => {
      toast.success('Issue copied');
   };

   const handleCreateRelated = (): void => {
      toast.success('Related issue created');
   };

   const handleMarkAs = (type: string): void => {
      toast.success(`Marked as ${type}`);
   };

   const handleMove = (): void => {
      toast.success('Issue moved');
   };

   const handleSubscribe = (): void => {
      setIsSubscribed(!isSubscribed);
      toast.success(isSubscribed ? 'Unsubscribed from issue' : 'Subscribed to issue');
   };

   const handleFavorite = (): void => {
      setIsFavorite(!isFavorite);
      toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
   };

   const handleCopy = (): void => {
      if (!issueId) return;
      // TODO: Implement with issue fetch
      // const issue = getIssueById(issueId);
      // if (issue) {
      //    navigator.clipboard.writeText(issue.title);
      toast.success('Copied to clipboard');
      // }
   };

   const handleRemindMe = (): void => {
      toast.success('Reminder set');
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
                     const Icon = getPriorityIcon(priority.iconName);
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
                  if (issue) {
                     openPanel(issue);
                  } else {
                     toast.error('Issue data not available');
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

         <ContextMenuItem variant="destructive">
            <Trash2 className="size-4" /> Delete...
            <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
         </ContextMenuItem>
      </ContextMenuContent>
   );
}

export default IssueContextMenu;
