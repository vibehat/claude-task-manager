import { IssueOrderByWithRelationInput } from "../../../inputs/IssueOrderByWithRelationInput";
import { IssueWhereInput } from "../../../inputs/IssueWhereInput";
import { IssueWhereUniqueInput } from "../../../inputs/IssueWhereUniqueInput";
export declare class SubtaskIssuesArgs {
    where?: IssueWhereInput | undefined;
    orderBy?: IssueOrderByWithRelationInput[] | undefined;
    cursor?: IssueWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "identifier" | "title" | "description" | "statusId" | "priorityId" | "status" | "priority" | "rank" | "cycleId" | "dueDate" | "taskId" | "subtaskId" | "issueType" | "parentIssueId" | "assigneeId" | "projectId" | "createdAt" | "updatedAt"> | undefined;
}
