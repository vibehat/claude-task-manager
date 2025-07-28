import { IssuePriorityAvgOrderByAggregateInput } from "../inputs/IssuePriorityAvgOrderByAggregateInput";
import { IssuePriorityCountOrderByAggregateInput } from "../inputs/IssuePriorityCountOrderByAggregateInput";
import { IssuePriorityMaxOrderByAggregateInput } from "../inputs/IssuePriorityMaxOrderByAggregateInput";
import { IssuePriorityMinOrderByAggregateInput } from "../inputs/IssuePriorityMinOrderByAggregateInput";
import { IssuePrioritySumOrderByAggregateInput } from "../inputs/IssuePrioritySumOrderByAggregateInput";
export declare class IssuePriorityOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    iconName?: "asc" | "desc" | undefined;
    order?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: IssuePriorityCountOrderByAggregateInput | undefined;
    _avg?: IssuePriorityAvgOrderByAggregateInput | undefined;
    _max?: IssuePriorityMaxOrderByAggregateInput | undefined;
    _min?: IssuePriorityMinOrderByAggregateInput | undefined;
    _sum?: IssuePrioritySumOrderByAggregateInput | undefined;
}
