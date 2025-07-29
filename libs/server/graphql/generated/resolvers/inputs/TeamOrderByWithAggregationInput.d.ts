import { TeamCountOrderByAggregateInput } from "../inputs/TeamCountOrderByAggregateInput";
import { TeamMaxOrderByAggregateInput } from "../inputs/TeamMaxOrderByAggregateInput";
import { TeamMinOrderByAggregateInput } from "../inputs/TeamMinOrderByAggregateInput";
export declare class TeamOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    icon?: "asc" | "desc" | undefined;
    joined?: "asc" | "desc" | undefined;
    color?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: TeamCountOrderByAggregateInput | undefined;
    _max?: TeamMaxOrderByAggregateInput | undefined;
    _min?: TeamMinOrderByAggregateInput | undefined;
}
