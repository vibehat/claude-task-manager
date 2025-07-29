import { TeamProjectCountOrderByAggregateInput } from "../inputs/TeamProjectCountOrderByAggregateInput";
import { TeamProjectMaxOrderByAggregateInput } from "../inputs/TeamProjectMaxOrderByAggregateInput";
import { TeamProjectMinOrderByAggregateInput } from "../inputs/TeamProjectMinOrderByAggregateInput";
export declare class TeamProjectOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    teamId?: "asc" | "desc" | undefined;
    projectId?: "asc" | "desc" | undefined;
    _count?: TeamProjectCountOrderByAggregateInput | undefined;
    _max?: TeamProjectMaxOrderByAggregateInput | undefined;
    _min?: TeamProjectMinOrderByAggregateInput | undefined;
}
