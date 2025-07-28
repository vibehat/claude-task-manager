import { LabelCountOrderByAggregateInput } from "../inputs/LabelCountOrderByAggregateInput";
import { LabelMaxOrderByAggregateInput } from "../inputs/LabelMaxOrderByAggregateInput";
import { LabelMinOrderByAggregateInput } from "../inputs/LabelMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class LabelOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    color?: "asc" | "desc" | undefined;
    description?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: LabelCountOrderByAggregateInput | undefined;
    _max?: LabelMaxOrderByAggregateInput | undefined;
    _min?: LabelMinOrderByAggregateInput | undefined;
}
