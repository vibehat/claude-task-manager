import { TaskDependencyAvgOrderByAggregateInput } from "../inputs/TaskDependencyAvgOrderByAggregateInput";
import { TaskDependencyCountOrderByAggregateInput } from "../inputs/TaskDependencyCountOrderByAggregateInput";
import { TaskDependencyMaxOrderByAggregateInput } from "../inputs/TaskDependencyMaxOrderByAggregateInput";
import { TaskDependencyMinOrderByAggregateInput } from "../inputs/TaskDependencyMinOrderByAggregateInput";
import { TaskDependencySumOrderByAggregateInput } from "../inputs/TaskDependencySumOrderByAggregateInput";
export declare class TaskDependencyOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    taskId?: "asc" | "desc" | undefined;
    dependsOnId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: TaskDependencyCountOrderByAggregateInput | undefined;
    _avg?: TaskDependencyAvgOrderByAggregateInput | undefined;
    _max?: TaskDependencyMaxOrderByAggregateInput | undefined;
    _min?: TaskDependencyMinOrderByAggregateInput | undefined;
    _sum?: TaskDependencySumOrderByAggregateInput | undefined;
}
