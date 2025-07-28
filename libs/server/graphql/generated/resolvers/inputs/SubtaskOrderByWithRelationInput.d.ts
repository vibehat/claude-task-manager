import { IssueOrderByRelationAggregateInput } from "../inputs/IssueOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TaskOrderByWithRelationInput } from "../inputs/TaskOrderByWithRelationInput";
export declare class SubtaskOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    details?: SortOrderInput | undefined;
    testStrategy?: SortOrderInput | undefined;
    status?: "asc" | "desc" | undefined;
    parentId?: "asc" | "desc" | undefined;
    dependencies?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    parentTask?: TaskOrderByWithRelationInput | undefined;
    issues?: IssueOrderByRelationAggregateInput | undefined;
}
