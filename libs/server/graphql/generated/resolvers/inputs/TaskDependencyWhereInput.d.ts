import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";
export declare class TaskDependencyWhereInput {
    AND?: TaskDependencyWhereInput[] | undefined;
    OR?: TaskDependencyWhereInput[] | undefined;
    NOT?: TaskDependencyWhereInput[] | undefined;
    id?: IntFilter | undefined;
    taskId?: IntFilter | undefined;
    dependsOnId?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    task?: TaskRelationFilter | undefined;
    dependsOn?: TaskRelationFilter | undefined;
}
