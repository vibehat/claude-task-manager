export declare class IssueCreateManyCycleInput {
    id?: string | undefined;
    identifier: string;
    title: string;
    description: string;
    statusId?: string | undefined;
    priorityId?: string | undefined;
    status?: string | undefined;
    priority?: string | undefined;
    rank: string;
    dueDate?: Date | undefined;
    taskId?: number | undefined;
    subtaskId?: string | undefined;
    issueType: string;
    parentIssueId?: string | undefined;
    assigneeId?: string | undefined;
    projectId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
