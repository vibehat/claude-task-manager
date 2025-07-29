import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { SubtaskListRelationFilter } from "../inputs/SubtaskListRelationFilter";
import { TaskDependencyListRelationFilter } from "../inputs/TaskDependencyListRelationFilter";
export declare class TaskWhereInput {
    AND?: TaskWhereInput[] | undefined;
    OR?: TaskWhereInput[] | undefined;
    NOT?: TaskWhereInput[] | undefined;
    id?: IntFilter | undefined;
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
