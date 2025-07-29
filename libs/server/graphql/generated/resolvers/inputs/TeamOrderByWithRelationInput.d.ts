import { CycleOrderByRelationAggregateInput } from "../inputs/CycleOrderByRelationAggregateInput";
import { TeamMemberOrderByRelationAggregateInput } from "../inputs/TeamMemberOrderByRelationAggregateInput";
import { TeamProjectOrderByRelationAggregateInput } from "../inputs/TeamProjectOrderByRelationAggregateInput";
export declare class TeamOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    icon?: "asc" | "desc" | undefined;
    joined?: "asc" | "desc" | undefined;
    color?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    members?: TeamMemberOrderByRelationAggregateInput | undefined;
    projects?: TeamProjectOrderByRelationAggregateInput | undefined;
    cycles?: CycleOrderByRelationAggregateInput | undefined;
}
