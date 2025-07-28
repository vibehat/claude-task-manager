import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class IssueScalarWhereInput {
    AND?: IssueScalarWhereInput[] | undefined;
    OR?: IssueScalarWhereInput[] | undefined;
    NOT?: IssueScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    identifier?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    statusId?: StringNullableFilter | undefined;
    priorityId?: StringNullableFilter | undefined;
    status?: StringNullableFilter | undefined;
    priority?: StringNullableFilter | undefined;
    rank?: StringFilter | undefined;
    cycleId?: StringNullableFilter | undefined;
    dueDate?: DateTimeNullableFilter | undefined;
    taskId?: IntNullableFilter | undefined;
    subtaskId?: StringNullableFilter | undefined;
    issueType?: StringFilter | undefined;
    parentIssueId?: StringNullableFilter | undefined;
    assigneeId?: StringNullableFilter | undefined;
    projectId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
