import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { SubtaskListRelationFilter } from "../inputs/SubtaskListRelationFilter";
import { TaskDependencyListRelationFilter } from "../inputs/TaskDependencyListRelationFilter";
import { TaskWhereInput } from "../inputs/TaskWhereInput";
export declare class TaskWhereUniqueInput {
    id?: number | undefined;
    AND?: TaskWhereInput[] | undefined;
    OR?: TaskWhereInput[] | undefined;
    NOT?: TaskWhereInput[] | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    details?: StringNullableFilter | undefined;
    testStrategy?: StringNullableFilter | undefined;
    priority?: StringFilter | undefined;
    status?: StringFilter | undefined;
    complexity?: IntNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    subtasks?: SubtaskListRelationFilter | undefined;
    dependencies?: TaskDependencyListRelationFilter | undefined;
    dependents?: TaskDependencyListRelationFilter | undefined;
    issues?: IssueListRelationFilter | undefined;
}
