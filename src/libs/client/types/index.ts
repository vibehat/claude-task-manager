// Re-export all types from dataModels for easy imports
export type {
   User,
   Project,
   Label,
   IssueStatus,
   IssuePriority,
   Issue,
   SubIssue,
} from './dataModels';

// Import types for legacy compatibility
import type { User, Project, Label, IssueStatus, IssuePriority, Issue } from './dataModels';

// Legacy type aliases for compatibility
export type GetIssuesQuery = {
   issues: Issue[];
};

export type GetIssueStatusesQuery = {
   issueStatuses: IssueStatus[];
};

export type IssueDetailsFragment = Issue & {
   subIssues?: Issue[];
   assignee?: User;
   project?: Project;
   labels?: Label[];
   priority?: IssuePriority;
   status?: IssueStatus;
};

// Where clause types for filtering
export interface IssueWhereInput {
   parentIssueId?: { equals: string | null };
   statusId?: { in: string[]; equals?: string };
   assigneeId?: { in: string[]; equals?: string };
   priorityId?: { in: string[]; equals?: string };
   projectId?: { in: string[]; equals?: string };
   labels?: { some: { labelId: { in: string[] } } };
}
