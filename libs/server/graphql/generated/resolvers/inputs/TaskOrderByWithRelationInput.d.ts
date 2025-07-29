import { IssueOrderByRelationAggregateInput } from "../inputs/IssueOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SubtaskOrderByRelationAggregateInput } from "../inputs/SubtaskOrderByRelationAggregateInput";
import { TaskDependencyOrderByRelationAggregateInput } from "../inputs/TaskDependencyOrderByRelationAggregateInput";
export declare class TaskOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    details?: SortOrderInput | undefined;
    testStrategy?: SortOrderInput | undefined;
    priority?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    complexity?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    subtasks?: SubtaskOrderByRelationAggregateInput | undefined;
    dependencies?: TaskDependencyOrderByRelationAggregateInput | undefined;
    dependents?: TaskDependencyOrderByRelationAggregateInput | undefined;
    issues?: IssueOrderByRelationAggregateInput | undefined;
}
