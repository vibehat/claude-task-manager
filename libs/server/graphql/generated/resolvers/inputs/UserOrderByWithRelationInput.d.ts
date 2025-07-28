import { IssueOrderByRelationAggregateInput } from "../inputs/IssueOrderByRelationAggregateInput";
import { ProjectOrderByRelationAggregateInput } from "../inputs/ProjectOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TeamMemberOrderByRelationAggregateInput } from "../inputs/TeamMemberOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    avatarUrl?: SortOrderInput | undefined;
    status?: "asc" | "desc" | undefined;
    role?: "asc" | "desc" | undefined;
    joinedDate?: "asc" | "desc" | undefined;
    teamIds?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    assignedIssues?: IssueOrderByRelationAggregateInput | undefined;
    teams?: TeamMemberOrderByRelationAggregateInput | undefined;
    ledProjects?: ProjectOrderByRelationAggregateInput | undefined;
}
