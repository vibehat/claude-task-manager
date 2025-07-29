import { IssueOrderByRelationAggregateInput } from "../inputs/IssueOrderByRelationAggregateInput";
import { TeamOrderByWithRelationInput } from "../inputs/TeamOrderByWithRelationInput";
export declare class CycleOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    number?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    teamId?: "asc" | "desc" | undefined;
    startDate?: "asc" | "desc" | undefined;
    endDate?: "asc" | "desc" | undefined;
    progress?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    team?: TeamOrderByWithRelationInput | undefined;
    issues?: IssueOrderByRelationAggregateInput | undefined;
}
