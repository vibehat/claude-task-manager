import { IssueOrderByRelationAggregateInput } from "../inputs/IssueOrderByRelationAggregateInput";
export declare class IssuePriorityOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    iconName?: "asc" | "desc" | undefined;
    order?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    issues?: IssueOrderByRelationAggregateInput | undefined;
}
