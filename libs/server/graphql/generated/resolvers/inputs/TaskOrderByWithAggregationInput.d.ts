import { SortOrderInput } from "../inputs/SortOrderInput";
import { TaskAvgOrderByAggregateInput } from "../inputs/TaskAvgOrderByAggregateInput";
import { TaskCountOrderByAggregateInput } from "../inputs/TaskCountOrderByAggregateInput";
import { TaskMaxOrderByAggregateInput } from "../inputs/TaskMaxOrderByAggregateInput";
import { TaskMinOrderByAggregateInput } from "../inputs/TaskMinOrderByAggregateInput";
import { TaskSumOrderByAggregateInput } from "../inputs/TaskSumOrderByAggregateInput";
export declare class TaskOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    details?: SortOrderInput | undefined;
    testStrategy?: SortOrderInput | undefined;
    priority?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    complexity?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: TaskCountOrderByAggregateInput | undefined;
    _avg?: TaskAvgOrderByAggregateInput | undefined;
    _max?: TaskMaxOrderByAggregateInput | undefined;
    _min?: TaskMinOrderByAggregateInput | undefined;
    _sum?: TaskSumOrderByAggregateInput | undefined;
}
