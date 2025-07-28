import { IssueOrderByWithAggregationInput } from "../../../inputs/IssueOrderByWithAggregationInput";
import { IssueScalarWhereWithAggregatesInput } from "../../../inputs/IssueScalarWhereWithAggregatesInput";
import { IssueWhereInput } from "../../../inputs/IssueWhereInput";
export declare class GroupByIssueArgs {
    where?: IssueWhereInput | undefined;
    orderBy?: IssueOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "identifier" | "title" | "description" | "statusId" | "priorityId" | "status" | "priority" | "rank" | "cycleId" | "dueDate" | "taskId" | "subtaskId" | "issueType" | "parentIssueId" | "assigneeId" | "projectId" | "createdAt" | "updatedAt">;
    having?: IssueScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
