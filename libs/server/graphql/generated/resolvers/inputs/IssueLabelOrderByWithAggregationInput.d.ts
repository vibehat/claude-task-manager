import { IssueLabelCountOrderByAggregateInput } from "../inputs/IssueLabelCountOrderByAggregateInput";
import { IssueLabelMaxOrderByAggregateInput } from "../inputs/IssueLabelMaxOrderByAggregateInput";
import { IssueLabelMinOrderByAggregateInput } from "../inputs/IssueLabelMinOrderByAggregateInput";
export declare class IssueLabelOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    issueId?: "asc" | "desc" | undefined;
    labelId?: "asc" | "desc" | undefined;
    _count?: IssueLabelCountOrderByAggregateInput | undefined;
    _max?: IssueLabelMaxOrderByAggregateInput | undefined;
    _min?: IssueLabelMinOrderByAggregateInput | undefined;
}
