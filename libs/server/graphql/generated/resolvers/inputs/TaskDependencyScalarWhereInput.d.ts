import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
export declare class TaskDependencyScalarWhereInput {
    AND?: TaskDependencyScalarWhereInput[] | undefined;
    OR?: TaskDependencyScalarWhereInput[] | undefined;
    NOT?: TaskDependencyScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    taskId?: IntFilter | undefined;
    dependsOnId?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
