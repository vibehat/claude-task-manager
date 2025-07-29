import { TeamOrderByWithRelationInput } from "../inputs/TeamOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class TeamMemberOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    teamId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    team?: TeamOrderByWithRelationInput | undefined;
    user?: UserOrderByWithRelationInput | undefined;
}
