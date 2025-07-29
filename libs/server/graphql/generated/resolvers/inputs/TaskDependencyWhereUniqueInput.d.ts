import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TaskDependencyTaskIdDependsOnIdCompoundUniqueInput } from "../inputs/TaskDependencyTaskIdDependsOnIdCompoundUniqueInput";
import { TaskDependencyWhereInput } from "../inputs/TaskDependencyWhereInput";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";
export declare class TaskDependencyWhereUniqueInput {
    id?: number | undefined;
    taskId_dependsOnId?: TaskDependencyTaskIdDependsOnIdCompoundUniqueInput | undefined;
    AND?: TaskDependencyWhereInput[] | undefined;
    OR?: TaskDependencyWhereInput[] | undefined;
    NOT?: TaskDependencyWhereInput[] | undefined;
    taskId?: IntFilter | undefined;
    dependsOnId?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    task?: TaskRelationFilter | undefined;
    dependsOn?: TaskRelationFilter | undefined;
}
