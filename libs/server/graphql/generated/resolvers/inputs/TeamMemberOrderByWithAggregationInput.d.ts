import { TeamMemberCountOrderByAggregateInput } from "../inputs/TeamMemberCountOrderByAggregateInput";
import { TeamMemberMaxOrderByAggregateInput } from "../inputs/TeamMemberMaxOrderByAggregateInput";
import { TeamMemberMinOrderByAggregateInput } from "../inputs/TeamMemberMinOrderByAggregateInput";
export declare class TeamMemberOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    teamId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: TeamMemberCountOrderByAggregateInput | undefined;
    _max?: TeamMemberMaxOrderByAggregateInput | undefined;
    _min?: TeamMemberMinOrderByAggregateInput | undefined;
}
