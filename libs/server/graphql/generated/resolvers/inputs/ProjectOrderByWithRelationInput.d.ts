import { IssueOrderByRelationAggregateInput } from "../inputs/IssueOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TeamProjectOrderByRelationAggregateInput } from "../inputs/TeamProjectOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ProjectOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: SortOrderInput | undefined;
    color?: SortOrderInput | undefined;
    identifier?: SortOrderInput | undefined;
    icon?: SortOrderInput | undefined;
    percentComplete?: "asc" | "desc" | undefined;
    startDate?: SortOrderInput | undefined;
    health?: "asc" | "desc" | undefined;
    leadId?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    issues?: IssueOrderByRelationAggregateInput | undefined;
    lead?: UserOrderByWithRelationInput | undefined;
    teams?: TeamProjectOrderByRelationAggregateInput | undefined;
}
