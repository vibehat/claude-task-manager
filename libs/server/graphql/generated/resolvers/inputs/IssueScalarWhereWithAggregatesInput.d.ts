import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class IssueScalarWhereWithAggregatesInput {
    AND?: IssueScalarWhereWithAggregatesInput[] | undefined;
    OR?: IssueScalarWhereWithAggregatesInput[] | undefined;
    NOT?: IssueScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    identifier?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    statusId?: StringNullableWithAggregatesFilter | undefined;
    priorityId?: StringNullableWithAggregatesFilter | undefined;
    status?: StringNullableWithAggregatesFilter | undefined;
    priority?: StringNullableWithAggregatesFilter | undefined;
    rank?: StringWithAggregatesFilter | undefined;
    cycleId?: StringNullableWithAggregatesFilter | undefined;
    dueDate?: DateTimeNullableWithAggregatesFilter | undefined;
    taskId?: IntNullableWithAggregatesFilter | undefined;
    subtaskId?: StringNullableWithAggregatesFilter | undefined;
    issueType?: StringWithAggregatesFilter | undefined;
    parentIssueId?: StringNullableWithAggregatesFilter | undefined;
    assigneeId?: StringNullableWithAggregatesFilter | undefined;
    projectId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
