import { SortOrderInput } from "../inputs/SortOrderInput";
import { SubtaskAvgOrderByAggregateInput } from "../inputs/SubtaskAvgOrderByAggregateInput";
import { SubtaskCountOrderByAggregateInput } from "../inputs/SubtaskCountOrderByAggregateInput";
import { SubtaskMaxOrderByAggregateInput } from "../inputs/SubtaskMaxOrderByAggregateInput";
import { SubtaskMinOrderByAggregateInput } from "../inputs/SubtaskMinOrderByAggregateInput";
import { SubtaskSumOrderByAggregateInput } from "../inputs/SubtaskSumOrderByAggregateInput";
export declare class SubtaskOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    details?: SortOrderInput | undefined;
    testStrategy?: SortOrderInput | undefined;
    status?: "asc" | "desc" | undefined;
    parentId?: "asc" | "desc" | undefined;
    dependencies?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: SubtaskCountOrderByAggregateInput | undefined;
    _avg?: SubtaskAvgOrderByAggregateInput | undefined;
    _max?: SubtaskMaxOrderByAggregateInput | undefined;
    _min?: SubtaskMinOrderByAggregateInput | undefined;
    _sum?: SubtaskSumOrderByAggregateInput | undefined;
}
