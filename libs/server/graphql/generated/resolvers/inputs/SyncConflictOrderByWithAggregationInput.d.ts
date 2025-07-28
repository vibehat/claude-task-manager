import { SortOrderInput } from "../inputs/SortOrderInput";
import { SyncConflictCountOrderByAggregateInput } from "../inputs/SyncConflictCountOrderByAggregateInput";
import { SyncConflictMaxOrderByAggregateInput } from "../inputs/SyncConflictMaxOrderByAggregateInput";
import { SyncConflictMinOrderByAggregateInput } from "../inputs/SyncConflictMinOrderByAggregateInput";
export declare class SyncConflictOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    operationType?: "asc" | "desc" | undefined;
    taskId?: "asc" | "desc" | undefined;
    uiVersion?: "asc" | "desc" | undefined;
    cliVersion?: "asc" | "desc" | undefined;
    resolved?: "asc" | "desc" | undefined;
    resolution?: SortOrderInput | undefined;
    resolvedAt?: SortOrderInput | undefined;
    resolvedBy?: SortOrderInput | undefined;
    timestamp?: "asc" | "desc" | undefined;
    _count?: SyncConflictCountOrderByAggregateInput | undefined;
    _max?: SyncConflictMaxOrderByAggregateInput | undefined;
    _min?: SyncConflictMinOrderByAggregateInput | undefined;
}
