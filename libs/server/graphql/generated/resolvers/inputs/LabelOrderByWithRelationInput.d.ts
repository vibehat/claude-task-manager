import { IssueLabelOrderByRelationAggregateInput } from "../inputs/IssueLabelOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class LabelOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    color?: "asc" | "desc" | undefined;
    description?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    issues?: IssueLabelOrderByRelationAggregateInput | undefined;
}
