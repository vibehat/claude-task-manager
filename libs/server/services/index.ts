// Re-export all types
export * from './types';

// Re-export all services
export * from './task.service';
export * from './subtask.service';
export * from './issue.service';
export * from './user.service';
export * from './project.service';
export * from './label.service';

// Service classes
export { TaskService } from './task.service';
export { SubtaskService } from './subtask.service';
export { IssueService } from './issue.service';
export { UserService } from './user.service';
export { ProjectService } from './project.service';
export { LabelService } from './label.service';

// Create a service factory for easy instantiation
import type { PrismaClient } from '../generated/prisma';
import { TaskService } from './task.service';
import { SubtaskService } from './subtask.service';
import { IssueService } from './issue.service';
import { UserService } from './user.service';
import { ProjectService } from './project.service';
import { LabelService } from './label.service';

export interface ServiceContainer {
   task: TaskService;
   subtask: SubtaskService;
   issue: IssueService;
   user: UserService;
   project: ProjectService;
   label: LabelService;
}

export function createServices(prisma: PrismaClient): ServiceContainer {
   return {
      task: new TaskService(prisma),
      subtask: new SubtaskService(prisma),
      issue: new IssueService(prisma),
      user: new UserService(prisma),
      project: new ProjectService(prisma),
      label: new LabelService(prisma),
   };
}

// Default export for convenience
export default createServices;
