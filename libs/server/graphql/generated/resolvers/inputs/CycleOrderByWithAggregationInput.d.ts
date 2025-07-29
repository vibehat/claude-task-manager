import { CycleAvgOrderByAggregateInput } from "../inputs/CycleAvgOrderByAggregateInput";
import { CycleCountOrderByAggregateInput } from "../inputs/CycleCountOrderByAggregateInput";
import { CycleMaxOrderByAggregateInput } from "../inputs/CycleMaxOrderByAggregateInput";
import { CycleMinOrderByAggregateInput } from "../inputs/CycleMinOrderByAggregateInput";
import { CycleSumOrderByAggregateInput } from "../inputs/CycleSumOrderByAggregateInput";
export declare class CycleOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    number?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    teamId?: "asc" | "desc" | undefined;
    startDate?: "asc" | "desc" | undefined;
    endDate?: "asc" | "desc" | undefined;
    progress?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: CycleCountOrderByAggregateInput | undefined;
    _avg?: CycleAvgOrderByAggregateInput | undefined;
    _max?: CycleMaxOrderByAggregateInput | undefined;
    _min?: CycleMinOrderByAggregateInput | undefined;
    _sum?: CycleSumOrderByAggregateInput | undefined;
}
