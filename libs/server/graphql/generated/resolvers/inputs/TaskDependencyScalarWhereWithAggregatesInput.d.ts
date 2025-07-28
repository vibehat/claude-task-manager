import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
export declare class TaskDependencyScalarWhereWithAggregatesInput {
    AND?: TaskDependencyScalarWhereWithAggregatesInput[] | undefined;
    OR?: TaskDependencyScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TaskDependencyScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    taskId?: IntWithAggregatesFilter | undefined;
    dependsOnId?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
