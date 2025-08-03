import type { User, Tag, Label, TaskStatus, TaskPriority } from '../types/dataModels';

export const DEFAULT_USER: User = {
   id: 'user-1',
   name: 'You',
   email: 'user@example.com',
   avatarUrl: '',
   createdAt: new Date(),
   updatedAt: new Date(),
};

export const DEFAULT_TAG: Tag = {
   id: 'tag-personal',
   name: 'Personal Tasks',
   description: 'Individual task management',
   teamId: 'team-individual',
   createdAt: new Date(),
   updatedAt: new Date(),
};

export const DEFAULT_LABEL: Label = {
   id: 'label-taskmaster',
   name: 'TaskMaster',
   color: '#3498db',
   description: 'Tasks from TaskMaster CLI',
   createdAt: new Date(),
   updatedAt: new Date(),
};

export const DEFAULT_STATUSES: TaskStatus[] = [
   {
      id: 'pending',
      name: 'Pending',
      color: '#3498db',
      order: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
      id: 'in-progress',
      name: 'In Progress',
      color: '#f39c12',
      order: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
      id: 'review',
      name: 'Review',
      color: '#9b59b6',
      order: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
      id: 'done',
      name: 'Done',
      color: '#2ecc71',
      order: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
      id: 'deferred',
      name: 'Deferred',
      color: '#95a5a6',
      order: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
      id: 'cancelled',
      name: 'Cancelled',
      color: '#e74c3c',
      order: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
   },
];

export const DEFAULT_PRIORITIES: TaskPriority[] = [
   {
      id: 'priority-0',
      name: 'no_priority',
      value: 0,
      color: '#95a5a6',
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
      id: 'priority-1',
      name: 'urgent',
      value: 4,
      color: '#e74c3c',
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
      id: 'priority-2',
      name: 'high',
      value: 3,
      color: '#e67e22',
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
      id: 'priority-3',
      name: 'medium',
      value: 2,
      color: '#f39c12',
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
      id: 'priority-4',
      name: 'low',
      value: 1,
      color: '#3498db',
      createdAt: new Date(),
      updatedAt: new Date(),
   },
];

export const PRIORITY_MAPPING: Record<string, string> = {
   urgent: 'priority-1',
   high: 'priority-2',
   medium: 'priority-3',
   low: 'priority-4',
};
