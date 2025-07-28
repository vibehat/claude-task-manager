import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";
export declare class SubtaskWhereInput {
    AND?: SubtaskWhereInput[] | undefined;
    OR?: SubtaskWhereInput[] | undefined;
    NOT?: SubtaskWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    details?: StringNullableFilter | undefined;
    testStrategy?: StringNullableFilter | undefined;
    status?: StringFilter | undefined;
    parentId?: IntFilter | undefined;
    dependencies?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    parentTask?: TaskRelationFilter | undefined;
    issues?: IssueListRelationFilter | undefined;
}
