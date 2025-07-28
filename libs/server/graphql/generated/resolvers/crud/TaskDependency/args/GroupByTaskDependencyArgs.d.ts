import { TaskDependencyOrderByWithAggregationInput } from "../../../inputs/TaskDependencyOrderByWithAggregationInput";
import { TaskDependencyScalarWhereWithAggregatesInput } from "../../../inputs/TaskDependencyScalarWhereWithAggregatesInput";
import { TaskDependencyWhereInput } from "../../../inputs/TaskDependencyWhereInput";
export declare class GroupByTaskDependencyArgs {
    where?: TaskDependencyWhereInput | undefined;
    orderBy?: TaskDependencyOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "taskId" | "dependsOnId" | "createdAt">;
    having?: TaskDependencyScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
